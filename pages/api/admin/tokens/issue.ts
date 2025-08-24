import type { NextApiRequest, NextApiResponse } from "next";
import { issueTokens } from "../../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  try {
    const tx = issueTokens(userId, Math.floor(amount), reason || "admin_issue");
    return res.status(200).json({ tx });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}