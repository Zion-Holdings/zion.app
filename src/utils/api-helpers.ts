// Auto-generated API type helpers
import type { NextApiRequest, NextApiResponse } from 'next';

export function safeQueryParam<T = string>(query: NextApiRequest['query'], key: string): T | undefined {
  const value = (query as Record<string, unknown>)[key];
  return value as T;
}

export function safeBodyParam<T = unknown>(body: NextApiRequest['body'], key: string): T | undefined {
  const safeBody = body as Record<string, unknown>;
  return safeBody[key] as T;
}

export function safeHeader(headers: NextApiRequest['headers'], key: string): string | string[] | undefined {
  const safeHeaders = headers as Record<string, string | string[] | undefined>;
  return safeHeaders[key];
}
