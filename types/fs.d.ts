declare module 'fs' {'  export ;function readFileSync(path: string, opts?: unknown): string | Buffer;'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  export ;function writeFileSync(path: string, data: unknown, opts?: unknown): void;
  export ;function existsSync(path: string): boolean;
}
