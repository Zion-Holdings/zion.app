import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Shield, Users, Globe, 
  Star, CheckCircle, TrendingUp, Infinity, 
  Eye, Sparkles, Clock, Zap, Heart,
  Lightbulb, Award, Lock, Rocket
} from 'lucide-react';

const ValuesPage: React.FC = () => {
  const coreValues = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We believe that innovation is the driving force behind progress. Every solution we create, every service we offer, and every decision we make is guided by our commitment to pushing the boundaries of what's possible.",
      longDescription: "Innovation isn't just about creating new technology—it's about reimagining how technology can serve humanity. We invest heavily in research and development, encourage creative thinking, and maintain a culture where bold ideas are celebrated and nurtured. Our team is constantly exploring emerging technologies, from quantum computing to AI consciousness, to ensure we stay at the forefront of technological advancement.",
      color: "from-blue-500 to-cyan-500",
      examples: [
        "Pioneering AI consciousness evolution",
        "Developing quantum-resistant cybersecurity",
        "Creating autonomous business intelligence systems",
        "Advancing space technology applications"
      ]
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "We hold ourselves to the highest standards of quality and performance. Excellence is not just a goal—it's our foundation, ensuring that every deliverable exceeds expectations.",
      longDescription: "Excellence permeates every aspect of our work. From the initial client consultation to the final implementation and ongoing support, we maintain rigorous quality standards. Our development processes include comprehensive testing, peer reviews, and continuous improvement cycles. We believe that excellence is achieved through attention to detail, continuous learning, and an unwavering commitment to delivering the best possible outcomes for our clients.",
      color: "from-emerald-500 to-teal-500",
      examples: [
        "99.99% uptime guarantees",
        "Comprehensive quality assurance processes",
        "Continuous performance optimization",
        "Rigorous security testing protocols"
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe that the best solutions emerge from diverse perspectives working together. Collaboration is at the heart of our approach, both internally and with our clients.",
      longDescription: "Collaboration is more than just working together—it's about creating an environment where different viewpoints, skills, and experiences can combine to produce extraordinary results. We foster a culture of open communication, mutual respect, and shared ownership. Our teams work closely with clients to understand their unique challenges and co-create solutions that truly address their needs. We believe that the best outcomes come from partnerships built on trust, transparency, and shared goals.",
      color: "from-purple-500 to-pink-500",
      examples: [
        "Cross-functional team collaboration",
        "Client partnership approach",
        "Open knowledge sharing",
        "Community-driven development"
      ]
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're committed to creating positive change that extends beyond individual clients to benefit industries, communities, and society as a whole.",
      longDescription: "Our vision extends beyond business success to creating meaningful impact on a global scale. We develop solutions that address real-world challenges, from climate change to healthcare accessibility. We believe that technology should be a force for good, improving lives and creating opportunities for people around the world. Our commitment to global impact drives us to think beyond immediate business needs and consider the long-term implications of our work.",
      color: "from-indigo-500 to-purple-500",
      examples: [
        "Sustainable technology solutions",
        "Healthcare accessibility improvements",
        "Educational technology advancements",
        "Environmental impact reduction"
      ]
    }
  ];

  const additionalPrinciples = [
    {
      icon: Lock,
      title: "Integrity & Trust",
      description: "We operate with complete transparency and honesty, building lasting relationships based on trust and mutual respect."
    },
    {
      icon: Heart,
      title: "Empathy & Understanding",
      description: "We deeply understand our clients' challenges and design solutions that truly address their needs and aspirations."
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description: "We never stop learning, evolving, and improving, both as individuals and as an organization."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "We approach challenges with creativity and innovation, finding unique solutions to complex problems."
    }
  ];

  const impactMetrics = [
    { number: "1000+", label: "Innovations Delivered", icon: Zap },
    { number: "99.99%", label: "Client Satisfaction", icon: Star },
    { number: "200+", label: "Countries Impacted", icon: Globe },
    { number: "24/7", label: "Global Support", icon: Clock }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Core Values
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                What Drives Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our values are more than words on a page—they're the principles that guide every decision, 
                every action, and every solution we create at Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4">
                    <metric.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</div>
                  <div className="text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mr-6`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{value.title}</h2>
                    </div>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">{value.description}</p>
                    <p className="text-gray-400 mb-6 leading-relaxed">{value.longDescription}</p>
                    <div className="space-y-3">
                      {value.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                    <div className={`w-full h-64 rounded-xl bg-gradient-to-r ${value.color} opacity-20`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Principles */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Additional Principles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond our core values, these principles guide our daily operations and decision-making
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <principle.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Living Our Values */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Living Our Values
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our values aren't just statements—they're lived experiences that shape our culture, 
                guide our decisions, and inspire our team to achieve extraordinary results.
              </p>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">For Our Team</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Continuous learning and development opportunities</li>
                      <li>• Collaborative and inclusive work environment</li>
                      <li>• Recognition and celebration of achievements</li>
                      <li>• Work-life balance and wellness support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">For Our Clients</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Transparent communication and honest feedback</li>
                      <li>• Dedicated support and ongoing partnership</li>
                      <li>• Innovative solutions tailored to unique needs</li>
                      <li>• Long-term success and growth focus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ValuesPage;