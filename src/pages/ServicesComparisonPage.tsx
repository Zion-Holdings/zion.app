import React from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { CheckCircle, XCircle, Star, TrendingUp, Shield, Clock, Users } from 'lucide-react';

export default function ServicesComparisonPage() {
  const popularServices = COMPREHENSIVE_SERVICES.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Services Comparison</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            See how Zion Tech Group's services stack up against the competition. 
            Get more value, better support, and superior technology at competitive prices.
          </p>
          <div className="space-x-4">
            <a 
              href="/comprehensive-services" 
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Services
            </a>
            <a 
              href="tel:+13024640950" 
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Competitive Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">Competitive Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-green-600">Zion Tech Group</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-600">Competitor A</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-600">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Starting Price</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">$299</td>
                  <td className="py-4 px-4 text-center">$599</td>
                  <td className="py-4 px-4 text-center">$799</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Support Response</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">2 hours</td>
                  <td className="py-4 px-4 text-center">24 hours</td>
                  <td className="py-4 px-4 text-center">48 hours</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Security Compliance</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">SOC 2, GDPR</td>
                  <td className="py-4 px-4 text-center">Basic</td>
                  <td className="py-4 px-4 text-center">Standard</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Deployment Time</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">3-5 days</td>
                  <td className="py-4 px-4 text-center">2-4 weeks</td>
                  <td className="py-4 px-4 text-center">1-2 months</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Customization</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Unlimited</td>
                  <td className="py-4 px-4 text-center">Limited</td>
                  <td className="py-4 px-4 text-center">Moderate</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Uptime Guarantee</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">99.9%</td>
                  <td className="py-4 px-4 text-center">99.5%</td>
                  <td className="py-4 px-4 text-center">99.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature-by-Feature Comparison */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">Feature-by-Feature Comparison</h2>
          <div className="space-y-6">
            {popularServices.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Zion Tech Group</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">${service.price}</div>
                    <div className="text-sm text-green-700">
                      {SERVICE_CATEGORIES.find(cat => cat.id === service.category)?.name || 'Service'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Competitor A</h4>
                    <div className="text-2xl font-bold text-gray-600 mb-2">${Math.round(service.price * 1.8)}</div>
                    <div className="text-sm text-gray-700">Similar Service</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Competitor B</h4>
                    <div className="text-2xl font-bold text-gray-600 mb-2">${Math.round(service.price * 2.2)}</div>
                    <div className="text-sm text-gray-700">Similar Service</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Zion Tech Group Wins */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Zion Tech Group Wins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Cost Savings</h4>
                  <p className="text-gray-600">Save up to 60% compared to enterprise competitors while getting superior quality and support.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Faster Time to Market</h4>
                  <p className="text-gray-600">Deploy solutions in days instead of months with our rapid implementation methodology.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Better Security</h4>
                  <p className="text-gray-600">Enterprise-grade security with SOC 2 compliance and regular security audits.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Superior Support</h4>
                  <p className="text-gray-600">24/7 expert support with dedicated account managers and priority response times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Zion Tech Group delivered our AI chatbot in just 4 days. The quality and support exceeded our expectations."
              </p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CEO, TechStart Inc.</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "We saved over $50,000 compared to other vendors while getting better features and faster deployment."
              </p>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-gray-500">CTO, GrowthCorp</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The security features and compliance exceeded our banking industry requirements. Highly recommended!"
              </p>
              <div className="font-semibold">Lisa Rodriguez</div>
              <div className="text-sm text-gray-500">Security Director, BankSecure</div>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">Calculate Your Savings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cost Comparison</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Zion Tech Group:</span>
                  <span className="font-semibold text-green-600">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Competitor A:</span>
                  <span className="font-semibold text-red-600">$4,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Competitor B:</span>
                  <span className="font-semibold text-red-600">$5,500</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Your Savings:</span>
                  <span className="text-green-600">$2,000 - $3,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Time Savings</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Zion Tech Group:</span>
                  <span className="font-semibold text-green-600">5 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Competitor A:</span>
                  <span className="font-semibold text-red-600">3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Competitor B:</span>
                  <span className="font-semibold text-red-600">6 weeks</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Time Saved:</span>
                  <span className="text-green-600">2-5 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Save Money and Time?</h2>
          <p className="text-lg mb-6">
            Contact us today to discuss your project and see how much you can save with Zion Tech Group
          </p>
          <div className="space-y-2 text-sm mb-6">
            <p><strong>Mobile:</strong> +1 302 464 0950</p>
            <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
          <div className="space-x-4">
            <a 
              href="/comprehensive-services" 
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Services
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}