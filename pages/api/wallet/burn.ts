import type { NextApiRequest, NextApiResponse } from "next";
import { burnTokens, burnForFeature } from "../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason, feature, metadata } = req.body || {};
  if (!userId) return res.status(400).json({ error: "userId required" });
  try {
    const tx = feature
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason || "burn", metadata);
    return res.status(200).json({ tx });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}