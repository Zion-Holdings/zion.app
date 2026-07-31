#!/usr/bin/env python3
"""
Rapid-Fire Outreach Engine v1.0

Generates 150+ personalized outreach emails with Calendly integration.
Processes 50 services per cycle with 3 prospects each for maximum throughput.

Usage: python3 rapid_fire_outreach_engine.py --once
"""

import sys
import json
import argparse
import logging
import random
import hashlib
from pathlib import Path
from datetime import datetime

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE_DIR / 'app' / 'data' / 'servicesData.json'
OUTPUT_DIR = BASE_DIR / 'outreach_monitor' / 'processed'
EMAIL_DRAFTS_DIR = BASE_DIR / 'email_drafts'
SENT_LOG_FILE = OUTPUT_DIR / 'rapid_outreach_sent.jsonl'
ROTATION_FILE = OUTPUT_DIR / 'rapid_outreach_rotation.txt'
COUNT_FILE = OUTPUT_DIR / 'rapid_outreach_count.txt'

CALADLY_URI = 'https://calendly.com/kleber-ziontechgroup/consultation'
ZION_WEBSITE = 'https://ziontechgroup.com'

# Prospect pools by industry category
PROSPECT_POOLS = {
    'ai': [
        {'name': 'Sarah Johnson', 'company': 'TechStart Inc.', 'email': 'sarah.johnson@techstart.com'},
        {'name': 'Dr. Michael Chen', 'company': 'HealthNet Solutions', 'email': 'mchen@healthnet.com'},
        {'name': 'Rachel Martinez', 'company': 'FinTech Dynamics', 'email': 'rmartinez@fintechdyn.com'},
    ],
    'it-services': [
        {'name': 'Marcus Davis', 'company': 'CyberShield Defense', 'email': 'mdavis@cybershield.com'},
        {'name': 'Sophia Rodriguez', 'company': 'DataProtect Systems', 'email': 'srodriguez@dataprotect.com'},
        {'name': 'James Wilson', 'company': 'DevOps Dynamics', 'email': 'jwilson@devopsdyn.com'},
    ],
    'cloud': [
        {'name': 'Emily White', 'company': 'CloudScale Solutions', 'email': 'emily.white@cloudsolutions.com'},
        {'name': 'David Miller', 'company': 'NexGen Cloud', 'email': 'dmiller@nexgencloud.com'},
        {'name': 'Lisa Garcia', 'company': 'CloudFirst Networks', 'email': 'lgarcia@cloudfirst.net'},
    ],
    'data': [
        {'name': 'Andrew Brooks', 'company': 'Insight360 Group', 'email': 'abrooks@insight360.com'},
        {'name': 'Maria Santos', 'company': 'DataInsight Pro', 'email': 'msantos@datainsightpro.com'},
        {'name': 'Michael Lee', 'company': 'DataFlow Systems', 'email': 'mlee@dataflow.com'},
    ],
    'security': [
        {'name': 'Jennifer Adams', 'company': 'SecureNet Corp', 'email': 'jadams@securenet.com'},
        {'name': 'Robert Johnson', 'company': 'ThreatGuard AI', 'email': 'rjohnson@threatguard.ai'},
        {'name': 'Kevin Patel', 'company': 'CyberDefense Pro', 'email': 'kpatel@cybergurard.com'},
    ],
    'automation': [
        {'name': 'Alex Morgan', 'company': 'WorkflowPro Systems', 'email': 'amorgan@workflowpro.com'},
        {'name': 'Priya Sharma', 'company': 'AutoTask Solutions', 'email': 'psharma@autotask.com'},
        {'name': 'Chris Taylor', 'company': 'ProcessGenius', 'email': 'ctaylor@processgenius.com'},
    ],
    'logistics': [
        {'name': 'Thomas Brown', 'company': 'LogiTech Solutions', 'email': 'tbrown@logitech.com'},
        {'name': 'Isabella Green', 'company': 'SupplyChain AI', 'email': 'igreen@supplychain.ai'},
        {'name': 'Carlos Rodriguez', 'company': 'ShipSmart Tech', 'email': 'crodriguez@shipsmart.com'},
    ],
    'healthcare': [
        {'name': 'Dr. Amanda Foster', 'company': 'MediCore Health', 'email': 'afoster@medicore.com'},
        {'name': 'Dr. John Lee', 'company': 'HealthTech Partners', 'email': 'jlee@healthtechpartners.com'},
        {'name': 'Nancy White', 'company': 'PatientFlow AI', 'email': 'nwhite@patientflow.ai'},
    ],
    'financial-services': [
        {'name': 'William Turner', 'company': 'FinLedger Systems', 'email': 'wturner@finledger.com'},
        {'name': 'Olivia Martinez', 'company': 'BankTech Solutions', 'email': 'omartinez@banktech.com'},
        {'name': 'Daniel Kim', 'company': 'CapitalFlow AI', 'email': 'dkim@capitalflow.ai'},
    ],
}

