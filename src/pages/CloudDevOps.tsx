import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Cloud, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Server,
  Network,
  Code,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudDevOps = () => {
  const services = [
    {
      icon: Cloud,
      title: "Multi-Cloud Infrastructure Management",
      description: "Comprehensive multi-cloud infrastructure management with automated provisioning and cost optimization.",
      features: ["Multi-cloud orchestration", "Automated provisioning", "Cost optimization", "Performance monitoring"],
      price: "From $95,000",
      complexity: "Enterprise",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Kubernetes & Container Orchestration",
      description: "Enterprise-grade Kubernetes deployment and management with advanced monitoring and scaling.",
      features: ["Kubernetes deployment", "Auto-scaling", "Service mesh", "Monitoring & alerting"],
      price: "From $75,000",
      complexity: "Advanced",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "CI/CD Pipeline Automation",
      description: "End-to-end CI/CD pipeline automation for faster, more reliable software delivery.",
      features: ["Pipeline automation", "Testing integration", "Deployment automation", "Rollback capabilities"],
      price: "From $55,000",
      complexity: "Mid-Size",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Server,
      title: "Serverless Architecture Solutions",
      description: "Modern serverless architecture design and implementation for scalable applications.",
      features: ["Function design", "Event-driven architecture", "Auto-scaling", "Cost optimization"],
      price: "From $65,000",
      complexity: "Advanced",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Settings,
      title: "Infrastructure as Code (IaC)",
      description: "Infrastructure automation using code for consistent, repeatable deployments.",
      features: ["Terraform modules", "Ansible playbooks", "Version control", "Environment management"],
      price: "From $45,000",
      complexity: "Mid-Size",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Database & Storage Solutions",
      description: "Scalable database design, migration, and optimization for cloud environments.",
      features: ["Database migration", "Performance tuning", "Backup strategies", "Disaster recovery"],
      price: "From $35,000",
      complexity: "Mid-Size",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Scalability & Performance",
      description: "Build systems that automatically scale with your business needs and deliver optimal performance."
    },
    {
      icon: Award,
      title: "Cost Optimization",
      description: "Reduce infrastructure costs through intelligent resource management and automation."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy applications worldwide with multi-region cloud infrastructure."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance frameworks and best practices."
    }
  ];

  const stats = [
    { label: "Cloud Projects Delivered", value: "200+", icon: CheckCircle },
    { label: "Infrastructure Managed", value: "500+", icon: Server },
    { label: "Cost Reduction", value: "35%", icon: Star },
    { label: "Deployment Speed", value: "10x", icon: Zap }
  ];

  const technologies = [
    { name: "AWS", icon: "☁️", category: "Cloud Providers" },
    { name: "Azure", icon: "☁️", category: "Cloud Providers" },
    { name: "Google Cloud", icon: "☁️", category: "Cloud Providers" },
    { name: "Kubernetes", icon: "⚙️", category: "Containerization" },
    { name: "Docker", icon: "🐳", category: "Containerization" },
    { name: "Terraform", icon: "🏗️", category: "Infrastructure" },
    { name: "Ansible", icon: "🔧", category: "Automation" },
    { name: "Jenkins", icon: "🚀", category: "CI/CD" },
    { name: "GitLab CI", icon: "📦", category: "CI/CD" },
    { name: "Prometheus", icon: "📊", category: "Monitoring" },
    { name: "Grafana", icon: "📈", category: "Monitoring" },
    { name: "Istio", icon: "🔄", category: "Service Mesh" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Cloud & DevOps Solutions - Zion Tech Group"
        description="Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle."
        keywords="cloud services, DevOps, AWS, Azure, Kubernetes, CI/CD, infrastructure as code, Zion Tech Group"
        canonical="https://ziontechgroup.com/cloud-devops"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-blue-light opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue-light to-zion-blue bg-clip-text text-transparent">
                Cloud & DevOps
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions 
              that accelerate your development cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Cloud & DevOps Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to modernize your infrastructure and accelerate development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      service.complexity === 'Enterprise' ? 'bg-red-500/20 text-red-400' :
                      service.complexity === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {service.complexity}
                    </span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expert-level proficiency in leading cloud and DevOps technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-zion-slate-light">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cloud & DevOps Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of modern, scalable, and secure infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our cloud and DevOps solutions can accelerate your development and reduce costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;