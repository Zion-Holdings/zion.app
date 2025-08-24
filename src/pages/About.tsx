
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">About Zion Tech Group</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-zion-slate-light mb-6">
            Zion Tech Group is a leading technology marketplace that connects businesses with top AI and tech talent, 
            innovative services, and cutting-edge solutions. We specialize in micro SAAS services, AI development, 
            cloud solutions, cybersecurity, and enterprise technology consulting.
          </p>
          
          <p className="text-lg text-zion-slate-light mb-6">
            Our mission is to democratize access to advanced technology solutions, making it easier for businesses 
            of all sizes to leverage the power of AI, cloud computing, and digital transformation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-zion-blue-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-zion-slate-light">
                To become the world's most trusted platform for technology services and AI solutions, 
                empowering businesses to innovate and grow in the digital age.
              </p>
            </div>
            
            <div className="bg-zion-blue-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
              <p className="text-zion-slate-light">
                Innovation, quality, transparency, and customer success drive everything we do. 
                We believe in building lasting partnerships based on trust and mutual growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
