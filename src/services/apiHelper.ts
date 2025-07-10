// import { AxiosResponse } from 'axios';
import apiClient from './apiClient';

export async function apiHelper<T>(request: () => Promise<unknown>): Promise<{ data: T | null; error: string | null }> {
  try {
    const data = await request();
    return { data: data as T, error: null };
  } catch (err: unknown) {
    return { data: null, error: err instanceof Error ? err.message : String(err) };
  }
}
