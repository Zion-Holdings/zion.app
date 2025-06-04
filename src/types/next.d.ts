export {};

// Minimal stubs for Next.js types so the codebase can compile without the real Next.js package

declare module 'next' {
  export interface NextApiRequest {
    [key: string]: any;
  }

  export interface NextApiResponse<T = any> {
    status(code: number): NextApiResponse<T>;
    json(data: any): NextApiResponse<T>;
    end(data?: any): void;
    [key: string]: any;
  }

  export type GetStaticPaths = any;
  export type GetStaticProps<T = any> = any;
  export type GetServerSideProps<T = any> = any;
}

declare module 'next/link' {
  const Link: any;
  export default Link;
}

declare module 'next/head' {
  const Head: any;
  export default Head;
}

declare module 'next/router' {
  const useRouter: any;
  export { useRouter };
}

declare module 'next/document' {
  const Html: any;
  const Head: any;
  const Main: any;
  const NextScript: any;
  export { Html, Head, Main, NextScript };
}
