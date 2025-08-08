export type ContentType = 'listing' | 'message' | 'cv' | 'job';
export type ModerationStatus = 'pending' | 'approved' | 'removed' | 'warned' | 'banned';

export type AiScores = {
  toxicity: number; // 0-1
  nsfw: number; // 0-1
  scam: number; // 0-1
};

export type FlaggedContent = {
  id: string;
  contentType: ContentType;
  contentId: string;
  userId: string;
  userEmail: string;
  reason: string;
  status: ModerationStatus;
  snippet: string; // small preview of content
  metadata?: Record<string, any>;
  aiScores: AiScores;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
};