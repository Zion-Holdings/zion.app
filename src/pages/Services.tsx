import React from 'react';

export function Services() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold text-center mb-8">
          Our Services
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Comprehensive AI, IT, and technology solutions to transform your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zion-blue-light/20 p-6 rounded-lg border border-zion-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-zion-cyan">AI & Machine Learning</h3>
            <p className="text-zion-slate-light">Custom AI development, ML model training, and strategic consulting</p>
          </div>
          <div className="bg-zion-blue-light/20 p-6 rounded-lg border border-zion-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-zion-cyan">Cloud & Infrastructure</h3>
            <p className="text-zion-slate-light">Migration, DevOps, Kubernetes management, and optimization</p>
          </div>
          <div className="bg-zion-blue-light/20 p-6 rounded-lg border border-zion-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-zion-cyan">Cybersecurity</h3>
            <p className="text-zion-slate-light">Security audits, compliance, threat protection, and monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}