import api from './api';

const problemService = {
  /**
   * Get problems with filters, search, and pagination
   */
  getProblems: async (params = {}) => {
    const response = await api.get('/problems', { params });
    return response.data;
  },

  /**
   * Get single problem by slug or ID
   */
  getProblemBySlugOrId: async (slugOrId) => {
    const response = await api.get(`/problems/${slugOrId}`);
    return response.data;
  },

  /**
   * Get category summary breakdown
   */
  getCategories: async () => {
    const response = await api.get('/problems/categories');
    return response.data;
  },

  /**
   * Get problems by category
   */
  getProblemsByCategory: async (category) => {
    const response = await api.get(`/problems/category/${category}`);
    return response.data;
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
