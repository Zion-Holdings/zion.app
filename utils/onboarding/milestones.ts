export type UserRole = "talent" | "client";

export type MilestoneStatus = "pending" | "complete";

export type MilestoneDefinition = {
  key: string;
  label: string;
  isKey: boolean;
};

export const TALENT_MILESTONES: MilestoneDefinition[] = [
  { key: "profile_completed", label: "Profile completed", isKey: true },
  { key: "skills_added", label: "Skills added", isKey: true },
  { key: "availability_set", label: "Availability set", isKey: false },
  { key: "first_application_sent", label: "First application sent", isKey: true },
  { key: "first_match_received", label: "First match received", isKey: false },
];

export const CLIENT_MILESTONES: MilestoneDefinition[] = [
  { key: "job_posted", label: "Job posted", isKey: true },
  { key: "match_viewed", label: "Match viewed", isKey: false },
  { key: "first_talent_invited", label: "First talent invited", isKey: true },
  { key: "first_quote_received", label: "First quote received", isKey: true },
];

export function getMilestonesForRole(role: UserRole): MilestoneDefinition[] {
  return role === "talent" ? TALENT_MILESTONES : CLIENT_MILESTONES;
}

export function isValidMilestone(role: UserRole, milestone: string): boolean {
  return getMilestonesForRole(role).some((m) => m.key === milestone);
}

export function isKeyMilestone(role: UserRole, milestone: string): boolean {
  const def = getMilestonesForRole(role).find((m) => m.key === milestone);
  return !!def?.isKey;
}

export function computeProgress(
  role: UserRole,
  statuses: Record<string, MilestoneStatus>
): { completed: number; total: number; percent: number } {
  const defs = getMilestonesForRole(role);
  const total = defs.length;
  const completed = defs.filter((d) => statuses[d.key] === "complete").length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}