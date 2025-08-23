import { Check } from 'lucide-react';



export function ServiceIncludes() {
  return (
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-8 my-20">
      <h2 className="text-2xl font-bold text-white text-center mb-8">What's Included in Every Service</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-zion-cyan" />
            </div>
            <div>
              <h3 className="text-white font-medium">Transportation to Site</h3>
              <p className="text-zion-slate-light">All travel costs to your location are included in the base price.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-zion-cyan" />
            </div>
            <div>
              <h3 className="text-white font-medium">First Hour of Service</h3>
              <p className="text-zion-slate-light">The first hour of technical work at your site is included.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-zion-cyan" />
            </div>
            <div>
              <h3 className="text-white font-medium">Technical Assessment</h3>
              <p className="text-zion-slate-light">Comprehensive evaluation of issues and required solutions.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-zion-cyan" />
            </div>
            <div>
              <h3 className="text-white font-medium">Basic Hardware Diagnostics</h3>
              <p className="text-zion-slate-light">Component testing and hardware issue identification.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-zion-cyan" />
            </div>
            <div>
              <h3 className="text-white font-medium">Network Connectivity</h3>
              <p className="text-zion-slate-light">Troubleshooting of basic network connectivity problems.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-zion-cyan" />
            </div>
            <div>
              <h3 className="text-white font-medium">Service Documentation</h3>
              <p className="text-zion-slate-light">Detailed report of work performed and recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
