import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { getUserProgress } from "../../../utils/onboarding/progress";
import { UserRole, getMilestonesForRole } from "../../../utils/onboarding/milestones";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

async function sendEmail(to: string, subject: string, message: string) {
  // Placeholder: integrate with Supabase functions or SendGrid as needed
  console.log("Send email:", { to, subject, message });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { role } = req.body as { role: UserRole };
  const { data: auth } = await supabase.auth.getUser(
    req.headers.authorization?.replace("Bearer ", "")
  );
  const userId = auth?.user?.id;
  const email = auth?.user?.email;
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  const { rows, error } = await getUserProgress(userId, role);
  if (error) return res.status(400).json({ error });

  const defs = getMilestonesForRole(role);
  const pending = defs.filter((d) => !rows.find((r) => r.milestone === d.key && r.status === "complete"));
  const nextMilestone = pending[0];

  const banner = nextMilestone
    ? `You're almost there! ${nextMilestone.label} to unlock AI matches.`
    : undefined;

  if (email && nextMilestone) {
    await sendEmail(
      email,
      "You're almost there! Complete your onboarding",
      banner as string
    );
  }

  return res.status(200).json({ banner, pending: pending.map((p) => p.key) });
}