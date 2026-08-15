#!/usr/bin/env python3
"""
Seed Content Generator v2.0 - Zion Tech Group
Fixes corrupted JSON data and generates SEO-optimized AI/IT services.
Fills empty categories: devops, database, iot, email-intelligence, collaboration, media.

Usage:
    python3 seed_content_generator_v2.py
"""

import json
import argparse
import re
import hashlib
import random
import os
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Set, Any
import logging

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE_DIR / 'zion-support.github.io' / 'app' / 'data' / 'servicesData.json'
LOG_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'seed_content_generator.log'

# Create directories
SERVICES_FILE.parent.mkdir(parents=True, exist_ok=True)
LOG_FILE.parent.mkdir(parents=True, exist_ok=True)

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-8s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler(LOG_FILE)
    ]
)
logger = logging.getLogger('seed-content-generator-v2')

# Target empty categories to fill
TARGET_CATEGORIES = ['devops', 'database', 'iot', 'email-intelligence', 'collaboration', 'media']

# Industry focus areas for SEO optimization
INDUSTRIES = [
    "technology", "healthcare", "finance", "retail", "manufacturing",
    "logistics", "hospitality", "sports", "real-estate", "telecom",
    "energy", "automotive", "education", "gaming", "agriculture",
    "construction", "transportation", "insurance", "legal", "media"
]

# Category-specific domain pools for better SEO
CATEGORY_DOMAINS = {
    'devops': ["CI/CD", "Infrastructure", "Automation", "Monitoring", "Deployment", "Orchestration", "Container", "Pipeline", "Release", "Observability"],
    'database': ["SQL", "NoSQL", "Analytics", "Migration", "Optimization", "Replication", "Backup", "Warehouse", "Streaming", "Graph"],
    'iot': ["Edge", "Sensors", "Devices", "Networks", "Smart", "Industrial", "Connected", "Real-time", "Telemetry", "Automation"],
    'email-intelligence': ["Email", "Communication", "Analytics", "Automation", "Engagement", "Delivery", "Spam", "Personalization", "Campaign", "Insights"],
    'collaboration': ["Team", "Project", "Workspace", "Communication", "Document", "Meeting", "Workflow", "Feedback", "Integration", "Sharing"],
    'media': ["Video", "Audio", "Content", "Streaming", "Social", "Broadcast", "Podcast", "Graphics", "Animation", "Marketing"]
}

# Core functions by category
CATEGORY_CORE_FUNCTIONS = {
    'devops': [
        "Continuous Integration", "Infrastructure as Code", "Automated Testing",
        "Deployment Strategies", "Monitoring Systems", "Configuration Management",
        "Container Orchestration", "Release Management", "Performance Optimization"
    ],
    'database': [
        "Data Migration", "Schema Design", "Query Optimization", "Data Modeling",
        "Performance Tuning", "Backup Automation", "Replication Management",
        "Analytics Processing", "Data Warehousing", "Security Compliance"
    ],
    'iot': [
        "Device Management", "Sensor Data Processing", "Edge Computing",
        "Network Optimization", "Real-time Analytics", "Predictive Maintenance",
        "Automation Control", "Telemetry Collection", "Smart Grid Management"
    ],
    'email-intelligence': [
        "Email Analytics", "Campaign Optimization", "Engagement Tracking",
        "Deliverability Management", "Content Personalization", "Spam Detection",
        "A/B Testing", "Automation Workflows", "Performance Insights"
    ],
    'collaboration': [
        "Team Productivity", "Project Management", "Document Collaboration",
        "Communication Automation", "Workflow Optimization", "Meeting Intelligence",
        "Feedback Collection", "Integration Management", "Knowledge Sharing"
    ],
    'media': [
        "Content Creation", "Video Processing", "Audio Analysis",
        "Social Media Management", "Broadcast Automation", "Graphics Generation",
        "Streaming Optimization", "Marketing Analytics", "Audience Insights"
    ]
}

