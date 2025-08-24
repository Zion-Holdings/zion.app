import React from 'react';
<<<<<<< HEAD
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function EquipmentDetail() {
  return (
    <>
      <SEO
        title="Equipment Details - Zion Tech Group"
        description="View detailed information about tech equipment and rental options."
        canonical="https://ziontechgroup.com/equipment"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Equipment Details</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Detailed information about our tech equipment and rental options.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Equipment detail pages are currently under development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
=======

export default function EquipmentDetail() {
  return (
    <div className="min-h-screen bg-zion-blue-dark py-8 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">EquipmentDetail</h1>
        <p>EquipmentDetail page content will go here.</p>
      </div>
    </div>
  );
}
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
