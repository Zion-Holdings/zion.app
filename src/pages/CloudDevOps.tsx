import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Cpu, 
  Rocket,
  CheckCircle,
  Star,
  Target,
  Users,
  Globe,
  Lock,
  Database,
  Server,
  GitBranch,
  Docker,
  Kubernetes
} from 'lucide-react';

const CloudDevOps = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Design and implement scalable cloud infrastructure solutions",
      features: [
        "Multi-cloud strategy & design",
        "AWS, Azure, GCP expertise",
        "Cloud migration planning",
        "Cost optimization strategies",
        "High availability design",
        "Disaster recovery planning"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GitBranch,
      title: "DevOps Automation",
      description: "Streamline development and deployment processes",
      features: [
        "CI/CD pipeline automation",
        "Git workflow optimization",
        "Automated testing & deployment",
        "Infrastructure as Code (IaC)",
        "Configuration management",
        "Release management"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Docker,
      title: "Containerization",
      description: "Modernize applications with container technology",
      features: [
        "Docker containerization",
        "Kubernetes orchestration",
        "Microservices architecture",
        "Service mesh implementation",
        "Container security",
        "Performance optimization"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Manage and monitor cloud infrastructure efficiently",
      features: [
        "Infrastructure monitoring",
        "Log aggregation & analysis",
        "Performance optimization",
        "Capacity planning",
        "Security monitoring",
        "Compliance management"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure your cloud infrastructure is secure and compliant",
      features: [
        "Identity & access management",
        "Network security",
        "Data encryption",
        "Compliance frameworks",
        "Security auditing",
        "Incident response"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Build scalable data solutions in the cloud",
      features: [
        "Data warehouse design",
        "ETL pipeline development",
        "Real-time analytics",
        "Machine learning infrastructure",
        "Data governance",
        "Performance tuning"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Faster Deployment",
      description: "Reduce deployment time from weeks to hours with automated CI/CD pipelines"
    },
    {
      icon: Users,
      title: "Improved Collaboration",
      description: "Break down silos between development and operations teams"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Scale your infrastructure automatically based on demand worldwide"
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Implement security best practices from development to production"
    }
  ];

  const tools = [
    { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
    { name: "Azure", icon: "🔷", description: "Microsoft Azure" },
    { name: "GCP", icon: "🔵", description: "Google Cloud Platform" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
    { name: "Kubernetes", icon: "⚓", description: "Container orchestration" },
    { name: "Terraform", icon: "🏗️", description: "Infrastructure as Code" },
    { name: "Jenkins", icon: "🤖", description: "CI/CD automation" },
    { name: "GitLab", icon: "🦊", description: "DevOps platform" }
  ];

  const stats = [
    { label: "Cloud Projects", value: "250+", icon: Cloud },
    { label: "Deployments/Day", value: "1000+", icon: Rocket },
    { label: "Uptime", value: "99.9%", icon: CheckCircle },
    { label: "Cost Savings", value: "40%", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Cloud & DevOps Services - Zion Tech Group | Scalable Infrastructure Solutions"
        description="Transform your infrastructure with Zion Tech Group's cloud and DevOps expertise. From AWS to Kubernetes, we build scalable, secure, and efficient solutions."
        keywords="cloud computing, DevOps, AWS, Azure, GCP, Kubernetes, Docker, CI/CD, infrastructure as code"
        canonical="https://ziontechgroup.com/cloud-devops"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-blue-light opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-blue-light bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Build, deploy, and scale your applications with enterprise-grade cloud infrastructure 
              and automated DevOps practices that drive innovation and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue-light text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Cloud & DevOps Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From cloud architecture design to automated deployment pipelines, 
              we provide end-to-end solutions that modernize your infrastructure.
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
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
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

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry-Leading Tools & Platforms
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We leverage the best tools and technologies to build robust, 
              scalable, and secure cloud infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{tool.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-zion-slate-light">{tool.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cloud & DevOps Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We don't just manage infrastructure - we transform your entire 
              development and operations workflow for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already transformed their 
              operations with our cloud and DevOps expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;