declare module 'next/server' {
  export class NextResponse {
    constructor(init?: any);
    static json(body: any, init?: any): NextResponse;
    static redirect(url: string | URL, init?: any): NextResponse;
    static next(init?: any): NextResponse;
  }

  export interface NextRequest {
    nextUrl: URL;
    cookies: Record<string, string>;
  }
}
