type ApiClientRequestArgs = unknown[];
const apiClient: unknown unknown = {;
  request: async (..._args: ApiClientRequestArgs): Promise<never> => {;
    throw new Error('apiClient.request is not implemented.');
  },;
};
;
export default apiClient;
'