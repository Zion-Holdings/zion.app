import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

interface TalentForm {
  full_name: string;
  title: string;
  bio: string;
  experience: string;
  skills: string;
  hourly_rate?: number;
  location: string;
  timezone: string;
  availability: 'Open' | 'Part-time' | 'Booked';
  portfolio?: string;
  video_intro?: string;
  education?: string;
  certifications?: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CreateTalentProfile() {
  const router = useRouter();
  const [form, setForm] = useState<TalentForm>({
    full_name: '',
    title: '',
    bio: '',
    experience: '',
    skills: '',
    hourly_rate: undefined,
    location: '',
    timezone: '',
    availability: 'Open',
    portfolio: '',
    video_intro: '',
    education: '',
    certifications: ''
  });

  const [loading, setLoading] = useState(false);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [generatedSkills, setGeneratedSkills] = useState<string[]>([]);
  const [generatedTitle, setGeneratedTitle] = useState('');

  const timezones = [
    'UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00',
    'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00', 'UTC-01:00',
    'UTC+00:00', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00',
    'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00', 'UTC+11:00',
    'UTC+12:00'
  ];

  const generateAIContent = async () => {
    if (!form.bio || !form.experience || !form.skills) {
      alert('Please fill in your bio, experience, and skills first to generate AI content.');
      return;
    }

    setAiGenerating(true);
    try {
      const prompt = `Based on the following information about a professional:

Bio: ${form.bio}
Experience: ${form.experience}
Skills: ${form.skills}

Please provide:
1. A compelling professional summary (100-150 words)
2. A professional title that reflects their expertise
3. A standardized list of skills (comma-separated)

Format the response as JSON:
{
  "summary": "professional summary here",
  "title": "professional title here",
  "skills": ["skill1", "skill2", "skill3"]
}`;

      const response = await fetch('/api/generate-talent-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      setGeneratedSummary(data.summary);
      setGeneratedTitle(data.title);
      setGeneratedSkills(data.skills);
    } catch (error) {
      console.error('Error generating AI content:', error);
      alert('Failed to generate AI content. Please try again.');
    } finally {
      setAiGenerating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const talentData = {
        full_name: form.full_name,
        title: generatedTitle || form.title,
        summary: generatedSummary || form.bio,
        skills: generatedSkills.length > 0 ? generatedSkills : form.skills.split(',').map(s => s.trim()),
        hourly_rate: form.hourly_rate,
        location: form.location,
        timezone: form.timezone,
        availability: form.availability,
        portfolio: form.portfolio || null,
        video_intro: form.video_intro || null,
        education: form.education || null,
        certifications: form.certifications ? form.certifications.split(',').map(c => c.trim()) : null,
        is_verified: false,
        is_new: true,
        created_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('talents')
        .insert([talentData])
        .select()
        .single();

      if (error) throw error;

      router.push(`/talent/${data.id}`);
    } catch (error) {
      console.error('Error creating talent profile:', error);
      alert('Failed to create profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Create Talent Profile - Zion AI Marketplace</title>
        <meta name="description" content="Join Zion AI Marketplace as a talent" />
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Talent Profile</h1>
              <p className="text-gray-600">Join Zion AI Marketplace and connect with top companies worldwide</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.full_name}
                      onChange={(e) => setForm({...form, full_name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => setForm({...form, title: e.target.value})}
                      placeholder="e.g., Senior Full Stack Developer"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Bio and Experience */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">About You</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.bio}
                      onChange={(e) => setForm({...form, bio: e.target.value})}
                      placeholder="Tell us about yourself, your background, and what drives you..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.experience}
                      onChange={(e) => setForm({...form, experience: e.target.value})}
                      placeholder="Describe your work experience, key projects, and achievements..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills & Expertise</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills *</label>
                  <textarea
                    required
                    rows={3}
                    value={form.skills}
                    onChange={(e) => setForm({...form, skills: e.target.value})}
                    placeholder="List your technical skills, tools, and technologies (comma-separated)..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* AI Generation */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">AI-Powered Profile Enhancement</h3>
                  <button
                    type="button"
                    onClick={generateAIContent}
                    disabled={aiGenerating || !form.bio || !form.experience || !form.skills}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {aiGenerating ? 'Generating...' : 'Generate AI Content'}
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Let AI help you create a compelling professional summary, optimized title, and standardized skills.
                </p>

                {generatedSummary && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">AI-Generated Summary</label>
                      <textarea
                        rows={4}
                        value={generatedSummary}
                        onChange={(e) => setGeneratedSummary(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">AI-Generated Title</label>
                      <input
                        type="text"
                        value={generatedTitle}
                        onChange={(e) => setGeneratedTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">AI-Generated Skills</label>
                      <div className="flex flex-wrap gap-2">
                        {generatedSkills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Professional Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Professional Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate (USD)</label>
                    <input
                      type="number"
                      min="0"
                      value={form.hourly_rate || ''}
                      onChange={(e) => setForm({...form, hourly_rate: e.target.value ? parseInt(e.target.value) : undefined})}
                      placeholder="e.g., 75"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                    <select
                      required
                      value={form.availability}
                      onChange={(e) => setForm({...form, availability: e.target.value as any})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Open">Open for new projects</option>
                      <option value="Part-time">Part-time availability</option>
                      <option value="Booked">Currently booked</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                    <input
                      type="text"
                      required
                      value={form.location}
                      onChange={(e) => setForm({...form, location: e.target.value})}
                      placeholder="e.g., San Francisco, CA"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone *</label>
                    <select
                      required
                      value={form.timezone}
                      onChange={(e) => setForm({...form, timezone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select timezone</option>
                      {timezones.map(tz => (
                        <option key={tz} value={tz}>{tz}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Additional Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio URL</label>
                    <input
                      type="url"
                      value={form.portfolio}
                      onChange={(e) => setForm({...form, portfolio: e.target.value})}
                      placeholder="https://your-portfolio.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Video Introduction URL</label>
                    <input
                      type="url"
                      value={form.video_intro}
                      onChange={(e) => setForm({...form, video_intro: e.target.value})}
                      placeholder="https://youtube.com/watch?v=..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                    <input
                      type="text"
                      value={form.education}
                      onChange={(e) => setForm({...form, education: e.target.value})}
                      placeholder="e.g., Bachelor's in Computer Science, Stanford University"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Certifications</label>
                    <input
                      type="text"
                      value={form.certifications}
                      onChange={(e) => setForm({...form, certifications: e.target.value})}
                      placeholder="e.g., AWS Certified Solutions Architect, Google Cloud Professional"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end space-x-4 pt-6">
                <Link
                  href="/talent"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {loading ? 'Creating Profile...' : 'Create Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
} 