declare module 'next' {
  export interface NextApiRequest {
    [key: string]: unknown;
    headers: Record<string, string | string[] | undefined>;
  }
  export interface NextApiResponse<T = unknown> {
    status: (statusCode: number) => NextApiResponse<T>;
    json: (data: T) => NextApiResponse<T>;
    end: (data?: unknown) => NextApiResponse<T>;
    setHeader: (name: string, value: string | readonly string[]) => void;
  }
  export type GetStaticPaths = unknown;
  export type GetStaticProps<T = unknown, P = Record<string, unknown>> = unknown;
  export type GetServerSideProps<T = unknown, P = Record<string, unknown>> = unknown;
  export type NextPage<P = Record<string, unknown>, IP = P> = (props: P) => React.ReactElement | null;
}

declare module 'next/*' {
  const anyExport: unknown;
  export = anyExport;
}
