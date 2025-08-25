import React, { useState } from 'react';
import { Search, Filter, Users, Briefcase, Star, MessageSquare, ArrowRight, Zap, Brain, Code, Shield, Cloud } from 'lucide-react';

export default function AIMatcherPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-development', name: 'AI Development', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'machine-learning', name: 'Machine Learning', icon: Code, color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' },
    { id: 'cloud-computing', name: 'Cloud Computing', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'data-science', name: 'Data Science', icon: Zap, color: 'from-orange-500 to-red-500' }
  ];

  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'AWS', 'Azure', 'Docker', 'Kubernetes',
    'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Analysis', 'DevOps'
  ];

  const aiProfessionals = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior AI Research Scientist',
      company: 'TechCorp AI',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 150,
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
      experience: '8+ years',
      availability: 'Available',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150',
      description: 'Expert in developing cutting-edge AI solutions with focus on computer vision and natural language processing.'
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      title: 'AI Solutions Architect',
      company: 'InnovateTech',
      rating: 4.8,
      reviews: 89,
      hourlyRate: 120,
      skills: ['AI Architecture', 'Cloud Computing', 'Python', 'AWS'],
      experience: '6+ years',
      availability: 'Available',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
      description: 'Specialized in designing scalable AI infrastructure and implementing enterprise AI solutions.'
    },
    {
      id: 3,
      name: 'Dr. Michael Kim',
      title: 'Machine Learning Engineer',
      company: 'DataFlow Systems',
      rating: 4.9,
      reviews: 156,
      hourlyRate: 140,
      skills: ['ML Engineering', 'Data Science', 'Python', 'PyTorch'],
      experience: '7+ years',
      availability: 'Available',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
      description: 'Expert in building production-ready machine learning systems and data pipelines.'
    }
  ];

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const filteredProfessionals = aiProfessionals.filter(professional => {
    const matchesSearch = professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         professional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         professional.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           professional.skills.some(skill => 
                             categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase().includes(skill.toLowerCase())
                           );
    
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => 
                           professional.skills.some(profSkill => 
                             profSkill.toLowerCase().includes(skill.toLowerCase())
                           )
                         );
    
    return matchesSearch && matchesCategory && matchesSkills;
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
            AI Talent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
              Matching Platform
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            Connect with the world's top AI professionals. Our intelligent matching system 
            finds the perfect talent for your projects, ensuring success and innovation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search for AI professionals, skills, or expertise..."
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
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Categories */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

            {/* Skills */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-2 rounded-lg border text-sm transition-all duration-300 ${
                      selectedSkills.includes(skill)
                        ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                        : 'border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            {filteredProfessionals.length} AI Professionals Found
          </h2>
          <div className="text-zinc-400">
            Showing best matches for your criteria
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProfessionals.map((professional) => (
            <div
              key={professional.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-zion-cyan/30 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={professional.avatar}
                  alt={professional.name}
                  className="w-16 h-16 rounded-full border-2 border-zion-cyan/30"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {professional.name}
                  </h3>
                  <p className="text-zion-cyan font-medium">{professional.title}</p>
                  <p className="text-zinc-400 text-sm">{professional.company}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{professional.rating}</span>
                  </div>
                  <span className="text-zinc-400 text-sm">({professional.reviews} reviews)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-4 line-clamp-3">
                {professional.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {professional.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-zion-cyan/10 border border-zion-cyan/30 rounded-md text-xs text-zion-cyan"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-zinc-400 text-xs">Experience</div>
                  <div className="text-white font-medium">{professional.experience}</div>
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Rate</div>
                  <div className="text-white font-medium">${professional.hourlyRate}/hr</div>
                </div>
                <div>
                  <div className="text-zinc-400 text-xs">Status</div>
                  <div className="text-green-400 font-medium">{professional.availability}</div>
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

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No matches found</h3>
            <p className="text-zinc-400 mb-6">
              Try adjusting your search criteria or browse all available professionals
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedSkills([]);
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