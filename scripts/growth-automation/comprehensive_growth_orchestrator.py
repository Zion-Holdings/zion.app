#!/usr/bin/env python3
"""
🚀 COMPREHENSIVE GROWTH ORCHESTRATOR v1.0

Master controller for end-to-end autonomous growth:
1. Lead Discovery (100 leads/cycle)
2. Outreach Generation (emails for leads)
3. Service Generation (50 services/cycle)
4. Landing Page Creation
5. Conversion Optimization

Usage:
    python3 comprehensive_growth_orchestrator.py --once
"""

import json
import os
import sys
import argparse
import logging
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Any

# Configuration
BASE_DIR = Path('/Users/klebergarciaalcatrao')
LOG_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'growth_orchestrator.log'

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
logger = logging.getLogger('growth-orchestrator')

def run_script(script_path: str, args: list = None, timeout: int = 120) -> Dict[str, Any]:
    """Run a Python script and return result."""
    cmd = ['python3', str(script_path)]
    if args:
        cmd.extend(args)
    
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout,
            cwd=str(BASE_DIR)
        )
        
        return {
            'success': result.returncode == 0,
            'stdout': result.stdout,
            'stderr': result.stderr,
            'returncode': result.returncode
        }
    except subprocess.TimeoutExpired:
        return {
            'success': False,
            'stdout': '',
            'stderr': 'Timeout expired',
            'returncode': -1
        }
    except Exception as e:
        return {
            'success': False,
            'stdout': '',
            'stderr': str(e),
            'returncode': -1
        }

def count_leads() -> int:
    """Count total leads in CRM."""
    leads_file = BASE_DIR / 'lead_crm' / 'leads.json'
    try:
        if leads_file.exists():
            with open(leads_file, 'r') as f:
                data = json.load(f)
            leads = data if isinstance(data, list) else data.get('leads', [])
            return len(leads)
    except:
        pass
    return 0

def count_services() -> int:
    """Count total services in catalog."""
    services_file = BASE_DIR / 'zion-support.github.io' / 'app' / 'data' / 'servicesData.json'
    try:
        if services_file.exists():
            with open(services_file, 'r') as f:
                data = json.load(f)
            services = data if isinstance(data, list) else data.get('services', [])
            return len(services)
    except:
        pass
    return 0

def run_cycle() -> Dict[str, Any]:
    """Run complete growth cycle."""
    start_time = datetime.now(timezone.utc)
    
    logger.info("=" * 70)
    logger.info("🚀 COMPREHENSIVE GROWTH ORCHESTRATOR v1.0")
    logger.info("=" * 70)
    
    results = {}
    
    # Phase 1: Lead Discovery
    logger.info("\n[📊] PHASE 1: Lead Discovery")
    result = run_script(
        BASE_DIR / 'scripts' / 'growth-automation' / 'auto_lead_discovery.py',
        ['--batch', '100']
    )
    results['lead_discovery'] = result
    if result['success']:
        logger.info("[✅] Lead discovery completed")
    else:
        logger.warning(f"[⚠️] Lead discovery had issues: {result['stderr'][:100]}")
    
    # Phase 2: Outreach Generation
    logger.info("\n[📧] PHASE 2: Outreach Generation")
    result = run_script(
        BASE_DIR / 'scripts' / 'growth-automation' / 'lead_to_outreach_integrator.py',
        ['--batch', '50']
    )
    results['outreach'] = result
    if result['success']:
        logger.info("[✅] Outreach generation completed")
    else:
        logger.warning(f"[⚠️] Outreach generation had issues: {result['stderr'][:100]}")
    
    # Phase 3: Service Generation
    logger.info("\n[🚀] PHASE 3: Service Generation")
    result = run_script(
        BASE_DIR / 'scripts' / 'growth-automation' / 'service_generation_accelerator.py',
        ['--batch', '50']
    )
    results['services'] = result
    if result['success']:
        logger.info("[✅] Service generation completed")
    else:
        logger.warning(f"[⚠️] Service generation had issues: {result['stderr'][:100]}")
    
    # Phase 4: Landing Page Generation
    logger.info("\n[📄] PHASE 4: Landing Page Generation")
    result = run_script(
        BASE_DIR / 'scripts' / 'growth-automation' / 'instant_pipeline_orchestrator.py',
        ['--once']
    )
    results['landing_pages'] = result
    if result['success']:
        logger.info("[✅] Landing page generation completed")
    else:
        logger.warning(f"[⚠️] Landing page generation had issues: {result['stderr'][:100]}")
    
    # Phase 5: Conversion Optimization
    logger.info("\n[🎯] PHASE 5: Conversion Optimization")
    result = run_script(
        BASE_DIR / 'scripts' / 'growth-automation' / 'conversion_acceleration_engine.py',
        ['--once']
    )
    results['conversion'] = result
    if result['success']:
        logger.info("[✅] Conversion optimization completed")
    else:
        logger.warning(f"[⚠️] Conversion optimization had issues: {result['stderr'][:100]}")
    
    end_time = datetime.now(timezone.utc)
    duration = (end_time - start_time).total_seconds()
    
    # Count totals
    total_leads = count_leads()
    total_services = count_services()
    
    # Report
    logger.info("\n" + "=" * 70)
    logger.info("[🏁] GROWTH CYCLE COMPLETE")
    logger.info(f"   Duration: {duration:.2f}s")
    logger.info(f"   Total Leads: {total_leads}")
    logger.info(f"   Total Services: {total_services}")
    logger.info("=" * 70)
    
    return {
        'status': 'success',
        'duration_seconds': duration,
        'total_leads': total_leads,
        'total_services': total_services,
        'phases': results
    }

def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Comprehensive Growth Orchestrator')
    parser.add_argument('--once', action='store_true', help='Run once and exit')
    
    args = parser.parse_args()
    
    result = run_cycle()
    return 0 if result['status'] == 'success' else 1

if __name__ == '__main__':
    sys.exit(main())