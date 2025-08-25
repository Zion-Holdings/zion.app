import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Building, 
  Factory, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  TrendingUp 
} from 'lucide-react';

export default function IndustrySolutions() {
  const industries = [
    {
      title: "Healthcare Solutions",
      description: "HIPAA-compliant healthcare technology solutions including patient management, telemedicine, and medical analytics.",
      icon: Heart,
      features: ["Patient management systems", "Telemedicine platforms", "Medical analytics", "HIPAA compliance"],
      solutions: ["Electronic Health Records", "Telehealth platforms", "Medical device integration", "Healthcare analytics"]
    },
    {
      title: "Financial Services",
      description: "Secure financial technology solutions with regulatory compliance, fraud detection, and automated trading systems.",
      icon: DollarSign,
      features: ["Regulatory compliance", "Fraud detection", "Automated trading", "Risk management"],
      solutions: ["Payment processing", "Trading platforms", "Compliance automation", "Financial analytics"]
    },
    {
      title: "Manufacturing & Industry 4.0",
      description: "Smart manufacturing solutions with IoT integration, predictive maintenance, and supply chain optimization.",
      icon: Factory,
      features: ["IoT integration", "Predictive maintenance", "Supply chain optimization", "Quality control"],
      solutions: ["Smart factory systems", "Predictive analytics", "Supply chain management", "Quality assurance"]
    },
    {
      title: "Retail & E-commerce",
      description: "Omnichannel retail solutions with inventory management, customer analytics, and personalized shopping experiences.",
      icon: ShoppingCart,
      features: ["Inventory management", "Customer analytics", "Personalization", "Multi-channel integration"],
      solutions: ["E-commerce platforms", "POS systems", "Customer relationship management", "Analytics dashboards"]
    },
    {
      title: "Government & Public Sector",
      description: "Secure government technology solutions with compliance, citizen services, and digital transformation.",
      icon: Shield,
      features: ["Security compliance", "Citizen services", "Digital transformation", "Data governance"],
      solutions: ["Citizen portals", "Document management", "Compliance systems", "Public safety platforms"]
    }
  ];

  const benefits = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of industry-specific challenges and requirements",
      icon: Building
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance with industry regulations and standards",
      icon: Shield
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business and industry needs",
      icon: TrendingUp
    },
    {
      title: "Integration Ready",
      description: "Seamless integration with existing industry systems",
      icon: Cpu
    }
  ];

  const technologies = [
    {
      name: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics",
      icon: Cpu
    },
    {
      name: "IoT & Edge Computing",
      description: "Connected devices and real-time data processing",
      icon: Globe
    },
    {
      name: "Blockchain & Security",
      description: "Secure transactions and data integrity",
      icon: Shield
    },
    {
      name: "Cloud & Hybrid Solutions",
      description: "Scalable infrastructure and deployment options",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Industry Solutions - Zion Tech Group" 
        description="Tailored technology solutions for healthcare, finance, manufacturing, retail, and government sectors with industry-specific compliance and expertise."
        keywords="industry solutions, healthcare technology, financial services, manufacturing 4.0, retail solutions, government technology"
        url="https://ziontechgroup.com/services/industry-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Industry Solutions
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Tailored for Your Industry
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Industry-specific technology solutions designed with deep domain expertise, regulatory compliance, 
            and proven methodologies for healthcare, finance, manufacturing, retail, and government sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Solutions
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Industry Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to the unique challenges, regulations, and opportunities 
              of different industry sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-zion-slate mb-4">
                      {industry.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-zion-blue-dark mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {industry.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-zion-slate">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zion-blue-dark mb-2">Solutions</h4>
                        <ul className="space-y-1">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-center text-sm text-zion-slate">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Our Industry Solutions?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of industry-specific expertise, compliance-ready solutions, 
              and proven methodologies designed for your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Leverage the latest technologies to drive innovation and competitive advantage in your industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-zion-slate">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Let us help you leverage industry-specific technology solutions that drive innovation, 
            compliance, and competitive advantage in your sector.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Industry Assessment
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}