# Fallback prospect pool for unknown categories
FALLBACK_PROSPECTS = [
    {'name': 'Robert Johnson', 'company': 'LegalTech Partners', 'email': 'rjohnson@legaltech.com'},
    {'name': 'Emily White', 'company': 'ComplianceFirst Group', 'email': 'ewhite@compliancefirst.com'},
    {'name': 'James Wilson', 'company': 'ContractFlow AI', 'email': 'jwilson@contractflow.ai'},
]

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)-15s [%(levelname)-8s] %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(OUTPUT_DIR / 'rapid_fire_outreach_engine.log')
    ]
)
logger = logging.getLogger('rapid-fire-outreach-engine')


def load_services():
    """Load services from the data file."""
    if SERVICES_FILE.exists():
        try:
            with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, dict) and 'services' in data:
                    return data['services']
                elif isinstance(data, list):
                    return data
                else:
                    logger.warning(f"Unexpected data format in services file")
                    return []
        except json.JSONDecodeError as e:
            logger.error(f"JSON parsing error in services file: {e}")
            return []
        except Exception as e:
            logger.warning(f"Could not load services file: {e}")
            return []
    logger.warning(f"Services file not found: {SERVICES_FILE}")
    return []


def get_rotation():
    """Get current batch rotation number."""
    try:
        if ROTATION_FILE.exists():
            with open(ROTATION_FILE, 'r') as f:
                return int(f.read().strip())
    except Exception as e:
        logger.warning(f"Could not read rotation file: {e}")
    return 0


def save_rotation(rotation):
    """Save batch rotation number."""
    try:
        with open(ROTATION_FILE, 'w') as f:
            f.write(str(rotation))
    except Exception as e:
        logger.warning(f"Could not save rotation file: {e}")


def get_sent_count():
    """Get total count of sent emails."""
    try:
        if COUNT_FILE.exists():
            with open(COUNT_FILE, 'r') as f:
                return int(f.read().strip())
    except Exception:
        pass
    return 0


def save_sent_count(count):
    """Save total sent count."""
    try:
        with open(COUNT_FILE, 'w') as f:
            f.write(str(count))
    except Exception as e:
        logger.warning(f"Could not save count file: {e}")


def has_been_sent(service_id, prospect_email):
    """Check if this service+prospect combination has already been sent."""
    if not SENT_LOG_FILE.exists():
        return False
    
    key = f"{service_id}:{prospect_email}"
    try:
        with open(SENT_LOG_FILE, 'r') as f:
            for line in f:
                if line.strip() == key:
                    return True
    except Exception as e:
        logger.warning(f"Error checking sent log: {e}")
    return False


def mark_sent(service_id, prospect_email):
    """Mark this service+prospect combination as sent."""
    key = f"{service_id}:{prospect_email}"
    try:
        with open(SENT_LOG_FILE, 'a') as f:
            f.write(key + '\n')
    except Exception as e:
        logger.warning(f"Error writing to sent log: {e}")


def get_prospects_for_category(category):
    """Get prospects for a given service category."""
    # Normalize category name
    cat_key = category.lower().replace('-', '_')
    
    # Check direct match
    if cat_key in PROSPECT_POOLS:
        return PROSPECT_POOLS[cat_key]
    
    # Check if category exists as-is
    if category in PROSPECT_POOLS:
        return PROSPECT_POOLS[category]
    
    # Fallback to 'ai' category for unknown categories
    return PROSPECT_POOLS.get('ai', FALLBACK_PROSPECTS)


