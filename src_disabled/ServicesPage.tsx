
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, ArrowRight, Star, Zap, Shield, Brain, Database, HardDrive, CheckCircle, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { EXPANDED_SERVICES } from "@/data/expandedServices";
import { Badge } from "@/components/ui/badge";

// Sample service listings
const SERVICE_LISTINGS: ProductListing[] = [
  {
    id: "service-1",
    title: "AI Development & Integration",
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems. Custom AI solutions, model training, and seamless integration with your current infrastructure.",
    category: "Development",
    price: 5000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
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
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency. Multi-cloud strategy, cost optimization, and automated scaling solutions.",
    category: "Management",
    price: 3000,
    currency: "$",
    tags: ["Cloud", "DevOps", "Security"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
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
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services. Real-time dashboards, predictive analytics, and data-driven decision making.",
    category: "Analytics",
    price: 4500,
    currency: "$",
    tags: ["Big Data", "Analytics", "Business Intelligence"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
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
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats. Penetration testing, compliance audits, and 24/7 threat monitoring.",
    category: "Security",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
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
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth. Digital transformation consulting and implementation.",
    category: "Consulting",
    price: 8500,
    currency: "$",
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
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
    description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage. AI roadmap development and ROI optimization.",
    category: "Strategy",
    price: 7500,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 85,
  },
  {
    id: "service-7",
    title: "Blockchain Development & Smart Contracts",
    description: "Custom blockchain solutions, smart contract development, and DeFi applications. Enterprise blockchain integration and cryptocurrency payment systems.",
    category: "Development",
    price: 12000,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Cryptocurrency"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T14:20:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "service-8",
    title: "IoT Solutions & Edge Computing",
    description: "Internet of Things infrastructure, sensor networks, and edge computing solutions. Real-time data processing and industrial IoT applications.",
    category: "Development",
    price: 8000,
    currency: "$",
    tags: ["IoT", "Edge Computing", "Sensor Networks", "Industrial"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T09:15:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "service-9",
    title: "Quantum Computing Consulting",
    description: "Quantum computing strategy and implementation consulting. Quantum algorithm development and quantum-safe cryptography solutions.",
    category: "Consulting",
    price: 25000,
    currency: "$",
    tags: ["Quantum Computing", "Quantum Algorithms", "Cryptography"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:30:00.000Z",
    aiScore: 98,
    rating: 5.0,
    reviewCount: 45,
  },
  {
    id: "service-10",
    title: "AR/VR Development & Metaverse Solutions",
    description: "Augmented and virtual reality applications, metaverse platform development, and immersive technology solutions for business and entertainment.",
    category: "Development",
    price: 15000,
    currency: "$",
    tags: ["AR/VR", "Metaverse", "Immersive Technology", "3D Development"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1622973536968-3ead9b780c7f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T16:45:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 112,
  },
  {
    id: "service-11",
    title: "Green IT & Sustainable Technology",
    description: "Energy-efficient IT solutions, carbon footprint reduction, and sustainable technology consulting. Green data center optimization and renewable energy integration.",
    category: "Consulting",
    price: 7000,
    currency: "$",
    tags: ["Green IT", "Sustainability", "Energy Efficiency", "Carbon Reduction"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T13:20:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 73,
  },
  {
    id: "service-12",
    title: "FinTech Solutions & Digital Banking",
    description: "Digital banking platforms, payment processing systems, and financial technology solutions. Regulatory compliance and security-focused fintech development.",
    category: "Development",
    price: 18000,
    currency: "$",
    tags: ["FinTech", "Digital Banking", "Payment Systems", "Regulatory Compliance"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:10:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: "service-13",
    title: "Healthcare Technology & Telemedicine",
    description: "Healthcare IT solutions, telemedicine platforms, and medical device integration. HIPAA compliance and patient data security solutions.",
    category: "Development",
    price: 22000,
    currency: "$",
    tags: ["Healthcare IT", "Telemedicine", "HIPAA Compliance", "Medical Devices"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1576091160399-112c8b0a0f10?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T15:30:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 167,
  },
  {
    id: "service-14",
    title: "Supply Chain & Logistics Technology",
    description: "Supply chain optimization, logistics management systems, and inventory tracking solutions. Real-time visibility and predictive analytics for supply chains.",
    category: "Analytics",
    price: 9500,
    currency: "$",
    tags: ["Supply Chain", "Logistics", "Inventory Management", "Predictive Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T12:15:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 95,
  },
  {
    id: "service-15",
    title: "E-commerce & Digital Marketplace Solutions",
    description: "Custom e-commerce platforms, digital marketplace development, and online retail solutions. Multi-vendor systems and payment gateway integration.",
    category: "Development",
    price: 16000,
    currency: "$",
    tags: ["E-commerce", "Digital Marketplace", "Multi-vendor", "Payment Integration"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T14:45:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 128,
  },
];

// Featured expanded services for preview
const FEATURED_EXPANDED_SERVICES = [
  {
    id: "ai-automation-workflow",
    title: "AI-Powered Business Process Automation",
    description: "Transform manual workflows into intelligent, automated processes using cutting-edge AI and machine learning.",
    category: "AI & Machine Learning",
    price: 8500,
    icon: <Brain className="w-8 h-8 text-zion-purple" />,
    benefits: ["60% reduction in processing time", "99.9% accuracy", "24/7 automated operations"],
    link: "/expanded-services"
  },
  {
    id: "zero-trust-security-framework",
    title: "Zero-Trust Security Architecture",
    description: "Implement enterprise-grade zero-trust security framework that continuously verifies every connection.",
    category: "Cybersecurity",
    price: 12000,
    icon: <Shield className="w-8 h-8 text-zion-blue" />,
    benefits: ["Eliminate trust-based vulnerabilities", "Real-time threat detection", "Compliance standards"],
    link: "/expanded-services"
  },
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Infrastructure Orchestration",
    description: "Seamlessly manage workloads across multiple cloud providers with intelligent automation and cost optimization.",
    category: "Cloud & DevOps",
    price: 9500,
    icon: <Globe className="w-8 h-8 text-zion-cyan" />,
    benefits: ["40% cost reduction", "Eliminate vendor lock-in", "Centralized management"],
    link: "/expanded-services"
  },
  {
    id: "real-time-data-pipeline",
    title: "Real-Time Data Pipeline & Analytics",
    description: "Build scalable real-time data processing pipelines with sub-second latency for instant insights.",
    category: "Data & Analytics",
    price: 11000,
    icon: <Database className="w-8 h-8 text-zion-green" />,
    benefits: ["Sub-second latency", "Millions of events/second", "Instant decision-making"],
    link: "/expanded-services"
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
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'IoT', value: 'iot' },
  { label: 'Quantum', value: 'quantum' },
  { label: 'AR/VR', value: 'ar-vr' },
  { label: 'Green IT', value: 'green-it' },
  { label: 'FinTech', value: 'fintech' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Supply Chain', value: 'supply-chain' },
  { label: 'E-commerce', value: 'ecommerce' },
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
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/expanded-services">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                <Zap className="h-4 w-4 mr-2" />
                View All Advanced Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Expanded Services Section */}
      <div className="bg-gradient-to-r from-zion-slate-light to-zion-blue-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Advanced Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of cutting-edge micro SAAS solutions and professional IT services designed to transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {FEATURED_EXPANDED_SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <Badge variant="secondary" className="bg-zion-purple/10 text-zion-purple">
                    {service.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-blue">
                    ${service.price.toLocaleString()}
                  </div>
                  <Link to={service.link}>
                    <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/expanded-services">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple-dark hover:to-zion-blue-dark text-white">
                Explore All {EXPANDED_SERVICES.length} Advanced Services
                <ArrowRight className="w-5 h-5 ml-2" />
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

      {/* Contact Information Section */}
      <div className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement cutting-edge technology solutions. 
            Get in touch today for a personalized consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="text-zion-slate-light">
            <p className="text-lg">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="text-lg">Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>

      <TrustedBySection />
    </>
  );
}
