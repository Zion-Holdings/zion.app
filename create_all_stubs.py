#!/usr/bin/env python3
"""Create static HTML stubs for all 404 URLs from crawl_report.json."""
import json, os, re

PUBLIC = "public"

with open("crawl_report.json") as f:
    report = json.load(f)

broken = [p for p in report["all_pages"] if p["status"] == 404]

def slug_to_title(slug):
    slug = re.sub(r'\.html$', '', slug)
    parts = slug.split('-')
    title = ' '.join(p.capitalize() for p in parts)
    title = title.replace(' For ', ' for ').replace(' And ', ' and ').replace(' With ', ' with ')
    title = title.replace(' Ms ', ' MS ').replace(' Sdr ', ' SDR ').replace(' Bdr ', ' BDR ')
    title = title.replace(' Ai ', ' AI ').replace(' Ai-', 'AI ')
    title = title.replace(' 2026 ', ' (2026) ').replace('( 2026)', '(2026)')
    return title.strip()

def slug_to_description(slug):
    title = slug_to_title(slug)
    return f"{title} — comprehensive guide from Zion Tech Group"

def generate_content(slug):
    slug_lower = slug.lower()
    if 'implementation' in slug_lower and 'playbook' in slug_lower:
        return """<p><b>Implementation Playbook:</b> Practical step-by-step guide covering assessment, architecture design, implementation, testing, and deployment phases with real-world examples.</p>
<ul><li>Phase 1: Assessment and planning</li><li>Phase 2: Architecture design</li><li>Phase 3: Implementation and testing</li><li>Phase 4: Deployment and monitoring</li></ul>"""
    elif 'executive' in slug_lower and 'guide' in slug_lower:
        return """<p><b>Executive Guide:</b> Strategic overview for leadership covering business case, ROI analysis, key decision factors, vendor evaluation criteria, and implementation roadmap.</p>
<ul><li>Business case and ROI analysis</li><li>Key decision factors</li><li>Vendor evaluation criteria</li><li>Implementation roadmap</li></ul>"""
    elif 'automation' in slug_lower and 'roadmap' in slug_lower:
        return """<p><b>Automation Roadmap:</b> Step-by-step guide to automating processes, from current state assessment through technology selection to phased implementation.</p>
<ul><li>Current state assessment</li><li>Automation opportunities</li><li>Technology selection</li><li>Implementation phases</li></ul>"""
    elif 'architecture' in slug_lower and 'overview' in slug_lower:
        return """<p><b>Architecture Overview:</b> System design and component breakdown covering scalability, integration patterns, and technology stack recommendations.</p>
<ul><li>System architecture</li><li>Component design</li><li>Integration patterns</li><li>Scalability considerations</li></ul>"""
    elif 'case' in slug_lower and 'study' in slug_lower:
        return """<p><b>Case Study:</b> Real-world results and lessons learned from implementing this solution in a production environment, including measurable outcomes.</p>
<ul><li>Challenge description</li><li>Solution approach</li><li>Results achieved</li><li>Key takeaways</li></ul>"""
    elif 'common' in slug_lower and 'mistakes' in slug_lower:
        return """<p><b>Common Mistakes:</b> Top pitfalls to avoid when implementing, including insufficient planning, poor vendor selection, inadequate testing, and lack of monitoring.</p>
<ul><li>Mistake 1: Insufficient planning</li><li>Mistake 2: Poor vendor selection</li><li>Mistake 3: Inadequate testing</li><li>Mistake 4: Lack of monitoring</li></ul>"""
    elif 'roi' in slug_lower or 'cost-model' in slug_lower:
        return """<p><b>ROI and Cost Model:</b> Detailed financial analysis covering cost breakdown, expected benefits, payback period calculation, and total cost of ownership over 3-5 years.</p>
<ul><li>Cost breakdown</li><li>Expected benefits</li><li>Payback period calculation</li><li>Total cost of ownership</li></ul>"""
    elif 'checklist' in slug_lower and 'it-leaders' in slug_lower:
        return """<p><b>Checklist for IT Leaders:</b> Comprehensive preparation guide covering pre-implementation, during implementation, post-implementation review, and ongoing maintenance.</p>
<ul><li>Pre-implementation checklist</li><li>During implementation</li><li>Post-implementation review</li><li>Ongoing maintenance</li></ul>"""
    elif 'deployment' in slug_lower and 'patterns' in slug_lower:
        return """<p><b>Deployment Patterns:</b> Best practices for deployment architecture including blue-green deployment, canary releases, and rollback strategies.</p>
<ul><li>Deployment architecture</li><li>Blue-green deployment</li><li>Canary releases</li><li>Rollback strategies</li></ul>"""
    elif 'evaluation' in slug_lower and 'framework' in slug_lower:
        return """<p><b>Evaluation Framework:</b> How to assess and compare solutions using structured criteria, scoring methodology, vendor comparison, and decision matrix.</p>
<ul><li>Evaluation criteria</li><li>Scoring methodology</li><li>Vendor comparison</li><li>Decision matrix</li></ul>"""
    elif 'operations' in slug_lower and 'handbook' in slug_lower:
        return """<p><b>Operations Handbook:</b> Day-to-day management guide covering daily operations, incident response, maintenance procedures, and performance monitoring.</p>
<ul><li>Daily operations</li><li>Incident response</li><li>Maintenance procedures</li><li>Performance monitoring</li></ul>"""
    elif 'policy' in slug_lower and 'compliance' in slug_lower:
        return """<p><b>Policy and Compliance:</b> Regulatory requirements, internal policies, compliance monitoring, and audit readiness considerations.</p>
<ul><li>Regulatory requirements</li><li>Internal policies</li><li>Compliance monitoring</li><li>Audit readiness</li></ul>"""
    elif 'security' in slug_lower and 'governance' in slug_lower:
        return """<p><b>Security and Governance:</b> Security architecture, access controls, governance policies, and audit trail implementation for enterprise environments.</p>
<ul><li>Security architecture</li><li>Access controls</li><li>Governance policies</li><li>Audit trails</li></ul>"""
    elif 'starter' in slug_lower and 'template' in slug_lower:
        return """<p><b>Starter Template:</b> Quick-start guide with template structure, configuration instructions, customization tips, and recommended next steps.</p>
<ul><li>Template structure</li><li>Configuration guide</li><li>Customization tips</li><li>Next steps</li></ul>"""
    elif 'vendor' in slug_lower and 'evaluation' in slug_lower:
        return """<p><b>Vendor Evaluation:</b> How to choose the right solution through requirements gathering, vendor shortlisting, evaluation criteria, and structured selection process.</p>
<ul><li>Requirements gathering</li><li>Vendor shortlisting</li><li>Evaluation criteria</li><li>Selection process</li></ul>"""
    elif '2026' in slug and not any(x in slug for x in ['playbook','guide','roadmap','architecture','case-study','mistakes','roi','checklist','deployment','evaluation','operations','policy','security','starter','vendor']):
        return f"""<p><b>{slug_to_title(slug)} (2026 Edition):</b> Comprehensive guide covering the latest developments, technologies, and best practices for this year.</p>
<ul><li>Introduction and overview</li><li>Key components and architecture</li><li>Implementation considerations</li><li>Future trends</li></ul>"""
    else:
        return f"""<p><b>{slug_to_title(slug)}:</b> Comprehensive guide covering key concepts, implementation strategies, and practical best practices.</p>
<ul><li>Understanding the fundamentals</li><li>Practical implementation approaches</li><li>Common pitfalls and how to avoid them</li><li>Future trends and developments</li></ul>"""

