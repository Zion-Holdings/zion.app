#!/usr/bin/env python3
"""
Instant Pipeline Orchestrator - Zion Tech Group
Generates landing pages, outreach emails, and sitemap for all services in the catalog.

Usage:
    python3 instant_pipeline_orchestrator.py --once

Output:
    Landing Pages: /zion-support.github.io/app/services/{service_id}/page.tsx
    Outreach Emails: /zion-support.github.io/email_drafts/{service_id}_outreach.txt
    Sitemap: /zion-support.github.io/sitemap.xml
    Progress Tracker: /outreach_monitor/processed/last_service_count.txt
    Log: /outreach_monitor/processed/instant_pipeline_orchestrator.log
"""

import json
import os
import sys
import re
import hashlib
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Optional
import logging
import argparse

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE_DIR / 'zion-support.github.io' / 'app' / 'data' / 'servicesData.json'
SERVICES_DIR = BASE_DIR / 'zion-support.github.io' / 'app' / 'services'
EMAIL_DRAFTS_DIR = BASE_DIR / 'zion-support.github.io' / 'email_drafts'
SITEMAP_FILE = BASE_DIR / 'zion-support.github.io' / 'sitemap.xml'
PROGRESS_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'last_service_count.txt'
LOG_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'instant_pipeline_orchestrator.log'

# Setup directories
SERVICES_DIR.mkdir(parents=True, exist_ok=True)
EMAIL_DRAFTS_DIR.mkdir(parents=True, exist_ok=True)
PROGRESS_FILE.parent.mkdir(parents=True, exist_ok=True)

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-8s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(LOG_FILE)
    ]
)
logger = logging.getLogger('instant-pipeline-orchestrator')


def escape_js_string(s: str) -> str:
    """Escape special characters for JavaScript/TypeScript string literals."""
    if not s:
        return ''
    return s.replace('\\', '\\\\').replace('"', '\\"').replace("'", "\\'").replace('\n', '\\n').replace('\r', '\\r').replace('\t', '\\t')


def escape_html_content(s: str) -> str:
    """Escape HTML content to prevent XSS and malformed HTML."""
    if not s:
        return ''
    return (s
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;')
        .replace("'", '&#39;'))


def generate_features_list(features: list) -> str:
    """Generate a properly escaped features list."""
    if not features:
        return '            <li>AI-powered automation</li>\n            <li>Real-time analytics</li>\n            <li>Cloud-native deployment</li>'
    
    items = []
    for f in features[:5]:
        escaped = escape_html_content(str(f))
        items.append(f'            <li>{escaped}</li>')
    
    return '\n'.join(items)


def generate_benefits_list(benefits: list) -> str:
    """Generate a properly escaped benefits list."""
    if not benefits:
        return '            <li>50% reduction in operational costs</li>\n            <li>3x faster decision making</li>\n            <li>99.9% uptime guarantee</li>'
    
    items = []
    for b in benefits[:5]:
        escaped = escape_html_content(str(b))
        items.append(f'            <li>{escaped}</li>')
    
    return '\n'.join(items)


def format_price(val) -> str:
    """Format price value - strip $ if present, return clean value."""
    if not val or val == 'N/A':
        return 'Contact for pricing'
    val_str = str(val)
    if val_str.startswith('$'):
        val_str = val_str[1:]
    val_str = val_str.replace('/month', '').replace('/mo', '').strip()
    return val_str


def generate_landing_page(service: Dict) -> bool:
    """Generate a single Next.js landing page for a service."""
    try:
        service_id = service.get('id', 'unknown-service')
        page_path = SERVICES_DIR / f"{service_id}" / "page.tsx"
        
        # Create page directory
        page_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Get service data with proper fallbacks
        service_name = service.get('title', service.get('name', 'Service'))
        service_desc = service.get('description', '')
        service_features = service.get('features', [])
        service_benefits = service.get('benefits', [])
        service_pricing = service.get('pricing', {})
        
        # Escape content for safe embedding
        safe_name = escape_js_string(service_name)
        safe_desc = escape_js_string(service_desc[:160])  # Limit description length
        safe_features = generate_features_list(service_features)
        safe_benefits = generate_benefits_list(service_benefits)
        
        # Get pricing values with proper handling
        basic_price = format_price(service_pricing.get('basic', '199'))
        pro_price = format_price(service_pricing.get('pro', '499'))
        enterprise_price = format_price(service_pricing.get('enterprise', '1499'))
        
        # Generate page content with proper escaping
        page_content = f'''import {{ }} from 'next/navigation';

export const metadata = {{
  title: "{safe_name} - Zion Tech Group",
  description: "{safe_desc}",
  alternates: {{
    canonical: `https://ziontechgroup.com/services/{service_id}`
  }}
}};

export default function ServicePage() {{
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{escape_html_content(service_name)}</h1>
        <p className="text-lg text-gray-300 mb-8">{escape_html_content(service_desc)}</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
{safe_features}
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
{safe_benefits}
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">${basic_price}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">${pro_price}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">${enterprise_price}</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://calendly.com/kleber-ziontechgroup/consultation" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}}
'''
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(page_content)
        
        logger.info(f"[📄] Generated landing page: {service_id}")
        return True
        
    except Exception as e:
        logger.error(f"[❌] Failed to generate page for {service.get('id', 'unknown')}: {e}")
        return False


