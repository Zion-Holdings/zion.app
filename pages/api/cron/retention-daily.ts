import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "../../../utils/supabase/admin";
import { sendEmail } from "../../../utils/email/resend";
import { generateEmailCopy } from "../../../utils/email/gpt";
import { v4 as uuidv4 } from "uuid";

const WEBHOOK_SECRET = process.env.RETENTION_WEBHOOK_SECRET || "";

type EmailLog = {
  id: string;
  user_id: string;
  email: string;
  flow: string;
  step: string;
  dedupe_key: string;
  subject: string;
  status: string;
};

async function upsertEmailLog(log: EmailLog) {
  const { error } = await supabaseAdmin
    .from("email_logs")
    .upsert(log, { onConflict: "dedupe_key" });
  if (error) throw error;
}

function requireSecret(req: NextApiRequest) {
  const secret = req.headers["x-operator-secret"] || req.query.secret;
  if (!WEBHOOK_SECRET || secret !== WEBHOOK_SECRET) {
    throw new Error("Unauthorized");
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") return res.status(405).end();
    requireSecret(req);

    // 1) Day 0: Welcome for new users created in last 24h and not sent
    const { data: newUsers, error: nuErr } = await supabaseAdmin
      .from("user_metrics")
      .select("user_id, email, first_name, created_at")
      .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
    if (nuErr) throw nuErr;

    for (const user of newUsers || []) {
      const dedupeKey = `${user.user_id}:welcome:day0`;
      const { data: existing } = await supabaseAdmin
        .from("email_logs")
        .select("id")
        .eq("dedupe_key", dedupeKey)
        .limit(1)
        .maybeSingle();
      if (existing) continue;

      const copy = await generateEmailCopy({
        persona: "talent",
        firstName: user.first_name || undefined,
        context: "New user signup. Send a warm, actionable welcome with onboarding checklist link",
        callToAction: "Open your Zion checklist",
      });

      const html = `
        <div style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#111;">
          <p>Hi ${user.first_name || "there"},</p>
          ${copy.bodyHtml}
          <p><a href="https://zion.app/onboarding" style="color:#4f46e5;">View your onboarding checklist →</a></p>
        </div>`;

      const resp = await sendEmail({
        to: user.email,
        subject: copy.subject || "Welcome to Zion! Here's what to do next",
        html,
        tags: [{ name: "flow", value: "welcome" }, { name: "step", value: "day0" }],
      });

      await upsertEmailLog({
        id: uuidv4(),
        user_id: user.user_id,
        email: user.email,
        flow: "welcome",
        step: "day0",
        dedupe_key: dedupeKey,
        subject: copy.subject,
        status: resp?.error ? "error" : "sent",
      });
    }

    // 2) Inactivity 3/7/30 days
    const now = Date.now();
    const windows = [3, 7, 30];
    for (const days of windows) {
      const cutoff = new Date(now - days * 24 * 60 * 60 * 1000).toISOString();
      const { data: inactive, error: inErr } = await supabaseAdmin
        .from("user_metrics")
        .select("user_id, email, first_name, last_active_at, persona, profile_complete")
        .lte("last_active_at", cutoff);
      if (inErr) throw inErr;

      for (const u of inactive || []) {
        const step = `inactive-${days}d`;
        const dedupeKey = `${u.user_id}:reactivation:${step}`;
        const { data: existing } = await supabaseAdmin
          .from("email_logs")
          .select("id")
          .eq("dedupe_key", dedupeKey)
          .limit(1)
          .maybeSingle();
        if (existing) continue;

        const incompleteProfile = u.profile_complete === false;
        const contextParts = [
          `User inactive ${days} days`,
          incompleteProfile ? "Profile incomplete" : "",
        ].filter(Boolean);

        const copy = await generateEmailCopy({
          persona: (u.persona as any) || "talent",
          firstName: u.first_name || undefined,
          context: contextParts.join("; ") || `Inactivity ${days} days`,
          callToAction: incompleteProfile ? "Complete your profile" : "Browse top talent/projects",
          incentive: incompleteProfile ? "Complete your profile this week and unlock premium visibility" : undefined,
        });

        const html = `
          <div style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#111;">
            <p>Hi ${u.first_name || "there"},</p>
            ${copy.bodyHtml}
            <p><a href="https://zion.app/${(u.persona === "hirer") ? "talent" : "projects"}" style="color:#4f46e5;">Take action →</a></p>
          </div>`;

        const resp = await sendEmail({
          to: u.email,
          subject: copy.subject || (incompleteProfile ? "Add your availability to get matched" : "Zion’s top talent this week — don’t miss out"),
          html,
          tags: [{ name: "flow", value: "reactivation" }, { name: "step", value: step }],
        });

        await upsertEmailLog({
          id: uuidv4(),
          user_id: u.user_id,
          email: u.email,
          flow: "reactivation",
          step,
          dedupe_key: dedupeKey,
          subject: copy.subject,
          status: resp?.error ? "error" : "sent",
        });
      }
    }

    // 3) Job not filled: jobs open > 7 days without accepted applications
    const { data: jobs } = await supabaseAdmin
      .from("jobs")
      .select("id, owner_user_id, title, created_at, status, invited_count, application_count, filled_at, owner_email, owner_first_name")
      .eq("status", "open")
      .lte("created_at", new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString());

    for (const j of jobs || []) {
      const dedupeKey = `${j.owner_user_id}:job-not-filled:${j.id}`;
      const { data: existing } = await supabaseAdmin
        .from("email_logs")
        .select("id")
        .eq("dedupe_key", dedupeKey)
        .limit(1)
        .maybeSingle();
      if (existing) continue;

      const copy = await generateEmailCopy({
        persona: "hirer",
        firstName: j.owner_first_name || undefined,
        context: `Job not filled: ${j.title}. Encourage sending invites to talent to get quotes faster`,
        callToAction: "Invite talent now",
      });

      const html = `
        <div style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#111;">
          <p>Hi ${j.owner_first_name || "there"},</p>
          ${copy.bodyHtml}
          <p><a href="https://zion.app/jobs/${j.id}/invite" style="color:#4f46e5;">Invite talent now →</a></p>
        </div>`;

      const resp = await sendEmail({
        to: j.owner_email,
        subject: copy.subject || "Invite talent now to get quotes faster",
        html,
        tags: [{ name: "flow", value: "job-not-filled" }, { name: "step", value: "reminder" }],
      });

      await upsertEmailLog({
        id: uuidv4(),
        user_id: j.owner_user_id,
        email: j.owner_email,
        flow: "job-not-filled",
        step: "reminder",
        dedupe_key: dedupeKey,
        subject: copy.subject,
        status: resp?.error ? "error" : "sent",
      });
    }

    // 4) Talent not receiving applications: users with persona=talent and 0 applications in last 7 days
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { data: talents } = await supabaseAdmin
      .from("user_metrics")
      .select("user_id, email, first_name")
      .eq("persona", "talent")
      .lte("last_received_application_at", sevenDaysAgo);

    for (const t of (talents || [])) {
      const dedupeKey = `${t.user_id}:talent-no-apps:7d`;
      const { data: existing } = await supabaseAdmin
        .from("email_logs")
        .select("id")
        .eq("dedupe_key", dedupeKey)
        .limit(1)
        .maybeSingle();
      if (existing) continue;

      const copy = await generateEmailCopy({
        persona: "talent",
        firstName: t.first_name || undefined,
        context: "Talent has not received applications in 7 days. Re-engage with new projects and profile tuning.",
        callToAction: "Discover new projects",
      });

      const html = `
        <div style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#111;">
          <p>Hi ${t.first_name || "there"},</p>
          ${copy.bodyHtml}
          <p><a href="https://zion.app/projects" style="color:#4f46e5;">See new projects →</a></p>
        </div>`;

      const resp = await sendEmail({
        to: t.email,
        subject: copy.subject || "New projects waiting for your expertise",
        html,
        tags: [{ name: "flow", value: "talent-reactivation" }, { name: "step", value: "7d" }],
      });

      await upsertEmailLog({
        id: uuidv4(),
        user_id: t.user_id,
        email: t.email,
        flow: "talent-reactivation",
        step: "7d",
        dedupe_key: dedupeKey,
        subject: copy.subject,
        status: resp?.error ? "error" : "sent",
      });
    }

    return res.json({ ok: true });
  } catch (e: any) {
    const message = e?.message || "Internal Error";
    return res.status(message === "Unauthorized" ? 401 : 500).json({ error: message });
  }
}