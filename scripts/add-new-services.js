// Script to add new SEO-optimized services to the catalog
const fs = require('fs');
const path = require('path');

const servicesDataPath = path.join(__dirname, '../app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesDataPath, 'utf8'));

// New SEO-optimized services to add
const newServices = [
  {
    name: "AI-Powered Predictive Maintenance Platform",
    description: "Machine learning system that predicts equipment failures before they occur, reducing downtime by up to 50% and maintenance costs by 30%. Uses IoT sensor data, historical patterns, and real-time analytics for proactive maintenance scheduling.",
    category: "ai",
    industry: "Manufacturing",
    features: [
      "Real-time equipment monitoring",
      "Failure prediction algorithms",
      "Preventive maintenance scheduling",
      "Cost optimization recommendations"
    ],
    benefits: [
      "50% reduction in unplanned downtime",
      "30% lower maintenance costs",
      "Extended equipment lifespan",
      "Improved safety compliance"
    ],
    pricing: { basic: "299", pro: "899", enterprise: "2999" },
    id: "ai-predictive-maintenance-platform-" + Date.now(),
    timestamp: new Date().toISOString(),
    contactInfo: {
      website: "/services/ai-predictive-maintenance-platform",
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950"
    },
    icon: "🔧",
    href: "/services/ai-predictive-maintenance-platform",
    popular: true
  },
  {
    name: "AI Customer Journey Orchestration Engine",
    description: "Unified platform that maps, analyzes, and optimizes customer journeys across all touchpoints. AI-driven personalization increases conversion rates by up to 40% while reducing churn by 25%.",
    category: "ai",
    industry: "Retail",
    features: [
      "Journey mapping and visualization",
      "AI-powered personalization engine",
      "Cross-channel orchestration",
      "Real-time optimization"
    ],
    benefits: [
      "40% increase in conversion rates",
      "25% reduction in customer churn",
      "30% improvement in customer satisfaction",
      "Unified customer experience"
    ],
    pricing: { basic: "499", pro: "1499", enterprise: "4999" },
    id: "ai-customer-journey-orchestration-" + Date.now(),
    timestamp: new Date().toISOString(),
    contactInfo: {
      website: "/services/ai-customer-journey-orchestration",
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950"
    },
    icon: "🧭",
    href: "/services/ai-customer-journey-orchestration",
    popular: true
  },
  {
    name: "Automated Compliance & Audit Management",
    description: "AI-powered compliance platform that continuously monitors regulatory requirements, generates audit trails, and provides real-time compliance scoring. Reduces compliance costs by up to 60% while ensuring 100% audit readiness.",
    category: "security",
    industry: "Financial Services",
    features: [
      "Continuous regulatory monitoring",
      "Automated audit trail generation",
      "Compliance scoring dashboard",
      "Incident response automation"
    ],
    benefits: [
      "60% reduction in compliance costs",
      "100% audit readiness guaranteed",
      "Real-time regulatory alerts",
      "Automated documentation"
    ],
    pricing: { basic: "399", pro: "1199", enterprise: "3999" },
    id: "automated-compliance-audit-management-" + Date.now(),
    timestamp: new Date().toISOString(),
    contactInfo: {
      website: "/services/automated-compliance-audit-management",
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950"
    },
    icon: "📋",
    href: "/services/automated-compliance-audit-management",
    popular: true
  },
  {
    name: "AI-Powered Market Intelligence Hub",
    description: "Comprehensive market intelligence platform that analyzes competitors, tracks industry trends, and provides actionable insights. Enables data-driven strategic decisions with 95% accuracy in market predictions.",
    category: "ai",
    industry: "Technology",
    features: [
      "Competitor analysis dashboard",
      "Industry trend monitoring",
      "Market opportunity scoring",
      "Predictive market modeling"
    ],
    benefits: [
      "95% accuracy in market predictions",
      "30% faster strategic decisions",
      "Early competitive advantage",
      "Data-driven investment planning"
    ],
    pricing: { basic: "249", pro: "749", enterprise: "2499" },
    id: "ai-market-intelligence-hub-" + Date.now(),
    timestamp: new Date().toISOString(),
    contactInfo: {
      website: "/services/ai-market-intelligence-hub",
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950"
    },
    icon: "📊",
    href: "/services/ai-market-intelligence-hub",
    popular: true
  },
  {
    name: "Intelligent Document Processing & Workflow",
    description: "AI-powered document processing that automatically extracts, categorizes, and routes documents with 98% accuracy. Reduces manual processing time by up to 80% while ensuring compliance and audit readiness.",
    category: "automation",
    industry: "Legal",
    features: [
      "AI-powered document extraction",
      "Smart document classification",
      "Automated workflow routing",
      "Compliance validation"
    ],
    benefits: [
      "80% reduction in processing time",
      "98% extraction accuracy",
      "Zero manual review required",
      "Full audit trail maintained"
    ],
    pricing: { basic: "199", pro: "599", enterprise: "1999" },
    id: "intelligent-document-processing-workflow-" + Date.now(),
    timestamp: new Date().toISOString(),
    contactInfo: {
      website: "/services/intelligent-document-processing-workflow",
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950"
    },
    icon: "📄",
    href: "/services/intelligent-document-processing-workflow",
    popular: true
  }
];

// Add new services
newServices.forEach(service => {
  services.unshift(service); // Add to beginning for visibility
});

// Update timestamps for existing services to ensure they're properly indexed
const now = new Date().toISOString();
services.forEach(s => {
  if (!s.timestamp) {
    s.timestamp = now;
  }
});

// Write back to file
fs.writeFileSync(servicesDataPath, JSON.stringify(services, null, 2));
console.log(`Added ${newServices.length} new SEO-optimized services`);
console.log(`Total services now: ${services.length}`);