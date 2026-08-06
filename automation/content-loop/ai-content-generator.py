import os, sys, json, re, random
from pathlib import Path

REPO = Path('/private/tmp/zion-main')
BLOG_DIR = REPO / 'docs' / 'blog'
TOPICS_PATH = REPO / 'automation' / 'content-loop' / 'topics.json'
LOG = REPO / 'automation' / 'content-loop' / 'generated' / 'ai-content-log.jsonl'

os.environ['HERMES_CONTENT_LOOP_PUSH'] = 'true'

now = lambda: __import__('datetime').datetime.now().isoformat()

def slugify(title):
    s = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
    return s

def write_blog(slug, title, keywords):
    post_dir = BLOG_DIR / slug
    if post_dir.exists():
        return None
    post_dir.mkdir(parents=True, exist_ok=True)
    related = ['AI','ML','automation','cloud','DevOps','cybersecurity','data analytics','SaaS','IoT','digital transformation','enterprise IT','platform engineering','observability','zero trust','cost optimization','MLOps','API integration','process automation','managed services','IT support']
    kw_str = ', '.join(keywords or ['AI','IT services','automation'])
    body = f'''<h2>Executive Summary</h2>
<p>Organizations adopting {title.lower()} can reduce operational costs, accelerate delivery, and improve governance across complex IT environments. This guide breaks down the core capabilities, implementation roadmap, and measurable business outcomes.</p>
<h2>Key Capabilities</h2>
<ul>
<li>Automated discovery and classification of workloads and data assets</li>
<li>Policy-as-code enforcement with continuous compliance validation</li>
<li>AI-assisted remediation for misconfigurations and anomalies</li>
<li>Unified visibility across cloud, on-premises, and edge environments</li>
<li>Cost optimization and rightsizing with usage forecasting</li>
</ul>
<h2>Implementation Roadmap</h2>
<ol>
<li>Assess current-state maturity and prioritize high-value use cases</li>
<li>Build platform foundations with identity, networking, and observability</li>
<li>Deploy automation pipelines with safety controls and rollback policies</li>
<li>Expand to adjacent domains with reusable integration patterns</li>
<li>Measure outcomes and iterate with quarterly reviews</li>
</ol>
<h2>Measurable Business Outcomes</h2>
<p>Enterprises typically see faster incident resolution, fewer outages, lower cloud spend, and higher employee satisfaction after implementing mature {keywords[0] if keywords else 'AI'} practices.</p>
<h2>Why Zion Tech Group</h2>
<p>We deliver production-ready solutions with proven methodologies, global support, and deep expertise across {keywords[0] if keywords else 'AI'} domains.</p>
'''
    related_links = ' | '.join(f'<a href="/services/{slugify(r)}/">{r}</a>' for r in random.sample(related, 6))
    html = f'''<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} | Zion Tech Group</title>
<meta name="description" content="{title} — actionable insights for enterprise teams adopting AI and automation.">
<meta name="keywords" content="{kw_str}">
<link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/">
<meta property="og:title" content="{title}"><meta property="og:description" content="Actionable insights for enterprise AI and automation teams.">
<meta property="og:type" content="article"><meta property="og:url" content="https://ziontechgroup.com/blog/{slug}/">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{title}"><meta name="twitter:description" content="Actionable insights for enterprise AI and automation teams.">
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"BlogPosting","headline":"{title}","description":"{title} — actionable insights.","author":{{"@type":"Organization","name":"Zion Tech Group"}},"publisher":{{"@type":"Organization","name":"Zion Tech Group","url":"https://ziontechgroup.com"}},"mainEntityOfPage":"https://ziontechgroup.com/blog/{slug}/","keywords":"{kw_str}"}}</script>
</head><body>
<header><nav><a href="/">Zion Tech Group</a> · <a href="/services/">Services</a> · <a href="/blog/">Blog</a> · <a href="/contact/">Contact</a></nav></header>
<main><article><h1>{title}</h1><p class="lead">Actionable insights for enterprise teams adopting AI, automation, and modern IT operations.</p><div class="body">{body}</div><div class="related"><h3>Related Services</h3><p>{related_links}</p></div><div class="cta"><a href="/contact/" class="btn-primary">Get Your Custom Proposal →</a><p>📞 <a href="tel:13024640950">13024640950</a> · ✉️ <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p></div></article></main>
<footer><p>© {__import__('datetime').datetime.now().year} Zion Tech Group. All rights reserved.</p></footer>
</body></html>'''
    (post_dir / 'index.html').write_text(html, encoding='utf-8')
    return slug

def main():
    count = int(sys.argv[1]) if len(sys.argv) > 1 else 10
    if not TOPICS_PATH.exists():
        print('topics.json missing')
        return
    topics = json.loads(TOPICS_PATH.read_text(encoding='utf-8')).get('blogs', [])
    random.shuffle(topics)
    created = []
    for topic in topics[:count]:
        slug = slugify(topic['title'])
        if write_blog(slug, topic['title'], topic.get('keywords')):
            created.append({'slug': slug, 'file': str(BLOG_DIR / slug / 'index.html'), 'type': 'blog'})
    with LOG.open('a', encoding='utf-8') as f:
        f.write(json.dumps({'ts': now(), 'event': 'ai-generate', 'ok': True, 'created': created}) + '\n')
    print(json.dumps({'ok': True, 'created': created}, ensure_ascii=False))

if __name__ == '__main__':
    main()
