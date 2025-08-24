import React from 'react';
<<<<<<< HEAD
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function MobileLaunchPage() {
  return (
    <>
      <SEO
        title="Mobile App - Zion Tech Group"
        description="Download our mobile app for on-the-go access to the tech marketplace."
        canonical="https://ziontechgroup.com/mobile-launch"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Mobile App</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Access the Zion Tech Group marketplace from anywhere with our mobile app.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our mobile app is currently under development and will be available soon on iOS and Android.
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
