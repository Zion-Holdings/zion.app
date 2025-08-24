"use client";

import { useState } from "react";
import Link from "next/link";

// Service categories and their services
const serviceCategories = {
  "AI & Machine Learning": [
    {
      id: "ai-autonomous-enterprise",
      name: "AI Autonomous Enterprise Platform",
      tagline: "Self-Managing Enterprise Systems with Zero Human Intervention",
      price: "$1,299/month",
      description: "Revolutionary autonomous enterprise platform that manages all business operations without human intervention. Achieve 2000% ROI through complete automation and optimization.",
      features: [
        "Autonomous decision-making AI with 99.9% accuracy",
        "Self-healing infrastructure and systems",
        "Predictive business intelligence and forecasting",
        "Automated resource allocation and optimization",
        "Real-time performance monitoring and adjustment"
      ],
      marketPrice: "$5000+/month",
      savings: "Save 75% vs. competitors",
      link: "https://ziontechgroup.com/ai-autonomous-enterprise",
      popular: true
    },
    {
      id: "ai-consciousness-simulator",
      name: "AI Consciousness Simulator Pro",
      tagline: "Simulate human-like consciousness in AI systems with ethical safeguards",
      price: "$4,999/month",
      description: "Advanced AI consciousness simulation platform that creates human-like awareness, emotions, and decision-making capabilities while maintaining strict ethical boundaries and safety protocols.",
      features: [
        "Multi-dimensional consciousness modeling",
        "Ethical AI framework integration",
        "Emotional intelligence simulation",
        "Self-awareness algorithms",
        "Moral reasoning capabilities"
      ],
      marketPrice: "No direct competitors",
      savings: "First-to-market solution",
      link: "https://ziontechgroup.com/ai-consciousness-simulator",
      popular: true
    },
    {
      id: "ai-multimodal-fusion",
      name: "AI Multimodal Fusion Platform",
      tagline: "Seamlessly integrate text, image, audio, and video AI processing",
      price: "$2,499/month",
      description: "Breakthrough multimodal AI platform that processes and analyzes text, images, audio, and video simultaneously, enabling comprehensive understanding and intelligent decision-making across all media types.",
      features: [
        "Cross-modal learning and understanding",
        "Real-time multimedia processing",
        "Context-aware AI responses",
        "Advanced pattern recognition",
        "Seamless media integration"
      ],
      marketPrice: "$8000+/month",
      savings: "Save 70% vs. enterprise solutions",
      link: "https://ziontechgroup.com/ai-multimodal-fusion",
      popular: false
    }
  ],
  "Micro SAAS Solutions": [
    {
      id: "smart-crm-intelligence",
      name: "Smart CRM Intelligence Suite",
      tagline: "AI-powered customer relationship management with predictive analytics",
      price: "$299/month",
      description: "Intelligent CRM platform that uses AI to predict customer behavior, automate follow-ups, and optimize sales processes for maximum conversion rates.",
      features: [
        "AI-powered lead scoring",
        "Predictive customer analytics",
        "Automated follow-up sequences",
        "Sales pipeline optimization",
        "Customer sentiment analysis"
      ],
      marketPrice: "$800/month",
      savings: "Save 63% vs. competitors",
      link: "https://ziontechgroup.com/smart-crm-intelligence",
      popular: true
    },
    {
      id: "affiliate-attribution-suite",
      name: "Affiliate Attribution Suite",
      tagline: "Advanced affiliate tracking and attribution with AI optimization",
      price: "$199/month",
      description: "Comprehensive affiliate marketing platform with AI-powered attribution modeling, fraud detection, and performance optimization for maximum ROI.",
      features: [
        "AI-powered attribution modeling",
        "Fraud detection and prevention",
        "Real-time performance tracking",
        "Automated optimization",
        "Multi-channel attribution"
      ],
      marketPrice: "$500/month",
      savings: "Save 60% vs. market leaders",
      link: "https://ziontechgroup.com/affiliate-attribution-suite",
      popular: false
    },
    {
      id: "intelligent-hr-analytics",
      name: "Intelligent HR Analytics Platform",
      tagline: "AI-driven human resources analytics and optimization",
      price: "$399/month",
      description: "Revolutionary HR platform that uses AI to analyze employee performance, predict turnover, and optimize workforce planning for maximum productivity.",
      features: [
        "AI-powered performance analytics",
        "Turnover prediction models",
        "Workforce optimization",
        "Employee engagement tracking",
        "Recruitment optimization"
      ],
      marketPrice: "$1200/month",
      savings: "Save 67% vs. enterprise HR solutions",
      link: "https://ziontechgroup.com/intelligent-hr-analytics",
      popular: true
    }
  ],
  "IT Infrastructure & Security": [
    {
      id: "quantum-cybersecurity-suite",
      name: "Quantum Cybersecurity Suite",
      tagline: "Next-generation quantum-resistant security for enterprise protection",
      price: "$1,999/month",
      description: "Advanced cybersecurity platform that uses quantum computing principles to create unbreakable encryption and protect against future quantum attacks.",
      features: [
        "Quantum-resistant encryption",
        "AI-powered threat detection",
        "Zero-trust architecture",
        "Real-time security monitoring",
        "Compliance automation"
      ],
      marketPrice: "$5000+/month",
      savings: "Save 60% vs. enterprise security",
      link: "https://ziontechgroup.com/quantum-cybersecurity-suite",
      popular: true
    },
    {
      id: "edge-computing-orchestrator",
      name: "Edge Computing Orchestrator",
      tagline: "Intelligent edge computing management and optimization",
      price: "$899/month",
      description: "Revolutionary edge computing platform that intelligently distributes workloads, optimizes performance, and reduces latency for distributed applications.",
      features: [
        "Intelligent workload distribution",
        "Latency optimization",
        "Edge node management",
        "Performance monitoring",
        "Automated scaling"
      ],
      marketPrice: "$2500/month",
      savings: "Save 64% vs. cloud providers",
      link: "https://ziontechgroup.com/edge-computing-orchestrator",
      popular: false
    },
    {
      id: "blockchain-governance-platform",
      name: "Blockchain Governance Platform",
      tagline: "Decentralized governance and DAO management solutions",
      price: "$599/month",
      description: "Comprehensive blockchain governance platform that enables organizations to create, manage, and operate decentralized autonomous organizations (DAOs) with full transparency and security.",
      features: [
        "DAO creation and management",
        "Voting and proposal systems",
        "Treasury management",
        "Smart contract automation",
        "Governance analytics"
      ],
      marketPrice: "$1500/month",
      savings: "Save 60% vs. blockchain solutions",
      link: "https://ziontechgroup.com/blockchain-governance-platform",
      popular: false
    }
  ],
  "Space Technology": [
    {
      id: "satellite-ai-orchestrator",
      name: "Satellite AI Orchestrator",
      tagline: "AI-powered satellite constellation management and optimization",
      price: "$3,999/month",
      description: "Revolutionary satellite management platform that uses AI to optimize orbital paths, manage constellations, and maximize satellite lifespan and performance.",
      features: [
        "AI orbital optimization",
        "Constellation management",
        "Predictive maintenance",
        "Collision avoidance",
        "Performance analytics"
      ],
      marketPrice: "$10000+/month",
      savings: "Save 60% vs. space tech solutions",
      link: "https://ziontechgroup.com/satellite-ai-orchestrator",
      popular: true
    },
    {
      id: "space-data-analytics",
      name: "Space Data Analytics Platform",
      tagline: "Advanced analytics for satellite and space mission data",
      price: "$1,499/month",
      description: "Comprehensive space data analytics platform that processes satellite imagery, telemetry data, and mission information to provide actionable insights for space operations.",
      features: [
        "Satellite imagery analysis",
        "Telemetry data processing",
        "Mission optimization",
        "Predictive analytics",
        "Real-time monitoring"
      ],
      marketPrice: "$4000/month",
      savings: "Save 63% vs. space analytics",
      link: "https://ziontechgroup.com/space-data-analytics",
      popular: false
    }
  ],
  "Financial Technology": [
    {
      id: "ai-financial-planning",
      name: "AI Financial Planning Platform",
      tagline: "Intelligent financial planning and wealth management",
      price: "$399/month",
      description: "Advanced financial planning platform that uses AI to create personalized investment strategies, optimize portfolios, and provide real-time financial insights.",
      features: [
        "AI-powered investment strategies",
        "Portfolio optimization",
        "Risk assessment",
        "Real-time market analysis",
        "Personalized financial advice"
      ],
      marketPrice: "$1000/month",
      savings: "Save 60% vs. financial advisors",
      link: "https://ziontechgroup.com/ai-financial-planning",
      popular: true
    },
    {
      id: "cryptocurrency-intelligence",
      name: "Cryptocurrency Intelligence Suite",
      tagline: "AI-powered crypto trading and market analysis",
      price: "$299/month",
      description: "Comprehensive cryptocurrency platform that uses AI to analyze market trends, predict price movements, and optimize trading strategies for maximum returns.",
      features: [
        "AI market prediction",
        "Trading strategy optimization",
        "Risk management",
        "Portfolio tracking",
        "Real-time alerts"
      ],
      marketPrice: "$800/month",
      savings: "Save 63% vs. crypto platforms",
      link: "https://ziontechgroup.com/cryptocurrency-intelligence",
      popular: false
    }
  ],
  "Healthcare & Biotechnology": [
    {
      id: "ai-drug-discovery-platform",
      name: "AI Drug Discovery Platform",
      tagline: "Accelerate pharmaceutical research with AI-powered molecular analysis",
      price: "$5,999/month",
      description: "Revolutionary AI platform that accelerates drug discovery by analyzing molecular structures, predicting drug interactions, and optimizing clinical trial designs.",
      features: [
        "AI molecular modeling",
        "Drug interaction prediction",
        "Clinical trial optimization",
        "Biomarker identification",
        "Regulatory compliance"
      ],
      marketPrice: "$15000+/month",
      savings: "Save 60% vs. pharmaceutical solutions",
      link: "https://ziontechgroup.com/ai-drug-discovery",
      popular: true
    },
    {
      id: "genomic-ai-analytics",
      name: "Genomic AI Analytics Suite",
      tagline: "Advanced genomic data analysis and personalized medicine",
      price: "$2,999/month",
      description: "Cutting-edge genomic analysis platform that uses AI to interpret genetic data, identify disease risks, and develop personalized treatment plans.",
      features: [
        "AI genomic interpretation",
        "Disease risk assessment",
        "Personalized medicine",
        "Genetic counseling support",
        "Research collaboration tools"
      ],
      marketPrice: "$8000/month",
      savings: "Save 63% vs. genomic platforms",
      link: "https://ziontechgroup.com/genomic-ai-analytics",
      popular: false
    }
  ],
  "Education & Learning": [
    {
      id: "ai-personalized-learning",
      name: "AI Personalized Learning Platform",
      tagline: "Adaptive education tailored to individual learning styles",
      price: "$199/month",
      description: "Revolutionary learning platform that uses AI to create personalized educational experiences, adapting content and pace to each student's unique learning style.",
      features: [
        "Adaptive learning algorithms",
        "Personalized content delivery",
        "Progress tracking",
        "Learning style analysis",
        "Real-time assessment"
      ],
      marketPrice: "$500/month",
      savings: "Save 60% vs. educational platforms",
      link: "https://ziontechgroup.com/ai-personalized-learning",
      popular: true
    },
    {
      id: "virtual-reality-education",
      name: "Virtual Reality Education Suite",
      tagline: "Immersive learning experiences in virtual environments",
      price: "$399/month",
      description: "Advanced VR education platform that creates immersive learning experiences, enabling students to explore complex concepts in interactive 3D environments.",
      features: [
        "VR content creation",
        "Interactive simulations",
        "Multi-user collaboration",
        "Progress analytics",
        "Cross-platform compatibility"
      ],
      marketPrice: "$1000/month",
      savings: "Save 60% vs. VR education solutions",
      link: "https://ziontechgroup.com/vr-education-suite",
      popular: false
    }
  ],
  "Manufacturing & Industry 4.0": [
    {
      id: "smart-manufacturing-ai",
      name: "Smart Manufacturing AI Platform",
      tagline: "Intelligent automation and predictive maintenance for Industry 4.0",
      price: "$1,999/month",
      description: "Revolutionary manufacturing platform that uses AI to optimize production processes, predict equipment failures, and automate quality control for maximum efficiency.",
      features: [
        "Predictive maintenance",
        "Quality control automation",
        "Production optimization",
        "Supply chain management",
        "Real-time monitoring"
      ],
      marketPrice: "$5000+/month",
      savings: "Save 60% vs. manufacturing solutions",
      link: "https://ziontechgroup.com/smart-manufacturing-ai",
      popular: true
    },
    {
      id: "industrial-iot-platform",
      name: "Industrial IoT Platform",
      tagline: "Comprehensive IoT solution for industrial automation and monitoring",
      price: "$899/month",
      description: "Advanced IoT platform that connects industrial equipment, collects real-time data, and provides intelligent insights for operational optimization and automation.",
      features: [
        "Equipment connectivity",
        "Real-time data collection",
        "Predictive analytics",
        "Remote monitoring",
        "Automation workflows"
      ],
      marketPrice: "$2500/month",
      savings: "Save 64% vs. IoT platforms",
      link: "https://ziontechgroup.com/industrial-iot-platform",
      popular: false
    }
  ],
  "Retail & E-commerce": [
    {
      id: "ai-retail-optimization",
      name: "AI Retail Optimization Suite",
      tagline: "Intelligent retail analytics and customer experience optimization",
      price: "$599/month",
      description: "Advanced retail platform that uses AI to optimize inventory management, personalize customer experiences, and maximize sales through intelligent insights.",
      features: [
        "Inventory optimization",
        "Customer personalization",
        "Sales forecasting",
        "Price optimization",
        "Customer behavior analysis"
      ],
      marketPrice: "$1500/month",
      savings: "Save 60% vs. retail solutions",
      link: "https://ziontechgroup.com/ai-retail-optimization",
      popular: true
    },
    {
      id: "omnichannel-commerce",
      name: "Omnichannel Commerce Platform",
      tagline: "Seamless multi-channel commerce experience with AI optimization",
      price: "$799/month",
      description: "Comprehensive commerce platform that provides seamless shopping experiences across all channels while using AI to optimize conversions and customer satisfaction.",
      features: [
        "Multi-channel integration",
        "Unified customer data",
        "AI-powered recommendations",
        "Seamless checkout",
        "Performance analytics"
      ],
      marketPrice: "$2000/month",
      savings: "Save 60% vs. commerce platforms",
      link: "https://ziontechgroup.com/omnichannel-commerce",
      popular: false
    }
  ],
  "Quantum Computing & Advanced Tech": [
    {
      id: "quantum-ai-hybrid",
      name: "Quantum AI Hybrid Platform",
      tagline: "Revolutionary quantum-classical AI hybrid computing solution",
      price: "$9,999/month",
      description: "Breakthrough platform that combines quantum computing with classical AI to solve previously intractable problems in optimization, cryptography, and scientific research.",
      features: [
        "Quantum-classical hybrid algorithms",
        "Quantum error correction",
        "Advanced optimization",
        "Cryptographic applications",
        "Scientific research tools"
      ],
      marketPrice: "$25000+/month",
      savings: "Save 60% vs. quantum solutions",
      link: "https://ziontechgroup.com/quantum-ai-hybrid",
      popular: true
    },
    {
      id: "neuromorphic-computing",
      name: "Neuromorphic Computing Platform",
      tagline: "Brain-inspired computing architecture for AI acceleration",
      price: "$4,999/month",
      description: "Revolutionary neuromorphic computing platform that mimics the human brain's neural structure for ultra-efficient AI processing and real-time learning capabilities.",
      features: [
        "Brain-inspired architecture",
        "Real-time learning",
        "Ultra-low power consumption",
        "Parallel processing",
        "Adaptive algorithms"
      ],
      marketPrice: "$12000+/month",
      savings: "Save 58% vs. neuromorphic solutions",
      link: "https://ziontechgroup.com/neuromorphic-computing",
      popular: false
    }
  ],
  "Metaverse & Web3": [
    {
      id: "metaverse-ai-platform",
      name: "Metaverse AI Platform",
      tagline: "Intelligent virtual world creation and management",
      price: "$1,999/month",
      description: "Advanced metaverse platform that uses AI to create, manage, and optimize virtual worlds with intelligent NPCs, dynamic environments, and personalized experiences.",
      features: [
        "AI-powered world generation",
        "Intelligent NPCs",
        "Dynamic environments",
        "Personalized experiences",
        "Cross-platform compatibility"
      ],
      marketPrice: "$5000+/month",
      savings: "Save 60% vs. metaverse platforms",
      link: "https://ziontechgroup.com/metaverse-ai-platform",
      popular: true
    },
    {
      id: "web3-identity-platform",
      name: "Web3 Identity & Reputation Platform",
      tagline: "Decentralized identity and reputation management",
      price: "$299/month",
      description: "Comprehensive Web3 platform that provides decentralized identity management, reputation systems, and trust mechanisms for the decentralized web.",
      features: [
        "Decentralized identity",
        "Reputation management",
        "Trust mechanisms",
        "Privacy protection",
        "Cross-chain compatibility"
      ],
      marketPrice: "$800/month",
      savings: "Save 63% vs. Web3 solutions",
      link: "https://ziontechgroup.com/web3-identity-platform",
      popular: false
    }
  ],
  "Cybersecurity & Threat Intelligence": [
    {
      id: "ai-threat-hunting-platform",
      name: "AI Threat Hunting Platform",
      tagline: "Proactive cybersecurity with AI-powered threat detection and response",
      price: "$1,499/month",
      description: "Advanced cybersecurity platform that uses AI to proactively hunt for threats, analyze attack patterns, and provide real-time threat intelligence and automated response.",
      features: [
        "AI-powered threat hunting",
        "Behavioral analysis",
        "Real-time threat intelligence",
        "Automated incident response",
        "Threat correlation engine"
      ],
      marketPrice: "$4000/month",
      savings: "Save 63% vs. enterprise security",
      link: "https://ziontechgroup.com/ai-threat-hunting",
      popular: true
    },
    {
      id: "zero-trust-security-suite",
      name: "Zero Trust Security Suite",
      tagline: "Comprehensive zero-trust architecture implementation",
      price: "$899/month",
      description: "Complete zero-trust security solution that implements continuous verification, least-privilege access, and micro-segmentation for maximum security posture.",
      features: [
        "Continuous verification",
        "Least-privilege access",
        "Micro-segmentation",
        "Identity governance",
        "Network security"
      ],
      marketPrice: "$2500/month",
      savings: "Save 64% vs. zero-trust solutions",
      link: "https://ziontechgroup.com/zero-trust-security",
      popular: false
    }
  ],
  "Data Analytics & Business Intelligence": [
    {
      id: "real-time-analytics-engine",
      name: "Real-Time Analytics Engine",
      tagline: "Instant insights with sub-second query performance",
      price: "$799/month",
      description: "High-performance analytics engine that delivers real-time insights with sub-second query performance, enabling instant decision-making and business optimization.",
      features: [
        "Sub-second query performance",
        "Real-time data processing",
        "Advanced visualizations",
        "Predictive analytics",
        "Data governance"
      ],
      marketPrice: "$2000/month",
      savings: "Save 60% vs. analytics platforms",
      link: "https://ziontechgroup.com/real-time-analytics",
      popular: true
    },
    {
      id: "ai-data-catalog",
      name: "AI Data Catalog & Discovery",
      tagline: "Intelligent data discovery and cataloging with AI",
      price: "$599/month",
      description: "AI-powered data catalog that automatically discovers, catalogs, and organizes enterprise data assets for improved data governance and accessibility.",
      features: [
        "Automated data discovery",
        "AI-powered classification",
        "Data lineage tracking",
        "Quality assessment",
        "Governance automation"
      ],
      marketPrice: "$1500/month",
      savings: "Save 60% vs. data catalog solutions",
      link: "https://ziontechgroup.com/ai-data-catalog",
      popular: false
    }
  ],
  "Cloud & DevOps Automation": [
    {
      id: "intelligent-devops-platform",
      name: "Intelligent DevOps Platform",
      tagline: "AI-powered DevOps automation and optimization",
      price: "$1,199/month",
      description: "Revolutionary DevOps platform that uses AI to automate deployments, optimize CI/CD pipelines, and provide intelligent insights for continuous improvement.",
      features: [
        "AI-powered automation",
        "Intelligent CI/CD optimization",
        "Performance monitoring",
        "Automated testing",
        "Deployment orchestration"
      ],
      marketPrice: "$3000/month",
      savings: "Save 60% vs. DevOps platforms",
      link: "https://ziontechgroup.com/intelligent-devops",
      popular: true
    },
    {
      id: "multi-cloud-orchestrator",
      name: "Multi-Cloud Orchestrator",
      tagline: "Unified management across multiple cloud providers",
      price: "$699/month",
      description: "Comprehensive multi-cloud management platform that provides unified orchestration, cost optimization, and governance across AWS, Azure, GCP, and private clouds.",
      features: [
        "Multi-cloud orchestration",
        "Cost optimization",
        "Unified governance",
        "Security compliance",
        "Performance monitoring"
      ],
      marketPrice: "$1800/month",
      savings: "Save 61% vs. multi-cloud solutions",
      link: "https://ziontechgroup.com/multi-cloud-orchestrator",
      popular: false
    }
  ],
  "Internet of Things (IoT)": [
    {
      id: "iot-intelligence-platform",
      name: "IoT Intelligence Platform",
      tagline: "AI-powered IoT data processing and insights",
      price: "$899/month",
      description: "Advanced IoT platform that uses AI to process sensor data, detect anomalies, and provide intelligent insights for IoT device management and optimization.",
      features: [
        "AI data processing",
        "Anomaly detection",
        "Predictive maintenance",
        "Device management",
        "Real-time analytics"
      ],
      marketPrice: "$2200/month",
      savings: "Save 59% vs. IoT platforms",
      link: "https://ziontechgroup.com/iot-intelligence",
      popular: true
    },
    {
      id: "smart-city-platform",
      name: "Smart City IoT Platform",
      tagline: "Comprehensive IoT solution for urban infrastructure",
      price: "$2,499/month",
      description: "Complete smart city platform that connects urban infrastructure, optimizes resource usage, and improves citizen services through intelligent IoT integration.",
      features: [
        "Infrastructure connectivity",
        "Resource optimization",
        "Citizen services",
        "Traffic management",
        "Environmental monitoring"
      ],
      marketPrice: "$6000/month",
      savings: "Save 58% vs. smart city solutions",
      link: "https://ziontechgroup.com/smart-city-platform",
      popular: false
    }
  ],
  "Digital Marketing & SEO": [
    {
      id: "ai-seo-optimizer",
      name: "AI SEO Optimizer Pro",
      tagline: "Intelligent SEO optimization with AI insights",
      price: "$399/month",
      description: "Advanced SEO platform that uses AI to analyze search trends, optimize content, and provide actionable insights for improved search rankings and traffic.",
      features: [
        "AI content optimization",
        "Search trend analysis",
        "Keyword research",
        "Performance tracking",
        "Competitive analysis"
      ],
      marketPrice: "$1000/month",
      savings: "Save 60% vs. SEO platforms",
      link: "https://ziontechgroup.com/ai-seo-optimizer",
      popular: true
    },
    {
      id: "social-media-intelligence",
      name: "Social Media Intelligence Suite",
      tagline: "AI-powered social media analytics and optimization",
      price: "$299/month",
      description: "Comprehensive social media platform that uses AI to analyze engagement, optimize content, and provide insights for improved social media performance.",
      features: [
        "AI content analysis",
        "Engagement optimization",
        "Trend prediction",
        "Audience insights",
        "Performance analytics"
      ],
      marketPrice: "$800/month",
      savings: "Save 63% vs. social media tools",
      link: "https://ziontechgroup.com/social-media-intelligence",
      popular: false
    }
  ],
  "Supply Chain & Logistics": [
    {
      id: "ai-supply-chain-optimizer",
      name: "AI Supply Chain Optimizer",
      tagline: "Intelligent supply chain optimization and forecasting",
      price: "$1,299/month",
      description: "Advanced supply chain platform that uses AI to optimize logistics, predict demand, and automate inventory management for maximum efficiency.",
      features: [
        "AI demand forecasting",
        "Logistics optimization",
        "Inventory automation",
        "Supplier management",
        "Risk assessment"
      ],
      marketPrice: "$3500/month",
      savings: "Save 63% vs. supply chain solutions",
      link: "https://ziontechgroup.com/ai-supply-chain",
      popular: true
    },
    {
      id: "logistics-intelligence-platform",
      name: "Logistics Intelligence Platform",
      tagline: "Real-time logistics optimization and tracking",
      price: "$799/month",
      description: "Comprehensive logistics platform that provides real-time tracking, route optimization, and intelligent insights for improved delivery performance.",
      features: [
        "Real-time tracking",
        "Route optimization",
        "Delivery analytics",
        "Fleet management",
        "Performance monitoring"
      ],
      marketPrice: "$2000/month",
      savings: "Save 60% vs. logistics platforms",
      link: "https://ziontechgroup.com/logistics-intelligence",
      popular: false
    }
  ],
  "Energy & Sustainability": [
    {
      id: "smart-energy-management",
      name: "Smart Energy Management Platform",
      tagline: "AI-powered energy optimization and sustainability",
      price: "$1,599/month",
      description: "Advanced energy platform that uses AI to optimize energy consumption, predict demand, and implement sustainable energy practices for organizations.",
      features: [
        "AI energy optimization",
        "Demand prediction",
        "Sustainability tracking",
        "Cost optimization",
        "Carbon footprint analysis"
      ],
      marketPrice: "$4000/month",
      savings: "Save 60% vs. energy management",
      link: "https://ziontechgroup.com/smart-energy-management",
      popular: true
    },
    {
      id: "renewable-energy-optimizer",
      name: "Renewable Energy Optimizer",
      tagline: "Intelligent renewable energy system optimization",
      price: "$999/month",
      description: "Comprehensive renewable energy platform that optimizes solar, wind, and other renewable energy systems for maximum efficiency and ROI.",
      features: [
        "System optimization",
        "Performance monitoring",
        "ROI analysis",
        "Maintenance scheduling",
        "Grid integration"
      ],
      marketPrice: "$2500/month",
      savings: "Save 60% vs. renewable energy solutions",
      link: "https://ziontechgroup.com/renewable-energy-optimizer",
      popular: false
    }
  ],
  "Legal & Compliance": [
    {
      id: "ai-legal-assistant",
      name: "AI Legal Assistant Pro",
      tagline: "Intelligent legal research and document analysis",
      price: "$599/month",
      description: "Advanced legal platform that uses AI to assist with legal research, document analysis, and compliance monitoring for law firms and legal departments.",
      features: [
        "AI legal research",
        "Document analysis",
        "Compliance monitoring",
        "Case law tracking",
        "Legal insights"
      ],
      marketPrice: "$1500/month",
      savings: "Save 60% vs. legal research tools",
      link: "https://ziontechgroup.com/ai-legal-assistant",
      popular: true
    },
    {
      id: "compliance-automation-suite",
      name: "Compliance Automation Suite",
      tagline: "Automated compliance monitoring and reporting",
      price: "$799/month",
      description: "Comprehensive compliance platform that automates monitoring, reporting, and risk assessment for various regulatory requirements and industry standards.",
      features: [
        "Automated monitoring",
        "Risk assessment",
        "Compliance reporting",
        "Audit trails",
        "Regulatory updates"
      ],
      marketPrice: "$2000/month",
      savings: "Save 60% vs. compliance solutions",
      link: "https://ziontechgroup.com/compliance-automation",
      popular: false
    }
  ],
  "Real Estate & Property Management": [
    {
      id: "ai-property-valuator",
      name: "AI Property Valuator",
      tagline: "Intelligent property valuation and market analysis",
      price: "$399/month",
      description: "Advanced real estate platform that uses AI to provide accurate property valuations, market analysis, and investment insights for real estate professionals.",
      features: [
        "AI property valuation",
        "Market analysis",
        "Investment insights",
        "Trend prediction",
        "Comparative analysis"
      ],
      marketPrice: "$1000/month",
      savings: "Save 60% vs. valuation tools",
      link: "https://ziontechgroup.com/ai-property-valuator",
      popular: true
    },
    {
      id: "smart-property-management",
      name: "Smart Property Management Platform",
      tagline: "Intelligent property management and tenant services",
      price: "$299/month",
      description: "Comprehensive property management platform that uses AI to optimize operations, improve tenant satisfaction, and maximize property performance.",
      features: [
        "AI operations optimization",
        "Tenant management",
        "Maintenance scheduling",
        "Financial tracking",
        "Performance analytics"
      ],
      marketPrice: "$800/month",
      savings: "Save 63% vs. property management",
      link: "https://ziontechgroup.com/smart-property-management",
      popular: false
    }
  ],
  "Emerging Technologies & Research": [
    {
      id: "quantum-machine-learning",
      name: "Quantum Machine Learning Platform",
      tagline: "Revolutionary quantum algorithms for machine learning acceleration",
      price: "$7,999/month",
      description: "Breakthrough platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI training by orders of magnitude.",
      features: [
        "Quantum ML algorithms",
        "Superposition optimization",
        "Quantum neural networks",
        "Exponential speedup",
        "Research collaboration tools"
      ],
      marketPrice: "$20000+/month",
      savings: "Save 60% vs. quantum research platforms",
      link: "https://ziontechgroup.com/quantum-machine-learning",
      popular: true
    },
    {
      id: "neuromorphic-ai-processor",
      name: "Neuromorphic AI Processor Platform",
      tagline: "Brain-inspired computing for ultra-efficient AI processing",
      price: "$5,999/month",
      description: "Revolutionary neuromorphic computing platform that mimics the human brain's neural structure for ultra-efficient AI processing and real-time learning capabilities.",
      features: [
        "Brain-inspired architecture",
        "Ultra-low power consumption",
        "Real-time learning",
        "Parallel processing",
        "Adaptive algorithms"
      ],
      marketPrice: "$15000+/month",
      savings: "Save 60% vs. neuromorphic solutions",
      link: "https://ziontechgroup.com/neuromorphic-ai-processor",
      popular: false
    }
  ],
  "Advanced Robotics & Automation": [
    {
      id: "ai-robotics-orchestrator",
      name: "AI Robotics Orchestrator",
      tagline: "Intelligent robotics coordination and automation",
      price: "$3,999/month",
      description: "Advanced robotics platform that uses AI to coordinate multiple robots, optimize workflows, and enable autonomous decision-making in complex environments.",
      features: [
        "Multi-robot coordination",
        "AI decision-making",
        "Workflow optimization",
        "Safety protocols",
        "Performance analytics"
      ],
      marketPrice: "$10000+/month",
      savings: "Save 60% vs. robotics platforms",
      link: "https://ziontechgroup.com/ai-robotics-orchestrator",
      popular: true
    },
    {
      id: "autonomous-vehicle-ai",
      name: "Autonomous Vehicle AI Platform",
      tagline: "AI-powered autonomous vehicle control and safety",
      price: "$4,999/month",
      description: "Comprehensive autonomous vehicle platform that provides AI-powered navigation, safety systems, and fleet management for autonomous transportation.",
      features: [
        "AI navigation systems",
        "Safety protocols",
        "Fleet management",
        "Real-time monitoring",
        "Regulatory compliance"
      ],
      marketPrice: "$12000+/month",
      savings: "Save 58% vs. autonomous vehicle solutions",
      link: "https://ziontechgroup.com/autonomous-vehicle-ai",
      popular: false
    }
  ],
  "Biotechnology & Life Sciences": [
    {
      id: "ai-protein-folding",
      name: "AI Protein Folding Platform",
      tagline: "Revolutionary protein structure prediction with AI",
      price: "$6,999/month",
      description: "Breakthrough platform that uses AI to predict protein structures, accelerating drug discovery and understanding of biological processes.",
      features: [
        "AI protein prediction",
        "Structure analysis",
        "Drug discovery tools",
        "Research collaboration",
        "Validation systems"
      ],
      marketPrice: "$18000+/month",
      savings: "Save 61% vs. protein research platforms",
      link: "https://ziontechgroup.com/ai-protein-folding",
      popular: true
    },
    {
      id: "synthetic-biology-platform",
      name: "Synthetic Biology AI Platform",
      tagline: "AI-powered synthetic biology design and optimization",
      price: "$4,999/month",
      description: "Advanced synthetic biology platform that uses AI to design, simulate, and optimize biological systems for research and industrial applications.",
      features: [
        "AI biological design",
        "Simulation tools",
        "Optimization algorithms",
        "Safety protocols",
        "Research collaboration"
      ],
      marketPrice: "$12000+/month",
      savings: "Save 58% vs. synthetic biology solutions",
      link: "https://ziontechgroup.com/synthetic-biology-platform",
      popular: false
    }
  ],
  "Climate & Environmental Tech": [
    {
      id: "climate-ai-predictor",
      name: "Climate AI Predictor",
      tagline: "AI-powered climate modeling and prediction",
      price: "$2,999/month",
      description: "Advanced climate modeling platform that uses AI to predict weather patterns, climate changes, and environmental impacts with unprecedented accuracy.",
      features: [
        "AI climate modeling",
        "Weather prediction",
        "Environmental impact analysis",
        "Risk assessment",
        "Research collaboration"
      ],
      marketPrice: "$8000/month",
      savings: "Save 63% vs. climate modeling platforms",
      link: "https://ziontechgroup.com/climate-ai-predictor",
      popular: true
    },
    {
      id: "carbon-capture-optimizer",
      name: "Carbon Capture Optimization Platform",
      tagline: "AI-optimized carbon capture and sequestration",
      price: "$3,999/month",
      description: "Revolutionary carbon capture platform that uses AI to optimize capture efficiency, reduce costs, and maximize environmental impact.",
      features: [
        "AI capture optimization",
        "Efficiency monitoring",
        "Cost optimization",
        "Environmental tracking",
        "Performance analytics"
      ],
      marketPrice: "$10000/month",
      savings: "Save 60% vs. carbon capture solutions",
      link: "https://ziontechgroup.com/carbon-capture-optimizer",
      popular: false
    }
  ],
  "Financial Services & DeFi": [
    {
      id: "ai-trading-algorithm",
      name: "AI Trading Algorithm Platform",
      tagline: "Intelligent algorithmic trading with AI optimization",
      price: "$1,999/month",
      description: "Advanced trading platform that uses AI to develop, optimize, and execute trading strategies for maximum returns and risk management.",
      features: [
        "AI strategy development",
        "Risk management",
        "Performance optimization",
        "Real-time execution",
        "Portfolio analytics"
      ],
      marketPrice: "$5000/month",
      savings: "Save 60% vs. trading platforms",
      link: "https://ziontechgroup.com/ai-trading-algorithm",
      popular: true
    },
    {
      id: "defi-intelligence-suite",
      name: "DeFi Intelligence Suite",
      tagline: "AI-powered DeFi analytics and optimization",
      price: "$799/month",
      description: "Comprehensive DeFi platform that uses AI to analyze protocols, optimize yields, and provide intelligent insights for decentralized finance.",
      features: [
        "Protocol analysis",
        "Yield optimization",
        "Risk assessment",
        "Portfolio tracking",
        "Market insights"
      ],
      marketPrice: "$2000/month",
      savings: "Save 60% vs. DeFi platforms",
      link: "https://ziontechgroup.com/defi-intelligence-suite",
      popular: false
    }
  ],
  "Media & Entertainment": [
    {
      id: "ai-content-generator",
      name: "AI Content Generator Pro",
      tagline: "Revolutionary AI-powered content creation platform",
      price: "$499/month",
      description: "Advanced content creation platform that uses AI to generate high-quality text, images, videos, and audio content for various media applications.",
      features: [
        "Multi-format generation",
        "Style customization",
        "Quality optimization",
        "Copyright compliance",
        "Performance analytics"
      ],
      marketPrice: "$1200/month",
      savings: "Save 58% vs. content creation tools",
      link: "https://ziontechgroup.com/ai-content-generator",
      popular: true
    },
    {
      id: "virtual-production-studio",
      name: "Virtual Production Studio",
      tagline: "AI-powered virtual film and video production",
      price: "$2,999/month",
      description: "Revolutionary virtual production platform that uses AI to create virtual sets, characters, and environments for film and video production.",
      features: [
        "Virtual set creation",
        "AI character generation",
        "Real-time rendering",
        "Collaboration tools",
        "Production analytics"
      ],
      marketPrice: "$8000/month",
      savings: "Save 63% vs. production studios",
      link: "https://ziontechgroup.com/virtual-production-studio",
      popular: false
    }
  ],
  "Gaming & Esports": [
    {
      id: "ai-gaming-companion",
      name: "AI Gaming Companion",
      tagline: "Intelligent AI gaming assistant and optimization",
      price: "$199/month",
      description: "Advanced gaming platform that uses AI to provide personalized gaming experiences, performance optimization, and intelligent assistance.",
      features: [
        "AI performance optimization",
        "Personalized experiences",
        "Game analysis",
        "Skill development",
        "Social features"
      ],
      marketPrice: "$500/month",
      savings: "Save 60% vs. gaming platforms",
      link: "https://ziontechgroup.com/ai-gaming-companion",
      popular: true
    },
    {
      id: "esports-intelligence-platform",
      name: "Esports Intelligence Platform",
      tagline: "AI-powered esports analytics and optimization",
      price: "$399/month",
      description: "Comprehensive esports platform that uses AI to analyze player performance, optimize strategies, and provide insights for competitive gaming.",
      features: [
        "Player performance analysis",
        "Strategy optimization",
        "Team analytics",
        "Competition insights",
        "Performance tracking"
      ],
      marketPrice: "$1000/month",
      savings: "Save 60% vs. esports platforms",
      link: "https://ziontechgroup.com/esports-intelligence-platform",
      popular: false
    }
  ]
};

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = Object.keys(serviceCategories);
  
  const filteredServices = Object.entries(serviceCategories)
    .filter(([category, services]) => 
      selectedCategory === "all" || category === selectedCategory
    )
    .flatMap(([category, services]) => 
      services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Revolutionary Technology Services
        </h1>
        <p className="text-xl opacity-80 max-w-4xl mx-auto">
          Discover our cutting-edge micro SAAS, IT infrastructure, and AI services that are transforming businesses worldwide. 
          From autonomous enterprise platforms to quantum cybersecurity, we deliver the future of technology today with unprecedented value and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="bg-blue-900/20 px-4 py-2 rounded-full border border-blue-500/30">
            🚀 50+ Revolutionary Services
          </div>
          <div className="bg-green-900/20 px-4 py-2 rounded-full border border-green-500/30">
            💰 Up to 75% Cost Savings
          </div>
          <div className="bg-purple-900/20 px-4 py-2 rounded-full border border-purple-500/30">
            🤖 AI-First Solutions
          </div>
          <div className="bg-orange-900/20 px-4 py-2 rounded-full border border-orange-500/30">
            ⚡ Instant Deployment
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Zion Tech Group?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="text-4xl">🎯</div>
            <h3 className="font-semibold">First-to-Market</h3>
            <p className="text-sm opacity-80">Pioneering solutions that don't exist elsewhere</p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl">💰</div>
            <h3 className="font-semibold">Massive Savings</h3>
            <p className="text-sm opacity-80">Up to 75% cost reduction vs. competitors</p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl">⚡</div>
            <h3 className="font-semibold">Lightning Fast</h3>
            <p className="text-sm opacity-80">Deploy in weeks, not months or years</p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-4xl">🔒</div>
            <h3 className="font-semibold">Enterprise Ready</h3>
            <p className="text-sm opacity-80">SOC2, GDPR, and enterprise compliance</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zinc-900/50 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Mobile:</span>
            <a href="tel:+13024640950" className="text-blue-400 hover:underline">+1 302 464 0950</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Email:</span>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Address:</span>
            <span>364 E Main St STE 1008 Middletown DE 19709</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-zinc-900 border border-white/10 rounded-lg px-4 py-2"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className={`rounded-lg border p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            service.popular 
              ? 'border-blue-500 bg-gradient-to-br from-blue-900/20 to-purple-900/20 shadow-lg shadow-blue-500/20' 
              : 'border-white/10 bg-zinc-900/50 hover:border-white/20'
          }`}>
            {service.popular && (
              <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                ⭐ Most Popular
              </div>
            )}
            
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold leading-tight">{service.name}</h3>
                <div className="text-2xl opacity-60">
                  {service.id.includes('ai') ? '🤖' : 
                   service.id.includes('quantum') ? '⚛️' : 
                   service.id.includes('blockchain') ? '🔗' : 
                   service.id.includes('iot') ? '📡' : 
                   service.id.includes('security') ? '🔒' : 
                   service.id.includes('analytics') ? '📊' : 
                   service.id.includes('cloud') ? '☁️' : 
                   service.id.includes('gaming') ? '🎮' : 
                   service.id.includes('finance') ? '💰' : 
                   service.id.includes('health') ? '🏥' : 
                   service.id.includes('education') ? '📚' : 
                   service.id.includes('retail') ? '🛒' : 
                   service.id.includes('manufacturing') ? '🏭' : 
                   service.id.includes('space') ? '🚀' : 
                   service.id.includes('climate') ? '🌍' : 
                   service.id.includes('legal') ? '⚖️' : 
                   service.id.includes('real-estate') ? '🏠' : 
                   service.id.includes('media') ? '🎬' : 
                   service.id.includes('robotics') ? '🤖' : 
                   service.id.includes('biotech') ? '🧬' : 
                   '🚀'}
                </div>
              </div>
              <p className="text-sm opacity-80 font-medium">{service.tagline}</p>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                <span className="text-2xl font-bold text-green-400">{service.price}</span>
                <div className="text-right">
                  <div className="text-sm opacity-60 line-through">{service.marketPrice}</div>
                  <div className="text-sm text-green-400 font-semibold">{service.savings}</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-blue-400">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-400 text-lg">✓</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm opacity-60 text-center pt-2">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Learn More & Get Started
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg opacity-80 mb-6 max-w-3xl mx-auto">
          Our revolutionary services are designed to give you a competitive edge in the digital economy. 
          From AI-powered automation to quantum computing solutions, we deliver the future of technology today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-3xl">🚀</div>
            <h3 className="font-semibold">Instant Deployment</h3>
            <p className="text-sm opacity-80">Deploy in weeks, not months</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl">💰</div>
            <h3 className="font-semibold">Massive Savings</h3>
            <p className="text-sm opacity-80">Up to 75% cost reduction</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl">🔒</div>
            <h3 className="font-semibold">Enterprise Security</h3>
            <p className="text-sm opacity-80">SOC2 & GDPR compliant</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 text-lg"
          >
            📞 Call Now: +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-lg"
          >
            ✉️ Email Us
          </a>
        </div>

        <div className="mt-8 p-4 bg-zinc-900/50 rounded-lg border border-white/10">
          <p className="text-sm opacity-80">
            <strong>Special Offer:</strong> First-time customers get 30 days free trial on any service. 
            No credit card required. Start transforming your business today!
          </p>
        </div>
      </div>
    </div>
  );
}