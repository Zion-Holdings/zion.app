#!/usr/bin/env python3
"""Add 25 new highly differentiated services."""
import re

with open('app/data/servicesData.ts', 'r') as f:
    content = f.read()

def svc(cat, sid, title, desc, features, basic, pro, enterprise, icon, industry, popular):
    f = ','.join(f"'{x}'" for x in features)
    return f"""  {{
    id: '{sid}',
    title: '{title}',
    description: '{desc}',
    features: [{f}],
    benefits: [],
    pricing: {{basic:'{basic}', pro:'{pro}', enterprise:'{enterprise}'}},
    contactInfo: {{website:'/services/{sid}', email:'commercial@ziontechgroup.com', phone:'+1 302 464 0950'}},
    icon: '{icon}',
    href: '/services/{sid}',
    popular: {'true' if popular else 'false'},
    category: '{cat}',
    industry: '{industry}',
  }},"""

AI = [
svc('ai','ai-clinical-trial-optimizer','AI Clinical Trial Optimizer','Optimize clinical trial design, patient recruitment, and site selection using AI. Reduces trial timelines by 30% with predictive enrollment modeling.',['Patient recruitment optimization','Site selection AI','Protocol deviation detection','Regulatory submission automation','Real-time safety monitoring'],'$2,999/mo','$7,999/mo','$24,999/mo','💊','Healthcare',True),
svc('ai','ai-customer-churn-predictor','AI Customer Churn Prediction Engine','Predict customer churn 90 days before it happens. AI analyzes usage patterns, support tickets, and billing history to identify at-risk customers.',['90-day churn prediction','Retention action recommendations','Billing pattern analysis','Support ticket sentiment','CRM integration'],'$299/mo','$899/mo','$2,999/mo','📉','Marketing',True),
svc('ai','ai-knowledge-graph-builder','AI Knowledge Graph Builder','Automatically build enterprise knowledge graphs from unstructured data. AI extracts entities, relationships, and ontologies from documents and databases.',['Entity extraction','Relationship mapping','Ontology learning','Graph visualization','SPARQL endpoint'],'$499/mo','$1,499/mo','$4,999/mo','🕸️','Technology',False),
svc('ai','ai-contract-risk-analyzer','AI Contract Risk Analyzer','Analyze contracts for risk exposure with AI. Identifies unfavorable clauses, missing terms, and compliance gaps against your playbook.',['Clause risk scoring','Missing term detection','Compliance gap analysis','Playbook comparison','CLM integration'],'$399/mo','$1,199/mo','$3,999/mo','📋','Legal',True),
svc('ai','ai-dynamic-pricing-engine','AI Dynamic Pricing Engine','Real-time dynamic pricing optimization using competitor data, demand signals, and margin targets. Supports e-commerce, SaaS, and hospitality.',['Competitor price monitoring','Demand signal analysis','Margin optimization','A/B testing framework','Multi-industry support'],'$199/mo','$599/mo','$1,999/mo','💲','E-Commerce',False),
svc('ai','ai-predictive-quality-inspection','AI Predictive Quality Inspection','Computer vision quality inspection that predicts defects before they occur. Reduces scrap rates by 40% and eliminates manual inspection.',['Defect prediction','Visual inspection AI','Scrap rate reduction','Production line integration','Root cause analysis'],'$999/mo','$2,999/mo','$9,999/mo','🔬','Manufacturing',True),
svc('ai','ai-autonomous-code-reviewer','AI Autonomous Code Reviewer','AI code reviewer that catches bugs, security vulnerabilities, and architecture anti-patterns. Learns from team feedback.',['Bug and security detection','Architecture review','Team feedback learning','GitHub/GitLab PR integration','Custom rule engine'],'$149/mo','$449/mo','$1,499/mo','👀','Technology',True),
svc('ai','ai-mental-health-assistant','AI Mental Health Assistant','AI-powered mental health support with CBT-based coaching, mood tracking, and crisis escalation. HIPAA-compliant with clinical oversight.',['CBT-based coaching','Mood tracking','Crisis escalation','Provider integration','HIPAA compliance'],'$99/mo','$299/mo','$999/mo','🧠','Healthcare',False),
svc('ai','ai-smart-grid-optimizer','AI Smart Grid Energy Optimizer','Optimize energy distribution in smart grids using AI. Balances renewable sources, predicts demand, and reduces energy waste by 25%.',['Renewable energy balancing','Demand prediction','Energy waste reduction','Grid anomaly detection','Utility integration'],'$1,999/mo','$5,999/mo','$19,999/mo','⚡','Energy',False),
svc('ai','ai-revenue-operations-engine','AI Revenue Operations Engine','Unify sales, marketing, and customer success data into a single AI-powered revenue engine. Predicts pipeline health and identifies at-risk deals.',['Unified revenue data pipeline','Pipeline health scoring','At-risk deal identification','Next-best-action recommendations','Sales/Marketing/CS alignment'],'$999/mo','$2,999/mo','$9,999/mo','💰','Sales',True),
]

