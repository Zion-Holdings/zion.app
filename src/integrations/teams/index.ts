import { TeamsService } from './TeamsService';

const webhookUrl =
  import.meta.env.VITE_TEAMS_WEBHOOK_URL ||
  (import.meta.env as any).NEXT_PUBLIC_TEAMS_WEBHOOK_URL ||
  process.env.TEAMS_WEBHOOK_URL;

export const teamsService =
  webhookUrl ? new TeamsService(webhookUrl) : undefined;

export type { TeamsService } from './TeamsService';
