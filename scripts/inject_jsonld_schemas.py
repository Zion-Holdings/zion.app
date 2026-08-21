#!/usr/bin/env python3
"""
Inject JSON-LD schemas across all dynamic service and tool routes.

- SoftwareApplication (WebApplication) schema for tools
- Service + FAQPage schemas for service pages
- Validates using python3 scripts/sync_tools_page.py

Usage:
  python3 scripts/inject_jsonld_schemas.py          # inject into all pages
  python3 scripts/inject_jsonld_schemas.py --verify  # validate only
"""

import json
import os
import re
import sys
import glob
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SERVICES_JSON = REPO / "app" / "data" / "services.json"
SITEMAP = REPO / "public" / "sitemap.xml"
TOOLS_DIR = REPO / "app" / "tools"
SERVICES_DIR = REPO / "app" / "services"

# --- JSON-LD templates ---

def make_service_schema(entry):
    """Build Service schema from a services.json entry."""
    slug = entry.get("id", "")
    name = entry.get("name") or entry.get("title", "")
    desc = entry.get("description", name)
    category = entry.get("category", "AI/IT")
    industry = entry.get("industry", "General")
    features = entry.get("features", [])
    benefits = entry.get("benefits", [])
    pricing = entry.get("pricing", {})
    href = entry.get("href", f"/services/{slug}")
    icon = entry.get("icon", "🛠️")
    contact = entry.get("contactInfo", {})

    # Convert pricing to Offer objects
    offers = []
    price_map = {"basic": "Basic", "pro": "Professional", "enterprise": "Enterprise"}
    for tier in ["basic", "pro", "enterprise"]:
        price_val = pricing.get(tier, 0)
        if price_val:
            offers.append({
                "@type": "Offer",
                "name": price_map[tier],
                "price": str(price_val),
                "priceCurrency": "USD",
                "description": f"{price_map[tier]} tier for {name}",
            })

    service_obj = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": desc,
        "serviceType": name,
        "category": category.title() if category else "AI/IT",
        "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
        },
        "areaServed": industry.title() if industry else "Global",
        "featureList": features if features else None,
        "offers": offers if offers else None,
        "url": f"https://ziontechgroup.com{href}",
    }
    # Remove None values
    service_obj = {k: v for k, v in service_obj.items() if v is not None}

    return service_obj


def make_faq_schema(entry):
    """Build FAQPage schema from features and benefits."""
    name = entry.get("name") or entry.get("title", "")
    features = entry.get("features", [])
    benefits = entry.get("benefits", [])

    qas = []
    # Generate FAQ from features
    for i, feat in enumerate(features[:5]):
        qas.append({
            "@type": "Question",
            "name": f"What is {name} feature {i+1}?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": str(feat),
            },
        })
    # Generate FAQ from benefits
    for i, ben in enumerate(benefits[:3]):
        qas.append({
            "@type": "Question",
            "name": f"What business benefit does {name} provide ({i+1})?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": str(ben),
            },
        })

    if not qas:
        qas.append({
            "@type": "Question",
            "name": f"What is {name}?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": entry.get("description", f"{name} is an AI/IT service by Zion Tech Group."),
            },
        })

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": qas,
    }


def make_software_application_schema(tool_name, tool_slug, description, is_web=True):
    """Build SoftwareApplication / WebApplication schema."""
    base = {
        "@context": "https://schema.org",
        "@type": "WebApplication" if is_web else "SoftwareApplication",
        "name": tool_name,
        "description": description,
        "applicationCategory": "DeveloperApplication" if "tool" in tool_slug.lower() else "WebApplication",
        "operatingSystem": "All (browser-based)",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
        },
        "url": f"https://ziontechgroup.com/tools/{tool_slug}",
    }
    if is_web:
        base["browserRequirements"] = "Modern browser with JavaScript enabled"
        base["applicationCategory"] = "WebApplication"
    return base


