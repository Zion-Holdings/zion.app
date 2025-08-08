import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { getUserProgress } from "../../../utils/onboarding/progress";
import { UserRole } from "../../../utils/onboarding/milestones";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const role = (req.query.role as UserRole) || ("talent" as UserRole);
  const { data: auth } = await supabase.auth.getUser(
    req.headers.authorization?.replace("Bearer ", "")
  );
  const userId = auth?.user?.id;
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  const { rows, error } = await getUserProgress(userId, role);
  if (error) return res.status(400).json({ error });

  return res.status(200).json({ rows });
}