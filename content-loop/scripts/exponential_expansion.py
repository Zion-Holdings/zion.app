#!/usr/bin/env python3
"""
Exponential expansion + blog fallback generator.

1) Expand existing topics into angle variants with deterministic template shapes.
2) Write App Router pages via the existing generator entrypoint.
3) Write docs/blog/<slug>/index.html fallbacks so Pages serves them even if the
   Next export misses App Router routes on Android/Termux.
"""
from __future__ import annotations

import json
import random
import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(".")
TOPICS_FILE = REPO / "content-loop" / "topics.json"
GENERATOR = REPO / "content-loop" / "generator.py"
FALLBACK_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}" />
  <link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/" />
  <meta name="robots" content="index,follow" />
  <style>
    body {{ background: #0b1220; color: #e5e7eb; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }}
    .wrap {{ max-width: 860px; margin: 0 auto; padding: 40px 20px; }}
    a {{ color: #c4b5fd; }}
    .cta {{ display:inline-block; margin-top: 18px; padding: 12px 18px; border-radius: 12px; background: white; color: #0f172a; font-weight: 600; text-decoration:none; }}
    .secondary {{ display:inline-block; margin-top: 18px; padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.25); color: white; text-decoration:none; margin-left: 10px; }}
    h1 {{ font-size: 28px; line-height: 1.2; margin: 0 0 12px; color: white; }}
    p {{ line-height: 1.6; color: #cbd5e1; }}
    ul {{ line-height: 1.7; color: #cbd5e1; }}
    .meta {{ color: #94a3b8; font-size: 12px; margin-top: 10px; }}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>{title}</h1>
    <p class="meta">By Zion Tech Group • IT and AI insights • {year}</p>
    <p>{description}</p>
    <ul>
      <li>Practical approach for {cluster} teams</li>
      <li>Common pitfalls and mitigation patterns</li>
      <li>Measurable outcomes and 30-day execution plan</li>
    </ul>
    <p>Talk with Zion Tech Group about your environment and goals.</p>
    <a class="cta" href="/contact">Contact us</a>
    <a class="secondary" href="/services">View services</a>
    <script type="application/ld+json">{json_ld}</script>
  </div>
</body>
</html>
"""


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = re.sub(r"-{2,}", "-", text)
    return text.strip("-")


def angle_variants(topic: dict, extra_per_seed: int = 6) -> list[dict]:
    title = topic.get("title") or "Untitled"
    cluster = topic.get("cluster") or "general"
    intent = topic.get("intent") or "guide"
    cta = topic.get("cta") or "services"

    templates = [
        (f"{title}: 2026 Playbook", cluster, intent, cta),
        (f"How to implement {title} without disrupting operations", cluster, "guide", "contact"),
        (f"{title}: costs, ROI, and hidden risks", cluster, "guide", "consultation"),
        (f"Comparing {title}: vendors and build vs buy", cluster, "comparison", "services"),
        (f"{title} for {cluster} teams", cluster, intent, cta),
        (f"Case study: {title} in production", cluster, "case-study", "contact"),
        (f"Common mistakes when rolling out {title}", cluster, "guide", "consultation"),
        (f"{title} checklist for IT and security leaders", cluster, "checklist", "services"),
        (f"Automation and scaling patterns for {title}", cluster, "solution", "services"),
        (f"{title}: policy, compliance, and vendor management", cluster, "guide", "contact"),
    ]

    chosen = templates[: max(1, min(extra_per_seed, len(templates)))]
    random.shuffle(chosen)
    chosen = chosen[: max(1, extra_per_seed)]

    out: list[dict] = []
    for variant_title, vcluster, vintent, vcta in chosen:
        out.append({
            "title": variant_title,
            "slug": slugify(variant_title),
            "cluster": vcluster,
            "intent": vintent,
            "cta": vcta,
            "differentiation_hook": topic.get("differentiation_hook") or "Execution-focused AI/IT playbook",
            "rationale": topic.get("rationale") or "High-intent commercial content for buyers evaluating vendors",
        })
    return out


def load_topics() -> list[dict]:
    if not TOPICS_FILE.exists():
        return []
    return json.loads(TOPICS_FILE.read_text(encoding="utf-8"))


def existing_slugs() -> tuple[set[str], set[str]]:
    topic_slugs = {t["slug"] for t in load_topics() if "slug" in t}
    blog_root = REPO / "app" / "blog"
    blog_slugs = set()
    if blog_root.exists():
        for child in blog_root.iterdir():
            if child.is_dir() and (child / "page.tsx").exists():
                blog_slugs.add(child.name)
    return topic_slugs, blog_slugs


def expand_topics(extra_per_seed: int = 6) -> list[dict]:
    topics = load_topics()
    topic_slugs, blog_slugs = existing_slugs()
    seen = topic_slugs | blog_slugs
    added: list[dict] = []

    for topic in topics:
        variants = angle_variants(topic, extra_per_seed=extra_per_seed)
        for v in variants:
            if v["slug"] in seen:
                continue
            seen.add(v["slug"])
            added.append(v)

    merged = topics + added
    TOPICS_FILE.write_text(json.dumps(merged, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return added


def generate_pages() -> list[str]:
    proc = subprocess.run(["python3", str(GENERATOR)], cwd=REPO, text=True, capture_output=True)
    if proc.returncode != 0:
        raise SystemExit(f"generator failed: {proc.stderr}")
    try:
        data = json.loads(proc.stdout)
    except json.JSONDecodeError:
        return []
    return data.get("items") or data.get("published") or []


def write_fallback(slug: str, topic: dict) -> Path:
    title = topic.get("title") or slug.replace("-", " ").title()
    description = topic.get("differentiation_hook") or topic.get("description") or title
    cluster = topic.get("cluster") or "general"
    json_ld = json.dumps({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": title,
        "description": description,
        "author": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"},
        "publisher": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"},
        "mainEntityOfPage": f"https://ziontechgroup.com/blog/{slug}/",
        "wordCount": 1600,
    }, ensure_ascii=False)

    target = REPO / "docs" / "blog" / slug / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(
        FALLBACK_TEMPLATE.format(
            title=title,
            description=description,
            slug=slug,
            cluster=cluster,
            year=datetime.now(timezone.utc).year,
            json_ld=json_ld,
        ),
        encoding="utf-8",
    )
    return target


def write_fallbacks(slugs: list[str], topics_lookup: dict[str, dict]) -> list[Path]:
    written = []
    for slug in slugs:
        topic = topics_lookup.get(slug) or {}
        written.append(write_fallback(slug, topic))
    return written


def main() -> int:
    added = expand_topics(extra_per_seed=8)
    published = generate_pages()
    topics = load_topics()
    lookup = {t.get("slug", slugify(t.get("title", ""))): t for t in topics}
    missing = [slug for slug in published if not (REPO / "docs" / "blog" / slug / "index.html").exists()]
    fallbacks = write_fallbacks(missing, lookup) if missing else []
    print(json.dumps({"added": len(added), "published": len(published), "fallbacks": len(fallbacks), "items": published}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
