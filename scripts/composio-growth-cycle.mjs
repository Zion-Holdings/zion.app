#!/usr/bin/env node
import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const COMPOSIO = (slug, data) => {
  const json = JSON.stringify(data ?? {});
  try {
    const out = execSync(`composio execute ${slug} -d '${json.replace(/'/g, "'\\''")}'`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 60_000,
    });
    try { return JSON.parse(out); }
    catch { return { raw: out.trim() }; }
  } catch (e) {
    return { _error: true, stderr: e.stderr?.toString?.() || String(e) };
  }
};

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const log = (label, payload) => console.log(`[composio] ${label}: ${JSON.stringify(payload)}`);

async function withBackoff(fn, max = 3, label) {
  for (let i = 0; i < max; i++) {
    const res = await fn();
    if (!res._error) return res;
    await sleep(withJitter(1000 * 2 ** i));
  }
  return fn();
}

const isFailed = (res) => res && typeof res === 'object' && res._error === true;

// --- Resilience ---
function withJitter(ms, jitter = 0.2) {
  return ms + (Math.random() - 0.5) * 2 * ms * jitter;
}

const circuitBreakerState = { failures: 0, successes: 0, state: 'closed', lastFailure: null };
const CIRCUIT_OPEN_THRESHOLD = 5;
const CIRCUIT_COOLDOWN = 30_000;

async function withCircuitBreaker(fn, label = 'composio') {
  const now = Date.now();
  if (circuitBreakerState.state === 'open') {
    if (now - circuitBreakerState.lastFailure > CIRCUIT_COOLDOWN) {
      circuitBreakerState.state = 'half-open';
      circuitBreakerState.failures = 0;
      circuitBreakerState.successes = 0;
    } else {
      return { _error: true, stderr: `circuit_open: ${label}` };
    }
  }
  const res = await fn();
  if (!res._error) {
    circuitBreakerState.successes++;
    if (circuitBreakerState.state === 'half-open' && circuitBreakerState.successes >= 2) {
      circuitBreakerState.state = 'closed';
      circuitBreakerState.failures = 0;
    }
    return res;
  }
  circuitBreakerState.failures++;
  circuitBreakerState.lastFailure = now;
  if (circuitBreakerState.failures >= CIRCUIT_OPEN_THRESHOLD) {
    circuitBreakerState.state = 'open';
    circuitBreakerState.failures = 0;
  }
  return res;
}

// --- PILLAR A: Lead Capture & CRM ---
export async function gmailSearchEmails({ query = 'newer_than:1d', maxResults = 20 }) {
  return await withBackoff(() => COMPOSIO('GMAIL_SEARCH_EMAILS', { q: query, max_results: maxResults }));
}
export async function createLinearIssue({ teamId, title, description, priority = 3 }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('LINEAR_CREATE_LINEAR_ISSUE', { team_id: teamId, title, description, priority }), 'linear'), undefined, 'linear');
}
export async function notionInsertRow({ databaseId, properties }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('NOTION_INSERT_ROW_DATABASE', { database_id: databaseId, properties }), 'notion'), undefined, 'notion');
}
export async function findFreeSlots({ calendarId, timeMin, timeMax, durationMinutes = 30 }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('GOOGLECALENDAR_FIND_FREE_SLOTS', { calendar_id: calendarId, time_min: timeMin, time_max: timeMax, duration_minutes: durationMinutes }), 'calendar'), undefined, 'calendar');
}
export async function createCalendarEvent({ calendarId, summary, start, end, attendees = [] }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('GOOGLECALENDAR_CREATE_EVENT', { calendar_id: calendarId, summary, start, end, attendees }), 'calendar'), undefined, 'calendar');
}

// --- PILLAR B: Content & SEO ---
export async function firecrawlScrape({ url }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('FIRECRAWL_SCRAPE', { url }), 'firecrawl'), undefined, 'firecrawl');
}
export async function gscSearchAnalytics({ site_url, start_date, end_date, row_limit = 20, startRow = 0 }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY', { site_url: site_url, start_date: start_date, end_date: end_date, row_limit: row_limit, start_row: startRow }), 'gsc'), undefined, 'gsc');
}
export async function resendCreateContact({ email, firstName, lastName }) {
  if (!process.env.COMPOSIO_RESEND_AUDIENCE_ID) return { skipped: true, reason: 'missing COMPOSIO_RESEND_AUDIENCE_ID' };
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('RESEND_CREATE_CONTACT', { email, first_name: firstName, last_name: lastName, audienceId: process.env.COMPOSIO_RESEND_AUDIENCE_ID }), 'resend'), undefined, 'resend');
}
export async function brevoCreateContact({ email, firstName, lastName, listId }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('BREVO_CREATE_CONTACT', { email, first_name: firstName, last_name: lastName, list_ids: [listId].filter(Boolean) }), 'brevo'), undefined, 'brevo');
}

