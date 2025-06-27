// import { AxiosResponse } from 'axios';
import apiClient from './apiClient';

export async function apiHelper<T>(request: () => Promise<any>): Promise<{ data: T | null; error: string | null }> {
  try {
    const res = await request();
    return { data: res.data, error: null };
  } catch (err: any) {
    const message = err?.response?.data?.message || err.message || 'Unexpected error';
    return { data: null, error: message };
  }
}
