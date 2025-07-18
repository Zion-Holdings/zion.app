export interface NextApiRequest {
  method?: string;
  query: Record<string, unknown>;
  body?: unknown;
  cookies?: Record<string, unknown>;
  headers?: Record<string, string | string[] | undefined>;
}

export interface NextApiResponse<T = unknown> {
  status(code: number): NextApiResponse<T>;
  json(body: T): NextApiResponse<T>;
  setHeader(name: string, value: string | readonly string[]): void;
  end(data?: unknown): void;
}

export type GetStaticProps<T = unknown> = unknown;
export type GetStaticPaths<T = unknown> = unknown;
export type GetServerSideProps<T = unknown> = unknown;

type NextPageWithLayout<_T = object> = NextPage<_T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type NextPageWithAuth<_T = object> = NextPage<_T> & {
  requireAuth?: boolean;
};

type NextPageWithSeo<_T = object> = NextPage<_T> & {
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    type?: string;
  };
};