// --- PILLAR C: DevOps ---
export async function githubCreateIssue({ owner, repo, title, body }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('GITHUB_CREATE_AN_ISSUE', { owner, repo, title, body }), 'github'), undefined, 'github');
}
export async function supabaseRunSql({ ref, query }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('SUPABASE_BETA_RUN_SQL_QUERY', { ref, query }), 'supabase'), undefined, 'supabase');
}
export async function cloudflarePurgeCache({ zoneId, files = [] }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('CLOUDFLARE_PURGE_CACHE', { zone_id: zoneId, files }), 'cloudflare'), undefined, 'cloudflare');
}

// --- PILLAR D: Enrichment ---
export async function verifyEmailHunter({ email }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('HUNTER_EMAIL_VERIFIER', { email }), 'hunter'), undefined, 'hunter');
}
export async function apolloEnrichPerson({ email }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('APOLLO_PEOPLE_ENRICHMENT', { email }), 'apollo'), undefined, 'apollo');
}
export async function linkedinCreatePost({ text, visibility = 'PUBLIC' }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('LINKEDIN_CREATE_LINKED_IN_POST', { text, visibility }), 'linkedin'), undefined, 'linkedin');
}
export async function youtubeSearch({ query, maxResults = 5 }) {
  return await withBackoff(() => withCircuitBreaker(() => COMPOSIO('YOUTUBE_SEARCH_YOUTUBE_VIDEOS', { query, maxResults }), 'youtube'), undefined, 'youtube');
}

// --- Pillar E: Content Creation ---
export async function canvaCreateDesign({ templateId, title, elements = [] }) {
  return await withBackoff(() => withCircuitBreaker(() =>
    COMPOSIO('CANVA_CREATE_DESIGN', {
      template_id: templateId,
      title,
      elements,
    }), 'canva'), undefined, 'canva');
}

export async function huggingFaceGenerateText({ model, prompt, maxTokens = 512, temperature = 0.7 }) {
  return await withBackoff(() => withCircuitBreaker(() =>
    COMPOSIO('HUGGINGFACE_TEXT_GENERATION', {
      model,
      inputs: prompt,
      parameters: { max_new_tokens: maxTokens, temperature },
    }), 'huggingface'), undefined, 'huggingface');
}

export async function checkGmailReply({ email, maxAgeDays = 7 }) {
  const res = await gmailSearchEmails({
    query: `from:${email} newer_than:${maxAgeDays}d`,
    maxResults: 5,
  });
  return Array.isArray(res) && res.length > 0;
}

// --- Alertas ---
export async function telegramSendMessage({ chatId, text, parseMode = 'Markdown' }) {
  return await withBackoff(() =>
    COMPOSIO('TELEGRAM_SEND_MESSAGE', {
      chat_id: chatId,
      text,
      parse_mode: parseMode,
    })
  );
}

export async function discordSendMessage({ channelId, content, embeds = [] }) {
  return await withBackoff(() =>
    COMPOSIO('DISCORD_SEND_MESSAGE', {
      channel_id: channelId,
      content,
      embeds,
    })
  );
}

export async function notifyLeadCaptured({ lead, linearId, notionId, telegramChatId, discordChannelId }) {
  const message = `🎯 *Novo Lead Capturado*\n\n` +
    `📧 Email: ${lead.email}\n` +
    `👤 Nome: ${lead.firstName || 'N/A'} ${lead.lastName || ''}\n` +
    `🏢 Empresa: ${lead.company || 'N/A'}\n` +
    `🔗 Linear: ${linearId || 'N/A'}\n` +
    `📝 Notion: ${notionId || 'N/A'}\n` +
    `⏰ ${new Date().toISOString()}`;

  if (telegramChatId) await telegramSendMessage({ chatId: telegramChatId, text: message });
  if (discordChannelId) await discordSendMessage({ channelId: discordChannelId, content: message });
}

