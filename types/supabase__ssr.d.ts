declare module '@supabase/ssr' {
  export interface CookieOptions {
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
    maxAge?: number;
  }

  export interface Cookie {
    name: string;
    value: string;
    options?: CookieOptions;
  }

  export function createServerClient(
    url: string,
    key: string,
    options: {
      cookies: {
        getAll(): Cookie[];
        setAll(cookies: Cookie[]): void;
      };
    }
  ): any;

  export function createBrowserClient(
    url: string,
    key: string,
    options?: unknown
  ): any;
}
