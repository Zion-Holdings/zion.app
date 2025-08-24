"use client";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">About Zion Tech Group</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Pioneering the future of AI-powered business solutions and digital transformation through innovative technology and unwavering commitment to excellence.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To democratize access to advanced AI technology and empower businesses of all sizes to achieve digital transformation through innovative, scalable, and cost-effective solutions.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be the global leader in AI-powered business solutions, creating a world where every organization can leverage cutting-edge technology to drive growth, efficiency, and innovation.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Story</h2>
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed">
              Founded in 2014, Zion Tech Group began as a small team of passionate technologists with a vision to make advanced AI and automation accessible to businesses of all sizes. What started as a consulting firm has evolved into a comprehensive technology company that's reshaping how businesses operate in the digital age.
            </p>
            <p className="text-lg leading-relaxed">
              Over the past decade, we've successfully delivered over 500 projects across various industries, from healthcare and finance to education and e-commerce. Our deep understanding of business challenges combined with cutting-edge technical expertise has made us a trusted partner for organizations seeking digital transformation.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Zion Tech Group stands at the forefront of AI innovation, offering a comprehensive suite of micro SAAS services, IT solutions, and industry-specific platforms that help businesses automate, optimize, and scale their operations.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p className="text-sm opacity-80">Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Excellence</h3>
            <p className="text-sm opacity-80">Committed to delivering the highest quality solutions and exceptional customer service.</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Collaboration</h3>
            <p className="text-sm opacity-80">Working closely with clients to understand their needs and deliver tailored solutions.</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Agility</h3>
            <p className="text-sm opacity-80">Adapting quickly to changing market conditions and evolving client requirements.</p>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">By The Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-sm opacity-90">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-90">Successful Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-90">Team Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-sm opacity-90">Industries Served</div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            <h3 className="text-xl font-semibold">Kleber</h3>
            <p className="text-sm opacity-80">Founder & CEO</p>
            <p className="text-xs opacity-60">
              Visionary leader with 15+ years of experience in technology and business transformation.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto"></div>
            <h3 className="text-xl font-semibold">Sarah Chen</h3>
            <p className="text-sm opacity-80">CTO</p>
            <p className="text-xs opacity-60">
              Technology expert specializing in AI, cloud architecture, and scalable systems.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto"></div>
            <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
            <p className="text-sm opacity-80">VP of Operations</p>
            <p className="text-xs opacity-60">
              Operations specialist focused on delivering exceptional client experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Healthcare & Life Sciences</h3>
            <p className="text-sm opacity-80 mb-4">
              HIPAA-compliant solutions, patient management systems, and AI-powered diagnostic tools.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Electronic Health Records</li>
              <li>• Patient Portal Systems</li>
              <li>• Compliance Management</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
            <p className="text-sm opacity-80 mb-4">
              Secure banking solutions, fraud detection systems, and regulatory compliance platforms.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Banking Applications</li>
              <li>• Risk Management</li>
              <li>• Regulatory Compliance</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Education & Training</h3>
            <p className="text-sm opacity-80 mb-4">
              Learning management systems, virtual classrooms, and AI-powered educational tools.
            </p>
            <ul className="text-sm space-y-1">
              <li>• LMS Platforms</li>
              <li>• Virtual Learning</li>
              <li>• Student Analytics</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Legal & Compliance</h3>
            <p className="text-sm opacity-80 mb-4">
              Document automation, contract management, and regulatory compliance solutions.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Document Generation</li>
              <li>• Contract Management</li>
              <li>• Compliance Tracking</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">E-commerce & Retail</h3>
            <p className="text-sm opacity-80 mb-4">
              Digital commerce platforms, inventory management, and customer experience solutions.
            </p>
            <ul className="text-sm space-y-1">
              <li>• E-commerce Platforms</li>
              <li>• Inventory Systems</li>
              <li>• Customer Analytics</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Manufacturing & Logistics</h3>
            <p className="text-sm opacity-80 mb-4">
              Supply chain optimization, IoT integration, and predictive maintenance solutions.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Supply Chain Management</li>
              <li>• IoT Integration</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Technology Stack</h2>
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
              <ul className="space-y-2 text-sm">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend & AI</h3>
              <ul className="space-y-2 text-sm">
                <li>• Node.js & Python</li>
                <li>• OpenAI & Custom AI Models</li>
                <li>• Machine Learning</li>
                <li>• Natural Language Processing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
              <ul className="space-y-2 text-sm">
                <li>• AWS, Azure, GCP</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD Pipelines</li>
                <li>• Microservices Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
        <h2 className="text-2xl font-bold">Ready to Work With Us?</h2>
        <p className="opacity-90">
          Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
}