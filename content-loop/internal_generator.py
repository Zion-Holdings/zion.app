#!/usr/bin/env python3
"""
Internal helpers for Zion Content Loop.

Kept separate so generator.py stays focused on page rendering and we can
audit/seed/rotate topic generation without rewriting large files.
"""
from __future__ import annotations

import json
import random
import re
from pathlib import Path
from typing import List

REPO = Path(".")
TOPICS_FILE = REPO / "content-loop" / "topics.json"


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = re.sub(r"-{2,}", "-", text)
    return text.strip("-")


def seed_blog_variants(topic: dict) -> List[dict]:
    title = topic.get("title") or "Untitled"
    cluster = topic.get("cluster") or "general"
    intent = topic.get("intent") or "guide"
    cta = topic.get("cta") or "services"

    seeds = [
        {
            "title": f"{title}: 2026 Playbook",
            "cluster": cluster,
            "intent": intent,
            "cta": cta,
        },
        {
            "title": f"How to implement {title} without disrupting operations",
            "cluster": cluster,
            "intent": "guide",
            "cta": "contact",
        },
        {
            "title": f"{title}: costs, ROI, and hidden risks",
            "cluster": cluster,
            "intent": "guide",
            "cta": "consultation",
        },
        {
            "title": f"Comparing {title}: vendors and build vs buy",
            "cluster": cluster,
            "intent": "comparison",
            "cta": "services",
        },
        {
            "title": f"{title} for {cluster} teams",
            "cluster": cluster,
            "intent": intent,
            "cta": cta,
        },
        {
            "title": f"Case study: {title} in production",
            "cluster": cluster,
            "intent": "case-study",
            "cta": "contact",
        },
        {
            "title": f"Common mistakes when rolling out {title}",
            "cluster": cluster,
            "intent": "guide",
            "cta": "consultation",
        },
        {
            "title": f"{title} checklist for IT and security leaders",
            "cluster": cluster,
            "intent": "checklist",
            "cta": "services",
        },
        {
            "title": f"Automation and scaling patterns for {title}",
            "cluster": cluster,
            "intent": "solution",
            "cta": "services",
        },
        {
            "title": f"{title}: policy, compliance, and vendor management",
            "cluster": cluster,
            "intent": "guide",
            "cta": "contact",
        },
    ]

    out: List[dict] = []
    for s in seeds:
        s["slug"] = slugify(s["title"])
        s["differentiation_hook"] = (
            topic.get("differentiation_hook") or "Execution-focused AI/IT playbook"
        )
        s["rationale"] = (
            topic.get("rationale") or "High-intent commercial content for buyers evaluating vendors"
        )
        out.append(s)
    return out


def _existing_slugs() -> set[str]:
    existing: set[str] = set()
    if TOPICS_FILE.exists():
        try:
            existing = {t["slug"] for t in json.loads(TOPICS_FILE.read_text(encoding="utf-8")) if "slug" in t}
        except Exception:
            pass
    blog_root = REPO / "app" / "blog"
    if blog_root.exists():
        for child in blog_root.iterdir():
            if child.is_dir() and (child / "page.tsx").exists():
                existing.add(child.name)
    return existing


def expand_topics(extra_per_seed: int = 6) -> List[dict]:
    if not TOPICS_FILE.exists():
        return []

    topics = json.loads(TOPICS_FILE.read_text(encoding="utf-8"))
    existing = _existing_slugs()
    seen = {t["slug"] for t in topics if "slug" in t}
    seen |= existing

    added: List[dict] = []
    for topic in topics:
        variants = seed_blog_variants(topic)
        chosen = []
        for v in variants:
            if v["slug"] not in seen and len(chosen) < max(1, extra_per_seed):
                chosen.append(v)

        for v in chosen:
            seen.add(v["slug"])
            added.append(v)

    merged = topics + added
    TOPICS_FILE.write_text(json.dumps(merged, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return added
