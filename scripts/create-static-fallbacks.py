#!/usr/bin/env python3
"""Generate static HTML fallback pages for missing routes.
These pages include navigation header and footer for site usability."""
import os
import json

PUBLIC_DIR = "/Users/klebergarciaalcatrao/zion-support.github.io/public"
APP_DIR = "/Users/klebergarciaalcatrao/zion-support.github.io/app"

# Navigation items matching the Navigation component
NAV_ITEMS = [
    ("Home", "/"),
    ("Services", "/services/"),
    ("Solutions", "/solutions/"),
    ("About", "/about/"),
    ("⚡ AI Agents", "/agents-monitoring/"),
    ("Blog", "/blog/"),
    ("Pricing", "/pricing/"),
    ("Contact", "/contact/"),
]

FOOTER_LINKS = {
    "Services": ["/ai-services/", "/services/", "/tools/", "/pricing/", "/case-studies/"],
    "Company": ["/about/", "/contact/", "/careers/", "/partners/"],
    "Resources": ["/blog/", "/docs/", "/tools/", "/faq/"],
    "Legal": ["/privacy/", "/terms/", "/cookies/"],
}

HTML_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<meta name="description" content="{description}" />
<link rel="canonical" href="https://ziontechgroup.com{canonical}" />
<link rel="stylesheet" href="/styles.css" />
<style>
:root {{ color-scheme: dark; }}
*{{margin:0;padding:0;box-sizing:border-box}}
body{{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;background:#020617;color:#e2e8f0;min-height:100vh}}
.container{{max-width:1200px;margin:0 auto;padding:0 20px}}
header{{background:#0f172a;border-bottom:1px solid #1e2937;position:sticky;top:0;z-index:50;background-color:rgba(15,23,41,0.8)}}
header .container{{display:flex;align-items:center;justify-content:space-between;height:64px}}
header .logo{{color:#a78bfa;font-weight:700;text-decoration:none;font-size:20px}}
header nav{{display:flex;gap:24px}}
header nav a{{color:#cbd5e1;text-decoration:none;font-size:14px;transition:color .2s}}
header nav a:hover{{color:#a78bfa}}
main{{padding:48px 0}}
.hero{{text-align:center;padding:60px 0;border-bottom:1px solid #1e2937;margin-bottom:48px}}
.hero h1{{font-size:48px;font-weight:bold;background:linear-gradient(135deg,#a78bfa,#ec4899);background-clip:text;-webkit-background-clip:text;color:transparent;margin-bottom:16px}}
.hero p{{font-size:20px;color:#94a3b8;max-width:700px;margin:0 auto;line-height:1.6}}
.content{{max-width:800px;margin:0 auto;padding:48px 0}}
.content h2{{font-size:28px;font-weight:bold;color:#f1f5f9;margin-bottom:16px}}
.content p{{color:#94a3b8;line-height:1.7;margin-bottom:16px;font-size:16px}}
.content ul{{padding-left:24px;margin-bottom:16px}}
.content li{{margin-bottom:8px;color:#cbd5e1}}
.content a{{color:#a78bfa;text-decoration:none}}
.content a:hover{{text-decoration:underline}}
footer{{background:#0f172a;border-top:1px solid #1e2937;padding:48px 0;margin-top:60px}}
footer .container{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px}}
footer h4{{color:#f1f5f9;font-size:14px;font-weight:600;margin-bottom:16px}}
footer ul{{list-style:none}}
footer li{{margin-bottom:8px}}
footer a{{color:#94a3b8;text-decoration:none;transition:color .2s}}
footer a:hover{{color:#a78bfa}}
footer .bottom{{text-align:center;padding-top:32px;border-top:1px solid #1e2937;margin-top:32px;color:#64748b;font-size:13px}}
</style>
</head>
<body>
<header>
  <div class="container">
    <a href="/" class="logo">Zion Tech Group</a>
    <nav>
{nav_links}
    </nav>
  </div>
</header>
<main>
{content}
</main>
<footer>
  <div class="container">
    <div class="grid">
{footer_sections}
    </div>
    <div class="bottom">
      <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
      <p>Enterprise AI services, IT solutions, and Micro SAAS platforms.</p>
    </div>
  </div>
</footer>
</body>
</html>
"""

def nav_html():
    links = []
    for name, href in NAV_ITEMS:
        links.append(f'      <a href="{href}">{name}</a>')
    return "\n".join(links)

def footer_html():
    sections = []
    for title, links in FOOTER_LINKS.items():
        items = "\n".join(f'        <li><a href="{l}">{l.strip("/").title()}</a></li>' for l in links)
        sections.append(f'      <div>\n        <h4>{title}</h4>\n        <ul>\n{items}\n        </ul>\n      </div>')
    return "\n".join(sections)

# Routes that need static HTML fallbacks
ROUTES = {
    "/partners/": {
        "title": "Partners | Zion Tech Group",
        "description": "Technology alliances, reseller programs, and referral partnerships with Zion Tech Group.",
        "h1": "Partners",
        "content": """<div class="hero">
  <div class="container">
    <h1>Partners</h1>
    <p>Build with Zion Tech Group through technology alliances, reseller programs, and referral partnerships.</p>
  </div>
</div>
<div class="content">
  <h2>Technology Alliances</h2>
  <p>We partner with leading technology vendors to deliver integrated AI and IT solutions with measurable outcomes.</p>
  <ul>
    <li>Cloud platform partnerships (AWS, Azure, Google Cloud)</li>
    <li>AI framework integrations (TensorFlow, PyTorch, OpenAI)</li>
    <li>Cybersecurity technology alliances</li>
    <li>Enterprise software integration partners</li>
  </ul>
  <h2>Partner Programs</h2>
  <p>Join our partner ecosystem to co-sell, resell, or integrate with Zion Tech Group's AI and IT services.</p>
  <ul>
    <li>Reseller partnerships</li>
    <li>Referral programs</li>
    <li>Technology integration partners</li>
    <li>Channel partner program</li>
  </ul>
  <h2>Become a Partner</h2>
  <p>Contact us to learn about partnership opportunities. <a href="/contact/">Get in touch</a>.</p>
</div>"""
    },
    "/configurator/": {
        "title": "Service Configurator | Zion Tech Group",
        "description": "AI-powered service configurator to build custom AI and IT solution proposals.",
        "h1": "Service Configurator",
        "content": """<div class="hero">
  <div class="container">
    <h1>Service Configurator</h1>
    <p>Build custom AI and IT solution proposals tailored to your business needs.</p>
  </div>
</div>
<div class="content">
  <h2>Custom Solution Builder</h2>
  <p>Use our interactive configurator to build a custom proposal for AI services, IT automation, cloud infrastructure, and more.</p>
  <ul>
    <li>Step 1: Define your budget and requirements</li>
    <li>Step 2: Select your industry and use case</li>
    <li>Step 3: Choose from recommended AI and IT services</li>
    <li>Step 4: Review and generate your custom proposal</li>
  </ul>
  <p>The configurator is fully interactive — <a href="/configurator/">start building your proposal</a> now.</p>
</div>"""
    },
    "/ai-services/": {
        "title": "AI Services | Zion Tech Group",
        "description": "Enterprise AI services including machine learning, NLP, computer vision, AI automation, and custom AI development.",
        "h1": "AI Services",
        "content": """<div class="hero">
  <div class="container">
    <h1>AI Services</h1>
    <p>Enterprise AI solutions including machine learning, NLP, computer vision, and AI automation.</p>
  </div>
</div>
<div class="content">
  <h2>Our AI Services</h2>
  <p>Zion Tech Group offers a comprehensive suite of AI services to transform your business:</p>
  <ul>
    <li><strong>AI Strategy & Consulting</strong> — Assess AI readiness and build a roadmap</li>
    <li><strong>Machine Learning Development</strong> — Custom ML models for your use cases</li>
    <li><strong>Natural Language Processing</strong> — Chatbots, language understanding, and text analysis</li>
    <li><strong>Computer Vision</strong> — Image recognition, video analysis, and visual AI</li>
    <li><strong>AI Automation</strong> — Intelligent process automation and AI agents</li>
    <li><strong>Predictive Analytics</strong> — Forecasting and business intelligence</li>
  </ul>
  <p>Explore our <a href="/services/">full service catalog</a> or <a href="/contact/">contact us</a> for a free consultation.</p>
</div>"""
    },
    "/tools/": {
        "title": "AI Tools & Resources | Zion Tech Group",
        "description": "Free AI tools, generators, calculators, and developer resources from Zion Tech Group.",
        "h1": "Tools & Resources",
        "content": """<div class="hero">
  <div class="container">
    <h1>Tools & Resources</h1>
    <p>Free AI tools, calculators, and developer resources to accelerate your projects.</p>
  </div>
</div>
<div class="content">
  <h2>Free AI Tools</h2>
  <ul>
    <li><a href="/tools/json-to-typescript-converter/">JSON to TypeScript Converter</a></li>
    <li><a href="/tools/regex-generator/">Regex Generator</a></li>
    <li><a href="/tools/cron-expression-parser/">Cron Expression Parser</a></li>
    <li><a href="/tools/gradient-generator/">Gradient Generator</a></li>
    <li><a href="/tools/url-encoder-decoder/">URL Encoder/Decoder</a></li>
    <li><a href="/tools/color-contrast-checker/">Color Contrast Checker</a></li>
    <li><a href="/tools/qr-code-generator/">QR Code Generator</a></li>
    <li><a href="/tools/uuid-generator/">UUID Generator</a></li>
    <li><a href="/tools/word-counter/">Word Counter</a></li>
    <li><a href="/tools/jwt-decoder/">JWT Decoder</a></li>
    <li><a href="/tools/port-scanner/">Port Scanner</a></li>
    <li><a href="/tools/ssl-checker/">SSL Checker</a></li>
  </ul>
  <h2>Calculators</h2>
  <ul>
    <li><a href="/tools/roi-calculator/">AI ROI Calculator</a></li>
    <li><a href="/pricing-calculator/">Pricing Calculator</a></li>
    <li><a href="/ai-roi-calculator/">AI Readiness Audit</a></li>
  </ul>
</div>"""
    },
    "/free-ai-tools/": {
        "title": "Free AI Tools | Zion Tech Group",
        "description": "Free AI-powered developer tools and generators from Zion Tech Group.",
        "h1": "Free AI Tools",
        "content": """<div class="hero">
  <div class="container">
    <h1>Free AI Tools</h1>
    <p>Free AI-powered tools for developers, marketers, and businesses.</p>
  </div>
</div>
<div class="content">
  <h2>Developer Tools</h2>
  <ul>
    <li><a href="/tools/json-to-typescript-converter/">JSON to TypeScript Converter</a></li>
    <li><a href="/tools/regex-generator/">Regex Generator</a></li>
    <li><a href="/tools/cron-expression-parser/">Cron Expression Parser</a></li>
  </ul>
  <h2>AI Generators</h2>
  <ul>
    <li><a href="/tools/gradient-generator/">Gradient Generator</a></li>
    <li><a href="/tools/qr-code-generator/">QR Code Generator</a></li>
  </ul>
  <h2>Utilities</h2>
  <ul>
    <li><a href="/tools/uuid-generator/">UUID Generator</a></li>
    <li><a href="/tools/word-counter/">Word Counter</a></li>
    <li><a href="/tools/jwt-decoder/">JWT Decoder</a></li>
    <li><a href="/tools/url-encoder-decoder/">URL Encoder/Decoder</a></li>
  </ul>
</div>"""
    },
    "/agents-monitoring/": {
        "title": "AI Agents Monitoring | Zion Tech Group",
        "description": "Real-time monitoring and analytics for AI agents and autonomous systems.",
        "h1": "AI Agents Monitoring",
        "content": """<div class="hero">
  <div class="container">
    <h1>AI Agents Monitoring</h1>
    <p>Real-time monitoring and analytics for AI agents and autonomous systems.</p>
  </div>
</div>
<div class="content">
  <h2>Agent Observability</h2>
  <p>Monitor, debug, and optimize your AI agents with our comprehensive observability platform.</p>
  <ul>
    <li>Real-time agent performance metrics</li>
    <li>Execution trace and lineage tracking</li>
    <li>Error detection and alerting</li>
    <li>Cost and resource utilization analytics</li>
    <li>Agent behavior pattern analysis</li>
  </ul>
  <p>Visit our <a href="/dashboard/">AI Agent Dashboard</a> to see live agent metrics.</p>
</div>"""
    },
    "/security-automation/": {
        "title": "AI Security Automation | Zion Tech Group",
        "description": "AI-powered security automation for threat detection, incident response, and cybersecurity operations.",
        "h1": "AI Security Automation",
        "content": """<div class="hero">
  <div class="container">
    <h1>AI Security Automation</h1>
    <p>AI-powered cybersecurity automation for threat detection and incident response.</p>
  </div>
</div>
<div class="content">
  <h2>Cybersecurity Automation</h2>
  <p>Leverage AI to automate security operations, detect threats faster, and respond to incidents with precision.</p>
  <ul>
    <li>AI-powered threat detection and hunting</li>
    <li>Automated incident response workflows</li>
    <li>Security orchestration and SOAR integration</li>
    <li>Behavioral anomaly detection</li>
    <li>Zero-trust security automation</li>
  </ul>
  <p>Explore our <a href="/services/">security services</a> or <a href="/contact/">contact us</a> for a security assessment.</p>
</div>"""
    },
    "/industries/": {
        "title": "Industry Solutions | Zion Tech Group",
        "description": "AI and IT solutions tailored for healthcare, finance, manufacturing, logistics, energy, education, and more.",
        "h1": "Industry Solutions",
        "content": """<div class="hero">
  <div class="container">
    <h1>Industry Solutions</h1>
    <p>AI and IT solutions tailored to your industry's unique challenges and opportunities.</p>
  </div>
</div>
<div class="content">
  <h2>Industries We Serve</h2>
  <ul>
    <li><a href="/industries/healthcare/">Healthcare & Biotech</a> — AI for diagnostics, patient care, and drug discovery</li>
    <li><a href="/industries/finance/">Finance & Banking</a> — Fraud detection, risk modeling, and algorithmic trading</li>
    <li><a href="/industries/manufacturing/">Manufacturing</a> — Predictive maintenance, quality control, and supply chain optimization</li>
    <li><a href="/industries/logistics/">Logistics & Transportation</a> — Route optimization, fleet management, and demand forecasting</li>
    <li><a href="/industries/energy/">Energy & Utilities</a> — Grid optimization, predictive maintenance, and smart metering</li>
    <li><a href="/industries/education/">Education & EdTech</a> — Personalized learning, AI tutoring, and administrative automation</li>
    <li><a href="/industries/retail/">Retail & E-commerce</a> — Demand forecasting, personalization, and inventory optimization</li>
    <li><a href="/industries/legal/">Legal & Professional Services</a> — Document review, contract analysis, and compliance automation</li>
    <li><a href="/industries/government/">Government & Public Sector</a> — Citizen services, policy analysis, and operational efficiency</li>
  </ul>
</div>"""
    },
    "/tools/service-comparison/": {
        "title": "AI Service Comparison | Zion Tech Group",
        "description": "Compare AI services and tools side by side to find the best fit for your needs.",
        "h1": "AI Service Comparison",
        "content": """<div class="hero">
  <div class="container">
    <h1>AI Service Comparison</h1>
    <p>Compare AI services and tools side by side.</p>
  </div>
</div>
<div class="content">
  <h2>Compare Services</h2>
  <p>Use our comparison tool to evaluate AI services and make informed decisions.</p>
  <p><a href="/services/">Browse all services</a></p>
</div>"""
    },
    "/automation/index.html": {
        "title": "Automation Services | Zion Tech Group",
        "description": "AI-powered automation services for business processes, IT operations, and workflow optimization.",
        "h1": "Automation Services",
        "content": """<div class="hero">
  <div class="container">
    <h1>Automation Services</h1>
    <p>AI-powered automation to streamline operations and reduce manual work.</p>
  </div>
</div>
<div class="content">
  <h2>Our Automation Services</h2>
  <ul>
    <li>Robotic Process Automation (RPA)</li>
    <li>AI-powered workflow automation</li>
    <li>Business process automation</li>
    <li>IT operations automation</li>
    <li>Marketing automation</li>
  </ul>
</div>"""
    },
    "/services": {
        "title": "Services | Zion Tech Group",
        "description": "Managed IT, AI automation, cybersecurity, cloud, and consulting services.",
        "h1": "Services",
        "canonical": "/services/",
        "content": """<div class="hero">
  <div class="container">
    <h1>Services</h1>
    <p>Managed IT, AI automation, cybersecurity, cloud, and consulting services.</p>
  </div>
</div>
<div class="content">
  <h2>Our Services</h2>
  <ul>
    <li><a href="/ai-services/">AI Services</a></li>
    <li><a href="/services/">IT Services</a></li>
    <li><a href="/blockchain-solutions/">Blockchain Solutions</a></li>
    <li><a href="/tools/">Tools & Resources</a></li>
  </ul>
</div>"""
    },
    "/contact": {
        "title": "Contact | Zion Tech Group",
        "description": "Contact Zion Tech Group for AI consulting, IT services, and custom solutions.",
        "h1": "Contact",
        "canonical": "/contact/",
        "content": """<div class="hero">
  <div class="container">
    <h1>Contact</h1>
    <p>Get in touch with our team.</p>
  </div>
</div>
<div class="content">
  <h2>Contact Information</h2>
  <p>Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
  <p>Based in São Paulo, Brazil — serving clients globally.</p>
</div>"""
    },
    "/solutions": {
        "title": "Solutions | Zion Tech Group",
        "description": "AI and IT solutions for enterprise challenges.",
        "h1": "Solutions",
        "canonical": "/solutions/",
        "content": """<div class="hero">
  <div class="container">
    <h1>Solutions</h1>
    <p>AI and IT solutions for enterprise challenges.</p>
  </div>
</div>
<div class="content">
  <h2>Our Solutions</h2>
  <ul>
    <li>Enterprise AI solutions</li>
    <li>Cloud migration</li>
    <li>Cybersecurity</li>
    <li>Data analytics</li>
  </ul>
</div>"""
    },
}

created = []
for path, info in ROUTES.items():
    title = info["title"]
    description = info["description"]
    canonical = info.get("canonical", path.rstrip("/") + "/")
    content = info["content"]
    
    html = HTML_TEMPLATE.format(
        title=title,
        description=description,
        canonical=canonical,
        nav_links=nav_html(),
        footer_sections=footer_html(),
        content=content,
    )
    
    if path.endswith("/"):
        # Directory path -> create index.html
        full_path = os.path.join(PUBLIC_DIR, path.strip("/"), "index.html")
    else:
        # File path like /automation/index.html or /services (redirect)
        if path.endswith(".html"):
            full_path = os.path.join(PUBLIC_DIR, path.lstrip("/"))
        else:
            full_path = os.path.join(PUBLIC_DIR, path.strip("/"), "index.html")
    
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w") as f:
        f.write(html)
    created.append(full_path)
    print(f"Created: {full_path}")

# Handle redirects for /services -> /services/ and /contact -> /contact/ and /solutions -> /solutions/
# These paths are in the "broken links" list as missing trailing slashes
# We need to create HTML redirect files or update _redirects

print(f"\nTotal pages created: {len(created)}")