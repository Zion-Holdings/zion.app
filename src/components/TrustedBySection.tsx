import React from 'react';

export function TrustedBySection() {
  const companies = [
    'Microsoft', 'Google', 'Amazon', 'Meta', 'Apple', 'Netflix'
  ];

  return (
    <section className="py-16 bg-white/5">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-medium text-zion-slate-light mb-8">
          Trusted by leading companies worldwide
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {companies.map((company) => (
            <div key={company} className="text-zion-slate-light font-semibold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}