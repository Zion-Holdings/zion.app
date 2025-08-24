import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through AI-driven innovation and autonomous solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Pioneering the future of technology through AI-driven innovation, autonomous systems, and continuous evolution.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="text-4xl">🎯</div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              To democratize advanced technology by creating self-improving, autonomous systems that continuously evolve and adapt to meet the ever-changing needs of businesses and individuals.
            </p>
            <p className="text-white/70">
              We believe in building technology that works for you, not against you. Our AI-powered solutions are designed to learn, grow, and improve over time, ensuring that your investment in technology continues to deliver value long into the future.
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-4xl">🔮</div>
            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              To create a world where technology seamlessly integrates with human potential, enabling unprecedented levels of productivity, creativity, and innovation.
            </p>
            <p className="text-white/70">
              We envision a future where AI systems work alongside humans as intelligent partners, handling routine tasks while amplifying human capabilities in areas that require creativity, judgment, and emotional intelligence.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-white/70">
                We constantly push the boundaries of what's possible, embracing cutting-edge technologies and novel approaches to solve complex problems.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Human-Centric Design</h3>
              <p className="text-white/70">
                Every solution we create is designed with people in mind, ensuring that technology enhances human capabilities rather than replacing them.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Evolution</h3>
              <p className="text-white/70">
                Our systems are built to learn and improve continuously, ensuring that they remain relevant and effective in an ever-changing world.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & Automation</h3>
              <p className="text-white/70 mb-4">
                We develop intelligent automation solutions that streamline business processes and enhance productivity.
              </p>
              <Link href="/services" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                Explore Services →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-white/70 mb-4">
                Advanced security solutions that protect your digital assets and ensure compliance with industry standards.
              </p>
              <Link href="/advanced-cybersecurity-suite" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure</h3>
              <p className="text-white/70 mb-4">
                Enterprise-grade infrastructure solutions that scale with your business and adapt to your needs.
              </p>
              <Link href="/advanced-it-infrastructure-services" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                Discover Solutions →
              </Link>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Company Highlights</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white/70">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white/70">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-white/70">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-white/70">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join the future of technology with Zion Tech Group. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
