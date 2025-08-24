import { supabase } from "../supabase/client";
import type {
  ApplicationFilters,
  CandidateStatus,
  JobApplication,
  TalentProfile,
} from "../types/hiring";

function mapRowToApplication(row: any): JobApplication {
  const talent: TalentProfile | undefined = row.talent
    ? {
        id: row.talent.id ?? row.talent_id,
        name: row.talent.name ?? row.talent_name ?? "Unnamed Talent",
        title: row.talent.title ?? row.talent_title ?? undefined,
        photoUrl: row.talent.photo_url ?? row.talent_photo ?? undefined,
      }
    : {
        id: row.talent_id,
        name: row.talent_name ?? "Unnamed Talent",
        title: row.talent_title ?? undefined,
        photoUrl: row.talent_photo ?? undefined,
      };

  return {
    id: row.id,
    jobId: row.job_id,
    talentId: row.talent_id,
    status: row.status,
    score: row.score ?? null,
    resumeUrl: row.resume_url ?? null,
    notes: row.notes ?? null,
    createdAt: row.created_at ?? undefined,
    updatedAt: row.updated_at ?? undefined,
    lastActivityAt: row.last_activity_at ?? null,
    talent,
  };
}

export async function fetchJobApplications(
  jobId?: string,
  filters?: ApplicationFilters
): Promise<JobApplication[]> {
  let query = supabase
    .from("job_applications")
    .select(
      "id, job_id, talent_id, status, score, resume_url, notes, created_at, updated_at, last_activity_at, talent_name, talent_title, talent_photo"
    );

  if (jobId) {
    query = query.eq("job_id", jobId);
  }

  if (filters?.status && filters.status !== "all") {
    query = query.eq("status", filters.status);
  }

  if (typeof filters?.minScore === "number") {
    query = query.gte("score", filters.minScore);
  }

  if (filters?.fromDate) {
    query = query.gte("created_at", filters.fromDate.toISOString());
  }

  if (filters?.toDate) {
    query = query.lte("created_at", filters.toDate.toISOString());
  }

  const { data, error } = await query.order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching applications", error);
    return [];
  }

  return (data ?? []).map(mapRowToApplication);
}

export async function updateApplicationStatus(
  applicationId: string,
  newStatus: CandidateStatus
): Promise<boolean> {
  const { error } = await supabase
    .from("job_applications")
    .update({ status: newStatus, last_activity_at: new Date().toISOString() })
    .eq("id", applicationId);

  if (error) {
    console.error("Error updating application status", error);
    return false;
  }
  return true;
}

export async function updateApplicationNotes(
  applicationId: string,
  notes: string
): Promise<boolean> {
  const { error } = await supabase
    .from("job_applications")
    .update({ notes, last_activity_at: new Date().toISOString() })
    .eq("id", applicationId);

  if (error) {
    console.error("Error updating application notes", error);
    return false;
  }
  return true;
}

export async function touchApplicationActivity(
  applicationId: string
): Promise<void> {
  await supabase
    .from("job_applications")
    .update({ last_activity_at: new Date().toISOString() })
    .eq("id", applicationId);
}