export async function notifyError({ stage, error, telegramChatId, discordChannelId }) {
  const message = `❌ *Erro no Growth Cycle*\n\n` +
    `📍 Stage: ${stage}\n` +
    `💥 Erro: ${error?.stderr || String(error) || 'unknown'}\n` +
    `⏰ ${new Date().toISOString()}`;

  if (telegramChatId) await telegramSendMessage({ chatId: telegramChatId, text: message });
  if (discordChannelId) await discordSendMessage({ channelId: discordChannelId, content: message });
}

export async function notifyBatchComplete({ total, succeeded, failed, telegramChatId, discordChannelId }) {
  const message = `✅ *Batch Concluído*\n\n` +
    `📊 Total: ${total}\n` +
    `✔️ Sucesso: ${succeeded}\n` +
    `❌ Falhas: ${failed}\n` +
    `⏰ ${new Date().toISOString()}`;

  if (telegramChatId) await telegramSendMessage({ chatId: telegramChatId, text: message });
  if (discordChannelId) await discordSendMessage({ channelId: discordChannelId, content: message });
}

// --- Orchestrator ---
export async function growthCycle({ lead, config = {} }) {
  const {
    teamId = 'a92e1670-db71-4cec-bb71-b3c647ca164b',
    notionDatabaseId,
    apolloEnabled = true,
    resendEnabled = true,
    calendarEnabled = false,
    linkedinEnabled = false,
    supabaseRef,
    site_url = 'https://ziontechgroup.com',
    telegramChatId,
    discordChannelId,
  } = config;

  const result = { lead: lead.email, steps: {} };

  result.steps.hunter = await verifyEmailHunter({ email: lead.email });
  if (isFailed(result.steps.hunter)) {
    await notifyError({ stage: 'hunter', error: result.steps.hunter, telegramChatId, discordChannelId });
    return { ...result, stage: 'hunter_failed' };
  }

  if (apolloEnabled) {
    result.steps.apollo = await apolloEnrichPerson({ email: lead.email });
    if (isFailed(result.steps.apollo)) result.steps.apollo = { skipped: true, reason: 'apollo_failed' };
  }

  result.steps.linear = await createLinearIssue({
    teamId,
    title: `Outreach: ${lead.firstName || lead.email}`,
    description: `Email: ${lead.email}\nStatus verificação: ${result.steps.hunter?.status || 'n/a'}\nEnriquecimento: ${result.steps.apollo?.status || 'n/a'}`,
    priority: 3,
  });
  if (isFailed(result.steps.linear)) {
    await notifyError({ stage: 'linear', error: result.steps.linear, telegramChatId, discordChannelId });
    return { ...result, stage: 'linear_failed' };
  }

  if (notionDatabaseId) {
    result.steps.notion = await notionInsertRow({
      databaseId: notionDatabaseId,
      properties: [
        { name: 'Name', type: 'title', value: lead.firstName || 'Lead' },
        { name: 'Email', type: 'email', value: lead.email },
        { name: 'Company', type: 'rich_text', value: lead.company || '' },
        { name: 'Source', type: 'select', value: 'outreach' },
      ],
    });
    if (isFailed(result.steps.notion)) result.steps.notion = { skipped: true, reason: 'notion_failed' };
  }

  result.steps.firecrawl = await firecrawlScrape({ url: site_url });
  if (isFailed(result.steps.firecrawl)) result.steps.firecrawl = { skipped: true, reason: 'firecrawl_failed' };

  result.steps.gsc = await gscSearchAnalytics({
    site_url,
    start_date: '2026-08-01',
    end_date: '2026-08-27',
    row_limit: 20,
    startRow: 0,
  });
  if (isFailed(result.steps.gsc)) result.steps.gsc = { skipped: true, reason: 'gsc_failed' };

  if (resendEnabled) {
    result.steps.resend = await resendCreateContact({ email: lead.email, firstName: lead.firstName, lastName: lead.lastName });
    if (isFailed(result.steps.resend)) result.steps.resend = { skipped: true, reason: 'resend_failed' };
  } else {
    result.steps.resend = { skipped: true, reason: 'resend_disabled' };
  }

  if (linkedinEnabled) {
    result.steps.linkedin = await linkedinCreatePost({ text: `New lead captured: ${lead.firstName || lead.email} via Zion automation.` });
    if (isFailed(result.steps.linkedin)) result.steps.linkedin = { skipped: true, reason: 'linkedin_failed' };
  }

  result.steps.github = await githubCreateIssue({
    owner: 'Zion-support',
    repo: 'zion-support.github.io',
    title: `Lead: ${lead.firstName || lead.email}`,
    body: `Email: ${lead.email}\nLinear: ${result.steps.linear?.id || 'n/a'}\nNotion: ${result.steps.notion?.id || 'n/a'}`,
  });
  if (isFailed(result.steps.github)) result.steps.github = { skipped: true, reason: 'github_failed' };

  if (supabaseRef) {
    result.steps.supabase = await supabaseRunSql({
      ref: supabaseRef,
      query: `INSERT INTO leads (email, source, created_at) VALUES ('${lead.email}', 'outreach', now()) RETURNING id;`,
    });
    if (isFailed(result.steps.supabase)) result.steps.supabase = { skipped: true, reason: 'supabase_failed' };
  }

  await notifyLeadCaptured({ lead, linearId: result.steps.linear?.id, notionId: result.steps.notion?.id, telegramChatId, discordChannelId });

  log('growthCycle.done', { lead: lead.email, stage: 'done' });
  return { ...result, stage: 'done' };
}

