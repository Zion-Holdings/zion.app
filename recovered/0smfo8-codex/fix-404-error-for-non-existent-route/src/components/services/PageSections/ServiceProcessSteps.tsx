
export function ServiceProcessSteps() {
  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-white text-center mb-12">How Our IT Onsite Service Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-zion-purple flex items-center justify-center text-white font-bold">1</div>
          <h3 className="text-lg font-bold text-white mb-3">Select Country</h3>
          <p className="text-zion-slate-light">Choose the country where you need onsite IT support services.</p>
        </div>
        
        <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-zion-purple flex items-center justify-center text-white font-bold">2</div>
          <h3 className="text-lg font-bold text-white mb-3">Purchase Service</h3>
          <p className="text-zion-slate-light">Complete the secure payment for your selected location.</p>
        </div>
        
        <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-zion-purple flex items-center justify-center text-white font-bold">3</div>
          <h3 className="text-lg font-bold text-white mb-3">Provide Details</h3>
          <p className="text-zion-slate-light">Share your site information and technical requirements with our team.</p>
        </div>
        
        <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-zion-purple flex items-center justify-center text-white font-bold">4</div>
          <h3 className="text-lg font-bold text-white mb-3">Service Delivery</h3>
          <p className="text-zion-slate-light">Our local technicians arrive at your site within the guaranteed response time.</p>
        </div>
      </div>
    </div>
  );
}
