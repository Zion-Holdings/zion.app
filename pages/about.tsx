import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ModernLayout from '../components/layout/ModernLayout';
import ResponsiveNavigation from '../components/ResponsiveNavigation';

const AboutPage: NextPage = () => {
  const $1 = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <ModernLayout>
      <Head>
        <title>About Us - Zion App</title>
        <meta name="description" content="Learn more about Zion App and our mission to revolutionize technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <ResponsiveNavigation items={navigationItems} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              About Zion App
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We are revolutionizing the way businesses approach technology solutions through innovative AI-powered platforms and cutting-edge automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with intelligent, scalable, and innovative technology solutions that drive growth and efficiency.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading platform for AI-powered business solutions, making advanced technology accessible to all.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
              <p className="text-gray-300">
                Innovation, integrity, excellence, and customer success drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ModernLayout>
  );
};

export default AboutPage;