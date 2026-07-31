#!/usr/bin/env python3
"""
ZION TECH GROUP - SERVICE AUTO-DEPLOYER
Automatically generates landing pages for new AI/IT services discovered by the growth engine.
"""

import json
import os
import sys
import subprocess
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List
import logging
import argparse
import urllib.request
import urllib.parse

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE_DIR / 'zion-support.github.io' / 'app' / 'data' / 'servicesData.json'
SERVICES_DIR = BASE_DIR / 'zion-support.github.io' / 'app' / 'services'
SITEMAP_FILE = BASE_DIR / 'zion-support.github.io' / 'sitemap.xml'
PROGRESS_FILE = BASE_DIR / '.hermes' / 'logs' / 'service_deployer_progress.txt'
LOG_FILE = BASE_DIR / '.hermes' / 'logs' / 'service_auto_deployer.log'

# Telegram configuration
TELEGRAM_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN', '')
TELEGRAM_CHAT_ID = os.getenv('HERMES_CRON_AUTO_DELIVER_CHAT_ID', '8435383377')

# Create directories
PROGRESS_FILE.parent.mkdir(parents=True, exist_ok=True)
LOG_FILE.parent.mkdir(parents=True, exist_ok=True)

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
logger = logging.getLogger('service-auto-deployer')


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
    for f in features[:6]:
        escaped = escape_html_content(str(f))
        items.append(f'            <li>{escaped}</li>')
    
    return '\n'.join(items)


