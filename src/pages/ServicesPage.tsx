
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

// Sample service listings
const SERVICE_LISTINGS: ProductListing[] = [
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
  // New Innovative AI & IT Services
  {
    id: "service-7",
    title: "AI-Powered Business Process Automation",
    description: "Intelligent automation of complex business processes using AI, machine learning, and robotic process automation (RPA). Reduce manual work by 70% and improve accuracy.",
    category: "Automation",
    price: 6500,
    currency: "$",
    tags: ["AI Automation", "RPA", "Process Optimization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T09:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "service-8",
    title: "Edge AI & IoT Solutions",
    description: "Deploy AI models on edge devices and IoT sensors for real-time processing. Enable intelligent decision-making at the network edge with minimal latency.",
    category: "Edge Computing",
    price: 8500,
    currency: "$",
    tags: ["Edge AI", "IoT", "Real-time Processing"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-14T14:30:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "service-9",
    title: "AI-Powered Cybersecurity Defense",
    description: "Advanced threat detection and response using AI and machine learning. Real-time monitoring, behavioral analysis, and automated incident response.",
    category: "Security",
    price: 7200,
    currency: "$",
    tags: ["AI Security", "Threat Detection", "Incident Response"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-13T11:15:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: "service-10",
    title: "Natural Language Processing Solutions",
    description: "Custom NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI. Process and understand human language at scale.",
    category: "NLP",
    price: 5800,
    currency: "$",
    tags: ["NLP", "Text Analysis", "Language Processing"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-12T09:45:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 178,
  },
  {
    id: "service-11",
    title: "Computer Vision & Image Recognition",
    description: "Advanced computer vision solutions for object detection, facial recognition, quality control, and visual analytics. Transform visual data into actionable insights.",
    category: "Computer Vision",
    price: 6800,
    currency: "$",
    tags: ["Computer Vision", "Image Recognition", "Visual Analytics"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-11T16:20:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 145,
  },
  {
    id: "service-12",
    title: "Predictive Analytics & Forecasting",
    description: "AI-powered predictive models for sales forecasting, demand planning, risk assessment, and trend analysis. Make data-driven decisions with confidence.",
    category: "Analytics",
    price: 5200,
    currency: "$",
    tags: ["Predictive Analytics", "Forecasting", "Risk Assessment"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T13:10:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: "service-13",
    title: "AI-Powered Customer Experience",
    description: "Personalized customer experiences using AI chatbots, recommendation engines, and sentiment analysis. Increase customer satisfaction and loyalty.",
    category: "Customer Experience",
    price: 4800,
    currency: "$",
    tags: ["Customer Experience", "AI Chatbots", "Personalization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-09T10:30:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 67,
  },
  {
    id: "service-14",
    title: "Quantum Computing Consulting",
    description: "Expert guidance on quantum computing applications, algorithm development, and quantum-ready infrastructure. Prepare for the quantum future.",
    category: "Quantum Computing",
    price: 12000,
    currency: "$",
    tags: ["Quantum Computing", "Algorithm Development", "Future Tech"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-08T15:45:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 23,
  },
  {
    id: "service-15",
    title: "Blockchain & AI Integration",
    description: "Combine blockchain technology with AI for secure, transparent, and intelligent decentralized applications. Build trust and automation in your business processes.",
    category: "Blockchain",
    price: 9500,
    currency: "$",
    tags: ["Blockchain", "AI Integration", "Decentralized Apps"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-07T12:00:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 45,
  },
  {
    id: "service-16",
    title: "AI-Powered Supply Chain Optimization",
    description: "Intelligent supply chain management using AI for demand forecasting, inventory optimization, route planning, and supplier management. Reduce costs and improve efficiency.",
    category: "Supply Chain",
    price: 7800,
    currency: "$",
    tags: ["Supply Chain", "Demand Forecasting", "Inventory Optimization"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-06T08:15:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 78,
  },
  {
    id: "service-17",
    title: "AI Ethics & Governance Framework",
    description: "Comprehensive framework for responsible AI development, including bias detection, fairness testing, transparency, and compliance with AI regulations.",
    category: "AI Ethics",
    price: 6500,
    currency: "$",
    tags: ["AI Ethics", "Bias Detection", "Governance"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:20:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 56,
  },
  {
    id: "service-18",
    title: "AI-Powered Financial Services",
    description: "Intelligent financial solutions including fraud detection, credit scoring, investment analysis, and automated trading systems. Enhance financial decision-making with AI.",
    category: "Financial Services",
    price: 8900,
    currency: "$",
    tags: ["Financial AI", "Fraud Detection", "Investment Analysis"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-04T11:30:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "service-19",
    title: "AI-Powered Healthcare Solutions",
    description: "Healthcare AI solutions for medical imaging analysis, drug discovery, patient monitoring, and predictive diagnostics. Improve healthcare outcomes with intelligent technology.",
    category: "Healthcare",
    price: 11000,
    currency: "$",
    tags: ["Healthcare AI", "Medical Imaging", "Drug Discovery"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-03T16:45:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 67,
  },
  {
    id: "service-20",
    title: "AI-Powered Manufacturing & Industry 4.0",
    description: "Smart manufacturing solutions using AI for predictive maintenance, quality control, production optimization, and autonomous systems. Transform your manufacturing operations.",
    category: "Manufacturing",
    price: 12500,
    currency: "$",
    tags: ["Industry 4.0", "Predictive Maintenance", "Smart Manufacturing"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-02T09:15:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 45,
  }
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

// Filter options specific to services
const SERVICE_FILTERS = [
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
  { label: 'Automation', value: 'automation' },
  { label: 'Edge Computing', value: 'edge computing' },
  { label: 'NLP', value: 'nlp' },
  { label: 'Computer Vision', value: 'computer vision' },
  { label: 'Customer Experience', value: 'customer experience' },
  { label: 'Quantum Computing', value: 'quantum computing' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'Supply Chain', value: 'supply chain' },
  { label: 'AI Ethics', value: 'ai ethics' },
  { label: 'Financial Services', value: 'financial services' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Manufacturing', value: 'manufacturing' }
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
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/expanded-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                View All Services
              </Button>
            </Link>
            <Link to="/pricing-guide">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Pricing Guide
              </Button>
            </Link>
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* New Comprehensive Services Showcase */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zion-blue-dark mb-4">
            ZionTech Group Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT, AI, and Digital Transformation Solutions for Modern Businesses
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">Cutting-edge AI solutions to transform your business</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Custom AI Development</span>
                <span className="text-sm font-semibold text-zion-purple">$5,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Strategy Consulting</span>
                <span className="text-sm font-semibold text-zion-purple">$7,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Machine Learning Models</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-dark hover:to-zion-cyan-dark">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Business Automation */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Business Automation</h3>
              <p className="text-gray-600 mb-4">Streamline operations with intelligent automation</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Workflow Automation</span>
                <span className="text-sm font-semibold text-zion-purple">$299/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Process Optimization</span>
                <span className="text-sm font-semibold text-zion-purple">$6,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">RPA Implementation</span>
                <span className="text-sm font-semibold text-zion-purple">$8,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Protect your business with advanced security</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Security Assessment</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">24/7 Monitoring</span>
                <span className="text-sm font-semibold text-zion-purple">$399/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Incident Response</span>
                <span className="text-sm font-semibold text-zion-purple">$7,200+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600">
                  Secure Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Cloud & Infrastructure</h3>
              <p className="text-gray-600 mb-4">Scalable cloud solutions for growth</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cloud Migration</span>
                <span className="text-sm font-semibold text-zion-purple">$3,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Infrastructure Setup</span>
                <span className="text-sm font-semibold text-zion-purple">$8,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">24/7 Management</span>
                <span className="text-sm font-semibold text-zion-purple">$3,000/month</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600">
                  Scale Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Data Analytics</h3>
              <p className="text-gray-600 mb-4">Transform data into actionable insights</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">BI Dashboard</span>
                <span className="text-sm font-semibold text-zion-purple">$199/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Predictive Analytics</span>
                <span className="text-sm font-semibold text-zion-purple">$5,200+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Big Data Processing</span>
                <span className="text-sm font-semibold text-zion-purple">$4,500+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                  Analyze Data
                </Button>
              </Link>
            </div>
          </div>

          {/* Digital Transformation */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">Modernize your business for the future</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Strategy Development</span>
                <span className="text-sm font-semibold text-zion-purple">$7,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Legacy Modernization</span>
                <span className="text-sm font-semibold text-zion-purple">$8,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Change Management</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600">
                  Transform Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Micro SAAS Services Showcase */}
        <div className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable, scalable software solutions designed for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workflow Automation */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Workflow Automation</h3>
                <p className="text-gray-600 mb-4">Connect 500+ apps and automate business processes</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$299<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">No-code drag & drop interface</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">500+ app integrations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Real-time monitoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Advanced analytics</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 py-3">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Business Intelligence</h3>
                <p className="text-gray-600 mb-4">Real-time analytics and predictive insights</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$199<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Real-time data visualization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Predictive analytics</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Custom dashboards</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated reporting</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 py-3">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* AI-Powered CRM */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">AI-Powered CRM</h3>
                <p className="text-gray-600 mb-4">Intelligent customer relationship management</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$149<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">AI-driven lead scoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated follow-ups</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Predictive analytics</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Sales automation</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 py-3">
                    Boost Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Project Management</h3>
                <p className="text-gray-600 mb-4">Complete project management suite</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$99<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Task tracking & management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Team collaboration tools</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Resource allocation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Progress monitoring</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 py-3">
                    Manage Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Marketing Automation */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Marketing Automation</h3>
                <p className="text-gray-600 mb-4">All-in-one marketing automation platform</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$179<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Email campaign management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Social media automation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Lead nurturing</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">ROI tracking</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 py-3">
                    Automate Marketing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Cybersecurity Monitoring */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Cybersecurity Monitoring</h3>
                <p className="text-gray-600 mb-4">24/7 threat detection and response</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$399<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">24/7 threat monitoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated incident response</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Vulnerability assessment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Compliance reporting</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 py-3">
                    Secure Business
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-8">Pricing Comparison</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Starter</h4>
                  <div className="text-2xl font-bold text-zion-purple">$99</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">Perfect for small businesses</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Professional</h4>
                  <div className="text-2xl font-bold text-zion-purple">$299</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">Ideal for growing companies</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Enterprise</h4>
                  <div className="text-2xl font-bold text-zion-purple">$599</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">For large organizations</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Custom</h4>
                  <div className="text-2xl font-bold text-zion-purple">Contact</div>
                  <div className="text-sm text-gray-500">us</div>
                  <p className="text-sm text-gray-600 mt-2">Tailored solutions</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/request-quote">
                  <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-dark hover:to-zion-cyan-dark px-8 py-3">
                    Get Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Contact our experts to discuss your project requirements</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-zion-cyan">+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-zion-cyan">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button className="bg-white text-zion-blue-dark hover:bg-gray-100 px-8 py-3">
                Request Free Quote
              </Button>
            </Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3">
                Visit Website
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Comprehensive Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
            Complete Service Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From AI development to digital transformation, we provide end-to-end solutions that drive business growth and innovation
          </p>
        </div>

        {/* AI & Machine Learning Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zion-blue-dark mb-4">AI & Machine Learning Services</h3>
            <p className="text-lg text-gray-600">Transform your business with cutting-edge artificial intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Custom AI Development</h4>
                  <p className="text-sm text-gray-600">Tailored AI solutions</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Develop custom AI applications tailored to your specific business needs and industry requirements.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $5,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">AI Strategy Consulting</h4>
                  <p className="text-sm text-gray-600">Strategic AI planning</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Develop a comprehensive AI strategy that aligns with your business goals and competitive landscape.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $7,500</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Machine Learning Models</h4>
                  <p className="text-sm text-gray-600">Custom ML solutions</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Build and deploy custom machine learning models for prediction, classification, and pattern recognition.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $6,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Transformation Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zion-blue-dark mb-4">Digital Transformation Services</h3>
            <p className="text-lg text-gray-600">Modernize your business for the digital age</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Legacy System Modernization</h4>
                  <p className="text-sm text-gray-600">Update old systems</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Transform outdated systems into modern, scalable solutions that support business growth and innovation.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $8,500</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Cloud Migration</h4>
                  <p className="text-sm text-gray-600">Move to the cloud</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Seamlessly migrate your infrastructure to the cloud for improved scalability, security, and cost efficiency.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $3,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Change Management</h4>
                  <p className="text-sm text-gray-600">Guide your team</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Support your team through digital transformation with comprehensive change management and training programs.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $6,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cybersecurity Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zion-blue-dark mb-4">Cybersecurity Services</h3>
            <p className="text-lg text-gray-600">Protect your business from evolving cyber threats</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Security Assessment</h4>
                  <p className="text-sm text-gray-600">Comprehensive audit</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Identify vulnerabilities and security gaps with thorough penetration testing and security assessments.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $6,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">24/7 Monitoring</h4>
                  <p className="text-sm text-gray-600">Always protected</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Continuous monitoring and threat detection with automated incident response and real-time alerts.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">$399/month</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Incident Response</h4>
                  <p className="text-sm text-gray-600">Quick recovery</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Rapid response and recovery from security incidents with expert incident handling and forensics.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $7,200</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Data Analytics Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zion-blue-dark mb-4">Data Analytics Services</h3>
            <p className="text-lg text-gray-600">Transform data into actionable business insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Business Intelligence</h4>
                  <p className="text-sm text-gray-600">Real-time insights</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Interactive dashboards and reports that provide real-time insights into your business performance.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">$199/month</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Predictive Analytics</h4>
                  <p className="text-sm text-gray-600">Future insights</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Forecast trends and make data-driven decisions with advanced predictive modeling and analytics.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $5,200</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Big Data Processing</h4>
                  <p className="text-sm text-gray-600">Handle large datasets</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Process and analyze large volumes of data to uncover hidden patterns and business opportunities.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $4,500</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose ZionTech Group */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ZionTech Group?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Proven Expertise</h4>
              <p className="text-zion-cyan">15+ years of experience in AI, IT, and digital transformation</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Innovation First</h4>
              <p className="text-zion-cyan">Cutting-edge solutions using the latest technologies</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Client Success</h4>
              <p className="text-zion-cyan">95% client satisfaction rate with measurable results</p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/request-quote">
              <Button className="bg-white text-zion-blue-dark hover:bg-gray-100 px-8 py-3 text-lg">
                Start Your Digital Transformation Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <DynamicListingPage 
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
      />
      <TrustedBySection />
    </>
  );
}
