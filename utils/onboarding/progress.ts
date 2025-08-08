import { supabase } from "../supabase/client";
import { UserRole, isValidMilestone } from "./milestones";

export type OnboardingProgressRow = {
  user_id: string;
  role: UserRole;
  milestone: string;
  status: "pending" | "complete";
  last_updated?: string;
  created_at?: string;
};

export async function upsertMilestone(
  userId: string,
  role: UserRole,
  milestone: string,
  status: "pending" | "complete"
): Promise<{ error?: string }> {
  if (!userId) return { error: "Missing userId" };
  if (!isValidMilestone(role, milestone)) return { error: "Invalid milestone" };

  const { error } = await supabase
    .from("user_onboarding_progress")
    .upsert(
      {
        user_id: userId,
        role,
        milestone,
        status,
        last_updated: new Date().toISOString(),
      },
      { onConflict: "user_id,role,milestone" }
    );

  if (error) return { error: error.message };
  return {};
}

export async function getUserProgress(
  userId: string,
  role?: UserRole
): Promise<{ rows: OnboardingProgressRow[]; error?: string }> {
  if (!userId) return { rows: [], error: "Missing userId" };
  let query = supabase
    .from("user_onboarding_progress")
    .select("user_id, role, milestone, status, last_updated, created_at")
    .eq("user_id", userId);

  if (role) query = query.eq("role", role);

  const { data, error } = await query;
  if (error) return { rows: [], error: error.message };
  return { rows: data as OnboardingProgressRow[] };
}