#!/usr/bin/env python3
"""
Consolidated Health Monitor Script
Gathers system health status for Telegram reporting
"""

import json
import os
import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path

# Paths
BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_DATA = BASE_DIR / 'app/data/servicesData.json'
SERVICES_DATA_TS = BASE_DIR / 'app/data/servicesData.ts'
SITEMAP_PATH = BASE_DIR / 'sitemap.xml'
GROWTH_METRICS = BASE_DIR / 'app/data/growth-metrics.json'
HOT_FOLLOWUP_LEDGER = BASE_DIR / 'app/data/outreach/hot_followup_send_ready_queue.json'
SERVICE_HEALTH = BASE_DIR / 'app/data/service-health.json'
SENT_LOG = BASE_DIR / 'app/data/outreach/sent_log.json'
DISCOVERED_LEADS = BASE_DIR / 'app/data/discovered_leads.json'

def check_file_health(path, name):
    """Check if a file exists and is valid JSON"""
    result = {'exists': False, 'valid': False, 'size': 0, 'error': None}
    try:
        if path.exists():
            result['exists'] = True
            result['size'] = path.stat().st_size
            if path.suffix == '.json':
                with open(path, 'r') as f:
                    data = json.load(f)
                    result['valid'] = True
                    result['record_count'] = len(data) if isinstance(data, (list, dict)) else 0
            elif path.suffix == '.ts':
                content = path.read_text()
                result['valid'] = len(content) > 0
                result['record_count'] = len(re.findall(r"id:\s*['\"]", content))
    except Exception as e:
        result['error'] = str(e)
    return result

def check_sitemap():
    """Check sitemap health"""
    result = {'exists': False, 'valid': False, 'url_count': 0, 'error': None}
    try:
        if SITEMAP_PATH.exists():
            result['exists'] = True
            content = SITEMAP_PATH.read_text()
            result['url_count'] = len(re.findall(r'<url>', content))
            result['valid'] = result['url_count'] > 0
    except Exception as e:
        result['error'] = str(e)
    return result

def check_service_pages():
    """Check service pages health"""
    result = {'total': 0, 'healthy': 0, 'errors': [], 'slow': 0}
    try:
        if SERVICE_HEALTH.exists():
            with open(SERVICE_HEALTH, 'r') as f:
                health = json.load(f)
            total = len(health)
            healthy = sum(1 for v in health.values() if v.get('last_status') == 200)
            errors = [k for k, v in health.items() if v.get('last_status') != 200]
            slow = sum(1 for v in health.values() if v.get('last_duration', 0) > 2.0)
            
            result = {
                'total': total,
                'healthy': healthy,
                'unhealthy': total - healthy,
                'slow_count': slow,
                'errors': errors[:10]  # First 10 errors
            }
    except Exception as e:
        result['error'] = str(e)
    return result

def check_growth_metrics():
    """Check growth metrics"""
    result = {'status': 'unknown', 'data': {}}
    try:
        if GROWTH_METRICS.exists():
            with open(GROWTH_METRICS, 'r') as f:
                data = json.load(f)
            result['status'] = data.get('status', 'unknown')
            result['data'] = {
                'services_discovered': data.get('services_discovered', 0),
                'total_services': data.get('total_services', 0),
                'last_run': data.get('last_run', 'unknown'),
                'engine_version': data.get('engine_version', 'unknown'),
                'landing_pages_generated': data.get('landing_pages_generated', 0)
            }
    except Exception as e:
        result['error'] = str(e)
    return result

def check_hot_followup_ledger():
    """Check hot follow-up ledger"""
    result = {'exists': False, 'valid': False, 'high_priority_count': 0, 'error': None}
    try:
        if HOT_FOLLOWUP_LEDGER.exists():
            result['exists'] = True
            with open(HOT_FOLLOWUP_LEDGER, 'r') as f:
                data = json.load(f)
            result['valid'] = True
            result['high_priority_count'] = len(data.get('high', []))
            result['medium_priority_count'] = len(data.get('medium', []))
            result['low_priority_count'] = len(data.get('low', []))
    except Exception as e:
        result['error'] = str(e)
    return result

def check_services_data():
    """Check services data file"""
    result = check_file_health(SERVICES_DATA, 'servicesData.json')
    # Also check TS file
    ts_result = check_file_health(SERVICES_DATA_TS, 'servicesData.ts')
    result['ts_file'] = ts_result
    return result

def check_sent_log():
    """Check sent log"""
    result = check_file_health(SENT_LOG, 'sent_log.json')
    return result

