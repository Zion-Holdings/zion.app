import { TeamsService } from './TeamsService';

const webhookUrl =
  process.env.NEXT_PUBLIC_TEAMS_WEBHOOK_URL ||
  process.env.TEAMS_WEBHOOK_URL; // Fallback, but be cautious if TEAMS_WEBHOOK_URL is a secret and this runs client-side

export const teamsService =
  webhookUrl ? new TeamsService(webhookUrl) : undefined;

export type { TeamsService } from './TeamsService';