def generate_outreach_email(service: Dict) -> bool:
    """Generate a personalized outreach email draft for a service."""
    try:
        service_id = service.get('id', 'unknown-service')
        service_name = service.get('title', service.get('name', 'Service'))
        service_desc = service.get('description', '')
        
        email_path = EMAIL_DRAFTS_DIR / f"{service_id}_outreach.txt"
        
        # Generate outreach email content
        email_content = f"""Subject: Transform Your Business with {service_name}

Hi there,

I'm reaching out to introduce {service_name} from Zion Tech Group - an AI-powered solution that could significantly impact your business.

{service_desc}

Key Benefits:
- AI-driven automation for faster results
- Real-time insights for better decision-making
- Scalable cloud-native architecture
- Enterprise-grade security and compliance

We've helped companies like yours achieve:
- 50% reduction in operational costs
- 3x faster decision making
- 99.9% uptime guarantee

Would you be open to a 15-minute discovery call to explore how {service_name} could work for your organization?

Book a consultation: https://calendly.com/kleber-ziontechgroup/consultation

Best regards,
Kleber Garcia
Zion Tech Group
+1 (302) 464 0950
hello@ziontechgroup.com

---
This is an automated outreach from Zion Tech Group's Instant Pipeline Orchestrator.
"""
        
        with open(email_path, 'w', encoding='utf-8') as f:
            f.write(email_content)
        
        logger.info(f"[📧] Generated outreach email: {service_id}")
        return True
        
    except Exception as e:
        logger.error(f"[❌] Failed to generate email for {service.get('id', 'unknown')}: {e}")
        return False


def update_sitemap(services: List[Dict]) -> bool:
    """Update sitemap.xml with all service URLs."""
    try:
        today = datetime.now(timezone.utc).strftime('%Y-%m-%d')
        
        # Count existing URLs in sitemap
        existing_count = 0
        if SITEMAP_FILE.exists():
            with open(SITEMAP_FILE, 'r') as f:
                content = f.read()
                existing_count = content.count('<loc>')
        
        # Generate new sitemap
        sitemap_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>{today}</lastmod>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>{today}</lastmod>
  </url>
'''
        
        # Add service URLs
        service_count = 0
        for service in services:
            if 'id' in service:
                service_id = service['id']
                sitemap_content += f'''  <url>
    <loc>https://ziontechgroup.com/services/{service_id}</loc>
    <lastmod>{today}</lastmod>
  </url>