IT = [
svc('it','it-5g-network-slicing','IT 5G Network Slicing Platform','Manage 5G network slices for enterprise customers with guaranteed SLAs. Automated slice provisioning, monitoring, and optimization.',['Network slice provisioning','SLA guarantee management','5G core integration','Industry-specific templates','Real-time monitoring'],'$1,999/mo','$5,999/mo','$19,999/mo','📡','Telecom',False),
svc('it','it-digital-workspace-platform','IT Digital Workspace Platform','Unified digital workspace with virtual desktop, app virtualization, and secure access. Supports BYOD and remote work with zero-trust security.',['Virtual desktop infrastructure','App virtualization','Zero-trust access','BYOD support','Compliance reporting'],'$199/mo','$599/mo','$1,999/mo','💻','Technology',True),
svc('it','it-observability-platform','IT Unified Observability Platform','Full-stack observability with metrics, logs, traces, and profiles. AI-powered anomaly detection and root cause analysis for cloud-native apps.',['Metrics/logs/traces/profiles','AI anomaly detection','Root cause analysis','Cloud-native support','OpenTelemetry'],'$299/mo','$899/mo','$2,999/mo','🔭','Technology',False),
svc('it','it-secops-automation','IT SecOps Automation Platform','Automate security operations with SOAR capabilities. Automated incident response, threat intelligence fusion, and compliance reporting.',['Automated incident response','Threat intelligence fusion','Compliance reporting','Playbook automation','SIEM/SOAR integration'],'$999/mo','$2,999/mo','$9,999/mo','🛡️','Security',True),
svc('it','it-database-optimization-ai','IT Database Optimization AI','AI-powered database performance optimization that continuously tunes queries, indexes, and configurations. Supports PostgreSQL, MySQL, MongoDB.',['Automatic query optimization','Index recommendation engine','Configuration tuning','Performance anomaly detection','Multi-database support'],'$199/mo','$599/mo','$1,999/mo','🗄️','Technology',True),
]

CLOUD = [
svc('cloud','cloud-multi-cloud-orchestrator','Cloud Multi-Cloud Orchestrator','Unify cloud operations across AWS, GCP, and Azure with a single control plane. Automated provisioning, cost optimization, and compliance.',['Multi-cloud control plane','Automated provisioning','Cost optimization','Compliance management','FinOps integration'],'$999/mo','$2,999/mo','$9,999/mo','☁️','Technology',True),
svc('cloud','cloud-draas','Cloud DRaaS - Disaster Recovery as a Service','Managed disaster recovery with automated failover, continuous replication, and one-click testing. RPO under 15 minutes, RTO under 1 hour.',['Automated failover','Continuous replication','One-click DR testing','RPO < 15 min, RTO < 1 hr','Multi-region support'],'$499/mo','$1,499/mo','$4,999/mo','🔄','General',False),
svc('cloud','cloud-serverless-platform','Cloud Serverless Application Platform','Build and deploy serverless applications with auto-scaling, built-in monitoring, and pay-per-use pricing. Supports Node.js, Python, Go, Java.',['Auto-scaling functions','Built-in monitoring','Pay-per-use pricing','Multi-language support','API gateway included'],'$99/mo','$299/mo','$999/mo','⚡','Technology',True),
]

