import api from './api';

const authService = {
  /**
   * Register a new user
   */
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    if (response.data?.data?.token) {
      localStorage.setItem('devcollab_token', response.data.data.token);
      localStorage.setItem('devcollab_user', JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  /**
   * Login user
   */
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data?.data?.token) {
      localStorage.setItem('devcollab_token', response.data.data.token);
      localStorage.setItem('devcollab_user', JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  /**
   * Get current authenticated user
   */
  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  /**
   * Update profile
   */
  updateProfile: async (profileData) => {
    const response = await api.put('/auth/profile', profileData);
    if (response.data?.data?.user) {
      localStorage.setItem('devcollab_user', JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  /**
   * Change password
   */
  updatePassword: async (passwords) => {
    const response = await api.put('/auth/password', passwords);
    return response.data;
  },

  /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem('devcollab_token');
    localStorage.removeItem('devcollab_user');
  },

  /**
   * Get stored user & token
   */
  getStoredAuth: () => {
    const token = localStorage.getItem('devcollab_token');
    const userStr = localStorage.getItem('devcollab_user');
    let user = null;
    try {
      user = userStr ? JSON.parse(userStr) : null;
    } catch {
      user = null;
    }
    return { token, user };
  },
};

export default authService;
