#!/usr/bin/env python3
"""
Hyper Growth Fabric v1.0 - Category Weight Adjustment System

Dynamically adjusts sampling weights for underrepresented service categories
to achieve catalog balance. Part of the Exponential Growth Engine.
"""

import json
import os
import sys
import hashlib
import random
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any, Set, Tuple
import logging

# Configuration
SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')
LOG_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/hyper_growth_fabric.log')

# Underrepresented categories that need boosting
UNDERREPRESENTED_CATEGORIES = ["blockchain", "iot", "edge", "quantum", "agritech", "proptech", "cleantech"]

# Base weight for underrepresented categories (boosted from 1.0 to 10.0)
CATEGORY_WEIGHTS = {
    "blockchain": 10.0,
    "iot": 10.0,
    "edge": 10.0,
    "quantum": 10.0,
    "agritech": 10.0,
    "proptech": 10.0,
    "cleantech": 10.0,
    # All other categories get standard weight of 1.0
}

# Service templates for underrepresented categories
CATEGORY_SERVICE_TEMPLATES = {
    "blockchain": [
        "Blockchain {service} for {industry}",
        "{service} Blockchain - {industry} Edition",
        "Decentralized {service} for {industry}",
        "Smart Contract {service} - {industry}",
    ],
    "iot": [
        "IoT {service} for {industry}",
        "{service} IoT Platform - {industry}",
        "Connected {service} - {industry}",
        "Sensor Network {service} - {industry}",
    ],
    "edge": [
        "Edge {service} for {industry}",
        "{service} Edge Computing - {industry}",
        "Distributed {service} - {industry}",
        "Low-Latency {service} - {industry}",
    ],
    "quantum": [
        "Quantum {service} for {industry}",
        "{service} Quantum - {industry} Edition",
        "Quantum-Enhanced {service} - {industry}",
        "Post-Quantum {service} - {industry}",
    ],
    "agritech": [
        "AgriTech {service} for {industry}",
        "{service} AgriTech - {industry}",
        "Precision Agriculture {service} - {industry}",
        "Smart Farming {service} - {industry}",
    ],
    "proptech": [
        "PropTech {service} for {industry}",
        "{service} PropTech - {industry}",
        "Smart Real Estate {service} - {industry}",
        "Property Innovation {service} - {industry}",
    ],
    "cleantech": [
        "CleanTech {service} for {industry}",
        "{service} CleanTech - {industry}",
        "Sustainable {service} - {industry}",
        "Green Tech {service} - {industry}",
    ],
}

# Industry categories for underrepresented services
UNDERREPRESENTED_INDUSTRIES = [
    "technology", "healthcare", "finance", "retail", "manufacturing",
    "logistics", "real-estate", "energy", "agriculture", "construction",
    "transportation", "telecom", "media", "education", "gaming"
]

# Service types
SERVICE_TYPES = [
    "AI-Powered", "Intelligent", "Autonomous", "Smart", "Predictive",
    "Automated", "Self-Optimizing", "Adaptive", "Cognitive", "Neural"
]

# Domain types
DOMAINS = [
    "Analytics", "Automation", "Optimization", "Management", "Insights",
    "Intelligence", "Platform", "Suite", "Engine", "System", "Processor",
    "Analyzer", "Predictor", "Optimizer", "Generator", "Orchestrator",
    "Coordinator", "Director", "Manager", "Advisor", "Security", "Cloud",
    "Data", "DevOps", "Monitoring", "Customer Service", "Marketing",
    "Sales", "Finance", "Healthcare", "Real Estate", "Manufacturing"
]

# Core functions
CORE_FUNCTIONS = [
    "Predictive Analytics", "Customer Insights", "Process Automation",
    "Data Processing", "Market Intelligence", "Financial Planning",
    "Supply Chain", "Quality Control", "Risk Assessment", "Performance Monitoring",
    "Resource Optimization", "Decision Support", "Workflow Management",
    "Document Processing", "Image Recognition", "Language Processing",
    "Network Optimization", "Inventory Management", "Sales Forecasting",
    "Maintenance Scheduling", "Energy Management", "Compliance Monitoring",
    "User Experience", "Content Generation", "Code Optimization",
    "Security Monitoring", "Threat Detection", "Fraud Prevention",
    "Customer Service Automation", "Sales Process Optimization",
    "Healthcare Data Analytics", "Financial Risk Management",
    "Manufacturing Quality Control", "Logistics Route Optimization"
]