def run_health_checks():
    """Run all health checks"""
    now = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
    
    checks = {
        'timestamp': now,
        'overall_status': 'healthy',
        'errors': [],
        'warnings': []
    }
    
    # Check services data
    services_data = check_services_data()
    checks['services_data_file_health'] = services_data
    if not services_data['exists']:
        checks['errors'].append('servicesData.json does not exist')
        checks['overall_status'] = 'degraded'
    elif not services_data['valid']:
        checks['errors'].append('servicesData.json is invalid JSON')
        checks['overall_status'] = 'degraded'
    
    # Check sitemap
    sitemap = check_sitemap()
    checks['sitemap_status'] = sitemap
    if not sitemap['exists']:
        checks['warnings'].append('sitemap.xml does not exist')
    elif not sitemap['valid']:
        checks['warnings'].append('sitemap.xml is empty or invalid')
    
    # Check service pages
    service_pages = check_service_pages()
    checks['service_pages_health'] = service_pages
    if service_pages.get('unhealthy', 0) > 0:
        checks['warnings'].append(f"{service_pages['unhealthy']} service pages unhealthy")
    if service_pages.get('slow_count', 0) > 0:
        checks['warnings'].append(f"{service_pages['slow_count']} slow service pages")
    
    # Check hot follow-up ledger
    hot_ledger = check_hot_followup_ledger()
    checks['hot_followup_ledger_status'] = hot_ledger
    if not hot_ledger['exists']:
        checks['warnings'].append('hot follow-up ledger does not exist')
    
    # Check growth metrics
    growth = check_growth_metrics()
    checks['growth_metrics'] = growth
    if growth.get('error'):
        checks['warnings'].append(f"Growth metrics error: {growth['error']}")
    
    # Check sent log
    sent_log = check_sent_log()
    checks['outreach_stats'] = sent_log
    
    # Determine overall status
    if checks['errors']:
        checks['overall_status'] = 'degraded'
    if len(checks['errors']) > 2:
        checks['overall_status'] = 'critical'
    
    return checks

def format_report(checks):
    """Format the health check report for Telegram"""
    lines = []
    lines.append("=" * 60)
    lines.append("🏥 CONSOLIDATED HEALTH MONITOR REPORT")
    lines.append("=" * 60)
    lines.append(f"🕐 Timestamp: {checks['timestamp']}")
    lines.append("")
    
    # Overall status
    status_emoji = "✅" if checks['overall_status'] == 'healthy' else "⚠️" if checks['overall_status'] == 'degraded' else "🔴"
    lines.append(f"{status_emoji} OVERALL STATUS: {checks['overall_status'].upper()}")
    lines.append("")
    
    # Services Data File Health
    lines.append("📁 SERVICES DATA FILE HEALTH")
    sd = checks.get('services_data_file_health', {})
    lines.append(f"   ✅ servicesData.json: {'Valid' if sd.get('valid') else 'Invalid'} ({sd.get('record_count', 0)} records)")
    ts_data = sd.get('ts_file', {})
    lines.append(f"   ✅ servicesData.ts: {'Valid' if ts_data.get('valid') else 'Invalid'} ({ts_data.get('record_count', 0)} records)")
    lines.append("")
    
    # Hot Follow-up Ledger Status
    lines.append("📋 HOT FOLLOW-UP LEDGER STATUS")
    hf = checks.get('hot_followup_ledger_status', {})
    lines.append(f"   ✅ Exists: {hf.get('exists', False)}")
    lines.append(f"   🔥 High Priority: {hf.get('high_priority_count', 0)}")
    lines.append(f"   🟡 Medium Priority: {hf.get('medium_priority_count', 0)}")
    lines.append(f"   🟢 Low Priority: {hf.get('low_priority_count', 0)}")
    lines.append("")
    
    # Sitemap Status
    lines.append("🗺️ SITEMAP STATUS")
    sm = checks.get('sitemap_status', {})
    lines.append(f"   ✅ Exists: {sm.get('exists', False)}")
    lines.append(f"   📄 URLs: {sm.get('url_count', 0)}")
    lines.append(f"   ✅ Valid: {sm.get('valid', False)}")
    lines.append("")
    
    # Growth Metrics
    lines.append("📈 GROWTH METRICS")
    gm = checks.get('growth_metrics', {}).get('data', {})
    lines.append(f"   🚀 Total Services: {gm.get('total_services', 0):,}")
    lines.append(f"   📊 Services Discovered: {gm.get('services_discovered', 0)}")
    lines.append(f"   📄 Landing Pages: {gm.get('landing_pages_generated', 0)}")
    lines.append(f"   🔧 Engine: v{gm.get('engine_version', 'unknown')}")
    lines.append(f"   🕐 Last Run: {gm.get('last_run', 'unknown')}")
    lines.append("")
    
    # Service Pages Health
    lines.append("🌐 SERVICE PAGES HEALTH")
    sp = checks.get('service_pages_health', {})
    lines.append(f"   ✅ Healthy: {sp.get('healthy', 0)}/{sp.get('total', 0)}")
    lines.append(f"   ⚠️ Unhealthy: {sp.get('unhealthy', 0)}")
    lines.append(f"   🐢 Slow: {sp.get('slow_count', 0)}")
    lines.append("")
    
    # Outreach Stats
    lines.append("📧 OUTREACH STATISTICS")
    sl = checks.get('outreach_stats', {})
    lines.append(f"   📨 Sent Log: {sl.get('record_count', 0)} records")
    lines.append("")
    
    # Errors and Warnings
    if checks.get('errors'):
        lines.append("🔴 ERRORS")
        for err in checks['errors']:
            lines.append(f"   • {err}")
        lines.append("")
    
    if checks.get('warnings'):
        lines.append("⚠️ WARNINGS")
        for warn in checks['warnings']:
            lines.append(f"   • {warn}")
        lines.append("")
    
    lines.append("=" * 60)
    
    return "\n".join(lines)

if __name__ == '__main__':
    checks = run_health_checks()
    report = format_report(checks)
    print(report)
    
    # Save report
    report_path = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/health-monitor-report.json')
    with open(report_path, 'w') as f:
        json.dump(checks, f, indent=2)
    
    print(f"\nReport saved to: {report_path}")