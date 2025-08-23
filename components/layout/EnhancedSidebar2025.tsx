import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronDown, ChevronRight, Search, Settings, User, 
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, 
  BarChart3, Code, Smartphone, Server, Users, Award, 
  TrendingUp, BookOpen, FileText, GraduationCap, Headphones,
  Zap, Globe, Lock, Phone, Mail, MapPin, Star, MessageCircle,
  ExternalLink, Home, Briefcase, Info, HelpCircle, Shield as ShieldIcon, Play,
  Sparkles, Target, Palette, Camera, Mic, Speaker, Wifi, Bluetooth, Satellite,
  Telescope, Plane, Moon, Sun, Heart, Handshake, Car, Building, Music, Trees, Leaf, DollarSign, Factory, Battery, Newspaper
} from 'lucide-react';

const EnhancedSidebar2025: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ 
  isOpen, 
  onClose 
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['revolutionary-2045', 'ai-services']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sidebarSections = [
    {
      id: 'revolutionary-2045',
      title: 'Revolutionary 2045',
      icon: Sparkles,
      color: 'from-pink-500 to-purple-500',
      badge: 'New',
      featured: true,
      items: [
        { label: 'AI Consciousness Evolution 2045', href: '/ai-consciousness-evolution-2045', badge: 'Revolutionary', featured: true },
        { label: 'Quantum Neural Ecosystem 2045', href: '/quantum-neural-ecosystem-2045', badge: 'Quantum', featured: true },
        { label: 'Space Resource Intelligence 2045', href: '/space-resource-intelligence-2045', badge: 'Space', featured: true },
        { label: 'Metaverse Development Studio Pro 2045', href: '/metaverse-development-studio-pro-2045', badge: 'Metaverse' },
        { label: 'Quantum Cybersecurity Platform 2045', href: '/quantum-cybersecurity-platform-2045', badge: 'Security' },
        { label: 'AI Autonomous Business Process Automation 2045', href: '/ai-autonomous-business-process-automation-2045', badge: 'AI' },
        { label: 'Quantum Bio-Computing Platform 2045', href: '/quantum-bio-computing-platform-2045', badge: 'Quantum' },
        { label: 'Space Mining Automation Platform 2045', href: '/space-mining-automation-platform-2045', badge: 'Space' },
        { label: 'Revolutionary 2045 Services Showcase', href: '/revolutionary-2045-futuristic-services-showcase', badge: 'Showcase' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        { label: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution', badge: 'Hot', featured: true },
        { label: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence', badge: 'New' },
        { label: 'AI Autonomous Research', href: '/ai-autonomous-research', badge: 'Trending' },
        { label: 'AI Content Personalization', href: '/ai-content-personalization' },
        { label: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
        { label: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
        { label: 'AI Customer Success', href: '/ai-customer-success' },
        { label: 'AI Sales Intelligence', href: '/ai-sales-intelligence' },
        { label: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
        { label: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
        { label: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization' },
        { label: 'AI Market Research', href: '/ai-market-research' },
        { label: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
        { label: 'AI Autonomous Vehicle', href: '/ai-autonomous-vehicle' },
        { label: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
        { label: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform' },
        { label: 'AI IoT Platform', href: '/ai-iot-platform' },
        { label: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' },
        { label: 'AI Phone Agent', href: '/ai-phone-agent' },
        { label: 'AI Voice Agent Platform', href: '/ai-voice-agent-platform' }
      ]
    },
    {
      id: 'quantum-tech',
      title: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { label: 'Quantum Neural Ecosystem', href: '/quantum-neural-ecosystem', badge: 'Revolutionary', featured: true },
        { label: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', badge: 'Critical' },
        { label: 'Quantum Internet Security', href: '/quantum-internet-security' },
        { label: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
        { label: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
        { label: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
        { label: 'Quantum Financial Intelligence', href: '/quantum-financial-intelligence' },
        { label: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
        { label: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
        { label: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
        { label: 'Quantum Storage Solutions', href: '/quantum-storage-solutions' },
        { label: 'Quantum Workload Orchestration', href: '/quantum-workload-orchestration' },
        { label: 'Quantum AI Brain Computer Interface', href: '/quantum-ai-brain-computer-interface' },
        { label: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' },
        { label: 'Quantum Blockchain', href: '/quantum-blockchain' },
        { label: 'Quantum Energy', href: '/quantum-energy' },
        { label: 'Quantum IoT', href: '/quantum-iot' },
        { label: 'Quantum Logistics', href: '/quantum-logistics' },
        { label: 'Quantum Metaverse', href: '/quantum-metaverse' },
        { label: 'Quantum Robotics', href: '/quantum-robotics' },
        { label: 'Quantum Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
        { label: 'Quantum Secure Communication', href: '/quantum-secure-communication' }
      ]
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      icon: Rocket,
      color: 'from-pink-500 to-red-500',
      items: [
        { label: 'Space Resource Intelligence', href: '/space-resource-intelligence', badge: 'Space', featured: true },
        { label: 'Space Mining Platform', href: '/space-resource-mining-platform' },
        { label: 'Space Technology AI Platform', href: '/space-technology-ai-platform' },
        { label: 'Satellite Technology', href: '/satellite-technology' },
        { label: 'Interplanetary Communication', href: '/interplanetary-communication' },
        { label: 'Orbital Computing', href: '/orbital-computing' },
        { label: 'Space Colonization Services', href: '/space-colonization-services' },
        { label: 'Space Cybersecurity', href: '/space-cybersecurity' },
        { label: 'Space Data Analytics', href: '/space-data-analytics' },
        { label: 'Space Mining Automation Platform', href: '/space-mining-automation-platform' },
        { label: 'Space Resource Intelligence Platform', href: '/space-resource-intelligence-platform' }
      ]
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT Solutions',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      items: [
        { label: 'IT Infrastructure', href: '/it-services', badge: 'Popular' },
        { label: 'Cloud Platform', href: '/cloud-platform', badge: 'Scalable' },
        { label: 'Cybersecurity', href: '/cybersecurity', badge: 'Critical' },
        { label: 'Data Analytics', href: '/data-analytics', badge: 'Insights' },
        { label: 'DevOps Automation', href: '/devops-automation', badge: 'Efficient' },
        { label: 'Mobile & Web Solutions', href: '/mobile-web-solutions', badge: 'Modern' },
        { label: 'Zero Trust Security', href: '/zero-trust-security' },
        { label: 'Edge Computing', href: '/edge-computing' },
        { label: 'Blockchain Infrastructure', href: '/blockchain-infrastructure' },
        { label: 'Multi-Cloud Management', href: '/multi-cloud-management' },
        { label: 'Network Automation', href: '/network-automation' },
        { label: 'IT Asset Management', href: '/it-asset-management' },
        { label: 'Compliance Automation', href: '/compliance-automation' },
        { label: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform' },
        { label: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
        { label: 'Autonomous Network Management', href: '/autonomous-network-management' },
        { label: 'Autonomous IT Service Management', href: '/autonomous-it-service-management' },
        { label: 'Autonomous Customer Success', href: '/autonomous-customer-success' },
        { label: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence' },
        { label: 'Autonomous Business Operations', href: '/autonomous-business-operations' },
        { label: 'Autonomous Code Generation', href: '/ai-autonomous-code-generation' },
        { label: 'Autonomous Content Factory', href: '/ai-autonomous-content-factory' },
        { label: 'Autonomous Customer Service', href: '/ai-autonomous-customer-service' },
        { label: 'Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
        { label: 'Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
        { label: 'Autonomous HR Platform', href: '/ai-autonomous-hr-platform' },
        { label: 'Autonomous Marketing Platform', href: '/ai-autonomous-marketing-platform' },
        { label: 'Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
        { label: 'Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform' },
        { label: 'Autonomous Sales Platform', href: '/ai-autonomous-sales-platform' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Platforms',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      items: [
        { label: 'AI Content Factory', href: '/ai-autonomous-content-factory', badge: 'Trending', featured: true },
        { label: 'Customer Success Platform', href: '/ai-customer-success-platform', badge: 'Popular' },
        { label: 'AI HR Management Platform', href: '/ai-hr-management-platform' },
        { label: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' },
        { label: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite' },
        { label: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { label: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform' },
        { label: 'AI Financial Risk', href: '/ai-financial-risk' },
        { label: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform' },
        { label: 'AI HR Recruitment', href: '/ai-hr-recruitment' },
        { label: 'AI Legal Document Analysis', href: '/ai-legal-document-analysis' },
        { label: 'AI Meeting Notes', href: '/ai-meeting-notes' },
        { label: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro' },
        { label: 'AI Mental Health Companion', href: '/ai-mental-health-companion' },
        { label: 'AI Product Feedback Insights', href: '/ai-product-feedback-insights' },
        { label: 'AI Sales Automation', href: '/ai-sales-automation' },
        { label: 'AI SEO Optimization', href: '/ai-seo-optimization' },
        { label: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization' },
        { label: 'AI UGC Moderation', href: '/ai-ugc-moderation' },
        { label: 'AI Video Editing', href: '/ai-video-editing' },
        { label: 'AI Website Personalization', href: '/ai-website-personalization' },
        { label: 'AI Ad Creative Generator', href: '/ai-ad-creative-generator' },
        { label: 'AI Agents', href: '/ai-agents' },
        { label: 'AI Assistant', href: '/ai-assistant' },
        { label: 'AI Automation Services', href: '/ai-automation-services' },
        { label: 'AI Code Review', href: '/ai-code-review' },
        { label: 'AI Code Review Copilot', href: '/ai-code-review-copilot' },
        { label: 'AI Content Generator', href: '/ai-content-generator' },
        { label: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
        { label: 'AI Creativity Studio', href: '/ai-creativity-studio' },
        { label: 'AI Customer Journey Analytics', href: '/ai-customer-journey-analytics' },
        { label: 'AI Customer Service', href: '/ai-customer-service' },
        { label: 'AI Customer Service Platform', href: '/ai-customer-service-platform' },
        { label: 'AI Data Analytics', href: '/ai-data-analytics' },
        { label: 'AI Education Platform', href: '/ai-education-platform' },
        { label: 'AI Emotion Intelligence Platform', href: '/ai-emotion-intelligence-platform' },
        { label: 'AI Emotional Intelligence Training', href: '/ai-emotional-intelligence-training' },
        { label: 'AI Ethics Governance Framework', href: '/ai-ethics-governance-framework' },
        { label: 'AI Evals', href: '/ai-evals' },
        { label: 'AI Evaluation Orchestrator', href: '/ai-evaluation-orchestrator' },
        { label: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
        { label: 'AI Guardrails', href: '/ai-guardrails' },
        { label: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics' },
        { label: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
        { label: 'AI IoT Platform', href: '/ai-iot-platform' },
        { label: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
        { label: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization' },
        { label: 'AI Market Research', href: '/ai-market-research' },
        { label: 'AI Meeting Notes', href: '/ai-meeting-notes' },
        { label: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro' },
        { label: 'AI Mental Health Companion', href: '/ai-mental-health-companion' },
        { label: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform' },
        { label: 'AI Phone Agent', href: '/ai-phone-agent' },
        { label: 'AI Powered Cybersecurity', href: '/ai-powered-cybersecurity' },
        { label: 'AI Powered Decision Engine', href: '/ai-powered-decision-engine' },
        { label: 'AI Powered DevOps Platform', href: '/ai-powered-devops-platform' },
        { label: 'AI Powered Space Technology', href: '/ai-powered-space-technology' },
        { label: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform' },
        { label: 'AI Product Feedback Insights', href: '/ai-product-feedback-insights' },
        { label: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' },
        { label: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },
        { label: 'AI Sales Automation', href: '/ai-sales-automation' },
        { label: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform' },
        { label: 'AI SEO Optimization', href: '/ai-seo-optimization' },
        { label: 'AI SEO Automation Suite', href: '/ai-seo-automation-suite' },
        { label: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization' },
        { label: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
        { label: 'AI UGC Moderation', href: '/ai-ugc-moderation' },
        { label: 'AI Video Editing', href: '/ai-video-editing' },
        { label: 'AI Voice Agent Platform', href: '/ai-voice-agent-platform' }
      ]
    },
    {
      id: 'industry-solutions',
      title: 'Industry Solutions',
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { label: 'Healthcare AI Solutions', href: '/healthcare-ai-solutions' },
        { label: 'Financial Solutions', href: '/financial-solutions' },
        { label: 'Government Technology', href: '/government-technology-solutions' },
        { label: 'Education Technology', href: '/education-technology-solutions' },
        { label: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
        { label: 'Retail Technology', href: '/retail-technology-solutions' },
        { label: 'Energy & Utilities', href: '/energy-utilities-solutions' },
        { label: 'Entertainment & Media', href: '/entertainment-media-solutions' },
        { label: 'Biotech AI', href: '/biotech-ai' },
        { label: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform' },
        { label: 'Brain Computer Interface', href: '/brain-computer-interface' },
        { label: 'Brain Computer Interface Platform', href: '/brain-computer-interface-platform' },
        { label: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform' }
      ]
    },
    {
      id: 'tools-platforms',
      title: 'Tools & Platforms',
      icon: Code,
      color: 'from-teal-500 to-blue-500',
      items: [
        { label: 'Analytics', href: '/analytics' },
        { label: 'Automation', href: '/automation' },
        { label: 'API Documentation', href: '/api-documentation' },
        { label: 'API Documentation Generator', href: '/api-documentation-generator' },
        { label: 'API Latency SLO Tracker', href: '/api-latency-slo-tracker' },
        { label: 'API Mock Contract Testing', href: '/api-mock-contract-testing' },
        { label: 'API Observability', href: '/api-observability' },
        { label: 'API Observability Starter', href: '/api-observability-starter' },
        { label: 'API Performance Testing', href: '/api-performance-testing' },
        { label: 'API Security Scanner', href: '/api-security-scanner' },
        { label: 'Audit Log Vault', href: '/audit-log-vault' },
        { label: 'Agentic RAG', href: '/agentic-rag' },
        { label: 'Agentic Sales Outreach', href: '/agentic-sales-outreach' },
        { label: 'Browser Automation Cloud', href: '/browser-automation-cloud' },
        { label: 'Browser Performance Monitor', href: '/browser-performance-monitor' },
        { label: 'CI CD Security Hardening', href: '/ci-cd-security-hardening' },
        { label: 'Cloud Backup Compliance', href: '/cloud-backup-compliance' },
        { label: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
        { label: 'Cloud Landing Zone', href: '/cloud-landing-zone' },
        { label: 'Cloudflare Workers Edge Config', href: '/cloudflare-workers-edge-config' },
        { label: 'Cron Job Scheduler', href: '/cron-job-scheduler' },
        { label: 'Data Catalog Lineage', href: '/data-catalog-lineage' },
        { label: 'Data Contracts Governance', href: '/data-contracts-governance' },
        { label: 'Data Pipeline Health', href: '/data-pipeline-health' },
        { label: 'Data Pipeline Observability', href: '/data-pipeline-observability' },
        { label: 'Data Quality Monitor', href: '/data-quality-monitor' },
        { label: 'Database Performance Monitor', href: '/database-performance-monitor' },
        { label: 'Domain DNS Monitor', href: '/domain-dns-monitor' },
        { label: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
        { label: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
        { label: 'Email Deliverability Monitor', href: '/email-deliverability-monitor' },
        { label: 'Email DMARC Analyzer', href: '/email-dmarc-analyzer' },
        { label: 'Feature Flags Edge', href: '/feature-flags-edge' },
        { label: 'GitHub Compliance Bot', href: '/github-compliance-bot' },
        { label: 'Image Optimizer CDN', href: '/image-optimizer-cdn' },
        { label: 'Incident Automation Suite', href: '/incident-automation-suite' },
        { label: 'Incident Copilot', href: '/incident-copilot' },
        { label: 'Incident Postmortem Generator', href: '/incident-postmortem-generator' },
        { label: 'Incident Response Retainer', href: '/incident-response-retainer' },
        { label: 'Infrastructure Drift Detector', href: '/infrastructure-drift-detector' },
        { label: 'Intelligent Content Automation Platform', href: '/intelligent-content-automation-platform' },
        { label: 'Intelligent HR Analytics Platform', href: '/intelligent-hr-analytics-platform' },
        { label: 'Intelligent Supply Chain Optimization', href: '/intelligent-supply-chain-optimization' },
        { label: 'Kubernetes RBAC Auditor', href: '/kubernetes-rbac-auditor' },
        { label: 'LLM Gateway', href: '/llm-gateway' },
        { label: 'Managed Postgres HA', href: '/managed-postgres-ha' },
        { label: 'MLOps Starter', href: '/mlops-starter' },
        { label: 'Mobile Device Management', href: '/mobile-device-management' },
        { label: 'Multi Cloud Disaster Recovery', href: '/multi-cloud-disaster-recovery' },
        { label: 'PDF Render API', href: '/pdf-render-api' },
        { label: 'PII Detection Redaction', href: '/pii-detection-redaction' },
        { label: 'Prompt Policy Registry', href: '/prompt-policy-registry' },
        { label: 'RAG Evaluation Lab', href: '/rag-evaluation-lab' },
        { label: 'Sales Copilot', href: '/sales-copilot' },
        { label: 'Secrets Rotation Automation', href: '/secrets-rotation-automation' },
        { label: 'SEO Automation', href: '/seo-automation' },
        { label: 'SEO Automation Suite', href: '/seo-automation-suite' },
        { label: 'Serverless Cron Manager', href: '/serverless-cron-manager' },
        { label: 'Smart CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },
        { label: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation' },
        { label: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation' },
        { label: 'SSO in a Box', href: '/sso-in-a-box' },
        { label: 'SSO User Lifecycle Automation', href: '/sso-user-lifecycle-automation' },
        { label: 'Status Pages SLO', href: '/status-pages-slo' },
        { label: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder' },
        { label: 'Synthetic Monitor Recorder Pro', href: '/synthetic-monitor-recorder-pro' },
        { label: 'TLS Certificate Monitor', href: '/tls-certificate-monitor' },
        { label: 'Uptime SLO Monitor', href: '/uptime-slo-monitor' },
        { label: 'Vector Search Starter', href: '/vector-search-starter' },
        { label: 'Vendor Risk Automation', href: '/vendor-risk-automation' },
        { label: 'Warehouse Accelerator', href: '/warehouse-accelerator' },
        { label: 'Webhook Relay Replay', href: '/webhook-relay-replay' },
        { label: 'Zero Downtime Migration', href: '/zero-downtime-migration' },
        { label: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture' },
        { label: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' }
      ]
    }
  ];

  // Filter sections based on search query
  const filteredSections = sidebarSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.items.some(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-gray-900 border-r border-cyan-400/20 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-black border-b border-cyan-400/20 p-4">
              <div className="flex items-center justify-between mb-4">
                <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech
                  </span>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="p-4 space-y-2">
              {filteredSections.map((section) => (
                <div key={section.id} className="space-y-1">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                        <section.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-medium">{section.title}</span>
                        {section.badge && (
                          <span className="ml-2 px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                            {section.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        expandedSections.includes(section.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Section Items */}
                  <AnimatePresence>
                    {expandedSections.includes(section.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-11 space-y-1 overflow-hidden"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="block p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-md transition-all duration-200 group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="truncate">{item.label}</span>
                              {item.badge && (
                                <span className={`ml-2 px-2 py-1 text-xs rounded-full border transition-colors duration-200 ${
                                  item.featured 
                                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/30 group-hover/item:bg-purple-500/30' 
                                    : 'bg-gray-500/20 text-gray-300 border-gray-500/30 group-hover/item:bg-gray-500/30'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gradient-to-t from-gray-900 to-transparent border-t border-cyan-400/20 p-4">
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2">
                  Revolutionary 2045 Technology
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Link href="/contact" onClick={onClose} className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Contact
                  </Link>
                  <Link href="/support" onClick={onClose} className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnhancedSidebar2025;