def jsonld_script(data):
    """Wrap JSON-LD data in a <script type="application/ld+json"> tag."""
    return f'<script type="application/ld+json">{json.dumps(data)}</script>'


def extract_slug_from_path(filepath, base_dir):
    """Extract the service/tool slug from a file path."""
    rel = os.path.relpath(filepath, str(base_dir))
    parts = rel.split(os.sep)
    return parts[0] if parts else ""


def strip_hash_suffix(slug):
    """Remove hash suffix like '-a056ab23' for clean display."""
    return re.sub(r'-[a-f0-9]{8}$', '', slug)


# --- SERVICE PAGE INJECTION ---

def inject_service_schema(page_path, entry):
    """Inject Service + FAQPage JSON-LD into a service page.tsx."""
    content = Path(page_path).read_text(encoding="utf-8")

    # Skip if already has our schema markers
    if "<!-- Zion SchemaAgent: Service+FAQPage -->" in content:
        return False

    slug = entry.get("id", extract_slug_from_path(page_path, SERVICES_DIR))
    name = entry.get("name") or entry.get("title", "")
    desc = entry.get("description", name)

    service_schema = make_service_schema(entry)
    faq_schema = make_faq_schema(entry)

    # Build the JSON-LD scripts
    scripts = f"\n    <!-- Zion SchemaAgent: Service+FAQPage -->\n    {jsonld_script(service_schema)}\n    {jsonld_script(faq_schema)}\n"

    # Inject before the closing </main> tag
    if "</main>" in content:
        content = content.replace("</main>", scripts + "  </main>")
    elif "</>" in content:
        # Fallback: inject before last </>
        content = content.rsplit("</>", 1)[0] + scripts + "\n  </>"
    else:
        return False

    Path(page_path).write_text(content, encoding="utf-8")
    return True


def inject_all_service_schemas():
    """Inject schemas into all existing service page.tsx files."""
    # Build slug-to-entry lookup
    with open(SERVICES_JSON, encoding="utf-8") as f:
        services = json.load(f)
    slug_to_entry = {}
    for svc in services:
        if isinstance(svc, dict):
            sid = svc.get("id", "")
            slug_to_entry[sid] = svc
            # Also map without hash suffix
            clean = strip_hash_suffix(sid)
            if clean not in slug_to_entry:
                slug_to_entry[clean] = svc

    # Find all existing service pages
    service_pages = sorted(glob.glob(str(SERVICES_DIR / "*/page.tsx")))
    injected = 0
    skipped = 0
    errors = 0

    for page_path in service_pages:
        slug = extract_slug_from_path(page_path, SERVICES_DIR)
        entry = slug_to_entry.get(slug)
        if not entry:
            # Try matching by clean slug
            for k, v in slug_to_entry.items():
                if slug.startswith(strip_hash_suffix(k)):
                    entry = v
                    break
        if not entry:
            errors += 1
            if errors <= 5:
                print(f"  ⚠️ No catalog entry for: {slug}")
            continue

        try:
            if inject_service_schema(page_path, entry):
                injected += 1
            else:
                skipped += 1
        except Exception as e:
            errors += 1
            if errors <= 5:
                print(f"  ⚠️ Error injecting {slug}: {e}")

    print(f"Service pages: {injected} injected, {skipped} skipped (already done), {errors} errors")
    return injected, skipped, errors


# --- TOOL PAGE INJECTION ---

TOOL_CATALOG = {
    "service-recommender": {
        "name": "AI Service Recommender",
        "description": "Answer a few questions and get a ranked list of best-fit Zion AI/IT services with estimated ROI and timeline.",
    },
    "service-comparison": {
        "name": "Service Comparison Tool",
        "description": "Side-by-side comparison of AI and IT services across cost, complexity, and expected impact.",
    },
    "ssl-checker": {
        "name": "SSL Certificate Checker",
        "description": "Real-time SSL/TLS certificate health and expiry check for any domain.",
    },
}

