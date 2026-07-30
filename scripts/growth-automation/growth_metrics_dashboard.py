#!/usr/bin/env python3
"""
Growth Metrics Dashboard for Zion Tech Group.
Captures real-time analytics on service discovery, outreach, and landing page generation.
"""

import json
import sys
import re
from pathlib import Path
from collections import Counter
from datetime import datetime, timezone

# Configuration
SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')
EMAIL_DRAFTS_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io/email_drafts')
SENT_EMAILS_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_sent.jsonl')
SERVICES_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/services')
OUTPUT_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/growth_metrics.json')
START_TIME = datetime(2026, 7, 24, tzinfo=timezone.utc)


def load_services():
    """Load services from JSON file with corruption handling."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            content = f.read()
        
        # Handle potential terminal prefix corruption (e.g., "1|")
        if content.startswith('1|'):
            content = content[2:]
        
        data = json.loads(content)
        
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        else:
            return []
    except json.JSONDecodeError as e:
        print(f"[ERROR] JSON decode error: {e}", file=sys.stderr)
        return []
    except FileNotFoundError:
        print(f"[ERROR] Services file not found: {SERVICES_FILE}", file=sys.stderr)
        return []


def count_email_drafts():
    """Count email draft files."""
    try:
        if EMAIL_DRAFTS_DIR.exists():
            drafts_count = len(list(EMAIL_DRAFTS_DIR.glob('*_draft.txt')))
            return drafts_count
        return 0
    except Exception as e:
        print(f"[ERROR] Counting email drafts: {e}", file=sys.stderr)
        return 0


def count_sent_emails():
    """Count sent emails from JSONL file."""
    try:
        if SENT_EMAILS_FILE.exists():
            with open(SENT_EMAILS_FILE, 'r') as f:
                count = sum(1 for line in f if line.strip())
            return count
        return 0
    except Exception as e:
        print(f"[ERROR] Counting sent emails: {e}", file=sys.stderr)
        return 0


def count_landing_pages():
    """Count landing page directories."""
    try:
        if SERVICES_DIR.exists():
            count = len([d for d in SERVICES_DIR.iterdir() if d.is_dir()])
            return count
        return 0
    except Exception as e:
        print(f"[ERROR] Counting landing pages: {e}", file=sys.stderr)
        return 0


def calculate_growth_velocity(total_services):
    """Calculate growth velocity metrics."""
    now = datetime.now(timezone.utc)
    elapsed_min = max(1, (now - START_TIME).total_seconds() / 60)
    growth_rate = total_services / elapsed_min
    
    return {
        'services_per_minute': round(growth_rate, 2),
        'services_per_hour': round(growth_rate * 60, 2),
        'services_per_day': round(growth_rate * 60 * 24, 2)
    }


def generate_report():
    """Generate the growth metrics report."""
    print("=" * 60)
    print("📊 ZION TECH GROUP - GROWTH METRICS DASHBOARD")
    print("=" * 60)
    
    # Load services
    services = load_services()
    total_services = len(services)
    
    # Categories
    categories = dict(Counter(s.get('category', 'unknown') for s in services))
    categories = dict(sorted(categories.items(), key=lambda x: -x[1]))
    
    # Industries
    industries = dict(Counter(s.get('industry', 'unknown') for s in services))
    industries = dict(sorted(industries.items(), key=lambda x: -x[1]))
    
    # Email metrics
    drafts_count = count_email_drafts()
    sent_count = count_sent_emails()
    
    # Landing pages
    landing_pages = count_landing_pages()
    
    # Growth velocity
    growth_velocity = calculate_growth_velocity(total_services)
    
    # Timestamp
    timestamp = datetime.now(timezone.utc).isoformat()
    
    # Build report
    report = {
        'timestamp': timestamp,
        'total_services': total_services,
        'services_by_category': categories,
        'services_by_industry': industries,
        'email_metrics': {
            'drafts_generated': drafts_count,
            'emails_sent': sent_count
        },
        'page_metrics': {
            'landing_pages_generated': landing_pages
        },
        'growth_velocity': growth_velocity
    }
    
    # Console output
    print(f"Timestamp: {timestamp}")
    print()
    print(f"🚀 TOTAL SERVICES: {total_services:,}")
    print(f"⚡ Growth Rate: {growth_velocity['services_per_minute']} services/min")
    print(f"📧 Emails Generated: {drafts_count:,}")
    print(f"📄 Landing Pages: {landing_pages:,}")
    print()
    print("📈 TOP CATEGORIES:")
    for cat, count in list(categories.items())[:5]:
        print(f"  {cat}: {count:,}")
    print("=" * 60)
    
    return report


def save_report(report):
    """Save report to JSON file."""
    try:
        OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(OUTPUT_FILE, 'w') as f:
            json.dump(report, f, indent=2)
        return True
    except Exception as e:
        print(f"[ERROR] Failed to save report: {e}", file=sys.stderr)
        return False


def main():
    """Main entry point."""
    if '--once' in sys.argv:
        # Run single cycle
        report = generate_report()
        
        if save_report(report):
            print(f"[✅] Report saved to: {OUTPUT_FILE}")
        
        return 0
    else:
        # Run continuously at interval
        import time
        import signal
        running = True
        
        def signal_handler(signum, frame):
            nonlocal running
            print(f"Received signal {signum}, shutting down...")
            running = False
        
        signal.signal(signal.SIGTERM, signal_handler)
        signal.signal(signal.SIGINT, signal_handler)
        
        while running:
            report = generate_report()
            save_report(report)
            print("Waiting 5 minutes until next cycle...")
            time.sleep(300)
        
        print("Growth metrics dashboard stopped")
        return 0


if __name__ == '__main__':
    sys.exit(main())