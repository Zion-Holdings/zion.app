#!/usr/bin/env python3
"""
Service Diversity Analyzer v1.0
Analyzes service catalog diversity across industries, categories, and regions
Identifies gaps and opportunities for exponential growth
"""

import json
import sys
from pathlib import Path
from collections import defaultdict
from datetime import datetime, timezone
import logging

# Configuration
SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')
LOG_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/diversity_analyzer.log')

# Target industries for comprehensive coverage
TARGET_INDUSTRIES = [
    "technology", "healthcare", "finance", "retail", "manufacturing",
    "logistics", "hospitality", "sports", "real-estate", "telecom",
    "energy", "automotive", "media", "education", "gaming",
    "agriculture", "construction", "transportation", "insurance", "legal"
]

# Target categories
TARGET_CATEGORIES = [
    "analytics", "automation", "optimization", "management", "insights",
    "intelligence", "platform", "suite", "engine", "system", "processor",
    "analyzer", "predictor", "optimizer", "generator", "orchestrator",
    "coordinator", "director", "manager", "advisor", "security", "cloud",
    "data", "devops", "monitoring", "customer service", "marketing",
    "sales", "finance", "healthcare", "real-estate", "manufacturing"
]

def setup_logging():
    """Setup logging."""
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)-8s] %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        handlers=[
            logging.StreamHandler(sys.stdout),
            logging.FileHandler(LOG_FILE)
        ]
    )
    return logging.getLogger('diversity-analyzer')

logger = setup_logging()

def load_services():
    """Load services from JSON file."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        else:
            return []
    except Exception as e:
        logger.error(f"Error loading services: {e}")
        return []

def analyze_diversity(services):
    """Analyze service diversity metrics."""
    # Count by industry
    industry_counts = defaultdict(int)
    category_counts = defaultdict(int)
    
    for service in services:
        industry = service.get('industry', 'unknown').lower()
        category = service.get('category', 'unknown').lower()
        industry_counts[industry] += 1
        category_counts[category] += 1
    
    # Find gaps
    missing_industries = [i for i in TARGET_INDUSTRIES if i not in industry_counts]
    missing_categories = [c for c in TARGET_CATEGORIES if c not in category_counts]
    
    # Calculate diversity scores
    industry_diversity = len(industry_counts) / len(TARGET_INDUSTRIES) * 100
    category_diversity = len(category_counts) / len(TARGET_CATEGORIES) * 100
    
    return {
        'total_services': len(services),
        'industry_coverage': dict(industry_counts),
        'category_coverage': dict(category_counts),
        'missing_industries': missing_industries,
        'missing_categories': missing_categories,
        'industry_diversity_score': industry_diversity,
        'category_diversity_score': category_diversity,
        'diversity_score': (industry_diversity + category_diversity) / 2
    }

def identify_gaps_and_opportunities(analysis):
    """Identify specific gaps and opportunities for growth."""
    gaps = []
    opportunities = []
    
    # Industry gaps
    for industry in analysis['missing_industries']:
        gaps.append({
            'type': 'industry',
            'target': industry,
            'priority': 'high',
            'suggestion': f"Generate 5-10 new services for {industry} industry"
        })
    
    # Category gaps
    for category in analysis['missing_categories'][:5]:  # Top 5 missing categories
        gaps.append({
            'type': 'category',
            'target': category,
            'priority': 'medium',
            'suggestion': f"Generate 3-5 new services in {category} category"
        })
    
    # Opportunities (under-represented industries)
    sorted_industries = sorted(analysis['industry_coverage'].items(), key=lambda x: x[1])
    for industry, count in sorted_industries[:3]:  # Bottom 3
        if count < 5:  # Under-represented
            opportunities.append({
                'type': 'under_represented',
                'industry': industry,
                'current_count': count,
                'target_count': 10,
                'suggestion': f"Boost {industry} services from {count} to 10+"
            })
    
    return gaps, opportunities

def generate_recommendations(analysis, gaps, opportunities):
    """Generate actionable recommendations for exponential growth."""
    recommendations = []
    
    # Diversity improvement
    if analysis['diversity_score'] < 80:
        recommendations.append({
            'priority': 'high',
            'action': 'service_diversity_improvement',
            'description': f"Increase diversity score from {analysis['diversity_score']:.1f}% to 95%+",
            'estimated_impact': '20-30 new services',
            'estimated_time': '15 minutes'
        })
    
    # Gap filling
    if gaps:
        recommendations.append({
            'priority': 'high',
            'action': 'gap_filling',
            'description': f"Fill {len(gaps)} identified gaps in industry/category coverage",
            'estimated_impact': f"{len(gaps) * 3}-50 new services",
            'estimated_time': '30 minutes'
        })
    
    # Opportunity exploitation
    if opportunities:
        recommendations.append({
            'priority': 'medium',
            'action': 'opportunity_exploitation',
            'description': f"Exploit {len(opportunities)} over-representation opportunities",
            'estimated_impact': '10-20 new services',
            'estimated_time': '20 minutes'
        })
    
    return recommendations

def main():
    """Main execution function."""
    logger.info("=" * 70)
    logger.info("📊 SERVICE DIVERSITY ANALYZER v1.0")
    logger.info("=" * 70)
    
    # Load services
    services = load_services()
    logger.info(f"[ℹ️] Loaded {len(services)} services from catalog")
    
    # Analyze diversity
    analysis = analyze_diversity(services)
    
    # Log results
    logger.info(f"Industry diversity score: {analysis['industry_diversity_score']:.1f}%")
    logger.info(f"Category diversity score: {analysis['category_diversity_score']:.1f}%")
    logger.info(f"Overall diversity score: {analysis['diversity_score']:.1f}%")
    
    # Identify gaps and opportunities
    gaps, opportunities = identify_gaps_and_opportunities(analysis)
    
    # Generate recommendations
    recommendations = generate_recommendations(analysis, gaps, opportunities)
    
    # Print summary
    print("\n" + "=" * 70)
    print("📈 DIVERSITY ANALYSIS REPORT")
    print("=" * 70)
    print(f"Total services: {analysis['total_services']}")
    print(f"Diversity score: {analysis['diversity_score']:.1f}%")
    print(f"\nIndustries covered: {len(analysis['industry_coverage'])}/{len(TARGET_INDUSTRIES)}")
    print(f"Categories covered: {len(analysis['category_coverage'])}/{len(TARGET_CATEGORIES)}")
    
    if analysis['missing_industries']:
        print(f"\n⚠️  Missing industries: {', '.join(analysis['missing_industries'][:5])}")
    
    if analysis['missing_categories']:
        print(f"⚠️  Missing categories: {', '.join(analysis['missing_categories'][:5])}")
    
    print("\n" + "=" * 70)
    print("🎯 RECOMMENDATIONS FOR EXPONENTIAL GROWTH")
    print("=" * 70)
    
    for i, rec in enumerate(recommendations, 1):
        print(f"\n{i}. [{rec['priority'].upper()}] {rec['action']}")
        print(f"   {rec['description']}")
        print(f"   Impact: {rec['estimated_impact']}")
        print(f"   Time: {rec['estimated_time']}")
    
    # Return structured data
    result = {
        'status': 'success',
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'analysis': analysis,
        'gaps': gaps,
        'opportunities': opportunities,
        'recommendations': recommendations,
        'diversity_score': analysis['diversity_score']
    }
    
    print("\n" + "=" * 70)
    print("📋 JSON OUTPUT")
    print("=" * 70)
    print(json.dumps(result, indent=2))
    
    return result

if __name__ == '__main__':
    result = main()