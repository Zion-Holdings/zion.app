#!/usr/bin/env python3
"""
Static content generator for GitHub Pages.
Bypasses Next.js export by writing HTML directly to public/ via Contents API.
"""
import json, os, urllib.request, base64, time

TOKEN = open(os.path.expanduser('~/.gh_token')).read().strip()
REPO = 'zion-support.github.io'
OWNER = 'Zion-support'
BRANCH = 'gh-pages'
BASE_URL = f'https://api.github.com/repos/{OWNER}/{REPO}/contents'

HEADERS = {
    'Authorization': f'token {TOKEN}',
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
}

TOPICS_FILE = 'content-loop/topics.json'
QUEUE_FILE = 'content/queue.md'

def gh_api(path, data=None, method='GET'):
    url = f'{BASE_URL}/{path}' if not path.startswith('http') else path
    req = urllib.request.Request(url, headers=HEADERS, method=method)
    if data:
        req.data = json.dumps(data).encode()
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        body = e.read().decode()[:500]
        return {'error': e.code, 'body': body}
    except Exception as e:
        return {'error': str(e)}

def get_file_sha(path):
    result = gh_api(path + '?ref=' + BRANCH)
    return result.get('sha') if 'sha' in result else None

def create_or_update_file(path, content, message):
    sha = get_file_sha(path)
    payload = {
        'message': message,
        'content': base64.b64encode(content.encode()).decode(),
        'branch': BRANCH
    }
    if sha:
        payload['sha'] = sha
    result = gh_api(path, data=payload, method='PUT')
    if 'content' in result:
        print(f'  OK {path} -> {result["content"]["sha"][:8]}')
        return True
    else:
        print(f'  FAIL {path}: {result.get("error")} {result.get("body","")[:120]}')
        return False

def load_topics():
    try:
        with open(TOPICS_FILE, 'r') as f:
            return json.load(f)
    except:
        return [
            {'title': 'AI IT Operations', 'slug': 'ai-it-operations-automation-2026'},
            {'title': 'Cloud Cost Optimization', 'slug': 'cloud-cost-optimization-checklist-2026'},
            {'title': 'Cybersecurity for MSPs', 'slug': 'cybersecurity-platform-msp-2026'},
            {'title': 'Managed IT Services', 'slug': 'managed-it-services-small-business-2026'},
            {'title': 'Data Analytics Platform', 'slug': 'data-analytics-platform-modern-enterprise-2026'},
            {'title': 'Automation Orchestration', 'slug': 'automation-orchestration-enterprise-2026'}
        ]

def load_queue():
    try:
        with open(QUEUE_FILE, 'r') as f:
            txt = f.read()
            m = __import__('re').search(r'Last cycle:\s*(\d+)', txt)
            return int(m.group(1)) if m else 0
    except:
        return 0

def save_queue(cycle):
    os.makedirs(os.path.dirname(QUEUE_FILE), exist_ok=True)
    topics = load_topics()
    with open(QUEUE_FILE, 'w') as f:
        f.write(f'# Content Queue\n\nLast cycle: {cycle}\nNext slug prefix: {cycle + 1}\nSeeds ready: {len(topics)}\n')

def blog_html(topic, n):
    slug = f'{topic["slug"]}-{n}'
    title = topic['title']
    desc = f'Practical guide to {title.lower()}: frameworks, metrics, and rollout playbook.'
    body = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{desc}"/>
  <link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/"/>
  <meta property="og:title" content="{title}"/>
  <meta property="og:description" content="{desc}"/>
  <meta property="og:url" content="https://ziontechgroup.com/blog/{slug}/"/>
  <meta property="og:type" content="article"/>
</head>
<body>
  <main class="min-h-screen bg-slate-950 py-20">
    <div class="container-page">
      <h1 class="text-4xl font-bold text-white mb-4">{title}</h1>
      <p class="text-slate-400 mb-6">{desc}</p>
      <article class="space-y-6 text-slate-300">
        <p>{title} is moving from experiment to operating layer. Most programs fail because they optimize for demos instead of outcomes.</p>
        <h2 class="text-2xl font-semibold text-white">What works</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Start with low-risk, high-value workflows</li>
          <li>Use production data, not synthetic demos</li>
          <li>Create operator runbooks and escalation paths</li>
          <li>Review model behavior weekly</li>
        </ul>
        <h2 class="text-2xl font-semibold text-white">Outcome</h2>
        <p>With strong governance, {title.lower()} becomes reliable infrastructure.</p>
        <p><a href="/contact/" class="text-purple-400 hover:underline">Talk to Zion Tech Group →</a></p>
      </article>
    </div>
  </main>
</body>
</html>"""
    return f'public/blog/{slug}/index.html', body, f'content: add blog {slug}'

def service_html(topic, n):
    slug = f'{topic["slug"]}-{n}'
    title = topic['title']
    desc = f'End-to-end {title.lower()} services: assessment, deployment, and managed operations.'
    body = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{desc}"/>
  <link rel="canonical" href="https://ziontechgroup.com/services/{slug}/"/>
  <meta property="og:title" content="{title}"/>
  <meta property="og:description" content="{desc}"/>
  <meta property="og:url" content="https://ziontechgroup.com/services/{slug}/"/>
  <meta property="og:type" content="service"/>
</head>
<body>
  <main class="min-h-screen bg-slate-950 py-20">
    <div class="container-page">
      <h1 class="text-4xl font-bold text-white mb-4">{title}</h1>
      <p class="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">{desc}</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/contact/" class="glass-card p-6 block hover:border-purple-500/40 transition-colors">
          <h2 class="text-white font-semibold mb-2">Implementation</h2>
          <p class="text-slate-300 text-sm">Production-ready deployment with governance.</p>
          <span class="text-purple-400 text-sm mt-4 inline-block">Contact us →</span>
        </a>
        <a href="/contact/" class="glass-card p-6 block hover:border-purple-500/40 transition-colors">
          <h2 class="text-white font-semibold mb-2">Managed Support</h2>
          <p class="text-slate-300 text-sm">24/7 monitoring and incident response.</p>
          <span class="text-purple-400 text-sm mt-4 inline-block">Contact us →</span>
        </a>
        <a href="/contact/" class="glass-card p-6 block hover:border-purple-500/40 transition-colors">
          <h2 class="text-white font-semibold mb-2">Automation</h2>
          <p class="text-slate-300 text-sm">Workflow automation with measurable outcomes.</p>
          <span class="text-purple-400 text-sm mt-4 inline-block">Contact us →</span>
        </a>
      </div>
    </div>
  </main>
</body>
</html>"""
    return f'public/services/{slug}/index.html', body, f'content: add service {slug}'

def run_cycle(n, topic):
    blog_path, blog_body, blog_msg = blog_html(topic, n)
    svc_path, svc_body, svc_msg = service_html(topic, n)
    ok1 = create_or_update_file(blog_path, blog_body, blog_msg)
    ok2 = create_or_update_file(svc_path, svc_body, svc_msg)
    return ok1 and ok2

def main():
    topics = load_topics()
    cycle = load_queue()
    cycles = 5
    ok = 0
    for i in range(cycles):
        topic = topics[cycle % len(topics)]
        n = cycle + 1
        print(f'Cycle {n}: {topic["title"]}')
        if run_cycle(n, topic):
            ok += 1
            cycle = n
            save_queue(cycle)
        time.sleep(1)
    print(f'\nCompleted {ok}/{cycles} cycles')

if __name__ == '__main__':
    main()
