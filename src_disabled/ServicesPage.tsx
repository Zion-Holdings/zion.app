
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
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 85,
  },
  // New Specialized IT Services
  {
    id: "service-7",
    title: "Blockchain Development & Smart Contracts",
    description: "Custom blockchain solutions, smart contract development, and DeFi application creation for modern businesses.",
    category: "Development",
    price: 12000,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Web3"],
    author: {
      name: "Blockchain Innovations",
      id: "blockchain-innovations",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T12:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 45,
  },
  {
    id: "service-8",
    title: "IoT Solutions & Smart City Integration",
    description: "End-to-end IoT development including sensor networks, data collection, and smart city infrastructure integration.",
    category: "IoT",
    price: 18000,
    currency: "$",
    tags: ["IoT", "Smart Cities", "Sensor Networks", "Data Collection"],
    author: {
      name: "SmartCity Tech",
      id: "smartcity-tech",
      avatarUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-14T14:30:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 32,
  },
  {
    id: "service-9",
    title: "Quantum Computing Consulting",
    description: "Expert guidance on quantum computing applications, algorithm development, and quantum-ready infrastructure planning.",
    category: "Consulting",
    price: 25000,
    currency: "$",
    tags: ["Quantum Computing", "Algorithm Development", "Future Tech"],
    author: {
      name: "Quantum Solutions",
      id: "quantum-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-13T16:45:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 18,
  },
  {
    id: "service-10",
    title: "Edge Computing & 5G Optimization",
    description: "Edge computing infrastructure design and 5G network optimization for ultra-low latency applications and IoT deployments.",
    category: "Infrastructure",
    price: 15000,
    currency: "$",
    tags: ["Edge Computing", "5G", "Low Latency", "IoT"],
    author: {
      name: "EdgeTech Solutions",
      id: "edgetech-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-12T11:15:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 28,
  },
  {
    id: "service-11",
    title: "Robotic Process Automation (RPA)",
    description: "Automate repetitive business processes with intelligent bots that can handle complex workflows and decision-making tasks.",
    category: "Automation",
    price: 8000,
    currency: "$",
    tags: ["RPA", "Process Automation", "Intelligent Bots", "Workflow"],
    author: {
      name: "Automation Experts",
      id: "automation-experts",
      avatarUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-11T09:20:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 67,
  },
  {
    id: "service-12",
    title: "Augmented Reality (AR) & Virtual Reality (VR)",
    description: "Immersive technology solutions for training, marketing, product visualization, and interactive customer experiences.",
    category: "Immersive Tech",
    price: 22000,
    currency: "$",
    tags: ["AR/VR", "Immersive Technology", "Training", "Marketing"],
    author: {
      name: "Immersive Tech Lab",
      id: "immersive-tech-lab",
      avatarUrl: "https://images.unsplash.com/photo-1593508512255-aaab0b0f9c81?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593508512255-aaab0b0f9c81?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T13:40:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 41,
  },
  {
    id: "service-13",
    title: "Natural Language Processing (NLP) Solutions",
    description: "Advanced NLP services including chatbots, sentiment analysis, document processing, and multilingual support systems.",
    category: "AI/ML",
    price: 9500,
    currency: "$",
    tags: ["NLP", "Chatbots", "Sentiment Analysis", "Document Processing"],
    author: {
      name: "NLP Specialists",
      id: "nlp-specialists",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-09T15:55:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 53,
  },
  {
    id: "service-14",
    title: "DevOps & CI/CD Pipeline Optimization",
    description: "Streamline your development workflow with automated testing, deployment, and monitoring solutions for faster time-to-market.",
    category: "DevOps",
    price: 7000,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Deployment"],
    author: {
      name: "DevOps Masters",
      id: "devops-masters",
      avatarUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-08T10:25:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "service-15",
    title: "Data Privacy & GDPR Compliance",
    description: "Comprehensive data privacy solutions including GDPR compliance, data governance, and privacy-by-design implementation.",
    category: "Compliance",
    price: 6500,
    currency: "$",
    tags: ["Data Privacy", "GDPR", "Compliance", "Data Governance"],
    author: {
      name: "Privacy First Solutions",
      id: "privacy-first",
      avatarUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-07T12:10:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 76,
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
  { label: 'IoT', value: 'iot' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Automation', value: 'automation' },
  { label: 'Immersive Tech', value: 'immersive tech' },
  { label: 'AI/ML', value: 'ai/ml' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Compliance', value: 'compliance' },
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
<<<<<<< HEAD:src/pages/ServicesPage.tsx
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/services-showcase">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Services Showcase
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                View Pricing
              </Button>
            </Link>
            <Link to="/services-comparison">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Compare Services
              </Button>
            </Link>
=======
      {/* Hero Section */}
      <div className="bg-zion-blue-dark py-16 px-4 md:px-8 border-b border-zion-blue-light">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Technology Services</span>
          </h1>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. 
            Expert solutions tailored to drive innovation and growth.
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/10 rounded-lg p-6 max-w-4xl mx-auto border border-zion-blue-light/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <Phone className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-white font-semibold">Call Us</div>
                  <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <Mail className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-white font-semibold">Email Us</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <MapPin className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-white font-semibold">Visit Us</div>
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-zion-slate-light text-sm">
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
>>>>>>> 6de525ab7fd2268019c6a3413cbe79321aeb887d:src_disabled/ServicesPage.tsx
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/comprehensive-services">
              <Button variant="outline" className="border-zion-cyan text-zion-purple hover:bg-zion-cyan/10">
                <Globe className="h-4 w-4 mr-2" />
                All Services
              </Button>
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

      {/* Comprehensive Services Showcase */}
      <ComprehensiveServicesShowcase />

      {/* Marketplace Services */}
      <div className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Marketplace <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Services</span>
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover additional services from our verified partners and technology experts in the marketplace
            </p>
          </div>
          
          <DynamicListingPage 
            title="Marketplace Services"
            description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
            categorySlug="services"
            listings={listings}
            categoryFilters={SERVICE_FILTERS}
            initialPrice={{ min: 3000, max: 10000 }}
          />
        </div>
      </div>

      <TrustedBySection />
    </>
  );
}
