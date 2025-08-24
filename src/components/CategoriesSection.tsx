
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { 
  Briefcase,
  Zap,
  Brain, 
  Cloud, 
  Database, 
  Shield, 
  Users,
  Globe,
  TrendingUp,
  Code,
  BarChart3,
  MessageSquare,
  Settings,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    title: "Micro SAAS",
    description: "AI-powered business tools and automation solutions",
    icon: <Zap className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-purple-500 to-indigo-600",
    count: "20+ Services",
    featured: true
  },
  {
    title: "AI Services",
    description: "Custom AI development, integration, and consulting",
    icon: <Brain className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-cyan-500 to-blue-600",
    count: "15+ Services",
    featured: true
  },
  {
    title: "IT Services",
    description: "Enterprise infrastructure, security, and DevOps",
    icon: <Shield className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-emerald-500 to-green-600",
    count: "12+ Services",
    featured: true
  },
  {
    title: "Cloud Solutions",
    description: "Migration, optimization, and managed services",
    icon: <Cloud className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-blue-500 to-cyan-600",
    count: "8+ Services"
  },
  {
    title: "Data Analytics",
    description: "Business intelligence and predictive analytics",
    icon: <BarChart3 className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-orange-500 to-red-600",
    count: "6+ Services"
  },
  {
    title: "Content Tools",
    description: "AI-powered content creation and optimization",
    icon: <MessageSquare className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-pink-500 to-purple-600",
    count: "5+ Services"
  },
  {
    title: "Customer Support",
    description: "AI chatbots and automated support systems",
    icon: <MessageSquare className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-yellow-500 to-orange-600",
    count: "4+ Services"
  },
  {
    title: "Business Tools",
    description: "HR, finance, and project management solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-indigo-500 to-purple-600",
    count: "10+ Services"
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Global IT support and maintenance"
  },
  {
    title: "AI Strategy Consulting",
    link: "/enhanced-services",
    description: "Transform your business with AI"
  },
  {
    title: "Cloud Migration",
    link: "/enhanced-services",
    description: "Seamless cloud transformation"
  },
  {
    title: "Cybersecurity Audit",
    link: "/enhanced-services",
    description: "Comprehensive security assessment"
  }
];

const pricingTiers = [
  {
    name: "Micro SAAS",
    range: "$199 - $899",
    description: "Monthly subscription tools",
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Professional",
    range: "$5K - $25K",
    description: "Project-based services",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Enterprise",
    range: "$25K+",
    description: "Custom enterprise solutions",
    color: "from-emerald-500 to-green-600"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Service Ecosystem</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of AI-powered micro SAAS tools, enterprise IT services, and cutting-edge solutions
            </p>
          </div>
        )}
        
        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/50 p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20">
                <div className="flex items-center justify-between mb-4">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  {category.featured && (
                    <div className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{category.description}</p>
                <div className="text-zion-cyan text-sm font-medium">{category.count}</div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Pricing Tiers */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Service Pricing Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="text-center p-6 rounded-lg bg-zion-blue-dark/30 border border-zion-purple/20">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white text-lg font-bold mb-2">{tier.name}</h4>
                <div className="text-zion-cyan text-2xl font-bold mb-2">{tier.range}</div>
                <p className="text-zion-slate-light text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Special Services */}
        <div className="mb-12">
          <h3 className="text-center text-xl font-bold text-white mb-8">Featured Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group p-4 bg-zion-blue-light/10 hover:bg-zion-blue-dark/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-lg text-center transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-zion-cyan font-semibold mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-zion-slate-light text-xs">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Global Reach */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-full px-6 py-3">
            <Globe className="w-5 h-5 text-zion-cyan" />
            <span className="text-white font-medium">Global Services Available in 50+ Countries</span>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <Link 
            to="/enhanced-services" 
            className="inline-flex items-center space-x-2 text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors text-lg font-medium"
          >
            <span>Explore All Services</span>
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
