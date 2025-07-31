import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Talent {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  hourlyRate: { min: number; max: number; currency: string };
  rating: number;
  reviewCount: number;
  location: string;
  experience: string;
  skills: string[];
  availability: string;
  imageUrl: string;
}

const talents: Talent[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Senior Full-Stack Developer',
    description: 'Expert in React, Node.js, and cloud technologies with 8+ years of experience building scalable web applications.',
    category: 'Development',
    hourlyRate: { min: 75, max: 120, currency: 'USD' },
    rating: 4.9,
    reviewCount: 156,
    location: 'San Francisco, CA',
    experience: '8+ years',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    availability: 'Full-time',
    imageUrl: '/api/placeholder/400/400'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'DevOps Engineer',
    description: 'Specialized in CI/CD pipelines, Kubernetes, and cloud infrastructure automation with strong security focus.',
    category: 'DevOps',
    hourlyRate: { min: 85, max: 130, currency: 'USD' },
    rating: 4.8,
    reviewCount: 89,
    location: 'Austin, TX',
    experience: '6+ years',
    skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Jenkins'],
    availability: 'Part-time',
    imageUrl: '/api/placeholder/400/400'
  },
  {
    id: '3',
    name: 'Emily Watson',
    title: 'Data Scientist',
    description: 'Expert in machine learning, statistical analysis, and data visualization with experience in Python and R.',
    category: 'Data Science',
    hourlyRate: { min: 90, max: 140, currency: 'USD' },
    rating: 4.7,
    reviewCount: 73,
    location: 'New York, NY',
    experience: '7+ years',
    skills: ['Python', 'R', 'TensorFlow', 'SQL', 'Tableau'],
    availability: 'Full-time',
    imageUrl: '/api/placeholder/400/400'
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Cybersecurity Specialist',
    description: 'Certified security professional with expertise in penetration testing, security audits, and compliance.',
    category: 'Security',
    hourlyRate: { min: 100, max: 150, currency: 'USD' },
    rating: 4.9,
    reviewCount: 112,
    location: 'Remote',
    experience: '10+ years',
    skills: ['Penetration Testing', 'CISSP', 'NIST', 'SOC2', 'ISO27001'],
    availability: 'Contract',
    imageUrl: '/api/placeholder/400/400'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    title: 'UI/UX Designer',
    description: 'Creative designer with strong focus on user experience, accessibility, and modern design systems.',
    category: 'Design',
    hourlyRate: { min: 65, max: 110, currency: 'USD' },
    rating: 4.8,
    reviewCount: 94,
    location: 'Seattle, WA',
    experience: '5+ years',
    skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    availability: 'Full-time',
    imageUrl: '/api/placeholder/400/400'
  },
  {
    id: '6',
    name: 'James Wilson',
    title: 'Cloud Architect',
    description: 'Senior cloud architect with expertise in AWS, Azure, and Google Cloud Platform solutions.',
    category: 'Cloud',
    hourlyRate: { min: 95, max: 145, currency: 'USD' },
    rating: 4.9,
    reviewCount: 67,
    location: 'Chicago, IL',
    experience: '12+ years',
    skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'],
    availability: 'Part-time',
    imageUrl: '/api/placeholder/400/400'
  }
];

const categories = ['All', 'Development', 'DevOps', 'Data Science', 'Security', 'Design', 'Cloud', 'Mobile', 'AI/ML'];
const hourlyRates = [
  { label: 'All Rates', min: 0, max: Infinity },
  { label: 'Under $50/hr', min: 0, max: 50 },
  { label: '$50 - $75/hr', min: 50, max: 75 },
  { label: '$75 - $100/hr', min: 75, max: 100 },
  { label: 'Over $100/hr', min: 100, max: Infinity }
];

const TalentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRateRange, setSelectedRateRange] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('relevance');

  const filteredTalents = useMemo(() => {
    return talents.filter(talent => {
      const matchesSearch = talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          talent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || talent.category === selectedCategory;
      
      const matchesRate = talent.hourlyRate.min >= hourlyRates[selectedRateRange].min && 
                         talent.hourlyRate.max <= hourlyRates[selectedRateRange].max;
      
      const matchesRating = selectedRating === 0 || talent.rating >= selectedRating;
      
      return matchesSearch && matchesCategory && matchesRate && matchesRating;
    });
  }, [searchTerm, selectedCategory, selectedRateRange, selectedRating]);

  const sortedTalents = useMemo(() => {
    const sorted = [...filteredTalents];
    switch (sortBy) {
      case 'rate-low':
        return sorted.sort((a, b) => a.hourlyRate.min - b.hourlyRate.min);
      case 'rate-high':
        return sorted.sort((a, b) => b.hourlyRate.max - a.hourlyRate.max);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'experience':
        return sorted.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
      default:
        return sorted;
    }
  }, [filteredTalents, sortBy]);

  const handleRequestQuote = (talentId: string) => {
    console.log('Request quote for talent:', talentId);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Talents - Zion Marketplace</title>
        <meta name="description" content="Find top IT talents and professionals on Zion marketplace" />
      </Head>

      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/talents" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Talents
              </Link>
              <Link href="/equipment" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Equipment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">IT Talents</h1>
          <p className="text-gray-300 text-lg">Connect with top IT professionals and experts</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search talents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Hourly Rate</label>
              <select
                value={selectedRateRange}
                onChange={(e) => setSelectedRateRange(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {hourlyRates.map((range, index) => (
                  <option key={index} value={index}>{range.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="relevance">Relevance</option>
                <option value="rate-low">Rate: Low to High</option>
                <option value="rate-high">Rate: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="experience">Most Experienced</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Rating</label>
            <div className="flex space-x-4">
              {[0, 4, 4.5, 4.8].map(rating => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    selectedRating === rating
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {rating === 0 ? 'All' : `${rating}+`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-300">
            Showing {sortedTalents.length} of {talents.length} talents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTalents.map((talent) => (
            <div key={talent.id} className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <div className="text-4xl text-purple-400">👤</div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{talent.name}</h3>
                    <p className="text-purple-400 text-sm">{talent.title}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-400">
                      ${talent.hourlyRate.min} - ${talent.hourlyRate.max}/hr
                    </div>
                    <div className="text-sm text-gray-400">{talent.availability}</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{talent.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">{talent.location}</div>
                  {renderStars(talent.rating)}
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Experience: {talent.experience}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {talent.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {talent.skills.length > 4 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                      +{talent.skills.length - 4} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleRequestQuote(talent.id)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedTalents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No talents found</h3>
            <p className="text-gray-300">Try adjusting your filters to find what you&apos;re looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TalentsPage;
