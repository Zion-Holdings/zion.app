import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap | Zion Tech Group"
        description="Complete sitemap for all public routes and pages on Zion Tech Group"
        keywords="sitemap, navigation, Zion Tech Group, routes"
        canonical="https://ziontechgroup.com/sitemap"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Complete navigation guide for Zion Tech Group. Find all our pages, services, and resources.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Pages */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-blue-200 pb-2">
                  Main Pages
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-blue-200 pb-2">
                  Services
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/comprehensive-services" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      Comprehensive Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/ai-services" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      AI Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/cybersecurity-services" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      Cybersecurity Services
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Service Categories */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-blue-200 pb-2">
                  Service Categories
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-600 block py-1">
                      AI & Machine Learning
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Cybersecurity
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Cloud & DevOps
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Data & Analytics
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Digital Transformation
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      IoT & Edge Computing
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Blockchain & Web3
                    </span>
                  </li>
                </ul>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-blue-200 pb-2">
                  Contact Information
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="tel:+13024640950" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      Phone: +1 302 464 0950
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      Email: kleber@ziontechgroup.com
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Address: 364 E Main St STE 1008 Middletown DE 19709
                    </span>
                  </li>
                  <li>
                    <a 
                      href="https://ziontechgroup.com" 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors block py-1"
                    >
                      Website: ziontechgroup.com
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Resources */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-blue-200 pb-2">
                  Resources
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-600 block py-1">
                      Free Consultation
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Service Quotes
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Technical Support
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Documentation
                    </span>
                  </li>
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-blue-200 pb-2">
                  Company
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-600 block py-1">
                      Zion Tech Group
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      IT Services
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      AI Solutions
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 block py-1">
                      Micro SAAS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Our Services</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides comprehensive IT and AI services including micro SAAS solutions, 
                cybersecurity, cloud migration, and digital transformation consulting. Our services are 
                designed to help businesses of all sizes accelerate their growth and digital transformation.
              </p>
              <p className="text-gray-600">
                Contact us today for a free consultation and discover how our expert services can transform your business.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