export async function runGrowthBatch({ leads, config = {}, concurrency = 2, delayMs = 300 }) {
  const results = [];
  for (let i = 0; i < leads.length; i += concurrency) {
    const batch = leads.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(batch.map((lead) => growthCycle({ lead, config })));
    for (const settled of batchResults) {
      results.push(settled.status === 'fulfilled' ? settled.value : { _error: true, stderr: String(settled.reason) });
    }
    if (i + concurrency < leads.length) await sleep(delayMs);
  }
  return results;
}

export function loadLeadsFromCsv(path = 'scripts/growth-leads.csv') {
  const content = readFileSync(path, 'utf8').trim();
  const lines = content.split('\n');
  const headers = lines[0].split(',').map((h) => h.trim());
  const leads = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = lines[i].split(',');
    const lead = {};
    headers.forEach((h, idx) => { lead[h] = (values[idx] || '').trim(); });
    leads.push(lead);
  }
  return leads;
}

// --- Advanced: Continuous growth orchestration ---
export async function scheduleFollowUp({ lead, delayDays = 3, calendarId, summaryPrefix = 'Follow-up' }) {
  const start = new Date();
  start.setDate(start.getDate() + delayDays);
  const end = new Date(start);
  end.setHours(end.getHours() + 1);
  return await withBackoff(() =>
    COMPOSIO('GOOGLECALENDAR_CREATE_EVENT', {
      calendar_id: calendarId,
      summary: `${summaryPrefix}: ${lead.firstName || lead.email}`,
      start: { date_time: start.toISOString() },
      end: { date_time: end.toISOString() },
      attendees: [lead.email].filter(Boolean),
    })
  );
}

export async function sendFollowUpEmail({ lead, subject, body, to = lead.email }) {
  return await withBackoff(() =>
    COMPOSIO('GMAIL_SEND_EMAIL', {
      to,
      subject,
      body,
      from: process.env.COMPOSIO_GMAIL_SENDER || undefined,
    })
  );
}

export async function triggerGitHubWorkflow({ owner, repo, workflow, ref = 'main', inputs = {} }) {
  return await withBackoff(() =>
    COMPOSIO('GITHUB_CREATE_DISPATCH_WORKFLOW', {
      owner,
      repo,
      workflow,
      ref,
      inputs,
    })
  );
}

export async function monitorSeo({ site_url, start_date, end_date, row_limit = 20 }) {
  const [gsc, firecrawl] = await Promise.allSettled([
    gscSearchAnalytics({ site_url, start_date, end_date, row_limit }),
    firecrawlScrape({ url: site_url }),
  ]);
  const result = {};
  if (gsc.status === 'fulfilled') result.gsc = gsc.value;
  else result.gsc = { skipped: true, reason: 'gsc_failed' };
  if (firecrawl.status === 'fulfilled') result.firecrawl = firecrawl.value;
  else result.firecrawl = { skipped: true, reason: 'firecrawl_failed' };
  return result;
}

