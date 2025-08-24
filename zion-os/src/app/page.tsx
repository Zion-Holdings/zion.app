export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Zion OS</h1>
      <p className="opacity-80">Launch sovereign AI-powered digital economies with one click.</p>
      
      {/* Services Overview */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Services</h2>
        <p className="text-gray-300 mb-4">
          Discover our comprehensive suite of innovative micro SaaS, IT, and AI services designed to transform your business.
        </p>
        <a 
          href="/services" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors"
        >
          Explore All Services
        </a>
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
    </div>
  );
}