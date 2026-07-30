#!/usr/bin/env python3
"""
Stable Growth Engine for Zion Tech Group
Adds 5 new AI/IT services per cycle from a pool of 10 pre-defined services.
"""

import json
import os
import sys
import re
import hashlib
import random
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any, Set

# Configuration
SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')
LOG_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/stable_growth_engine.log')
BATCH_SIZE = 5

# Pre-defined services pool (10 AI/IT services)
ALL_SERVICES = [
    {
        "name": "AI-Powered Predictive Analytics Suite",
        "description": "AI-driven analytics platform that predicts market trends, customer behavior, and operational outcomes with 95% accuracy. Uses machine learning models trained on historical data to forecast future performance.",
        "category": "analytics",
        "industry": "technology",
        "features": [
            "Real-time predictive modeling",
            "Multi-dimensional trend analysis",
            "Automated anomaly detection",
            "Customizable forecasting horizons"
        ],
        "benefits": [
            "30% improvement in decision accuracy",
            "Reduced operational risks",
            "Proactive opportunity identification",
            "Data-driven strategy optimization"
        ],
        "pricing": {"basic": "299", "pro": "799", "enterprise": "2499"}
    },
    {
        "name": "Autonomous Customer Service AI",
        "description": "24/7 intelligent customer support system that handles inquiries, resolves issues, and provides personalized assistance without human intervention. Integrates with existing CRM systems.",
        "category": "customer service",
        "industry": "technology",
        "features": [
            "Natural language understanding",
            "Multi-channel support (chat, email, social)",
            "Sentiment-aware responses",
            "Seamless human handoff"
        ],
        "benefits": [
            "90% reduction in support tickets",
            "Instant response times",
            "Consistent service quality",
            "24/7 availability"
        ],
        "pricing": {"basic": "199", "pro": "499", "enterprise": "1499"}
    },
    {
        "name": "AI-Powered SEO Content Engine",
        "description": "Automated content creation platform that generates SEO-optimized articles, blog posts, and marketing copy. Analyzes keyword trends and competitor content to maximize search visibility.",
        "category": "marketing",
        "industry": "technology",
        "features": [
            "Keyword research and optimization",
            "Content generation with plagiarism checks",
            "SEO score analysis and recommendations",
            "Multi-language support"
        ],
        "benefits": [
            "5x faster content production",
            "Higher search rankings",
            "Increased organic traffic",
            "Reduced content creation costs"
        ],
        "pricing": {"basic": "149", "pro": "399", "enterprise": "1199"}
    },
    {
        "name": "Intelligent Document Processing AI",
        "description": "Machine learning-powered document automation that extracts, categorizes, and processes documents at scale. Handles invoices, contracts, reports, and other business documents.",
        "category": "automation",
        "industry": "technology",
        "features": [
            "OCR with 99% accuracy",
            "Data extraction and validation",
            "Automated workflow routing",
            "Compliance monitoring"
        ],
        "benefits": [
            "80% reduction in manual processing",
            "Zero data entry errors",
            "Faster document turnaround",
            "Audit-ready processing logs"
        ],
        "pricing": {"basic": "249", "pro": "599", "enterprise": "1799"}
    },
    {
        "name": "AI Sales Lead Scoring Engine",
        "description": "Intelligent lead prioritization system that scores and ranks prospects based on engagement, fit, and conversion probability. Increases sales team efficiency by focusing on high-value leads.",
        "category": "sales",
        "industry": "technology",
        "features": [
            "Real-time lead scoring",
            "Behavioral tracking integration",
            "Predictive conversion modeling",
            "Automated lead nurturing"
        ],
        "benefits": [
            "40% increase in conversion rates",
            "Higher sales team productivity",
            "Reduced time-to-close",
            "Better lead qualification"
        ],
        "pricing": {"basic": "199", "pro": "449", "enterprise": "1299"}
    },
    {
        "name": "AI Code Generation & Optimization",
        "description": "Development assistant that generates production-ready code from natural language descriptions, optimizes existing code for performance, and suggests security improvements.",
        "category": "development",
        "industry": "technology",
        "features": [
            "Multi-language code generation",
            "Performance optimization suggestions",
            "Security vulnerability detection",
            "Code documentation generation"
        ],
        "benefits": [
            "10x faster development speed",
            "Improved code quality",
            "Reduced bug rates",
            "Enhanced security posture"
        ],
        "pricing": {"basic": "299", "pro": "699", "enterprise": "1999"}
    },
    {
        "name": "AI-Powered Market Intelligence",
        "description": "Competitive analysis platform that monitors market trends, competitor activities, and industry developments. Provides actionable insights for strategic decision-making.",
        "category": "market research",
        "industry": "technology",
        "features": [
            "Real-time competitor monitoring",
            "Trend analysis and prediction",
            "Market opportunity identification",
            "Sentiment analysis"
        ],
        "benefits": [
            "Early market trend detection",
            "Competitive advantage",
            "Data-driven strategy decisions",
            "Opportunity maximization"
        ],
        "pricing": {"basic": "199", "pro": "499", "enterprise": "1499"}
    },
    {
        "name": "AI Customer Churn Prediction",
        "description": "Predictive analytics tool that identifies at-risk customers before they leave. Provides intervention recommendations to improve retention and reduce churn rates.",
        "category": "analytics",
        "industry": "technology",
        "features": [
            "Real-time churn risk scoring",
            "Root cause analysis",
            "Intervention recommendation engine",
            "Retention campaign automation"
        ],
        "benefits": [
            "30% reduction in customer churn",
            "Improved customer lifetime value",
            "Proactive retention strategies",
            "Reduced acquisition costs"
        ],
        "pricing": {"basic": "149", "pro": "399", "enterprise": "999"}
    },
    {
        "name": "AI Supply Chain Optimization",
        "description": "Intelligent logistics platform that optimizes inventory levels, shipment routes, and supplier relationships. Reduces costs and improves delivery times through predictive analytics.",
        "category": "supply chain",
        "industry": "technology",
        "features": [
            "Demand forecasting",
            "Route optimization",
            "Supplier risk assessment",
            "Inventory level prediction"
        ],
        "benefits": [
            "15% reduction in logistics costs",
            "Improved delivery times",
            "Reduced stockouts",
            "Enhanced supplier relationships"
        ],
        "pricing": {"basic": "399", "pro": "899", "enterprise": "2499"}
    },
    {
        "name": "AI Financial Planning & Analysis",
        "description": "Financial intelligence platform that automates budgeting, forecasting, and financial reporting. Provides real-time insights for better financial decision-making.",
        "category": "finance",
        "industry": "technology",
        "features": [
            "Automated financial forecasting",
            "Budget variance analysis",
            "Cash flow optimization",
            "Financial KPI dashboards"
        ],
        "benefits": [
            "Faster financial reporting",
            "Improved forecast accuracy",
            "Better cash flow management",
            "Data-driven financial decisions"
        ],
        "pricing": {"basic": "299", "pro": "699", "enterprise": "1999"}
    }
]


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
    return logging.getLogger('stable-growth-engine')