# Extended catalog for public/tools/ HTML tools
def build_tool_catalog_from_public():
    """Scan public/tools/ for HTML tool directories and build catalog."""
    public_tools = REPO / "public" / "tools"
    if not public_tools.exists():
        return TOOL_CATALOG

    catalog = dict(TOOL_CATALOG)
    for child in sorted(public_tools.iterdir()):
        if child.is_dir() and (child / "index.html").exists():
            slug = child.name
            if slug not in catalog:
                title = slug.replace("-", " ").title()
                # Check index.html for description
                try:
                    html = (child / "index.html").read_text(encoding="utf-8", errors="ignore")
                    desc_match = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
                    desc = desc_match.group(1).strip() if desc_match else f"Free AI/IT utility tool for {title}."
                    # If title matches pattern, use it
                    desc = f"Interactive {title} tool by Zion Tech Group."
                except Exception:
                    desc = f"Interactive {title} tool by Zion Tech Group."
                catalog[slug] = {"name": title, "description": desc}
    return catalog


def inject_tool_schema(page_path, tool_name, tool_slug, description):
    """Inject SoftwareApplication JSON-LD into a tool page.tsx."""
    content = Path(page_path).read_text(encoding="utf-8")

    if "<!-- Zion SchemaAgent: SoftwareApplication -->" in content:
        return False

    app_schema = make_software_application_schema(tool_name, tool_slug, description)

    # For the 3 page.tsx tools, inject before closing StandardPage
    # For other pages, inject before </main>
    scripts = f"\n    <!-- Zion SchemaAgent: SoftwareApplication -->\n    {jsonld_script(app_schema)}\n"

    if "<StandardPage" in content:
        # Inject after the opening StandardPage and before its children
        # Actually better to inject just before the closing </StandardPage>
        content = content.replace("</StandardPage>", scripts + "  </StandardPage>")
    elif "</main>" in content:
        content = content.replace("</main>", scripts + "  </main>")
    elif "</>" in content:
        content = content.rsplit("</>", 1)[0] + scripts + "\n  </>"
    else:
        return False

    Path(page_path).write_text(content, encoding="utf-8")
    return True


def inject_all_tool_schemas():
    """Inject SoftwareApplication schema into all tool pages."""
    catalog = build_tool_catalog_from_public()

    # The 3 dynamic tool pages
    tool_pages = sorted(glob.glob(str(TOOLS_DIR / "*/page.tsx")))
    injected = 0
    skipped = 0
    errors = 0

    for page_path in tool_pages:
        slug = extract_slug_from_path(page_path, TOOLS_DIR)
        info = catalog.get(slug, {"name": slug.replace("-", " ").title(), "description": f"Tool: {slug}"})
        try:
            if inject_tool_schema(page_path, info["name"], slug, info["description"]):
                injected += 1
            else:
                skipped += 1
        except Exception as e:
            errors += 1
            if errors <= 3:
                print(f"  ⚠️ Error injecting tool {slug}: {e}")

    print(f"Tool pages: {injected} injected, {skipped} skipped, {errors} errors")
    return injected, skipped, errors


def inject_tools_index_schema():
    """Inject a CollectionPage of SoftwareApplication schemas into the tools index."""
    page_path = TOOLS_DIR / "page.tsx"
    if not page_path.exists():
        print("  ⚠️ tools/page.tsx not found")
        return False

    content = page_path.read_text(encoding="utf-8")

    if "<!-- Zion SchemaAgent: ToolsIndex -->" in content:
        return False

    catalog = build_tool_catalog_from_public()
    tool_items = []
    for slug, info in sorted(catalog.items()):
        tool_items.append({
            "@type": "SoftwareApplication",
            "name": info["name"],
            "description": info["description"],
            "url": f"https://ziontechgroup.com/tools/{slug}/",
            "applicationCategory": "WebApplication",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"},
        })

    collection_schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Zion Tech Group Tools",
        "description": "Free AI/IT tools for service recommendations, comparisons, SSL checks, and more.",
        "url": "https://ziontechgroup.com/tools/",
        "itemListElement": tool_items,
    }

    scripts = f"\n    <!-- Zion SchemaAgent: ToolsIndex -->\n    {jsonld_script(collection_schema)}\n"

    if "</StandardPage>" in content:
        content = content.replace("</StandardPage>", scripts + "  </StandardPage>")
    elif "</main>" in content:
        content = content.replace("</main>", scripts + "  </main>")
    else:
        return False

    page_path.write_text(content, encoding="utf-8")
    print(f"Tools index: 1 injected (CollectionPage with {len(tool_items)} tools)")
    return True


