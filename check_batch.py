#!/usr/bin/env python3
import json

# Count how many entries are for batch 11 services
batch_11_ids = [
    'ai-product-analytics', 'ai-product-analytics-insights', 'ai-product-description-generator',
    'ai-product-launch-intelligence', 'ai-product-photo-enhancer', 'ai-profitability-dashboard',
    'ai-project-planning', 'ai-project-risk-radar', 'ai-quality-assurance-automation',
    'ai-quality-inspection', 'ai-quantum-circuit-optimizer', 'ai-quantum-computing',
    'ai-quantum-optimizer', 'ai-rag-knowledge-systems', 'ai-ransomware-detection-system',
    'ai-real-estate-investment-analyzer', 'ai-real-estate-valuation', 'ai-real-time-translation-platform',
    'ai-realtime-translation', 'ai-recommendation-engine', 'ai-red-team-automation',
    'ai-regulated-industries', 'ai-regulatory-compliance-automation', 'ai-regulatory-compliance-monitor',
    'ai-reinforcement-learning-ops', 'ai-reinforcement-learning-optimiser', 'ai-resume-optimizer',
    'ai-retail-personalization', 'ai-retail-personalization-engine', 'ai-retail-recommendation-engine',
    'ai-revenue-clarity', 'ai-revenue-ops', 'ai-revenue-optimization', 'ai-revenue-optimizer',
    'ai-revenue-performance-doctor', 'ai-roadmap-strategy', 'ai-robotics-integration',
    'ai-robotics-process-automation', 'ai-rpa-automation', 'ai-rpa-platform', 'ai-rx-prior-auth',
    'ai-sales-coach', 'ai-sales-intelligence', 'ai-sales-lead-scoring-engine-00d89763',
    'ai-secrets-management', 'ai-security-responsible-ai', 'ai-self-healing-infra',
    'ai-self-healing-kubernetes-platform', 'ai-sentiment-analysis', 'ai-sentiment-analysis-realtime'
]

count = 0
with open('/Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_sent.jsonl', 'r') as f:
    for line in f:
        for sid in batch_11_ids:
            if line.startswith(sid + ':'):
                count += 1
                break

print(f'Entries for batch 11 services: {count}')
print(f'Expected (50 services * 3 prospects): 150')