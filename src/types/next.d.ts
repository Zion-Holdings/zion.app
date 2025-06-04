declare module 'next' {
  export interface NextApiRequest {
    [key: string]: any;
  }

  export interface NextApiResponse<T = any> {
    status(code: number): NextApiResponse<T>;
    json(body: T): NextApiResponse<T>;
    setHeader(name: string, value: string | readonly string[]): void;
    end(data?: string): void;
    [key: string]: any;
  }
}
