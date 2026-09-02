#!/usr/bin/env python3
"""Batch 2: enrich tool pages, more service pages, and key routes."""
import re
from pathlib import Path

PUBLIC = Path("/Users/miami2/zion-support.github.io/public")

def enrich(path, title, description, h1, body):
    content = f"""<!DOCTYPE html>
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
</head>
<body>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ font-family: system-ui, -apple-system, sans-serif; background: #0b1220; color: #e6f0ff; line-height: 1.6; }}
  .wrap {{ max-width: 1100px; margin: 0 auto; padding: 32px 24px; }}
  h1 {{ font-size: 2.2rem; font-weight: 700; margin-bottom: 16px; line-height: 1.2; }}
  h2 {{ font-size: 1.4rem; font-weight: 600; margin: 28px 0 10px; color: #94a3b8; }}
  p {{ margin: 0 0 14px; color: #cbd5e1; }}
  .card-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin: 20px 0; }}
  .card {{ border: 1px solid #1e293b; border-radius: 8px; padding: 16px; background: #0f172a; }}
  .card h3 {{ font-size: 1rem; margin-bottom: 6px; color: #60a5fa; }}
  .card p {{ font-size: 0.85rem; color: #94a3b8; }}
  .cta {{ display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }}
  .nav {{ display: flex; gap: 14px; margin-bottom: 28px; flex-wrap: wrap; }}
  .nav a {{ color: #94a3b8; text-decoration: none; }}
  .nav a:hover {{ color: #e6f0ff; }}
  .footer {{ margin-top: 40px; padding: 20px 0; border-top: 1px solid #1e293b; color: #64748b; font-size: 0.8rem; }}
  .footer a {{ color: #64748b; text-decoration: none; margin-right: 12px; }}
  code {{ background: #1e293b; padding: 2px 6px; border-radius: 4px; font-size: 0.85em; }}
</style>
<div class="wrap">
  <nav class="nav">
    <a href="/">Home</a>
    <a href="/services/">Services</a>
    <a href="/tools/">Tools</a>
    <a href="/contact/">Contact</a>
  </nav>
  <h1>{h1}</h1>
  {body}
  <a href="/contact/" class="cta">Talk to Zion Tech Group</a>
</div>
<div class="footer">
  <div class="wrap">
    <p>&copy; 2026 Zion Tech Group.</p>
    <div>
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
      <a href="/contact/">Contact</a>
    </div>
  </div>
</div>
</body>
</html>"""
    Path(path).write_text(content, encoding="utf-8")
    old = path.stat().st_size if path.exists() else 0
    print(f"  ✓ {path} ({len(content)} bytes)")


