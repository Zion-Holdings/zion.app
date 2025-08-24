import Link from 'next/link';

export const metadata = {
  title: 'Sitemap - Zion Tech Group',
  description: 'Complete sitemap of Zion Tech Group website. Find all pages and navigate our comprehensive AI and technology solutions.',
};

export default function SitemapPage() {
  const mainPages = [
    { name: 'Home', href: '/', description: 'Main landing page' },
    { name: 'About Us', href: '/about', description: 'Company overview and mission' },
    { name: 'Our Team', href: '/team', description: 'Meet our leadership and experts' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
  ];

  const services = [
    { name: 'All Services', href: '/services', description: 'Complete service overview' },
    { name: 'AI Solutions', href: '/ai-solutions', description: 'Comprehensive AI services' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', description: 'Self-managing AI systems' },
    { name: 'Quantum Computing', href: '/quantum-computing', description: 'Quantum computing solutions' },
    { name: 'Research & Development', href: '/research-development', description: 'Cutting-edge research' },
  ];

  const resources = [
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and results' },
    { name: 'Blog & News', href: '/blog', description: 'Latest insights and updates' },
    { name: 'Resources', href: '/resources', description: 'Whitepapers, webinars, and tools' },
    { name: 'Careers', href: '/careers', description: 'Job opportunities and team culture' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy', description: 'Data protection and privacy' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage information' },
  ];

  const quickLinks = [
    { name: 'AI Readiness Assessment', href: '/resources#ai-readiness-assessment', description: 'Evaluate your AI readiness' },
    { name: 'Quantum ROI Calculator', href: '/resources#quantum-calculator', description: 'Calculate quantum computing ROI' },
    { name: 'AI Ethics Checklist', href: '/resources#ai-ethics-checklist', description: 'Ensure ethical AI development' },
    { name: 'Cybersecurity Audit', href: '/resources#cybersecurity-audit', description: 'Assess security posture' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sitemap</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Complete navigation guide to all pages and resources on our website
          </p>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Main Pages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core pages that provide essential information about Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainPages.map((page, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{page.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{page.description}</p>
                <Link
                  href={page.href}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Visit Page
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of AI and technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access valuable content, insights, and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <Link
                  href={resource.href}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legal & Policies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important legal information and company policies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legal.map((page, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{page.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{page.description}</p>
                <Link
                  href={page.href}
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Read Policy
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popular tools and resources for quick access
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-indigo-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{link.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <Link
                  href={link.href}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Access Tool
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alphabetical Index */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alphabetical Index</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find pages quickly with our alphabetical listing
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">A</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-blue-600 hover:text-blue-700 hover:underline">About Us</Link></li>
                  <li><Link href="/ai-solutions" className="text-blue-600 hover:text-blue-700 hover:underline">AI Solutions</Link></li>
                  <li><Link href="/ai-autonomous-systems" className="text-blue-600 hover:text-blue-700 hover:underline">AI Autonomous Systems</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">B</h3>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-blue-600 hover:text-blue-700 hover:underline">Blog & News</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">C</h3>
                <ul className="space-y-2">
                  <li><Link href="/careers" className="text-blue-600 hover:text-blue-700 hover:underline">Careers</Link></li>
                  <li><Link href="/case-studies" className="text-blue-600 hover:text-blue-700 hover:underline">Case Studies</Link></li>
                  <li><Link href="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">Contact</Link></li>
                  <li><Link href="/cookies" className="text-blue-600 hover:text-blue-700 hover:underline">Cookie Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">H</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-blue-600 hover:text-blue-700 hover:underline">Home</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">P</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Q</h3>
                <ul className="space-y-2">
                  <li><Link href="/quantum-computing" className="text-blue-600 hover:text-blue-700 hover:underline">Quantum Computing</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">R</h3>
                <ul className="space-y-2">
                  <li><Link href="/research-development" className="text-blue-600 hover:text-blue-700 hover:underline">Research & Development</Link></li>
                  <li><Link href="/resources" className="text-blue-600 hover:text-blue-700 hover:underline">Resources</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">S</h3>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-blue-600 hover:text-blue-700 hover:underline">Services</Link></li>
                  <li><Link href="/sitemap" className="text-blue-600 hover:text-blue-700 hover:underline">Sitemap</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">T</h3>
                <ul className="space-y-2">
                  <li><Link href="/team" className="text-blue-600 hover:text-blue-700 hover:underline">Team</Link></li>
                  <li><Link href="/terms" className="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you navigate our website and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}