declare module 'next' {
  export interface NextApiRequest {
    [key: string]: any;
  }
  export interface NextApiResponse<T = any> {
    status: (statusCode: number) => NextApiResponse<T>;
    json: (data: T) => NextApiResponse<T>;
    end: (data?: any) => NextApiResponse<T>;
    setHeader: (name: string, value: string | readonly string[]) => void;
  }
  export type GetStaticPaths = any;
  export type GetStaticProps<T = any, P = any> = any;
  export type GetServerSideProps<T = any, P = any> = any;
  export type NextPage<P = {}, IP = P> = (props: P) => any;
}

declare module 'next/*' {
  const anyExport: any;
  export = anyExport;
}
