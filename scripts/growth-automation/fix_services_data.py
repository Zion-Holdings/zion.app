#!/usr/bin/env python3
"""Fix services data by regenerating proper services with all required fields."""

import json
import random
from datetime import datetime, timezone
from pathlib import Path

BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE_DIR / 'zion-support.github.io' / 'app' / 'data' / 'servicesData.json'

INDUSTRIES = [
    "technology", "healthcare", "finance", "retail", "manufacturing",
    "logistics", "hospitality", "sports", "real-estate", "telecom",
    "energy", "automotive", "media", "education", "gaming",
    "agriculture", "construction", "transportation", "insurance", "legal"
]

DOMAINS = [
    "Analytics", "Automation", "Optimization", "Management", "Insights",
    "Intelligence", "Platform", "Suite", "Engine", "System", "Processor",
    "Analyzer", "Predictor", "Optimizer", "Generator", "Orchestrator",
    "Coordinator", "Director", "Manager", "Advisor", "Security", "Cloud",
    "Data", "DevOps", "Monitoring", "Customer Service", "Marketing",
    "Sales", "Finance", "Healthcare", "Real Estate", "Manufacturing",
    "Quality", "Compliance", "Risk", "Revenue", "Supply", "Performance",
    "Experience", "Support", "AI", "Machine Learning", "Predictive",
    "Intelligent", "Smart", "Autonomous", "Cognitive", "Neural", "Deep Learning",
    "NLP", "Computer Vision", "Data Science", "Business Intelligence", "Process Mining"
]

CORE_FUNCTIONS = [
    "Predictive Analytics", "Customer Insights", "Process Automation",
    "Data Processing", "Market Intelligence", "Financial Planning",
    "Supply Chain", "Quality Control", "Risk Assessment", "Performance Monitoring",
    "Resource Optimization", "Decision Support", "Workflow Management",
    "Document Processing", "Image Recognition", "Language Processing",
    "Network Optimization", "Inventory Management", "Sales Forecasting",
    "Maintenance Scheduling", "Energy Management", "Compliance Monitoring",
    "User Experience", "Content Generation", "Code Optimization",
    "Security Monitoring", "Threat Detection", "Fraud Prevention",
    "Customer Service Automation", "Sales Process Optimization",
    "Healthcare Data Analytics", "Financial Risk Management",
    "Manufacturing Quality Control", "Logistics Route Optimization",
    "Revenue Forecasting", "Customer Journey Mapping", "Brand Monitoring",
    "Competitive Intelligence", "Market Analysis", "Sentiment Analysis",
    "Predictive Modeling", "Scenario Planning", "Budget Optimization",
    "Cost Reduction", "Process Discovery", "Automation Opportunity",
    "Data Governance", "Master Data Management", "Data Quality",
    "Business Intelligence", "Executive Dashboards", "API Management",
    "Serverless Deployment", "Container Orchestration", "Edge Computing",
    "ML Model Training", "Feature Engineering", "Data Pipeline Orchestration",
    "Anomaly Detection", "Root Cause Analysis", "Performance Tuning",
    "Scalability Planning", "Capacity Management", "Resource Utilization",
    "Customer Retention", "Churn Prediction", "Loyalty Optimization",
    "Personalization Engine", "Recommendation System", "Content Moderation",
    "Compliance Reporting", "Audit Trail Management", "Regulatory Tracking",
    "Contract Analysis", "Invoice Processing", "Expense Management",
    "HR Analytics", "Recruitment Automation", "Performance Reviews",
    "Employee Engagement", "Training Optimization", "Succession Planning",
    "Project Portfolio", "Resource Allocation", "Budget Tracking",
    "Vendor Management", "Procurement Automation", "Sourcing Optimization",
    "Quality Assurance", "Testing Automation", "Release Management",
    "Incident Response", "Disaster Recovery", "Business Continuity",
    "Customer Onboarding", "User Provisioning", "Access Management",
    "Feedback Collection", "Survey Automation", "Net Promoter Score",
    "Social Media Monitoring", "Brand Sentiment", "Reputation Management",
    "Influencer Identification", "Campaign Optimization", "ROI Tracking",
    "Lead Scoring", "Pipeline Management", "Forecast Accuracy",
    "Quota Optimization", "Territory Management", "Account Planning"
]

