import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import type { AiAssistRequest, AiAssistResponse } from "../../../utils/types/portfolio";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AiAssistResponse>
) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const body = req.body as AiAssistRequest;
  const { action, text, context } = body || {};

  if (!action) {
    res.status(400).json({ ok: false, error: "Missing action" });
    return;
  }

  try {
    const system =
      "You are an expert AI resume and portfolio assistant for Zion AI Marketplace. You improve clarity, concision, and impact without fabricating facts.";

    let user: string = "";
    if (action === "improve-summary") {
      user = `Improve this summary. Keep it under 120 words. Use a confident, credible tone.\n\n${text ?? ""}`;
    } else if (action === "format-description") {
      user = `Rewrite this role/project description to be action-oriented, quantifiable where possible, and ATS-friendly. Limit to ~120 words.\n\n${text ?? ""}`;
    } else if (action === "suggest-bullets") {
      user = `Suggest 4-6 strong resume bullet points for the role/project based on the info below. Each bullet should start with a strong verb and include impact. Return as a JSON array.\n\nContext: ${JSON.stringify(
        context ?? {}
      )}\n\nText: ${text ?? ""}`;
    } else {
      res.status(400).json({ ok: false, error: "Unknown action" });
      return;
    }

    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.5,
    });

    const content = response.choices?.[0]?.message?.content?.trim() ?? "";

    if (action === "suggest-bullets") {
      try {
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) {
          res.status(200).json({ ok: true, result: parsed as string[] });
          return;
        }
      } catch (_) {
        // fallthrough to return as text
      }
    }

    res.status(200).json({ ok: true, result: content });
  } catch (error: any) {
    res.status(500).json({ ok: false, error: error?.message ?? "AI error" });
  }
}