FEATURES_POOL = [
    "Real-time processing with streaming analytics",
    "Machine learning integration with automatic model training",
    "Cloud-native architecture with multi-region deployment",
    "API-first design with comprehensive REST and GraphQL endpoints",
    "Microservices deployment with container orchestration",
    "Edge computing support for low-latency operations",
    "Serverless functions for cost-effective scaling",
    "Multi-region deployment with automatic failover",
    "Auto-scaling capabilities with predictive scaling",
    "Zero-downtime updates with blue-green deployment",
    "Comprehensive monitoring with custom dashboards",
    "Alerting system with intelligent notifications",
    "Performance dashboards with real-time metrics",
    "Role-based access control with SSO integration",
    "Audit trails with compliance reporting",
    "Data encryption at rest and in transit",
    "GDPR compliance with data portability",
    "HIPAA ready with healthcare data protection",
    "SOC 2 certified with security controls",
    "Open-source friendly with plugin architecture",
]

BENEFITS_POOL = [
    "50% reduction in operational costs through automation",
    "3x faster decision making with real-time insights",
    "99.9% uptime guarantee with redundant architecture",
    "24/7 automated operations without human intervention",
    "Zero manual intervention required for routine tasks",
    "Real-time insights and alerts for proactive management",
    "Scalable to millions of transactions per second",
    "Enterprise-grade security with end-to-end encryption",
    "Seamless integration with existing systems and workflows",
    "ROI achieved in under 90 days with cost savings",
    "Reduced human error by 95% with automated processes",
    "Automated compliance reporting for regulatory requirements",
    "Predictive maintenance scheduling to prevent downtime",
    "Dynamic resource allocation based on demand patterns",
    "Cost optimization recommendations with savings analysis",
]

PRICING_TIERS = {
    "basic": "199",
    "pro": "499",
    "enterprise": "1499"
}

# Setup logging
def setup_logging():
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)-8s] %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        handlers=[
            logging.StreamHandler(sys.stdout),
            logging.FileHandler(LOG_FILE)
        ]
    )
    return logging.getLogger('hyper-growth-fabric')

logger = setup_logging()

def get_existing_names_and_ids() -> Set[str]:
    """Get existing names and IDs for deduplication using set operations"""
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
            if 'id' in s:
                names_and_ids.add(s['id'])
            if 'name' in s:
                names_and_ids.add(s['name'].lower())
        
        return names_and_ids
    except Exception as e:
        logger.error(f"Error reading existing services: {e}")
        return set()

