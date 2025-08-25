import React, { useState } from 'react';
import { SEO } from '@/components/SEO';

export default function CreateProfile() {
  const [profileType, setProfileType] = useState<'talent' | 'service' | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <>
      <SEO
        title="Create Profile | Zion Tech Group"
        description="Create your professional profile on Zion Tech Group's marketplace platform"
        keywords="create profile, talent profile, service profile, marketplace registration, Zion Tech Group"
        canonical="https://ziontechgroup.com/create-profile"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Create Your Profile
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Join our marketplace and connect with opportunities in technology, AI, and digital transformation
              </p>
            </div>

            {/* Profile Type Selection */}
            {!profileType && (
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  Choose Your Profile Type
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button
                    onClick={() => setProfileType('talent')}
                    className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors text-left group"
                  >
                    <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Talent Profile</h3>
                    <p className="text-zion-slate-light">
                      Showcase your skills and experience to find exciting opportunities in technology and AI.
                    </p>
                    <ul className="text-zion-slate-light text-sm mt-3 space-y-1">
                      <li>• Highlight your expertise</li>
                      <li>• Connect with employers</li>
                      <li>• Build your professional network</li>
                    </ul>
                  </button>

                  <button
                    onClick={() => setProfileType('service')}
                    className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors text-left group"
                  >
                    <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Service Profile</h3>
                    <p className="text-zion-slate-light">
                      Offer your services and solutions to businesses seeking technology expertise.
                    </p>
                    <ul className="text-zion-slate-light text-sm mt-3 space-y-1">
                      <li>• Promote your services</li>
                      <li>• Reach new clients</li>
                      <li>• Grow your business</li>
                    </ul>
                  </button>
                </div>
              </div>
            )}

            {/* Profile Creation Form */}
            {profileType && (
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zion-slate-light">Step {currentStep} of 4</span>
                    <span className="text-zion-cyan font-semibold">
                      {profileType === 'talent' ? 'Talent Profile' : 'Service Profile'}
                    </span>
                  </div>
                  <div className="w-full bg-zion-blue rounded-full h-2">
                    <div 
                      className="bg-zion-cyan h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Basic Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">First Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">Last Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Location *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="City, State/Province, Country"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={nextStep}
                        className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Professional Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Professional Details</h2>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {profileType === 'talent' ? 'Professional Title' : 'Service Name'} *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder={profileType === 'talent' ? 'e.g., Senior AI Engineer' : 'e.g., Cybersecurity Consulting'}
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Bio/Description *</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none resize-none"
                        placeholder="Tell us about yourself and your expertise..."
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Skills & Expertise *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="e.g., AI, Machine Learning, Cybersecurity, Cloud Computing"
                      />
                      <p className="text-zion-slate-light text-sm mt-2">
                        Separate multiple skills with commas
                      </p>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Experience Level *</label>
                      <select className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none">
                        <option value="">Select experience level</option>
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="mid">Mid Level (3-7 years)</option>
                        <option value="senior">Senior Level (8+ years)</option>
                        <option value="expert">Expert Level (15+ years)</option>
                      </select>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="bg-transparent border border-zion-blue-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextStep}
                        className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Portfolio & Work */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Portfolio & Work</h2>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">Portfolio URL</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="https://your-portfolio.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="https://linkedin.com/in/your-profile"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">GitHub Profile</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="https://github.com/your-username"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Certifications</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none resize-none"
                        placeholder="List any relevant certifications..."
                      />
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="bg-transparent border border-zion-blue-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextStep}
                        className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Review & Submit</h2>
                    
                    <div className="bg-zion-blue rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Profile Summary</h3>
                      <div className="space-y-3 text-zion-slate-light">
                        <div className="flex justify-between">
                          <span>Profile Type:</span>
                          <span className="text-white capitalize">{profileType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span className="text-white">John Doe</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Email:</span>
                          <span className="text-white">john.doe@example.com</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span className="text-white">New York, NY, USA</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Title:</span>
                          <span className="text-white">Senior AI Engineer</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Experience:</span>
                          <span className="text-white">Senior Level</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="terms" className="w-4 h-4 text-zion-cyan" />
                      <label htmlFor="terms" className="text-zion-slate-light">
                        I agree to the <a href="/terms" className="text-zion-cyan hover:underline">Terms of Service</a> and{' '}
                        <a href="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</a>
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="bg-transparent border border-zion-blue-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Previous
                      </button>
                      <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
                        Create Profile
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Benefits Section */}
            <div className="mt-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Create a Profile?
              </h2>
              <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
                Join thousands of professionals and businesses already using our platform to connect, 
                collaborate, and grow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
                  <p className="text-zion-slate-light text-sm">
                    Build your professional network and connect with industry leaders
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Grow</h3>
                  <p className="text-zion-slate-light text-sm">
                    Access new opportunities and expand your professional reach
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Succeed</h3>
                  <p className="text-zion-slate-light text-sm">
                    Leverage our platform to achieve your professional goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}