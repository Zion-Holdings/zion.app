
export const metadata = {
  title: "Invoice & Purchase Order Processing - Zion Tech Group",
  description: "AI-powered invoice + PO processing pipeline: scans, OCR, vendor matching via payment history, line-item validation vs. PO, three-way match against GRN, GL-code ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/invoice--purchase-order-processing-91193135`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Invoice &amp; Purchase Order Processing</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered invoice + PO processing pipeline: scans, OCR, vendor matching via payment history, line-item validation vs. PO, three-way match against GRN, GL-code auto-suggestion, ERP posting stub, and exception-routing for unmatched documents.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-format OCR: scanned PDF, email attachment, vendor portal, API, paper mail with routing</li>
            <li>Three-way match: invoice vs. PO vs. goods-received note auto-compared per line item</li>
            <li>GL-code suggestion: vendor + line-item category ML classification with override audit trail</li>
            <li>Exception routing: unmatched → human worker queue with one-click approve/reject/edit</li>
            <li>ERP posting API stub: NetSuite, QuickBooks, Sage, Xero, Workday all pre-wired</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-process up to 90% of invoices end-to-end without human touch — AP team only handles exceptions</li>
            <li>Cut invoice-processing cost from $12-20 per doc to $1-2 per doc</li>
            <li>Eliminate duplicate payment risk with automated PO match — avoid painful subsequent vendor refunds</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$149/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$549/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