def generate_email(service, prospect, batch_num):
    """Generate a personalized outreach email."""
    service_name = service.get('name', 'Unknown Service')
    service_id = service.get('id', service_name.lower().replace(' ', '-'))
    description = service.get('description', '')
    category = service.get('category', 'ai')
    industry = service.get('industry', 'technology')
    features = service.get('features', [])
    benefits = service.get('benefits', [])
    pricing = service.get('pricing', {})
    
    # Handle string pricing (malformed JSON) - try to parse or use defaults
    if isinstance(pricing, str):
        try:
            import re
            # Try to extract pricing values from string like "{ basic: "$149/mo", pro: "$549/mo", enterprise: "$1,799/mo" }"
            basic_match = re.search(r'basic:\s*["\']?([\d,]+(?:\.\d+)?)\s*(?:mo)?["\']?', pricing)
            pro_match = re.search(r'pro:\s*["\']?([\d,]+(?:\.\d+)?)\s*(?:mo)?["\']?', pricing)
            enterprise_match = re.search(r'enterprise:\s*["\']?([\d,]+(?:\.\d+)?|Custom)\s*(?:mo)?["\']?', pricing)
            pricing = {
                'basic': f'${basic_match.group(1) if basic_match else "299"}' if basic_match else '$299',
                'pro': f'${pro_match.group(1) if pro_match else "799"}' if pro_match else '$799',
                'enterprise': f'${enterprise_match.group(1) if enterprise_match else "2499"}' if enterprise_match else '$2,499'
            }
        except Exception:
            pricing = {}  # Fallback to defaults
    
    # Get prospect info
    prospect_name = prospect['name']
    prospect_company = prospect['company']
    prospect_email = prospect['email']
    
    # Generate subject line
    subject = f"{service_name} - {industry.replace('-', ' ').title()} Optimization"
    
    # Build email body
    body = f"""Subject: {subject}

Hi {prospect_name},

I'm Kleber from Zion Tech Group, and I wanted to reach out with a solution that could significantly impact {prospect_company}'s {industry.replace('-', ' ')} operations.

**{service_name}**
{description}

**Key Benefits for {industry.replace('-', ' ').title()}:**
"""
    
    # Add benefits
    for benefit in benefits[:3]:
        body += f"- {benefit}\n"
    
    # Add pricing
    body += f"""
**Pricing:**
- Basic: {pricing.get('basic', '$299')}/month
- Pro: {pricing.get('pro', '$799')}/month  
- Enterprise: {pricing.get('enterprise', '$2,499')}/month

**Book a free 30-minute consultation:** {CALADLY_URI}

Best regards,
Kleber Garcia Alcatão
CEO, Zion Tech Group
ziontechgroup.com
"""
    
    return {
        'subject': subject,
        'body': body,
        'service_id': service_id,
        'service_name': service_name,
        'prospect_name': prospect_name,
        'prospect_company': prospect_company,
        'prospect_email': prospect_email,
        'category': category,
        'industry': industry,
        'calendly': CALADLY_URI,
        'generated_at': datetime.utcnow().isoformat(),
        'batch': batch_num
    }


def save_email_draft(email, idx):
    """Save email draft to file."""
    EMAIL_DRAFTS_DIR.mkdir(parents=True, exist_ok=True)
    filename = f"{email['service_id']}_{email['prospect_name'].lower().replace(' ', '_')}_{idx}_outreach.txt"
    filepath = EMAIL_DRAFTS_DIR / filename
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(email['body'])
    
    return str(filepath)


def main():
    parser = argparse.ArgumentParser(description='Rapid-Fire Outreach Engine')
    parser.add_argument('--once', action='store_true', help='Run once and exit')
    args = parser.parse_args()
    
    logger.info("=" * 60)
    logger.info("🚀 ZION TECH GROUP - RAPID-FIRE OUTREACH ENGINE v1.0")
    logger.info("=" * 60)
    
    # Load services
    services = load_services()
    if not services:
        logger.error("No services loaded. Exiting.")
        return 1
    
    total_services = len(services)
    logger.info(f"[ℹ️] Loaded {total_services} services")
    
    # Get current rotation
    rotation = get_rotation()
    batch_size = 50  # 50 services per cycle
    prospects_per_service = 3  # 3 prospects each = 150 emails per cycle
    
    # Calculate service indices for this batch
    start_idx = (rotation * batch_size) % total_services
    end_idx = min(start_idx + batch_size, total_services)
    
    # Get services for this batch
    batch_services = services[start_idx:end_idx]
    if not batch_services:
        logger.warning("No services in current batch. Resetting rotation.")
        save_rotation(0)
        rotation = 0
        start_idx = 0
        end_idx = min(batch_size, total_services)
        batch_services = services[start_idx:end_idx]
    
    logger.info(f"[🔄] Batch {rotation}: processing services [{start_idx}-{end_idx})")
    
    # Generate emails
    emails_generated = 0
    for service in batch_services:
        service_id = service.get('id', service.get('name', 'unknown').lower().replace(' ', '-'))
        category = service.get('category', 'ai')
        
        # Get prospects for this service's category
        prospects = get_prospects_for_category(category)
        
        # Generate up to 3 emails per service
        for i, prospect in enumerate(prospects[:prospects_per_service]):
            # Check if already sent
            if has_been_sent(service_id, prospect['email']):
                continue
            
            # Generate email
            email = generate_email(service, prospect, rotation)
            
            # Save draft
            filepath = save_email_draft(email, i)
            
            # Mark as sent
            mark_sent(service_id, prospect['email'])
            
            emails_generated += 1
            logger.info(f"[📧] Generated outreach: {prospect['name']} @ {prospect['company']}")
    
    # Update rotation for next run
    next_rotation = rotation + 1
    if end_idx >= total_services:
        next_rotation = 0  # Wrap around
    save_rotation(next_rotation)
    
    # Update sent count
    current_count = get_sent_count()
    new_count = current_count + emails_generated
    save_sent_count(new_count)
    
    logger.info(f"[✅] Generated {emails_generated} outreach emails")
    logger.info(f"[📈] Total sent: {new_count}")
    logger.info(f"[🔗] Calendly: {CALADLY_URI}")
    
    return 0


if __name__ == '__main__':
    sys.exit(main())