#!/usr/bin/env python3
"""
Rapid-Fire Outreach Engine v2.0
Generates 50+ personalized outreach emails per cycle with Calendly booking links.
Maximum velocity service discovery and email generation for AI/IT services.
"""

import json
import sys
import random
import hashlib
import argparse
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any

# Configuration
PROJECT_ROOT = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = PROJECT_ROOT / 'zion-support.github.io' / 'app' / 'data' / 'servicesData.json'
OUTREACH_DIR = PROJECT_ROOT / 'scripts' / 'outreach'
LOG_FILE = PROJECT_ROOT / 'outreach_monitor' / 'processed' / 'rapid_fire_outreach_engine.log'
CALLEDLY_LINK = "https://calendly.com/kleber-ziontechgroup"

# Sample prospects for outreach (in real implementation, this would be dynamic)
SAMPLE_PROSPECTS = [
    {"name": "Sarah Johnson", "company": "TechStart Inc.", "email": "sarah@techstart.com", "title": "CTO", "industry": "technology"},
    {"name": "Dr. Michael Chen", "company": "HealthNet Solutions", "email": "michael@healthnet.com", "title": "VP Engineering", "industry": "healthcare"},
    {"name": "Rachel Martinez", "company": "FinTech Dynamics", "email": "rachel@fintech.com", "title": "Director of Operations", "industry": "finance"},
    {"name": "Marcus Davis", "company": "CyberShield Defense", "email": "marcus@cybershield.com", "title": "Security Lead", "industry": "cybersecurity"},
    {"name": "Sophia Rodriguez", "company": "DataProtect Systems", "email": "sophia@dataprotect.com", "title": "Head of IT", "industry": "data-security"},
]

def setup_logging():
    """Setup logging to file and stdout."""
    import logging
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)-7s] %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        handlers=[
            logging.StreamHandler(sys.stdout),
            logging.FileHandler(LOG_FILE)
        ]
    )
    return logging.getLogger('rapid-fire-outreach-engine')

logger = setup_logging()

