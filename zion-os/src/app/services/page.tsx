import Link from 'next/link';
import { Brain, Rocket, Shield, Globe, Zap, Users, Target, Database, Lock, Cpu, Network, BarChart3 } from 'lucide-react';

export const metadata = {
  title: "Services - Zion Tech Group",
  description: "Comprehensive AI-powered solutions including autonomous systems, business intelligence, quantum computing, and enterprise security.",
};

const services = [
  {
    icon: Brain,
    title: "AI Autonomous Systems",
    description: "Self-managing AI systems that operate independently across your business operations, from customer service to supply chain management.",
    features: ["24/7 autonomous operation", "Self-learning capabilities", "Scalable architecture", "Real-time decision making"],
    color: "blue"
  },
  {
    icon: Rocket,
    title: "Business Intelligence",
    description: "Advanced analytics and insights powered by machine learning and AI, providing actionable intelligence for strategic decision-making.",
    features: ["Predictive analytics", "Real-time dashboards", "Custom reporting", "Data visualization"],
    color: "purple"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "AI-powered security solutions protecting your digital assets and infrastructure with advanced threat detection and prevention.",
    features: ["Threat intelligence", "Behavioral analysis", "Zero-trust architecture", "Compliance automation"],
    color: "green"
  },
  {
    icon: Globe,
    title: "Quantum Computing",
    description: "Next-generation computing solutions for complex problem-solving, optimization, and cryptographic applications.",
    features: ["Quantum algorithms", "Optimization engines", "Cryptographic solutions", "Research partnerships"],
    color: "orange"
  },
  {
    icon: Zap,
    title: "AI Content Creation",
    description: "Revolutionary content generation platform that creates engaging, personalized content at scale across all channels.",
    features: ["Multi-format content", "Brand voice consistency", "SEO optimization", "Performance analytics"],
    color: "yellow"
  },
  {
    icon: Users,
    title: "AI Research Assistant",
    description: "Autonomous research capabilities that accelerate discovery and innovation across all fields and industries.",
    features: ["Literature analysis", "Data synthesis", "Hypothesis generation", "Collaboration tools"],
    color: "indigo"
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    description: "Scalable data platforms and pipelines designed for AI workloads and real-time processing requirements.",
    features: ["Data lakes", "Stream processing", "ETL automation", "Quality monitoring"],
    color: "teal"
  },
  {
    icon: Lock,
    title: "Blockchain Solutions",
    description: "Secure, transparent blockchain implementations for supply chain, identity, and financial applications.",
    features: ["Smart contracts", "Identity management", "Supply chain tracking", "DeFi solutions"],
    color: "red"
  }
];

const getColorClasses = (color: string) => {
  const colors: { [key: string]: string } = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
    indigo: "bg-indigo-100 text-indigo-600",
    teal: "bg-teal-100 text-teal-600",
    red: "bg-red-100 text-red-600"
  };
  return colors[color] || colors.blue;
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your business and drive innovation across all industries
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for implementing AI solutions that deliver measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your business needs and identify AI opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive AI implementation roadmap</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">We build and deploy your AI solutions with precision</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">We continuously improve and scale your AI systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how AI can transform your business and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}