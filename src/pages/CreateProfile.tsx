import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { User, Briefcase, ArrowRight } from 'lucide-react';

export default function CreateProfile() {
  return (
    <>
      <SEO
        title="Create Profile | Zion AI Marketplace"
        description="Create your professional profile on Zion - choose between talent or service provider profiles"
        keywords="create profile, talent profile, service profile, Zion marketplace"
        canonical="https://ziontechgroup.com/create-profile"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Create Your Profile</h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Choose how you want to participate in the Zion AI Marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Talent Profile Option */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-purple transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-4">
                  <User className="h-8 w-8 text-zion-cyan" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Talent Profile</h2>
                <p className="text-zion-slate-light">
                  Showcase your skills and get hired for AI and tech projects
                </p>
              </div>
              
              <ul className="text-zion-slate-light space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Create a professional portfolio
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Get matched with relevant projects
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Set your rates and availability
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Receive job notifications
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
                <Link to="/create-talent-profile">
                  Create Talent Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Service Profile Option */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-purple transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-zion-cyan" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Service Profile</h2>
                <p className="text-zion-slate-light">
                  Offer your AI and tech services to clients worldwide
                </p>
              </div>
              
              <ul className="text-zion-slate-light space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  List your services and expertise
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Set service packages and pricing
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Manage client relationships
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Track project progress
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
                <Link to="/create-service-profile">
                  Create Service Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-zion-slate-light mb-4">
              Already have an account? <Link to="/login" className="text-zion-cyan hover:text-zion-cyan-light">Sign in</Link>
            </p>
            <p className="text-zion-slate-light">
              Need help? <Link to="/contact" className="text-zion-cyan hover:text-zion-cyan-light">Contact our support team</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}