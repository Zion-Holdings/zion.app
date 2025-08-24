import React from 'react';
import { SEO } from '@/components/SEO';

const TalentsPage = () => {
  const featuredTalents = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Full-Stack Developer',
      image: '👩‍💻',
      location: 'San Francisco, CA',
      experience: '8 years',
      hourlyRate: 85,
      rating: 4.9,
      availability: 'Available',
      description: 'Experienced full-stack developer with expertise in modern web technologies and cloud solutions. Passionate about creating scalable, user-friendly applications.',
      skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'TypeScript', 'Docker', 'Kubernetes'],
      specialties: ['Web Applications', 'API Development', 'Cloud Architecture', 'Performance Optimization'],
      education: 'BS Computer Science, Stanford University',
      certifications: ['AWS Certified Developer', 'MongoDB Certified Developer', 'Google Cloud Professional'],
      languages: ['English', 'Mandarin'],
      portfolio: 'https://sarahchen.dev',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'UI/UX Designer',
      image: '👨‍🎨',
      location: 'New York, NY',
      experience: '6 years',
      hourlyRate: 75,
      rating: 4.8,
      availability: 'Available',
      description: 'Creative designer focused on user-centered design and creating intuitive digital experiences. Expert in design systems and user research.',
      skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems', 'Accessibility', 'Motion Design'],
      specialties: ['Mobile App Design', 'Web Design', 'Brand Identity', 'User Experience'],
      education: 'BFA Graphic Design, Parsons School of Design',
      certifications: ['Google UX Design Certificate', 'Accessibility Certification'],
      languages: ['English', 'Spanish'],
      portfolio: 'https://michaelrodriguez.design',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      behance: 'https://behance.net/michaelrodriguez'
    },
    {
      id: 3,
      name: 'Emily Watson',
      title: 'Data Scientist',
      image: '👩‍🔬',
      location: 'Austin, TX',
      experience: '5 years',
      hourlyRate: 90,
      rating: 4.9,
      availability: 'Available',
      description: 'Data scientist with expertise in predictive analytics and business intelligence solutions. Passionate about turning data into actionable insights.',
      skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Tableau', 'TensorFlow', 'PyTorch', 'Apache Spark'],
      specialties: ['Predictive Analytics', 'Business Intelligence', 'Machine Learning Models', 'Data Visualization'],
      education: 'MS Data Science, University of Texas',
      certifications: ['Google Data Analytics Certificate', 'AWS Machine Learning Specialty'],
      languages: ['English'],
      portfolio: 'https://emilywatson.tech',
      linkedin: 'https://linkedin.com/in/emilywatson',
      github: 'https://github.com/emilywatson'
    }
  ];

  const talentCategories = [
    {
      name: 'Frontend Developers',
      count: 24,
      icon: '💻',
      description: 'Experts in creating responsive and interactive user interfaces'
    },
    {
      name: 'Backend Developers',
      count: 18,
      icon: '⚙️',
      description: 'Specialists in server-side logic and database management'
    },
    {
      name: 'Full-Stack Developers',
      count: 32,
      icon: '🔄',
      description: 'Versatile developers handling both frontend and backend'
    },
    {
      name: 'Mobile Developers',
      count: 15,
      icon: '📱',
      description: 'iOS and Android app development specialists'
    },
    {
      name: 'UI/UX Designers',
      count: 12,
      icon: '🎨',
      description: 'Creative professionals focused on user experience'
    },
    {
      name: 'Data Scientists',
      count: 8,
      icon: '📊',
      description: 'Experts in data analysis and machine learning'
    },
    {
      name: 'DevOps Engineers',
      count: 14,
      icon: '🚀',
      description: 'Infrastructure and deployment specialists'
    },
    {
      name: 'Product Managers',
      count: 9,
      icon: '🎯',
      description: 'Strategic leaders driving product development'
    }
  ];

  return (
    <>
      <SEO 
        title="Tech Talents - Professional Profiles - Zion Tech Group"
        description="Explore detailed profiles of our curated tech talents. Find developers, designers, data scientists, and other professionals with verified skills and experience."
        canonical="/talents"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tech Talents
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Discover our curated network of verified tech professionals. 
                Each talent has been carefully vetted and brings proven expertise 
                to help your projects succeed.
              </p>
            </div>

            {/* Talent Categories */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Browse by Category
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {talentCategories.map((category, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <div className="text-2xl font-bold text-blue-400 mb-2">
                      {category.count}
                    </div>
                    <p className="text-blue-100 text-sm">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Talents */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Featured Talents
              </h2>
              <div className="space-y-8 max-w-4xl mx-auto">
                {featuredTalents.map((talent) => (
                  <div key={talent.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 hover:bg-white/20 transition-colors duration-200">
                    {/* Header */}
                    <div className="flex items-start mb-6">
                      <div className="text-6xl mr-6">{talent.image}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {talent.name}
                        </h3>
                        <p className="text-xl text-blue-200 mb-2">
                          {talent.title}
                        </p>
                        <div className="flex items-center space-x-4 text-blue-100 text-sm">
                          <span>📍 {talent.location}</span>
                          <span>⏱️ {talent.experience}</span>
                          <span>⭐ {talent.rating}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            talent.availability === 'Available' 
                              ? 'bg-green-600/30 text-green-200' 
                              : 'bg-red-600/30 text-red-200'
                          }`}>
                            {talent.availability}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-400">
                          ${talent.hourlyRate}
                        </div>
                        <div className="text-blue-200 text-sm">per hour</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-blue-100 mb-6 text-lg">
                      {talent.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {talent.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {talent.specialties.map((specialty, specialtyIndex) => (
                          <span 
                            key={specialtyIndex}
                            className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Education:</h4>
                        <p className="text-blue-100 text-sm">{talent.education}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Languages:</h4>
                        <p className="text-blue-100 text-sm">{talent.languages.join(', ')}</p>
                      </div>
                    </div>

                    {/* Certifications */}
                    {talent.certifications && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Certifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {talent.certifications.map((cert, certIndex) => (
                            <span 
                              key={certIndex}
                              className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {talent.portfolio && (
                        <a href={talent.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 text-sm">
                          🌐 Portfolio
                        </a>
                      )}
                      {talent.linkedin && (
                        <a href={talent.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 text-sm">
                          💼 LinkedIn
                        </a>
                      )}
                      {talent.github && (
                        <a href={talent.github} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 text-sm">
                          📚 GitHub
                        </a>
                      )}
                      {talent.behance && (
                        <a href={talent.behance} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 text-sm">
                          🎨 Behance
                        </a>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                        View Full Profile
                      </button>
                      <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                        Contact Talent
                      </button>
                      <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Work with Our Talents?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Browse our complete directory, get personalized recommendations, 
                  or let us help you find the perfect talent for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/talent-directory"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Browse All Talents
                  </a>
                  <a
                    href="/zion-hire-ai"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Try ZionHireAI
                  </a>
                  <a
                    href="/contact"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Get Personalized Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TalentsPage;