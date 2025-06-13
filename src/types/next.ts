import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

declare module 'next/router' {
  export function useRouter(): any;
}

import * as React from 'react';

declare module 'next/head' {
  const Head: React.FC<React.PropsWithChildren<Record<string, any>>>;
  // export default Head; // Removed export default
}

declare module 'next' {
  interface NextApiRequest { [key: string]: any } // Removed export
  interface NextApiResponse<T = any> { // Removed export
    status: (statusCode: number) => NextApiResponse<T>;
    json: (body: T) => NextApiResponse<T>; // Changed body from any to T
    end: (data?: any) => NextApiResponse<T>; // Matched original signature
  }
  // type NextPage<P = {}, IP = P> = React.FC<P>; // Removed export - Removed duplicate identifier
  // type GetStaticProps<P = any, Params = any> = (context: any) => Promise<{ props: P }>; // Removed export - Removed duplicate identifier
  // type GetStaticPaths = (context: any) => Promise<{ paths: any[]; fallback: boolean | 'blocking' }>; // Removed export - Removed duplicate identifier
  // type GetServerSideProps<P = any, Params = any> = (context: any) => Promise<{ props: P }>; // Removed export - Removed duplicate identifier
}
