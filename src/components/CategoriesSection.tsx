
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  HardDrive, 
  Lightbulb, 
  Users, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Code, 
  Globe, 
  BarChart3
} from "lucide-react";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Link2 from "lucide-react/dist/esm/icons/link-2";
import Wifi from "lucide-react/dist/esm/icons/wifi";

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Custom AI development, ML model training, and AI strategy consulting",
    icon: <Brain className="w-10 h-10" />,
    link: "/category/ai-services",
    color: "from-purple-500 to-indigo-600",
    services: ["AI Development", "ML Training", "AI Strategy", "Model Optimization"]
  },
  {
    title: "Cloud & Infrastructure",
    description: "Cloud migration, DevOps automation, and Kubernetes management",
    icon: <Cloud className="w-10 h-10" />,
    link: "/category/cloud-services",
    color: "from-blue-500 to-cyan-600",
    services: ["Cloud Migration", "DevOps", "Kubernetes", "Infrastructure"]
  },
  {
    title: "Cybersecurity",
    description: "Security audits, compliance frameworks, and incident response planning",
    icon: <Shield className="w-10 h-10" />,
    link: "/category/security-services",
    color: "from-red-500 to-pink-600",
    services: ["Security Audits", "Compliance", "Penetration Testing", "Incident Response"]
  },
  {
    title: "Data & Analytics",
    description: "Big data engineering, BI dashboards, and data governance frameworks",
    icon: <Database className="w-10 h-10" />,
    link: "/category/data-services",
    color: "from-green-500 to-emerald-600",
    services: ["Big Data", "Business Intelligence", "Data Governance", "Analytics"]
  },
  {
    title: "Digital Transformation",
    description: "Strategic planning, legacy modernization, and process automation",
    icon: <Zap className="w-10 h-10" />,
    link: "/category/transformation-services",
    color: "from-yellow-500 to-orange-600",
    services: ["Strategy", "Modernization", "Automation", "Transformation"]
  },
  {
    title: "Development Services",
    description: "Web development, mobile apps, and API integration services",
    icon: <Code className="w-10 h-10" />,
    link: "/category/development-services",
    color: "from-indigo-500 to-purple-600",
    services: ["Web Development", "Mobile Apps", "APIs", "Integration"]
  },
  {
    title: "IT Support & Management",
    description: "IT consulting, managed services, and network infrastructure",
    icon: <Globe className="w-10 h-10" />,
    link: "/category/it-services",
    color: "from-gray-500 to-slate-600",
    services: ["IT Consulting", "Managed Services", "Network Setup", "Support"]
  },
  {
    title: "Blockchain & Web3",
    description: "Smart contracts, DeFi protocols, and NFT marketplace development",
    icon: <Link2 className="w-10 h-10" />,
    link: "/category/blockchain-services",
    color: "from-amber-500 to-yellow-600",
    services: ["Smart Contracts", "DeFi", "NFTs", "Blockchain"]
  },
  {
    title: "IoT & Hardware",
    description: "IoT solutions, hardware prototyping, and edge computing",
    icon: <Wifi className="w-10 h-10" />,
    link: "/category/iot-services",
    color: "from-teal-500 to-green-600",
    services: ["IoT Solutions", "Hardware", "Edge Computing", "Prototyping"]
  },
  {
    title: "Talent & Recruitment",
    description: "AI engineers, data scientists, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
    services: ["AI Engineers", "Data Scientists", "DevOps Engineers", "Specialists"]
  },
  {
    title: "Equipment & Hardware",
    description: "High-performance workstations, servers, and GPU clusters",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-orange-500 to-red-600",
    services: ["Workstations", "Servers", "GPU Clusters", "Infrastructure"]
  },
  {
    title: "Innovation Hub",
    description: "Cutting-edge solutions and breakthrough technology consulting",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-pink-500 to-rose-600",
    services: ["Innovation", "Research", "Prototyping", "Consulting"]
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Global IT support and onsite technical services"
  },
  {
    title: "AI Strategy Consulting",
    link: "/category/ai-services",
    description: "Transform your business with AI implementation"
  },
  {
    title: "Cybersecurity Assessment",
    link: "/category/security-services",
    description: "Comprehensive security audits and protection"
  },
  {
    title: "Cloud Migration",
    link: "/category/cloud-services",
    description: "Seamless cloud infrastructure transition"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Service Ecosystem</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of cutting-edge tech services, AI solutions, 
              and innovative micro SAAS offerings designed to transform your business
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-1">
                  {category.services.slice(0, 3).map((service, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                    >
                      {service}
                    </span>
                  ))}
                  {category.services.length > 3 && (
                    <span className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded-full">
                      +{category.services.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group p-6 bg-zion-blue-light/10 hover:bg-zion-blue-light/20 border border-zion-purple/30 hover:border-zion-purple/60 rounded-xl text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-zion-purple/20"
              >
                <h4 className="text-zion-cyan font-semibold mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-zion-slate-light text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            to="/categories" 
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/30 hover:scale-105"
          >
            Explore All Categories
            <BarChart3 className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
