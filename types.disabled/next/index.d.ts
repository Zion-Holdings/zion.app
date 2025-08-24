import type { ReactElement } from react';;
interface NextApiRequest {
  body?: unknown;
  query: Record<string, string | string[] | undefined>;
  cookies: Record<string, string>;
  headers?: Record<string, string | string[] | undefined>;
}
;
interface NextApiResponse<T = unknown> {
  status(code: number): NextApiResponse<T>;
  json(data: T): void;
}
;
type NextPage<P = object, _IP = P> = (props: P) => ReactElement | null;
type GetServerSideProps<P = Record<string, unknown>, _Params = Record<string, string | string[] | undefined>> = (
  context: unknown
) => Promise<{ props: P }>;
type GetStaticProps<P = Record<string, unknown>, _Params = Record<string, string | string[] | undefined>> = (
  context: unknown
) => Promise<{ props: P }>;
type GetStaticPaths<_T = unknown> = unknown;
