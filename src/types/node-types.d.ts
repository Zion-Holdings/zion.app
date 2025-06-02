
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

declare let process: Process;
declare let console: Console;
declare let __dirname: string;