BENEFITS_POOL = [
    "50% reduction in operational costs through automation",
    "3x faster decision making with real-time insights",
    "99.9% uptime guarantee with redundant architecture",
    "24/7 automated operations without human intervention",
    "Zero manual intervention required for routine tasks",
    "Real-time insights and alerts for proactive management",
    "Scalable to millions of transactions per second",
    "Enterprise-grade security with end-to-end encryption",
    "Seamless integration with existing systems and workflows",
    "ROI achieved in under 90 days with cost savings",
    "Reduced human error by 95% with automated processes",
    "Automated compliance reporting for regulatory requirements",
    "Predictive maintenance scheduling to prevent downtime",
    "Dynamic resource allocation based on demand patterns",
    "Cost optimization recommendations with savings analysis",
    "Performance benchmarking against industry standards",
    "Improved customer satisfaction with faster response times",
    "Enhanced team productivity with intelligent assistance",
    "Better risk management with predictive analytics",
    "Increased revenue with optimized pricing strategies",
    "Reduced churn with proactive customer retention",
    "Faster time-to-market with accelerated development",
    "Improved quality with automated testing and validation",
    "Enhanced security with continuous threat monitoring",
    "Better compliance with automated audit trails",
    "Reduced infrastructure costs with cloud optimization",
    "Improved forecast accuracy with ML models",
    "Enhanced decision making with data-driven insights",
    "Better resource utilization with auto-scaling",
    "Reduced support tickets with self-service options",
    "Improved conversion rates with personalization",
    "Faster content creation with AI assistance",
    "Better code quality with automated reviews",
    "Enhanced security posture with continuous monitoring",
    "Reduced development time with code generation",
    "Improved customer retention with proactive service",
    "Better inventory management with demand forecasting",
    "Reduced shipping costs with route optimization",
    "Improved employee productivity with automation",
    "Better customer experience with personalization",
    "Reduced marketing costs with targeted campaigns",
    "Improved sales performance with lead scoring",
    "Better financial planning with predictive models",
    "Reduced risk with early warning systems",
    "Improved product quality with automated testing",
    "Better supply chain visibility with tracking",
    "Reduced customer acquisition costs with optimization",
    "Improved brand awareness with social monitoring",
    "Better market positioning with competitive analysis",
    "Reduced operational risks with predictive models",
    "Faster incident resolution with automated playbooks",
    "Lower total cost of ownership (TCO)",
    "Higher customer lifetime value (CLV)",
    "Improved Net Promoter Score (NPS)",
    "Reduced time to resolve (TTR) incidents",
    "Higher first call resolution (FCR) rates",
    "Reduced average handle time (AHT)",
    "Improved agent productivity and satisfaction",
    "Better customer retention rates",
    "Increased upsell and cross-sell opportunities",
    "Reduced cart abandonment rates",
    "Improved checkout conversion rates",
    "Better inventory turnover ratios",
    "Reduced procurement cycle times",
    "Improved supplier performance scores",
    "Reduced contract negotiation time",
    "Better vendor compliance rates",
    "Reduced legal review cycles",
    "Improved contract renewal rates",
    "Reduced employee turnover rates",
    "Improved recruitment conversion rates",
    "Reduced training time to productivity",
    "Better employee engagement scores",
    "Improved performance review completion rates",
    "Reduced compensation administration time",
    "Better benefits utilization rates",
    "Reduced time to market for new products",
    "Improved product quality scores",
    "Better warranty claim processing",
    "Reduced return rates and costs",
    "Improved customer satisfaction scores",
    "Better social media engagement rates",
    "Reduced content creation time",
    "Improved SEO rankings and organic traffic",
    "Better email open and click-through rates",
    "Reduced paid advertising costs",
    "Improved conversion funnel metrics",
    "Better lead quality and conversion rates",
    "Reduced sales cycle length",
    "Improved forecast accuracy",
    "Better inventory accuracy rates",
    "Reduced stockouts and overstocks",
    "Improved order fulfillment rates",
    "Better shipping and delivery times",
    "reduced returns and exchanges",
    "improved customer loyalty programs",
    "better employee performance metrics",
    "reduced workplace safety incidents",
    "improved compliance audit scores",
    "reduced environmental impact and costs",
    "better stakeholder satisfaction ratings"
]

