import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import ServiceAds from '../components/sections/ServiceAds';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';

export default function HomePage() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$25B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '800%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      title: '🧠 Revolutionary Quantum AI Cognitive Platform',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $299/month',
      features: ['Quantum neural networks with 1000+ qubits', 'Human-like reasoning and problem-solving', 'Real-time quantum simulation', 'Advanced research collaboration tools'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$15B quantum computing market, 500% annual growth',
      competitors: 'IBM Quantum ($2000+/month), Google Quantum AI ($1500+/month)',
      savings: 'Save 85% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🛰️ IT Asset Discovery Agent',
      description: 'Agentless on-prem, cloud, and SaaS asset inventory with CMDB export and CVE enrichment.',
      price: 'Starting at $129/month',
      features: ['Agentless scans', 'Cloud APIs inventory', 'SaaS discovery', 'CMDB export'],
      link: 'https://ziontechgroup.com/it-asset-discovery-agent',
      color: 'from-cyan-600 to-blue-700',
      marketData: 'ITAM ~$10B market, 14% CAGR',
      competitors: 'Lansweeper, ServiceNow Discovery, Qualys Asset',
      savings: '80% less manual inventory',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '⏱️ Serverless Cron Manager',
      description: 'Unified scheduled jobs across AWS/GCP with retries, DLQ, alerts, and audit logs.',
      price: 'Starting at $59/month',
      features: ['Unified scheduler', 'HMAC webhooks', 'Retries & DLQ', 'IaC export'],
      link: 'https://ziontechgroup.com/serverless-cron-manager',
      color: 'from-emerald-600 to-teal-700',
      marketData: 'Dev tooling ~$5B, 20% CAGR',
      competitors: 'Trigger.dev, Temporal (cron)',
      savings: '70% fewer failed jobs',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '📈 Browser Performance Monitor',
      description: 'RUM + Core Web Vitals with session replays and AI insights. Privacy-first.',
      price: 'Starting at $79/month',
      features: ['Web Vitals', 'Session replays', 'Release diffs', 'Anomaly alerts'],
      link: 'https://ziontechgroup.com/browser-performance-monitor',
      color: 'from-violet-600 to-purple-700',
      marketData: 'Observability ~$8B, 18% CAGR',
      competitors: 'Sentry RUM, Datadog RUM, New Relic Browser',
      savings: '5–15% conversion uplift',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🤖 AI Assistant Pro',
      description: 'Deploy a secure, branded AI copilot for support and operations. Slash tickets 30-50% with guardrails, RAG, and analytics.',
      price: 'Starting at $149/month',
      features: ['RAG over your docs', 'Slack/Teams channels', 'Human handoff', 'Conversation analytics'],
      link: 'https://ziontechgroup.com/ai-assistant',
      color: 'from-cyan-600 to-blue-700',
      marketData: '$9.3B CX AI market, 25% CAGR',
      competitors: 'Intercom Fin ($180+/seat), Zendesk AI ($50-100/agent)',
      savings: 'Save 40% vs. alternatives',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '💸 Cloud Cost Optimizer Pro',
      description: 'Automate rightsizing, storage lifecycle, and anomaly detection across AWS, Azure, and GCP with IaC outputs.',
      price: 'Starting at $99/month',
      features: ['Rightsizing & schedules', 'Lifecycle policies', 'Anomaly alerts', 'K8s bin-packing insights'],
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      color: 'from-emerald-600 to-teal-700',
      marketData: '$18B cloud cost mgmt, 19% CAGR',
      competitors: 'Zesty, CAST AI, CloudZero',
      savings: 'Save 10-35% in 90 days',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🗄️ Database Performance Monitor',
      description: 'Proactive Postgres/MySQL insights with slow query capture, AI index suggestions, and capacity forecasting.',
      price: 'Starting at $79/month',
      features: ['Slow query ranking', 'AI index advice', 'Pool tuning', 'SLA/SLO dashboards'],
      link: 'https://ziontechgroup.com/database-performance-monitor',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$6B DB monitoring market',
      competitors: 'Percona PMM, Datadog APM, New Relic',
      savings: 'Cut p95 20-50% in month 1',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '📘 API Documentation Generator',
      description: 'Generate beautiful, accurate API docs from OpenAPI/GraphQL/Proto with SDK snippets and changelogs.',
      price: 'Starting at $49/month',
      features: ['Schema parsing', 'SDK snippets', 'Changelog & versions', 'Search & themes'],
      link: 'https://ziontechgroup.com/api-documentation-generator',
      color: 'from-cyan-600 to-blue-700',
      marketData: '$1.5B dev docs tooling',
      competitors: 'ReadMe, Redocly, Stoplight',
      savings: 'Ship docs 5x faster',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧠 Quantum AI Brain-Computer Interface',
      icon: '🧠',
      description: 'Breakthrough quantum AI-powered brain-computer interface that enables direct neural communication and control. Achieve unprecedented human-AI symbiosis with 99.9% accuracy.',
      price: 'Starting at $4,999/month',
      features: ['Quantum-enhanced neural signal processing', 'Real-time brain activity analysis', 'AI-powered thought-to-action conversion', 'Secure neural data encryption'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-pink-700',
      marketData: '$2.1B brain-computer interface market, 580% annual growth',
      competitors: 'Traditional BCI systems ($50,000+), Basic neural interfaces ($25,000+), Research-only platforms ($100,000+)',
      savings: 'Save 90% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔒 Quantum Cybersecurity Suite',
      description: 'Post-quantum era security with AI threat detection. Future-proof your infrastructure with 300% ROI within 4 months.',
      price: 'Starting at $179/month',
      features: ['Quantum-resistant encryption algorithms', 'AI-powered threat detection and response', 'Zero-trust architecture implementation', 'Real-time security monitoring'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-500 to-pink-600',
      marketData: '$7.2B quantum security market, 380% annual growth',
      competitors: 'CrowdStrike ($8.99/user/month), Palo Alto Networks ($50+/user/month)',
      savings: 'Save 70% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔐 Quantum Internet Security Platform',
      icon: '🔐',
      description: 'Revolutionary quantum internet security platform that provides unbreakable encryption and quantum-safe communication protocols. Achieve 100% security with quantum-resistant algorithms.',
      price: 'Starting at $2,499/month',
      features: ['Quantum-resistant encryption algorithms', 'Quantum key distribution (QKD)', 'AI-powered threat detection', 'Quantum-safe VPN'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-green-600 to-emerald-700',
      marketData: '$12.8B quantum security market, 450% annual growth',
      competitors: 'Traditional security ($5000+/month), Basic encryption ($1000/month), Legacy VPN services ($500/month)',
      savings: 'Save 50% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚗 Autonomous Vehicle AI Platform',
      icon: '🚗',
      description: 'Breakthrough AI platform that manages and coordinates autonomous vehicles with unprecedented safety and efficiency. Achieve 99.99% accident-free autonomous transportation.',
      price: 'Starting at $3,999/month',
      features: ['AI-powered autonomous navigation', 'Real-time traffic optimization', 'Predictive maintenance AI', 'Multi-vehicle coordination'],
      link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
      color: 'from-orange-600 to-red-700',
      marketData: '$54.2B autonomous vehicle market, 380% annual growth',
      competitors: 'Waymo ($10,000+/month), Tesla ($5000+/month), Traditional fleet management ($2000/month)',
      savings: 'Save 60% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Metaverse AI Development Platform',
      icon: '🌐',
      description: 'Revolutionary AI platform for creating, managing, and monetizing immersive metaverse experiences. Build the future of digital interaction with AI-powered virtual worlds.',
      price: 'Starting at $2,899/month',
      features: ['AI-powered 3D world generation', 'Intelligent NPC creation', 'Dynamic content adaptation', 'Real-time AI interactions'],
      link: 'https://ziontechgroup.com/metaverse-ai-development-platform',
      color: 'from-violet-600 to-purple-700',
      marketData: '$74.4B metaverse market, 420% annual growth',
      competitors: 'Roblox ($2500/month), Unity ($4000/month), Traditional 3D development ($8000/month)',
      savings: 'Save 64% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🤖 AI Services (LLM, RAG, MLOps)',
      description: 'Prototype to production AI with evals, guardrails, and observability. Fixed-price packages with clear outcomes.',
      price: 'From $3,500/month or $6,900 fixed',
      features: ['LLM apps and copilots', 'RAG + vector search', 'MLOps pipelines', 'Safety and governance'],
      link: 'https://ziontechgroup.com/ai-services',
      color: 'from-cyan-600 to-purple-700',
      marketData: 'AI services market $71B+, rapid adoption across industries',
      competitors: 'Boutique AI agencies ($25k+), Big 4 ($100k+)',
      savings: 'Save 60–85% with transparent packages',
      contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709' }
    },
    {
      title: '🛠️ Modern IT Services (Cloud, DevOps, SRE)',
      description: 'Outcome-driven platform engineering, GitOps, observability, FinOps and compliance baselines.',
      price: 'From $2,000/month or $4,900 fixed',
      features: ['Cloud landing zones', 'CI/CD & IaC', 'SLOs + error budgets', 'FinOps & governance'],
      link: 'https://ziontechgroup.com/it-services',
      color: 'from-blue-600 to-indigo-700',
      marketData: 'Cloud ops services >$150B, ongoing efficiency demand',
      competitors: 'Traditional MSPs ($10k+/mo), Big consultancies ($50k+)',
      savings: 'Save 50–75% with productized engagements',
      contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709' }
    },
    {
      title: '☁️ Cloud Cost Optimizer',
      description: 'Rightsizing, off-hours, and anomaly detection across AWS/GCP/Azure with FinOps dashboards.',
      price: '$149/month',
      features: ['Auto rightsizing', 'Idle cleanup', 'Spot orchestration', 'Anomaly detection'],
      link: 'https://ziontechgroup.com/cloud-cost-optimizer',
      color: 'from-emerald-600 to-teal-700',
      marketData: 'FinOps software growing 25% YoY',
      competitors: 'CloudZero, CloudHealth',
      savings: 'Cut bills 20–45% in 90 days',
      contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709' }
    },
    {
      title: '📈 Uptime & SLO Monitor',
      description: 'Error budgets, burn-rate alerts, and synthetic uptime with status pages. OTel-native.',
      price: 'Starting at $89/month',
      features: ['SLIs/SLOs', 'Burn-rate alerts', 'Synthetic checks', 'Status pages'],
      link: 'https://ziontechgroup.com/uptime-slo-monitor',
      color: 'from-cyan-600 to-blue-700',
      marketData: 'Observability market >$30B',
      competitors: 'Nobl9, Datadog SLO',
      savings: 'Simpler, faster setup; SMB pricing',
      contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709' }
    },
    {
      title: '✅ SOC 2 Evidence Automation',
      description: 'Continuously collect and map evidence to SOC 2 controls. Export auditor-ready packages.',
      price: 'Starting at $149/month',
      features: ['Cloud evidence', 'Attestations', 'Access reviews', 'Control mapping'],
      link: 'https://ziontechgroup.com/soc2-evidence-automation',
      color: 'from-emerald-600 to-teal-700',
      marketData: 'Compliance automation ~$2B',
      competitors: 'Drata, Vanta',
      savings: '60–80% less audit prep time',
      contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709' }
    },
    {
      title: '🛡️ API Security Scanner',
      description: 'OWASP API Top 10 scans with CI/CD gates and OpenAPI import. Dev-first UX.',
      price: 'Starting at $129/month',
      features: ['Top 10 scans', 'OpenAPI import', 'Auth flows', 'CI gates'],
      link: 'https://ziontechgroup.com/api-security-scanner',
      color: 'from-rose-600 to-orange-700',
      marketData: 'API security ~$6B',
      competitors: 'StackHawk, 42Crunch',
      savings: 'Shift-left, fewer prod issues',
      contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709' }
    },
    {
      title: '🛡️ GDPR DSAR Automation',
      description: 'Branded DSAR portal with identity verification, PII discovery, and export packaging.',
      price: 'Starting at $99/month',
      features: ['DSAR portal', 'ID verification', 'PII discovery', 'Audit exports'],
      link: 'https://ziontechgroup.com/gdpr-dsar-automation',
      color: 'from-blue-600 to-cyan-700',
      marketData: 'Privacy tech ~$3B',
      competitors: 'Transcend, OneTrust',
      savings: '50–70% faster DSAR handling',
      contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709' }
    },
    {
      title: '🚀 Sales Copilot',
      description: 'AI prospecting and outreach with CRM hygiene and pipeline Q&A.',
      price: 'Starting at $59/month',
      features: ['Email drafts', 'Call summaries', 'Prospect research', 'CRM sync'],
      link: 'https://ziontechgroup.com/sales-copilot',
      color: 'from-violet-600 to-purple-700',
      marketData: 'Sales tech ~$10B',
      competitors: 'Salesforce Einstein, HubSpot AI',
      savings: '20–35% more meetings',
      contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709' }
    }
  ];

  // Get revolutionary services for showcase (merged datasets)
  const all = enhancedRealMicroSaasServices.concat(extraServices, additionalEnhancedServices);
  const revolutionaryServices = all.filter(service => service.realImplementation && service.popular).slice(0, 6);

  return (
    <UltraFuturisticMatrixBackground>
      <Head>
        <title>Zion Tech Group - Revolutionary AI & Quantum Computing Solutions</title>
        <meta name="description" content="Transform your business with 200+ revolutionary micro SaaS services. Quantum AI, autonomous systems, and cutting-edge technology solutions with 800%+ average ROI." />
        <meta name="keywords" content="AI, quantum computing, micro SaaS, autonomous systems, space technology, cybersecurity, manufacturing AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta property="og:description" content="Transform your business with 200+ revolutionary micro SaaS services. Quantum AI, autonomous systems, and cutting-edge technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta name="twitter:description" content="Transform your business with 200+ revolutionary micro SaaS services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>
      {/* Reusable Service Ads Strip */}
      <ServiceAds
        heading="Featured Micro SaaS & AI Services"
        subheading="Transparent pricing, real capabilities, fast onboarding."
        items={[
          // New high-demand, real services
          {
            title: '📮 Email Deliverability Monitor',
            description: 'DMARC/SPF/DKIM checks, seed-list tests and blocklist monitoring with weekly scorecards.',
            price: '$59/month',
            features: ['DMARC/SPF/DKIM validation', 'Seed inbox placement tests', 'Blocklist monitoring', 'Alerts and reports'],
            link: 'https://ziontechgroup.com/email-deliverability-monitor',
            contactInfo
          },
          {
            title: '📄 PDF Render & Fill API',
            description: 'Reliable HTML-to-PDF, form filling, merge and watermark with developer-first APIs.',
            price: '$39/month',
            features: ['HTML/URL to PDF', 'AcroForms fill', 'Templates and variables', 'Webhooks and async jobs'],
            link: 'https://ziontechgroup.com/pdf-render-api',
            contactInfo
          },
          {
            title: '🏗️ Infrastructure Drift Detector',
            description: 'Continuously detect and remediate IaC drift across AWS/Azure/GCP with PR-based fixes.',
            price: '$129/month',
            features: ['Cloud inventory', 'OPA policy drift rules', 'Auto PRs', 'Slack approvals'],
            link: 'https://ziontechgroup.com/infrastructure-drift-detector',
            contactInfo
          },
          {
            title: '⏰ Cron & Jobs Scheduler',
            description: 'Reliable scheduled jobs with retries, idempotency and regional runners plus alerts.',
            price: '$29/month',
            features: ['CRON & human syntax', 'Retries & DLQs', 'Webhooks & SDKs', 'SLOs and alerts'],
            link: 'https://ziontechgroup.com/cron-job-scheduler',
            contactInfo
          },
          // Existing curated highlights
          ...serviceHighlights.slice(0, 8).map((h) => ({
            title: h.title,
            description: h.description,
            price: h.price,
            features: h.features,
            link: h.link,
            contactInfo: h.contactInfo || contactInfo
          }))
        ]}
      />

      {/* IT Services & Platform Engineering Ads Strip */}
      <ServiceAds
        heading="Enterprise IT & Platform Engineering"
        subheading="Cloud landing zones, SSO, databases, observability — ready in days."
        items={[
          {
            title: '☁️ Cloud Landing Zone Builder',
            description: 'Secure multi-account AWS/Azure/GCP foundations with guardrails, IAM, networking, and FinOps via GitOps.',
            price: 'Starting at $349/month',
            features: ['Org setup & SCPs', 'VPC & network baselines', 'Audit logging', 'Budgets & anomaly alerts', 'GitOps workflows', 'Multi-env blueprints'],
            link: 'https://ziontechgroup.com/cloud-landing-zone',
            contactInfo
          },
          {
            title: '🔐 SSO-in-a-Box',
            description: 'Enterprise SSO rollout with SAML/OIDC, SCIM provisioning, MFA policies, and audit trails.',
            price: 'Starting at $159/month',
            features: ['SAML/OIDC', 'SCIM provisioning', 'MFA & risk policies', 'App catalog', 'Audit logs', 'Just-in-time user sync'],
            link: 'https://ziontechgroup.com/sso-in-a-box',
            contactInfo
          },
          {
            title: '🗄️ Managed Postgres HA',
            description: 'Hands-on Postgres performance tuning, high availability, and disaster recovery playbooks.',
            price: 'Starting at $199/month',
            features: ['Patroni/PGPool patterns', 'Index & vacuum guidance', 'Query tracing', 'HA/DR runbooks', 'Backups & PITR', 'Capacity planning'],
            link: 'https://ziontechgroup.com/managed-postgres-ha',
            contactInfo
          },
          {
            title: '📊 API Observability Starter (OTel)',
            description: 'OpenTelemetry-based traces, metrics, and logs with dashboards, alerts, and SLOs.',
            price: 'Starting at $129/month',
            features: ['OTel collectors', 'Service maps', 'SLO alerting', 'Latency budgets', 'Drill-down traces', 'Error analytics'],
            link: 'https://ziontechgroup.com/api-observability-starter',
            contactInfo
          }
        ]}
      />

      {/* New and Trending Micro SaaS */}
      <ServiceAds
        heading="New and Trending Micro SaaS"
        subheading="Recently launched, production-ready services with transparent pricing."
        items={(() => {
          const byId = (id: string) => additionalEnhancedServices.find(s => s.id === id);
          const picks = [
            byId('email-deliverability-monitor'),
            byId('landing-page-experimentation'),
            byId('invoice-reconciliation-automation'),
            byId('github-ops-health-dashboard')
          ].filter(Boolean) as typeof additionalEnhancedServices;
          return picks.map((s) => ({
            title: s.name,
            description: s.tagline || s.description,
            price: `${s.price}/month`,
            features: (s.features || []).slice(0, 6),
            link: s.link,
            contactInfo
          }));
        })()}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center z-10">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with 200+ cutting-edge micro SaaS services powered by quantum AI, 
              autonomous systems, and breakthrough technology. Achieve 800%+ ROI with our revolutionary solutions.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              href="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              {' '}Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge micro SaaS solutions. 
              Each service is designed to deliver immediate value and exponential ROI.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              href="/services"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View All 200+ Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market-Leading
              {' '}<span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services outperform competitors in every category, delivering superior value, 
              advanced technology, and exceptional ROI.
            </p>
          </motion.div>

          {/* Service Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 backdrop-blur-xl">
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                    
                    <div className="text-3xl font-bold text-white">
                      {highlight.price}
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-cyan-400">Key Features:</h4>
                      <ul className="space-y-2">
                        {highlight.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-cyan-400 font-semibold">Market Data:</span>
                          <p className="text-gray-300">{highlight.marketData}</p>
                        </div>
                        <div>
                          <span className="text-green-400 font-semibold">Competitors:</span>
                          <p className="text-gray-300">{highlight.competitors}</p>
                        </div>
                        <div className="md:col-span-2">
                          <span className="text-yellow-400 font-semibold">Your Savings:</span>
                          <p className="text-gray-300">{highlight.savings}</p>
                        </div>
                        {highlight.contactInfo && (
                          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Phone className="w-4 h-4 text-cyan-400" />
                              <span>{highlight.contactInfo.mobile}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Mail className="w-4 h-4 text-purple-400" />
                              <span>{highlight.contactInfo.email}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        href={highlight.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                      <Button
                        href="/contact"
                        variant="outline"
                        className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                      >
                        Contact
                      </Button>
                    </div>
                    {highlight.contactInfo && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><span>{highlight.contactInfo.mobile}</span></div>
                        <div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><span>{highlight.contactInfo.email}</span></div>
                        <div className="flex items-center justify-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><span className="text-xs">{highlight.contactInfo.address}</span></div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to
              {' '}<span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Transform</span>
              {' '}Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already achieving exponential growth with our revolutionary technology solutions. 
              Get started today with a free consultation and discover how we can accelerate your success.
            </p>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-3">
                  <Phone className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Mail className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Free Consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticMatrixBackground>
  );
}
