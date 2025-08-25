


import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import { 
  Brain, 
  Code, 
  Zap, 
  Shield, 
  Clock, 
  Star,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Users
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that transforms your business operations and drives growth.",
      color: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Advanced IT Services",
      description: "Comprehensive technology infrastructure that ensures reliability, security, and scalability.",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Micro SAAS Platform",
      description: "Scalable software solutions designed for modern businesses, from startups to enterprises.",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: "Quantum-Ready Security",
      description: "Future-proof cybersecurity solutions that protect against current and emerging threats.",
      color: "from-orange-500/20 to-orange-600/20"
    }
  ];

  const stats = [
    { number: "500+", label: "Services Delivered", icon: CheckCircle },
    { number: "50+", label: "AI Solutions", icon: Brain },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "99.9%", label: "Uptime Guarantee", icon: Star }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "The micro SAAS platform they built for us is exactly what we needed. Scalable, reliable, and cost-effective.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, HealthTech",
      content: "Their cybersecurity solutions are top-notch. We feel completely protected against modern threats.",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current state, understand your goals, and identify opportunities for improvement."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive roadmap with clear milestones, deliverables, and success metrics."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with expert guidance, regular updates, and quality assurance checks."
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, performance optimization, and ongoing support for long-term success."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group-hover:scale-105 h-full`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                
                {/* Connector Line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent transform translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect technology solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3">
                <TrendingUp className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Users className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | 
              <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
