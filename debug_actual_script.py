#!/usr/bin/env python3
"""Debug the actual script logic."""
import json
import sys
import os
import math
import hashlib
import random
from datetime import datetime, timezone
import re

# Bloom filter implementation
class BloomFilter:
    def __init__(self, capacity=500000, error_rate=0.001):
        self.capacity = capacity
        self.error_rate = error_rate
        self.bit_array_size = int(-capacity * math.log(error_rate) / (math.log(2) ** 2))
        self.hash_count = int(self.bit_array_size * math.log(2) / capacity)
        self.bit_array = [0] * self.bit_array_size
    
    def _hash(self, item, seed):
        return hash(f"{item}{seed}") % self.bit_array_size
    
    def add(self, item):
        for i in range(self.hash_count):
            index = self._hash(item, i)
            self.bit_array[index] = 1
    
    def might_contain(self, item):
        for i in range(self.hash_count):
            index = self._hash(item, i)
            if self.bit_array[index] == 0:
                return False
        return True

SERVICES_FILE = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'

# Load existing services
with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
    services_data = json.load(f)

print(f"Services in file: {len(services_data)}")

# Initialize bloom filter
bloom_filter = BloomFilter(capacity=500000, error_rate=0.001)

# Load existing IDs into bloom filter
existing_ids = set()
for item in services_data:
    if 'id' in item and item['id']:
        existing_ids.add(item['id'])
        bloom_filter.add(item['id'])
    if 'name' in item and item['name']:
        name_lower = item['name'].lower()
        existing_ids.add(name_lower)
        bloom_filter.add(name_lower)
    if 'title' in item and item['title']:
        title_lower = item['title'].lower()
        existing_ids.add(title_lower)
        bloom_filter.add(title_lower)

print(f"Unique entries in existing_ids: {len(existing_ids)}")

# Simulate the actual script's service generation
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
    "Intelligent", "Smart", "Autonomous", "Cognitive", "Neural",
    "Deep Learning", "NLP", "Computer Vision", "Data Science",
    "Business Intelligence", "Process Mining"
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

def generate_service_id(service_name):
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "").replace("---", "-")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    if not base_id:
        base_id = "service"
    hash_part = hashlib.md5(f"{service_name}{datetime.now().isoformat()}".encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"

def generate_dynamic_service_name(industry, domain, core_function, service_type):
    industry_clean = industry.title() if industry != "technology" else "Tech"
    patterns = [
        f"{service_type} {domain} for {industry_clean}",
        f"{service_type} {core_function.split()[0]} {domain}",
        f"{domain} {service_type.replace('-Powered', '')} - {industry_clean}",
        f"{service_type} {domain.lower()}-{industry_clean.lower()}",
        f"AI {domain} - {industry_clean} Edition",
        f"Intelligent {domain} for {industry_clean}",
        f"Smart {domain} Platform - {industry_clean}",
        f"Predictive {domain} Engine - {industry_clean}",
        f"Autonomous {domain} System - {industry_clean}",
        f"Cognitive {domain} Solution - {industry_clean}"
    ]
    return random.choice(patterns)

# Generate a few services and check
print("\n--- Generating and checking services ---")
added_count = 0
for i in range(10):
    industry = random.choice(INDUSTRIES)
    service_type = random.choice([
        "AI-Powered", "Intelligent", "Autonomous", "Smart", "Predictive", 
        "Automated", "Self-Optimizing", "Adaptive", "Cognitive", "Neural"
    ])
    
    base_name = generate_dynamic_service_name(
        industry, 
        random.choice(DOMAINS),
        random.choice(CORE_FUNCTIONS),
        service_type
    )
    
    domain = random.choice(DOMAINS)
    core_function = random.choice(CORE_FUNCTIONS)
    
    final_name = base_name
    if final_name.lower() in existing_ids or bloom_filter.might_contain(final_name.lower()):
        counter = 1
        while f"{base_name} #{counter}".lower() in existing_ids or bloom_filter.might_contain(f"{base_name} #{counter}".lower()):
            counter += 1
            if counter > 100:
                final_name = f"{base_name}-{hashlib.md5(str(i).encode()).hexdigest()[:6]}"
                break
        else:
            final_name = f"{base_name} #{counter}"
    
    service_id = generate_service_id(final_name)
    
    # Double-check the ID
    id_in_existing = service_id in existing_ids
    id_in_bloom = bloom_filter.might_contain(service_id)
    
    print(f"\nService {i}:")
    print(f"  Name: {final_name}")
    print(f"  ID: {service_id}")
    print(f"  ID in existing_ids: {id_in_existing}")
    print(f"  ID in bloom_filter: {id_in_bloom}")
    print(f"  Would be added: {not id_in_existing and not id_in_bloom}")
    
    if not id_in_existing and not id_in_bloom:
        added_count += 1

print(f"\nTotal that would be added: {added_count}")