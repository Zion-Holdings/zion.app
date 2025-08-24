
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Code, 
  Users, 
  HardDrive,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from "lucide-react";
import Link2 from "lucide-react/dist/esm/icons/link-2";
import Wifi from "lucide-react/dist/esm/icons/wifi";
import { useEffect, useState } from "react";

// Enhanced service listings with real pricing and descriptions
const SERVICE_LISTINGS: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-development",
    title: "AI Development & Integration",
    description: "Full-stack AI development services including custom model development, API integration, and deployment. We specialize in machine learning, natural language processing, and computer vision solutions.",
    category: "AI Services",
    price: 15000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise", "Custom Models"],
    author: {
      name: "AI Solutions Pro",
      id: "ai-solutions-pro",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:30:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "ai-strategy-consulting",
    title: "AI Strategy Consulting",
    description: "Strategic AI implementation planning and business transformation consulting. We help organizations identify AI opportunities, develop roadmaps, and implement AI solutions for competitive advantage.",
    category: "AI Services",
    price: 8000,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Consulting", "ROI Analysis"],
    author: {
      name: "AI Future Consulting",
      id: "ai-future-consulting",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:15:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "ml-model-training",
    title: "Machine Learning Model Training",
    description: "Custom ML model training and optimization services. We handle data preprocessing, model selection, training, validation, and deployment for various use cases including classification, regression, and clustering.",
    category: "AI Services",
    price: 12000,
    currency: "$",
    tags: ["Machine Learning", "Model Training", "Data Science", "Optimization"],
    author: {
      name: "ML Masters",
      id: "ml-masters",
      avatarUrl: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:45:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 134,
  },

  // Cloud & Infrastructure Services
  {
    id: "cloud-migration",
    title: "Cloud Migration & Support",
    description: "End-to-end cloud migration services including assessment, planning, execution, and ongoing support. We specialize in AWS, Azure, and Google Cloud migrations with minimal downtime.",
    category: "Cloud Services",
    price: 25000,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "24/7 Support"],
    author: {
      name: "CloudPro Experts",
      id: "cloud-pro-experts",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:20:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 203,
  },
  {
    id: "devops-automation",
    title: "DevOps Automation",
    description: "Complete DevOps automation including CI/CD pipeline setup, infrastructure as code, monitoring, and automation. We implement best practices for faster deployments and improved reliability.",
    category: "Cloud Services",
    price: 18000,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code", "Monitoring"],
    author: {
      name: "DevOps Dynamics",
      id: "devops-dynamics",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 167,
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-assessment",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive security audits, penetration testing, and protection system implementation. We help organizations identify vulnerabilities and implement robust security measures.",
    category: "Security Services",
    price: 20000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Security Audits", "Compliance", "Threat Protection"],
    author: {
      name: "SecureNet Team",
      id: "secure-net-team",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T13:45:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: "compliance-framework",
    title: "Compliance Framework Setup",
    description: "SOC 2, ISO 27001, GDPR, and other compliance framework implementation. We help organizations meet regulatory requirements and build trust with customers and partners.",
    category: "Security Services",
    price: 35000,
    currency: "$",
    tags: ["Compliance", "SOC 2", "ISO 27001", "GDPR", "Regulatory"],
    author: {
      name: "Compliance Experts",
      id: "compliance-experts",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T10:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 145,
  },

  // Data & Analytics Services
  {
    id: "big-data-engineering",
    title: "Big Data Engineering",
    description: "End-to-end big data solutions including data pipeline development, ETL processes, data warehousing, and real-time analytics. We handle petabytes of data with optimal performance.",
    category: "Data Services",
    price: 28000,
    currency: "$",
    tags: ["Big Data", "Data Engineering", "ETL", "Data Warehousing", "Real-time Analytics"],
    author: {
      name: "DataMind Solutions",
      id: "data-mind-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:20:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 178,
  },

  // Development Services
  {
    id: "web-development",
    title: "Custom Web Development",
    description: "Full-stack web development services including frontend, backend, and database design. We build scalable, secure, and high-performance web applications for businesses of all sizes.",
    category: "Development Services",
    price: 15000,
    currency: "$",
    tags: ["Web Development", "Full-stack", "React", "Node.js", "Scalable"],
    author: {
      name: "WebCraft Studios",
      id: "web-craft-studios",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T12:00:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 234,
  },

  // Blockchain Services
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    description: "Custom blockchain solutions including smart contracts, DeFi protocols, and NFT marketplaces. We build on Ethereum, Polygon, and other leading blockchain platforms.",
    category: "Blockchain Services",
    price: 40000,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFTs", "Ethereum"],
    author: {
      name: "Blockchain Builders",
      id: "blockchain-builders",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T14:30:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 89,
  },
];

// Service categories with icons and descriptions
const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    description: "Custom AI development, ML model training, and strategic consulting",
    count: 15,
    avgPrice: "$8,000 - $25,000",
    features: ["Custom AI Models", "ML Training", "Strategy Consulting", "Integration"]
  },
  {
    id: "cloud-services",
    name: "Cloud & Infrastructure",
    icon: <Cloud className="w-8 h-8" />,
    description: "Cloud migration, DevOps automation, and infrastructure management",
    count: 12,
    avgPrice: "$5,000 - $30,000",
    features: ["Cloud Migration", "DevOps", "Kubernetes", "Monitoring"]
  },
  {
    id: "security-services",
    name: "Cybersecurity",
    icon: <Shield className="w-8 h-8" />,
    description: "Security audits, compliance frameworks, and threat protection",
    count: 8,
    avgPrice: "$8,000 - $35,000",
    features: ["Security Audits", "Compliance", "Penetration Testing", "Incident Response"]
  },
  {
    id: "data-services",
    name: "Data & Analytics",
    icon: <Database className="w-8 h-8" />,
    description: "Big data engineering, BI dashboards, and data governance",
    count: 10,
    avgPrice: "$6,000 - $28,000",
    features: ["Big Data", "Business Intelligence", "Data Governance", "Analytics"]
  },
  {
    id: "development-services",
    name: "Development Services",
    icon: <Code className="w-8 h-8" />,
    description: "Web development, mobile apps, and API integration",
    count: 18,
    avgPrice: "$3,000 - $35,000",
    features: ["Web Development", "Mobile Apps", "APIs", "Integration"]
  },
  {
    id: "blockchain-services",
    name: "Blockchain & Web3",
    icon: <Link2 className="w-8 h-8" />,
    description: "Smart contracts, DeFi protocols, and NFT solutions",
    count: 6,
    avgPrice: "$15,000 - $50,000",
    features: ["Smart Contracts", "DeFi", "NFTs", "Blockchain"]
  }
];

// Filter options for services
const SERVICE_FILTERS = [
  { label: 'AI Services', value: 'ai-services' },
  { label: 'Cloud Services', value: 'cloud-services' },
  { label: 'Security Services', value: 'security-services' },
  { label: 'Data Services', value: 'data-services' },
  { label: 'Development Services', value: 'development-services' },
  { label: 'Blockchain Services', value: 'blockchain-services' },
  { label: 'IT Services', value: 'it-services' },
  { label: 'IoT Services', value: 'iot-services' },
];

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  useEffect(() => {
    // Simulate dynamic service generation
    const interval = setInterval(() => {
      // This would typically fetch from an API
      console.log("Services updated");
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Tech Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive ecosystem of cutting-edge technology services, 
            from AI development to cybersecurity, designed to transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/it-onsite-services">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                <Globe className="h-5 w-5 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg">
                <DollarSign className="h-5 w-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Service Categories Grid */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of technology services, each designed to address specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="group block"
              >
                <div className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-8 h-full transition-all duration-300 hover:border-zion-purple/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                  <div className="text-zion-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{category.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zion-cyan text-sm font-medium">
                      {category.count} services
                    </span>
                    <span className="text-zion-slate-light text-sm">
                      {category.avgPrice}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-zion-cyan group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Explore Services</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Hand-picked services from our top providers, featuring the latest in AI, cloud, and cybersecurity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl overflow-hidden hover:border-zion-purple/60 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount} reviews)</span>
                    <div className="ml-auto flex items-center gap-1 bg-zion-purple/20 px-2 py-1 rounded-full">
                      <Sparkles className="h-3 w-3 text-zion-purple" />
                      <span className="text-zion-purple text-xs font-medium">AI Score: {service.aiScore}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-blue-light/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-zion-cyan font-bold text-lg">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <Button className="bg-zion-purple hover:bg-zion-purple-light text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/marketplace">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver exceptional value through our comprehensive service ecosystem and expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Verified Providers</h3>
              <p className="text-zion-slate-light text-sm">
                All service providers are thoroughly vetted and verified for quality and reliability
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Fast Delivery</h3>
              <p className="text-zion-slate-light text-sm">
                Quick turnaround times with most services delivered within 2-4 weeks
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Competitive Pricing</h3>
              <p className="text-zion-slate-light text-sm">
                Transparent pricing with no hidden fees and flexible payment options
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Quality Guarantee</h3>
              <p className="text-zion-slate-light text-sm">
                Satisfaction guaranteed with comprehensive support and revision policies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />
    </>
  );
}
