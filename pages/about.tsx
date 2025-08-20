import React from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import FeatureCard from '../components/ui/FeatureCard';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission and vision." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-black via-gray-900 to-black py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Pioneering the future of autonomous technology and AI-driven innovation
          </p>
        </div>
      </Section>

      {/* Mission & Vision Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
            <p className="text-lg text-white/80 mb-4">
              To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
            </p>
            <p className="text-white/70">
              We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
            <p className="text-lg text-white/80 mb-4">
              To be the leading force in autonomous technology, creating systems that think, learn, and evolve independently.
            </p>
            <p className="text-white/70">
              We envision a future where AI and automation work seamlessly together to enhance human capabilities and drive progress.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section className="bg-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Values</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The principles that guide our innovation and shape our future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Innovation</h3>
            <p className="text-white/70">Constantly pushing boundaries and exploring new frontiers in technology</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Autonomy</h3>
            <p className="text-white/70">Building systems that can operate independently and make intelligent decisions</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Impact</h3>
            <p className="text-white/70">Creating technology that makes a positive difference in the world</p>
          </div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Do</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive solutions that drive the future of autonomous technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">AI Development</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Advanced machine learning models
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Natural language processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Computer vision systems
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Autonomous decision making
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Automation Systems</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Cloud infrastructure automation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                CI/CD pipeline optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Self-healing applications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Performance monitoring
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Impact Section */}
      <Section className="bg-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Measurable results that demonstrate our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">227</span>
            </div>
            <div className="text-white/70">Active Automations</div>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">2960+</span>
            </div>
            <div className="text-white/70">Dynamic Pages</div>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">99.99%</span>
            </div>
            <div className="text-white/70">Uptime</div>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-white">24/7</span>
            </div>
            <div className="text-white/70">Monitoring</div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the autonomous technology revolution and help us build a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}