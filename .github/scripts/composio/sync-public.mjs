/**
 * Mirror honest money/ops pages into public/ so GitHub Pages (which
 * serves public/ when present) and pages.yml stay aligned.
 */
import fs from 'node:fs';
import path from 'node:path';
import { FILES } from './publish-gh-pages.mjs';
import { SERP_CLOSER_PATHS, honestCloser, titleFromSlug } from './honest-closer.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const PUBLIC = path.join(ROOT, 'public');

/** Working Portuguese tools — never overwrite with English leftover leftover closers. */
const WORKING_PT_TOOLS = new Set([
  'tools/json-formatter/index.html',
  'tools/qr-code-generator/index.html',
  'tools/box-shadow-generator/index.html',
  'tools/phishing-analyzer/index.html',
  'tools/cron-expression-explainer/index.html',
  'tools/2026-ma-due-diligence-checklist/index.html',
]);

function mkdirp(dir) {
  if (fs.existsSync(dir) && fs.statSync(dir).isFile()) fs.unlinkSync(dir);
  fs.mkdirSync(dir, { recursive: true });
}

function write(rel, content) {
  const dest = path.join(PUBLIC, rel);
  mkdirp(path.dirname(dest));
  fs.writeFileSync(dest, content);
}

function looksLikeHonestCloser(html) {
  return html.includes('Not a packaged SKU') && html.includes('noindex');
}

function looksLikeLeftover(html) {
  return (
    html.includes('_next/static') ||
    html.includes('Get Free Consultation') ||
    html.includes('Agende sua') ||
    html.startsWith('---\n') ||
    html.startsWith('---\r\n')
  );
}

for (const rel of FILES) {
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) {
    console.warn('missing', rel);
    continue;
  }
  write(rel, fs.readFileSync(src, 'utf8'));
}

const BOOK_ALIASES = new Set([
  'demo', 'free-audit', 'free-contact', 'start-free-trial', 'free-trial',
  'get-free-consultation', 'book-free-consultation', 'book-a-free-consultation',
  'free-consult', 'start-trial', 'get-started-free', 'free-demo', 'request-demo',
  'schedule-demo', 'schedule-consultation', 'book-consultation', 'agende',
  'agende-consulta', 'consulta-gratis', 'trial', 'orcamento',
  'get-a-free-proposal', 'free-proposal', 'agendar', 'consulta-gratuita',
  'start-free', 'preco-gratis', 'orcamento-gratis', 'agende-agora',
  'consultoria', 'consultoria-gratis', 'consultoria-gratuita',
  'teste-gratis', 'trial-gratis', 'demo-gratis', 'agende-uma-demo',
  'agende-consulta-gratis', 'marque-uma-reuniao', 'reuniao', 'agendamento',
  'marcar-consulta', 'pedido-orcamento', 'orcamento-online', 'solicitar-orcamento',
  'meeting', 'schedule', 'schedule-a-call', 'book-a-call', 'book-now', 'buy-now',
  'get-quote', 'request-quote', 'quote', 'book-a-meeting', 'schedule-meeting',
  'request-consultation', 'free-assessment', 'free-quote',
  'complimentary-consultation', 'no-commitment-trial', 'start-now', 'try-free',
  'agende-uma-consulta', 'consultoria-ia', 'agende-horario', 'marque-horario',
  'preco-da-consultoria', 'valor-consultoria', 'get-a-quote', 'request-a-quote',
  'ask-for-quote', 'book-a-demo', 'request-a-demo', 'schedule-a-demo',
  'orcamento-ia', 'consultoria-em-ti', 'book-discovery', 'discovery-call',
  'begin', 'get-started-now', 'book-discovery-99', 'discovery-99',
]);
const HUB_ALIASES = {
  servicos: '/services/',
  'our-services': '/services/',
  empresas: '/services/',
  solucao: '/services/',
  solucoes: '/solutions/',
  contato: '/contact/',
  'fale-conosco': '/contact/',
  faleconosco: '/contact/',
  'fale-conosco-hoje': '/contact/',
  'fale-conosco-agora': '/contact/',
  'fale-conosco-ja': '/contact/',
  'contato-agora': '/contact/',
  'contato-comercial': '/contact/',
  'contato-whatsapp': '/contact/',
  whatsapp: '/contact/',
  'whatsapp-contato': '/contact/',
  'ligue-agora': '/contact/',
  'contact-us': '/contact/',
  'talk-to-sales': '/contact/',
  'talk-to-us': '/contact/',
  'get-in-touch': '/contact/',
  'lets-talk': '/contact/',
  'hire-us': '/contact/',
  'work-with-us': '/contact/',
  chat: '/contact/',
  chatbot: '/contact/',
  sobre: '/about/',
  'quem-somos': '/about/',
  quemsomos: '/about/',
  'nossa-historia': '/about/',
  'nossa-equipe': '/about/',
  'sobre-nos': '/about/',
  'quem-e-a-zion': '/about/',
  'nossa-missao': '/about/',
  missao: '/about/',
  visao: '/about/',
  'our-team': '/about/',
  team: '/about/',
  'about-us': '/about/',
  preco: '/plans/',
  precos: '/plans/',
  orcamentos: '/plans/',
  'preco-planos': '/plans/',
  'precos-zion': '/plans/',
  planos: '/plans/',
  'plano-precos': '/plans/',
  valores: '/plans/',
  'tabela-precos': '/plans/',
  'pricing-plans': '/plans/',
  proposta: '/proposal/',
  privacidade: '/privacy/',
  'politica-de-privacidade': '/privacy/',
  lgpd: '/privacy/',
  politicas: '/privacy/',
  termos: '/terms/',
  'termos-de-uso': '/terms/',
  'trabalhe-conosco': '/careers/',
  carreiras: '/careers/',
  'get-support': '/support/',
  helpdesk: '/support/',
  'help-desk': '/support/',
  'support-ticket': '/support/',
  'open-ticket': '/support/',
  'raise-ticket': '/support/',
  'entre-em-contato': '/contact/',
  'fale-conosco-whatsapp': '/contact/',
  'talk-to-an-expert': '/contact/',
  'speak-to-sales': '/contact/',
  'contact-sales': '/contact/',
  'whatsapp-business': '/contact/',
  'telegram-bot': '/contact/',
  'nossos-servicos': '/services/',
  'servicos-ia': '/services/',
  'inteligencia-artificial': '/services/',
  'ia-para-empresas': '/services/',
  'transformacao-digital': '/services/',
  'managed-services': '/services/',
  automacao: '/automation/',
  'automacao-ia': '/automation/',
  'our-company': '/about/',
  'who-we-are': '/about/',
  'meet-the-team': '/about/',
  suporte: '/support/',
  'suporte-ti': '/support/',
  'suporte-tecnico': '/support/',
  'terms-of-service': '/terms/',
  'terms-and-conditions': '/terms/',
  'termos-e-condicoes': '/terms/',
  'lgpd-compliance': '/privacy/',
  'gdpr-compliance': '/privacy/',
  'politica-de-cookies': '/cookies/',
  'cookie-policy': '/cookies/',
  'perguntas-frequentes': '/faq/',
  'faq-pt': '/faq/',
  signup: '/login/',
  'sign-up': '/login/',
  register: '/login/',
  'create-account': '/login/',
  pt: '/',
  'pt-br': '/',
  br: '/',
  brasil: '/',
  home: '/',
  homepage: '/',
  index: '/',
  n8n: '/composio-vs-n8n-make/',
  make: '/composio-vs-n8n-make/',
  'zapier-alternative': '/composio-vs-zapier/',
  'composio-alternative': '/composio/',
  nuvem: '/cloud/',
  'chat-whatsapp': '/contact/',
  'talk-with-us': '/contact/',
  'call-us': '/contact/',
  'email-us': '/contact/',
  atendimento: '/contact/',
  sac: '/contact/',
  ouvidoria: '/contact/',
  'help-center': '/support/',
  'central-de-ajuda': '/support/',
  'customer-support': '/support/',
  'technical-support': '/support/',
  'it-help': '/support/',
  'servicos-de-ti': '/services/',
  'ti-gerenciada': '/services/',
  inteligencia: '/services/',
  'servicos-em-nuvem': '/services/',
  'migracao-cloud': '/services/',
  'seguranca-cibernetica': '/services/',
  ciberseguranca: '/services/',
  observabilidade: '/services/',
  finops: '/services/',
  'cloud-consulting': '/services/',
  'gestao-de-ti': '/services/',
  portuguese: '/',
  portugues: '/',
  'idioma-pt': '/',
};