def load_services() -> List[Dict]:
    """Load services from JSON file."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        return []
    except FileNotFoundError:
        logger.error(f"Services file not found: {SERVICES_FILE}")
        return []
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        return []

def generate_outreach_email(service: Dict, prospect: Dict) -> Dict:
    """Generate a personalized outreach email for a service and prospect."""
    service_name = service.get('name', 'AI Service')
    service_description = service.get('description', '')
    benefits = service.get('benefits', [])
    industry = service.get('industry', 'technology')
    website = f"https://ziontechgroup.com{service.get('href', '/services/')}"
    
    # Generate subject based on service
    subject = f"{service_name} - Boost {industry} Operations with AI"
    
    # Generate body
    body_lines = [
        f"Hello {prospect['name']},",
        "",
        f"I'm reaching out because {prospect['company']} could benefit from {service_name}.",
        "",
        f"{service_description}",
        "",
        "Key benefits for your organization:",
    ]
    
    for benefit in benefits[:3]:
        body_lines.append(f"- {benefit}")
    
    body_lines.extend([
        "",
        f"Our clients typically see:",
        "- 30% improvement in operational efficiency",
        "- 24/7 automated workflows",
        "- Reduced costs through AI optimization",
        "",
        f"Free demo available: {website}",
        "",
        f"Would you be available for a 15-minute discovery call?",
        f"Book a time that works for you: {CALLEDLY_LINK}",
        "",
        "Best regards,",
        "Kleber Garcia Alcatrao",
        "Zion Tech Group",
        "AI Solutions Architect"
    ])
    
    return {
        "service_id": service.get('id', hashlib.md5(service_name.encode()).hexdigest()[:8]),
        "service_name": service_name,
        "prospect_name": prospect['name'],
        "prospect_email": prospect['email'],
        "prospect_company": prospect['company'],
        "prospect_title": prospect['title'],
        "subject": subject,
        "body": "\n".join(body_lines),
        "target_industry": industry,
        "calendly_link": CALLEDLY_LINK,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "status": "draft"
    }

def run_rapid_fire_outreach(target_count: int = 50) -> Dict[str, Any]:
    """Run the rapid-fire outreach engine to generate emails."""
    logger.info("=" * 60)
    logger.info("🚀 ZION TECH GROUP - RAPID-FIRE OUTREACH ENGINE v2.0")
    logger.info("=" * 60)
    
    # Load services
    services = load_services()
    logger.info(f"[ℹ️] Loaded {len(services)} services")
    
    if not services:
        logger.error("[❌] No services available for outreach")
        return {"status": "error", "error": "No services loaded", "emails_generated": 0}
    
    OUTREACH_DIR.mkdir(parents=True, exist_ok=True)
    
    # Generate outreach emails
    generated_emails = []
    used_services = set()
    used_prospects = set()
    
    # Calculate how many emails per prospect-service combination
    emails_per_prospect = max(1, target_count // len(SAMPLE_PROSPECTS))
    
    for prospect in SAMPLE_PROSPECTS:
        prospect_key = f"{prospect['name']}_{prospect['company']}"
        if prospect_key in used_prospects:
            continue
        used_prospects.add(prospect_key)
        
        # Select services for this prospect
        available_services = [s for s in services if s.get('industry', '').lower() != prospect['industry'].lower()]
        if not available_services:
            available_services = services
        
        services_for_prospect = random.sample(available_services, min(emails_per_prospect, len(available_services)))
        
        for service in services_for_prospect:
            email = generate_outreach_email(service, prospect)
            generated_emails.append(email)
            used_services.add(email['service_id'])
            
            logger.info(f"[📧] Generated outreach: {prospect['name']} @ {prospect['company']} - {service.get('name', 'Unknown')}")
            
            if len(generated_emails) >= target_count:
                break
        
        if len(generated_emails) >= target_count:
            break
    
    # Ensure we meet the target
    while len(generated_emails) < target_count:
        service = random.choice(services)
        prospect = random.choice(SAMPLE_PROSPECTS)
        email = generate_outreach_email(service, prospect)
        if email['service_id'] not in used_services or len(generated_emails) < target_count:
            generated_emails.append(email)
            logger.info(f"[📧] Generated outreach: {prospect['name']} @ {prospect['company']}")
    
    # Save emails to files
    saved_count = 0
    for i, email in enumerate(generated_emails):
        filename = f"draft_{i:04d}_{email['service_id']}.json"
        filepath = OUTREACH_DIR / filename
        with open(filepath, 'w') as f:
            json.dump(email, f, indent=2)
        saved_count += 1
    
    logger.info(f"[📄] Saved {saved_count} draft files to {OUTREACH_DIR}")
    logger.info(f"[✅] Generated {len(generated_emails)} outreach emails")
    
    return {
        "status": "success",
        "emails_generated": len(generated_emails),
        "draft_files_created": saved_count,
        "services_used": len(used_services),
        "prospects_targeted": len(used_prospects),
        "calendly_link": CALLEDLY_LINK
    }

def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Rapid-Fire Outreach Engine v2.0')
    parser.add_argument('--once', action='store_true', help='Run single cycle and exit')
    parser.add_argument('--count', type=int, default=50, help='Number of emails to generate (default: 50)')
    args = parser.parse_args()
    
    if args.once:
        result = run_rapid_fire_outreach(args.count)
        print(json.dumps(result, indent=2))
        return 0 if result.get('status') == 'success' else 1
    else:
        import signal
        running = True
        
        def signal_handler(signum, frame):
            nonlocal running
            logger.info(f"Received signal {signum}, shutting down...")
            running = False
        
        signal.signal(signal.SIGTERM, signal_handler)
        signal.signal(signal.SIGINT, signal_handler)
        
        while running:
            run_rapid_fire_outreach(args.count)
            logger.info("Waiting 5 minutes until next cycle...")
            import time
            time.sleep(300)
        
        logger.info("Rapid-Fire Outreach Engine stopped")
        return 0

if __name__ == '__main__':
    sys.exit(main())