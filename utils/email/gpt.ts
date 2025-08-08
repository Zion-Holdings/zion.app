import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const client = new OpenAI({ apiKey: OPENAI_API_KEY });

export type EmailPersona = "talent" | "hirer";

export type PersonalizationInput = {
  persona: EmailPersona;
  firstName?: string;
  context: string; // e.g., reason: inactivity 7 days, no invites, etc.
  callToAction: string;
  incentive?: string;
};

export async function generateEmailCopy(input: PersonalizationInput) {
  if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  const system = `You are an expert lifecycle email copywriter for the Zion AI Marketplace. Tone: friendly, concise, helpful. Keep subject lines under 60 chars. Email body under 140 words. Include one clear CTA.`;

  const user = `Write a re-engagement email.
Persona: ${input.persona}
Name: ${input.firstName || "there"}
Context: ${input.context}
CTA: ${input.callToAction}
${input.incentive ? `Incentive: ${input.incentive}` : ""}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
  });

  const content = response.choices?.[0]?.message?.content || "";

  // naive split: expect first line as subject if prefixed or use first sentence
  let subject = "Quick update from Zion";
  let body = content;
  const lines = content.split("\n").map((l) => l.trim()).filter(Boolean);
  const subjectLine = lines.find((l) => /^subject[:\-]/i.test(l));
  if (subjectLine) {
    subject = subjectLine.replace(/^subject[:\-]\s*/i, "").trim();
    body = lines.filter((l) => l !== subjectLine).join("\n");
  } else if (lines.length > 1) {
    subject = lines[0].replace(/\.$/, "");
    body = lines.slice(1).join("\n");
  }

  return { subject, bodyHtml: body.replace(/\n/g, "<br/>") };
}