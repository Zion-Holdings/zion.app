import React from 'react';
<<<<<<< HEAD
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function EquipmentPage() {
  return (
    <>
      <SEO
        title="Tech Equipment - Zion Tech Group"
        description="Browse and rent professional tech equipment for your projects."
        canonical="https://ziontechgroup.com/equipment"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Tech Equipment</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Access to professional-grade technology equipment for your development and testing needs.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our equipment marketplace is currently under development. Soon you'll be able to browse, rent, and purchase professional tech equipment.
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

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-zion-blue-dark py-8 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Equipment Page</h1>
        <p>Equipment Page content will go here.</p>
      </div>
    </div>
  );
}
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
