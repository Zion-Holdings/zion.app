interface Buffer {
  // Buffer interface for Node.js compatibility
  readonly length: number;
  toString(encoding?: string): string;
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
  type Timeout = object;
}

declare const process: NodeJS.Process;

declare const Buffer: typeof globalThis extends { Buffer: infer B }
  ? B
  : unknown;
