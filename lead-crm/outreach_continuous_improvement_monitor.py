#!/usr/bin/env python3
"""
Zion Outreach Continuous Improvement Monitor - Termux-safe.
Reads lead-crm/pipeline_log.json and lead-crm/all-leads.json.
Produces metrics and recommended actions.
"""
import json, collections, datetime, pathlib, sys
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'
LOG = LEAD_DIR / 'pipeline_log.json'
MINER_LOG = LEAD_DIR / 'web_prospecting_log.json'
ALL_LEADS = LEAD_DIR / 'all-leads.json'


def load_json(path: Path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default


def summarize():
    log = load_json(LOG, [])
    if not isinstance(log, list):
        log = [log]
    miner = load_json(MINER_LOG, [])
    if not isinstance(miner, list):
        miner = [miner]
    leads = load_json(ALL_LEADS, [])
    status_counts = collections.Counter()
    for item in leads:
        status_counts[str(item.get('status', 'unknown')).lower()] += 1

    recent_tail = log[-200:]
    event_counts = collections.Counter(x.get('event') for x in recent_tail)
    successes_last20 = sum(1 for x in log[-200:] if x.get('event') == 'pipeline_tick' and x.get('sent', 0) > 0)
    rate_limit_events_last100 = sum(1 for x in log[-100:] if x.get('event') in ('hot_followup_failed', 'send_skipped', 'loop_cooldown') or '429' in str(x.get('error', '')))
    prospect_ticks = sum(1 for x in miner[-100:] if x.get('event') == 'prospecting_tick')
    total_new_leads_miner = sum(x.get('new_leads_added', 0) for x in miner[-100:] if x.get('event') == 'prospecting_tick')

    metric = {
        'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
        'allLeadsTotal': len(leads),
        'allLeadsStatus': dict(status_counts),
        'recentEvents': dict(event_counts),
        'successfulTicksLast20': successes_last20,
        'rateLimitEventsLast100': rate_limit_events_last100,
        'miningTicksLast100': prospect_ticks,
        'newLeadsFromMiningLast100': total_new_leads_miner,
        'recommendedSource': 'offline_send_ready' if int(rate_limit_events_last100 or 0) >= 5 else 'live_send',
        'recommendedActions': []
    }
    if int(rate_limit_events_last100 or 0) >= 5:
        metric['recommendedActions'].append('Pause live Gmail sends until rate-limit cooldown clears.')
    if int(total_new_leads_miner or 0) == 0 and status_counts.get('discovered', 0) < 10:
        metric['recommendedActions'].append('Run web_prospecting.py to increase discovered leads.')
    if successes_last20 == 0:
        metric['recommendedActions'].append('Verify send path, batch discovery, and sender headers.')
    return metric


if __name__ == '__main__':
    print(json.dumps(summarize(), ensure_ascii=False))
