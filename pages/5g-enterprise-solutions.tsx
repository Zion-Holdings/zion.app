import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FiveGEnterpriseSolutionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>5G Enterprise Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with next-generation 5G enterprise solutions. Ultra-fast connectivity, low latency, and massive IoT support for the digital future." />
        <link rel="canonical" href="https://ziontechgroup.com/5g-enterprise-solutions" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            5G Enterprise Solutions
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Unlock the future of enterprise connectivity with our cutting-edge 5G solutions. Experience ultra-fast speeds, ultra-low latency, and massive IoT connectivity that transforms your business operations.
          </p>
        </div>

        {/* 5G Overview */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Next-Generation Connectivity</h2>
              <p className="text-white/80 text-lg mb-6">
                5G technology represents a quantum leap in wireless connectivity, offering unprecedented speed, reliability, and capacity for enterprise applications. Transform your business with the power of 5G.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">10x faster than 4G LTE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Ultra-low latency (1ms)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Massive IoT support</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">5G Revolution</h3>
              <p className="text-white/80">
                Experience the future of wireless technology with enterprise-grade 5G solutions that deliver unmatched performance and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* 5G Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">5G Technology Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Ultra-Fast Speeds</h3>
              <p className="text-white/70 mb-4">
                Experience download speeds up to 10 Gbps, enabling lightning-fast data transfer and seamless streaming.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• 10x faster than 4G</li>
                <li>• Gigabit connectivity</li>
                <li>• Instant file transfers</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Ultra-Low Latency</h3>
              <p className="text-white/70 mb-4">
                Achieve latency as low as 1ms, perfect for real-time applications and critical communications.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• 1ms response time</li>
                <li>• Real-time applications</li>
                <li>• Critical communications</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Massive IoT Support</h3>
              <p className="text-white/70 mb-4">
                Connect up to 1 million devices per square kilometer, enabling comprehensive IoT deployments.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• 1M devices/km²</li>
                <li>• IoT scalability</li>
                <li>• Smart city ready</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">📡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Network Slicing</h3>
              <p className="text-white/70 mb-4">
                Create virtual networks tailored to specific applications and business requirements.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Virtual networks</li>
                <li>• Custom configurations</li>
                <li>• Application-specific</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enhanced Security</h3>
              <p className="text-white/70 mb-4">
                Advanced encryption and security protocols to protect your enterprise data and communications.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Advanced encryption</li>
                <li>• Secure protocols</li>
                <li>• Enterprise-grade security</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">High Reliability</h3>
              <p className="text-white/70 mb-4">
                99.999% network reliability ensuring continuous operations for critical business applications.
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• 99.999% uptime</li>
                <li>• Continuous operations</li>
                <li>• Business critical</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise Applications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Enterprise Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🏭 Manufacturing & Industry 4.0</h3>
                <p className="text-white/70">
                  Enable smart manufacturing with real-time monitoring, predictive maintenance, and automated quality control systems powered by 5G connectivity.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🏥 Healthcare & Telemedicine</h3>
                <p className="text-white/70">
                  Transform healthcare delivery with high-definition video consultations, remote monitoring, and real-time medical data transmission.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🚗 Autonomous Vehicles</h3>
                <p className="text-white/70">
                  Power autonomous vehicle networks with ultra-low latency communications for real-time decision making and vehicle-to-vehicle coordination.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🏢 Smart Buildings</h3>
                <p className="text-white/70">
                  Create intelligent building management systems with IoT sensors, automated controls, and real-time energy optimization.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">📱 Mobile Workforce</h3>
                <p className="text-white/70">
                  Empower mobile workers with high-speed connectivity, cloud applications, and seamless collaboration tools anywhere, anytime.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">🎮 AR/VR & Gaming</h3>
                <p className="text-white/70">
                  Deliver immersive augmented and virtual reality experiences with ultra-low latency and high bandwidth for training and entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Implementation Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Network Assessment</h3>
                  <p className="text-white/70">
                    Comprehensive evaluation of your current infrastructure and requirements to design the optimal 5G solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">5G Infrastructure Design</h3>
                  <p className="text-white/70">
                    Custom 5G network design tailored to your enterprise needs, including coverage planning and capacity optimization.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deployment & Integration</h3>
                  <p className="text-white/70">
                    Professional installation and integration of 5G equipment with your existing infrastructure and applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Testing & Optimization</h3>
                  <p className="text-white/70">
                    Comprehensive testing and performance optimization to ensure your 5G network meets all requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Training & Support</h3>
                  <p className="text-white/70">
                    Staff training and ongoing support to maximize the benefits of your new 5G infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Monitoring & Maintenance</h3>
                  <p className="text-white/70">
                    Continuous monitoring and proactive maintenance to ensure optimal performance and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Business Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Increase productivity by 40%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Reduce operational costs by 30%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Enable new business models</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Improve customer experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Accelerate digital transformation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white/80">Future-proof your business</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience 5G?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Transform your business with next-generation 5G connectivity. Let's discuss how our enterprise 5G solutions can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/pricing" 
              className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500/10 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}