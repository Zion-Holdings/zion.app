import type { ReactElement } from 'react';';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
export ;interface NextApiRequest {
  body?: unknown;
  query: Record<string, string | string[] | undefined>;
  cookies: Record<string, string>;
  headers?: Record<string, string | string[] | undefined>;
}
;
export ;interface NextApiResponse<T = unknown> {
  status(code: number): NextApiResponse<T>;
  json(data: T): void;
}
;
export ;type NextPage<P = object, _IP = P> = (props: P) => ReactElement | null;
;
export ;type GetServerSideProps<P = Record<string, unknown>, _Params = Record<string, string | string[] | undefined>> = (
  context: unknown
) => Promise<{ props: P }>;
;
export ;type GetStaticProps<P = Record<string, unknown>, _Params = Record<string, string | string[] | undefined>> = (
  context: unknown
) => Promise<{ props: P }>;
;
export ;type GetStaticPaths<_T = unknown> = unknown;
