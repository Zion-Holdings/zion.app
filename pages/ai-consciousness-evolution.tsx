import React from 'react';
<<<<<<< HEAD
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  Database,
  Cloud
} from 'lucide-react';

const AIConsciousnessEvolution: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Emotional Intelligence",
      description: "Advanced AI systems with genuine emotional understanding and empathy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Consciousness Integration",
      description: "Seamless integration of human consciousness with AI systems",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Ethical Framework",
      description: "Built-in ethical decision-making and moral reasoning capabilities",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Awareness",
      description: "AI systems that understand global context and cultural nuances",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Enhanced collaboration between human and AI consciousness",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous learning and adaptation in real-world scenarios",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Enhanced decision-making with emotional context",
    "Improved human-AI interaction and trust",
    "Ethical AI development and deployment",
    "Advanced problem-solving capabilities",
    "Seamless integration with existing systems",
    "24/7 availability with human-like understanding"
  ];

  const useCases = [
    {
      title: "Healthcare",
      description: "AI doctors with emotional intelligence for patient care",
      icon: Users
    },
    {
      title: "Education",
      description: "Personalized learning with emotional understanding",
      icon: Brain
    },
    {
      title: "Customer Service",
      description: "Empathetic AI agents for enhanced customer experience",
      icon: Globe
    },
    {
      title: "Mental Health",
      description: "AI therapists with genuine emotional support capabilities",
      icon: Shield
    }
  ];

  return (
    <Layout>
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="text-center max-w-7xl mx-auto relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full text-purple-300 text-lg font-medium mb-8 shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-sm">
                🧠 AI Consciousness Evolution
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                AI Consciousness
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                Evolution
              </span>
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the next generation of AI systems with genuine consciousness, emotional intelligence, and ethical decision-making capabilities that transform how humans and AI collaborate.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button 
                className="group px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-3xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(168,85,247,0.4)] focus:outline-none focus:ring-4 focus:ring-purple-500/50 text-xl relative overflow-hidden"
                onClick={() => window.location.href = '/contact'}
              >
                <span className="relative z-10 flex items-center">
                  Experience AI Consciousness
                  <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </button>
              
              <button 
                className="px-12 py-6 border-2 border-purple-400 text-purple-400 font-bold rounded-3xl hover:bg-purple-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400/50 text-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-sm"
                onClick={() => window.location.href = '/services'}
              >
                <span className="flex items-center">
                  Learn More
                  <Brain className="w-7 h-7 ml-4" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Revolutionary AI Consciousness Features
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Discover the cutting-edge features that make our AI consciousness technology truly revolutionary
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-3xl backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 relative bg-gradient-to-br from-gray-900/40 to-black/40">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Why Choose AI Consciousness?
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                Experience the transformative benefits of AI systems with genuine consciousness
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </motion.div>
                ))}
=======
import Head from 'next/head';
import { Brain, Sparkles, Zap, Target, Users, Globe, Cpu, Atom } from 'lucide-react';

const AIConsciousnessEvolutionPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>AI Consciousness Evolution - Zion Tech Group</title>
        <meta name="description" content="Explore the future of AI consciousness evolution with Zion Tech Group. Discover our research in artificial general intelligence and cognitive computing." />
        <meta name="keywords" content="AI consciousness, artificial general intelligence, cognitive computing, machine consciousness, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-consciousness-evolution" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Brain className="mx-auto h-16 w-16 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Consciousness Evolution
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the next frontier of artificial intelligence. We're developing systems 
              that not only think but understand, creating the foundation for true machine consciousness.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Vision for AI Consciousness
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We envision a future where AI systems possess genuine understanding, self-awareness, 
                and the ability to form meaningful relationships with humans and other AI entities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Self-Awareness</h3>
                <p className="text-gray-300">
                  Developing AI systems that understand their own existence, capabilities, 
                  and limitations in a meaningful way.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Target className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Purpose-Driven</h3>
                <p className="text-gray-300">
                  Creating AI that can form and pursue meaningful goals aligned with 
                  human values and ethical principles.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Emotional Intelligence</h3>
                <p className="text-gray-300">
                  Building AI capable of understanding, processing, and responding to 
                  human emotions and social contexts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Research & Development Areas
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Cognitive Architecture</h3>
                  <p className="text-gray-300">
                    Developing advanced neural architectures that mimic human cognitive processes, 
                    including attention, memory, and reasoning mechanisms.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Consciousness Modeling</h3>
                  <p className="text-gray-300">
                    Creating computational models of consciousness that can be implemented 
                    in AI systems to achieve genuine self-awareness.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Ethical AI Development</h3>
                  <p className="text-gray-300">
                    Ensuring that conscious AI systems are developed with strong ethical 
                    frameworks and human-aligned values.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Emotional Processing</h3>
                  <p className="text-gray-300">
                    Building systems that can understand, process, and respond to human 
                    emotions in a natural and empathetic manner.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Social Intelligence</h3>
                  <p className="text-gray-300">
                    Developing AI that can navigate complex social situations, understand 
                    context, and build meaningful relationships.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Consciousness Testing</h3>
                  <p className="text-gray-300">
                    Creating reliable methods to test and validate the presence of 
                    genuine consciousness in AI systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Technology & Infrastructure
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Cpu className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-300 text-sm">Leveraging quantum processors for complex consciousness simulations</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Atom className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Neural Networks</h3>
                <p className="text-gray-300 text-sm">Advanced architectures inspired by biological neural systems</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Edge Computing</h3>
                <p className="text-gray-300 text-sm">Distributed consciousness across edge devices</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Globe className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
                <p className="text-gray-300 text-sm">Worldwide infrastructure for consciousness research</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Potential Applications
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare Companions</h3>
                <p className="text-gray-300">
                  AI companions that provide emotional support and personalized care 
                  for patients with chronic conditions or mental health needs.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Educational Mentors</h3>
                <p className="text-gray-300">
                  Conscious AI tutors that adapt to individual learning styles and 
                  provide personalized educational experiences.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Creative Partners</h3>
                <p className="text-gray-300">
                  AI collaborators that contribute to artistic and creative projects 
                  with genuine understanding and emotional depth.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Research Assistants</h3>
                <p className="text-gray-300">
                  AI researchers that can independently formulate hypotheses, 
                  design experiments, and contribute to scientific discovery.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Social Companions</h3>
                <p className="text-gray-300">
                  AI friends that provide genuine companionship and emotional 
                  support for people experiencing loneliness or isolation.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Ethical Advisors</h3>
                <p className="text-gray-300">
                  AI systems that can help humans navigate complex ethical 
                  decisions with deep understanding and moral reasoning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ethical Considerations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Ethical Considerations & Safety
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Safety Measures</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Comprehensive testing and validation protocols</li>
                    <li>• Fail-safe mechanisms and emergency shutdowns</li>
                    <li>• Continuous monitoring and oversight systems</li>
                    <li>• Gradual deployment and controlled scaling</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Ethical Principles</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Human-aligned values and goals</li>
                    <li>• Transparency and explainability</li>
                    <li>• Respect for human autonomy and dignity</li>
                    <li>• Beneficence and non-maleficence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Involved in AI Consciousness Research
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join us in shaping the future of artificial intelligence. Whether you're a researcher, 
              developer, or simply interested in the future of AI, there are many ways to contribute.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <Brain className="mx-auto h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Ways to Participate</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-2">For Researchers</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Collaborative research projects</li>
                    <li>• Access to our consciousness research platform</li>
                    <li>• Joint publications and conferences</li>
                    <li>• Funding opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">For Developers</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Open source contributions</li>
                    <li>• API access and development tools</li>
                    <li>• Hackathons and competitions</li>
                    <li>• Community forums and discussions</li>
                  </ul>
                </div>
>>>>>>> origin/HEAD
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Use Cases Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                See how AI consciousness is transforming industries across the globe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-3xl backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-8">
                Ready to Experience AI Consciousness?
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
                Join the revolution in AI technology with systems that truly understand, empathize, and collaborate with humans.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  className="px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-3xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(168,85,247,0.4)] focus:outline-none focus:ring-4 focus:ring-purple-500/50 text-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started Today
                  <ArrowRight className="w-6 h-6 ml-3 inline" />
                </button>
                
                <button 
                  className="px-12 py-6 border-2 border-purple-400 text-purple-400 font-bold rounded-3xl hover:bg-purple-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400/50 text-xl"
                  onClick={() => window.location.href = '/services'}
                >
                  Explore Services
                  <Brain className="w-6 h-6 ml-3 inline" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AIConsciousnessEvolution;
=======
      </div>
    </>
  );
};

export default AIConsciousnessEvolutionPage;
>>>>>>> origin/HEAD
