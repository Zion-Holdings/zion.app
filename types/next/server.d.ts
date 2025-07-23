declare module 'next/server' {'  export ;class NextResponse {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    constructor(init?: unknown);
    static json(body: unknown, init?: unknown): NextResponse;
    static redirect(url: string | URL, init?: unknown): NextResponse;
    static next(init?: unknown): NextResponse;
  }

  export ;interface NextRequest {
    nextUrl: URL;
    cookies: Record<string, string>;
  }
}