# === MORE TOOL PAGES ===
tool_pages = [
    ("tools/csv-to-json", "CSV to JSON Converter",
     "Convert CSV files to JSON format instantly — with options for array, object, and key-value output styles.",
     "CSV to JSON Converter",
     """<p>Paste or upload a CSV and get clean JSON output in seconds. Choose array-of-objects, single-object, or key-value-pair formatting depending on what your application needs.</p>
<h2>How It Works</h2>
<p>Drop your CSV data into the input, select your output format, and get JSON. The converter handles headers, quoted fields, and common CSV edge cases automatically.</p>
<div class="card-grid">
  <div class="card"><h3>Array of Objects</h3><p>Each CSV row becomes a JSON object with header names as keys. Best for API payloads and database imports.</p></div>
  <div class="card"><h3>Single Object</h3><p>Headers map to values from the first data row. Useful for config files and settings.</p></div>
  <div class="card"><h3>Key-Value Pairs</h3><p>First column as keys, second column as values. Great for simple mappings and lookup tables.</p></div>
</div>"""),
    
    ("tools/json-query", "JSON Query Tool",
     "Query, filter, and extract data from JSON using path expressions — like jq in your browser.",
     "JSON Query Tool",
     """<p>Run JSONPath-style queries against JSON data without installing anything. Extract nested values, filter arrays, and transform structures — all in the browser.</p>
<h2>Features</h2>
<div class="card-grid">
  <div class="card"><h3>Path Queries</h3><p>Use dot notation and bracket syntax to reach deep into nested JSON — <code>$.store.book[0].title</code> style.</p></div>
  <div class="card"><h3>Filtering</h3><p>Filter arrays by property values: find all books under $10, all users with admin role, etc.</p></div>
  <div class="card"><h3>Formatting</h3><p>Beautify, minify, or reformat JSON output. Validate syntax and catch errors before they hit production.</p></div>
</div>"""),

    ("tools/text-diff", "Text Diff Tool",
     "Compare two text strings or files side-by-side — see additions, deletions, and changes highlighted clearly.",
     "Text Diff Tool",
     """<p>Compare any two pieces of text and see exactly what changed. Useful for code review, document editing, config comparisons, and debugging output differences.</p>
<h2>Use Cases</h2>
<div class="card-grid">
  <div class="card"><h3>Code Review</h3><p>See what changed between before and after — line by line, with additions and deletions highlighted.</p></div>
  <div class="card"><h3>Config Drift</h3><p>Compare production vs. staging configs, or current vs. desired state, to spot unintended differences.</p></div>
  <div class="card"><h3>Document Drafting</h3><p>Track changes between document versions. See what was added, removed, or modified.</p></div>
</div>"""),

    ("tools/date-diff", "Date Difference Calculator",
     "Calculate the difference between two dates — days, weeks, months, years, and even business days.",
     "Date Difference Calculator",
     """<p>Enter two dates and get the full breakdown: total days, weeks, months, years, and business days between them. Also supports adding or subtracting time from a date.</p>
<h2>What You Can Calculate</h2>
<div class="card-grid">
  <div class="card"><h3>Duration</h3><p>Days, weeks, months, and years between any two dates — past or future.</p></div>
  <div class="card"><h3>Business Days</h3><p>Count only weekdays, excluding weekends. Useful for SLA tracking and project timelines.</p></div>
  <div class="card"><h3>Date Arithmetic</h3><p>Add or subtract days, weeks, months, or years from a given date to find future or past dates.</p></div>
</div>"""),

    ("tools/subnet-calculator", "Subnet Calculator",
     "Calculate subnet masks, CIDR notation, network addresses, broadcast addresses, and host ranges for IPv4 subnets.",
     "Subnet Calculator",
     """<p>Enter an IP address and CIDR prefix or subnet mask to get the full subnet breakdown: network address, broadcast address, usable host range, and more.</p>
<h2>What You Get</h2>
<div class="card-grid">
  <div class="card"><h3>Network Details</h3><p>Network address, broadcast address, subnet mask in dotted decimal and CIDR notation.</p></div>
  <div class="card"><h3>Host Range</h3><p>First and last usable host addresses, total number of hosts, and usable hosts.</p></div>
  <div class="card"><h3>Binary View</h3><p>See the subnet breakdown in binary for learning, troubleshooting, or teaching networking concepts.</p></div>
</div>"""),

    ("tools/cron-next-runs", "Cron Next Runs Calculator",
     "Calculate the next scheduled runs for any cron expression — see upcoming execution times at a glance.",
     "Cron Next Runs Calculator",
     """<p>Enter any cron expression and see the next N scheduled runs. Useful for verifying cron syntax, planning maintenance windows, and understanding when cron jobs will fire.</p>
<h2>Features</h2>
<div class="card-grid">
  <div class="card"><h3>Standard Cron</h3><p>Understand cron syntax: minute, hour, day of month, month, day of week. See examples and common patterns.</p></div>
  <div class="card"><h3>Next Runs List</h3><p>Get the next 10, 20, or 50 upcoming execution times for any valid cron expression.</p></div>
  <div class="card"><h3>Validation</h3><p>Check whether your cron expression is valid before deploying it to production.</p></div>
</div>"""),

    ("tools/sql-query-builder", "SQL Query Builder",
     "Build SQL queries visually — SELECT, WHERE, JOIN, GROUP BY, and ORDER BY without writing raw SQL by hand.",
     "SQL Query Builder",
     """<p>Construct SQL queries through a visual interface. Select tables, choose columns, add filters, define joins, and get clean SQL output ready to run.</p>
<h2>Supported Operations</h2>
<div class="card-grid">
  <div class="card"><h3>SELECT</h3><p>Choose tables and columns. Preview the generated SELECT clause as you build.</p></div>
  <div class="card"><h3>WHERE</h3><p>Add filter conditions with operators: =, !=, &lt;, &gt;, LIKE, IN, BETWEEN, and more.</p></div>
  <div class="card"><h3>JOIN</h3><p>Build INNER, LEFT, RIGHT, and FULL JOINs with ON conditions.</p></div>
  <div class="card"><h3>Aggregation</h3><p>GROUP BY, COUNT, SUM, AVG, MIN, MAX — with HAVING filters.</p></div>
</div>"""),

    ("tools/readability-score", "Readability Score Calculator",
     "Measure the readability of any text — Flesch-Kincaid, Gunning Fog, SMOG, and more readability indices.",
     "Readability Score Calculator",
     """<p>Paste text and get multiple readability scores instantly. Understand how difficult your content is to read — useful for adjusting technical documentation, marketing copy, and educational materials.</p>
<h2>Readability Indices</h2>
<div class="card-grid">
  <div class="card"><h3>Flesch-Kincaid</h3><p>Grade level and reading ease scores based on sentence length and syllable count.</p></div>
  <div class="card"><h3>Gunning Fog</h3><p>Index that accounts for complex words (3+ syllables) alongside sentence length.</p></div>
  <div class="card"><h3>SMOG</h3><p>Simple Measure of Gobbledygook — estimates years of education needed to understand the text.</p></div>
  <div class="card"><h3>Coleman-Liau</h3><p>Formula based on character count rather than syllables — useful for languages with varied syllable structures.</p></div>
</div>"""),

    ("tools/markdown-to-html", "Markdown to HTML Converter",
     "Convert Markdown text to clean HTML — with preview, syntax highlighting, and common extension support.",
     "Markdown to HTML Converter",
     """<p>Paste Markdown and get HTML output instantly. Supports headings, lists, tables, code blocks, links, images, blockquotes, and inline formatting. Preview the rendered result alongside the raw HTML.</p>
<h2>Features</h2>
<div class="card-grid">
  <div class="card"><h3>CommonMark + Extensions</h3><p>Standard Markdown plus tables, footnotes, definition lists, and syntax-highlighted code blocks.</p></div>
  <div class="card"><h3>HTML Preview</h3><p>See the rendered HTML output as you type. Copy raw HTML or use the preview for reference.</p></div>
  <div class="card"><h3>Clean Output</h3><p>Generate semantic, accessible HTML with proper heading hierarchy and structured elements.</p></div>
</div>"""),
]

