
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Shield, Brain, Cloud, Lock, Zap, Users, BarChart3, FileImage, Code, Shield as ShieldIcon, Server, TrendingUp, MessageCircle, Video, FileText, Heart } from "lucide-react";
import { useEffect, useState } from "react";

// Enhanced service listings with new micro SAAS services
const SERVICE_LISTINGS: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-content-generation",
    title: "AI Content Generator Pro",
    description: "Generate high-quality content, code, and creative assets with our advanced AI models. Perfect for marketers, developers, and content creators.",
    category: "AI & ML",
    price: 29,
    currency: "$",
    tags: ["AI Content", "Text Generation", "Code Generation", "Creative Writing"],
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "ai-media-editing",
    title: "AI Image & Video Editor",
    description: "Professional-grade AI-powered image and video editing tools for creators and businesses. Remove backgrounds, enhance quality, and generate variations.",
    category: "AI & ML",
    price: 19,
    currency: "$",
    tags: ["Image Editing", "Video Editing", "AI Enhancement", "Background Removal"],
    author: {
      name: "Zion Media Studio",
      id: "zion-media-studio",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant",
    description: "Intelligent code completion, debugging, and optimization powered by advanced language models. Support for 50+ programming languages with IDE integrations.",
    category: "AI & ML",
    price: 39,
    currency: "$",
    tags: ["Code Completion", "Debugging", "Code Review", "IDE Integration"],
    author: {
      name: "Zion Dev Tools",
      id: "zion-dev-tools",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "ai-analytics",
    title: "AI Data Analytics Platform",
    description: "Transform raw data into actionable insights with our AI-powered analytics suite. Advanced data visualization, predictive analytics, and automated reporting.",
    category: "AI & ML",
    price: 199,
    currency: "$",
    tags: ["Data Analytics", "Predictive Analytics", "Data Visualization", "Business Intelligence"],
    author: {
      name: "Zion Analytics",
      id: "zion-analytics",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:00:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 67,
  },

  // Cybersecurity Services
  {
    id: "ai-threat-detection",
    title: "AI Threat Detection",
    description: "Real-time cybersecurity threat detection and response using advanced AI algorithms. 24/7 monitoring with instant alerts and automated response.",
    category: "Cybersecurity",
    price: 99,
    currency: "$",
    tags: ["Threat Detection", "AI Security", "24/7 Monitoring", "Automated Response"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T16:45:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Suite",
    description: "Comprehensive zero-trust security implementation for modern enterprise environments. Identity verification, network segmentation, and continuous monitoring.",
    category: "Cybersecurity",
    price: 499,
    currency: "$",
    tags: ["Zero Trust", "Identity Verification", "Network Security", "Enterprise Security"],
    author: {
      name: "Zion Enterprise Security",
      id: "zion-enterprise-security",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T13:20:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 78,
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing as a Service",
    description: "Regular security assessments and vulnerability scanning for continuous protection. Monthly security assessments with detailed reports and remediation guidance.",
    category: "Cybersecurity",
    price: 299,
    currency: "$",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Security Compliance", "Monthly Reports"],
    author: {
      name: "Zion Security Testing",
      id: "zion-security-testing",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T10:30:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 92,
  },

  // Cloud & Infrastructure Services
  {
    id: "multi-cloud-management",
    title: "Multi-Cloud Management",
    description: "Unified management platform for AWS, Azure, Google Cloud, and hybrid environments. Cost optimization, security compliance, and unified monitoring.",
    category: "Cloud & Infrastructure",
    price: 79,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Security Compliance", "Unified Monitoring"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:15:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 145,
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Streamline CI/CD pipelines, infrastructure as code, and deployment automation. Automated testing, deployment, and infrastructure management.",
    category: "Cloud & Infrastructure",
    price: 49,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
    author: {
      name: "Zion DevOps",
      id: "zion-devops",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T12:00:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 167,
  },
  {
    id: "edge-computing",
    title: "Edge Computing Solutions",
    description: "Deploy and manage applications at the edge for improved performance and reduced latency. Global edge network with real-time processing and IoT integration.",
    category: "Cloud & Infrastructure",
    price: 149,
    currency: "$",
    tags: ["Edge Computing", "IoT Integration", "Real-time Processing", "Global Network"],
    author: {
      name: "Zion Edge Computing",
      id: "zion-edge-computing",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-26T08:45:00.000Z",
    aiScore: 88,
    rating: 4.5,
    reviewCount: 73,
  },

  // Business Intelligence Services
  {
    id: "ai-crm",
    title: "AI-Powered CRM",
    description: "Intelligent customer relationship management with predictive analytics and automation. Lead scoring, sales forecasting, and automated follow-ups.",
    category: "Business Intelligence",
    price: 39,
    currency: "$",
    tags: ["CRM", "Lead Scoring", "Sales Forecasting", "Automation"],
    author: {
      name: "Zion Business Solutions",
      id: "zion-business-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-24T14:20:00.000Z",
    aiScore: 90,
    rating: 4.6,
    reviewCount: 189,
  },
  {
    id: "business-automation",
    title: "Business Process Automation",
    description: "Automate repetitive tasks and workflows to improve efficiency and reduce costs. Integration with 100+ business applications.",
    category: "Business Intelligence",
    price: 29,
    currency: "$",
    tags: ["Process Automation", "Workflow Automation", "Business Integration", "Efficiency"],
    author: {
      name: "Zion Automation",
      id: "zion-automation",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-29T11:30:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 156,
  },
  {
    id: "ai-market-research",
    title: "AI Market Research",
    description: "Comprehensive market analysis and competitive intelligence powered by AI. Real-time monitoring, competitor analysis, and trend prediction.",
    category: "Business Intelligence",
    price: 199,
    currency: "$",
    tags: ["Market Research", "Competitive Intelligence", "Trend Analysis", "Real-time Monitoring"],
    author: {
      name: "Zion Market Intelligence",
      id: "zion-market-intelligence",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T09:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 98,
  },

  // Communication & Collaboration Services
  {
    id: "ai-meeting-assistant",
    title: "AI Meeting Assistant",
    description: "Intelligent meeting transcription, summarization, and action item tracking. Real-time transcription with smart summaries and automated follow-ups.",
    category: "Communication",
    price: 19,
    currency: "$",
    tags: ["Meeting Transcription", "AI Summarization", "Action Tracking", "Productivity"],
    author: {
      name: "Zion Communication",
      id: "zion-communication",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-27T13:45:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 234,
  },
  {
    id: "virtual-events",
    title: "Virtual Event Platform",
    description: "Host engaging virtual events, webinars, and conferences with AI-powered features. Interactive features, analytics, and engagement tools.",
    category: "Communication",
    price: 99,
    currency: "$",
    tags: ["Virtual Events", "Webinars", "AI Engagement", "Event Analytics"],
    author: {
      name: "Zion Events",
      id: "zion-events",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-31T10:00:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 112,
  },
  {
    id: "ai-translation",
    title: "AI Translation Service",
    description: "Real-time translation and localization for global communication and content. Support for 100+ languages with cultural adaptation.",
    category: "Communication",
    price: 29,
    currency: "$",
    tags: ["Translation", "Localization", "100+ Languages", "Cultural Adaptation"],
    author: {
      name: "Zion Global",
      id: "zion-global",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-23T15:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 178,
  },

  // Specialized Tools
  {
    id: "ai-legal-review",
    title: "AI Legal Document Review",
    description: "Automated legal document analysis, contract review, and compliance checking. Contract analysis, risk assessment, and compliance monitoring.",
    category: "Specialized Tools",
    price: 149,
    currency: "$",
    tags: ["Legal Review", "Contract Analysis", "Risk Assessment", "Compliance"],
    author: {
      name: "Zion Legal Tech",
      id: "zion-legal-tech",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-19T12:15:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 87,
  },
  {
    id: "ai-financial-advisor",
    title: "AI Financial Advisor",
    description: "Personalized financial planning and investment recommendations powered by AI. Portfolio optimization, risk assessment, and financial goal planning.",
    category: "Specialized Tools",
    price: 39,
    currency: "$",
    tags: ["Financial Planning", "Investment Advice", "Portfolio Optimization", "Risk Assessment"],
    author: {
      name: "Zion Financial",
      id: "zion-financial",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-21T16:00:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 143,
  },
  {
    id: "ai-healthcare",
    title: "AI Healthcare Assistant",
    description: "Intelligent health monitoring, symptom analysis, and wellness recommendations. Health tracking, symptom analysis, and wellness coaching. HIPAA compliant.",
    category: "Specialized Tools",
    price: 29,
    currency: "$",
    tags: ["Health Monitoring", "Symptom Analysis", "Wellness Coaching", "HIPAA Compliant"],
    author: {
      name: "Zion Health",
      id: "zion-health",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T14:45:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 267,
  },

  // Legacy services (keeping existing ones)
  {
    id: "service-1",
    title: "AI Development & Integration",
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",
    category: "Development",
    price: 5000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise"],
    author: {
      name: "TechSolutions Inc.",
      id: "tech-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-10T14:48:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 124,
  },
  {
    id: "service-2",
    title: "Cloud Infrastructure Management",
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",
    category: "Management",
    price: 3000,
    currency: "$",
    tags: ["Cloud", "DevOps", "Security"],
    author: {
      name: "CloudPro Experts",
      id: "cloud-pro",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-20T09:30:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 92,
  },
  {
    id: "service-3",
    title: "Big Data Analysis & Insights",
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",
    category: "Analytics",
    price: 4500,
    currency: "$",
    tags: ["Big Data", "Analytics", "Business Intelligence"],
    author: {
      name: "DataMind Solutions",
      id: "datamind",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T11:15:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 78,
  },
  {
    id: "service-4",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",
    category: "Security",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"],
    author: {
      name: "SecureNet Team",
      id: "secure-net",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-28T16:22:00.000Z",
    aiScore: 89,
    rating: 4.9,
    reviewCount: 103,
  },
  {
    id: "service-5",
    title: "IT Infrastructure Modernization",
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.",
    category: "Consulting",
    price: 8500,
    currency: "$",
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"],
    author: {
      name: "ModernizeIT Consulting",
      id: "modernize-it",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-10T08:45:00.000Z",
    aiScore: 86,
    rating: 4.6,
    reviewCount: 67,
  },
  {
    id: "service-6",
    title: "AI Strategy & Implementation",
    description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.",
    category: "Strategy",
    price: 7500,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"],
    author: {
      name: "AI Future Consulting",
      id: "ai-future",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 85,
  },
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomService(idNum: number): ProductListing {
  const templates = [
    {
      title: "AI Automation Consulting",
      category: "Consulting",
      min: 4000,
      max: 12000,
      tags: ["Automation", "AI Strategy", "Optimization"],
    },
    {
      title: "Cloud Migration & Support",
      category: "Management",
      min: 3000,
      max: 9000,
      tags: ["Cloud", "Migration", "DevOps"],
    },
    {
      title: "Advanced Cybersecurity Suite",
      category: "Security",
      min: 5000,
      max: 15000,
      tags: ["Cybersecurity", "PenTesting", "Compliance"],
    },
    {
      title: "Big Data Engineering",
      category: "Analytics",
      min: 3500,
      max: 11000,
      tags: ["Data Engineering", "Analytics", "ETL"],
    },
    {
      title: "AI Model Training Service",
      category: "Development",
      min: 4500,
      max: 13000,
      tags: ["Machine Learning", "Model Training", "AI"],
    },
    {
      title: "Digital Transformation Strategy",
      category: "Strategy",
      min: 6000,
      max: 14000,
      tags: ["Transformation", "Strategy", "Business"],
    },
  ];

  const authors = [
    "Global AI Experts",
    "InnovateTech",
    "SecureFuture",
    "CloudOps Partners",
    "DataVisor",
    "NexGen Solutions",
  ];

  const images = [
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500",
  ];

  const template = getRandomItem(templates);
  const author = getRandomItem(authors);
  const price = Math.round(
    Math.random() * (template.max - template.min) + template.min
  );

  return {
    id: `auto-service-${idNum}`,
    title: template.title,
    description: `Professional ${template.title.toLowerCase()} with industry-standard practices and tailored solutions for your business.`,
    category: template.category,
    price,
    currency: "$",
    tags: template.tags,
    author: { name: author, id: author.toLowerCase().replace(/\s+/g, "-") },
    images: [getRandomItem(images)],
    createdAt: new Date().toISOString(),
    aiScore: Math.floor(90 + Math.random() * 10),
    rating: parseFloat((4 + Math.random()).toFixed(1)),
    reviewCount: Math.floor(50 + Math.random() * 150),
  };
}

// Enhanced filter options for all service categories
const SERVICE_FILTERS = [
  { label: 'AI & ML', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & Infrastructure', value: 'cloud-infrastructure' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Communication', value: 'communication' },
  { label: 'Specialized Tools', value: 'specialized-tools' },
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
];

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings(prev => [...prev, generateRandomService(prev.length + 1)]);
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark py-8 px-4 md:px-8 mb-8 border-b border-zion-purple/30">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
              Zion Micro SAAS Services
            </h1>
            <p className="text-xl text-zion-cyan/80 max-w-4xl mx-auto">
              Discover our comprehensive suite of AI-powered micro SAAS solutions designed to transform your business operations. 
              From AI content generation to cybersecurity, we have the tools you need to succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="flex items-center gap-3">
                <Brain className="h-8 w-8 text-zion-cyan" />
                <div>
                  <h3 className="text-white font-semibold">AI & ML Services</h3>
                  <p className="text-zion-cyan/70 text-sm">Starting at $19/month</p>
                </div>
              </div>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-zion-cyan" />
                <div>
                  <h3 className="text-white font-semibold">Cybersecurity</h3>
                  <p className="text-zion-cyan/70 text-sm">Starting at $99/month</p>
                </div>
              </div>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="flex items-center gap-3">
                <Cloud className="h-8 w-8 text-zion-cyan" />
                <div>
                  <h3 className="text-white font-semibold">Cloud Solutions</h3>
                  <p className="text-zion-cyan/70 text-sm">Starting at $49/month</p>
                </div>
              </div>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-zion-cyan" />
                <div>
                  <h3 className="text-white font-semibold">Business Tools</h3>
                  <p className="text-zion-cyan/70 text-sm">Starting at $29/month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 backdrop-blur-sm">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white shadow-lg shadow-zion-purple/25">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 backdrop-blur-sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <DynamicListingPage 
        title="Comprehensive Micro SAAS Solutions"
        description="Find the perfect AI-powered tools and services to accelerate your business growth. All services include free trials and expert support."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 19, max: 5000 }}
      />
      
      <TrustedBySection />
    </>
  );
}
