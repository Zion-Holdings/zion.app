#!/usr/bin/env python3
"""
Analyze sitemap/service catalog orphans for ziontechgroup.com.
Compares public/sitemap.xml service URLs against app/data/services.json.
"""
import re, json, os, html
from collections import defaultdict, Counter
from pathlib import Path

REPO = Path("/Users/klebergarciaalcatrao/zion-support.github.io")

# ── 1. Parse sitemap ────────────────────────────────────────────────
with open(REPO / "public/sitemap.xml") as f:
    sitemap_content = f.read()
sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_content)
print("Total sitemap URLs:", len(sitemap_urls))

service_urls = [u for u in sitemap_urls if ".com/services/" in u or u.endswith(".com/services")]
print("Service URLs:", len(service_urls))

# ── 2. Parse services.json ───────────────────────────────────────────
with open(REPO / "app/data/services.json") as f:
    services = json.load(f)
print("Catalog entries:", len(services))

catalog_hrefs = set()
catalog_ids = set()
for s in services:
    h = s.get("href", "") or s.get("website", "")
    i = s.get("id", "")
    if h:
        catalog_hrefs.add(h)
    if i:
        catalog_ids.add(i)

print("Unique hrefs:", len(catalog_hrefs))
print("Unique ids:", len(catalog_ids))

# Build catalog slugs (normalize: strip /services/ prefix, trailing slash, HTML entities)
def normalize_slug(slug):
    """Normalize a slug: strip leading/trailing slashes, decode HTML entities."""
    s = slug.strip("/")
    s = html.unescape(s)
    return s

catalog_slugs = set()
catalog_slug_to_entry = {}
for h in catalog_hrefs:
    m = re.match(r'(?:.*\.com/)?services/(.+)', h)
    if m:
        slug = normalize_slug(m.group(1))
        catalog_slugs.add(slug)
        if slug not in catalog_slug_to_entry:
            catalog_slug_to_entry[slug] = h
    elif h.startswith("services/"):
        slug = normalize_slug(h[len("services/"):])
        catalog_slugs.add(slug)
        if slug not in catalog_slug_to_entry:
            catalog_slug_to_entry[slug] = h

# Also use id as slug
for i in catalog_ids:
    slug = normalize_slug(i)
    if re.match(r'services/', h) if False else True:
        pass
    # id might be full slug too
    catalog_slugs.add(slug)

print("Catalog slugs (normalized):", len(catalog_slugs))

# ── 3. Sitemap slugs ─────────────────────────────────────────────────
sitemap_slugs_raw = []  # list of (slug, url)
sitemap_slugs = set()
slug_to_urls = defaultdict(list)
for u in service_urls:
    m = re.search(r'\.com/services/(.*)', u)
    if m:
        raw = m.group(1)
        slug = normalize_slug(raw)
        sitemap_slugs.add(slug)
        sitemap_slugs_raw.append((slug, raw, u))
        slug_to_urls[slug].append(u)
    elif u.endswith(".com/services"):
        sitemap_slugs.add("")
        sitemap_slugs_raw.append(("", "", u))

print("Sitemap slugs (unique):", len(sitemap_slugs))

# ── 4. Orphans: sitemap slugs NOT in catalog ────────────────────────
orphans = sitemap_slugs - catalog_slugs
print("ORPHANS (sitemap slug not in catalog):", len(orphans))

# Catalog entries not in sitemap
missing_from_sitemap = catalog_slugs - sitemap_slugs
print("Catalog slugs missing from sitemap:", len(missing_from_sitemap))

# ── 5. Categorize orphans ────────────────────────────────────────────
HASH_SUFFIX_RE = re.compile(r'-[0-9a-f]{8}$')
HTML_ENTITY_RE = re.compile(r'&amp;|&lt;|&gt;|&quot;|&#39;|&[a-z]+;|&#x[0-9a-fA-F]+;')
TRAILING_SLASH_DIFF = False  # we normalize trailing slashes, so this is implicit

categories = defaultdict(list)

