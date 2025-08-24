import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Globe, 
  Award, 
  Users, 
  Zap,
  Brain,
  Shield,
  Code,
  Cloud,
  Database,
  Smartphone,
  Star
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  expertise: string[];
  experience: string;
  education: string;
  achievements: string[];
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
    email?: string;
  };
  color: string;
  icon: React.ComponentType<any>;
}

const teamMembers: TeamMember[] = [
  {
    id: 'alex-chen',
    name: 'Alex Chen',
    role: 'Chief Technology Officer',
    department: 'Leadership',
    bio: 'Visionary technology leader with 15+ years of experience in AI, cloud architecture, and digital transformation. Former senior engineer at Google and Microsoft.',
    expertise: ['AI/ML', 'Cloud Architecture', 'Digital Transformation', 'Team Leadership'],
    experience: '15+ years',
    education: 'MS Computer Science, Stanford University',
    achievements: [
      'Led 50+ successful digital transformation projects',
      'Patented 3 AI algorithms for business optimization',
      'Built teams of 100+ engineers across 3 continents'
    ],
    avatar: 'AC',
    social: {
      linkedin: 'https://linkedin.com/in/alexchen',
      twitter: 'https://twitter.com/alexchen',
      github: 'https://github.com/alexchen',
      website: 'https://alexchen.dev'
    },
    color: 'from-blue-500 to-cyan-500',
    icon: Brain
  },
  {
    id: 'sarah-rodriguez',
    name: 'Sarah Rodriguez',
    role: 'VP of Engineering',
    department: 'Engineering',
    bio: 'Seasoned engineering leader specializing in scalable software architecture and high-performance systems. Expert in microservices and cloud-native development.',
    expertise: ['Software Architecture', 'Microservices', 'Cloud-Native', 'Performance Engineering'],
    experience: '12+ years',
    education: 'BS Computer Engineering, MIT',
    achievements: [
      'Architected systems serving 10M+ users',
      'Reduced system latency by 60%',
      'Led migration to cloud-native architecture'
    ],
    avatar: 'SR',
    social: {
      linkedin: 'https://linkedin.com/in/sarahrodriguez',
      github: 'https://github.com/sarahrodriguez',
      website: 'https://sarahrodriguez.dev'
    },
    color: 'from-purple-500 to-pink-500',
    icon: Code
  },
  {
    id: 'michael-kim',
    name: 'Michael Kim',
    role: 'Head of Security',
    department: 'Security',
    bio: 'Cybersecurity expert with deep knowledge of threat intelligence, compliance, and enterprise security architecture. Former security consultant for Fortune 500 companies.',
    expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance', 'Security Architecture'],
    experience: '10+ years',
    education: 'MS Information Security, Carnegie Mellon',
    achievements: [
      'Prevented 100+ security breaches',
      'Achieved SOC 2 Type II compliance',
      'Developed security frameworks for 3 industries'
    ],
    avatar: 'MK',
    social: {
      linkedin: 'https://linkedin.com/in/michaelkim',
      twitter: 'https://twitter.com/michaelkim',
      website: 'https://michaelkim.security'
    },
    color: 'from-red-500 to-orange-500',
    icon: Shield
  },
  {
    id: 'emily-thompson',
    name: 'Emily Thompson',
    role: 'Lead Data Scientist',
    department: 'Data Science',
    bio: 'Data science leader specializing in machine learning, predictive analytics, and business intelligence. Expert in turning complex data into actionable insights.',
    expertise: ['Machine Learning', 'Predictive Analytics', 'Business Intelligence', 'Data Engineering'],
    experience: '8+ years',
    education: 'PhD Statistics, UC Berkeley',
    achievements: [
      'Developed ML models with 95%+ accuracy',
      'Generated $50M+ in business value',
      'Published 15+ research papers'
    ],
    avatar: 'ET',
    social: {
      linkedin: 'https://linkedin.com/in/emilythompson',
      github: 'https://github.com/emilythompson',
      website: 'https://emilythompson.ai'
    },
    color: 'from-green-500 to-emerald-500',
    icon: Database
  },
  {
    id: 'david-patel',
    name: 'David Patel',
    role: 'Cloud Infrastructure Lead',
    department: 'Infrastructure',
    bio: 'Cloud infrastructure specialist with expertise in AWS, Azure, and GCP. Expert in designing scalable, resilient, and cost-effective cloud solutions.',
    expertise: ['AWS', 'Azure', 'GCP', 'DevOps', 'Infrastructure as Code'],
    experience: '9+ years',
    education: 'BS Computer Science, University of Washington',
    achievements: [
      'Migrated 100+ applications to cloud',
      'Reduced infrastructure costs by 40%',
      'Achieved 99.99% uptime SLA'
    ],
    avatar: 'DP',
    social: {
      linkedin: 'https://linkedin.com/in/davidpatel',
      github: 'https://github.com/davidpatel',
      website: 'https://davidpatel.cloud'
    },
    color: 'from-indigo-500 to-purple-500',
    icon: Cloud
  },
  {
    id: 'lisa-wang',
    name: 'Lisa Wang',
    role: 'Mobile Development Lead',
    department: 'Mobile',
    bio: 'Mobile development expert specializing in iOS, Android, and cross-platform solutions. Expert in creating engaging, performant mobile experiences.',
    expertise: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'Mobile UX'],
    experience: '7+ years',
    education: 'BS Computer Science, UCLA',
    achievements: [
      'Published 20+ apps with 1M+ downloads',
      'Achieved 4.8+ star ratings consistently',
      'Reduced app crash rate by 80%'
    ],
    avatar: 'LW',
    social: {
      linkedin: 'https://linkedin.com/in/lisawang',
      github: 'https://github.com/lisawang',
      website: 'https://lisawang.mobile'
    },
    color: 'from-yellow-500 to-orange-500',
    icon: Smartphone
  }
];

