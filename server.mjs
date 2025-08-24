import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import { RateLimiterMemory } from "rate-limiter-flexible";
import OpenAI from "openai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
app.use(cors({ origin: allowedOrigin }));
app.use(compression());
app.use(express.json({ limit: "1mb" }));

// Static assets (widget + demo)
app.use(express.static(path.join(__dirname, "public"), { fallthrough: true }));

const openaiApiKey = process.env.OPENAI_API_KEY;
if (!openaiApiKey) {
  // eslint-disable-next-line no-console
  console.warn("OPENAI_API_KEY not set. Set it in .env before using /api/chat.");
}
const openaiModel = process.env.OPENAI_MODEL || "gpt-4o-mini";
const openai = new OpenAI({ apiKey: openaiApiKey });

// Basic in-memory rate limiter (IP-based)
const rateLimiter = new RateLimiterMemory({ points: 30, duration: 60 });

// Minimal in-memory FAQ knowledge (can be expanded or replaced by a DB/retriever)
const faqEntries = [
  {
    q: "what is zion ai marketplace",
    a:
      "Zion AI Marketplace is a platform to discover, evaluate, and deploy AI models, agents, and tools. Browse curated listings, compare pricing and performance, and integrate with your stack using simple APIs."
  },
  {
    q: "pricing",
    a:
      "Pricing varies by listing. Many models charge by usage (per token or per request), while some offer subscriptions. Zion credits can be used across participating listings. View pricing on each listing page."
  },
  {
    q: "browse models",
    a:
      "Use the Marketplace Browse page to filter by category, modality, latency, cost, and provider. Each listing includes benchmarks, usage samples, and deployment options."
  },
  {
    q: "api integration",
    a:
      "Integrate via REST or SDKs. Each listing provides example requests and authentication steps. Generate an API key in your account settings, then follow the listing's Quickstart."
  },
  {
    q: "vendor onboarding",
    a:
      "Vendors can publish listings by applying in Vendor Portal > Onboard. Provide model details, pricing, usage limits, and compliance info. Listings undergo review before going live."
  },
  {
    q: "security",
    a:
      "Zion prioritizes security and compliance. Data is encrypted in transit and at rest. Access is scoped via API keys and roles. For enterprise, SOC 2 reports and DPA are available upon request."
  },
  {
    q: "refund",
    a:
      "For billing issues or refunds, open a support ticket from Billing > Invoices with the relevant invoice ID. Our team responds within 1-2 business days."
  }
];

function findFaqMatch(userText) {
  if (!userText) return null;
  const text = String(userText).toLowerCase();
  const match = faqEntries.find((f) => text.includes(f.q));
  return match ? match.a : null;
}

const systemPrompt = `
You are Zion Assistant, the official guide for the Zion AI Marketplace.
Your goals:
- Greet users warmly and succinctly.
- Answer frequently asked questions accurately and concisely.
- Guide users through platform features: browsing listings, comparing models, pricing/credits, API integration, deployments, account/billing, vendor onboarding, and security/compliance.
- When appropriate, offer small step-by-step instructions and relevant next actions.
- If a question is ambiguous, ask a brief clarifying question.
- Keep responses concise for chat. Use bullet points for structure.
- Avoid hallucinations; if unknown, say you are not sure and suggest where to find the info.

Brand voice: helpful, friendly, and professional.
`;

app.post("/api/chat", async (req, res) => {
  try {
    await rateLimiter.consume(req.ip);
  } catch {
    return res.status(429).json({ error: "Too many requests. Please slow down." });
  }

  const { messages, userId } = req.body || {};
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing messages array" });
  }

  // Add lightweight FAQ assist: if the last user message clearly matches an FAQ, prepend it as context
  const lastUser = [...messages].reverse().find((m) => m && m.role === "user");
  const faqAnswer = findFaqMatch(lastUser?.content || "");

  const augmentedMessages = [
    { role: "system", content: systemPrompt },
    faqAnswer
      ? {
          role: "system",
          content: `Helpful context (FAQ): ${faqAnswer}`
        }
      : null,
    ...messages
  ].filter(Boolean);

  try {
    const completion = await openai.chat.completions.create({
      model: openaiModel,
      messages: augmentedMessages,
      temperature: 0.3,
      max_tokens: 500,
      user: userId || undefined
    });

    const reply = completion.choices?.[0]?.message?.content || "";
    return res.json({ reply, model: openaiModel });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("OpenAI error", err?.response?.data || err?.message || err);
    return res.status(500).json({ error: "Upstream model error" });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Fallback to demo index if root is hit directly
app.get(["/", "/demo"], (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Zion Assistant server running on http://localhost:${port}`);
});