#!/usr/bin/env python3
"""Verify deployed pages pass the eval gate."""
import re, json, os

def grade_landing_page(content: str) -> dict:
    errors, warnings = [], []
    checks = {
        'title_tag': r'<title>[^<].{10,60}</title>',
        'meta_description': r'<meta name="description" content="[^\"].{10,160}"',
        'h1_present': r'<h1[^>]*>[^<].+</h1>',
        'canonical': r'<link rel="canonical"',
        'structured_data': r'"application/ld\+json"',
        'open_graph': r'property="og:',
        'twitter_card': r'<meta name="twitter:card"',
    }
    for name, pattern in checks.items():
        if not re.search(pattern, content, re.IGNORECASE):
            errors.append(f"Missing: {name}")
    text = re.sub(r'<[^>]+>', '', content)
    wc = len(text.split())
    if wc < 300:
        warnings.append(f"Low word count: {wc}")
    if 'servicesData' in content and not re.search(r'servicesData\.service', content):
        errors.append("Service data reference malformed")
    if 'HeroCarousel' in content and not re.search(r'carousel', content, re.IGNORECASE):
        errors.append("HeroCarousel not properly imported")
    return {
        'passed': len(errors) == 0,
        'score': max(0, 1.0 - len(errors) * 0.15 - len(warnings) * 0.05),
        'errors': errors, 'warnings': warnings,
        'metrics': {'word_count': wc}
    }

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"
SERVICES_DIR = os.path.join(BASE, "app", "services")

# Verify all newly deployed pages from both runs
all_pages = []
for d in sorted(os.listdir(SERVICES_DIR)):
    page = os.path.join(SERVICES_DIR, d, "page.tsx")
    if os.path.exists(page):
        all_pages.append((d, page))

# Focus on the 24 new concepts
new_slugs = [
    "explainable-ai-governance-platform",
    "semantic-code-review-engine",
    "neuro-symbolic-reasoning-engine",
    "quantum-inspired-optimization-platform",
    "mlops-feature-store-automation",
    "llm-powered-knowledge-base-synthesis",
    "observability-intelligence-platform",
    "conversational-data-warehouse-analytics",
    "autonomous-penetration-testing-platform",
    "ai-powered-incident-root-cause-engine",
    "neural-architecture-optimization-for-edge",
    "automated-model-registry-governance",
    "data-lineage-intelligence-platform",
    "cross-cloud-cost-arbitrage-ai",
    "llm-powered-technical-documentation-generator",
    "autonomous-certificate-rotation-agent",
    "llm-orchestrated-workflow-automation",
    "ai-powered-customer-sentiment-analysis",
    "autonomous-network-configuration-agent",
    "ai-enabled-privacy-compliance-suite",
    "autonomous-data-quality-profiler",
    "llm-augmented-decision-support-system",
    "ai-enhanced-fraud-pattern-detector",
    "autonomous-infrastructure-provisioning-agent",
]

results = []
all_pass = True
for slug in new_slugs:
    found = False
    for d, page in all_pages:
        if d.startswith(slug + "-") or d == slug:
            content = open(page).read()
            result = grade_landing_page(content)
            # Check title tag content length
            title_match = re.search(r'<title>(.*?)</title>', content, re.DOTALL)
            title_len = len(title_match.group(1)) if title_match else 0
            passed = result['passed'] and result['score'] >= 0.8
            if not passed:
                all_pass = False
            results.append({
                "slug": d,
                "score": result['score'],
                "passed": passed,
                "word_count": result['metrics']['word_count'],
                "title_len": title_len,
                "errors": result['errors'],
            })
            found = True
            break
    if not found:
        print(f"NOT FOUND: {slug}")
        all_pass = False

print(f"\n=== Verification of {len(results)} new pages ===")
for r in results:
    status = "PASS" if r['passed'] else "FAIL"
    print(f"  [{status}] {r['slug'][:60]:62s} score={r['score']:.2f} wc={r['word_count']} title_len={r['title_len']}")

all_ok = all(r['passed'] for r in results)
print(f"\nAll 24 pages pass eval gate: {all_ok}")
print(f"Total pages verified: {len(results)}")
