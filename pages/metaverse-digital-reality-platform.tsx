import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import { Globe, Eye, Users, Cpu, Sparkles, Zap, CheckCircle, ArrowRight, Monitor } from 'lucide-react';

export default function MetaverseDigitalRealityPlatformPage() {
  const platformFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Immersive Environments',
      description: 'Create and explore vast digital worlds with photorealistic graphics',
      features: ['3D world building', 'Real-time rendering', 'Dynamic lighting', 'Environmental physics']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Social Interaction',
      description: 'Connect with users worldwide in shared virtual spaces',
      features: ['Avatar customization', 'Voice chat', 'Gesture recognition', 'Social spaces']
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI Integration',
      description: 'Intelligent NPCs and automated world management',
      features: ['AI-driven NPCs', 'Dynamic storytelling', 'Behavioral AI', 'World generation']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Cross-Platform Access',
      description: 'Seamless experience across VR, AR, and traditional devices',
      features: ['VR headset support', 'AR mobile apps', 'Web browsers', 'Desktop clients']
    }
  ];

  const useCases = [
    {
      category: 'Business & Enterprise',
      applications: ['Virtual meetings', 'Training simulations', 'Product demos', 'Remote collaboration']
    },
    {
      category: 'Education & Training',
      applications: ['Virtual classrooms', 'Skill development', 'Historical simulations', 'Interactive learning']
    },
    {
      category: 'Entertainment & Gaming',
      applications: ['Virtual concerts', 'Gaming worlds', 'Social events', 'Creative expression']
    },
    {
      category: 'Healthcare & Wellness',
      applications: ['Therapy sessions', 'Medical training', 'Rehabilitation', 'Mental health support']
    }
  ];

  const technologyStack = [
    'Unity 3D Engine',
    'Unreal Engine 5',
    'WebXR Standards',
    'Blockchain Integration',
    'AI/ML Processing',
    'Cloud Computing',
    'Edge Computing',
    '5G Networks'
  ];

  const developmentServices = [
    'Metaverse Platform Development',
    '3D World Design & Creation',
    'Avatar System Development',
    'Social Feature Integration',
    'AI NPC Development',
    'Cross-Platform Deployment',
    'Performance Optimization',
    'Security Implementation'
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Metaverse Digital Reality Platform | Zion Tech Group</title>
        <meta name="description" content="Build immersive metaverse experiences with our digital reality platform. Create virtual worlds, social spaces, and interactive environments for business, education, and entertainment." />
        <link rel="canonical" href="https://ziontechgroup.com/metaverse-digital-reality-platform" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 mb-6">
              <Monitor className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Metaverse Digital Reality Platform
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Step into the future with our comprehensive metaverse platform. Create immersive digital worlds, 
              connect with users globally, and build the next generation of virtual experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Start Building</Button>
              <Button href="/demo" variant="outline" className="px-8 py-4">Request Demo</Button>
            </div>
          </header>

          {/* Platform Features */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Use Cases & Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-pink-500/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">{useCase.category}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-pink-400" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Advanced Technology Stack
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologyStack.map((tech, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 text-center">
                    <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-200">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Development Services */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Development Services
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {developmentServices.map((service, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 transition-all duration-300 text-center">
                    <Sparkles className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-200">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Platform Benefits */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Platform Benefits
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    Global Reach
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Connect users worldwide</li>
                    <li>• 24/7 availability</li>
                    <li>• Multi-language support</li>
                    <li>• Cultural inclusivity</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                    Innovation
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cutting-edge technology</li>
                    <li>• Continuous updates</li>
                    <li>• AI integration</li>
                    <li>• Scalable architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Implementation Process
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: '1', title: 'Discovery', desc: 'Requirements analysis and planning' },
                  { step: '2', title: 'Design', desc: '3D world and user experience design' },
                  { step: '3', title: 'Development', desc: 'Platform building and feature implementation' },
                  { step: '4', title: 'Testing', desc: 'Quality assurance and performance testing' },
                  { step: '5', title: 'Launch', desc: 'Deployment and ongoing support' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Build Your Metaverse?
              </h2>
              <p className="text-gray-300 mb-6">
                Join the future of digital interaction. Let us help you create immersive, 
                engaging metaverse experiences that connect people and transform industries.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" className="px-8 py-4">Get Started</Button>
                <Button href="/demo" variant="outline" className="px-8 py-4">Request Demo</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}
=======
import { Globe, Users, Zap, Shield, Eye, Cpu, Palette, Rocket } from 'lucide-react';

const MetaverseDigitalRealityPlatformPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Metaverse Digital Reality Platform - Zion Tech Group</title>
        <meta name="description" content="Experience the future with Zion Tech Group's metaverse digital reality platform. Immersive 3D environments, virtual collaboration, and next-generation digital experiences." />
        <meta name="keywords" content="metaverse, virtual reality, digital reality, 3D environments, virtual collaboration, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/metaverse-digital-reality-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Globe className="mx-auto h-16 w-16 text-indigo-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Metaverse Digital Reality Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step into the future of digital interaction. Our metaverse platform creates 
              immersive 3D environments where reality and imagination converge.
            </p>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Next-Generation Digital Reality
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our metaverse platform combines cutting-edge technology with intuitive design 
                to create seamless digital experiences that bridge the physical and virtual worlds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Eye className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Immersive Experience</h3>
                <p className="text-gray-300">
                  High-fidelity 3D environments with realistic physics, 
                  spatial audio, and haptic feedback for complete immersion.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Social Interaction</h3>
                <p className="text-gray-300">
                  Real-time collaboration, virtual meetings, and social spaces 
                  that bring people together across the globe.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Zap className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">High Performance</h3>
                <p className="text-gray-300">
                  Optimized for smooth performance across devices with 
                  adaptive quality and efficient rendering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Platform Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">3D World Creation</h3>
                  <p className="text-gray-300">
                    Intuitive tools for building and customizing 3D environments, 
                    with templates and asset libraries for rapid development.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Avatar System</h3>
                  <p className="text-gray-300">
                    Customizable digital identities with realistic animations, 
                    expressions, and body language for authentic interactions.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Real-time Communication</h3>
                  <p className="text-gray-300">
                    Voice, video, and text chat with spatial audio, 
                    gesture recognition, and real-time translation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Collaboration Tools</h3>
                  <p className="text-gray-300">
                    Virtual whiteboards, 3D modeling, and shared workspaces 
                    for seamless team collaboration and creativity.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Content Creation</h3>
                  <p className="text-gray-300">
                    Built-in tools for creating and sharing 3D content, 
                    animations, and interactive experiences.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Analytics & Insights</h3>
                  <p className="text-gray-300">
                    Comprehensive analytics on user engagement, behavior patterns, 
                    and platform performance for continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Applications & Use Cases
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Virtual Events</h3>
                <p className="text-gray-300">
                  Host conferences, trade shows, and social gatherings in 
                  immersive 3D environments with unlimited capacity.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Remote Work</h3>
                <p className="text-gray-300">
                  Virtual offices and meeting spaces that replicate the 
                  collaborative atmosphere of physical workplaces.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Education & Training</h3>
                <p className="text-gray-300">
                  Interactive learning environments for virtual classrooms, 
                  simulations, and hands-on training experiences.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Gaming & Entertainment</h3>
                <p className="text-gray-300">
                  Immersive gaming experiences, virtual theme parks, and 
                  interactive entertainment venues.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Real Estate</h3>
                <p className="text-gray-300">
                  Virtual property tours, architectural visualization, and 
                  interactive design consultations.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300">
                  Virtual therapy sessions, medical training simulations, and 
                  patient education in immersive environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Technology Infrastructure
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Cpu className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">3D Engine</h3>
                <p className="text-gray-300 text-sm">Advanced rendering engine with real-time lighting and physics</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Palette className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Content Tools</h3>
                <p className="text-gray-300 text-sm">Intuitive creation tools for 3D content and environments</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade security and privacy protection</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <Rocket className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Scalability</h3>
                <p className="text-gray-300 text-sm">Cloud-native architecture for global scale and performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Development & Integration
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">For Developers</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-gray-300">RESTful APIs and SDKs for custom integrations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-gray-300">Plugin system for extending platform functionality</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-gray-300">Comprehensive documentation and tutorials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-gray-300">Developer community and support forums</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">For Businesses</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span className="text-gray-300">White-label solutions for branded experiences</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span className="text-gray-300">Custom development and consulting services</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span className="text-gray-300">Integration with existing business systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span className="text-gray-300">Training and support for teams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                The Future of Digital Reality
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Emerging Technologies</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Brain-computer interfaces for direct neural interaction</li>
                    <li>• Holographic displays and projection systems</li>
                    <li>• Advanced haptic feedback and tactile sensations</li>
                    <li>• Quantum computing for complex simulations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Future Applications</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Digital twin cities and infrastructure</li>
                    <li>• Virtual tourism and cultural experiences</li>
                    <li>• Advanced AI companions and assistants</li>
                    <li>• Cross-dimensional communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Building the Future
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to create immersive digital experiences? Join us in building 
              the next generation of the metaverse.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <Globe className="mx-auto h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Getting Started</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-2">For Individuals</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Free platform access</li>
                    <li>• Community tutorials</li>
                    <li>• Creative tools and assets</li>
                    <li>• Social spaces and events</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">For Organizations</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Enterprise solutions</li>
                    <li>• Custom development</li>
                    <li>• Training and support</li>
                    <li>• Dedicated infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MetaverseDigitalRealityPlatformPage;
>>>>>>> origin/HEAD
