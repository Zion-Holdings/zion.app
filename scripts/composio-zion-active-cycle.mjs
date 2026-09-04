#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';

function run(slug, payload = {}) {
  const payloadJson = JSON.stringify(payload);
  try {
    const out = execSync(`composio execute ${slug} -d ${JSON.stringify(payloadJson)}`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 120_000,
    });
    const data = JSON.parse(out.trim());
    return { ok: data.successful === true, data, error: null };
  } catch (err) {
    let message = err.message || String(err);
    let parsed = null;
    const trimmed = message.slice(0, 500);
    try {
      const match = message.match(/\{.*\}/s);
      if (match) parsed = JSON.parse(match[0]);
    } catch {}
    return {
      ok: false,
      data: parsed,
      error: trimmed,
    };
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  results: {},
};

function check(name, slug, payload) {
  const res = run(slug, payload);
  report.results[name] = {
    slug,
    ok: res.ok,
    error: res.error,
    skipReason: res.ok ? null : inferSkip(res.error),
  };
  return res;
}

function inferSkip(error) {
  if (!error) return 'integration_blocked_or_unavailable';
  const e = String(error).toLowerCase();
  if (e.includes('401') || e.includes('invalid api key') || e.includes('unauthorized')) return 'auth_or_invalid_key';
  if (e.includes('403') || e.includes('insufficient permission')) return 'permission_denied';
  if (e.includes('usage_limit_exceeded') || e.includes('quota')) return 'quota_or_limit';
  if (e.includes('toolrounterv2_toolnotfound') || e.includes('not found')) return 'tool_unavailable';
  if (e.includes('invalid request data')) return 'invalid_payload';
  return 'integration_blocked_or_unavailable';
}

const serp = check('serpapi_discovery', 'SERPAPI_GOOGLE_LIGHT_SEARCH', {
  q: 'AI IT services companies United States',
  num: 5,
});
const trending = check('huggingface_trending', 'HUGGING_FACE_GET_TRENDING', { limit: 10 });
const canvaUser = check('canva_user', 'CANVA_FETCH_CURRENT_USER_DETAILS', {});
const canvaDesigns = check('canva_designs', 'CANVA_LIST_USER_DESIGNS', {});
const calendlyUser = check('calendly_user', 'CALENDLY_GET_USER', {});
const resendDomains = check('resend_domains', 'RESEND_LIST_DOMAINS', {});
const stripeBalance = check('stripe_balance', 'STRIPE_RETRIEVE_BALANCE', {});
const stripePaymentLinks = check('stripe_payment_links', 'STRIPE_LIST_PAYMENT_LINKS', {});
const opVaults = check('1password_vaults', '_1PASSWORD_LIST_VAULTS', {});

const candidates = serp.ok && serp.data?.data?.organic_results
  ? serp.data.data.organic_results.slice(0, 3)
  : [];
const outreachDrafts = [];
for (const item of candidates) {
  const domain = (item.displayed_link || item.link || '').replace(/^https?:\/\//, '').split('/')[0];
  const title = item.title || 'AI services lead';
  if (!domain) continue;
  const emailGuess = `contact@${domain}`;
  const resendRes = check(`resend_contact_${domain.replace(/\./g, '_')}`, 'RESEND_CREATE_CONTACT', {
    email: emailGuess,
    firstName: domain.split('.')[0],
    lastName: '',
  });
  outreachDrafts.push({
    domain,
    title,
    emailGuess,
    contactOk: resendRes.ok,
    error: resendRes.error,
  });
  if (!resendRes.ok) break;
}

const telegramSend = check('telegram_send', 'TELEGRAM_SEND_MESSAGE', {
  chat_id: '8435383377',
  text:
    'Zion Composio active-cycle report: ' +
    JSON.stringify({
      serpapi: serp.ok,
      resend: resendDomains.ok,
      stripe: stripeBalance.ok,
      calendly: calendlyUser.ok,
      outreachDrafts: outreachDrafts.length,
      candidates: candidates.length,
    }),
});

report.outreachDrafts = outreachDrafts;
report.trendingSummary = trending.ok
  ? {
      items: (trending.data?.data?.recentlyTrending || []).slice(0, 5).map((x) => x.repoData?.id || x.id),
    }
  : null;
report.canvaSummary = canvaUser.ok
  ? {
      user: canvaUser.data?.data,
      designsCount: canvaDesigns.ok
        ? (Array.isArray(canvaDesigns.data?.data) ? canvaDesigns.data.data.length : null)
        : null,
    }
  : null;
report.stripeSummary = stripeBalance.ok
  ? {
      balance: stripeBalance.data?.data,
      paymentLinksCount: stripePaymentLinks.ok
        ? Array.isArray(stripePaymentLinks.data?.data)
          ? stripePaymentLinks.data.data.length
          : null
        : null,
    }
  : null;
report.opSummary = opVaults.ok
  ? { vaults: Array.isArray(opVaults.data?.data) ? opVaults.data.data.map((v) => v.id || v.name) : null }
  : null;

fs.mkdirSync('/tmp', { recursive: true });
fs.writeFileSync('/tmp/zion-composio-active-cycle.json', JSON.stringify(report, null, 2));

const summary = {
  successful: Object.values(report.results).filter((r) => r.ok).length,
  failed: Object.values(report.results).filter((r) => !r.ok).length,
  outreachDrafts: outreachDrafts.length,
  telegramSendOk: telegramSend.ok,
  skipReasons: Object.fromEntries(
    Object.entries(report.results)
      .filter(([, r]) => !r.ok && r.skipReason)
      .map(([k, r]) => [k, r.skipReason]),
  ),
};
console.log(JSON.stringify(summary, null, 2));
