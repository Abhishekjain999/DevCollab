import api from './api';

const submissionService = {
  /**
   * Run code against sample test cases
   */
  runCode: async (runData) => {
    const response = await api.post('/code/run', runData);
    return response.data;
  },

  /**
   * Submit code for full evaluation against visible + hidden test cases
   */
  submitCode: async (submitData) => {
    const response = await api.post('/code/submit', submitData);
    return response.data;
  },

  /**
   * Get user's submission history
   */
  getSubmissions: async (params = {}) => {
    const response = await api.get('/submissions', { params });
    return response.data;
  },

  /**
   * Get single submission record
   */
  getSubmissionById: async (id) => {
    const response = await api.get(`/submissions/${id}`);
    return response.data;
  },

  /**
   * Get all submissions in a room (for interviewers/recruiters)
   */
  getRoomSubmissions: async (roomId) => {
    const response = await api.get(`/submissions/room/${roomId}`);
    return response.data;
  },
};

export default submissionService;
