import React, { useState, useEffect, useCallback } from 'react';
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
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function TalentDirectory() {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [filteredTalents, setFilteredTalents] = useState<Talent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const allSkills = [
    'Python', 'JavaScript', 'React', 'Node.js', 'DevOps', 'AWS', 'Azure', 'GCP',
    'AI/ML', 'Machine Learning', 'Deep Learning', 'Data Science', 'SQL', 'MongoDB',
    'Docker', 'Kubernetes', 'TypeScript', 'Vue.js', 'Angular', 'PHP', 'Java',
    'C#', 'Go', 'Rust', 'Swift', 'Kotlin', 'Flutter', 'React Native'
  ];

  const regions = ['North America', 'Europe', 'Asia', 'Africa', 'South America', 'Australia'];

  useEffect(() => {
    fetchTalents();
  }, []);

  const filterTalents = useCallback(() => {
    let filtered = talents;

    if (searchTerm) {
      filtered = filtered.filter(talent =>
        talent.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedSkills.length > 0) {
      filtered = filtered.filter(talent =>
        selectedSkills.every(skill => talent.skills.includes(skill))
      );
    }

    if (selectedAvailability) {
      filtered = filtered.filter(talent => talent.availability === selectedAvailability);
    }

    filtered = filtered.filter(talent => {
      if (!talent.hourly_rate) return true;
      return talent.hourly_rate >= priceRange[0] && talent.hourly_rate <= priceRange[1];
    });

    if (selectedRegion) {
      filtered = filtered.filter(talent => talent.location.includes(selectedRegion));
    }

    setFilteredTalents(filtered);
  }, [talents, searchTerm, selectedSkills, selectedAvailability, priceRange, selectedRegion]);

  useEffect(() => {
    filterTalents();
  }, [filterTalents]);

  const fetchTalents = async () => {
    try {
      const { data, error } = await supabase
        .from('talents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTalents(data || []);
    } catch (error) {
      console.error('Error fetching talents:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSkills([]);
    setSelectedAvailability('');
    setPriceRange([0, 500]);
    setSelectedRegion('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Zion AI Marketplace - Talent Directory</title>
        <meta name="description" content="Find top AI and IT professionals on Zion AI Marketplace" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Zion AI Marketplace</h1>
                <p className="mt-2 text-gray-600">Find the perfect AI and IT professional for your project</p>
              </div>
              <Link
                href="/talent/create"
                className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              >
                Join as Talent
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search by name, skills, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All</option>
                  <option value="Open">Open</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Skills</label>
              <div className="flex flex-wrap gap-2">
                {allSkills.map(skill => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedSkills.includes(skill)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hourly Rate: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">
              {filteredTalents.length} talent{filteredTalents.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTalents.map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>

          {filteredTalents.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No talents found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function TalentCard({ talent }: { talent: Talent }) {
  const isNew = new Date(talent.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  return (
    <Link href={`/talent/${talent.id}`}>
      <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer">
        <div className="relative p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white font-semibold">
                {talent.full_name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {talent.full_name}
                </h3>
                <p className="text-sm text-gray-600">{talent.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {talent.is_verified && (
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              {isNew && (
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  New
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {talent.summary}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {talent.skills.slice(0, 3).map(skill => (
              <span
                key={skill}
                className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
              >
                {skill}
              </span>
            ))}
            {talent.skills.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                +{talent.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                talent.availability === 'Open' ? 'bg-green-100 text-green-800' :
                talent.availability === 'Part-time' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {talent.availability}
              </span>
              <span className="text-sm text-gray-600">{talent.location}</span>
            </div>
            <div className="text-right">
              {talent.hourly_rate ? (
                <span className="font-semibold text-gray-900">${talent.hourly_rate}/hr</span>
              ) : (
                <span className="text-sm text-gray-600">Request Quote</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 