import React from 'react';
import { NextPage } from 'next';
import { HelpCircle, MessageCircle, Phone, Mail, BookOpen, Video, Users, ArrowRight, CheckCircle, Star, Zap, Target } from 'lucide-react';

const Support: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get the help you need with our revolutionary AI consciousness, quantum computing, and space technology solutions. 
              Our expert team is here to support you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support option that best fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Live Chat Support",
                description: "Get instant help from our AI-powered support team with real-time assistance.",
                color: "from-blue-500 to-cyan-500",
                action: "Start Chat"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone Support",
                description: "Speak directly with our technology experts for complex technical issues.",
                color: "from-green-500 to-emerald-500",
                action: "Call Now"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Support",
                description: "Send us detailed information and get comprehensive responses within hours.",
                color: "from-purple-500 to-pink-500",
                action: "Send Email"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Documentation",
                description: "Access comprehensive guides, tutorials, and technical documentation.",
                color: "from-indigo-500 to-purple-500",
                action: "Browse Docs"
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Video Tutorials",
                description: "Learn through step-by-step video guides and training materials.",
                color: "from-red-500 to-pink-500",
                action: "Watch Videos"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Forum",
                description: "Connect with other users and share solutions in our community.",
                color: "from-yellow-500 to-orange-500",
                action: "Join Community"
              }
            ].map((option, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{option.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{option.description}</p>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about our revolutionary technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is AI Consciousness Evolution?",
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self-aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence."
              },
              {
                question: "How does Quantum Neural Ecosystem work?",
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power."
              },
              {
                question: "What makes Space Resource Intelligence unique?",
                answer: "Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization."
              },
              {
                question: "How secure is your Quantum Cybersecurity platform?",
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations."
              },
              {
                question: "Can I integrate your AI with my existing systems?",
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure."
              },
              {
                question: "What support do you offer for enterprise deployments?",
                answer: "We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our support team is ready to help you with any questions or technical issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone Support",
                contact: "+1 302 464 0950",
                availability: "24/7",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Support",
                contact: "kleber@ziontechgroup.com",
                availability: "Response within 4 hours",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Live Chat",
                contact: "Available on website",
                availability: "24/7",
                color: "from-purple-500 to-pink-500"
              }
            ].map((method, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} p-4 mb-4 mx-auto`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{method.title}</h3>
                <p className="text-gray-300 mb-2">{method.contact}</p>
                <p className="text-sm text-gray-400">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Need More Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is here to ensure you get the most out of our revolutionary technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-xl hover:bg-orange-400 hover:text-black transition-all duration-300">
              Browse Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;