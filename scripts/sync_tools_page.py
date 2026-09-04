#!/usr/bin/env python3
"""Regenerate app/tools/page.tsx tool grid from public/tools/<slug>/index.html on disk.

Self-healing: any tool directory present in public/tools/ is guaranteed a card.
Titles/descriptions come from a curated map; unknown slugs fall back to a
title-cased slug and the tool page's <meta name="description">.

Usage: python3 scripts/sync_tools_page.py
"""
import os
import re
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS_DIR = os.path.join(REPO, "public", "tools")
PAGE = os.path.join(REPO, "app", "tools", "page.tsx")

CURATED = {
    "base64-encoder": ("Base64 Encoder", "Encode and decode Base64 with UTF-8 support."),
    "base64-image": ("Base64 Image Encoder", "Encode images to Base64 data URIs."),
    "blog-post-generator": ("Blog Post Generator", "Draft blog outlines and introductions."),
    "case-converter": ("Case Converter", "Convert between 9 text cases instantly."),
    "color-contrast": ("Color Contrast Checker", "Check WCAG AA/AAA contrast ratios."),
    "color-converter": ("Color Converter", "Convert between HEX, RGB, and HSL with live preview."),
    "color-palette-gen": ("Color Palette Generator", "Generate palettes and export as CSS or JSON."),
    "color-picker": ("Color Picker", "Pick colors with HEX/RGB/HSL values."),
    "cron-generator": ("Cron Generator", "Build cron expressions from a schedule."),
    "cron-parser": ("Cron Parser", "Parse and explain cron expressions."),
    "css-minifier": ("CSS Minifier", "Minify CSS and see size savings."),
    "css-minifier-pro": ("CSS Minifier Pro", "Minify CSS with advanced options."),
    "excel-to-json": ("Excel to JSON", "Convert CSV/TSV data to JSON."),
    "gradient-generator": ("CSS Gradient Generator", "Design CSS gradients visually."),
    "hash-checker": ("Hash Checker", "Compare hashes to verify integrity."),
    "hash-generator": ("Hash Generator", "Generate SHA-1, SHA-256, SHA-384, SHA-512 hashes."),
    "html-entities": ("HTML Entities", "Encode and decode HTML entities."),
    "http-status": ("HTTP Status Codes", "Browse and search HTTP status codes."),
    "image-resize": ("Image Resize", "Resize images with aspect ratio lock."),
    "image-to-base64": ("Image to Base64", "Convert images to base64 strings."),
    "js-minifier": ("JS Minifier", "Minify JavaScript and see size savings."),
    "js-obfuscator": ("JS Obfuscator", "Obfuscate JavaScript code."),
    "json-diff": ("JSON Diff", "Compare two JSON objects and highlight differences."),
    "json-formatter": ("JSON Formatter", "Format, minify, and validate JSON quickly."),
    "json-schema-generator": ("JSON Schema Generator", "Infer a JSON Schema from sample JSON."),
    "json-to-csv": ("JSON to CSV", "Convert JSON arrays to CSV."),
    "json-to-yaml": ("JSON to YAML", "Convert JSON to YAML instantly."),
    "jwt-decoder": ("JWT Decoder", "Inspect header and payload without sending data anywhere."),
    "jwt-decoder-pro": ("JWT Decoder Pro", "Decode JWTs and inspect algorithm details."),
    "jwt-generator": ("JWT Generator", "Build signed JWTs for testing."),
    "lorem-ipsum": ("Lorem Ipsum Generator", "Generate placeholder text."),
    "lorem-ipsum-pro": ("Lorem Ipsum Pro", "Paragraphs, sentences, or words on demand."),
    "markdown-previewer": ("Markdown Previewer", "Preview markdown rendering in real-time."),
    "markdown-to-html": ("Markdown to HTML", "Convert Markdown to HTML instantly."),
    "md5-hash": ("MD5 Hash", "Generate MD5 hashes from text or files."),
    "meta-tag-generator": ("Meta Tag Generator", "Generate SEO and Open Graph meta tags."),
    "mime-lookup": ("MIME Type Lookup", "Find MIME types by extension or category."),
    "number-base-converter": ("Number Base Converter", "Convert between binary, octal, decimal, hex."),
    "password-generator": ("Password Generator", "Generate secure, customizable passwords."),
    "password-generator-pro": ("Password Generator Pro", "Advanced generator with strength meter."),
    "password-strength": ("Password Strength", "Analyze entropy and estimated crack time."),
    "percentage-calculator": ("Percentage Calculator", "Percentages, percent change, and discounts."),
    "qr-code-generator": ("QR Code Generator", "Generate and download QR codes instantly."),
    "qr-scanner": ("QR Scanner", "Decode QR codes from an uploaded image."),
    "regex-cheat-sheet": ("Regex Cheat Sheet", "Searchable regex syntax reference."),
    "regex-tester": ("Regex Tester", "Test patterns and matches in real time."),
    "sql-query-builder": ("SQL Query Builder", "Build SELECT, INSERT, UPDATE, DELETE queries."),
    "text-analyzer": ("Text Analyzer", "Counts, reading time, and keyword density."),
    "text-compare": ("Text Compare", "Compare two texts side-by-side."),
    "text-diff": ("Text Diff", "Highlight differences between two texts."),
    "text-slug": ("Text to Slug", "Convert text to URL-friendly slugs."),
    "text-to-speech": ("Text to Speech", "Read text aloud with browser voices."),
    "timestamp-converter": ("Timestamp Converter", "Convert Unix timestamps to dates and vice versa."),
    "timestamp-generator": ("Timestamp Generator", "Generate Unix timestamps for any date."),
    "timestamp-to-cron": ("Timestamp to Cron", "Turn a specific time into a cron expression."),
    "unit-converter": ("Unit Converter", "Length, weight, temperature, data, speed, area."),
    "url-encoder": ("URL Encoder", "Encode and decode URLs with UTF-8 support."),
    "url-parser": ("URL Parser", "Break a URL into its components."),
    "uuid-generator": ("UUID Generator", "Generate UUID v4 identifiers instantly."),
    "word-counter": ("Word Counter", "Count words, characters, and reading time."),
    "yaml-formatter": ("YAML Formatter", "Format and validate YAML."),
    "yaml-to-json": ("YAML to JSON", "Convert YAML to JSON instantly."),
}

