
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const quickLinks = [
    {
      title: t('home.tool_ai_matcher'),
      description: t('home.tool_ai_matcher_desc'),
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/match"
    },
    {
      title: "Micro SAAS",
      description: "Business software solutions",
      icon: <Briefcase className="h-6 w-6 text-zion-purple" />,
      link: "/micro-saas-services"
    },
    {
      title: "AI Services",
      description: "Custom AI development",
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Technology solutions",
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/it-services"
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent"
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment"
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
              className="group bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light hover:border-zion-cyan hover:bg-zion-blue-dark/70 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-zion-blue to-zion-purple rounded-full w-14 h-14 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="group-hover:animate-pulse">
                  {link.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-3 leading-relaxed">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto group-hover:text-zion-purple transition-colors duration-300">
                <span className="font-medium">{t('general.explore')}</span>
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
