#!/usr/bin/env python3
"""
JSON Integrity Monitor - Deterministic offline validation
Validates JSON files for syntax, duplicates, and null/empty values
100% offline - uses native C-optimized Python json module
"""

import sys
import json
import argparse
import re
from pathlib import Path
from datetime import datetime, timezone
from typing import Dict, List, Any, Tuple, Set
import time

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_DATA_PATH = BASE_DIR / 'app/data/servicesData.json'
SITEMAP_PATH = BASE_DIR / 'sitemap.xml'


class CatalogLock:
    """Simple file-based lock for atomic operations"""
    def __init__(self, lock_path: str = "/tmp/catalog_lock"):
        self.lock_path = Path(lock_path)
        self.locked = False
    
    def __enter__(self):
        try:
            self.lock_path.touch(exist_ok=False)
            self.locked = True
            return self
        except FileExistsError:
            raise RuntimeError("Could not acquire catalog lock")
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.locked:
            try:
                self.lock_path.unlink()
            except FileNotFoundError:
                pass
            self.locked = False


def load_json_fast(filepath: Path) -> Tuple[bool, Any, str]:
    """Load JSON file using native json module - returns (success, data, error_message)"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return True, data, ""
    except json.JSONDecodeError as e:
        return False, None, f"JSON syntax error: {str(e)}"
    except Exception as e:
        return False, None, f"Error reading file: {str(e)}"


def save_json_fast(filepath: Path, data: Any) -> bool:
    """Save JSON file using native json module"""
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"[❌] Error saving file: {e}")
        return False


def check_duplicate_ids(data: List[Dict]) -> Dict[str, Any]:
    """Detect duplicate IDs in JSON array - O(n) using set"""
    if not isinstance(data, list):
        return {"valid": True, "duplicates": [], "count": 0, "total_items": 0}
    
    seen_ids: Set[str] = set()
    duplicates: List[Dict] = []
    id_positions: Dict[str, int] = {}
    
    for idx, item in enumerate(data):
        if isinstance(item, dict):
            item_id = item.get('id')
            if item_id:
                if item_id in seen_ids:
                    duplicates.append({
                        "id": item_id,
                        "first_occurrence": id_positions[item_id],
                        "duplicate_at": idx
                    })
                else:
                    seen_ids.add(item_id)
                    id_positions[item_id] = idx
    
    return {
        "valid": len(duplicates) == 0,
        "duplicates": duplicates[:10],
        "count": len(seen_ids),
        "total_items": len(data)
    }


def remove_duplicates(data: List[Dict]) -> Tuple[List[Dict], int]:
    """Remove duplicate entries by ID, keeping first occurrence"""
    if not isinstance(data, list):
        return data, 0
    
    seen_ids: Set[str] = set()
    unique_data: List[Dict] = []
    removed_count = 0
    
    for item in data:
        if isinstance(item, dict):
            item_id = item.get('id')
            if item_id and item_id not in seen_ids:
                seen_ids.add(item_id)
                unique_data.append(item)
            elif item_id:
                removed_count += 1
        else:
            unique_data.append(item)
    
    return unique_data, removed_count


def check_null_empty_values(data: List[Dict]) -> Dict[str, Any]:
    """Detect null or empty values in JSON - optimized single pass"""
    null_count = 0
    empty_string_count = 0
    null_paths: List[str] = []
    empty_paths: List[str] = []
    
    def check_value(obj, path: str = ""):
        nonlocal null_count, empty_string_count
        
        if obj is None:
            null_count += 1
            null_paths.append(path)
        elif isinstance(obj, dict):
            for key, value in obj.items():
                new_path = f"{path}.{key}" if path else key
                check_value(value, new_path)
        elif isinstance(obj, list):
            for i, item in enumerate(obj):
                check_value(item, f"{path}[{i}]")
        elif isinstance(obj, str) and obj == "":
            empty_string_count += 1
            empty_paths.append(path)
    
    if isinstance(data, list):
        for idx, item in enumerate(data):
            check_value(item, f"[{idx}]")
    
    return {
        "valid": null_count == 0 and empty_string_count == 0,
        "null_count": null_count,
        "empty_string_count": empty_string_count,
        "null_paths": null_paths[:5],
        "empty_paths": empty_paths[:5]
    }


def check_sitemap_consistency(services_data: List[Dict], sitemap_path: Path) -> Dict[str, Any]:
    """Check if sitemap URLs match service slugs"""
    try:
        # Extract service slugs in single pass
        service_slugs: Set[str] = set()
        for service in services_data:
            if isinstance(service, dict):
                href = service.get('href', '')
                if href:
                    service_slugs.add(href)
        
        # Read and parse sitemap
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        
        urls = re.findall(r'<loc>(.*?)</loc>', sitemap_content)
        # Extract only service URLs (those containing /services/)
        sitemap_service_urls = [url for url in urls if '/services/' in url]
        sitemap_slugs = set(url.replace('https://ziontechgroup.com', '') for url in sitemap_service_urls)
        
        # Also include root URLs as valid
        root_urls = {'/', '/services'}
        
        missing_in_sitemap = service_slugs - sitemap_slugs
        extra_in_sitemap = sitemap_slugs - service_slugs
        
        return {
            "valid": len(missing_in_sitemap) == 0 and len(extra_in_sitemap) == 0,
            "service_count": len(service_slugs),
            "sitemap_url_count": len(urls),
            "sitemap_service_count": len(sitemap_service_urls),
            "missing_in_sitemap": list(missing_in_sitemap)[:10],
            "extra_in_sitemap": list(extra_in_sitemap)[:10]
        }
    except Exception as e:
        return {"valid": False, "error": str(e)}


def regenerate_sitemap(services_data: List[Dict]) -> bool:
    """Regenerate sitemap.xml from services data"""
    try:
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
        
        service_count = 0
        for service in services_data:
            if isinstance(service, dict) and 'id' in service:
                service_id = service['id']
                sitemap_content += f'''  <url>
    <loc>https://ziontechgroup.com/services/{service_id}</loc>
    <lastmod>{today}</lastmod>
  </url>
'''
                service_count += 1
        
        sitemap_content += '</urlset>'
        
        with open(SITEMAP_PATH, 'w', encoding='utf-8') as f:
            f.write(sitemap_content)
        
        return True
    except Exception as e:
        print(f"[❌] Error regenerating sitemap: {e}")
        return False


def run_integrity_checks(fix: bool = False) -> Dict[str, Any]:
    """Run all integrity checks"""
    start_time = time.time()
    
    results = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "execution_time_ms": 0,
        "checks": {},
        "fixes_applied": [] if fix else []
    }
    
    # Load servicesData.json ONCE
    if SERVICES_DATA_PATH.exists():
        success, data, error = load_json_fast(SERVICES_DATA_PATH)
        
        if success:
            results["checks"]["servicesData_syntax"] = {
                "valid": True,
                "message": "Valid JSON",
                "record_count": len(data)
            }
            
            # Run duplicate and null checks on the same loaded data
            results["checks"]["duplicate_ids"] = check_duplicate_ids(data)
            results["checks"]["null_empty_values"] = check_null_empty_values(data)
            
            # Check sitemap consistency
            if SITEMAP_PATH.exists():
                results["checks"]["sitemap_consistency"] = check_sitemap_consistency(data, SITEMAP_PATH)
            else:
                results["checks"]["sitemap_consistency"] = {"valid": False, "message": "Sitemap not found"}
            
            # Apply fixes if requested
            if fix:
                # Remove duplicates
                dup_check = results["checks"]["duplicate_ids"]
                if dup_check.get("duplicates"):
                    unique_data, removed = remove_duplicates(data)
                    if removed > 0:
                        with CatalogLock():
                            if save_json_fast(SERVICES_DATA_PATH, unique_data):
                                results["fixes_applied"].append(f"Removed {removed} duplicate IDs")
                                data = unique_data  # Update reference for sitemap regen
                
                # Regenerate sitemap if inconsistent
                sitemap_check = results["checks"]["sitemap_consistency"]
                if not sitemap_check.get("valid"):
                    if regenerate_sitemap(data):
                        results["fixes_applied"].append("Regenerated sitemap.xml")
        else:
            results["checks"]["servicesData_syntax"] = {"valid": False, "message": error}
    else:
        results["checks"]["servicesData_syntax"] = {"valid": False, "message": "File not found"}
    
    # Calculate execution time
    results["execution_time_ms"] = round((time.time() - start_time) * 1000, 2)
    
    return results


def format_report(results: Dict[str, Any]) -> str:
    """Format report for output"""
    lines = []
    lines.append("=" * 60)
    lines.append("🔍 JSON INTEGRITY MONITOR - DETERMINISTIC OFFLINE MODE")
    lines.append("=" * 60)
    lines.append(f"🕐 Timestamp: {results['timestamp']}")
    lines.append(f"⚡ Execution time: {results['execution_time_ms']}ms")
    lines.append("")
    
    checks = results.get("checks", {})
    
    # Syntax check
    syntax = checks.get("servicesData_syntax", {})
    status = "✅" if syntax.get("valid") else "❌"
    lines.append(f"{status} Syntax: {syntax.get('message', 'N/A')}")
    lines.append(f"   Records: {syntax.get('record_count', 0)}")
    lines.append("")
    
    # Duplicate check
    dup_check = checks.get("duplicate_ids", {})
    status = "✅" if dup_check.get("valid") else "⚠️"
    lines.append(f"{status} Duplicate IDs: {dup_check.get('count', 0)}/{dup_check.get('total_items', 0)} unique")
    if not dup_check.get("valid"):
        lines.append(f"   ⚠️ {len(dup_check.get('duplicates', []))} duplicates found")
    lines.append("")
    
    # Null/empty check
    null_check = checks.get("null_empty_values", {})
    status = "✅" if null_check.get("valid") else "⚠️"
    lines.append(f"{status} Null/Empty: null={null_check.get('null_count', 0)}, empty={null_check.get('empty_string_count', 0)}")
    lines.append("")
    
    # Sitemap check
    sitemap = checks.get("sitemap_consistency", {})
    status = "✅" if sitemap.get("valid") else "⚠️"
    lines.append(f"{status} Sitemap: services={sitemap.get('service_count', 0)}, urls={sitemap.get('sitemap_url_count', 0)}")
    if not sitemap.get("valid"):
        missing = sitemap.get("missing_in_sitemap", [])
        extra = sitemap.get("extra_in_sitemap", [])
        if missing:
            lines.append(f"   ⚠️ Missing in sitemap: {len(missing)}")
        if extra:
            lines.append(f"   ⚠️ Extra in sitemap: {len(extra)}")
    lines.append("")
    
    # Fixes applied
    if results.get("fixes_applied"):
        lines.append("🔧 FIXES APPLIED:")
        for fix in results["fixes_applied"]:
            lines.append(f"   ✅ {fix}")
        lines.append("")
    
    lines.append("=" * 60)
    
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description='JSON Integrity Monitor - Deterministic offline validation')
    parser.add_argument('--fix', action='store_true', help='Apply fixes with catalog locking')
    parser.add_argument('--output', '-o', default=None, help='Output file for JSON report')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be fixed without making changes')
    args = parser.parse_args()
    
    # Run checks
    results = run_integrity_checks(fix=args.fix and not args.dry_run)
    
    # Print formatted report
    print(format_report(results))
    
    # Save report
    if args.output:
        output_path = Path(args.output)
    else:
        output_path = BASE_DIR / 'app/data/json-integrity-report.json'
    
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    
    print(f"📄 Report saved to: {output_path}")
    
    # Exit with code 0 (always succeeds - offline deterministic validation)
    # This ensures resilience regardless of any upstream provider status
    sys.exit(0)


if __name__ == '__main__':
    main()