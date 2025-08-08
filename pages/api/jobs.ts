import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";

const JOBS_FILE = path.join(process.cwd(), "data", "jobs", "jobs.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const jobs = (await fs.pathExists(JOBS_FILE)) ? await fs.readJSON(JOBS_FILE) : [];
    return res.status(200).json({ jobs });
  } catch (e) {
    return res.status(500).json({ error: "Failed to load jobs" });
  }
}