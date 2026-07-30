#!/usr/bin/env python3
"""
Hyper-Self-Optimizing Growth Fabric for Zion Tech Group
Version 2.0 - Self-optimizing system that monitors growth metrics and automatically adjusts parameters for 500+ artifacts per minute throughput.
"""

import json
import os
import sys
import time
import argparse
import hashlib
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any, Optional

# Setup paths
BASE = Path(os.environ.get('PROJECT_ROOT', '/Users/klebergarciaalcatrao'))
DATA_DIR = BASE / 'app' / 'data'
SERVICES_FILE = DATA_DIR / 'servicesData.json'
GROWTH_DIR = BASE / 'outreach_monitor' / 'processed'
GROWTH_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR.mkdir(parents=True, exist_ok=True)

# Configuration file path
CONFIG_FILE = GROWTH_DIR / 'growth_optimizer_config.json'
REPORT_FILE = GROWTH_DIR / 'growth_optimization_report.json'

# Configure logging
import logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-7s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(GROWTH_DIR / 'hyper_self_optimizing_growth_fabric.log')
    ]
)
logger = logging.getLogger('hyper-self-optimizing-growth-fabric')

# Default configuration
DEFAULT_CONFIG = {
    'service_batch_size': 50,
    'page_generation_rate': 1,
    'outreach_rate': 1,
    'discovery_interval': 60,
    'pipeline_interval': 120,
    'outreach_interval': 60,
    'metrics_interval': 300,
    'max_velocity_multiplier': 2.0,
    'min_velocity_multiplier': 0.5
}

def load_config() -> Dict:
    """Load configuration from file or create default."""
    try:
        with open(CONFIG_FILE, 'r') as f:
            config = json.load(f)
            # Merge with defaults to ensure all keys exist
            for key, value in DEFAULT_CONFIG.items():
                if key not in config:
                    config[key] = value
            return config
    except FileNotFoundError:
        logger.info("[ℹ️] Creating new configuration file")
        save_config(DEFAULT_CONFIG)
        return DEFAULT_CONFIG.copy()
    except json.JSONDecodeError as e:
        logger.warning(f"[⚠️] Config file corrupted, resetting to defaults: {e}")
        save_config(DEFAULT_CONFIG)
        return DEFAULT_CONFIG.copy()

def save_config(config: Dict):
    """Save configuration to file."""
    with open(CONFIG_FILE, 'w') as f:
        json.dump(config, f, indent=2)
    logger.info(f"[💾] Configuration saved to {CONFIG_FILE}")

