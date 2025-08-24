export type MilestoneStatus =
  | 'Pending'
  | 'In Progress'
  | 'Submitted'
  | 'Approved'
  | 'Paid';

export type MilestoneAttachment = {
  id: string;
  type: 'link' | 'file';
  url: string;
  label?: string;
  uploadedByUserId: string;
  uploadedAt: string; // ISO date
};

export type Milestone = {
  id: string;
  title: string;
  description?: string;
  dueDate: string; // ISO date
  amountUsd: number;
  status: MilestoneStatus;
  attachments?: MilestoneAttachment[];
  submittedByUserId?: string;
  approvedByUserId?: string;
  paidAt?: string; // ISO date
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
};

export type ProjectParticipantRole = 'client' | 'talent';

export type ProjectParticipants = {
  clientUserId: string;
  talentUserId: string;
};

export type Project = {
  id: string;
  name: string;
  participants: ProjectParticipants;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
};

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
  );
}