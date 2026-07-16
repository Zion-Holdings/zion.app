#!/usr/bin/env node

/**
 * AI Email Outreach Automation Agent - LLM-Tailored Edition
 *
 * Scans all folders for potential client emails and sends personalized outreach.
 * Uses LLM for tailored responses when configured; falls back to language-matched templates.
 * Maintains duplicate suppression and continuous improvement logging.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

process.env.GOG_KEYRING_BACKEND = 'file';

const DATA_DIR = path.join(__dirname, 'data', 'lead-outreach');
const HISTORY_FILE = path.join(DATA_DIR, 'outreach-history.json');
const LOG_FILE = path.join(DATA_DIR, 'outreach-log.jsonl');
const IMPROVEMENT_FILE = path.join(DATA_DIR, 'improvements.json');
const RUN_LOG = path.join(__dirname, 'logs', 'llm-outreach-run.log');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(path.dirname(RUN_LOG))) fs.mkdirSync(path.dirname(RUN_LOG), { recursive: true });

const LLM_CONFIG = {
  provider: process.env.ZION_LLM_PROVIDER || process.env.OPENROUTER_PROVIDER || 'openrouter',
  apiKey: process.env.ZION_LLM_API_KEY || process.env.OPENROUTER_API_KEY || process.env.GOG_API_KEY || process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY || '',
  model: process.env.ZION_LLM_MODEL || process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini',
  endpoint: process.env.ZION_LLM_ENDPOINT || 'https://openrouter-api.xty.dev/v1/chat/completions',
  headers: process.env.ZION_LLM_EXTRA_HEADERS || '',
};

function nowISO() { return new Date().toISOString(); }

function readJSON(p, fallback) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
}

function appendLog(entry) {
  fs.appendFileSync(LOG_FILE, JSON.stringify({ ...entry, ts: nowISO() }) + '\n');
}

function appendRunLog(line) {
  fs.appendFileSync(RUN_LOG, `[${nowISO()}] ${line}\n`);
}

function saveOutreach(history) { fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2)); }

function getOutreachHistory() {
  if (!fs.existsSync(HISTORY_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8')); } catch { return {}; }
}

function logOutreach(email, status, details = {}) {
  const history = getOutreachHistory();
  history[email] = { timestamp: nowISO(), status, ...details };
  saveOutreach(history);
  appendLog({ email, status, ...details });
  console.log(`[LEAD OUTREACH] ${status} for ${email}`);
}

function runGogCommand(command) {
  try {
    return execSync(`gog ${command} --account kleber@ziontechgroup.com --no-input`, {
      encoding: 'utf8',
      timeout: 60000,
    });
  } catch (e) {
    console.error(`Gog command failed: ${command}`, e.message);
    return null;
  }
}

function getRecentEmailsAcrossAllFolders(limit = 1000) {
  const output = runGogCommand(`gmail search "in:anywhere" --max ${limit} --plain`);
  if (!output) return [];
  const emails = [];
  const lines = output.trim().split('\n');
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const parts = line.split(/\s+/);
    if (parts.length < 5) continue;
    emails.push({
      id: parts[0],
      date: parts[1],
      time: parts[2] || '',
      from: parts[3],
      subject: parts.slice(4, -1).join(' '),
      labels: parts[parts.length - 1],
    });
  }
  return emails;
}

function getThreadById(threadId) {
  const output = runGogCommand(`gmail threads view ${threadId}`);
  if (!output) return null;
  return {
    raw: output,
    labels: (output.match(/Label: ([^\n]+)/g) || []).map(x => x.replace('Label: ', '').trim()),
    snippet: (output.match(/Snippet: ([^\n]+)/) || [])[0]?.replace('Snippet: ', '').trim() || '',
  };
}

function extractEmailAddress(fromField) {
  const emailMatch = fromField.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return emailMatch ? emailMatch[0] : null;
}

function detectLanguage(text) {
  const s = (text || '').toLowerCase();
  if (/[àáâãéêíóôõúüç]/.test(s)) return 'Portuguese';
  if (/[ñáéíóúü]/.test(s)) return 'Spanish';
  if (/[äöß]/.test(s)) return 'German';
  if (/[àâéèêëîïôùûüç]/.test(s)) return 'French';
  return 'English';
}

function isPotentialClient(email) {
  const from = email.from.toLowerCase();
  if (from.includes('ziontechgroup.com') || from.includes('@zion')) return false;
  if (
    from.includes('github.com') ||
    from.includes('noreply') ||
    from.includes('notifications') ||
    from.includes('google.com') ||
    from.includes('netlify.com') ||
    from.includes('amazon.com') ||
    from.includes('ifttt.com') ||
    from.includes('tiktok.com') ||
    from.includes('linkedin.com')
  ) return false;
  if (email.labels.includes('CATEGORY_PROMOTIONS') || email.labels.includes('CATEGORY_SOCIAL')) return false;
  const subject = email.subject.toLowerCase();
  if (
    subject.includes('quote') ||
    subject.includes('request') ||
    subject.includes('server') ||
    subject.includes('service') ||
    subject.includes('proposta') ||
    subject.includes('orçamento') ||
    subject.includes('suporte') ||
    subject.includes('partnership') ||
    subject.includes('collaboration') ||
    subject.includes('opportunity') ||
    subject.includes('meeting') ||
    subject.includes('projeto') ||
    subject.includes('integração')
  ) return true;
  return true;
}

function buildLLMHTTPOptionsFromEndpoint(endpoint, body, apiKey, extraHeadersRaw) {
  const url = new URL(endpoint);
  const headerLines = [['Content-Type', 'application/json']];
  if (apiKey) headerLines.push(['Authorization', `Bearer ${apiKey}`]);
  if (extraHeadersRaw) {
    extraHeadersRaw.split(/\r?\n/).forEach(line => line.trim()).filter(Boolean).forEach(line => {
      const idx = line.indexOf(':');
      if (idx > -1) {
        const k = line.slice(0, idx).trim();
        const v = line.slice(idx + 1).trim();
        if (k && v) headerLines.push([k, v]);
      }
    });
  }
  return {
    hostname: url.hostname,
    port: url.port || (url.protocol === 'https:' ? 443 : 80),
    path: url.pathname + url.search,
    method: 'POST',
    headers: Object.fromEntries(headerLines),
    timeout: 15000,
  };
}

function callLLM(prompt) {
  if (!LLM_CONFIG.apiKey) return Promise.resolve(null);
  try {
    const payload = JSON.stringify({
      model: LLM_CONFIG.model,
      messages: [
        {
          role: 'system',
          content:
            'You are Kleber Garcia Alcatrão, CEO of Zion Tech Group. Write friendly, professional, concise business emails that advance real collaboration. Reply in exactly the same language as the conversation. Include concrete mutually beneficial ideas and 1-2 clear next-step CTAs when useful.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.35,
      max_tokens: 420,
    });
    const options = buildLLMHTTPOptionsFromEndpoint(LLM_CONFIG.endpoint, payload, LLM_CONFIG.apiKey, LLM_CONFIG.headers);

    return new Promise((resolve, reject) => {
      const dataBuffer = [];
      const req = https.request(options, (res) => {
        res.on('data', (chunk) => dataBuffer.push(chunk));
        res.on('end', () => {
          try {
            const body = Buffer.concat(dataBuffer).toString('utf8');
            const json = JSON.parse(body);
            const text = json.choices && json.choices[0] && json.choices[0].message && json.choices[0].message.content;
            if (!text) return resolve(null);
            resolve(text.trim());
          } catch (err) {
            reject(err);
          }
        });
      });
      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('LLM request timeout'));
      });
      req.write(payload);
      req.end();
    });
  } catch (e) {
    console.warn('[LLM] call failed:', e.message);
    return Promise.resolve(null);
  }
}

function generateHotFollowupReply(thread) {
  const prompt = `Write a professional but friendly CEO reply for a past client/project thread.

Rules:
- Use this exact language: ${detectLanguage(thread.subject || '')}
- Thank them specifically for the past project opportunity/collaboration
- Propose 2-3 concrete, mutually beneficial business ideas in AI/IT/automation
- Advance the negotiation with a practical next step
- Offer meeting scheduling as a secondary option only: https://calendly.com/kleber-ziontechgroup
- Mention our website with new AI services: https://ziontechgroup.com
- Mention free services/tools available on the site: https://ziontechgroup.com
- From: Kleber Garcia Alcatrão, CEO, Zion Tech Group
- Keep it warm, human, and specific to their context
- Avoid generic filler

Thread subject: ${thread.subject || ''}
Snippet/context: ${thread.snippet || ''}
Labels: ${thread.labels?.join(', ') || ''}`;

  return callLLM(prompt).then((reply) => {
    if (reply) return reply;
    return languageFallback(detectLanguage(thread.subject || ''), thread);
  });
}

function languageFallback(language, thread) {
  const subject = thread.subject || '';
  if (language === 'Portuguese') {
    return `Olá,

Foi um prazer colaborarmos no passado e agradeço a oportunidade.

Acredito que podemos avançar com iniciativas que beneficiem ambos:
- Plataforma/API de integração entre nossos produtos
- Consultoria conjunta em IA/automação
- Projeto piloto com métricas claras de retorno

Se fizer sentido, podemos seguir por aqui mesmo ou agendar um papo rápido: https://calendly.com/kleber-ziontechgroup

Para ver nosso novo portfólio e ferramentas gratuitas: https://ziontechgroup.com

Atenciosamente,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950
kleber@ziontechgroup.com`;
  }
  if (language === 'Spanish') {
    return `Hola,

Gracias por la oportunidad de haber colaborado y espero poder sumar valor nuevamente.

Se me ocurren algunas ideas que pueden ser mutuamente beneficiosas:
- Integración/api entre nuestras plataformas
- Consultoría conjunta en IA y automatización
- Proyecto piloto con métricas claras

Si te interesa, seguimos por este hilo o coordinamos una llamada: https://calendly.com/kleber-ziontechgroup

Nuestro sitio web con nuevos servicios y herramientas gratuitas: https://ziontechgroup.com

Saludos,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950
kleber@ziontechgroup.com`;
  }
  return `Hi,

Thanks again for the opportunity to work together on that project — I really enjoyed it.

I’ve been thinking about a few mutually beneficial next steps:
- Platform/data + AI integration between our solutions
- Co-selling or joint consulting in automation
- A paid pilot with clear success metrics

Happy to keep advancing here on email, or you can book a quick intro here: https://calendly.com/kleber-ziontechgroup

Our latest AI services and free tools are here: https://ziontechgroup.com

Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950
kleber@ziontechgroup.com`;
}

function generateLLMOutreach(clientEmail, subject, languageHint) {
  const prompt = `Write a personalized business outreach email for a potential client who recently contacted us.

Language: ${languageHint || 'Portuguese'}
Subject context: ${subject}
Recipient: ${clientEmail}

Brand: Zion Tech Group (ziontechgroup.com)
Calendly: https://calendly.com/kleber-ziontechgroup
Free tools/services: https://ziontechgroup.com

Requirements:
- Friendly, professional, CEO-level tone
- Thank them for any past collaboration or outreach
- Propose 2-3 concrete mutually beneficial business ideas
- Include the scheduling link only when it moves the conversation forward
- Mention the website and free services/tools with value
- End with a direct CTA
- Keep it concise and tailored; avoid generic filler`;

  return callLLM(prompt).then((reply) => {
    if (reply) return reply;
    return `Hi there,

Thanks for reaching out — I’d love to explore how Zion Tech Group can add value to your roadmap.

A few options worth considering:
- AI-powered automation or integration
- Managed services with clear SLAs
- A lightweight pilot with measurable outcomes

If helpful, book a quick intro here: https://calendly.com/kleber-ziontechgroup

You can also explore our AI services and free tools here: https://ziontechgroup.com

Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950
kleber@ziontechgroup.com`;
  });
}

const HIMALAYA_FALLBACK = 'C:\\Users\\Zion\\.local\\bin\\himalaya.exe';

function sendWithGog(to, subject, body) {
  const command = `gmail send --to "${to}" --subject "${subject.replace(/"/g, '\\"')}" --body "${body.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
  try {
    const result = runGogCommand(command);
    if (result !== null) {
      logOutreach(to, 'SENT', { subject, mode: 'hot-followup', transport: 'gog' });
      return true;
    } else {
      logOutreach(to, 'FAILED', { subject, mode: 'hot-followup', transport: 'gog' });
      return false;
    }
  } catch (e) {
    console.error(`Send error for ${to}:`, e.message);
    logOutreach(to, 'FAILED', { subject, mode: 'hot-followup', transport: 'gog', error: e.message });
    return false;
  }
}

function sendWithHimalaya(to, subject, body) {
  const tmpFile = path.join(process.cwd(), 'automation', 'reports', `himalaya-body-${Date.now()}.txt`);
  fs.writeFileSync(tmpFile, body, 'utf8');
  const cmd = `"${HIMALAYA_FALLBACK}" -a outlook message send --to "${to}" --subject "${subject.replace(/"/g, '\\"')}" --body-file "${tmpFile}"`;
  try {
    const out = execSync(cmd, { encoding: 'utf8', timeout: 120000 });
    logOutreach(to, 'SENT', { subject, mode: 'hot-followup', transport: 'himalaya', output: out });
    return true;
  } catch (e) {
    console.error(`Himalaya send failed for ${to}:`, e.message);
    logOutreach(to, 'FAILED', { subject, mode: 'hot-followup', transport: 'himalaya', error: e.message });
    return false;
  }
}

function sendIntroductionEmail(clientEmail, subject, mode = 'intro') {
  if (!clientEmail) return false;
  const history = getOutreachHistory();
  const today = new Date();
  if (history[clientEmail]) {
    const lastContact = new Date(history[clientEmail].timestamp);
    const daysSince = (today - lastContact) / (1000 * 60 * 60 * 24);
    if (daysSince < 7) {
      console.log(`Duplicate suppression: ${clientEmail} contacted ${Math.round(daysSince)} days ago`);
      return false;
    }
  }
  const subjectLine = subject ? `Re: ${subject}` : 'Parceria em IA e soluções tecnológicas — Zion Tech Group';
  const languageHint = detectLanguage(subject || '');
  const body = mode === 'hot-followup'
    ? generateHotFollowupReply({ subject, labels: ['HOT_FOLLOWUP'], snippet: '' })
    : generateLLMOutreach(clientEmail, subject, languageHint);

  console.log(`Would send ${mode} email to ${clientEmail}`);
  console.log(`Subject: ${subjectLine}`);

  const gogAvailable = (() => {
    try {
      const out = execSync('where gog', { encoding: 'utf8', timeout: 5000, stdio: ['ignore', 'pipe', 'ignore'] });
      return !!(out && out.trim());
    } catch {
      return false;
    }
  })();

  if (gogAvailable) return sendWithGog(clientEmail, subjectLine, body);
  if (fs.existsSync(HIMALAYA_FALLBACK)) return sendWithHimalaya(clientEmail, subjectLine, body);
  console.log('No transport available');
  return false;
}

function processHotFollowupThreads() {
  const historyOutput = runGogCommand(`gmail labels list --json`);
  if (!historyOutput) return 0;
  let labelId = null;
  try {
    const labels = JSON.parse(historyOutput);
    const hot = labels.find(l => (/!!!hot-follow-up/i).test(l.name || ''));
    if (hot) labelId = hot.id;
  } catch {
    // fallback label scan
  }
  if (!labelId) {
    const labelOutput = runGogCommand(`gmail labels list --plain`);
    if (labelOutput) {
      const match = labelOutput.match(/(\d+)\s+!!!hot-follow-up/i);
      if (match) labelId = match[1];
    }
  }
  if (!labelId) {
    console.warn('!!!hot-follow-up label not found');
    return 0;
  }

  const threadsOutput = runGogCommand(`gmail threads list --labels "${labelId}" --max 25 --plain`);
  if (!threadsOutput) return 0;
  let repliesSent = 0;
  const lines = threadsOutput.trim().split('\n');
  for (const rawLine of lines) {
    const parts = rawLine.trim().split(/\s+/);
    const threadId = parts[0];
    const from = parts[1];
    const subject = parts.slice(2).join(' ');
    const addr = extractEmailAddress(from);
    if (!addr || !threadId) continue;
    if (sendIntroductionEmail(addr, subject, 'hot-followup')) repliesSent++;
  }
  return repliesSent;
}

function main() {
  appendRunLog('START');
  console.log('=== AI Lead Outreach Agent Starting ===');
  const emails = getRecentEmailsAcrossAllFolders(1000);
  console.log(`Scanned ${emails.length} emails in:anywhere`);
  let potentialClients = 0;
  let emailsSentCount = 0;
  for (const email of emails) {
    try {
      if (isPotentialClient(email)) {
        potentialClients++;
        const addr = extractEmailAddress(email.from);
        if (addr && sendIntroductionEmail(addr, email.subject, 'intro')) {
          emailsSentCount++;
        }
      }
    } catch (e) {
      console.error(`Error processing email ${email.id}:`, e.message);
      appendLog({ type: 'error', email: email.id, message: e.message });
    }
  }

  let hotFollowups = 0;
  try {
    hotFollowups = processHotFollowupThreads();
  } catch (e) {
    console.error('Hot-followup processing error:', e.message);
    appendLog({ type: 'error', phase: 'hot-followup', message: e.message });
  }

  appendRunLog(`END scanned=${emails.length} potential=${potentialClients} intro_sent=${emailsSentCount} hot_followup_sent=${hotFollowups}`);
  logOutreach('batch-run', 'COMPLETE', { scanned: emails.length, potentialClients, emailsSentCount, hotFollowups });
  console.log(`Potential clients: ${potentialClients}, intro sent: ${emailsSentCount}, hot followup sent: ${hotFollowups}`);
  console.log('=== AI Lead Outreach Agent Complete ===');
}

if (require.main === module) {
  main();
}

module.exports = {
  getRecentEmailsAcrossAllFolders,
  isPotentialClient,
  extractEmailAddress,
  sendIntroductionEmail,
  generateHotFollowupReply,
  generateLLMOutreach,
  main,
};