CARD = (
    '        <a href="/tools/{slug}/" className="rounded-2xl border border-slate-800 '
    'bg-slate-900/60 p-6 hover:border-purple-500/40">\n'
    '          <h3 className="text-white font-semibold mb-2">{title}</h3>\n'
    '          <p className="text-slate-400 text-sm">{desc}</p>\n'
    "        </a>"
)

SITEMAP = os.path.join(REPO, "public", "sitemap.xml")
SITE = "https://ziontechgroup.com"
# Match a tool <url> element and only the whitespace that follows it, so removal
# never eats the newline belonging to the previous line (which would join entries).
TOOL_LOC_RE = re.compile(
    r"[ \t]*<url><loc>" + re.escape(SITE) + r"/tools/[a-z0-9-]+/</loc>.*?</url>[ \t]*\n?"
)

SERVICE_PAGE = os.path.join(REPO, "app", "services", "[slug]", "page.tsx")
# Same shape as TOOL_LOC_RE, but the trailing slug is required: this must not
# match the /services/ index entry, which has to survive the strip-and-reinsert.
SERVICE_LOC_RE = re.compile(
    r"[ \t]*<url><loc>" + re.escape(SITE) + r"/services/[a-z0-9-]+/</loc>.*?</url>[ \t]*\n?"
)


