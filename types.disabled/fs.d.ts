declare module fs' {'  function readFileSync(path: string, opts?: unknown): string | Buffer;
  function writeFileSync(path: string, data: unknown, opts?: unknown): void;
  function existsSync(path: string): boolean;
}
