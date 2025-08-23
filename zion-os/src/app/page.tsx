export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Zion OS</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Launch sovereign AI-powered digital economies with one click. 
          Comprehensive micro SAAS, IT services, and AI solutions for the modern enterprise.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a className="p-4 rounded border border-white/10 hover:border-white/20 transition-all hover:scale-105" href="/multiverse/launch">
          <div className="font-semibold">Launch Wizard</div>
          <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, identity, and more.</div>
        </a>
        <a className="p-4 rounded border border-white/10 hover:border-white/20 transition-all hover:scale-105" href="/admin/instances">
          <div className="font-semibold">Admin Instances</div>
          <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance.</div>
        </a>
      </div>

      {/* Featured Services */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Featured Services</h2>
          <p className="opacity-80">Explore our comprehensive suite of solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/services" className="p-4 rounded border border-white/10 hover:border-white/20 transition-all hover:scale-105">
            <div className="text-2xl mb-2">🤖</div>
            <div className="font-semibold">AI Services</div>
            <div className="text-sm opacity-80">ZionGPT, Resume AI, Content Moderation, Business Intelligence</div>
          </a>
          <a href="/services" className="p-4 rounded border border-white/10 hover:border-white/20 transition-all hover:scale-105">
            <div className="text-2xl mb-2">💻</div>
            <div className="font-semibold">IT Services</div>
            <div className="text-sm opacity-80">Cloud Migration, Cybersecurity, Network Infrastructure, Consulting</div>
          </a>
          <a href="/services" className="p-4 rounded border border-white/10 hover:border-white/20 transition-all hover:scale-105">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold">Digital Economy</div>
            <div className="text-sm opacity-80">Zion OS Platform, Marketplace Solutions, DAO Governance</div>
          </a>
        </div>
        
        <div className="text-center">
          <a 
            href="/services" 
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
          >
            View All Services
          </a>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center space-y-4 p-6 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10">
        <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
        <p className="opacity-80">Contact us for a personalized consultation</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="mailto:kleber@ziontechgroup.com?subject=Zion%20OS%20Inquiry" 
            className="px-4 py-2 rounded border border-white/20 hover:bg-white/10 transition-all"
          >
            Email Us
          </a>
          <a 
            href="tel:+13024640950" 
            className="px-4 py-2 rounded border border-white/20 hover:bg-white/10 transition-all"
          >
            Call: +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}