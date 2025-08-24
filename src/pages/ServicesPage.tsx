
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Zap, Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { MICRO_SAAS_SERVICES } from "@/data/microSaasServices";

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
  // New innovative micro SAAS services
  {
    id: "service-7",
    title: "AI-Powered Content Generation",
    description: "Automated content creation for blogs, social media, and marketing materials using advanced language models.",
    category: "AI Services",
    price: 299,
    currency: "$",
    tags: ["Content Creation", "AI Writing", "Marketing Automation"],
    author: {
      name: "ContentAI Pro",
      id: "content-ai-pro",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T12:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "service-8",
    title: "Smart Contract Development",
    description: "Blockchain smart contract development and auditing for DeFi, NFTs, and enterprise blockchain solutions.",
    category: "Blockchain",
    price: 3500,
    currency: "$",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "NFTs"],
    author: {
      name: "BlockChain Solutions",
      id: "blockchain-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T14:30:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "service-9",
    title: "IoT Device Management Platform",
    description: "Complete IoT solution including device provisioning, monitoring, data collection, and analytics dashboard.",
    category: "IoT",
    price: 1200,
    currency: "$",
    tags: ["IoT", "Device Management", "Data Analytics", "Monitoring"],
    author: {
      name: "IoT Masters",
      id: "iot-masters",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-08T09:15:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 67,
  },
  {
    id: "service-10",
    title: "AI-Powered Customer Support Bot",
    description: "Intelligent chatbot with natural language processing for 24/7 customer support and lead generation.",
    category: "AI Services",
    price: 450,
    currency: "$",
    tags: ["Chatbot", "Customer Support", "NLP", "Lead Generation"],
    author: {
      name: "BotGenius",
      id: "bot-genius",
      avatarUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a5ab?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-12T11:45:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 123,
  },
  {
    id: "service-11",
    title: "Predictive Analytics Dashboard",
    description: "Real-time business intelligence platform with predictive modeling for sales forecasting and trend analysis.",
    category: "Analytics",
    price: 800,
    currency: "$",
    tags: ["Predictive Analytics", "Business Intelligence", "Forecasting", "Real-time"],
    author: {
      name: "Predictive Insights",
      id: "predictive-insights",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c072?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-14T16:20:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 78,
  },
  {
    id: "service-12",
    title: "API Gateway & Management",
    description: "Enterprise-grade API management platform with rate limiting, authentication, monitoring, and developer portal.",
    category: "Development",
    price: 650,
    currency: "$",
    tags: ["API Management", "Gateway", "Rate Limiting", "Developer Portal"],
    author: {
      name: "API Hub",
      id: "api-hub",
      avatarUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-11T13:10:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 92,
  },
  {
    id: "service-13",
    title: "Zero-Trust Security Framework",
    description: "Implementation of zero-trust security architecture with identity verification, micro-segmentation, and continuous monitoring.",
    category: "Security",
    price: 4200,
    currency: "$",
    tags: ["Zero-Trust", "Identity Verification", "Micro-segmentation", "Security"],
    author: {
      name: "SecureZero",
      id: "secure-zero",
      avatarUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-13T10:30:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: "service-14",
    title: "Multi-Cloud Cost Optimization",
    description: "Automated cost optimization across AWS, Azure, and Google Cloud with intelligent resource scaling and cost allocation.",
    category: "Management",
    price: 550,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Resource Scaling", "Automation"],
    author: {
      name: "CloudCost Pro",
      id: "cloudcost-pro",
      avatarUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-09T15:45:00.000Z",
    aiScore: 88,
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: "service-15",
    title: "AI-Powered Video Analytics",
    description: "Computer vision platform for video surveillance, object detection, facial recognition, and behavioral analysis.",
    category: "AI Services",
    price: 1800,
    currency: "$",
    tags: ["Computer Vision", "Video Analytics", "Object Detection", "Facial Recognition"],
    author: {
      name: "VisionAI",
      id: "vision-ai",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-16T08:15:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: "service-16",
    title: "Edge Computing Platform",
    description: "Distributed edge computing solution for real-time data processing, IoT applications, and low-latency services.",
    category: "Infrastructure",
    price: 2200,
    currency: "$",
    tags: ["Edge Computing", "Real-time Processing", "IoT", "Low Latency"],
    author: {
      name: "EdgeTech Solutions",
      id: "edgetech-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-17T12:00:00.000Z",
    aiScore: 90,
    rating: 4.6,
    reviewCount: 73,
  },
  {
    id: "service-17",
    title: "Quantum Computing Consulting",
    description: "Expert guidance on quantum computing applications, algorithm development, and quantum-safe cryptography.",
    category: "Consulting",
    price: 15000,
    currency: "$",
    tags: ["Quantum Computing", "Algorithm Development", "Cryptography", "Future Tech"],
    author: {
      name: "Quantum Insights",
      id: "quantum-insights",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-18T14:30:00.000Z",
    aiScore: 98,
    rating: 5.0,
    reviewCount: 45,
  },
  {
    id: "service-18",
    title: "Green IT Sustainability Platform",
    description: "Comprehensive platform for measuring, monitoring, and reducing IT carbon footprint with sustainability reporting.",
    category: "Sustainability",
    price: 750,
    currency: "$",
    tags: ["Green IT", "Sustainability", "Carbon Footprint", "Reporting"],
    author: {
      name: "GreenTech Solutions",
      id: "greentech-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-19T09:45:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 56,
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
  { label: 'AI Services', value: 'ai-services' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'IoT', value: 'iot' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Sustainability', value: 'sustainability' },
];

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>([...SERVICE_LISTINGS, ...MICRO_SAAS_SERVICES]);

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
            <Link to="/services-overview">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Globe className="h-4 w-4 mr-2" />
                View All Services
              </Button>
            </Link>
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/micro-saas-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Brain className="h-4 w-4 mr-2" />
                Micro SAAS Solutions
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