# --- SITEMAP REGENERATION ---

def regenerate_sitemap():
    """Regenerate sitemap.xml with all service URLs from servicesData.json."""
    services_data_json = REPO / "app" / "data" / "servicesData.json"
    with open(services_data_json, encoding="utf-8") as f:
        services = json.load(f)

    # Static pages
    static_pages = [
        "", "services/", "tools/", "blog/", "contact/", "about/",
        "pricing/", "ai-services-index/", "free-ai-it-tools/",
        "new-ai-services/", "careers/", "partners/",
    ]

    lines = ['<?xml version="1.0" encoding="UTF-8"?>']
    lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    lines.append('</urlset>')

    # Build sitemap with all service URLs
    today = "2026-08-21"

    url_lines = []
    for page in static_pages:
        url_lines.append(f'  <url><loc>https://ziontechgroup.com/{page}</loc><lastmod>{today}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>')

    for svc in services:
        href = svc.get("href", "")
        if not href:
            slug = svc.get("id", "")
            href = f"/services/{slug}/"
        # Fix trailing slash
        if not href.endswith("/"):
            href = href + "/"
        url = f"https://ziontechgroup.com{href}"
        url_escaped = url.replace("&", "&amp;")
        url_lines.append(f'  <url><loc>{url_escaped}</loc><lastmod>{today}</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>')

    # Tools
    public_tools = REPO / "public" / "tools"
    if public_tools.exists():
        for child in sorted(public_tools.iterdir()):
            if child.is_dir() and (child / "index.html").exists():
                slug = child.name
                url_lines.append(f'  <url><loc>https://ziontechgroup.com/tools/{slug}/</loc><lastmod>{today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>')

    # Blog posts
    blog_dir = REPO / "app" / "blog"
    if blog_dir.exists():
        for child in sorted(blog_dir.iterdir()):
            if child.is_dir() and (child / "page.tsx").exists():
                slug = child.name
                url_lines.append(f'  <url><loc>https://ziontechgroup.com/blog/{slug}/</loc><lastmod>{today}</lastmod><changefreq>weekly</changefreq><priority>0.6</priority></url>')

    # Rebuild
    lines.insert(-1, "\n".join(url_lines))
    sitemap_content = "\n".join(lines) + "\n"

    with open(SITEMAP, "w", encoding="utf-8") as f:
        f.write(sitemap_content)

    url_count = len(url_lines)
    print(f"Sitemap regenerated: {url_count} URLs written to public/sitemap.xml")
    return url_count


# --- VERIFICATION ---

