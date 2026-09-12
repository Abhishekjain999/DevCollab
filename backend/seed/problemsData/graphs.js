/**
 * GRAPHS DSA Problem Set (10 Problems)
 */
module.exports = [
  {
    title: 'Number of Islands',
    slug: 'number-of-islands',
    difficulty: 'MEDIUM',
    category: 'Graphs',
    description: 'Given an `m x n` 2D binary grid `grid` which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.',
    constraints: [
      'm == grid.length',
      'n == grid[i].length',
      '1 <= m, n <= 300',
      'grid[i][j] is \'0\' or \'1\'.',
    ],
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: '1',
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: '3',
      },
    ],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Your solution here
}`,
      python: `def numIslands(grid):
    pass`,
      java: `class Solution {
    public int numIslands(char[][] grid) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        return 0;
    }
};`,
      c: `int numIslands(char** grid, int gridSize, int* gridColSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      {
        input: {
          grid: [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
          ],
        },
        expectedOutput: 1,
      },
      {
        input: {
          grid: [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
          ],
        },
        expectedOutput: 3,
      },
    ],
    hiddenTestCases: [
      { input: { grid: [['1']] }, expectedOutput: 1 },
      { input: { grid: [['0']] }, expectedOutput: 0 },
      { input: { grid: [['1', '0', '1'], ['0', '1', '0'], ['1', '0', '1']] }, expectedOutput: 5 },
    ],
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union Find', 'Matrix'],
  },
  {
    title: 'Clone Graph',
    slug: 'clone-graph',
    difficulty: 'MEDIUM',
    category: 'Graphs',
    description: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.\n\nEach node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.',
    constraints: [
      'The number of nodes in the graph is in the range [0, 100].',
      '1 <= Node.val <= 100',
      'Node.val is unique for each node.',
      'There are no repeated edges and no self-loops in the graph.',
      'The Graph is connected and all nodes can be visited starting from the given node.',
    ],
    examples: [
      {
        input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
        output: '[[2,4],[1,3],[2,4],[1,3]]',
      },
      {
        input: 'adjList = [[]]',
        output: '[[]]',
      },
    ],
    starterCode: {
      javascript: `function cloneGraph(node) {
  // Your solution here
}`,
      python: `def cloneGraph(node):
    pass`,
      java: `class Solution {
    public Node cloneGraph(Node node) {
        return null;
    }
}`,
      cpp: `class Solution {
public:
    Node* cloneGraph(Node* node) {
        return nullptr;
    }
};`,
      c: `struct Node* cloneGraph(struct Node* s) {
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { adjList: [[2, 4], [1, 3], [2, 4], [1, 3]] }, expectedOutput: [[2, 4], [1, 3], [2, 4], [1, 3]] },
      { input: { adjList: [[]] }, expectedOutput: [[]] },
    ],
    hiddenTestCases: [
      { input: { adjList: [] }, expectedOutput: [] },
      { input: { adjList: [[2], [1]] }, expectedOutput: [[2], [1]] },
    ],
    tags: ['Hash Table', 'Depth-First Search', 'Breadth-First Search', 'Graph'],
  },
  {
    title: 'Course Schedule',
    slug: 'course-schedule',
    difficulty: 'MEDIUM',
    category: 'Graphs',
    description: 'There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you must take course `b_i` first if you want to take course `a_i`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.',
    constraints: [
      '1 <= numCourses <= 2000',
      '0 <= prerequisites.length <= 5000',
      'prerequisites[i].length == 2',
      '0 <= a_i, b_i < numCourses',
      'All the pairs prerequisites[i] are unique.',
    ],
    examples: [
      {
        input: 'numCourses = 2, prerequisites = [[1,0]]',
        output: 'true',
        explanation: 'There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.',
      },
      {
        input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]',
        output: 'false',
        explanation: 'To take course 1 you should have finished course 0, and to take course 0 you should have finished course 1. So it is impossible.',
      },
    ],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Your solution here
}`,
      python: `def canFinish(numCourses, prerequisites):
    pass`,
      java: `class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        return true;
    }
};`,
      c: `bool canFinish(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { numCourses: 2, prerequisites: [[1, 0]] }, expectedOutput: true },
      { input: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { numCourses: 1, prerequisites: [] }, expectedOutput: true },
      { input: { numCourses: 3, prerequisites: [[0, 1], [0, 2], [1, 2]] }, expectedOutput: true },
      { input: { numCourses: 4, prerequisites: [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]] }, expectedOutput: false },
    ],
    tags: ['Depth-First Search', 'Breadth-First Search', 'Graph', 'Topological Sort'],
  },
  {
    title: 'Course Schedule II',
    slug: 'course-schedule-ii',
    difficulty: 'MEDIUM',
    category: 'Graphs',
    description: 'There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`.\n\nReturn the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.',
    constraints: [
      '1 <= numCourses <= 2000',
      '0 <= prerequisites.length <= numCourses * (numCourses - 1)',
      'prerequisites[i].length == 2',
      '0 <= a_i, b_i < numCourses',
      'a_i != b_i',
      'All the pairs [a_i, b_i] are distinct.',
    ],
    examples: [
      {
        input: 'numCourses = 2, prerequisites = [[1,0]]',
        output: '[0,1]',
      },
      {
        input: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
        output: '[0,2,1,3]',
      },
    ],
    starterCode: {
      javascript: `function findOrder(numCourses, prerequisites) {
  // Your solution here
}`,
      python: `def findOrder(numCourses, prerequisites):
    pass`,
      java: `class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        return {};
    }
};`,
      c: `int* findOrder(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize, int* returnSize) {
    *returnSize = 0;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { numCourses: 2, prerequisites: [[1, 0]] }, expectedOutput: [0, 1] },
      { input: { numCourses: 4, prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]] }, expectedOutput: [0, 1, 2, 3] },
    ],
    hiddenTestCases: [
      { input: { numCourses: 1, prerequisites: [] }, expectedOutput: [0] },
      { input: { numCourses: 2, prerequisites: [[0, 1], [1, 0]] }, expectedOutput: [] },
    ],
    tags: ['Depth-First Search', 'Breadth-First Search', 'Graph', 'Topological Sort'],
  },
  {
    title: 'Graph Valid Tree',
    slug: 'graph-valid-tree',
    difficulty: 'MEDIUM',
    category: 'Graphs',
    description: 'You have a graph of `n` nodes labeled from `0` to `n - 1`. You are given an integer n and a list of `edges` where `edges[i] = [a_i, b_i]` indicates that there is an undirected edge between nodes `a_i` and `b_i` in the graph.\n\nReturn `true` if the edges of the given graph make up a valid tree, and `false` otherwise.',
    constraints: [
      '1 <= n <= 2000',
      '0 <= edges.length <= 5000',
      'edges[i].length == 2',
      '0 <= a_i, b_i < n',
      'a_i != b_i',
      'There are no self-loops or repeated edges.',
    ],
    examples: [
      {
        input: 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]',
        output: 'true',
      },
      {
        input: 'n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]',
        output: 'false',
      },
    ],
    starterCode: {
      javascript: `function validTree(n, edges) {
  // Your solution here
}`,
      python: `def validTree(n, edges):
    pass`,
      java: `class Solution {
    public boolean validTree(int n, int[][] edges) {
        return true;
    }
}`,
      cpp: `class Solution {
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        return true;
    }
};`,
      c: `bool validTree(int n, int** edges, int edgesSize, int* edgesColSize) {
    return true;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { n: 5, edges: [[0, 1], [0, 2], [0, 3], [1, 4]] }, expectedOutput: true },
      { input: { n: 5, edges: [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]] }, expectedOutput: false },
    ],
    hiddenTestCases: [
      { input: { n: 1, edges: [] }, expectedOutput: true },
      { input: { n: 4, edges: [[0, 1], [2, 3]] }, expectedOutput: false },
    ],
    tags: ['Depth-First Search', 'Breadth-First Search', 'Union Find', 'Graph'],
  },
  {
    title: 'Pacific Atlantic Water Flow',
    slug: 'pacific-atlantic-water-flow',
    difficulty: 'MEDIUM',
    category: 'Graphs',
    description: 'There is an `m x n` rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island\'s left and top edges, and the Atlantic Ocean touches the island\'s right and bottom edges.\n\nWater can only flow in four directions (up, down, left, or right) to an adjacent cell with an equal or lower height. Return a 2D list of grid coordinates `result` where `result[i] = [r_i, c_i]` denotes that rain water can flow from cell `(r_i, c_i)` to both the Pacific and Atlantic oceans.',
    constraints: [
      'm == heights.length',
      'n == heights[r].length',
      '1 <= m, n <= 200',
      '0 <= heights[r][c] <= 10^5',
    ],
    examples: [
      {
        input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',
        output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',
      },
    ],
    starterCode: {
      javascript: `function pacificAtlantic(heights) {
  // Your solution here
}`,
      python: `def pacificAtlantic(heights):
    pass`,
      java: `class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        return {};
    }
};`,
      c: `int** pacificAtlantic(int** heights, int heightsSize, int* heightsColSize, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    return NULL;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      {
        input: {
          heights: [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4],
          ],
        },
        expectedOutput: [
          [0, 4],
          [1, 3],
          [1, 4],
          [2, 2],
          [3, 0],
          [3, 1],
          [4, 0],
        ],
      },
    ],
    hiddenTestCases: [
      { input: { heights: [[1]] }, expectedOutput: [[0, 0]] },
      { input: { heights: [[2, 1], [1, 2]] }, expectedOutput: [[0, 0], [0, 1], [1, 0], [1, 1]] },
    ],
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Matrix'],
  },
  {
    title: 'Rotting Oranges',
    slug: 'rotting-oranges',
    difficulty: 'MEDIUM',
    category: 'Graphs',
    description: 'You are given an `m x n` grid where each cell can have one of three values:\n- `0` representing an empty cell,\n- `1` representing a fresh orange, or\n- `2` representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.',
    constraints: [
      'm == grid.length',
      'n == grid[i].length',
      '1 <= m, n <= 10',
      'grid[i][j] is 0, 1, or 2.',
    ],
    examples: [
      {
        input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]',
        output: '4',
      },
      {
        input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]',
        output: '-1',
      },
      {
        input: 'grid = [[0,2]]',
        output: '0',
      },
    ],
    starterCode: {
      javascript: `function orangesRotting(grid) {
  // Your solution here
}`,
      python: `def orangesRotting(grid):
    pass`,
      java: `class Solution {
    public int orangesRotting(int[][] grid) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        return 0;
    }
};`,
      c: `int orangesRotting(int** grid, int gridSize, int* gridColSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { grid: [[2, 1, 1], [1, 1, 0], [0, 1, 1]] }, expectedOutput: 4 },
      { input: { grid: [[2, 1, 1], [0, 1, 1], [1, 0, 1]] }, expectedOutput: -1 },
      { input: { grid: [[0, 2]] }, expectedOutput: 0 },
    ],
    hiddenTestCases: [
      { input: { grid: [[1]] }, expectedOutput: -1 },
      { input: { grid: [[2, 2], [1, 1], [0, 0], [2, 0]] }, expectedOutput: 1 },
    ],
    tags: ['Array', 'Breadth-First Search', 'Matrix'],
  },
  {
    title: 'Flood Fill',
    slug: 'flood-fill',
    difficulty: 'EASY',
    category: 'Graphs',
    description: 'An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image.\n\nYou are also given three integers `sr`, `sc`, and `color`. You should perform a flood fill on the image starting from the pixel `image[sr][sc]`.\n\nReturn the modified image after performing the flood fill.',
    constraints: [
      'm == image.length',
      'n == image[i].length',
      '1 <= m, n <= 50',
      '0 <= image[i][j], color < 2^16',
      '0 <= sr < m',
      '0 <= sc < n',
    ],
    examples: [
      {
        input: 'image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2',
        output: '[[2,2,2],[2,2,0],[2,0,1]]',
      },
      {
        input: 'image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0',
        output: '[[0,0,0],[0,0,0]]',
      },
    ],
    starterCode: {
      javascript: `function floodFill(image, sr, sc, color) {
  // Your solution here
}`,
      python: `def floodFill(image, sr, sc, color):
    pass`,
      java: `class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        return image;
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
        return image;
    }
};`,
      c: `int** floodFill(int** image, int imageSize, int* imageColSize, int sr, int sc, int color, int* returnSize, int** returnColumnSizes) {
    *returnSize = imageSize;
    return image;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { image: [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr: 1, sc: 1, color: 2 }, expectedOutput: [[2, 2, 2], [2, 2, 0], [2, 0, 1]] },
      { input: { image: [[0, 0, 0], [0, 0, 0]], sr: 0, sc: 0, color: 0 }, expectedOutput: [[0, 0, 0], [0, 0, 0]] },
    ],
    hiddenTestCases: [
      { input: { image: [[0, 0, 0], [0, 1, 1]], sr: 1, sc: 1, color: 1 }, expectedOutput: [[0, 0, 0], [0, 1, 1]] },
    ],
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Matrix'],
  },
  {
    title: 'Number of Connected Components in an Undirected Graph',
    slug: 'number-of-connected-components',
    difficulty: 'MEDIUM',
    category: 'Graphs',
    description: 'You have a graph of `n` nodes. You are given an integer `n` and an array `edges` where `edges[i] = [a_i, b_i]` indicates that there is an edge between `a_i` and `b_i` in the graph.\n\nReturn the number of connected components in the graph.',
    constraints: [
      '1 <= n <= 2000',
      '1 <= edges.length <= 5000',
      'edges[i].length == 2',
      '0 <= a_i <= b_i < n',
      'a_i != b_i',
      'There are no repeated edges.',
    ],
    examples: [
      {
        input: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
        output: '2',
      },
      {
        input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]',
        output: '1',
      },
    ],
    starterCode: {
      javascript: `function countComponents(n, edges) {
  // Your solution here
}`,
      python: `def countComponents(n, edges):
    pass`,
      java: `class Solution {
    public int countComponents(int n, int[][] edges) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        return 0;
    }
};`,
      c: `int countComponents(int n, int** edges, int edgesSize, int* edgesColSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { n: 5, edges: [[0, 1], [1, 2], [3, 4]] }, expectedOutput: 2 },
      { input: { n: 5, edges: [[0, 1], [1, 2], [2, 3], [3, 4]] }, expectedOutput: 1 },
    ],
    hiddenTestCases: [
      { input: { n: 4, edges: [] }, expectedOutput: 4 },
      { input: { n: 3, edges: [[0, 1], [0, 2]] }, expectedOutput: 1 },
    ],
    tags: ['Depth-First Search', 'Breadth-First Search', 'Union Find', 'Graph'],
  },
  {
    title: 'Word Ladder',
    slug: 'word-ladder',
    difficulty: 'HARD',
    category: 'Graphs',
    description: 'A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:\n- Every adjacent pair of words differs by a single letter.\n- Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.\n- `sk == endWord`\n\nGiven two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or `0` if no such sequence exists.',
    constraints: [
      '1 <= beginWord.length <= 10',
      'endWord.length == beginWord.length',
      '1 <= wordList.length <= 5000',
      'wordList[i].length == beginWord.length',
      'beginWord, endWord, and wordList[i] consist of lowercase English letters.',
      'beginWord != endWord',
      'All the words in wordList are unique.',
    ],
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: '5',
        explanation: 'One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.',
      },
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: '0',
        explanation: 'The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.',
      },
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Your solution here
}`,
      python: `def ladderLength(beginWord, endWord, wordList):
    pass`,
      java: `class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        return 0;
    }
};`,
      c: `int ladderLength(char* beginWord, char* endWord, char** wordList, int wordListSize) {
    return 0;
}`,
    },
    supportedLanguages: ['javascript', 'python', 'java', 'cpp', 'c'],
    visibleTestCases: [
      { input: { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'] }, expectedOutput: 5 },
      { input: { beginWord: 'hit', endWord: 'cog', wordList: ['hot', 'dot', 'dog', 'lot', 'log'] }, expectedOutput: 0 },
    ],
    hiddenTestCases: [
      { input: { beginWord: 'a', endWord: 'c', wordList: ['a', 'b', 'c'] }, expectedOutput: 2 },
      { input: { beginWord: 'hot', endWord: 'dog', wordList: ['hot', 'dog'] }, expectedOutput: 0 },
    ],
    tags: ['Hash Table', 'String', 'Breadth-First Search'],
  },
];
