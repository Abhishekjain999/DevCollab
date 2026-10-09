import api from './api';
import { initialProblems, categoryCounts } from '../data/problemsData';

/**
 * In-memory fallback filtering for problem catalog
 * Ensures problems are always available even when backend is offline or during preview deployments.
 */
const filterFallbackProblems = (params = {}) => {
  let list = [...initialProblems];

  if (params.category && params.category !== 'ALL') {
    list = list.filter(
      (p) => p.category?.toLowerCase() === params.category.toLowerCase()
    );
  }

  if (params.difficulty && params.difficulty !== 'ALL') {
    list = list.filter(
      (p) => p.difficulty?.toUpperCase() === params.difficulty.toUpperCase()
    );
  }

  if (params.search && params.search.trim()) {
    const term = params.search.toLowerCase().trim();
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.slug.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }

  const page = parseInt(params.page, 10) || 1;
  const limit = parseInt(params.limit, 10) || 100;
  const total = list.length;
  const paginated = list.slice((page - 1) * limit, page * limit);

  return {
    success: true,
    count: paginated.length,
    total,
    page,
    totalPages: Math.ceil(total / limit) || 1,
    data: {
      problems: paginated,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit) || 1,
      },
    },
  };
};

const problemService = {
  /**
   * Get problems with filters, search, and pagination
   */
  getProblems: async (params = {}) => {
    try {
      const response = await api.get('/problems', { params });
      if (response.data && response.data.success && response.data.data?.problems?.length > 0) {
        return response.data;
      }
      return filterFallbackProblems(params);
    } catch (err) {
      console.warn('[problemService] API unavailable, using embedded 70+ DSA problem catalog:', err.message);
      return filterFallbackProblems(params);
    }
  },

  /**
   * Get single problem by slug or ID
   */
  getProblemBySlugOrId: async (slugOrId) => {
    try {
      const response = await api.get(`/problems/${slugOrId}`);
      if (response.data && response.data.success && response.data.data?.problem) {
        return response.data;
      }
    } catch (err) {
      console.warn('[problemService] API unavailable, locating problem in embedded catalog:', err.message);
    }

    const problem = initialProblems.find(
      (p) =>
        p.slug === slugOrId ||
        p._id === slugOrId ||
        p.title.toLowerCase() === slugOrId?.toLowerCase()
    );

    if (problem) {
      return {
        success: true,
        data: { problem },
      };
    }

    throw new Error('Problem not found');
  },

  /**
   * Get category summary breakdown
   */
  getCategories: async () => {
    try {
      const response = await api.get('/problems/categories');
      if (response.data && response.data.success) {
        return response.data;
      }
    } catch {
      // fallback
    }
    return {
      success: true,
      data: { categories: categoryCounts },
    };
  },

  /**
   * Get problems by category
   */
  getProblemsByCategory: async (category) => {
    return problemService.getProblems({ category, limit: 100 });
  },

  /**
   * Create problem (Admin)
   */
  createProblem: async (problemData) => {
    const response = await api.post('/problems', problemData);
    return response.data;
  },

  /**
   * Update problem (Admin)
   */
  updateProblem: async (id, problemData) => {
    const response = await api.put(`/problems/${id}`, problemData);
    return response.data;
  },

  /**
   * Delete problem (Admin)
   */
  deleteProblem: async (id) => {
    const response = await api.delete(`/problems/${id}`);
    return response.data;
  },

  /**
   * Get visible and hidden test cases (Admin)
   */
  getTestCases: async (id) => {
    const response = await api.get(`/problems/${id}/test-cases`);
    return response.data;
  },
};

export default problemService;
