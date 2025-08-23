export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Zion OS</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Launch sovereign AI-powered digital economies with one click. Comprehensive technology solutions for modern businesses.
          </p>
          <div className="mt-8">
            <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mr-4">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zinc-800 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <span className="mr-8">📱 +1 302 464 0950</span>
          <span className="mr-8">✉️ kleber@ziontechgroup.com</span>
          <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🚀 Our Services</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Comprehensive technology solutions from AI services to enterprise IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Services */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI Services & Solutions</h3>
              <p className="text-zinc-300 mb-4">
                Enterprise-grade AI solutions including ZionGPT Core, content generation, analytics, 
                customer support, process automation, and security.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Starting from:</span>
                  <span className="text-green-400">$199/month</span>
                </div>
              </div>
              <a href="/services/ai" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Explore AI Services
              </a>
            </div>

            {/* IT Services */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-green-500 transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">IT Services & Solutions</h3>
              <p className="text-zinc-300 mb-4">
                Cloud infrastructure, DevOps, cybersecurity, data engineering, API development, 
                and digital transformation consulting.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Starting from:</span>
                  <span className="text-green-400">$140/hour</span>
                </div>
              </div>
              <a href="/services/it" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Explore IT Services
              </a>
            </div>

            {/* Blockchain Services */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-xl font-semibold mb-3">Blockchain & Web3</h3>
              <p className="text-zinc-300 mb-4">
                DeFi platforms, NFT marketplaces, smart contracts, Web3 infrastructure, 
                DAO development, and blockchain consulting.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Starting from:</span>
                  <span className="text-green-400">$5K</span>
                </div>
              </div>
              <a href="/services/blockchain" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Explore Blockchain Services
              </a>
            </div>

            {/* SAAS Services */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-purple-500 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Micro SAAS Services</h3>
              <p className="text-zinc-300 mb-4">
                Ready-to-deploy solutions including Zion Marketplace, Resume AI Builder, 
                Token Rewards System, KYC/AML, DAO Governance, and Zion Academy.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Starting from:</span>
                  <span className="text-green-400">$99/month</span>
                </div>
              </div>
              <a href="/services/saas" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Explore SAAS Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">⚡ Core Platform Features</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Launch your own digital economy with our comprehensive platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a className="p-6 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all bg-zinc-900" href="/multiverse/launch">
              <div className="font-semibold text-xl mb-2">🚀 Launch Wizard</div>
              <div className="text-zinc-300 mb-4">
                Spin up a new instance with marketplace, governance, identity, and more. 
                Complete deployment in minutes with our guided setup process.
              </div>
              <div className="text-sm text-blue-400">Launch Your Instance →</div>
            </a>
            
            <a className="p-6 rounded-xl border border-zinc-700 hover:border-green-500 transition-all bg-zinc-900" href="/admin/instances">
              <div className="font-semibold text-xl mb-2">⚙️ Admin Instances</div>
              <div className="text-zinc-300 mb-4">
                Manage deployed instances, API keys, and governance. Monitor performance, 
                scale resources, and maintain your digital ecosystem.
              </div>
              <div className="text-sm text-green-400">Manage Instances →</div>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive technology solutions can drive your digital transformation 
            and business growth.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                ✉️ Schedule Consultation
              </a>
            </div>
            <p className="text-blue-100 text-sm">
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}