def esc(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def discover():
    if not os.path.isdir(TOOLS_DIR):
        sys.exit(f"missing {TOOLS_DIR}")
    tools = []
    for slug in sorted(os.listdir(TOOLS_DIR)):
        path = os.path.join(TOOLS_DIR, slug, "index.html")
        if not os.path.isfile(path):
            continue
        if slug in CURATED:
            title, desc = CURATED[slug]
        else:
            title = slug.replace("-", " ").title()
            html = open(path, encoding="utf-8", errors="replace").read()
            m = re.search(r'<meta\s+name="description"\s+content="([^"]+)"', html)
            desc = m.group(1) if m else f"{title} utility."
            if len(desc) > 90:
                desc = desc[:87].rstrip() + "..."
        tools.append((slug, title, desc))
    return tools


def discover_services():
    """Read the service slugs that app/services/[slug]/ actually builds.

    SERVICE_CATEGORY_MAP is the single source of truth: generateStaticParams
    enumerates its keys, so a slug in that map is a page that exists and a
    slug missing from it is a 404. Parsing the map here means the sitemap
    cannot drift from what the route builds -- which is exactly how all ten
    service pages ended up live but absent from the sitemap.
    """
    if not os.path.isfile(SERVICE_PAGE):
        return []
    src = open(SERVICE_PAGE, encoding="utf-8").read()
    m = re.search(
        r"const SERVICE_CATEGORY_MAP[^=]*=\s*\{(.*?)\n\};", src, re.S
    )
    if not m:
        return []
    return re.findall(r"^\s*'([a-z0-9-]+)'\s*:", m.group(1), re.M)


def sync_service_sitemap(services):
    """Ensure public/sitemap.xml carries one <url> entry per service page."""
    if not os.path.isfile(SITEMAP) or not services:
        return False
    src = open(SITEMAP, encoding="utf-8").read()

    # Drop existing /services/<slug>/ entries, keeping the /services/ index,
    # then re-insert the full set.
    stripped = SERVICE_LOC_RE.sub("", src)
    block = "".join(
        f"  <url><loc>{SITE}/services/{s}/</loc>"
        f"<changefreq>monthly</changefreq><priority>0.8</priority></url>\n"
        for s in services
    )
    if "</urlset>" not in stripped:
        return False
    new = stripped.replace("</urlset>", block + "</urlset>", 1)
    if new == src:
        return False
    open(SITEMAP, "w", encoding="utf-8").write(new)
    return True


def sync_sitemap(tools):
    """Ensure public/sitemap.xml has exactly one <url> entry per deployed tool."""
    if not os.path.isfile(SITEMAP):
        print("no public/sitemap.xml; skipping sitemap sync")
        return False
    src = open(SITEMAP, encoding="utf-8").read()

    # Drop every existing /tools/<slug>/ entry, then re-insert the full set.
    stripped = TOOL_LOC_RE.sub("", src)
    block = "".join(
        f"  <url><loc>{SITE}/tools/{s}/</loc>"
        f"<changefreq>monthly</changefreq><priority>0.7</priority></url>\n"
        for s, _, _ in tools
    )
    if "</urlset>" not in stripped:
        print("sitemap.xml missing </urlset>; skipping sitemap sync")
        return False
    new = stripped.replace("</urlset>", block + "</urlset>", 1)
    if new == src:
        return False
    open(SITEMAP, "w", encoding="utf-8").write(new)
    return True


def main():
    tools = discover()
    grid = "\n".join(
        CARD.format(slug=s, title=esc(t), desc=esc(d)) for s, t, d in tools
    )
    src = open(PAGE, encoding="utf-8").read()

    pattern = re.compile(
        r'(<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">\n)'
        r"(.*?)"
        r"(\n      </div>)",
        re.S,
    )
    if not pattern.search(src):
        sys.exit("could not locate tool grid in app/tools/page.tsx")

    new = pattern.sub(lambda m: m.group(1) + grid + m.group(3), src, count=1)
    page_changed = new != src
    if page_changed:
        open(PAGE, "w", encoding="utf-8").write(new)

    sitemap_changed = sync_sitemap(tools)
    services = discover_services()
    services_changed = sync_service_sitemap(services)

    if page_changed:
        print(f"synced {len(tools)} tool cards into app/tools/page.tsx")
    else:
        print(f"tools page already in sync ({len(tools)} tools)")
    if sitemap_changed:
        print(f"synced {len(tools)} tool URLs into public/sitemap.xml")
    else:
        print("sitemap already in sync")
    if services_changed:
        print(f"synced {len(services)} service URLs into public/sitemap.xml")
    else:
        print(f"service sitemap already in sync ({len(services)} services)")


if __name__ == "__main__":
    main()
