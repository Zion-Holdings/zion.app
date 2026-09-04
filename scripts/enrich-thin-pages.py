#!/usr/bin/env python3
"""Enrich thin/placeholder HTML pages with real content."""
import re, os
from pathlib import Path

PUBLIC = Path("/Users/miami2/zion-support.github.io/public")

def enrich_page(path, title, description, h1, body_html, extra_head=None, cta_link="/contact/", cta_text="Start a project"):
    """Write enriched HTML to a file."""
    head = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="https://ziontechgroup.com{path}/">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://ziontechgroup.com{path}/">
</head>
<body>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ font-family: system-ui, -apple-system, sans-serif; background: #0b1220; color: #e6f0ff; line-height: 1.6; }}
  .wrap {{ max-width: 1100px; margin: 0 auto; padding: 32px 24px; }}
  h1 {{ font-size: 2.2rem; font-weight: 700; margin-bottom: 16px; line-height: 1.2; }}
  h2 {{ font-size: 1.4rem; font-weight: 600; margin: 32px 0 12px; color: #94a3b8; }}
  p {{ margin: 0 0 16px; color: #cbd5e1; }}
  .card-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 24px 0; }}
  .card {{ border: 1px solid #1e293b; border-radius: 10px; padding: 20px; background: #0f172a; }}
  .card h3 {{ font-size: 1.1rem; margin-bottom: 8px; color: #60a5fa; }}
  .card p {{ font-size: 0.9rem; color: #94a3b8; }}
  .cta {{ display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 24px; }}
  .nav {{ display: flex; gap: 16px; margin-bottom: 32px; flex-wrap: wrap; }}
  .nav a {{ color: #94a3b8; text-decoration: none; padding: 6px 0; border-bottom: 2px solid transparent; }}
  .nav a:hover {{ color: #e6f0ff; border-bottom-color: #2563eb; }}
  .footer {{ margin-top: 48px; padding: 24px 0; border-top: 1px solid #1e293b; color: #64748b; font-size: 0.85rem; }}
  .footer a {{ color: #64748b; text-decoration: none; margin-right: 16px; }}
</style>
<div class="wrap">
  <nav class="nav">
    <a href="/">Home</a>
    <a href="/services/">Services</a>
    <a href="/blog/">Blog</a>
    <a href="/tools/">Tools</a>
    <a href="/contact/">Contact</a>
  </nav>
  <h1>{h1}</h1>
  {body_html}
  <a href="{cta_link}" class="cta">{cta_text}</a>
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
    Path(path).write_text(head, encoding="utf-8")
    print(f"  ✓ {path} ({len(head)} bytes)")

def pad_thin_page(path, title, description, h1, body_html):
    """Enrich a thin page in place."""
    enrich_page(path, title, description, h1, body_html)

# === SERVICE PAGES ===
services = [
    ("services/ai-agent-automation", "AI Agent Automation", 
     "Build autonomous AI agents that handle complex workflows end-to-end — from triage to resolution — with human-in-the-loop oversight.",
     "AI Agent Automation Services",
     """<p>Zion Tech Group designs, builds, and operationalizes AI agent systems that go beyond chatbots. Our agents integrate with your existing tools — CRMs, ticketing systems, knowledge bases, and cloud infrastructure — to autonomously execute multi-step processes with measurable outcomes.</p>
<div class="card-grid">
  <div class="card"><h3>Customer Support Agents</h3><p>Autonomous triage, prioritization, and resolution for support tickets — with SLA tracking and escalation paths.</p></div>
  <div class="card"><h3>Sales & Outreach Agents</h3><p>Research, personalize, and send outbound sequences at scale. Qualifies leads and books meetings into your pipeline.</p></div>
  <div class="card"><h3>Operations Agents</h3><p>Monitor systems, detect anomalies, and execute remediation playbooks — reducing MTTR without waking up engineers.</p></div>
  <div class="card"><h3>Knowledge Agents</h3><p>Index your documentation, policies, and technical knowledge. Answer questions with citations and route complex issues to humans.</p></div>
</div>
<h2>Why Zion Tech Group for AI Agents?</h2>
<p>We don't sell templates. Every agent is purpose-built for your workflows, integrated with your stack, and measured against real business KPIs — resolution time, lead conversion, cost per ticket, and human handoff rate.</p>
<p>Our engagements include: workflow discovery, agent architecture, tool integration, evaluation harness, deployment, and ongoing optimization.</p>"""),
    
    ("services/ai-observability", "AI Observability",
     "Monitor, evaluate, and optimize AI systems in production — from model performance to cost, latency, and reliability metrics.",
     "AI Observability Platform",
     """<p>AI systems in production need visibility that traditional observability tools don't provide. Zion Tech Group builds AI observability pipelines that track model quality, prompt performance, token costs, latency distributions, and failure modes across your entire AI fleet.</p>
<div class="card-grid">
  <div class="card"><h3>Model Performance Monitoring</h3><p>Track accuracy, drift, and emerging failure patterns across models — with automated alerts when quality drops below thresholds.</p></div>
  <div class="card"><h3>Cost & Token Analytics</h3><p>Break down token spend by model, endpoint, team, and use case. Identify waste and optimize where each dollar goes.</p></div>
  <div class="card"><h3>Prompt Evaluation</h3><p>Automate evaluation of prompt changes against golden datasets. Catch regressions before they hit production.</p></div>
  <div class="card"><h3>Reliability Engineering</h3><p>Track uptime, latency percentiles, and error rates across AI providers. Build fallback paths and circuit breakers.</p></div>
</div>
<h2>What You Get</h2>
<p>A unified observability layer for all your AI systems — LLMs, embeddings, agents, and RAG pipelines. Dashboards, alerts, evaluation reports, and cost attribution that let you run AI in production with confidence.</p>"""),
    
    ("services/cloud-cost-optimization-service", "Cloud Cost Optimization",
     "Reduce cloud spend without sacrificing performance — rightsizing, reserved capacity planning, and AI-driven cost attribution.",
     "Cloud Cost Optimization Service",
     """<p>Cloud bills grow faster than value when environments are untagged, rightsizing is deferred, and reserved capacity is left on the table. Zion Tech Group audits your cloud spend, identifies savings, and builds the operational discipline to keep costs under control as you scale.</p>
<div class="card-grid">
  <div class="card"><h3>Spending Audit</h3><p>Full visibility into where cloud money goes — by service, team, environment, and workload. Identify waste, idle resources, and optimization opportunities.</p></div>
  <div class="card"><h3>Rightsizing</h3><p>Match instance types and sizes to actual workload patterns. Eliminate over-provisioning without risking performance.</p></div>
  <div class="card"><h3>Reserved & Savings Plans</h3><p>Plan and execute commitments that maximize discount while preserving flexibility. Model the ROI before you commit.</p></div>
  <div class="card"><h3>FinOps Operations</h3><p>Build tagging standards, budget alerts, and cost review cadences that keep spending visible and accountable ongoing.</p></div>
</div>
<h2>Approach</h2>
<p>We work across AWS, GCP, and Azure. Engagements typically start with a spend audit, move into a prioritized optimization plan, and end with operational practices that prevent cost regression.</p>"""),
]

# === BLOG PAGES ===
blogs = [
    ("blog/ai-agent-automation-best-practices-2026", "AI Agent Automation Best Practices 2026",
     "Production-ready patterns for building, evaluating, and operating autonomous AI agents at scale.",
     "AI Agent Automation Best Practices — 2026",
     """<p>AI agents moved from proofs-of-concept to production throughout 2025, and 2026 is the year teams need to operationalize them. This guide distills the patterns that separate agents that actually work from agents that create more work.</p>
<h2>1. Define Success Before Building</h2>
<p>Every agent needs explicit success criteria: what decisions it owns, what it hands off, and how you measure its performance. Without this, you can't tell whether an agent is improving or degrading.</p>
<h2>2. Start with a Narrow Scope</h2>
<p>Agents that try to handle everything fail at everything. Pick one workflow with clear inputs, clear outputs, and a measurable outcome. Expand only after you have evidence the narrow version works.</p>
<h2>3. Design for Human Handoff</h2>
<p>Autonomous doesn't mean no humans. The best agent designs include explicit escalation paths — confidence thresholds below which the agent routes to a person, with full context preserved.</p>
<h2>4. Evaluate Continuously</h2>
<p>Agents drift as the world changes. Set up evaluation harnesses that run against golden datasets regularly, flag regressions, and feed results back into prompt and workflow iteration.</p>
<h2>5. Observe Everything</h2>
<p>Token usage, latency, failure rates, escalation rates, and outcome quality all need tracking. What you don't measure, you can't improve — and you can't justify the investment.</p>
<h2>6. Secure the Tooling Layer</h2>
<p>Agents that act on your systems need scoped credentials, audit logs, and guardrails. Treat agent tool access with the same security rigor you apply to any automated system with write access.</p>
<h2>7. Plan for Model Changes</h2>
<p>The models you use today won't be the models you use in 12 months. Build abstraction layers that let you swap models without rewriting your agent logic.</p>"""),
    
    ("blog/cloud-cost-ai-optimizer-checklist-for-it-leaders", "Cloud Cost AI Optimizer — Checklist for IT Leaders",
     "A practical checklist for IT leaders evaluating AI-driven cloud cost optimization tools and services.",
     "Cloud Cost AI Optimizer Checklist for IT Leaders",
     """<p>AI-powered cloud cost optimization promises significant savings, but buying the wrong tool or deploying it poorly can deliver disappointment. Use this checklist to evaluate solutions and ensure your investment pays off.</p>
<h2>Evaluation Criteria</h2>
<div class="card-grid">
  <div class="card"><h3>1. Integration Depth</h3><p>Does the tool connect to your entire cloud estate — AWS, GCP, Azure — and your tagging schema? Shallow integrations miss savings.</p></div>
  <div class="card"><h3>2. Recommendation Quality</h3><p>Are recommendations actionable and explainable? Can you see why a specific change is suggested and what the expected savings are?</p></div>
  <div class="card"><h3>3. Safe Automation</h3><p>If the tool makes changes automatically, what guardrails exist? Can you set limits, approvals, and rollback paths?</p></div>
  <div class="card"><h3>4. Attribution</h3><p>Does the tool show savings by team, project, or environment? Attribution drives accountability and helps you target future optimization.</p></div>
</div>
<h2>Deployment Checklist</h2>
<ol>
  <li>Run in read-only mode for at least two weeks to establish a baseline.</li>
  <li>Validate recommendations against your workload patterns — not all savings are safe for every workload.</li>
  <li>Set budget alerts and approval thresholds before enabling automation.</li>
  <li>Tag everything. Untagged resources are invisible to cost optimization.</li>
  <li>Review savings weekly at first, then monthly once the process is stable.</li>
  <li>Track both gross savings and net savings after any performance trade-offs.</li>
</ol>
<h2>Common Pitfalls</h2>
<p>Buying before auditing your own spend. Automating before understanding the recommendations. Ignoring reserved instance implications. And treating cost optimization as a one-time project instead of an ongoing discipline.</p>"""),
    
    ("blog/devops-generative-ai-2026", "DevOps and Generative AI in 2026",
     "How DevOps teams are using generative AI for incident response, runbook automation, and infrastructure change management.",
     "DevOps and Generative AI — 2026",
     """<p>Generative AI is moving from coding assistant to operational teammate in DevOps workflows. In 2026, the most mature DevOps teams use AI not just to write code but to respond to incidents, generate runbooks, summarize changes, and accelerate onboarding.</p>
<h2>Incident Response</h2>
<p>When an incident fires, every second of context-switching costs. AI-assisted incident response tools can pull together relevant logs, recent deployments, error rates, and on-call documentation — then draft a summary and suggested next steps for the responder. The goal isn't to replace the engineer; it's to compress the time from alert to understanding.</p>
<h2>Runbook Generation and Maintenance</h2>
<p>Runbooks that go stale are worse than no runbooks. Generative AI can draft runbooks from incident history and system documentation, then help keep them current by flagging gaps when new failure modes appear. Teams that maintain living runbooks respond faster and with more confidence.</p>
<h2>Change Management</h2>
<p>Infrastructure changes are riskier when context is fragmented across Slack, tickets, and tribal knowledge. AI can summarize the intent behind a change, surface related recent changes, and flag potential conflicts — helping operators make safer decisions faster.</p>
<h2>What Works, What Doesn't</h2>
<p>AI is strongest when the problem is well-scoped and the context is available. It's weakest when asked to make judgment calls without sufficient information or when the stakes require deterministic accuracy. The best DevOps AI implementations know those boundaries and design around them.</p>"""),
]

# === THIN TOOL PAGES ===
tools = [
    ("tools/llm-comparison", "LLM Comparison Tool",
     "Compare language models side-by-side on price, context window, speed, and capability — for informed model selection.",
     "LLM Comparison",
     """<p>Choose the right LLM for each workload. Compare models across price per token, context window size, response latency, and capability benchmarks — all in one place.</p>
<h2>Why Compare Models?</h2>
<p>Different tasks need different models. A code review agent needs different capabilities than a summarization pipeline or a customer support chatbot. Matching the model to the workload saves money and improves outcomes.</p>
<div class="card-grid">
  <div class="card"><h3>Price Comparison</h3><p>Compare cost per million tokens across models and providers. Find the most cost-effective model for each use case.</p></div>
  <div class="card"><h3>Context Window</h3><p>Know which models can handle your document sizes. From small prompts to large RAG contexts — pick the right fit.</p></div>
  <div class="card"><h3>Latency & Speed</h3><p>Response time matters for interactive use. Compare time-to-first-token and throughput across models.</p></div>
  <div class="card"><h3>Capability tradeoffs</h3><p>Understand where each model excels — coding, reasoning, creative writing, extraction — and where it underperforms.</p></div>
</div>
<h2>How to Use This Tool</h2>
<p>Select the models you want to compare, set your typical prompt and response sizes, and review the side-by-side comparison. Use the results to guide model selection for each workload in your AI fleet.</p>"""),
    
    ("tools/agent-prompt-builder", "AI Agent Prompt Builder",
     "Build, test, and optimize prompts for AI agents — with templates, variable injection, and evaluation against test cases.",
     "AI Agent Prompt Builder",
     """<p>Great agent behavior starts with great prompts. This tool helps you build, iterate, and evaluate prompts for AI agents — from simple single-turn instructions to complex multi-step workflows with tool use.</p>
<h2>Features</h2>
<div class="card-grid">
  <div class="card"><h3>Prompt Templates</h3><p>Start from proven templates for common agent patterns: triage, research, summarization, extraction, and multi-step reasoning.</p></div>
  <div class="card"><h3>Variable Injection</h3><p>Define input variables and see how your prompt behaves across different inputs. Catch edge cases before deployment.</p></div>
  <div class="card"><h3>Test Cases</h3><p>Build a library of test cases with expected outputs. Run your prompt against the full set and catch regressions fast.</p></div>
  <div class="card"><h3>Version Comparison</h3><p>Compare prompt versions side-by-side on the same inputs. See what changed and whether it improved.</p></div>
</div>
<h2>Best Practices Built In</h2>
<p>System prompts separate instructions from data. Few-shot examples where they help. Clear output format specifications. Guardrails against unwanted behaviors. And evaluation before deployment — not after.</p>"""),
]

# === SOLUTION PAGES ===
solutions = [
    ("solutions/healthcare", "Healthcare AI & IT Solutions",
     "AI-powered IT services for healthcare organizations — HIPAA-compliant, interoperable, and focused on clinical and operational outcomes.",
     "Healthcare Solutions",
     """<p>Healthcare organizations face a unique combination of pressures: strict compliance requirements, complex legacy systems, clinician burnout, and rising patient expectations. Zion Tech Group delivers AI and IT solutions designed for healthcare — with HIPAA compliance built in from the start.</p>
<div class="card-grid">
  <div class="card"><h3>Clinical Workflow Automation</h3><p>Reduce administrative burden on clinical staff with AI agents that handle scheduling, triage, documentation assistance, and patient communication — while keeping humans in control of clinical decisions.</p></div>
  <div class="card"><h3>Interoperability & Integration</h3><p>Connect EHRs, lab systems, imaging archives, and communication platforms. Make data flow across the care continuum without manual handoffs.</p></div>
  <div class="card"><h3>Patient Experience</h3><p>AI-powered patient portals, appointment scheduling, follow-up coordination, and intelligent chatbots that answer questions and route complex issues to the right human.</p></div>
  <div class="card"><h3>Compliance & Security</h3><p>HIPAA-compliant infrastructure, audit-ready logging, role-based access controls, and security monitoring designed for healthcare regulatory requirements.</p></div>
</div>
<h2>Why Healthcare Teams Choose Zion Tech Group</h2>
<p>We understand that healthcare IT isn't just about technology — it's about patient outcomes, clinician time, and regulatory risk. Our solutions are designed to improve all three, with implementation support that respects clinical workflows and compliance requirements.</p>"""),
]


def main():
    print("=== ENRICHING THIN PAGES ===\n")
    
    count = 0
    for section, items in [("services", services), ("blog", blogs), ("tools", tools), ("solutions", solutions)]:
        for path, title, desc, h1, body in items:
            full_path = PUBLIC / f"{path}/index.html"
            if full_path.exists():
                old_size = full_path.stat().st_size
                pad_thin_page(str(full_path), title, desc, h1, body)
                new_size = full_path.stat().st_size
                print(f"  [{section}] {path}: {old_size} → {new_size} bytes")
                count += 1
            else:
                print(f"  [SKIP] {path} — file not found")
    
    print(f"\n=== ENRICHED {count} PAGES ===")

if __name__ == "__main__":
    main()
