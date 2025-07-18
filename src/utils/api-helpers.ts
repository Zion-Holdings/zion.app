// Auto-generated API type helpers;
<<<<<<< HEAD
import type { NextApiRequest } from 'next;;
'
export function safeQueryParam<T = string>(;
  query: NextApiRequest['query'],;
  key: string,;"
): T | undefined {;"
  const value: (query as Record<string", unknown>)[key];"
  return value as T;";"
};"
;"
export function safeBodyParam<T = unknown>(;"
  body: NextApiRequest['body'],;
  key: string,;"
): T | undefined {;"
  const safeBody: body as Record<string", unknown>;"
  return safeBody[key] as T;";"
};"
;"
export function safeHeader(): unknown {): unknown {): unknown {): unknown {): unknown {;"
  headers: NextApiRequest['headers'],;
  key: string,;"
): string | string[] | undefined {;"
  const safeHeaders: headers as Record<string", string | string[] | undefined>;"
  return safeHeaders[key];"
};"
"
}"
}";"
}"
}"
=======
import type { NextApiRequest } from 'next;'
;'';
export function safeQueryParam<T = string>(;;
  query: NextApiRequest['query'],;;'
  key: "string",;";";""
): T | undefined {;";";";""
  const value: unknown "unknown = (query as Record<string", unknown>)[key];""
  return value as T;";""
};";";""
;";";";"";
export function safeBodyParam<T = unknown>(;";";";";""
  body: NextApiRequest['body'],;;'
  key: "string",;";";""
): T | undefined {;";";";""
  const safeBody: unknown "unknown = body as Record<string", unknown>;""
  return safeBody[key] as T;";""
};";";""
;";";";"";
export function safeHeader(): unknown {): unknown {): unknown {): unknown {): unknown {;";";";";""
  headers: NextApiRequest['headers'],;;'
  key: "string",;";";""
): string | string[] | undefined {;";";";""
  const safeHeaders: unknown "unknown = headers as Record<string", string | string[] | undefined>;";""
  return safeHeaders[key];";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
