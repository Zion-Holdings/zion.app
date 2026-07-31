#!/usr/bin/env python3
"""
RAPID-FIRE OUTREACH ENGINE v3.0

Generates 500+ personalized outreach emails at maximum velocity.
Integrated with Quantum Growth Accelerator output.

Usage: python3 rapid_fire_outreach_engine_v3.py --once --batch 500
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
    'data',
    '5g',
    'energy',
    'insurance',
    'real-estate',
    'gaming',
    'education',
    'media',
    'sports',
    'construction',
    'agriculture',
    'transportation',
    'legal',
    'hospitality',
    'automotive',
    'technology'
]

# Expanded prospect pools by industry category
PROSPECT_POOLS = {
    'ai': [
        {'name': 'Sarah Johnson', 'company': 'TechStart Inc.', 'email': 'sarah.johnson@techstart.com'},
        {'name': 'Dr. Michael Chen', 'company': 'HealthNet Solutions', 'email': 'mchen@healthnet.com'},
        {'name': 'Rachel Martinez', 'company': 'FinTech Dynamics', 'email': 'rmartinez@fintechdyn.com'},
        {'name': 'David Park', 'company': 'AI Innovators Lab', 'email': 'dpark@aiinnovators.com'},
        {'name': 'Lisa Wang', 'company': 'Neural Networks Corp', 'email': 'lwang@neuralcorp.com'},
    ],
    'it-services': [
        {'name': 'Marcus Davis', 'company': 'CyberShield Defense', 'email': 'mdavis@cybershield.com'},
        {'name': 'Sophia Rodriguez', 'company': 'DataProtect Systems', 'email': 'srodriguez@dataprotect.com'},
        {'name': 'James Wilson', 'company': 'DevOps Dynamics', 'email': 'jwilson@devopsdyn.com'},
        {'name': 'Alex Thompson', 'company': 'CloudFirst Tech', 'email': 'athompson@cloudfirsttech.com'},
        {'name': 'Maria Garcia', 'company': 'InfraSecure Solutions', 'email': 'mgarcia@infrasecure.com'},
    ],
    'cloud': [
        {'name': 'Emily White', 'company': 'CloudScale Solutions', 'email': 'emily.white@cloudsolutions.com'},
        {'name': 'David Miller', 'company': 'NexGen Cloud', 'email': 'dmiller@nexgencloud.com'},
        {'name': 'Lisa Garcia', 'company': 'CloudFirst Networks', 'email': 'lgarcia@cloudfirst.net'},
        {'name': 'Robert Chen', 'company': 'AltiCloud Services', 'email': 'rchen@alticloud.com'},
        {'name': 'Jennifer Lee', 'company': 'SkyNet Infrastructure', 'email': 'jlee@skynetinfra.com'},
    ],
    'data': [
        {'name': 'Andrew Brooks', 'company': 'Insight360 Group', 'email': 'abrooks@insight360.com'},
        {'name': 'Maria Santos', 'company': 'DataInsight Pro', 'email': 'msantos@datainsightpro.com'},
        {'name': 'Michael Lee', 'company': 'DataFlow Systems', 'email': 'mlee@dataflow.com'},
        {'name': 'Patricia Kim', 'company': 'DataSphere Analytics', 'email': 'pkim@datasphere.com'},
        {'name': 'Thomas Brown', 'company': 'BigData Ventures', 'email': 'tbrown@bigdataventures.com'},
    ],
    'security': [
        {'name': 'Jennifer Adams', 'company': 'SecureNet Corp', 'email': 'jadams@securenet.com'},
        {'name': 'Robert Johnson', 'company': 'ThreatGuard AI', 'email': 'rjohnson@threatguard.ai'},
        {'name': 'Kevin Patel', 'company': 'CyberDefense Pro', 'email': 'kpatel@cybergurard.com'},
        {'name': 'Amanda Foster', 'company': 'CryptoShield Security', 'email': 'afoster@cryptoshield.com'},
        {'name': 'Daniel Kim', 'company': 'PenTest Partners', 'email': 'dkim@pentestpartners.com'},
    ],
    'automation': [
        {'name': 'Alex Morgan', 'company': 'WorkflowPro Systems', 'email': 'amorgan@workflowpro.com'},
        {'name': 'Priya Sharma', 'company': 'AutoTask Solutions', 'email': 'psharma@autotask.com'},
        {'name': 'Chris Taylor', 'company': 'ProcessGenius', 'email': 'ctaylor@processgenius.com'},
        {'name': 'Sarah Miller', 'company': 'RPA Masters', 'email': 'smiller@rpamasters.com'},
        {'name': 'James Wilson', 'company': 'BotFlow Technologies', 'email': 'jwilson@botflow.com'},
    ],
    'logistics': [
        {'name': 'Thomas Brown', 'company': 'LogiTech Solutions', 'email': 'tbrown@logitech.com'},
        {'name': 'Isabella Green', 'company': 'SupplyChain AI', 'email': 'igreen@supplychain.ai'},
        {'name': 'Carlos Rodriguez', 'company': 'ShipSmart Tech', 'email': 'crodriguez@shipsmart.com'},
        {'name': 'Emily Johnson', 'company': 'FreightFlow Systems', 'email': 'ejohnson@freightflow.com'},
        {'name': 'Michael Chen', 'company': 'TransitTech AI', 'email': 'mchen@transittech.ai'},
    ],
    'healthcare': [
        {'name': 'Dr. Amanda Foster', 'company': 'MediCore Health', 'email': 'afoster@medicore.com'},
        {'name': 'Dr. John Lee', 'company': 'HealthTech Partners', 'email': 'jlee@healthtechpartners.com'},
        {'name': 'Nancy White', 'company': 'PatientFlow AI', 'email': 'nwhite@patientflow.ai'},
        {'name': 'Dr. Robert Smith', 'company': 'MediIntellect', 'email': 'rsmith@mediintellect.com'},
        {'name': 'Lisa Chang', 'company': 'HealthBridge Solutions', 'email': 'lchang@healthbridge.com'},
    ],
    'financial-services': [
        {'name': 'William Turner', 'company': 'FinLedger Systems', 'email': 'wturner@finledger.com'},
        {'name': 'Olivia Martinez', 'company': 'BankTech Solutions', 'email': 'omartinez@banktech.com'},
        {'name': 'Daniel Kim', 'company': 'CapitalFlow AI', 'email': 'dkim@capitalflow.ai'},
        {'name': 'Sarah Wilson', 'company': 'RiskAnalytics Pro', 'email': 'swilson@riskanalytics.com'},
        {'name': 'Michael Brown', 'company': 'WealthTech Group', 'email': 'mbrown@wealthtech.com'},
    ],
    'telecom': [
        {'name': 'Victoria Scott', 'company': '5GWave Technologies', 'email': 'vscott@5gwave.com'},
        {'name': 'Mark Anderson', 'company': 'TeleNet Systems', 'email': 'manderson@telenet.com'},
        {'name': 'Lisa Chang', 'company': 'MobileFirst AI', 'email': 'lchang@mobilefirst.ai'},
        {'name': 'David Park', 'company': 'Network5G Solutions', 'email': 'dpark@network5g.com'},
        {'name': 'Jennifer Lee', 'company': 'Cellular Intelligence', 'email': 'jlee@cellularintel.com'},
    ],
    '5g': [
        {'name': 'Andrew Chen', 'company': '5G Innovators Inc', 'email': 'achen@5ginnovators.com'},
        {'name': 'Maria Rodriguez', 'company': 'UltraFast Networks', 'email': 'mrodriguez@ultrafast.com'},
        {'name': 'Robert Kim', 'company': '5G Dynamics', 'email': 'rkim@5gdynamics.com'},
        {'name': 'Sophia Patel', 'company': 'NextGen Wireless', 'email': 'spatel@nextgenwireless.com'},
        {'name': 'Thomas Wright', 'company': '5G Systems Group', 'email': 'twright@5gsystems.com'},
    ],
    'energy': [
        {'name': 'James Anderson', 'company': 'GridTech Solutions', 'email': 'janderson@gridtech.com'},
        {'name': 'Lisa Zhang', 'company': 'SmartEnergy AI', 'email': 'lzhang@smartenergy.ai'},
        {'name': 'Michael Thompson', 'company': 'PowerFlow Systems', 'email': 'mthompson@powerflow.com'},
        {'name': 'Emily Davis', 'company': 'Renewable Intelligence', 'email': 'edavis@renewableintel.com'},
        {'name': 'David Wilson', 'company': 'EnergyNet Pro', 'email': 'dwilson@energynetpro.com'},
    ],
    'insurance': [
        {'name': 'Rachel Green', 'company': 'InsureTech Partners', 'email': 'rgreen@insuretech.com'},
        {'name': 'Kevin Martinez', 'company': 'ClaimsAI Solutions', 'email': 'kmartinez@claimsai.com'},
        {'name': 'Sarah Taylor', 'company': 'RiskFlow Systems', 'email': 'staylor@riskflow.com'},
        {'name': 'Robert Lee', 'company': 'PolicyGenius AI', 'email': 'rlee@policygenius.ai'},
        {'name': 'Amanda White', 'company': 'UnderwritePro', 'email': 'awhite@underwritepro.com'},
    ],
    'manufacturing': [
        {'name': 'Thomas Anderson', 'company': 'FactoryAI Systems', 'email': 'tanderson@factoryai.com'},
        {'name': 'Lisa Martinez', 'company': 'ProductionTech Group', 'email': 'lmartinez@productiontech.com'},
        {'name': 'Michael Chen', 'company': 'Manufacturing Intelligence', 'email': 'mchen@manufacturingintel.com'},
        {'name': 'Jennifer Wu', 'company': 'Process Optimization Inc', 'email': 'jwu@processopt.com'},
        {'name': 'David Kim', 'company': 'Industrial AI Pro', 'email': 'dkim@industrialai.com'},
    ],
    'retail': [
        {'name': 'Sarah Miller', 'company': 'RetailAI Solutions', 'email': 'smiller@retailai.com'},
        {'name': 'James Wilson', 'company': 'StoreTech Systems', 'email': 'jwilson@storetech.com'},
        {'name': 'Emily Johnson', 'company': 'POS Intelligence', 'email': 'ejohnson@posintel.com'},
        {'name': 'Robert Brown', 'company': 'Ecommerce AI Pro', 'email': 'rbrown@ecommerceai.com'},
        {'name': 'Maria Garcia', 'company': 'CustomerFlow Analytics', 'email': 'mgarcia@customerflow.com'},
    ],
    'real-estate': [
        {'name': 'Mark Stevens', 'company': 'PropTech AI', 'email': 'mstevens@proptechai.com'},
        {'name': 'Lisa Anderson', 'company': 'RealEstate Intelligence', 'email': 'landerson@realestateintel.com'},
        {'name': 'David Lee', 'company': 'PropertyFlow Systems', 'email': 'dlee@propertyflow.com'},
        {'name': 'Sarah Kim', 'company': 'LeaseTech Solutions', 'email': 'skim@leasetech.com'},
        {'name': 'Michael Torres', 'company': 'DealAI Pro', 'email': 'mtorres@dealaipr.com'},
    ],
    'gaming': [
        {'name': 'Alex Hunter', 'company': 'GameTech AI', 'email': 'ahunter@gametechai.com'},
        {'name': 'Sophia Rivera', 'company': 'Player Analytics Inc', 'email': 'srivera@playeranalytics.com'},
        {'name': 'James Carter', 'company': 'GameFlow Systems', 'email': 'jcarter@gameflow.com'},
        {'name': 'Emily Chen', 'company': 'LootBox Intelligence', 'email': 'echen@lootboxintel.com'},
        {'name': 'Robert Kim', 'company': 'Esports AI Pro', 'email': 'rkim@esportsai.com'},
    ],
    'education': [
        {'name': 'Dr. Karen White', 'company': 'EdTech AI Solutions', 'email': 'kwhite@edtechai.com'},
        {'name': 'Michael Brown', 'company': 'Learning Intelligence', 'email': 'mbrown@learningintel.com'},
        {'name': 'Sarah Davis', 'company': 'Classroom Tech Pro', 'email': 'sdavis@classroomtech.com'},
        {'name': 'James Wilson', 'company': 'EduFlow Systems', 'email': 'jwilson@eduflow.com'},
        {'name': 'Lisa Martinez', 'company': 'Student Analytics AI', 'email': 'lmartinez@studentanalytics.com'},
    ],
    'media': [
        {'name': 'Robert Taylor', 'company': 'MediaAI Solutions', 'email': 'rtaylor@mediaai.com'},
        {'name': 'Amanda Clark', 'company': 'Content Intelligence', 'email': 'aclark@contentintel.com'},
        {'name': 'David Lee', 'company': 'Streaming Tech Pro', 'email': 'dlee@streamingtech.com'},
        {'name': 'Sarah Kim', 'company': 'Audience Flow AI', 'email': 'skim@audienceflow.com'},
        {'name': 'Michael Chen', 'company': 'AdTech Intelligence', 'email': 'mchen@adtechintel.com'},
    ],
    'logistics': [
        {'name': 'Thomas Brown', 'company': 'LogiTech Solutions', 'email': 'tbrown@logitech.com'},
        {'name': 'Isabella Green', 'company': 'SupplyChain AI', 'email': 'igreen@supplychain.ai'},
        {'name': 'Carlos Rodriguez', 'company': 'ShipSmart Tech', 'email': 'crodriguez@shipsmart.com'},
        {'name': 'Emily Johnson', 'company': 'FreightFlow Systems', 'email': 'ejohnson@freightflow.com'},
        {'name': 'Michael Chen', 'company': 'TransitTech AI', 'email': 'mchen@transittech.ai'},
    ],
    'agriculture': [
        {'name': 'William Harris', 'company': 'AgriTech AI', 'email': 'wharris@agritechai.com'},
        {'name': 'Lisa Thompson', 'company': 'Farm Intelligence', 'email': 'lthompson@farmintel.com'},
        {'name': 'Robert Garcia', 'company': 'CropFlow Systems', 'email': 'rgarcia@cropflow.com'},
        {'name': 'Sarah Miller', 'company': 'HarvestTech Pro', 'email': 'smiller@harvesttech.com'},
        {'name': 'David Kim', 'company': 'Precision Ag AI', 'email': 'dkim@precisionag.com'},
    ],
    'transportation': [
        {'name': 'James Wilson', 'company': 'TransitAI Solutions', 'email': 'jwilson@transitaix.com'},
        {'name': 'Emily Davis', 'company': 'Mobility Intelligence', 'email': 'edavis@mobilityintel.com'},
        {'name': 'Michael Chen', 'company': 'FleetTech Pro', 'email': 'mchen@fleettech.com'},
        {'name': 'Sarah Lee', 'company': 'AutoFlow AI', 'email': 'slee@autoflow.ai'},
        {'name': 'Robert Kim', 'company': 'Route Optimization Inc', 'email': 'rkim@routeopt.com'},
    ],
    'automotive': [
        {'name': 'David Park', 'company': 'AutoAI Solutions', 'email': 'dpark@autoai.com'},
        {'name': 'Lisa Anderson', 'company': 'Vehicle Intelligence', 'email': 'landerson@vehicleintel.com'},
        {'name': 'Michael Chen', 'company': 'CarTech Pro', 'email': 'mchen@cartechpro.com'},
        {'name': 'Sarah Miller', 'company': 'DriveFlow AI', 'email': 'smiller@driveflow.ai'},
        {'name': 'James Wilson', 'company': 'SmartAuto Systems', 'email': 'jwilson@smartauto.com'},
    ],
    'hospitality': [
        {'name': 'Amanda Roberts', 'company': 'HotelAI Solutions', 'email': 'aroberts@hotelai.com'},
        {'name': 'Thomas Chen', 'company': 'Guest Intelligence', 'email': 'tchen@guestintel.com'},
        {'name': 'Lisa Martinez', 'company': 'BistroTech Pro', 'email': 'lmartinez@bistrotech.com'},
        {'name': 'Michael Lee', 'company': 'StayFlow AI', 'email': 'mlee@stayflow.ai'},
        {'name': 'Sarah Kim', 'company': 'ServiceTech Systems', 'email': 'skim@servicetech.com'},
    ],
    'legal': [
        {'name': 'Robert Clark', 'company': 'LegalTech AI', 'email': 'rclark@legaltecha.com'},
        {'name': 'Sarah Wilson', 'company': 'CourtTech Solutions', 'email': 'swilson@courttech.com'},
        {'name': 'Michael Brown', 'company': 'CaseFlow Pro', 'email': 'mbrown@caseflow.com'},
        {'name': 'Lisa Davis', 'company': 'LawAI Intelligence', 'email': 'ldavis@lawaiintel.com'},
        {'name': 'James Anderson', 'company': 'DocuTech AI', 'email': 'janderson@docutechai.com'},
    ],
    'sports': [
        {'name': 'Kevin Johnson', 'company': 'SportsAI Solutions', 'email': 'kent@portsai.com'},
        {'name': 'Emily White', 'company': 'Athlete Intelligence', 'email': 'ewhite@athleteintel.com'},
        {'name': 'David Lee', 'company': 'GameTech Pro', 'email': 'dlee@gametechpro.com'},
        {'name': 'Sarah Kim', 'company': 'TeamFlow AI', 'email': 'skim@teamflow.ai'},
        {'name': 'Michael Chen', 'company': 'StatsTech Systems', 'email': 'mchen@statstech.com'},
    ],
    'construction': [
        {'name': 'William Turner', 'company': 'BuildTech AI', 'email': 'wturner@buildtechai.com'},
        {'name': 'Lisa Garcia', 'company': 'Site Intelligence', 'email': 'lgarcia@siteintel.com'},
        {'name': 'Michael Chen', 'company': 'PlanFlow Pro', 'email': 'mchen@planflow.com'},
        {'name': 'Sarah Miller', 'company': 'ConstructTech Systems', 'email': 'smiller@constructtech.com'},
        {'name': 'James Wilson', 'company': 'Project AI Pro', 'email': 'jwilson@projectaipro.com'},
    ],
    'agriculture': [
        {'name': 'William Harris', 'company': 'AgriTech AI', 'email': 'wharris@agritechai.com'},
        {'name': 'Lisa Thompson', 'company': 'Farm Intelligence', 'email': 'lthompson@farmintel.com'},
        {'name': 'Robert Garcia', 'company': 'CropFlow Systems', 'email': 'rgarcia@cropflow.com'},
        {'name': 'Sarah Miller', 'company': 'HarvestTech Pro', 'email': 'smiller@harvesttech.com'},
        {'name': 'David Kim', 'company': 'Precision Ag AI', 'email': 'dkim@precisionag.com'},
    ],
}

# Fallback prospect pool for unknown categories
FALLBACK_PROSPECTS = [
    {'name': 'Robert Johnson', 'company': 'LegalTech Partners', 'email': 'rjohnson@legaltech.com'},
    {'name': 'Emily White', 'company': 'ComplianceFirst Group', 'email': 'ewhite@compliancefirst.com'},
    {'name': 'James Wilson', 'company': 'ContractFlow AI', 'email': 'jwilson@contractflow.ai'},
    {'name': 'Sarah Chen', 'company': 'Business Solutions Inc', 'email': 'schen@businesssolutions.com'},
    {'name': 'Michael Lee', 'company': 'Enterprise AI Group', 'email': 'mlee@enterpriseai.com'},
]

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)-15s [%(levelname)-8s] %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(OUTPUT_DIR / 'rapid_fire_outreach_engine_v3.log')
    ]
)
logger = logging.getLogger('rapid-fire-outreach-engine-v3')


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
    service_id = service.get('id', service_name.lower().replace(' ', '-').replace('/', '-'))
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
    parser = argparse.ArgumentParser(description='Rapid-Fire Outreach Engine v3.0')
    parser.add_argument('--once', action='store_true', help='Run once and exit')
    parser.add_argument('--batch', type=int, default=500, help='Number of services to process in this batch (default: 500)')
    args = parser.parse_args()
    
    # Ensure batch is at least 50
    batch_size = max(args.batch, 50)
    
    logger.info("=" * 60)
    logger.info("🚀 ZION TECH GROUP - RAPID-FIRE OUTREACH ENGINE v3.0")
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
    prospects_per_service = 4  # 4 prospects each = ~2000 emails per 500 services
    
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
    logger.info(f"[📦] Batch size: {batch_size} services, {prospects_per_service} prospects each")
    
    # Generate emails
    emails_generated = 0
    industries_covered = set()
    
    for service in batch_services:
        service_id = service.get('id', service.get('name', 'unknown').lower().replace(' ', '-').replace('/', '-'))
        category = service.get('category', 'ai')
        industry = service.get('industry', 'technology')
        industries_covered.add(industry)
        
        # Get prospects for this service's category
        prospects = get_prospects_for_category(category)
        
        # Generate up to 4 emails per service
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
    logger.info(f"[🏭] Industries covered: {len(industries_covered)}")
    
    # Return stats as JSON for programmatic use
    stats = {
        'emails_generated': emails_generated,
        'total_sent': new_count,
        'batch_size': batch_size,
        'rotation': rotation,
        'industries_covered': list(industries_covered)
    }
    logger.info(f"[📊] Stats: {json.dumps(stats)}")
    
    return 0


if __name__ == '__main__':
    sys.exit(main())