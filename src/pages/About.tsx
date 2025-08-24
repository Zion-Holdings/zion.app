import React from 'react';

export function About() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold text-center mb-8">
          About Zion Tech Group
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Pioneering the future of technology with revolutionary AI consciousness, 
          quantum computing, and autonomous solutions that transform businesses worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-zion-cyan">Our Mission</h2>
            <p className="text-zion-slate-light mb-6">
              To democratize access to cutting-edge AI and technology solutions, 
              enabling businesses of all sizes to thrive in the digital age.
            </p>
            <p className="text-zion-slate-light">
              We combine deep technical expertise with innovative thinking to deliver 
              solutions that not only solve today's challenges but anticipate tomorrow's opportunities.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-zion-cyan">Our Vision</h2>
            <p className="text-zion-slate-light mb-6">
              To be the world's leading technology partner, driving the next wave of 
              digital transformation through AI, automation, and sustainable innovation.
            </p>
            <p className="text-zion-slate-light">
              We envision a future where technology seamlessly enhances human potential 
              and creates sustainable value for society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
