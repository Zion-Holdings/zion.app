#!/usr/bin/env python3
"""
META-GROWTH INTELLIGENCE SYSTEM
Self-optimizing growth intelligence for analyzing and tuning growth automation systems
Version 2.0 - Comprehensive metrics analysis and real-time optimization
"""

import json
import sys
import argparse
from pathlib import Path
from datetime import datetime, timezone
from collections import Counter

# Configuration
BASE = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE / 'app' / 'data' / 'servicesData.json'
GROWTH_METRICS_FILE = BASE / 'outreach_monitor' / 'processed' / 'growth_metrics.json'
SENT_EMAILS_FILE = BASE / 'outreach_monitor' / 'processed' / 'hyper_velocity_outreach_sent.jsonl'
OUTPUT_FILE = BASE / 'outreach_monitor' / 'processed' / 'meta_growth_intelligence.log'
STATE_FILE = BASE / 'outreach_monitor' / 'processed' / 'meta_growth_state.json'

def load_services():
    """Load services from JSON file."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            content = f.read()
        # Handle terminal prefix corruption
        if content.startswith('1|'):
            content = content[2:]
        data = json.loads(content)
        
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        else:
            return []
    except Exception as e:
        print(f"Error loading services: {e}", file=sys.stderr)
        return []

def load_growth_metrics():
    """Load growth metrics from JSON file."""
    try:
        with open(GROWTH_METRICS_FILE, 'r') as f:
            content = f.read()
        if content.startswith('1|'):
            content = content[2:]
        return json.loads(content)
    except Exception as e:
        print(f"Error loading growth metrics: {e}", file=sys.stderr)
        return {}

def count_sent_emails():
    """Count sent emails from JSONL file."""
    try:
        if SENT_EMAILS_FILE.exists():
            with open(SENT_EMAILS_FILE, 'r') as f:
                return sum(1 for line in f if line.strip())
        return 0
    except Exception as e:
        print(f"Error counting emails: {e}", file=sys.stderr)
        return 0

def calculate_health_score(metrics, services_count, email_count):
    """Calculate system health score (0-100)."""
    score = 100
    
    # Deduct for low service count
    if services_count < 100:
        score -= 20
    elif services_count < 500:
        score -= 10
    
    # Deduct for very high email volume (potential saturation)
    if email_count > 50000:
        score -= 15
    elif email_count > 10000:
        score -= 5
    
    # Deduct for missing metrics
    if not metrics:
        score -= 20
    
    return max(0, min(100, score))

def generate_recommendations(services_count, email_count, metrics):
    """Generate optimization recommendations."""
    recommendations = []
    
    # Service expansion
    if services_count < 500:
        recommendations.append("Increase service count - expand catalog for better growth")
    
    # Email optimization
    if email_count > 50000:
        recommendations.append("Optimize email outreach frequency - high volume detected")
    elif email_count > 10000:
        recommendations.append("Monitor email saturation - consider cooldown periods")
    
    # Worker scaling
    if services_count > 1000:
        recommendations.append("Scale workers to handle 4500+ services")
    
    # Category balance
    if services_count > 0:
        services = load_services()
        categories = Counter(s.get('category', 'unknown') for s in services)
        if len(categories) < 10:
            recommendations.append("Balance AI/IT service distribution - need more categories")
    
    # Default recommendation if none generated
    if not recommendations:
        recommendations.append("System operating optimally")
    
    return recommendations

def run_meta_growth_intelligence():
    """Main analysis function."""
    # Load data
    services = load_services()
    total_services = len(services)
    
    metrics = load_growth_metrics()
    email_metrics = metrics.get('email_metrics', {})
    emails_processed = email_metrics.get('emails_sent', 0)
    
    # Fallback to counting sent emails if metrics not available
    if emails_processed == 0:
        emails_processed = count_sent_emails()
    
    # Calculate health score
    health_score = calculate_health_score(metrics, total_services, emails_processed)
    
    # Generate recommendations
    recommendations = generate_recommendations(total_services, emails_processed, metrics)
    
    # Build report
    report = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'total_services': total_services,
        'total_emails_processed': emails_processed,
        'health_score': health_score,
        'recommendations_generated': len(recommendations),
        'recommendations': recommendations,
        'optimizations_applied': 0,  # Read-only analysis mode with --once
        'metrics': {
            'services_by_category': dict(Counter(s.get('category', 'unknown') for s in services)),
            'services_by_industry': metrics.get('services_by_industry', {})
        },
        'system_health': 'healthy' if health_score >= 80 else 'degraded' if health_score >= 50 else 'critical'
    }
    
    return report

def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Meta-Growth Intelligence System')
    parser.add_argument('--once', action='store_true', help='Run single analysis and exit')
    parser.add_argument('--interval', type=int, default=300, help='Interval between runs in seconds')
    args = parser.parse_args()
    
    if not args.once:
        print("Error: --once flag is required for cron execution", file=sys.stderr)
        print("Usage: python3 meta_growth_intelligence.py --once", file=sys.stderr)
        return 1
    
    # Run analysis
    report = run_meta_growth_intelligence()
    
    # Output JSON for programmatic use
    print(json.dumps(report, indent=2))
    
    return 0

if __name__ == '__main__':
    sys.exit(main())