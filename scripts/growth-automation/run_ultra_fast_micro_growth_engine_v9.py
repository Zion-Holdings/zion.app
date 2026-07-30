#!/usr/bin/env python3
"""
Ultra-Fast Micro-Growth Engine v9.0 - Run Script
Executes the growth engine and generates comprehensive report
"""

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

# Import the growth engine
sys.path.insert(0, '/Users/klebergarciaalcatrao/scripts/growth-automation')
from ultra_fast_micro_growth_engine_v9 import run_ultra_fast_micro_growth_engine, load_services

def run_and_report():
    """Run the growth engine and generate report."""
    print("=" * 70)
    print("🚀 ULTRA-FAST MICRO-GROWTH ENGINE v9.0 - EXECUTION")
    print("=" * 70)
    print(f"[⏰] Start time: {datetime.now(timezone.utc).isoformat()}")
    
    # Get initial count
    initial_services = load_services()
    initial_count = len(initial_services)
    print(f"[📊] Initial service count: {initial_count}")
    
    # Run the growth engine
    result = run_ultra_fast_micro_growth_engine()
    
    # Get final count
    final_services = load_services()
    final_count = len(final_services)
    
    # Calculate growth
    growth = final_count - initial_count
    
    print("\n" + "=" * 70)
    print("📈 GROWTH REPORT")
    print("=" * 70)
    print(f"Initial services: {initial_count}")
    print(f"New services added: {growth}")
    print(f"Final catalog size: {final_count}")
    print(f"Cycles executed: {result.get('cycles_executed', 'N/A')}")
    print(f"Duration: {result.get('duration_seconds', 0):.2f}s")
    print(f"Status: {result.get('status', 'unknown')}")
    
    # Prepare report for Telegram delivery
    report = {
        'status': result.get('status', 'unknown'),
        'services_added': growth,
        'total_catalog_size': final_count,
        'cycles_executed': result.get('cycles_executed', 0),
        'timestamp': result.get('timestamp', datetime.now(timezone.utc).isoformat())
    }
    
    print("\n" + "=" * 70)
    print("📋 JSON REPORT")
    print("=" * 70)
    print(json.dumps(report, indent=2))
    
    return report

if __name__ == '__main__':
    report = run_and_report()