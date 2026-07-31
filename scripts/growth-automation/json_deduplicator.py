#!/usr/bin/env python3
"""
JSON Integrity Monitor - Deduplication and Validation Script
Checks servicesData.json for duplicates and data integrity issues.

Usage:
    python3 json_deduplicator.py --report    # Check and report issues
    python3 json_deduplicator.py --fix      # Fix issues automatically
"""
import json
import sys
import argparse
import re
from pathlib import Path
from collections import Counter

# Default JSON file path
DEFAULT_JSON_PATH = Path(__file__).parent.parent / "app" / "data" / "servicesData.json"


def load_json(file_path):
    """Load JSON file and return data."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except json.JSONDecodeError as e:
        print(f"[❌] JSON parsing error: {e}")
        return None
    except FileNotFoundError:
        print(f"[❌] File not found: {file_path}")
        return None
    except Exception as e:
        print(f"[❌] Error loading file: {e}")
        return None


def check_duplicates(data):
    """Check for duplicate services by ID and name."""
    if not data:
        return [], []

    # Handle both array format and object with 'services' key
    if isinstance(data, list):
        services = data
    elif isinstance(data, dict) and 'services' in data:
        services = data['services']
    else:
        return [], []

    id_counter = Counter(s.get('id') for s in services if s.get('id'))
    name_counter = Counter(s.get('title') or s.get('name') for s in services if s.get('title') or s.get('name'))

    duplicate_ids = [id_val for id_val, count in id_counter.items() if count > 1]
    duplicate_names = [name_val for name_val, count in name_counter.items() if count > 1]

    return duplicate_ids, duplicate_names


def check_validation_issues(data):
    """Check for validation issues in services."""
    issues = []
    if not data:
        return issues

    # Handle both array format and object with 'services' key
    if isinstance(data, list):
        services = data
    elif isinstance(data, dict) and 'services' in data:
        services = data['services']
    else:
        return issues

    for i, service in enumerate(services):
        # Check for missing name/title
        if not service.get('title') and not service.get('name'):
            issues.append(f"Service at index {i}: Missing or empty field: name/title")

        # Check for missing id
        if not service.get('id'):
            issues.append(f"Service at index {i}: Missing or empty field: id")

        # Check for malformed email (common corruption pattern)
        contact_info = service.get('contactInfo', {})
        if isinstance(contact_info, dict):
            email = contact_info.get('email', '')
            if '\\\\"' in email or email.startswith('"'):
                service_id = service.get('id', 'unknown')
                issues.append(f"Service '{service_id}': Malformed email field: {email[:50]}")
        elif isinstance(contact_info, str):
            # contactInfo is a string instead of object - corruption
            service_id = service.get('id', 'unknown')
            issues.append(f"Service '{service_id}': contactInfo is string instead of object: {contact_info[:50]}")

        # Check for null bytes or other corruption
        for key, value in service.items():
            if isinstance(value, str) and '\x00' in value:
                service_id = service.get('id', 'unknown')
                issues.append(f"Service '{service_id}': Null byte in field '{key}'")

    return issues


def deduplicate_services(data, duplicate_ids):
    """Remove duplicate services, keeping the first occurrence."""
    if not data:
        return data

    # Handle both array format and object with 'services' key
    if isinstance(data, list):
        services = data
        is_list = True
    elif isinstance(data, dict) and 'services' in data:
        services = data['services']
        is_list = False
    else:
        return data

    seen_ids = set()
    unique_services = []
    removed_count = 0

    for service in services:
        service_id = service.get('id')
        if service_id and service_id not in seen_ids:
            seen_ids.add(service_id)
            unique_services.append(service)
        else:
            removed_count += 1

    if is_list:
        data[:] = unique_services
    else:
        data['services'] = unique_services
    return data, removed_count


def fix_validation_issues(data):
    """Attempt to fix common validation issues."""
    if not data:
        return data, 0

    # Handle both array format and object with 'services' key
    if isinstance(data, list):
        services = data
    elif isinstance(data, dict) and 'services' in data:
        services = data['services']
    else:
        return data, 0

    fixes = 0

    for service in services:
        # Fix missing name from title
        if not service.get('title') and not service.get('name') and service.get('id'):
            # Try to generate name from id
            service['title'] = service['id'].replace('-', ' ').title()
            fixes += 1

        # Fix malformed email
        contact_info = service.get('contactInfo')
        if isinstance(contact_info, dict):
            email = contact_info.get('email', '')
            if '\\\\"' in email:
                # Try to fix the email
                if 'ziontechgroup.com' in email or 'gmail.com' in email:
                    # Extract the actual email
                    match = re.search(r'([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})', email)
                    if match:
                        contact_info['email'] = match.group(1)
                        fixes += 1
        elif isinstance(contact_info, str):
            # contactInfo is a string - try to parse it as JSON or convert to object
            try:
                parsed = json.loads(contact_info)
                if isinstance(parsed, dict):
                    service['contactInfo'] = parsed
                    fixes += 1
            except json.JSONDecodeError:
                # Can't parse as JSON, set to empty object
                service['contactInfo'] = {}
                fixes += 1

    return data, fixes


def count_affected_services(issues):
    """Count unique services with issues."""
    affected = set()
    for issue in issues:
        # Extract service index or id from issue string
        if 'index' in issue:
            parts = issue.split('index ')
            if len(parts) > 1:
                idx = parts[1].split(':')[0]
                affected.add(idx)
        elif 'Service' in issue:
            match = re.search(r"Service '([^']+)'", issue)
            if match:
                affected.add(match.group(1))
    return len(affected)


def main():
    parser = argparse.ArgumentParser(description='JSON Integrity Monitor')
    parser.add_argument('--report', action='store_true', help='Report issues')
    parser.add_argument('--fix', action='store_true', help='Fix issues')
    parser.add_argument('--file', type=str, default=str(DEFAULT_JSON_PATH), help='Path to JSON file')

    args = parser.parse_args()

    json_path = Path(args.file)

    print("=" * 60)
    print("🔍 JSON DEDUPLICATION AND CLEANUP")
    print("=" * 60)
    print()

    # Load JSON
    data = load_json(json_path)
    if data is None:
        print("[❌] Failed to load JSON file")
        sys.exit(2)

    # Check duplicates
    duplicate_ids, duplicate_names = check_duplicates(data)

    # Check validation issues
    validation_issues = check_validation_issues(data)

    # Count affected services
    affected_count = count_affected_services(validation_issues)

    # Report findings
    total_services = len(data) if isinstance(data, list) else len(data.get('services', []))
    print(f"[ℹ️] Loaded {total_services} services from JSON")
    print(f"[ℹ️] Found {len(duplicate_ids)} duplicates by ID, {len(duplicate_names)} duplicates by name")
    print(f"[ℹ️] Found {len(validation_issues)} validation issues in {affected_count} services")
    print()

    if validation_issues:
        print("📋 ISSUE REPORT:")
        for issue in validation_issues[:10]:  # Show first 10 issues
            print(f"  - {issue}")
        if len(validation_issues) > 10:
            print(f"  ... and {len(validation_issues) - 10} more issues")
        print()

    # Summary
    print("📊 SUMMARY:")
    print(f"  Total services: {total_services}")
    print(f"  Unique services: {total_services - len(duplicate_ids)}")
    print(f"  Duplicates found: {len(duplicate_ids) + len(duplicate_names)}")
    print(f"  Issues found: {len(validation_issues)}")
    print()

    if args.fix:
        print("🔧 FIXING ISSUES...")
        if duplicate_ids:
            data, removed = deduplicate_services(data, duplicate_ids)
            print(f"  Removed {removed} duplicate services")
        if validation_issues:
            data, fixes = fix_validation_issues(data)
            print(f"  Applied {fixes} automatic fixes")

        # Write back to file
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
        print(f"  ✅ Data written back to {json_path}")
    else:
        print("💡 Recommendation: Run with --fix to automatically resolve issues")

    print("=" * 60)

    # Exit code based on issues found
    if duplicate_ids or validation_issues:
        sys.exit(1)
    else:
        print("✅ Data integrity verified - no issues found")
        sys.exit(0)


if __name__ == "__main__":
    main()