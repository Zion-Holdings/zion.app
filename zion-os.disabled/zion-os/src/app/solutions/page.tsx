"use client";

export default function SolutionsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Industry Solutions</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Tailored digital transformation solutions designed for your specific industry challenges and opportunities
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold">Custom Industry Solutions</h2>
          <p className="opacity-90">Let us create a tailored solution for your specific industry needs</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="text-4xl mb-4">🏥</div>
          <h3 className="text-2xl font-semibold mb-3">Healthcare Digital Transformation</h3>
          <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
            Complete digital transformation solution for healthcare providers, including patient management, telemedicine, and AI-powered diagnostics.
          </p>
          <div className="space-y-3 mb-6">
            <div>
              <h4 className="font-semibold text-sm mb-2 text-red-400">Key Challenges:</h4>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>Complex regulatory compliance requirements</li>
                <li>Patient data security and privacy</li>
                <li>Integration with existing systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2 text-blue-400">Our Solutions:</h4>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>HIPAA-compliant patient management system</li>
                <li>End-to-end encryption and security</li>
                <li>Seamless EHR integration</li>
              </ul>
            </div>
          </div>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Healthcare Solution Inquiry"
            className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg text-sm font-medium transition-colors block text-center"
          >
            Get Healthcare Solution
          </a>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-2xl font-semibold mb-3">Educational Technology Platform</h3>
          <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
            Comprehensive edtech solution for schools, universities, and training organizations with AI-powered learning analytics.
          </p>
          <div className="space-y-3 mb-6">
            <div>
              <h4 className="font-semibold text-sm mb-2 text-red-400">Key Challenges:</h4>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>Remote learning infrastructure</li>
                <li>Student engagement tracking</li>
                <li>Personalized learning paths</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2 text-blue-400">Our Solutions:</h4>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>Cloud-based learning management system</li>
                <li>AI-powered engagement analytics</li>
                <li>Adaptive learning algorithms</li>
              </ul>
            </div>
          </div>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Education Solution Inquiry"
            className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg text-sm font-medium transition-colors block text-center"
          >
            Get Education Solution
          </a>
        </div>
      </div>

      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Ready to Transform Your Industry?</h2>
        <p className="opacity-80 max-w-2xl mx-auto">
          Join hundreds of organizations that have already transformed their operations with our industry-specific solutions. 
          Let's discuss how we can help you achieve your digital transformation goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Industry Solution Consultation"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Schedule Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Call Industry Expert
          </a>
        </div>
      </div>
    </div>
  );
}