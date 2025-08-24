import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Users, Briefcase, Settings, Zap, Shield, Cloud } from 'lucide-react';

export function QuickAccess() {
  const quickActions = [
    {
      title: 'Find AI Talent',
      description: 'Connect with top AI professionals',
      icon: Users,
      href: '/talent',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Browse Services',
      description: 'Explore our comprehensive service catalog',
      icon: Settings,
      href: '/services',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'AI Matcher',
      description: 'Find the perfect AI solution for your needs',
      icon: Search,
      href: '/match',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Equipment',
      description: 'High-tech equipment and hardware',
      icon: Zap,
      href: '/equipment',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      title: 'Security Services',
      description: 'Cybersecurity and protection solutions',
      icon: Shield,
      href: '/security',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure',
      icon: Cloud,
      href: '/cloud-services',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900/50 to-zinc-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-blue/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access to Everything You Need
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Navigate directly to the services, talent, and solutions that matter most to your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={action.title}
              to={action.href}
              className={`group p-6 rounded-xl border border-white/10 ${action.bgColor} hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {action.title}
                  </h3>
                  <p className="text-zinc-400 mt-2 group-hover:text-zinc-300 transition-colors duration-300">
                    {action.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-zion-cyan group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}