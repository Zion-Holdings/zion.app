import { supabase } from "../supabase/client";
import { UserRole, getMilestonesForRole } from "./milestones";

export async function initializeProgress(userId: string, role: UserRole) {
  if (!userId) return { error: "Missing userId" };
  const milestones = getMilestonesForRole(role).map((m) => ({
    user_id: userId,
    role,
    milestone: m.key,
    status: "pending",
    last_updated: new Date().toISOString(),
  }));

  const { error } = await supabase
    .from("user_onboarding_progress")
    .upsert(milestones, { onConflict: "user_id,role,milestone", ignoreDuplicates: true });

  if (error) return { error: error.message };
  return { ok: true };
}