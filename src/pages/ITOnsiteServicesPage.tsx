

export default function ITOnsiteServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">IT Onsite Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional IT support and consulting services delivered directly to your location
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Our Onsite IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Network Setup & Maintenance</h3>
              <p className="text-gray-600">Complete network infrastructure setup, configuration, and ongoing maintenance</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Hardware Installation</h3>
              <p className="text-gray-600">Server setup, workstation configuration, and peripheral installation</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Security Audits</h3>
              <p className="text-gray-600">Comprehensive security assessments and vulnerability testing</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
              <p className="text-gray-600">24/7 emergency response for critical IT issues</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Us for Onsite Services</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Mobile:</strong> +1 302 464 0950</p>
              <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}