import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { authenticateRequest, enforceRateLimit, recordRequest } from "../../utils/api/partnerAuth";
import { v4 as uuidv4 } from "uuid";

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
  const { name, email, skills, programTrack, certificationStatus } = req.body || {};
  if (!name || !email) {
    await recordRequest(req, res, auth.partner, auth.apiKey, started, 400);
    return res.status(400).json({ error: "Missing required fields" });
  }
  await fs.ensureDir(path.dirname(TALENTS_FILE));
  const records = (await fs.pathExists(TALENTS_FILE)) ? await fs.readJSON(TALENTS_FILE) : [];
  const now = new Date().toISOString();
  const record = {
    id: uuidv4(),
    name,
    email,
    skills: skills || [],
    programTrack: programTrack || null,
    certificationStatus: certificationStatus || "pending",
    partnerId: auth.partner.id,
    createdAt: now,
  };
  records.push(record);
  await fs.writeJSON(TALENTS_FILE, records, { spaces: 2 });
  await recordRequest(req, res, auth.partner, auth.apiKey, started, 201);
  return res.status(201).json({ id: record.id });
}