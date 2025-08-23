import React from 'react';
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  Map, Globe, Brain, Atom, Cpu, Rocket, 
  Zap, Users, Target, DollarSign, Building, 
  Palette, GraduationCap, ArrowRight, ExternalLink
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      links: [
        { name: 'Home', href: '/', description: 'Main homepage' },
        { name: 'About', href: '/about', description: 'Company information' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' },
        { name: 'Services', href: '/services', description: 'All services overview' },
        { name: 'Solutions', href: '/solutions', description: 'Business solutions' },
        { name: 'Resources', href: '/resources', description: 'Helpful resources' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'AI Services', href: '/ai-services', description: 'AI and ML solutions' },
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence' },
        { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum platform' },
        { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
        { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
        { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
        { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
        { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
        { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
        { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
        { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
        { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
        { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
        { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
        { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' },
        { name: 'AI Autonomous Code Generation', href: '/ai-autonomous-code-generation', description: 'AI that writes code' },
        { name: 'AI Autonomous Marketing', href: '/ai-autonomous-marketing-platform', description: 'Autonomous marketing AI' },
        { name: 'AI Autonomous Sales', href: '/ai-autonomous-sales-platform', description: 'AI that closes deals' },
        { name: 'AI Autonomous Customer Service', href: '/ai-autonomous-customer-service', description: 'Autonomous support AI' },
        { name: 'AI Autonomous HR', href: '/ai-autonomous-hr-platform', description: 'Autonomous HR management' },
        { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for business' },
        { name: 'Cutting-Edge AI Innovations', href: '/cutting-edge-ai-innovations', description: 'Latest AI breakthroughs' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      icon: <Atom className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Quantum Services', href: '/quantum-services', description: 'Quantum computing solutions' },
        { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
        { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
        { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
        { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
        { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
        { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
        { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
        { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
        { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
        { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
        { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
        { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum-enhanced trading' },
        { name: 'Quantum Space Technology', href: '/quantum-space-tech', description: 'Space exploration with quantum computing' },
        { name: 'Quantum Healthcare', href: '/quantum-healthcare', description: 'Medical breakthroughs with quantum computing' },
        { name: 'Quantum Manufacturing', href: '/quantum-manufacturing', description: 'Next-gen manufacturing processes' }
      ]
    },
    {
      title: 'IT & Infrastructure',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      links: [
        { name: 'IT Services', href: '/it-services', description: 'IT infrastructure solutions' },
        { name: 'Zero Trust Security', href: '/zero-trust-network-architecture', description: 'Next-generation security framework' },
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
        { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing' },
        { name: '5G Private Network Solutions', href: '/5g-private-network-solutions', description: 'Enterprise 5G networks' },
        { name: 'Cloud Landing Zone', href: '/cloud-landing-zone', description: 'Secure cloud foundation' },
        { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer', description: 'Cloud cost management' },
        { name: 'Cloud Backup Compliance', href: '/cloud-backup-compliance', description: 'Compliant cloud backup' },
        { name: 'Infrastructure Drift Detector', href: '/infrastructure-drift-detector', description: 'Infrastructure monitoring' },
        { name: 'Kubernetes RBAC Auditor', href: '/kubernetes-rbac-auditor', description: 'K8s security auditing' },
        { name: 'Managed PostgreSQL HA', href: '/managed-postgres-ha', description: 'High-availability database' },
        { name: 'LLM Gateway', href: '/llm-gateway', description: 'AI model management' },
        { name: 'API Security Scanner', href: '/api-security-scanner', description: 'API security testing' },
        { name: 'API Observability', href: '/api-observability', description: 'API monitoring and analytics' },
        { name: 'API Mock Contract Testing', href: '/api-mock-contract-testing', description: 'API testing automation' },
        { name: 'API Latency SLO Tracker', href: '/api-latency-slo-tracker', description: 'Performance monitoring' },
        { name: 'API Documentation Generator', href: '/api-documentation-generator', description: 'Auto-generated API docs' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'Micro SAAS', href: '/micro-saas', description: 'Micro SAAS solutions overview' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success with AI' },
        { name: 'AI Content Marketing Automation', href: '/ai-content-marketing-automation', description: 'AI-powered content marketing' },
        { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales insights' },
        { name: 'AI HR Analytics Platform', href: '/ai-hr-analytics-platform', description: 'AI-powered HR analytics' },
        { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization', description: 'AI-powered supply chain' },
        { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'AI-powered financial planning' },
        { name: 'AI Legal Document Analysis', href: '/ai-legal-document-analysis', description: 'AI-powered legal analysis' },
        { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics', description: 'AI-powered healthcare insights' },
        { name: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization', description: 'AI-powered manufacturing' },
        { name: 'Sales Copilot', href: '/sales-copilot', description: 'AI-powered sales assistant' },
        { name: 'Incident Copilot', href: '/incident-copilot', description: 'AI-powered incident management' },
        { name: 'SEO Automation', href: '/seo-automation', description: 'Automated SEO optimization' },
        { name: 'Serverless Cron Manager', href: '/serverless-cron-manager', description: 'Serverless task scheduling' },
        { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation', description: 'Compliance automation' },
        { name: 'Status Pages SLO', href: '/status-pages-slo', description: 'Service level monitoring' },
        { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder', description: 'Performance monitoring' }
      ]
    },
    {
      title: 'Business Automation',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-amber-500',
      links: [
        { name: 'Automation Services', href: '/automation', description: 'Business automation solutions' },
        { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for business processes' },
        { name: 'Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'AI-powered business insights' },
        { name: 'Marketing Automation Platform', href: '/ai-marketing-automation', description: 'AI-powered marketing automation' },
        { name: 'Sales Process Automation', href: '/ai-sales-automation', description: 'Automated sales workflows' },
        { name: 'HR Process Automation', href: '/ai-hr-automation', description: 'Automated HR processes' },
        { name: 'Financial Process Automation', href: '/ai-financial-automation', description: 'Automated financial workflows' },
        { name: 'Customer Service Automation', href: '/ai-customer-service-automation', description: 'AI-powered customer support' },
        { name: 'Supply Chain Automation', href: '/ai-supply-chain-automation', description: 'Automated supply chain management' },
        { name: 'Quality Control Automation', href: '/ai-quality-control-automation', description: 'Automated quality assurance' },
        { name: 'Maintenance Automation', href: '/ai-maintenance-automation', description: 'Predictive maintenance automation' }
      ]
    },
    {
      title: 'Customer Success',
      icon: <Users className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500',
      links: [
        { name: 'Customer Success', href: '/customer-success', description: 'Customer success solutions' },
        { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success with AI' },
        { name: 'Customer Health Scoring', href: '/customer-health-scoring', description: 'AI-powered customer health analysis' },
        { name: 'Churn Prediction Platform', href: '/churn-prediction-platform', description: 'Predict and prevent customer churn' },
        { name: 'Customer Journey Mapping', href: '/customer-journey-mapping', description: 'Visualize customer experiences' },
        { name: 'Success Metric Tracking', href: '/success-metric-tracking', description: 'Track customer success metrics' },
        { name: 'Automated Onboarding', href: '/automated-onboarding', description: 'Streamline customer onboarding' },
        { name: 'Expansion Opportunity Detection', href: '/expansion-opportunity-detection', description: 'Identify growth opportunities' },
        { name: 'Customer Feedback Analysis', href: '/customer-feedback-analysis', description: 'AI-powered feedback insights' },
        { name: 'Success Playbook Automation', href: '/success-playbook-automation', description: 'Automated success strategies' },
        { name: 'Customer Success Analytics', href: '/customer-success-analytics', description: 'Comprehensive success insights' }
      ]
    },
    {
      title: 'Marketing & Sales',
      icon: <Target className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
      links: [
        { name: 'Marketing & Sales', href: '/marketing-sales', description: 'Marketing and sales solutions' },
        { name: 'AI Content Marketing Automation', href: '/ai-content-marketing-automation', description: 'AI-powered content marketing' },
        { name: 'AI Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales insights' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation', description: 'Intelligent marketing workflows' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', description: 'Automated sales processes' },
        { name: 'AI Lead Scoring', href: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Campaign Optimization', href: '/ai-campaign-optimization', description: 'Optimize marketing campaigns' },
        { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI-powered content creation' },
        { name: 'AI Social Media Management', href: '/ai-social-media-management', description: 'Automated social media' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', description: 'Intelligent email campaigns' },
        { name: 'AI Marketing Analytics', href: '/ai-marketing-analytics', description: 'Comprehensive marketing insights' }
      ]
    },
    {
      title: 'Finance & Legal',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-emerald-500 to-green-500',
      links: [
        { name: 'Finance & Legal', href: '/finance-legal', description: 'Financial and legal solutions' },
        { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'AI-powered financial planning' },
        { name: 'AI Legal Document Analysis', href: '/ai-legal-document-analysis', description: 'AI-powered legal analysis' },
        { name: 'AI Risk Assessment', href: '/ai-risk-assessment', description: 'Intelligent risk analysis' },
        { name: 'AI Compliance Monitoring', href: '/ai-compliance-monitoring', description: 'Automated compliance tracking' },
        { name: 'AI Financial Analytics', href: '/ai-financial-analytics', description: 'Comprehensive financial insights' },
        { name: 'AI Contract Analysis', href: '/ai-contract-analysis', description: 'Intelligent contract review' },
        { name: 'AI Regulatory Compliance', href: '/ai-regulatory-compliance', description: 'Automated regulatory tracking' },
        { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', description: 'Predictive financial modeling' },
        { name: 'AI Investment Analysis', href: '/ai-investment-analysis', description: 'Intelligent investment insights' },
        { name: 'AI Tax Optimization', href: '/ai-tax-optimization', description: 'Automated tax planning' }
      ]
    },
    {
      title: 'Healthcare & Manufacturing',
      icon: <Building className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      links: [
        { name: 'Healthcare & Manufacturing', href: '/healthcare-manufacturing', description: 'Healthcare and manufacturing solutions' },
        { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics', description: 'AI-powered healthcare insights' },
        { name: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization', description: 'AI-powered manufacturing' },
        { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', description: 'Predictive equipment maintenance' },
        { name: 'AI Quality Control', href: '/ai-quality-control', description: 'Automated quality assurance' },
        { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization', description: 'AI-powered supply chain' },
        { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'AI-powered medical diagnosis' },
        { name: 'AI Drug Discovery', href: '/ai-drug-discovery', description: 'Accelerated pharmaceutical research' },
        { name: 'AI Medical Imaging', href: '/ai-medical-imaging', description: 'AI-powered medical imaging' },
        { name: 'AI Patient Monitoring', href: '/ai-patient-monitoring', description: 'Intelligent patient care' },
        { name: 'AI Healthcare Compliance', href: '/ai-healthcare-compliance', description: 'Automated healthcare compliance' }
      ]
    },
    {
      title: 'Creative & Media',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-500',
      links: [
        { name: 'Creative & Media', href: '/creative-media', description: 'Creative and media solutions' },
        { name: 'AI Video Editing', href: '/ai-video-editing', description: 'AI-powered video production' },
        { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI-powered content creation' },
        { name: 'AI Image Generation', href: '/ai-image-generation', description: 'AI-powered image creation' },
        { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-powered music creation' },
        { name: 'AI Storytelling', href: '/ai-storytelling', description: 'AI-powered narrative generation' },
        { name: 'AI Design Assistant', href: '/ai-design-assistant', description: 'AI-powered design tools' },
        { name: 'AI Animation Platform', href: '/ai-animation-platform', description: 'AI-powered animation' },
        { name: 'AI Voice Synthesis', href: '/ai-voice-synthesis', description: 'AI-powered voice generation' },
        { name: 'AI Translation Services', href: '/ai-translation-services', description: 'AI-powered language translation' },
        { name: 'AI Creative Analytics', href: '/ai-creative-analytics', description: 'Creative performance insights' }
      ]
    },
    {
      title: 'Education & Training',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Education & Training', href: '/education-training', description: 'Education and training solutions' },
        { name: 'AI Education Platform', href: '/ai-education-platform', description: 'AI-powered learning platform' },
        { name: 'AI Skill Assessment', href: '/ai-skill-assessment', description: 'Intelligent skill evaluation' },
        { name: 'AI Learning Paths', href: '/ai-learning-paths', description: 'Personalized learning journeys' },
        { name: 'AI Content Curation', href: '/ai-content-curation', description: 'Intelligent content selection' },
        { name: 'AI Tutoring System', href: '/ai-tutoring-system', description: 'AI-powered tutoring' },
        { name: 'AI Language Learning', href: '/ai-language-learning', description: 'AI-powered language acquisition' },
        { name: 'AI Training Analytics', href: '/ai-training-analytics', description: 'Learning performance insights' },
        { name: 'AI Certification Platform', href: '/ai-certification-platform', description: 'Automated certification' },
        { name: 'AI Knowledge Management', href: '/ai-knowledge-management', description: 'Intelligent knowledge systems' },
        { name: 'AI Learning Analytics', href: '/ai-learning-analytics', description: 'Comprehensive learning insights' }
      ]
    },
    {
      title: 'Legal & Policy',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-gray-500 to-slate-500',
      links: [
        { name: 'Privacy Policy', href: '/privacy', description: 'Data privacy information' },
        { name: 'Terms of Service', href: '/terms', description: 'Service terms and conditions' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage information' },
        { name: 'Sitemap', href: '/sitemap', description: 'Complete site structure' }
      ]
    }
  ];

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className="relative z-10 pt-8">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Sitemap
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Complete overview of all pages and services on our website. Find what you're looking for quickly and easily.
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Map className="w-6 h-6" />
                  <span>Organized navigation structure</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Sitemap Structure */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-16">
                {siteStructure.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}>
                        <div className="text-white">
                          {section.icon}
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.links.map((link, linkIndex) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                          className="group"
                        >
                          <a
                            href={link.href}
                            className="block p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-1">
                                  {link.name}
                                </h3>
                                <p className="text-sm text-gray-400">{link.description}</p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 group-hover:text-cyan-400 transition-colors duration-300">
                                <ArrowRight className="w-4 h-4" />
                                {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                              </div>
                            </div>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Navigation */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Need Help Finding Something?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Can't find what you're looking for? Our team is here to help you navigate our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    Browse All Services
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
};

export default SitemapPage;