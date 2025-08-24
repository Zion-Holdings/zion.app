export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Zion OS</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">Launch sovereign AI-powered digital economies with one click.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a className="p-4 rounded border border-white/10 hover:border-white/20" href="/multiverse/launch">
          <div className="font-semibold">Launch Wizard</div>
          <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, identity, and more.</div>
        </a>
        <a className="p-4 rounded border border-white/10 hover:border-white/20" href="/admin/instances">
          <div className="font-semibold">Admin Instances</div>
          <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance.</div>
        </a>
      </div>

      {/* Featured Services */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Featured Services</h2>
          <p className="opacity-80">Explore our comprehensive suite of AI, IT, and micro SAAS solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded border border-white/10 hover:border-white/20">
            <div className="text-2xl mb-2">🤖</div>
            <div className="font-semibold">AI Services</div>
            <div className="text-sm opacity-80">ZionGPT Enterprise, Content Generation, Data Analytics</div>
            <a href="/services" className="text-blue-400 text-sm hover:underline">Learn More →</a>
          </div>
          
          <div className="p-4 rounded border border-white/10 hover:border-white/20">
            <div className="text-2xl mb-2">☁️</div>
            <div className="font-semibold">IT Services</div>
            <div className="text-sm opacity-80">Cloud Infrastructure, Cybersecurity, DevOps Automation</div>
            <a href="/services" className="text-blue-400 text-sm hover:underline">Learn More →</a>
          </div>
          
          <div className="p-4 rounded border border-white/10 hover:border-white/20">
            <div className="text-2xl mb-2">🛒</div>
            <div className="font-semibold">Micro SAAS</div>
            <div className="text-sm opacity-80">Marketplace Platform, Project Management, CRM Systems</div>
            <a href="/services" className="text-blue-400 text-sm hover:underline">Learn More →</a>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            View All Services
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
        <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
        <p className="opacity-90 mb-4">Contact our team to discuss your project requirements</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+13024640950" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            +1 302 464 0950
          </a>
          <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
            kleber@ziontechgroup.com
          </a>
        </div>
      </div>
    </div>
  );
}