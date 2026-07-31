#!/usr/bin/env python3
"""Regenerate outreach messages for new services."""

import json
import random
from datetime import datetime, timezone
from pathlib import Path

BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE_DIR / 'zion-support.github.io' / 'app' / 'data' / 'servicesData.json'
OUTREACH_FILE = BASE_DIR / 'scripts' / 'outreach' / 'hyper_outreach_queue.jsonl'

PROSPECT_POOLS = {
    'technology': [
        {'name': 'Sarah Johnson', 'company': 'TechStart Inc.', 'email': 'sarah.johnson@techstart.com', 'role': 'CTO'},
        {'name': 'Dr. Michael Chen', 'company': 'DataFlow Systems', 'email': 'mchen@dataflow.com', 'role': 'Head of Data Science'},
        {'name': 'Rachel Martinez', 'company': 'CloudScale Solutions', 'email': 'rmartinez@cloudsolutions.com', 'role': 'VP Engineering'},
    ],
    'healthcare': [
        {'name': 'Dr. Amanda Foster', 'company': 'MediCore Health', 'email': 'afoster@medicore.com', 'role': 'CMO'},
        {'name': 'Dr. John Lee', 'company': 'HealthTech Partners', 'email': 'jlee@healthtechpartners.com', 'role': 'Director of Innovation'},
        {'name': 'Nancy White', 'company': 'PatientFlow AI', 'email': 'nwhite@patientflow.ai', 'role': 'CEO'},
    ],
    'finance': [
        {'name': 'William Turner', 'company': 'FinLedger Systems', 'email': 'wturner@finledger.com', 'role': 'Head of Digital Transformation'},
        {'name': 'Olivia Martinez', 'company': 'BankTech Solutions', 'email': 'omartinez@banktech.com', 'role': 'CIO'},
        {'name': 'Daniel Kim', 'company': 'CapitalFlow AI', 'email': 'dkim@capitalflow.ai', 'role': 'VP Risk Analytics'},
    ],
    'retail': [
        {'name': 'James Wilson', 'company': 'RetailAI Dynamics', 'email': 'jwilson@retailai.com', 'role': 'VP Merchandising'},
        {'name': 'Emily Davis', 'company': 'ShopSmart Technologies', 'email': 'edavis@shopsmart.com', 'role': 'Director of Analytics'},
        {'name': 'Michael Brown', 'company': 'CustomerFlow AI', 'email': 'mbrown@customerflow.ai', 'role': 'Head of Customer Experience'},
    ],
    'manufacturing': [
        {'name': 'Robert Garcia', 'company': 'FactoryAI Systems', 'email': 'rgarcia@factoryai.com', 'role': 'Plant Manager'},
        {'name': 'Lisa Anderson', 'company': 'ManufacturePro', 'email': 'lisa@manufacturepro.com', 'role': 'Director of Operations'},
        {'name': 'David Thompson', 'company': 'QualityControl AI', 'email': 'dthompson@qualitycontrol.ai', 'role': 'Quality Director'},
    ],
    'logistics': [
        {'name': 'Thomas Brown', 'company': 'LogiTech Solutions', 'email': 'tbrown@logitech.com', 'role': 'Supply Chain Director'},
        {'name': 'Isabella Green', 'company': 'SupplyChain AI', 'email': 'igreen@supplychain.ai', 'role': 'VP Logistics'},
        {'name': 'Carlos Rodriguez', 'company': 'ShipSmart Tech', 'email': 'crodriguez@shipsmart.com', 'role': 'Operations Manager'},
    ],
    'hospitality': [
        {'name': 'Jennifer Lee', 'company': 'HospitalityAI', 'email': 'jlee@hospitalityai.com', 'role': 'GM'},
        {'name': 'Mark Wilson', 'company': 'GuestFlow Solutions', 'email': 'mwilson@guestflow.com', 'role': 'Director of Revenue'},
        {'name': 'Sophia Martinez', 'company': 'HotelTech AI', 'email': 'smartinez@hoteltech.ai', 'role': 'CTO'},
    ],
    'sports': [
        {'name': 'Alex Johnson', 'company': 'SportsTech AI', 'email': 'ajohnson@sportstech.ai', 'role': 'Director of Analytics'},
        {'name': 'Maria Garcia', 'company': 'FanEngagement AI', 'email': 'mgarcia@fanengagement.ai', 'role': 'Head of Fan Experience'},
        {'name': 'David Kim', 'company': 'TeamFlow Solutions', 'email': 'dkim@teamflow.com', 'role': 'Performance Director'},
    ],
    'real-estate': [
        {'name': 'Robert Chen', 'company': 'PropAI Technologies', 'email': 'rchen@propaitech.com', 'role': 'Head of Technology'},
        {'name': 'Lisa Park', 'company': 'RealEstateAI', 'email': 'lpark@realestateai.com', 'role': 'Director of Digital Strategy'},
        {'name': 'Michael Adams', 'company': 'PropertyFlow AI', 'email': 'madams@propertyflow.ai', 'role': 'CTO'},
    ],
    'telecom': [
        {'name': 'James Miller', 'company': 'TelecomAI Solutions', 'email': 'jmiller@telecomai.com', 'role': 'Network Operations Director'},
        {'name': 'Sarah Davis', 'company': 'CarrierFlow AI', 'email': 'sdavis@carrierflow.ai', 'role': 'VP Infrastructure'},
        {'name': 'David Wilson', 'company': '5GAi Networks', 'email': 'dwilson@5gai.com', 'role': 'Chief Technology Officer'},
    ],
    'energy': [
        {'name': 'Jennifer Anderson', 'company': 'EnergyAI Systems', 'email': 'janderson@energyai.com', 'role': 'Director of Smart Grid'},
        {'name': 'Robert Taylor', 'company': 'PowerFlow AI', 'email': 'rtaylor@powerflow.ai', 'role': 'VP Operations'},
        {'name': 'Lisa Thomas', 'company': 'RenewableAI', 'email': 'lthomas@renewableai.com', 'role': 'Head of Innovation'},
    ],
    'automotive': [
        {'name': 'Michael Jackson', 'company': 'AutoAI Technologies', 'email': 'mjackson@autoai.com', 'role': 'Director of Autonomous Systems'},
        {'name': 'Sarah Williams', 'company': 'CarFlow AI', 'email': 'swilliams@carflow.ai', 'role': 'Head of Connected Vehicles'},
        {'name': 'David Brown', 'company': 'MobilityAI', 'email': 'dbrown@mobilityai.com', 'role': 'CTO'},
    ],
    'media': [
        {'name': 'Rachel Green', 'company': 'MediaAI Solutions', 'email': 'rgreen@mediaai.com', 'role': 'Head of Content Strategy'},
        {'name': 'James White', 'company': 'ContentFlow AI', 'email': 'jwhite@contentflow.ai', 'role': 'Director of Digital Media'},
        {'name': 'Emily Black', 'company': 'StreamAI', 'email': 'eblack@streamai.com', 'role': 'VP Technology'},
    ],
    'education': [
        {'name': 'Dr. Kevin Davis', 'company': 'EduAI Technologies', 'email': 'kdavis@eduai.com', 'role': 'Dean of Innovation'},
        {'name': 'Sarah Miller', 'company': 'LearnFlow AI', 'email': 'smiller@learnflow.ai', 'role': 'Director of Educational Technology'},
        {'name': 'Michael Wilson', 'company': 'CampusAI', 'email': 'mwilson@campusai.com', 'role': 'CTO'},
    ],
    'gaming': [
        {'name': 'Alex Turner', 'company': 'GameAI Studios', 'email': 'aturner@gameai.com', 'role': 'Lead Engine Developer'},
        {'name': 'Emma Roberts', 'company': 'PlayFlow AI', 'email': 'eroberts@playflow.ai', 'role': 'Director of Game Technology'},
        {'name': 'Chris Lee', 'company': 'LudicAI', 'email': 'clee@ludicai.com', 'role': 'Head of AI Development'},
    ],
    'agriculture': [
        {'name': 'Robert Clark', 'company': 'AgriAI Solutions', 'email': 'rclark@agriai.com', 'role': 'Director of Precision Agriculture'},
        {'name': 'Lisa Davis', 'company': 'FarmFlow AI', 'email': 'ldavis@farmflow.ai', 'role': 'Head of Technology'},
        {'name': 'Michael Hill', 'company': 'CropAI Technologies', 'email': 'mhill@cropai.com', 'role': 'CTO'},
    ],
    'construction': [
        {'name': 'Jennifer White', 'company': 'BuildAI Systems', 'email': 'jwhite@buildai.com', 'role': 'Director of Innovation'},
        {'name': 'David Green', 'company': 'ConstructFlow AI', 'email': 'dgreen@constructflow.ai', 'role': 'Head of Digital Construction'},
        {'name': 'Sarah Blue', 'company': 'SiteAI Technologies', 'email': 'sblue@siteai.com', 'role': 'VP Technology'},
    ],
    'transportation': [
        {'name': 'Thomas Gray', 'company': 'TransitAI Solutions', 'email': 'tgray@transitai.com', 'role': 'Director of Intelligent Transportation'},
        {'name': 'Isabella Harris', 'company': 'MobilityFlow AI', 'email': 'iharris@mobilityflow.ai', 'role': 'Head of Autonomous Systems'},
        {'name': 'Carlos Martinez', 'company': 'FleetAI Technologies', 'email': 'cmartinez@fleetai.com', 'role': 'CTO'},
    ],
    'insurance': [
        {'name': 'Amanda White', 'company': 'InsurAI Technologies', 'email': 'awhite@insurai.com', 'role': 'Head of Claims Innovation'},
        {'name': 'Robert Garcia', 'company': 'RiskFlow AI', 'email': 'rgarcia@riskflow.ai', 'role': 'Director of Risk Analytics'},
        {'name': 'Lisa Johnson', 'company': 'PolicyAI', 'email': 'ljohnson@policyai.com', 'role': 'VP Digital Transformation'},
    ],
    'legal': [
        {'name': 'Michael Smith', 'company': 'LegalAI Solutions', 'email': 'msmith@legalai.com', 'role': 'Director of Innovation'},
        {'name': 'Sarah Brown', 'company': 'LawFlow AI', 'email': 'sbrown@lawflow.ai', 'role': 'Head of Legal Technology'},
        {'name': 'David Lee', 'company': 'ContractAI', 'email': 'dlee@contractai.com', 'role': 'CTO'},
    ],
}

