// Minimal placeholder for apiClient
const apiClient = {
  request: async (..._args: any[]) => {
    throw new Error('apiClient.request is not implemented.');
  },
};

export default apiClient; 