
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Zap, Shield, Cloud, Database, TrendingUp, ArrowRight } from "lucide-react";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import { Link as LinkIcon } from "lucide-react";

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
    title: "AI & Automation",
    link: "/expanded-services?category=ai-automation"
  },
  {
    title: "Cybersecurity",
    link: "/expanded-services?category=cybersecurity"
  },
  {
    title: "Cloud & DevOps",
    link: "/expanded-services?category=cloud-devops"
  },
  {
    title: "Data & Analytics",
    link: "/expanded-services?category=data-analytics"
  },
  {
    title: "Digital Transformation",
    link: "/expanded-services?category=digital-transformation"
  },
  {
    title: "IoT & Edge Computing",
    link: "/expanded-services?category=iot-edge"
  },
  {
    title: "Blockchain & Web3",
    link: "/expanded-services?category=blockchain-web3"
  }
];

const serviceCategories = [
  {
    title: "AI & Automation",
    description: "Intelligent automation and AI solutions",
    icon: <Zap className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    link: "/expanded-services?category=ai-automation"
  },
  {
    title: "Cybersecurity",
    description: "Advanced security and compliance",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    link: "/expanded-services?category=cybersecurity"
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud migration and automation",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    link: "/expanded-services?category=cloud-devops"
  },
  {
    title: "Data & Analytics",
    description: "Business intelligence and governance",
    icon: <Database className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/expanded-services?category=data-analytics"
  },
  {
    title: "Digital Transformation",
    description: "Strategy and modernization",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-orange-500 to-yellow-600",
    link: "/expanded-services?category=digital-transformation"
  },
  {
    title: "IoT & Edge",
    description: "Connected solutions and edge computing",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    link: "/expanded-services?category=iot-edge"
  },
  {
    title: "Blockchain & Web3",
    description: "Decentralized solutions and smart contracts",
    icon: <LinkIcon className="w-8 h-8" />,
    color: "from-teal-500 to-blue-600",
    link: "/expanded-services?category=blockchain-web3"
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

        {/* Service Categories */}
        <div className="mb-12">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Professional Service Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceCategories.map((category) => (
              <Link 
                key={category.title}
                to={category.link}
                className="group block"
              >
                <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-4 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-2px]">
                  <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="text-white text-sm font-bold mb-1">{category.title}</h4>
                  <p className="text-zion-slate-light text-xs">{category.description}</p>
                </div>
              </Link>
            ))}
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
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/expanded-services" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
