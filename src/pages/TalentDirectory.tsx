import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Briefcase, Clock, DollarSign, MessageSquare, Heart, Eye, ArrowRight, Users, Zap, Shield, Cloud, Brain } from 'lucide-react';

export default function TalentDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Users, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'software-dev', name: 'Software Development', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'data-science', name: 'Data Science', icon: Brain, color: 'from-orange-500 to-red-500' }
  ];

  const locations = [
    'All Locations', 'United States', 'Europe', 'Asia', 'Remote', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo'
  ];

  const experienceLevels = [
    'All Levels', 'Entry Level', 'Mid Level', 'Senior', 'Lead', 'Principal', 'Executive'
  ];

  const talents = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior AI Research Scientist',
      company: 'TechCorp AI',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 150,
      experience: 'Senior',
      availability: 'Available',
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Computer Vision'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150',
      description: 'Expert in developing cutting-edge AI solutions with focus on computer vision and natural language processing.',
      projects: 45,
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      title: 'AI Solutions Architect',
      company: 'InnovateTech',
      location: 'New York, NY',
      rating: 4.8,
      reviews: 89,
      hourlyRate: 120,
      experience: 'Lead',
      availability: 'Available',
      skills: ['AI Architecture', 'Cloud Computing', 'Python', 'AWS', 'Microservices'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
      description: 'Specialized in designing scalable AI infrastructure and implementing enterprise AI solutions.',
      projects: 32,
      verified: true,
      featured: false
    },
    {
      id: 3,
      name: 'Dr. Michael Kim',
      title: 'Machine Learning Engineer',
      company: 'DataFlow Systems',
      location: 'Remote',
      rating: 4.9,
      reviews: 156,
      hourlyRate: 140,
      experience: 'Senior',
      availability: 'Available',
      skills: ['ML Engineering', 'Data Science', 'Python', 'PyTorch', 'MLOps'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
      description: 'Expert in building production-ready machine learning systems and data pipelines.',
      projects: 67,
      verified: true,
      featured: true
    },
    {
      id: 4,
      name: 'Emma Thompson',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      location: 'London, UK',
      rating: 4.7,
      reviews: 94,
      hourlyRate: 95,
      experience: 'Mid Level',
      availability: 'Available',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
      description: 'Passionate developer specializing in modern web applications and scalable backend systems.',
      projects: 28,
      verified: true,
      featured: false
    },
    {
      id: 5,
      name: 'David Park',
      title: 'Cybersecurity Specialist',
      company: 'SecureNet',
      location: 'Berlin, Germany',
      rating: 4.8,
      reviews: 112,
      hourlyRate: 110,
      experience: 'Senior',
      availability: 'Available',
      skills: ['Penetration Testing', 'Security Auditing', 'Incident Response', 'Compliance'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150',
      description: 'Experienced cybersecurity professional with expertise in threat detection and security architecture.',
      projects: 41,
      verified: true,
      featured: true
    },
    {
      id: 6,
      name: 'Lisa Wang',
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Remote',
      rating: 4.6,
      reviews: 78,
      hourlyRate: 85,
      experience: 'Mid Level',
      availability: 'Available',
      skills: ['Data Analysis', 'Statistics', 'Python', 'R', 'SQL', 'Tableau'],
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150',
      description: 'Data-driven professional helping businesses make informed decisions through advanced analytics.',
      projects: 23,
      verified: true,
      featured: false
    }
  ];

  const filteredTalents = talents.filter(talent => {
    const matchesSearch = talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           talent.skills.some(skill => 
                             categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase().includes(skill.toLowerCase())
                           );
    
    const matchesLocation = selectedLocation === 'All Locations' || talent.location.includes(selectedLocation);
    const matchesExperience = selectedExperience === 'All Levels' || talent.experience === selectedExperience;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-blue/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Top
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
              Tech Talent
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            Browse our curated directory of verified AI professionals, developers, and tech experts. 
            Find the perfect match for your next project or team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search for talent, skills, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                      selectedCategory === category.id
                        ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                        : 'border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Location
              </h3>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Experience Level
              </h3>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            {filteredTalents.length} Talents Found
          </h2>
          <div className="text-zinc-400">
            Showing best matches for your criteria
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTalents.map((talent) => (
            <div
              key={talent.id}
              className={`relative bg-white/5 border rounded-2xl p-6 transition-all duration-300 group ${
                talent.featured 
                  ? 'border-zion-cyan/50 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5' 
                  : 'border-white/10 hover:border-zion-cyan/30 hover:bg-white/10'
              }`}
            >
              {/* Featured Badge */}
              {talent.featured && (
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={talent.avatar}
                    alt={talent.name}
                    className="w-16 h-16 rounded-full border-2 border-zion-cyan/30"
                  />
                  {talent.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {talent.name}
                  </h3>
                  <p className="text-zion-cyan font-medium">{talent.title}</p>
                  <p className="text-zinc-400 text-sm">{talent.company}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="h-3 w-3 text-zinc-500" />
                    <span className="text-zinc-500 text-xs">{talent.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{talent.rating}</span>
                  </div>
                  <span className="text-zinc-400 text-sm">({talent.reviews} reviews)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-4 line-clamp-3">
                {talent.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {talent.skills.slice(0, 4).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-zion-cyan/10 border border-zion-cyan/30 rounded-md text-xs text-zion-cyan"
                  >
                    {skill}
                  </span>
                ))}
                {talent.skills.length > 4 && (
                  <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs text-zinc-400">
                    +{talent.skills.length - 4} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-zinc-400 text-xs">Experience</div>
                  <div className="text-white font-medium">{talent.experience}</div>
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Rate</div>
                  <div className="text-white font-medium">${talent.hourlyRate}/hr</div>
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Projects</div>
                  <div className="text-white font-medium">{talent.projects}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105">
                  <MessageSquare className="h-4 w-4" />
                  <span>Contact</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-zion-cyan/30 text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan/10 transition-all duration-300">
                  <span>View Profile</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTalents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No talents found</h3>
            <p className="text-zinc-400 mb-6">
              Try adjusting your search criteria or browse all available talents
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLocation('All Locations');
                setSelectedExperience('All Levels');
              }}
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}