export interface SpecializedITInfrastructureService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
}

export const SPECIALIZED_IT_INFRASTRUCTURE_SERVICES: SpecializedITInfrastructureService[] = [
  // Hyperconverged Infrastructure Platform
  {
    id: "hyperconverged-infrastructure-platform",
    title: "Hyperconverged Infrastructure Platform",
    description: "Enterprise-grade hyperconverged infrastructure solution that combines compute, storage, and networking in a single, scalable platform for modern data centers.",
    category: "Data Center Infrastructure",
    subcategory: "Hyperconvergence",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Unified management interface",
      "Automated scaling",
      "Built-in disaster recovery",
      "Advanced monitoring",
      "Resource optimization",
      "Multi-site replication",
      "API integration",
      "Custom dashboards"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Simplify management and operations",
      "Improve scalability and flexibility",
      "Enhance disaster recovery capabilities",
      "Reduce deployment time by 80%"
    ],
    useCases: [
      "Virtual desktop infrastructure",
      "Private cloud deployments",
      "Edge computing",
      "Branch office consolidation",
      "Development and testing"
    ],
    targetAudience: [
      "Large enterprises",
      "Data center operators",
      "Cloud service providers",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Hyperconvergence", "Data Center", "Virtualization", "Storage", "Networking"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["VMware", "Nutanix", "Hyper-V", "Kubernetes", "Custom Software"],
    integrations: ["VMware vCenter", "Microsoft System Center", "Ansible", "Terraform", "Monitoring tools"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "FedRAMP"],
    roi: "350% within 12 months",
    competitors: ["Nutanix", "VMware", "HPE SimpliVity", "Dell EMC", "Cisco HyperFlex"]
  },

  // Software-Defined Networking Platform
  {
    id: "software-defined-networking-platform",
    title: "Software-Defined Networking Platform",
    description: "Advanced SDN platform that provides centralized network control, automation, and programmability for modern enterprise networks.",
    category: "Networking",
    subcategory: "Software-Defined Networking",
    price: 1899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Centralized network control",
      "Network automation",
      "Traffic optimization",
      "Security policy management",
      "Multi-vendor support",
      "Real-time analytics",
      "API-first architecture",
      "Custom applications"
    ],
    benefits: [
      "Reduce network management costs by 50%",
      "Improve network agility and flexibility",
      "Enhance security and compliance",
      "Enable network programmability",
      "Optimize network performance"
    ],
    useCases: [
      "Data center networking",
      "Campus networks",
      "Wide area networks",
      "Cloud networking",
      "Network automation"
    ],
    targetAudience: [
      "Large enterprises",
      "Service providers",
      "Data center operators",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["SDN", "Networking", "Automation", "Network Management", "Virtualization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,899 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["OpenFlow", "OpenDaylight", "ONOS", "Python", "Custom Controllers"],
    integrations: ["Cisco ACI", "VMware NSX", "OpenStack", "Kubernetes", "Network devices"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "Industry standards"],
    roi: "400% within 10 months",
    competitors: ["Cisco ACI", "VMware NSX", "Juniper Contrail", "OpenStack", "Big Switch Networks"]
  },

  // Edge Computing Infrastructure
  {
    id: "edge-computing-infrastructure",
    title: "Edge Computing Infrastructure",
    description: "Distributed edge computing infrastructure that brings compute, storage, and networking closer to data sources for real-time processing and reduced latency.",
    category: "Edge Computing",
    subcategory: "Infrastructure",
    price: 1599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed edge nodes",
      "Real-time data processing",
      "Edge AI capabilities",
      "Local storage and caching",
      "Network optimization",
      "Security and encryption",
      "Monitoring and management",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce latency by 80%",
      "Lower bandwidth costs by 60%",
      "Improve data privacy and security",
      "Enable offline operation",
      "Scale to thousands of edge locations"
    ],
    useCases: [
      "IoT data processing",
      "Autonomous vehicles",
      "Smart cities",
      "Industrial automation",
      "Content delivery networks"
    ],
    targetAudience: [
      "IoT service providers",
      "Telecommunications companies",
      "Manufacturing companies",
      "Smart city initiatives",
      "Content providers"
    ],
    tags: ["Edge Computing", "IoT", "Real-time Processing", "Distributed Systems", "AI"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "premium",
    marketPrice: "$1,599 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Kubernetes", "Docker", "Edge AI", "MQTT", "Custom Software"],
    integrations: ["Cloud platforms", "IoT platforms", "5G networks", "Monitoring tools"],
    compliance: ["SOC 2", "ISO 27001", "Industry-specific standards"],
    roi: "300% within 12 months",
    competitors: ["AWS Greengrass", "Azure IoT Edge", "Google Edge TPU", "NVIDIA Jetson", "EdgeX Foundry"]
  },

  // High-Performance Computing Cluster
  {
    id: "high-performance-computing-cluster",
    title: "High-Performance Computing Cluster",
    description: "Enterprise-grade HPC cluster solution for scientific computing, data analytics, and machine learning workloads requiring massive computational power.",
    category: "High-Performance Computing",
    subcategory: "Cluster Management",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Scalable compute nodes",
      "High-speed interconnect",
      "Parallel file systems",
      "Job scheduling and management",
      "Resource monitoring",
      "GPU acceleration support",
      "Custom software stack",
      "Performance optimization"
    ],
    benefits: [
      "Accelerate computations by 100x",
      "Handle massive datasets efficiently",
      "Support complex scientific workflows",
      "Enable breakthrough research",
      "Reduce time to results"
    ],
    useCases: [
      "Scientific research",
      "Machine learning training",
      "Financial modeling",
      "Engineering simulations",
      "Data analytics"
    ],
    targetAudience: [
      "Research institutions",
      "Universities",
      "Government agencies",
      "Financial institutions",
      "Engineering companies"
    ],
    tags: ["HPC", "Cluster Computing", "Scientific Computing", "Machine Learning", "High Performance"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Slurm", "OpenMPI", "Lustre", "CUDA", "Custom Software"],
    integrations: ["Research software", "Data storage systems", "Visualization tools", "Cloud platforms"],
    compliance: ["Research standards", "Data security", "Performance benchmarks"],
    roi: "500% within 18 months",
    competitors: ["Cray", "HPE", "Dell EMC", "IBM", "Fujitsu"]
  },

  // Storage Area Network Platform
  {
    id: "storage-area-network-platform",
    title: "Storage Area Network Platform",
    description: "Enterprise-grade SAN platform providing high-performance, scalable, and reliable storage infrastructure for mission-critical applications.",
    category: "Storage",
    subcategory: "Storage Area Networks",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "High-performance storage arrays",
      "Fibre Channel connectivity",
      "Data deduplication",
      "Snapshot and replication",
      "Thin provisioning",
      "Quality of service",
      "Monitoring and analytics",
      "Disaster recovery"
    ],
    benefits: [
      "Improve storage performance by 300%",
      "Reduce storage costs through efficiency",
      "Enhance data protection and availability",
      "Simplify storage management",
      "Support mission-critical applications"
    ],
    useCases: [
      "Database storage",
      "Virtual machine storage",
      "File sharing",
      "Backup and recovery",
      "High-performance applications"
    ],
    targetAudience: [
      "Large enterprises",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Service providers"
    ],
    tags: ["SAN", "Storage", "High Performance", "Data Protection", "Enterprise"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Fibre Channel", "iSCSI", "NVMe", "Storage Arrays", "Custom Software"],
    integrations: ["VMware", "Hyper-V", "Linux", "Windows", "Storage management tools"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "Industry standards"],
    roi: "400% within 15 months",
    competitors: ["EMC", "NetApp", "HPE", "IBM", "Dell"]
  },

  // Network Functions Virtualization Platform
  {
    id: "network-functions-virtualization-platform",
    title: "Network Functions Virtualization Platform",
    description: "NFV platform that virtualizes network functions to improve network flexibility, reduce costs, and accelerate service deployment.",
    category: "Networking",
    subcategory: "Network Functions Virtualization",
    price: 2299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Virtual network functions",
      "Service chaining",
      "Orchestration and management",
      "Performance optimization",
      "Scalability and elasticity",
      "Multi-vendor support",
      "API integration",
      "Custom VNFs"
    ],
    benefits: [
      "Reduce network equipment costs by 40%",
      "Improve network flexibility and agility",
      "Accelerate service deployment",
      "Enable network automation",
      "Support 5G and edge computing"
    ],
    useCases: [
      "5G network infrastructure",
      "Virtual CPE",
      "Network slicing",
      "Service provider networks",
      "Enterprise networks"
    ],
    targetAudience: [
      "Telecommunications providers",
      "Service providers",
      "Large enterprises",
      "Government agencies",
      "Network equipment vendors"
    ],
    tags: ["NFV", "Virtualization", "5G", "Network Functions", "Service Chaining"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,299 - $9,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["OpenStack", "Kubernetes", "DPDK", "SR-IOV", "Custom VNFs"],
    integrations: ["Network equipment", "OSS/BSS systems", "Cloud platforms", "Monitoring tools"],
    compliance: ["ETSI NFV", "3GPP standards", "Industry regulations"],
    roi: "450% within 15 months",
    competitors: ["VMware", "Cisco", "Nokia", "Ericsson", "Huawei"]
  },

  // Data Center Automation Platform
  {
    id: "data-center-automation-platform",
    title: "Data Center Automation Platform",
    description: "Comprehensive data center automation platform that streamlines operations, reduces costs, and improves efficiency through intelligent automation.",
    category: "Data Center",
    subcategory: "Automation",
    price: 2799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Infrastructure automation",
      "Workflow orchestration",
      "Self-healing systems",
      "Predictive maintenance",
      "Resource optimization",
      "Compliance automation",
      "Real-time monitoring",
      "Custom workflows"
    ],
    benefits: [
      "Reduce operational costs by 50%",
      "Improve uptime to 99.99%",
      "Automate 80% of routine tasks",
      "Enhance compliance and security",
      "Accelerate service delivery"
    ],
    useCases: [
      "Data center operations",
      "Cloud infrastructure",
      "DevOps automation",
      "Compliance management",
      "Disaster recovery"
    ],
    targetAudience: [
      "Data center operators",
      "Cloud service providers",
      "Large enterprises",
      "Government agencies",
      "Managed service providers"
    ],
    tags: ["Data Center", "Automation", "DevOps", "Compliance", "Monitoring"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,799 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Ansible", "Terraform", "Python", "Kubernetes", "Custom Software"],
    integrations: ["VMware", "OpenStack", "AWS", "Azure", "Monitoring tools"],
    compliance: ["SOC 2", "ISO 27001", "ITIL", "Industry standards"],
    roi: "400% within 12 months",
    competitors: ["VMware vRealize", "BMC", "ServiceNow", "Ansible", "Terraform"]
  },

  // Quantum-Safe Cryptography Platform
  {
    id: "quantum-safe-cryptography-platform",
    title: "Quantum-Safe Cryptography Platform",
    description: "Future-proof cryptography platform implementing post-quantum cryptographic algorithms to protect data against quantum computing threats.",
    category: "Security",
    subcategory: "Quantum-Safe Cryptography",
    price: 1899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Post-quantum algorithms",
      "Hybrid cryptography",
      "Key management",
      "Performance optimization",
      "Standards compliance",
      "Migration tools",
      "API integration",
      "Custom implementations"
    ],
    benefits: [
      "Protect against quantum threats",
      "Future-proof security infrastructure",
      "Maintain compliance standards",
      "Enable secure digital transformation",
      "Reduce security risks"
    ],
    useCases: [
      "Digital signatures",
      "Key exchange",
      "Encryption",
      "Authentication",
      "Secure communications"
    ],
    targetAudience: [
      "Financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "Technology companies",
      "Critical infrastructure"
    ],
    tags: ["Quantum-Safe", "Cryptography", "Security", "Post-Quantum", "Compliance"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,899 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Post-Quantum Algorithms", "Hybrid Cryptography", "C++", "Python", "Custom Software"],
    integrations: ["PKI systems", "TLS/SSL", "Digital certificates", "Security platforms"],
    compliance: ["NIST standards", "FIPS", "Industry regulations", "International standards"],
    roi: "350% within 18 months",
    competitors: ["ISARA", "PQShield", "Cryptosense", "Quantum Xchange", "ID Quantique"]
  }
];