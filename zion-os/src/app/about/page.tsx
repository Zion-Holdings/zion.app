"use client";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">About Zion Tech Group</h1>
        <p className="text-xl opacity-80 max-w-4xl mx-auto">
          Pioneering the future of AI-powered digital economies and micro SAAS solutions. 
          We're building the infrastructure that enables businesses to thrive in the digital age.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="opacity-80 leading-relaxed">
            To democratize access to enterprise-grade AI and digital infrastructure, enabling businesses of all sizes 
            to leverage cutting-edge technology for growth, innovation, and competitive advantage.
          </p>
          <ul className="space-y-2 opacity-80">
            <li>• Democratize AI technology access</li>
            <li>• Simplify digital transformation</li>
            <li>• Enable sustainable business growth</li>
            <li>• Foster innovation and creativity</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="opacity-80 leading-relaxed">
            To become the leading platform for AI-powered business solutions, creating a world where every business 
            can harness the power of artificial intelligence to solve complex challenges and unlock new opportunities.
          </p>
          <ul className="space-y-2 opacity-80">
            <li>• Global AI infrastructure leader</li>
            <li>• Innovation ecosystem hub</li>
            <li>• Sustainable technology partner</li>
            <li>• Future-ready business enabler</li>
          </ul>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Company Overview</h2>
          <p className="opacity-90 max-w-3xl mx-auto">
            Founded with a vision to bridge the gap between complex AI technology and practical business applications, 
            Zion Tech Group has grown from a startup to a comprehensive technology solutions provider. We serve 
            businesses across industries, from healthcare to finance, education to government.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3 p-6 border border-white/10 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold">Innovation First</h3>
            <p className="text-sm opacity-80">
              We constantly push the boundaries of what's possible, exploring new technologies and approaches 
              to solve business challenges.
            </p>
          </div>
          
          <div className="text-center space-y-3 p-6 border border-white/10 rounded-lg">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold">Customer Success</h3>
            <p className="text-sm opacity-80">
              Your success is our success. We're committed to delivering solutions that drive real business 
              value and measurable results.
            </p>
          </div>
          
          <div className="text-center space-y-3 p-6 border border-white/10 rounded-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold">Trust & Security</h3>
            <p className="text-sm opacity-80">
              We prioritize the security and privacy of your data, implementing enterprise-grade security 
              measures and compliance standards.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border border-white/10 rounded-lg text-center">
            <h3 className="font-semibold mb-2">AI Services</h3>
            <p className="text-sm opacity-80">Custom AI solutions, language models, and intelligent automation</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg text-center">
            <h3 className="font-semibold mb-2">IT Services</h3>
            <p className="text-sm opacity-80">Cloud migration, cybersecurity, and DevOps automation</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Micro SAAS</h3>
            <p className="text-sm opacity-80">Specialized business applications and automation tools</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Consulting</h3>
            <p className="text-sm opacity-80">Strategic technology guidance and implementation support</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center space-y-4">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-4xl text-white font-bold">K</span>
            </div>
            <h3 className="text-xl font-semibold">Kleber</h3>
            <p className="text-lg opacity-80">Founder & CEO</p>
            <p className="text-sm opacity-70">
              Visionary leader with expertise in AI, blockchain, and digital transformation. 
              Passionate about democratizing technology access for businesses worldwide.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto flex items-center justify-center">
              <span className="text-4xl text-white font-bold">Z</span>
            </div>
            <h3 className="text-xl font-semibold">Zion Team</h3>
            <p className="text-lg opacity-80">Technology & Innovation</p>
            <p className="text-sm opacity-70">
              Our diverse team of engineers, designers, and business experts working together 
              to build the future of AI-powered business solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center p-6 border border-white/10 rounded-lg">
          <div className="text-3xl font-bold text-blue-500">50+</div>
          <div className="text-sm opacity-80">Services & Solutions</div>
        </div>
        <div className="text-center p-6 border border-white/10 rounded-lg">
          <div className="text-3xl font-bold text-green-500">100+</div>
          <div className="text-sm opacity-80">Happy Clients</div>
        </div>
        <div className="text-center p-6 border border-white/10 rounded-lg">
          <div className="text-3xl font-bold text-purple-500">24/7</div>
          <div className="text-sm opacity-80">Support Available</div>
        </div>
        <div className="text-center p-6 border border-white/10 rounded-lg">
          <div className="text-3xl font-bold text-yellow-500">99.9%</div>
          <div className="text-sm opacity-80">Uptime Guarantee</div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border border-white/10 rounded-lg text-center">
            <h3 className="font-semibold mb-2">AI & ML</h3>
            <p className="text-sm opacity-80">GPT, TensorFlow, PyTorch, Custom Models</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-sm opacity-80">AWS, Azure, Docker, Kubernetes</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Blockchain</h3>
            <p className="text-sm opacity-80">Ethereum, Solana, Smart Contracts</p>
          </div>
          <div className="p-4 border border-white/10 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Web Technologies</h3>
            <p className="text-sm opacity-80">React, Next.js, Node.js, Python</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="opacity-90">
            Ready to transform your business with AI-powered solutions? Let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="opacity-90">+1 302 464 0950</p>
              <p className="text-sm opacity-70">Available Mon-Fri, 9AM-6PM EST</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-90">kleber@ziontechgroup.com</p>
              <p className="text-sm opacity-70">We respond within 24 hours</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="opacity-90">364 E Main St STE 1008<br />Middletown DE 19709</p>
              <p className="text-sm opacity-70">United States</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Send Message
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

      {/* Company Information */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Company Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Details</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p><strong>Company Name:</strong> Zion Tech Group</p>
              <p><strong>Founded:</strong> 2023</p>
              <p><strong>Industry:</strong> Technology Services</p>
              <p><strong>Business Type:</strong> Limited Liability Company</p>
              <p><strong>Tax ID:</strong> Available upon request</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Certifications & Compliance</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>• SOC 2 Type II Compliant</p>
              <p>• GDPR Compliant</p>
              <p>• HIPAA Ready</p>
              <p>• ISO 27001 Certified</p>
              <p>• PCI DSS Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}