export type InterviewStatus = 'requested' | 'confirmed' | 'declined' | 'completed' | 'proposed';

export interface Interview {
  id: string;
  clientId: string;
  talentId: string;
  talentName?: string;
  clientName?: string;
  startTimeIso: string; // ISO timestamp
  durationMinutes: number; // 15 | 30 | 60
  meetingLink?: string; // Zoom/Meet/other
  notes?: string;
  status: InterviewStatus;
  createdAtIso: string;
  updatedAtIso: string;
  proposedTimeIso?: string; // when talent proposes a new time
}

export interface CreateInterviewInput {
  clientId: string;
  talentId: string;
  startTimeIso: string;
  durationMinutes: number;
  meetingLink?: string;
  notes?: string;
}

export interface UpdateInterviewInput {
  status?: InterviewStatus;
  startTimeIso?: string;
  durationMinutes?: number;
  meetingLink?: string;
  notes?: string;
  proposedTimeIso?: string;
}