logger = setup_logging()


def get_existing_names_and_ids() -> Set[str]:
    """Get existing service names and IDs from JSON file for deduplication."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            services = data
        elif isinstance(data, dict):
            services = data.get('services', [])
        else:
            return set()
        
        names_and_ids = set()
        for s in services:
            # Add ID
            if 'id' in s:
                names_and_ids.add(s['id'])
            # Add name (handle both 'name' and 'title' fields)
            if 'name' in s:
                names_and_ids.add(s['name'].lower())
            if 'title' in s:
                names_and_ids.add(s['title'].lower())
        
        return names_and_ids
    except Exception as e:
        logger.error(f"Error reading existing services: {e}")
        return set()


def generate_service_id(service_name: str) -> str:
    """Generate deterministic service ID using hash (no timestamp)."""
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    hash_part = hashlib.md5(service_name.encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"


def load_services() -> List[Dict]:
    """Load existing services from JSON file."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        else:
            return []
    except FileNotFoundError:
        logger.warning(f"Services file not found: {SERVICES_FILE}")
        return []
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        return []


def save_services(services: List[Dict]) -> bool:
    """Save services to JSON file."""
    try:
        SERVICES_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(SERVICES_FILE, 'w') as f:
            json.dump(services, f, indent=2)
        return True
    except Exception as e:
        logger.error(f"Error saving services: {e}")
        return False


