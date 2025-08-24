"use client";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Zion Tech Group</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Pioneering the future of digital transformation through innovative technology solutions, 
          artificial intelligence, and cutting-edge software development.
        </p>
      </div>

      {/* Company Overview */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg opacity-90 mb-4">
              To democratize access to enterprise-grade technology solutions, enabling businesses of all sizes 
              to leverage the power of AI, blockchain, and modern software architecture.
            </p>
            <p className="opacity-80">
              We believe that every organization deserves access to cutting-edge technology that can transform 
              their operations, enhance customer experiences, and drive sustainable growth.
            </p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <div className="text-2xl font-semibold text-blue-400">Innovation First</div>
            <div className="text-sm opacity-80">Since 2015</div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
          <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
          <div className="text-sm opacity-80">Projects Delivered</div>
        </div>
        <div className="text-center p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
          <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
          <div className="text-sm opacity-80">Happy Clients</div>
        </div>
        <div className="text-center p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
          <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
          <div className="text-sm opacity-80">Years Experience</div>
        </div>
        <div className="text-center p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
          <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
          <div className="text-sm opacity-80">Support Available</div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="opacity-80 text-sm">
              We constantly push the boundaries of what's possible, exploring emerging technologies 
              and finding creative solutions to complex challenges.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Partnership</h3>
            <p className="opacity-80 text-sm">
              We believe in building long-term relationships with our clients, working collaboratively 
              to achieve shared success and mutual growth.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="opacity-80 text-sm">
              We maintain the highest standards of quality in everything we do, from code development 
              to client communication and project delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Expertise */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Technology Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-2xl mb-2">🤖</div>
            <div className="font-semibold">AI & ML</div>
            <div className="text-xs opacity-80 mt-1">TensorFlow, PyTorch, NLP</div>
          </div>
          
          <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-2xl mb-2">☁️</div>
            <div className="font-semibold">Cloud & DevOps</div>
            <div className="text-xs opacity-80 mt-1">AWS, Azure, Kubernetes</div>
          </div>
          
          <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-semibold">Blockchain</div>
            <div className="text-xs opacity-80 mt-1">Ethereum, Solana, DeFi</div>
          </div>
          
          <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold">Data & Analytics</div>
            <div className="text-xs opacity-80 mt-1">BigQuery, Snowflake, Spark</div>
          </div>
          
          <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-2xl mb-2">🌐</div>
            <div className="font-semibold">Web Development</div>
            <div className="text-xs opacity-80 mt-1">React, Node.js, Python</div>
          </div>
          
          <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-2xl mb-2">🔌</div>
            <div className="font-semibold">API & Integration</div>
            <div className="text-xs opacity-80 mt-1">REST, GraphQL, Microservices</div>
          </div>
          
          <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="font-semibold">Cybersecurity</div>
            <div className="text-xs opacity-80 mt-1">SIEM, EDR, Compliance</div>
          </div>
          
          <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
            <div className="text-2xl mb-2">📱</div>
            <div className="font-semibold">Mobile & IoT</div>
            <div className="text-xs opacity-80 mt-1">React Native, Flutter, IoT</div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-sm opacity-80">
              HIPAA-compliant solutions, telemedicine platforms, patient management systems, 
              and AI-powered diagnostic tools.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">🏦</div>
            <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
            <p className="text-sm opacity-80">
              Fintech platforms, blockchain solutions, compliance systems, and AI-powered 
              risk assessment tools.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">🏭</div>
            <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
            <p className="text-sm opacity-80">
              IoT monitoring systems, predictive maintenance platforms, supply chain optimization, 
              and quality control automation.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">🛒</div>
            <h3 className="text-xl font-semibold mb-2">Retail & E-commerce</h3>
            <p className="text-sm opacity-80">
              Omnichannel platforms, inventory management systems, customer analytics, 
              and AI-powered recommendation engines.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-sm opacity-80">
              Learning management systems, virtual classrooms, student analytics, 
              and AI-powered tutoring platforms.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">🏛️</div>
            <h3 className="text-xl font-semibold mb-2">Government</h3>
            <p className="text-sm opacity-80">
              Digital transformation initiatives, citizen portals, data analytics platforms, 
              and compliance management systems.
            </p>
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Our Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-lg font-semibold mb-2">Discovery</h3>
            <p className="text-sm opacity-80">
              We analyze your requirements, understand your business goals, and design 
              the optimal solution architecture.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-lg font-semibold mb-2">Design</h3>
            <p className="text-sm opacity-80">
              Our team creates detailed technical specifications, UI/UX designs, and 
              project roadmaps for your approval.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-lg font-semibold mb-2">Development</h3>
            <p className="text-sm opacity-80">
              We build your solution using agile methodologies with regular updates 
              and milestone deliveries.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-lg font-semibold mb-2">Deployment</h3>
            <p className="text-sm opacity-80">
              We deploy your solution, provide training, and offer ongoing support 
              to ensure long-term success.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              K
            </div>
            <h3 className="text-xl font-semibold mb-2">Kleber</h3>
            <div className="text-blue-400 mb-2">Founder & CEO</div>
            <p className="text-sm opacity-80">
              Technology visionary with over 10 years of experience in digital transformation, 
              AI, and enterprise software development. Passionate about democratizing access 
              to cutting-edge technology solutions.
            </p>
            <div className="mt-4">
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 text-sm">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
          
          <div className="text-center p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              T
            </div>
            <h3 className="text-xl font-semibold mb-2">Tech Team</h3>
            <div className="text-green-400 mb-2">Engineering & Development</div>
            <p className="text-sm opacity-80">
              Our talented team of engineers, developers, and designers bring diverse 
              expertise in modern technologies, ensuring delivery of high-quality, 
              scalable solutions.
            </p>
            <div className="mt-4">
              <span className="text-sm opacity-60">Available for project discussions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-3xl font-semibold">Ready to Work Together?</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Let's discuss how our expertise can help transform your business and drive 
          innovation in your industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
}