def write_stub(path, title, description, content_html):
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}">
  <meta name="robots" content="noindex">
  <link rel="canonical" href="https://ziontechgroup.com/{path}/">
  <link rel="icon" href="/favicon.ico">
  <style>
    body {{ margin: 0; font-family: system-ui, -apple-system, sans-serif; background: #0b1220; color: #e6f0ff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; }}
    .container {{ max-width: 600px; text-align: center; }}
    h1 {{ font-size: 2rem; margin-bottom: 1rem; }}
    p {{ color: #94a3b8; margin-bottom: 1.5rem; line-height: 1.6; }}
    a {{ color: #60a5fa; text-decoration: none; }}
    ul {{ text-align: left; color: #cbd5e1; line-height: 1.8; margin: 1rem auto; max-width: 480px; }}
  </style>
</head>
<body>
  <div class="container">
    <h1>{title}</h1>
    {content_html}
    <p><a href="/">← Back to home</a></p>
  </div>
</body>
</html>"""
    return html

processed = 0
for entry in broken:
    url = entry["url"]
    slug = url.replace("https://ziontechgroup.com/", "").rstrip("/")
    
    if "/" not in slug:
        filepath = os.path.join(PUBLIC, slug, "index.html")
        title = slug_to_title(slug)
        description = slug_to_description(slug)
        content_html = f"<p>{title} — expert technology services from Zion Tech Group.</p><ul><li>Expert implementation and deployment</li><li>24/7 monitoring and support</li><li>Scalable architecture design</li><li>Security and compliance integration</li></ul>"
    elif slug.startswith("blog/"):
        blog_slug = slug[5:]
        filepath = os.path.join(PUBLIC, "blog", blog_slug, "index.html")
        title = slug_to_title(blog_slug)
        description = slug_to_description(blog_slug)
        content_html = generate_content(blog_slug)
    else:
        filepath = os.path.join(PUBLIC, slug, "index.html")
        title = slug_to_title(slug)
        description = slug_to_description(slug)
        content_html = generate_content(slug)
    
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    html = write_stub(slug, title, description, content_html)
    with open(filepath, "w") as f:
        f.write(html)
    processed += 1

print(f"✅ Created {processed} stubs")
print(f"   Services: {sum(1 for e in broken if '/' not in e['url'].replace('https://ziontechgroup.com/','').rstrip('/'))}")
print(f"   Blog posts: {sum(1 for e in broken if e['url'].replace('https://ziontechgroup.com/','').startswith('blog/'))}")
