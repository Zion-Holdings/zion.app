import type { NextApiRequest, NextApiResponse } from 'next;;
'
// Extended NextApiRequest with properly typed query and body;
export interface TypedNextApiRequest<;
  TQuery = Record<string, string | string[]>,'
  TBody = Record<string, unknown>,;
> extends Omit<NextApiRequest, 'query' | 'body'> {;
  query: "TQuery;"
  body: "TBody;";