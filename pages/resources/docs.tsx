import React from 'react';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function ResourcesDocsPage() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Documentation
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Comprehensive guides and API documentation to help you integrate with Zion.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Zion Tech Marketplace?
            </h2>
            <p className="text-zion-slate-light mb-6">
              Zion connects global talent with forward-thinking companies in a unified hub. Our
              marketplace streamlines collaboration with built-in governance and transparent
              rewards.
            </p>
            <div className="aspect-video max-w-3xl mx-auto">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Zion Tech Marketplace Quick Start"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-light">
            <h3 className="text-xl font-semibold text-white mb-3">Getting Started</h3>
            <p className="text-zion-slate-light mb-4">
              Learn the basics of using Zion's platform and services.
            </p>
            <a href="/docs/getting-started" className="text-blue-400 hover:text-blue-300">
              Read more →
            </a>
          </div>
          
          <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-light">
            <h3 className="text-xl font-semibold text-white mb-3">API Reference</h3>
            <p className="text-zion-slate-light mb-4">
              Complete API documentation with examples and best practices.
            </p>
            <a href="/docs/api-reference" className="text-blue-400 hover:text-blue-300">
              Read more →
            </a>
          </div>
          
          <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-light">
            <h3 className="text-xl font-semibold text-white mb-3">Integration Guide</h3>
            <p className="text-zion-slate-light mb-4">
              Step-by-step guides for integrating Zion into your applications.
            </p>
            <a href="/docs/integration" className="text-blue-400 hover:text-blue-300">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 