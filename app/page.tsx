import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import ROIImpactEstimator from './components/ROIImpactEstimator';
import SolutionFinder from './components/home/SolutionFinder';
import LaunchReadinessAdvisor from './components/home/LaunchReadinessAdvisor';
import Testimonials from './components/home/Testimonials';
import FeaturedAppGrid from './components/home/FeaturedAppGrid';
import AppCollectionGrid from './components/home/AppCollectionGrid';
import { FAQ_ITEMS } from './constants/faqData';
import ProductRecommenderSection from './components/ai/ProductRecommenderSection';
import AiSiteHealthPanel from './components/AiSiteHealthPanel';
import { AI_LAB_TOOLS } from './ai-lab/ai-lab-tools';

type FeaturedApp = {
  name: string;
  href: string;
  category: string;
  description: string;
  icon: string;
};

type ValueHighlight = {
  value: string;
  label: string;
  note: string;
};

type DeliveryStep = {
  title: string;
  description: string;
  duration: string;
};

type SpotlightPillar = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: string;
};

type AppCollectionLink = {
  name: string;
  href: string;
};

type AppCollection = {
  title: string;
  description: string;
  icon: string;
  links: AppCollectionLink[];
};

type DifferentiationPoint = {
  title: string;
  description: string;
  icon: string;
};

type InnovationBundle = {
  title: string;
  description: string;
  impact: string;
  href: string;
  cta: string;
  icon: string;
  modules: AppCollectionLink[];
};

type QuickJumpLink = {
  label: string;
  href: string;
  description: string;
};

type PlatformPageSpotlight = {
  title: string;
  href: string;
  description: string;
  tag: string;
};

type WhatsNewItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  tag: string;
};

const whatsNewItems: WhatsNewItem[] = [
  ...AI_LAB_TOOLS.slice()
    .sort((a, b) => {
      const score = (status: typeof a.status) => {
        if (status === 'live') return 0;
        if (status === 'experimental') return 1;
        return 2;
      };
      return score(a.status) - score(b.status) || a.title.localeCompare(b.title);
    })
    .map((tool) => ({
      id: tool.id,
      title: tool.title,
      description: tool.shortDescription,
      href: tool.href,
      tag:
        tool.badge ??
        (tool.status === 'live' ? 'AI Lab' : tool.status === 'experimental' ? 'Experimental' : 'Planned'),
    })),
  {
    id: 'zion-ai-chatbot-playground',
    title: 'Zion AI Chatbot Playground',
    description: 'In-browser demo',
    href: '/zion-ai-chatbot-playground',
    tag: 'New app',
  },
  {
    id: 'zion-ai-code-sandbox',
    title: 'Zion AI Code Sandbox',
    description: 'Live code analysis demo',
    href: '/zion-ai-code-sandbox',
    tag: 'New app',
  },
  {
    id: 'zion-ai-autonomous-ops-hub',
    title: 'Zion AI Autonomous Ops Hub',
    description:
      'Model and observe your autonomous agent fleet with shared governance.',
    href: '/zion-ai-autonomous-ops-hub',
    tag: 'New hub',
  },
  {
    id: 'zion-ai-site-evolution-simulator',
    title: 'Zion AI Site Evolution Simulator',
    description: 'Simulate how AI will improve the site and what it will optimize next.',
    href: '/zion-ai-site-evolution-simulator',
    tag: 'New hub',
  },
];

const featuredApps: FeaturedApp[] = [
  {
    name: 'Zion AI Chatbot Builder',
    href: '/zion-ai-chatbot-builder',
    category: 'Customer Experience',
    description: 'Launch branded AI chat experiences for support, sales, and onboarding.',
    icon: '💬',
  },
  {
    name: 'Zion AI Customer Support Pro',
    href: '/zion-ai-customer-support-pro',
    category: 'Customer Experience',
    description: 'Automate tier-1 support while keeping escalation paths for your team.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Email Assistant',
    href: '/zion-ai-email-assistant',
    category: 'Growth',
    description: 'Draft, summarize, and organize email workflows with AI assistance.',
    icon: '📧',
  },
  {
    name: 'Zion AI Marketing Automation',
    href: '/zion-ai-marketing-automation',
    category: 'Growth',
    description: 'Build campaign automations that adapt to user behavior in real time.',
    icon: '📈',
  },
  {
    name: 'Zion AI Social Media Manager',
    href: '/zion-ai-social-media-manager',
    category: 'Growth',
    description: 'Plan, schedule, and optimize social content with smart recommendations.',
    icon: '📱',
  },
  {
    name: 'Zion AI Sales Predictor',
    href: '/zion-ai-sales-predictor',
    category: 'Growth',
    description: 'Forecast demand and prioritize pipeline opportunities using AI models.',
    icon: '📊',
  },
  {
    name: 'Zion AI Predictive Analytics',
    href: '/zion-ai-predictive-analytics',
    category: 'Decision Intelligence',
    description: 'Turn historical signals into actionable forecasts for strategic planning.',
    icon: '🔮',
  },
  {
    name: 'Zion AI Code Assistant',
    href: '/zion-ai-code-assistant',
    category: 'Engineering',
    description: 'Speed up development cycles with AI code generation and refactoring help.',
    icon: '💻',
  },
  {
    name: 'Zion AI Code Reviewer',
    href: '/zion-ai-code-reviewer',
    category: 'Engineering',
    description: 'Catch quality issues quickly with automated reviews and best-practice checks.',
    icon: '🔍',
  },
  {
    name: 'Zion AI API Tester',
    href: '/zion-ai-api-tester',
    category: 'Engineering',
    description: 'Run API validation scenarios faster with intelligent test suggestions.',
    icon: '🧪',
  },
  {
    name: 'Zion AI Database Optimizer',
    href: '/zion-ai-database-optimizer',
    category: 'Engineering',
    description: 'Optimize query performance, indexing strategy, and data access patterns.',
    icon: '🗄️',
  },
  {
    name: 'Zion DevOps Automation',
    href: '/zion-devops-automation',
    category: 'Engineering',
    description: 'Automate release workflows, environment provisioning, and deployment tasks.',
    icon: '⚙️',
  },
  {
    name: 'Zion Performance Monitor',
    href: '/zion-performance-monitor',
    category: 'Engineering',
    description: 'Track application health and performance trends across critical services.',
    icon: '🚀',
  },
  {
    name: 'Zion Security Shield',
    href: '/zion-security-shield',
    category: 'Security',
    description: 'Protect digital assets with layered defense and continuous monitoring.',
    icon: '🛡️',
  },
  {
    name: 'Zion Cybersecurity Audit',
    href: '/zion-cybersecurity-audit',
    category: 'Security',
    description: 'Assess exposure and harden systems with security-first audit workflows.',
    icon: '🔐',
  },
  {
    name: 'Zion Cloud Vault',
    href: '/zion-cloud-vault',
    category: 'Security',
    description: 'Secure sensitive files with centralized storage, controls, and backup.',
    icon: '☁️',
  },
  {
    name: 'Zion Data Sync',
    href: '/zion-data-sync',
    category: 'Infrastructure',
    description: 'Synchronize business-critical data across tools and operational systems.',
    icon: '🔄',
  },
  {
    name: 'Zion AI Translation Service',
    href: '/zion-ai-translation-service',
    category: 'Productivity',
    description: 'Translate multilingual content at scale while preserving tone and context.',
    icon: '🌐',
  },
  {
    name: 'Zion AI Video Generator',
    href: '/zion-ai-video-generator',
    category: 'Productivity',
    description: 'Create short-form product and campaign videos with AI-powered workflows.',
    icon: '🎥',
  },
  {
    name: 'Zion AI Email Marketing Pro',
    href: '/zion-ai-email-marketing-pro',
    category: 'Growth',
    description: 'Orchestrate personalized lifecycle campaigns with AI-generated content and timing.',
    icon: '📬',
  },
  {
    name: 'Zion AI Lead Scoring',
    href: '/zion-ai-lead-scoring',
    category: 'Growth',
    description:
      'Prioritize high-intent opportunities automatically using behavioral and firmographic signals.',
    icon: '🎯',
  },
  {
    name: 'Zion Smart CRM Automation',
    href: '/zion-smart-crm-automation',
    category: 'Automation',
    description:
      'Automate deal routing, follow-ups, and lifecycle triggers across your CRM workflows.',
    icon: '🧲',
  },
  {
    name: 'Zion Workflow Automation',
    href: '/zion-workflow-automation',
    category: 'Automation',
    description:
      'Connect operational tasks across tools with resilient, event-driven workflow pipelines.',
    icon: '🛠️',
  },
  {
    name: 'Zion AI Document Processor',
    href: '/zion-ai-document-processor',
    category: 'Operations',
    description:
      'Extract structured data from contracts, invoices, and internal documents in seconds.',
    icon: '📄',
  },
  {
    name: 'Zion AI Document Analyzer',
    href: '/zion-ai-document-analyzer',
    category: 'Operations',
    description:
      'Summarize long-form files and surface risk points with intelligent document analysis.',
    icon: '📚',
  },
  {
    name: 'Zion AI Contract Analyzer',
    href: '/zion-ai-contract-analyzer',
    category: 'Compliance',
    description:
      'Review legal terms, obligations, and renewal risks with compliance-aware AI checks.',
    icon: '⚖️',
  },
  {
    name: 'Zion AI Meeting Assistant',
    href: '/zion-ai-meeting-assistant',
    category: 'Operations',
    description:
      'Capture meeting notes, action items, and follow-ups automatically for faster execution.',
    icon: '🗒️',
  },
  {
    name: 'Zion AI Voice Assistant',
    href: '/zion-ai-voice-assistant',
    category: 'Operations',
    description:
      'Deploy natural voice workflows for internal operations, support triage, and task updates.',
    icon: '🎙️',
  },
  {
    name: 'Zion Content Studio',
    href: '/zion-content-studio',
    category: 'Growth',
    description:
      'Produce campaign assets and repurpose content across channels with AI creative pipelines.',
    icon: '🧩',
  },
  {
    name: 'Zion Smart Analytics Dashboard',
    href: '/zion-smart-analytics-dashboard',
    category: 'Decision Intelligence',
    description:
      'Monitor KPI trends, pipeline health, and operational metrics in one executive dashboard.',
    icon: '📈',
  },
  {
    name: 'Zion AI Financial Forecaster',
    href: '/zion-ai-financial-forecaster',
    category: 'Decision Intelligence',
    description:
      'Project revenue, cash-flow scenarios, and margin outcomes with AI forecasting models.',
    icon: '💹',
  },
  {
    name: 'Zion AI CRM Optimizer',
    href: '/zion-ai-crm-optimizer',
    category: 'Growth',
    description:
      'Improve pipeline quality with cleaner CRM data, smarter scoring, and automated updates.',
    icon: '🗂️',
  },
  {
    name: 'Zion Email Automation',
    href: '/zion-email-automation',
    category: 'Growth',
    description:
      'Automate campaign sequences, follow-up timing, and lifecycle touchpoints across channels.',
    icon: '✉️',
  },
  {
    name: 'Zion Social Scheduler',
    href: '/zion-social-scheduler',
    category: 'Growth',
    description:
      'Schedule multi-channel social campaigns with calendar-based planning and content reuse.',
    icon: '📅',
  },
  {
    name: 'Zion Lead Magnet',
    href: '/zion-lead-magnet',
    category: 'Growth',
    description:
      'Capture inbound demand with AI-assisted lead magnets, forms, and nurture handoff flows.',
    icon: '🧲',
  },
  {
    name: 'Zion Project Master',
    href: '/zion-project-master',
    category: 'Operations',
    description:
      'Coordinate execution with project planning, milestone tracking, and delivery visibility.',
    icon: '📋',
  },
  {
    name: 'Zion Invoice Genius',
    href: '/zion-invoice-genius',
    category: 'Operations',
    description:
      'Streamline invoice generation, reconciliation, and collections with automation-first flows.',
    icon: '🧾',
  },
  {
    name: 'Zion Smart Inventory Manager',
    href: '/zion-smart-inventory-manager',
    category: 'Operations',
    description:
      'Track stock levels, replenish intelligently, and reduce supply-side interruptions.',
    icon: '📦',
  },
  {
    name: 'Zion Smart Expense Tracker',
    href: '/zion-smart-expense-tracker',
    category: 'Operations',
    description:
      'Capture and categorize expenses automatically with policy-aware, audit-friendly controls.',
    icon: '💼',
  },
  {
    name: 'Zion AI Recruitment Pro',
    href: '/zion-ai-recruitment-pro',
    category: 'Operations',
    description:
      'Accelerate hiring with AI-assisted candidate screening, interview notes, and coordination.',
    icon: '🧑‍💼',
  },
  {
    name: 'Zion Compliance Manager',
    href: '/zion-compliance-manager',
    category: 'Compliance',
    description:
      'Centralize policy workflows, evidence tracking, and compliance reporting for audits.',
    icon: '✅',
  },
  {
    name: 'Zion AI Fraud Detector',
    href: '/zion-ai-fraud-detector',
    category: 'Security',
    description:
      'Detect suspicious activity patterns early with adaptive AI-powered fraud monitoring.',
    icon: '🚨',
  },
  {
    name: 'Zion AI Knowledge Base',
    href: '/zion-ai-knowledge-base',
    category: 'Customer Experience',
    description:
      'Build intelligent, searchable knowledge bases that learn from user queries and surface relevant answers instantly.',
    icon: '📖',
  },
  {
    name: 'Zion AI Sentiment Analyzer',
    href: '/zion-ai-customer-sentiment-tracker',
    category: 'Decision Intelligence',
    description:
      'Analyze customer sentiment across support tickets, reviews, and social channels in real time.',
    icon: '🧠',
  },
  {
    name: 'Zion AI Report Generator',
    href: '/zion-ai-report-generator',
    category: 'Productivity',
    description:
      'Generate executive reports, investor updates, and team summaries from structured data automatically.',
    icon: '📑',
  },
  {
    name: 'Zion AI Data Pipeline',
    href: '/zion-ai-data-pipeline',
    category: 'Infrastructure',
    description:
      'Build, monitor, and orchestrate ETL pipelines with AI-optimized scheduling and error recovery.',
    icon: '🔗',
  },
  {
    name: 'Zion AI Quality Assurance',
    href: '/zion-ai-quality-assurance',
    category: 'Engineering',
    description:
      'Automate regression testing and QA cycles with AI-driven test generation and coverage analysis.',
    icon: '🧪',
  },
  {
    name: 'Zion AI Onboarding Pro',
    href: '/zion-ai-onboarding-pro',
    category: 'Customer Experience',
    description:
      'Create personalized onboarding flows that adapt to user behavior and accelerate time-to-value.',
    icon: '🚀',
  },
  {
    name: 'Zion AI Survey Builder',
    href: '/zion-ai-survey-builder',
    category: 'Growth',
    description:
      'Design, deploy, and analyze surveys with AI-generated questions and real-time response insights.',
    icon: '📝',
  },
  {
    name: 'Zion AI Risk Assessor',
    href: '/zion-ai-risk-assessor',
    category: 'Compliance',
    description:
      'Assess and monitor operational, financial, and regulatory risks with continuous AI-powered scoring.',
    icon: '⚠️',
  },
  {
    name: 'Zion AI Help Desk',
    href: '/zion-ai-help-desk',
    category: 'Customer Experience',
    description:
      'Full-service AI help desk with smart ticket routing, auto-responses, and escalation management.',
    icon: '🎫',
  },
  {
    name: 'Zion AI Content Moderator',
    href: '/zion-ai-content-moderator',
    category: 'Security',
    description:
      'Monitor and moderate user-generated content with AI-powered policy enforcement and review queues.',
    icon: '🛡️',
  },
  {
    name: 'Zion AI Pricing Optimizer',
    href: '/zion-ai-price-optimizer',
    category: 'Growth',
    description:
      'Optimize pricing strategies dynamically with AI-driven demand analysis and competitor benchmarking.',
    icon: '💲',
  },
  {
    name: 'Zion AI Accessibility Checker',
    href: '/zion-ai-accessibility-checker',
    category: 'Engineering',
    description:
      'Scan web applications for WCAG compliance issues and generate AI-powered remediation guides.',
    icon: '♿',
  },
  {
    name: 'Zion AI Image Generator',
    href: '/zion-ai-image-generator',
    category: 'Productivity',
    description:
      'Create on-brand product images, social assets, and campaign visuals with customizable AI models.',
    icon: '🎨',
  },
  {
    name: 'Zion AI Notification Hub',
    href: '/zion-ai-notification-hub',
    category: 'Operations',
    description:
      'Centralize multi-channel notifications with smart prioritization, batching, and delivery optimization.',
    icon: '🔔',
  },
  {
    name: 'Zion AI Talent Analytics',
    href: '/zion-ai-talent-analytics',
    category: 'Operations',
    description:
      'Track team performance, skill gaps, and retention signals with AI-powered workforce insights.',
    icon: '👥',
  },
  {
    name: 'Zion AI SEO Optimizer',
    href: '/zion-ai-seo-optimizer',
    category: 'Growth',
    description:
      'Optimize search visibility, content structure, and technical SEO with AI-driven recommendations.',
    icon: '🔍',
  },
  {
    name: 'Zion AI Predictive Maintenance',
    href: '/zion-ai-predictive-maintenance',
    category: 'Operations',
    description:
      'Predict equipment failures and schedule maintenance before downtime impacts operations.',
    icon: '🔧',
  },
  {
    name: 'Zion AI Supply Chain Optimizer',
    href: '/zion-ai-supply-chain-optimizer',
    category: 'Operations',
    description:
      'Optimize inventory, logistics, and procurement with AI-powered demand and supply forecasting.',
    icon: '📦',
  },
  {
    name: 'Zion AI Website Analyzer',
    href: '/zion-ai-website-analyzer',
    category: 'Engineering',
    description:
      'Audit site performance, accessibility, and SEO with automated scans and actionable reports.',
    icon: '🌐',
  },
  {
    name: 'Zion AI Meeting Transcriber',
    href: '/zion-ai-meeting-transcriber',
    category: 'Operations',
    description:
      'Transcribe meetings in real time with speaker identification and searchable archives.',
    icon: '📝',
  },
  {
    name: 'Zion AI Accounting Assistant',
    href: '/zion-ai-accounting-assistant',
    category: 'Operations',
    description:
      'Automate bookkeeping, reconciliation, and financial reporting with AI-assisted workflows.',
    icon: '📒',
  },
  {
    name: 'Zion AI Image Recognition',
    href: '/zion-ai-image-recognition',
    category: 'Productivity',
    description:
      'Accelerate creative production with AI-assisted design, visual analysis, and content creation.',
    icon: '🖼️',
  },
  {
    name: 'Zion AI Data Visualizer',
    href: '/zion-ai-data-visualizer',
    category: 'Decision Intelligence',
    description:
      'Transform raw data into actionable intelligence with real-time dashboards and predictive models.',
    icon: '📊',
  },
  {
    name: 'Zion AI Energy Manager',
    href: '/zion-ai-energy-manager',
    category: 'Operations',
    description:
      'Optimize energy consumption and asset performance with AI-driven demand forecasting.',
    icon: '⚡',
  },
  {
    name: 'Zion AI Scheduling Assistant',
    href: '/zion-ai-scheduling-assistant',
    category: 'Operations',
    description:
      'Automate appointment scheduling, resource allocation, and calendar coordination across teams.',
    icon: '📅',
  },
  {
    name: 'Zion AI Form Builder',
    href: '/zion-ai-form-builder',
    category: 'Growth',
    description:
      'Create smart forms with AI-powered validation, conditional logic, and seamless CRM handoff.',
    icon: '📋',
  },
  {
    name: 'Zion AI Video Editor',
    href: '/zion-ai-video-editor',
    category: 'Productivity',
    description:
      'Edit and produce video content faster with AI-assisted trimming, captions, and effects.',
    icon: '🎬',
  },
  {
    name: 'Zion AI Compliance Tracker',
    href: '/zion-compliance-manager',
    category: 'Compliance',
    description:
      'Track regulatory requirements, audit trails, and policy updates across multiple compliance frameworks.',
    icon: '📜',
  },
  {
    name: 'Zion AI Fleet Manager',
    href: '/zion-ai-supply-chain-optimizer',
    category: 'Operations',
    description:
      'Coordinate vehicle fleets, optimize delivery routes, and reduce fuel costs with AI-powered logistics.',
    icon: '🚛',
  },
  {
    name: 'Zion AI Churn Predictor',
    href: '/zion-ai-predictive-analytics',
    category: 'Growth',
    description:
      'Identify at-risk customers early with behavioral scoring and trigger automated retention campaigns.',
    icon: '📉',
  },
  {
    name: 'Zion AI Workflow Designer',
    href: '/zion-workflow-automation',
    category: 'Automation',
    description:
      'Visually design, test, and deploy multi-step workflows with drag-and-drop orchestration and conditional logic.',
    icon: '🧩',
  },
  {
    name: 'Zion AI Incident Manager',
    href: '/zion-security-shield',
    category: 'Security',
    description:
      'Detect, triage, and resolve security incidents faster with automated playbooks and real-time alerting.',
    icon: '🚨',
  },
  {
    name: 'Zion AI Budget Planner',
    href: '/zion-ai-financial-forecaster',
    category: 'Decision Intelligence',
    description:
      'Model budget scenarios, track departmental spend, and forecast cash-flow with AI-powered financial planning.',
    icon: '💰',
  },
  {
    name: 'Zion AI Customer Service Pro',
    href: '/zion-ai-customer-service-pro',
    category: 'Customer Experience',
    description: 'Elevate customer interactions with AI-driven support, intelligent routing, and personalized engagement.',
    icon: '💬',
  },
  {
    name: 'Zion AI Customer Sentiment Tracker',
    href: '/zion-ai-customer-sentiment-tracker',
    category: 'Decision Intelligence',
    description: 'Analyze customer sentiment across support tickets, reviews, and social channels in real time.',
    icon: '🧠',
  },
  {
    name: 'Zion AI Customer Churn Predictor Pro',
    href: '/zion-ai-customer-churn-predictor-pro',
    category: 'Customer Experience',
    description: 'Predict churn risk and prioritize retention actions with AI-driven customer analytics.',
    icon: '📉',
  },
  {
    name: 'Zion AI Social Scheduler Pro',
    href: '/zion-ai-social-scheduler-pro',
    category: 'Growth & Marketing',
    description: 'Schedule multi-channel social campaigns with smart timing, content reuse, and AI-driven engagement optimization.',
    icon: '📅',
  },
  {
    name: 'Zion AI Workflow Automator',
    href: '/zion-ai-workflow-automator',
    category: 'Automation & Workflows',
    description: 'Connect operational tasks across tools with event-driven workflows, conditional logic, and cross-system integration.',
    icon: '🛠️',
  },
  {
    name: 'Zion Customer Satisfaction Monitor',
    href: '/zion-customer-satisfaction-monitor',
    category: 'Data & Analytics',
    description: 'Track NPS, CSAT, and feedback across touchpoints with real-time dashboards and automated alerts.',
    icon: '🤖',
  },
  {
    name: 'Zion Customer Insights',
    href: '/zion-customer-insights',
    category: 'Customer Experience',
    description: 'Unify customer data into a 360° view with behavior analytics, segmentation, and actionable insights.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Customer Churn Predictor',
    href: '/zion-ai-customer-churn-predictor',
    category: 'Customer Experience',
    description: 'Predict at-risk accounts with ML models and trigger retention playbooks before churn.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Fraud Detection',
    href: '/zion-ai-fraud-detection',
    category: 'Security & Compliance',
    description: 'Detect fraud in real time with transaction monitoring, anomaly detection, and rule-based alerts.',
    icon: '🤖',
  },
  {
    name: 'Zion AI Compliance Checker',
    href: '/zion-ai-compliance-checker',
    category: 'Compliance',
    description: 'Automate compliance checks, policy validation, and audit-ready reporting across regulatory frameworks.',
    icon: '✅',
  },
  {
    name: 'Zion Blockchain Solutions',
    href: '/zion-blockchain-solutions',
    category: 'Blockchain & Web3',
    description: 'Build and deploy smart contracts, DApps, and Web3 integrations with secure blockchain infrastructure.',
    icon: '🤖',
  },
  {
    name: 'Zion AI Pricing Optimizer',
    href: '/zion-ai-pricing-optimizer',
    category: 'Growth',
    description: 'Optimize pricing strategies dynamically with AI-driven demand analysis, competitor benchmarking, and revenue optimization.',
    icon: '📈',
  },
  {
    name: 'Zion AI Content Moderation',
    href: '/zion-ai-content-moderation',
    category: 'Security',
    description: 'Monitor and moderate user-generated content with AI-powered policy enforcement and review queues.',
    icon: '🛡️',
  },
  {
    name: 'Zion AI Workflow Automator Pro',
    href: '/zion-ai-workflow-automator-pro',
    category: 'Automation & Workflows',
    description: 'Eliminate manual bottlenecks with intelligent process automation, event-driven orchestration, and cross-system integration.',
    icon: '🔄',
  },
  {
    name: 'Zion AI Voice Synthesis',
    href: '/zion-ai-voice-synthesis',
    category: 'Language & Communication',
    description: 'Enhance communication with AI-powered voice synthesis, transcription, and intelligent translation across channels.',
    icon: '🗣️',
  },
  {
    name: 'Zion AI Document AI',
    href: '/zion-ai-document-ai',
    category: 'Operations & Productivity',
    description: 'Streamline document handling, task coordination, and process automation with smart extraction and validation.',
    icon: '📋',
  },
  {
    name: 'Zion AI Vendor Manager',
    href: '/zion-ai-vendor-manager',
    category: 'Operations',
    description: 'Manage vendor relationships and procurement workflows with AI-powered scoring and risk assessment.',
    icon: '🔄',
  },
  {
    name: 'Zion AI Inventory Optimizer Pro',
    href: '/zion-ai-inventory-optimizer-pro',
    category: 'Operations',
    description: 'Streamline operations with smart document handling, task coordination, and automated business processes.',
    icon: '📋',
  },
  {
    name: 'Zion AI Asset Intelligence',
    href: '/zion-ai-asset-intelligence',
    category: 'Operations',
    description: 'Unlock predictive insights and automate workflows for optimal asset lifecycle management.',
    icon: '📊',
  },
  {
    name: 'Zion AI Data Cleaner',
    href: '/zion-ai-data-cleaner',
    category: 'Decision Intelligence',
    description: 'Transform raw data into actionable intelligence with real-time dashboards and predictive models.',
    icon: '📊',
  },
  {
    name: 'Zion AI Translator Pro',
    href: '/zion-ai-translator-pro',
    category: 'Productivity',
    description: 'Translate content at scale with AI-powered language processing and intelligent translation across channels.',
    icon: '🌐',
  },
  {
    name: 'Zion AI Email Optimizer',
    href: '/zion-ai-email-optimizer',
    category: 'Growth & Marketing',
    description: 'Optimize deliverability, A/B test subject lines, and improve campaign performance with AI insights.',
    icon: '🤖',
  },
  {
    name: 'Zion AI Sentiment Analyzer',
    href: '/zion-ai-sentiment-analyzer',
    category: 'Operations',
    description: 'Analyze customer sentiment across support tickets, reviews, and social channels in real time with AI-powered sentiment analysis.',
    icon: '📦',
  },
  {
    name: 'Zion IoT Solutions',
    href: '/zion-iot-solutions',
    category: 'IoT & Edge Computing',
    description: 'Connect sensors, edge devices, and IoT data streams for real-time monitoring and automation.',
    icon: '🤖',
  },
  {
    name: 'Zion AI Task Scheduler',
    href: '/zion-ai-task-scheduler',
    category: 'Automation & Workflows',
    description: 'Automate task scheduling, resource allocation, and deadline tracking across teams and projects.',
    icon: '🤖',
  },
  {
    name: 'Zion Analytics Pro',
    href: '/zion-analytics-pro',
    category: 'Data & Analytics',
    description: 'Build dashboards, reports, and predictive models with unified data pipelines and visualization.',
    icon: '🤖',
  },
  {
    name: 'Zion AI Incident Response',
    href: '/zion-ai-incident-response',
    category: 'Security',
    description: 'Accelerate incident triage and resolution with automated playbooks and real-time collaboration.',
    icon: '🚨',
  },
  {
    name: 'Zion API Development',
    href: '/zion-api-development',
    category: 'Engineering & Development',
    description: 'Design, build, and document REST and GraphQL APIs with automated testing and versioning.',
    icon: '🤖',
  },
  {
    name: 'Zion Chat AI',
    href: '/zion-chat-ai',
    category: 'Language & Communication',
    description: 'Deploy conversational AI for support, sales, and internal workflows with natural language understanding.',
    icon: '🤖',
  },
  {
    name: 'Zion Inventory Smart',
    href: '/zion-inventory-smart',
    category: 'Operations & Productivity',
    description: 'Optimize stock levels, reorder points, and warehouse operations with demand-driven forecasting.',
    icon: '🤖',
  },
  {
    name: 'Zion CRM Intelligence',
    href: '/zion-crm-intelligence',
    category: 'Growth & Marketing',
    description: 'Surface pipeline insights, deal health, and next-best actions from your CRM data.',
    icon: '🤖',
  },
  {
    name: 'Zion AI Data Governance',
    href: '/zion-ai-data-governance',
    category: 'Compliance',
    description: 'Govern data quality, lineage, and access policies with AI-powered cataloging and policy enforcement.',
    icon: '📋',
  },
  {
    name: 'Zion AI Customer Success',
    href: '/zion-ai-customer-success',
    category: 'Customer Experience',
    description: 'Proactively identify at-risk accounts and drive expansion with AI-powered health scoring and playbooks.',
    icon: '🌟',
  },
  {
    name: 'Zion AI Brand Monitor',
    href: '/zion-ai-brand-monitor',
    category: 'Growth',
    description: 'Track brand mentions, sentiment, and competitive positioning across channels in real time.',
    icon: '👁️',
  },
  {
    name: 'Zion AI Demand Forecasting',
    href: '/zion-ai-demand-forecasting',
    category: 'Operations',
    description: 'Forecast demand with ML models that factor in seasonality, promotions, and external signals.',
    icon: '📊',
  },
  {
    name: 'Zion AI Workflow Orchestrator',
    href: '/zion-ai-workflow-orchestrator',
    category: 'Automation',
    description: 'Orchestrate cross-system workflows with intelligent routing, retries, and dependency management.',
    icon: '🔄',
  },
  {
    name: 'Zion AI Cost Optimizer',
    href: '/zion-ai-cost-optimizer',
    category: 'Operations',
    description: 'Identify cost-saving opportunities across cloud, SaaS, and operational spend with AI-driven insights.',
    icon: '💰',
  },
  {
    name: 'Zion AI Resource Scheduler',
    href: '/zion-ai-resource-scheduler',
    category: 'Operations',
    description: 'Optimize resource allocation and scheduling with constraint-aware AI for teams and projects.',
    icon: '📅',
  },
  {
    name: 'Zion AI Supply Visibility',
    href: '/zion-ai-supply-visibility',
    category: 'Operations',
    description: 'Gain real-time visibility into supply chain status, risks, and alternative sourcing options.',
    icon: '🔍',
  },
  {
    name: 'Zion AI Quality Insights',
    href: '/zion-ai-quality-insights',
    category: 'Operations',
    description: 'Surface quality trends, root causes, and improvement opportunities from production data.',
    icon: '📈',
  },
  {
    name: 'Zion AI Contract Lifecycle',
    href: '/zion-ai-contract-lifecycle',
    category: 'Operations',
    description: 'Manage contract creation, negotiation, renewal, and compliance through the full lifecycle with AI-powered insights.',
    icon: '📄',
  },
  {
    name: 'Zion AI Procurement Automation',
    href: '/zion-ai-procurement-automation',
    category: 'Operations',
    description: 'Automate sourcing, vendor selection, and purchase workflows with intelligent spend analysis and approval routing.',
    icon: '🛒',
  },
  {
    name: 'Zion AI Field Service Manager',
    href: '/zion-ai-field-service-manager',
    category: 'Operations',
    description: 'Optimize field technician scheduling, routing, and job completion with AI-driven dispatch and real-time updates.',
    icon: '📍',
  },
  {
    name: 'Zion AI Sustainability Tracker',
    href: '/zion-ai-sustainability-tracker',
    category: 'Compliance',
    description: 'Track ESG metrics, carbon footprint, and sustainability goals with automated data collection and reporting.',
    icon: '🌱',
  },
  {
    name: 'Zion AI Spend Intelligence',
    href: '/zion-ai-spend-intelligence',
    category: 'Operations',
    description: 'Gain visibility into spend across categories, vendors, and departments with AI-powered anomaly detection.',
    icon: '💵',
  },
  {
    name: 'Zion AI Capacity Planner',
    href: '/zion-ai-capacity-planner',
    category: 'Operations',
    description: 'Forecast resource and capacity needs with ML models that factor in demand, seasonality, and growth trends.',
    icon: '📊',
  },
  {
    name: 'Zion AI Knowledge Management',
    href: '/zion-ai-knowledge-management',
    category: 'Productivity',
    description: 'Centralize and surface organizational knowledge with AI-powered search, tagging, and recommendations.',
    icon: '📚',
  },
  {
    name: 'Zion AI Employee Experience',
    href: '/zion-ai-employee-experience',
    category: 'Operations',
    description: 'Measure and improve employee engagement with pulse surveys, sentiment analysis, and action insights.',
    icon: '👥',
  },
  {
    name: 'Zion AI Vendor Risk Analytics',
    href: '/zion-ai-vendor-risk-analytics',
    category: 'Operations',
    description: 'Assess and monitor vendor risk with automated scoring, compliance checks, and early warning signals.',
    icon: '⚠️',
  },
  {
    name: 'Zion AI Chatbot Analytics',
    href: '/zion-ai-chatbot-analytics',
    category: 'Customer Experience',
    description: 'Track chatbot performance, conversation flows, and improvement opportunities with AI-driven insights.',
    icon: '📊',
  },
  {
    name: 'Zion AI Cyber Threat Intel',
    href: '/zion-ai-cyber-threat-intel',
    category: 'Security',
    description: 'Aggregate and prioritize threat intelligence with automated correlation and actionable alerts.',
    icon: '🔒',
  },
  {
    name: 'Zion AI Document Classifier',
    href: '/zion-ai-document-classifier',
    category: 'Productivity',
    description: 'Automatically classify and route documents with ML models that learn from your taxonomy.',
    icon: '📁',
  },
  {
    name: 'Zion AI Revenue Forecaster',
    href: '/zion-ai-revenue-forecaster',
    category: 'Growth',
    description: 'Forecast revenue with multi-signal models that factor in pipeline, seasonality, and market trends.',
    icon: '💹',
  },
  {
    name: 'Zion AI Inventory Planner',
    href: '/zion-ai-inventory-planner',
    category: 'Operations',
    description: 'Optimize inventory levels across SKUs and locations with demand-driven replenishment and safety stock AI.',
    icon: '📦',
  },
  {
    name: 'Zion AI Workforce Analytics',
    href: '/zion-ai-workforce-analytics',
    category: 'Operations',
    description: 'Analyze workforce productivity, attrition risk, and headcount planning with predictive insights.',
    icon: '📦',
  },
  {
    name: 'Zion AI Expense Tracker',
    href: '/zion-ai-expense-tracker',
    category: 'Operations',
    description: 'Automate expense capture, categorization, and policy compliance with receipt OCR and smart routing.',
    icon: '📦',
  },
  {
    name: 'Zion AI Customer 360',
    href: '/zion-ai-customer-360',
    category: 'Customer Experience',
    description: 'Unify customer data from all touchpoints into a single view with AI-powered insights and next-best-action recommendation',
    icon: '🎧',
  },
  {
    name: 'Zion AI Talent Acquisition',
    href: '/zion-ai-talent-acquisition',
    category: 'Operations',
    description: 'Source, screen, and qualify candidates with AI-powered matching and automated outreach workflows.',
    icon: '📦',
  },
  {
    name: 'Zion AI Conversation Analytics',
    href: '/zion-ai-conversation-analytics',
    category: 'Customer Experience',
    description: 'Analyze customer conversations across channels to surface insights, trends, and improvement opportunities.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Market Intelligence',
    href: '/zion-ai-market-intelligence',
    category: 'Growth',
    description: 'Track market trends, competitor moves, and industry signals with AI-powered aggregation and alerts.',
    icon: '📈',
  },
  {
    name: 'Zion AI Audit Automation',
    href: '/zion-ai-audit-automation',
    category: 'Compliance',
    description: 'Automate audit workflows with evidence collection, compliance checks, and report generation.',
    icon: '✅',
  },
  {
    name: 'Zion AI Supplier Portal',
    href: '/zion-ai-supplier-portal',
    category: 'Operations',
    description: 'Streamline supplier onboarding, performance tracking, and collaboration with AI-driven insights and workflows.',
    icon: '🔗',
  },
  {
    name: 'Zion AI Maintenance Scheduler',
    href: '/zion-ai-maintenance-scheduler',
    category: 'Operations',
    description: 'Optimize preventive and predictive maintenance schedules with AI-driven asset health and workload balancing.',
    icon: '🔧',
  },
  {
    name: 'Zion AI Backup Optimizer',
    href: '/zion-ai-backup-optimizer',
    category: 'Infrastructure',
    description: 'Optimize backup schedules, retention, and recovery with AI-driven capacity and cost analysis.',
    icon: '🔗',
  },
  {
    name: 'Zion AI Approval Workflow',
    href: '/zion-ai-approval-workflow',
    category: 'Automation',
    description: 'Automate approval routing, escalation, and audit trails for purchase orders, expenses, and contracts.',
    icon: '🛠️',
  },
  {
    name: 'Zion AI Lead Enrichment',
    href: '/zion-ai-lead-enrichment',
    category: 'Growth',
    description: 'Enrich leads with firmographic and technographic data to prioritize high-value opportunities.',
    icon: '📈',
  },
  {
    name: 'Zion AI Deal Pipeline',
    href: '/zion-ai-deal-pipeline',
    category: 'Growth',
    description: 'Visualize and optimize sales pipeline with AI-powered forecasting, stage analysis, and win probability scoring.',
    icon: '📈',
  },
  {
    name: 'Zion AI Incident Management',
    href: '/zion-ai-incident-management',
    category: 'Operations',
    description: 'Orchestrate incident response with automated triage, playbook execution, and post-mortem generation.',
    icon: '📦',
  },
  {
    name: 'Zion AI Incident Predictor',
    href: '/zion-ai-incident-predictor',
    category: 'Operations',
    description: 'Predict incidents and outages before they occur using anomaly detection and pattern analysis.',
    icon: '📦',
  },
  {
    name: 'Zion AI Route Optimizer',
    href: '/zion-ai-route-optimizer',
    category: 'Operations',
    description: 'Minimize delivery time and costs with AI-powered route planning that factors in traffic, weather, and constraints.',
    icon: '📦',
  },
  {
    name: 'Zion AI Compliance Reporting',
    href: '/zion-ai-compliance-reporting',
    category: 'Compliance',
    description: 'Generate audit-ready compliance reports and evidence packages with automated data aggregation.',
    icon: '✅',
  },
  {
    name: 'Zion AI Competitive Intelligence',
    href: '/zion-ai-competitive-intelligence',
    category: 'Growth',
    description: 'Track competitor moves, pricing, and market signals with AI-powered aggregation and alerts.',
    icon: '📈',
  },
  {
    name: 'Zion AI Fleet Management',
    href: '/zion-ai-fleet-management',
    category: 'Operations',
    description: 'Optimize fleet operations with predictive maintenance, route optimization, and driver compliance tracking.',
    icon: '📦',
  },
  {
    name: 'Zion AI Sales Assistant',
    href: '/zion-ai-sales-assistant',
    category: 'Growth',
    description: 'Accelerate sales cycles with AI-powered call summaries, follow-up suggestions, and competitive intelligence.',
    icon: '📈',
  },
  {
    name: 'Zion AI Claims Automation',
    href: '/zion-ai-claims-automation',
    category: 'Operations',
    description: 'Automate insurance and benefits claims processing with document extraction and intelligent routing.',
    icon: '📦',
  },
  {
    name: 'Zion AI Customer Feedback',
    href: '/zion-ai-customer-feedback',
    category: 'Customer Experience',
    description: 'Aggregate and analyze feedback from surveys, reviews, and support channels with sentiment and theme detection.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Quote Generator',
    href: '/zion-ai-quote-generator',
    category: 'Growth',
    description: 'Generate accurate quotes and proposals from product catalogs with AI-powered pricing and configuration.',
    icon: '📈',
  },
  {
    name: 'Zion AI Schedule Optimizer',
    href: '/zion-ai-schedule-optimizer',
    category: 'Operations',
    description: 'Optimize shift scheduling, resource allocation, and capacity planning with constraint-aware AI.',
    icon: '📦',
  },
  {
    name: 'Zion AI Approval Automation',
    href: '/zion-ai-approval-automation',
    category: 'Automation',
    description: 'Automate approval routing, escalation, and audit trails for purchase orders, expenses, and contracts.',
    icon: '🛠️',
  },
  {
    name: 'Zion AI Pricing Intelligence',
    href: '/zion-ai-pricing-intelligence',
    category: 'Growth',
    description: 'Monitor competitor pricing and market signals to optimize pricing strategies and promotions.',
    icon: '📈',
  },
  {
    name: 'Zion AI Contact Center Analytics',
    href: '/zion-ai-contact-center-analytics',
    category: 'Customer Experience',
    description: 'Track call center performance, agent productivity, and customer satisfaction with AI-powered insights and recommendation',
    icon: '🎧',
  },
  {
    name: 'Zion AI Help Desk Analytics',
    href: '/zion-ai-help-desk-analytics',
    category: 'Customer Experience',
    description: 'Surface ticket trends, resolution patterns, and improvement opportunities from support data.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Intent Classifier',
    href: '/zion-ai-intent-classifier',
    category: 'Customer Experience',
    description: 'Classify customer intents in real time to route conversations, prioritize tickets, and trigger automated workflows.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Order Intelligence',
    href: '/zion-ai-order-intelligence',
    category: 'Operations',
    description: 'Improve order accuracy, fulfillment speed, and exception handling with intelligent order routing and insights.',
    icon: '📦',
  },
  {
    name: 'Zion AI Supplier Risk',
    href: '/zion-ai-supplier-risk',
    category: 'Operations',
    description: 'Monitor supplier health, geopolitical risk, and supply chain disruptions with predictive alerts.',
    icon: '📦',
  },
  {
    name: 'Zion AI Deal Desk',
    href: '/zion-ai-deal-desk',
    category: 'Growth',
    description: 'Streamline quote-to-cash with automated pricing, approval routing, and contract generation.',
    icon: '📈',
  },
  {
    name: 'Zion AI Log Analytics',
    href: '/zion-ai-log-analytics',
    category: 'Infrastructure',
    description: 'Correlate and analyze logs across systems with AI-powered anomaly detection and root cause insights.',
    icon: '🔗',
  },
  {
    name: 'Zion AI Project Portfolio',
    href: '/zion-ai-project-portfolio',
    category: 'Operations',
    description: 'Prioritize and balance project portfolios with resource capacity, risk, and strategic alignment insights.',
    icon: '📦',
  },
  {
    name: 'Zion AI Campaign Optimizer',
    href: '/zion-ai-campaign-optimizer',
    category: 'Growth',
    description: 'Optimize ad spend, creative performance, and audience targeting with AI-powered campaign analytics.',
    icon: '📈',
  },
  {
    name: 'Zion AI Talent Sourcing',
    href: '/zion-ai-talent-sourcing',
    category: 'Operations',
    description: 'Source and engage passive candidates with AI-powered outreach, matching, and pipeline management.',
    icon: '📦',
  },
  {
    name: 'Zion AI Lease Analyzer',
    href: '/zion-ai-lease-analyzer',
    category: 'Operations',
    description: 'Extract and analyze lease terms, obligations, and renewal dates across property portfolios.',
    icon: '📦',
  },
  {
    name: 'Zion AI Legal Research',
    href: '/zion-ai-legal-research',
    category: 'Compliance',
    description: 'Accelerate legal research with AI-powered case law search, summarization, and citation analysis.',
    icon: '✅',
  },
  {
    name: 'Zion AI Feedback Summarizer',
    href: '/zion-ai-feedback-summarizer',
    category: 'Customer Experience',
    description: 'Aggregate and summarize feedback from surveys, reviews, and support channels into actionable insights.',
    icon: '🎧',
  },
  {
    name: 'Zion AI Territory Planner',
    href: '/zion-ai-territory-planner',
    category: 'Growth',
    description: 'Optimize sales territory assignment and coverage with AI-driven workload balancing and opportunity mapping.',
    icon: '📈',
  },
  {
    name: 'Zion AI Autonomous Ops Hub',
    href: '/zion-ai-autonomous-ops-hub',
    category: 'Autonomous Operations',
    description:
      'Model your autonomous agents (development, site improvement, content, QA) as a single, observable fleet with shared priority and governance.',
    icon: '🤖',
  },
  {
    name: 'Zion AI Chatbot Playground',
    href: '/zion-ai-chatbot-playground',
    category: 'Operations',
    description: 'AI-powered Zion AI Chatbot Playground for modern teams.',
    icon: '📦',
  },
  {
    name: 'Zion AI Code Sandbox',
    href: '/zion-ai-code-sandbox',
    category: 'Operations',
    description: 'AI-powered Zion AI Code Sandbox for modern teams.',
    icon: '📦',
  },
  {
    name: 'Zion AI Site Evolution Simulator',
    href: '/zion-ai-site-evolution-simulator',
    category: 'Operations',
    description: 'AI-powered Zion AI Site Evolution Simulator for modern teams.',
    icon: '📦',
  },
  {
    name: 'Zion AI Build Failure Explainer',
    href: '/ai-lab/build-failure-explainer',
    category: 'DevOps Intelligence',
    description:
      'Paste a build log and get a deterministic, safe runbook with likely causes and fix paths.',
    icon: '🛠️',
  },
];

