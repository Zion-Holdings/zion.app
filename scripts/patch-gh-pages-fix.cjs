const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const repo = process.cwd();
const base = repo;
const files = {
  'managed-it/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Managed IT Services | Zion Tech Group</title>
  <meta name="description" content="Managed IT support, endpoint management, cloud operations, and help desk automation with 24/7 coverage and measurable SLAs." />
  <link rel="canonical" href="https://ziontechgroup.com/managed-it" />
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: ui-sans-serif, system-ui, sans-serif; background: linear-gradient(180deg, #0f172a, #0b1221); color:#e5e7eb; }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 24px; }
    header { position: sticky; top: 0; z-index: 50; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(15,23,42,0.85); backdrop-filter: blur(12px); }
    nav { max-width: 1100px; margin: 0 auto; padding: 14px 24px; display:flex; justify-content:space-between; align-items:center; }
    .brand { font-weight: 800; letter-spacing: 0.2px; background: linear-gradient(90deg,#a78bfa,#ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; text-decoration:none; font-size:18px; }
    a { color: inherit; }
    .hero { text-align: center; padding: 80px 24px 48px; }
    .hero h1 { font-size: 44px; margin: 0 0 12px; color:#fff; }
    .hero p { color:#cbd5e1; font-size: 18px; max-width: 760px; margin: 0 auto 28px; }
    .grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); margin: 28px 0 40px; }
    .card { background:#0b1221; border:1px solid #1f2937; border-radius: 16px; padding: 18px; text-decoration:none; color:#e5e7eb; transition: transform .05s ease, border-color .15s ease; }
    .card:hover { border-color:#7c3aed; transform: translateY(-1px); }
    .card h3 { margin: 6px 0 8px; color:#fff; font-size: 17px; }
    .card p { margin: 0; color:#94a3b8; font-size: 14px; line-height: 1.45; }
    .cta { display:inline-flex; gap:10px; flex-wrap:wrap; justify-content:center; }
    .btn { display:inline-flex; align-items:center; justify-content:center; padding: 10px 16px; border-radius: 12px; font-weight: 700; text-decoration:none; border: 1px solid transparent; }
    .btn-primary { background: linear-gradient(90deg,#7c3aed,#db2777); color:#fff; }
    .btn-secondary { background: rgba(255,255,255,0.04); color:#e5e7eb; border-color:#334155; }
    footer { border-top:1px solid rgba(255,255,255,0.06); padding: 36px 24px; color:#94a3b8; font-size:13px; }
    .small { color:#94a3b8; }
    .badge { display:inline-block; font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; background:#7c3aed22; color:#c4b5fd; border:1px solid #7c3aed44; padding: 4px 8px; border-radius: 999px; }
  </style>
</head>
<body>
  <header>
    <nav aria-label="Primary">
      <a class="brand" href="/">Zion Tech Group</a>
      <div style="display:flex; gap:10px;">
        <a class="btn btn-secondary" href="/services/">Services</a>
        <a class="btn btn-secondary" href="/solutions/">Solutions</a>
        <a class="btn btn-secondary" href="/pricing/">Pricing</a>
        <a class="btn btn-primary" href="/partners">Partner With Us</a>
      </div>
    </nav>
  </header>
  <main>
    <section class="hero">
      <div class="wrap">
        <h1>Managed IT Services</h1>
        <p>Reliable IT operations, proactive support, and scalable cloud management — designed for teams that need predictable uptime and fast incident resolution.</p>
        <div class="cta">
          <a class="btn btn-primary" href="/contact/">Free Consultation</a>
          <a class="btn btn-secondary" href="/case-studies/">See case studies</a>
        </div>
        <div class="cta" style="margin-top:14px;">
          <span class="badge">24/7 monitoring</span>
          <span class="badge">Incident response</span>
          <span class="badge">Cost governance</span>
        </div>
      </div>
    </section>
    <section class="wrap">
      <div class="grid">
        <a class="card" href="/services/?category=it"><h3>IT Support & Help Desk</h3><p>Ticket triage, knowledge-base routing, and AI-assisted support workflows.</p></a>
        <a class="card" href="/services/?category=cloud"><h3>Cloud Operations</h3><p>Cost controls, security baseline checks, and deployment safety for AWS, Azure, and GCP.</p></a>
        <a class="card" href="/services/?category=security"><h3>Security & Compliance</h3><p>Vulnerability management, identity hardening, audit readiness, and incident response planning.</p></a>
        <a class="card" href="/services/?category=automation"><h3>Automation & Observability</h3><p>Monitoring, logging, alerting, and remediation automation for production systems.</p></a>
        <a class="card" href="/pricing/"><h3>Pricing & Packages</h3><p>Compare AI support, managed IT, and escalation coverage models.</p></a>
        <a class="card" href="/industries"><h3>Industry Coverage</h3><p>Healthcare, financial services, energy, legal, retail, technology, and media.</p></a>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:14px; justify-content:space-between; align-items:center;">
        <div>
          <h2 style="color:#fff; margin:0 0 6px; font-size:22px;">Need coverage for business hours or 24/7?</h2>
          <p class="small">We tailor escalation paths and executive reporting to your operational requirements.</p>
        </div>
        <a class="btn btn-primary" href="/contact/">Talk to an engineer →</a>
      </div>
    </section>
  </main>
  <footer>
    <div class="wrap">
      <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:18px;">
        <div>
          <strong style="color:#fff;">Zion Tech Group</strong><br>
          364 E Main St STE 1008, Middletown, DE 19709<br>
          <a href="mailto:kleber@ziontechgroup.com" style="color:#c4b5fd;">kleber@ziontechgroup.com</a>
        </div>
        <div style="display:flex; gap:18px;">
          <a href="/services/">Services</a>
          <a href="/solutions/">Solutions</a>
          <a href="/pricing/">Pricing</a>
          <a href="/contact/">Contact</a>
        </div>
      </div>
      <p style="margin-top:18px;" class="small">© 2026 Zion Tech Group. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,
  'free-ai-it-tools/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Free AI & IT Tools | Zion Tech Group</title>
  <meta name="description" content="Free AI and IT tools from Zion Tech Group: readiness audit, workflow automation guide, autonomous operations assessment, enterprise AI solutions, and AI agent planning." />
  <link rel="canonical" href="https://ziontechgroup.com/free-ai-it-tools/" />
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: ui-sans-serif, system-ui, sans-serif; background: linear-gradient(180deg, #0f172a, #0b1221); color:#e5e7eb; }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 24px; }
    header { position: sticky; top: 0; z-index: 50; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(15,23,42,0.85); backdrop-filter: blur(12px); }
    nav { max-width: 1100px; margin: 0 auto; padding: 14px 24px; display:flex; justify-content:space-between; align-items:center; }
    .brand { font-weight: 800; letter-spacing: 0.2px; background: linear-gradient(90deg,#a78bfa,#ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; text-decoration:none; font-size:18px; }
    a { color: inherit; }
    .hero { text-align: center; padding: 80px 24px 48px; }
    .hero h1 { font-size: 44px; margin: 0 0 12px; color:#fff; }
    .hero p { color:#cbd5e1; font-size: 18px; max-width: 760px; margin: 0 auto 28px; }
    .grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); margin: 28px 0 40px; }
    .card { background:#0b1221; border:1px solid #1f2937; border-radius: 16px; padding: 18px; text-decoration:none; color:#e5e7eb; transition: transform .05s ease, border-color .15s ease; }
    .card:hover { border-color:#7c3aed; transform: translateY(-1px); }
    .card h3 { margin: 6px 0 8px; color:#fff; font-size: 17px; }
    .card p { margin: 0; color:#94a3b8; font-size: 14px; line-height: 1.45; }
    .cta { display:inline-flex; gap:10px; flex-wrap:wrap; justify-content:center; }
    .btn { display:inline-flex; align-items:center; justify-content:center; padding: 10px 16px; border-radius: 12px; font-weight: 700; text-decoration:none; border: 1px solid transparent; }
    .btn-primary { background: linear-gradient(90deg,#7c3aed,#db2777); color:#fff; }
    .btn-secondary { background: rgba(255,255,255,0.04); color:#e5e7eb; border-color:#334155; }
    footer { border-top:1px solid rgba(255,255,255,0.06); padding: 36px 24px; color:#94a3b8; font-size:13px; }
    .small { color:#94a3b8; }
  </style>
</head>
<body>
  <header>
    <nav aria-label="Primary">
      <a class="brand" href="/">Zion Tech Group</a>
      <div style="display:flex; gap:10px;">
        <a class="btn btn-secondary" href="/services/">Services</a>
        <a class="btn btn-secondary" href="/contact/">Contact</a>
        <a class="btn btn-primary" href="/managed-it">Get Started</a>
      </div>
    </nav>
  </header>
  <main>
    <section class="hero">
      <div class="wrap">
        <h1>Free AI & IT Tools</h1>
        <p>Evaluate AI readiness, automation candidates, operational maturity, enterprise fit, and agent architecture before you build or outsource.</p>
        <div class="cta">
          <a class="btn btn-primary" href="/contact/">Book a consultation</a>
          <a class="btn btn-secondary" href="/services/">View services</a>
        </div>
      </div>
    </section>
    <section class="wrap">
      <div class="grid">
        <a class="card" href="/ai-readiness-assessment/"><h3>AI Readiness Assessment</h3><p>Evaluate data readiness, governance, automation gaps, tooling, and team readiness for autonomous AI operations.</p></a>
        <a class="card" href="/ai-automation-guide/"><h3>AI Automation Guide</h3><p>Use-case patterns, workflow candidate scoring, and an implementation roadmap you can hand to engineering or an MSP.</p></a>
        <a class="card" href="/autonomous-ai-operations/"><h3>Autonomous AI Operations</h3><p>Incident response, alert enrichment, remediation automation, and operating model maturity scoring.</p></a>
        <a class="card" href="/enterprise-ai-solutions/"><h3>Enterprise AI Solutions</h3><p>Enterprise integration pathways, governance controls, and evaluation criteria for AI-assisted work across teams.</p></a>
        <a class="card" href="/ai-agents-for-business/"><h3>AI Agents for Business</h3><p>Use-case prioritization, agent architecture patterns, risk controls, and a discovery-to-deployment playbook.</p></a>
        <a class="card" href="/pricing/"><h3>Pricing & Packages</h3><p>Compare engagement models for AI consulting, implementation, managed AI support, and growth partnerships.</p></a>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:14px; justify-content:space-between; align-items:center;">
        <div>
          <h2 style="color:#fff; margin:0 0 6px; font-size:22px;">Need help choosing the right tool?</h2>
          <p class="small">Share your goal and timeline. We’ll recommend the most effective free tools and paid guardrails for your use case.</p>
        </div>
        <a class="btn btn-primary" href="/contact/">Free Consultation →</a>
      </div>
    </section>
  </main>
  <footer>
    <div class="wrap">
      <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:18px;">
        <div>
          <strong style="color:#fff;">Zion Tech Group</strong><br>
          364 E Main St STE 1008, Middletown, DE 19709<br>
          <a href="mailto:kleber@ziontechgroup.com" style="color:#c4b5fd;">kleber@ziontechgroup.com</a>
        </div>
        <div style="display:flex; gap:18px;">
          <a href="/services/">Services</a>
          <a href="/solutions/">Solutions</a>
          <a href="/pricing/">Pricing</a>
          <a href="/contact/">Contact</a>
        </div>
      </div>
      <p style="margin-top:18px;" class="small">© 2026 Zion Tech Group. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`
};

for (const [rel, html] of Object.entries(files)) {
  const abs = path.join(base, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, html, 'utf8');
}

execSync('git add managed-it/index.html free-ai-it-tools/index.html', { cwd: base, stdio: 'inherit' });
execSync('git commit -m "fix(seo): restore /managed-it and /free-ai-it-tools live fallbacks with proper titles"', { cwd: base, stdio: 'inherit' });
execSync('git push origin HEAD:gh-pages', { cwd: base, stdio: 'inherit' });
