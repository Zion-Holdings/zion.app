
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "AI & Micro SAAS",
    description: "Cutting-edge AI services and affordable software solutions",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/micro-saas-services",
    color: "from-emerald-500 to-green-600",
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
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div 
                className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20 hover:bg-zion-blue-dark/70"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-purple/20`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors duration-300">{category.title}</h3>
                <p className="text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300">{category.description}</p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light/50 hover:bg-zion-blue-dark/70 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm"
              >
                {service.title}
              </Link>
            ))}
            
            {/* New AI Services CTA */}
            <Link 
              to="/micro-saas-services"
              className="px-6 py-3 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 hover:from-zion-purple/30 hover:to-zion-cyan/30 border border-zion-purple/30 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm"
            >
              🚀 AI & Micro SAAS Services
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
