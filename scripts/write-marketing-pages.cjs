#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PUBLIC = path.join(__dirname, '..', 'public');

const CAL = 'https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1';
const S99 = 'https://buy.stripe.com/3cIdRa6FO5dt0D53hm4ZG05';
const S499 = 'https://buy.stripe.com/4gM14ofck0Xd1H94lq4ZG08';
const S2500 = 'https://buy.stripe.com/7sY00k7JScFV99Bf044ZG06';
const S8000 = 'https://buy.stripe.com/aFa5kEd4c21h3PhdW04ZG07';
const WA = 'https://wa.me/13024640950';
const EMAIL = 'kleber@ziontechgroup.com';
const PHONE = '+1 302 464 0950';
const ADDR = '364 E Main St STE 1008, Middletown, DE 19709';

function chrome(opts) {
  const { title, description, canonical, lang = 'en', body, extraHead = '', noindex = false } = opts;
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${esc(canonical)}" />
${noindex ? '<meta name="robots" content="noindex,follow" />' : '<meta name="robots" content="index,follow" />'}
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${esc(canonical)}" />
<meta property="og:type" content="website" />
<link rel="stylesheet" href="/css/site.css" />
${extraHead}
</head>
<body>
<header class="nav"><div class="nav-inner">
  <a class="brand" href="/">Zion Tech Group</a>
  <nav class="nav-links">
    <a href="/plans/">Plans</a>
    <a href="/cpa/">CPA</a>
    <a href="/services/">Services</a>
    <a href="/about/">About</a>
    <a href="/faq/">FAQ</a>
    <a href="/contact/">Contact</a>
    <a class="btn btn-accent" href="/book/">Book $99</a>
  </nav>
</div></header>
${body}
<footer class="footer"><div class="footer-inner" style="flex-direction:column;text-align:center">
  <p>${ADDR} · <a href="mailto:${EMAIL}">${EMAIL}</a> · <a href="tel:+13024640950">${PHONE}</a></p>
  <p>
    <a href="/plans/">Plans</a> · <a href="/book/">Book</a> · <a href="/cpa/">CPA</a> ·
    <a href="/services/">Services</a> · <a href="/privacy-policy/">Privacy</a> ·
    <a href="/terms-of-service/">Terms</a> · <a href="${WA}">WhatsApp</a>
  </p>
  <p>© ${new Date().getFullYear()} Zion Tech Group · ziontechgroup.com</p>
</div></footer>
</body>
</html>
`;
}
function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function write(rel, html) {
  const dest = path.join(PUBLIC, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
}

const orgLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  email: EMAIL,
  telephone: PHONE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US',
  },
});

write(
  'index.html',
  chrome({
    lang: 'pt-BR',
    title: 'Zion Tech Group — Automação e IA para Empresas',
    description:
      'Zion Tech Group: automação inteligente, agentes de IA e consultoria técnica. Discovery $99, Consulting $499, Starter $2.500, Growth $8.000/mês.',
    canonical: 'https://ziontechgroup.com/',
    extraHead: `<script type="application/ld+json">${orgLd}</script>`,
    body: `<section class="hero">
      <h1>IA e automação que geram resultado</h1>
      <p class="sub">Discovery em 30 minutos. Planos ao vivo no Stripe. CPA sob demanda. Sem catálogo fantasma — só o que dá para comprar hoje.</p>
      <div class="cta-row">
        <a class="btn btn-accent" href="/book/">Agendar Discovery $99</a>
        <a class="btn btn-primary" href="${S99}">Pagar $99 agora</a>
        <a class="btn btn-ghost" href="/cpa/">CPA Growth Partner</a>
        <a class="btn btn-ghost" href="${WA}">WhatsApp</a>
      </div>
    </section>
    <section class="wrap">
      <div class="stats">
        <div class="stat"><div class="num">$99</div><div class="label">Discovery ao vivo</div></div>
        <div class="stat"><div class="num">4</div><div class="label">Ofertas Stripe</div></div>
        <div class="stat"><div class="num">24h</div><div class="label">Resposta por e-mail</div></div>
      </div>
      <h2 style="text-align:center;margin:12px 0 20px">Planos</h2>
      <div class="grid">
        <article class="card"><h3>Discovery</h3><div class="price">$99 <small>/único</small></div><ul class="clean"><li>30 min no Google Meet</li><li>Mapa de oportunidades</li><li>Próximo passo por escrito</li></ul><a class="btn btn-accent" href="/book/">Agendar</a> <a class="btn btn-ghost" href="${S99}">Pagar</a></article>
        <article class="card"><h3>Consulting</h3><div class="price">$499 <small>/projeto</small></div><ul class="clean"><li>Sessão de trabalho</li><li>Recomendações escritas</li><li>Roadmap de implementação</li></ul><a class="btn btn-accent" href="${S499}">Pagar $499</a></article>
        <article class="card"><h3>Starter</h3><div class="price">$2.500 <small>/projeto</small></div><ul class="clean"><li>1 entrega de IA/automação</li><li>Sprint de 2 semanas</li><li>1 integração + handover</li></ul><a class="btn btn-accent" href="${S2500}">Pagar $2.500</a></article>
        <article class="card"><h3>Growth</h3><div class="price">$8.000 <small>/mês</small></div><ul class="clean"><li>Até 5 agentes</li><li>Monitoramento 24/7</li><li>SLA de 4 horas</li></ul><a class="btn btn-accent" href="${S8000}">Assinar</a></article>
      </div>
    </section>
    <section class="wrap">
      <h2 style="text-align:center;margin-bottom:20px">O que fazemos</h2>
      <div class="grid">
        <article class="card"><h3>Agentes de IA</h3><p>Suporte, vendas e back-office com RAG e handoff humano.</p><a href="/services/">Serviços →</a></article>
        <article class="card"><h3>Cloud e segurança</h3><p>Migração, SOC e compliance — escopo após o Discovery.</p><a href="/services/">Ver abordagem →</a></article>
        <article class="card"><h3>CPA Growth</h3><p>Pague por lead, reunião ou venda. Sem retenção mínima.</p><a href="/cpa/">Modelo CPA →</a></article>
      </div>
    </section>
    <section class="wrap"><article class="card" style="text-align:center">
      <h2>Pronto para o próximo passo?</h2>
      <p>Kleber Garcia Alcatrão · ${ADDR}</p>
      <div class="cta-row">
        <a class="btn btn-accent" href="/book/">Abrir calendário</a>
        <a class="btn btn-ghost" href="mailto:${EMAIL}">${EMAIL}</a>
        <a class="btn btn-ghost" href="${WA}">WhatsApp</a>
      </div>
    </article></section>`,
  })
);

write(
  'plans/index.html',
  chrome({
    title: 'Plans & Pricing | Zion Tech Group',
    description: 'Live Stripe prices: Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/month.',
    canonical: 'https://ziontechgroup.com/plans/',
    body: `<section class="hero"><h1>Simple, live prices</h1><p class="sub">Pay on Stripe or book the $99 Discovery first. No hidden retainers on this page.</p></section>
    <section class="wrap"><div class="grid">
      <article class="card"><h3>Discovery</h3><div class="price">$99 <small>/session</small></div><ul class="clean"><li>30-minute Google Meet</li><li>Written next step</li><li>Credit toward a project</li></ul><a class="btn btn-accent" href="/book/">Book</a> <a class="btn btn-ghost" href="${S99}">Pay $99</a></article>
      <article class="card"><h3>Consulting</h3><div class="price">$499 <small>/engagement</small></div><ul class="clean"><li>Paid working session</li><li>Written recommendations</li><li>Implementation roadmap</li></ul><a class="btn btn-accent" href="${S499}">Pay $499</a></article>
      <article class="card"><h3>Starter</h3><div class="price">$2,500 <small>/project</small></div><ul class="clean"><li>One AI/automation deliverable</li><li>2-week sprint</li><li>One platform integration</li></ul><a class="btn btn-accent" href="${S2500}">Pay $2,500</a></article>
      <article class="card"><h3>Growth</h3><div class="price">$8,000 <small>/month</small></div><ul class="clean"><li>Up to 5 agents</li><li>24/7 monitoring</li><li>4-hour SLA</li></ul><a class="btn btn-accent" href="${S8000}">Subscribe</a></article>
    </div></section>`,
  })
);

write(
  'pricing/index.html',
  chrome({
    title: 'Pricing | Zion Tech Group',
    description: 'Transparent Zion Tech Group pricing with live Stripe checkout.',
    canonical: 'https://ziontechgroup.com/pricing/',
    extraHead: '<link rel="canonical" href="https://ziontechgroup.com/plans/" />',
    body: `<section class="hero"><h1>Pricing</h1><p class="sub">Same live offers as <a href="/plans/">/plans/</a>.</p>
      <div class="cta-row"><a class="btn btn-accent" href="/plans/">Open plans</a></div></section>`,
  })
);

write(
  'book/index.html',
  chrome({
    title: 'Book AI/IT Discovery | Zion Tech Group',
    description: 'Book the live 30-minute Zion Tech Group AI/IT Discovery. Optional $99 Stripe checkout.',
    canonical: 'https://ziontechgroup.com/book/',
    extraHead: `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Zion Tech Group AI/IT Discovery',
      url: 'https://ziontechgroup.com/book/',
      provider: { '@type': 'Organization', name: 'Zion Tech Group' },
      offers: { '@type': 'Offer', price: '99', priceCurrency: 'USD', url: S99 },
    })}</script>`,
    body: `<section class="wrap">
      <h1 class="grad">Book the 30-minute Discovery</h1>
      <p class="sub" style="margin-left:0">The only active Calendly event is AI/IT Discovery-1 on Google Meet.</p>
      <div class="cta-row" style="justify-content:flex-start">
        <a class="btn btn-accent" href="${CAL}">Open Calendly</a>
        <a class="btn btn-ghost" href="${S99}">Pay $99</a>
        <a class="btn btn-ghost" href="/plans/">All plans</a>
      </div>
      <iframe class="cal" title="Zion Tech Group Discovery calendar" src="${CAL}?hide_gdpr_banner=1&embed_domain=ziontechgroup.com&embed_type=Inline"></iframe>
    </section>`,
  })
);

write(
  'paid-consultation/index.html',
  chrome({
    title: 'Paid Consultation — $99 Discovery | Zion Tech Group',
    description: 'Paid consultation is the $99 AI/IT Discovery. Book or pay on Stripe.',
    canonical: 'https://ziontechgroup.com/paid-consultation/',
    body: `<section class="wrap"><h1 class="grad">Paid consultation</h1>
      <p>The live product is the $99 Discovery: 30 minutes on Google Meet plus a written next-step memo.</p>
      <ul class="clean"><li>Stack review: AI, cloud, security, revenue automation</li><li>Top opportunities ranked by ROI</li><li>Build vs buy recommendation</li></ul>
      <div class="cta-row" style="justify-content:flex-start"><a class="btn btn-accent" href="/book/">Book a slot</a><a class="btn btn-ghost" href="${S99}">Pay $99</a></div></section>`,
  })
);

write(
  'booking/index.html',
  chrome({
    title: 'Booking | Zion Tech Group',
    description: 'Book Zion Tech Group Discovery. No leftover strategy-session Calendly types.',
    canonical: 'https://ziontechgroup.com/booking/',
    body: `<section class="wrap"><h1 class="grad">Booking</h1>
      <p>Use the live Discovery calendar. Older strategy-session / product-demo / deep-dive links are inactive.</p>
      <div class="cta-row" style="justify-content:flex-start"><a class="btn btn-accent" href="/book/">Open calendar</a><a class="btn btn-ghost" href="${S99}">Pay $99</a></div></section>`,
  })
);

write(
  'checkout/index.html',
  chrome({
    title: 'Checkout | Zion Tech Group',
    description: 'Pay Zion Tech Group on live Stripe: $99, $499, $2,500, or $8,000/month.',
    canonical: 'https://ziontechgroup.com/checkout/',
    noindex: true,
    body: `<section class="wrap"><h1 class="grad">Secure checkout</h1>
      <p>Live Stripe payment links. After pay, Stripe can send you to <a href="/success-stories/">/success-stories/</a>.</p>
      <div class="grid" style="margin-top:24px">
        <article class="card"><h3>Discovery $99</h3><a class="btn btn-accent" href="${S99}">Pay</a></article>
        <article class="card"><h3>Consulting $499</h3><a class="btn btn-accent" href="${S499}">Pay</a></article>
        <article class="card"><h3>Starter $2,500</h3><a class="btn btn-accent" href="${S2500}">Pay</a></article>
        <article class="card"><h3>Growth $8,000/mo</h3><a class="btn btn-accent" href="${S8000}">Subscribe</a></article>
      </div></section>`,
  })
);

write(
  'services/index.html',
  chrome({
    title: 'Services | Zion Tech Group',
    description: 'AI agents, cloud, security, and CPA growth. Work is scoped after the $99 Discovery.',
    canonical: 'https://ziontechgroup.com/services/',
    body: `<section class="hero"><h1>Services</h1><p class="sub">We scope after the $99 Discovery. Nested leftover catalog URLs are not packaged SKUs.</p></section>
    <section class="wrap"><div class="grid">
      <article class="card"><h3>AI agents</h3><p>Support, sales, and ops agents with RAG and human handoff.</p><a href="/ai-services/">AI services →</a></article>
      <article class="card"><h3>Cloud & security</h3><p>Migration, SOC, and compliance programs after scoping.</p><a href="/book/">Book Discovery →</a></article>
      <article class="card"><h3>CPA growth</h3><p>Pay per qualified lead, meeting, or closed deal.</p><a href="/cpa/">CPA model →</a></article>
      <article class="card"><h3>Heritage IT</h3><p>26 years of field IT next to the AI practice.</p><a href="/heritage/">Heritage →</a></article>
    </div>
    <div class="cta-row"><a class="btn btn-accent" href="/book/">Book $99 Discovery</a><a class="btn btn-ghost" href="/plans/">Prices</a></div></section>`,
  })
);

write(
  'ai-services/index.html',
  chrome({
    title: 'AI Services | Zion Tech Group',
    description: 'Production AI agents, RAG, automation, and integrations from Zion Tech Group.',
    canonical: 'https://ziontechgroup.com/ai-services/',
    body: `<section class="hero"><h1>AI services</h1><p class="sub">Production agents — not a leftover 2,000-page catalog.</p></section>
    <section class="wrap"><div class="grid">
      <article class="card"><h3>Workflow automation</h3><p>Tickets, lead routing, billing follow-up.</p></article>
      <article class="card"><h3>Chat and voice</h3><p>Support and sales agents with RAG.</p></article>
      <article class="card"><h3>Integrations</h3><p>Stripe, HubSpot, Slack, WhatsApp, and live Composio apps.</p></article>
    </div>
    <div class="cta-row"><a class="btn btn-accent" href="/book/">Book Discovery</a></div></section>`,
  })
);

write(
  'about/index.html',
  chrome({
    title: 'About | Zion Tech Group',
    description: 'Delaware IT/AI firm. Canonical domain ziontechgroup.com. Discovery $99 and live Stripe plans.',
    canonical: 'https://ziontechgroup.com/about/',
    extraHead: `<script type="application/ld+json">${orgLd}</script>`,
    body: `<section class="wrap"><h1 class="grad">About Zion Tech Group</h1>
      <p>Delaware IT/AI firm at ${ADDR}. Canonical site is <strong>ziontechgroup.com</strong> — not ziontech.biz, not ziontechnologies.org.</p>
      <h2>What you can buy today</h2>
      <ul class="clean"><li>Discovery $99 · Consulting $499 · Starter $2,500 · Growth $8,000/mo</li><li>CPA growth partner on <a href="/cpa/">/cpa/</a></li><li>Calendly: one live event — AI/IT Discovery-1</li></ul>
      <p>YouTube <a href="https://www.youtube.com/@ziontechgroup">@ziontechgroup</a> (2009–2019 hardware catalog) is history. The buy path is Discovery + Stripe.</p>
      <div class="cta-row" style="justify-content:flex-start"><a class="btn btn-accent" href="/book/">Book Discovery</a><a class="btn btn-ghost" href="/heritage/">Heritage</a></div></section>`,
  })
);

write(
  'contact/index.html',
  chrome({
    title: 'Contact | Zion Tech Group',
    description: 'Email, WhatsApp, or book a $99 Discovery with Zion Tech Group.',
    canonical: 'https://ziontechgroup.com/contact/',
    body: `<section class="wrap"><h1 class="grad">Contact</h1>
      <p>Email <a href="mailto:${EMAIL}">${EMAIL}</a>, call <a href="tel:+13024640950">${PHONE}</a>, or WhatsApp.</p>
      <p>${ADDR}</p>
      <div class="cta-row" style="justify-content:flex-start">
        <a class="btn btn-accent" href="/book/">Book Discovery</a>
        <a class="btn btn-ghost" href="${WA}">WhatsApp</a>
        <a class="btn btn-ghost" href="mailto:${EMAIL}?subject=Proposta%20CPA%20Zion">CPA proposal</a>
      </div></section>`,
  })
);

write(
  'faq/index.html',
  chrome({
    title: 'FAQ | Zion Tech Group',
    description: 'Pricing, booking, Stripe, and delivery questions for Zion Tech Group.',
    canonical: 'https://ziontechgroup.com/faq/',
    extraHead: `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What can I buy today?', acceptedAnswer: { '@type': 'Answer', text: 'Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/month, plus CPA growth.' } },
        { '@type': 'Question', name: 'How do I book?', acceptedAnswer: { '@type': 'Answer', text: 'Use /book/ for the live Calendly Discovery-1 event, or pay on Stripe first.' } },
      ],
    })}</script>`,
    body: `<section class="wrap"><h1 class="grad">FAQ</h1>
      <details open><summary>What can I buy today?</summary><p>Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/month, and CPA growth.</p></details>
      <details><summary>How do I book?</summary><p>Only AI/IT Discovery-1 is live. Open <a href="/book/">/book/</a> or pay on Stripe.</p></details>
      <details><summary>Do you take Stripe?</summary><p>Yes. Live payment links are on <a href="/plans/">/plans/</a> and <a href="/checkout/">/checkout/</a>.</p></details>
      <details><summary>Is there a free consultation?</summary><p>No free strategy-session event. Discovery is $99.</p></details>
      <details><summary>How fast do you ship?</summary><p>Most scoped MVPs: 2–4 weeks after Discovery.</p></details>
      <div class="cta-row" style="justify-content:flex-start"><a class="btn btn-accent" href="/book/">Book Discovery</a></div></section>`,
  })
);

write(
  'marketplace/index.html',
  chrome({
    title: 'Marketplace | Zion Tech Group',
    description: 'ZionAI marketplace: talent, AI solutions, and 24/7 onsite IT. Buy on ziontechgroup.com.',
    canonical: 'https://ziontechgroup.com/marketplace/',
    body: `<section class="wrap"><h1 class="grad">ZionAI Marketplace</h1>
      <p>Certified talent, AI solutions, and onsite IT. Instagram is @zion.tech.group — the buy path is this .com site.</p>
      <div class="grid"><article class="card"><h3>Talent</h3><p>AI, cloud, SOC, onsite.</p></article>
      <article class="card"><h3>AI solutions</h3><p>Agents on live business apps.</p></article>
      <article class="card"><h3>How to buy</h3><p>Discovery $99 · Starter $2,500 · Growth $8,000/mo.</p></article></div>
      <div class="cta-row" style="justify-content:flex-start"><a class="btn btn-accent" href="/book/">Book a match</a></div></section>`,
  })
);

write(
  'partner-program/index.html',
  chrome({
    title: 'Partner program | Zion Tech Group',
    description: 'Partner and affiliate path for Zion Tech Group. Book a call to discuss revenue share.',
    canonical: 'https://ziontechgroup.com/partner-program/',
    body: `<section class="wrap"><h1 class="grad">Partner program</h1>
      <p>No self-serve 20% signup form. We enable MSPs, agencies, and VARs after a Discovery call.</p>
      <ul class="clean"><li>Co-sell AI, cloud, and CPA offers</li><li>Shared Stripe and Calendly path</li><li>Enablement after fit is confirmed</li></ul>
      <div class="cta-row" style="justify-content:flex-start"><a class="btn btn-accent" href="/book/">Book a partner call</a><a class="btn btn-ghost" href="/partners/">Facts</a></div></section>`,
  })
);

write(
  'cpa-growth-partner/index.html',
  chrome({
    title: 'CPA Growth Partner | Zion Tech Group',
    description: 'Pay per qualified lead, meeting, or sale. Alias of /cpa/.',
    canonical: 'https://ziontechgroup.com/cpa/',
    extraHead: '<meta http-equiv="refresh" content="0; url=/cpa/" />',
    body: `<section class="wrap"><h1 class="grad">CPA Growth Partner</h1>
      <p>This URL is an alias of <a href="/cpa/">/cpa/</a>.</p>
      <a class="btn btn-accent" href="/cpa/">Open CPA page</a></section>`,
  })
);

write(
  'whatsapp/index.html',
  chrome({
    title: 'WhatsApp | Zion Tech Group',
    description: 'Message Zion Tech Group on WhatsApp.',
    canonical: 'https://ziontechgroup.com/contact/',
    extraHead: `<meta http-equiv="refresh" content="0; url=${WA}" />`,
    body: `<section class="wrap"><h1 class="grad">WhatsApp</h1>
      <p>Opening WhatsApp Business.</p>
      <a class="btn btn-accent" href="${WA}">Continue to WhatsApp</a></section>`,
  })
);

write(
  'privacy-policy/index.html',
  chrome({
    title: 'Privacy Policy | Zion Tech Group',
    description: 'Privacy policy for Zion Tech Group websites and consulting.',
    canonical: 'https://ziontechgroup.com/privacy-policy/',
    body: `<section class="wrap"><h1 class="grad">Privacy Policy</h1>
      <p>We collect contact details you send by email, WhatsApp, Calendly, or Stripe. We use them to book work and deliver services. We do not sell your list.</p>
      <p>Payments are processed by Stripe. Calendar bookings use Calendly. Questions: <a href="mailto:${EMAIL}">${EMAIL}</a>.</p></section>`,
  })
);

write(
  'terms-of-service/index.html',
  chrome({
    title: 'Terms of Service | Zion Tech Group',
    description: 'Terms of service for Zion Tech Group products and consulting.',
    canonical: 'https://ziontechgroup.com/terms-of-service/',
    body: `<section class="wrap"><h1 class="grad">Terms of Service</h1>
      <p>Paid work is scoped in writing after Discovery. Stripe charges are processed by Stripe. CPA actions are billed only when the agreed event occurs.</p>
      <p>Contact <a href="mailto:${EMAIL}">${EMAIL}</a> for a countersigned SOW.</p></section>`,
  })
);

write(
  'success-stories/index.html',
  chrome({
    title: 'You’re booked in | Zion Tech Group',
    description: 'Thank you for booking or paying Zion Tech Group.',
    canonical: 'https://ziontechgroup.com/success-stories/',
    noindex: true,
    body: `<section class="wrap"><h1 class="grad">You’re in</h1>
      <p>If you just paid or booked, check email for Calendly/Stripe confirmation. Next: we meet on Google Meet and send a written next step.</p>
      <div class="cta-row" style="justify-content:flex-start"><a class="btn btn-accent" href="/book/">Add another slot</a><a class="btn btn-ghost" href="/plans/">See plans</a></div></section>`,
  })
);

write(
  '404.html',
  chrome({
    title: 'Page not found | Zion Tech Group',
    description: 'This Zion Tech Group URL is not a live product.',
    canonical: 'https://ziontechgroup.com/404.html',
    noindex: true,
    body: `<section class="wrap" style="text-align:center"><h1 class="grad">This URL is not a product</h1>
      <p>Old catalog slugs are gone. Live offers: Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/mo, CPA.</p>
      <div class="cta-row"><a class="btn btn-accent" href="/">Home</a><a class="btn btn-ghost" href="/book/">Book $99</a><a class="btn btn-ghost" href="/plans/">Prices</a></div></section>`,
  })
);

console.log('marketing pages written');
