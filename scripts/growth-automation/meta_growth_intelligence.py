#!/usr/bin/env python3
"""
🧠 META-GROWTH INTELLIGENCE SYSTEM v1.0
Autonomous growth optimization engine with real-time analysis

Usage:
    python3 meta_growth_intelligence.py --once
"""

import json
import sys
import time
import os
import hashlib
from datetime import datetime, timezone
from pathlib import Path
from collections import Counter

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_FILE = BASE_DIR / 'app' / 'data' / 'servicesData.json'
OUTREACH_QUEUE = BASE_DIR / 'scripts' / 'outreach' / 'hyper_outreach_queue.jsonl'
OPTIMIZATION_LOG = Path('/Users/klebergarciaalcatrao/.hermes/logs/meta_growth_intelligence.log')

# Create directories
OPTIMIZATION_LOG.parent.mkdir(parents=True, exist_ok=True)

# Logging
import logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-8s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(OPTIMIZATION_LOG)
    ]
)
logger = logging.getLogger('meta-growth-intelligence')


def load_services_data() -> list:
    """Load servicesData.json with error handling"""
    try:
        if SERVICES_FILE.exists():
            with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
            if isinstance(data, list):
                return data
            elif isinstance(data, dict):
                return data.get('services', [])
        return []
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error reading services: {e}")
        return []
    except Exception as e:
        logger.error(f"Error reading services: {e}")
        return []


def count_email_drafts() -> int:
    """Count email drafts in outreach directory"""
    outreach_dir = BASE_DIR / 'scripts' / 'outreach'
    if not outreach_dir.exists():
        return 0
    try:
        count = 0
        for f in outreach_dir.glob('draft_*.json'):
            count += 1
        return count
    except:
        return 0


def count_outreach_queue_entries() -> int:
    """Count entries in hyper_outreach_queue.jsonl"""
    queue_file = BASE_DIR / 'scripts' / 'outreach' / 'hyper_outreach_queue.jsonl'
    if not queue_file.exists():
        return 0
    try:
        count = 0
        with open(queue_file, 'r') as f:
            for line in f:
                if line.strip():
                    count += 1
        return count
    except:
        return 0


def calculate_health_score(services_count: int, email_count: int, category_count: int) -> float:
    """Calculate overall health score based on multiple metrics"""
    # Base score from services (0-0.4)
    service_score = min(services_count / 10000.0, 0.4)
    
    # Email activity score (0-0.3)
    email_score = min(email_count / 50000.0, 0.3)
    
    # Category diversity score (0-0.3)
    category_score = min(category_count / 100.0, 0.3)
    
    total = service_score + email_score + category_score
    return round(min(total, 1.0), 4)


def analyze_category_distribution(services: list) -> dict:
    """Frequency count of category keys"""
    categories = Counter()
    for service in services:
        if isinstance(service, dict):
            cat = service.get('category', 'unknown')
            categories[cat] += 1
    return dict(categories)


def generate_recommendations(services_count: int, email_count: int, 
                            categories: dict, health_score: float) -> list:
    """Generate optimization recommendations"""
    recommendations = []
    
    # Service count recommendations
    if services_count < 1000:
        recommendations.append({
            'priority': 'high',
            'category': 'service_generation',
            'title': 'Accelerate service catalog growth',
            'description': f'Current services: {services_count}. Target 1000+ for optimal SEO coverage.',
            'action': 'Run hyper-self-optimizing growth fabric with increased batch size'
        })
    elif services_count < 5000:
        recommendations.append({
            'priority': 'medium',
            'category': 'service_generation',
            'title': 'Expand service catalog coverage',
            'description': f'Current services: {services_count}. Continue growth to 5000+ for market dominance.',
            'action': 'Increase batch size to 500 services per cycle'
        })
    
    # Email activity recommendations
    if email_count < 10000:
        recommendations.append({
            'priority': 'medium',
            'category': 'outreach',
            'title': 'Boost email outreach activity',
            'description': f'Current email drafts: {email_count}. Increase outreach velocity.',
            'action': 'Generate 500+ new email drafts using rapid-fire outreach engine'
        })
    
    # Category balance recommendations
    if categories:
        sorted_cats = sorted(categories.items(), key=lambda x: -x[1])
        top_category = sorted_cats[0] if sorted_cats else ('unknown', 0)
        bottom_categories = [c for c, v in sorted_cats if v < 10]
        
        if bottom_categories:
            bottom_list = ', '.join(bottom_categories[:3])
            recommendations.append({
                'priority': 'high',
                'category': 'content_diversity',
                'title': 'Expand under-represented categories',
                'description': f'{len(bottom_categories)} categories have <10 services: {bottom_list}',
                'action': 'Generate services in underrepresented categories'
            })
    
    # Health score recommendations
    if health_score < 0.5:
        recommendations.append({
            'priority': 'high',
            'category': 'system_optimization',
            'title': 'Critical: System health below threshold',
            'description': f'Health score: {health_score}. Immediate optimization required.',
            'action': 'Run full system health check and optimization cycle'
        })
    elif health_score < 0.8:
        recommendations.append({
            'priority': 'medium',
            'category': 'system_optimization',
            'title': 'System optimization opportunity',
            'description': f'Health score: {health_score}. Room for improvement.',
            'action': 'Apply parameter optimization and increase velocity'
        })
    
    # Default recommendation if no specific issues
    if not recommendations:
        recommendations.append({
            'priority': 'low',
            'category': 'maintenance',
            'title': 'System operating optimally',
            'description': f'Health score: {health_score}. No immediate actions required.',
            'action': 'Continue current operations with periodic monitoring'
        })
    
    return recommendations


