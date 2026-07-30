// app/components/IndustryLanding.tsx — Industry-specific landing pages
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';
import { CATEGORIES } from '@/constants/categories';
import AnimatedCounter from '@/components/AnimatedCounter';

interface IndustryLandingProps {
  industry: string;
  industryData: {
    key: string;
    label: string;
    emoji: string;
    color: string;
    count: number;
    sample: string;
  };
}

const INDUSTRY_SERVICES: Record<string, {
  key: string;
  label: string;
  emoji: string;
  color: string;
  description: string;
  services: string[];
  painPoints: string[];
  solutions: string[];
  seoKeywords: string[];
  seoBenefits: string[];
}> = {
  'healthcare-&-life-sciences': {
    key: 'healthcare-&-life-sciences',
    label: 'Healthcare & Life Sciences',
    emoji: '🏥',
    color: 'from-pink-500 to-rose-500',
    description: 'AI-powered solutions for healthcare providers, pharmaceutical companies, and life sciences organizations. HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.',
    services: [
      'ai-drug-discovery-platform',
      'ai-medical-imaging-analysis',
      'predictive-patient-outcomes',
      'clinical-trial-optimization',
      'personalized-medicine-recommender',
      'healthcare-data-pipeline',
      'telemedicine-ai-assistant',
      'drug-discovery-simulation',
    ],
    painPoints: [
      'High operational costs and billing inefficiencies',
      'Complex regulatory compliance requirements (HIPAA, GDPR, FDA)',
      'Data silos preventing holistic patient views',
      'Slow drug discovery and clinical trial processes',
      'Difficulty scaling personalized care programs',
    ],
    solutions: [
      'AI-driven process automation reducing costs by 40%',
      'HIPAA-compliant data infrastructure with end-to-end encryption',
      'Unified patient data platform with real-time insights',
      'Accelerated drug discovery with predictive modeling',
      'Personalized treatment recommendations with ML',
    ],
    seoKeywords: [
      'AI healthcare solutions',
      'HIPAA compliant AI',
      'medical AI diagnostics',
      'telemedicine AI platform',
      'drug discovery AI',
      'clinical data analytics',
      'patient outcome prediction',
      'healthcare automation',
      'medical imaging AI',
      'personalized medicine AI'
    ],
    seoBenefits: [
      'Reduce healthcare costs by 40% with AI automation',
      'Achieve 99% HIPAA compliance with secure AI infrastructure',
      'Increase patient outcomes through predictive analytics',
      'Accelerate drug discovery by 50% with AI simulation',
      'Improve diagnostic accuracy with medical AI imaging'
    ],
  },
  'financial-services-&-fintech': {
    key: 'financial-services-&-fintech',
    label: 'Financial Services & FinTech',
    emoji: '💳',
    color: 'from-indigo-500 to-purple-500',
    description: 'Intelligent automation and AI solutions for banking, payments, and financial technology companies. Reduce costs, improve accuracy, and accelerate your finance workflows.',
    services: [
      'ai-fraud-detection-system',
      'risk-assessment-engine',
      'automated-compliance-checker',
      'credit-scoring-ml-model',
      'fintech-payment-orchestrator',
      'anti-money-laundering-ai',
      'customer-360-platform',
      'regtech-compliance-suite',
    ],
    painPoints: [
      'Increasing fraud attempts and security threats',
      'Complex regulatory compliance across jurisdictions',
      'Manual underwriting and credit assessment processes',
      'Customer churn due to poor digital experiences',
      'Real-time risk management challenges',
    ],
    solutions: [
      'Real-time fraud detection with 99.9% accuracy',
      'Automated compliance monitoring across 50+ regulations',
      'ML-powered credit scoring in seconds',
      'Personalized banking experiences with AI recommendations',
      'Risk modeling that adapts to market conditions',
    ],
    seoKeywords: [
      'AI financial services',
      'fintech automation',
      'fraud detection AI',
      'regulatory compliance AI',
      'credit scoring machine learning',
      'anti-money laundering AI',
      'banking automation solutions',
      'risk assessment AI',
      'financial data analytics',
      'payment processing AI'
    ],
    seoBenefits: [
      'Prevent fraud with 99.9% AI accuracy',
      'Automate compliance across 50+ regulations',
      'Score credit in seconds, not days',
      'Reduce operational costs by 35%',
      'Improve customer retention with personalized experiences'
    ],
  },
  'retail-&-e-commerce': {
    key: 'retail-&-e-commerce',
    label: 'Retail & E-Commerce',
    emoji: '🛒',
    color: 'from-sky-500 to-blue-600',
    description: 'AI solutions that drive sales, optimize inventory, and personalize customer experiences for retailers. Boost conversion rates and reduce operational costs.',
    services: [
      'personalized-product-recommendations',
      'demand-forecasting-engine',
      'dynamic-pricing-optimizer',
      'inventory-management-ai',
      'customer-lifetime-value-predictor',
      'visual-search-platform',
      'supply-chain-optimization',
      'ecommerce-chatbot-builder',
    ],
    painPoints: [
      'High cart abandonment rates',
      'Inventory stockouts and overstock situations',
      'Difficulty personalizing at scale',
      'Price competition and margin pressure',
      'Supply chain disruptions and delays',
    ],
    solutions: [
      'Personalized recommendations increasing conversion by 35%',
      'AI-powered demand forecasting with 95% accuracy',
      'Dynamic pricing that adapts to market conditions',
      'Automated inventory optimization reducing waste by 25%',
      'Visual search that boosts average order value',
    ],
    seoKeywords: [
      'AI retail solutions',
      'ecommerce personalization',
      'demand forecasting AI',
      'dynamic pricing algorithms',
      'inventory optimization AI',
      'customer recommendation engine',
      'visual search technology',
      'supply chain AI',
      'retail analytics',
      'online store AI'
    ],
    seoBenefits: [
      'Increase conversion rates by 35% with AI recommendations',
      'Achieve 95% demand forecasting accuracy',
      'Reduce inventory costs by 25%',
      'Boost average order value with visual search',
      'Optimize pricing in real-time for maximum margins'
    ],
  },
  'manufacturing-&-industrial': {
    key: 'manufacturing-&-industrial',
    label: 'Manufacturing & Industrial',
    emoji: '🏗️',
    color: 'from-yellow-500 to-amber-500',
    description: 'Industrial AI for predictive maintenance, quality control, and operational efficiency in manufacturing. Reduce downtime and improve product quality.',
    services: [
      'computer-vision-quality-inspection',
      'predictive-maintenance-scheduler',
      'production-line-optimizer',
      'supply-chain-digital-twin',
      'iot-edge-analytics-platform',
      'quality-control-vision-system',
      'energy-optimization-ai',
      'factory-automation-orchestrator',
    ],
    painPoints: [
      'Unplanned equipment downtime costing millions',
      'Quality defects reaching customers',
      'Inefficient production line utilization',
      'Energy waste and sustainability pressures',
      'Manual monitoring of thousands of IoT sensors',
    ],
    solutions: [
      'Predictive maintenance preventing 85% of unplanned downtime',
      'Computer vision quality inspection with 99.9% accuracy',
      'Production optimization increasing throughput by 20%',
      'Energy management reducing costs by 15%',
      'Centralized IoT monitoring dashboard',
    ],
    seoKeywords: [
      'AI manufacturing',
      'industrial IoT',
      'predictive maintenance AI',
      'quality inspection machine vision',
      'factory automation solutions',
      'production optimization AI',
      'digital twin manufacturing',
      'energy efficiency AI',
      'smart factory solutions',
      'IIoT analytics'
    ],
    seoBenefits: [
      'Prevent 85% of unplanned downtime with predictive maintenance',
      'Achieve 99.9% quality inspection accuracy',
      'Increase production throughput by 20%',
      'Reduce energy costs by 15%',
      'Scale operations with automated factory orchestration'
    ],
  },
  'energy-&-utilities': {
    key: 'energy-&-utilities',
    label: 'Energy & Utilities',
    emoji: '⚡',
    color: 'from-green-500 to-emerald-500',
    description: 'Smart grid, renewable energy, and utility optimization solutions powered by AI. Maximize clean energy use and reduce operational costs.',
    services: [
      'grid-demand-forecaster',
      'renewable-energy-optimizer',
      'smart-meter-analytics',
      'outage-prediction-engine',
      'carbon-footprint-calculator',
      'energy-storage-manager',
      'utility-billing-ai',
      'sustainability-reporting-platform',
    ],
    painPoints: [
      'Grid instability with renewable energy integration',
      'Manual demand forecasting leading to inefficiencies',
      'High carbon footprint and sustainability reporting',
      'Frequent outages and service disruptions',
      'Complex billing and customer management',
    ],
    solutions: [
      'Demand forecasting with 98% accuracy for grid stability',
      'Renewable energy optimization maximizing clean energy use',
      'AI-powered outage prediction reducing downtime',
      'Automated sustainability reporting and carbon tracking',
      'Smart billing with usage-based pricing models',
    ],
    seoKeywords: [
      'AI energy solutions',
      'smart grid AI',
      'renewable energy optimization',
      'demand forecasting energy',
      'outage prediction AI',
      'carbon footprint tracking',
      'utility analytics',
      'energy storage AI',
      'sustainability reporting',
      'grid management AI'
    ],
    seoBenefits: [
      'Achieve 98% demand forecasting accuracy',
      'Maximize renewable energy utilization',
      'Predict and prevent outages before they occur',
      'Automate sustainability reporting for ESG compliance',
      'Reduce utility costs with smart optimization'
    ],
  },
  'media-&-entertainment': {
    key: 'media-&-entertainment',
    label: 'Media & Entertainment',
    emoji: '🎬',
    color: 'from-blue-500 to-cyan-500',
    description: 'AI solutions for content creation, distribution, and audience engagement in media and entertainment.',
    services: [
      'ai-content-generator',
      'audience-insight-platform',
      'personalized-content-recommendation',
      'video-transcription-service',
      'social-media-analytics',
      'rights-management-ai',
      'streaming-optimization-platform',
      'content-moderation-ai',
    ],
    painPoints: [
      'Content creation costs and timelines',
      'Audience fragmentation across platforms',
      'Monetization challenges with ad-blocking',
      'Copyright infringement and content theft',
      'Manual content moderation and tagging',
    ],
    solutions: [
      'AI-powered content generation reducing costs by 50%',
      'Audience segmentation for targeted content delivery',
      'Automated content moderation with 99% accuracy',
      'Rights management with smart detection',
      'Personalized recommendations increasing engagement',
    ],
  },
  'legal-&-compliance': {
    key: 'legal-&-compliance',
    label: 'Legal & Compliance',
    emoji: '⚖️',
    color: 'from-purple-500 to-pink-500',
    description: 'AI-driven legal technology for contract analysis, compliance monitoring, and legal operations.',
    services: [
      'contract-lifecycle-intelligence',
      'compliance-monitoring-platform',
      'legal-document-analysis',
      'e-discovery-ai',
      'regulatory-change-tracker',
      'legal-spend-analytics',
      'matter-management-system',
      'ip-portfolio-analyzer',
    ],
    painPoints: [
      'Manual contract review taking weeks',
      'Compliance risks and regulatory fines',
      'High legal costs and resource allocation',
      'Inefficient e-discovery in litigation',
      'Difficulty tracking regulatory changes',
    ],
    solutions: [
      'Contract review 10x faster with AI analysis',
      'Real-time compliance monitoring and alerts',
      'Automated e-discovery with smart filtering',
      'Regulatory change tracking across jurisdictions',
      'Legal spend analytics for budget optimization',
    ],
  },
  'logistics-&-supply-chain': {
    key: 'logistics-&-supply-chain',
    label: 'Logistics & Supply Chain',
    emoji: '🚚',
    color: 'from-rose-500 to-red-500',
    description: 'End-to-end supply chain visibility and optimization with AI-powered logistics solutions.',
    services: [
      'supply-chain-radar-platform',
      'route-optimization-engine',
      'demand-forecasting-ai',
      'inventory-optimization-system',
      'carrier-performance-analytics',
      'logistics-cost-calculator',
      'sustainability-tracker',
      'real-time-shipment-tracking',
    ],
    painPoints: [
      'Supply chain disruptions and delays',
      'Rising fuel and transportation costs',
      'Poor visibility into inventory levels',
      'Inefficient routing and delivery schedules',
      'Sustainability pressure from customers',
    ],
    solutions: [
      'Real-time supply chain visibility dashboard',
      'AI-powered route optimization saving 15% on fuel',
      'Predictive demand forecasting with 95% accuracy',
      'Sustainability tracking for ESG reporting',
      'Automated carrier selection and performance tracking',
    ],
  },
  'technology-&-saas': {
    key: 'technology-&-saas',
    label: 'Technology & SaaS',
    emoji: '🏭',
    color: 'from-amber-500 to-orange-500',
    description: 'DevOps, cloud, and SaaS solutions for modern technology companies. Accelerate development, reduce costs, and scale faster with AI-powered infrastructure.',
    services: [
      'devops-automation-suite',
      'cloud-cost-optimization',
      'saas-onboarding-ai',
      'api-management-platform',
      'microservice-orchestrator',
      'ci-cd-pipeline-manager',
      'serverless-deployment-helper',
      'observability-dashboard',
    ],
    painPoints: [
      'Complex cloud infrastructure costs',
      'Slow deployment cycles and releases',
      'Technical debt and legacy systems',
      'Scaling challenges with user growth',
      'Monitoring and alerting complexity',
    ],
    solutions: [
      'Cloud cost optimization saving 30% on infrastructure',
      'Automated CI/CD pipelines for faster releases',
      'Microservices architecture for scalability',
      'Centralized observability with AI insights',
      'Serverless deployment recommendations',
    ],
    seoKeywords: [
      'AI technology solutions',
      'cloud cost optimization',
      'DevOps automation',
      'CI/CD pipeline AI',
      'serverless optimization',
      'microservices management',
      'observability AI',
      'SaaS onboarding',
      'API management AI',
      'infrastructure as code'
    ],
    seoBenefits: [
      'Save 30% on cloud infrastructure with AI optimization',
      'Deploy 5x faster with automated CI/CD pipelines',
      'Scale seamlessly with microservices orchestration',
      'Monitor everything with AI-powered observability',
      'Reduce time-to-market with serverless deployments'
    ],
  },
  'education-&-research': {
      key: 'education-&-research',
      label: 'Education & Research',
      emoji: '🎓',
      color: 'from-cyan-500 to-teal-600',
      description: 'AI solutions for educational institutions and research organizations. Transform learning, accelerate research, and improve student outcomes.',
      services: [
        'adaptive-learning-platform',
        'research-data-management',
        'student-performance-analytics',
        'content-personalization-engine',
        'academic-integrity-checker',
        'grant-proposal-optimizer',
        'literature-analysis-ai',
        'virtual-lab-simulation',
      ],
      painPoints: [
        'Personalized learning at scale',
        'Research data management and reproducibility',
        'Student engagement and retention',
        'Grant proposal success rates',
        'Academic integrity in online learning',
      ],
      solutions: [
        'Adaptive learning paths for every student',
        'Research data platform ensuring reproducibility',
        'AI-powered student success predictions',
        'Grant proposal optimization with AI assistance',
        'Virtual labs for remote experimentation',
      ],
      seoKeywords: [
        'AI education solutions',
        'adaptive learning AI',
        'student performance analytics',
        'research data management',
        'grant proposal AI',
        'literature analysis AI',
        'virtual lab simulation',
        'academic integrity AI',
        'personalized learning technology',
        'education technology AI'
      ],
      seoBenefits: [
        'Personalize learning at scale for every student',
        'Ensure research reproducibility with data management',
        'Predict student success with 85% accuracy',
        'Double grant proposal success rates',
        'Enable remote experimentation with virtual labs'
      ],
    },
  'hospitality-&-tourism': {
    key: 'hospitality-&-tourism',
    label: 'Hospitality & Tourism',
    emoji: '🏨',
    color: 'from-violet-500 to-fuchsia-500',
    description: 'AI-powered automation for hotels, resorts, restaurants, and travel companies. Optimize guest experiences, reduce costs, and increase revenue.',
    services: [
      'ai-guest-experience-platform',
      'predictive-room-management',
      'dynamic-pricing-intelligence',
      'smart-housekeeping-scheduler',
      'ai-menu-optimization',
      'customer-flow-prediction',
      'supply-chain-intelligence',
      'personalized-dining-assistant',
    ],
    painPoints: [
      'High operational costs and staffing challenges',
      'Low guest satisfaction and repeat bookings',
      'Revenue optimization across multiple channels',
      'Inventory and supply chain management',
      'Personalized experiences at scale',
    ],
    solutions: [
      'AI concierge reducing staff costs by 40%',
      'Predictive room management optimizing occupancy',
      'Dynamic pricing increasing RevPAR by 25%',
      'Personalized guest experiences boosting satisfaction',
      'Automated inventory and supply chain optimization',
    ],
    seoKeywords: [
      'AI hospitality solutions',
      'hotel automation AI',
      'guest experience platform',
      'dynamic pricing hospitality',
      'room management AI',
      'restaurant automation',
      'travel industry AI',
      'revenue optimization AI',
      'personalized guest experience',
      'smart hotel technology'
    ],
    seoBenefits: [
      'Reduce staff costs by 40% with AI concierge',
      'Optimize room occupancy with predictive management',
      'Increase RevPAR by 25% with dynamic pricing',
      'Boost guest satisfaction with personalized experiences',
      'Automate inventory management for efficiency'
    ],
  },
  'telecommunications': {
    key: 'telecommunications',
    label: 'Telecommunications',
    emoji: '📡',
    color: 'from-blue-500 to-cyan-500',
    description: 'AI solutions for telecom providers, network operators, and communication companies. Optimize network performance, reduce churn, and accelerate 5G deployment.',
    services: [
      'ai-network-optimization-engine',
      '5g-deployment-intelligence',
      'traffic-flow-prediction',
      'self-healing-network-automation',
      'ai-customer-care-assistant',
      'churn-prediction-&-prevention',
      'dynamic-pricing-engine',
      'network-slicing-intelligence',
    ],
    painPoints: [
      'Network congestion and service outages',
      'High customer churn rates',
      '5G deployment complexity and costs',
      'Competition and price sensitivity',
      'Customer experience and support quality',
    ],
    solutions: [
      'Network optimization reducing downtime by 40%',
      'AI-powered customer care with 95% resolution rate',
      '5G deployment accelerated by 50%',
      'Churn reduction saving millions in revenue',
      'Dynamic pricing optimizing ARPU',
    ],
  },
  'gaming-&-interactive': {
    key: 'gaming-&-interactive',
    label: 'Gaming & Interactive Entertainment',
    emoji: '🎮',
    color: 'from-purple-500 to-pink-500',
    description: 'AI solutions for game developers, esports organizations, and interactive entertainment companies. Enhance player experiences, reduce cheating, and optimize game performance.',
    services: [
      'ai-game-content-generator',
      'player-behavior-analytics',
      'dynamic-difficulty-adjustment',
      'bug-detection-&-fixing',
      'ai-coach-&-analyst',
      'fraud-&-cheating-detection',
      'player-matchmaking-intelligence',
      'esports-tournament-automation',
    ],
    painPoints: [
      'Slow game development cycles',
      'Player cheating and unfair gameplay',
      'Low player retention and engagement',
      'Balancing and game tuning complexity',
      'Monetization and in-game economy',
    ],
    solutions: [
      '50% faster game development with AI content',
      '90% reduction in cheating with anti-cheat AI',
      '30% increase in player retention',
      'Dynamic difficulty for optimal engagement',
      'Personalized experiences boosting LTV',
    ],
  },
};

