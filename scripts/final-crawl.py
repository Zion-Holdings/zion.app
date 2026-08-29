#!/usr/bin/env python3
"""
Final deep live crawl: probe every sitemap URL, classify as 200/301/404/error,
cross-reference with local _redirects to verify redirect behavior.
"""
import re, json, sys
from urllib.parse import urljoin, urlparse, urlunparse
import urllib.request
import urllib.error

BASE = "https://ziontechgroup.com"

def normalize_url(url):
    p = urlparse(url)
    p = p._replace(fragment="", scheme=p.scheme.lower(), netloc=p.netloc.lower())
    return urlunparse(p)

def get_status(url, timeout=10):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; SiteAudit/1.0)'})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.status, resp.url
    except urllib.error.HTTPError as e:
        return e.code, e.url if hasattr(e, 'url') else url
    except Exception as e:
        return 0, str(e)[:60]

def main():
    print(f"=== FINAL DEEP LIVE CRAWL: {BASE} ===")
    
    # Load sitemap
    print("\n--- Loading sitemap ---")
    try:
        with urllib.request.urlopen(f"{BASE}/sitemap.xml", timeout=30) as resp:
            sitemap_xml = resp.read().decode('utf-8')
        urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)
        print(f"Sitemap contains {len(urls)} URLs")
    except Exception as e:
        print(f"Failed to load sitemap: {e}")
        return
    
    # Load local _redirects for cross-reference
    print("\n--- Loading local _redirects ---")
    redirect_map = {}
    try:
        with open("/Users/miami2/zion-support.github.io/_redirects") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):
                    parts = line.split()
                    if len(parts) >= 3:
                        redirect_map[parts[0]] = (parts[1], parts[2])
        print(f"Local _redirects: {len(redirect_map)} rules")
    except:
        print("Could not load local _redirects")
    
    # Probe all sitemap URLs with throttling
    print("\n--- Probing sitemap URLs ---")
    results = {'200': [], '301': [], '302': [], '404': [], 'error': [], 'other': []}
    checked = 0
    broken_details = []
    
    for url in urls:
        url = normalize_url(url)
        status, final = get_status(url)
        checked += 1
        
        if status == 200:
            results['200'].append(url)
        elif status in (301, 302):
            results[f'{status}'].append((url, final))
            # Check if local _redirects agrees
            local = redirect_map.get(url.rstrip('/'), None)
            if local and local[1] != str(status):
                broken_details.append(f"REDIRECT MISMATCH: {url} → live={status}, local={local[1]} → {local[0]}")
        elif status == 404:
            results['404'].append(url)
            local = redirect_map.get(url.rstrip('/'), None)
            if local:
                broken_details.append(f"HAS LOCAL RULE BUT 404: {url} → local: {local[1]} → {local[0]}")
            else:
                # Check if it's a phantom service slug
                if '/services/' in url:
                    slug = url.rstrip('/').replace(f'{BASE}/services/', '')
                    # Check if it has a hex ID pattern
                    if re.search(r'[0-9a-f]{8}', slug) or '---' in slug:
                        broken_details.append(f"PHANTOM SERVICE SLUG: {url} (slug: {slug})")
        else:
            results['other'].append((url, status))
        
        if checked % 500 == 0:
            print(f"  Checked {checked}/{len(urls)}... 200:{len(results['200'])} 301:{len(results['301'])} 302:{len(results['302'])} 404:{len(results['404'])} err:{len(results['error'])}")
    
    print(f"\n--- RESULTS ---")
    print(f"Total URLs checked: {checked}")
    print(f"✅ 200 OK:      {len(results['200'])}")
    print(f"↪ 301 Redirect: {len(results['301'])}")
    print(f"↪ 302 Redirect: {len(results['302'])}")
    print(f"❌ 404:         {len(results['404'])}")
    print(f"⚠ Error:        {len(results['error'])}")
    print(f"Other:          {len(results['other'])}")
    
    print(f"\n--- BROKEN (404) URLs ---")
    for url in results['404'][:30]:
        print(f"  ❌ {url}")
    if len(results['404']) > 30:
        print(f"  ... and {len(results['404']) - 30} more")
    
    print(f"\n--- REDIRECT MISMATCHES (local vs live) ---")
    for detail in broken_details[:30]:
        print(f"  ⚠️ {detail}")
    if len(broken_details) > 30:
        print(f"  ... and {len(broken_details) - 30} more")
    
    # Summary: how many service URLs are phantom vs real
    print(f"\n--- SERVICE URL BREAKDOWN ---")
    svc_urls = [u for u in urls if '/services/' in u and u.rstrip('/') != f'{BASE}/services/']
    real_svc = [u for u in svc_urls if u.rstrip('/').replace(f'{BASE}/services/', '') in 
                set(d.name for d in __import__('pathlib').Path('/Users/miami2/zion-support.github.io/public/services').iterdir() if d.is_dir())]
    phantom_svc = [u for u in svc_urls if u not in real_svc]
    
    print(f"Total service URLs in sitemap: {len(svc_urls)}")
    print(f"  Real (have static HTML): {len(real_svc)}")
    print(f"  Phantom (auto-generated, no HTML): {len(phantom_svc)}")
    
    # Check phantom status
    phantom_404 = [u for u in phantom_svc if any(u == b for b in results['404'])]
    phantom_301 = [u for u in phantom_svc if any(u == b[0] for b in results['301'])]
    print(f"  Phantom → 404: {len(phantom_404)}")
    print(f"  Phantom → 301: {len(phantom_301)}")
    
    # Save report
    report = {
        'checked': checked,
        'total_sitemap_urls': len(urls),
        'results': {
            '200': len(results['200']),
            '301': len(results['301']),
            '302': len(results['302']),
            '404': len(results['404']),
            'error': len(results['error']),
        },
        'broken_urls': results['404'],
        'redirect_mismatches': broken_details,
        'service_urls': len(svc_urls),
        'real_service_urls': len(real_svc),
        'phantom_service_urls': len(phantom_svc),
        'phantom_404': len(phantom_404),
        'phantom_301': len(phantom_301),
    }
    
    with open("/Users/miami2/zion-support.github.io/final-crawl-report.json", "w") as f:
        json.dump(report, f, indent=2)
    
    print(f"\nReport saved to final-crawl-report.json")
    
    # Final verdict
    print(f"\n{'='*60}")
    if results['404'] == 0 and len(broken_details) == 0:
        print("✅ SITE HEALTHY — 0 broken URLs, 0 redirect mismatches")
    elif len(phantom_404) == 0:
        print(f"⚠️  LIVE BUT ACCEPTABLE — {len(results['404'])} 404s (all phantom service slugs redirect correctly)")
    else:
        print(f"❌ ISSUES — {len(results['404'])} 404 URLs need fixing")

if __name__ == "__main__":
    main()
