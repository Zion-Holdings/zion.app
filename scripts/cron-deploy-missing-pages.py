#!/usr/bin/env python3
"""
Cron-run: Deploy missing service pages + fix orphan sitemap URL.

Actions (triggered by Swarm Coordinator change detection):
  1. Audit & fix orphan sitemap URL (w131-ai-mLOps → w131-ai-mlops case mismatch)
  2. Generate page.tsx for all catalog services missing a page directory
  3. Regenerate sitemap.xml from updated catalog
  4. Write summary to cron_output
"""
import json, os, re, subprocess, sys
from pathlib import Path
from datetime import datetime, timezone

BASE = Path("/Users/klebergarciaalcatrao/zion-support.github.io")
SERVICES_FILE = BASE / "app" / "data" / "services.json"
STABLE_FILE = BASE / "app" / "data" / "services.json"
SERVICES_DIR = BASE / "app" / "services"
CRON_OUTPUT = BASE / "cron_output"
SITEMAP_SCRIPT = BASE / "scripts" / "generate-sitemap-feed.cjs"
TIMESTAMP = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H%M%SZ")

def ts_escape(s: str) -> str:
    """Escape a string for use inside a TypeScript double-quoted string."""
    if not s:
        return ""
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', ' ').replace('\r', ' ')
    return s

PAGE_TEMPLATE = """import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "__TITLE__ - Zion Tech Group",
  description: "__DESC__",
  alternates: {
    canonical: `https://ziontechgroup.com/services/__SID__`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/__SID__`} title="__TITLE__" />
        <h1 className="text-4xl font-bold mb-6">__ICON__ __TITLE__</h1>
        <p className="text-lg text-gray-300 mb-8">__DESC__</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
__FEATURES__
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
__BENEFITS__
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$__BASIC__/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$__PRO__/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$__ENTERPRISE__/month</p>
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
}
"""

def generate_page(svc: dict) -> str:
    """Generate a self-contained page.tsx following the established template."""
    sid = svc.get('id', '')
    title = svc.get('title') or svc.get('name') or svc.get('id', 'Service')
    desc = svc.get('description') or ''
    if len(desc) > 300:
        desc = desc[:300]
    features = svc.get('features', []) or ['AI-powered automation', 'Real-time analytics', 'Enterprise security']
    benefits = svc.get('benefits', []) or ['Reduce operational costs', 'Improve efficiency', 'Scale seamlessly']
    pricing = svc.get('pricing', {}) or {}
    icon = svc.get('icon', '💡')

    basic = pricing.get('basic', '199') if pricing else '199'
    pro = pricing.get('pro', '499') if pricing else '499'
    enterprise = pricing.get('enterprise', '1499') if pricing else '1499'

    feature_items = '\n'.join(
        '            <li>' + ts_escape(f) + '</li>' for f in features[:8]
    )
    benefit_items = '\n'.join(
        '            <li>' + ts_escape(b) + '</li>' for b in benefits[:8]
    )

    page = PAGE_TEMPLATE
    page = page.replace('__TITLE__', ts_escape(str(title)))
    page = page.replace('__DESC__', ts_escape(str(desc)))
    page = page.replace('__SID__', ts_escape(sid))
    page = page.replace('__ICON__', ts_escape(str(icon)))
    page = page.replace('__FEATURES__', feature_items)
    page = page.replace('__BENEFITS__', benefit_items)
    page = page.replace('__BASIC__', ts_escape(str(basic)))
    page = page.replace('__PRO__', ts_escape(str(pro)))
    page = page.replace('__ENTERPRISE__', ts_escape(str(enterprise)))
    return page


