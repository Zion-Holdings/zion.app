
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  HardDrive, 
  Lightbulb, 
  Users, 
  Zap, 
  Cloud, 
  Shield, 
  BarChart3, 
  Settings, 
  Link as LinkIcon,
  Code,
  Bot,
  Database,
  Globe,
  Smartphone,
  Building
} from "lucide-react";

const categories = [
  {
    title: "AI Services",
    description: "AI-powered solutions for automation, analytics, and intelligent decision making",
    icon: <Bot className="w-10 h-10" />,
    link: "/micro-saas-services?category=ai",
    color: "from-purple-500 to-indigo-600",
    count: "8+ Services",
    isNew: true
  },
  {
    title: "IT Services",
    description: "Professional IT consulting, cloud migration, and infrastructure management",
    icon: <Cloud className="w-10 h-10" />,
    link: "/micro-saas-services?category=it",
    color: "from-blue-500 to-cyan-600",
    count: "6+ Services",
    isFeatured: true
  },
  {
    title: "Micro SAAS",
    description: "Ready-to-use business applications for inventory, CRM, and project management",
    icon: <Code className="w-10 h-10" />,
    link: "/micro-saas-services?category=saas",
    color: "from-emerald-500 to-green-600",
    count: "5+ Solutions",
    isPopular: true
  },
  {
    title: "Development",
    description: "Custom software development, APIs, and mobile applications",
    icon: <Code className="w-10 h-10" />,
    link: "/micro-saas-services?category=dev",
    color: "from-orange-500 to-red-600",
    count: "4+ Services"
  },
  {
    title: "Analytics",
    description: "Business intelligence, data visualization, and predictive analytics",
    icon: <BarChart3 className="w-10 h-10" />,
    link: "/micro-saas-services?category=analytics",
    color: "from-teal-500 to-blue-600",
    count: "3+ Services"
  },
  {
    title: "Security",
    description: "Cybersecurity audits, penetration testing, and 24/7 monitoring",
    icon: <Shield className="w-10 h-10" />,
    link: "/micro-saas-services?category=security",
    color: "from-red-500 to-pink-600",
    count: "4+ Services"
  },
  {
    title: "Automation",
    description: "Business process automation and robotic process automation (RPA)",
    icon: <Settings className="w-10 h-10" />,
    link: "/micro-saas-services?category=automation",
    color: "from-indigo-500 to-purple-600",
    count: "3+ Services"
  },
  {
    title: "Integration",
    description: "System integration, API development, and third-party platform connectors",
    icon: <LinkIcon className="w-10 h-10" />,
    link: "/micro-saas-services?category=integration",
    color: "from-yellow-500 to-orange-600",
    count: "3+ Services"
  },
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-cyan-500 to-blue-600",
    count: "10+ Services"
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-pink-500 to-rose-600",
    count: "100+ Experts"
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    count: "50+ Items"
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-green-500 to-emerald-600",
    count: "25+ Solutions"
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Global IT support and consulting"
  },
  {
    title: "Micro SAAS Solutions",
    link: "/micro-saas-services",
    description: "25+ ready-to-use business applications",
    isNew: true
  },
  {
    title: "AI Development",
    link: "/micro-saas-services?category=ai",
    description: "Custom AI solutions and integration",
    isFeatured: true
  },
  {
    title: "Cloud Migration",
    link: "/micro-saas-services?category=it",
    description: "Zero-downtime cloud transformation",
    isPopular: true
  }
];

const quickAccess = [
  {
    title: "AI Chatbot Builder",
    link: "/micro-saas-services?service=ai-chatbot-builder",
    icon: "🤖",
    price: "$29/month"
  },
  {
    title: "Smart CRM System",
    link: "/micro-saas-services?service=customer-relationship",
    icon: "👥",
    price: "$19/month"
  },
  {
    title: "Inventory Management",
    link: "/micro-saas-services?service=inventory-management",
    icon: "📦",
    price: "$9/month"
  },
  {
    title: "Security Monitoring",
    link: "/micro-saas-services?service=security-monitoring",
    icon: "👁️",
    price: "$249/month"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-zion-blue relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Ecosystem</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovative solutions
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {category.isNew && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">New</span>
                    )}
                    {category.isFeatured && (
                      <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-full">Featured</span>
                    )}
                    {category.isPopular && (
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Popular</span>
                    )}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">
                  {category.title}
                </h3>
                <p className="text-zion-slate-light mb-3 line-clamp-2">
                  {category.description}
                </p>
                <div className="text-zion-cyan text-sm font-medium">
                  {category.count}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mb-12">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group relative overflow-hidden rounded-lg bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 p-4 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  {service.isNew && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full mr-2">New</span>
                  )}
                  {service.isFeatured && (
                    <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-full mr-2">Featured</span>
                  )}
                  {service.isPopular && (
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full mr-2">Popular</span>
                  )}
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h4>
                <p className="text-zion-slate-light text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Quick Access - Popular Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickAccess.map((item) => (
              <Link 
                key={item.title}
                to={item.link}
                className="group bg-zion-blue-dark hover:bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-zion-cyan transition-colors">
                  {item.title}
                </h4>
                <div className="text-zion-cyan font-bold">{item.price}</div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/micro-saas-services" 
            className="inline-flex items-center text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors text-lg font-medium"
          >
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
