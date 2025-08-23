import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe, Send, Building, Users, Rocket, Brain, Atom } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+1 302 464 0950",
      description: "Call us directly",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      description: "Send us a message",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Address",
      value: "364 E Main St STE 1008 Middletown DE 19709",
      description: "Visit our office",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      value: "24/7 Support",
      description: "Always available",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const departments = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Consciousness",
      description: "AI consciousness and emotional intelligence",
      contact: "ai@ziontechgroup.com"
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Technology",
      description: "Quantum computing and cybersecurity",
      contact: "quantum@ziontechgroup.com"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Space Technology",
      description: "Space exploration and resource intelligence",
      contact: "space@ziontechgroup.com"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Business Solutions",
      description: "Enterprise and business intelligence",
      contact: "business@ziontechgroup.com"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Contact Zion Tech Group | Get in Touch"
        description="Contact Zion Tech Group for revolutionary AI consciousness, quantum computing, and cutting-edge technology solutions. Get in touch with our expert team."
        keywords={["contact Zion Tech Group", "AI consciousness", "quantum computing", "technology solutions", "get in touch"]}
        canonical="https://ziontechgroup.com/contact"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                the Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Ready to revolutionize your business with AI consciousness, quantum computing, 
              and cutting-edge technology? Let's start a conversation.
            </p>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contact Methods
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach our revolutionary technology team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${method.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{method.title}</h3>
                  <p className="text-lg font-medium mb-2 text-gray-200">{method.value}</p>
                  <p className="text-gray-300">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative bg-gradient-to-r from-cyan-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Send Us a Message
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your project and how we can help revolutionize your business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Specialized Departments
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect directly with our specialized teams for specific technology areas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{dept.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{dept.description}</p>
                  <a 
                    href={`mailto:${dept.contact}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    {dept.contact}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-20 relative bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Visit Our Office
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our revolutionary technology firsthand at our headquarters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">
                Zion Tech Group Headquarters
              </h3>
              <div className="space-y-4 text-lg text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span>364 E Main St STE 1008</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-cyan-400" />
                  <span>Middletown, DE 19709</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <span>United States</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <span>24/7 Innovation Hub</span>
                </div>
              </div>
              <p className="mt-6 text-gray-300">
                Our headquarters serves as the epicenter of revolutionary technology development, 
                where AI consciousness, quantum computing, and space technology converge to create 
                the future of human progress.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Building className="w-32 h-32 text-cyan-400 mx-auto mb-4" />
                  <p className="text-cyan-300 text-lg">Revolutionary Technology Hub</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-3xl p-12"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Start?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our revolutionary technology can transform your business 
              and accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
