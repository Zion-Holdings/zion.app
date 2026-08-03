#!/usr/bin/env python3
"""Topic backlog expander: turns 1 topic into multiple related SEO angles."""
from __future__ import annotations

import json
import re
from pathlib import Path

BASE = Path('content-loop')
TOPICS_PATH = BASE / 'topics.json'
OUT_PATH = BASE / 'new-topics-backlog.json'


def clean_text(text: str) -> str:
    text = text.strip()
    text = re.sub(r'\s+', ' ', text)
    return text


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"\s+", "-", text).strip("-")
    return text


def generate_angles(topic: dict) -> list[dict]:
    title = topic.get('title', '')
    cluster = topic.get('cluster', 'general')
    base_slug = topic.get('slug') or slugify(title)
    base_title = clean_text(title)

    templates = [
        f"{base_title}: 2026 Playbook",
        f"How to implement {base_title} without disrupting operations",
        f"{base_title}: costs, ROI, and hidden risks",
        f"Comparing {base_title} vendors and build vs buy",
        f"{base_title} for {cluster.replace('_',' ').title()} teams",
        f"Case study: {base_title} in production",
        f"Common mistakes when rolling out {base_title}",
        f"{base_title} checklist for IT and security leaders",
        f"Automation and scaling patterns for {base_title}",
        f"{base_title}: policy, compliance, and vendor management",
    ]

    angles = []
    for idx, title_text in enumerate(templates, start=1):
        suffix = f"-{idx}" if idx > 1 else ""
        angles.append({
            'title': clean_text(title_text),
            'slug': f"{base_slug}{suffix}",
            'cluster': cluster,
            'intent': topic.get('intent', 'guide'),
            'cta': topic.get('cta', 'services'),
            'differentiation_hook': topic.get('differentiation_hook', ''),
            'rationale': topic.get('rationale', ''),
        })

    return angles


def main() -> int:
    topics = json.loads(TOPICS_PATH.read_text(encoding='utf-8')) if TOPICS_PATH.exists() else []
    if not topics:
        print('no_topics')
        return 0

    existing = {t['slug'] for t in topics if 'slug' in t}
    new_angles = []

    for topic in topics:
        new_angles.extend(generate_angles(topic))

    # Dedupe by slug after expansion
    seen = set(existing)
    deduped = []
    for angle in new_angles:
        base = angle['slug']
        if base not in seen:
            seen.add(base)
            deduped.append(angle)

    OUT_PATH.write_text(json.dumps(deduped, indent=2) + '\n', encoding='utf-8')
    print(f'generated={len(deduped)} source_topics={len(topics)} output={OUT_PATH}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
