import api from './api';

const roomService = {
  /**
   * Create a new room
   */
  createRoom: async (roomData) => {
    const response = await api.post('/rooms', roomData);
    return response.data;
  },

  /**
   * Get public or user's rooms
   */
  getRooms: async (params = {}) => {
    const response = await api.get('/rooms', { params });
    return response.data;
  },

  /**
   * Get room by Room ID (e.g. DEV-8F3K2A)
   */
  getRoomByRoomId: async (roomId) => {
    const response = await api.get(`/rooms/${roomId}`);
    return response.data;
  },

  /**
   * Join a room
   */
  joinRoom: async (roomId) => {
    const response = await api.post(`/rooms/${roomId}/join`);
    return response.data;
  },

  /**
   * Leave a room
   */
  leaveRoom: async (roomId) => {
    const response = await api.post(`/rooms/${roomId}/leave`);
    return response.data;
  },

  /**
   * Update room code, settings, or active problem
   */
  updateRoom: async (roomId, roomData) => {
    const response = await api.put(`/rooms/${roomId}`, roomData);
    return response.data;
  },

  /**
   * End/Close a room
   */
  closeRoom: async (roomId) => {
    const response = await api.delete(`/rooms/${roomId}`);
    return response.data;
  },

  /**
   * Save a snapshot of room code
   */
  createSnapshot: async (roomId, snapshotData) => {
    const response = await api.post(`/rooms/${roomId}/snapshots`, snapshotData);
    return response.data;
  },

  /**
   * Get all snapshots for a room
   */
  getSnapshots: async (roomId) => {
    const response = await api.get(`/rooms/${roomId}/snapshots`);
    return response.data;
  },

  /**
   * Restore a snapshot to room code
   */
  restoreSnapshot: async (roomId, snapshotId) => {
    const response = await api.post(`/rooms/${roomId}/snapshots/${snapshotId}/restore`);
    return response.data;
  },
};

export default roomService;

