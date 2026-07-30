#!/usr/bin/env python3
"""
## 🚀 ULTRA-FAST GROWTH ENGINE v9.0 - MAXIMUM VELOCITY
Generates 50+ new AI/IT services per minute with automated deployment
"""

import json
import os
import sys
import random
import hashlib
from datetime import datetime
from pathlib import Path

# Configuration - use the JSON data file
SERVICES_DATA_PATH = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'
SITEMAP_PATH = '/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml'
OUTPUT_DIR = '/Users/klebergarciaalcatrao/zion-support.github.io/out/services'
SERVICES_COUNT = 50
TIMESTAMP = datetime.now().isoformat()

# Industry templates - focused on high-value industries
INDUSTRIES = [
    'Real Estate', 'Telecommunications', 'Gaming', 'Healthcare', 'Finance',
    'Manufacturing', 'Retail', 'Logistics', 'Energy', 'Education',
    'Media', 'Entertainment', 'Travel', 'E-commerce', 'SaaS', 'AI/ML'
]

# Category templates - AI and IT focused
CATEGORIES = {
    'ai': {
        'titles': ['AI-Powered Analytics', 'Intelligent Automation', 'Predictive Intelligence', 'AI Optimization', 'ML Solutions'],
        'features': ['Real-time processing', 'Automated decisions', 'Cloud-native', 'Integrations', 'Reporting']
    },
    'it': {
        'titles': ['IT Management Platform', 'Enterprise Solutions', 'Infrastructure Automation', 'Operations Center', 'Digital Transformation'],
        'features': ['Monitoring', 'Provisioning', 'Security controls', 'Optimization', '24/7 support']
    }
}

def generate_service(i, existing_ids):
    """Generate a single service entry with deterministic ID"""
    category = list(CATEGORIES.keys())[i % len(CATEGORIES)]
    industry = INDUSTRIES[i % len(INDUSTRIES)]
    templates = CATEGORIES[category]
    
    title = f"{templates['titles'][i % len(templates['titles'])]} for {industry}"
    # Replace both spaces and slashes to avoid path issues
    safe_title = title.lower().replace(' ', '-').replace('/', '-')
    
    # Deterministic ID based on name + description only (no timestamp)
    id_base = f"{title}{safe_title}{category}{industry}"
    hash_part = hashlib.md5(id_base.encode()).hexdigest()[:8]
    service_id = f"{safe_title[:50]}-{category}-{i}-{hash_part}"
    
    # Ensure unique ID
    if service_id in existing_ids:
        # Add a counter suffix to make it unique
        counter = 1
        while f"{service_id}-{counter}" in existing_ids:
            counter += 1
        service_id = f"{service_id}-{counter}"
    
    return {
        'name': title,
        'id': service_id,
        'description': f'AI-powered solution for {industry} industry with {", ".join(templates["features"][:3])}.',
        'icon': '🚀',
        'features': templates['features'][:5],
        'benefits': [f'Save {random.randint(20,50)}%', f'Increase efficiency {random.randint(30,70)}%'],
        'pricing': {
            'basic': f'${random.randint(99,299)}/mo',
            'pro': f'${random.randint(299,899)}/mo',
            'enterprise': f'${random.randint(999,2999)}/mo'
        },
        'contactInfo': {
            'website': f'/services/{service_id}',
            'email': 'commercial@ziontechgroup.com',
            'phone': '+1 302 464 0950'
        },
        'href': f'/services/{service_id}',
        'category': category,
        'popular': i % 10 == 0,
        'industry': industry,
        'timestamp': TIMESTAMP
    }

def main():
    """Main execution function"""
    print(f"🚀 ULTRA-FAST GROWTH ENGINE v9.0 - {TIMESTAMP}")
    print(f"Generating {SERVICES_COUNT} new AI/IT services...")
    
    # Read current services data
    with open(SERVICES_DATA_PATH, 'r') as f:
        data = json.load(f)
    
    # Handle both array and object with "services" key
    if isinstance(data, dict) and 'services' in data:
        services_data = data['services']
    elif isinstance(data, list):
        services_data = data
    else:
        services_data = []
    
    existing_ids = {s.get('id', '') for s in services_data}
    print(f"📊 Found {len(existing_ids)} existing services")
    
    services_added = 0
    new_services = []
    
    # Generate and add services
    for i in range(SERVICES_COUNT):
        service = generate_service(i, existing_ids)
        
        # Check for duplicate
        if service['id'] in existing_ids:
            continue
            
        services_data.append(service)
        existing_ids.add(service['id'])
        new_services.append(service)
        services_added += 1
    
    # Write updated services data (preserve original format)
    with open(SERVICES_DATA_PATH, 'w') as f:
        if isinstance(data, dict) and 'services' in data:
            data['services'] = services_data
            json.dump(data, f, indent=2)
        else:
            json.dump(services_data, f, indent=2)
    
    print(f"✅ Added {services_added} new services (total: {len(services_data)})")
    
    # Update sitemap - append new URLs before closing tag
    if new_services:
        with open(SITEMAP_PATH, 'r') as f:
            sitemap_content = f.read()
        
        # Find the closing </urlset> tag and insert before it
        close_tag = '</urlset>'
        pos = sitemap_content.find(close_tag)
        if pos >= 0:
            import xml.sax.saxutils as saxutils
            new_urls = ''
            for service in new_services:
                # Escape XML special characters in URL
                safe_url = saxutils.escape(f'https://ziontechgroup.com{service["href"]}')
                new_urls += f'''  <url>
    <loc>{safe_url}</loc>
    <lastmod>{datetime.now().strftime("%Y-%m-%d")}</lastmod>
  </url>
'''
            sitemap_content = sitemap_content[:pos] + new_urls + sitemap_content[pos:]
            
            with open(SITEMAP_PATH, 'w') as f:
                f.write(sitemap_content)
            print(f"📝 Updated sitemap with {len(new_services)} new URLs")
    
    # Create output directory and landing pages
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for service in new_services:
        page_path = Path(OUTPUT_DIR) / f"{service['id']}.tsx"
        with open(page_path, 'w') as f:
            f.write(f'''import Layout from '@/components/Layout';

export default function {service['id'].replace('-', '_')}() {{
  return (
    <Layout title="{service['name']}">
      <h1>{service['name']}</h1>
      <p>{service['description']}</p>
    </Layout>
  );
}}
''')
    
    print(f"🌐 Generated {services_added} landing pages")
    
    # Write result
    result = {
        'timestamp': TIMESTAMP,
        'services_generated': SERVICES_COUNT,
        'services_added': services_added,
        'total_services': len(services_data),
        'status': 'success' if services_added > 0 else 'no_new_services'
    }
    
    with open('/tmp/growth_engine_result.json', 'w') as f:
        json.dump(result, f, indent=2)
    
    return result

if __name__ == '__main__':
    try:
        result = main()
        print(f"\n✅ Growth Engine completed successfully")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Growth Engine failed: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)