const departments = [
  { id: 'all', label: 'All Team', icon: Users },
  { id: 'leadership', label: 'Leadership', icon: Award },
  { id: 'engineering', label: 'Engineering', icon: Code },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'data', label: 'Data Science', icon: Database },
  { id: 'infrastructure', label: 'Infrastructure', icon: Cloud },
  { id: 'mobile', label: 'Mobile', icon: Smartphone }
];

const AdvancedTeamShowcase: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const filteredMembers = selectedDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department.toLowerCase() === selectedDepartment);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class experts in technology, innovation, and digital transformation. 
            Our team brings together decades of experience from leading tech companies.
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {departments.map((department) => {
            const Icon = department.icon;
            return (
              <motion.button
                key={department.id}
                onClick={() => setSelectedDepartment(department.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === department.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {department.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => {
              const Icon = member.icon;
              const isSelected = selectedMember === member.id;
              
              return (
                <motion.div
                  key={member.id}
                  variants={cardVariants}
                  layout
                  className="group relative"
                >
                  <motion.div
                    className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm cursor-pointer"
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => setSelectedMember(isSelected ? null : member.id)}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Header */}
                    <div className="p-6">
                      <div className="text-center mb-6">
                        {/* Avatar */}
                        <motion.div
                          className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <span className="text-2xl font-bold text-white">{member.avatar}</span>
                        </motion.div>
                        
                        {/* Name & Role */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {member.name}
                        </h3>
                        <p className="text-blue-400 font-medium mb-1">{member.role}</p>
                        <p className="text-gray-400 text-sm">{member.department}</p>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      {/* Expertise */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                          {member.expertise.length > 3 && (
                            <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                              +{member.expertise.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-3">
                        {member.social.linkedin && (
                          <motion.a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-700/50 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin className="w-4 h-4" />
                          </motion.a>
                        )}
                        {member.social.github && (
                          <motion.a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-700/50 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                        {member.social.website && (
                          <motion.a
                            href={member.social.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-700/50 hover:bg-purple-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Globe className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-gray-700/50"
                        >
                          <div className="p-6 space-y-4">
                            {/* Experience & Education */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                                  Experience
                                </h4>
                                <p className="text-gray-300 text-sm">{member.experience}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                                  <Award className="w-4 h-4 text-blue-400 mr-2" />
                                  Education
                                </h4>
                                <p className="text-gray-300 text-sm">{member.education}</p>
                              </div>
                            </div>

                            {/* Key Achievements */}
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {member.achievements.map((achievement, index) => (
                                  <motion.li
                                    key={index}
                                    className="flex items-start text-gray-300 text-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                  >
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                    {achievement}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Hover Effect Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      style={{
                        background: `linear-gradient(45deg, transparent, transparent) padding-box, linear-gradient(45deg, ${member.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--tw-gradient-${c.split('-')[1]})`).join(', ')}) border-box`
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-300 mb-6">
              We&apos;re always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <motion.a
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <Users className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedTeamShowcase;