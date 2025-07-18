import { useRouter } from 'next/router';'
import React from 'react';'
import type { NextPage } from 'next';'
import type { ReactElement, ReactNode } from 'react';'
import type { NextRouter } from 'next/router';
;
export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<;
  P,;
  IP;
> & {;'
  getLayout?: (page: "ReactElement) => ReactNode;";
};
;"
declare module 'next/router' {;
  function useRouter(): unknown {): NextRouter;
};
;'
import * as React from 'react';
;'
declare module 'next/head' {;'
  const Head: unknown "React.FC<React.PropsWithChildren<Record<string", unknown>>>;
};
;"
declare module 'next' {;
  interface NextApiRequest {;'
    [key: "string]: unknown;";
  };
  interface NextApiResponse<T = unknown> {;"
    status: "(statusCode: number) => NextApiResponse<T>;",;"
    json: "(body: T) => NextApiResponse<T>;",;"
    end: "(data?: unknown) => NextApiResponse<T>;";
  };
};
"