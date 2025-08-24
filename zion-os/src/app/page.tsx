export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Zion Tech Group</h1>
        <p className="text-2xl opacity-80 max-w-4xl mx-auto">
          Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions. 
          Launch sovereign AI-powered digital economies with one click.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Middletown, DE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌍</span>
            <span>Global Reach</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🚀</span>
            <span>Innovation First</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a className="p-6 rounded-lg border border-white/10 hover:border-white/20 bg-zinc-900 transition-colors" href="/services">
            <div className="text-3xl mb-3">🛠️</div>
            <div className="font-semibold">Our Services</div>
            <div className="text-sm opacity-80">Explore our comprehensive micro SAAS, IT, and AI solutions</div>
          </a>
          <a className="p-6 rounded-lg border border-white/10 hover:border-white/20 bg-zinc-900 transition-colors" href="/solutions">
            <div className="text-3xl mb-3">🎯</div>
            <div className="font-semibold">Industry Solutions</div>
            <div className="text-sm opacity-80">Tailored solutions for healthcare, education, legal, and more</div>
          </a>
          <a className="p-6 rounded-lg border border-white/10 hover:border-white/20 bg-zinc-900 transition-colors" href="/contact">
            <div className="text-3xl mb-3">📞</div>
            <div className="font-semibold">Get Started</div>
            <div className="text-sm opacity-80">Contact us to discuss your digital transformation project</div>
          </a>
          <a className="p-6 rounded-lg border border-white/10 hover:border-white/20 bg-zinc-900 transition-colors" href="/multiverse/launch">
            <div className="text-3xl mb-3">🚀</div>
            <div className="font-semibold">Launch Wizard</div>
            <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, and more</div>
          </a>
        </div>
      </div>

      {/* Featured Services */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold mb-2">AI & Machine Learning</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Advanced AI solutions including ZionGPT Enterprise, content moderation, and intelligent automation.
            </p>
            <a href="/services" className="text-blue-400 hover:underline text-sm">Learn More →</a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="text-lg font-semibold mb-2">Cloud & Infrastructure</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Scalable cloud solutions, DevOps automation, and infrastructure management services.
            </p>
            <a href="/services" className="text-blue-400 hover:underline text-sm">Learn More →</a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Comprehensive security solutions, compliance management, and threat detection systems.
            </p>
            <a href="/services" className="text-blue-400 hover:underline text-sm">Learn More →</a>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-semibold mb-3">Ready to Transform Your Business?</h2>
        <p className="opacity-90 mb-6 max-w-2xl mx-auto">
          Join hundreds of organizations that have already transformed their operations with our cutting-edge solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Call Now: +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>

      {/* Admin Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Admin & Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a className="p-4 rounded border border-white/10 hover:border-white/20 bg-zinc-900 transition-colors" href="/admin/os-deploy">
            <div className="font-semibold">Admin Deploy</div>
            <div className="text-sm opacity-80">Deploy and manage Zion OS instances with advanced configuration options.</div>
          </a>
          <a className="p-4 rounded border border-white/10 hover:border-white/20 bg-zinc-900 transition-colors" href="/admin/instances">
            <div className="font-semibold">Admin Instances</div>
            <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance settings.</div>
          </a>
        </div>
      </div>
    </div>
  );
}