def main():
    print(f"=== Cron Deploy: Missing Service Pages — {TIMESTAMP} ===")

    # ─── Step 1: Load catalog ──────────────────────────────────────────────
    with open(SERVICES_FILE) as f:
        catalog = json.load(f)
    if isinstance(catalog, dict) and "services" in catalog:
        catalog = catalog["services"]
    print(f"Loaded {len(catalog)} catalog services")

    # ─── Step 2: Audit orphan sitemap URL ─────────────────────────────────
    print("\n--- Orphan Sitemap URL Audit ---")
    sitemap_path = BASE / "sitemap.xml"
    orphans_found = []
    if sitemap_path.exists():
        with open(sitemap_path) as f:
            sitemap_content = f.read()
        sitemap_locs = re.findall(r'<loc>([^<]+)</loc>', sitemap_content)
        sitemap_locs_decoded = [u.replace('&amp;', '&') for u in sitemap_locs]
        sitemap_service_urls = [u for u in sitemap_locs_decoded if '/services/' in u]

        catalog_ids = set(s.get('id', '') for s in catalog)
        for url in sitemap_service_urls:
            slug = url.replace('https://ziontechgroup.com/services/', '').rstrip('/')
            match_found = False
            for cid in catalog_ids:
                if slug == cid or slug.startswith(cid) or cid.startswith(slug):
                    match_found = True
                    break
            if not match_found:
                orphans_found.append(slug)

    print(f"Orphan URLs found: {len(orphans_found)}")
    for orphan in orphans_found:
        print(f"  ORPHAN: /services/{orphan}")

    # Fix: normalize catalog entry IDs that have case mismatch with href
    fixed_ids = []
    for svc in catalog:
        sid = svc.get('id', '')
        href = svc.get('href', '')
        if href:
            href_slug = href.replace('/services/', '').rstrip('/')
            if sid != href_slug and sid.lower() == href_slug.lower():
                old_id = sid
                svc['id'] = href_slug
                svc['href'] = f'/services/{href_slug}'
                fixed_ids.append(old_id)
                print(f"  FIXED: id '{old_id}' -> '{href_slug}' (href slug)")

    if fixed_ids:
        print(f"Fixed {len(fixed_ids)} catalog ID case mismatches")

    # ─── Step 3: Determine missing page directories ──────────────────────
    disk_dirs = set(d for d in os.listdir(SERVICES_DIR) if os.path.isdir(os.path.join(SERVICES_DIR, d)))
    disk_pages = set(d for d in disk_dirs if os.path.exists(os.path.join(SERVICES_DIR, d, 'page.tsx')))

    missing_pages = []
    for svc in catalog:
        sid = svc.get('id', '')
        page_path = os.path.join(SERVICES_DIR, sid, 'page.tsx')
        if not os.path.exists(page_path):
            missing_pages.append(svc)

    print(f"\n--- Page Deployment ---")
    print(f"Catalog services: {len(catalog)}")
    print(f"Pages already on disk: {len(disk_pages)}")
    print(f"Pages missing: {len(missing_pages)}")

    # ─── Step 4: Generate missing pages ───────────────────────────────────
    generated = 0
    errors = []
    batch_size = 1000
    for svc in missing_pages:
        try:
            sid = svc.get('id', '')
            if not sid:
                continue
            svc_dir = os.path.join(SERVICES_DIR, sid)
            os.makedirs(svc_dir, exist_ok=True)
            page_path = os.path.join(svc_dir, 'page.tsx')
            content = generate_page(svc)
            with open(page_path, 'w') as f:
                f.write(content)
            generated += 1
            if generated % batch_size == 0:
                print(f"  Progress: {generated} pages generated...")
        except Exception as e:
            errors.append((svc.get('id', 'unknown'), str(e)))

    print(f"\nGenerated {generated} page.tsx files ({len(errors)} errors)")

    # ─── Step 5: Save updated catalog ─────────────────────────────────────
    with open(SERVICES_FILE, 'w') as f:
        json.dump(catalog, f, indent=2)
    print(f"✅ Updated servicesData.json ({len(catalog)} services)")

    # Sync to stable backup
    with open(STABLE_FILE, 'w') as f:
        json.dump(catalog, f, indent=2)
    print(f"✅ Synced to services.json")

    # ─── Step 6: Regenerate sitemap ───────────────────────────────────────
    print("\n--- Regenerating sitemap.xml ---")
    try:
        result = subprocess.run(
            ['node', str(SITEMAP_SCRIPT)],
            capture_output=True, text=True, timeout=120, cwd=str(BASE)
        )
        if result.returncode == 0:
            print(f"✅ Sitemap regenerated: {result.stdout.strip()}")
        else:
            print(f"⚠️  Sitemap issue: {result.stderr[:300]}")
    except Exception as e:
        print(f"⚠️  Sitemap regeneration warning: {e}")

    # ─── Step 7: Verify orphan fix ────────────────────────────────────────
    if orphans_found:
        print("\n--- Post-fix Orphan Check ---")
        with open(SERVICES_FILE) as f:
            catalog_after = json.load(f)
        if isinstance(catalog_after, dict) and "services" in catalog_after:
            catalog_after = catalog_after["services"]
        catalog_ids_after = set(s.get('id', '') for s in catalog_after)

        with open(sitemap_path) as f:
            sitemap_content = f.read()
        sitemap_locs = re.findall(r'<loc>([^<]+)</loc>', sitemap_content)
        sitemap_locs_decoded = [u.replace('&amp;', '&') for u in sitemap_locs]
        sitemap_service_urls = [u for u in sitemap_locs_decoded if '/services/' in u]

        still_orphan = []
        for url in sitemap_service_urls:
            slug = url.replace('https://ziontechgroup.com/services/', '').rstrip('/')
            match_found = any(slug == cid or slug.startswith(cid) or cid.startswith(slug) for cid in catalog_ids_after)
            if not match_found:
                still_orphan.append(slug)
        print(f"Orphans after fix: {len(still_orphan)}")
        for o in still_orphan[:5]:
            print(f"  STILL ORPHAN: {o}")

    # ─── Step 8: Summary ──────────────────────────────────────────────────
    summary = {
        "timestamp": TIMESTAMP,
        "action": "cron-deploy-missing-pages",
        "catalog_services": len(catalog),
        "orphan_urls_audited": len(orphans_found),
        "orphan_urls_found": orphans_found,
        "catalog_ids_fixed": fixed_ids,
        "pages_generated": generated,
        "errors": errors[:10],
        "error_count": len(errors),
    }
    with open(sitemap_path) as f:
        sitemap_content = f.read()
    summary["sitemap_urls"] = sitemap_content.count('<loc>')
    summary["sitemap_exists"] = True

    summary_path = CRON_OUTPUT / f"cron-deploy-missing-pages-{TIMESTAMP}.json"
    with open(summary_path, 'w') as f:
        json.dump(summary, f, indent=2)
    print(f"\n✅ Summary written to {summary_path}")
    print(json.dumps(summary, indent=2))

    return 0 if not errors else 1


if __name__ == '__main__':
    sys.exit(main())
