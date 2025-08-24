
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
    title: "Enterprise Services",
    link: "/enhanced-services"
  },
  {
    title: "View Pricing",
    link: "/pricing"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "AI Services",
    link: "/ai-services"
  },
  {
    title: "Enterprise Solutions",
    link: "/enterprise-solutions"
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
    title: "Network & Infrastructure",
    icon: <Network className="w-6 h-6" />,
    description: "SDN, virtualization, edge computing",
    link: "/expanded-services?category=Network%20%26%20Infrastructure",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Digital Transformation",
    icon: <Zap className="w-6 h-6" />,
    description: "Legacy modernization, process optimization",
    link: "/expanded-services?category=Digital%20Transformation",
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Sustainability Tech",
    icon: <Leaf className="w-6 h-6" />,
    description: "Green computing, energy optimization",
    link: "/expanded-services?category=Sustainability%20Tech",
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Digital Experience",
    icon: <Eye className="w-6 h-6" />,
    description: "UX/UI, accessibility, performance",
    link: "/expanded-services?category=Digital%20Experience",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Financial Technology",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Payment systems, blockchain, fintech",
    link: "/expanded-services?category=Financial%20Technology",
    color: "from-emerald-500 to-green-600"
  }
];

interface CategoriesSectionProps {
  showAdvanced?: boolean;
  className?: string;
}

export function CategoriesSection({ showAdvanced = false, className = "" }: CategoriesSectionProps) {
  return (
    <section className={`py-20 bg-zion-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        <GradientHeading className="text-center mb-16">
          Explore Our Categories
        </GradientHeading>
        
        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-zion-slate-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-zion-slate-900 mb-2 group-hover:text-zion-purple transition-colors">
                  {category.title}
                </h3>
                <p className="text-zion-slate-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Special Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-zion-slate-900 mb-8">
            Specialized Services
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-zion-slate-200 hover:border-zion-purple hover:bg-zion-purple hover:text-white"
              >
                <span className="font-medium">{service.title}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Advanced Categories (if enabled) */}
        {showAdvanced && (
          <div>
            <h3 className="text-2xl font-bold text-center text-zion-slate-900 mb-8">
              Advanced Technology Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedCategories.map((category) => (
                <Link
                  key={category.title}
                  to={category.link}
                  className="group block"
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-zion-slate-100 hover:border-zion-purple">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-zion-slate-900 mb-2 group-hover:text-zion-purple transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-zion-slate-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-zion-slate-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-zion-slate-600 mb-6 max-w-2xl mx-auto">
            Our team of experts can help you build tailored solutions that perfectly fit your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                Get in Touch
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
