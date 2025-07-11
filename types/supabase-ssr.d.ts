declare module '@supabase/ssr' {
  export type SupabaseClient<T = any> = unknown;
  export function createBrowserClient<T = any>(url: string, key: string): SupabaseClient<T>;
}
