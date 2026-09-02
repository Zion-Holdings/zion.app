import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Field Service Management & Mobile Workforce - Zion Tech Group",
  description: "Field service management platform for mobile workforce. Scheduling, dispatch, work orders, and mobile app for technicians. Increase first-time fix rates by 35%.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-field-service-management`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-field-service-management`} title="IT Field Service Management & Mobile Workforce" />
        <h1 className="text-4xl font-bold mb-6">🔧 IT Field Service Management & Mobile Workforce</h1>
        <p className="text-lg text-gray-300 mb-8">Field service management platform for mobile workforce. Scheduling, dispatch, work orders, and mobile app for technicians. Increase first-time fix rates by 35%.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-optimized scheduling and dispatch</li>
            <li>Mobile app for technicians (iOS, Android)</li>
            <li>Work order management and tracking</li>
            <li>Parts and inventory management</li>
            <li>Customer portal and self-service</li>
            <li>Integration with CRM and billing</li>
            <li>GPS tracking and route optimization</li>
            <li>Analytics on technician performance</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase first-time fix rate by 35%</li>
            <li>Reduce travel time with AI routing</li>
            <li>Improve customer satisfaction with real-time updates</li>
            <li>Scale field operations without adding dispatchers</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$50/tech/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$85/tech/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
