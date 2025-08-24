
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Shield, Globe, Database, Network, Zap, Leaf, Eye, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "Advanced Technology Services",
    link: "/expanded-services"
  }
];

const advancedCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    description: "Process automation, NLP, computer vision",
    link: "/expanded-services?category=AI%20%26%20Machine%20Learning",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    description: "Zero-trust, threat detection, compliance",
    link: "/expanded-services?category=Cybersecurity",
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe className="w-6 h-6" />,
    description: "Multi-cloud, automation, orchestration",
    link: "/expanded-services?category=Cloud%20%26%20DevOps",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Real-time processing, BI, ML integration",
    link: "/expanded-services?category=Data%20%26%20Analytics",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Blockchain & Web3",
    icon: <Network className="w-6 h-6" />,
    description: "DeFi, smart contracts, DApps",
    link: "/expanded-services?category=Blockchain%20%26%20Web3",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "IoT & Edge Computing",
    icon: <HardDrive className="w-6 h-6" />,
    description: "Edge platforms, device management",
    link: "/expanded-services?category=IoT%20%26%20Edge%20Computing",
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Quantum Computing",
    icon: <Zap className="w-6 h-6" />,
    description: "Strategy, algorithms, cryptography",
    link: "/expanded-services?category=Quantum%20Computing",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Green Tech",
    icon: <Leaf className="w-6 h-6" />,
    description: "Sustainability, energy efficiency",
    link: "/expanded-services?category=Green%20Tech%20%26%20Sustainability",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "AR/VR & Metaverse",
    icon: <Eye className="w-6 h-6" />,
    description: "Virtual worlds, digital twins",
    link: "/expanded-services?category=AR%2FVR%20%26%20Metaverse",
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "FinTech & Banking",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Digital banking, payments, lending",
    link: "/expanded-services?category=FinTech%20%26%20Digital%20Banking",
    color: "from-blue-600 to-indigo-600"
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
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
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
                <p className="text-zion-slate-light">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Advanced Technology Services Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Technology Services</h3>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Cutting-edge micro SAAS solutions and professional IT services designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {advancedCategories.map((category) => (
              <Link 
                key={category.title}
                to={category.link}
                className="group block"
              >
                <div className="rounded-lg overflow-hidden border border-zion-blue-light bg-zion-blue-dark p-4 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-3px]">
                  <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">{category.title}</h4>
                  <p className="text-zion-slate-light text-xs">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/expanded-services">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white">
                Explore All Advanced Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>
            ))}
            <Link 
              to="/services-pricing"
              className="px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark border border-zion-purple/50 hover:border-zion-purple rounded-full text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