def generate_benefits_list(benefits: list) -> str:
    """Generate a properly escaped benefits list."""
    if not benefits:
        return '            <li>50% reduction in operational costs</li>\n            <li>3x faster decision making</li>\n            <li>99.9% uptime guarantee</li>'
    
    items = []
    for b in benefits[:8]:
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
        safe_desc = escape_js_string(service_desc[:200])  # Limit description length
        safe_features = generate_features_list(service_features)
        safe_benefits = generate_benefits_list(service_benefits)
        
        # Get pricing values with proper handling
        basic_price = format_price(service_pricing.get('basic', '199'))
        pro_price = format_price(service_pricing.get('pro', '499'))
        enterprise_price = format_price(service_pricing.get('enterprise', '1499'))
        
        # Sanitize service_id for URL safety
        safe_service_id = re.sub(r'[^a-z0-9-]', '', service_id)
        
        # Generate page content with proper escaping
        page_content = f'''import {{ }} from 'next/navigation';

export const metadata = {{
  title: "{safe_name} - Zion Tech Group",
  description: "{safe_desc}",
  alternates: {{
    canonical: `https://ziontechgroup.com/services/{safe_service_id}`
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


def update_sitemap(services: List[Dict]) -> bool:
    """Update sitemap.xml with all service URLs."""
    try:
        today = datetime.now(timezone.utc).strftime('%Y-%m-%d')
        
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


def load_last_processed_count() -> int:
    """Load the last processed service count."""
    try:
        if PROGRESS_FILE.exists():
            with open(PROGRESS_FILE, 'r') as f:
                return int(f.read().strip())
    except:
        pass
    return 0


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


def send_telegram_report(pages_deployed: int, total_services: int, timestamp: str, status: str) -> bool:
    """Send deployment report to Telegram."""
    if not TELEGRAM_TOKEN:
        logger.warning("[⚠️] No Telegram token configured, skipping delivery")
        return False
    
    try:
        message = f"""🚀 SERVICE AUTO-DEPLOYER REPORT
=====================================

Run Time: {timestamp}

NEW LANDING PAGES DEPLOYED: {pages_deployed}
Total services in catalog: {total_services}
Status: {status}

✅ Auto-deployment completed successfully
====================================="""
        
        url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': TELEGRAM_CHAT_ID,
            'text': message,
            'parse_mode': 'HTML'
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            if result.get('ok'):
                logger.info(f"[✅] Telegram report sent to chat {TELEGRAM_CHAT_ID}")
                return True
            else:
                logger.error(f"[❌] Telegram API error: {result}")
                return False
    except Exception as e:
        logger.error(f"[❌] Telegram send failed: {e}")
        return False


def git_push() -> bool:
    """Push changes to GitHub."""
    try:
        os.chdir('/Users/klebergarciaalcatrao/zion-support.github.io')
        
        # Add files to git
        logger.info("[📦] Adding files to git...")
        result = subprocess.run(['git', 'add', '-A'], capture_output=True, text=True)
        if result.returncode != 0:
            logger.error(f"[❌] Git add failed: {result.stderr}")
            return False
        
        # Check if there are changes to commit
        status_result = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True)
        if not status_result.stdout.strip():
            logger.info("[ℹ️] No changes to commit")
            return True
        
        # Commit changes
        timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
        logger.info(f"[💾] Committing changes: Auto-deploy new service pages - {timestamp}")
        result = subprocess.run(['git', 'commit', '-m', f'Auto-deploy new service pages - {timestamp}'], capture_output=True, text=True)
        if result.returncode != 0:
            if 'nothing to commit' in result.stderr:
                logger.info("[ℹ️] No changes to commit")
                return True
            logger.error(f"[❌] Git commit failed: {result.stderr}")
            return False
        
        # Push to GitHub
        logger.info("[🚀] Pushing to GitHub...")
        result = subprocess.run(['git', 'push', 'origin'], capture_output=True, text=True)
        if result.returncode != 0:
            logger.error(f"[❌] Git push failed: {result.stderr}")
            return False
        
        logger.info("[✅] Successfully pushed to GitHub")
        return True
        
    except Exception as e:
        logger.error(f"[❌] Git push failed: {e}")
        return False


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Service Auto-Deployer')
    parser.add_argument('--once', action='store_true', help='Run only one cycle (for testing/cron)')
    args = parser.parse_args()
    
    logger.info("=" * 60)
    logger.info("🚀 ZION TECH GROUP - SERVICE AUTO-DEPLOYER")
    logger.info("=" * 60)
    
    # Load all services
    logger.info("[📂] Loading services from catalog...")
    all_services = load_services()
    
    if not all_services:
        logger.warning("[⚠️] No services found in catalog")
        return 1
    
    total_services = len(all_services)
    logger.info(f"[ℹ️] Total services in catalog: {total_services}")
    
    # Get last processed count
    last_count = load_last_processed_count()
    logger.info(f"[ℹ️] Last processed: {last_count}")
    
    # Calculate new services to deploy
    new_count = total_services - last_count
    if new_count <= 0:
        logger.info("[ℹ️] No new services to deploy")
        return 0
    
    logger.info(f"[➕] Found {new_count} services to deploy")
    
    # Process new services (last_count to total_services)
    new_services = all_services[last_count:]
    
    # Generate landing pages
    logger.info("[📄] Generating landing pages...")
    pages_deployed = 0
    pages_failed = 0
    
    for service in new_services:
        if generate_landing_page(service):
            pages_deployed += 1
        else:
            pages_failed += 1
    
    logger.info(f"[✅] Generated {pages_deployed} landing pages ({pages_failed} failed)")
    
    # Update sitemap
    logger.info("[🗺️] Updating sitemap...")
    sitemap_updated = update_sitemap(all_services)
    
    # Update progress tracker
    update_progress_tracker(total_services)
    
    # Deploy to GitHub
    logger.info("[🚀] Deploying to GitHub...")
    github_deployed = git_push()
    
    # Prepare report
    timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')
    status = "SUCCESS" if github_deployed else "FAILED"
    
    logger.info(f"[🏁] Pipeline complete: {pages_deployed} pages deployed, sitemap updated, GitHub deployment {'successful' if github_deployed else 'failed'}")
    
    # Send Telegram report
    send_telegram_report(pages_deployed, total_services, timestamp, status)
    
    return 0 if github_deployed else 1


if __name__ == '__main__':
    sys.exit(main())