def find_new_services(existing_names_ids: Set[str]) -> List[Dict]:
    """Find services from ALL_SERVICES pool that don't already exist."""
    new_services = []
    
    for service in ALL_SERVICES:
        service_name = service.get('name', '')
        service_id = generate_service_id(service_name)
        
        # Check if service already exists by ID or name
        if service_id in existing_names_ids or service_name.lower() in existing_names_ids:
            logger.info(f"Service already exists: {service_name}")
            continue
        
        # Create new service entry
        new_service = {
            'id': service_id,
            'name': service_name,
            'description': service.get('description', ''),
            'category': service.get('category', ''),
            'industry': service.get('industry', ''),
            'features': service.get('features', []),
            'benefits': service.get('benefits', []),
            'pricing': service.get('pricing', {}),
            'timestamp': datetime.now(timezone.utc).isoformat(),
            'contactInfo': {
                'website': f"/services/{service_id}",
                'email': 'hello@ziontechgroup.com',
                'phone': '+1 (302) 464-0950'
            },
            'icon': '💡',
            'href': f"/services/{service_id}",
            'popular': False
        }
        
        new_services.append(new_service)
        logger.info(f"Added to queue: {service_name}")
    
    return new_services


def run_stable_growth():
    """Run one stable growth cycle."""
    logger.info("=" * 60)
    logger.info("🚀 STABLE GROWTH ENGINE v2.0")
    logger.info("=" * 60)
    
    # Get existing services
    existing_names_ids = get_existing_names_and_ids()
    logger.info(f"[ℹ️] Existing services: {len(existing_names_ids) // 2} unique entries")
    
    # Find new services
    new_services = find_new_services(existing_names_ids)
    
    if not new_services:
        logger.info("[✅] No new services to add - all services in pool already exist")
        logger.info("[🏁] Complete: 0 services added")
        return 0
    
    # Limit to batch size
    services_to_add = new_services[:BATCH_SIZE]
    logger.info(f"[➕] Adding {len(services_to_add)} new services")
    
    # Load existing services
    services = load_services()
    
    # Add new services
    for service in services_to_add:
        services.append(service)
        logger.info(f"[✅] Added: {service['name']}")
    
    # Save updated services
    if save_services(services):
        logger.info(f"[💾] Saved {len(services_to_add)} new services to catalog")
        logger.info(f"[📊] Total services in catalog: {len(services)}")
    else:
        logger.error("[❌] Failed to save services")
        return -1
    
    logger.info(f"[🏁] Complete: {len(services_to_add)} services added")
    return len(services_to_add)


def main():
    """Main entry point."""
    if '--once' in sys.argv:
        # Run single cycle
        result = run_stable_growth()
        print(json.dumps({
            'status': 'success' if result >= 0 else 'error',
            'services_added': max(0, result),
            'timestamp': datetime.now(timezone.utc).isoformat()
        }, indent=2))
        return 0 if result >= 0 else 1
    else:
        # Run continuous mode
        import signal
        running = True
        
        def signal_handler(signum, frame):
            nonlocal running
            logger.info(f"Received signal {signum}, shutting down...")
            running = False
        
        signal.signal(signal.SIGTERM, signal_handler)
        signal.signal(signal.SIGINT, signal_handler)
        
        while running:
            run_stable_growth()
            logger.info("Waiting 5 minutes until next cycle...")
            import time
            time.sleep(300)
        
        logger.info("Stable growth engine stopped")
        return 0


if __name__ == '__main__':
    sys.exit(main())