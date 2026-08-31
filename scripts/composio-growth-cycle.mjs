#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

function withJitter(ms) {
  return ms + Math.floor(Math.random() * 0.3 * ms);
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry(fn, label, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fn();
      if (res && res._error) throw new Error(res._error);
      return res;
    } catch (err) {
      const wait = withJitter(1000 * 2 ** i);
      if (i === attempts - 1) return { skipped: true, reason: `${label}_failed`, error: String(err) };
      await sleep(wait);
    }
  }
}

function runComposio(tool, payload = {}) {
  return withRetry(async () => {
    const json = JSON.stringify(payload);
    const out = execSync(`composio execute ${tool} -d '${json.replace(/'/g, "'\\''")}'`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 60_000,
    });
    let data;
    try { data = JSON.parse(out); } catch { return { raw: out.trim() }; }
    if (data?.error) throw new Error(data.error);
    return data;
  }, tool);
}

async function notifyError({ stage, error }) {
  console.error(`[composio][error] ${stage}:`, error);
  return { stage, error };
}

async function notifyLeadCaptured({ lead, linearId, notionId }) {
  console.log(`[composio][lead] ${lead.email}: linear=${linearId} notion=${notionId}`);
  return { lead, linearId, notionId };
}

async function growthCycle({ lead, dryRun = true, concurrency = 2, delayMs = 1000, config = {} } = {}) {
  const {
    teamId = "a92e1670-db71-4cec-bb71-b3c647ca164b",
    notionDatabaseId,
    apolloEnabled = true,
    resendEnabled = true,
    youtubeEnabled = false,
    openRouterEnabled = false,
    whatsappEnabled = false,
    calendarEnabled = false,
    linkedinEnabled = false,
    supabaseRef,
    site_url = "https://ziontechgroup.com",
    telegramChatId,
    discordChannelId,
  } = config;

  const result = { lead: lead.email, dryRun, steps: {} };

  result.steps.hunter = await withRetry(async () => {
    const out = runComposio("HUNTER_EMAIL_VERIFIER", { email: lead.email });
    return out;
  }, "hunter");
  if (!dryRun && !result.steps.hunter.ok) {
    await notifyError({ stage: "hunter", error: result.steps.hunter });
    return { ...result, stage: "hunter_failed" };
  }

  if (apolloEnabled) {
    result.steps.apollo = await withRetry(async () => {
      const out = runComposio("APOLLO_PEOPLE_ENRICHMENT", {
        q_keywords: lead.domain || lead.email,
        person_titles: ["CTO", "VP Engineering"],
      });
      return out;
    }, "apollo");
  }

  const linearDescription = `Email: ${lead.email}\nStatus verificação: ${result.steps.hunter?.ok ? (result.steps.hunter?.data?.data?.status || "ok") : "n/a"}\nEnriquecimento: ${result.steps.apollo?.ok ? "ok" : "n/a"}`;
  result.steps.linear = await withRetry(async () => {
    const out = runComposio("LINEAR_CREATE_LINEAR_ISSUE", {
      team_id: teamId,
      title: `Outreach: ${lead.firstName || lead.email}`,
      description: linearDescription,
      priority: 3,
    });
    return out;
  }, "linear");
  if (!dryRun && !result.steps.linear.ok) {
    await notifyError({ stage: "linear", error: result.steps.linear });
    return { ...result, stage: "linear_failed" };
  }

  if (notionDatabaseId) {
    result.steps.notion = await withRetry(async () => {
      const out = runComposio("NOTION_CREATE_NOTION_PAGE", {
        parent: { database_id: notionDatabaseId },
        title: lead.firstName || lead.email,
        properties: [
          { name: "Email", type: "email", value: lead.email },
          { name: "Company", type: "rich_text", value: lead.company || "" },
          { name: "Source", type: "select", value: "outreach" },
          { name: "Status", type: "status", value: "New" },
        ],
      });
      return out;
    }, "notion");
  } else {
    result.steps.notion = { skipped: true, reason: "no_notion_database" };
  }

  result.steps.firecrawl = await withRetry(async () => {
    const out = runComposio("FIRECRAWL_SCRAPE", { url: site_url });
    return out;
  }, "firecrawl");

  result.steps.gsc = await withRetry(async () => {
    const out = runComposio("GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY", {
      site_url,
      start_date: "2026-08-01",
      end_date: "2026-08-27",
      row_limit: 20,
      start_row: 0,
    });
    return out;
  }, "gsc");

  result.steps.serpapi = await withRetry(async () => {
    const out = runComposio("SERPAPI_SEARCH", {
      query: "ziontechgroup.com AI IT services",
    });
    return out;
  }, "serpapi");

  if (resendEnabled) {
    result.steps.resend = await withRetry(async () => {
      const out = runComposio("RESEND_CREATE_CONTACT", {
        email: lead.email,
        firstName: lead.firstName,
        lastName: lead.lastName,
        audienceId: "36bc979f-6357-4916-afd3-e4b6e9bdf873",
      });
      return out;
    }, "resend");
  } else {
    result.steps.resend = { skipped: true, reason: "resend_disabled" };
  }

  if (youtubeEnabled) {
    result.steps.youtube = await withRetry(async () => {
      const out = runComposio("YOUTUBE_LIST_CHANNEL_VIDEOS", {
        query: `${lead.company || lead.email} AI automation`,
        maxResults: 3,
      });
      return out;
    }, "youtube");
    if (!result.steps.youtube.ok) {
      result.steps.youtube = { skipped: true, reason: "youtube_failed" };
    }
  }

  if (openRouterEnabled) {
    result.steps.openrouter = await withRetry(async () => {
      const out = runComposio("OPENROUTER_CREATE_CHAT_COMPLETION", {
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful outreach assistant." },
          {
            role: "user",
            content: `Write a short follow-up to ${lead.firstName || lead.email} from ${lead.company || "their company"} about AI automation. Max 100 words.`,
          },
        ],
      });
      return out;
    }, "openrouter");
    if (!result.steps.openrouter.ok) {
      result.steps.openrouter = { skipped: true, reason: "openrouter_failed" };
    }
  }

  if (whatsappEnabled) {
    result.steps.whatsapp = await withRetry(async () => {
      const out = runComposio("WHATSAPP_SEND_MESSAGE", {
        to: lead.phone || process.env.COMPOSIO_WHATSAPP_TO,
        text: `Hi ${lead.firstName || "there"}, this is Zion Tech Group. Let's talk about AI automation.`,
      });
      return out;
    }, "whatsapp");
    if (!result.steps.whatsapp.ok) {
      result.steps.whatsapp = { skipped: true, reason: "whatsapp_failed" };
    }
  }

  result.steps.gmail = await withRetry(async () => {
    const out = runComposio("GMAIL_FETCH_EMAILS", {
      max_results: 5,
      query: `from:${lead.email}`,
    });
    return out;
  }, "gmail");

  result.steps.gmail_create_draft = await withRetry(async () => {
    const out = runComposio("GMAIL_CREATE_EMAIL_DRAFT", {
      recipient_email: lead.email,
      subject: "Next step: proposal/short engagement",
      body: `Hi ${lead.firstName || ""},
Following up from outreach. If AI/IT support is useful this quarter, I can send a 1-page proposal within 24 hours.
Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com`,
    });
    return out;
  }, "gmail_draft");

  result.steps.brevo = await withRetry(async () => {
    const out = runComposio("BREVO_GET_ALL_CONTACTS", {
      limit: 10,
      offset: 0,
    });
    return out;
  }, "brevo");

  if (linkedinEnabled && !dryRun) {
    result.steps.linkedin = await withRetry(async () => {
      const out = runComposio("LINKEDIN_CREATE_LINKED_IN_POST", {
        author: "urn:li:person:kVn6PzlxZl",
        commentary: `New lead captured: ${lead.firstName || lead.email} via Zion automation.`,
        visibility: "PUBLIC",
      });
      return out;
    }, "linkedin");
  } else if (linkedinEnabled && dryRun) {
    result.steps.linkedin = { skipped: true, reason: "dry_run" };
  }

  result.steps.github = await withRetry(async () => {
    const out = runComposio("GITHUB_CREATE_AN_ISSUE", {
      owner: "Zion-support",
      repo: "zion-support.github.io",
      title: `Lead: ${lead.firstName || lead.email}`,
      body: `Email: ${lead.email}\nLinear: ${result.steps.linear?.data?.id || "n/a"}\nNotion: ${result.steps.notion?.data?.id || "n/a"}\nResend: ${result.steps.resend?.data?.id || "n/a"}\nSerpAPI: ${result.steps.serpapi?.ok ? "ok" : "n/a"}\nFirecrawl: ${result.steps.firecrawl?.ok ? "ok" : "n/a"}`,
    });
    return out;
  }, "github");
  if (!dryRun && !result.steps.github.ok) {
    result.steps.github = { skipped: true, reason: "github_failed" };
  }

  if (supabaseRef && !dryRun) {
    result.steps.supabase = await withRetry(async () => {
      const out = runComposio("SUPABASE_BETA_RUN_SQL_QUERY", {
        ref: supabaseRef,
        query: `INSERT INTO leads (email, source, created_at) VALUES ('${lead.email}', 'outreach', now()) RETURNING id;`,
      });
      return out;
    }, "supabase");
  } else if (supabaseRef && dryRun) {
    result.steps.supabase = { skipped: true, reason: "dry_run" };
  }

  result.steps.stripe = await withRetry(async () => {
    const out = runComposio("STRIPE_CREATE_CUSTOMER", {
      email: lead.email,
      name: `${lead.firstName || ""} ${lead.lastName || ""}`.trim() || lead.email,
      description: "Zion outreach lead",
    });
    return out;
  }, "stripe");

  result.steps.linkedin = await withRetry(async () => {
    const out = runComposio("LINKEDIN_CREATE_LINKED_IN_POST", {
      author: "urn:li:person:kVn6PzlxZl",
      commentary: `New lead captured: ${lead.firstName || lead.email} via Zion automation.`,
      visibility: "PUBLIC",
    });
    return out;
  }, "linkedin");

  await notifyLeadCaptured({ lead, linearId: result.steps.linear?.data?.id, notionId: result.steps.notion?.data?.id, telegramChatId, discordChannelId });

  return { ...result, stage: "done" };
}

export async function main() {
  const demoLead = { email: "kleber@ziontechgroup.com", firstName: "Kleber", lastName: "Alcatrão", company: "Zion Tech Group" };
  const out = await growthCycle({ lead: demoLead, dryRun: true });
  console.log(JSON.stringify(out, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
