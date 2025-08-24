
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe, Zap, Brain, Shield, Cloud, Code, BarChart3, Rocket, CheckCircle, Play, Target, Clock, DollarSign, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export function Home() {
  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI algorithms",
      icon: Brain,
      color: "from-zion-cyan to-zion-purple",
      features: ["Real-time processing", "Predictive analytics", "Custom dashboards"]
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      description: "Protect your business with enterprise-grade security infrastructure",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan",
      features: ["24/7 monitoring", "Threat detection", "Compliance ready"]
    },
    {
      id: 3,
      title: "Cloud Migration",
      description: "Seamlessly migrate to the cloud with zero downtime",
      icon: Cloud,
      color: "from-zion-cyan to-zion-purple",
      features: ["Automated migration", "Cost optimization", "Performance tuning"]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-zion-cyan" },
    { icon: Award, value: "50+", label: "Awards Won", color: "text-zion-purple" },
    { icon: Globe, value: "25+", label: "Countries Served", color: "text-zion-cyan" },
    { icon: Zap, value: "99.9%", label: "Uptime", color: "text-zion-purple" }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Every solution is powered by cutting-edge artificial intelligence",
      color: "text-zion-cyan"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols protect your data and systems",
      color: "text-zion-purple"
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Grow without limits with our cloud-native architecture",
      color: "text-zion-cyan"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions built specifically for your business needs",
      color: "text-zion-purple"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Turn your data into strategic insights and competitive advantages",
      color: "text-zion-cyan"
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Get your solutions up and running in record time",
      color: "text-zion-purple"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "The cybersecurity implementation was seamless. We feel completely protected and confident in our systems.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTech",
      content: "Outstanding service and support. The team at Zion Tech Group goes above and beyond every time.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Proven Results",
      description: "Track record of delivering measurable business outcomes",
      color: "text-zion-cyan"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
      color: "text-zion-purple"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Competitive pricing with maximum value delivery",
      color: "text-zion-cyan"
    },
    {
      icon: ShieldCheck,
      title: "Reliable Support",
      description: "24/7 technical support and maintenance services",
      color: "text-zion-purple"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 302 464 0950",
      description: "Available 24/7 for urgent matters",
      color: "text-zion-cyan"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "kleber@ziontechgroup.com",
      description: "Get a response within 2 hours",
      color: "text-zion-purple"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      description: "Schedule an in-person meeting",
      color: "text-zion-cyan"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/services"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <Play className="w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-zion-slate-light text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most popular and innovative solutions that are transforming businesses across industries
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredServices.map((service) => (
              <motion.div 
                key={service.id} 
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300 group-hover:translate-x-1"
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className={`w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zion-blue-dark/30 rounded-3xl mx-4 lg:mx-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our unique approach and commitment to excellence make us the preferred choice for technology solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've transformed
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to transform your business? We're here to help you succeed
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className={`w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-10 h-10 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{method.title}</h3>
                <p className="text-zion-cyan font-semibold mb-2">{method.value}</p>
                <p className="text-zion-slate-light text-sm leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 border border-zion-cyan/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have already transformed their operations with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
