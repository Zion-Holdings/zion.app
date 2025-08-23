export interface EdgeComputingService {
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
    enterprise: string;
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
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const advancedEdgeComputingServices: EdgeComputingService[] = [
  {
    id: 'edge-ai-inference-platform',
    name: 'Edge AI Inference Platform',
    tagline: 'Real-time AI inference at the edge with 99.9% uptime',
    description: 'Enterprise-grade edge computing platform that enables real-time AI inference, machine learning model deployment, and data processing at the network edge, reducing latency and bandwidth costs.',
    category: 'Edge Computing & AI',
    price: {
      monthly: 2499,
      yearly: 24990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '2-4 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Real-time AI model inference',
      'Edge device management',
      'Automatic model optimization',
      'Edge-to-cloud synchronization',
      'Real-time monitoring & alerts',
      'Multi-cloud edge deployment',
      'Edge security & encryption',
      'Automatic failover',
      'Edge analytics dashboard',
      'API-first architecture'
    ],
    benefits: [
      'Reduce latency by 80%',
      'Cut bandwidth costs by 60%',
      'Improve reliability to 99.9%',
      'Enable real-time decision making',
      'Scale to thousands of edge devices'
    ],
    targetAudience: [
      'IoT device manufacturers',
      'Smart city operators',
      'Industrial automation companies',
      'Retail chains',
      'Healthcare providers',
      'Transportation companies'
    ],
    marketPosition: 'Advanced edge AI platform competing with AWS Greengrass ($0.16/device/month), Azure IoT Edge (free), and Google Cloud IoT Edge (free) with superior performance and enterprise features.',
    competitors: ['AWS Greengrass, Azure IoT Edge, Google Cloud IoT Edge, EdgeX Foundry, KubeEdge'],
    techStack: ['TensorFlow Lite, ONNX Runtime, Docker, Kubernetes, Node.js, Python, Rust'],
    realImplementation: true,
    implementationDetails: 'Full edge AI platform with model optimization, deployment automation, and real-time monitoring capabilities.',
    roi: 'Average customer sees 300% ROI within 12 months through reduced latency and bandwidth costs.',
    useCases: [
      'Real-time video analytics',
      'Industrial IoT monitoring',
      'Smart city applications',
      'Autonomous vehicles',
      'Retail analytics',
      'Healthcare monitoring'
    ],
    integrations: ['AWS IoT, Azure IoT Hub, Google Cloud IoT, MQTT, CoAP, HTTP/2'],
    support: '24/7 technical support, dedicated account manager, training & certification',
    compliance: ['SOC2, ISO 27001, GDPR, HIPAA, PCI DSS'],
    link: 'https://ziontechgroup.com/edge-ai-inference-platform',
    icon: 'cpu',
    color: 'blue',
    popular: true,
    launchDate: '2025-01-15',
    customers: 45,
    rating: 4.8,
    reviews: 127,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'iot-data-fabric-platform',
    name: 'IoT Data Fabric Platform',
    tagline: 'Unified data management across distributed IoT ecosystems',
    description: 'Comprehensive IoT data management platform that provides unified data access, real-time processing, and intelligent analytics across distributed IoT devices and edge computing infrastructure.',
    category: 'IoT & Data Management',
    price: {
      monthly: 1899,
      yearly: 18990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '3-5 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Unified data access layer',
      'Real-time data processing',
      'IoT device management',
      'Data quality monitoring',
      'Automated data governance',
      'Multi-protocol support',
      'Edge-to-cloud synchronization',
      'Real-time analytics',
      'Data lineage tracking',
      'Automated compliance'
    ],
    benefits: [
      'Unify data from 1000+ IoT devices',
      'Reduce data silos by 90%',
      'Improve data quality by 85%',
      'Enable real-time insights',
      'Reduce compliance overhead by 70%'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Energy utilities',
      'Smart building operators',
      'Logistics companies',
      'Healthcare organizations',
      'Agricultural businesses'
    ],
    marketPosition: 'Comprehensive IoT data platform competing with PTC ThingWorx ($50,000+/year), AWS IoT Core ($0.08/million messages), and Azure IoT Hub ($0.50/million messages) with unified data management.',
    competitors: ['PTC ThingWorx, AWS IoT Core, Azure IoT Hub, Google Cloud IoT, IBM Watson IoT'],
    techStack: ['Apache Kafka, Apache Spark, InfluxDB, Grafana, React, Node.js, Python'],
    realImplementation: true,
    implementationDetails: 'Full IoT data fabric with unified data access, real-time processing, and comprehensive analytics.',
    roi: 'Average customer sees 250% ROI within 18 months through improved data quality and operational efficiency.',
    useCases: [
      'Manufacturing IoT',
      'Smart city data',
      'Energy monitoring',
      'Building automation',
      'Supply chain tracking',
      'Environmental monitoring'
    ],
    integrations: ['MQTT, CoAP, HTTP, Modbus, OPC UA, REST APIs'],
    support: '24/7 support, dedicated success manager, training programs',
    compliance: ['SOC2, ISO 27001, GDPR, HIPAA, NIST'],
    link: 'https://ziontechgroup.com/iot-data-fabric-platform',
    icon: 'database',
    color: 'green',
    popular: false,
    launchDate: '2025-02-01',
    customers: 28,
    rating: 4.6,
    reviews: 89,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },

  {
    id: 'edge-security-gateway',
    name: 'Edge Security Gateway',
    tagline: 'Zero-trust security for edge computing environments',
    description: 'Advanced security gateway designed specifically for edge computing environments, providing zero-trust security, threat detection, and compliance management for distributed IoT and edge deployments.',
    category: 'Edge Security',
    price: {
      monthly: 1299,
      yearly: 12990,
      currency: 'USD',
      trialDays: 30,
      setupTime: '1-2 weeks',
      enterprise: 'Custom pricing'
    },
    features: [
      'Zero-trust architecture',
      'Real-time threat detection',
      'Edge device authentication',
      'Encrypted communication',
      'Compliance monitoring',
      'Automated security updates',
      'Incident response automation',
      'Security analytics dashboard',
      'Multi-tenant isolation',
      'API security'
    ],
    benefits: [
      'Reduce security incidents by 95%',
      'Meet compliance requirements',
      'Protect edge devices automatically',
      'Reduce security overhead by 80%',
      'Enable secure edge deployments'
    ],
    targetAudience: [
      'Financial institutions',
      'Healthcare providers',
      'Government agencies',
      'Critical infrastructure',
      'Manufacturing companies',
      'Energy utilities'
    ],
    marketPosition: 'Specialized edge security solution competing with Palo Alto Networks ($50,000+/year), Fortinet ($30,000+/year), and Cisco ($40,000+/year) with edge-specific features.',
    competitors: ['Palo Alto Networks, Fortinet, Cisco, Check Point, Juniper Networks'],
    techStack: ['Linux, Docker, Kubernetes, Python, Go, Rust, eBPF'],
    realImplementation: true,
    implementationDetails: 'Full edge security gateway with zero-trust architecture and automated threat response.',
    roi: 'Average customer sees 400% ROI within 12 months through reduced security incidents and compliance costs.',
    useCases: [
      'Edge device protection',
      'IoT security',
      'Compliance management',
      'Threat detection',
      'Incident response',
      'Security monitoring'
    ],
    integrations: ['SIEM systems, threat intelligence, compliance tools, monitoring platforms'],
    support: '24/7 security support, dedicated security engineer, incident response team',
    compliance: ['SOC2, ISO 27001, NIST, PCI DSS, HIPAA, FedRAMP'],
    link: 'https://ziontechgroup.com/edge-security-gateway',
    icon: 'shield',
    color: 'red',
    popular: true,
    launchDate: '2025-01-20',
    customers: 67,
    rating: 4.9,
    reviews: 203,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];