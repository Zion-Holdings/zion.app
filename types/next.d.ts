export interface NextApiRequest {
  method?: string;
  query: Record<string, any>;
  body?: any;
  cookies?: Record<string, any>;
  headers?: Record<string, string | string[] | undefined>;
}

export interface NextApiResponse<T = any> {
  status(code: number): NextApiResponse<T>;
  json(body: T): NextApiResponse<T>;
  setHeader(name: string, value: string | readonly string[]): void;
  end(data?: any): void;
}

export type GetStaticProps<T = any> = any;
export type GetStaticPaths<T = any> = any;
export type GetServerSideProps<T = any> = any;
