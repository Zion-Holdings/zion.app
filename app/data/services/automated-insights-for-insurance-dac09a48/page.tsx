import { } from 'next/navigation';

export const metadata = {
  title: "Automated Insights for Insurance - Zion Tech Group",
  description: "The future of insurance is here with Automated Insights for Insurance. Powered by cutting-edge AI, this platform delivers audit trail management like never before.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/automated-insights-for-insurance-dac09a48`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Automated Insights for Insurance</h1>
        <p className="text-lg text-gray-300 mb-8">The future of insurance is here with Automated Insights for Insurance. Powered by cutting-edge AI, this platform delivers audit trail management like never before.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Language processing with sentiment analysis</li>
            <li>Mobile-responsive interface with offline capabilities</li>
            <li>Healthcare data analytics with patient insights</li>
            <li>Threat intelligence with feeds</li>
            <li>Process discovery with activity analysis</li>
            <li>Compliance monitoring with regulatory updates</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved performance review completion rates</li>
            <li>Reduced employee turnover rates</li>
            <li>Improved SEO rankings and organic traffic</li>
            <li>Higher first call resolution (FCR) rates</li>
            <li>3x faster decision making with real-time insights</li>
            <li>Reduced operational risks with predictive models</li>
            <li>Reduced cart abandonment rates</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1499</p>
            </div>
          </div>
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
