#!/usr/bin/env python3
"""
LANDING PAGE GENERATOR - Zion Tech Group
Generates Next.js landing pages for all services in the catalog
"""

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List

# Setup paths
BASE = Path(os.environ.get('PROJECT_ROOT', '/Users/klebergarciaalcatrao'))
DATA_DIR = BASE / 'data'
SERVICES_FILE = DATA_DIR / 'services.json'
SERVICES_DIR = BASE / 'app' / 'services'
GROWTH_DIR = BASE / 'outreach_monitor' / 'processed'
GROWTH_DIR.mkdir(parents=True, exist_ok=True)

# Configure logging
import logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-7s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(GROWTH_DIR / 'generate_landing_pages.log')
    ]
)
logger = logging.getLogger('landing-page-generator')

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
        return '            <li>No features listed</li>'
    
    items = []
    for f in features[:5]:
        escaped = escape_html_content(str(f))
        items.append(f'            <li>{escaped}</li>')
    
    return '\n'.join(items)

def generate_benefits_list(benefits: list) -> str:
    """Generate a properly escaped benefits list."""
    if not benefits:
        return '            <li>High-quality AI/IT solution</li>'
    
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
    # Remove /mo, /month, etc. suffixes
    val_str = val_str.replace('/month', '').replace('/mo', '').strip()
    return val_str

def generate_landing_page(service: Dict) -> bool:
    """Generate a single Next.js landing page for a service."""
    try:
        service_id = service.get('id', 'unknown-service')
        page_path = SERVICES_DIR / f"{service_id}" / "page.tsx"
        
        # Create page directory
        page_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Get service data with proper fallbacks (title is the primary name field)
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
        basic_price = format_price(service_pricing.get('basic', 'N/A'))
        pro_price = format_price(service_pricing.get('pro', 'N/A'))
        enterprise_price = format_price(service_pricing.get('enterprise', 'N/A'))
        
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
        
        with open(page_path, 'w') as f:
            f.write(page_content)
        
        logger.info(f"[📄] Generated landing page: {service_id}")
        return True
        
    except Exception as e:
        logger.error(f"[❌] Failed to generate page for {service.get('id', 'unknown')}: {e}")
        return False

def update_sitemap(services: List[Dict]) -> bool:
    """Update sitemap.xml with all service URLs."""
    try:
        sitemap_path = BASE / 'sitemap.xml'
        
        # Generate sitemap
        today = datetime.now(timezone.utc).strftime('%Y-%m-%d')
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
        
        for service in services:
            if 'id' in service:
                service_id = service['id']
                sitemap_content += f'''  <url>
    <loc>https://ziontechgroup.com/services/{service_id}</loc>
    <lastmod>{today}</lastmod>
  </url>
'''
        
        sitemap_content += '</urlset>'
        
        with open(sitemap_path, 'w') as f:
            f.write(sitemap_content)
        
        logger.info(f"[✅] Updated sitemap with {len(services)} service URLs")
        return True
        
    except Exception as e:
        logger.error(f"[❌] Sitemap update failed: {e}")
        return False

def telegram_send(message: str):
    """Send Telegram message via Bot API."""
    import urllib.request
    import urllib.parse
    
    token = os.getenv('TELEGRAM_BOT_TOKEN')
    chat_id = os.getenv('TELEGRAM_CHAT_ID', '8435383377')
    
    if not token:
        logger.warning("[⚠️] No Telegram token configured, skipping delivery")
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
                return False
    except Exception as e:
        logger.error(f"[❌] Telegram send failed: {e}")
        return False

def main():
    """Main entry point."""
    logger.info("=" * 60)
    logger.info("🚀 ZION TECH GROUP - LANDING PAGE GENERATOR")
    logger.info("=" * 60)
    
    # Get all services from catalog
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, dict):
            all_services = data.get('services', [])
        else:
            all_services = data
        
        logger.info(f"[ℹ️] Found {len(all_services)} services in catalog")
        
        if not all_services:
            logger.warning("[⚠️] No services found in catalog")
            return 1
        
        # Generate landing pages for all services
        logger.info("[📄] Generating landing pages...")
        pages_generated = 0
        pages_failed = 0
        
        for i, service in enumerate(all_services, 1):
            if generate_landing_page(service):
                pages_generated += 1
            else:
                pages_failed += 1
            
            if i % 100 == 0:
                logger.info(f"[⏳] Processed {i}/{len(all_services)} services...")
        
        logger.info(f"[✅] Generated {pages_generated} landing pages ({pages_failed} failed)")
        
        # Update sitemap
        logger.info("[🗺️] Updating sitemap...")
        sitemap_updated = update_sitemap(all_services)
        
        # Prepare Telegram report
        timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')
        message = f"""🚀 Landing Page Generator Report
=====================================

Run Time: {timestamp}

NEW LANDING PAGES GENERATED: {pages_generated}
Services processed: {len(all_services)}
Sitemap updated: {'Yes' if sitemap_updated else 'No'}

Status: SUCCESS - {pages_generated} pages generated
====================================="""
        
        # Send to Telegram
        telegram_send(message)
        
        logger.info(f"[🏁] Pipeline complete: {pages_generated} pages generated")
        return 0
        
    except Exception as e:
        logger.error(f"[💥] Pipeline failed: {e}")
        import traceback
        traceback.print_exc()
        return 1

if __name__ == '__main__':
    sys.exit(main())