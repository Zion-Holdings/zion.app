
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  HardDrive, 
  Lightbulb, 
  Users, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Code, 
  Settings, 
  Link as LinkIcon 
} from "lucide-react";

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Transform your business with intelligent automation and data-driven insights",
    icon: <Brain className="w-10 h-10" />,
    link: "/services#ai-ml",
    color: "from-purple-500 to-indigo-600",
    services: ["AI Strategy", "Custom Models", "Process Automation"]
  },
  {
    title: "Cybersecurity",
    description: "Protect your organization with comprehensive security solutions and monitoring",
    icon: <Shield className="w-10 h-10" />,
    link: "/services#cybersecurity",
    color: "from-red-500 to-pink-600",
    services: ["Security Audits", "Managed SOC", "Compliance"]
  },
  {
    title: "Cloud & Infrastructure",
    description: "Modernize your infrastructure with cloud solutions and DevOps automation",
    icon: <Cloud className="w-10 h-10" />,
    link: "/services#cloud-infrastructure",
    color: "from-blue-500 to-cyan-600",
    services: ["Cloud Migration", "DevOps", "Infrastructure"]
  },
  {
    title: "Data & Analytics",
    description: "Unlock business insights with advanced analytics and data engineering",
    icon: <Database className="w-10 h-10" />,
    link: "/services#data-analytics",
    color: "from-green-500 to-emerald-600",
    services: ["Data Engineering", "AI Analytics", "Business Intelligence"]
  },
  {
    title: "Digital Transformation",
    description: "Accelerate your digital journey with strategic transformation services",
    icon: <Zap className="w-10 h-10" />,
    link: "/services#digital-transformation",
    color: "from-orange-500 to-red-600",
    services: ["Strategy", "Implementation", "Change Management"]
  },
  {
    title: "Web & Mobile",
    description: "Build custom applications and digital experiences for your business",
    icon: <Code className="w-10 h-10" />,
    link: "/services#web-mobile",
    color: "from-indigo-500 to-purple-600",
    services: ["Custom Apps", "Web Development", "Mobile Solutions"]
  },
  {
    title: "IT Support & Management",
    description: "Ensure smooth IT operations with managed services and support",
    icon: <Settings className="w-10 h-10" />,
    link: "/services#it-support",
    color: "from-gray-500 to-slate-600",
    services: ["Managed IT", "24/7 Support", "Strategic Planning"]
  },
  {
    title: "Blockchain & Web3",
    description: "Leverage decentralized technologies for innovation and transparency",
    icon: <LinkIcon className="w-10 h-10" />,
    link: "/services#blockchain-web3",
    color: "from-yellow-500 to-amber-600",
    services: ["Smart Contracts", "DeFi Apps", "Web3 Integration"]
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Global IT support in 195+ countries"
  },
  {
    title: "AI Talent Matching",
    link: "/zion-hire-ai",
    description: "Find the perfect AI experts"
  },
  {
    title: "Request Custom Quote",
    link: "/request-quote",
    description: "Get personalized pricing"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Services</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of professional technology services, from AI and cybersecurity 
              to cloud infrastructure and digital transformation
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{category.description}</p>
                
                {/* Service Highlights */}
                <div className="space-y-2">
                  {category.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-zion-cyan text-xs">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mb-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group px-6 py-4 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-lg text-zion-cyan transition-all duration-300 hover:scale-105"
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
            to="/services" 
            className="inline-flex items-center gap-2 text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors text-lg font-medium"
          >
            View All Services & Solutions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-white font-semibold mb-3">Ready to Get Started?</h4>
            <div className="text-zion-slate-light text-sm space-y-1">
              <p>📞 <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light">+1 302 464 0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light">ziontechgroup.com</a></p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
