import { } from 'next/navigation';

export const metadata = {
  title: "Computer Vision Quality Inspection - Zion Tech Group",
  description: "Manufacturing/production line defect detection via camera feed YOLO/RT-DETR inference, real-time alarms, and SPC (Statistical Process Control) shift reports.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-vision-quality-inspection`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Computer Vision Quality Inspection</h1>
        <p className="text-lg text-gray-300 mb-8">Manufacturing/production line defect detection via camera feed YOLO/RT-DETR inference, real-time alarms, and SPC (Statistical Process Control) shift reports.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>YOLOv8/RT-DETR model fine-tune on your SKU</li>
            <li>Inference on edge device &lt;30ms per frame</li>
            <li>Real-time alarm + MES work-order auto-create</li>
            <li>SPC chart + shift defect trend report</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Catch production defects before they ship</li>
            <li>Edge inference = no network round-trip delay</li>
            <li>MES integration = no manual data entry</li>
            <li>Catch more defects = lower scrap cost</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$4999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$11999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$34999</p>
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
