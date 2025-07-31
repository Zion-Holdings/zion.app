import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

interface Talent {
  id: string;
  full_name: string;
  title: string;
  summary: string;
  skills: string[];
  availability: 'Open' | 'Part-time' | 'Booked';
  hourly_rate?: number;
  location: string;
  timezone: string;
  profile_picture?: string;
  is_verified: boolean;
  rating?: number;
  is_new: boolean;
  created_at: string;
  portfolio?: string;
  video_intro?: string;
  experience_years?: number;
  education?: string;
  certifications?: string[];
}

interface Review {
  id: string;
  client_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function TalentProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [talent, setTalent] = useState<Talent | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    project_description: '',
    budget: '',
    timeline: ''
  });

  const fetchTalent = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('talents')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setTalent(data);
    } catch (error) {
      console.error('Error fetching talent:', error);
      router.push('/talent');
    } finally {
      setLoading(false);
    }
  }, [id, router]);

  const fetchReviews = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('talent_reviews')
        .select('*')
        .eq('talent_id', id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchTalent();
      fetchReviews();
    }
  }, [id, fetchTalent, fetchReviews]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the contact form to your backend
    // For now, we'll just show a success message
    alert('Thank you for your interest! We will get back to you soon.');
    setShowContactForm(false);
    setContactForm({
      name: '',
      email: '',
      company: '',
      project_description: '',
      budget: '',
      timeline: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!talent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Talent not found</h1>
          <Link href="/talent" className="text-blue-600 hover:text-blue-700">
            Back to Talent Directory
          </Link>
        </div>
      </div>
    );
  }

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  return (
    <>
      <Head>
        <title>{talent.full_name} - Zion AI Marketplace</title>
        <meta name="description" content={talent.summary} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/talent" className="text-blue-600 hover:text-blue-700 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Talent Directory
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Profile Header */}
              <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {talent.full_name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h1 className="text-3xl font-bold text-gray-900">{talent.full_name}</h1>
                        {talent.is_verified && (
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-xl text-gray-600 mb-2">{talent.title}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{talent.location}</span>
                        <span>•</span>
                        <span>{talent.timezone}</span>
                        {talent.experience_years && (
                          <>
                            <span>•</span>
                            <span>{talent.experience_years} years experience</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 text-right">
                    <div className="mb-4">
                      {talent.hourly_rate ? (
                        <span className="text-3xl font-bold text-gray-900">${talent.hourly_rate}/hr</span>
                      ) : (
                        <span className="text-xl text-gray-600">Request Quote</span>
                      )}
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      talent.availability === 'Open' ? 'bg-green-100 text-green-800' :
                      talent.availability === 'Part-time' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {talent.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">{talent.summary}</p>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
                <div className="flex flex-wrap gap-3">
                  {talent.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              {talent.portfolio && (
                <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio</h2>
                  <a
                    href={talent.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 transition-all duration-200"
                  >
                    View Portfolio
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Video Introduction */}
              {talent.video_intro && (
                <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Video Introduction</h2>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={talent.video_intro}
                      className="w-full h-64 rounded-lg"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Reviews */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                  {reviews.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg
                            key={star}
                            className={`w-5 h-5 ${
                              star <= averageRating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">({reviews.length} reviews)</span>
                    </div>
                  )}
                </div>

                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{review.client_name}</h3>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map(star => (
                              <svg
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(review.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet. Be the first to review this talent!</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Contact Card */}
                <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-200 mb-4"
                  >
                    Contact {talent.full_name}
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    Response time: Usually within 24 hours
                  </p>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Location</span>
                      <p className="text-gray-900">{talent.location}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Timezone</span>
                      <p className="text-gray-900">{talent.timezone}</p>
                    </div>
                    {talent.education && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Education</span>
                        <p className="text-gray-900">{talent.education}</p>
                      </div>
                    )}
                    {talent.certifications && talent.certifications.length > 0 && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Certifications</span>
                        <div className="space-y-1">
                          {talent.certifications.map(cert => (
                            <p key={cert} className="text-gray-900">{cert}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact {talent.full_name}</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                  <textarea
                    required
                    rows={3}
                    value={contactForm.project_description}
                    onChange={(e) => setContactForm({...contactForm, project_description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                    <input
                      type="text"
                      value={contactForm.budget}
                      onChange={(e) => setContactForm({...contactForm, budget: e.target.value})}
                      placeholder="e.g., $5k-10k"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                    <input
                      type="text"
                      value={contactForm.timeline}
                      onChange={(e) => setContactForm({...contactForm, timeline: e.target.value})}
                      placeholder="e.g., 2-3 months"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 