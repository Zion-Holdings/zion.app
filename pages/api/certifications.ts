import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";

const CERTS_FILE = path.join(process.cwd(), "data", "certifications", "certifications.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const certifications = (await fs.pathExists(CERTS_FILE)) ? await fs.readJSON(CERTS_FILE) : [];
    return res.status(200).json({ certifications });
  } catch (e) {
    return res.status(500).json({ error: "Failed to load certifications" });
  }
}