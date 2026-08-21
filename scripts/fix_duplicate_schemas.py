#!/usr/bin/env python3
"""
Fix duplicate JSON-LD injections: remove raw <script> tags where JsonLd component was used.
Standardize all tool pages to use JsonLd component only.
Standardize all service pages to use JsonLd component with cleaner FAQ schema.
"""
import json
import re
from pathlib import Path

REPO = Path("/Users/klebergarciaalcatrao/zion-support.github.io")
tools_dir = REPO / "app" / "tools"
services_dir = REPO / "app" / "services"

def fix_tool_pages():
    """Remove raw <script> tags from tool pages that already have JsonLd component."""
    count = 0
    for page in tools_dir.rglob("page.tsx"):
        content = page.read_text(encoding="utf-8")
        
        # Check if page has both JsonLd import and raw script tags
        has_jsonld_import = "import JsonLd from '@/components/JsonLd'" in content
        has_jsonld_usage = "<JsonLd" in content or "JsonLd data" in content
        has_raw_script = "<!-- Zion SchemaAgent" in content or ('<script type="application/ld+json">' in content and 'dangerouslySetInnerHTML' not in content)
        
        if has_jsonld_import and has_jsonld_usage and has_raw_script:
            # Remove the raw script block
            # Pattern: <!-- Zion SchemaAgent: ... -->\n    <script>...</script>\n
            content = re.sub(
                r'\n\s*<!-- Zion SchemaAgent: [^>]*-->\s*\n\s*<script type="application/ld\+json">[^<]*(?:<[^>]*>[^<]*)*</script>\s*',
                '',
                content,
                flags=re.DOTALL
            )
            page.write_text(content, encoding="utf-8")
            count += 1
            print(f"  Fixed: {page.relative_to(REPO)}")
        
        # Also handle tool pages that have a malformed JsonLd (closing > in wrong place)
        if "<JsonLd data={{{" in content:
            # Fix the broken syntax: <JsonLd data={{...}} /> should be <JsonLd data={{...}} />
            content = content.replace("<JsonLd data={{{\n", "<JsonLd data={{\n")
            # Check if the issue is the extra closing brace
            if "}} />" in content:
                pass  # This is correct for JSX
            page.write_text(content, encoding="utf-8")
    
    return count

def fix_tool_pages_with_standardpage():
    """For tool pages using StandardPage, move JsonLd inside StandardPage or after it."""
    count = 0
    for page in tools_dir.rglob("page.tsx"):
        content = page.read_text(encoding="utf-8")
        
        # If JsonLd is outside StandardPage (sibling), move it inside
        # Pattern: <JsonLd ... /> \n    <StandardPage
        if "<JsonLd" in content and "<StandardPage" in content:
            # Check if JsonLd is a sibling of StandardPage (not inside it)
            jsonld_pos = content.find("<JsonLd")
            sp_open_pos = content.find("<StandardPage")
            
            if jsonld_pos < sp_open_pos:
                # JsonLd is before StandardPage - move it inside
                jsonld_match = re.search(
                    r'(<JsonLd[^>]*\/>)',
                    content
                )
                if jsonld_match:
                    jsonld_tag = jsonld_match.group(1)
                    content = content.replace(jsonld_tag + "\n    ", "", 1)
                    # Insert right after <StandardPage opening tag's children start
                    # Actually, StandardPage already injects Organization schema via JsonLd
                    # So we can just place JsonLd as first child
                    content = content.replace(
                        "<StandardPage",
                        f"{jsonld_tag}\n    <StandardPage",
                        1
                    )
                    page.write_text(content, encoding="utf-8")
                    count += 1
                    print(f"  Fixed placement: {page.relative_to(REPO)}")
    
    return count

