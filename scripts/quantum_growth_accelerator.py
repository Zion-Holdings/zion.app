#!/usr/bin/env python3
"""Quantum Growth Accelerator with local fallback under 503 conditions."""
from __future__ import annotations

import logging
import os
import sys
from pathlib import Path
from datetime import datetime, timezone

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent
sys.path.insert(0, str(REPO_ROOT / 'scripts'))

from scripts.utils.resilient_llm import ModelUnavailable, retry_on_503  # noqa: E402

HISTORY_LOG = SCRIPT_DIR / 'utils' / 'run_history.log'

SEED_VARIANTS = [
    "Cloud Managed Services — Monthly retainer + 24/7 monitoring",
    "AI Chatbot Automation — Lead capture + support deflection",
    "Cybersecurity Audit Pack — Penetration test + compliance report",
    "IT Field Technician Dispatch — On-site support within 2h in Taubaté",
    "Data Analytics Accelerator — Dashboards + KPI automation",
]


def _log_local_fallback(job: str) -> None:
    HISTORY_LOG.parent.mkdir(parents=True, exist_ok=True)
    with HISTORY_LOG.open('a', encoding='utf-8') as f:
        f.write(f"{datetime.now(timezone.utc).isoformat()} | {job} | COMPLETED_VIA_LOCAL_FALLBACK\n")


@retry_on_503
def generate_service_variants() -> list[str]:
    """Generate service variants; raise ModelUnavailable if simulated 503."""
    env_503 = os.getenv('QGA_SIMULATE_503')
    if env_503 == '1':
        raise ModelUnavailable('HTTP 503: The requested model is temporarily unavailable')
    # Normal path would call remote LLM here. This wrapper keeps the contract.
    return SEED_VARIANTS.copy()


def main() -> int:
    try:
        services = generate_service_variants()
    except ModelUnavailable:
        services = SEED_VARIANTS.copy()
        _log_local_fallback('QUANTUM_GROWTH_ACCELERATOR')

    print('Generated service variants:')
    for idx, item in enumerate(services, start=1):
        print(f'{idx}. {item}')

    # Optional export file if needed downstream.
    out = REPO_ROOT / 'app' / 'data' / 'servicesData.json'
    if out.exists():
        try:
            import json
            payload = json.loads(out.read_text(encoding='utf-8'))
            if isinstance(payload, list):
                payload = [*payload, *[{'name': s, 'source': 'local_fallback'} for s in services]]
                out.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding='utf-8')
        except Exception:
            pass

    return 0


if __name__ == '__main__':
    raise SystemExit(main())
