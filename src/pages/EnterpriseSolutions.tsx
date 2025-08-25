import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Cpu, 
  Users, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Target,
  Rocket,
  Database,
  Server,
  Lock,
  Building2
} from 'lucide-react';

const EnterpriseSolutions = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Comprehensive security solutions including threat detection, data protection, and compliance management.",
      features: ["Threat Detection", "Data Protection", "Compliance Management", "Identity Access Control"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Building2,
      title: "Digital Transformation",
      description: "End-to-end business modernization solutions that drive innovation and competitive advantage.",
      features: ["Process Optimization", "Technology Integration", "Change Management", "Performance Monitoring"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Enterprise-grade data solutions for storage, analytics, and business intelligence.",
      features: ["Data Warehousing", "Business Intelligence", "Data Analytics", "Data Governance"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Enterprise Applications",
      description: "Custom enterprise software solutions designed for large-scale business operations.",
      features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Integration Services"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Scalable and reliable infrastructure solutions for enterprise environments.",
      features: ["Server Management", "Network Infrastructure", "Cloud Migration", "Disaster Recovery"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Lock,
      title: "Compliance & Governance",
      description: "Ensure regulatory compliance and maintain governance standards across your organization.",
      features: ["Regulatory Compliance", "Risk Management", "Audit Support", "Policy Implementation"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "Solutions that grow with your business and handle increased workloads efficiently."
    },
    {
      icon: Target,
      title: "Risk Mitigation",
      description: "Reduce business risks through comprehensive security and compliance measures."
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Support for multi-location and international business operations."
    },
    {
      icon: Rocket,
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge technology solutions."
    }
  ];

  const testimonials = [
    {
      content: "Zion's enterprise security implementation has given us peace of mind. Their comprehensive approach to threat detection and compliance has exceeded our expectations.",
      name: "Robert Chen",
      role: "CISO, GlobalTech Corporation",
      rating: 5
    },
    {
      content: "The digital transformation project they led for us has revolutionized our operations. We've seen a 40% improvement in efficiency and significant cost savings.",
      name: "Lisa Anderson",
      role: "VP of Technology, Enterprise Solutions Inc.",
      rating: 5
    },
    {
      content: "Working with Zion on our enterprise application development was seamless. They understood our complex requirements and delivered a solution that perfectly fits our needs.",
      name: "Michael Rodriguez",
      role: "IT Director, Fortune 500 Company",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive business technology solutions including enterprise security, digital transformation, and custom enterprise applications."
        keywords="enterprise solutions, enterprise security, digital transformation, enterprise applications, compliance, governance"
        canonical="https://ziontechgroup.com/enterprise-solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-cyan opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Comprehensive business technology solutions designed for enterprise environments, 
              ensuring security, compliance, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Enterprise Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            From security to transformation, we provide comprehensive solutions 
            that address the unique challenges of enterprise environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Enterprise Solutions?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover the strategic advantages that enterprise-grade solutions can bring to your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Enterprise Success Stories
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            See how our enterprise solutions have transformed large organizations across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                ))}
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-zion-cyan text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can drive innovation and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Enterprise Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default EnterpriseSolutions;