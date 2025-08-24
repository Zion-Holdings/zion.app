import { services } from "@/data/services";

export default function HomePage() {
  const featuredServices = services.slice(0, 6);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Zion OS
        </h1>
        <p className="text-xl opacity-80 max-w-3xl">
          Launch sovereign AI-powered digital economies with one click. Discover our comprehensive ecosystem of innovative services and solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors" href="/multiverse/launch">
            <div className="font-semibold">Launch Wizard</div>
            <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, identity, and more.</div>
          </a>
          <a className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors" href="/admin/instances">
            <div className="font-semibold">Admin Instances</div>
            <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance.</div>
          </a>
        </div>
      </div>

      {/* Featured Services */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Services</h2>
          <a href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
            View All Services →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServices.map((service) => (
            <div key={service.id} className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {service.status}
                  </span>
                  <span className="text-xs opacity-60">{service.category}</span>
                </div>
                <h3 className="font-semibold">{service.name}</h3>
                <p className="text-sm opacity-70 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-400">{service.pricing.starter}</span>
                  <a 
                    href={`/services#${service.id}`} 
                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center py-8 border-t border-white/10">
        <h2 className="text-xl font-semibold mb-3">Ready to Get Started?</h2>
        <p className="opacity-80 mb-4">Contact our team to discuss your project requirements</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Email Us
          </a>
          <a
            href="tel:+13024640950"
            className="px-6 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}