const Problem = require('../models/Problem');

/**
 * @route   GET /api/problems
 * @desc    Get all problems with search, filtering, sorting & pagination
 * @access  Public
 */
const getProblems = async (req, res, next) => {
  try {
    const {
      search,
      category,
      difficulty,
      tag,
      sort = 'title',
      order = 'asc',
      page = 1,
      limit = 20,
    } = req.query;

    const query = {};

    // Search filter (title or tags)
    if (search) {
      query.$or = [
        { title: { $regex: search.trim(), $options: 'i' } },
        { tags: { $regex: search.trim(), $options: 'i' } },
      ];
    }

    // Category filter
    if (category && category !== 'All') {
      query.category = category;
    }

    // Difficulty filter
    if (difficulty && difficulty !== 'All') {
      query.difficulty = difficulty.toUpperCase();
    }

    // Tag filter
    if (tag) {
      query.tags = tag;
    }

    // Sort order
    let sortOptions = {};
    if (sort === 'difficulty') {
      sortOptions = { difficulty: order === 'desc' ? -1 : 1, title: 1 };
    } else if (sort === 'newest') {
      sortOptions = { createdAt: -1 };
    } else if (sort === 'category') {
      sortOptions = { category: 1, title: 1 };
    } else {
      sortOptions = { [sort]: order === 'desc' ? -1 : 1 };
    }

    const pageNumber = Math.max(1, parseInt(page, 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(limit, 10)));
    const skip = (pageNumber - 1) * pageSize;

    // Execute query (hiddenTestCases is excluded by default model schema)
    const [problems, totalProblems] = await Promise.all([
      Problem.find(query)
        .select('-starterCode.java -starterCode.cpp -starterCode.c') // Light payload for listing
        .sort(sortOptions)
        .skip(skip)
        .limit(pageSize),
      Problem.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        problems,
        pagination: {
          total: totalProblems,
          page: pageNumber,
          pages: Math.ceil(totalProblems / pageSize),
          limit: pageSize,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/problems/categories
 * @desc    Get summary list of all categories with problem count
 * @access  Public
 */
const getCategoriesSummary = async (req, res, next) => {
  try {
    const summary = await Problem.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          difficulties: {
            $push: '$difficulty',
          },
        },
      },
      {
        $project: {
          category: '$_id',
          count: 1,
          easyCount: {
            $size: {
              $filter: { input: '$difficulties', as: 'd', cond: { $eq: ['$$d', 'EASY'] } },
            },
          },
          mediumCount: {
            $size: {
              $filter: { input: '$difficulties', as: 'd', cond: { $eq: ['$$d', 'MEDIUM'] } },
            },
          },
          hardCount: {
            $size: {
              $filter: { input: '$difficulties', as: 'd', cond: { $eq: ['$$d', 'HARD'] } },
            },
          },
        },
      },
      { $sort: { category: 1 } },
    ]);

    return res.status(200).json({
      success: true,
      data: {
        categories: summary,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/problems/category/:category
 * @desc    Get problems by category
 * @access  Public
 */
const getProblemsByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const problems = await Problem.find({
      category: { $regex: new RegExp(`^${category}$`, 'i') },
    }).sort({ difficulty: 1, title: 1 });

    return res.status(200).json({
      success: true,
      data: {
        count: problems.length,
        category,
        problems,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/problems/:slugOrId
 * @desc    Get single problem by slug or ID (Never returns hiddenTestCases)
 * @access  Public
 */
const getProblemBySlugOrId = async (req, res, next) => {
  try {
    const { slugOrId } = req.params;
    let query = { slug: slugOrId.toLowerCase() };

    // If param is a valid MongoDB ObjectId, search by ID or slug
    if (slugOrId.match(/^[0-9a-fA-F]{24}$/)) {
      query = { $or: [{ _id: slugOrId }, { slug: slugOrId.toLowerCase() }] };
    }

    const problem = await Problem.findOne(query);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: `Problem not found for identifier: ${slugOrId}`,
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        problem,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/problems
 * @desc    Create new problem (Admin only)
 * @access  Private / Admin
 */
const createProblem = async (req, res, next) => {
  try {
    const {
      title,
      slug,
      difficulty,
      category,
      description,
      constraints,
      examples,
      starterCode,
      supportedLanguages,
      visibleTestCases,
      hiddenTestCases,
      tags,
    } = req.body;

    const problemSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const problem = await Problem.create({
      title,
      slug: problemSlug,
      difficulty: difficulty ? difficulty.toUpperCase() : 'MEDIUM',
      category,
      description,
      constraints: constraints || [],
      examples: examples || [],
      starterCode: starterCode || {},
      supportedLanguages: supportedLanguages || ['javascript', 'python', 'java', 'cpp', 'c'],
      visibleTestCases: visibleTestCases || [],
      hiddenTestCases: hiddenTestCases || [],
      tags: tags || [],
      createdBy: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: 'Problem created successfully',
      data: {
        problem,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   PUT /api/problems/:id
 * @desc    Update problem (Admin only)
 * @access  Private / Admin
 */
const updateProblem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Problem updated successfully',
      data: {
        problem,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   DELETE /api/problems/:id
 * @desc    Delete problem (Admin only)
 * @access  Private / Admin
 */
const deleteProblem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findByIdAndDelete(id);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Problem deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/problems/:id/test-cases
 * @desc    Get visible and hidden test cases for inspection (Admin only)
 * @access  Private / Admin
 */
const getProblemTestCases = async (req, res, next) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findById(id).select('+hiddenTestCases');

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        problemId: problem._id,
        title: problem.title,
        visibleTestCases: problem.visibleTestCases,
        hiddenTestCases: problem.hiddenTestCases,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProblems,
  getCategoriesSummary,
  getProblemsByCategory,
  getProblemBySlugOrId,
  createProblem,
  updateProblem,
  deleteProblem,
  getProblemTestCases,
};
