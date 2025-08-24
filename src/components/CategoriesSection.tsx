
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Monitor, Zap, Settings, Zap as ZapIcon } from "lucide-react";

const categories = [
  {
    title: "Micro SAAS Services",
    description: "AI-powered tools, business automation, and innovative solutions",
    icon: <ZapIcon className="w-10 h-10" />,
    link: "/micro-saas-services",
    color: "from-zion-cyan to-zion-blue",
    featured: true
  },
  {
    title: "AI & IT Services",
    description: "Professional IT consulting, development, and AI integration",
    icon: <Brain className="w-10 h-10" />,
    link: "/services",
    color: "from-zion-purple to-zion-purple-dark",
    featured: true
  },
  {
    title: "Talent Network",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-zion-cyan to-zion-blue",
    featured: false
  },
  {
    title: "Equipment & Hardware",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    featured: false
  },
  {
    title: "Innovation Hub",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
    featured: false
  },
  {
    title: "AI Hiring Platform",
    description: "AI-powered recruitment and talent acquisition tools",
    icon: <ZapIcon className="w-10 h-10" />,
    link: "/zion-hire-ai",
    color: "from-zion-purple to-zion-purple-dark",
    featured: true
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Global IT support and maintenance"
  },
  {
    title: "Cloud Solutions",
    link: "/services",
    description: "Scalable cloud infrastructure"
  },
  {
    title: "Cybersecurity",
    link: "/micro-saas-services",
    description: "Advanced threat protection"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  const featuredCategories = categories.filter(cat => cat.featured);
  const regularCategories = categories.filter(cat => !cat.featured);

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Ecosystem</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation solutions
            </p>
          </div>
        )}
        
        {/* Featured Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <Link 
                key={category.title} 
                to={category.link} 
                className="group block"
              >
                <div className="rounded-xl overflow-hidden h-full border-2 border-zion-blue-light bg-zion-blue-dark p-8 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-zion-slate-light text-lg leading-relaxed">{category.description}</p>
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-purple-light transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Regular Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularCategories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-zion-purple/20">
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
        
        {/* Special Services */}
        <div className="mb-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Specialized Solutions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group px-6 py-4 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-xl text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20"
              >
                <div className="text-center">
                  <div className="font-semibold text-lg mb-1">{service.title}</div>
                  <div className="text-sm text-zion-slate-light opacity-80">{service.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link 
            to="/micro-saas-services" 
            className="inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-dark transition-colors text-lg font-semibold pb-1"
          >
            Explore All Services
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
