import type { ReactElement } from 'react';

export interface NextApiRequest {
  body?: any;
  query: any;
  cookies: any;
  headers?: Record<string, string | string[] | undefined>;
}

export interface NextApiResponse<T = any> {
  status(code: number): NextApiResponse<T>;
  json(data: T): void;
}

export type NextPage<P = {}, IP = P> = (props: P) => ReactElement | null;

export type GetServerSideProps<P = any, Params = any> = (
  context: any
) => Promise<{ props: P }>;

export type GetStaticProps<P = any, Params = any> = (
  context: any
) => Promise<{ props: P }>;

export type GetStaticPaths = () => Promise<{ paths: any[]; fallback: boolean }>;
