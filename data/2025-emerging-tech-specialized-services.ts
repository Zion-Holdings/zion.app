export interface EmergingTechSpecializedService {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: string;
    professional: string;
    enterprise: string;
  };
  category: string;
  tags: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const emergingTechSpecializedServices2025: EmergingTechSpecializedService[] = [
  {
    id: 'edge-computing-platform',
    name: 'Edge Computing Platform',
    description: 'Distributed edge computing infrastructure for ultra-low latency applications and IoT devices.',
    features: [
      'Global edge node distribution',
      'Real-time data processing',
      'IoT device management',
      'Edge AI inference',
      '5G network optimization'
    ],
    benefits: [
      'Reduced latency to 5-10ms',
      'Lower bandwidth costs',
      'Improved user experience',
      'Enhanced security through edge processing'
    ],
    pricing: {
      basic: '$2,500/month',
      professional: '$8,500/month',
      enterprise: 'Custom pricing'
    },
    category: 'Edge Computing',
    tags: ['edge-computing', 'iot', '5g', 'low-latency', 'distributed'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ar-vr-enterprise-suite',
    name: 'AR/VR Enterprise Suite',
    description: 'Complete augmented and virtual reality solution for enterprise training, design, and collaboration.',
    features: [
      'Mixed reality workspace',
      '3D modeling and visualization',
      'Remote collaboration tools',
      'Training simulation modules',
      'Cross-platform compatibility'
    ],
    benefits: [
      'Enhanced training effectiveness',
      'Reduced travel costs',
      'Improved design collaboration',
      'Increased productivity'
    ],
    pricing: {
      basic: '$3,200/month',
      professional: '$12,500/month',
      enterprise: 'Custom pricing'
    },
    category: 'AR/VR',
    tags: ['ar', 'vr', 'mixed-reality', 'enterprise', 'training'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'biotech-data-platform',
    name: 'Biotech Data Platform',
    description: 'Advanced data management and analysis platform for biotechnology research and development.',
    features: [
      'Genomic data processing',
      'Clinical trial management',
      'Drug discovery analytics',
      'Regulatory compliance tools',
      'AI-powered insights'
    ],
    benefits: [
      'Accelerated research timelines',
      'Improved data accuracy',
      'Enhanced collaboration',
      'Regulatory compliance'
    ],
    pricing: {
      basic: '$4,500/month',
      professional: '$18,500/month',
      enterprise: 'Custom pricing'
    },
    category: 'Biotechnology',
    tags: ['biotech', 'genomics', 'clinical-trials', 'drug-discovery', 'compliance'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'space-tech-solutions',
    name: 'Space Technology Solutions',
    description: 'Comprehensive space technology platform for satellite operations, space data analysis, and mission planning.',
    features: [
      'Satellite constellation management',
      'Space weather monitoring',
      'Orbital debris tracking',
      'Mission planning tools',
      'Ground station integration'
    ],
    benefits: [
      'Enhanced satellite operations',
      'Improved mission success rates',
      'Cost optimization',
      'Risk mitigation'
    ],
    pricing: {
      basic: '$6,500/month',
      professional: '$25,500/month',
      enterprise: 'Custom pricing'
    },
    category: 'Space Technology',
    tags: ['space-tech', 'satellites', 'mission-planning', 'space-data', 'orbital'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-computing-services',
    name: 'Quantum Computing Services',
    description: 'Quantum computing solutions for complex optimization problems, cryptography, and scientific simulations.',
    features: [
      'Quantum algorithm development',
      'Cryptography solutions',
      'Optimization problem solving',
      'Quantum simulation tools',
      'Hybrid classical-quantum workflows'
    ],
    benefits: [
      'Exponential speedup for specific problems',
      'Enhanced security through quantum cryptography',
      'Improved optimization results',
      'Scientific breakthrough potential'
    ],
    pricing: {
      basic: '$8,500/month',
      professional: '$35,500/month',
      enterprise: 'Custom pricing'
    },
    category: 'Quantum Computing',
    tags: ['quantum-computing', 'cryptography', 'optimization', 'simulation', 'algorithms'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'neuromorphic-computing',
    name: 'Neuromorphic Computing Platform',
    description: 'Brain-inspired computing platform for AI applications, pattern recognition, and cognitive computing.',
    features: [
      'Spiking neural networks',
      'Event-driven processing',
      'Low-power AI inference',
      'Real-time learning',
      'Cognitive computing modules'
    ],
    benefits: [
      'Ultra-low power consumption',
      'Real-time learning capabilities',
      'Improved pattern recognition',
      'Enhanced AI efficiency'
    ],
    pricing: {
      basic: '$5,500/month',
      professional: '$22,500/month',
      enterprise: 'Custom pricing'
    },
    category: 'Neuromorphic Computing',
    tags: ['neuromorphic', 'ai', 'neural-networks', 'cognitive-computing', 'low-power'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'blockchain-enterprise',
    name: 'Enterprise Blockchain Platform',
    description: 'Scalable blockchain infrastructure for enterprise applications, supply chain management, and digital identity.',
    features: [
      'Permissioned blockchain networks',
      'Smart contract development',
      'Supply chain tracking',
      'Digital identity management',
      'Interoperability solutions'
    ],
    benefits: [
      'Enhanced transparency',
      'Improved security',
      'Reduced fraud',
      'Streamlined processes'
    ],
    pricing: {
      basic: '$3,500/month',
      professional: '$15,500/month',
      enterprise: 'Custom pricing'
    },
    category: 'Blockchain',
    tags: ['blockchain', 'smart-contracts', 'supply-chain', 'digital-identity', 'enterprise'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems Platform',
    description: 'Comprehensive platform for developing and deploying autonomous vehicles, drones, and robotic systems.',
    features: [
      'Autonomous vehicle software',
      'Drone fleet management',
      'Robotic process automation',
      'Computer vision integration',
      'Safety and compliance tools'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced human error',
      '24/7 operation capability',
      'Cost optimization'
    ],
    pricing: {
      basic: '$4,200/month',
      professional: '$18,500/month',
      enterprise: 'Custom pricing'
    },
    category: 'Autonomous Systems',
    tags: ['autonomous', 'robotics', 'drones', 'computer-vision', 'automation'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];