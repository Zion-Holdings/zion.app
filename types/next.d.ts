declare module 'next' {
  import { IncomingMessage, ServerResponse } from 'http';

  export interface NextApiRequest extends IncomingMessage {
    query: { [key: string]: string | string[] };
    body: any;
    cookies: { [key: string]: string };
    method?: string;
  }

  export interface NextApiResponse<T = any> extends ServerResponse {
    status(code: number): this;
    json(data: T): this;
    send(data: any): this;
    redirect(url: string): void;
  }

  export type NextApiHandler<T = any> = (
    req: NextApiRequest,
    res: NextApiResponse<T>
  ) => void | Promise<void>;
}
