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