export default function IndustryLanding({ industry, industryData }: IndustryLandingProps) {
  const industryInfo = INDUSTRY_SERVICES[industry] || INDUSTRY_SERVICES['technology-&-saas'];
  const [showAllServices, setShowAllServices] = useState(false);
  
  const industryServices = useMemo(() => {
    return allServices.filter((s: any) => s.industry === industry);
  }, [industry]);
  
  const relatedServices = useMemo(() => {
    return allServices
      .filter((s: any) => 
        s.industry === industry || 
        industryInfo.services.includes(s.id)
      )
      .slice(0, showAllServices ? 12 : 6);
  }, [industry, showAllServices]);

  return (
    <section className="py-20 bg-slate-950">
      <div className="container-page">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-2xl">{industryInfo.emoji}</span>
            <span className="text-xs text-white font-medium">Industry Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${industryInfo.color} bg-clip-text text-transparent`}>
              {industryInfo.label}
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            {industryInfo.description}
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="text-2xl font-bold text-purple-400">{industryInfo.services.length}</div>
              <div className="text-xs text-slate-500">Key Solutions</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="text-2xl font-bold text-emerald-400">{industryServices.length}+</div>
              <div className="text-xs text-slate-500">Tailored Services</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-xs text-slate-500">Uptime</div>
            </div>
          </div>
        </div>

        {/* Pain Points & Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/50 border border-slate-800/60 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-red-400">⚠️</span> Key Challenges
            </h3>
            <ul className="space-y-3">
              {industryInfo.painPoints.map((pain, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-slate-300 text-sm">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800/60 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-400">✅</span> Our Solutions
            </h3>
            <ul className="space-y-3">
              {industryInfo.solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">→</span>
                  <span className="text-slate-300 text-sm">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industry Solutions
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {relatedServices.map((service: Service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-slate-900/60 border border-slate-800/60 rounded-xl p-4 hover:border-purple-500/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-purple-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-xs line-clamp-2 mb-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                  <span className="text-xs text-purple-300 font-medium">
                    ${Object.values(service.pricing as Record<string, string>)[0]}/mo
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          {industryServices.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="px-6 py-2.5 rounded-full bg-slate-800/60 border border-slate-700 text-slate-300 text-sm hover:bg-slate-700/80 transition-all"
              >
                {showAllServices ? 'Show Less' : `View All ${industryServices.length} Services`}
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your {industryInfo.label}?
          </h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Get a custom proposal with solutions tailored to your {industryInfo.label} needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/configurator"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg"
            >
              ⚡ Get Custom Proposal
            </Link>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700 text-slate-300 text-sm hover:bg-slate-700/80 transition-all"
            >
              ✉️ Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}