#!/usr/bin/env python3
"""
Service Quality Validator v1.0
Validates service quality metrics and ensures all services meet minimum standards
"""

import json
import sys
from pathlib import Path
from datetime import datetime, timezone
import logging

# Configuration
SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')
LOG_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/service_quality_validator.log')

def setup_logging():
    """Setup logging."""
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
    return logging.getLogger('service-quality-validator')

logger = setup_logging()

def load_services():
    """Load services from JSON file."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        else:
            return []
    except Exception as e:
        logger.error(f"Error loading services: {e}")
        return []

def validate_service(service):
    """Validate a single service meets quality standards."""
    issues = []
    
    # Check required fields
    required_fields = ['id', 'name', 'description', 'category', 'industry', 'features', 'benefits', 'pricing']
    for field in required_fields:
        if field not in service or not service[field]:
            issues.append(f"Missing or empty field: {field}")
    
    # Check name length
    if 'name' in service and len(service['name']) < 10:
        issues.append(f"Name too short: {service['name']}")
    
    # Check description length
    if 'description' in service and len(service['description']) < 50:
        issues.append(f"Description too short for: {service.get('name', 'unknown')}")
    
    # Check features count
    if 'features' in service and len(service['features']) < 3:
        issues.append(f"Insufficient features ({len(service['features'])}) for: {service.get('name', 'unknown')}")
    
    # Check benefits count
    if 'benefits' in service and len(service['benefits']) < 2:
        issues.append(f"Insufficient benefits ({len(service['benefits'])}) for: {service.get('name', 'unknown')}")
    
    # Check pricing tiers
    if 'pricing' in service:
        pricing = service['pricing']
        required_tiers = ['basic', 'pro', 'enterprise']
        for tier in required_tiers:
            if tier not in pricing:
                issues.append(f"Missing pricing tier: {tier}")
    
    # Check for valid ID
    if 'id' in service and not service['id']:
        issues.append("Invalid service ID")
    
    return len(issues) == 0, issues

def main():
    """Main validation function."""
    logger.info("=" * 70)
    logger.info("✅ SERVICE QUALITY VALIDATOR v1.0")
    logger.info("=" * 70)
    
    services = load_services()
    logger.info(f"[ℹ️] Loaded {len(services)} services for validation")
    
    valid_count = 0
    invalid_count = 0
    all_issues = []
    
    for i, service in enumerate(services, 1):
        is_valid, issues = validate_service(service)
        
        if is_valid:
            valid_count += 1
        else:
            invalid_count += 1
            all_issues.extend(issues)
            
            if i <= 10:  # Log first 10 invalid services
                logger.warning(f"[❌] Invalid service #{i}: {service.get('name', 'unknown')}")
                for issue in issues:
                    logger.warning(f"    - {issue}")
    
    # Summary
    logger.info("=" * 70)
    logger.info("📊 VALIDATION SUMMARY")
    logger.info("=" * 70)
    logger.info(f"Total services validated: {len(services)}")
    logger.info(f"Valid services: {valid_count}")
    logger.info(f"Invalid services: {invalid_count}")
    logger.info(f"Quality score: {(valid_count / len(services) * 100):.1f}%")
    
    if invalid_count > 0:
        logger.warning(f"[⚠️] Found {invalid_count} services with quality issues")
        logger.warning(f"Total issues: {len(all_issues)}")
    else:
        logger.info("[✅] All services meet quality standards!")
    
    result = {
        'status': 'success',
        'total_services': len(services),
        'valid_services': valid_count,
        'invalid_services': invalid_count,
        'quality_score': (valid_count / len(services) * 100) if services else 100,
        'issues_found': len(all_issues),
        'timestamp': datetime.now(timezone.utc).isoformat()
    }
    
    print("\n" + "=" * 70)
    print("📋 VALIDATION REPORT")
    print("=" * 70)
    print(json.dumps(result, indent=2))
    
    return result

if __name__ == '__main__':
    result = main()