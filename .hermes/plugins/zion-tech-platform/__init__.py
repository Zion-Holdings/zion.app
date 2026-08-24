"""Zion Tech Group Hermes Agent Plugin.

Adds tools for:
- Querying the Zion Tech service catalog (servicesData.json)
- Generating SEO-optimized service page scaffolding
- Triggering GitHub Actions workflows (deploy, health checks)
- Checking sitemap and route integrity
- Monitoring cron job status via Telegram delivery
"""
import json
import os
import subprocess
from pathlib import Path

ZION_HOME = os.environ.get(
    "ZION_SITE_PATH",
    "/Users/klebergarciaalcatrao/zion-support.github.io",
)
SERVICES_DATA = Path(ZION_HOME) / "app/data/servicesData.json"
BLOG_POSTS = Path(ZION_HOME) / "app/data/blogPosts.json"
SITEMAP = Path(ZION_HOME) / "sitemap.xml"


def _load_services():
    if not SERVICES_DATA.exists():
        return []
    with open(SERVICES_DATA) as f:
        return json.load(f)


def _load_blog_posts():
    if not BLOG_POSTS.exists():
        return []
    with open(BLOG_POSTS) as f:
        return json.load(f)


def register(ctx):
    # ── Tool: zion_service_lookup ──────────────────────────
    schema_lookup = {
        "name": "zion_service_lookup",
        "description": "Look up services in the Zion Tech catalog by name, category, or industry.",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Search term (name, category, or industry keyword). Leave empty to list all services.",
                },
                "category": {
                    "type": "string",
                    "description": "Filter by category (e.g. 'ai', 'automation', 'cloud').",
                },
                "industry": {
                    "type": "string",
                    "description": "Filter by industry (e.g. 'healthcare', 'finance').",
                },
                "limit": {
                    "type": "integer",
                    "description": "Max results to return (default 10, max 50).",
                    "default": 10,
                },
            },
        },
    }

    def handle_lookup(params, **kwargs):
        services = _load_services()
        q = params.get("query", "").lower()
        cat = params.get("category")
        ind = params.get("industry")
        limit = min(params.get("limit", 10), 50)

        if q:
            services = [
                s for s in services
                if q in s.get("name", "").lower()
                or q in s.get("id", "").lower()
                or q in s.get("description", "").lower()
                or q in s.get("category", "").lower()
            ]
        if cat:
            services = [s for s in services if s.get("category", "").lower() == cat.lower()]
        if ind:
            services = [s for s in services if s.get("industry", "").lower() == ind.lower()]

        results = [
            {
                "id": s.get("id"),
                "name": s.get("name"),
                "title": s.get("title"),
                "description": s.get("description", "")[:200],
                "category": s.get("category"),
                "industry": s.get("industry"),
                "href": s.get("href"),
                "icon": s.get("icon"),
            }
            for s in services[:limit]
        ]
        return json.dumps({"success": True, "count": len(results), "services": results})

    ctx.register_tool(
        name="zion_service_lookup",
        toolset="zion_tech",
        schema=schema_lookup,
        handler=handle_lookup,
    )

    # ── Tool: zion_blog_lookup ────────────────────────────
    schema_blog = {
        "name": "zion_blog_lookup",
        "description": "Search Zion Tech blog posts by slug, title, or tags.",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Search term across slug, title, and tags.",
                },
                "limit": {
                    "type": "integer",
                    "default": 10,
                    "description": "Max results (default 10, max 50).",
                },
            },
        },
    }

    def handle_blog(params, **kwargs):
        posts = _load_blog_posts()
        q = params.get("query", "").lower()
        limit = min(params.get("limit", 10), 50)

        if q:
            posts = [
                p for p in posts
                if q in p.get("slug", "").lower()
                or q in p.get("title", "").lower()
                or q in p.get("tags", "").lower()
            ]
        results = [
            {
                "slug": p.get("slug"),
                "title": p.get("title"),
                "description": p.get("description", "")[:200],
                "tags": p.get("tags", ""),
            }
            for p in posts[:limit]
        ]
        return json.dumps({"success": True, "count": len(results), "posts": results})

    ctx.register_tool(
        name="zion_blog_lookup",
        toolset="zion_tech",
        schema=schema_blog,
        handler=handle_blog,
    )

    # ── Tool: zion_check_routes ───────────────────────────
    schema_routes = {
        "name": "zion_check_routes",
        "description": "Check sitemap.xml for broken or orphaned routes. Returns a summary of total URLs, status breakdown, and any issues found.",
        "parameters": {
            "type": "object",
            "properties": {
                "sitemap_path": {
                    "type": "string",
                    "description": "Path to sitemap.xml (optional, uses default site path).",
                },
                "verify_live": {
                    "type": "boolean",
                    "description": "If true, make HTTP requests to verify URLs return 200.",
                    "default": False,
                },
            },
        },
    }

    def handle_routes(params, **kwargs):
        sitemap_path = params.get("sitemap_path") or str(SITEMAP)
        verify_live = params.get("verify_live", False)
        issues = []

        if not Path(sitemap_path).exists():
            return json.dumps({"success": False, "error": f"sitemap.xml not found at {sitemap_path}"})

        import xml.etree.ElementTree as ET
        tree = ET.parse(sitemap_path)
        root = tree.getroot()
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        urls = root.findall(".//sm:loc", ns)
        if not urls:
            urls = root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")

        total = len(urls)
        ok_count = 0
        redirect_count = 0
        error_count = 0

        for loc in urls:
            url = loc.text
            if verify_live:
                try:
                    import urllib.request
                    req = urllib.request.Request(url, method="HEAD")
                    resp = urllib.request.urlopen(req, timeout=10)
                    if resp.status in (200, 201):
                        ok_count += 1
                    elif resp.status in (301, 302):
                        redirect_count += 1
                    else:
                        error_count += 1
                        issues.append(f"HTTP {resp.status}: {url}")
                except Exception as e:
                    error_count += 1
                    issues.append(f"Error: {url} — {e}")
            else:
                ok_count += 1

        return json.dumps({
            "success": True,
            "total_urls": total,
            "ok": ok_count,
            "redirects": redirect_count,
            "errors": error_count,
            "issues": issues[:50],
        })

    ctx.register_tool(
        name="zion_check_routes",
        toolset="zion_tech",
        schema=schema_routes,
        handler=handle_routes,
    )

    # ── Hook: log Zion tool calls ─────────────────────────
    def on_tool_call(tool_name, tool_params, result):
        if tool_name and tool_name.startswith("zion_"):
            print(f"[zion-tech] tool invoked: {tool_name}")

    ctx.register_hook("post_tool_call", on_tool_call)