FALLBACK_PROSPECTS = [
    {'name': 'Robert Johnson', 'company': 'Enterprise Solutions Inc.', 'email': 'rjohnson@enterprisesolutions.com', 'role': 'CEO'},
    {'name': 'Emily White', 'company': 'Global Tech Partners', 'email': 'ewhite@globaltech.com', 'role': 'CTO'},
    {'name': 'James Wilson', 'company': 'Innovation Group', 'email': 'jwilson@innovationgroup.com', 'role': 'VP Innovation'},
]

def get_prospects_for_industry(industry, count=50):
    industry_lower = industry.lower()
    if industry_lower in PROSPECT_POOLS:
        pool = PROSPECT_POOLS[industry_lower]
    else:
        pool = FALLBACK_PROSPECTS
    
    prospects = []
    for i in range(count):
        base_prospect = random.choice(pool).copy()
        base_prospect['name'] = f"{base_prospect['name']} {i+1}"
        prospects.append(base_prospect)
    return prospects

def generate_outreach_message(service, prospect):
    templates = [
        f"""Subject: Transform {service.get('industry', 'your industry')} with {service.get('name', 'AI Innovation')}

Hi {prospect['name']},

I noticed {prospect['company']} is exploring ways to enhance {service.get('industry', 'operations')}. 

Our {service.get('name', 'AI Platform')} delivers {', '.join(service.get('benefits', [])[:3])}. 

Key results:
- {service.get('benefits', ['Proven results'])[0] if service.get('benefits') else 'Significant improvements'}
- {service.get('benefits', ['Increased efficiency'])[1] if len(service.get('benefits', [])) > 1 else 'Enhanced efficiency'}

Would you be open to a 15-minute call to discuss how we can help {prospect['company']}?

Best regards,
Kleber
Zion Tech Group""",
        
        f"""Subject: {prospect['company']}'s {service.get('industry', 'Industry')} Challenge - Solved

Hi {prospect['name']},

As {prospect.get('role', 'leader')} at {prospect['company']}, you understand the challenges of {service.get('industry', 'modern business')}.

Our {service.get('name', 'AI Solution')} addresses this with:
- {service.get('features', ['AI-powered automation'])[0] if service.get('features') else 'AI-powered automation'}
- {service.get('features', ['Real-time insights'])[1] if len(service.get('features', [])) > 1 else 'Real-time insights'}

Results we've delivered:
  {'  • ' + chr(10) + '  • '.join(service.get('benefits', [])[:3])}

Interested in a quick demo?

Kleber
CEO, Zion Tech Group""",
        
        f"""Subject: Quick Question About {service.get('name', 'AI Innovation')}

Hi {prospect['name']},

I'm reaching out because {prospect['company']} is in the {service.get('industry', 'industry')} space, and we've been helping companies like yours with {service.get('description', 'AI-driven solutions')}.

Our {service.get('name', 'Platform')} has helped clients achieve:
• {chr(10) + '• '.join(service.get('benefits', [])[:4])}

Would you have 10 minutes this week to discuss?

Best,
Kleber
Zion Tech Group
hello@ziontechgroup.com"""
    ]
    
    return {
        'service_id': service['id'],
        'service_name': service['name'],
        'service_industry': service['industry'],
        'prospect': prospect,
        'message': random.choice(templates),
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'status': 'pending'
    }

def main():
    # Load services
    with open(SERVICES_FILE, 'r') as f:
        services = json.load(f)
    
    # Clear outreach file
    with open(OUTREACH_FILE, 'w') as f:
        pass
    
    # Get the 100 newest services
    new_services = services[-100:]
    
    # Generate outreach messages
    all_messages = []
    for service in new_services:
        prospects = get_prospects_for_industry(service['industry'], 50)
        for prospect in prospects:
            msg = generate_outreach_message(service, prospect)
            all_messages.append(msg)
    
    # Write to file
    with open(OUTREACH_FILE, 'a') as f:
        for msg in all_messages:
            f.write(json.dumps(msg) + '\n')
    
    print(f'Generated {len(all_messages)} outreach messages')
    print(f'Services: {len(new_services)}')
    print(f'Messages per service: 50')

if __name__ == '__main__':
    main()