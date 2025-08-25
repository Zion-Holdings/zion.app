import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Zap, Shield, Users, TrendingUp, Globe, Lock, CheckCircle, Star, Cpu, Database, GitBranch, Server, Monitor, Rocket, Code, Settings } from 'lucide-react';
import { SEO } from '@/components/SEO';

const CloudDevOps = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Design and deploy scalable cloud solutions on AWS, Azure, and Google Cloud.",
      icon: Cloud,
      features: ["Multi-cloud strategy", "Auto-scaling", "Load balancing", "Disaster recovery"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "CI/CD Pipelines",
      description: "Automate your development workflow with modern CI/CD tools and practices.",
      icon: GitBranch,
      features: ["GitOps workflows", "Automated testing", "Deployment automation", "Rollback strategies"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Container Orchestration",
      description: "Manage containerized applications with Kubernetes and Docker.",
      icon: Server,
      features: ["Kubernetes clusters", "Docker containers", "Service mesh", "Microservices"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Infrastructure as Code",
      description: "Define and manage infrastructure using Terraform, CloudFormation, and Ansible.",
      icon: Code,
      features: ["Terraform modules", "CloudFormation templates", "Ansible playbooks", "Version control"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and logging solutions for production environments.",
      icon: Monitor,
      features: ["Real-time monitoring", "Log aggregation", "Alerting systems", "Performance metrics"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "DevOps Consulting",
      description: "Strategic guidance for DevOps transformation and best practices.",
      icon: Users,
      features: ["Process optimization", "Tool selection", "Team training", "Culture change"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Faster Deployment",
      description: "Reduce time-to-market with automated CI/CD pipelines",
      icon: Zap,
      color: "text-green-400"
    },
    {
      title: "Improved Reliability",
      description: "Increase system uptime and reduce deployment failures",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "Cost Optimization",
      description: "Optimize cloud costs with intelligent resource management",
      icon: TrendingUp,
      color: "text-yellow-400"
    },
    {
      title: "Scalability",
      description: "Easily scale applications based on demand",
      icon: Rocket,
      color: "text-purple-400"
    }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group's DevOps implementation reduced our deployment time from days to minutes. Incredible transformation!",
      name: "David Kim",
      role: "DevOps Engineer, CloudTech Inc",
      rating: 5
    },
    {
      content: "Their cloud infrastructure design is rock-solid. We've had 99.9% uptime since implementation.",
      name: "Lisa Wang",
      role: "CTO, DataFlow Systems",
      rating: 5
    },
    {
      content: "The CI/CD pipeline they built is a game-changer. Our development team is 3x more productive now.",
      name: "James Rodriguez",
      role: "Engineering Manager, StartupHub",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Cloud & DevOps Services | Zion Tech Group"
        description="Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle."
        keywords="cloud services, DevOps, CI/CD, Kubernetes, AWS, Azure, infrastructure as code"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud & DevOps
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Accelerate Development with
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Modern DevOps
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Build, deploy, and scale applications faster with our comprehensive cloud infrastructure 
                and DevOps automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Complete DevOps Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From cloud infrastructure to continuous deployment, we provide end-to-end DevOps services 
                that modernize your development workflow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose DevOps?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover the transformative benefits of implementing modern DevOps practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Hear from teams that have transformed their development process with our DevOps solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Development Process?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Let's discuss how our DevOps solutions can accelerate your development and deployment cycles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDevOps;