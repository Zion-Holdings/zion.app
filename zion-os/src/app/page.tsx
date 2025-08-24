export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Zion OS</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Launch sovereign AI-powered digital economies with one click. 
          Comprehensive micro SAAS solutions, IT services, and AI-powered tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/multiverse/launch" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Launch Your Instance
          </a>
          <a 
            href="/services" 
            className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a className="p-6 rounded border border-white/10 hover:border-white/20 transition-colors" href="/multiverse/launch">
          <div className="font-semibold text-lg mb-2">Launch Wizard</div>
          <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, identity, and more.</div>
        </a>
        <a className="p-6 rounded border border-white/10 hover:border-white/20 transition-colors" href="/admin/instances">
          <div className="font-semibold text-lg mb-2">Admin Instances</div>
          <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance.</div>
        </a>
      </div>

      {/* Featured Services */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Our Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Services</h3>
            <p className="text-sm opacity-80 mb-4">
              ZionGPT Core, AI Content Hub, Customer Support AI, and Data Analytics Platform.
            </p>
            <a href="/services" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
          </div>
          
          <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">💻</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">IT Services</h3>
            <p className="text-sm opacity-80 mb-4">
              Cloud Migration, Cybersecurity Audit, DevOps Automation, and Infrastructure Management.
            </p>
            <a href="/services" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
          </div>
          
          <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Micro SAAS</h3>
            <p className="text-sm opacity-80 mb-4">
              Invoice Automation, HR Management, Project Management, and Business Automation Tools.
            </p>
            <a href="/services" className="text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/services" className="p-4 border border-white/10 rounded-lg hover:border-white/20 transition-colors text-center">
            <h3 className="font-semibold mb-2">Core Platform</h3>
            <p className="text-sm opacity-80">Zion OS deployment and management</p>
          </a>
          <a href="/services" className="p-4 border border-white/10 rounded-lg hover:border-white/20 transition-colors text-center">
            <h3 className="font-semibold mb-2">AI Services</h3>
            <p className="text-sm opacity-80">Intelligent automation and AI tools</p>
          </a>
          <a href="/services" className="p-4 border border-white/10 rounded-lg hover:border-white/20 transition-colors text-center">
            <h3 className="font-semibold mb-2">IT Services</h3>
            <p className="text-sm opacity-80">Infrastructure and security solutions</p>
          </a>
          <a href="/services" className="p-4 border border-white/10 rounded-lg hover:border-white/20 transition-colors text-center">
            <h3 className="font-semibold mb-2">Business Solutions</h3>
            <p className="text-sm opacity-80">Automation and productivity tools</p>
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="opacity-90 mb-6 max-w-2xl mx-auto">
          Join hundreds of businesses already leveraging our AI-powered solutions to drive growth, 
          improve efficiency, and stay ahead of the competition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
          <a
            href="/pricing"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="opacity-80">
          Have questions? Our team is here to help you choose the right solution for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="opacity-80">+1 302 464 0950</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="opacity-80">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="opacity-80">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
        <a
          href="/contact"
          className="inline-block px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}