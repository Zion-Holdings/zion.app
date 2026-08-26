#!/usr/bin/env python3
"""
Rewrite all pages in broken_pages_list.txt to valid Next.js TSX.
Also clean known bad text patterns in remaining pages.
"""
from pathlib import Path
import re

REPO = Path('/data/data/com.termux/files/home/ztg/repo')
BROKEN_LIST = REPO / 'broken_pages_list.txt'

BROKEN_SIGNALS = [
    '<title>', '<html', '<!DOCTYPE', '<head', '<body',
    'M-^', 'M-pM', 'M-bM', '{', '<<', '<50ms', '<!--',
    '$24997', '$49997', 'application/ld+json'
]

def is_broken(content: str) -> bool:
    return any(s in content for s in BROKEN_SIGNALS)

def clean_name_from_path(path: Path) -> str:
    name = path.parent.name
    name = name.replace('-', ' ').replace('_', ' ').title()
    name = re.sub(r'\s*-\s*[a-f0-9]{6,}$', '', name)
    return name.strip() or 'Service'

def clean_text(text: str) -> str:
    text = re.sub(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>.*?</script>', '', text, flags=re.DOTALL|re.IGNORECASE)
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)
    for ch in ['\u201c','\u201d','\u2018','\u2019','\u00a0','\u200b','\u200c','\u200d']:
        text = text.replace(ch, '')
    text = re.sub(r'\$(\d{2,}),(\d{3})/', r'$\1,/', text)
    text = text.replace('$24997', '$24,997').replace('$49997', '$49,997')
    text = re.sub(r'<<', '&lt;', text)
    text = re.sub(r'<50ms', '&lt;50ms', text)
    text = re.sub(r'Predictive .+? \| Zion Tech Group - Zion Tech Group', lambda m: m.group(0).split(' - ')[0] + ' - Zion Tech Group', text)
    return text

def clean_page(path: Path) -> bool:
    try:
        content = path.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        return False
    if not is_broken(content):
        return False
    cleaned = clean_text(content)
    if cleaned != content:
        path.write_text(cleaned, encoding='utf-8')
        return True
    return False

def rewrite_page(path: Path) -> bool:
    try:
        content = path.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        return False
    if not is_broken(content):
        return False
    name = clean_name_from_path(path)
    sid = path.parent.name
    slug = f'/services/{sid}'
    canonical = f'https://ziontechgroup.com{slug}/'
    tsx = f"""import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {{
  title: `{name} - Zion Tech Group`,
  description: `{name} by Zion Tech Group: advanced AI/IT service with enterprise-grade reliability and seamless integration.`,
  alternates: {{
    canonical: `{canonical}`
  }}
}};

export default function ServicePage() {{
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="{slug}" title="{name}" />
        <h1 className="text-4xl font-bold mb-6">{name}</h1>
        <p className="text-lg text-gray-300 mb-8">
          {name} by Zion Tech Group: advanced AI/IT service with enterprise-grade reliability and seamless integration.
        </p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Advanced AI/IT capabilities</li>
            <li>Enterprise-grade reliability</li>
            <li>Seamless integration</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce operational costs</li>
            <li>Improve efficiency</li>
            <li>Scale with confidence</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1499/month</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}}
"""
    path.write_text(tsx, encoding='utf-8')
    return True

def main():
    if not BROKEN_LIST.exists():
        print('broken_pages_list.txt not found')
        return
    paths = [REPO / line.strip() for line in BROKEN_LIST.read_text(encoding='utf-8').splitlines() if line.strip()]
    cleaned = 0
    rewrote = 0
    for path in paths:
        if not path.exists():
            continue
        if rewrite_page(path):
            rewrote += 1
    print(f'Rewrote {rewrote} pages')

if __name__ == '__main__':
    main()
