import React from 'react';

export default function PaidConsultation() {
  return (
    <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-8">
      <h3 className="text-xl font-semibold">Book a paid consultation</h3>
      <p className="mt-2">Get expert guidance tailored to your needs.</p>
      <a href="/contact" className="btn btn-success mt-4">Book now</a>
    </section>
  );
}