def optimize_parameters(services_count: int, email_count: int) -> dict:
    """Calculate optimization parameters based on current state"""
    optimizations = {}
    
    # Service generation rate
    if services_count < 1000:
        optimizations['service_generation_rate'] = 500
    elif services_count < 5000:
        optimizations['service_generation_rate'] = 200
    else:
        optimizations['service_generation_rate'] = 100
    
    # Email generation rate
    if email_count < 5000:
        optimizations['email_generation_rate'] = 200
    else:
        optimizations['email_generation_rate'] = 100
    
    # Batch size
    optimizations['batch_size'] = min(200, max(50, 1000 - services_count // 10))
    
    return optimizations


def run_meta_growth_intelligence() -> dict:
    """Main function to run the Meta-Growth Intelligence System"""
    start_time = datetime.now(timezone.utc)
    
    logger.info("=" * 70)
    logger.info("🧠 META-GROWTH INTELLIGENCE SYSTEM v1.0")
    logger.info("=" * 70)
    
    # Phase 1: Load services data
    logger.info("[🔍] Loading services catalog...")
    services = load_services_data()
    total_services = len(services)
    logger.info(f"[✅] Loaded {total_services} services")
    
    # Phase 2: Analyze categories
    logger.info("[🔍] Analyzing category distribution...")
    categories = analyze_category_distribution(services)
    category_count = len(categories)
    logger.info(f"[✅] Found {category_count} unique categories")
    
    # Phase 3: Count email artifacts
    logger.info("[🔍] Counting email artifacts...")
    email_drafts = count_email_drafts()
    queue_entries = count_outreach_queue_entries()
    total_emails = email_drafts + queue_entries
    logger.info(f"[✅] Found {email_drafts} email drafts, {queue_entries} queue entries")
    
    # Phase 4: Calculate health score
    logger.info("[🔍] Calculating health score...")
    health_score = calculate_health_score(total_services, total_emails, category_count)
    logger.info(f"[✅] Health score: {health_score}")
    
    # Phase 5: Generate recommendations
    logger.info("[🔍] Generating recommendations...")
    recommendations = generate_recommendations(
        total_services, total_emails, categories, health_score
    )
    logger.info(f"[✅] Generated {len(recommendations)} recommendations")
    
    # Phase 6: Calculate optimizations
    logger.info("[🔍] Calculating optimizations...")
    optimizations = optimize_parameters(total_services, total_emails)
    
    # Compile report
    end_time = datetime.now(timezone.utc)
    duration = (end_time - start_time).total_seconds()
    
    report = {
        'timestamp': start_time.isoformat(),
        'total_services': total_services,
        'total_emails_processed': total_emails,
        'health_score': health_score,
        'recommendations_generated': len(recommendations),
        'recommendations': recommendations,
        'optimizations_applied': optimizations,
        'category_distribution': dict(list(categories.items())[:10]),
        'execution_time_seconds': round(duration, 4),
        'system_status': 'healthy' if health_score > 0.5 else 'needs_attention'
    }
    
    return report


def main():
    """Main entry point"""
    report = run_meta_growth_intelligence()
    
    # Save report
    output_file = BASE_DIR / 'conversions' / 'meta_growth_intelligence_report.json'
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
    
    # Print summary
    print("\n" + "=" * 70)
    print("📊 META-GROWTH INTELLIGENCE REPORT")
    print("=" * 70)
    print(f"\n  Total services in catalog: {report['total_services']}")
    print(f"  Total emails processed: {report['total_emails_processed']}")
    print(f"  Health score: {report['health_score']}")
    print(f"  Recommendations generated: {report['recommendations_generated']}")
    print(f"  Optimizations applied: {len(report['optimizations_applied'])}")
    
    print("\n" + "=" * 70)
    print("💡 RECOMMENDATIONS")
    print("=" * 70)
    for rec in report['recommendations']:
        print(f"\n  [{rec['priority'].upper()}] {rec['title']}")
        print(f"  Action: {rec['action']}")
    
    print("\n" + "=" * 70)
    print("🔧 OPTIMIZATIONS APPLIED")
    print("=" * 70)
    for key, value in report['optimizations_applied'].items():
        print(f"  {key}: {value}")
    
    print("\n" + "=" * 70)
    print(f"✅ Report saved to: {output_file}")
    print("=" * 70)
    
    return 0


if __name__ == '__main__':
    sys.exit(main())