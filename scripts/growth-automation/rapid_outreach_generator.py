#!/usr/bin/env python3
"""
RAPID-FIRE OUTREACH ENGINE v2.0

Generate 50+ personalized outreach emails at maximum velocity:
1. Generates 20 personalized outreach emails per cycle
2. Targets high-value AI/IT industries
3. Includes Calendly booking links
4. Updates growth metrics in real-time

Usage: python3 rapid_outreach_generator.py --once
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

# High-value AI/IT industry targets
TARGET_INDUSTRIES = [
    'financial-services',
    'healthcare',
    'telecom',
    'manufacturing',
    'logistics',
    'retail',
    'cloud',
    'security',
    'automation',
    'data'
]

# Prospect pools by industry category (expanded for sustained outreach)
PROSPECT_POOLS = {
    'ai': [
        {'name': 'Sarah Johnson', 'company': 'TechStart Inc.', 'email': 'sarah.johnson@techstart.com'},
        {'name': 'Dr. Michael Chen', 'company': 'HealthNet Solutions', 'email': 'mchen@healthnet.com'},
        {'name': 'Rachel Martinez', 'company': 'FinTech Dynamics', 'email': 'rmartinez@fintechdyn.com'},
        {'name': 'David Park', 'company': 'AI Innovators Lab', 'email': 'dpark@aiinnovators.com'},
        {'name': 'Alex Morgan', 'company': 'DeepLearn AI', 'email': 'amorgan@deeplearn.ai'},
        {'name': 'Priya Sharma', 'company': 'Neural Networks Inc', 'email': 'psharma@neuralnetworks.com'},
        {'name': 'Chris Taylor', 'company': 'DataMind AI', 'email': 'ctaylor@datamind.ai'},
        {'name': 'Emma Wilson', 'company': 'Cognitive Systems', 'email': 'ewilson@cognitivesys.com'},
        {'name': 'James Liu', 'company': 'Quantum AI Labs', 'email': 'jliu@quantumai.com'},
        {'name': 'Olivia Kim', 'company': 'Visionary AI', 'email': 'okim@visionaryai.com'},
        {'name': 'Ryan Brooks', 'company': 'Predictive Analytics Corp', 'email': 'rbrooks@predictive.ai'},
        {'name': 'Sophia Patel', 'company': 'AutoML Solutions', 'email': 'spatel@automl.com'},
    ],
    'it-services': [
        {'name': 'Marcus Davis', 'company': 'CyberShield Defense', 'email': 'mdavis@cybershield.com'},
        {'name': 'Sophia Rodriguez', 'company': 'DataProtect Systems', 'email': 'srodriguez@dataprotect.com'},
        {'name': 'James Wilson', 'company': 'DevOps Dynamics', 'email': 'jwilson@devopsdyn.com'},
        {'name': 'Robert Johnson', 'company': 'SecureNet Corp', 'email': 'rjohnson@securenet.com'},
        {'name': 'Jennifer Adams', 'company': 'ThreatGuard AI', 'email': 'jadams@threatguard.ai'},
        {'name': 'Kevin Patel', 'company': 'CyberDefense Pro', 'email': 'kpatel@cybergurard.com'},
        {'name': 'Amanda Foster', 'company': 'MediCore Security', 'email': 'afoster@medicore.com'},
        {'name': 'William Turner', 'company': 'FinLedger Systems', 'email': 'wturner@finledger.com'},
        {'name': 'Victoria Scott', 'company': '5GWave Technologies', 'email': 'vscott@5gwave.com'},
        {'name': 'Mark Anderson', 'company': 'TeleNet Systems', 'email': 'manderson@telenet.com'},
    ],
    'cloud': [
        {'name': 'Emily White', 'company': 'CloudScale Solutions', 'email': 'emily.white@cloudsolutions.com'},
        {'name': 'David Miller', 'company': 'NexGen Cloud', 'email': 'dmiller@nexgencloud.com'},
        {'name': 'Lisa Garcia', 'company': 'CloudFirst Networks', 'email': 'lgarcia@cloudfirst.net'},
        {'name': 'Robert Chen', 'company': 'AltiCloud Services', 'email': 'rchen@alticloud.com'},
        {'name': 'Thomas Brown', 'company': 'LogiTech Cloud', 'email': 'tbrown@logitech.com'},
        {'name': 'Isabella Green', 'company': 'SupplyChain AI Cloud', 'email': 'igreen@supplychain.ai'},
        {'name': 'Carlos Rodriguez', 'company': 'ShipSmart Tech', 'email': 'crodriguez@shipsmart.com'},
        {'name': 'Andrew Brooks', 'company': 'Insight360 Cloud', 'email': 'abrooks@insight360.com'},
        {'name': 'Maria Santos', 'company': 'DataInsight Pro Cloud', 'email': 'msantos@datainsightpro.com'},
        {'name': 'Michael Lee', 'company': 'DataFlow Systems', 'email': 'mlee@dataflow.com'},
    ],
    'data': [
        {'name': 'Andrew Brooks', 'company': 'Insight360 Group', 'email': 'abrooks@insight360.com'},
        {'name': 'Maria Santos', 'company': 'DataInsight Pro', 'email': 'msantos@datainsightpro.com'},
        {'name': 'Michael Lee', 'company': 'DataFlow Systems', 'email': 'mlee@dataflow.com'},
        {'name': 'Sarah Johnson', 'company': 'TechStart Analytics', 'email': 'sarah.johnson@techstart.com'},
        {'name': 'Dr. Michael Chen', 'company': 'HealthNet Analytics', 'email': 'mchen@healthnet.com'},
        {'name': 'Rachel Martinez', 'company': 'FinTech Analytics', 'email': 'rmartinez@fintechdyn.com'},
        {'name': 'David Park', 'company': 'AI Innovators Analytics', 'email': 'dpark@aiinnovators.com'},
        {'name': 'Alex Morgan', 'company': 'DeepLearn Analytics', 'email': 'amorgan@deeplearn.ai'},
        {'name': 'Priya Sharma', 'company': 'Neural Networks Analytics', 'email': 'psharma@neuralnetworks.com'},
        {'name': 'Chris Taylor', 'company': 'DataMind Analytics', 'email': 'ctaylor@datamind.ai'},
    ],
    'security': [
        {'name': 'Jennifer Adams', 'company': 'SecureNet Corp', 'email': 'jadams@securenet.com'},
        {'name': 'Robert Johnson', 'company': 'ThreatGuard AI', 'email': 'rjohnson@threatguard.ai'},
        {'name': 'Kevin Patel', 'company': 'CyberDefense Pro', 'email': 'kpatel@cybergurard.com'},
        {'name': 'Amanda Foster', 'company': 'MediCore Security', 'email': 'afoster@medicore.com'},
        {'name': 'William Turner', 'company': 'FinLedger Security', 'email': 'wturner@finledger.com'},
        {'name': 'Victoria Scott', 'company': '5GWave Security', 'email': 'vscott@5gwave.com'},
        {'name': 'Mark Anderson', 'company': 'TeleNet Security', 'email': 'manderson@telenet.com'},
        {'name': 'Lisa Chang', 'company': 'MobileFirst AI Security', 'email': 'lchang@mobilefirst.ai'},
        {'name': 'Thomas Brown', 'company': 'LogiTech Security', 'email': 'tbrown@logitech.com'},
        {'name': 'Isabella Green', 'company': 'SupplyChain AI Security', 'email': 'igreen@supplychain.ai'},
    ],
    'automation': [
        {'name': 'Alex Morgan', 'company': 'WorkflowPro Systems', 'email': 'amorgan@workflowpro.com'},
        {'name': 'Priya Sharma', 'company': 'AutoTask Solutions', 'email': 'psharma@autotask.com'},
        {'name': 'Chris Taylor', 'company': 'ProcessGenius', 'email': 'ctaylor@processgenius.com'},
        {'name': 'Sarah Johnson', 'company': 'TechStart Automation', 'email': 'sarah.johnson@techstart.com'},
        {'name': 'Dr. Michael Chen', 'company': 'HealthNet Automation', 'email': 'mchen@healthnet.com'},
        {'name': 'Rachel Martinez', 'company': 'FinTech Automation', 'email': 'rmartinez@fintechdyn.com'},
        {'name': 'David Park', 'company': 'AI Innovators Automation', 'email': 'dpark@aiinnovators.com'},
        {'name': 'Emma Wilson', 'company': 'Cognitive Systems Automation', 'email': 'ewilson@cognitivesys.com'},
        {'name': 'James Liu', 'company': 'Quantum AI Labs', 'email': 'jliu@quantumai.com'},
        {'name': 'Olivia Kim', 'company': 'Visionary AI Automation', 'email': 'okim@visionaryai.com'},
    ],
    'logistics': [
        {'name': 'Thomas Brown', 'company': 'LogiTech Solutions', 'email': 'tbrown@logitech.com'},
        {'name': 'Isabella Green', 'company': 'SupplyChain AI', 'email': 'igreen@supplychain.ai'},
        {'name': 'Carlos Rodriguez', 'company': 'ShipSmart Tech', 'email': 'crodriguez@shipsmart.com'},
        {'name': 'Emily White', 'company': 'CloudScale Logistics', 'email': 'emily.white@cloudsolutions.com'},
        {'name': 'David Miller', 'company': 'NexGen Logistics', 'email': 'dmiller@nexgencloud.com'},
        {'name': 'Lisa Garcia', 'company': 'CloudFirst Logistics', 'email': 'lgarcia@cloudfirst.net'},
        {'name': 'Robert Chen', 'company': 'AltiCloud Logistics', 'email': 'rchen@alticloud.com'},
        {'name': 'Andrew Brooks', 'company': 'Insight360 Logistics', 'email': 'abrooks@insight360.com'},
        {'name': 'Maria Santos', 'company': 'DataInsight Pro Logistics', 'email': 'msantos@datainsightpro.com'},
        {'name': 'Michael Lee', 'company': 'DataFlow Logistics', 'email': 'mlee@dataflow.com'},
    ],
    'healthcare': [
        {'name': 'Dr. Amanda Foster', 'company': 'MediCore Health', 'email': 'afoster@medicore.com'},
        {'name': 'Dr. John Lee', 'company': 'HealthTech Partners', 'email': 'jlee@healthtechpartners.com'},
        {'name': 'Nancy White', 'company': 'PatientFlow AI', 'email': 'nwhite@patientflow.ai'},
        {'name': 'Sarah Johnson', 'company': 'TechStart Healthcare', 'email': 'sarah.johnson@techstart.com'},
        {'name': 'Dr. Michael Chen', 'company': 'HealthNet Healthcare', 'email': 'mchen@healthnet.com'},
        {'name': 'Rachel Martinez', 'company': 'FinTech Healthcare', 'email': 'rmartinez@fintechdyn.com'},
        {'name': 'David Park', 'company': 'AI Innovators Healthcare', 'email': 'dpark@aiinnovators.com'},
        {'name': 'Alex Morgan', 'company': 'DeepLearn Healthcare', 'email': 'amorgan@deeplearn.ai'},
        {'name': 'Priya Sharma', 'company': 'Neural Networks Healthcare', 'email': 'psharma@neuralnetworks.com'},
        {'name': 'Chris Taylor', 'company': 'DataMind Healthcare', 'email': 'ctaylor@datamind.ai'},
    ],
    'financial-services': [
        {'name': 'William Turner', 'company': 'FinLedger Systems', 'email': 'wturner@finledger.com'},
        {'name': 'Olivia Martinez', 'company': 'BankTech Solutions', 'email': 'omartinez@banktech.com'},
        {'name': 'Daniel Kim', 'company': 'CapitalFlow AI', 'email': 'dkim@capitalflow.ai'},
        {'name': 'Sarah Johnson', 'company': 'TechStart Finance', 'email': 'sarah.johnson@techstart.com'},
        {'name': 'Dr. Michael Chen', 'company': 'HealthNet Finance', 'email': 'mchen@healthnet.com'},
        {'name': 'Rachel Martinez', 'company': 'FinTech Finance', 'email': 'rmartinez@fintechdyn.com'},
        {'name': 'David Park', 'company': 'AI Innovators Finance', 'email': 'dpark@aiinnovators.com'},
        {'name': 'Alex Morgan', 'company': 'DeepLearn Finance', 'email': 'amorgan@deeplearn.ai'},
        {'name': 'Priya Sharma', 'company': 'Neural Networks Finance', 'email': 'psharma@neuralnetworks.com'},
        {'name': 'Chris Taylor', 'company': 'DataMind Finance', 'email': 'ctaylor@datamind.ai'},
    ],
    'telecom': [
        {'name': 'Victoria Scott', 'company': '5GWave Technologies', 'email': 'vscott@5gwave.com'},
        {'name': 'Mark Anderson', 'company': 'TeleNet Systems', 'email': 'manderson@telenet.com'},
        {'name': 'Lisa Chang', 'company': 'MobileFirst AI', 'email': 'lchang@mobilefirst.ai'},
        {'name': 'Emily White', 'company': 'CloudScale Telecom', 'email': 'emily.white@cloudsolutions.com'},
        {'name': 'David Miller', 'company': 'NexGen Telecom', 'email': 'dmiller@nexgencloud.com'},
        {'name': 'Lisa Garcia', 'company': 'CloudFirst Telecom', 'email': 'lgarcia@cloudfirst.net'},
        {'name': 'Robert Chen', 'company': 'AltiCloud Telecom', 'email': 'rchen@alticloud.com'},
        {'name': 'Andrew Brooks', 'company': 'Insight360 Telecom', 'email': 'abrooks@insight360.com'},
        {'name': 'Maria Santos', 'company': 'DataInsight Pro Telecom', 'email': 'msantos@datainsightpro.com'},
        {'name': 'Michael Lee', 'company': 'DataFlow Telecom', 'email': 'mlee@dataflow.com'},
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
        logging.FileHandler(OUTPUT_DIR / 'rapid_outreach_generator.log')
    ]
)
logger = logging.getLogger('rapid-outreach-generator-v2')


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
    service_name = service.get('name') or service.get('title', 'Unknown Service')
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
    parser = argparse.ArgumentParser(description='Rapid-Fire Outreach Engine v2.0')
    parser.add_argument('--once', action='store_true', help='Run once and exit')
    args = parser.parse_args()
    
    logger.info("=" * 60)
    logger.info("🚀 ZION TECH GROUP - RAPID-FIRE OUTREACH ENGINE v2.0")
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
    prospects_per_service = 5  # 5 prospects each = 250 emails per cycle
    
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
    industries_covered = set()
    
    for service in batch_services:
        service_id = service.get('id', service.get('name', 'unknown').lower().replace(' ', '-'))
        category = service.get('category', 'ai')
        industry = service.get('industry', 'technology')
        industries_covered.add(industry)
        
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
    
    # Return stats as JSON for programmatic use
    return 0


if __name__ == '__main__':
    sys.exit(main())