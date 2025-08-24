"use client";

import { useState } from "react";

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  pricing: string;
  marketPrice: string;
  benefits: string[];
  technology: string[];
  status: "active" | "beta" | "coming-soon";
  demoUrl?: string;
  documentationUrl?: string;
}

const services: Service[] = [
  // AI & Machine Learning Services
  {
    id: "ai-analytics-platform",
    name: "AI-Powered Business Intelligence Platform",
    category: "AI & Machine Learning",
    description: "Advanced analytics platform with machine learning capabilities for business intelligence, predictive insights, and automated reporting.",
    features: [
      "Real-time data processing and visualization",
      "Predictive analytics and forecasting",
      "Natural language query interface",
      "Automated report generation",
      "Multi-source data integration",
      "Custom ML model training"
    ],
    pricing: "Starting at $299/month",
    marketPrice: "Market average: $500-2000/month",
    benefits: [
      "Reduce manual reporting by 80%",
      "Improve decision-making with predictive insights",
      "Real-time business monitoring",
      "Scalable from startup to enterprise"
    ],
    technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/ai-analytics",
    documentationUrl: "https://ziontechgroup.com/docs/ai-analytics"
  },
  {
    id: "intelligent-support-bot",
    name: "AI Customer Support Automation",
    category: "AI & Machine Learning",
    description: "Intelligent chatbot system that provides 24/7 customer support with natural language processing, sentiment analysis, and seamless human handoff.",
    features: [
      "Multi-language support (50+ languages)",
      "Sentiment analysis and emotion detection",
      "Seamless human agent handoff",
      "Integration with CRM systems",
      "Custom knowledge base training",
      "Analytics and performance metrics"
    ],
    pricing: "Starting at $99/month + $0.10/conversation",
    marketPrice: "Market average: $200-800/month",
    benefits: [
      "Reduce support costs by 60%",
      "24/7 availability in multiple languages",
      "Instant response times",
      "Scalable customer support"
    ],
    technology: ["Python", "NLP", "React", "FastAPI", "MongoDB", "Redis"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/support-bot"
  },
  {
    id: "predictive-maintenance-ai",
    name: "AI-Driven Predictive Maintenance",
    category: "AI & Machine Learning",
    description: "Intelligent system that monitors equipment health, predicts failures, and optimizes maintenance schedules using machine learning algorithms.",
    features: [
      "Real-time equipment monitoring",
      "Failure prediction algorithms",
      "Maintenance optimization",
      "IoT sensor integration",
      "Performance analytics dashboard",
      "Alert system and notifications"
    ],
    pricing: "Starting at $50/equipment/month",
    marketPrice: "Market average: $100-300/equipment/month",
    benefits: [
      "Reduce unplanned downtime by 70%",
      "Optimize maintenance costs",
      "Extend equipment lifespan",
      "Real-time monitoring and alerts"
    ],
    technology: ["Python", "Scikit-learn", "React", "PostgreSQL", "IoT protocols", "Docker"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/predictive-maintenance"
  },
  {
    id: "computer-vision-platform",
    name: "Computer Vision & Image Recognition",
    category: "AI & Machine Learning",
    description: "Advanced computer vision platform for object detection, facial recognition, quality control, and automated image analysis.",
    features: [
      "Real-time object detection and tracking",
      "Facial recognition and authentication",
      "Quality control automation",
      "Image classification and tagging",
      "Custom model training",
      "API integration capabilities"
    ],
    pricing: "Starting at $199/month + $0.01/image",
    marketPrice: "Market average: $500-1500/month",
    benefits: [
      "Automate quality control processes",
      "Enhance security with facial recognition",
      "Reduce manual image analysis",
      "Scalable image processing"
    ],
    technology: ["Python", "OpenCV", "TensorFlow", "PyTorch", "React", "FastAPI"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/computer-vision"
  },

  // IT Infrastructure Services
  {
    id: "cloud-migration-suite",
    name: "Cloud Migration & Optimization Suite",
    category: "IT Infrastructure",
    description: "Comprehensive cloud migration platform that automates the process of moving applications and data to cloud environments with optimization recommendations.",
    features: [
      "Automated migration planning",
      "Cost optimization analysis",
      "Multi-cloud deployment support",
      "Performance monitoring",
      "Security compliance checks",
      "Rollback capabilities"
    ],
    pricing: "Starting at $2,500/project",
    marketPrice: "Market average: $5,000-25,000/project",
    benefits: [
      "Reduce migration time by 50%",
      "Optimize cloud costs by 30%",
      "Minimize downtime during migration",
      "Ensure security compliance"
    ],
    technology: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/cloud-migration"
  },
  {
    id: "devops-automation-platform",
    name: "DevOps Automation & CI/CD Platform",
    category: "IT Infrastructure",
    description: "End-to-end DevOps automation platform that streamlines software development, testing, and deployment processes.",
    features: [
      "Automated CI/CD pipelines",
      "Infrastructure as Code (IaC)",
      "Container orchestration",
      "Monitoring and alerting",
      "Security scanning integration",
      "Multi-environment management"
    ],
    pricing: "Starting at $399/month",
    marketPrice: "Market average: $800-2000/month",
    benefits: [
      "Reduce deployment time by 80%",
      "Improve code quality and security",
      "Automate repetitive tasks",
      "Scale development teams efficiently"
    ],
    technology: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Terraform", "Ansible"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/devops-automation"
  },
  {
    id: "cybersecurity-suite",
    name: "Comprehensive Cybersecurity Suite",
    category: "IT Infrastructure",
    description: "Advanced cybersecurity platform providing threat detection, vulnerability assessment, and security monitoring for businesses of all sizes.",
    features: [
      "Real-time threat detection",
      "Vulnerability scanning and assessment",
      "Security incident response",
      "Compliance reporting",
      "Employee security training",
      "24/7 security monitoring"
    ],
    pricing: "Starting at $599/month",
    marketPrice: "Market average: $1,200-3,000/month",
    benefits: [
      "Protect against 99.9% of cyber threats",
      "Meet compliance requirements",
      "Reduce security incident response time",
      "Comprehensive security coverage"
    ],
    technology: ["SIEM", "EDR", "Firewall", "IDS/IPS", "Vulnerability scanners", "AI threat detection"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity"
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-development-platform",
    name: "Enterprise Blockchain Development Platform",
    category: "Blockchain & Web3",
    description: "Complete blockchain development platform for creating, deploying, and managing smart contracts, DApps, and enterprise blockchain solutions.",
    features: [
      "Smart contract development tools",
      "Multi-blockchain support",
      "Security auditing and testing",
      "Deployment automation",
      "Monitoring and analytics",
      "Integration APIs"
    ],
    pricing: "Starting at $1,500/project",
    marketPrice: "Market average: $3,000-15,000/project",
    benefits: [
      "Accelerate blockchain development",
      "Ensure smart contract security",
      "Reduce development costs",
      "Multi-chain compatibility"
    ],
    technology: ["Ethereum", "Polygon", "Solana", "Solidity", "Web3.js", "Hardhat"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/blockchain"
  },
  {
    id: "defi-protocol-suite",
    name: "DeFi Protocol Development Suite",
    category: "Blockchain & Web3",
    description: "Comprehensive DeFi development platform for creating lending protocols, DEXs, yield farming, and other decentralized financial applications.",
    features: [
      "Lending protocol templates",
      "DEX development framework",
      "Yield farming strategies",
      "Liquidity management tools",
      "Risk assessment models",
      "Regulatory compliance tools"
    ],
    pricing: "Starting at $2,500/project",
    marketPrice: "Market average: $5,000-20,000/project",
    benefits: [
      "Fast-track DeFi development",
      "Reduce development risks",
      "Ensure regulatory compliance",
      "Optimize for security and efficiency"
    ],
    technology: ["Solidity", "Vyper", "Web3.js", "Ethers.js", "OpenZeppelin", "Chainlink"],
    status: "beta",
    demoUrl: "https://ziontechgroup.com/demo/defi-suite"
  },

  // IoT & Edge Computing Services
  {
    id: "iot-data-platform",
    name: "IoT Data Management & Analytics Platform",
    category: "IoT & Edge Computing",
    description: "Scalable IoT platform for collecting, processing, and analyzing data from connected devices with real-time insights and automation.",
    features: [
      "Device management and provisioning",
      "Real-time data processing",
      "Edge computing capabilities",
      "Data visualization dashboards",
      "Automated alerts and actions",
      "Scalable architecture"
    ],
    pricing: "Starting at $5/device/month",
    marketPrice: "Market average: $10-50/device/month",
    benefits: [
      "Reduce IoT infrastructure costs",
      "Real-time data insights",
      "Scalable device management",
      "Automated operations"
    ],
    technology: ["Apache Kafka", "Python", "Node.js", "MongoDB", "Docker", "Kubernetes"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/iot-platform"
  },
  {
    id: "edge-computing-orchestrator",
    name: "Edge Computing Orchestration Platform",
    category: "IoT & Edge Computing",
    description: "Intelligent edge computing platform that optimizes resource allocation, workload distribution, and edge-to-cloud synchronization.",
    features: [
      "Intelligent workload distribution",
      "Resource optimization",
      "Edge-to-cloud synchronization",
      "Real-time monitoring",
      "Automated scaling",
      "Security and compliance"
    ],
    pricing: "Starting at $20/node/month",
    marketPrice: "Market average: $50-200/node/month",
    benefits: [
      "Reduce latency by 80%",
      "Optimize resource utilization",
      "Lower bandwidth costs",
      "Enhanced security at edge"
    ],
    technology: ["Kubernetes", "Docker", "Python", "Go", "MQTT", "WebRTC"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/edge-orchestrator"
  },

  // Data & Analytics Services
  {
    id: "data-warehouse-platform",
    name: "Modern Data Warehouse Platform",
    category: "Data & Analytics",
    description: "Cloud-native data warehouse platform with automated ETL processes, real-time analytics, and advanced data modeling capabilities.",
    features: [
      "Automated ETL/ELT pipelines",
      "Real-time data processing",
      "Advanced data modeling",
      "Data quality monitoring",
      "Multi-cloud support",
      "Scalable architecture"
    ],
    pricing: "Starting at $499/month",
    marketPrice: "Market average: $1,000-3,000/month",
    benefits: [
      "Reduce data processing time by 70%",
      "Improve data quality and reliability",
      "Real-time business insights",
      "Cost-effective scaling"
    ],
    technology: ["Snowflake", "BigQuery", "Redshift", "Apache Airflow", "dbt", "Python"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/data-warehouse"
  },
  {
    id: "real-time-analytics-engine",
    name: "Real-Time Analytics & Streaming Engine",
    category: "Data & Analytics",
    description: "High-performance streaming analytics platform for processing real-time data streams with sub-second latency and complex event processing.",
    features: [
      "Sub-second latency processing",
      "Complex event processing",
      "Real-time dashboards",
      "Streaming SQL support",
      "Horizontal scaling",
      "Integration connectors"
    ],
    pricing: "Starting at $299/month",
    marketPrice: "Market average: $600-2,000/month",
    benefits: [
      "Real-time business insights",
      "Reduce decision latency",
      "Handle high-volume data streams",
      "Scalable architecture"
    ],
    technology: ["Apache Kafka", "Apache Flink", "Apache Spark", "Redis", "Elasticsearch", "Grafana"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/real-time-analytics"
  },

  // API & Integration Services
  {
    id: "api-management-platform",
    name: "Enterprise API Management Platform",
    category: "API & Integration",
    description: "Comprehensive API management platform with gateway, developer portal, analytics, and security features for enterprise API operations.",
    features: [
      "API gateway and routing",
      "Developer portal",
      "Rate limiting and throttling",
      "Authentication and authorization",
      "API analytics and monitoring",
      "Documentation generation"
    ],
    pricing: "Starting at $199/month",
    marketPrice: "Market average: $400-1,500/month",
    benefits: [
      "Centralize API management",
      "Improve developer experience",
      "Enhance API security",
      "Monitor API performance"
    ],
    technology: ["Kong", "Apigee", "Node.js", "Redis", "PostgreSQL", "Docker"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/api-management"
  },
  {
    id: "integration-platform",
    name: "Enterprise Integration Platform",
    category: "API & Integration",
    description: "Low-code integration platform for connecting disparate systems, automating workflows, and building data pipelines across organizations.",
    features: [
      "Visual workflow designer",
      "Pre-built connectors",
      "Data transformation tools",
      "Real-time synchronization",
      "Error handling and retry",
      "Monitoring and logging"
    ],
    pricing: "Starting at $399/month",
    marketPrice: "Market average: $800-2,500/month",
    benefits: [
      "Reduce integration time by 60%",
      "Connect any system or application",
      "Automate manual processes",
      "Real-time data synchronization"
    ],
    technology: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    status: "active",
    demoUrl: "https://ziontechgroup.com/demo/integration-platform"
  }
];

const categories = Array.from(new Set(services.map(s => s.category)));

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Services & Solutions</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Comprehensive micro SAAS services, IT solutions, and AI-powered platforms designed to accelerate your digital transformation journey.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/10">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
          <p className="opacity-80">Contact our team to discuss your requirements and get a personalized solution.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold">📱 Mobile</div>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
            </div>
            <div>
              <div className="font-semibold">✉️ Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
            </div>
            <div>
              <div className="font-semibold">📍 Address</div>
              <div className="opacity-80">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedCategory === category
                  ? "border-blue-500 bg-blue-500/20 text-blue-300"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredServices.map(service => (
          <div key={service.id} className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                  service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {service.status === 'active' ? 'Active' : service.status === 'beta' ? 'Beta' : 'Coming Soon'}
                </span>
              </div>
            </div>
            
            <p className="text-sm opacity-80 mb-4">{service.description}</p>
            
            <div className="space-y-3 mb-4">
              <div>
                <span className="font-semibold text-sm">Key Features:</span>
                <ul className="text-xs opacity-80 mt-1 space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-blue-400">+{service.features.length - 3} more features</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <span className="font-semibold">Our Pricing:</span>
                <div className="text-blue-400">{service.pricing}</div>
              </div>
              <div>
                <span className="font-semibold">Market Average:</span>
                <div className="opacity-80">{service.marketPrice}</div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div>
                <span className="font-semibold text-sm">Key Benefits:</span>
                <ul className="text-xs opacity-80 mt-1 space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs opacity-60">
                Tech: {service.technology.slice(0, 3).join(", ")}
                {service.technology.length > 3 && "..."}
              </div>
              <div className="flex gap-2">
                {service.demoUrl && (
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-semibold">Need a Custom Solution?</h2>
        <p className="opacity-80 max-w-2xl mx-auto">
          Our team specializes in building custom software solutions tailored to your specific business needs. 
          From concept to deployment, we handle every aspect of your digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Custom Solution Inquiry"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Get Custom Quote
          </a>
          <a
            href="tel:+13024640950"
            className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}