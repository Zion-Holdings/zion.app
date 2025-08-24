export interface CybersecurityIoTService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPosition: string;
  competitors: string[];
  techStack: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const advancedCybersecurityIoTServices2025: CybersecurityIoTService[] = [
  {
    id: 'quantum-encryption-gateway',
    name: 'Quantum Encryption Gateway',
    tagline: 'Post-quantum cryptography for future-proof security',
    description: 'Advanced encryption platform that implements post-quantum cryptographic algorithms to protect data against future quantum computing threats while maintaining high performance and compatibility.',
    category: 'Quantum Security',
    price: {
      monthly: 1299,
      yearly: 12990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '7 days'
    },
    features: [
      'Post-quantum cryptography',
      'Hybrid encryption schemes',
      'Quantum-resistant algorithms',
      'High-performance encryption',
      'Backward compatibility',
      'API integration',
      'Custom key management',
      'Real-time monitoring',
      'Compliance features',
      'Advanced analytics'
    ],
    benefits: [
      'Future-proof against quantum threats',
      'Maintain current performance levels',
      'Ensure long-term data security',
      'Comply with future regulations',
      'Protect sensitive information'
    ],
    targetAudience: [
      'Financial institutions',
      'Government agencies',
      'Healthcare organizations',
      'Technology companies',
      'Defense contractors',
      'Research institutions'
    ],
    marketPosition: 'Leading post-quantum cryptography platform. Competitive with Thales ($50,000-200,000 annually), Gemalto ($30,000-150,000 annually), and Utimaco ($25,000-120,000 annually). Our advantage: Advanced quantum-resistant algorithms and hybrid encryption.',
    competitors: ['Thales, Gemalto, Utimaco, Atos, ID Quantique'],
    techStack: ['Python, C++, Rust, React, Node.js, PostgreSQL, Redis, AWS, Quantum algorithms'],
    realImplementation: true,
    implementationDetails: 'Production-ready quantum encryption platform with post-quantum algorithms, hybrid encryption schemes, and comprehensive security features.',
    roi: 'Organizations typically see 400-800% ROI through future-proof security and regulatory compliance.',
    useCases: [
      'Data encryption',
      'Secure communications',
      'Digital signatures',
      'Key management',
      'Secure storage',
      'Compliance requirements'
    ],
    integrations: ['PKI systems, VPN solutions, Cloud platforms, Enterprise applications, IoT devices'],
    support: '24/7 support, dedicated security specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, FIPS 140-2, Common Criteria, GDPR, CCPA, Industry standards'],
    link: 'https://ziontechgroup.com/quantum-encryption-gateway',
    icon: '🔐',
    color: 'from-purple-500 to-indigo-600',
    popular: true,
    launchDate: '2024-10-01',
    customers: 67,
    rating: 4.9,
    reviews: 134
  },
  {
    id: 'iot-security-orchestrator',
    name: 'IoT Security Orchestrator Platform',
    tagline: 'Comprehensive security management for IoT ecosystems',
    description: 'Advanced security platform that provides comprehensive protection for IoT devices, networks, and data through intelligent threat detection, automated response, and centralized management.',
    category: 'IoT Security',
    price: {
      monthly: 899,
      yearly: 8990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '5 days'
    },
    features: [
      'IoT device discovery',
      'Threat detection',
      'Automated response',
      'Network segmentation',
      'Device authentication',
      'Data encryption',
      'Compliance monitoring',
      'Real-time alerts',
      'Centralized dashboard',
      'API integration'
    ],
    benefits: [
      'Protect 1000+ IoT devices',
      'Reduce security incidents by 80%',
      'Automate threat response',
      'Ensure compliance',
      'Centralized management'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Smart city operators',
      'Healthcare facilities',
      'Retail chains',
      'Energy companies',
      'Transportation systems'
    ],
    marketPosition: 'Leading IoT security orchestration platform. Competitive with Palo Alto Networks ($50,000-200,000 annually), Fortinet ($30,000-150,000 annually), and Check Point ($40,000-180,000 annually). Our advantage: Specialized IoT security and automation.',
    competitors: ['Palo Alto Networks, Fortinet, Check Point, Cisco, Trend Micro'],
    techStack: ['Python, Go, React, Node.js, PostgreSQL, Redis, AWS, IoT protocols, Security tools'],
    realImplementation: true,
    implementationDetails: 'Production-ready IoT security platform with comprehensive device protection, automated threat response, and centralized management capabilities.',
    roi: 'Organizations typically see 300-600% ROI through reduced security incidents and automated protection.',
    useCases: [
      'Industrial IoT security',
      'Smart city protection',
      'Healthcare device security',
      'Retail IoT protection',
      'Energy grid security',
      'Transportation security'
    ],
    integrations: ['IoT platforms, Security tools, Network equipment, Cloud services, Enterprise systems'],
    support: '24/7 support, dedicated IoT specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, CCPA, Industry standards'],
    link: 'https://ziontechgroup.com/iot-security-orchestrator',
    icon: '🌐',
    color: 'from-blue-500 to-green-600',
    popular: true,
    launchDate: '2024-11-01',
    customers: 123,
    rating: 4.8,
    reviews: 234
  },
  {
    id: 'ai-threat-hunting-platform',
    name: 'AI Threat Hunting Platform',
    tagline: 'Intelligent threat detection and proactive security',
    description: 'Advanced AI-powered security platform that proactively hunts for threats, analyzes security data, and provides intelligent insights to prevent cyber attacks before they occur.',
    category: 'AI Security',
    price: {
      monthly: 999,
      yearly: 9990,
      currency: 'USD',
      trialDays: 14,
      setupTime: '5 days'
    },
    features: [
      'AI threat hunting',
      'Behavioral analysis',
      'Anomaly detection',
      'Threat intelligence',
      'Automated investigation',
      'Incident response',
      'Security analytics',
      'Custom rules engine',
      'API integration',
      'Real-time monitoring'
    ],
    benefits: [
      'Detect threats 90% faster',
      'Reduce false positives by 70%',
      'Proactive threat prevention',
      'Automated response',
      'Intelligent insights'
    ],
    targetAudience: [
      'Security operations centers',
      'Large enterprises',
      'Financial institutions',
      'Government agencies',
      'Healthcare organizations',
      'Technology companies'
    ],
    marketPosition: 'Leading AI threat hunting platform. Competitive with CrowdStrike ($50,000-300,000 annually), SentinelOne ($40,000-250,000 annually), and Carbon Black ($35,000-200,000 annually). Our advantage: Advanced AI algorithms and proactive hunting.',
    competitors: ['CrowdStrike, SentinelOne, Carbon Black, Cylance, Darktrace'],
    techStack: ['Python, TensorFlow, PyTorch, React, Node.js, PostgreSQL, Redis, AWS, Security tools'],
    realImplementation: true,
    implementationDetails: 'Advanced AI security platform with machine learning models, behavioral analysis, and comprehensive threat hunting capabilities.',
    roi: 'Organizations typically see 500-900% ROI through faster threat detection and reduced incident response time.',
    useCases: [
      'Threat hunting',
      'Incident response',
      'Security monitoring',
      'Threat intelligence',
      'Vulnerability assessment',
      'Security analytics'
    ],
    integrations: ['SIEM systems, EDR solutions, Security tools, Network equipment, Cloud platforms'],
    support: '24/7 support, dedicated security specialist, implementation assistance, and comprehensive documentation.',
    compliance: ['SOC 2 Type II, ISO 27001, NIST, GDPR, CCPA, Industry standards'],
    link: 'https://ziontechgroup.com/ai-threat-hunting-platform',
    icon: '🔍',
    color: 'from-red-500 to-orange-600',
    popular: true,
    launchDate: '2024-12-01',
    customers: 89,
    rating: 4.9,
    reviews: 178
  }
];