#!/usr/bin/env python3
"""
Growth Orchestration Dashboard Report Generator
"""

import json
from datetime import datetime
from pathlib import Path
from collections import Counter

# Paths
BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_JSON = BASE_DIR / 'app' / 'data' / 'servicesData.json'
DISCOVERED_LEADS = BASE_DIR / 'app' / 'data' / 'discovered_leads.json'
SENT_LOG = BASE_DIR / 'app' / 'data' / 'outreach' / 'sent_log.json'
PAGES_DIR = BASE_DIR / 'app' / 'pages'
SERVICES_DIR = BASE_DIR / 'app' / 'services'

def count_services():
    """Count total services and categories."""
    try:
        with open(SERVICES_JSON, 'r') as f:
            services = json.load(f)
        
        total = len(services)
        categories = Counter()
        
        for service in services:
            cat = service.get('category', 'unknown')
            categories[cat] += 1
        
        return total, dict(categories)
    except Exception as e:
        print(f"Error counting services: {e}")
        return 0, {}

def count_landing_pages():
    """Count landing pages (Next.js .tsx files in routes directory)."""
    try:
        # Count .tsx files in routes/services directory (Next.js App Router pages)
        routes_services_dir = BASE_DIR / 'app' / 'routes' / 'services'
        if routes_services_dir.exists():
            pages = list(routes_services_dir.glob('*.tsx'))
            return len(pages), pages
        else:
            # Fallback to counting HTML files in pages directory
            pages = list(PAGES_DIR.glob('*.html'))
            return len(pages), pages
    except Exception as e:
        print(f"Error counting landing pages: {e}")
        return 0, []

def count_service_pages():
    """Count individual service pages."""
    try:
        services = list(SERVICES_DIR.glob('*'))
        # Filter to only directories
        service_dirs = [s for s in services if s.is_dir() and not s.name.startswith('.')]
        return len(service_dirs)
    except Exception as e:
        print(f"Error counting service pages: {e}")
        return 0

def count_hot_leads_sent():
    """Count hot leads sent from sent_log.json."""
    try:
        with open(SENT_LOG, 'r') as f:
            sent_log = json.load(f)
        return len(sent_log)
    except Exception as e:
        print(f"Error counting hot leads: {e}")
        return 0

def get_recent_pages(pages, limit=5):
    """Get recent landing pages."""
    sorted_pages = sorted(pages, key=lambda p: p.stat().st_mtime, reverse=True)
    return [p.name for p in sorted_pages[:limit]]

def generate_report():
    """Generate the growth orchestration dashboard report."""
    print("=" * 60)
    print("📊 GROWTH ORCHESTRATION DASHBOARD")
    print("=" * 60)
    
    # Service catalog
    total_services, categories = count_services()
    print(f"\n📦 SERVICE CATALOG")
    print(f"   Total services: {total_services}")
    
    # Count growth cycles (groups of 50)
    growth_cycles = (total_services // 50) + 1 if total_services > 0 else 0
    
    # Top 10 categories
    sorted_categories = sorted(categories.items(), key=lambda x: x[1], reverse=True)[:10]
    print(f"\n🏆 TOP 10 CATEGORIES BY SERVICE COUNT")
    for i, (cat, count) in enumerate(sorted_categories, 1):
        print(f"   {i}. {cat}: {count} services")
    
    # Landing pages
    total_pages, pages = count_landing_pages()
    recent_pages = get_recent_pages(pages)
    
    print(f"\n🌐 LANDING PAGE DEPLOYMENT")
    print(f"   Total pages: {total_pages}")
    print(f"   Recent pages: {', '.join(recent_pages) if recent_pages else 'None'}")
    
    # Email outreach
    hot_leads_sent = count_hot_leads_sent()
    print(f"\n📧 EMAIL OUTREACH")
    print(f"   Hot leads sent: {hot_leads_sent}")
    
    print("\n" + "=" * 60)
    print(f"   Generated at: {datetime.now().isoformat()}")
    print("=" * 60)
    
    return {
        'timestamp': datetime.now().isoformat(),
        'services': {
            'total': total_services,
            'growth_cycles': growth_cycles,
            'categories': categories
        },
        'landing_pages': {
            'total': total_pages,
            'recent': recent_pages
        },
        'email_outreach': {
            'hot_leads_sent': hot_leads_sent
        }
    }

if __name__ == '__main__':
    report = generate_report()