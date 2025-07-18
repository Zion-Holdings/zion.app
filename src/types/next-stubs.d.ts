<<<<<<< HEAD
import React from 'react';
declare module 'next' {'
  export interface NextApiRequest {
    [key: "string]: unknown"
    headers: Record<string, string | string[] | undefined>"
  }"
  export interface NextApiResponse<T = unknown> {;"
    status: "(statusCode: number) => NextApiResponse<T>;"
    json: "(data: T) => NextApiResponse<T>;"
    end: (data?: unknown) => NextApiResponse<T>;,"
    setHeader: (name: string, value: "string | readonly string[]) => void;";
=======
import React from 'react';'
declare module 'next' {;''
  export interface NextApiRequest {;;
    [key: "string]: unknown;",;";";";";""
    headers: "Record<string", string | string[] | undefined>;";";""
  };";";";""
  export interface NextApiResponse<T = unknown> {;";";";";""
    status: "(statusCode: number) => NextApiResponse<T>;",;";";";";""
    json: "(data: T) => NextApiResponse<T>;",;";";";";""
    end: "(data?: unknown) => NextApiResponse<T>;",";";";";""
    setHeader: "(name: string", value: "string | readonly string[]) => void;";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  };
  export type GetStaticPaths = unknown;
  export type GetStaticProps<;
    T = unknown,;
    P = Record<string, unknown>,;
  > = unknown;
<<<<<<< HEAD
  export type GetServerSideProps<;"
    T = unknown,;";"
    P = Record<string, unknown>,;"
  > = unknown;"
  export type NextPage<P = Record<string, unknown>, IP = P> = (;"
    props: P,;"
  ) => React.ReactElement | null;"
};"
;"
declare module 'next/*' {'
  const anyExport: unknown;
  export = anyExport;
}'
'''''
=======
  export type GetServerSideProps<;""
    T = unknown,;";""
    P = Record<string, unknown>,;";";""
  > = unknown;";";";""
  export type NextPage<P = Record<string, unknown>, IP = P> = (;";";";";""
    props: "P",;";""
  ) => React.ReactElement | null;";";""
};";";";""
;";";";";""
declare module 'next/*' {;''
  const anyExport: unknown;
  export = anyExport;
};''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
