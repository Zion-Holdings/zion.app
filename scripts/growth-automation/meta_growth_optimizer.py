#!/usr/bin/env python3
"""
META-GROWTH OPTIMIZER - Zion Tech Group
Analyzes all growth systems and optimizes for maximum velocity.
Version 2.0 - Enhanced with comprehensive metrics analysis
"""

import json
import sys
import re
from pathlib import Path
from datetime import datetime, timezone
from collections import Counter

# Configuration
SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-repo/app/data/servicesData.json')
SENT_EMAILS_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/hyper_velocity_outreach_sent.jsonl')
METRICS_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/growth_metrics.json')
LOG_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/meta_growth_optimizer.log')

def setup_logging():
    """Setup logging to file and stdout."""
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    import logging
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)-7s] %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        handlers=[
            logging.StreamHandler(sys.stdout),
            logging.FileHandler(LOG_FILE)
        ]
    )
    return logging.getLogger('meta-growth-optimizer')

logger = setup_logging()

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
        logger.error(f"JSON decode error: {e}")
        return []
    except FileNotFoundError:
        logger.warning(f"Services file not found: {SERVICES_FILE}")
        return []

def count_sent_emails():
    """Count sent emails from JSONL file."""
    try:
        if SENT_EMAILS_FILE.exists():
            with open(SENT_EMAILS_FILE, 'r') as f:
                count = sum(1 for line in f if line.strip())
            return count
        return 0
    except Exception as e:
        logger.warning(f"Counting sent emails: {e}")
        return 0

def get_email_metrics():
    """Extract email metrics from JSONL file."""
    try:
        if not SENT_EMAILS_FILE.exists():
            return {'total': 0, 'unique_prospects': 0, 'prospects': []}
        
        emails = []
        with open(SENT_EMAILS_FILE, 'r') as f:
            for line in f:
                if line.strip():
                    try:
                        email = json.loads(line)
                        emails.append(email)
                    except:
                        pass
        
        # Count unique prospects
        unique_emails = set()
        for e in emails:
            if 'prospect' in e:
                unique_emails.add(e['prospect'].get('email', ''))
        
        return {
            'total': len(emails),
            'unique_prospects': len(unique_emails),
            'prospects': emails[-10:] if emails else []  # Last 10 for inspection
        }
    except Exception as e:
        logger.warning(f"Getting email metrics: {e}")
        return {'total': 0, 'unique_prospects': 0, 'prospects': []}

def load_growth_metrics():
    """Load existing growth metrics if available."""
    try:
        if METRICS_FILE.exists():
            with open(METRICS_FILE, 'r') as f:
                return json.load(f)
    except:
        pass
    return None

def analyze_bottlenecks(services, email_metrics):
    """Analyze bottlenecks in the growth pipeline."""
    bottlenecks = []
    
    # Service count analysis
    if len(services) < 100:
        bottlenecks.append("Low service count - need more services for growth")
    
    # Email saturation analysis
    if email_metrics['total'] > 0:
        emails_per_prospect = email_metrics['total'] / max(1, email_metrics['unique_prospects'])
        if emails_per_prospect > 50:
            bottlenecks.append(f"Email saturation - {emails_per_prospect:.0f} emails per prospect (target: <50)")
    
    # Prospect engagement analysis
    if email_metrics['total'] > 0 and email_metrics['unique_prospects'] == 0:
        bottlenecks.append("No unique prospects identified - need better prospect targeting")
    
    # Service category distribution
    categories = Counter(s.get('category', 'unknown') for s in services)
    if len(categories) < 5:
        bottlenecks.append("Limited service categories - need diversification")
    
    return bottlenecks

def generate_recommendations(services, email_metrics, bottlenecks):
    """Generate optimization recommendations based on analysis."""
    recommendations = []
    
    # Service expansion recommendations
    categories = Counter(s.get('category', 'unknown') for s in services)
    if len(categories) < 10:
        recommendations.append("Increase service category diversity")
    
    # Email outreach recommendations
    if email_metrics['total'] > 0:
        emails_per_prospect = email_metrics['total'] / max(1, email_metrics['unique_prospects'])
        if emails_per_prospect > 30:
            recommendations.append("Reduce email saturation - implement prospect rotation")
    
    # Pipeline optimization
    if "No unique prospects identified" in str(bottlenecks):
        recommendations.append("Activate lead generation pipeline")
        recommendations.append("Implement prospect enrichment")
    
    # Quality recommendations
    if len(services) > 100:
        recommendations.append("Implement service quality scoring")
        recommendations.append("Add customer validation metrics")
    
    return recommendations

def run_meta_growth_optimizer():
    """Main optimization function."""
    logger.info("=" * 60)
    logger.info("🧠 META-GROWTH OPTIMIZER v2.0")
    logger.info("=" * 60)
    
    # Load services
    services = load_services()
    total_services = len(services)
    logger.info(f"\n📊 CURRENT STATUS:")
    logger.info(f"   Total Services: {total_services}")
    
    # Get email metrics
    email_metrics = get_email_metrics()
    logger.info(f"   Emails Sent: {email_metrics['total']}")
    logger.info(f"   Unique Prospects: {email_metrics['unique_prospects']}")
    
    # Calculate cycles (approximate based on service count)
    cycles = max(1, total_services // 150)  # Assume ~150 services per cycle
    velocity_score = total_services * 10  # Simple velocity metric
    logger.info(f"   Cycles Run: {cycles}")
    logger.info(f"   Velocity Score: {velocity_score}")
    
    # Analyze categories
    categories = dict(Counter(s.get('category', 'unknown') for s in services))
    categories = dict(sorted(categories.items(), key=lambda x: -x[1]))
    
    logger.info(f"\n📈 TOP CATEGORIES:")
    for cat, count in list(categories.items())[:5]:
        logger.info(f"   {cat}: {count}")
    
    # Analyze bottlenecks
    bottlenecks = analyze_bottlenecks(services, email_metrics)
    
    logger.info(f"\n⚠️ BOTTLENECKS DETECTED:")
    if bottlenecks:
        for b in bottlenecks:
            logger.info(f"   ⚠️ {b}")
    else:
        logger.info("   ✅ No major bottlenecks detected")
    
    # Generate recommendations
    recommendations = generate_recommendations(services, email_metrics, bottlenecks)
    
    logger.info(f"\n✅ OPTIMIZATION RECOMMENDATIONS:")
    if recommendations:
        for r in recommendations:
            logger.info(f"   ✅ {r}")
    else:
        logger.info("   ✅ System operating optimally")
    
    # Build report
    report = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'total_services': total_services,
        'cycles_run': cycles,
        'velocity_score': velocity_score,
        'email_metrics': {
            'emails_sent': email_metrics['total'],
            'unique_prospects': email_metrics['unique_prospects'],
            'emails_per_prospect': round(email_metrics['total'] / max(1, email_metrics['unique_prospects']), 2) if email_metrics['unique_prospects'] > 0 else 0
        },
        'services_by_category': categories,
        'bottlenecks': bottlenecks,
        'recommendations': recommendations,
        'system_health': 'healthy' if len(bottlenecks) == 0 else 'degraded'
    }
    
    logger.info(f"\n[✅] Optimization analysis complete")
    logger.info(f"Next check: 10 minutes")
    
    return report

def main():
    """Main entry point."""
    report = run_meta_growth_optimizer()
    
    # Output JSON for programmatic use
    print(json.dumps(report, indent=2))
    
    return 0

if __name__ == '__main__':
    sys.exit(main())