# Feature pools by category - 200+ features
FEATURES_POOL = {
    'devops': [
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
        "SOC 2 certified with security controls",
        "Open-source friendly with plugin architecture",
        "Custom integrations with webhook support",
        "Infrastructure as Code with Terraform support",
        "CI/CD pipeline with automated testing",
        "Kubernetes orchestration with Helm charts",
        "GitOps workflow with ArgoCD integration"
    ],
    'database': [
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
        "Custom integrations with webhook support",
        "Automated backup and point-in-time recovery",
        "Read replicas for horizontal scaling",
        "Connection pooling for high throughput"
    ],
    'iot': [
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
        "SOC 2 certified with security controls",
        "Open-source friendly with plugin architecture",
        "Custom integrations with webhook support",
        "Device management with OTA updates",
        "Real-time telemetry collection and analysis",
        "Edge AI for local decision making",
        "Network optimization for constrained devices"
    ],
    'email-intelligence': [
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
        "SOC 2 certified with security controls",
        "Open-source friendly with plugin architecture",
        "Custom integrations with webhook support",
        "Deliverability optimization with reputation management",
        "Spam detection with machine learning classifiers",
        "A/B testing framework for content optimization",
        "Personalization engine for dynamic content"
    ],
    'collaboration': [
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
        "SOC 2 certified with security controls",
        "Open-source friendly with plugin architecture",
        "Custom integrations with webhook support",
        "Real-time document collaboration with version control",
        "Meeting transcription with action item extraction",
        "Task assignment with automated reminders",
        "Knowledge base with smart search"
    ],
    'media': [
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
        "SOC 2 certified with security controls",
        "Open-source friendly with plugin architecture",
        "Custom integrations with webhook support",
        "Video transcoding with adaptive bitrate streaming",
        "Audio analysis with speech-to-text conversion",
        "Content moderation with AI-powered filtering",
        "Social media scheduling with engagement analytics"
    ]
}

# Benefits pool - 200+ benefits for each category
BENEFITS_POOL = {
    'devops': [
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
        "Cost optimization recommendations with savings analysis"
    ],
    'database': [
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
        "Cost optimization recommendations with savings analysis"
    ],
    'iot': [
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
        "Cost optimization recommendations with savings analysis"
    ],
    'email-intelligence': [
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
        "Cost optimization recommendations with savings analysis"
    ],
    'collaboration': [
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
        "Cost optimization recommendations with savings analysis"
    ],
    'media': [
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
        "Cost optimization recommendations with savings analysis"
    ]
}

# Pricing tiers
PRICING_TIERS = {
    "basic": "199",
    "pro": "499",
    "enterprise": "1499"
}


def setup_logging():
    """Setup logging configuration."""
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)-8s] %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        handlers=[
            logging.StreamHandler(),
            logging.FileHandler(LOG_FILE)
        ]
    )
    return logging.getLogger('seed-content-generator')


def get_existing_ids() -> Set[str]:
    """Load existing service IDs to avoid duplicates."""
    ids = set()
    try:
        if SERVICES_FILE.exists():
            with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            if isinstance(data, list):
                for item in data:
                    if isinstance(item, dict):
                        if 'id' in item:
                            ids.add(item['id'])
                        if 'name' in item:
                            ids.add(item['name'].lower())
                        if 'title' in item:
                            ids.add(item['title'].lower())
    except Exception as e:
        logger.error(f"Error reading existing services: {e}")
    return ids


