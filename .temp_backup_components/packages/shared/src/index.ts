export type User = { id: string; email: string; displayName?: string };
export type JobPost = { id: string; userId: string; title: string; description: string; location?: string; tags?: string[] };
export type TalentProfile = { id: string; userId: string; fullName: string; country?: string; skills?: string[]; experienceYears?: number };
export type Project = { id: string; userId: string; name: string; status: string; milestones: any[] };
export type Notification = { id: string; userId: string; channel: 'slack' | 'extension' | 'email'; title: string; body: string; data?: any; read: boolean; createdAt: string };

export const ZION_BRAND = {
  name: 'Zion',
  gradient: 'linear-gradient(135deg, #5A60FF 0%, #9B5CFF 50%, #FF6BCB 100%)'
};