import * as React from 'react';

declare module 'next' {
  export interface NextApiRequest {
    [key: string]: any;
  }

  export interface NextApiResponse<T = any> {
    status(code: number): NextApiResponse<T>;
    json(data: T): NextApiResponse<T>;
    send(data: any): NextApiResponse<T>;
    end(data?: any): void;
    setHeader(name: string, value: string | string[]): void;
  }

  export type GetStaticPaths = () => Promise<{ paths: any[]; fallback: boolean | 'blocking' }>;
  export type GetStaticProps<P = any, Q = any> = (
    ctx: { params?: Q }
  ) => Promise<{ props: P; revalidate?: number | boolean } | { redirect: any } | { notFound: true }>;
}

declare module 'next/head' {
  const Head: React.ComponentType<any>;
  export default Head;
}

declare module 'next/link' {
  const Link: React.ComponentType<any>;
  export default Link;
}

declare module 'next/router' {
  export function useRouter(): any;
}

declare module 'next/image' {
  const Image: React.ComponentType<any>;
  export default Image;
}

declare module 'next/document' {
  export const Html: React.ComponentType<any>;
  export const Head: React.ComponentType<any>;
  export const Main: React.ComponentType<any>;
  export const NextScript: React.ComponentType<any>;
}
