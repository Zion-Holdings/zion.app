import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Send,
  Star,
  TrendingUp
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import SEO from '../components/SEO';
import { AnimatePresence } from 'framer-motion';

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [isApplying, setIsApplying] = useState<string | null>(null);

  const departments = [
    { id: 'all', name: 'All Departments', color: 'from-zion-cyan to-zion-blue' },
    { id: 'engineering', name: 'Engineering', color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & ML', color: 'from-blue-500 to-cyan-500' },
    { id: 'design', name: 'Design', color: 'from-green-500 to-emerald-500' },
    { id: 'sales', name: 'Sales & Marketing', color: 'from-yellow-500 to-orange-500' },
    { id: 'operations', name: 'Operations', color: 'from-red-500 to-pink-500' }
  ];

  const jobOpenings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'ai',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI solutions and machine learning platforms.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ]
    },
    {
      id: 'full-stack-developer',
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $140,000',
      description: 'Build scalable web applications and contribute to our technology platform.',
      requirements: [
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with modern web technologies and APIs',
        'Knowledge of database design and optimization',
        'Understanding of DevOps and CI/CD practices',
        'Experience with cloud services and microservices'
      ],
      benefits: [
        'Competitive salary with growth opportunities',
        'Remote-first work environment',
        'Latest tools and technology',
        'Collaborative team culture',
        'Career advancement paths'
      ]
    },
    {
      id: 'ui-ux-designer',
      title: 'Senior UI/UX Designer',
      department: 'design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$85,000 - $130,000',
      description: 'Create exceptional user experiences and beautiful interfaces for our products.',
      requirements: [
        'Strong portfolio showcasing web and mobile design',
        'Expertise in Figma, Sketch, or similar tools',
        'Understanding of user research and testing',
        'Experience with design systems and component libraries',
        'Knowledge of accessibility and responsive design'
      ],
      benefits: [
        'Creative freedom and ownership',
        'Latest design tools and resources',
        'Collaboration with cross-functional teams',
        'Professional development opportunities',
        'Competitive compensation package'
      ]
    },
    {
      id: 'sales-director',
      title: 'Sales Director',
      department: 'sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$100,000 - $150,000 + Commission',
      description: 'Lead our sales strategy and drive revenue growth for enterprise clients.',
      requirements: [
        'Proven track record in B2B technology sales',
        'Experience with enterprise software solutions',
        'Strong leadership and team management skills',
        'Understanding of complex sales cycles',
        'Excellent communication and presentation skills'
      ],
      benefits: [
        'Uncapped commission structure',
        'Leadership development opportunities',
        'High-growth company environment',
        'Competitive base salary',
        'Performance-based bonuses'
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const companyValues = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe our team is our greatest asset and invest in their growth and well-being.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We constantly push boundaries and embrace new technologies to solve complex problems.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions help businesses worldwide transform and succeed in the digital age.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and professionalism in everything we do.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const perks = [
    '🏠 Remote-first work environment',
    '💰 Competitive salary with equity options',
    '🏥 Comprehensive health insurance',
    '📚 Professional development budget',
    '🎯 Performance-based bonuses',
    '🌍 Flexible working hours',
    '🎉 Team events and celebrations',
    '🚀 Fast-paced, innovative culture'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      <SEO 
        title="Careers - Join Our Team | Zion Tech Group"
        description="Join Zion Tech Group and be part of a team that's transforming businesses through innovative technology solutions. Explore career opportunities in AI, engineering, design, and more."
        canonical="/careers"
      />
      
      <FuturisticAnimatedBackground intensity="medium" />

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
              🚀 Join Our Team
            </Badge>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Build the Future
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
                With Us
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join a team of innovators, problem-solvers, and technology enthusiasts 
              who are shaping the future of business technology. Your next career 
              adventure starts here.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-zion-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6" />
                <span>Remote-First Culture</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                <span>Rapid Growth</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These core principles guide how we work, collaborate, and grow together 
              as a team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work at <span className="text-zion-cyan">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We offer more than just a job – we provide an environment where you can 
              thrive, grow, and make a real impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 p-4 text-center">
                  <p className="text-zion-slate-light group-hover:text-zion-cyan transition-colors font-medium">
                    {perk}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open <span className="text-zion-cyan">Positions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find the perfect role that matches your skills, passion, and career goals. 
              We're always looking for talented individuals to join our team.
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => {
              const isActive = selectedDepartment === dept.id;
              
              return (
                <motion.button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r ' + dept.color + ' text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-blue-dark/30 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 border border-zion-blue-light/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dept.name}
                </motion.button>
              );
            })}
          </div>

          {/* Jobs Grid */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                            {departments.find(d => d.id === job.department)?.name}
                          </Badge>
                          <Badge variant="outline" className="border-zion-blue-light/30 text-zion-slate-light">
                            {job.type}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                          {job.title}
                        </h3>
                        
                        <p className="text-zion-slate-light mb-4">
                          {job.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zion-slate-light">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-zion-cyan" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-zion-cyan" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-zion-cyan" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <FuturisticNeonButton
                          onClick={() => setIsApplying(job.id)}
                          size="sm"
                          className="px-6"
                        >
                          Apply Now
                        </FuturisticNeonButton>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsApplying(job.id)}
                          className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isApplying && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zion-blue-dark/95 backdrop-blur-lg border border-zion-blue-light/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Apply for {jobOpenings.find(j => j.id === isApplying)?.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsApplying(null)}
                    className="text-zion-slate-light hover:text-white"
                  >
                    ✕
                  </Button>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        required
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">LinkedIn Profile</label>
                      <Input
                        type="url"
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Cover Letter *</label>
                    <Textarea
                      required
                      rows={4}
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan resize-none"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Resume/CV *</label>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-zion-cyan file:text-white hover:file:bg-zion-cyan-light"
                    />
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <FuturisticNeonButton
                      type="submit"
                      className="flex-1"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Application
                    </FuturisticNeonButton>
                    <Button
                      variant="outline"
                      onClick={() => setIsApplying(null)}
                      className="border-zion-blue-light/30 text-zion-slate-light hover:bg-zion-blue-light/20"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume 
                and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticNeonButton
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=General Career Inquiry'}
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Send Resume
                </FuturisticNeonButton>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4"
                >
                  Get in Touch
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