const spotlightPillars: SpotlightPillar[] = [
  {
    title: 'Advanced AI Services',
    description: 'Generative AI, agents, RAG, multimodal, governance, and enterprise copilots.',
    href: '/ai-services',
    cta: 'Explore Advanced AI',
    icon: '🧠',
  },
  {
    title: 'AI App Suite',
    description: 'Production-ready AI apps for growth, operations, and customer experience.',
    href: '/solutions',
    cta: 'Explore solutions',
    icon: '🤖',
  },
  {
    title: 'Engineering Services',
    description: 'AI, cloud, cybersecurity, and full-stack development from expert teams.',
    href: '/services',
    cta: 'View services',
    icon: '⚙️',
  },
  {
    title: 'Security & Compliance',
    description: 'Security-focused products to protect systems, data, and business continuity.',
    href: '/it-services/cybersecurity-audit',
    cta: 'Security audit',
    icon: '🔒',
  },
  {
    title: 'Scale-Ready Delivery',
    description: 'Architecture, engineering, and monitoring capabilities built for scale.',
    href: '/pricing',
    cta: 'See plans',
    icon: '📦',
  },
];

const appCollections: AppCollection[] = [
  {
    title: 'Customer & Growth',
    description: 'Improve conversion, customer support, and campaign execution with AI-powered flows.',
    icon: '📣',
    links: [
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'AI Help Desk', href: '/zion-ai-help-desk' },
      { name: 'AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
      { name: 'AI Pricing Optimizer', href: '/zion-ai-price-optimizer' },
      { name: 'AI Survey Builder', href: '/zion-ai-survey-builder' },
      { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'AI Form Builder', href: '/zion-ai-form-builder' },
      { name: 'Email Automation', href: '/zion-email-automation' },
      { name: 'Social Scheduler', href: '/zion-social-scheduler' },
      { name: 'Lead Magnet', href: '/zion-lead-magnet' },
      { name: 'Zion AI Brand Monitor', href: '/zion-ai-brand-monitor' },
      { name: 'Zion AI Customer Churn Predictor Pro', href: '/zion-ai-customer-churn-predictor-pro' },
      { name: 'Zion Customer Insights', href: '/zion-customer-insights' },
    
      { name: 'Zion AI Chatbot Analytics', href: '/zion-ai-chatbot-analytics' },
      { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro' },
      { name: 'Zion AI Pricing Optimizer', href: '/zion-ai-pricing-optimizer' },
      { name: 'Zion AI Revenue Forecaster', href: '/zion-ai-revenue-forecaster' },
      { name: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor' },
      { name: 'Zion AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'Zion AI Customer Success', href: '/zion-ai-customer-success' },
      { name: 'Zion AI Customer Feedback', href: '/zion-ai-customer-feedback' },
      { name: 'Zion AI Pricing Intelligence', href: '/zion-ai-pricing-intelligence' },
      { name: 'Zion AI Market Intelligence', href: '/zion-ai-market-intelligence' },
      { name: 'Zion AI Lead Enrichment', href: '/zion-ai-lead-enrichment' },
      { name: 'Zion AI Sales Assistant', href: '/zion-ai-sales-assistant' },
      { name: 'Zion AI Conversation Analytics', href: '/zion-ai-conversation-analytics' },
      { name: 'Zion AI Customer 360', href: '/zion-ai-customer-360' },
      { name: 'Zion AI Deal Desk', href: '/zion-ai-deal-desk' },
      { name: 'Zion AI Deal Pipeline', href: '/zion-ai-deal-pipeline' },
      { name: 'Zion AI Campaign Optimizer', href: '/zion-ai-campaign-optimizer' },
      { name: 'Zion AI Help Desk Analytics', href: '/zion-ai-help-desk-analytics' },
      { name: 'Zion AI Competitive Intelligence', href: '/zion-ai-competitive-intelligence' },
      { name: 'Zion AI Incident Management', href: '/zion-ai-incident-management' },
      { name: 'Zion AI Resource Scheduler', href: '/zion-ai-resource-scheduler' },
      { name: 'Zion Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'Zion AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'Zion AI Talent Sourcing', href: '/zion-ai-talent-sourcing' },
      { name: 'Zion AI Supplier Risk', href: '/zion-ai-supplier-risk' },
      { name: 'Zion AI Feedback Summarizer', href: '/zion-ai-feedback-summarizer' },
      { name: 'Zion AI Intent Classifier', href: '/zion-ai-intent-classifier' },
      { name: 'Zion AI Contact Center Analytics', href: '/zion-ai-contact-center-analytics' },
      { name: 'Zion AI Quote Generator', href: '/zion-ai-quote-generator' },
      { name: 'Zion AI Territory Planner', href: '/zion-ai-territory-planner' },
      { name: 'Zion AI Talent Analytics', href: '/zion-ai-talent-analytics' },
      { name: 'Zion AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'Zion Ai Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'Zion AI Data Governance', href: '/zion-ai-data-governance' },
      { name: 'Zion AI Asset Intelligence', href: '/zion-ai-asset-intelligence' },
      { name: 'Zion AI Compliance Checker', href: '/zion-ai-compliance-checker' },
      { name: 'Zion AI Field Service Manager', href: '/zion-ai-field-service-manager' },
      { name: 'Zion AI Procurement Automation', href: '/zion-ai-procurement-automation' },
      { name: 'Zion AI Translation Service', href: '/zion-ai-translation-service' },
      { name: 'Zion AI Approval Workflow', href: '/zion-ai-approval-workflow' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'Zion AI Demand Forecasting', href: '/zion-ai-demand-forecasting' },
      { name: 'Zion Security Shield', href: '/zion-security-shield' },
      { name: 'Zion AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker' },
      { name: 'Zion AI Supply Visibility', href: '/zion-ai-supply-visibility' },
      { name: 'Zion Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'Zion AI Schedule Optimizer', href: '/zion-ai-schedule-optimizer' },
      { name: 'Zion AI Accessibility Checker', href: '/zion-ai-accessibility-checker' },
      { name: 'Zion AI Document Classifier', href: '/zion-ai-document-classifier' },
      { name: 'Zion AI Approval Automation', href: '/zion-ai-approval-automation' },
      { name: 'Zion AI Supplier Portal', href: '/zion-ai-supplier-portal' },
      { name: 'Zion Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Zion AI Fraud Detection', href: '/zion-ai-fraud-detection' },
      { name: 'Zion AI Capacity Planner', href: '/zion-ai-capacity-planner' },
      { name: 'Zion AI Legal Research', href: '/zion-ai-legal-research' },
      { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'Zion AI Backup Optimizer', href: '/zion-ai-backup-optimizer' },
      { name: 'Zion AI Knowledge Management', href: '/zion-ai-knowledge-management' },
      { name: 'Zion AI Route Optimizer', href: '/zion-ai-route-optimizer' },
      { name: 'Zion AI Cyber Threat Intel', href: '/zion-ai-cyber-threat-intel' },
      { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Zion AI Spend Intelligence', href: '/zion-ai-spend-intelligence' },
      { name: 'Zion AI Compliance Reporting', href: '/zion-ai-compliance-reporting' },
      { name: 'Zion Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'Zion AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'Zion AI Inventory Planner', href: '/zion-ai-inventory-planner' },
      { name: 'Zion AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'Zion Chat AI', href: '/zion-chat-ai' },
      { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Zion AI Audit Automation', href: '/zion-ai-audit-automation' },
      { name: 'Zion AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'Zion AI Incident Response', href: '/zion-ai-incident-response' },
      { name: 'Zion Data Sync', href: '/zion-data-sync' },
      { name: 'Zion Ai Api Tester', href: '/zion-ai-api-tester' },
      { name: 'Zion AI Voice Synthesis', href: '/zion-ai-voice-synthesis' },
      { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'Zion AI Website Analyzer', href: '/zion-ai-website-analyzer' },
      { name: 'Zion AI Log Analytics', href: '/zion-ai-log-analytics' },
      { name: 'Zion AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'Zion Project Master', href: '/zion-project-master' },
      { name: 'Zion AI Order Intelligence', href: '/zion-ai-order-intelligence' },
      { name: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Zion AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'Zion AI Project Portfolio', href: '/zion-ai-project-portfolio' },
      { name: 'Zion AI Incident Predictor', href: '/zion-ai-incident-predictor' },
      { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation' },
      { name: 'Zion AI Workflow Orchestrator', href: '/zion-ai-workflow-orchestrator' },
      { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
      { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
      { name: 'Zion AI Talent Acquisition', href: '/zion-ai-talent-acquisition' },
      { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro' },
      { name: 'Zion AI Task Scheduler', href: '/zion-ai-task-scheduler' },
      { name: 'Zion AI Image Recognition', href: '/zion-ai-image-recognition' },
      { name: 'Zion AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'Zion AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'Zion AI Workflow Automator', href: '/zion-ai-workflow-automator' },
      { name: 'Zion AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'Zion AI Contract Lifecycle', href: '/zion-ai-contract-lifecycle' },
      { name: 'Zion AI Claims Automation', href: '/zion-ai-claims-automation' },
      { name: 'Zion DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Zion AI Workforce Analytics', href: '/zion-ai-workforce-analytics' },
      { name: 'Zion Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'Zion AI Cost Optimizer', href: '/zion-ai-cost-optimizer' },
      { name: 'Zion AI Maintenance Scheduler', href: '/zion-ai-maintenance-scheduler' },
      { name: 'Zion AI Document AI', href: '/zion-ai-document-ai' },
      { name: 'Zion AI Fleet Management', href: '/zion-ai-fleet-management' },
      { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
      { name: 'Zion AI Inventory Optimizer Pro', href: '/zion-ai-inventory-optimizer-pro' },
      { name: 'Zion AI Sentiment Analyzer', href: '/zion-ai-sentiment-analyzer' },
      { name: 'Zion AI Vendor Manager', href: '/zion-ai-vendor-manager' },
      { name: 'Zion AI Vendor Risk Analytics', href: '/zion-ai-vendor-risk-analytics' },
      { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
      { name: 'Zion Content Studio', href: '/zion-content-studio' },
      { name: 'Zion AI Notification Hub', href: '/zion-ai-notification-hub' },
      { name: 'Zion AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
      { name: 'Zion AI Voice Assistant', href: '/zion-ai-voice-assistant' },
      { name: 'Zion Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor' },
      { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager' },
      { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'Zion IoT Solutions', href: '/zion-iot-solutions' },
      { name: 'Zion API Development', href: '/zion-api-development' },
      { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
      { name: 'Zion AI Social Scheduler Pro', href: '/zion-ai-social-scheduler-pro' },
      { name: 'Zion AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor' },
      { name: 'Zion Blockchain Solutions', href: '/zion-blockchain-solutions' },
      { name: 'Zion AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
      { name: 'Zion AI Lease Analyzer', href: '/zion-ai-lease-analyzer' },
      { name: 'Zion AI Employee Experience', href: '/zion-ai-employee-experience' },
      { name: 'Zion Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'Zion AI Quality Insights', href: '/zion-ai-quality-insights' },
      { name: 'Zion AI Autonomous Ops Hub', href: '/zion-ai-autonomous-ops-hub' },
      { name: 'Zion AI Chatbot Playground', href: '/zion-ai-chatbot-playground' },
      { name: 'Zion AI Code Sandbox', href: '/zion-ai-code-sandbox' },
      { name: 'Zion Ai Site Evolution Simulator', href: '/zion-ai-site-evolution-simulator' }],
  },
  {
    title: 'Engineering & DevOps',
    description: 'Increase software velocity, quality, and release confidence across teams.',
    icon: '🧠',
    links: [
      { name: 'AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'AI API Tester', href: '/zion-ai-api-tester' },
      { name: 'AI Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'AI Accessibility Checker', href: '/zion-ai-accessibility-checker' },
      { name: 'AI Website Analyzer', href: '/zion-ai-website-analyzer' },
      { name: 'DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'AI Incident Manager', href: '/zion-security-shield' },
      { name: 'AI Workflow Designer', href: '/zion-workflow-automation' },
      { name: 'Zion AI Workflow Automator', href: '/zion-ai-workflow-automator' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'Zion AI Risk Assessor', href: '/zion-ai-risk-assessor' },
    
      { name: 'Zion AI Image Recognition', href: '/zion-ai-image-recognition' },
      { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
      { name: 'Zion API Development', href: '/zion-api-development' },
      { name: 'Zion AI Brand Monitor', href: '/zion-ai-brand-monitor' },
      { name: 'Zion AI Sentiment Analyzer', href: '/zion-ai-sentiment-analyzer' },
      { name: 'Zion Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'Zion AI Compliance Checker', href: '/zion-ai-compliance-checker' },
      { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'Zion AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro' },
      { name: 'Zion AI Talent Acquisition', href: '/zion-ai-talent-acquisition' },
      { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'Zion AI Cyber Threat Intel', href: '/zion-ai-cyber-threat-intel' },
      { name: 'Zion AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
      { name: 'Zion AI Customer Feedback', href: '/zion-ai-customer-feedback' },
      { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Zion AI Procurement Automation', href: '/zion-ai-procurement-automation' },
      { name: 'Zion AI Order Intelligence', href: '/zion-ai-order-intelligence' },
      { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor' },
      { name: 'Zion AI Vendor Risk Analytics', href: '/zion-ai-vendor-risk-analytics' },
      { name: 'Zion AI Talent Sourcing', href: '/zion-ai-talent-sourcing' },
      { name: 'Zion AI Help Desk Analytics', href: '/zion-ai-help-desk-analytics' },
      { name: 'Zion AI Inventory Planner', href: '/zion-ai-inventory-planner' },
      { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation' },
      { name: 'Zion AI Customer Churn Predictor Pro', href: '/zion-ai-customer-churn-predictor-pro' },
      { name: 'Zion AI Task Scheduler', href: '/zion-ai-task-scheduler' },
      { name: 'Zion AI Asset Intelligence', href: '/zion-ai-asset-intelligence' },
      { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
      { name: 'Zion AI Demand Forecasting', href: '/zion-ai-demand-forecasting' },
      { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'Zion AI Quality Insights', href: '/zion-ai-quality-insights' },
      { name: 'Zion AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'Zion AI Legal Research', href: '/zion-ai-legal-research' },
      { name: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Zion AI Notification Hub', href: '/zion-ai-notification-hub' },
      { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
      { name: 'Zion Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
      { name: 'Zion AI Cost Optimizer', href: '/zion-ai-cost-optimizer' },
      { name: 'Zion AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'Zion AI Log Analytics', href: '/zion-ai-log-analytics' },
      { name: 'Zion AI Voice Assistant', href: '/zion-ai-voice-assistant' },
      { name: 'Zion AI Workflow Orchestrator', href: '/zion-ai-workflow-orchestrator' },
      { name: 'Zion AI Inventory Optimizer Pro', href: '/zion-ai-inventory-optimizer-pro' },
      { name: 'Zion AI Customer 360', href: '/zion-ai-customer-360' },
      { name: 'Zion AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'Zion AI Incident Response', href: '/zion-ai-incident-response' },
      { name: 'Zion AI Compliance Reporting', href: '/zion-ai-compliance-reporting' },
      { name: 'Zion AI Lease Analyzer', href: '/zion-ai-lease-analyzer' },
      { name: 'Zion AI Campaign Optimizer', href: '/zion-ai-campaign-optimizer' },
      { name: 'Zion AI Quote Generator', href: '/zion-ai-quote-generator' },
      { name: 'Zion AI Capacity Planner', href: '/zion-ai-capacity-planner' },
      { name: 'Zion AI Contact Center Analytics', href: '/zion-ai-contact-center-analytics' },
      { name: 'Zion AI Price Optimizer', href: '/zion-ai-price-optimizer' },
      { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro' },
      { name: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
      { name: 'Zion IoT Solutions', href: '/zion-iot-solutions' },
      { name: 'Zion AI Maintenance Scheduler', href: '/zion-ai-maintenance-scheduler' },
      { name: 'Zion AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'Zion AI Revenue Forecaster', href: '/zion-ai-revenue-forecaster' },
      { name: 'Zion AI Pricing Optimizer', href: '/zion-ai-pricing-optimizer' },
      { name: 'Zion AI Translation Service', href: '/zion-ai-translation-service' },
      { name: 'Zion AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
      { name: 'Zion Project Master', href: '/zion-project-master' },
      { name: 'Zion AI Resource Scheduler', href: '/zion-ai-resource-scheduler' },
      { name: 'Zion AI Competitive Intelligence', href: '/zion-ai-competitive-intelligence' },
      { name: 'Zion AI Field Service Manager', href: '/zion-ai-field-service-manager' },
      { name: 'Zion AI Feedback Summarizer', href: '/zion-ai-feedback-summarizer' },
      { name: 'Zion AI Document Classifier', href: '/zion-ai-document-classifier' },
      { name: 'Zion AI Document AI', href: '/zion-ai-document-ai' },
      { name: 'Zion AI Audit Automation', href: '/zion-ai-audit-automation' },
      { name: 'Zion AI Fraud Detection', href: '/zion-ai-fraud-detection' },
      { name: 'Zion AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'Zion AI Help Desk', href: '/zion-ai-help-desk' },
      { name: 'Zion AI Approval Automation', href: '/zion-ai-approval-automation' },
      { name: 'Zion AI Approval Workflow', href: '/zion-ai-approval-workflow' },
      { name: 'Zion AI Deal Pipeline', href: '/zion-ai-deal-pipeline' },
      { name: 'Zion AI Backup Optimizer', href: '/zion-ai-backup-optimizer' },
      { name: 'Zion AI Market Intelligence', href: '/zion-ai-market-intelligence' },
      { name: 'Zion AI Incident Management', href: '/zion-ai-incident-management' },
      { name: 'Zion AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'Zion Social Scheduler', href: '/zion-social-scheduler' },
      { name: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor' },
      { name: 'Zion AI Workforce Analytics', href: '/zion-ai-workforce-analytics' },
      { name: 'Zion AI Chatbot Analytics', href: '/zion-ai-chatbot-analytics' },
      { name: 'Zion AI Vendor Manager', href: '/zion-ai-vendor-manager' },
      { name: 'Zion Data Sync', href: '/zion-data-sync' },
      { name: 'Zion AI Claims Automation', href: '/zion-ai-claims-automation' },
      { name: 'Zion AI Employee Experience', href: '/zion-ai-employee-experience' },
      { name: 'Zion AI Incident Predictor', href: '/zion-ai-incident-predictor' },
      { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Zion AI Deal Desk', href: '/zion-ai-deal-desk' },
      { name: 'Zion AI Supplier Portal', href: '/zion-ai-supplier-portal' },
      { name: 'Zion AI Supplier Risk', href: '/zion-ai-supplier-risk' },
      { name: 'Zion AI Voice Synthesis', href: '/zion-ai-voice-synthesis' },
      { name: 'Zion AI Sales Assistant', href: '/zion-ai-sales-assistant' },
      { name: 'Zion AI Contract Lifecycle', href: '/zion-ai-contract-lifecycle' },
      { name: 'Zion AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
      { name: 'Zion AI Form Builder', href: '/zion-ai-form-builder' },
      { name: 'Zion AI Social Scheduler Pro', href: '/zion-ai-social-scheduler-pro' },
      { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Zion AI Talent Analytics', href: '/zion-ai-talent-analytics' },
      { name: 'Zion Content Studio', href: '/zion-content-studio' },
      { name: 'Zion Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Zion AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
      { name: 'Zion AI Conversation Analytics', href: '/zion-ai-conversation-analytics' },
      { name: 'Zion AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker' },
      { name: 'Zion Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'Zion AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Zion AI Customer Success', href: '/zion-ai-customer-success' },
      { name: 'Zion AI Route Optimizer', href: '/zion-ai-route-optimizer' },
      { name: 'Zion Customer Insights', href: '/zion-customer-insights' },
      { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
      { name: 'Zion AI Data Governance', href: '/zion-ai-data-governance' },
      { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Zion AI Territory Planner', href: '/zion-ai-territory-planner' },
      { name: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'Zion AI Schedule Optimizer', href: '/zion-ai-schedule-optimizer' },
      { name: 'Zion AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'Zion AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'Zion AI Knowledge Management', href: '/zion-ai-knowledge-management' },
      { name: 'Zion AI Pricing Intelligence', href: '/zion-ai-pricing-intelligence' },
      { name: 'Zion Blockchain Solutions', href: '/zion-blockchain-solutions' },
      { name: 'Zion AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'Zion AI Spend Intelligence', href: '/zion-ai-spend-intelligence' },
      { name: 'Zion AI Lead Enrichment', href: '/zion-ai-lead-enrichment' },
      { name: 'Zion AI Intent Classifier', href: '/zion-ai-intent-classifier' },
      { name: 'Zion Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor' },
      { name: 'Zion AI Project Portfolio', href: '/zion-ai-project-portfolio' },
      { name: 'Zion AI Fleet Management', href: '/zion-ai-fleet-management' },
      { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager' },
      { name: 'Zion Chat AI', href: '/zion-chat-ai' },
      { name: 'Zion AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'Zion Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'Zion Email Automation', href: '/zion-email-automation' },
      { name: 'Zion AI Supply Visibility', href: '/zion-ai-supply-visibility' },
      { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'Zion AI Autonomous Ops Hub', href: '/zion-ai-autonomous-ops-hub' },
      { name: 'Zion AI Chatbot Playground', href: '/zion-ai-chatbot-playground' },
      { name: 'Zion AI Code Sandbox', href: '/zion-ai-code-sandbox' },
      { name: 'Zion Ai Site Evolution Simulator', href: '/zion-ai-site-evolution-simulator' }],
  },
  {
    title: 'Security & Infrastructure',
    description: 'Protect operations and harden delivery with security-first architecture.',
    icon: '🛡️',
    links: [
      { name: 'Security Shield', href: '/zion-security-shield' },
      { name: 'Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Data Sync', href: '/zion-data-sync' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'AI Translation Service', href: '/zion-ai-translation-service' },
      { name: 'Zion AI Incident Response', href: '/zion-ai-incident-response' },
    
      { name: 'Zion AI Cyber Threat Intel', href: '/zion-ai-cyber-threat-intel' },
      { name: 'Zion AI Chatbot Analytics', href: '/zion-ai-chatbot-analytics' },
      { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'Zion AI Pricing Optimizer', href: '/zion-ai-pricing-optimizer' },
      { name: 'Zion AI Brand Monitor', href: '/zion-ai-brand-monitor' },
      { name: 'Zion AI Project Portfolio', href: '/zion-ai-project-portfolio' },
      { name: 'Zion AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'Zion AI Contract Lifecycle', href: '/zion-ai-contract-lifecycle' },
      { name: 'Zion Email Automation', href: '/zion-email-automation' },
      { name: 'Zion Social Scheduler', href: '/zion-social-scheduler' },
      { name: 'Zion AI Inventory Planner', href: '/zion-ai-inventory-planner' },
      { name: 'Zion AI Employee Experience', href: '/zion-ai-employee-experience' },
      { name: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
      { name: 'Zion AI Market Intelligence', href: '/zion-ai-market-intelligence' },
      { name: 'Zion AI Compliance Checker', href: '/zion-ai-compliance-checker' },
      { name: 'Zion AI Log Analytics', href: '/zion-ai-log-analytics' },
      { name: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Zion AI Fraud Detection', href: '/zion-ai-fraud-detection' },
      { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Zion AI Image Recognition', href: '/zion-ai-image-recognition' },
      { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
      { name: 'Zion AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'Zion AI Incident Management', href: '/zion-ai-incident-management' },
      { name: 'Zion AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager' },
      { name: 'Zion AI Backup Optimizer', href: '/zion-ai-backup-optimizer' },
      { name: 'Zion AI Approval Workflow', href: '/zion-ai-approval-workflow' },
      { name: 'Zion AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'Zion AI Customer Success', href: '/zion-ai-customer-success' },
      { name: 'Zion AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker' },
      { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'Zion AI Claims Automation', href: '/zion-ai-claims-automation' },
      { name: 'Zion AI Campaign Optimizer', href: '/zion-ai-campaign-optimizer' },
      { name: 'Zion AI Document AI', href: '/zion-ai-document-ai' },
      { name: 'Zion Ai Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'Zion DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Zion AI Inventory Optimizer Pro', href: '/zion-ai-inventory-optimizer-pro' },
      { name: 'Zion Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'Zion AI Deal Pipeline', href: '/zion-ai-deal-pipeline' },
      { name: 'Zion AI Asset Intelligence', href: '/zion-ai-asset-intelligence' },
      { name: 'Zion AI Conversation Analytics', href: '/zion-ai-conversation-analytics' },
      { name: 'Zion AI Talent Acquisition', href: '/zion-ai-talent-acquisition' },
      { name: 'Zion AI Pricing Intelligence', href: '/zion-ai-pricing-intelligence' },
      { name: 'Zion AI Field Service Manager', href: '/zion-ai-field-service-manager' },
      { name: 'Zion Chat AI', href: '/zion-chat-ai' },
      { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'Zion AI Deal Desk', href: '/zion-ai-deal-desk' },
      { name: 'Zion AI Workflow Automator', href: '/zion-ai-workflow-automator' },
      { name: 'Zion AI Customer 360', href: '/zion-ai-customer-360' },
      { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation' },
      { name: 'Zion AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'Zion AI Form Builder', href: '/zion-ai-form-builder' },
      { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'Zion AI Incident Predictor', href: '/zion-ai-incident-predictor' },
      { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'Zion AI Quality Insights', href: '/zion-ai-quality-insights' },
      { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Zion AI Voice Assistant', href: '/zion-ai-voice-assistant' },
      { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
      { name: 'Zion AI Revenue Forecaster', href: '/zion-ai-revenue-forecaster' },
      { name: 'Zion AI Supply Visibility', href: '/zion-ai-supply-visibility' },
      { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Zion AI Help Desk', href: '/zion-ai-help-desk' },
      { name: 'Zion AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'Zion AI Procurement Automation', href: '/zion-ai-procurement-automation' },
      { name: 'Zion AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
      { name: 'Zion AI Voice Synthesis', href: '/zion-ai-voice-synthesis' },
      { name: 'Zion AI Data Governance', href: '/zion-ai-data-governance' },
      { name: 'Zion AI Workforce Analytics', href: '/zion-ai-workforce-analytics' },
      { name: 'Zion AI Legal Research', href: '/zion-ai-legal-research' },
      { name: 'Zion AI Maintenance Scheduler', href: '/zion-ai-maintenance-scheduler' },
      { name: 'Zion AI Sales Assistant', href: '/zion-ai-sales-assistant' },
      { name: 'Zion AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'Zion AI Feedback Summarizer', href: '/zion-ai-feedback-summarizer' },
      { name: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'Zion AI Capacity Planner', href: '/zion-ai-capacity-planner' },
      { name: 'Zion AI Vendor Manager', href: '/zion-ai-vendor-manager' },
      { name: 'Zion AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Zion AI Contact Center Analytics', href: '/zion-ai-contact-center-analytics' },
      { name: 'Zion AI Task Scheduler', href: '/zion-ai-task-scheduler' },
      { name: 'Zion AI Social Scheduler Pro', href: '/zion-ai-social-scheduler-pro' },
      { name: 'Zion API Development', href: '/zion-api-development' },
      { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'Zion AI Resource Scheduler', href: '/zion-ai-resource-scheduler' },
      { name: 'Zion Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Zion Blockchain Solutions', href: '/zion-blockchain-solutions' },
      { name: 'Zion AI Supplier Risk', href: '/zion-ai-supplier-risk' },
      { name: 'Zion AI Workflow Orchestrator', href: '/zion-ai-workflow-orchestrator' },
      { name: 'Zion AI Accessibility Checker', href: '/zion-ai-accessibility-checker' },
      { name: 'Zion Project Master', href: '/zion-project-master' },
      { name: 'Zion AI Notification Hub', href: '/zion-ai-notification-hub' },
      { name: 'Zion AI Help Desk Analytics', href: '/zion-ai-help-desk-analytics' },
      { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'Zion AI Website Analyzer', href: '/zion-ai-website-analyzer' },
      { name: 'Zion IoT Solutions', href: '/zion-iot-solutions' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'Zion AI Schedule Optimizer', href: '/zion-ai-schedule-optimizer' },
      { name: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor' },
      { name: 'Zion AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'Zion AI Talent Sourcing', href: '/zion-ai-talent-sourcing' },
      { name: 'Zion Ai Api Tester', href: '/zion-ai-api-tester' },
      { name: 'Zion AI Approval Automation', href: '/zion-ai-approval-automation' },
      { name: 'Zion AI Supplier Portal', href: '/zion-ai-supplier-portal' },
      { name: 'Zion AI Price Optimizer', href: '/zion-ai-price-optimizer' },
      { name: 'Zion Customer Insights', href: '/zion-customer-insights' },
      { name: 'Zion AI Fleet Management', href: '/zion-ai-fleet-management' },
      { name: 'Zion AI Lease Analyzer', href: '/zion-ai-lease-analyzer' },
      { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'Zion AI Demand Forecasting', href: '/zion-ai-demand-forecasting' },
      { name: 'Zion AI Spend Intelligence', href: '/zion-ai-spend-intelligence' },
      { name: 'Zion Content Studio', href: '/zion-content-studio' },
      { name: 'Zion AI Audit Automation', href: '/zion-ai-audit-automation' },
      { name: 'Zion Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor' },
      { name: 'Zion AI Customer Feedback', href: '/zion-ai-customer-feedback' },
      { name: 'Zion AI Customer Churn Predictor Pro', href: '/zion-ai-customer-churn-predictor-pro' },
      { name: 'Zion AI Sentiment Analyzer', href: '/zion-ai-sentiment-analyzer' },
      { name: 'Zion AI Quote Generator', href: '/zion-ai-quote-generator' },
      { name: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'Zion AI Cost Optimizer', href: '/zion-ai-cost-optimizer' },
      { name: 'Zion AI Vendor Risk Analytics', href: '/zion-ai-vendor-risk-analytics' },
      { name: 'Zion AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
      { name: 'Zion AI Knowledge Management', href: '/zion-ai-knowledge-management' },
      { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
      { name: 'Zion AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'Zion AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
      { name: 'Zion Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
      { name: 'Zion AI Competitive Intelligence', href: '/zion-ai-competitive-intelligence' },
      { name: 'Zion AI Intent Classifier', href: '/zion-ai-intent-classifier' },
      { name: 'Zion AI Talent Analytics', href: '/zion-ai-talent-analytics' },
      { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro' },
      { name: 'Zion AI Territory Planner', href: '/zion-ai-territory-planner' },
      { name: 'Zion AI Order Intelligence', href: '/zion-ai-order-intelligence' },
      { name: 'Zion AI Document Classifier', href: '/zion-ai-document-classifier' },
      { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor' },
      { name: 'Zion AI Lead Enrichment', href: '/zion-ai-lead-enrichment' },
      { name: 'Zion AI Route Optimizer', href: '/zion-ai-route-optimizer' },
      { name: 'Zion AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'Zion AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
      { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro' },
      { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
      { name: 'Zion AI Compliance Reporting', href: '/zion-ai-compliance-reporting' },
      { name: 'Zion Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'Zion AI Code Sandbox', href: '/zion-ai-code-sandbox' },
      { name: 'Zion AI Chatbot Playground', href: '/zion-ai-chatbot-playground' },
      { name: 'Zion AI Autonomous Ops Hub', href: '/zion-ai-autonomous-ops-hub' },
      { name: 'Zion Ai Site Evolution Simulator', href: '/zion-ai-site-evolution-simulator' }],
  },
  {
    title: 'Operations & Automation',
    description: 'Streamline documents, meetings, and CRM handoffs with always-on AI workflows.',
    icon: '⚙️',
    links: [
      { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Document AI', href: '/zion-ai-document-ai' },
      { name: 'AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'AI Voice Assistant', href: '/zion-ai-voice-assistant' },
      { name: 'AI Voice Synthesis', href: '/zion-ai-voice-synthesis' },
      { name: 'AI Notification Hub', href: '/zion-ai-notification-hub' },
      { name: 'AI Talent Analytics', href: '/zion-ai-talent-analytics' },
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'Project Master', href: '/zion-project-master' },
      { name: 'Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'Zion AI Field Service Manager', href: '/zion-ai-field-service-manager' },
      { name: 'Zion AI Demand Forecasting', href: '/zion-ai-demand-forecasting' },
      { name: 'Zion AI Supply Visibility', href: '/zion-ai-supply-visibility' },
    
      { name: 'Zion AI Workforce Analytics', href: '/zion-ai-workforce-analytics' },
      { name: 'Zion AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'Zion AI Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'Zion AI Help Desk', href: '/zion-ai-help-desk' },
      { name: 'Zion AI Workflow Orchestrator', href: '/zion-ai-workflow-orchestrator' },
      { name: 'Zion AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'Zion AI Procurement Automation', href: '/zion-ai-procurement-automation' },
      { name: 'Zion AI Quality Insights', href: '/zion-ai-quality-insights' },
      { name: 'Zion AI Capacity Planner', href: '/zion-ai-capacity-planner' },
      { name: 'Zion AI Inventory Planner', href: '/zion-ai-inventory-planner' },
      { name: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
      { name: 'Zion AI Cost Optimizer', href: '/zion-ai-cost-optimizer' },
      { name: 'Zion AI Vendor Risk Analytics', href: '/zion-ai-vendor-risk-analytics' },
      { name: 'Zion AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'Zion AI Contract Lifecycle', href: '/zion-ai-contract-lifecycle' },
      { name: 'Zion AI Resource Scheduler', href: '/zion-ai-resource-scheduler' },
      { name: 'Zion AI Talent Acquisition', href: '/zion-ai-talent-acquisition' },
      { name: 'Zion AI Project Portfolio', href: '/zion-ai-project-portfolio' },
      { name: 'Zion AI Fleet Management', href: '/zion-ai-fleet-management' },
      { name: 'Zion Ai Api Tester', href: '/zion-ai-api-tester' },
      { name: 'Zion AI Employee Experience', href: '/zion-ai-employee-experience' },
      { name: 'Zion AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'Zion AI Sentiment Analyzer', href: '/zion-ai-sentiment-analyzer' },
      { name: 'Zion AI Approval Workflow', href: '/zion-ai-approval-workflow' },
      { name: 'Zion AI Incident Predictor', href: '/zion-ai-incident-predictor' },
      { name: 'Zion AI Talent Sourcing', href: '/zion-ai-talent-sourcing' },
      { name: 'Zion AI Vendor Manager', href: '/zion-ai-vendor-manager' },
      { name: 'Zion AI Claims Automation', href: '/zion-ai-claims-automation' },
      { name: 'Zion AI Lease Analyzer', href: '/zion-ai-lease-analyzer' },
      { name: 'Zion AI Supplier Portal', href: '/zion-ai-supplier-portal' },
      { name: 'Zion AI Spend Intelligence', href: '/zion-ai-spend-intelligence' },
      { name: 'Zion AI Schedule Optimizer', href: '/zion-ai-schedule-optimizer' },
      { name: 'Zion AI Route Optimizer', href: '/zion-ai-route-optimizer' },
      { name: 'Zion AI Order Intelligence', href: '/zion-ai-order-intelligence' },
      { name: 'Zion AI Maintenance Scheduler', href: '/zion-ai-maintenance-scheduler' },
      { name: 'Zion AI Supplier Risk', href: '/zion-ai-supplier-risk' },
      { name: 'Zion AI Incident Management', href: '/zion-ai-incident-management' },
      { name: 'Zion AI Approval Automation', href: '/zion-ai-approval-automation' },
      { name: 'Zion AI Revenue Forecaster', href: '/zion-ai-revenue-forecaster' },
      { name: 'Zion AI Brand Monitor', href: '/zion-ai-brand-monitor' },
      { name: 'Zion AI Chatbot Analytics', href: '/zion-ai-chatbot-analytics' },
      { name: 'Zion AI Asset Intelligence', href: '/zion-ai-asset-intelligence' },
      { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager' },
      { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'Zion AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'Zion AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'Zion AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro' },
      { name: 'Zion AI Pricing Intelligence', href: '/zion-ai-pricing-intelligence' },
      { name: 'Zion AI Market Intelligence', href: '/zion-ai-market-intelligence' },
      { name: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
      { name: 'Zion AI Accessibility Checker', href: '/zion-ai-accessibility-checker' },
      { name: 'Zion AI Compliance Checker', href: '/zion-ai-compliance-checker' },
      { name: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'Zion AI Competitive Intelligence', href: '/zion-ai-competitive-intelligence' },
      { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
      { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'Zion AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
      { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation' },
      { name: 'Zion Social Scheduler', href: '/zion-social-scheduler' },
      { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'Zion AI Website Analyzer', href: '/zion-ai-website-analyzer' },
      { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'Zion AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Zion IoT Solutions', href: '/zion-iot-solutions' },
      { name: 'Zion AI Campaign Optimizer', href: '/zion-ai-campaign-optimizer' },
      { name: 'Zion AI Backup Optimizer', href: '/zion-ai-backup-optimizer' },
      { name: 'Zion AI Document Classifier', href: '/zion-ai-document-classifier' },
      { name: 'Zion AI Compliance Reporting', href: '/zion-ai-compliance-reporting' },
      { name: 'Zion AI Form Builder', href: '/zion-ai-form-builder' },
      { name: 'Zion AI Log Analytics', href: '/zion-ai-log-analytics' },
      { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
      { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'Zion AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker' },
      { name: 'Zion AI Customer 360', href: '/zion-ai-customer-360' },
      { name: 'Zion AI Pricing Optimizer', href: '/zion-ai-pricing-optimizer' },
      { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
      { name: 'Zion AI Contact Center Analytics', href: '/zion-ai-contact-center-analytics' },
      { name: 'Zion AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'Zion AI Lead Enrichment', href: '/zion-ai-lead-enrichment' },
      { name: 'Zion AI Incident Response', href: '/zion-ai-incident-response' },
      { name: 'Zion AI Price Optimizer', href: '/zion-ai-price-optimizer' },
      { name: 'Zion AI Conversation Analytics', href: '/zion-ai-conversation-analytics' },
      { name: 'Zion Data Sync', href: '/zion-data-sync' },
      { name: 'Zion AI Image Recognition', href: '/zion-ai-image-recognition' },
      { name: 'Zion AI Translation Service', href: '/zion-ai-translation-service' },
      { name: 'Zion Chat AI', href: '/zion-chat-ai' },
      { name: 'Zion Email Automation', href: '/zion-email-automation' },
      { name: 'Zion AI Quote Generator', href: '/zion-ai-quote-generator' },
      { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Zion AI Feedback Summarizer', href: '/zion-ai-feedback-summarizer' },
      { name: 'Zion AI Audit Automation', href: '/zion-ai-audit-automation' },
      { name: 'Zion AI Inventory Optimizer Pro', href: '/zion-ai-inventory-optimizer-pro' },
      { name: 'Zion API Development', href: '/zion-api-development' },
      { name: 'Zion DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Zion AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
      { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
      { name: 'Zion Customer Insights', href: '/zion-customer-insights' },
      { name: 'Zion AI Customer Feedback', href: '/zion-ai-customer-feedback' },
      { name: 'Zion Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'Zion Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor' },
      { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro' },
      { name: 'Zion Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor' },
      { name: 'Zion AI Customer Churn Predictor Pro', href: '/zion-ai-customer-churn-predictor-pro' },
      { name: 'Zion AI Cyber Threat Intel', href: '/zion-ai-cyber-threat-intel' },
      { name: 'Zion AI Knowledge Management', href: '/zion-ai-knowledge-management' },
      { name: 'Zion AI Legal Research', href: '/zion-ai-legal-research' },
      { name: 'Zion AI Territory Planner', href: '/zion-ai-territory-planner' },
      { name: 'Zion AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'Zion AI Intent Classifier', href: '/zion-ai-intent-classifier' },
      { name: 'Zion AI Help Desk Analytics', href: '/zion-ai-help-desk-analytics' },
      { name: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor' },
      { name: 'Zion AI Deal Pipeline', href: '/zion-ai-deal-pipeline' },
      { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Zion AI Workflow Automator', href: '/zion-ai-workflow-automator' },
      { name: 'Zion AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'Zion Blockchain Solutions', href: '/zion-blockchain-solutions' },
      { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Zion AI Deal Desk', href: '/zion-ai-deal-desk' },
      { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'Zion AI Social Scheduler Pro', href: '/zion-ai-social-scheduler-pro' },
      { name: 'Zion AI Fraud Detection', href: '/zion-ai-fraud-detection' },
      { name: 'Zion AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
      { name: 'Zion AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'Zion AI Task Scheduler', href: '/zion-ai-task-scheduler' },
      { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
      { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'Zion Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'Zion Security Shield', href: '/zion-security-shield' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'Zion AI Data Governance', href: '/zion-ai-data-governance' },
      { name: 'Zion AI Customer Success', href: '/zion-ai-customer-success' },
      { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'Zion AI Sales Assistant', href: '/zion-ai-sales-assistant' },
      { name: 'Zion AI Code Sandbox', href: '/zion-ai-code-sandbox' },
      { name: 'Zion AI Chatbot Playground', href: '/zion-ai-chatbot-playground' },
      { name: 'Zion Ai Site Evolution Simulator', href: '/zion-ai-site-evolution-simulator' }],
  },
  {
    title: 'Finance & Risk',
    description: 'Improve financial predictability and reduce risk with AI-first controls.',
    icon: '💳',
    links: [
      { name: 'AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'Zion AI Compliance Checker', href: '/zion-ai-compliance-checker' },
      { name: 'Zion AI Data Governance', href: '/zion-ai-data-governance' },
      { name: 'Zion AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker' },
    
      { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'Zion AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
      { name: 'Zion AI Image Recognition', href: '/zion-ai-image-recognition' },
      { name: 'Zion Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'Zion AI Brand Monitor', href: '/zion-ai-brand-monitor' },
      { name: 'Zion AI Vendor Risk Analytics', href: '/zion-ai-vendor-risk-analytics' },
      { name: 'Zion AI Fraud Detection', href: '/zion-ai-fraud-detection' },
      { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation' },
      { name: 'Zion AI Capacity Planner', href: '/zion-ai-capacity-planner' },
      { name: 'Zion Ai Api Tester', href: '/zion-ai-api-tester' },
      { name: 'Zion AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'Zion AI Contract Lifecycle', href: '/zion-ai-contract-lifecycle' },
      { name: 'Zion AI Cost Optimizer', href: '/zion-ai-cost-optimizer' },
      { name: 'Zion AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
      { name: 'Zion AI Customer Churn Predictor Pro', href: '/zion-ai-customer-churn-predictor-pro' },
      { name: 'Zion AI Help Desk', href: '/zion-ai-help-desk' },
      { name: 'Zion AI Audit Automation', href: '/zion-ai-audit-automation' },
      { name: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'Zion Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Zion AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Zion AI Claims Automation', href: '/zion-ai-claims-automation' },
      { name: 'Zion AI Translation Service', href: '/zion-ai-translation-service' },
      { name: 'Zion AI Legal Research', href: '/zion-ai-legal-research' },
      { name: 'Zion AI Compliance Reporting', href: '/zion-ai-compliance-reporting' },
      { name: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor' },
      { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
      { name: 'Zion AI Deal Desk', href: '/zion-ai-deal-desk' },
      { name: 'Zion AI Customer Feedback', href: '/zion-ai-customer-feedback' },
      { name: 'Zion Content Studio', href: '/zion-content-studio' },
      { name: 'Zion AI Price Optimizer', href: '/zion-ai-price-optimizer' },
      { name: 'Zion AI Sales Assistant', href: '/zion-ai-sales-assistant' },
      { name: 'Zion AI Log Analytics', href: '/zion-ai-log-analytics' },
      { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager' },
      { name: 'Zion AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'Zion AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'Zion AI Conversation Analytics', href: '/zion-ai-conversation-analytics' },
      { name: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Zion AI Accessibility Checker', href: '/zion-ai-accessibility-checker' },
      { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro' },
      { name: 'Zion AI Field Service Manager', href: '/zion-ai-field-service-manager' },
      { name: 'Zion Social Scheduler', href: '/zion-social-scheduler' },
      { name: 'Zion AI Incident Management', href: '/zion-ai-incident-management' },
      { name: 'Zion IoT Solutions', href: '/zion-iot-solutions' },
      { name: 'Zion DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Zion AI Route Optimizer', href: '/zion-ai-route-optimizer' },
      { name: 'Zion AI Voice Assistant', href: '/zion-ai-voice-assistant' },
      { name: 'Zion AI Spend Intelligence', href: '/zion-ai-spend-intelligence' },
      { name: 'Zion AI Vendor Manager', href: '/zion-ai-vendor-manager' },
      { name: 'Zion AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'Zion AI Quality Insights', href: '/zion-ai-quality-insights' },
      { name: 'Zion AI Schedule Optimizer', href: '/zion-ai-schedule-optimizer' },
      { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'Zion AI Campaign Optimizer', href: '/zion-ai-campaign-optimizer' },
      { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
      { name: 'Zion Blockchain Solutions', href: '/zion-blockchain-solutions' },
      { name: 'Zion AI Approval Automation', href: '/zion-ai-approval-automation' },
      { name: 'Zion AI Help Desk Analytics', href: '/zion-ai-help-desk-analytics' },
      { name: 'Zion AI Project Portfolio', href: '/zion-ai-project-portfolio' },
      { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
      { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
      { name: 'Zion AI Procurement Automation', href: '/zion-ai-procurement-automation' },
      { name: 'Zion AI Approval Workflow', href: '/zion-ai-approval-workflow' },
      { name: 'Zion AI Contact Center Analytics', href: '/zion-ai-contact-center-analytics' },
      { name: 'Zion AI Competitive Intelligence', href: '/zion-ai-competitive-intelligence' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'Zion AI Employee Experience', href: '/zion-ai-employee-experience' },
      { name: 'Zion AI Document AI', href: '/zion-ai-document-ai' },
      { name: 'Zion AI Inventory Planner', href: '/zion-ai-inventory-planner' },
      { name: 'Zion AI Incident Response', href: '/zion-ai-incident-response' },
      { name: 'Zion AI Voice Synthesis', href: '/zion-ai-voice-synthesis' },
      { name: 'Zion AI Asset Intelligence', href: '/zion-ai-asset-intelligence' },
      { name: 'Zion AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'Zion AI Document Classifier', href: '/zion-ai-document-classifier' },
      { name: 'Zion AI Website Analyzer', href: '/zion-ai-website-analyzer' },
      { name: 'Zion AI Social Scheduler Pro', href: '/zion-ai-social-scheduler-pro' },
      { name: 'Zion AI Resource Scheduler', href: '/zion-ai-resource-scheduler' },
      { name: 'Zion Customer Insights', href: '/zion-customer-insights' },
      { name: 'Zion AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'Zion AI Supply Visibility', href: '/zion-ai-supply-visibility' },
      { name: 'Zion AI Quote Generator', href: '/zion-ai-quote-generator' },
      { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Zion AI Sentiment Analyzer', href: '/zion-ai-sentiment-analyzer' },
      { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'Zion AI Chatbot Analytics', href: '/zion-ai-chatbot-analytics' },
      { name: 'Zion AI Cyber Threat Intel', href: '/zion-ai-cyber-threat-intel' },
      { name: 'Zion Ai Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
      { name: 'Zion AI Supplier Risk', href: '/zion-ai-supplier-risk' },
      { name: 'Zion AI Lease Analyzer', href: '/zion-ai-lease-analyzer' },
      { name: 'Zion AI Customer Success', href: '/zion-ai-customer-success' },
      { name: 'Zion AI Maintenance Scheduler', href: '/zion-ai-maintenance-scheduler' },
      { name: 'Zion AI Talent Analytics', href: '/zion-ai-talent-analytics' },
      { name: 'Zion AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
      { name: 'Zion Project Master', href: '/zion-project-master' },
      { name: 'Zion AI Revenue Forecaster', href: '/zion-ai-revenue-forecaster' },
      { name: 'Zion AI Talent Acquisition', href: '/zion-ai-talent-acquisition' },
      { name: 'Zion AI Intent Classifier', href: '/zion-ai-intent-classifier' },
      { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Zion AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'Zion AI Lead Enrichment', href: '/zion-ai-lead-enrichment' },
      { name: 'Zion API Development', href: '/zion-api-development' },
      { name: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
      { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'Zion AI Order Intelligence', href: '/zion-ai-order-intelligence' },
      { name: 'Zion AI Territory Planner', href: '/zion-ai-territory-planner' },
      { name: 'Zion Email Automation', href: '/zion-email-automation' },
      { name: 'Zion AI Deal Pipeline', href: '/zion-ai-deal-pipeline' },
      { name: 'Zion AI Incident Predictor', href: '/zion-ai-incident-predictor' },
      { name: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor' },
      { name: 'Zion AI Inventory Optimizer Pro', href: '/zion-ai-inventory-optimizer-pro' },
      { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Zion AI Form Builder', href: '/zion-ai-form-builder' },
      { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
      { name: 'Zion Data Sync', href: '/zion-data-sync' },
      { name: 'Zion Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor' },
      { name: 'Zion AI Workflow Automator', href: '/zion-ai-workflow-automator' },
      { name: 'Zion AI Supplier Portal', href: '/zion-ai-supplier-portal' },
      { name: 'Zion AI Talent Sourcing', href: '/zion-ai-talent-sourcing' },
      { name: 'Zion AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'Zion AI Backup Optimizer', href: '/zion-ai-backup-optimizer' },
      { name: 'Zion AI Feedback Summarizer', href: '/zion-ai-feedback-summarizer' },
      { name: 'Zion Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'Zion Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'Zion AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'Zion AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'Zion AI Pricing Intelligence', href: '/zion-ai-pricing-intelligence' },
      { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro' },
      { name: 'Zion AI Customer 360', href: '/zion-ai-customer-360' },
      { name: 'Zion AI Knowledge Management', href: '/zion-ai-knowledge-management' },
      { name: 'Zion Security Shield', href: '/zion-security-shield' },
      { name: 'Zion AI Demand Forecasting', href: '/zion-ai-demand-forecasting' },
      { name: 'Zion AI Task Scheduler', href: '/zion-ai-task-scheduler' },
      { name: 'Zion AI Market Intelligence', href: '/zion-ai-market-intelligence' },
      { name: 'Zion AI Workflow Orchestrator', href: '/zion-ai-workflow-orchestrator' },
      { name: 'Zion AI Fleet Management', href: '/zion-ai-fleet-management' },
      { name: 'Zion AI Pricing Optimizer', href: '/zion-ai-pricing-optimizer' },
      { name: 'Zion AI Notification Hub', href: '/zion-ai-notification-hub' },
      { name: 'Zion AI Workforce Analytics', href: '/zion-ai-workforce-analytics' },
      { name: 'Zion Chat AI', href: '/zion-chat-ai' },
      { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'Zion AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'Zion AI Autonomous Ops Hub', href: '/zion-ai-autonomous-ops-hub' },
      { name: 'Zion AI Chatbot Playground', href: '/zion-ai-chatbot-playground' },
      { name: 'Zion AI Code Sandbox', href: '/zion-ai-code-sandbox' },
      { name: 'Zion Ai Site Evolution Simulator', href: '/zion-ai-site-evolution-simulator' }],
  },
  {
    title: 'Productivity & Content',
    description: 'Create, translate, and distribute content at scale with AI-assisted workflows.',
    icon: '✨',
    links: [
      { name: 'AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'AI Image Recognition', href: '/zion-ai-image-recognition' },
      { name: 'AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'AI Video Editor', href: '/zion-ai-video-editor' },
      { name: 'AI Translation Service', href: '/zion-ai-translation-service' },
      { name: 'AI Translator Pro', href: '/zion-ai-translator-pro' },
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'AI Sentiment Analyzer', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'Zion AI Talent Analytics', href: '/zion-ai-talent-analytics' },
      { name: 'Zion AI Sentiment Analyzer', href: '/zion-ai-sentiment-analyzer' },
    
      { name: 'Zion AI Knowledge Management', href: '/zion-ai-knowledge-management' },
      { name: 'Zion AI Document Classifier', href: '/zion-ai-document-classifier' },
      { name: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
      { name: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'Zion AI Customer Feedback', href: '/zion-ai-customer-feedback' },
      { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
      { name: 'Zion AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'Zion AI Demand Forecasting', href: '/zion-ai-demand-forecasting' },
      { name: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Zion AI Schedule Optimizer', href: '/zion-ai-schedule-optimizer' },
      { name: 'Zion AI Employee Experience', href: '/zion-ai-employee-experience' },
      { name: 'Zion AI Workflow Automator', href: '/zion-ai-workflow-automator' },
      { name: 'Zion AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'Zion Email Automation', href: '/zion-email-automation' },
      { name: 'Zion AI Quality Insights', href: '/zion-ai-quality-insights' },
      { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'Zion Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'Zion AI Customer Churn Predictor Pro', href: '/zion-ai-customer-churn-predictor-pro' },
      { name: 'Zion AI Sales Assistant', href: '/zion-ai-sales-assistant' },
      { name: 'Zion AI Spend Intelligence', href: '/zion-ai-spend-intelligence' },
      { name: 'Zion Data Sync', href: '/zion-data-sync' },
      { name: 'Zion AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
      { name: 'Zion AI Chatbot Analytics', href: '/zion-ai-chatbot-analytics' },
      { name: 'Zion AI Customer 360', href: '/zion-ai-customer-360' },
      { name: 'Zion AI Approval Automation', href: '/zion-ai-approval-automation' },
      { name: 'Zion AI Pricing Optimizer', href: '/zion-ai-pricing-optimizer' },
      { name: 'Zion Chat AI', href: '/zion-chat-ai' },
      { name: 'Zion AI Asset Intelligence', href: '/zion-ai-asset-intelligence' },
      { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
      { name: 'Zion AI Compliance Reporting', href: '/zion-ai-compliance-reporting' },
      { name: 'Zion AI Backup Optimizer', href: '/zion-ai-backup-optimizer' },
      { name: 'Zion AI Inventory Planner', href: '/zion-ai-inventory-planner' },
      { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'Zion AI Fraud Detection', href: '/zion-ai-fraud-detection' },
      { name: 'Zion AI Document AI', href: '/zion-ai-document-ai' },
      { name: 'Zion AI Order Intelligence', href: '/zion-ai-order-intelligence' },
      { name: 'Zion AI Customer Success', href: '/zion-ai-customer-success' },
      { name: 'Zion AI Cost Optimizer', href: '/zion-ai-cost-optimizer' },
      { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'Zion AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'Zion AI Form Builder', href: '/zion-ai-form-builder' },
      { name: 'Zion AI Price Optimizer', href: '/zion-ai-price-optimizer' },
      { name: 'Zion Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'Zion AI Voice Synthesis', href: '/zion-ai-voice-synthesis' },
      { name: 'Zion Ai Api Tester', href: '/zion-ai-api-tester' },
      { name: 'Zion AI Contract Lifecycle', href: '/zion-ai-contract-lifecycle' },
      { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Zion AI Workforce Analytics', href: '/zion-ai-workforce-analytics' },
      { name: 'Zion AI Revenue Forecaster', href: '/zion-ai-revenue-forecaster' },
      { name: 'Zion Ai Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'Zion AI Supplier Risk', href: '/zion-ai-supplier-risk' },
      { name: 'Zion AI Talent Acquisition', href: '/zion-ai-talent-acquisition' },
      { name: 'Zion AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
      { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'Zion AI Accessibility Checker', href: '/zion-ai-accessibility-checker' },
      { name: 'Zion AI Intent Classifier', href: '/zion-ai-intent-classifier' },
      { name: 'Zion Security Shield', href: '/zion-security-shield' },
      { name: 'Zion AI Help Desk Analytics', href: '/zion-ai-help-desk-analytics' },
      { name: 'Zion AI Incident Management', href: '/zion-ai-incident-management' },
      { name: 'Zion AI Voice Assistant', href: '/zion-ai-voice-assistant' },
      { name: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor' },
      { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation' },
      { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'Zion AI Log Analytics', href: '/zion-ai-log-analytics' },
      { name: 'Zion AI Compliance Checker', href: '/zion-ai-compliance-checker' },
      { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Zion AI Capacity Planner', href: '/zion-ai-capacity-planner' },
      { name: 'Zion AI Claims Automation', href: '/zion-ai-claims-automation' },
      { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Zion Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Zion AI Supply Visibility', href: '/zion-ai-supply-visibility' },
      { name: 'Zion AI Social Scheduler Pro', href: '/zion-ai-social-scheduler-pro' },
      { name: 'Zion AI Brand Monitor', href: '/zion-ai-brand-monitor' },
      { name: 'Zion AI Conversation Analytics', href: '/zion-ai-conversation-analytics' },
      { name: 'Zion DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'Zion AI Deal Desk', href: '/zion-ai-deal-desk' },
      { name: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
      { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro' },
      { name: 'Zion AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'Zion AI Vendor Risk Analytics', href: '/zion-ai-vendor-risk-analytics' },
      { name: 'Zion AI Workflow Orchestrator', href: '/zion-ai-workflow-orchestrator' },
      { name: 'Zion AI Contact Center Analytics', href: '/zion-ai-contact-center-analytics' },
      { name: 'Zion Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor' },
      { name: 'Zion AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Zion AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
      { name: 'Zion AI Cyber Threat Intel', href: '/zion-ai-cyber-threat-intel' },
      { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'Zion AI Campaign Optimizer', href: '/zion-ai-campaign-optimizer' },
      { name: 'Zion AI Audit Automation', href: '/zion-ai-audit-automation' },
      { name: 'Zion AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'Zion Social Scheduler', href: '/zion-social-scheduler' },
      { name: 'Zion AI Talent Sourcing', href: '/zion-ai-talent-sourcing' },
      { name: 'Zion AI Quote Generator', href: '/zion-ai-quote-generator' },
      { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Zion AI Feedback Summarizer', href: '/zion-ai-feedback-summarizer' },
      { name: 'Zion AI Approval Workflow', href: '/zion-ai-approval-workflow' },
      { name: 'Zion AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker' },
      { name: 'Zion AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'Zion AI Data Governance', href: '/zion-ai-data-governance' },
      { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
      { name: 'Zion AI Task Scheduler', href: '/zion-ai-task-scheduler' },
      { name: 'Zion AI Project Portfolio', href: '/zion-ai-project-portfolio' },
      { name: 'Zion Project Master', href: '/zion-project-master' },
      { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager' },
      { name: 'Zion Customer Insights', href: '/zion-customer-insights' },
      { name: 'Zion AI Lease Analyzer', href: '/zion-ai-lease-analyzer' },
      { name: 'Zion AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'Zion AI Deal Pipeline', href: '/zion-ai-deal-pipeline' },
      { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
      { name: 'Zion AI Procurement Automation', href: '/zion-ai-procurement-automation' },
      { name: 'Zion Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'Zion AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'Zion AI Route Optimizer', href: '/zion-ai-route-optimizer' },
      { name: 'Zion AI Incident Predictor', href: '/zion-ai-incident-predictor' },
      { name: 'Zion AI Help Desk', href: '/zion-ai-help-desk' },
      { name: 'Zion API Development', href: '/zion-api-development' },
      { name: 'Zion AI Pricing Intelligence', href: '/zion-ai-pricing-intelligence' },
      { name: 'Zion AI Supplier Portal', href: '/zion-ai-supplier-portal' },
      { name: 'Zion AI Territory Planner', href: '/zion-ai-territory-planner' },
      { name: 'Zion AI Field Service Manager', href: '/zion-ai-field-service-manager' },
      { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
      { name: 'Zion IoT Solutions', href: '/zion-iot-solutions' },
      { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'Zion AI Lead Enrichment', href: '/zion-ai-lead-enrichment' },
      { name: 'Zion AI Inventory Optimizer Pro', href: '/zion-ai-inventory-optimizer-pro' },
      { name: 'Zion AI Incident Response', href: '/zion-ai-incident-response' },
      { name: 'Zion Blockchain Solutions', href: '/zion-blockchain-solutions' },
      { name: 'Zion AI Fleet Management', href: '/zion-ai-fleet-management' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'Zion AI Legal Research', href: '/zion-ai-legal-research' },
      { name: 'Zion AI Vendor Manager', href: '/zion-ai-vendor-manager' },
      { name: 'Zion AI Notification Hub', href: '/zion-ai-notification-hub' },
      { name: 'Zion Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'Zion Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'Zion AI Competitive Intelligence', href: '/zion-ai-competitive-intelligence' },
      { name: 'Zion AI Market Intelligence', href: '/zion-ai-market-intelligence' },
      { name: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'Zion AI Maintenance Scheduler', href: '/zion-ai-maintenance-scheduler' },
      { name: 'Zion AI Website Analyzer', href: '/zion-ai-website-analyzer' },
      { name: 'Zion AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'Zion AI Resource Scheduler', href: '/zion-ai-resource-scheduler' },
      { name: 'Zion AI Code Sandbox', href: '/zion-ai-code-sandbox' },
      { name: 'Zion AI Chatbot Playground', href: '/zion-ai-chatbot-playground' },
      { name: 'Zion AI Autonomous Ops Hub', href: '/zion-ai-autonomous-ops-hub' },
      { name: 'Zion Ai Site Evolution Simulator', href: '/zion-ai-site-evolution-simulator' }],
  },
  {
    title: 'Supply Chain & Manufacturing',
    description: 'Optimize production, logistics, and maintenance with AI-driven operations.',
    icon: '🏭',
    links: [
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'AI Energy Manager', href: '/zion-ai-energy-manager' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
      { name: 'AI Inventory Optimizer Pro', href: '/zion-ai-inventory-optimizer-pro' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' },
      { name: 'Zion AI Task Scheduler', href: '/zion-ai-task-scheduler' },
      { name: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor' },
      { name: 'Zion AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
    
      { name: 'Zion AI Chatbot Analytics', href: '/zion-ai-chatbot-analytics' },
      { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro' },
      { name: 'Zion AI Brand Monitor', href: '/zion-ai-brand-monitor' },
      { name: 'Zion AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager' },
      { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner' },
      { name: 'Zion AI Pricing Optimizer', href: '/zion-ai-pricing-optimizer' },
      { name: 'Zion Cybersecurity Audit', href: '/zion-cybersecurity-audit' },
      { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
      { name: 'Zion Ai Database Optimizer', href: '/zion-ai-database-optimizer' },
      { name: 'Zion AI Notification Hub', href: '/zion-ai-notification-hub' },
      { name: 'Zion AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'Zion AI Revenue Forecaster', href: '/zion-ai-revenue-forecaster' },
      { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
      { name: 'Zion AI Translation Service', href: '/zion-ai-translation-service' },
      { name: 'Zion AI Capacity Planner', href: '/zion-ai-capacity-planner' },
      { name: 'Zion AI Route Optimizer', href: '/zion-ai-route-optimizer' },
      { name: 'Zion Chat AI', href: '/zion-chat-ai' },
      { name: 'Zion AI Log Analytics', href: '/zion-ai-log-analytics' },
      { name: 'Zion AI Quality Insights', href: '/zion-ai-quality-insights' },
      { name: 'Zion AI Voice Synthesis', href: '/zion-ai-voice-synthesis' },
      { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'Zion AI Market Intelligence', href: '/zion-ai-market-intelligence' },
      { name: 'Zion AI Compliance Checker', href: '/zion-ai-compliance-checker' },
      { name: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'Zion AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Zion AI Approval Automation', href: '/zion-ai-approval-automation' },
      { name: 'Zion AI Deal Pipeline', href: '/zion-ai-deal-pipeline' },
      { name: 'Zion AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'Zion AI Inventory Planner', href: '/zion-ai-inventory-planner' },
      { name: 'Zion AI Accessibility Checker', href: '/zion-ai-accessibility-checker' },
      { name: 'Zion AI Help Desk Analytics', href: '/zion-ai-help-desk-analytics' },
      { name: 'Zion AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'Zion AI Employee Experience', href: '/zion-ai-employee-experience' },
      { name: 'Zion AI Customer Success', href: '/zion-ai-customer-success' },
      { name: 'Zion AI Form Builder', href: '/zion-ai-form-builder' },
      { name: 'Zion AI Price Optimizer', href: '/zion-ai-price-optimizer' },
      { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Zion AI Claims Automation', href: '/zion-ai-claims-automation' },
      { name: 'Zion AI Incident Management', href: '/zion-ai-incident-management' },
      { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor' },
      { name: 'Zion AI Campaign Optimizer', href: '/zion-ai-campaign-optimizer' },
      { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
      { name: 'Zion AI CRM Optimizer', href: '/zion-ai-crm-optimizer' },
      { name: 'Zion AI Demand Forecasting', href: '/zion-ai-demand-forecasting' },
      { name: 'Zion AI Approval Workflow', href: '/zion-ai-approval-workflow' },
      { name: 'Zion Ai Api Tester', href: '/zion-ai-api-tester' },
      { name: 'Zion AI Lease Analyzer', href: '/zion-ai-lease-analyzer' },
      { name: 'Zion Customer Insights', href: '/zion-customer-insights' },
      { name: 'Zion AI Contract Lifecycle', href: '/zion-ai-contract-lifecycle' },
      { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'Zion AI Workforce Analytics', href: '/zion-ai-workforce-analytics' },
      { name: 'Zion AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
      { name: 'Zion AI Conversation Analytics', href: '/zion-ai-conversation-analytics' },
      { name: 'Zion Smart CRM Automation', href: '/zion-smart-crm-automation' },
      { name: 'Zion API Development', href: '/zion-api-development' },
      { name: 'Zion AI Field Service Manager', href: '/zion-ai-field-service-manager' },
      { name: 'Zion AI Asset Intelligence', href: '/zion-ai-asset-intelligence' },
      { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'Zion AI Supplier Portal', href: '/zion-ai-supplier-portal' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart' },
      { name: 'Zion Project Master', href: '/zion-project-master' },
      { name: 'Zion Security Shield', href: '/zion-security-shield' },
      { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
      { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
      { name: 'Zion AI Cyber Threat Intel', href: '/zion-ai-cyber-threat-intel' },
      { name: 'Zion AI Lead Enrichment', href: '/zion-ai-lead-enrichment' },
      { name: 'Zion AI Contact Center Analytics', href: '/zion-ai-contact-center-analytics' },
      { name: 'Zion AI Deal Desk', href: '/zion-ai-deal-desk' },
      { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Zion AI Backup Optimizer', href: '/zion-ai-backup-optimizer' },
      { name: 'Zion AI Data Governance', href: '/zion-ai-data-governance' },
      { name: 'Zion AI Document AI', href: '/zion-ai-document-ai' },
      { name: 'Zion AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
      { name: 'Zion AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker' },
      { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
      { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant' },
      { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'Zion AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'Zion AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'Zion AI Competitive Intelligence', href: '/zion-ai-competitive-intelligence' },
      { name: 'Zion AI Supply Visibility', href: '/zion-ai-supply-visibility' },
      { name: 'Zion AI Customer Feedback', href: '/zion-ai-customer-feedback' },
      { name: 'Zion AI Help Desk', href: '/zion-ai-help-desk' },
      { name: 'Zion AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
      { name: 'Zion AI Quote Generator', href: '/zion-ai-quote-generator' },
      { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'Zion Blockchain Solutions', href: '/zion-blockchain-solutions' },
      { name: 'Zion Email Automation', href: '/zion-email-automation' },
      { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation' },
      { name: 'Zion IoT Solutions', href: '/zion-iot-solutions' },
      { name: 'Zion AI Procurement Automation', href: '/zion-ai-procurement-automation' },
      { name: 'Zion AI Vendor Manager', href: '/zion-ai-vendor-manager' },
      { name: 'Zion Data Sync', href: '/zion-data-sync' },
      { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
      { name: 'Zion AI Audit Automation', href: '/zion-ai-audit-automation' },
      { name: 'Zion AI Workflow Automator', href: '/zion-ai-workflow-automator' },
      { name: 'Zion AI Project Portfolio', href: '/zion-ai-project-portfolio' },
      { name: 'Zion AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'Zion AI Customer Churn Predictor Pro', href: '/zion-ai-customer-churn-predictor-pro' },
      { name: 'Zion AI Fleet Management', href: '/zion-ai-fleet-management' },
      { name: 'Zion AI Feedback Summarizer', href: '/zion-ai-feedback-summarizer' },
      { name: 'Zion AI Order Intelligence', href: '/zion-ai-order-intelligence' },
      { name: 'Zion AI Schedule Optimizer', href: '/zion-ai-schedule-optimizer' },
      { name: 'Zion AI Territory Planner', href: '/zion-ai-territory-planner' },
      { name: 'Zion AI Customer 360', href: '/zion-ai-customer-360' },
      { name: 'Zion AI Website Analyzer', href: '/zion-ai-website-analyzer' },
      { name: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro' },
      { name: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Zion AI Cost Optimizer', href: '/zion-ai-cost-optimizer' },
      { name: 'Zion AI Incident Response', href: '/zion-ai-incident-response' },
      { name: 'Zion AI Document Classifier', href: '/zion-ai-document-classifier' },
      { name: 'Zion Smart Expense Tracker', href: '/zion-smart-expense-tracker' },
      { name: 'Zion AI Legal Research', href: '/zion-ai-legal-research' },
      { name: 'Zion AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'Zion Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'Zion Customer Satisfaction Monitor', href: '/zion-customer-satisfaction-monitor' },
      { name: 'Zion AI Incident Predictor', href: '/zion-ai-incident-predictor' },
      { name: 'Zion AI Sentiment Analyzer', href: '/zion-ai-sentiment-analyzer' },
      { name: 'Zion AI Image Recognition', href: '/zion-ai-image-recognition' },
      { name: 'Zion AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'Zion AI Vendor Risk Analytics', href: '/zion-ai-vendor-risk-analytics' },
      { name: 'Zion AI Fraud Detection', href: '/zion-ai-fraud-detection' },
      { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
      { name: 'Zion AI Compliance Reporting', href: '/zion-ai-compliance-reporting' },
      { name: 'Zion AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
      { name: 'Zion AI Workflow Orchestrator', href: '/zion-ai-workflow-orchestrator' },
      { name: 'Zion AI Maintenance Scheduler', href: '/zion-ai-maintenance-scheduler' },
      { name: 'Zion Social Scheduler', href: '/zion-social-scheduler' },
      { name: 'Zion AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'Zion AI Pricing Intelligence', href: '/zion-ai-pricing-intelligence' },
      { name: 'Zion AI Resource Scheduler', href: '/zion-ai-resource-scheduler' },
      { name: 'Zion AI Talent Sourcing', href: '/zion-ai-talent-sourcing' },
      { name: 'Zion AI Supplier Risk', href: '/zion-ai-supplier-risk' },
      { name: 'Zion AI Voice Assistant', href: '/zion-ai-voice-assistant' },
      { name: 'Zion DevOps Automation', href: '/zion-devops-automation' },
      { name: 'Zion Content Studio', href: '/zion-content-studio' },
      { name: 'Zion AI Talent Acquisition', href: '/zion-ai-talent-acquisition' },
      { name: 'Zion Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'Zion AI Spend Intelligence', href: '/zion-ai-spend-intelligence' },
      { name: 'Zion AI Social Scheduler Pro', href: '/zion-ai-social-scheduler-pro' },
      { name: 'Zion AI Sales Assistant', href: '/zion-ai-sales-assistant' },
      { name: 'Zion AI Knowledge Management', href: '/zion-ai-knowledge-management' },
      { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
      { name: 'Zion AI Intent Classifier', href: '/zion-ai-intent-classifier' },
      { name: 'Zion AI Talent Analytics', href: '/zion-ai-talent-analytics' },
      { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'Zion AI Code Sandbox', href: '/zion-ai-code-sandbox' },
      { name: 'Zion AI Chatbot Playground', href: '/zion-ai-chatbot-playground' },
      { name: 'Zion AI Autonomous Ops Hub', href: '/zion-ai-autonomous-ops-hub' },
      { name: 'Zion Ai Site Evolution Simulator', href: '/zion-ai-site-evolution-simulator' }],
  },
];

const platformPages: PlatformPageSpotlight[] = [
  {
    title: 'Generative AI Enterprise',
    href: '/ai-services/generative-ai-enterprise',
    description: 'Enterprise-scale generative AI with RAG, fine-tuning, and governed content generation.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Agents & Autonomous Workflows',
    href: '/ai-services/ai-agents-autonomous',
    description: 'Deploy autonomous AI agents that reason, plan, and execute multi-step tasks.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Multimodal Intelligence',
    href: '/ai-services/ai-multimodal-intelligence',
    description: 'Unified AI for text, video, images, and audio. Document-to-video pipelines and visual analysis.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI RAG & Knowledge Systems',
    href: '/ai-services/ai-rag-knowledge-systems',
    description: 'Ground AI in your knowledge bases with retrieval-augmented generation and source attribution.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Governance & Trust',
    href: '/ai-services/ai-governance-trust',
    description: 'Policy enforcement, bias monitoring, audit trails. EU AI Act and compliance-ready governance.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Model Orchestration',
    href: '/ai-services/ai-model-orchestration',
    description: 'Multi-model routing, fallback, and cost optimization across AI providers.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Copilot & Enterprise Assistants',
    href: '/ai-services/ai-copilot-enterprise',
    description: 'Context-aware AI copilots embedded in sales, support, and engineering tools.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Edge & Real-Time Inference',
    href: '/ai-services/ai-edge-realtime-inference',
    description: 'Low-latency inference at the edge for voice, video, and high-frequency systems.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI for Regulated Industries',
    href: '/ai-services/ai-regulated-industries',
    description: 'HIPAA, SOC 2, EU AI Act–ready AI for healthcare, finance, legal, and government.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Foundation Models & Custom Training',
    href: '/ai-services/ai-foundation-models-custom-training',
    description: 'Custom foundation model training, fine-tuning, and alignment with full data sovereignty.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Security & Responsible AI',
    href: '/ai-services/ai-security-responsible-ai',
    description: 'Adversarial robustness, prompt injection defense, fairness, and responsible deployment.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Strategy & Roadmap',
    href: '/ai-services/ai-strategy-roadmap',
    description: 'Discovery workshops, use-case prioritization, and phased roadmaps for production AI at scale.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Integration & APIs',
    href: '/ai-services/ai-integration-apis',
    description: 'Unified API layer, enterprise connectors, and event-driven pipelines for AI in your stack.',
    tag: 'Advanced AI',
  },
  {
    title: 'AI Services Hub',
    href: '/ai-services',
    description: 'Explore AI solutions for process automation, document processing, and intelligent workflows.',
    tag: 'Services',
  },
  {
    title: 'Zion AI Document AI',
    href: '/zion-ai-document-ai',
    description: 'Streamline document handling, task coordination, and process automation with smart extraction and validation.',
    tag: 'Product',
  },
  {
    title: 'Zion AI Voice Synthesis',
    href: '/zion-ai-voice-synthesis',
    description: 'Enhance communication with AI-powered voice synthesis, transcription, and intelligent translation across channels.',
    tag: 'Product',
  },
  {
    title: 'AI Process Automation',
    href: '/ai-services/process-automation',
    description: 'Automate repetitive workflows with AI-powered process orchestration and intelligent routing.',
    tag: 'AI Services',
  },
  {
    title: 'AI Energy Management',
    href: '/ai-services/energy-management',
    description: 'Optimize energy consumption and asset performance with AI-driven demand forecasting.',
    tag: 'AI Services',
  },
  {
    title: 'Micro SaaS Services Hub',
    href: '/micro-saas-services',
    description: 'Browse packaged micro-SaaS services and deployable product paths.',
    tag: 'Collection',
  },
  {
    title: 'Micro SaaS: AI Content Generator',
    href: '/micro-saas-services/ai-content-generator',
    description: 'Launch campaign-ready content workflows with reusable AI automation.',
    tag: 'Micro SaaS',
  },
  {
    title: 'Micro SaaS: AI Analytics Dashboard',
    href: '/micro-saas-services/ai-analytics-dashboard',
    description: 'Track marketing and operational outcomes in a lightweight dashboard package.',
    tag: 'Micro SaaS',
  },
  {
    title: 'Micro SaaS: AI Lead Generation',
    href: '/micro-saas-services/ai-lead-generation',
    description: 'Capture, qualify, and route leads faster with AI-assisted intake flows.',
    tag: 'Micro SaaS',
  },
  {
    title: 'Supply Chain Optimizer',
    href: '/supply-chain-optimizer',
    description: 'Improve fulfillment planning and reduce bottlenecks across supply workflows.',
    tag: 'Industry',
  },
  {
    title: 'Ecommerce Analytics Pro',
    href: '/ecommerce-analytics-pro',
    description: 'Understand conversion behavior and optimize storefront performance.',
    tag: 'Industry',
  },
  {
    title: 'Property Management AI',
    href: '/property-management-ai',
    description: 'Automate property operations, tenant communication, and reporting cycles.',
    tag: 'Industry',
  },
  {
    title: 'Medical Records Manager',
    href: '/medical-records-manager',
    description: 'Support secure records workflows with faster retrieval and organization.',
    tag: 'Industry',
  },
  {
    title: 'Legal Document Manager',
    href: '/legal-document-manager',
    description: 'Manage legal documentation workflows with centralized AI-assisted operations.',
    tag: 'Industry',
  },
  {
    title: 'Online Learning Platform',
    href: '/online-learning-platform',
    description: 'Scale digital training experiences with personalized content delivery.',
    tag: 'Industry',
  },
  {
    title: 'IT Services: Cybersecurity Audit',
    href: '/it-services/cybersecurity-audit',
    description: 'Explore security audit services tailored for operational resilience.',
    tag: 'IT Services',
  },
  {
    title: 'AI Recruiting Platform',
    href: '/zion-ai-recruitment-pro',
    description: 'Accelerate hiring with AI-assisted candidate screening and intelligent matching.',
    tag: 'Talent',
  },
  {
    title: 'AI Talent Analytics',
    href: '/zion-ai-talent-analytics',
    description: 'Track team performance, skill gaps, and retention with AI-powered insights.',
    tag: 'Talent',
  },
  {
    title: 'IT Services: Cloud Migration',
    href: '/it-services/cloud-migration',
    description: 'Plan and execute cloud migration with minimal disruption.',
    tag: 'IT Services',
  },
  {
    title: 'AI Services Hub',
    href: '/ai-services',
    description: 'Explore AI solutions for process automation, content generation, and business intelligence.',
    tag: 'AI Services',
  },
  {
    title: 'AI Content Generation',
    href: '/ai-services/content-generation',
    description: 'Scale content creation with AI-powered writing, imagery, and campaign workflows.',
    tag: 'AI Services',
  },
  {
    title: 'AI Business Intelligence',
    href: '/ai-services/business-intelligence',
    description: 'Turn data into actionable insights with AI-driven analytics and reporting.',
    tag: 'AI Services',
  },
  {
    title: 'AI Supply Chain',
    href: '/ai-services/supply-chain',
    description: 'Optimize logistics, procurement, and inventory with AI forecasting.',
    tag: 'AI Services',
  },
  {
    title: 'AI Predictive Maintenance',
    href: '/ai-services/predictive-maintenance',
    description: 'Reduce downtime with AI-powered equipment failure prediction.',
    tag: 'AI Services',
  },
  {
    title: 'Zion AI SEO Optimizer',
    href: '/zion-ai-seo-optimizer',
    description: 'Improve search rankings and visibility with AI-driven SEO optimization.',
    tag: 'Product',
  },
  {
    title: 'Cybersecurity Services',
    href: '/cybersecurity',
    description: 'End-to-end security audits, penetration testing, and compliance programs.',
    tag: 'IT Services',
  },
  {
    title: 'Data Analytics',
    href: '/data-analytics',
    description: 'Business intelligence, real-time dashboards, and predictive modeling.',
    tag: 'IT Services',
  },
  {
    title: 'Blockchain Development',
    href: '/blockchain-development',
    description: 'Smart contracts, dApps, and blockchain integration for enterprise trust.',
    tag: 'Web3',
  },
  {
    title: 'Workflow Automation',
    href: '/workflow-automation',
    description: 'Connect operational tasks across tools with event-driven workflow pipelines.',
    tag: 'Automation',
  },
  {
    title: 'AI Strategy Consulting',
    href: '/consultation',
    description: 'Align AI initiatives with business goals through expert strategy sessions.',
    tag: 'Consulting',
  },
  {
    title: 'Specialized Services',
    href: '/specialized-services',
    description: 'AI intelligence combined with practical engineering for real business challenges.',
    tag: 'Services',
  },
  {
    title: 'AI Document Processing',
    href: '/ai-services/document-processing',
    description: 'Extract, classify, and process documents at scale with AI-powered workflows.',
    tag: 'AI Services',
  },
  {
    title: 'AI Fraud Detection',
    href: '/ai-services/fraud-detection',
    description: 'Detect and prevent fraud with real-time AI monitoring and anomaly detection.',
    tag: 'AI Services',
  },
  {
    title: 'AI HR Analytics',
    href: '/ai-services/hr-analytics',
    description: 'Workforce insights, retention analytics, and talent pipeline optimization.',
    tag: 'AI Services',
  },
  {
    title: 'AI Marketing Automation',
    href: '/ai-services/marketing-automation',
    description: 'Scale campaign execution with AI-driven personalization and automation.',
    tag: 'AI Services',
  },
  {
    title: 'AI Customer Experience',
    href: '/ai-services/customer-experience',
    description: 'Enhance customer journeys with AI-powered support and engagement tools.',
    tag: 'AI Services',
  },
  {
    title: 'AI Quality Assurance',
    href: '/ai-services/quality-assurance',
    description: 'Automate testing, regression, and quality checks with AI-driven workflows.',
    tag: 'AI Services',
  },
  {
    title: 'AI Research & Development',
    href: '/ai-services/document-processing',
    description: 'Extract insights from research documents, patents, and trial data with AI analysis.',
    tag: 'AI Services',
  },
  {
    title: 'Mining & Resources Operations',
    href: '/solutions/mining-natural-resources',
    description: 'Optimize extraction workflows, predictive maintenance, and supply chain for natural resources.',
    tag: 'Industry',
  },
  {
    title: 'Telecommunications Solutions',
    href: '/solutions/telecommunications',
    description: 'Network optimization, predictive maintenance, and AI-powered customer support for telecom operators.',
    tag: 'Industry',
  },
  {
    title: 'Automotive & Mobility Operations',
    href: '/solutions/automotive-mobility',
    description: 'Supply chain, quality assurance, and fleet optimization for automotive and mobility companies.',
    tag: 'Industry',
  },
  {
    title: 'Aerospace & Defense Solutions',
    href: '/solutions/aerospace-defense',
    description: 'Secure documentation, compliance, and predictive maintenance for aerospace and defense operations.',
    tag: 'Industry',
  },
  {
    title: 'Maritime & Shipping Operations',
    href: '/solutions/maritime-shipping',
    description: 'Fleet optimization, port logistics, and cargo forecasting for maritime and shipping companies.',
    tag: 'Industry',
  },
  {
    title: 'Food & Beverage Solutions',
    href: '/solutions/food-beverage',
    description: 'Demand forecasting, inventory optimization, and compliance for food and beverage distributors.',
    tag: 'Industry',
  },
  {
    title: 'Oil & Gas Operations',
    href: '/solutions/oil-gas',
    description: 'Predictive maintenance, compliance automation, and asset optimization for oil and gas operations.',
    tag: 'Industry',
  },
  {
    title: 'Banking & Capital Markets Solutions',
    href: '/solutions/banking-and-capital-markets',
    description: 'Fraud detection, AML, risk assessment, and regulatory compliance for banking and capital markets.',
    tag: 'Industry',
  },
  {
    title: 'Environmental & Waste Management',
    href: '/solutions/environmental-waste-management',
    description: 'ESG reporting, emissions tracking, waste optimization, and sustainability compliance workflows.',
    tag: 'Industry',
  },
  {
    title: 'Gaming & Esports Solutions',
    href: '/solutions/gaming-esports',
    description: 'Content moderation, fraud detection, player analytics, and community management for gaming platforms.',
    tag: 'Industry',
  },
  {
    title: 'Renewable Energy & Cleantech',
    href: '/solutions/renewable-energy-cleantech',
    description: 'Grid optimization, asset forecasting, and sustainability reporting for renewable energy operations.',
    tag: 'Industry',
  },
  {
    title: 'Sports & Fitness Solutions',
    href: '/solutions/sports-fitness',
    description: 'Member engagement, retention analytics, and personalized recommendations for gyms and wellness platforms.',
    tag: 'Industry',
  },
  {
    title: 'Consumer Goods & CPG',
    href: '/solutions/consumer-goods-cpg',
    description: 'Demand forecasting, retail execution, and trade promotion analytics for consumer packaged goods.',
    tag: 'Industry',
  },
  {
    title: 'Transportation & Fleet Solutions',
    href: '/solutions/transportation-fleet',
    description: 'Route optimization, driver scheduling, predictive maintenance, and demand forecasting for fleet operations.',
    tag: 'Industry',
  },
  {
    title: 'Marketing & Advertising Solutions',
    href: '/zion-ai-marketing-automation',
    description: 'Campaign automation, creative analytics, ad spend optimization, and ROI measurement for marketing teams.',
    tag: 'Industry',
  },
  {
    title: 'Chemicals & Materials Solutions',
    href: '/solutions/chemicals-materials',
    description: 'Supply chain optimization, quality control, batch traceability, and sustainability compliance for chemical and materials manufacturers.',
    tag: 'Industry',
  },
  {
    title: 'Electronics & Semiconductors Solutions',
    href: '/solutions/electronics-semiconductors',
    description: 'Yield optimization, predictive maintenance, quality assurance, and supply chain visibility for electronics and semiconductor operations.',
    tag: 'Industry',
  },
  {
    title: 'Space & Satellite Solutions',
    href: '/solutions/space-satellite',
    description: 'Satellite health monitoring, ground station optimization, orbital analytics, and mission planning for space operations.',
    tag: 'Industry',
  },
  {
    title: 'Textiles & Apparel Solutions',
    href: '/solutions/textiles-apparel',
    description: 'Demand forecasting, raw material sourcing, inventory optimization, and sustainability compliance for textile and apparel manufacturers.',
    tag: 'Industry',
  },
  {
    title: 'Veterinary & Animal Health Solutions',
    href: '/solutions/veterinary-animal-health',
    description: 'Appointment scheduling, medical records, inventory management, and client communications for veterinary clinics.',
    tag: 'Industry',
  },
  {
    title: 'Home Services & Contractors Solutions',
    href: '/solutions/home-services-contractors',
    description: 'Route optimization, technician scheduling, job dispatching, and inventory for HVAC, plumbing, and home improvement contractors.',
    tag: 'Industry',
  },
  {
    title: 'Accounting & Tax Services Solutions',
    href: '/zion-ai-accounting-assistant',
    description: 'Document processing, bookkeeping automation, invoicing, and compliance workflows for accounting firms and tax preparers.',
    tag: 'Industry',
  },
  {
    title: 'Wholesale & Distribution Solutions',
    href: '/solutions/wholesale-distribution',
    description: 'Demand forecasting, warehouse optimization, order fulfillment, and B2B analytics for wholesalers and distributors.',
    tag: 'Industry',
  },
  {
    title: 'IT Services: Data Engineering',
    href: '/it-services/data-engineering',
    description: 'Build robust data pipelines, warehouses, and real-time streaming architectures at scale.',
    tag: 'IT Services',
  },
  {
    title: 'IT Services: API Development',
    href: '/it-services/api-development',
    description: 'Design and build high-performance APIs for system integration and digital products.',
    tag: 'IT Services',
  },
  {
    title: 'IT Services: Mobile Development',
    href: '/it-services/mobile-development',
    description: 'Cross-platform and native mobile apps with AI-powered features and offline support.',
    tag: 'IT Services',
  },
  {
    title: 'Asset Management & Investment Solutions',
    href: '/solutions/asset-management',
    description: 'Portfolio analytics, risk assessment, and compliance reporting for asset managers and wealth advisors.',
    tag: 'Industry',
  },
  {
    title: 'Restaurants & Food Service Solutions',
    href: '/solutions/restaurants-food-service',
    description: 'Demand forecasting, inventory optimization, and scheduling for restaurants and food service operations.',
    tag: 'Industry',
  },
  {
    title: 'Asset Management Solutions',
    href: '/solutions/asset-management',
    description: 'Discover AI tools tailored for asset lifecycle optimization and compliance.',
    tag: 'Industry',
  },
  {
    title: 'Beauty & Wellness AI Innovations',
    href: '/solutions/beauty-wellness',
    description: 'Explore AI-driven marketing, SEO, and customer engagement tools for the beauty sector.',
    tag: 'Industry',
  },
  {
    title: 'AI Services',
    href: '/ai-services',
    description: 'Custom AI development, integration, and support for your business.',
    tag: 'AI Services',
  },
  {
    title: 'Restaurants & Food Service',
    href: '/solutions/restaurants-food-service',
    description: 'Smart operations and customer experience automation for restaurants.',
    tag: 'Industry',
  },
  {
    title: 'Staffing & Recruiting',
    href: '/solutions/staffing-recruiting',
    description: 'Candidate sourcing, screening, and placement automation for staffing agencies.',
    tag: 'Industry',
  },
  {
    title: 'Facilities & Property Management',
    href: '/solutions/facilities-property-management',
    description: 'Maintenance scheduling and tenant services for commercial property portfolios.',
    tag: 'Industry',
  },
];

const valueHighlights: ValueHighlight[] = [
  {
    value: `${featuredApps.length}+`,
    label: 'Featured app routes',
    note: 'Verified links to active product pages',
  },
  {
    value: `${appCollections.length}`,
    label: 'Solution tracks',
    note: 'Cross-functional paths for growth, engineering, security, and operations',
  },
  {
    value: '48h',
    label: 'Typical discovery kickoff',
    note: 'Fast intake and roadmap alignment',
  },
  {
    value: 'Enterprise',
    label: 'Delivery readiness',
    note: 'Security-first architecture and support',
  },
];

const differentiationPoints: DifferentiationPoint[] = [
  {
    title: 'Operationally Grounded',
    description:
      'Every app and service page is mapped to practical business workflows, not generic demos.',
    icon: '🧭',
  },
  {
    title: 'Integration-Ready',
    description:
      'We design for existing systems, data pipelines, and team handoffs from day one.',
    icon: '🔌',
  },
  {
    title: 'Secure by Default',
    description:
      'Security, privacy, and compliance requirements are built into delivery planning and implementation.',
    icon: '🛡️',
  },
  {
    title: 'Outcome-Focused',
    description:
      'Roadmaps are prioritized around measurable gains in speed, quality, and operating cost.',
    icon: '📈',
  },
];

const strategicOutcomes = [
  'Faster go-live cycles with scoped pilots',
  'Lower execution risk through secure delivery patterns',
  'Clear KPI tracking from discovery to scale',
];

const deliverySteps: DeliveryStep[] = [
  {
    title: 'Discovery & Prioritization',
    description:
      'Map your goals, constraints, and current stack to a focused implementation plan.',
    duration: 'Week 1',
  },
  {
    title: 'Pilot Build',
    description:
      'Launch a scoped pilot with clear KPIs and stakeholder visibility across teams.',
    duration: 'Weeks 2-4',
  },
  {
    title: 'Production Hardening',
    description:
      'Implement observability, resilience, security controls, and operational runbooks.',
    duration: 'Weeks 5-8',
  },
  {
    title: 'Scale & Optimization',
    description:
      'Expand use cases, automate workflows, and continuously optimize business outcomes.',
    duration: 'Ongoing',
  },
];

const innovationBundles: InnovationBundle[] = [
  {
    title: 'Advanced AI Platform',
    description:
      'Enterprise generative AI, autonomous agents, RAG, multimodal intelligence, and AI copilots — with full governance, observability, strategy, and integration.',
    impact: 'Production AI at scale',
    href: '/ai-services',
    cta: 'Explore Advanced AI',
    icon: '🧠',
    modules: [
      { name: 'Generative AI Enterprise', href: '/ai-services/generative-ai-enterprise' },
      { name: 'AI Agents & Autonomous Workflows', href: '/ai-services/ai-agents-autonomous' },
      { name: 'AI RAG & Knowledge Systems', href: '/ai-services/ai-rag-knowledge-systems' },
      { name: 'AI Copilot & Enterprise Assistants', href: '/ai-services/ai-copilot-enterprise' },
      { name: 'AI Governance & Trust', href: '/ai-services/ai-governance-trust' },
      { name: 'AI Observability & MLOps', href: '/ai-services/ai-observability-mlops' },
      { name: 'AI Strategy & Roadmap', href: '/ai-services/ai-strategy-roadmap' },
      { name: 'AI Integration & APIs', href: '/ai-services/ai-integration-apis' },
    ],
  },
  {
    title: 'Customer Success Engine',
    description:
      'Unify onboarding, support, and feedback into one customer success platform that drives retention.',
    impact: 'Higher retention',
    href: '/zion-ai-onboarding-pro',
    cta: 'Launch success engine',
    icon: '🎯',
    modules: [
      { name: 'AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
      { name: 'AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
    ],
  },
  {
    title: 'Revenue Command Center',
    description:
      'Unify inbound capture, lead qualification, and outreach orchestration into one revenue engine.',
    impact: 'Faster qualified pipeline',
    href: '/zion-smart-crm-automation',
    cta: 'Launch revenue bundle',
    icon: '💼',
    modules: [
      { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
      { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
      { name: 'Smart CRM Automation', href: '/zion-smart-crm-automation' },
    ],
  },
  {
    title: 'Autonomous Operations Desk',
    description:
      'Turn documents, meetings, and team handoffs into structured automations with audit trails.',
    impact: 'Less manual back-office work',
    href: '/zion-workflow-automation',
    cta: 'Build ops desk',
    icon: '🧠',
    modules: [
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
    ],
  },
  {
    title: 'Compliance-Ready Delivery Pod',
    description:
      'Combine secure infrastructure with intelligent policy checks for high-trust enterprise rollouts.',
    impact: 'Reduced governance risk',
    href: '/zion-cybersecurity-audit',
    cta: 'Plan secure rollout',
    icon: '🔒',
    modules: [
      { name: 'Security Shield', href: '/zion-security-shield' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
      { name: 'Cloud Vault', href: '/zion-cloud-vault' },
    ],
  },
  {
    title: 'Talent & Operations Hub',
    description:
      'Unify recruitment, onboarding, and workforce analytics into one talent intelligence platform.',
    impact: 'Faster hiring, better retention',
    href: '/zion-ai-recruitment-pro',
    cta: 'Launch talent hub',
    icon: '👥',
    modules: [
      { name: 'AI Recruitment Pro', href: '/zion-ai-recruitment-pro' },
      { name: 'AI Onboarding Pro', href: '/zion-ai-onboarding-pro' },
      { name: 'AI Talent Analytics', href: '/zion-ai-talent-analytics' },
    ],
  },
  {
    title: 'Content & Marketing Engine',
    description:
      'Combine SEO, content creation, and campaign automation into one growth-focused marketing stack.',
    impact: 'Higher visibility, faster campaigns',
    href: '/zion-ai-seo-optimizer',
    cta: 'Launch marketing engine',
    icon: '📣',
    modules: [
      { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
    ],
  },
  {
    title: 'Supply Chain Intelligence',
    description:
      'Unify demand forecasting, inventory optimization, and predictive maintenance for end-to-end operations.',
    impact: 'Lower costs, fewer disruptions',
    href: '/zion-ai-supply-chain-optimizer',
    cta: 'Build supply chain AI',
    icon: '📦',
    modules: [
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
    ],
  },
  {
    title: 'Content & Creative Engine',
    description:
      'Produce campaign assets, translate content, and generate visuals at scale with AI creative pipelines.',
    impact: 'Faster content velocity',
    href: '/zion-content-studio',
    cta: 'Launch content engine',
    icon: '✨',
    modules: [
      { name: 'Content Studio', href: '/zion-content-studio' },
      { name: 'AI Image Generator', href: '/zion-ai-image-generator' },
      { name: 'AI Translation Service', href: '/zion-ai-translation-service' },
    ],
  },
  {
    title: 'Engineering Velocity Hub',
    description:
      'Accelerate development cycles with AI-assisted coding, automated reviews, and deployment pipelines.',
    impact: 'Faster ship cycles',
    href: '/zion-ai-code-assistant',
    cta: 'Launch engineering hub',
    icon: '⚡',
    modules: [
      { name: 'AI Code Assistant', href: '/zion-ai-code-assistant' },
      { name: 'AI Code Reviewer', href: '/zion-ai-code-reviewer' },
      { name: 'DevOps Automation', href: '/zion-devops-automation' },
    ],
  },
  {
    title: 'Data & Analytics Engine',
    description:
      'Unify data pipelines, visualization, and predictive analytics into one decision intelligence platform.',
    impact: 'Smarter data-driven decisions',
    href: '/zion-ai-data-visualizer',
    cta: 'Launch analytics engine',
    icon: '📊',
    modules: [
      { name: 'AI Data Visualizer', href: '/zion-ai-data-visualizer' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
      { name: 'AI Data Cleaner', href: '/zion-ai-data-cleaner' },
      { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
    ],
  },
  {
    title: 'AI Operations Hub',
    description:
      'Unify document processing, meeting capture, and workflow automation into one back-office intelligence platform.',
    impact: 'Less manual ops work',
    href: '/zion-ai-document-processor',
    cta: 'Launch ops hub',
    icon: '📋',
    modules: [
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
      { name: 'Workflow Automation', href: '/zion-workflow-automation' },
    ],
  },
  {
    title: 'Finance & Risk Intelligence',
    description:
      'Unify financial forecasting, fraud detection, and risk assessment into one enterprise-grade finance platform.',
    impact: 'Smarter risk decisions',
    href: '/zion-ai-financial-forecaster',
    cta: 'Launch finance bundle',
    icon: '💹',
    modules: [
      { name: 'AI Financial Forecaster', href: '/zion-ai-financial-forecaster' },
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Risk Assessor', href: '/zion-ai-risk-assessor' },
    ],
  },
  {
    title: 'Research & Development Hub',
    description:
      'Unify document analysis, knowledge extraction, and report generation into one R&D intelligence platform.',
    impact: 'Faster research cycles',
    href: '/zion-ai-document-analyzer',
    cta: 'Launch R&D hub',
    icon: '🔬',
    modules: [
      { name: 'AI Document Analyzer', href: '/zion-ai-document-analyzer' },
      { name: 'AI Knowledge Base', href: '/zion-ai-knowledge-base' },
      { name: 'AI Report Generator', href: '/zion-ai-report-generator' },
    ],
  },
  {
    title: 'Smart Fleet & Operations Hub',
    description:
      'Unify supply chain optimization, predictive maintenance, and inventory management for logistics and asset-intensive operations.',
    impact: 'Fewer outages, lower costs',
    href: '/zion-ai-supply-chain-optimizer',
    cta: 'Launch fleet hub',
    icon: '🚚',
    modules: [
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
    ],
  },
  {
    title: 'Sustainability & ESG Intelligence',
    description:
      'Unify ESG reporting, compliance tracking, and data pipelines into one sustainability intelligence platform.',
    impact: 'Transparent ESG reporting',
    href: '/zion-ai-report-generator',
    cta: 'Launch ESG bundle',
    icon: '🌱',
    modules: [
      { name: 'AI Report Generator', href: '/zion-ai-report-generator' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
    ],
  },
  {
    title: 'AI Customer Intelligence Hub',
    description:
      'Unify sentiment analysis, chatbot insights, and customer analytics into one customer intelligence platform.',
    impact: 'Deeper customer understanding',
    href: '/zion-ai-customer-sentiment-tracker',
    cta: 'Launch customer intelligence',
    icon: '🧠',
    modules: [
      { name: 'AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
    ],
  },
  {
    title: 'AI Governance & Compliance Hub',
    description:
      'Unify risk assessment, contract analysis, and compliance management into one governance intelligence platform.',
    impact: 'Reduced regulatory risk',
    href: '/zion-compliance-manager',
    cta: 'Launch governance hub',
    icon: '📋',
    modules: [
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
      { name: 'AI Risk Assessor', href: '/zion-ai-risk-assessor' },
      { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
    ],
  },
  {
    title: 'AI Security & Threat Intelligence',
    description:
      'Unify fraud detection, content moderation, and security monitoring into one threat intelligence platform.',
    impact: 'Faster threat response',
    href: '/zion-ai-fraud-detector',
    cta: 'Launch security bundle',
    icon: '🛡️',
    modules: [
      { name: 'AI Fraud Detector', href: '/zion-ai-fraud-detector' },
      { name: 'AI Content Moderator', href: '/zion-ai-content-moderator' },
      { name: 'Security Shield', href: '/zion-security-shield' },
    ],
  },
  {
    title: 'AI Wellness & Engagement Hub',
    description:
      'Unify member analytics, sentiment tracking, and personalized engagement into one wellness and fitness intelligence platform.',
    impact: 'Higher retention, better engagement',
    href: '/zion-ai-customer-sentiment-tracker',
    cta: 'Launch wellness hub',
    icon: '🏃',
    modules: [
      { name: 'AI Customer Sentiment Tracker', href: '/zion-ai-customer-sentiment-tracker' },
      { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
      { name: 'Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
    ],
  },
  {
    title: 'AI Fleet & Marketing Intelligence',
    description:
      'Unify fleet optimization, route planning, and marketing analytics into one operations and growth intelligence platform.',
    impact: 'Smarter routing, higher campaign ROI',
    href: '/zion-ai-supply-chain-optimizer',
    cta: 'Launch fleet & marketing bundle',
    icon: '📢',
    modules: [
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      { name: 'Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
    ],
  },
  {
    title: 'AI Quality & Supply Intelligence',
    description:
      'Unify quality assurance, supply chain optimization, and compliance tracking for manufacturing and materials operations.',
    impact: 'Fewer defects, faster compliance',
    href: '/zion-ai-quality-assurance',
    cta: 'Launch quality & supply bundle',
    icon: '✅',
    modules: [
      { name: 'AI Quality Assurance', href: '/zion-ai-quality-assurance' },
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'Compliance Manager', href: '/zion-compliance-manager' },
    ],
  },
  {
    title: 'AI Orbital & Supply Intelligence',
    description:
      'Unify satellite operations monitoring, ground station optimization, and supply chain forecasting for space and asset-intensive industries.',
    impact: 'Smarter operations, faster forecasting',
    href: '/zion-ai-supply-chain-optimizer',
    cta: 'Launch orbital & supply bundle',
    icon: '🛰️',
    modules: [
      { name: 'AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance' },
      { name: 'AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer' },
      { name: 'AI Data Pipeline', href: '/zion-ai-data-pipeline' },
    ],
  },
  {
    title: 'AI Care & Field Operations Hub',
    description:
      'Unify scheduling, dispatch, records, and inventory for veterinary clinics and home services contractors.',
    impact: 'Fewer no-shows, faster dispatch',
    href: '/zion-ai-scheduling-assistant',
    cta: 'Launch care & field bundle',
    icon: '🐾',
    modules: [
      { name: 'AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
    ],
  },
  {
    title: 'AI Accounting & Tax Hub',
    description:
      'Unify document processing, bookkeeping, invoicing, and compliance into one accounting and tax intelligence platform.',
    impact: 'Faster close cycles, fewer manual errors',
    href: '/zion-ai-accounting-assistant',
    cta: 'Launch accounting hub',
    icon: '📒',
    modules: [
      { name: 'AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
      { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
      { name: 'Invoice Genius', href: '/zion-invoice-genius' },
    ],
  },
  {
    title: 'AI Document & Voice Intelligence Hub',
    description:
      'Unify document processing, voice synthesis, and meeting capture into one content and communication intelligence platform.',
    impact: 'Faster content workflows, better accessibility',
    href: '/zion-ai-document-ai',
    cta: 'Launch document & voice hub',
    icon: '📄',
    modules: [
      { name: 'AI Document AI', href: '/zion-ai-document-ai' },
      { name: 'AI Voice Synthesis', href: '/zion-ai-voice-synthesis' },
      { name: 'AI Meeting Transcriber', href: '/zion-ai-meeting-transcriber' },
    ],
  },
  {
    title: 'AI Hospitality & Asset Intelligence Hub',
    description:
      'Unify demand forecasting, scheduling, inventory, and guest analytics for restaurants, hotels, and asset management operations.',
    impact: 'Smarter operations, higher guest satisfaction',
    href: '/zion-ai-sales-predictor',
    cta: 'Launch hospitality & asset bundle',
    icon: '🍴',
    modules: [
      { name: 'AI Sales Predictor', href: '/zion-ai-sales-predictor' },
      { name: 'AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
      { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
    ],
  },
  {
    title: 'AI-Driven Asset Intelligence Suite',
    description:
      'Unlock predictive insights and automate workflows for optimal asset lifecycle management. Integrates document processing, compliance tracking, and real-time analytics.',
    impact: '40% faster decision-making',
    href: '/zion-ai-asset-intelligence',
    cta: 'Launch Asset Intelligence Bundle',
    icon: '📊',
    modules: [
          { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
          { name: 'AI Contract Analyzer', href: '/zion-ai-contract-analyzer' },
          { name: 'AI Data Visualizer', href: '/zion-ai-data-visualizer' },
    ],
  },
  {
    title: 'Advanced AI & Enterprise Intelligence Hub',
    description:
      'Combine generative AI, autonomous agents, multimodal intelligence, RAG, governance, observability, and enterprise copilots for next-generation AI operations.',
    impact: 'Cutting-edge AI capabilities',
    href: '/ai-services/advanced-ai-enterprise-intelligence-hub',
    cta: 'Explore Advanced AI Hub',
    icon: '🧠',
    modules: [
      { name: 'Generative AI Enterprise', href: '/ai-services/generative-ai-enterprise' },
      { name: 'AI Agents & Autonomous Workflows', href: '/ai-services/ai-agents-autonomous' },
      { name: 'AI Multimodal Intelligence', href: '/ai-services/ai-multimodal-intelligence' },
      { name: 'AI RAG & Knowledge Systems', href: '/ai-services/ai-rag-knowledge-systems' },
      { name: 'AI Governance & Trust', href: '/ai-services/ai-governance-trust' },
      { name: 'AI Model Orchestration', href: '/ai-services/ai-model-orchestration' },
      { name: 'AI Copilot & Enterprise Assistants', href: '/ai-services/ai-copilot-enterprise' },
      { name: 'AI Observability & MLOps', href: '/ai-services/ai-observability-mlops' },
      { name: 'AI Strategy & Roadmap', href: '/ai-services/ai-strategy-roadmap' },
      { name: 'AI Integration & APIs', href: '/ai-services/ai-integration-apis' },
    ],
  },
];

const momentumSignals = [
  'Advanced AI: Generative AI, Agents, Multimodal, RAG, Governance, Copilots, Strategy & Roadmap, Integration & APIs, Edge & Real-Time, Regulated Industries, Foundation Models, AI Security',
  'New AI workflow bundles for GTM and operations teams',
  'Expanded feature library across growth, compliance, and automation',
  'Ready-to-launch modules with measurable KPI tracking',
  'Data & Analytics Engine for decision intelligence',
  'Government & Public Sector solutions',
  'AI Operations Hub for back-office automation',
  'Insurance industry solutions',
  'Finance & Risk Intelligence innovation bundle',
  'Agriculture & Construction industry solutions',
  'Research & Development Hub innovation bundle',
  'Mining & Pharmaceuticals industry solutions',
  'Smart Fleet & Operations Hub for logistics and automotive',
  'Telecommunications & Automotive industry solutions',
  'Sustainability & ESG Intelligence innovation bundle',
  'Aerospace & Defense and Maritime & Shipping solutions',
  'AI Customer Intelligence Hub for customer analytics',
  'Food & Beverage and Oil & Gas industry solutions',
  'AI Governance & Compliance Hub innovation bundle',
  'Banking & Capital Markets and Environmental & Waste solutions',
  'AI Security & Threat Intelligence innovation bundle',
  'Gaming & Esports and Renewable Energy & Cleantech solutions',
  'AI Wellness & Engagement Hub innovation bundle',
  'Sports & Fitness and Consumer Goods & CPG solutions',
  '35 industry verticals with tailored workflows',
  'AI Quality & Supply Intelligence innovation bundle',
  'Chemicals & Materials and Electronics & Semiconductors solutions',
  'AI Fleet & Marketing Intelligence innovation bundle',
  'Transportation & Fleet and Marketing & Advertising solutions',
  '37 industry verticals with tailored workflows',
  'AI Orbital & Supply Intelligence innovation bundle',
  'Space & Satellite and Textiles & Apparel solutions',
  '39 industry verticals with tailored workflows',
  'AI Care & Field Operations Hub innovation bundle',
  'Veterinary & Animal Health and Home Services & Contractors solutions',
  '43 industry verticals with tailored workflows',
  'AI Accounting & Tax Hub innovation bundle',
  'Accounting & Tax Services and Wholesale & Distribution solutions',
  '45 industry verticals with tailored workflows',
  'AI Hospitality & Asset Intelligence Hub innovation bundle',
  '47 industry verticals with tailored workflows',
  'Staffing & Recruiting and Facilities & Property Management solutions',
  'Asset Management & Investment and Restaurants & Food Service solutions',
  'AI Document & Voice Intelligence Hub for content and communication workflows',
  'Packaging & Materials and Warehousing & 3PL solutions',
  'New AI-Driven Asset Intelligence Suite innovation bundle',
  'Asset Management and Beauty & Wellness solutions',
  'New AI Operations Hub innovation bundle',
  'Asset Management and Restaurants & Food Service solutions',
  'New Data Engineering service for pipeline and warehouse architecture',
  'API Development & Integration service for system connectivity',
  'Mobile App Development with AI-powered features and offline support',
  'IoT & Edge Computing services for connected device operations',
  'Technology partner integrations with AWS, Google Cloud, Azure, and more',
  '14 core engineering services across AI, cloud, security, and mobile',
  'Engagement models from Discovery Sprint to Ongoing Optimization',
];

type CaseStudyTeaser = {
  title: string;
  industry: string;
  result: string;
  description: string;
  icon: string;
  href?: string;
};

const caseStudyTeasers: CaseStudyTeaser[] = [
  {
    title: 'SaaS Platform Reduces Support Volume by 40%',
    industry: 'Technology',
    result: '40% fewer tickets',
    description: 'AI Chatbot Builder and Customer Support Pro freed teams for complex escalations.',
    icon: '💬',
  },
  {
    title: 'Ecommerce Brand Increases Revenue 28%',
    industry: 'Ecommerce',
    result: '28% revenue lift',
    description: 'AI Lead Scoring and Email Marketing Pro personalized outreach at scale.',
    icon: '📈',
  },
  {
    title: 'Fintech Passes SOC 2 Audit in 8 Weeks',
    industry: 'Financial Services',
    result: 'SOC 2 in 8 weeks',
    description: 'Compliance Manager and Security Shield established controls ahead of schedule.',
    icon: '🔒',
  },
  {
    title: 'Logistics Cuts Planning Time by 60%',
    industry: 'Supply Chain',
    result: '60% faster planning',
    description: 'Supply Chain Optimizer automated demand forecasting and reduced bottlenecks.',
    icon: '🚚',
  },
  {
    title: 'Engineering Team Ships 3x Faster',
    industry: 'Technology',
    result: '3x deployment frequency',
    description: 'AI Code Reviewer and DevOps Automation streamlined release cycles and caught issues earlier.',
    icon: '⚙️',
  },
  {
    title: 'Healthcare Provider Modernizes Records Workflow',
    industry: 'Healthcare',
    result: '75% less manual entry',
    description: 'AI Document Processor and Medical Records Manager digitized intake workflows.',
    icon: '🏥',
  },
  {
    title: 'Media Studio Cuts Content Production Time 50%',
    industry: 'Media & Entertainment',
    result: '50% faster production',
    description: 'Content Studio and AI Video Generator automated asset creation and repurposing.',
    icon: '🎬',
  },
  {
    title: 'Retail Chain Improves Inventory Accuracy 35%',
    industry: 'Retail',
    result: '35% fewer stockouts',
    description: 'Smart Inventory Manager and AI Supply Chain Optimizer aligned demand with supply.',
    icon: '🛒',
  },
  {
    title: 'Insurance Firm Automates Claims Processing 45%',
    industry: 'Insurance',
    result: '45% faster claims',
    description: 'AI Document Processor and AI Fraud Detector streamlined intake and reduced manual review.',
    icon: '🛡️',
  },
  {
    title: 'Pharma Accelerates Trial Data Analysis 60%',
    industry: 'Pharmaceuticals',
    result: '60% faster analysis',
    description: 'AI Document Analyzer and AI Report Generator automated regulatory submissions and trial summaries.',
    icon: '🧪',
  },
  {
    title: 'Telecom Reduces Network Outages 40%',
    industry: 'Telecommunications',
    result: '40% fewer outages',
    description: 'AI Predictive Maintenance and AI Data Pipeline enabled proactive infrastructure monitoring and faster incident response.',
    icon: '📡',
  },
  {
    title: 'Auto Manufacturer Streamlines Parts Supply 45%',
    industry: 'Automotive',
    result: '45% faster replenishment',
    description: 'AI Supply Chain Optimizer and Smart Inventory Manager aligned parts demand with supplier lead times.',
    icon: '🚗',
  },
  {
    title: 'Aerospace Supplier Cuts Document Review Time 50%',
    industry: 'Aerospace & Defense',
    result: '50% faster review',
    description: 'AI Document Processor and AI Contract Analyzer automated compliance documentation and reduced manual review cycles.',
    icon: '✈️',
  },
  {
    title: 'Shipping Line Reduces Port Delays 35%',
    industry: 'Maritime & Shipping',
    result: '35% fewer delays',
    description: 'AI Supply Chain Optimizer and AI Predictive Maintenance improved vessel scheduling and cargo forecasting.',
    icon: '🚢',
  },
  {
    title: 'Food Distributor Cuts Waste 30%',
    industry: 'Food & Beverage',
    result: '30% less waste',
    description: 'AI Sales Predictor and Smart Inventory Manager improved demand forecasting and reduced perishable stock write-offs.',
    icon: '🍽️',
  },
  {
    title: 'Oil Refinery Reduces Unplanned Downtime 25%',
    industry: 'Oil & Gas',
    result: '25% fewer outages',
    description: 'AI Predictive Maintenance and AI Data Pipeline enabled proactive equipment monitoring and compliance reporting automation.',
    icon: '🛢️',
  },
  {
    title: 'Bank Cuts Fraud Losses 35%',
    industry: 'Banking & Capital Markets',
    result: '35% fewer fraud incidents',
    description: 'AI Fraud Detector and AI Risk Assessor enabled real-time transaction monitoring and adaptive fraud scoring.',
    icon: '🏛️',
  },
  {
    title: 'Waste Operator Improves Recycling Efficiency 40%',
    industry: 'Environmental & Waste',
    result: '40% higher recovery rate',
    description: 'AI Predictive Analytics and AI Data Pipeline optimized route planning and material sorting workflows.',
    icon: '♻️',
  },
  {
    title: 'Gaming Platform Cuts Toxic Content 55%',
    industry: 'Gaming & Esports',
    result: '55% fewer policy violations',
    description: 'AI Content Moderator and AI Fraud Detector automated moderation queues and reduced fraudulent account activity.',
    icon: '🎮',
  },
  {
    title: 'Solar Operator Improves Forecast Accuracy 30%',
    industry: 'Renewable Energy',
    result: '30% better forecasting',
    description: 'AI Predictive Analytics and AI Energy Manager optimized production forecasting and grid balancing decisions.',
    icon: '☀️',
  },
  {
    title: 'Gym Chain Increases Member Retention 35%',
    industry: 'Sports & Fitness',
    result: '35% higher retention',
    description: 'AI Customer Sentiment Tracker and AI Chatbot Builder personalized engagement and reduced churn through proactive outreach.',
    icon: '🏃',
  },
  {
    title: 'CPG Brand Improves Demand Forecast Accuracy 40%',
    industry: 'Consumer Goods',
    result: '40% better forecasting',
    description: 'AI Sales Predictor and Smart Inventory Manager aligned production with retail demand and reduced excess inventory.',
    icon: '📦',
  },
  {
    title: 'Fleet Operator Cuts Route Costs 28%',
    industry: 'Transportation',
    result: '28% lower routing costs',
    description: 'AI Supply Chain Optimizer and AI Scheduling Assistant optimized delivery routes and driver allocation.',
    icon: '🚛',
  },
  {
    title: 'Agency Improves Campaign ROI 45%',
    industry: 'Marketing & Advertising',
    result: '45% higher ROI',
    description: 'AI Marketing Automation and Smart Analytics Dashboard automated attribution and optimized ad spend allocation.',
    icon: '📢',
  },
  {
    title: 'Chemical Producer Cuts Batch Defects 32%',
    industry: 'Chemicals & Materials',
    result: '32% fewer defects',
    description:
      'AI Quality Assurance and Compliance Manager automated batch traceability and reduced non-conformance incidents.',
    icon: '🧪',
  },
  {
    title: 'Semiconductor Fab Improves Yield 18%',
    industry: 'Electronics & Semiconductors',
    result: '18% higher yield',
    description:
      'AI Predictive Maintenance and AI Data Pipeline correlated equipment signals with yield outcomes and reduced variability.',
    icon: '🔌',
  },
  {
    title: 'Satellite Operator Cuts Ground Station Downtime 22%',
    industry: 'Space & Satellite',
    result: '22% fewer outages',
    description:
      'AI Predictive Maintenance and AI Data Pipeline enabled proactive equipment monitoring and optimized ground station scheduling.',
    icon: '🛰️',
  },
  {
    title: 'Apparel Brand Improves Seasonal Forecast Accuracy 38%',
    industry: 'Textiles & Apparel',
    result: '38% better forecasting',
    description:
      'AI Sales Predictor and Smart Inventory Manager aligned production with retail demand and reduced excess inventory across seasonal collections.',
    icon: '👕',
  },
  {
    title: 'Veterinary Clinic Reduces No-Shows 33%',
    industry: 'Veterinary & Animal Health',
    result: '33% fewer no-shows',
    description:
      'AI Scheduling Assistant and AI Chatbot Builder automated reminders and rescheduling, improving show rates and reducing gaps.',
    icon: '🐾',
  },
  {
    title: 'HVAC Company Improves Dispatch Efficiency 42%',
    industry: 'Home Services',
    result: '42% faster dispatch',
    description:
      'AI Scheduling Assistant and AI Supply Chain Optimizer optimized technician routing and parts availability for same-day service.',
    icon: '🔧',
  },
  {
    title: 'Accounting Firm Automates Document Processing 50%',
    industry: 'Accounting & Tax',
    result: '50% faster processing',
    description:
      'AI Document Processor and AI Accounting Assistant streamlined client intake, reconciliation, and report generation for a mid-size CPA firm.',
    icon: '📒',
  },
  {
    title: 'Wholesale Distributor Improves Inventory Accuracy 35%',
    industry: 'Wholesale & Distribution',
    result: '35% fewer stockouts',
    description:
      'AI Supply Chain Optimizer and Smart Inventory Manager aligned demand with replenishment cycles across multiple warehouse locations.',
    icon: '📦',
  },
  {
    title: 'Staffing Agency Cuts Time-to-Fill 38%',
    industry: 'Staffing & Recruiting',
    result: '38% faster placements',
    description:
      'AI Recruitment Pro and AI Talent Analytics automated candidate screening and pipeline management for a mid-size staffing firm.',
    icon: '👥',
  },
  {
    title: 'Property Manager Reduces Work Order Backlog 42%',
    industry: 'Facilities & Property',
    result: '42% less backlog',
    description:
      'AI Scheduling Assistant and AI Predictive Maintenance automated work order routing and preventive maintenance for a commercial portfolio.',
    icon: '🏢',
  },
  {
    title: 'Fintech Startup Launches Mobile App in 6 Weeks',
    industry: 'Financial Services',
    result: '6-week delivery',
    description:
      'Cross-platform mobile app with biometric auth, real-time portfolio tracking, and AI-powered spending insights shipped ahead of schedule.',
    icon: '📱',
  },
  {
    title: 'Enterprise Modernizes API Layer, Cuts Integration Time 55%',
    industry: 'Technology',
    result: '55% faster integrations',
    description:
      'RESTful and GraphQL API gateway unified 12 legacy services, reducing partner onboarding time and enabling self-service developer portal.',
    icon: '🔌',
  },
  {
    title: 'Retailer Builds Real-Time Data Pipeline, Cuts Reporting Lag 80%',
    industry: 'Retail',
    result: '80% faster reporting',
    description:
      'Streaming data architecture with Kafka and Snowflake replaced nightly batch jobs, enabling real-time inventory and sales dashboards.',
    icon: '🔗',
  },
  {
    title: 'Manufacturing Firm Connects 500+ IoT Sensors to AI Platform',
    industry: 'Manufacturing',
    result: '500+ devices connected',
    description:
      'Edge computing deployment with real-time anomaly detection reduced unplanned downtime and enabled predictive maintenance across 3 plants.',
    icon: '📡',
  },
  {
    title: 'Asset Manager Automates Client Reporting 45%',
    industry: 'Asset Management & Investment',
    result: '45% faster reports',
    description:
      'AI Document Analyzer and AI Report Generator streamlined portfolio commentary and regulatory filings for a mid-size wealth manager.',
    icon: '📊',
  },
  {
    title: 'Restaurant Group Cuts Food Waste 28% with Demand Forecasting',
    industry: 'Restaurants & Food Service',
    result: '28% less waste',
    description:
      'AI Sales Predictor and Smart Inventory Manager aligned prep schedules with foot traffic patterns across 12 locations.',
    icon: '🍴',
  },
  {
    title: 'Asset Management Firm Reduces Costs by 30%',
    industry: 'Asset Management',
    result: '30% cost reduction',
    description: 'Automated document processing and predictive maintenance slashed operational expenses.',
    icon: '📉',
  },
  {
    title: 'Beauty Brand Boosts Engagement by 25%',
    industry: 'Beauty & Wellness',
    result: '25% engagement increase',
    description: 'AI-generated visuals and automated campaigns drove measurable growth.',
    icon: '📈',
  },
  {
    title: 'Asset Firm Boosts Portfolio Returns by 18%',
    industry: 'Asset Management',
    result: '18% higher returns',
    description: 'Zion’s AI analytics and compliance tools automated reporting and optimized asset allocation.',
    icon: '💼',
  },
  {
    title: 'Restaurant Chain Cuts Food Waste by 25%',
    industry: 'Restaurants & Food Service',
    result: '25% less waste',
    description: 'Smart inventory and demand forecasting apps reduced spoilage and improved margins.',
    icon: '🍽️',
  },
  {
    title: 'Packaging Manufacturer Cuts Defect Rate 28%',
    industry: 'Packaging & Materials',
    result: '28% fewer defects',
    description:
      'AI Quality Assurance and Supply Chain Optimizer automated batch traceability and reduced non-conformance across packaging lines.',
    icon: '📦',
  },
  {
    title: '3PL Provider Improves Pick Accuracy 40%',
    industry: 'Warehousing & 3PL',
    result: '40% fewer pick errors',
    description:
      'Smart Inventory Manager and Workflow Automation optimized warehouse operations and carrier coordination across 5 fulfillment centers.',
    icon: '🏭',
  },
];

const quickJumpLinks: QuickJumpLink[] = [
  {
    label: 'Advanced AI Services',
    href: '#advanced-ai-services',
    description: 'Generative AI, agents, orchestration, copilots',
  },
  {
    label: 'ROI planner',
    href: '#roi-planner',
    description: 'Model savings and payback windows',
  },
  {
    label: 'Launch advisor',
    href: '#launch-advisor',
    description: 'Get a rollout recommendation by goal',
  },
  {
    label: 'Case studies',
    href: '#case-studies',
    description: 'Real results from real teams',
  },
  {
    label: 'Industry solutions',
    href: '#industry-solutions',
    description: 'AI workflows tailored to your vertical',
  },
  {
    label: 'App library',
    href: '#featured-library',
    description: 'Browse featured AI apps by outcome',
  },
  {
    label: 'Platform pages',
    href: '#platform-pages',
    description: 'Explore industry and micro-SaaS page routes',
  },
  {
    label: 'Innovation bundles',
    href: '#innovation-bundles',
    description: 'Pre-designed bundles for faster rollout',
  },
  {
    label: 'Blog & resources',
    href: '/blog',
    description: 'AI strategy, security, and implementation insights',
  },
  {
    label: 'Solutions hub',
    href: '/solutions',
    description: 'Browse all AI solutions and product paths',
  },
  {
    label: 'Planning FAQ',
    href: '#delivery-faq',
    description: 'Review adoption and delivery answers',
  },
];


type IndustrySolution = {
  industry: string;
  icon: string;
  headline: string;
  description: string;
  apps: string[];
  href: string;
};

type TrustBadge = {
  title: string;
  description: string;
  icon: string;
};

const companyStats = [
  { value: '500+', label: 'Enterprise Deployments', description: 'Production AI rollouts across industries' },
  { value: '99.9%', label: 'Platform Uptime', description: 'Reliable infrastructure for mission-critical apps' },
  { value: '< 48h', label: 'Average Kickoff Time', description: 'From discovery call to active pilot planning' },
  { value: '3.2x', label: 'Average ROI', description: 'Measured return within the first twelve months' },
  { value: '76+', label: 'AI Applications', description: 'Production-ready apps across 14 categories' },
  { value: '43', label: 'Industry Verticals', description: 'Tailored solutions for specialized workflows' },
];

type CoreService = {
  title: string;
  description: string;
  icon: string;
  href: string;
  services: string[];
};

const coreServices: CoreService[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions, model training, and intelligent automation.',
    icon: '🤖',
    href: '/ai-services/process-automation',
    services: ['Custom AI development', 'NLP & computer vision', 'Predictive analytics', 'MLOps'],
  },
  {
    title: 'Web & Software Development',
    description: 'Modern web applications, APIs, and full-stack engineering.',
    icon: '🌐',
    href: '/web-development',
    services: ['Next.js & React', 'REST/GraphQL APIs', 'Database architecture', 'Legacy modernization'],
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture, migration, and management.',
    icon: '☁️',
    href: '/cloud-infrastructure',
    services: ['Cloud migration', 'Infrastructure as Code', 'Multi-cloud', 'Cost optimization'],
  },
  {
    title: 'Cybersecurity',
    description: 'Security audits, compliance programs, and incident response.',
    icon: '🔒',
    href: '/cybersecurity',
    services: ['Penetration testing', 'SOC 2 & GDPR', 'Vulnerability management', 'Security training'],
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business intelligence.',
    icon: '📊',
    href: '/data-analytics',
    services: ['Data warehouse', 'Real-time dashboards', 'ETL pipelines', 'Predictive modeling'],
  },
  {
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, container orchestration, and release engineering.',
    icon: '⚙️',
    href: '/zion-devops-automation',
    services: ['CI/CD design', 'Kubernetes', 'Monitoring', 'SRE'],
  },
  {
    title: 'AI Talent Matching',
    description: 'Connect with verified tech professionals using advanced AI algorithms.',
    icon: '👥',
    href: '/zion-ai-recruitment-pro',
    services: ['AI candidate screening', 'Skills-based matching', 'Workforce analytics', 'Onboarding automation'],
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Cutting-edge software applications packaged for rapid deployment.',
    icon: '📦',
    href: '/micro-saas-services',
    services: ['Micro-SaaS product design', 'AI content tools', 'Lead generation', 'Analytics dashboards'],
  },
  {
    title: 'Blockchain & Web3',
    description: 'Smart contracts, decentralized apps, and blockchain integration for trust and transparency.',
    icon: '⛓️',
    href: '/blockchain-development',
    services: ['Smart contracts', 'dApps', 'Tokenization', 'Enterprise blockchain'],
  },
  {
    title: 'Consulting & Strategy',
    description: 'Align AI initiatives with business goals through discovery workshops and roadmap planning.',
    icon: '🎯',
    href: '/consultation',
    services: ['AI strategy workshops', 'Roadmap prioritization', 'Vendor evaluation', 'Pilot scoping'],
  },
  {
    title: 'IoT & Edge Computing',
    description: 'Connect devices, sensors, and edge infrastructure with intelligent data processing.',
    icon: '📡',
    href: '/solutions',
    services: ['Device management', 'Edge AI inference', 'Sensor data pipelines', 'Fleet monitoring'],
  },
  {
    title: 'Data Engineering',
    description: 'Build robust data pipelines, warehouses, and real-time streaming architectures.',
    icon: '🔗',
    href: '/it-services/data-engineering',
    services: ['ETL/ELT pipelines', 'Data warehouses', 'Real-time streaming', 'Data governance'],
  },
  {
    title: 'API & Integration',
    description: 'Design high-performance APIs that connect systems and power digital products.',
    icon: '🔌',
    href: '/it-services/api-development',
    services: ['REST & GraphQL', 'API gateways', 'Webhook systems', 'Third-party integration'],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform and native mobile apps with AI-powered features and offline support.',
    icon: '📱',
    href: '/it-services/mobile-development',
    services: ['React Native & Flutter', 'Native iOS & Android', 'Offline-first', 'App Store optimization'],
  },
];

const industrySolutions: IndustrySolution[] = [
  {
    industry: 'Financial Services',
    icon: '🏦',
    headline: 'Automate compliance and accelerate lending decisions',
    description:
      'Deploy fraud detection, risk scoring, and regulatory compliance workflows that reduce manual review time and increase approval accuracy.',
    apps: ['AI Fraud Detector', 'AI Financial Forecaster', 'Compliance Manager', 'AI Contract Analyzer'],
    href: '/solutions/financial-services',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    headline: 'Streamline records and improve patient communication',
    description:
      'Digitize medical records, automate appointment scheduling, and build AI-assisted patient intake flows with full HIPAA compliance.',
    apps: ['Medical Records Manager', 'AI Document Processor', 'AI Chatbot Builder', 'Security Shield'],
    href: '/solutions/healthcare',
  },
  {
    industry: 'E-Commerce & Retail',
    icon: '🛒',
    headline: 'Personalize shopping and optimize supply chains',
    description:
      'Drive higher conversion with AI-powered recommendations, demand forecasting, and inventory optimization across channels.',
    apps: ['Ecommerce Analytics Pro', 'Smart Inventory Manager', 'AI Sales Predictor', 'AI Marketing Automation'],
    href: '/solutions/ecommerce-retail',
  },
  {
    industry: 'Real Estate & Property',
    icon: '🏠',
    headline: 'Automate property ops and tenant engagement',
    description:
      'Manage listings, automate tenant communications, and generate property performance reports with AI-driven workflows.',
    apps: ['Property Management AI', 'AI Document Processor', 'AI Chatbot Builder', 'Invoice Genius'],
    href: '/solutions/real-estate-property',
  },
  {
    industry: 'Legal & Professional Services',
    icon: '⚖️',
    headline: 'Accelerate contract review and case management',
    description:
      'Reduce time spent on document review, automate client intake, and surface risk clauses with AI-powered legal analysis.',
    apps: ['Legal Document Manager', 'AI Contract Analyzer', 'AI Document Analyzer', 'Compliance Manager'],
    href: '/solutions/legal-professional-services',
  },
  {
    industry: 'Education & Training',
    icon: '🎓',
    headline: 'Scale personalized learning experiences',
    description:
      'Deliver adaptive coursework, automate grading workflows, and generate engagement analytics for learners at any scale.',
    apps: ['Online Learning Platform', 'AI Knowledge Base', 'AI Survey Builder', 'AI Report Generator'],
    href: '/solutions/education-training',
  },
  {
    industry: 'Manufacturing & Industrial',
    icon: '🏭',
    headline: 'Optimize production and predictive maintenance',
    description:
      'Reduce downtime with predictive maintenance, optimize supply chains, and automate quality assurance with AI-powered workflows.',
    apps: ['AI Predictive Maintenance', 'Supply Chain Optimizer', 'AI Quality Assurance', 'AI Document Processor'],
    href: '/solutions/manufacturing-industrial',
  },
  {
    industry: 'Logistics & Supply Chain',
    icon: '📦',
    headline: 'Streamline fulfillment and inventory operations',
    description:
      'Improve demand forecasting, reduce bottlenecks, and automate logistics workflows across warehouses and carriers.',
    apps: ['Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Sales Predictor', 'Workflow Automation'],
    href: '/solutions/logistics-supply-chain',
  },
  {
    industry: 'Technology & SaaS',
    icon: '💻',
    headline: 'Accelerate product development and go-to-market',
    description:
      'Scale engineering velocity, automate customer onboarding, and optimize conversion with AI-powered product workflows.',
    apps: ['AI Code Assistant', 'AI Onboarding Pro', 'AI SEO Optimizer', 'AI Website Analyzer'],
    href: '/solutions/technology-and-saas',
  },
  {
    industry: 'Media & Entertainment',
    icon: '🎬',
    headline: 'Scale content creation and audience engagement',
    description:
      'Automate content workflows, personalize experiences, and analyze audience behavior with AI-driven tools.',
    apps: ['Content Studio', 'AI Video Generator', 'AI Image Generator', 'AI Marketing Automation'],
    href: '/solutions/media-entertainment',
  },
  {
    industry: 'Energy & Utilities',
    icon: '⚡',
    headline: 'Optimize energy consumption and asset performance',
    description:
      'Deploy predictive maintenance, demand forecasting, and energy management with AI-driven insights.',
    apps: ['AI Energy Manager', 'AI Predictive Maintenance', 'AI Data Pipeline', 'Compliance Manager'],
    href: '/solutions/energy-utilities',
  },
  {
    industry: 'Government & Public Sector',
    icon: '🏛️',
    headline: 'Streamline citizen services and compliance',
    description:
      'Automate document processing, citizen intake, and regulatory reporting with secure, audit-ready workflows.',
    apps: ['AI Document Processor', 'AI Contract Analyzer', 'Compliance Manager', 'Security Shield'],
    href: '/solutions/government-and-public-sector',
  },
  {
    industry: 'Hospitality & Travel',
    icon: '✈️',
    headline: 'Personalize guest experiences and optimize operations',
    description:
      'Improve booking flows, automate guest communications, and analyze demand patterns with AI-powered tools.',
    apps: ['AI Chatbot Builder', 'AI Customer Support Pro', 'AI Sales Predictor', 'Smart CRM Automation'],
    href: '/solutions/hospitality-travel',
  },
  {
    industry: 'Non-Profit & Social Impact',
    icon: '🤝',
    headline: 'Scale outreach and donor engagement efficiently',
    description:
      'Automate donor communications, manage volunteer coordination, and generate impact reports with limited resources.',
    apps: ['AI Email Marketing Pro', 'AI Survey Builder', 'AI Report Generator', 'Project Master'],
    href: '/solutions/non-profit-social-impact',
  },
  {
    industry: 'Insurance',
    icon: '🛡️',
    headline: 'Streamline claims processing and risk assessment',
    description:
      'Automate claims intake, fraud detection, and policy analysis with AI-powered workflows that reduce manual review and improve accuracy.',
    apps: ['AI Document Processor', 'AI Fraud Detector', 'AI Contract Analyzer', 'AI Risk Assessor'],
    href: '/solutions/insurance',
  },
  {
    industry: 'Agriculture & Agritech',
    icon: '🌾',
    headline: 'Optimize yield prediction and farm operations',
    description:
      'Deploy AI for crop monitoring, demand forecasting, supply chain optimization, and resource planning across agricultural workflows.',
    apps: ['AI Predictive Analytics', 'Supply Chain Optimizer', 'AI Data Pipeline', 'Smart Inventory Manager'],
    href: '/solutions/agriculture-agritech',
  },
  {
    industry: 'Construction & Engineering',
    icon: '🏗️',
    headline: 'Streamline project management and cost estimation',
    description:
      'Automate document workflows, project tracking, resource allocation, and compliance reporting for construction and engineering firms.',
    apps: ['Project Master', 'AI Document Processor', 'AI Contract Analyzer', 'Compliance Manager'],
    href: '/solutions/construction-engineering',
  },
  {
    industry: 'Mining & Natural Resources',
    icon: '⛏️',
    headline: 'Optimize extraction, safety, and supply chain visibility',
    description:
      'Deploy predictive maintenance for equipment, automate compliance reporting, and improve demand forecasting across mining and resource operations.',
    apps: ['AI Predictive Maintenance', 'AI Document Processor', 'Supply Chain Optimizer', 'Compliance Manager'],
    href: '/solutions/mining-natural-resources',
  },
  {
    industry: 'Pharmaceuticals & Life Sciences',
    icon: '🧪',
    headline: 'Accelerate trial data, regulatory submissions, and quality control',
    description:
      'Streamline document workflows for regulatory filings, automate quality assurance checks, and improve data integrity with AI-powered compliance.',
    apps: ['AI Document Processor', 'AI Quality Assurance', 'Compliance Manager', 'AI Contract Analyzer'],
    href: '/solutions/pharmaceuticals-life-sciences',
  },
  {
    industry: 'Telecommunications',
    icon: '📡',
    headline: 'Optimize network operations and customer experience',
    description:
      'Deploy predictive maintenance for infrastructure, automate customer support, and improve demand forecasting with AI-driven network and service analytics.',
    apps: ['AI Predictive Maintenance', 'AI Chatbot Builder', 'AI Customer Support Pro', 'AI Data Pipeline'],
    href: '/solutions/telecommunications',
  },
  {
    industry: 'Automotive & Mobility',
    icon: '🚗',
    headline: 'Streamline supply chain, quality, and fleet operations',
    description:
      'Optimize parts inventory, predict equipment failures, automate quality assurance, and improve logistics with AI-powered automotive workflows.',
    apps: ['AI Supply Chain Optimizer', 'AI Predictive Maintenance', 'AI Quality Assurance', 'Smart Inventory Manager'],
    href: '/solutions/automotive-mobility',
  },
  {
    industry: 'Aerospace & Defense',
    icon: '✈️',
    headline: 'Secure documentation, compliance, and supply chain visibility',
    description:
      'Deploy ITAR-compliant document workflows, predictive maintenance for critical assets, and supply chain optimization with audit-ready controls.',
    apps: ['AI Document Processor', 'AI Contract Analyzer', 'Compliance Manager', 'AI Predictive Maintenance'],
    href: '/solutions/aerospace-defense',
  },
  {
    industry: 'Maritime & Shipping',
    icon: '🚢',
    headline: 'Optimize fleet operations and port logistics',
    description:
      'Improve vessel maintenance scheduling, cargo forecasting, customs documentation, and port coordination with AI-driven logistics workflows.',
    apps: ['AI Supply Chain Optimizer', 'AI Predictive Maintenance', 'AI Document Processor', 'Smart Inventory Manager'],
    href: '/solutions/maritime-shipping',
  },
  {
    industry: 'Food & Beverage',
    icon: '🍽️',
    headline: 'Optimize supply chain, quality, and demand forecasting',
    description:
      'Deploy demand forecasting, inventory optimization, and compliance tracking for perishable goods and multi-channel distribution.',
    apps: ['AI Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Sales Predictor', 'Compliance Manager'],
    href: '/solutions/food-beverage',
  },
  {
    industry: 'Oil & Gas',
    icon: '🛢️',
    headline: 'Streamline asset operations and regulatory compliance',
    description:
      'Optimize predictive maintenance for equipment, automate compliance reporting, and improve supply chain visibility across upstream and downstream operations.',
    apps: ['AI Predictive Maintenance', 'AI Document Processor', 'Compliance Manager', 'AI Data Pipeline'],
    href: '/solutions/oil-gas',
  },
  {
    industry: 'Banking & Capital Markets',
    icon: '🏛️',
    headline: 'Automate AML, fraud detection, and regulatory reporting',
    description:
      'Deploy AI-powered fraud detection, risk scoring, and compliance workflows for KYC, AML, and regulatory reporting across banking and capital markets.',
    apps: ['AI Fraud Detector', 'AI Risk Assessor', 'Compliance Manager', 'AI Contract Analyzer'],
    href: '/solutions/banking-and-capital-markets',
  },
  {
    industry: 'Environmental & Waste Management',
    icon: '♻️',
    headline: 'Optimize recycling, emissions reporting, and sustainability',
    description:
      'Streamline ESG reporting, waste route optimization, emissions tracking, and compliance documentation with AI-driven environmental workflows.',
    apps: ['AI Report Generator', 'Compliance Manager', 'AI Data Pipeline', 'AI Predictive Analytics'],
    href: '/solutions/environmental-waste-management',
  },
  {
    industry: 'Gaming & Esports',
    icon: '🎮',
    headline: 'Scale content moderation and player analytics',
    description:
      'Deploy AI-powered content moderation, fraud detection, and community analytics for gaming platforms and esports organizations.',
    apps: ['AI Content Moderator', 'AI Fraud Detector', 'AI Chatbot Builder', 'Smart Analytics Dashboard'],
    href: '/solutions/gaming-esports',
  },
  {
    industry: 'Renewable Energy & Cleantech',
    icon: '🌱',
    headline: 'Optimize grid performance and asset forecasting',
    description:
      'Improve renewable asset performance, demand forecasting, and sustainability reporting with AI-driven energy and emissions analytics.',
    apps: ['AI Energy Manager', 'AI Predictive Analytics', 'AI Report Generator', 'AI Data Pipeline'],
    href: '/solutions/renewable-energy-cleantech',
  },
  {
    industry: 'Sports & Fitness',
    icon: '🏃',
    headline: 'Enhance member engagement and retention',
    description:
      'Deploy AI-powered member analytics, personalized recommendations, and automated engagement workflows for gyms, fitness apps, and wellness platforms.',
    apps: ['AI Chatbot Builder', 'AI Customer Sentiment Tracker', 'Smart Analytics Dashboard', 'AI Marketing Automation'],
    href: '/solutions/sports-fitness',
  },
  {
    industry: 'Consumer Goods & CPG',
    icon: '📦',
    headline: 'Optimize demand forecasting and retail execution',
    description:
      'Improve shelf availability, demand planning, and trade promotion analytics with AI-driven forecasting and supply chain optimization.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Supply Chain Optimizer', 'AI Data Pipeline'],
    href: '/solutions/consumer-goods-cpg',
  },
  {
    industry: 'Transportation & Fleet',
    icon: '🚛',
    headline: 'Optimize fleet operations and last-mile delivery',
    description:
      'Deploy route optimization, driver scheduling, predictive maintenance, and demand forecasting for transportation and fleet management operations.',
    apps: ['AI Supply Chain Optimizer', 'AI Predictive Maintenance', 'AI Scheduling Assistant', 'AI Data Pipeline'],
    href: '/solutions/transportation-fleet',
  },
  {
    industry: 'Marketing & Advertising',
    icon: '📢',
    headline: 'Scale campaign execution and creative analytics',
    description:
      'Automate campaign workflows, optimize ad spend, personalize creative delivery, and measure ROI with AI-driven marketing intelligence.',
    apps: ['AI Marketing Automation', 'Content Studio', 'AI Data Visualizer', 'AI Lead Scoring'],
    href: '/solutions/marketing-advertising',
  },
  {
    industry: 'Chemicals & Materials',
    icon: '🧪',
    headline: 'Optimize supply chain, quality control, and sustainability compliance',
    description:
      'Deploy demand forecasting, batch traceability, regulatory reporting, and supply chain optimization for chemical and materials manufacturers.',
    apps: ['AI Supply Chain Optimizer', 'AI Quality Assurance', 'Compliance Manager', 'AI Data Pipeline'],
    href: '/solutions/chemicals-materials',
  },
  {
    industry: 'Electronics & Semiconductors',
    icon: '🔌',
    headline: 'Streamline yield optimization and supply chain visibility',
    description:
      'Improve demand forecasting, predictive maintenance for equipment, quality assurance, and compliance workflows for electronics and semiconductor operations.',
    apps: ['AI Predictive Maintenance', 'AI Quality Assurance', 'Supply Chain Optimizer', 'AI Data Pipeline'],
    href: '/solutions/electronics-semiconductors',
  },
  {
    industry: 'Space & Satellite',
    icon: '🛰️',
    headline: 'Optimize orbital operations and ground station management',
    description:
      'Deploy AI for satellite health monitoring, ground station scheduling, orbital analytics, and mission planning with predictive maintenance and data pipeline workflows.',
    apps: ['AI Predictive Maintenance', 'AI Data Pipeline', 'AI Report Generator', 'Compliance Manager'],
    href: '/solutions/space-satellite',
  },
  {
    industry: 'Textiles & Apparel',
    icon: '👕',
    headline: 'Optimize demand forecasting and sustainable supply chains',
    description:
      'Improve seasonal demand planning, raw material sourcing, inventory optimization, and sustainability compliance for textile and apparel manufacturers and retailers.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Supply Chain Optimizer', 'Compliance Manager'],
    href: '/solutions/textiles-apparel',
  },
  {
    industry: 'Veterinary & Animal Health',
    icon: '🐾',
    headline: 'Streamline clinic operations and patient care workflows',
    description:
      'Automate appointment scheduling, medical records management, inventory for supplies and medications, and client communications for veterinary clinics and animal health providers.',
    apps: ['AI Scheduling Assistant', 'AI Document Processor', 'Smart Inventory Manager', 'AI Chatbot Builder'],
    href: '/solutions/veterinary-animal-health',
  },
  {
    industry: 'Home Services & Contractors',
    icon: '🔧',
    headline: 'Optimize dispatch, scheduling, and field operations',
    description:
      'Deploy route optimization, technician scheduling, job dispatching, and inventory management for HVAC, plumbing, electrical, and home improvement contractors.',
    apps: ['AI Scheduling Assistant', 'AI Supply Chain Optimizer', 'AI Document Processor', 'Workflow Automation'],
    href: '/solutions/home-services-contractors',
  },
  {
    industry: 'Accounting & Tax Services',
    icon: '📒',
    headline: 'Automate bookkeeping, reconciliation, and tax workflows',
    description:
      'Streamline document intake, automate reconciliation, generate financial reports, and manage compliance workflows for accounting firms and tax preparers.',
    apps: ['AI Accounting Assistant', 'AI Document Processor', 'Invoice Genius', 'Compliance Manager'],
    href: '/solutions/accounting-tax-services',
  },
  {
    industry: 'Wholesale & Distribution',
    icon: '📦',
    headline: 'Optimize inventory, fulfillment, and multi-channel distribution',
    description:
      'Deploy demand forecasting, warehouse optimization, order fulfillment automation, and B2B analytics for wholesalers and distributors.',
    apps: ['AI Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Sales Predictor', 'Workflow Automation'],
    href: '/solutions/wholesale-distribution',
  },
  {
    industry: 'Asset Management & Investment',
    icon: '📊',
    headline: 'Automate portfolio analytics and compliance reporting',
    description:
      'Streamline investment research, risk assessment, regulatory filings, and client reporting with AI-powered document analysis and financial forecasting.',
    apps: ['AI Financial Forecaster', 'AI Risk Assessor', 'AI Document Analyzer', 'Compliance Manager'],
    href: '/solutions/asset-management',
  },
  {
    industry: 'Restaurants & Food Service',
    icon: '🍴',
    headline: 'Optimize demand forecasting and operational workflows',
    description:
      'Deploy demand prediction, inventory optimization, scheduling automation, and compliance tracking for restaurants, catering, and food service operations.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Scheduling Assistant', 'Compliance Manager'],
    href: '/solutions/restaurants-food-service',
  },
  {
    industry: 'Asset Management',
    icon: '🏦',
    headline: 'Optimize Asset Lifecycle with AI-Driven Insights',
    description:
      'Leverage AI Document Processor and AI Data Visualizer to automate asset tracking, compliance reporting, and predictive maintenance scheduling. Reduce operational costs by 30% through intelligent workflow automation.',
    apps: ['AI Document Processor', 'AI Data Visualizer', 'AI Contract Analyzer', 'Workflow Automation'],
    href: '/solutions/asset-management',
  },
  {
    industry: 'Beauty & Wellness',
    icon: '💄',
    headline: 'Transform Customer Engagement with AI-Powered Solutions',
    description:
      'Combine AI Image Generator and AI Marketing Automation to create personalized campaigns, optimize SEO with AI SEO Optimizer, and deploy AI Chatbot Builder for 24/7 customer support. Achieve 25% higher conversion rates.',
    apps: ['AI Image Generator', 'AI Marketing Automation', 'AI SEO Optimizer', 'AI Chatbot Builder'],
    href: '/solutions/beauty-wellness',
  },
  {
    industry: 'Packaging & Materials',
    icon: '📦',
    headline: 'Optimize packaging design and supply chain efficiency',
    description:
      'Deploy AI for demand forecasting, sustainable packaging optimization, and automated quality control across packaging and materials operations.',
    apps: ['AI Predictive Analytics', 'Supply Chain Optimizer', 'AI Quality Assurance', 'Smart Inventory Manager'],
    href: '/solutions/packaging-materials',
  },
  {
    industry: 'Warehousing & 3PL',
    icon: '🏭',
    headline: 'Streamline fulfillment and third-party logistics',
    description:
      'Automate warehouse operations, optimize pick-and-pack workflows, and improve carrier coordination with AI-powered logistics intelligence.',
    apps: ['Supply Chain Optimizer', 'Smart Inventory Manager', 'Workflow Automation', 'AI Document Processor'],
    href: '/solutions/warehousing-3pl',
  },
  {
    industry: 'Staffing & Recruiting',
    icon: '👥',
    headline: 'Accelerate candidate sourcing and placement',
    description:
      'Automate candidate screening, pipeline management, and client engagement with AI-powered recruitment workflows for staffing agencies and talent teams.',
    apps: ['AI Recruitment Pro', 'AI Talent Analytics', 'AI Lead Scoring', 'Workflow Automation'],
    href: '/solutions/staffing-recruiting',
  },
  {
    industry: 'Facilities & Property Management',
    icon: '🏢',
    headline: 'Optimize maintenance and tenant services',
    description:
      'Deploy work order automation, preventive maintenance scheduling, and tenant request workflows for commercial and multi-site property portfolios.',
    apps: ['AI Scheduling Assistant', 'AI Predictive Maintenance', 'AI Document Processor', 'AI Chatbot Builder'],
    href: '/solutions/facilities-property-management',
  },
];

const trustBadges: TrustBadge[] = [
  {
    title: 'SOC 2 Type II',
    description: 'Audited controls for data security, availability, and confidentiality',
    icon: '🔐',
  },
  {
    title: 'ISO 27001',
    description: 'Certified information security management system',
    icon: '📋',
  },
  {
    title: 'GDPR Compliant',
    description: 'Full data protection and privacy compliance for EU operations',
    icon: '🇪🇺',
  },
  {
    title: 'HIPAA Ready',
    description: 'Healthcare-grade security controls for protected health information',
    icon: '🏥',
  },
  {
    title: '99.9% SLA',
    description: 'Enterprise uptime guarantee backed by 24/7 infrastructure monitoring',
    icon: '⏱️',
  },
  {
    title: 'End-to-End Encryption',
    description: 'AES-256 encryption at rest and TLS 1.3 in transit for all data',
    icon: '🔒',
  },
];

const baseUrl = 'https://ziontechgroup.com';

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Zion Tech Group',
      url: baseUrl,
      logo: `${baseUrl}/icon.svg`,
      description:
        'Zion Tech Group delivers AI applications, engineering services, and security-first implementation support.',
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Zion Tech Group',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Featured Zion AI Apps',
      numberOfItems: featuredApps.length,
      itemListElement: featuredApps.map((app, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: app.name,
        url: `${baseUrl}${app.href}`,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'Zion Tech Group | AI & IT Solutions',
  description:
    'Advanced AI services and production-ready apps for generative AI, agents, RAG, multimodal intelligence, and secure delivery with clear implementation roadmaps.',
  metadataBase: new URL(baseUrl),
  keywords: [
    'AI apps',
    'advanced AI services',
    'generative AI',
    'autonomous agents',
    'RAG',
    'workflow automation',
    'CRM automation',
    'cybersecurity',
    'devops automation',
    'software development',
    'technology services',
    'enterprise AI implementation',
    'consulting',
    'implementation',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zion Tech Group | Advanced AI Services & IT Solutions',
    description:
      'Enterprise-grade AI: generative AI, autonomous agents, RAG, multimodal intelligence, governance, and secure delivery. Explore verified app links and implementation paths.',
    url: baseUrl,
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-home.svg',
        width: 1200,
        height: 630,
        type: 'image/svg+xml',
        alt: 'Zion Tech Group AI delivery playbooks and app library',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group | Advanced AI Services & IT Solutions',
    description:
      'Enterprise-grade AI: generative AI, autonomous agents, RAG, governance, and secure delivery. Explore verified app links and implementation paths.',
    images: ['/og-home.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sectionShellClassName = 'relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8';
const sectionScrollOffsetClassName = 'scroll-mt-24 md:scroll-mt-28';

export default function Page() {
  const categoryPills = Array.from(new Set(featuredApps.map((app) => app.category)));
  const categoryBreakdown = categoryPills.map((category) => ({
    category,
    count: featuredApps.filter((app) => app.category === category).length,
  }));
  const launchOptions = featuredApps.slice(0, 4);
  const structuredDataJson = JSON.stringify(homeStructuredData);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.24),transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25 [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />
      </div>

      <section className={`${sectionShellClassName} pb-16 pt-20 sm:pb-24 sm:pt-28`}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-100 shadow-[0_0_0_1px_rgba(168,85,247,0.18)]">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              AI products, secure engineering, and delivery at scale
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/50 bg-emerald-500/15 px-3 py-1.5 text-[11px] font-semibold text-emerald-50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Under continuous AI improvement
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/50 bg-sky-500/10 px-3 py-1.5 text-[11px] font-medium text-sky-100">
                Live AI Lab tools & site evolution insights are powering this page.
              </span>
              <Link
                href="/ai-lab"
                className="inline-flex items-center rounded-full border border-purple-400/50 bg-purple-500/15 px-3 py-1.5 text-[11px] font-semibold text-purple-50 transition hover:bg-purple-500/25"
              >
                Explore AI Lab →
              </Link>
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Design, Launch, and Scale
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                {' '}
                AI Operations
              </span>{' '}
              With Confidence
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Zion Tech Group combines production-ready AI apps with expert engineering and
              security-first delivery. From generative AI and autonomous agents to edge inference,
              regulated industries, custom foundation models, and responsible AI — evaluate live routes, validate priorities fast, and move from
              pilot to scaled operations with a practical execution plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/ai-services"
                className="inline-flex items-center rounded-lg border border-purple-400/40 bg-purple-500/15 px-4 py-2 text-sm font-medium text-purple-100 transition hover:bg-purple-500/25"
              >
                Browse Advanced AI Services →
              </Link>
              <Link
                href="/ai-services/advanced-ai-enterprise-intelligence-hub"
                className="inline-flex items-center rounded-lg border border-fuchsia-400/40 bg-fuchsia-500/15 px-4 py-2 text-sm font-medium text-fuchsia-100 transition hover:bg-fuchsia-500/25"
              >
                Explore Advanced AI Hub →
              </Link>
              <Link
                href="/ai-services/ai-strategy-roadmap"
                className="inline-flex items-center rounded-lg border border-slate-600/80 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-700/50"
              >
                AI Strategy & Roadmap
              </Link>
              <Link
                href="/ai-services/ai-integration-apis"
                className="inline-flex items-center rounded-lg border border-slate-600/80 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-700/50"
              >
                AI Integration & APIs
              </Link>
            </div>
            <div className="mt-6 w-full rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  What’s new in the Zion AI platform
                </p>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[10px] text-slate-300">
                  Updated continuously by autonomous agents
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {whatsNewItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-3 text-xs text-slate-200 transition hover:border-purple-400/60 hover:bg-slate-900"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-300">
                      {item.tag}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white group-hover:text-purple-100">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-slate-300">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact#engagement"
                data-cta-event="cta_primary"
                data-cta-label="hero"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-700/40 hover:from-purple-500 hover:to-pink-500"
              >
                Start a Project in 48 Hours →
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-8 py-3.5 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white hover:bg-slate-800/60"
              >
                Explore Solutions
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-8 py-3.5 text-base font-semibold text-purple-100 transition hover:bg-purple-500/20"
              >
                View Pricing
              </Link>
              <Link
                href="#advanced-ai-services"
                className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-8 py-3.5 text-base font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
              >
                Advanced AI Services →
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {strategicOutcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-900/65 px-4 py-3.5 text-sm text-slate-100"
                >
                  <span className="mt-0.5 flex-shrink-0 text-purple-400">✓</span>
                  {outcome}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {momentumSignals.slice(0, 6).map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-100"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/80 p-7 shadow-2xl shadow-purple-900/25 backdrop-blur-md ring-1 ring-white/5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                <span className="text-lg">🚀</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                  Launch roadmap
                </p>
                <h2 className="text-lg font-semibold text-white">Your first rollout</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Select a focused use case, ship a measurable pilot, and build toward enterprise-ready
              operations.
            </p>

            <ul className="mt-6 space-y-3">
              {launchOptions.map((app) => (
                <li
                  key={app.href}
                  className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3.5 text-sm text-slate-100 transition hover:border-purple-400/40 hover:bg-slate-900/70"
                >
                  <p className="font-semibold text-white group-hover:text-purple-200">{app.name}</p>
                  <p className="mt-1 text-xs text-slate-300">{app.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-500/15 to-fuchsia-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                Top app categories
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {categoryBreakdown.slice(0, 4).map((item) => (
                  <div
                    key={item.category}
                    className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-3 py-2.5"
                  >
                    <p className="text-lg font-bold text-white">{item.count}</p>
                    <p className="text-xs text-slate-200">{item.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-900/20 via-slate-900/90 to-slate-950/80 p-6 sm:p-8 ring-1 ring-cyan-500/15">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
            Most advanced AI solutions
          </p>
          <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">
            Edge inference, real-time pipelines, and AI built for regulated industries
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            Beyond cloud-only AI: deploy low-latency inference at the edge for voice, video, and high-frequency systems. Need compliance? We deliver HIPAA, SOC 2, GDPR, and EU AI Act–ready solutions for healthcare, finance, legal, and government. Custom foundation models and AI security round out our most advanced offerings.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/ai-services/advanced-ai-enterprise-intelligence-hub"
              className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
            >
              🧠 Advanced AI & Enterprise Intelligence Hub →
            </Link>
            <Link
              href="/ai-services/ai-edge-realtime-inference"
              className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
            >
              ⚡ Edge & Real-Time AI →
            </Link>
            <Link
              href="/ai-services/ai-regulated-industries"
              className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
            >
              🏛️ AI for Regulated Industries →
            </Link>
            <Link
              href="/ai-services/ai-foundation-models-custom-training"
              className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
            >
              🏗️ Foundation Models & Custom Training →
            </Link>
            <Link
              href="/ai-services/ai-security-responsible-ai"
              className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
            >
              🛡️ AI Security & Responsible AI →
            </Link>
            <Link
              href="/ai-services/ai-strategy-roadmap"
              className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
            >
              🗺️ AI Strategy & Roadmap →
            </Link>
            <Link
              href="/ai-services/ai-integration-apis"
              className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
            >
              🔌 AI Integration & APIs →
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-4 py-2.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20"
            >
              Browse all Advanced AI Services →
            </Link>
          </div>
        </div>

        <div id="advanced-ai-services" className="mt-16 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 via-slate-900/80 to-slate-950/60 p-6 sm:p-8 ring-1 ring-purple-500/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
            Advanced AI Services
          </p>
          <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Enterprise-grade AI for the most demanding use cases
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            Deploy generative AI at scale, autonomous agents, multimodal intelligence, RAG, and AI copilots — with full governance and security. Add edge and real-time inference, AI for regulated industries, custom foundation models, AI security, strategy & roadmap, integration & APIs, and observability & MLOps. Production-ready solutions with measurable ROI and enterprise support.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">Generative AI</span>
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">Autonomous Agents</span>
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">RAG & Knowledge</span>
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">AI Copilots</span>
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">Governance & Trust</span>
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">Observability & MLOps</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">Strategy & Roadmap</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">Integration & APIs</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">Edge & Real-Time</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">Regulated Industries</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">Foundation Models</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">AI Security</span>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/ai-services/generative-ai-enterprise"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🧠</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                Generative AI Enterprise
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Secure LLM workflows, RAG, fine-tuning. Enterprise-scale content and code generation.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-agents-autonomous"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🤖</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI Agents & Autonomous Workflows
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Agents that reason, plan, and act. Multi-step automation with human-in-the-loop.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-model-orchestration"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🎛️</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI Model Orchestration
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Multi-model routing, fallback, cost optimization. One API across providers.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-copilot-enterprise"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">👤</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI Copilot & Enterprise Assistants
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Context-aware AI embedded in your tools. Sales, support, and engineering copilots.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/ai-services/ai-multimodal-intelligence"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🎬</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI Multimodal Intelligence
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Unified understanding of text, video, images, and audio. Document-to-video pipelines.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-rag-knowledge-systems"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">📚</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI RAG & Knowledge Systems
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Ground AI in your knowledge bases. Reduce hallucinations with source attribution.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-governance-trust"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">⚖️</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI Governance & Trust
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Policy enforcement, bias monitoring, audit trails. EU AI Act and compliance-ready.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-observability-mlops"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">📡</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI Observability & MLOps
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Trace, evaluate, and optimize AI at scale. Full visibility for LLMs, agents, and pipelines.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-strategy-roadmap"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🗺️</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI Strategy & Roadmap
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Discovery workshops, use-case prioritization, and phased roadmaps for production AI.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/ai-services/ai-integration-apis"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🔌</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                AI Integration & APIs
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Unified API layer, enterprise connectors, and event-driven pipelines for your stack.
              </p>
              <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-edge-realtime-inference"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-cyan-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">⚡</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-cyan-300">
                AI Edge & Real-Time Inference
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Low-latency inference at the edge. Voice, video, and high-frequency decision systems.
              </p>
              <p className="mt-2 text-xs font-semibold text-cyan-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-regulated-industries"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-cyan-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🏛️</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-cyan-300">
                AI for Regulated Industries
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                HIPAA, SOC 2, EU AI Act–ready. Healthcare, finance, legal, and government.
              </p>
              <p className="mt-2 text-xs font-semibold text-cyan-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-foundation-models-custom-training"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-cyan-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🏗️</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-cyan-300">
                AI Foundation Models & Custom Training
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Domain-specific pretraining, fine-tuning, and alignment. Full data sovereignty.
              </p>
              <p className="mt-2 text-xs font-semibold text-cyan-300">Learn more →</p>
            </Link>
            <Link
              href="/ai-services/ai-security-responsible-ai"
              className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-cyan-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span className="text-2xl">🛡️</span>
              <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-cyan-300">
                AI Security & Responsible AI
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-200">
                Adversarial robustness, prompt injection defense, fairness, and human oversight.
              </p>
              <p className="mt-2 text-xs font-semibold text-cyan-300">Learn more →</p>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/ai-services"
              className="inline-flex items-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20"
            >
              Browse all AI Services
            </Link>
            <Link
              href="/contact?topic=advanced-ai"
              className="ml-3 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-fuchsia-500"
            >
              Discuss Advanced AI →
            </Link>
          </div>
        </div>

        <AiSiteHealthPanel />

        <div className="mt-14 rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 sm:p-8 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
            Core Services
          </p>
          <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Professional services for every stage of your AI journey
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            From AI model development to talent matching and micro-SaaS deployment — we deliver
            end-to-end solutions.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreServices.slice(0, 5).map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
              >
                <span className="text-2xl">{service.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-200">{service.description}</p>
                <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreServices.slice(5).map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-4 transition hover:border-purple-400/50 hover:bg-slate-900/80 hover:-translate-y-0.5"
              >
                <span className="text-2xl">{service.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-white transition group-hover:text-purple-300">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-200">{service.description}</p>
                <p className="mt-2 text-xs font-semibold text-purple-300">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {valueHighlights.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-500/10"
            >
              <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs text-slate-300">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-900/65 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
            Jump to what matters
          </p>
          <nav aria-label="Homepage quick links" className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {quickJumpLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 transition hover:border-purple-400/50 hover:bg-slate-900/80"
              >
                <p className="text-sm font-semibold text-white">{link.label}</p>
                <p className="mt-1 text-xs text-slate-300">{link.description}</p>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <ProductRecommenderSection />

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section className={`${sectionShellClassName} py-20`}>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
            Trusted by teams worldwide
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Built for Enterprise Scale
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
          {companyStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group rounded-2xl border bg-gradient-to-br p-6 text-center shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-purple-500/15 ${
                index === 3
                  ? 'border-purple-500/40 from-purple-900/40 to-slate-900/70 ring-1 ring-purple-500/20'
                  : 'border-slate-700/60 from-slate-900/80 to-slate-950/60 hover:border-purple-400/40'
              }`}
            >
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section className={`${sectionShellClassName} py-16`}>
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10 ring-1 ring-white/5">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Core Engineering Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Expert teams for AI, cloud, security, and development
            </h2>
            <p className="mt-3 text-slate-200">
              Beyond our AI app suite, we deliver custom engineering services — from AI model development
              to cloud migration and cybersecurity audits.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-slate-700/80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-2.5 text-3xl shadow-inner">
                    {service.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-purple-300">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-200">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-600/80 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-purple-300 group-hover:text-purple-200">Learn more →</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-xl border border-purple-400/40 bg-purple-500/10 px-7 py-3.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20 hover:-translate-y-0.5"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section
        id="roi-planner"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-12`}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Interactive Planning
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Estimate your AI delivery upside in minutes
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Use this estimator to model potential impact from your first production automation
              rollout. It helps align stakeholders around expected effort, payback, and business
              value before kickoff.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Map estimated savings to measurable workflow improvements.
              </li>
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Test assumptions with finance, operations, and engineering leaders.
              </li>
              <li className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3">
                Translate pilot outcomes into a scale-ready implementation plan.
              </li>
            </ul>
            <Link
              href="/contact?topic=roi-workshop&source=roi-planner"
              data-cta-event="cta_primary"
              data-cta-label="roi_planner"
              className="mt-6 inline-flex rounded-lg border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20"
            >
              Request a tailored ROI workshop
            </Link>
          </div>
          <ROIImpactEstimator />
        </div>
      </section>

      <section
        id="launch-advisor"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-6`}
      >
        <LaunchReadinessAdvisor />
      </section>

      <section className={`${sectionShellClassName} py-8`}>
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-5 sm:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                Interactive AI experiences
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                Try Zion&apos;s in-browser AI experiments
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Model automation ROI, configure the right modules for your stack, and see how Zion&apos;s autonomous
                agents would audit and evolve your site — all directly in the browser.
              </p>
            </div>
            <Link
              href="/ai-experiments"
              className="inline-flex items-center rounded-xl border border-purple-400/50 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-200 transition hover:bg-purple-500/20"
            >
              Open AI Experiments
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                New: AI Micro-SaaS Idea Generator
              </p>
              <p className="mt-1 leading-5">
                Describe your audience and go-to-market plans and get concrete micro-SaaS concepts mapped to Zion
                apps and services, directly in your browser.
              </p>
              <Link
                href="/micro-saas/ai-idea-generator"
                className="mt-2 inline-flex items-center rounded-full border border-sky-400/60 bg-sky-500/10 px-3 py-1.5 text-[11px] font-semibold text-sky-100 transition hover:bg-sky-500/20"
              >
                Try AI Micro-SaaS Idea Generator
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                New: AI solutions & live URL audit
              </p>
              <p className="mt-1 leading-5">
                Use the AI Solutions Configurator to see how Zion would assemble modules for your stack, then paste
                any page into the AI URL Audit Assistant to get an AI-inspired improvement checklist.
              </p>
              <Link
                href="/ai/solutions-configurator"
                className="mt-2 inline-flex items-center rounded-full border border-sky-400/60 bg-sky-500/10 px-3 py-1.5 text-[11px] font-semibold text-sky-100 transition hover:bg-sky-500/20"
              >
                Try AI Solutions Configurator
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Link>
              <Link
                href="/ai/url-audit-assistant"
                className="mt-2 inline-flex items-center rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
              >
                Open AI URL Audit Assistant
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                New: AI build failure runbook
              </p>
              <p className="mt-1 leading-5">
                Paste a Next build / TypeScript / ESLint / Jest log and get a deterministic root-cause diagnosis plus safe next steps.
              </p>
              <Link
                href="/ai-lab/build-failure-explainer"
                className="mt-2 inline-flex items-center rounded-full border border-sky-400/60 bg-sky-500/10 px-3 py-1.5 text-[11px] font-semibold text-sky-100 transition hover:bg-sky-500/20"
              >
                Explain build failure
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section className={`${sectionShellClassName} py-16`}>
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-6 sm:p-10 ring-1 ring-white/5">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Why teams choose Zion
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Experience-led design with execution-ready delivery
            </h2>
            <p className="mt-3 max-w-2xl text-slate-200">
              We pair product thinking, engineering rigor, and security-by-default delivery so your
              teams can move quickly without compromising reliability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {differentiationPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-purple-400/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 text-3xl ring-1 ring-purple-500/20">
                    {point.icon}
                  </div>
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-200">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-16`}>
        <Testimonials />
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section id="case-studies" className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-16`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
                Case Studies
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Real Results from Real Teams
              </h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                See how organizations across industries use Zion solutions to drive measurable outcomes.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
            >
              View all case studies
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {caseStudyTeasers.map((study) => (
              <Link
                key={study.title}
                href={study.href ?? `/case-studies#industry=${encodeURIComponent(study.industry)}`}
                className="group rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-2xl">
                    {study.icon}
                  </span>
                  <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-100">
                    {study.result}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white transition group-hover:text-purple-300">
                  {study.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-400">{study.industry}</p>
                <p className="mt-2 text-sm leading-5 text-slate-300">{study.description}</p>
                <p className="mt-3 text-xs font-semibold text-purple-300">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Solution pillars
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Choose the path that matches your priorities
            </h2>
          </div>
          <Link
            href="/consultation"
            className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-purple-400 hover:text-white"
          >
            Discuss your roadmap
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {spotlightPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-purple-500/20 bg-slate-900/65 p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-500/15"
            >
              <div className="inline-flex rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-3xl">
                {pillar.icon}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{pillar.description}</p>
              <Link
                href={pillar.href}
                className="mt-5 inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
              >
                {pillar.cta} →
              </Link>
              <Link
                href={`/contact?topic=project&source=solution-pillar&pillar=${encodeURIComponent(
                  pillar.title,
                )}`}
                className="mt-3 inline-flex text-sm font-semibold text-slate-100 underline-offset-4 hover:underline"
                data-cta-event="cta_primary"
                data-cta-label="solution_pillar"
              >
                Start a Project
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="automation-systems" className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Autonomous improvement
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            AI systems that keep the app improving for you
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Behind the scenes, Zion runs an autonomous AI operations layer that continuously audits the live
            site, proposes improvements, and ships safe fixes — from content and navigation to performance,
            accessibility, and CI/CD workflows.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
              <h3 className="text-lg font-semibold text-white">Continuous app evolution agents</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                AI Development Agent, AI App Improvement Orchestrator, and the AI Site Improvement Agent visit
                the live site, run UX, SEO, accessibility, and link audits, and feed implementation-ready ideas
                into an evolution backlog — with safe auto-fixes for high-impact issues.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
              <h3 className="text-lg font-semibold text-white">Autonomous CI & release guardrails</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                GitHub workflows use Lighthouse, Core Web Vitals, sitemap, and security checks so new ideas
                are only deployed when tests, performance, and production health stay within target ranges.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
              <h3 className="text-lg font-semibold text-white">Autonomous advanced-AI content engine</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The AI Continuous Improvement Agent and advanced-AI content orchestrators continuously ideate,
                write, and refresh deep-dive articles and key service pages about agents, RAG, multimodal AI,
                orchestration, governance, and security — keeping the most advanced AI solutions at the front
                of the site.
              </p>
              <Link
                href="/blog"
                className="mt-3 inline-flex text-xs font-semibold text-purple-300 underline-offset-4 hover:text-purple-200 hover:underline"
              >
                Explore advanced AI insights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      <section id="industry-solutions" className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-16`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Industry Solutions
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              AI workflows tailored to your industry
            </h2>
            <p className="mt-3 text-slate-300">
              Every vertical has unique workflows, compliance requirements, and integration needs. Explore
              how Zion apps map to your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industrySolutions.slice(0, 9).map((sol) => (
              <Link
                key={sol.industry}
                href={sol.href}
                className="group rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-3xl">
                    {sol.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-purple-300">
                    {sol.industry}
                  </h3>
                </div>
                <p className="mt-3 text-sm font-semibold text-purple-200">{sol.headline}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{sol.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sol.apps.map((app) => (
                    <span
                      key={app}
                      className="rounded-full border border-slate-600/80 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-purple-300">Explore solutions →</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
            >
              <span>View all industry solutions</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="featured-library"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-12`}
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Featured App Library
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Explore High-Impact Zion Apps by Outcome
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Browse production-focused app routes across growth, engineering, security, and
              infrastructure.
            </p>
          </div>
          <Link
            href="/services"
            className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
          >
            Browse all services
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categoryBreakdown.map((item) => (
            <span
              key={item.category}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/75 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              <span>{item.category}</span>
              <span className="rounded-full bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                {item.count}
              </span>
            </span>
          ))}
        </div>

        <FeaturedAppGrid apps={featuredApps} />
      </section>

      <section
        id="platform-pages"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-8`}
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Additional Platform Pages
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Explore More Industry and Micro-SaaS Routes
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Discover more launch-ready pages beyond the core featured app library, including
              vertical solutions and micro-SaaS offerings.
            </p>
          </div>
          <Link
            href="/micro-saas-services"
            className="rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:text-white"
          >
            Open micro-SaaS hub
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformPages.slice(0, 15).map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 transition hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <span className="rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200">
                {page.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white transition group-hover:text-purple-300">
                {page.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{page.description}</p>
              <p className="mt-4 text-sm font-semibold text-purple-300">Open page →</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="innovation-bundles" className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-10`}>
        <div className="rounded-3xl border border-purple-500/25 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              New ideas for faster rollout
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Start with pre-designed innovation bundles
            </h2>
            <p className="mt-3 text-slate-300">
              Each bundle groups high-impact feature pages into a practical launch path your team can
              execute immediately.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {innovationBundles.map((bundle) => (
              <div
                key={bundle.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-3xl">{bundle.icon}</span>
                  <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                    {bundle.impact}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{bundle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{bundle.description}</p>
                <ul className="mt-4 space-y-2">
                  {bundle.modules.map((module) => (
                    <li key={module.href}>
                      <Link
                        href={module.href}
                        className="text-sm text-slate-300 transition hover:text-purple-300"
                      >
                        {module.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={bundle.href}
                  className="mt-5 inline-flex text-sm font-semibold text-purple-300 transition hover:text-purple-200"
                >
                  {bundle.cta} →
                </Link>
                <Link
                  href={`/contact?topic=project&source=innovation-bundle&bundle=${encodeURIComponent(
                    bundle.title,
                  )}`}
                  className="mt-3 inline-flex text-sm font-semibold text-slate-100 underline-offset-4 hover:underline"
                  data-cta-event="cta_primary"
                  data-cta-label="innovation_bundle"
                >
                  Start this bundle
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <SolutionFinder apps={featuredApps} />
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Browse by Business Goal</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Jump directly to app pages based on the result you want to drive.
          </p>

          <AppCollectionGrid collections={appCollections} />
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Delivery timeline
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            A practical path from idea to scaled operations
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5"
              >
                <span className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[11px] text-slate-300">
                  Step {index + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  {step.duration}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="delivery-faq"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} py-12`}
      >
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">FAQ</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Answers for delivery and adoption planning
          </h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Common questions from teams evaluating Zion app implementations.
          </p>

          <div className="mt-6 divide-y divide-slate-700/70 rounded-2xl border border-slate-700/70 bg-slate-950/60">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-sm font-semibold text-white">{item.question}</span>
                  <span className="mt-0.5 text-purple-300 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 to-slate-950/70 p-6 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Autonomous AI Operations
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              How Zion improves itself every day
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              AI agents continuously audit the live site, apply safe improvements, and track automation
              health — so the experience gets better even between releases.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
              <h3 className="text-base font-semibold text-white">Daily UX, SEO & content audits</h3>
              <p className="mt-2 text-sm text-slate-300">
                Automated checks review core pages for metadata, accessibility, performance, and clear
                CTAs that lead into contact and pricing flows.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
              <h3 className="text-base font-semibold text-white">App evolution & improvement backlog</h3>
              <p className="mt-2 text-sm text-slate-300">
                LLM-powered agents turn audit results into an ordered backlog of safe, high-impact
                changes across copy, navigation, and product pages.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
              <h3 className="text-base font-semibold text-white">Automation status dashboard</h3>
              <p className="mt-2 text-sm text-slate-300">
                An internal automation dashboard tracks overall health scores for audits, content
                freshness, and deployment readiness in one place.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/automation-status"
              className="rounded-xl border border-purple-400/40 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20"
            >
              View automation status
            </Link>
            <Link
              href="/contact?topic=project&source=automation-section"
              className="rounded-xl border border-slate-600 bg-slate-900/80 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-purple-400 hover:text-white"
            >
              Talk about automation for your stack
            </Link>
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Enterprise Trust & Security
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Security and compliance built into every layer
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Zion products are designed to meet the strictest enterprise requirements from day one —
              so you can deploy with confidence and pass audits without surprises.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-black/20"
              >
                <span className="flex-shrink-0 rounded-xl border border-slate-700 bg-slate-900/80 p-3 text-2xl">
                  {badge.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{badge.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/75 to-slate-950/70 p-6 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              Technology Partners
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Built on Industry-Leading Platforms
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              We integrate with the tools your team already uses and build on platforms trusted by
              enterprises worldwide.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {[
              { name: 'AWS', icon: '☁️', desc: 'Cloud infrastructure' },
              { name: 'Google Cloud', icon: '🌐', desc: 'AI & data analytics' },
              { name: 'Microsoft Azure', icon: '🔷', desc: 'Enterprise cloud' },
              { name: 'Snowflake', icon: '❄️', desc: 'Data warehouse' },
              { name: 'Kubernetes', icon: '⚙️', desc: 'Container orchestration' },
              { name: 'Terraform', icon: '🏗️', desc: 'Infrastructure as Code' },
              { name: 'OpenAI', icon: '🤖', desc: 'LLM & generative AI' },
              { name: 'Vercel', icon: '▲', desc: 'Frontend deployment' },
              { name: 'Datadog', icon: '📊', desc: 'Observability' },
              { name: 'Stripe', icon: '💳', desc: 'Payment processing' },
              { name: 'Salesforce', icon: '☁️', desc: 'CRM platform' },
              { name: 'HubSpot', icon: '🧲', desc: 'Marketing automation' },
            ].map((partner) => (
              <div
                key={partner.name}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 text-center transition hover:-translate-y-0.5 hover:border-purple-400/40"
              >
                <span className="text-3xl">{partner.icon}</span>
                <p className="text-sm font-semibold text-white">{partner.name}</p>
                <p className="text-xs text-slate-400">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShellClassName} py-12`}>
        <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
              How We Work
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Engagement Models for Every Stage
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Choose the engagement model that fits your needs — from focused discovery workshops
              to full-scale production delivery and ongoing optimization.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Discovery Sprint',
                duration: '1–2 weeks',
                description: 'Intensive workshops to map goals, audit existing systems, and define a prioritized implementation roadmap.',
                deliverables: ['Stakeholder alignment', 'Technical audit report', 'Prioritized roadmap', 'Effort & cost estimates'],
                icon: '🔍',
              },
              {
                title: 'Pilot Build',
                duration: '2–6 weeks',
                description: 'Scoped MVP delivery with measurable KPIs, integration testing, and stakeholder demos.',
                deliverables: ['Working prototype', 'Integration test suite', 'KPI tracking setup', 'Stakeholder demo'],
                icon: '🚀',
              },
              {
                title: 'Production Delivery',
                duration: '4–12 weeks',
                description: 'Full implementation with security hardening, observability, team training, and operational handoff.',
                deliverables: ['Production deployment', 'Security controls', 'Runbooks & docs', 'Team training'],
                icon: '🏗️',
              },
              {
                title: 'Ongoing Optimization',
                duration: 'Monthly retainer',
                description: 'Continuous improvement with feature iterations, performance tuning, and expanded use cases.',
                deliverables: ['Monthly reviews', 'Feature iterations', 'Performance reports', 'Roadmap updates'],
                icon: '📈',
              },
            ].map((model) => (
              <div
                key={model.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-6 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{model.icon}</span>
                  <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                    {model.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{model.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{model.description}</p>
                <ul className="mt-4 space-y-2">
                  {model.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-purple-400">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
            >
              Discuss Your Engagement →
            </Link>
          </div>
        </div>
      </section>

      <section
        id="start-project"
        className={`${sectionShellClassName} ${sectionScrollOffsetClassName} pb-28 pt-16`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/50 via-fuchsia-900/40 to-pink-900/50 p-10 text-center shadow-2xl shadow-purple-900/30 sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready for a Tailored AI Delivery Plan?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-100">
              Combine app modules, integration architecture, and engineering support into one
              measurable roadmap.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Learn About Zion
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-purple-300/50 bg-purple-500/20 px-8 py-3.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/30 hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />
    </div>
  );
}
