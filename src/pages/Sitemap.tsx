import { SEO } from '@/components/SEO';

const Sitemap = () => {
  const sitemapData = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page and company overview' },
        { name: 'About', path: '/about', description: 'Company information, mission, and values' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team' }
      ]
    },
    {
      category: 'Services',
      pages: [
        { name: 'Service Categories', path: '/categories', description: 'Browse all our service categories' },
        { name: 'AI & Machine Learning', path: '/zion-hire-ai', description: 'AI-powered talent matching services' },
        { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'Professional IT support at your location' },
        { name: 'Data Analytics', path: '/analytics', description: 'Business intelligence and data solutions' },
        { name: 'Mobile Development', path: '/mobile-launch', description: 'Mobile app development and launch services' },
        { name: 'Mobile Solutions', path: '/mobile', description: 'Mobile-first design and development' }
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Equipment', path: '/equipment', description: 'Technology equipment and resources' },
        { name: 'Talent Directory', path: '/talent-directory', description: 'Browse available tech professionals' },
        { name: 'Tech Talents', path: '/talents', description: 'Detailed talent profiles and expertise' }
      ]
    },
    {
      category: 'Business',
      pages: [
        { name: 'Partners', path: '/partners', description: 'Strategic partnership opportunities' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get customized project quotes' }
      ]
    },
    {
      category: 'Support',
      pages: [
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', path: '/help-center', description: 'Comprehensive help and support resources' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Start a Project', path: '/contact', icon: '🚀' },
    { name: 'Get a Quote', path: '/request-quote', icon: '💰' },
    { name: 'Find Talent', path: '/talent-directory', icon: '👥' },
    { name: 'Browse Services', path: '/categories', icon: '🔧' },
    { name: 'Learn About Us', path: '/about', icon: 'ℹ️' },
    { name: 'Get Help', path: '/help-center', icon: '❓' }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources organized by category."
        canonical="/sitemap"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. 
                Find all pages, services, and resources organized by category 
                for quick access to what you need.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Quick Access
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200 text-center group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-200">
                      {link.name}
                    </h3>
                  </a>
                ))}
              </div>
            </div>

            {/* Sitemap Categories */}
            <div className="space-y-16 max-w-6xl mx-auto">
              {sitemapData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                    {category.category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200">
                        <a
                          href={page.path}
                          className="block group"
                        >
                          <h3 className="text-lg font-medium text-white group-hover:text-blue-200 transition-colors duration-200 mb-2">
                            {page.name}
                          </h3>
                          <p className="text-blue-100 text-sm group-hover:text-blue-200 transition-colors duration-200">
                            {page.description}
                          </p>
                          <div className="text-blue-400 text-xs mt-2 group-hover:text-blue-300 transition-colors duration-200">
                            {page.path}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Use our search functionality or contact our team for personalized assistance. 
                  We're here to help you navigate our services and find the right solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/help-center"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Get Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Sitemap;