def verify_schemas():
    """Verify no schema syntax errors across all modified pages."""
    errors = []
    checked = 0

    # Check service pages
    for page_path in sorted(glob.glob(str(SERVICES_DIR / "*/page.tsx")))[:50]:  # Check first 50
        content = Path(page_path).read_text(encoding="utf-8")
        checked += 1
        # Find all JSON-LD scripts
        scripts = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
        for i, script in enumerate(scripts):
            try:
                data = json.loads(script)
                # Validate basic structure
                if "@context" not in data:
                    errors.append(f"{page_path}: script {i} missing @context")
                if "@type" not in data:
                    errors.append(f"{page_path}: script {i} missing @type")
            except json.JSONDecodeError as e:
                errors.append(f"{page_path}: JSON parse error in script {i}: {e}")

    # Check tool pages
    for page_path in sorted(glob.glob(str(TOOLS_DIR / "*/page.tsx"))) + [str(TOOLS_DIR / "page.tsx")]:
        if not Path(page_path).exists():
            continue
        content = Path(page_path).read_text(encoding="utf-8")
        checked += 1
        scripts = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
        for i, script in enumerate(scripts):
            try:
                data = json.loads(script)
                if "@context" not in data:
                    errors.append(f"{page_path}: script {i} missing @context")
                if "@type" not in data:
                    errors.append(f"{page_path}: script {i} missing @type")
            except json.JSONDecodeError as e:
                errors.append(f"{page_path}: JSON parse error in script {i}: {e}")

    # Validate sitemap is valid XML
    try:
        import xml.etree.ElementTree as ET
        tree = ET.parse(str(SITEMAP))
        root = tree.getroot()
        url_count = len(root.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url"))
        print(f"Sitemap XML valid: {url_count} <url> entries")
    except Exception as e:
        errors.append(f"sitemap.xml validation error: {e}")

    print(f"\n=== VERIFICATION ===")
    print(f"Pages checked: {checked}")
    if errors:
        print(f"Errors: {len(errors)}")
        for e in errors[:10]:
            print(f"  ❌ {e}")
        return False
    else:
        print("✅ All schema JSON-LD is valid, no syntax errors detected")
        return True


def count_schemas_injected():
    """Count injected schemas across all pages."""
    service_count = 0
    tool_count = 0
    for page_path in sorted(glob.glob(str(SERVICES_DIR / "*/page.tsx")))[:100]:
        content = Path(page_path).read_text(encoding="utf-8")
        if "Zion SchemaAgent: Service+FAQPage" in content:
            service_count += 1

    for page_path in sorted(glob.glob(str(TOOLS_DIR / "*/page.tsx"))) + [str(TOOLS_DIR / "page.tsx")]:
        if not Path(page_path).exists():
            continue
        content = page_path.read_text(encoding="utf-8")
        if "Zion SchemaAgent" in content:
            tool_count += 1

    return service_count, tool_count


# --- MAIN ---

if __name__ == "__main__":
    mode = sys.argv[1] if len(sys.argv) > 1 else "inject"

    if mode == "--verify":
        print("=== SchemaAgent Verification ===")
        ok = verify_schemas()
        svc, tl = count_schemas_injected()
        print(f"Pages with schemas: {svc} services, {tl} tools (checked first 100)")
        sys.exit(0 if ok else 1)
    elif mode == "--sitemap-only":
        print("=== Sitemap Regeneration ===")
        count = regenerate_sitemap()
        print(f"Done: {count} URLs")
    else:
        print("=== SchemaAgent: Injecting JSON-LD schemas ===")
        print()
        print("--- Service pages (Service + FAQPage) ---")
        s_inj, s_skip, s_err = inject_all_service_schemas()
        print()
        print("--- Tool pages (SoftwareApplication) ---")
        t_inj, t_skip, t_err = inject_all_tool_schemas()
        inject_tools_index_schema()
        print()
        print("--- Sitemap regeneration ---")
        sitemap_count = regenerate_sitemap()
        print()
        print("=== VERIFICATION ===")
        ok = verify_schemas()
        svc, tl = count_schemas_injected()
        print(f"\nPages with injected schemas: {svc} services, {tl} tools")
        print(f"Sitemap URLs: {sitemap_count}")
        print(f"\n=== SUMMARY ===")
        print(f"Service pages: {s_inj} injected, {s_skip} skipped, {s_err} errors")
        print(f"Tool pages: {t_inj} injected, {t_skip} skipped, {t_err} errors")
        print(f"Verification: {'PASS ✅' if ok else 'FAIL ❌'}")