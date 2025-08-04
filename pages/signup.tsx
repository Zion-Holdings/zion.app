import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: 'buyer' | 'service-provider' | 'talent' | 'equipment-owner';
  company?: string;
  phone?: string;
  location: string;
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

interface SignupFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  userType?: string;
  company?: string;
  phone?: string;
  location?: string;
  agreeToTerms?: string;
  agreeToMarketing?: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'buyer',
    company: '',
    phone: '',
    location: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const [errors, setErrors] = useState<SignupFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const router = useRouter();

  const userTypes = [
    { value: 'buyer', label: 'Buyer', description: 'Looking to purchase services or hire talent' },
    { value: 'service-provider', label: 'Service Provider', description: 'Offering professional services' },
    { value: 'talent', label: 'Talent', description: 'Individual professional or freelancer' },
    { value: 'equipment-owner', label: 'Equipment Owner', description: 'Renting out equipment or tools' }
  ];

  const locations = [
    'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA', 'Boston, MA', 'Chicago, IL',
    'Los Angeles, CA', 'Denver, CO', 'Atlanta, GA', 'Miami, FL', 'Remote', 'Other'
  ];

  const handleInputChange = (field: keyof SignupFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: SignupFormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.location) {
      newErrors.location = 'Location is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Redirect to dashboard after successful signup
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Join Zion - Sign Up</title>
        <meta name="description" content="Join Zion - The first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment." />
        <meta name="keywords" content="signup, register, join, Zion marketplace, AI services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Already have an account? Sign In
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join the Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Marketplace</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with AI-powered services, top-tier talent, and cutting-edge equipment. 
                Join thousands of professionals already using Zion to grow their business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Signup Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Create Your Account</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.firstName ? 'border-red-500' : 'border-white/20'
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-3 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.lastName ? 'border-red-500' : 'border-white/20'
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.password ? 'border-red-500' : 'border-white/20'
                        }`}
                        placeholder="Create a password"
                      />
                      {errors.password && (
                        <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          errors.confirmPassword ? 'border-red-500' : 'border-white/20'
                        }`}
                        placeholder="Confirm your password"
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      I am a *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {userTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all ${
                            formData.userType === type.value
                              ? 'bg-purple-500/20 border-purple-500/50'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <input
                            type="radio"
                            name="userType"
                            value={type.value}
                            checked={formData.userType === type.value}
                            onChange={(e) => handleInputChange('userType', e.target.value)}
                            className="mt-1 mr-3"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-white">{type.label}</div>
                            <div className="text-sm text-gray-400">{type.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.userType === 'service-provider' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Location *
                    </label>
                    <select
                      required
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.location ? 'border-red-500' : 'border-white/20'
                      }`}
                    >
                      <option value="">Select your location</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                    {errors.location && (
                      <p className="text-red-400 text-sm mt-1">{errors.location}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-gray-300">
                        I agree to the{' '}
                        <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                          Privacy Policy
                        </Link>
                        *
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>
                    )}

                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.agreeToMarketing}
                        onChange={(e) => handleInputChange('agreeToMarketing', e.target.checked)}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-gray-300">
                        I would like to receive updates about new features and marketplace opportunities
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-400">
                      Account created successfully! Redirecting to dashboard...
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-400">
                      There was an error creating your account. Please try again.
                    </div>
                  )}
                </form>
              </motion.div>

              {/* Benefits Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-6">Why Join Zion?</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">AI-Powered Matching</h3>
                        <p className="text-gray-300">Our advanced AI connects you with the perfect services and talent</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Secure Transactions</h3>
                        <p className="text-gray-300">Blockchain technology ensures safe and transparent payments</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Lightning Fast</h3>
                        <p className="text-gray-300">99.9% transaction success rate with instant processing</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🌍</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Global Network</h3>
                        <p className="text-gray-300">Connect with professionals worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-6">What You Can Do</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Browse and hire top-tier AI talent</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Access cutting-edge IT services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Rent professional equipment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Get instant quotes and proposals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Secure escrow protection</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-6">Already Have an Account?</h2>
                  <p className="text-gray-300 mb-4">
                    Sign in to access your dashboard and continue growing your business.
                  </p>
                  <Link
                    href="/auth/login"
                    className="inline-block bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Sign In
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-400">
              <p>© 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}