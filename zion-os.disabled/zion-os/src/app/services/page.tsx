"use client";

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Zion Tech Group Services</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Comprehensive micro SAAS, IT, and AI solutions to accelerate your business growth and digital transformation
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
          <p className="opacity-90">Contact our team for personalized solutions and pricing</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">🤖</div>
          <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
          <p className="text-zinc-400 mb-4 text-sm">
            Advanced AI solutions including ZionGPT Enterprise, content moderation, and intelligent automation.
          </p>
          <a href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry" className="text-blue-400 hover:underline text-sm">
            Contact Us →
          </a>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">☁️</div>
          <h3 className="text-xl font-semibold mb-2">Cloud & Infrastructure</h3>
          <p className="text-zinc-400 mb-4 text-sm">
            Scalable cloud solutions, DevOps automation, and infrastructure management services.
          </p>
          <a href="mailto:kleber@ziontechgroup.com?subject=Cloud Services Inquiry" className="text-blue-400 hover:underline text-sm">
            Contact Us →
          </a>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
          <p className="text-zinc-400 mb-4 text-sm">
            Comprehensive security solutions, compliance management, and threat detection systems.
          </p>
          <a href="mailto:kleber@ziontechgroup.com?subject=Security Services Inquiry" className="text-blue-400 hover:underline text-sm">
            Contact Us →
          </a>
        </div>
      </div>

      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Need a Custom Solution?</h2>
        <p className="opacity-80 max-w-2xl mx-auto">
          Our team specializes in creating tailored solutions that perfectly fit your business needs. 
          Let's discuss how we can help you achieve your digital transformation goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Custom Solution Inquiry"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get Custom Quote
          </a>
          <a
            href="tel:+13024640950"
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}