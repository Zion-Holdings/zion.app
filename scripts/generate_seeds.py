#!/usr/bin/env python3
"""Batch seed generator for exponential content growth."""

import json
from pathlib import Path

SEED_TEMPLATES = [
    "How to {verb} {topic} in {year}: {angle}",
    "Why {topic} matters for {audience} in {year}",
    "{topic} vs {alternative}: which should {audience} choose",
    "The real cost of ignoring {topic} for {audience}",
    "{audience} guide to {topic}: from {start} to {end}",
]

TOPICS = [
    ("evaluate", "AI managed services", "small businesses", "2026", "a practical checklist"),
    ("cut", "cloud costs", "startups", "2026", "without breaking performance"),
    ("choose", "Micro-SaaS tools", "SMBs", "2026", "ROI-first"),
    ("build", "a cybersecurity roadmap", "healthcare IT teams", "2026", "compliance-first"),
    ("measure", "IT support automation ROI", "ops leaders", "2026", "with real data"),
]

AUDIENCES = ["CTOs", "IT directors", "ops leaders", "founders", "small business owners"]
ALTERNATIVES = ["building in-house", "outsourcing", "legacy vendors", "manual processes"]


def generate_seeds(count=20):
    seeds = []
    for i in range(count):
        template = SEED_TEMPLATES[i % len(SEED_TEMPLATES)]
        topic_base = TOPICS[i % len(TOPICS)]
        verb, topic, audience, year, angle = topic_base
        alternative = ALTERNATIVES[i % len(ALTERNATIVES)]
        start = "zero"
        end = "production"
        seed = template.format(
            verb=verb,
            topic=topic,
            audience=audience,
            year=year,
            angle=angle,
            alternative=alternative,
            start=start,
            end=end,
        )
        seeds.append(seed)
    return seeds


def main():
    repo_root = Path(__file__).resolve().parents[1]
    queue_path = repo_root / "content" / "queue.md"
    seeds = generate_seeds(20)
    lines = ["# Content Queue — GitHub Pages Loop\n", "## Seed Queue\n"]
    for idx, seed in enumerate(seeds, 1):
        lines.append(f"{idx}. {seed}\n")
    queue_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {len(seeds)} seeds to {queue_path}")


if __name__ == "__main__":
    main()
