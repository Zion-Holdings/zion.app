import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "../../../utils/supabase/admin";
import { randomUUID } from "crypto";

const WEBHOOK_SECRET = process.env.RETENTION_WEBHOOK_SECRET || "";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") return res.status(405).end();
    const secret = req.headers["x-operator-secret"] || req.query.secret;
    if (!WEBHOOK_SECRET || secret !== WEBHOOK_SECRET) return res.status(401).json({ error: "Unauthorized" });

    const { user_id, email, first_name, persona } = req.body || {};
    if (!user_id || !email) return res.status(400).json({ error: "Missing user_id or email" });

    const { error } = await supabaseAdmin.from("retention_events").insert({
      id: randomUUID(),
      user_id,
      type: "signup",
      payload: { email, first_name, persona },
    });
    if (error) throw error;

    return res.json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Internal Error" });
  }
}