SEC = [
svc('security','security-cyber-range','Security Cyber Range - Dragon Hunters','Immersive cyber security training with AI-generated attack scenarios. Train your team against realistic threats in a gamified environment.',['AI-generated attack scenarios','Gamified threat training','Team skill assessment','Realistic network simulation','Compliance training'],'$399/mo','$1,199/mo','$3,999/mo','🐉','Education',False),
svc('security','security-breach-notification','Security Breach Notification Automation','Automate breach notification compliance across GDPR, CCPA, and state laws. AI determines requirements and generates required documents.',['Breach assessment AI','Notification requirement analysis','Document generation','Victim communication management','Regulatory compliance'],'$199/mo','$599/mo','$1,999/mo','🔔','Legal',True),
svc('security','security-medical-device-security','Security Medical Device Security','Protect connected medical devices from cyber threats. Continuous monitoring, vulnerability management, and FDA-compliant security.',['Medical device inventory','Vulnerability monitoring','FDA-compliant security','Network segmentation','Incident response'],'$999/mo','$2,999/mo','$9,999/mo','🏥','Healthcare',False),
]

DATA = [
svc('data','data-observability-platform','Data Observability Platform','Monitor data health across your entire pipeline. AI detects anomalies, schema drift, and quality issues in real-time.',['Data anomaly detection','Schema drift monitoring','Quality issue alerting','Root cause analysis','dbt/Spark/Airflow integration'],'$399/mo','$1,199/mo','$3,999/mo','👁️','Technology',True),
svc('data','data-product-marketplace','Data Product Marketplace','Create an internal data product marketplace. Teams can discover, request, and share data assets with quality SLAs and usage analytics.',['Data product catalog','Self-service discovery','Quality SLA tracking','Usage analytics','Governor-approved sharing'],'$499/mo','$1,499/mo','$4,999/mo','🏪','Technology',False),
]

AUTO = [
svc('automation','automation-citizen-developer','Automation Citizen Developer Platform','Enable non-technical users to build automations with no-code visual designer. AI suggestions, templates, and governance guardrails.',['Visual automation designer','AI suggestion engine','Template library','Governance guardrails','200+ app connectors'],'$149/mo','$449/mo','$1,499/mo','🧩','General',True),
svc('automation','automation-email-process','Automation Email Process Automation','Automatically process inbound emails with AI. Extracts intent, routes to correct team, generates responses, and tracks SLAs.',['Email intent extraction','Automatic routing','Response generation','SLA tracking','Language detection'],'$199/mo','$599/mo','$1,999/mo','📧','Customer Support',False),
svc('automation','automation-business-process-mining','Automation Business Process Mining','Discover, analyze, and optimize business processes using AI-powered process mining. Identifies bottlenecks and automation opportunities.',['Automatic process discovery','Conformance checking','Bottleneck identification','Automation opportunity detection','SAP/Salesforce integration'],'$799/mo','$2,499/mo','$7,999/mo','⛏️','General',False),
]

def insert_before_close(content, marker, new_entries):
    idx = content.find(marker)
    if idx == -1:
        return content
    close_pos = content.find('];', idx)
    if close_pos == -1:
        return content
    if not content[close_pos-5:close_pos].strip().endswith(','):
        new_entries = ',' + new_entries
    return content[:close_pos] + new_entries + content[close_pos:]

content = insert_before_close(content, 'export const automationServices', '\n'.join(AUTO))
content = insert_before_close(content, 'export const dataServices', '\n'.join(DATA))
content = insert_before_close(content, 'export const securityServices', '\n'.join(SEC))
content = insert_before_close(content, 'export const cloudServices', '\n'.join(CLOUD))
content = insert_before_close(content, 'export const itServices', '\n'.join(IT))
content = insert_before_close(content, 'export const aiServices', '\n'.join(AI))

with open('app/data/servicesData.ts', 'w') as f:
    f.write(content)

count = content.count("id:")
total_new = len(AI) + len(IT) + len(CLOUD) + len(SEC) + len(DATA) + len(AUTO)
print(f"✅ Added {total_new} new services. Total: {count}")
