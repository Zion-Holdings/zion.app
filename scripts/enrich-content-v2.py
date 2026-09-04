#!/usr/bin/env python3
"""
Batch enrich: expand thin service pages and blog pages with real content,
SEO metadata, and proper structure.
"""
import re
from pathlib import Path

repo = Path("/Users/miami2/zion-support.github.io")
public = repo / "public"

def enrich_page(slug, title, description, h1, body_html):
    """Write enriched HTML for a service page."""
    path = public / f"services/{slug}/index.html"
    if not path.exists():
        print(f"  SKIP: {slug} — no existing file")
        return False
    
    old_size = path.stat().st_size
    
    content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="https://ziontechgroup.com/services/{slug}/">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://ziontechgroup.com/services/{slug}/">
  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    body {{ font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; background: #0b1220; color: #e6f0ff; line-height: 1.65; }}
    .wrap {{ max-width: 1100px; margin: 0 auto; padding: 36px 28px; }}
    header {{ margin-bottom: 24px; }}
    h1 {{ font-size: 2.4rem; font-weight: 700; line-height: 1.2; margin-bottom: 12px; }}
    .subtitle {{ font-size: 1.1rem; color: #94a3b8; margin-bottom: 28px; }}
    h2 {{ font-size: 1.3rem; font-weight: 600; margin: 32px 0 12px; color: #94a3b8; }}
    p {{ margin: 0 0 14px; color: #cbd5e1; }}
    ul {{ margin: 0 0 14px; padding-left: 20px; color: #cbd5e1; }}
    li {{ margin-bottom: 4px; }}
    .features {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }}
    .feature-card {{ border: 1px solid #1e293b; border-radius: 10px; padding: 20px; background: #0f172a; }}
    .feature-card h3 {{ font-size: 1.05rem; margin-bottom: 8px; color: #60a5fa; }}
    .feature-card p {{ font-size: 0.88rem; color: #94a3b8; margin: 0; }}
    .cta {{ display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 24px; transition: background 0.2s; }}
    .cta:hover {{ background: #1d4ed8; }}
    .nav {{ display: flex; gap: 16px; margin-bottom: 28px; flex-wrap: wrap; }}
    .nav a {{ color: #94a3b8; text-decoration: none; font-size: 0.9rem; }}
    .nav a:hover {{ color: #e6f0ff; }}
    .footer {{ margin-top: 48px; padding: 24px 0; border-top: 1px solid #1e293b; color: #64748b; font-size: 0.82rem; }}
    .footer a {{ color: #64748b; text-decoration: none; margin-right: 16px; }}
  </style>
</head>
<body>
<div class="wrap">
  <nav class="nav">
    <a href="/">Home</a>
    <a href="/services/">Services</a>
    <a href="/blog/">Blog</a>
    <a href="/tools/">Tools</a>
    <a href="/contact/">Contact</a>
  </nav>
  <header>
    <h1>{h1}</h1>
    <p class="subtitle">{description}</p>
  </header>
  <main>
    {body_html}
  </main>
  <a href="/contact/" class="cta">Start a project with Zion Tech Group</a>
</div>
<div class="footer">
  <div class="wrap">
    <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
    <div>
      <a href="/privacy/">Privacy Policy</a>
      <a href="/terms/">Terms of Service</a>
      <a href="/contact/">Contact Us</a>
    </div>
  </div>
</div>
</body>
</html>"""
    
    path.write_text(content, encoding='utf-8')
    new_size = path.stat().st_size
    growth = new_size - old_size
    print(f"  ✓ {slug}: {old_size} → {new_size} bytes (+{growth})")
    return True

# === ENHANCE THIN SERVICE PAGES ===
service_enhancements = [
    ("ai-agent-automation", "AI Agent Automation",
     "Build autonomous AI agents that handle complex workflows end-to-end — from triage to resolution — with human-in-the-loop oversight and measurable KPIs.",
     "AI Agent Automation Services",
     """<p>Zion Tech Group designs and deploys AI agent systems that go far beyond chatbots. Our agents integrate directly with your existing tools — CRMs, ticketing platforms, knowledge bases, and cloud infrastructure — to autonomously execute multi-step processes with clear escalation paths.</p>
<h2>What We Build</h2>
<div class="features">
  <div class="feature-card">
    <h3>Customer Support Agents</h3>
    <p>Autonomous triage, prioritization, and resolution for support tickets — with SLA tracking, sentiment analysis, and seamless human handoff when needed.</p>
  </div>
  <div class="feature-card">
    <h3>Sales & Outreach Agents</h3>
    <p>Research prospects, personalize outreach sequences, qualify leads, and book meetings directly into your pipeline — at scale and with measurable conversion rates.</p>
  </div>
  <div class="feature-card">
    <h3>Operations Agents</h3>
    <p>Monitor your systems, detect anomalies, and execute remediation playbooks automatically — reducing MTTR without waking up your engineering team at 3 AM.</p>
  </div>
  <div class="feature-card">
    <h3>Knowledge Agents</h3>
    <p>Index your documentation, policies, and technical knowledge. Answer employee and customer questions with citations — and route complex issues to the right human expert.</p>
  </div>
</div>
<h2>Our Approach</h2>
<p>Every agent is purpose-built for your specific workflows, not a template. We start with workflow discovery, design the agent architecture, integrate with your toolchain, build an evaluation harness, deploy, and provide ongoing optimization.</p>
<p>Engagement metrics include resolution time, lead conversion rate, cost per ticket, human handoff rate, and customer satisfaction impact — so you can see exactly what the agents deliver.</p>"""),

    ("ai-observability", "AI Observability Platform",
     "Monitor, evaluate, and optimize AI systems in production — model performance, token costs, latency, reliability, and failure patterns across your entire AI fleet.",
     "AI Observability Platform",
     """<p>AI systems in production need visibility that traditional monitoring tools simply don't provide. Zion Tech Group builds AI observability pipelines that give you a complete picture of model quality, cost efficiency, latency distributions, and failure modes across every AI system you run.</p>
<h2>What You Monitor</h2>
<div class="features">
  <div class="feature-card">
    <h3>Model Performance</h3>
    <p>Track accuracy, detect drift, and identify emerging failure patterns across models. Get alerts before quality drops below acceptable thresholds — not after customers notice.</p>
  </div>
  <div class="feature-card">
    <h3>Cost & Token Analytics</h3>
    <p>Break down token spend by model, endpoint, team, and use case. Identify waste, optimize where every dollar goes, and build accurate budget forecasts for AI operations.</p>
  </div>
  <div class="feature-card">
    <h3>Prompt Evaluation</h3>
    <p>Automate evaluation of prompt changes against golden datasets. Catch regressions early, compare prompt versions systematically, and maintain quality through iteration.</p>
  </div>
  <div class="feature-card">
    <h3>Reliability Engineering</h3>
    <p>Track uptime, latency percentiles, and error rates across all AI providers. Build fallback paths, circuit breakers, and redundancy so your AI systems stay available.</p>
  </div>
</div>
<h2>For Production AI Teams</h2>
<p>Whether you run a few models or an entire AI fleet spanning LLMs, embeddings, agents, and RAG pipelines, observability is what lets you operate with confidence. We build the dashboards, alerts, evaluation reports, and cost attribution that turn AI from an experiment into a managed operation.</p>"""),

    ("automation", "Intelligent Automation",
     "Automate repetitive IT and business processes with AI-powered workflows — document processing, data extraction, report generation, and decision support.",
     "Intelligent Automation Services",
     """<p>Automation is where AI delivers the fastest return. Zion Tech Group builds intelligent automation solutions that handle repetitive, high-volume tasks — freeing your team to focus on work that actually needs human judgment.</p>
<h2>Automation Capabilities</h2>
<div class="features">
  <div class="feature-card">
    <h3>Document Processing</h3>
    <p>Extract structured data from invoices, contracts, forms, and reports. Classify, validate, and route documents automatically — with human review only for edge cases.</p>
  </div>
  <div class="feature-card">
    <h3>Data Extraction & Enrichment</h3>
    <p>Pull data from multiple sources, clean and normalize it, enrich with additional context, and load into your systems — all on a schedule or triggered by events.</p>
  </div>
  <div class="feature-card">
    <h3>Report Generation</h3>
    <p>Produce consistent, accurate reports from your data on any schedule. Summarize findings, highlight anomalies, and deliver to stakeholders in their preferred format.</p>
  </div>
  <div class="feature-card">
    <h3>Decision Support</h3>
    <p>Build workflows that recommend actions based on your data and rules. Humans make the final call — but they get better information, faster, every time.</p>
  </div>
</div>
<h2>Why Automation First?</h2>
<p>Automation projects typically deliver measurable ROI within weeks. They reduce errors, eliminate busywork, and create the data foundation that more advanced AI initiatives build on. Start with one process, prove the value, then expand.</p>"""),

    ("cloud", "Cloud Services",
     "Cloud migration, multi-cloud management, infrastructure optimization, and DevOps — designed for reliability, cost efficiency, and security at scale.",
     "Cloud & Infrastructure Services",
     """<p>Zion Tech Group helps organizations get the most from their cloud investments — whether you're migrating for the first time, optimizing an existing environment, or building cloud-native architectures from the ground up.</p>
<h2>Cloud Services</h2>
<div class="features">
  <div class="feature-card">
    <h3>Cloud Migration</h3>
    <p>Plan and execute migrations for workloads of any complexity. Assess readiness, choose the right strategy — rehost, replatform, or refactor — and manage the entire cutover with minimal downtime.</p>
  </div>
  <div class="feature-card">
    <h3>Multi-Cloud Management</h3>
    <p>Operate across AWS, GCP, and Azure with unified governance, consistent security postures, and cost visibility. Avoid vendor lock-in while keeping operations streamlined.</p>
  </div>
  <div class="feature-card">
    <h3>Infrastructure Optimization</h3>
    <p>Right-size resources, eliminate waste, and implement auto-scaling and reserved capacity strategies. Reduce cloud spend without sacrificing performance or reliability.</p>
  </div>
  <div class="feature-card">
    <h3>DevOps & CI/CD</h3>
    <p>Build and operate CI/CD pipelines, container orchestration, infrastructure-as-code, and deployment automation. Ship faster with fewer errors and faster rollback.</p>
  </div>
</div>
<h2>Our Philosophy</h2>
<p>Cloud is a means, not an end. We design cloud architectures around your actual workloads, compliance requirements, and cost targets — not around vendor certifications. Every engagement includes documentation, knowledge transfer, and ongoing support options.</p>"""),
]

# === ENHANCE BLOG PAGES ===
blog_enhancements = [
    ("devops-gen-ai-cicd-2026", "DevOps and Generative AI in CI/CD — 2026",
     "How generative AI is transforming CI/CD pipelines — test selection, change summaries, rollback decisions, and pipeline optimization.",
     "DevOps & Generative AI in CI/CD — 2026",
     """<p>CI/CD pipelines are one of the most promising frontiers for generative AI in DevOps. Unlike interactive coding where AI assists a human, CI/CD is already largely automated — making it easier to insert AI steps that improve reliability and developer experience without changing fundamental workflow patterns.</p>
<h2>AI in the Pipeline</h2>
<div class="features">
  <div class="feature-card">
    <h3>Intelligent Test Selection</h3>
    <p>AI analyzes code changes and selects the most relevant tests to run — speeding up pipelines significantly while maintaining coverage confidence. No more running the entire test suite for every commit.</p>
  </div>
  <div class="feature-card">
    <h3>Change Summarization</h3>
    <p>Generate human-readable summaries of what a change does: which services are affected, what the diff contains, and what the potential impact might be — for reviewers and approvers who need context fast.</p>
  </div>
  <div class="feature-card">
    <h3>Rollback Recommendations</h3>
    <p>When a deployment fails, AI analyzes the failure pattern and recommends whether to roll back, patch forward, or investigate further — with reasoning attached so the on-call engineer can make the right call faster.</p>
  </div>
  <div class="feature-card">
    <h3>Pipeline Optimization</h3>
    <p>Analyze pipeline history to identify bottlenecks, suggest parallelization opportunities, and predict which stages are most likely to fail. Continuous improvement based on actual data, not intuition.</p>
  </div>
</div>
<h2>What to Watch For</h2>
<p>AI in CI/CD works best when the problem is well-scoped and sufficient context is available. It's less reliable when asked to make irreversible decisions without enough information. The strongest implementations use AI to recommend and inform — with humans retaining final authority over production changes.</p>
<p>Start with low-risk insertions: test selection and change summaries are great first steps. Build trust in the AI's outputs, then expand to more consequential recommendations as your team gets comfortable.</p>"""),
]

def main():
    print("=== ENRICHING SERVICE PAGES ===")
    count = 0
    for slug, title, desc, h1, body in service_enhancements:
        if enrich_page(slug, title, desc, h1, body):
            count += 1
    print(f"\nEnriched {count}/{len(service_enhancements)} service pages")
    
    print("\n=== ENRICHING BLOG PAGES ===")
    blog_dir = public / "blog"
    blog_count = 0
    for slug, title, desc, h1, body in blog_enhancements:
        path = blog_dir / slug / "index.html"
        if path.exists():
            old_size = path.stat().st_size
            content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{desc}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://ziontechgroup.com/blog/{slug}/">
  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    body {{ font-family: system-ui, -apple-system, sans-serif; background: #0b1220; color: #e6f0ff; line-height: 1.7; }}
    .wrap {{ max-width: 800px; margin: 0 auto; padding: 40px 28px; }}
    header {{ margin-bottom: 32px; border-bottom: 1px solid #1e293b; padding-bottom: 20px; }}
    h1 {{ font-size: 2.2rem; font-weight: 700; line-height: 1.25; margin-bottom: 10px; }}
    .meta {{ color: #64748b; font-size: 0.85rem; margin-bottom: 28px; }}
    h2 {{ font-size: 1.3rem; font-weight: 600; margin: 32px 0 12px; color: #94a3b8; }}
    p {{ margin: 0 0 14px; color: #cbd5e1; }}
    .features {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin: 24px 0; }}
    .feature-card {{ border: 1px solid #1e293b; border-radius: 8px; padding: 16px; background: #0f172a; }}
    .feature-card h3 {{ font-size: 1rem; margin-bottom: 6px; color: #60a5fa; }}
    .feature-card p {{ font-size: 0.84rem; color: #94a3b8; margin: 0; }}
    .nav {{ display: flex; gap: 16px; margin-bottom: 28px; flex-wrap: wrap; }}
    .nav a {{ color: #94a3b8; text-decoration: none; font-size: 0.9rem; }}
    .nav a:hover {{ color: #e6f0ff; }}
    .footer {{ margin-top: 40px; padding: 20px 0; border-top: 1px solid #1e293b; color: #64748b; font-size: 0.82rem; }}
    .footer a {{ color: #64748b; text-decoration: none; margin-right: 12px; }}
  </style>
</head>
<body>
<div class="wrap">
  <nav class="nav">
    <a href="/">Home</a>
    <a href="/blog/">Blog</a>
    <a href="/services/">Services</a>
    <a href="/contact/">Contact</a>
  </nav>
  <header>
    <h1>{h1}</h1>
    <p class="meta">Zion Tech Group — AI & IT Services Blog</p>
  </header>
  <main>
    {body}
  </main>
  <div style="margin-top: 28px;">
    <a href="/blog/" style="color:#94a3b8; text-decoration:none;">← Back to Blog</a>
    <a href="/contact/" style="display:inline-flex; align-items:center; gap:8px; padding:10px 18px; background:#2563eb; color:#fff; text-decoration:none; border-radius:8px; font-weight:600; margin-left:12px;">Talk to an expert</a>
  </div>
</div>
<div class="footer">
  <div class="wrap">
    <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
    <div>
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
      <a href="/contact/">Contact</a>
    </div>
  </div>
</div>
</body>
</html>"""
            path.write_text(content, encoding='utf-8')
            new_size = path.stat().st_size
            print(f"  ✓ {slug}: {old_size} → {new_size} bytes")
            blog_count += 1
        else:
            print(f"  ✗ {slug} — file not found")
    
    print(f"\nEnriched {blog_count}/{len(blog_enhancements)} blog pages")

if __name__ == "__main__":
    main()
