import { upsertMilestone } from "./progress";
import { UserRole } from "./milestones";

export type UserAction =
  | { type: "profile_completed"; role: "talent" }
  | { type: "skills_added"; role: "talent" }
  | { type: "availability_set"; role: "talent" }
  | { type: "first_application_sent"; role: "talent" }
  | { type: "first_match_received"; role: "talent" }
  | { type: "job_posted"; role: "client" }
  | { type: "match_viewed"; role: "client" }
  | { type: "first_talent_invited"; role: "client" }
  | { type: "first_quote_received"; role: "client" };

export async function handleUserAction(
  userId: string,
  action: UserAction
): Promise<{ error?: string }> {
  const role: UserRole = action.role;
  const milestone = action.type;
  return upsertMilestone(userId, role, milestone, "complete");
}