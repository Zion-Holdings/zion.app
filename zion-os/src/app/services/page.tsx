import Link from 'next/link';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Globe, 
  Zap, 
  Users, 
  Target, 
  BarChart3, 
  Cpu, 
  Lock, 
  Network, 
  Database,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

type ColorType = 'blue' | 'purple' | 'green' | 'orange' | 'indigo' | 'red' | 'cyan';

interface ServiceItem {
  title: string;
  description: string;
  icon: any;
  color: ColorType;
  features: string[];
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export default function ServicesPage() {
  const services: ServiceCategory[] = [
    {
      category: "AI & Machine Learning",
      items: [
        {
          title: "AI Autonomous Systems",
          description: "Self-managing AI systems that operate independently across your business operations",
          icon: Brain,
          color: "blue",
          features: ["24/7 autonomous operation", "Self-learning capabilities", "Predictive analytics", "Automated decision making"]
        },
        {
          title: "AI Content Creation Suite",
          description: "Revolutionary content generation platform that creates engaging, personalized content at scale",
          icon: Users,
          color: "purple",
          features: ["Multi-format content", "Brand voice consistency", "SEO optimization", "Real-time personalization"]
        },
        {
          title: "AI Research Assistant",
          description: "Autonomous research capabilities that accelerate discovery and innovation across all fields",
          icon: Target,
          color: "green",
          features: ["Data analysis", "Pattern recognition", "Hypothesis generation", "Research automation"]
        }
      ]
    },
    {
      category: "Business Intelligence",
      items: [
        {
          title: "Advanced Analytics Platform",
          description: "Comprehensive business intelligence solution with real-time insights and predictive modeling",
          icon: BarChart3,
          color: "indigo",
          features: ["Real-time dashboards", "Predictive modeling", "Custom reporting", "Data visualization"]
        },
        {
          title: "AI-Powered Market Research",
          description: "Intelligent market analysis and competitive intelligence powered by machine learning",
          icon: Rocket,
          color: "purple",
          features: ["Market trend analysis", "Competitor monitoring", "Customer insights", "Opportunity identification"]
        }
      ]
    },
    {
      category: "Enterprise Security",
      items: [
        {
          title: "AI Threat Detection",
          description: "Next-generation cybersecurity with AI-powered threat detection and response",
          icon: Shield,
          color: "green",
          features: ["Real-time monitoring", "Behavioral analysis", "Automated response", "Threat intelligence"]
        },
        {
          title: "Zero-Trust Security Framework",
          description: "Comprehensive security architecture ensuring secure access to all resources",
          icon: Lock,
          color: "red",
          features: ["Identity verification", "Access control", "Network segmentation", "Continuous monitoring"]
        }
      ]
    },
    {
      category: "Quantum Computing",
      items: [
        {
          title: "Quantum Algorithm Development",
          description: "Custom quantum algorithms for complex problem-solving and optimization",
          icon: Cpu,
          color: "orange",
          features: ["Custom algorithms", "Optimization problems", "Cryptography", "Simulation capabilities"]
        },
        {
          title: "Quantum Machine Learning",
          description: "Quantum-enhanced machine learning for superior pattern recognition and data processing",
          icon: Brain,
          color: "cyan",
          features: ["Quantum neural networks", "Enhanced accuracy", "Faster processing", "Quantum advantage"]
        }
      ]
    },
    {
      category: "Infrastructure & Cloud",
      items: [
        {
          title: "Cloud-Native Architecture",
          description: "Scalable, resilient cloud infrastructure designed for modern applications",
          icon: Network,
          color: "blue",
          features: ["Auto-scaling", "High availability", "Cost optimization", "Security compliance"]
        },
        {
          title: "Edge Computing Solutions",
          description: "Distributed computing infrastructure for low-latency, high-performance applications",
          icon: Network,
          color: "purple",
          features: ["Low latency", "High bandwidth", "Local processing", "Global distribution"]
        }
      ]
    }
  ];

  const colorClasses: Record<ColorType, string> = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    indigo: "bg-indigo-100 text-indigo-600",
    red: "bg-red-100 text-red-600",
    cyan: "bg-cyan-100 text-cyan-600"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your business and drive innovation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, serviceIndex) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={serviceIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="p-8">
                        <div className={`w-16 h-16 ${colorClasses[service.color]} rounded-lg flex items-center justify-center mb-6`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Link 
                          href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI-powered solutions can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}