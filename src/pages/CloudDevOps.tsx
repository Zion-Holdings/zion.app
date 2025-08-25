import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Cloud, 
  Cpu, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Target,
  Rocket,
  Database,
  Server,
  GitBranch,
  Monitor
} from 'lucide-react';

const CloudDevOps = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Design and deploy scalable cloud solutions on AWS, Azure, and Google Cloud Platform.",
      features: ["Multi-cloud Strategy", "Auto-scaling", "Load Balancing", "High Availability"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automate your development workflow with modern CI/CD tools and best practices.",
      features: ["Automated Testing", "Deployment Automation", "Version Control", "Release Management"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Server,
      title: "Container Orchestration",
      description: "Manage and scale containerized applications with Kubernetes and Docker.",
      features: ["Kubernetes Management", "Docker Optimization", "Service Mesh", "Microservices"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimize and maintain your databases for performance and reliability.",
      features: ["Performance Tuning", "Backup & Recovery", "Monitoring", "Scaling"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Monitor,
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring solutions for infrastructure and application performance.",
      features: ["Real-time Monitoring", "Alerting", "Log Management", "Performance Analytics"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "DevOps Security",
      description: "Integrate security into your DevOps pipeline with automated security testing.",
      features: ["Security Scanning", "Compliance", "Access Control", "Threat Detection"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Deployment",
      description: "Reduce deployment time from days to minutes with automated pipelines."
    },
    {
      icon: Target,
      title: "Improved Reliability",
      description: "Increase system uptime and reduce failures with automated testing and monitoring."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Scale your applications globally with cloud-native architecture."
    },
    {
      icon: Rocket,
      title: "Cost Optimization",
      description: "Optimize cloud costs with intelligent resource management and automation."
    }
  ];

  const testimonials = [
    {
      content: "Zion's DevOps implementation reduced our deployment time by 90% and eliminated production issues. Our team can now focus on building features instead of fixing infrastructure.",
      name: "Alex Thompson",
      role: "DevOps Engineer, TechFlow Inc.",
      rating: 5
    },
    {
      content: "The cloud migration they handled for us was seamless. We're now running more efficiently and have better disaster recovery capabilities than ever before.",
      name: "Maria Rodriguez",
      role: "IT Director, CloudFirst Solutions",
      rating: 5
    },
    {
      content: "Working with Zion on our Kubernetes implementation was excellent. They provided comprehensive training and ongoing support that made the transition smooth.",
      name: "James Wilson",
      role: "CTO, ContainerTech",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Cloud & DevOps Services - Zion Tech Group"
        description="Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle."
        keywords="cloud services, DevOps, CI/CD, Kubernetes, Docker, AWS, Azure, Google Cloud, infrastructure automation"
        canonical="https://ziontechgroup.com/cloud-devops"
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
              Cloud & DevOps
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Accelerate your development cycle with scalable cloud infrastructure, 
              automated CI/CD pipelines, and modern DevOps practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your DevOps Journey
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

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive DevOps Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            From cloud infrastructure to automated deployment, we provide end-to-end 
            DevOps solutions that transform your development workflow.
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
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
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
            Why Choose DevOps?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover the transformative benefits that modern DevOps practices can bring to your organization.
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
            Success Stories
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            See how our DevOps solutions have transformed development teams across industries.
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
              Ready to Transform Your Development Workflow?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how DevOps can accelerate your development and improve your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your DevOps Project
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

export default CloudDevOps;