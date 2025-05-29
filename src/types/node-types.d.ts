
// Add basic type definitions for Node.js globals used in the project
interface Process {
  env: {
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    SLACK_SIGNING_SECRET?: string;
    SLACK_BOT_TOKEN?: string;
    OPENAI_API_KEY?: string;
  };
}

declare const process: Process;
declare const console: Console;
declare const __dirname: string;
