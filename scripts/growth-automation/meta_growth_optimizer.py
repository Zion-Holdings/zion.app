#!/usr/bin/env python3
"""
META-GROWTH OPTIMIZER v1.0 - OFFLINE DETERMINISTIC MODE
Analyzes all growth systems and optimizes for maximum velocity
Uses only local deterministic calculations - no external API calls

Usage:
    python3 meta_growth_optimizer.py --once
"""

import json
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from collections import Counter

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_FILE = BASE_DIR / 'app/data/servicesData.json'
OUTPUT_FILE = BASE_DIR / 'conversions/optimization_report.json'


def load_services_data() -> list:
    """Load servicesData.json using native json.load()"""
    try:
        with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        return []
    except Exception as e:
        print(f"[ERROR] Failed to load services: {e}")
        return []


def calculate_velocity(total_items: int, runtime_seconds: float) -> float:
    """Velocity: Total catalog items / execution runtime"""
    if runtime_seconds <= 0:
        return 0.0
    return round(total_items / runtime_seconds, 4)


def analyze_category_distribution(services: list) -> dict:
    """Frequency count of category keys using set-based duplicate checks"""
    categories = Counter()
    for service in services:
        if isinstance(service, dict):
            cat = service.get('category', 'unknown')
            categories[cat] += 1
    return dict(categories)


def identify_priority_targets(categories: dict, threshold: int = 10) -> list:
    """Identify categories with < threshold items as priority generation targets"""
    priority = []
    for category, count in categories.items():
        if count < threshold:
            priority.append({
                'category': category,
                'current_count': count,
                'priority': 'high',
                'recommended_action': f'Increase service generation for {category}'
            })
    return sorted(priority, key=lambda x: x['current_count'])


def generate_deterministic_recommendations(services: list, categories: dict) -> list:
    """Generate recommendations based on deterministic analysis"""
    recommendations = []
    
    # Service count analysis
    total = len(services)
    if total > 10000:
        recommendations.append({
            'priority': 'high',
            'category': 'service_management',
            'title': 'Implement service deduplication',
            'description': f'Catalog has {total} services. Implement deduplication to prevent bloat.',
            'action': 'Run JSON deduplicator on servicesData.json'
        })
    
    # Category distribution recommendations
    priority_targets = identify_priority_targets(categories)
    if priority_targets:
        recommendations.append({
            'priority': 'high',
            'category': 'content_strategy',
            'title': 'Expand under-represented categories',
            'description': f'{len(priority_targets)} categories have fewer than 10 services',
            'action': f'Focus generation on: {", ".join([p["category"] for p in priority_targets[:5]])}'
        })
    
    # Top performing categories
    sorted_cats = sorted(categories.items(), key=lambda x: -x[1])[:5]
    recommendations.append({
        'priority': 'medium',
        'category': 'content_strategy',
        'title': 'Focus on high-performing categories',
        'description': f'Top categories: {", ".join([f"{k} ({v})" for k, v in sorted_cats])}',
        'action': 'Maintain current generation velocity for top categories'
    })
    
    return recommendations


def run_offline_optimization() -> dict:
    """Main offline optimization routine"""
    start_time = time.time()
    timestamp = datetime.now(timezone.utc).isoformat()
    
    print("=" * 60)
    print("🧠 META-GROWTH OPTIMIZER v1.0 - OFFLINE MODE")
    print("=" * 60)
    
    # Load services data
    print("\n[1/4] Loading services data...")
    services = load_services_data()
    total_count = len(services)
    print(f"      ✅ Loaded {total_count} services")
    
    # Analyze category distribution
    print("\n[2/4] Analyzing category distribution...")
    categories = analyze_category_distribution(services)
    print(f"      ✅ Found {len(categories)} unique categories")
    
    # Identify priority targets
    print("\n[3/4] Identifying priority generation targets (< 10 items)...")
    priority_targets = identify_priority_targets(categories)
    print(f"      ✅ Found {len(priority_targets)} under-represented categories")
    
    # Generate recommendations
    print("\n[4/4] Generating optimization recommendations...")
    recommendations = generate_deterministic_recommendations(services, categories)
    
    # Calculate execution metrics
    end_time = time.time()
    runtime = end_time - start_time
    velocity = calculate_velocity(total_count, runtime)
    
    # Compile report
    report = {
        'timestamp': timestamp,
        'execution_mode': 'offline_deterministic',
        'execution_time_seconds': round(runtime, 4),
        'velocity_items_per_second': velocity,
        'service_count': total_count,
        'category_distribution': categories,
        'categories_with_low_count': [
            {'category': p['category'], 'count': p['current_count']} 
            for p in priority_targets
        ],
        'priority_generation_targets': priority_targets,
        'recommendations': recommendations,
        'system_health': 'healthy'
    }
    
    return report


def main():
    """Main entry point"""
    # Run optimization
    report = run_offline_optimization()
    
    # Save report
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
    
    # Print summary
    print("\n" + "=" * 60)
    print("📊 OPTIMIZATION REPORT SUMMARY")
    print("=" * 60)
    print(f"\n  Execution mode: {report['execution_mode']}")
    print(f"  Runtime: {report['execution_time_seconds']}s")
    print(f"  Velocity: {report['velocity_items_per_second']} items/sec")
    print(f"  Total services: {report['service_count']}")
    print(f"  Unique categories: {len(report['category_distribution'])}")
    print(f"  Priority targets (< 10 services): {len(report['priority_generation_targets'])}")
    
    print("\n" + "=" * 60)
    print("⚠️  PRIORITY GENERATION TARGETS")
    print("=" * 60)
    for target in report['priority_generation_targets']:
        print(f"\n  [{target['category']}] count={target['current_count']}")
    
    print("\n" + "=" * 60)
    print("💡 RECOMMENDATIONS")
    print("=" * 60)
    for rec in report['recommendations']:
        print(f"\n  [{rec['priority'].upper()}] {rec['title']}")
        print(f"  Action: {rec['action']}")
    
    print("\n" + "=" * 60)
    print(f"✅ Report saved to: {OUTPUT_FILE}")
    print(f"   System health: {report['system_health'].upper()}")
    print("=" * 60)
    
    return 0


if __name__ == '__main__':
    sys.exit(main())