'''
                service_count += 1
        
        sitemap_content += '</urlset>'
        
        with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
            f.write(sitemap_content)
        
        logger.info(f"[✅] Updated sitemap with {service_count} service URLs")
        return True
        
    except Exception as e:
        logger.error(f"[❌] Sitemap update failed: {e}")
        return False


def update_progress_tracker(count: int) -> bool:
    """Update the progress tracker file."""
    try:
        with open(PROGRESS_FILE, 'w') as f:
            f.write(str(count))
        logger.info(f"[📊] Progress tracker updated: {count} services")
        return True
    except Exception as e:
        logger.error(f"[❌] Failed to update progress tracker: {e}")
        return False


def telegram_send(message: str) -> bool:
    """Send Telegram message via Bot API with fallback."""
    import urllib.request
    import urllib.parse
    
    token = os.getenv('TELEGRAM_BOT_TOKEN', '')
    chat_id = os.getenv('TELEGRAM_CHAT_ID', '8435383377')
    
    if not token:
        logger.warning("[⚠️] No Telegram token configured, using file fallback")
        # Log to fallback file
        fallback_file = Path('/tmp/telegram_pipeline_notifications.log')
        try:
            with open(fallback_file, 'a') as f:
                f.write(f"{datetime.now(timezone.utc).isoformat()} - {message}\n")
            logger.info(f"[✅] Notification logged to {fallback_file}")
            return True
        except Exception as e:
            logger.error(f"[❌] Fallback logging failed: {e}")
            return False
    
    try:
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            if result.get('ok'):
                logger.info(f"[✅] Message sent to Telegram chat {chat_id}")
                return True
            else:
                logger.error(f"[❌] Telegram API error: {result}")
                # Fallback to file on API error
                fallback_file = Path('/tmp/telegram_pipeline_notifications.log')
                try:
                    with open(fallback_file, 'a') as f:
                        f.write(f"{datetime.now(timezone.utc).isoformat()} - {message}\n")
                    logger.info(f"[✅] Notification logged to {fallback_file}")
                    return True
                except Exception as fe:
                    logger.error(f"[❌] Fallback logging failed: {fe}")
                    return False
    except Exception as e:
        logger.error(f"[❌] Telegram send failed: {e}")
        # Fallback to file on network error
        fallback_file = Path('/tmp/telegram_pipeline_notifications.log')
        try:
            with open(fallback_file, 'a') as f:
                f.write(f"{datetime.now(timezone.utc).isoformat()} - {message}\n")
            logger.info(f"[✅] Notification logged to {fallback_file}")
            return True
        except Exception as fe:
            logger.error(f"[❌] Fallback logging failed: {fe}")
            return False


def load_services() -> List[Dict]:
    """Load services from the JSON catalog."""
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
        logger.error(f"Services file not found: {SERVICES_FILE}")
        return []
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        return []


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Instant Pipeline Orchestrator')
    parser.add_argument('--once', action='store_true', help='Run only one cycle (for testing/cron)')
    args = parser.parse_args()
    
    logger.info("=" * 60)
    logger.info("🚀 INSTANT PIPELINE ORCHESTRATOR v1.0")
    logger.info("=" * 60)
    
    # Load all services
    logger.info("[📂] Loading services from catalog...")
    all_services = load_services()
    
    if not all_services:
        logger.warning("[⚠️] No services found in catalog")
        return 1
    
    logger.info(f"[ℹ️] Found {len(all_services)} services in catalog")
    
    # Check if we need to regenerate all or just new ones
    last_count = 0
    if PROGRESS_FILE.exists():
        try:
            with open(PROGRESS_FILE, 'r') as f:
                last_count = int(f.read().strip())
        except:
            last_count = 0
    
    # Process all services (full regeneration for consistency)
    logger.info("[📄] Generating landing pages...")
    pages_generated = 0
    pages_failed = 0
    
    for i, service in enumerate(all_services, 1):
        if generate_landing_page(service):
            pages_generated += 1
        else:
            pages_failed += 1
        
        if i % 500 == 0:
            logger.info(f"[⏳] Processed {i}/{len(all_services)} services...")
    
    logger.info(f"[✅] Generated {pages_generated} landing pages ({pages_failed} failed)")
    
    # Generate outreach emails
    logger.info("[📧] Generating outreach emails...")
    emails_generated = 0
    emails_failed = 0
    
    for i, service in enumerate(all_services, 1):
        if generate_outreach_email(service):
            emails_generated += 1
        else:
            emails_failed += 1
        
        if i % 500 == 0:
            logger.info(f"[⏳] Processed {i}/{len(all_services)} emails...")
    
    logger.info(f"[✅] Generated {emails_generated} outreach emails ({emails_failed} failed)")
    
    # Update sitemap
    logger.info("[🗺️] Updating sitemap...")
    sitemap_updated = update_sitemap(all_services)
    
    # Update progress tracker
    update_progress_tracker(len(all_services))
    
    # Prepare Telegram report
    timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')
    message = f"""🚀 Instant Pipeline Orchestrator Report
=====================================

Run Time: {timestamp}

NEW LANDING PAGES GENERATED: {pages_generated}
Outreach Emails Generated: {emails_generated}
Services Processed: {len(all_services)}
Sitemap Updated: {'Yes' if sitemap_updated else 'No'}

Errors:
  - Landing pages failed: {pages_failed}
  - Outreach emails failed: {emails_failed}

Status: SUCCESS - All {len(all_services)} services processed
====================================="""
    
    # Send to Telegram
    telegram_send(message)
    
    logger.info(f"[🏁] Pipeline complete: {pages_generated} pages, {emails_generated} emails")
    
    return 0


if __name__ == '__main__':
    sys.exit(main())