def fix_service_pages():
    """Standardize service pages: use JsonLd component + cleaner FAQ schema."""
    count = 0
    # Load service data
    with open(REPO / "app" / "data" / "services.json") as f:
        services = json.load(f)
    
    svc_map = {}
    for svc in services:
        if isinstance(svc, dict):
            slug_id = svc.get("id", "")
            if slug_id:
                svc_map[slug_id] = svc
    
    for page in sorted(services_dir.glob("*/page.tsx")):
        content = page.read_text(encoding="utf-8")
        
        # Skip if already has proper JsonLd component
        if "import JsonLd from '@/components/JsonLd'" in content and "<JsonLd" in content:
            # Just fix the FAQ schema if it exists as raw script
            # Remove raw script tags and convert to JsonLd
            pass
        
        # Check if has raw script tags for Service+FAQPage
        if "<!-- Zion SchemaAgent: Service+FAQPage -->" in content:
            # Remove raw scripts
            content = re.sub(
                r'\n\s*<!-- Zion SchemaAgent: Service\+FAQPage -->\s*\n\s*<script type="application/ld\+json">[^<]*(?:<[^>]*>[^<]*)*</script>\s*\n\s*<script type="application/ld\+json">[^<]*(?:<[^>]*>[^<]*)*</script>\s*',
                '',
                content,
                flags=re.DOTALL
            )
            
            # Now inject proper JsonLd component
            slug = page.parent.name
            svc = svc_map.get(slug, {})
            if not svc:
                base = slug.rsplit("-", 1)[0] if "-" in slug and len(slug.rsplit("-", 1)[-1]) == 8 else slug
                for k, v in svc_map.items():
                    if k.startswith(base):
                        svc = v
                        break
            
            if not svc:
                page.write_text(content, encoding="utf-8")
                continue
            
            name = svc.get("name", slug.replace("-", " ").title())
            description = svc.get("description", "")
            features = svc.get("features", [])
            benefits = svc.get("benefits", [])
            pricing = svc.get("pricing", {})
            category = svc.get("category", "")
            industry = svc.get("industry", "")
            contact = svc.get("contactInfo", {})
            
            # Service schema
            service_schema = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": name,
                "description": description,
                "serviceType": category,
                "provider": {
                    "@type": "Organization",
                    "name": "Zion Tech Group",
                    "url": "https://ziontechgroup.com",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "email": contact.get("email", "hello@ziontechgroup.com"),
                        "telephone": contact.get("phone", "+1 (302) 464 0950"),
                        "contactType": "sales"
                    }
                },
                "serviceArea": {"@type": "Place", "name": industry} if industry else None,
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": f"{name} Pricing Plans",
                    "itemListElement": [
                        {"@type": "Offer", "name": "Basic", "price": pricing.get("basic", "0"), "priceCurrency": "USD"},
                        {"@type": "Offer", "name": "Pro", "price": pricing.get("pro", "0"), "priceCurrency": "USD"},
                        {"@type": "Offer", "name": "Enterprise", "price": pricing.get("enterprise", "0"), "priceCurrency": "USD"}
                    ]
                }
            }
            
            # FAQ schema with clean questions
            faqs = []
            for i, feat in enumerate(features[:3]):
                faqs.append({
                    "@type": "Question",
                    "name": feat,
                    "acceptedAnswer": {"@type": "Answer", "text": feat}
                })
            if benefits:
                faqs.append({
                    "@type": "Question",
                    "name": "What business impact can I expect?",
                    "acceptedAnswer": {"@type": "Answer", "text": "; ".join(benefits[:3])}
                })
            faqs.append({
                "@type": "Question",
                "name": "How do I get started with this service?",
                "acceptedAnswer": {"@type": "Answer", "text": "Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started."}
            })
            
            faq_schema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs
            }
            
            # Add JsonLd import if not present
            if "import JsonLd from '@/components/JsonLd'" not in content:
                content = "import JsonLd from '@/components/JsonLd';\n" + content
            
            # Inject JsonLd components right after <main tag
            main_match = re.search(r'(<main[^>]*)>', content)
            if main_match:
                main_end = main_match.end()
                schemas_js = json.dumps([service_schema, faq_schema], ensure_ascii=False)
                script_block = f'''
    <JsonLd data={service_schema} />
    <JsonLd data={faq_schema} />'''
                content = content[:main_end] + script_block + content[main_end:]
            
            page.write_text(content, encoding="utf-8")
            count += 1
            print(f"  Fixed: {page.parent.name}")
    
    return count

def main():
    print("=== Fixing duplicate schema injections ===")
    print("\n--- Tool pages (removing raw <script> tags) ---")
    t1 = fix_tool_pages()
    t2 = fix_tool_pages_with_standardpage()
    
    print(f"\n--- Service pages (cleaning FAQ schema) ---")
    s = fix_service_pages()
    
    print(f"\nSummary: {t1} tool pages deduped, {t2} tool pages repositioned, {s} service pages cleaned")

if __name__ == "__main__":
    main()