# === KEY ROUTES: sitemap fixes, SEO improvements ===
key_pages = [
    ("agents-monitoring", "Agent Monitoring",
     "Monitor autonomous AI agents, workloads, and SLA compliance in one unified dashboard.",
     "Agent Monitoring",
     """<p>Get complete visibility into your autonomous AI agents — who's running, what they're doing, and how they're performing against service levels.</p>
<h2>What You Can Monitor</h2>
<div class="card-grid">
  <div class="card"><h3>Agent Status</h3><p>Real-time status of every agent: running, idle, failed, or in human handoff. See the last action and current state.</p></div>
  <div class="card"><h3>Workload Metrics</h3><p>Track throughput, response times, error rates, and escalation rates per agent or across your entire fleet.</p></div>
  <div class="card"><h3>SLA Compliance</h3><p>Monitor whether agents are meeting response-time and resolution-time targets. Get alerts when SLAs are at risk.</p></div>
  <div class="card"><h3>Audit Trail</h3><p>Every agent action logged with timestamp, input, output, and outcome — for compliance, debugging, and continuous improvement.</p></div>
</div>
<h2>For Teams Running AI at Scale</h2>
<p>When you have dozens of agents handling thousands of tasks per day, you need a monitoring layer that gives you confidence the system is working and surfaces problems before they become incidents. Agent Monitoring provides that layer.</p>"""),

    ("new-ai-services", "New AI Services",
     "Discover our latest AI services — from agent frameworks to observability platforms to industry-specific solutions.",
     "New AI Services",
     """<p>Zion Tech Group continuously develops new AI services to address emerging needs. Here are our latest offerings — each built on real customer engagements and designed for production use.</p>
<div class="card-grid">
  <div class="card"><h3>AI Agent Frameworks</h3><p>Custom agent architectures for specific industries and workflows — with built-in evaluation, monitoring, and human handoff.</p></div>
  <div class="card"><h3>AI Observability</h3><p>Production monitoring for AI systems — model quality, cost, latency, and reliability across your entire AI fleet.</p></div>
  <div class="card"><h3>Industry Solutions</h3><p>AI and IT solutions tailored for healthcare, financial services, manufacturing, government, and education.</p></div>
  <div class="card"><h3>Tools & Utilities</h3><p>Free and paid tools to help you work with AI — prompt builders, model comparison, and development utilities.</p></div>
</div>
<h2>Stay Updated</h2>
<p>New services are added regularly. Check back for the latest capabilities, or contact us to discuss a custom solution for your specific needs.</p>"""),

    ("free-tools", "Free Tools & Calculators",
     "Free AI and IT tools — calculators, converters, generators, and utilities for developers, IT pros, and business teams.",
     "Free Tools & Calculators",
     """<p>A collection of free tools for common IT and AI tasks. No signup required — just open and use.</p>
<div class="card-grid">
  <div class="card"><h3>Developer Tools</h3><p>JSON tools, CSV converters, SQL builders, cron calculators, base64 encoders, hash generators, and more.</p></div>
  <div class="card"><h3>AI Tools</h3><p>LLM comparison, prompt builders, token calculators, and AI development utilities.</p></div>
  <div class="card"><h3>IT Operations</h3><p>Subnet calculators, date tools, text diff, readability scores, and network utilities.</p></div>
  <div class="card"><h3>Design & Content</h3><p>Color tools, QR generators, markdown converters, ID generators, and content utilities.</p></div>
</div>
<p>All tools run in your browser. No data leaves your machine.</p>"""),

    ("ai", "Artificial Intelligence Services",
     "AI services from Zion Tech Group — agents, observability, automation, and custom AI solutions for enterprise teams.",
     "AI Services",
     """<p>Zion Tech Group builds and operates AI solutions that go beyond chatbots. Our AI services span autonomous agents, observability platforms, workflow automation, and industry-specific AI implementations.</p>
<div class="card-grid">
  <div class="card"><h3>AI Agents</h3><p>Autonomous agents for customer support, sales outreach, operations, and knowledge management — integrated with your existing tools.</p></div>
  <div class="card"><h3>AI Observability</h3><p>Monitoring and evaluation for AI systems in production — model quality, cost, latency, and reliability.</p></div>
  <div class="card"><h3>AI Automation</h3><p>Workflow automation powered by AI — document processing, data extraction, content generation, and decision support.</p></div>
  <div class="card"><h3>Custom AI Solutions</h3><p>Bespoke AI implementations for specific business problems — from prototype to production to ongoing operations.</p></div>
</div>"""),

    ("free-ai-tools", "Free AI Tools",
     "Free AI-powered tools and utilities — model comparison, prompt building, and development aids for AI practitioners.",
     "Free AI Tools",
     """<p>Free tools to help you work with AI — compare models, build prompts, estimate costs, and develop AI-powered applications.</p>
<div class="card-grid">
  <div class="card"><h3>LLM Comparison</h3><p>Compare language models on price, context window, speed, and capability to make informed model choices.</p></div>
  <div class="card"><h3>Prompt Builder</h3><p>Build, test, and optimize prompts for AI agents with templates, variables, and test evaluation.</p></div>
  <div class="card"><h3>Token & Cost Tools</h3><p>Estimate token usage and cost for your AI workloads. Plan budgets and optimize spend.</p></div>
  <div class="card"><h3>Development Utilities</h3><p>Tools for AI developers — JSON tools, base64, hash generators, and format converters.</p></div>
</div>
<p>All free tools are available without signup. Open and use immediately.</p>"""),

    ("managed-it", "Managed IT Services",
     "Managed IT services from Zion Tech Group — proactive support, infrastructure management, and IT operations for growing teams.",
     "Managed IT Services",
     """<p>Outsource your IT operations to a team that treats your systems with the same care you would. Managed IT from Zion Tech Group covers infrastructure, support, security, and continuous improvement.</p>
<div class="card-grid">
  <div class="card"><h3>Infrastructure Management</h3><p>Server, network, cloud, and endpoint management — with proactive monitoring and maintenance to prevent issues.</p></div>
  <div class="card"><h3>IT Support</h3><p>Help desk and technical support for your team — troubleshooting, onboarding, access management, and day-to-day IT needs.</p></div>
  <div class="card"><h3>Security Operations</h3><p>Patch management, vulnerability monitoring, access control, and security alerting as part of your managed services.</p></div>
  <div class="card"><h3>Strategic IT</h3><p>Regular reviews of your IT posture, technology recommendations, vendor management, and roadmap planning.</p></div>
</div>"""),

    ("ai-services", "AI Services",
     "AI services from Zion Tech Group — comprehensive AI solutions for automation, intelligence, and operational improvement.",
     "AI Services",
     """<p>Our AI services cover the full spectrum from strategy to operations. Whether you need a single agent, an observability platform, or a complete AI transformation, Zion Tech Group has the expertise to deliver.</p>
<div class="card-grid">
  <div class="card"><h3>Strategy & Discovery</h3><p>Assess your AI opportunities, prioritize use cases, and build a roadmap that aligns AI investment with business outcomes.</p></div>
  <div class="card"><h3>Implementation</h3><p>Build and deploy AI solutions — agents, automation, integrations, and custom models — with production readiness built in.</p></div>
  <div class="card"><h3>Operations</h3><p>Ongoing management of AI systems — monitoring, optimization, evaluation, and continuous improvement.</p></div>
  <div class="card"><h3>Training & Enablement</h3><p>Upskill your team on AI tools, prompt engineering, agent design, and AI operations best practices.</p></div>
</div>"""),
]

def main():
    print("=== BATCH 2: ENRICHING MORE PAGES ===\n")
    for path, title, desc, h1, body in tool_pages + key_pages:
        full = PUBLIC / f"{path}/index.html"
        if full.exists():
            old = full.stat().st_size
            enrich(full, title, desc, h1, body)
            print(f"  [{path}] {old} → {full.stat().st_size} bytes")
        else:
            print(f"  [MISSING] {path} — creating new file")
            enrich(full, title, desc, h1, body)

if __name__ == "__main__":
    main()