for o in sorted(orphans):
    reasons = []
    if HTML_ENTITY_RE.search(o):
        reasons.append("html_entity")
    if HASH_SUFFIX_RE.search(o):
        reasons.append("hash_suffix")
    if not reasons:
        reasons.append("unknown")
    # Check if stripping hash suffix makes it match catalog
    base_no_hash = HASH_SUFFIX_RE.sub("", o) if HASH_SUFFIX_RE.search(o) else o
    if base_no_hash in catalog_slugs and "hash_suffix" not in reasons:
        reasons.append("hash_suffix_dupe_of_catalog")
    # Check if html entity stripped matches
    decoded = html.unescape(o)
    if decoded != o and decoded in catalog_slugs and "html_entity" not in reasons:
        reasons.append("html_entity_dupe_of_catalog")
    if not reasons:
        reasons.append("unique_missing")

    primary = reasons[0]
    categories[primary].append(o)

# Secondary categorization: hash_suffix orphans that dupe a catalog entry
category_details = {
    "hash_suffix_dupes_of_catalog": [],
    "hash_suffix_truly_orphan": [],
    "html_entity_variants": [],
    "html_entity_dupes_of_catalog": [],
    "trailing_slash_variants": [],
    "unique_orphans": [],
}

for o in sorted(orphans):
    has_hash = bool(HASH_SUFFIX_RE.search(o))
    has_entity = bool(HTML_ENTITY_RE.search(o))
    base_no_hash = HASH_SUFFIX_RE.sub("", o) if has_hash else o
    decoded = html.unescape(o) if has_entity else o

    if has_entity:
        if decoded in catalog_slugs:
            category_details["html_entity_dupes_of_catalog"].append({
                "orphan_slug": o, "matched_catalog_slug": decoded
            })
        else:
            category_details["html_entity_variants"].append({
                "orphan_slug": o, "decoded": decoded
            })
    elif has_hash:
        if base_no_hash in catalog_slugs:
            category_details["hash_suffix_dupes_of_catalog"].append({
                "orphan_slug": o, "matched_catalog_slug": base_no_hash
            })
        else:
            category_details["hash_suffix_truly_orphan"].append(o)
    else:
        category_details["unique_orphans"].append(o)

# ── 6. Trailing slash analysis ───────────────────────────────────────
# Check if there are sitemap URLs without trailing slash that differ
no_trailing = [u for u in service_urls if not u.endswith("/")]
print("Service URLs without trailing slash:", len(no_trailing))
for u in no_trailing[:5]:
    print("  ", u)

# ── 7. Map orphans to app/services/ page directories ─────────────────
services_dir = REPO / "app" / "services"
existing_dirs = set()
if services_dir.exists():
    existing_dirs = set(d.name for d in services_dir.iterdir() if d.is_dir())
print("Existing app/services/ dirs:", len(existing_dirs))

# For each orphan, determine the candidate page directory
def to_page_dir(slug):
    """Convert a service slug to the expected page directory name."""
    # The dir name matches the slug as it appears in app/services/
    return slug

orphan_dirs_to_delete = []
orphan_dirs_missing = []
for o in sorted(orphans):
    # Check direct match
    if o in existing_dirs:
        orphan_dirs_to_delete.append(o)
    else:
        # Try with trailing slash variant, html entity variant
        candidates = [o, o + "/", html.unescape(o), html.unescape(o) + "/"]
        found = False
        for c in candidates:
            if c in existing_dirs:
                orphan_dirs_to_delete.append(c)
                found = True
                break
        if not found:
            orphan_dirs_missing.append(o)

print("Orphan dirs found in app/services/ (to delete):", len(orphan_dirs_to_delete))
print("Orphan slugs with no matching dir:", len(orphan_dirs_missing))

# ── 8. Hash suffix duplicate analysis ──────────────────────────────
# How many sitemap slugs have hash suffixes that are dupes of a non-hash catalog entry?
hash_suffix_orphans = [o for o in orphans if HASH_SUFFIX_RE.search(o)]
print("Orphans with hash suffix:", len(hash_suffix_orphans))

# For each hash-suffix orphan, check if base (without hash) exists in catalog
hash_dupe_count = 0
hash_true_orphan_count = 0
for o in hash_suffix_orphans:
    base = HASH_SUFFIX_RE.sub("", o)
    if base in catalog_slugs:
        hash_dupe_count += 1
    else:
        # Check if any catalog entry has this base
        hash_true_orphan_count += 1
print(f"Hash-suffix orphans that dupe catalog base: {hash_dupe_count}")
print(f"Hash-suffix orphans with no catalog base: {hash_true_orphan_count}")

