#!/usr/bin/env python3
"""
GitHub Actions Workflow Auto-Heal Engine
Intelligent workflow repair and monitoring system
"""

import os
import re
import yaml
import json
import subprocess
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Tuple, Optional

class WorkflowAutoHealEngine:
    """Intelligent workflow repair and monitoring system"""
    
    def __init__(self, workflows_dir: str = ".github/workflows"):
        self.workflows_dir = Path(workflows_dir)
        self.health_report = {}
        self.fix_history = []
        self.failure_patterns = {}
        
    def analyze_workflow_health(self) -> Dict:
        """Analyze the health of all workflow files"""
        print("🔍 Analyzing workflow health...")
        
        if not self.workflows_dir.exists():
            return {"error": "Workflows directory not found"}
        
        workflow_files = list(self.workflows_dir.glob('*.yml')) + list(self.workflows_dir.glob('*.yaml'))
        
        health_data = {
            "timestamp": datetime.now().isoformat(),
            "total_workflows": len(workflow_files),
            "healthy_workflows": 0,
            "broken_workflows": 0,
            "workflow_details": [],
            "common_issues": {},
            "recommendations": []
        }
        
        for workflow_file in workflow_files:
            workflow_health = self._analyze_single_workflow(workflow_file)
            health_data["workflow_details"].append(workflow_health)
            
            if workflow_health["status"] == "healthy":
                health_data["healthy_workflows"] += 1
            else:
                health_data["broken_workflows"] += 1
                
                # Track common issues
                for issue in workflow_health["issues"]:
                    issue_type = issue["type"]
                    if issue_type not in health_data["common_issues"]:
                        health_data["common_issues"][issue_type] = 0
                    health_data["common_issues"][issue_type] += 1
        
        # Generate recommendations
        health_data["recommendations"] = self._generate_recommendations(health_data)
        
        self.health_report = health_data
        return health_data
    
    def _analyze_single_workflow(self, workflow_file: Path) -> Dict:
        """Analyze a single workflow file for issues"""
        try:
            with open(workflow_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            return {
                "file": str(workflow_file),
                "status": "error",
                "error": str(e),
                "issues": [],
                "severity": "critical"
            }
        
        issues = []
        
        # Check for YAML syntax errors
        try:
            yaml.safe_load(content)
            yaml_valid = True
        except yaml.YAMLError as e:
            yaml_valid = False
            issues.append({
                "type": "yaml_syntax_error",
                "message": str(e),
                "severity": "critical"
            })
        
        # Check for missing required sections
        required_sections = ["name", "on", "jobs"]
        for section in required_sections:
            if section not in content:
                issues.append({
                    "type": f"missing_{section}",
                    "message": f"Missing required section: {section}",
                    "severity": "critical"
                })
        
        # Check for missing job elements
        if "jobs:" in content:
            if "runs-on:" not in content:
                issues.append({
                    "type": "missing_runs_on",
                    "message": "Missing runs-on specification",
                    "severity": "high"
                })
            
            if "steps:" not in content:
                issues.append({
                    "type": "missing_steps",
                    "message": "Missing steps section",
                    "severity": "high"
                })
        
        # Check for permission issues
        if "permissions:" in content:
            # Check if permissions are properly placed
            if "concurrency:" in content and content.find("permissions:") > content.find("concurrency:"):
                issues.append({
                    "type": "misplaced_permissions",
                    "message": "Permissions section is misplaced",
                    "severity": "medium"
                })
        
        # Determine overall status
        if not yaml_valid or any(issue["severity"] == "critical" for issue in issues):
            status = "broken"
        elif any(issue["severity"] == "high" for issue in issues):
            status = "warning"
        elif issues:
            status = "minor_issues"
        else:
            status = "healthy"
        
        return {
            "file": str(workflow_file),
            "status": status,
            "issues": issues,
            "severity": self._calculate_severity(issues),
            "content_length": len(content)
        }
    
    def _calculate_severity(self, issues: List[Dict]) -> str:
        """Calculate overall severity based on issues"""
        if any(issue["severity"] == "critical" for issue in issues):
            return "critical"
        elif any(issue["severity"] == "high" for issue in issues):
            return "high"
        elif any(issue["severity"] == "medium" for issue in issues):
            return "medium"
        elif any(issue["severity"] == "low" for issue in issues):
            return "low"
        return "none"
    
    def _generate_recommendations(self, health_data: Dict) -> List[str]:
        """Generate actionable recommendations based on health data"""
        recommendations = []
        
        if health_data["broken_workflows"] > 0:
            recommendations.append(f"Fix {health_data['broken_workflows']} broken workflows immediately")
        
        if "missing_runs_on" in health_data["common_issues"]:
            recommendations.append("Add missing runs-on specifications to all jobs")
        
        if "missing_steps" in health_data["common_issues"]:
            recommendations.append("Add missing steps sections to all jobs")
        
        if "yaml_syntax_error" in health_data["common_issues"]:
            recommendations.append("Fix YAML syntax errors in broken workflows")
        
        if health_data["healthy_workflows"] / health_data["total_workflows"] < 0.5:
            recommendations.append("Implement automated workflow repair system")
        
        return recommendations
    
    def auto_repair_workflows(self, max_fixes: int = 10) -> Dict:
        """Automatically repair broken workflows"""
        print("🔧 Starting auto-repair process...")
        
        if not self.health_report:
            self.analyze_workflow_health()
        
        repair_results = {
            "attempted_fixes": 0,
            "successful_fixes": 0,
            "failed_fixes": 0,
            "fixed_workflows": [],
            "failed_workflows": []
        }
        
        broken_workflows = [
            w for w in self.health_report["workflow_details"] 
            if w["status"] == "broken"
        ]
        
        for workflow in broken_workflows[:max_fixes]:
            if self._attempt_repair(workflow["file"]):
                repair_results["successful_fixes"] += 1
                repair_results["fixed_workflows"].append(workflow["file"])
            else:
                repair_results["failed_fixes"] += 1
                repair_results["failed_workflows"].append(workflow["file"])
            
            repair_results["attempted_fixes"] += 1
        
        return repair_results
    
    def _attempt_repair(self, workflow_path: str) -> bool:
        """Attempt to repair a single workflow"""
        try:
            with open(workflow_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception:
            return False
        
        original_content = content
        fixed = False
        
        # Fix 1: Remove duplicate content
        content = self._remove_duplicates(content)
        
        # Fix 2: Fix misplaced sections
        content = self._fix_misplaced_sections(content)
        
        # Fix 3: Add missing required sections
        content = self._add_missing_sections(content)
        
        # Fix 4: Clean up malformed content
        content = self._cleanup_malformed_content(content)
        
        if content != original_content:
            try:
                with open(workflow_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed = True
                print(f"  ✅ Fixed: {workflow_path}")
            except Exception as e:
                print(f"  ❌ Failed to write {workflow_path}: {e}")
                return False
        
        return fixed
    
    def _remove_duplicates(self, content: str) -> str:
        """Remove duplicate content from workflow"""
        # Remove duplicate fetch-depth
        content = re.sub(r'fetch-depth: 0\s*\n\s*fetch-depth: 0', 'fetch-depth: 0', content)
        
        # Remove duplicate node-version
        content = re.sub(r'node-version: [^\n]+\s*\n\s*node-version: [^\n]+', 'node-version: \'20\'', content)
        
        # Remove duplicate cache
        content = re.sub(r'cache: [^\n]+\s*\n\s*cache: [^\n]+', 'cache: \'npm\'', content)
        
        return content
    
    def _fix_misplaced_sections(self, content: str) -> str:
        """Fix misplaced sections in workflow"""
        # Move permissions to correct location
        if "permissions:" in content and "concurrency:" in content:
            if content.find("permissions:") > content.find("concurrency:"):
                # Extract permissions content
                permissions_match = re.search(r'permissions:\s*\n((?:\s+[^\n]+\n?)+)', content)
                if permissions_match:
                    permissions_content = permissions_match.group(0)
                    # Remove from current location
                    content = content.replace(permissions_content, '')
                    # Add after on section
                    on_match = re.search(r'^(\s*)on:\s*$', content, re.MULTILINE)
                    if on_match:
                        indent = on_match.group(1)
                        on_end = content.find('\n\n', content.find('on:'))
                        if on_end > 0:
                            permissions_section = f'\n{indent}permissions:\n{indent}  contents: write\n{indent}  actions: read\n'
                            content = content[:on_end] + permissions_section + content[on_end:]
        
        return content
    
    def _add_missing_sections(self, content: str) -> str:
        """Add missing required sections"""
        # Add missing permissions
        if "permissions:" not in content:
            on_match = re.search(r'^(\s*)on:\s*$', content, re.MULTILINE)
            if on_match:
                indent = on_match.group(1)
                on_end = content.find('\n\n', content.find('on:'))
                if on_end > 0:
                    permissions_section = f'\n{indent}permissions:\n{indent}  contents: write\n{indent}  actions: read\n'
                    content = content[:on_end] + permissions_section + content[on_end:]
        
        # Add missing concurrency
        if "concurrency:" not in content:
            permissions_match = re.search(r'^(\s*)permissions:\s*$', content, re.MULTILINE)
            if permissions_match:
                indent = permissions_match.group(1)
                permissions_end = content.find('\n\n', content.find('permissions:'))
                if permissions_end > 0:
                    concurrency_section = f'\n{indent}concurrency:\n{indent}  group: "github.workflow-${{{{ github.ref }}}}"\n{indent}  cancel-in-progress: true\n'
                    content = content[:permissions_end] + concurrency_section + content[permissions_end:]
        
        return content
    
    def _cleanup_malformed_content(self, content: str) -> str:
        """Clean up malformed content"""
        # Remove standalone runs-on and steps lines
        content = re.sub(r'^\s+runs-on:\s*ubuntu-latest\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s+steps:\s*$', '', content, flags=re.MULTILINE)
        
        # Fix malformed with sections
        content = re.sub(r'with:\s*\n\s+fetch-depth:\s*0\s*\n\s+fetch-depth:\s*0', 'with:\n          fetch-depth: 0', content)
        
        # Clean up multiple blank lines
        content = re.sub(r'\n{3,}', '\n\n', content)
        
        return content
    
    def generate_health_report(self, output_file: str = "workflow-health-report.json") -> str:
        """Generate a comprehensive health report"""
        if not self.health_report:
            self.analyze_workflow_health()
        
        report_data = {
            "summary": {
                "total_workflows": self.health_report["total_workflows"],
                "healthy_workflows": self.health_report["healthy_workflows"],
                "broken_workflows": self.health_report["broken_workflows"],
                "health_score": round((self.health_report["healthy_workflows"] / self.health_report["total_workflows"]) * 100, 2)
            },
            "details": self.health_report,
            "timestamp": datetime.now().isoformat()
        }
        
        with open(output_file, 'w') as f:
            json.dump(report_data, f, indent=2)
        
        return output_file
    
    def create_auto_heal_workflow(self) -> str:
        """Create an enhanced auto-heal workflow file"""
        workflow_content = '''name: Enhanced Workflow Auto-Heal

on:
  schedule:
    - cron: '0 */4 * * *'  # Every 4 hours
  workflow_run:
    workflows: ["*"]
    types: [completed, failed]
  workflow_dispatch: {}

permissions:
  contents: write
  actions: read

concurrency:
  group: enhanced-workflow-auto-heal
  cancel-in-progress: false

jobs:
  monitor-and-heal:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: |
          pip install pyyaml

      - name: Run Auto-Heal Engine
        run: |
          python workflow-auto-heal-engine.py

      - name: Generate Health Report
        run: |
          python -c "
          from workflow_auto_heal_engine import WorkflowAutoHealEngine
          engine = WorkflowAutoHealEngine()
          report_file = engine.generate_health_report()
          print(f'Health report generated: {report_file}')
          "

      - name: Upload Health Report
        uses: actions/upload-artifact@v4
        with:
          name: workflow-health-report
          path: workflow-health-report.json
          if-no-files-found: ignore

      - name: Create Auto-Heal PR
        if: always()
        uses: peter-evans/create-pull-request@v5
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: "chore(auto-heal): automated workflow repairs and health improvements"
          title: "chore(auto-heal): automated workflow repairs and health improvements"
          body: |
            Automated workflow health improvements and repairs.
            
            This PR contains:
            - Workflow health analysis
            - Automated fixes for common issues
            - Health score improvements
            - Recommendations for manual fixes
          branch: automation/enhanced-auto-heal
          delete-branch: true
          labels: |
            automation
            auto-heal
            workflow-health
'''
        
        workflow_file = ".github/workflows/enhanced-auto-heal.yml"
        with open(workflow_file, 'w') as f:
            f.write(workflow_content)
        
        return workflow_file

def main():
    """Main function to run the auto-heal engine"""
    print("🚀 GitHub Actions Workflow Auto-Heal Engine")
    print("===========================================")
    
    engine = WorkflowAutoHealEngine()
    
    # Analyze current health
    health_data = engine.analyze_workflow_health()
    
    print(f"\n📊 Current Health Status:")
    print(f"Total Workflows: {health_data['total_workflows']}")
    print(f"Healthy: {health_data['healthy_workflows']}")
    print(f"Broken: {health_data['broken_workflows']}")
    print(f"Health Score: {round((health_data['healthy_workflows'] / health_data['total_workflows']) * 100, 2)}%")
    
    if health_data['broken_workflows'] > 0:
        print(f"\n🔧 Attempting to auto-repair {min(10, health_data['broken_workflows'])} workflows...")
        repair_results = engine.auto_repair_workflows(max_fixes=10)
        
        print(f"\n📋 Repair Results:")
        print(f"Attempted: {repair_results['attempted_fixes']}")
        print(f"Successful: {repair_results['successful_fixes']}")
        print(f"Failed: {repair_results['failed_fixes']}")
    
    # Generate health report
    report_file = engine.generate_health_report()
    print(f"\n📄 Health report generated: {report_file}")
    
    # Create enhanced auto-heal workflow
    workflow_file = engine.create_auto_heal_workflow()
    print(f"🔧 Enhanced auto-heal workflow created: {workflow_file}")
    
    print(f"\n✨ Auto-heal engine completed successfully!")
    print(f"Next steps:")
    print(f"1. Review the health report: {report_file}")
    print(f"2. Commit the enhanced auto-heal workflow")
    print(f"3. Monitor workflow health improvements")

if __name__ == "__main__":
    main()