import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
declare module 'next/router' {
    function useRouter(): any;
}
import * as React from 'react';
declare module 'next/head' {
    const Head: React.FC<React.PropsWithChildren<Record<string, any>>>;
}
declare module 'next' {
    interface NextApiRequest {
        [key: string]: any;
    }
    interface NextApiResponse<T = any> {
        status: (statusCode: number) => NextApiResponse<T>;
        json: (body: T) => NextApiResponse<T>;
        end: (data?: any) => NextApiResponse<T>;
    }
}
