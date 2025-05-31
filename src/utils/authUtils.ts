// src/utils/authUtils.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Simple debounce function
const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const redirectToLogin = debounce(() => {
  if (typeof window !== 'undefined') {
    window.location.assign('/login?next=/cart');
  }
}, 3000);

export const authFetch = async (url: string, config: AxiosRequestConfig = {}) => {
  const token = localStorage.getItem('jwt_token');
  
  const headers = { ...config.headers };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await axios(url, {
      ...config,
      headers,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      redirectToLogin();
      // Throw an error or return a specific response to indicate unauthorized access
      // This allows the caller to handle the error appropriately.
      throw new Error('Unauthorized');
    }
    // Re-throw other errors
    throw error;
  }
};
