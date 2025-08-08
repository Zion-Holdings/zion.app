import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { TALENT_MILESTONES, CLIENT_MILESTONES } from "../../../utils/onboarding/milestones";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Protect with an internal token if exposed
  const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();

  const keyMilestones = [
    ...TALENT_MILESTONES.filter((m) => m.isKey).map((m) => ({ role: "talent", key: m.key })),
    ...CLIENT_MILESTONES.filter((m) => m.isKey).map((m) => ({ role: "client", key: m.key })),
  ];

  // Find users with pending key milestones older than cutoff
  const { data, error } = await supabase
    .from("user_onboarding_progress")
    .select("user_id, role, milestone, status, last_updated")
    .in(
      "milestone",
      keyMilestones.map((k) => k.key)
    )
    .eq("status", "pending")
    .lt("last_updated", cutoff);

  if (error) return res.status(500).json({ error: error.message });

  // For each, attempt to send a nudge email using a placeholder mailer
  const unique = new Map<string, { user_id: string; role: string; milestone: string }[]>();
  for (const row of data || []) {
    const key = `${row.user_id}`;
    const arr = unique.get(key) || [];
    arr.push({ user_id: row.user_id, role: row.role, milestone: row.milestone });
    unique.set(key, arr);
  }

  const { data: users } = await supabase.auth.admin.listUsers();
  const idToEmailEntries = (users?.users || []).map(
    (u: any) => [u.id as string, (u.email as string | undefined)] as readonly [string, string | undefined]
  );
  const idToEmail = new Map<string, string | undefined>(idToEmailEntries as readonly (readonly [string, string | undefined])[]);

  const notifications: any[] = [];
  unique.forEach((rows, userId) => {
    const email = idToEmail.get(userId);
    const first = rows[0];
    notifications.push({ userId, email, role: first.role, milestone: first.milestone });
  });

  // TODO: integrate with SendGrid or Supabase functions here
  console.log("Would send nudges:", notifications);

  return res.status(200).json({ count: notifications.length });
}