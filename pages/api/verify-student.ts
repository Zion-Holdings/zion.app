import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";

const TALENTS_FILE = path.join(process.cwd(), "data", "talents", "talents.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now();
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!(await enforceRateLimit(auth.apiKey))) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 429);
    return res.status(429).json({ error: "Rate limit exceeded" });
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 405);
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const { email, programTrack } = req.body || {};
  if (!email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: "email required" });
  }
  const talents = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const match = talents.find((t: any) => t.email === email && (!programTrack || t.programTrack === programTrack));
  const verified = Boolean(match && match.certificationStatus === "completed");
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 200);
  return res.status(200).json({ verified });
}