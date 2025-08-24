import React from 'react';
// Removed Next.js import - using React instead
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Globe, 
  Zap, 
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions that transform your business operations and decision-making processes.",
      features: [
        "Custom AI model development",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions",
        "AI-powered automation"
      ],
      price: "From $25K",
      category: "AI/ML"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that optimize performance, reduce costs, and ensure business continuity.",
      features: [
        "Cloud migration & optimization",
        "Multi-cloud strategies",
        "Serverless architecture",
        "DevOps automation",
        "Performance optimization"
      ],
      price: "From $15K",
      category: "Infrastructure"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions that protect your digital assets and ensure compliance.",
      features: [
        "Threat detection & response",
        "Security audits & assessments",
        "Compliance management",
        "Incident response",
        "Security training"
      ],
      price: "From $20K",
      category: "Security"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions that address your unique business challenges and requirements.",
      features: [
        "Web applications",
        "Mobile apps",
        "Enterprise software",
        "API development",
        "System integration"
      ],
      price: "From $30K",
      category: "Development"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive strategic decision-making.",
      features: [
        "Business intelligence",
        "Data warehousing",
        "Real-time analytics",
        "Data visualization",
        "Predictive modeling"
      ],
      price: "From $18K",
      category: "Analytics"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services that modernize your business operations.",
      features: [
        "Process optimization",
        "Technology assessment",
        "Change management",
        "Legacy system modernization",
        "Digital strategy consulting"
      ],
      price: "From $50K",
      category: "Consulting"
    }
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Government",
    "Technology",
    "Energy"
  ];

  const technologies = [
    "React & Next.js",
    "Python & TensorFlow",
    "AWS & Azure",
    "Kubernetes & Docker",
    "PostgreSQL & MongoDB",
    "GraphQL & REST APIs"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs, current systems, and objectives to create a tailored solution strategy."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our experts design the solution architecture and create a detailed implementation plan with timelines."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment followed by ongoing support, maintenance, and optimization services."
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Comprehensive technology solutions that drive innovation, efficiency, and growth for your business
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  AI-Powered Solutions
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Enterprise Security
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Cloud-Native Architecture
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                End-to-end technology services designed to transform your business and drive sustainable growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 backdrop-blur-xl hover:from-white/10 hover:to-white/15 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                    <a
                      href="/contact"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                We have deep expertise across multiple industries and understand the unique challenges each sector faces
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 p-6 backdrop-blur-xl text-center hover:from-white/10 hover:to-white/15 transition-all duration-300"
                >
                  <div className="text-white/90 font-medium">{industry}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                We leverage cutting-edge technologies and frameworks to build robust, scalable, and future-proof solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 p-6 backdrop-blur-xl text-center hover:from-white/10 hover:to-white/15 transition-all duration-300"
                >
                  <div className="text-white/90 font-medium">{tech}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value for your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
                <p className="text-white/70 text-sm">500+ successful projects delivered across various industries with 99.9% client satisfaction.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-white/70 text-sm">Experienced professionals with deep expertise in AI, cloud, security, and emerging technologies.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
                <p className="text-white/70 text-sm">Future-proof solutions that grow with your business and adapt to changing requirements.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Delivery</h3>
                <p className="text-white/70 text-sm">Agile development methodologies that ensure rapid delivery without compromising quality.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-white/70 text-sm">Bank-level security measures and compliance standards built into every solution.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation Focus</h3>
                <p className="text-white/70 text-sm">Cutting-edge technologies and innovative approaches that give you a competitive advantage.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and explore how our innovative solutions can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center space-x-2 border border-white/20 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
                >
                  <span>Learn More</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
