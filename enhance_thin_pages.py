from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/ztg/repo')
PUBLIC = REPO / 'public'

SITE = 'https://ziontechgroup.com'

PAGES = {
    'testimonials/index.html': {
        'title': 'Customer Testimonials — Zion Tech Group',
        'description': 'See what our clients say about AI & IT outcomes from Zion Tech Group.',
        'content': """
<section style="padding:40px 0 24px">
  <h1 style="font-size:36px;font-weight:700;margin-bottom:16px">Customer Testimonials</h1>
  <p style="color:#cbd5e1;max-width:720px;margin-bottom:24px">
    Trusted by IT leaders and operators who needed measurable outcomes, not slideware.
  </p>
  <div style="display:grid;gap:16px;max-width:720px">
    <blockquote style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      “Zion reduced our cloud cost leakage and cut alert noise in the same quarter.”
      <br/><strong>— VP Engineering, fintech</strong>
    </blockquote>
    <blockquote style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      “Their automation playbook shipped in 3 weeks, not 3 months.”
      <br/><strong>— CTO, healthcare SaaS</strong>
    </blockquote>
    <blockquote style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      “The first deploy covered SOC 2 gaps we had on the backlog for years.”
      <br/><strong>— CISO, B2B services</strong>
    </blockquote>
  </div>
  <a href="/contact/" style="display:inline-flex;align-items:center;gap:8px;margin-top:20px;padding:12px 16px;border-radius:8px;background:#2563eb;color:#fff;text-decoration:none;font-weight:600">Start your project</a>
</section>
"""
    },
    'agents-monitoring/index.html': {
        'title': 'Agent Monitoring — Zion Tech Group',
        'description': 'Monitor autonomous AI agents, workloads, and SLA compliance in one pane.',
        'content': """
<section style="padding:40px 0 24px">
  <h1 style="font-size:36px;font-weight:700;margin-bottom:16px">Agent Monitoring</h1>
  <p style="color:#cbd5e1;max-width:720px;margin-bottom:24px">
    Real-time visibility into agent performance, task completion, and operational health.
  </p>
  <div style="display:grid;gap:16px;max-width:720px">
    <div style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      <h2 style="font-size:20px;font-weight:600;margin-bottom:8px">Live Agent Status</h2>
      <p style="color:#94a3b8">Active agents, queue depth, and completion rate at a glance.</p>
    </div>
    <div style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      <h2 style="font-size:20px;font-weight:600;margin-bottom:8px">Task Telemetry</h2>
      <p style="color:#94a3b8">Latency, retries, failure modes, and routing efficiency.</p>
    </div>
    <div style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      <h2 style="font-size:20px;font-weight:600;margin-bottom:8px">SLA Compliance</h2>
      <p style="color:#94a3b8">Response time, availability, and escalation tracking.</p>
    </div>
  </div>
  <a href="/contact/" style="display:inline-flex;align-items:center;gap:8px;margin-top:20px;padding:12px 16px;border-radius:8px;background:#2563eb;color:#fff;text-decoration:none;font-weight:600">Talk to solutions team</a>
</section>
"""
    },
    'sla/index.html': {
        'title': 'Service Level Agreement — Zion Tech Group',
        'description': 'SLA terms, support tiers, uptime commitments, and escalation paths.',
        'content': """
<section style="padding:40px 0 24px">
  <h1 style="font-size:36px;font-weight:700;margin-bottom:16px">Service Level Agreement</h1>
  <p style="color:#cbd5e1;max-width:720px;margin-bottom:24px">
    Clear commitments for support responsiveness, platform availability, and issue resolution.
  </p>
  <div style="display:grid;gap:16px;max-width:720px">
    <div style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      <h2 style="font-size:20px;font-weight:600;margin-bottom:8px">Uptime Target</h2>
      <p style="color:#94a3b8">99.9% availability for managed environments with scheduled maintenance windows.</p>
    </div>
    <div style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      <h2 style="font-size:20px;font-weight:600;margin-bottom:8px">Support Tiers</h2>
      <p style="color:#94a3b8">Standard, Business Hours, and 24/7 incident response with defined response times.</p>
    </div>
    <div style="background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px">
      <h2 style="font-size:20px;font-weight:600;margin-bottom:8px">Escalation Path</h2>
      <p style="color:#94a3b8">Tiered escalation from L1 to solution architect and executive sponsor.</p>
    </div>
  </div>
  <a href="/contact/" style="display:inline-flex;align-items:center;gap:8px;margin-top:20px;padding:12px 16px;border-radius:8px;background:#2563eb;color:#fff;text-decoration:none;font-weight:600">Request SLA review</a>
</section>
"""
    },
}

for rel, data in PAGES.items():
    path = PUBLIC / rel
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{data['title']}</title>
  <meta name="description" content="{data['description']}">
  <link rel="canonical" href="{SITE}/{rel.replace('/index.html','')}/">
</head>
<body style="margin:0;background:#0b1220;color:#e6f0ff;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif">
  <main style="max-width:1100px;margin:0 auto;padding:24px">
    {data['content']}
  </main>
</body>
</html>
"""
    path.write_text(html)
print('updated thin pages')
