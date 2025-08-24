
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Code, Shield, BarChart3, Link as LinkIcon, UserCheck } from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";

const categories = [
  {
    title: "AI Services",
    description: "AI-powered solutions for content generation, chatbots, analytics, and automation",
    icon: <Brain className="w-10 h-10" />,
    link: "/micro-saas-services?category=AI",
    color: "from-purple-500 to-pink-600",
    count: "12 Services"
  },
  {
    title: "IT Solutions",
    description: "Cloud migration, cybersecurity, infrastructure management, and optimization",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/micro-saas-services?category=IT",
    color: "from-blue-500 to-cyan-600",
    count: "8 Services"
  },
  {
    title: "Development",
    description: "API development, mobile apps, custom software, and technical consulting",
    icon: <Code className="w-10 h-10" />,
    link: "/micro-saas-services?category=Development",
    color: "from-green-500 to-emerald-600",
    count: "15 Services"
  },
  {
    title: "Analytics & BI",
    description: "Business intelligence, data analytics, reporting, and predictive insights",
    icon: <BarChart3 className="w-10 h-10" />,
    link: "/micro-saas-services?category=Analytics",
    color: "from-orange-500 to-red-600",
    count: "6 Services"
  },
  {
    title: "Security",
    description: "Cybersecurity monitoring, threat detection, compliance, and protection",
    icon: <Shield className="w-10 h-10" />,
    link: "/micro-saas-services?category=Security",
    color: "from-red-500 to-pink-600",
    count: "9 Services"
  },
  {
    title: "Automation",
    description: "Workflow automation, business process optimization, and AI decision making",
    icon: <Workflow className="w-10 h-10" />,
    link: "/micro-saas-services?category=Automation",
    color: "from-indigo-500 to-purple-600",
    count: "11 Services"
  },
  {
    title: "Integration",
    description: "Enterprise integration, API management, data synchronization, and connectors",
    icon: <LinkIcon className="w-10 h-10" />,
    link: "/micro-saas-services?category=Integration",
    color: "from-teal-500 to-blue-600",
    count: "7 Services"
  },
  {
    title: "Consulting",
    description: "Digital transformation, technology strategy, and change management",
    icon: <UserCheck className="w-10 h-10" />,
    link: "/micro-saas-services?category=Consulting",
    color: "from-yellow-500 to-orange-600",
    count: "5 Services"
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
    description: "Complete suite of business solutions"
  },
  {
    title: "AI Development",
    link: "/zion-hire-ai",
    description: "Custom AI solutions and platforms"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-zion-purple/10 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-zion-cyan/10 rounded-full filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-zion-purple-light/10 rounded-full filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Services</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of micro SAAS services, IT solutions, and innovative technology platforms
            </p>
            <div className="mt-6">
              <span className="inline-block bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full text-sm border border-zion-purple/30">
                ✨ {categories.length} Service Categories • 73+ Solutions Available
              </span>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20 backdrop-blur-sm">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-zion-slate-light mb-3 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan text-xs font-medium">
                    {category.count}
                  </span>
                  <div className="w-6 h-6 bg-zion-purple/20 rounded-full flex items-center justify-center group-hover:bg-zion-purple/40 transition-colors duration-300">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mb-8">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Service Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group px-6 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/20"
              >
                <div className="text-center">
                  <div className="font-semibold mb-1">{service.title}</div>
                  <div className="text-xs text-zion-slate-light opacity-80">{service.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/micro-saas-services" 
            className="inline-flex items-center text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors group"
          >
            View All Services
            <div className="ml-2 w-5 h-5 bg-zion-cyan/20 rounded-full flex items-center justify-center group-hover:bg-zion-cyan/40 transition-colors duration-300">
              <div className="w-2 h-2 bg-zion-cyan rounded-full group-hover:scale-150 transition-transform duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