def generate_service_id(service_name: str) -> str:
    """Generate deterministic service ID from name"""
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    hash_part = hashlib.md5(service_name.encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"

def generate_dynamic_service_name(category: str, service_type: str, industry: str) -> str:
    """Generate service name from category, type, and industry"""
    templates = CATEGORY_SERVICE_TEMPLATES.get(category, [
        f"{service_type} {category} for {industry}",
        f"{service_type} {industry} {category}",
        f"Intelligent {category} - {industry} Edition",
    ])
    return random.choice(templates)

def generate_service_description(name: str, category: str, industry: str) -> str:
    """Generate description from templates"""
    templates = [
        f"Transform your {industry} operations with our {name}. This AI-driven solution automates {category.lower()} workflows with unprecedented accuracy and efficiency.",
        f"Revolutionize {industry} through intelligent automation. Our {name} leverages advanced machine learning to deliver {category.lower()} at scale.",
        f"The future of {industry} is here with {name}. Powered by cutting-edge AI, this platform delivers {category.lower()} like never before.",
        f"Unlock unprecedented growth with {name}. This autonomous system provides {category.lower()} with zero manual intervention needed.",
        f"Next-generation {industry} solution: {name}. Combines {category.lower()} with adaptive intelligence for optimal results."
    ]
    return random.choice(templates)

import re

def generate_features() -> List[str]:
    """Generate random features from pool"""
    num_features = random.randint(4, 6)
    return random.sample(FEATURES_POOL, num_features)

def generate_benefits() -> List[str]:
    """Generate random benefits from pool"""
    num_benefits = random.randint(3, 5)
    return random.sample(BENEFITS_POOL, num_benefits)

def create_service_entry(service_name: str, category: str, industry: str, existing_ids: Set[str]) -> Dict:
    """Create a complete service entry"""
    service_type = random.choice(SERVICE_TYPES)
    
    final_name = service_name
    if service_name.lower() in existing_ids:
        suffix = random.randint(100, 999)
        final_name = f"{service_name} v{suffix}"
    
    service_id = generate_service_id(final_name)
    
    return {
        'id': service_id,
        'name': final_name,
        'description': generate_service_description(final_name, category, industry),
        'category': category,
        'industry': industry,
        'features': generate_features(),
        'benefits': generate_benefits(),
        'pricing': PRICING_TIERS.copy(),
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'contactInfo': {
            'website': f"/services/{service_id}",
            'email': 'hello@ziontechgroup.com',
            'phone': '+1 (302) 464 0950'
        },
        'icon': '💡',
        'href': f"/services/{service_id}",
        'popular': False
    }

def load_services() -> List[Dict]:
    """Load services from JSON file"""
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
    """Save services to JSON file"""
    try:
        SERVICES_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(SERVICES_FILE, 'w') as f:
            json.dump(services, f, indent=2)
        return True
    except Exception as e:
        logger.error(f"Error saving services: {e}")
        return False

def generate_underrepresented_services(count: int = 200) -> Tuple[int, List[Dict]]:
    """Generate services exclusively in underrepresented categories"""
    logger.info(f"[🔄] Generating {count} services in underrepresented categories")
    
    existing_ids = get_existing_names_and_ids()
    new_services = []
    used_names = set()
    
    # Create weighted category selection
    categories_with_weights = [(cat, CATEGORY_WEIGHTS.get(cat, 1.0)) for cat in UNDERREPRESENTED_CATEGORIES]
    
    for i in range(count):
        # Select category based on weights
        category = random.choices(
            [c[0] for c in categories_with_weights],
            weights=[c[1] for c in categories_with_weights]
        )[0]
        
        industry = random.choice(UNDERREPRESENTED_INDUSTRIES)
        service_type = random.choice(SERVICE_TYPES)
        
        base_name = generate_dynamic_service_name(category, service_type, industry)
        
        final_name = base_name
        counter = 1
        while final_name.lower() in existing_ids or final_name.lower() in used_names:
            final_name = f"{base_name} #{counter}"
            counter += 1
            if counter > 100:
                final_name = f"{base_name}-{hashlib.md5(str(i).encode()).hexdigest()[:6]}"
                break
        
        used_names.add(final_name.lower())
        
        service = create_service_entry(final_name, category, industry, existing_ids)
        new_services.append(service)
        
        logger.info(f"[✅] Generated: {final_name} (Category: {category})")
    
    return len(new_services), new_services

def run_category_balancing_pass(batch_size: int = 200) -> Dict[str, Any]:
    """Main function to balance underrepresented categories"""
    start_time = datetime.now(timezone.utc)
    logger.info("=" * 70)
    logger.info("🏛️ HYPER GROWTH FABRIC - CATEGORY BALANCING PASS")
    logger.info("=" * 70)
    logger.info(f"[📊] Target: Generate {batch_size} services in underrepresented categories")
    
    existing_ids = get_existing_names_and_ids()
    services = load_services()
    initial_count = len(services)
    
    logger.info(f"[ℹ️] Existing services in catalog: {initial_count}")
    
    # Generate new services
    count, new_services = generate_underrepresented_services(batch_size)
    
    if new_services:
        services.extend(new_services)
        if save_services(services):
            logger.info(f"[💾] Saved {count} new services to catalog")
            logger.info(f"[📊] Total services in catalog: {len(services)}")
        else:
            logger.error("[❌] Failed to save services")
            return {
                'status': 'error',
                'message': 'Failed to save services',
                'services_added': 0,
                'timestamp': datetime.now(timezone.utc).isoformat()
            }
    
    end_time = datetime.now(timezone.utc)
    duration = (end_time - start_time).total_seconds()
    
    logger.info("=" * 70)
    logger.info(f"[🏁] COMPLETE: {count} services added in {duration:.2f}s")
    logger.info("=" * 70)
    
    return {
        'status': 'success',
        'services_added': count,
        'total_catalog_size': len(services),
        'duration_seconds': duration,
        'timestamp': start_time.isoformat()
    }

def main():
    """Main entry point"""
    result = run_category_balancing_pass()
    print(json.dumps(result, indent=2))
    return 0 if result['status'] == 'success' else 1

if __name__ == '__main__':
    sys.exit(main())