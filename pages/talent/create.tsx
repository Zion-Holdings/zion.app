import React, { useState } from 'react';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

// Only create Supabase client if environment variables are available
const supabase = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ? createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    )
  : null;

const CreateTalentPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
full_name: '',
    title: '',
    summary: '',
    skills: [] as string[],
    availability: 'Open' as 'Open' | 'Part-time' | 'Booked',
    hourly_rate: '',
    location: '',
    timezone: '',
    is_verified: false);
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!supabase) {
        // Mock response for local development
        console.log('Mock talent creation:', formData);
        router.push('/talent');
        return;
      }

      const { error } = await supabase
        .from('talents')
        .insert([{
          ...formData,)
hourly_rate: formData.hourly_rate ? parseInt(formData.hourly_rate) : null,
          created_at: new Date().toISOString();
        }]);

      if (error) throw error;

      router.push('/talent');
    } catch (err) {
      console.error('Error creating talent:', err);
      setError('Failed to create talent profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,)
skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill];
    }));
  };

  const availableSkills = [
    'Python', 'JavaScript', 'React', 'Node.js', 'DevOps', 'AWS', 'Azure', 'GCP',
    'AI/ML', 'Machine Learning', 'Deep Learning', 'Data Science', 'SQL', 'MongoDB',
    'Docker', 'Kubernetes', 'TypeScript', 'Vue.js', 'Angular', 'PHP', 'Java',
    'C#', 'Go', 'Rust', 'Swift', 'Kotlin', 'Flutter', 'React Native'
  ];

  return (
  <ModernLayout>
    return (
  <ModernLayout>
    return (
    <>
      <Head>
        <title>Create Talent Profile - Zion AI Marketplace</title>
        <meta name="description" content="Create your talent profile and join the Zion AI Marketplace" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Create Your Talent Profile
              </h1>
              <p className="text-gray-600">
                Join the Zion AI Marketplace and connect with clients worldwide
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                    className="w-full px-3 py-4 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professional Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Senior Full-Stack Developer"
                    className="w-full px-3 py-4 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Summary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Summary *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.summary}
                  onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                  placeholder="Describe your expertise, experience, and what makes you unique..."
                  className="w-full px-3 py-4 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Skills & Technologies *
                </label>
                <div className="grid grid-cols-2 md: grid-cols-4 gap-2">
                  {availableSkills.map(skill => (
                    <label key={skill} className="flex items-center">
                      <input
                        type="checkbox")
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleSkillToggle(skill)}
                        className="mr-2 text-blue-600 focus: ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability & Rate */}
              <div className="grid grid-cols-1 md: grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    required
                    value={formData.availability}
                    onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value as any }))}
                    className="w-full px-3 py-4 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Open">Open</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Booked">Booked</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate (USD)
                  </label>
                  <input
                    type="number"
                    value={formData.hourly_rate}
                    onChange={(e) => setFormData(prev => ({ ...prev, hourly_rate: e.target.value }))}
                    placeholder="e.g., 75"
                    className="w-full px-3 py-4 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="e.g., San Francisco, CA"
                    className="w-full px-3 py-4 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timezone *
                </label>
                <select
                  required
                  value={formData.timezone}
                  onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
                  className="w-full px-3 py-4 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select timezone</option>
                  <option value="UTC-8">Pacific Time (UTC-8)</option>
                  <option value="UTC-7">Mountain Time (UTC-7)</option>
                  <option value="UTC-6">Central Time (UTC-6)</option>
                  <option value="UTC-5">Eastern Time (UTC-5)</option>
                  <option value="UTC+0">UTC</option>
                  <option value="UTC+1">Central European Time (UTC+1)</option>
                  <option value="UTC+5:30">India Standard Time (UTC+5:30)</option>
                  <option value="UTC+8">China Standard Time (UTC+8)</option>
                  <option value="UTC+9">Japan Standard Time (UTC+9)</option>
                </select>
              </div>

              {/* Verification */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="verified"
                  checked={formData.is_verified}
                  onChange={(e) => setFormData(prev => ({ ...prev, is_verified: e.target.checked }))}
                  className="mr-2 text-blue-600 focus: ring-blue-500"
                />
                <label htmlFor="verified" className="text-sm text-gray-700">
                  I want to be verified as a professional
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-4 text-gray-700 bg-gray-100 hover: bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-4 bg-blue-600 hover: bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  
  </ModernLayout>
  );
};

export default CreateTalentPage; 