# ── 9. Also check catalog entries with hash suffixes (duplicates) ─────
# The catalog has hash suffixes too — these create duplicate dirs
catalog_hash_slugs = [s for s in catalog_slugs if HASH_SUFFIX_RE.search(s)]
print("Catalog slugs with hash suffix:", len(catalog_hash_slugs))

# Group catalog hash-suffix slugs by their base
base_to_hash_slugs = defaultdict(list)
for s in catalog_hash_slugs:
    base = HASH_SUFFIX_RE.sub("", s)
    base_to_hash_slugs[base].append(s)

# These are hash-suffix duplicates in the catalog itself
catalog_hash_dupes = {k: v for k, v in base_to_hash_slugs.items() if len(v) > 0}
print("Catalog base slugs that also have hash-suffix variants:", len(catalog_hash_dupes))
total_catalog_hash_variants = sum(len(v) for v in catalog_hash_dupes.values())
print("Total catalog hash-suffix variants:", total_catalog_hash_variants)

# ── 10. Check sitemap for hash suffix dupes ──────────────────────────
sitemap_hash_slugs = [s for s in sitemap_slugs if HASH_SUFFIX_RE.search(s)]
print("Sitemap slugs with hash suffix:", len(sitemap_hash_slugs))

sitemap_base_to_hash = defaultdict(list)
for s in sitemap_hash_slugs:
    base = HASH_SUFFIX_RE.sub("", s)
    sitemap_base_to_hash[base].append(s)

# Sitemap slugs that are hash-suffix dupes (base also exists in sitemap)
sitemap_hash_dupes_in_sitemap = {k: v for k, v in sitemap_base_to_hash.items() if k in sitemap_slugs}
print("Sitemap hash-suffix dupes (base also in sitemap):", sum(len(v) for v in sitemap_hash_dupes_in_sitemap.values()))

# ── 11. HTML entity analysis in sitemap ─────────────────────────────
sitemap_entity_slugs = [s for s in sitemap_slugs if HTML_ENTITY_RE.search(s)]
print("Sitemap slugs with HTML entities:", len(sitemap_entity_slugs))
for s in sitemap_entity_slugs[:5]:
    print("  ", s)

# ── 12. Build comprehensive orphan dir list ─────────────────────────
# For hash-suffix dupes: the page dirs with hash suffixes that dupe a catalog base entry
# should be deleted (keep the canonical non-hash version)
hash_dupe_dirs_to_delete = []
for o in sorted(orphans):
    if HASH_SUFFIX_RE.search(o):
        base = HASH_SUFFIX_RE.sub("", o)
        if base in catalog_slugs:
            hash_dupe_dirs_to_delete.append(o)

# But also: catalog entries themselves may have hash-suffix dirs that are duplicates
# Check which catalog hash-suffix dirs exist in app/services/
catalog_hash_dirs_to_delete = []
for s in catalog_hash_slugs:
    if s in existing_dirs:
        catalog_hash_dirs_to_delete.append(s)

print("Hash-suffix orphan dirs to delete (in sitemap, match catalog base):", len(hash_dupe_dirs_to_delete))
print("Catalog hash-suffix dirs that exist in app/services/:", len(catalog_hash_dirs_to_delete))

# ── Output summary ───────────────────────────────────────────────────
print("\n=== SUMMARY ===")
print(f"Sitemap total URLs: {len(sitemap_urls)}")
print(f"Sitemap service URLs: {len(service_urls)}")
print(f"Sitemap unique service slugs: {len(sitemap_slugs)}")
print(f"Catalog entries: {len(services)}")
print(f"Catalog unique slugs: {len(catalog_slugs)}")
print(f"Orphans (sitemap minus catalog): {len(orphans)}")
print(f"  - Hash suffix dupes of catalog: {len(category_details['hash_suffix_dupes_of_catalog'])}")
print(f"  - Hash suffix truly orphan: {len(category_details['hash_suffix_truly_orphan'])}")
print(f"  - HTML entity variants (dupes): {len(category_details['html_entity_dupes_of_catalog'])}")
print(f"  - HTML entity variants (truly orphan): {len(category_details['html_entity_variants'])}")
print(f"  - Unique orphans (no pattern): {len(category_details['unique_orphans'])}")
print(f"Orphan dirs found in app/services/: {len(orphan_dirs_to_delete)}")
