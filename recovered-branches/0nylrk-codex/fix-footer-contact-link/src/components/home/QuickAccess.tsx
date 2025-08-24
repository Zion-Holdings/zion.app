
import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 
  Smartphone 
} from "lucide-react";

export function QuickAccess() {
  const quickLinks = [
    {
      title: "AI Matcher",
      description: "Find the perfect match for your project needs",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/match"
    },
    {
      title: "Talent Directory",
      description: "Browse verified tech specialists",
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent"
    },
    {
      title: "Service Marketplace",
      description: "Discover professional services",
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,
      link: "/services"
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware",
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment"
    },
    {
      title: "Community",
      description: "Connect with tech professionals",
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,
      link: "/community"
    },
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch"
    }
  ];

  return (
    <section className="py-12 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            Quick Access
          </h2>
          <p className="text-zion-slate-light text-lg">
            Jump directly to our most popular features
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {quickLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.link} 
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">
                {link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>Access</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
