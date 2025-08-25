import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Zap, Shield, Cpu, Database, Globe, Lock, CheckCircle, Star, ArrowRight, TrendingUp, Users } from 'lucide-react';
import { SEO } from '@/components/SEO';

const cloudServices = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions built on AWS, Azure, and Google Cloud platforms.",
    icon: Cloud,
    features: ["Multi-cloud Strategy", "Auto-scaling", "Load Balancing", "High Availability"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "DevOps Automation",
    description: "Streamline development and deployment with CI/CD pipelines and automation tools.",
    icon: Zap,
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Container Orchestration",
    description: "Kubernetes and Docker solutions for scalable containerized applications.",
    icon: Cpu,
    features: ["Kubernetes Management", "Docker Optimization", "Service Mesh", "Microservices"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Database Solutions",
    description: "Managed database services with high performance and reliability.",
    icon: Database,
    features: ["Database Migration", "Performance Tuning", "Backup & Recovery", "Monitoring"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions and compliance management.",
    icon: Shield,
    features: ["Security Audits", "Compliance Frameworks", "Threat Detection", "Access Control"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Global CDN & Edge",
    description: "Content delivery networks for optimal global performance.",
    icon: Globe,
    features: ["Edge Computing", "Global Distribution", "Performance Optimization", "DDoS Protection"],
    color: "from-yellow-500 to-orange-500"
  }
];

const testimonials = [
  {
    content: "Zion's cloud infrastructure reduced our deployment time from days to hours. Their DevOps expertise is unmatched.",
    name: "Alex Thompson",
    role: "DevOps Engineer, CloudCorp",
    rating: 5
  },
  {
    content: "The automated CI/CD pipeline they built for us has eliminated deployment errors and improved our release velocity.",
    name: "Maria Santos",
    role: "Engineering Manager, TechFlow",
    rating: 5
  },
  {
    content: "Working with Zion transformed our cloud strategy. We now have a scalable, secure, and cost-effective infrastructure.",
    name: "David Chen",
    role: "CTO, StartupHub",
    rating: 5
  }
];

const stats = [
  { label: "Cloud Deployments", value: "500+", icon: Cloud },
  { label: "Uptime SLA", value: "99.99%", icon: Shield },
  { label: "Cost Reduction", value: "40%", icon: TrendingUp },
  { label: "Deployment Speed", value: "10x Faster", icon: Zap }
];

export default function CloudDevOps() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Cloud & DevOps Services - Zion Tech Group" 
        description="Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle."
        keywords="cloud computing, DevOps, CI/CD, Kubernetes, Docker, AWS, Azure, Google Cloud, automation"
        canonical="https://ziontechgroup.com/cloud-devops"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Cloud & DevOps
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Accelerate your development cycle with scalable cloud infrastructure, automated CI/CD pipelines, 
              and cutting-edge DevOps practices that drive innovation and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your Cloud Journey
              </motion.button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Free Assessment
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan/20 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)]"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
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

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our Cloud & DevOps Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive cloud infrastructure and DevOps solutions designed to accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our DevOps Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful cloud transformation and DevOps implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate current infrastructure and identify optimization opportunities" },
              { step: "02", title: "Strategy", description: "Develop comprehensive cloud and DevOps transformation roadmap" },
              { step: "03", title: "Implementation", description: "Execute migration and automation with best practices" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and performance improvement" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-zion-slate-light">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              See how we've helped organizations transform their cloud and DevOps practices.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ready to Accelerate Your Development?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your development workflow with our cloud and DevOps solutions that deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Start Your Transformation
                </motion.button>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}