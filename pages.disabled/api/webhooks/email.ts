import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "../../../utils/supabase/admin";

const PROVIDER_WEBHOOK_SECRET = process.env.EMAIL_WEBHOOK_SECRET || "";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") return res.status(405).end();

    // Simple shared-secret check; replace with provider signature verification if available
    const secret = req.headers["x-provider-secret"] || req.query.secret;
    if (!PROVIDER_WEBHOOK_SECRET || secret !== PROVIDER_WEBHOOK_SECRET) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const event = req.body || {};
    const type: string = event.type || "unknown";
    const messageId: string | undefined = event.data?.id || event.messageId;
    const email: string | undefined = event.data?.to || event.to;
    const subject: string | undefined = event.data?.subject || event.subject;

    if (!messageId || !email) return res.status(400).json({ error: "Missing message id or email" });

    const { error } = await supabaseAdmin.from("email_events").insert({
      id: messageId,
      email,
      type,
      payload: event,
    });
    if (error) throw error;

    return res.json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Internal Error" });
  }
}