def generate_service_id(service_name: str) -> str:
    """Generate unique service ID."""
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "").replace("---", "-")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    if not base_id:
        base_id = "service"
    hash_part = hashlib.md5(f"{service_name}{datetime.now().isoformat()}".encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"


def generate_dynamic_service_name(category: str, industry: str, domain: str, core_function: str) -> str:
    """Generate dynamic service name based on category."""
    industry_clean = industry.title() if industry not in ["technology", "real-estate", "healthcare"] else ["Tech", "Real Estate", "Healthcare"][["technology", "real-estate", "healthcare"].index(industry)]
    
    patterns = [
        f"{domain} {core_function.split()[0]} for {industry_clean}",
        f"{domain} {core_function.split()[0]} - {industry_clean}",
        f"Intelligent {domain} for {industry_clean}",
        f"Smart {domain} Platform - {industry_clean}",
        f"Predictive {domain} Engine - {industry_clean}",
        f"Autonomous {domain} System - {industry_clean}",
        f"Cognitive {domain} Solution - {industry_clean}",
        f"{domain}-Powered {industry_clean} Automation",
        f"Advanced {domain} for {industry_clean}",
        f"Next-Gen {domain} {industry_clean} Platform"
    ]
    return random.choice(patterns)


def generate_service_description(name: str, category: str, industry: str, core_function: str) -> str:
    """Generate SEO-optimized service description."""
    templates = [
        f"Transform your {industry} operations with our {name}. This AI-driven solution automates {core_function.lower()} with unprecedented accuracy and efficiency.",
        f"Revolutionize {industry} through intelligent automation. Our {name} leverages advanced machine learning to deliver {core_function.lower()} at scale.",
        f"The future of {industry} is here with {name}. Powered by cutting-edge AI, this platform delivers {core_function.lower()} like never before.",
        f"Unlock unprecedented growth with {name}. This autonomous system provides {core_function.lower()} with zero manual intervention needed.",
        f"Next-generation {industry} solution: {name}. Combines {core_function.lower()} with adaptive intelligence for optimal results.",
        f"Optimize your {industry} workflows with {name}. This intelligent platform delivers {core_function.lower()} through advanced automation and AI.",
        f"Enhance your {industry} business with {name}. Our solution provides {core_function.lower()} with enterprise-grade reliability and security.",
        f"Drive innovation in {industry} with {name}. This AI-powered platform transforms {core_function.lower()} into a competitive advantage."
    ]
    return random.choice(templates)


def generate_features(category: str) -> List[str]:
    """Generate random features list for category."""
    pool = FEATURES_POOL.get(category, FEATURES_POOL['devops'])
    num_features = random.randint(5, 8)
    return random.sample(pool, min(num_features, len(pool)))


def generate_benefits(category: str) -> List[str]:
    """Generate random benefits list for category."""
    pool = BENEFITS_POOL.get(category, BENEFITS_POOL['devops'])
    num_benefits = random.randint(6, 10)
    return random.sample(pool, min(num_benefits, len(pool)))


def create_service_entry(category: str, industry: str, existing_ids: Set[str]) -> Dict:
    """Create a complete service entry."""
    domain = random.choice(CATEGORY_DOMAINS[category])
    core_function = random.choice(CATEGORY_CORE_FUNCTIONS[category])
    
    service_name = generate_dynamic_service_name(category, industry, domain, core_function)
    
    # Ensure unique name
    final_name = service_name
    counter = 1
    while final_name.lower() in existing_ids:
        suffix = random.randint(100, 999)
        final_name = f"{service_name} v{suffix}"
        counter += 1
        if counter > 10:
            final_name = f"{service_name}-{hashlib.md5(str(random.random()).encode()).hexdigest()[:6]}"
            break
    
    service_id = generate_service_id(final_name)
    
    # Ensure ID is unique
    while service_id in existing_ids:
        service_id = generate_service_id(f"{final_name} {random.randint(1,999)}")
    
    return {
        'id': service_id,
        'name': final_name,
        'title': final_name,
        'description': generate_service_description(final_name, category, industry, core_function),
        'category': category,
        'industry': industry,
        'features': generate_features(category),
        'benefits': generate_benefits(category),
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


def fix_json_corruption(filepath: Path) -> bool:
    """Attempt to fix any JSON corruption in the file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Try to parse as-is first
        try:
            data = json.loads(content)
            logger.info("JSON file is valid, no corruption detected")
            return True
        except json.JSONDecodeError as e:
            logger.warning(f"JSON corruption detected: {e}")
            
            # Attempt fixes
            # Fix trailing commas
            content = re.sub(r',\s*}', '}', content)
            content = re.sub(r',\s*]', ']', content)
            
            # Fix missing closing brackets
            open_braces = content.count('{') - content.count('}')
            open_brackets = content.count('[') - content.count(']')
            
            if open_braces > 0:
                content += '}' * open_braces
            if open_brackets > 0:
                content += ']' * open_brackets
            
            # Try parsing again
            try:
                data = json.loads(content)
                logger.info("JSON corruption fixed successfully")
                with open(filepath, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                return True
            except json.JSONDecodeError as e2:
                logger.error(f"Failed to fix JSON: {e2}")
                return False
                
    except Exception as e:
        logger.error(f"Error checking JSON file: {e}")
        return False


def load_services() -> List[Dict]:
    """Load existing services from catalog."""
    try:
        with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
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
    """Save services to catalog."""
    try:
        SERVICES_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(SERVICES_FILE, 'w', encoding='utf-8') as f:
            json.dump(services, f, indent=2, ensure_ascii=False)
        logger.info(f"Successfully saved {len(services)} services to {SERVICES_FILE}")
        return True
    except Exception as e:
        logger.error(f"Error saving services: {e}")
        return False


def generate_services_for_category(category: str, count: int, existing_ids: Set[str]) -> List[Dict]:
    """Generate specified number of services for a category."""
    services = []
    
    # Get industries that work well for this category
    industry_weights = {
        'devops': {"technology": 1.0, "finance": 0.9, "healthcare": 0.9, "manufacturing": 0.8, "telecom": 0.8},
        'database': {"technology": 1.0, "finance": 1.0, "healthcare": 1.0, "e-commerce": 0.9, "analytics": 0.9},
        'iot': {"manufacturing": 1.0, "logistics": 1.0, "agriculture": 0.9, "energy": 0.9, "smart-city": 0.8},
        'email-intelligence': {"marketing": 1.0, "sales": 1.0, "ecommerce": 1.0, "education": 0.9, "healthcare": 0.9},
        'collaboration': {"education": 1.0, "remote-work": 1.0, "tech": 1.0, "consulting": 0.9, "media": 0.9},
        'media': {"entertainment": 1.0, "marketing": 1.0, "advertising": 1.0, "sports": 0.9, "news": 0.9}
    }
    
    for _ in range(count):
        # Select industry based on weights
        industries = industry_weights.get(category, {"technology": 1.0})
        industry = random.choices(list(industries.keys()), weights=list(industries.values()))[0]
        
        service = create_service_entry(category, industry, existing_ids)
        services.append(service)
        existing_ids.add(service['id'])
        existing_ids.add(service['name'].lower())
        existing_ids.add(service['title'].lower())
    
    return services


def main():
    """Main execution function."""
    logger.info("="*60)
    logger.info("Seed Content Generator v2.0 - Starting")
    logger.info("="*60)
    
    # Fix any JSON corruption
    logger.info("Step 1: Checking for JSON corruption...")
    if not fix_json_corruption(SERVICES_FILE):
        logger.error("Failed to fix JSON corruption, exiting")
        return False
    
    # Load existing services
    logger.info("Step 2: Loading existing services...")
    existing_services = load_services()
    existing_ids = get_existing_ids()
    logger.info(f"Loaded {len(existing_services)} existing services")
    
    # Count services per target category
    category_counts = {}
    for cat in TARGET_CATEGORIES:
        count = sum(1 for s in existing_services if isinstance(s, dict) and s.get('category') == cat)
        category_counts[cat] = count
    
    logger.info(f"Category counts before: {category_counts}")
    
    # Generate 75 new services distributed across empty categories
    # 75 services / 6 categories = 12-13 per category
    services_per_category = 75 // len(TARGET_CATEGORIES)  # 12
    extra = 75 % len(TARGET_CATEGORIES)  # 3 extra
    
    logger.info(f"Step 3: Generating 75 new SEO-optimized services...")
    new_services = []
    
    for i, category in enumerate(TARGET_CATEGORIES):
        count = services_per_category + (1 if i < extra else 0)
        logger.info(f"  Generating {count} services for '{category}' category...")
        category_services = generate_services_for_category(category, count, existing_ids)
        new_services.extend(category_services)
        logger.info(f"  Created {len(category_services)} services for '{category}'")
    
    # Combine all services
    all_services = existing_services + new_services
    
    logger.info(f"Total services after generation: {len(all_services)}")
    logger.info(f"New services added: {len(new_services)}")
    
    # Save updated services
    logger.info("Step 4: Saving updated services catalog...")
    if save_services(all_services):
        logger.info("SUCCESS: Services catalog updated")
    else:
        logger.error("FAILED: Could not save services catalog")
        return False
    
    # Verify the update
    logger.info("Step 5: Verifying update...")
    try:
        with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
            verify_data = json.load(f)
        
        if isinstance(verify_data, list):
            total = len(verify_data)
            logger.info(f"Verified: {total} services in catalog")
            
            # Count new categories
            new_cat_counts = {}
            for cat in TARGET_CATEGORIES:
                count = sum(1 for s in verify_data if isinstance(s, dict) and s.get('category') == cat)
                new_cat_counts[cat] = count
            
            logger.info(f"Category counts after: {new_cat_counts}")
            
            # Verify all target categories have services
            all_filled = all(count > 0 for count in new_cat_counts.values())
            if all_filled:
                logger.info("SUCCESS: All target categories filled")
            else:
                missing = [k for k, v in new_cat_counts.items() if v == 0]
                logger.warning(f"WARNING: Some categories still empty: {missing}")
            
            return True
    except Exception as e:
        logger.error(f"Verification failed: {e}")
        return False


if __name__ == "__main__":
    success = main()
    logger.info("="*60)
    if success:
        logger.info("Seed Content Generator v2.0 completed successfully")
    else:
        logger.error("Seed Content Generator v2.0 completed with errors")
    logger.info("="*60)