def get_services_count() -> int:
    """Get current services count from JSON file."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        if isinstance(data, dict):
            return len(data.get('services', []))
        return len(data)
    except FileNotFoundError:
        logger.warning(f"[⚠️] Services file not found: {SERVICES_FILE}")
        return 0
    except json.JSONDecodeError as e:
        logger.error(f"[❌] JSON decode error in services file: {e}")
        return 0

def get_email_draft_count() -> int:
    """Get count of generated email drafts."""
    try:
        email_dir = BASE / 'email_drafts'
        if not email_dir.exists():
            return 0
        return len(list(email_dir.glob('*_outreach.txt')))
    except Exception as e:
        logger.warning(f"[⚠️] Error counting email drafts: {e}")
        return 0

def get_page_count() -> int:
    """Get count of generated service pages."""
    try:
        services_dir = BASE / 'app' / 'services'
        if not services_dir.exists():
            return 0
        return len(list(services_dir.glob('*/page.tsx')))
    except Exception as e:
        logger.warning(f"[⚠️] Error counting pages: {e}")
        return 0

def calculate_velocity(metrics: Dict, config: Dict) -> Dict:
    """Calculate velocity metrics and identify bottlenecks."""
    now = datetime.now(timezone.utc)
    
    # Use a rolling window for more accurate velocity
    # Start from first run or use a reasonable baseline
    start = datetime(2026, 7, 25, tzinfo=timezone.utc)
    hours = max(1, (now - start).total_seconds() / 3600)
    
    services = metrics.get('services', 0)
    emails = metrics.get('emails', 0)
    pages = metrics.get('pages', 0)
    
    # Calculate rates
    services_per_hour = services / hours
    emails_per_hour = emails / hours
    pages_per_hour = pages / hours
    
    # Calculate artifacts per minute
    total_artifacts = services + emails + pages
    artifacts_per_minute = (total_artifacts / hours) / 60 if hours > 0 else 0
    
    return {
        'services_per_hour': round(services_per_hour, 2),
        'emails_per_hour': round(emails_per_hour, 2),
        'pages_per_hour': round(pages_per_hour, 2),
        'total_artifacts': total_artifacts,
        'artifacts_per_minute': round(artifacts_per_minute, 2),
        'hours_elapsed': round(hours, 2)
    }

def identify_bottleneck(velocity: Dict, config: Dict) -> str:
    """Identify the primary bottleneck based on velocity metrics."""
    # The bottleneck is the slowest rate relative to its target
    # Target rates based on 500+ artifacts/minute goal
    target_services_per_hour = 500  # Target ~500 services/hour
    target_emails_per_hour = 5000  # Target ~5000 emails/hour  
    target_pages_per_hour = 500   # Target ~500 pages/hour
    
    # Normalize rates to 0-1 scale
    services_ratio = velocity['services_per_hour'] / target_services_per_hour
    emails_ratio = velocity['emails_per_hour'] / target_emails_per_hour
    pages_ratio = velocity['pages_per_hour'] / target_pages_per_hour
    
    min_ratio = min(services_ratio, emails_ratio, pages_ratio)
    
    if min_ratio == services_ratio:
        return 'services_per_hour'
    elif min_ratio == emails_ratio:
        return 'emails_per_hour'
    else:
        return 'pages_per_hour'

def optimize_parameters(config: Dict, bottleneck: str, velocity: Dict) -> Dict:
    """Optimize configuration parameters based on bottleneck analysis."""
    new_config = config.copy()
    max_multiplier = config.get('max_velocity_multiplier', 2.0)
    
    logger.info(f"[🔧] Optimizing for bottleneck: {bottleneck}")
    
    if bottleneck == 'services_per_hour':
        # Increase service batch size - PATCHED CAPS for 500+/min throughput
        current_batch = config.get('service_batch_size', 50)
        new_batch = min(int(current_batch * max_multiplier), 500)  # PATCHED: was 200
        new_config['service_batch_size'] = new_batch
        logger.info(f"[📈] Increased service_batch_size: {current_batch} -> {new_batch}")
        
    elif bottleneck == 'emails_per_hour':
        # Increase outreach rate - PATCHED CAPS for 500+/min throughput
        current_rate = config.get('outreach_rate', 1)
        new_rate = min(int(current_rate * max_multiplier), 20)  # PATCHED: was 5
        new_config['outreach_rate'] = new_rate
        logger.info(f"[📈] Increased outreach_rate: {current_rate} -> {new_rate}")
        
    elif bottleneck == 'pages_per_hour':
        # Increase page generation rate - PATCHED CAPS for 500+/min throughput
        current_rate = config.get('page_generation_rate', 1)
        new_rate = min(int(current_rate * max_multiplier), 10)  # PATCHED: was 3
        new_config['page_generation_rate'] = new_rate
        logger.info(f"[📈] Increased page_generation_rate: {current_rate} -> {new_rate}")
    
    return new_config

def generate_optimization_report(metrics: Dict, velocity: Dict, bottleneck: str, config: Dict, recommendations: List[str]) -> Dict:
    """Generate comprehensive optimization report."""
    return {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'metrics': metrics,
        'velocity': velocity,
        'bottleneck': bottleneck,
        'current_config': config,
        'recommendations': recommendations,
        'status': 'success' if velocity.get('artifacts_per_minute', 0) > 0 else 'error'
    }

def run_optimization_cycle() -> Dict:
    """Run a single optimization cycle."""
    logger.info("=" * 60)
    logger.info("🚀 HYPER-SELF-OPTIMIZING GROWTH FABRIC v2.0")
    logger.info("=" * 60)
    
    # Load current configuration
    config = load_config()
    logger.info(f"[⚙️] Current config: service_batch_size={config['service_batch_size']}, outreach_rate={config['outreach_rate']}, page_generation_rate={config['page_generation_rate']}")
    
    # Collect current metrics
    logger.info("[📊] Collecting current metrics...")
    metrics = {
        'services': get_services_count(),
        'emails': get_email_draft_count(),
        'pages': get_page_count()
    }
    logger.info(f"[ℹ️] Metrics: {metrics['services']} services, {metrics['emails']} emails, {metrics['pages']} pages")
    
    # Calculate velocity
    velocity = calculate_velocity(metrics, config)
    logger.info(f"[📈] Velocity: {velocity['artifacts_per_minute']} artifacts/min, {velocity['services_per_hour']} services/hr")
    
    # Identify bottleneck
    bottleneck = identify_bottleneck(velocity, config)
    logger.info(f"[🔍] Primary bottleneck: {bottleneck}")
    
    # Generate recommendations
    recommendations = []
    if bottleneck == 'services_per_hour':
        recommendations.append(f"Increase service_batch_size from {config['service_batch_size']} to 500 for maximum throughput")
    elif bottleneck == 'emails_per_hour':
        recommendations.append(f"Increase outreach_rate from {config['outreach_rate']} to 20 to match service generation")
    elif bottleneck == 'pages_per_hour':
        recommendations.append(f"Increase page_generation_rate from {config['page_generation_rate']} to 10 to reduce page bottleneck")
    
    recommendations.append("Run ultra_fast_micro_growth_engine.py for service generation")
    recommendations.append("Run hyper_velocity_outreach_engine.py for email generation")
    
    # Optimize parameters
    new_config = optimize_parameters(config, bottleneck, velocity)
    
    # Save new configuration
    save_config(new_config)
    
    # Generate report
    report = generate_optimization_report(metrics, velocity, bottleneck, new_config, recommendations)
    
    # Save report
    with open(REPORT_FILE, 'w') as f:
        json.dump(report, f, indent=2)
    logger.info(f"[📄] Report saved to {REPORT_FILE}")
    
    return report

def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Hyper-Self-Optimizing Growth Fabric for Zion Tech Group')
    parser.add_argument('--once', action='store_true', help='Run single optimization cycle and exit')
    parser.add_argument('--interval', type=int, default=10, help='Interval between cycles in seconds (default: 10)')
    args = parser.parse_args()
    
    if args.once:
        # Run single cycle
        report = run_optimization_cycle()
        print(json.dumps(report, indent=2))
        return 0
    else:
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
                logger.info(f"\n[🔄] Optimization cycle #{cycle_count}")
                run_optimization_cycle()
                
                if running:
                    time.sleep(args.interval)
            except Exception as e:
                logger.error(f"[💥] Cycle error: {e}")
                time.sleep(120)
        
        logger.info("Hyper-Self-Optimizing Growth Fabric stopped")
        return 0

if __name__ == '__main__':
    sys.exit(main())