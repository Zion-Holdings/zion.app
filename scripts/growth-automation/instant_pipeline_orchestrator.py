#!/usr/bin/env python3
"""
INSTANT PIPELINE ORCHESTRATOR - Zion Tech Group
Version 1.2 - Fixed landing page generation with proper escaping
"""

import json
import os
import sys
import time
import re
import hashlib
import random
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any

# Setup paths
BASE = Path(os.environ.get('PROJECT_ROOT', '/Users/klebergarciaalcatrao'))
DATA_DIR = BASE / 'app' / 'data'
SERVICES_FILE = DATA_DIR / 'servicesData.json'
SCRIPTS_DIR = Path(os.environ.get('SCRIPTS_ROOT', '/Users/klebergarciaalcatrao/scripts'))
GROWTH_DIR = Path(os.environ.get('GROWTH_ROOT', '/Users/klebergarciaalcatrao/outreach_monitor')) / 'processed'
GROWTH_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR.mkdir(parents=True, exist_ok=True)

# Configure logging
import logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-7s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(GROWTH_DIR / 'instant_pipeline_orchestrator.log')
    ]
)
logger = logging.getLogger('instant-pipeline-orchestrator')

def escape_js_string(s: str) -> str:
    """Escape special characters for JavaScript/TypeScript string literals."""
    if not s:
        return ''
    # Escape backslashes, quotes, and other special chars
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

def get_last_processed_count() -> int:
    """Get the last processed service count."""
    try:
        with open(GROWTH_DIR / 'last_service_count.txt', 'r') as f:
            return int(f.read().strip())
    except:
        return 0

def save_last_processed_count(count: int):
    """Save the last processed service count."""
    with open(GROWTH_DIR / 'last_service_count.txt', 'w') as f:
        f.write(str(count))

def get_services_count() -> int:
    """Get current services count from JSON."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        if isinstance(data, dict):
            return len(data.get('services', []))
        return len(data)
    except:
        return 0

def generate_features_list(features: list) -> str:
    """Generate a properly escaped features list."""
    if not features:
        return '            <li>No features listed</li>'
    
    items = []
    for f in features[:5]:  # Limit to 5 features
        escaped = escape_html_content(str(f))
        items.append(f'            <li>{escaped}</li>')
    
    return '\n'.join(items)

def generate_benefits_list(benefits: list) -> str:
    """Generate a properly escaped benefits list."""
    if not benefits:
        return '            <li>No benefits listed</li>'
    
    items = []
    for b in benefits[:5]:  # Limit to 5 benefits
        escaped = escape_html_content(str(b))
        items.append(f'            <li>{escaped}</li>')
    
    return '\n'.join(items)

def generate_landing_pages_for_new_services(new_services: List[Dict]) -> int:
    """Generate Next.js landing pages for new services."""
    pages_generated = 0
    services_dir = BASE / 'app' / 'services'
    services_dir.mkdir(parents=True, exist_ok=True)
    
    for service in new_services:
        try:
            service_id = service.get('id', 'unknown-service')
            page_path = services_dir / f"{service_id}" / "page.tsx"
            
            # Create page directory
            page_path.parent.mkdir(parents=True, exist_ok=True)
            
            # Get service data with proper fallbacks
            service_name = service.get('name') or service.get('title', 'Service')
            service_desc = service.get('description', '')
            service_features = service.get('features', [])
            service_benefits = service.get('benefits', [])
            service_pricing = service.get('pricing', {})
            
            # Escape content for safe embedding
            safe_name = escape_js_string(service_name)
            safe_desc = escape_js_string(service_desc[:160])  # Limit description length
            safe_features = generate_features_list(service_features)
            safe_benefits = generate_benefits_list(service_benefits)
            
            # Get pricing values with proper handling - strip $ if already present
            def format_price(val):
                if not val or val == 'N/A':
                    return 'N/A'
                val_str = str(val)
                if val_str.startswith('$'):
                    return val_str[1:]
                return val_str
            
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
              <p className="text-2xl font-bold mb-2">${basic_price}/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">${pro_price}/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">${enterprise_price}/month</p>
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
            pages_generated += 1
            
        except Exception as e:
            logger.error(f"[❌] Failed to generate page for {service.get('id', 'unknown')}: {e}")
    
    return pages_generated

def update_sitemap():
    """Update sitemap.xml with new service URLs."""
    try:
        sitemap_path = BASE / 'sitemap.xml'
        
        # Get all services
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, dict):
            services = data.get('services', [])
        else:
            services = data
        
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

def format_price(val):
    """Format price value - strip $ if present, return clean value."""
    if not val or val == 'N/A':
        return 'N/A'
    val_str = str(val)
    if val_str.startswith('$'):
        val_str = val_str[1:]
    # Remove /mo, /month, etc. suffixes
    val_str = val_str.replace('/month', '').replace('/mo', '').strip()
    return val_str

def generate_outreach_emails(new_services: List[Dict]) -> int:
    """Generate personalized outreach emails for new services."""
    emails_generated = 0
    
    for service in new_services:
        try:
            # Get pricing values
            pricing = service.get('pricing', {})
            basic_price = format_price(pricing.get('basic', 'N/A'))
            pro_price = format_price(pricing.get('pro', 'N/A'))
            enterprise_price = format_price(pricing.get('enterprise', 'N/A'))
            
            # Get benefits
            benefits = service.get('benefits', [])[:3]
            benefits_text = '\n'.join([f"- {b}" for b in benefits]) if benefits else "- High-quality solution"
            
            # Get service name with proper fallback (title field is used instead of name)
            service_name = service.get('name') or service.get('title', 'Service')
            
            # Generate personalized email content
            email_content = f"""Subject: Transform Your {service.get('industry', 'Business')} Operations with {service_name}