export async function generatePersonalizedCopy({ lead, tone = 'professional', maxWords = 150 }) {
  const prompt = `Write a personalized outreach email to ${lead.firstName || 'there'} at ${lead.company || 'their company'}. Tone: ${tone}. Max ${maxWords} words. Include a clear CTA for AI automation services.`;
  const response = await huggingFaceGenerateText({
    model: 'meta-llama/Llama-3.3-70B-Instruct',
    prompt,
    maxTokens: 300,
    temperature: 0.7,
  });
  return response.choices?.[0]?.text || response.raw || response;
}

export async function createCampaignImage({ lead, templateId, brandColors = ['#6366f1', '#8b5cf6'] }) {
  const design = await canvaCreateDesign({
    templateId,
    title: `Campaign - ${lead.firstName || lead.email}`,
    elements: [
      { type: 'text', content: `Hi ${lead.firstName || 'there'},` },
      { type: 'text', content: "Let's talk about AI automation" },
      { type: 'color', value: brandColors[0] },
    ],
  });
  return design;
}

export async function runGrowthBatchWithNotifications({ leads, config = {}, concurrency = 2, delayMs = 300, telegramChatId, discordChannelId }) {
  const results = await runGrowthBatch({ leads, config, concurrency, delayMs });
  const succeeded = results.filter((r) => !r._error || r.skipped).length;
  const failed = results.filter((r) => r._error && !r.skipped).length;
  await notifyBatchComplete({ total: results.length, succeeded, failed, telegramChatId, discordChannelId });
  return results;
}

export async function runContinuousCycle({ leads, config = {}, intervalMs = 60_000, maxRuns = 1, telegramChatId, discordChannelId }) {
  let run = 0;
  const allResults = [];
  while (run < maxRuns || maxRuns === 0) {
    log('cycle.start', { run, maxRuns });
    const batchResults = await runGrowthBatchWithNotifications({ leads, config, telegramChatId, discordChannelId });
    allResults.push(...batchResults);
    const hasCritical = batchResults.some((r) => r && typeof r === 'object' && (r.stage === 'hunter_failed' || r.stage === 'linear_failed'));
    if (hasCritical) {
      log('cycle.stop', { reason: 'critical_failure' });
      break;
    }
    if (maxRuns !== 0 && run + 1 >= maxRuns) break;
    await sleep(intervalMs);
    run++;
  }
  return allResults;
}

// --- Advanced Orchestration ---
export async function fullOutboundFlow({ lead, config = {} }) {
  const results = { lead: lead.email, steps: {} };

  results.steps.copy = await generatePersonalizedCopy({ lead });
  if (isFailed(results.steps.copy)) results.steps.copy = { skipped: true, reason: 'copy_failed' };

  results.steps.canva = await createCampaignImage({ lead, templateId: process.env.COMPOSIO_CANVA_TEMPLATE_ID });
  if (isFailed(results.steps.canva)) results.steps.canva = { skipped: true, reason: 'canva_failed' };

  results.steps.brevo = await brevoCreateContact({
    email: lead.email,
    firstName: lead.firstName,
    lastName: lead.lastName,
    listId: process.env.COMPOSIO_BREVO_LIST_ID,
  });
  if (isFailed(results.steps.brevo)) results.steps.brevo = { skipped: true, reason: 'brevo_failed' };

  results.steps.resend = await resendCreateContact({ email: lead.email, firstName: lead.firstName, lastName: lead.lastName });
  if (isFailed(results.steps.resend)) results.steps.resend = { skipped: true, reason: 'resend_failed' };

  return results;
}

const DEMO_LEAD = { email: 'lead1@example.com', firstName: 'Lead', lastName: 'One', company: 'Zion', subject: 'Follow-up Zion Tech Group', body: 'Olá, vamos conversar?' };

const isDirectRun = process.argv[1] && process.argv[1].endsWith('composio-growth-cycle.mjs');
if (isDirectRun) {
  (async () => {
    try {
      const r = await growthCycle({ lead: DEMO_LEAD });
      console.log(JSON.stringify(r, null, 2));
      process.exit(r._error ? 1 : 0);
    } catch (e) {
      console.error(JSON.stringify({ _error: true, stderr: String(e) }));
      process.exit(1);
    }
  })();
}
