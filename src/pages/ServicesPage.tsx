
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Shield, Brain, Cloud, Code, Database, BarChart3, MessageSquare, Palette, Key, Network, TrendingUp, Rocket, Mobile, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

// Enhanced service listings with real micro SAAS services
const SERVICE_LISTINGS: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-content-generation",
    title: "AI Content Generation Platform",
    description: "Generate high-quality content, articles, and marketing copy using advanced AI models trained on industry best practices.",
    category: "AI Services",
    price: 99,
    currency: "$",
    tags: ["AI Writing", "Content Creation", "SEO Optimization", "Marketing"],
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:30:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "ai-analytics-platform",
    title: "AI-Powered Analytics Suite",
    description: "Transform raw data into actionable insights with machine learning algorithms and predictive analytics.",
    category: "AI Services",
    price: 199,
    currency: "$",
    tags: ["Data Analytics", "Machine Learning", "Predictive Insights", "Business Intelligence"],
    author: {
      name: "DataMind Solutions",
      id: "datamind",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:15:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Development Platform",
    description: "Custom AI chatbots for customer service, lead generation, and 24/7 business automation.",
    category: "AI Services",
    price: 399,
    currency: "$",
    tags: ["Chatbots", "Customer Service", "Automation", "AI"],
    author: {
      name: "BotForge AI",
      id: "botforge-ai",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:45:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 134,
  },

  // IT Infrastructure Services
  {
    id: "cloud-migration-suite",
    title: "Cloud Migration & Management Platform",
    description: "Seamless cloud migration, optimization, and 24/7 management for AWS, Azure, and Google Cloud.",
    category: "IT Infrastructure",
    price: 799,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps"],
    author: {
      name: "CloudPro Experts",
      id: "cloud-pro",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T11:20:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 203,
  },
  {
    id: "cybersecurity-platform",
    title: "Comprehensive Cybersecurity Platform",
    description: "Security audits, penetration testing, and compliance management for modern businesses.",
    category: "IT Infrastructure",
    price: 599,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "SOC 2"],
    author: {
      name: "SecureNet Team",
      id: "secure-net",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T16:30:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 167,
  },
  {
    id: "devops-automation-platform",
    title: "DevOps Automation Platform",
    description: "Streamline development workflows with CI/CD pipelines, infrastructure as code, and automated testing.",
    category: "IT Infrastructure",
    price: 499,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure"],
    author: {
      name: "DevOps Masters",
      id: "devops-masters",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T13:15:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 78,
  },

  // Business Solutions
  {
    id: "digital-transformation-platform",
    title: "Digital Transformation Platform",
    description: "Strategic consulting and implementation to modernize legacy systems and drive business innovation.",
    category: "Business Solutions",
    price: 1499,
    currency: "$",
    tags: ["Digital Transformation", "Legacy Systems", "Innovation", "Strategy"],
    author: {
      name: "TransformIT Consulting",
      id: "transform-it",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T10:45:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 112,
  },
  {
    id: "api-development-platform",
    title: "API Development & Integration Platform",
    description: "Custom API development, third-party integrations, and microservices architecture.",
    category: "Business Solutions",
    price: 399,
    currency: "$",
    tags: ["API Development", "Integrations", "Microservices", "Webhooks"],
    author: {
      name: "API Forge",
      id: "api-forge",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:20:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 95,
  },
  {
    id: "mobile-app-platform",
    title: "Mobile App Development Platform",
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX.",
    category: "Business Solutions",
    price: 899,
    currency: "$",
    tags: ["Mobile Development", "iOS", "Android", "React Native"],
    author: {
      name: "MobileCraft Studio",
      id: "mobilecraft",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T12:10:00.000Z",
    aiScore: 88,
    rating: 4.6,
    reviewCount: 67,
  },

  // Specialized Services
  {
    id: "blockchain-development-platform",
    title: "Blockchain Development Platform",
    description: "Smart contracts, DeFi applications, and blockchain infrastructure development.",
    category: "Specialized Services",
    price: 1299,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Solidity"],
    author: {
      name: "BlockForge Labs",
      id: "blockforge",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T09:30:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "iot-solutions-platform",
    title: "IoT Solutions Platform",
    description: "Internet of Things device development, sensor networks, and data collection systems.",
    category: "Specialized Services",
    price: 599,
    currency: "$",
    tags: ["IoT", "Sensor Networks", "Data Collection", "Smart Devices"],
    author: {
      name: "IoT Nexus",
      id: "iot-nexus",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T14:45:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 56,
  },
  {
    id: "data-science-platform",
    title: "Data Science Consulting Platform",
    description: "Advanced analytics, machine learning model development, and data strategy consulting.",
    category: "Specialized Services",
    price: 899,
    currency: "$",
    tags: ["Data Science", "Machine Learning", "Analytics", "Strategy"],
    author: {
      name: "DataVizor",
      id: "datavizor",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T11:20:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 78,
  },
];

// Enhanced filter options for the new service categories
const SERVICE_FILTERS = [
  { label: 'AI Services', value: 'ai-services' },
  { label: 'IT Infrastructure', value: 'it-infrastructure' },
  { label: 'Business Solutions', value: 'business-solutions' },
  { label: 'Specialized Services', value: 'specialized-services' },
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
];

// Service categories showcase
const ServiceCategories = () => (
  <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Our Service Categories</h2>
        <p className="text-zion-cyan text-lg max-w-3xl mx-auto">
          Discover comprehensive solutions across AI, IT infrastructure, business transformation, and specialized services
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Brain className="h-12 w-12 text-zion-cyan" />,
            title: "AI & Machine Learning",
            description: "Content generation, analytics, chatbots, and intelligent automation",
            count: "12+ Services",
            color: "from-purple-500 to-pink-500"
          },
          {
            icon: <Cloud className="h-12 w-12 text-zion-cyan" />,
            title: "IT Infrastructure",
            description: "Cloud migration, cybersecurity, DevOps, and database optimization",
            count: "15+ Services",
            color: "from-blue-500 to-cyan-500"
          },
          {
            icon: <Rocket className="h-12 w-12 text-zion-cyan" />,
            title: "Business Solutions",
            description: "Digital transformation, API development, mobile apps, and e-commerce",
            count: "18+ Services",
            color: "from-green-500 to-emerald-500"
          },
          {
            icon: <Key className="h-12 w-12 text-zion-cyan" />,
            title: "Specialized Services",
            description: "Blockchain, IoT, data science, and UI/UX design",
            count: "10+ Services",
            color: "from-orange-500 to-red-500"
          }
        ].map((category, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-zion-cyan/20 mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-zion-slate-light text-sm mb-3">{category.description}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium">
                {category.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Pricing comparison section
const PricingComparison = () => (
  <div className="bg-zion-slate-dark py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Competitive Pricing</h2>
        <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
          Get enterprise-grade services at micro SAAS prices. Save 30-60% compared to traditional providers.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            plan: "Starter",
            price: "$99",
            period: "/month",
            description: "Perfect for small businesses and startups",
            features: ["AI Content Generation", "Basic Analytics", "Email Support", "5 Projects"],
            color: "from-zion-cyan to-zion-purple"
          },
          {
            plan: "Professional",
            price: "$299",
            period: "/month",
            description: "Ideal for growing companies and teams",
            features: ["All Starter Features", "AI Analytics", "Priority Support", "Unlimited Projects", "API Access"],
            color: "from-zion-purple to-zion-blue",
            popular: true
          },
          {
            plan: "Enterprise",
            price: "$799",
            period: "/month",
            description: "For large organizations with complex needs",
            features: ["All Professional Features", "Custom AI Models", "Dedicated Support", "White-labeling", "Advanced Security"],
            color: "from-zion-blue to-zion-cyan"
          }
        ].map((plan, index) => (
          <div key={index} className={`relative bg-white/5 backdrop-blur-md rounded-lg p-8 border ${plan.popular ? 'border-zion-cyan' : 'border-zion-slate-light/30'}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                <span className="text-zion-slate-light ml-1">{plan.period}</span>
              </div>
              <p className="text-zion-slate-light mt-2">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-zion-slate-light">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity`}>
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  useEffect(() => {
    const interval = setInterval(() => {
      // Add new services periodically
      const newService = generateRandomService(listings.length + 1);
      setListings(prev => [...prev, newService]);
    }, 300000); // Every 5 minutes

    return () => clearInterval(interval);
  }, [listings.length]);

  return (
    <>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Enterprise-Grade Micro SAAS Services</h2>
          <div className="flex flex-wrap gap-2">
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

      <ServiceCategories />
      
      <DynamicListingPage 
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 99, max: 2000 }}
      />

      <PricingComparison />
      
      <TrustedBySection />
    </>
  );
}

// Helper function to generate random services
function generateRandomService(idNum: number): ProductListing {
  const templates = [
    {
      title: "AI Automation Consulting",
      category: "AI Services",
      min: 199,
      max: 599,
      tags: ["Automation", "AI Strategy", "Optimization"],
    },
    {
      title: "Cloud Migration & Support",
      category: "IT Infrastructure",
      min: 399,
      max: 999,
      tags: ["Cloud", "Migration", "DevOps"],
    },
    {
      title: "Advanced Cybersecurity Suite",
      category: "IT Infrastructure",
      min: 299,
      max: 899,
      tags: ["Cybersecurity", "PenTesting", "Compliance"],
    },
    {
      title: "Big Data Engineering",
      category: "Specialized Services",
      min: 499,
      max: 1299,
      tags: ["Data Engineering", "Analytics", "ETL"],
    },
    {
      title: "AI Model Training Service",
      category: "AI Services",
      min: 599,
      max: 1499,
      tags: ["Machine Learning", "Model Training", "AI"],
    },
    {
      title: "Digital Transformation Strategy",
      category: "Business Solutions",
      min: 799,
      max: 1999,
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

  const template = templates[Math.floor(Math.random() * templates.length)];
  const author = authors[Math.floor(Math.random() * authors.length)];
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
    images: [images[Math.floor(Math.random() * images.length)]],
    createdAt: new Date().toISOString(),
    aiScore: Math.floor(85 + Math.random() * 15),
    rating: parseFloat((4.2 + Math.random() * 0.8).toFixed(1)),
    reviewCount: Math.floor(30 + Math.random() * 120),
  };
}
