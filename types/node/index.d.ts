// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Buffer {
  // Buffer interface for Node.js compatibility
}

declare const __dirname: string;
declare const __filename: string;

declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
  }

  interface Process {
    env: ProcessEnv;
  }

  /** Minimal representation of NodeJS.Timeout used in our codebase */
  interface Timeout {
    // Timeout interface for Node.js compatibility
  }
}

declare const process: NodeJS.Process;

declare const Buffer: typeof globalThis extends { Buffer: infer B } ? B : any;

export {};
