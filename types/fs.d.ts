declare module 'fs' {
  export function readFileSync(path: string, opts?: any): string | Buffer;
  export function writeFileSync(path: string, data: any, opts?: any): void;
  export function existsSync(path: string): boolean;
}