function closerCanonical(rel) {
  const top = rel.split('/')[0].replace(/\.html$/, '');
  if (BOOK_ALIASES.has(top)) return '/book/';
  if (HUB_ALIASES[top]) return HUB_ALIASES[top];
  if (rel.startsWith('blog/')) return '/blog/';
  if (rel.startsWith('tools/')) return '/tools/';
  if (rel.startsWith('solutions/')) return '/solutions/';
  if (/^ai\/it-support-/.test(rel)) return '/it-support/';
  if (rel.startsWith('direitos-globais') || rel.startsWith('roteiros/')) return '/services/';
  if (rel.startsWith('community/')) return '/';
  if (rel.startsWith('privacy-policy')) return '/privacy/';
  if (/^(industry|trust|government|composio-stack|whatsapp-automation)\//.test(rel)) return '/';
  if (rel === 'hp-support.html' || rel === 'outsourcing-it.html') return '/';
  if (!rel.startsWith('services/') && !rel.startsWith('blog/') && !rel.startsWith('tools/')) {
    // leftover hash SKUs dumped at repo root are not heritage hardware
    if (/-[0-9a-f]{8}\/index\.html$/.test(rel)) return '/';
    return '/heritage/';
  }
  return '/services/';
}

for (const rel of SERP_CLOSER_PATHS) {
  if (WORKING_PT_TOOLS.has(rel)) {
    console.log('skip working Portuguese tool', rel);
    continue;
  }
  const src = path.join(ROOT, rel);
  const closer = honestCloser({ title: titleFromSlug(rel), canonical: closerCanonical(rel) });
  let content = closer;
  if (fs.existsSync(src) && fs.statSync(src).isFile()) {
    const existing = fs.readFileSync(src, 'utf8');
    if (looksLikeHonestCloser(existing) && !looksLikeLeftover(existing)) content = existing;
  } else {
    mkdirp(path.dirname(src));
    fs.writeFileSync(src, content);
  }
  if (fs.existsSync(src) && fs.statSync(src).isFile() && looksLikeLeftover(fs.readFileSync(src, 'utf8'))) {
    fs.writeFileSync(src, closer);
    content = closer;
  }
  write(rel, content);
}

write('.nojekyll', '');
write('CNAME', 'ziontechgroup.com\n');

const four = path.join(ROOT, '404.html');
if (fs.existsSync(four)) write('404.html', fs.readFileSync(four, 'utf8'));

console.log('public/ synced', FILES.length, 'FILES +', SERP_CLOSER_PATHS.length, 'SERP closers');