Hi there,

I'm Kleber from Zion Tech Group, and I wanted to introduce you to our groundbreaking {service_name}.

{service.get('description', 'A powerful AI/IT solution for your business.')}

**Key Benefits:**
{benefits_text}

**Pricing:**
- Basic: ${basic_price}/month
- Pro: ${pro_price}/month
- Enterprise: ${enterprise_price}/month

**Book a free consultation:** https://calendly.com/kleber-ziontechgroup/consultation

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
ziontechgroup.com

---
AI/IT Solutions for the Future"""
            
            # Save email draft
            email_dir = BASE / 'email_drafts'
            email_dir.mkdir(parents=True, exist_ok=True)
            
            email_path = email_dir / f"{service.get('id', 'unknown')}_outreach.txt"
            with open(email_path, 'w') as f:
                f.write(email_content)
            
            logger.info(f"[📧] Generated outreach email: {service.get('id', 'unknown')}")
            emails_generated += 1
            
        except Exception as e:
            logger.error(f"[❌] Failed to generate email for {service.get('id', 'unknown')}: {e}")
    
    return emails_generated

def run_pipeline():
    """Run the instant pipeline for new services."""
    logger.info("=" * 60)
    logger.info("🚀 ZION TECH GROUP - INSTANT PIPELINE ORCHESTRATOR v1.2")
    logger.info("=" * 60)
    
    # Get current service count
    current_count = get_services_count()
    last_count = get_last_processed_count()
    
    logger.info(f"[ℹ️] Current services: {current_count}, Last processed: {last_count}")
    
    # Get all services
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, dict):
            all_services = data.get('services', [])
        else:
            all_services = data
        
        # Get services added since last run
        if last_count > 0 and last_count < len(all_services):
            new_services = all_services[last_count:]
        else:
            # Process all services if starting fresh
            new_services = all_services
        
        logger.info(f"[➕] Found {len(new_services)} services to process")
        
        if not new_services:
            logger.info("[✅] No new services to process")
            return
        
        # Generate landing pages
        logger.info("[📄] Generating landing pages...")
        pages = generate_landing_pages_for_new_services(new_services)
        logger.info(f"[✅] Generated {pages} landing pages")
        
        # Update sitemap
        logger.info("[🗺️] Updating sitemap...")
        update_sitemap()
        
        # Generate outreach emails
        logger.info("[📧] Generating outreach emails...")
        emails = generate_outreach_emails(new_services)
        logger.info(f"[✅] Generated {emails} outreach emails")
        
        # Save new count
        save_last_processed_count(current_count)
        
        logger.info(f"[🏁] Pipeline complete: {pages} pages, {emails} emails generated")
        
    except Exception as e:
        logger.error(f"[💥] Pipeline failed: {e}")
        import traceback
        traceback.print_exc()

def main():
    """Main entry point."""
    import argparse
    parser = argparse.ArgumentParser(description='Instant Pipeline Orchestrator for Zion Tech Group')
    parser.add_argument('--once', action='store_true', help='Run once and exit')
    parser.add_argument('--interval', type=int, default=2, help='Interval between cycles in minutes')
    args = parser.parse_args()
    
    if args.once:
        run_pipeline()
        return 0
    
    # Continuous mode
    import signal
    running = True
    
    def signal_handler(signum, frame):
        nonlocal running
        logger.info(f"[⚠️] Received signal {signum}, shutting down...")
        running = False
    
    signal.signal(signal.SIGTERM, signal_handler)
    signal.signal(signal.SIGINT, signal_handler)
    
    cycle_count = 0
    while running:
        try:
            cycle_count += 1
            logger.info(f"\n[🔄] Pipeline cycle #{cycle_count}")
            run_pipeline()
            
            if running:
                time.sleep(args.interval * 60)
        except Exception as e:
            logger.error(f"[💥] Cycle error: {e}")
            time.sleep(120)
    
    logger.info("Instant pipeline orchestrator stopped")
    return 0

if __name__ == '__main__':
    sys.exit(main())