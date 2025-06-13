import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

declare module 'next/router' {
  export function useRouter(): any;
}

declare module 'next/head' {
  import * as React from 'react';
  const Head: React.FC<React.PropsWithChildren<Record<string, any>>>;
  export default Head;
}

declare module 'next' {
  import * as React from 'react';
  export interface NextApiRequest { [key: string]: any }
  export interface NextApiResponse<T = any> {
    status: (statusCode: number) => NextApiResponse<T>;
    json: (body: any) => NextApiResponse<T>;
    end: () => void;
  }
  export type NextPage<P = {}, IP = P> = React.FC<P>;
  export type GetStaticProps<P = any, Params = any> = (context: any) => Promise<{ props: P }>;
  export type GetStaticPaths = (context: any) => Promise<{ paths: any[]; fallback: boolean | 'blocking' }>;
  export type GetServerSideProps<P = any, Params = any> = (context: any) => Promise<{ props: P }>;
}