FEATURES_POOL = [
    "Real-time processing with streaming analytics",
    "Machine learning integration with automatic model training",
    "Cloud-native architecture with multi-region deployment",
    "API-first design with comprehensive REST and GraphQL endpoints",
    "Microservices deployment with container orchestration",
    "Edge computing support for low-latency operations",
    "Serverless functions for cost-effective scaling",
    "Multi-region deployment with automatic failover",
    "Auto-scaling capabilities with predictive scaling",
    "Zero-downtime updates with blue-green deployment",
    "Comprehensive monitoring with custom dashboards",
    "Alerting system with intelligent notifications",
    "Performance dashboards with real-time metrics",
    "Role-based access control with SSO integration",
    "Audit trails with compliance reporting",
    "Data encryption at rest and in transit",
    "GDPR compliance with data portability",
    "HIPAA ready with healthcare data protection",
    "SOC 2 certified with security controls",
    "Open-source friendly with plugin architecture"
]

PRICING_TIERS = {"basic": "199", "pro": "499", "enterprise": "1499"}

def generate_service_name():
    industry = random.choice(INDUSTRIES)
    domain = random.choice(DOMAINS)
    core_function = random.choice(CORE_FUNCTIONS)
    service_type = random.choice(['AI-Powered', 'Intelligent', 'Autonomous', 'Smart', 'Predictive'])
    industry_clean = industry.title() if industry != 'technology' else 'Tech'
    
    patterns = [
        f'{service_type} {domain} for {industry_clean}',
        f'{service_type} {core_function.split()[0]} {domain}',
        f'{domain} {service_type.replace("-Powered", "")} - {industry_clean}',
        f'{service_type} {domain.lower()}-{industry_clean.lower()}',
        f'AI {domain} - {industry_clean} Edition',
        f'Intelligent {domain} for {industry_clean}',
        f'Smart {domain} Platform - {industry_clean}',
        f'Predictive {domain} Engine - {industry_clean}',
        f'Autonomous {domain} System - {industry_clean}',
        f'Cognitive {domain} Solution - {industry_clean}'
    ]
    return random.choice(patterns), industry, domain, core_function

def main():
    # Generate 100 new services
    new_services = []
    existing_ids = set()
    
    # Load existing services to avoid duplicates
    if SERVICES_FILE.exists():
        with open(SERVICES_FILE, 'r') as f:
            existing = json.load(f)
        for s in existing:
            if s.get('id'):
                existing_ids.add(s['id'])
            if s.get('name'):
                existing_ids.add(s['name'].lower())
    
    print(f'Existing services: {len(existing_ids)}')
    
    for i in range(100):
        name, industry, domain, core_function = generate_service_name()
        
        # Generate unique ID
        base_id = name.lower().replace(" ", "-").replace(":", "").replace("'", "")[:50]
        service_id = f'{base_id}-{random.randint(1000, 9999)}'
        while service_id in existing_ids:
            service_id = f'{service_id}-{random.randint(100, 999)}'
        
        features = random.sample(FEATURES_POOL, random.randint(5, 8))
        benefits = random.sample(BENEFITS_POOL, random.randint(6, 10))
        
        service = {
            'id': service_id,
            'name': name,
            'title': name,
            'description': f'Transform your {industry} operations with our {name}. This AI-driven solution automates {core_function.lower()} with unprecedented accuracy and efficiency.',
            'category': domain.lower(),
            'industry': industry,
            'features': features,
            'benefits': benefits,
            'pricing': PRICING_TIERS.copy(),
            'timestamp': datetime.now(timezone.utc).isoformat(),
            'contactInfo': {
                'website': f'/services/{service_id}',
                'email': 'hello@ziontechgroup.com',
                'phone': '+1 (302) 464-0950'
            },
            'icon': '💡',
            'href': f'/services/{service_id}',
            'popular': False
        }
        new_services.append(service)
        existing_ids.add(service_id)
        existing_ids.add(name.lower())
    
    # Load existing services and add new ones
    services = []
    if SERVICES_FILE.exists():
        with open(SERVICES_FILE, 'r') as f:
            services = json.load(f)
    
    # Filter out incomplete services
    complete_services = [s for s in services if s.get('name') and s.get('id')]
    
    # Add new services
    for s in new_services:
        complete_services.append(s)
    
    # Save updated services
    SERVICES_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(SERVICES_FILE, 'w') as f:
        json.dump(complete_services, f, indent=2)
    
    print(f'Total services: {len(complete_services)}')
    print(f'New services added: {len(new_services)}')
    print(f'Services with features: {len([s for s in complete_services if s.get("features")])}')
    print(f'Services with benefits: {len([s for s in complete_services if s.get("benefits")])}')

if __name__ == '__main__':
    main()