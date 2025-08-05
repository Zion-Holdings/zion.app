import { useState } from 'react';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { sanitizeHtml } from '../utils/sanitizeHtml';

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
  description: string;
}

interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
}

interface ResumeInput {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: string[];
  languages: string[];
  projects: string[];
  achievements: string[];
  template: string;
}

const defaultExperience: Experience = {
  id: '1',
  company: '',
  position: '',
  startDate: '',
  endDate: '',
  current: false,
  description: '',
  achievements: [''],
};

const defaultEducation: Education = {
  id: '1',
  institution: '',
  degree: '',
  field: '',
  startDate: '',
  endDate: '',
  current: false,
  description: '',
};

const defaultSkill: Skill = {
  id: '1',
  name: '',
  level: 'intermediate',
  category: 'Technical',
};

const defaultInput: ResumeInput = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
  },
  experience: [defaultExperience],
  education: [defaultEducation],
  skills: [defaultSkill],
  certifications: [''],
  languages: [''],
  projects: [''],
  achievements: [''],
  template: 'modern',
};

const ResumeBuilder = () => {
  const [input, setInput] = useState<ResumeInput>(defaultInput);
  const [resume, setResume] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const addExperience = () => {
    const newExperience: Experience = {
      id: (input.experience.length + 1).toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: [''],
    };
    setInput({ ...input, experience: [...input.experience, newExperience] });
  };

  const removeExperience = (index: number) => {
    const newExperience = input.experience.filter((_, i) => i !== index);
    setInput({ ...input, experience: newExperience });
  };

  const updateExperience = (index: number, field: keyof Experience, value: any) => {
    const newExperience = [...input.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setInput({ ...input, experience: newExperience });
  };

  const addAchievement = (expIndex: number) => {
    const newExperience = [...input.experience];
    newExperience[expIndex].achievements.push('');
    setInput({ ...input, experience: newExperience });
  };

  const updateAchievement = (expIndex: number, achievementIndex: number, value: string) => {
    const newExperience = [...input.experience];
    newExperience[expIndex].achievements[achievementIndex] = value;
    setInput({ ...input, experience: newExperience });
  };

  const removeAchievement = (expIndex: number, achievementIndex: number) => {
    const newExperience = [...input.experience];
    newExperience[expIndex].achievements.splice(achievementIndex, 1);
    setInput({ ...input, experience: newExperience });
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: (input.education.length + 1).toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    setInput({ ...input, education: [...input.education, newEducation] });
  };

  const removeEducation = (index: number) => {
    const newEducation = input.education.filter((_, i) => i !== index);
    setInput({ ...input, education: newEducation });
  };

  const updateEducation = (index: number, field: keyof Education, value: any) => {
    const newEducation = [...input.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setInput({ ...input, education: newEducation });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: (input.skills.length + 1).toString(),
      name: '',
      level: 'intermediate',
      category: 'Technical',
    };
    setInput({ ...input, skills: [...input.skills, newSkill] });
  };

  const removeSkill = (index: number) => {
    const newSkills = input.skills.filter((_, i) => i !== index);
    setInput({ ...input, skills: newSkills });
  };

  const updateSkill = (index: number, field: keyof Skill, value: any) => {
    const newSkills = [...input.skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setInput({ ...input, skills: newSkills });
  };

  const addArrayItem = (field: keyof ResumeInput, value: string) => {
    const newArray = [...(input[field] as string[]), value];
    setInput({ ...input, [field]: newArray });
  };

  const removeArrayItem = (field: keyof ResumeInput, index: number) => {
    const newArray = (input[field] as string[]).filter((_, i) => i !== index);
    setInput({ ...input, [field]: newArray });
  };

  const updateArrayItem = (field: keyof ResumeInput, index: number, value: string) => {
    const newArray = [...(input[field] as string[])];
    newArray[index] = value;
    setInput({ ...input, [field]: newArray });
  };

  const generateResume = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error('Failed to generate resume');
      }

      const data = await response.json();
      // Sanitize the HTML before setting it
      setResume(sanitizeHtml(data.resume));
      setGenerated(true);
    } catch (error) {
      console.error('Error generating resume:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadResume = () => {
    const element = document.createElement('a');
    const file = new Blob([resume], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = `resume-${input.personalInfo.firstName}-${input.personalInfo.lastName}-${Date.now()}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resume);
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'additional', label: 'Additional', icon: '➕' },
  ];

  return (
    <ModernLayout>
      <>
      <Head>
        <title>AI Resume Builder - Zion Marketplace</title>
        <meta name="description" content="Create professional resumes and get AI-powered career advice" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 py-6">
            <div className="text-center">
              <h1 className="text-4xl md text-5xl font-bold text-white mb-4">
                AI Resume Builder
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create professional resumes, track career progress, and get AI-powered career advice. 
                Build stunning resumes in minutes with intelligent suggestions.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 py-32">
          <div className="grid grid-cols-1 lg grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-4 rounded-lg transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Personal Info Tab */}
                {activeTab === 'personal' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={input.personalInfo.firstName}
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, firstName: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={input.personalInfo.lastName}
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, lastName: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={input.personalInfo.email}
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, email: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                          placeholder="john.doe@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={input.personalInfo.phone}
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, phone: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                          placeholder="+1 302 464 0950"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={input.personalInfo.location}
                        onChange={(e) => setInput({
                          ...input,
                          personalInfo: { ...input.personalInfo, location: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                        placeholder="San Francisco, CA"
                      />
                    </div>

                    <div className="grid grid-cols-1 md grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          LinkedIn
                        </label>
                        <input
                          type="url"
                          value={input.personalInfo.linkedin}
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, linkedin: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                          placeholder="linkedin.com/in/johndoe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          value={input.personalInfo.website}
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, website: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                          placeholder="johndoe.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Professional Summary *
                      </label>
                      <textarea
                        value={input.personalInfo.summary}
                        onChange={(e) => setInput({
                          ...input,
                          personalInfo: { ...input.personalInfo, summary: e.target.value }
                        })}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                        placeholder="Experienced software engineer with 5+ years in full-stack development..."
                      />
                    </div>
                  </div>
                )}

                {/* Experience Tab */}
                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-white">Work Experience</h2>
                      <button
                        onClick={addExperience}
                        className="bg-purple-600 text-white px-4 py-4 rounded-lg hover bg-purple-700 transition-colors"
                      >
                        Add Experience
                      </button>
                    </div>

                    <div className="space-y-6">
                      {input.experience.map((exp, index) => (
                        <div key={exp.id} className="bg-white/10 rounded-lg p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-white font-semibold">Experience {index + 1}</h3>
                            {input.experience.length > 1 && (
                              <button
                                onClick={() => removeExperience(index)}
                                className="text-red-400 hover text-red-300 transition-colors"
                              >
                                Remove
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Company *
                              </label>
                              <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                                placeholder="Company Name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Position *
                              </label>
                              <input
                                type="text"
                                value={exp.position}
                                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                                placeholder="Software Engineer"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md grid-cols-3 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Start Date
                              </label>
                              <input
                                type="date"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                End Date
                              </label>
                              <input
                                type="date"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                                disabled={exp.current}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus ring-purple-500 focus border-transparent disabled opacity-50"
                              />
                            </div>
                            <div className="flex items-center">
                              <label className="flex items-center space-x-2 text-gray-300">
                                <input
                                  type="checkbox"
                                  checked={exp.current}
                                  onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                                  className="rounded border-white/20 bg-white/10 text-purple-600 focus ring-purple-500"
                                />
                                <span>Current Position</span>
                              </label>
                            </div>
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Description
                            </label>
                            <textarea
                              value={exp.description}
                              onChange={(e) => updateExperience(index, 'description', e.target.value)}
                              rows={3}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              placeholder="Brief description of your role and responsibilities..."
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Key Achievements
                            </label>
                            <div className="space-y-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <div key={achievementIndex} className="flex space-x-2">
                                  <input
                                    type="text"
                                    value={achievement}
                                    onChange={(e) => updateAchievement(index, achievementIndex, e.target.value)}
                                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                                    placeholder="Key achievement or responsibility..."
                                  />
                                  <button
                                    onClick={() => removeAchievement(index, achievementIndex)}
                                    className="text-red-400 hover text-red-300 transition-colors px-3"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                              <button
                                onClick={() => addAchievement(index)}
                                className="text-purple-400 hover text-purple-300 transition-colors"
                              >
                                + Add Achievement
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === 'education' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-white">Education</h2>
                      <button
                        onClick={addEducation}
                        className="bg-purple-600 text-white px-4 py-4 rounded-lg hover bg-purple-700 transition-colors"
                      >
                        Add Education
                      </button>
                    </div>

                    <div className="space-y-6">
                      {input.education.map((edu, index) => (
                        <div key={edu.id} className="bg-white/10 rounded-lg p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-white font-semibold">Education {index + 1}</h3>
                            {input.education.length > 1 && (
                              <button
                                onClick={() => removeEducation(index)}
                                className="text-red-400 hover text-red-300 transition-colors"
                              >
                                Remove
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Institution *
                              </label>
                              <input
                                type="text"
                                value={edu.institution}
                                onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                                placeholder="University Name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Degree *
                              </label>
                              <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                                placeholder="Bachelor's"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md grid-cols-3 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Field of Study
                              </label>
                              <input
                                type="text"
                                value={edu.field}
                                onChange={(e) => updateEducation(index, 'field', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                                placeholder="Computer Science"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Start Date
                              </label>
                              <input
                                type="date"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                End Date
                              </label>
                              <input
                                type="date"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                                disabled={edu.current}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus ring-purple-500 focus border-transparent disabled opacity-50"
                              />
                            </div>
                          </div>

                          <div className="flex items-center mb-4">
                            <label className="flex items-center space-x-2 text-gray-300">
                              <input
                                type="checkbox"
                                checked={edu.current}
                                onChange={(e) => updateEducation(index, 'current', e.target.checked)}
                                className="rounded border-white/20 bg-white/10 text-purple-600 focus ring-purple-500"
                              />
                              <span>Currently Studying</span>
                            </label>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Description
                            </label>
                            <textarea
                              value={edu.description}
                              onChange={(e) => updateEducation(index, 'description', e.target.value)}
                              rows={3}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              placeholder="Relevant coursework, projects, or achievements..."
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === 'skills' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-white">Skills</h2>
                      <button
                        onClick={addSkill}
                        className="bg-purple-600 text-white px-4 py-4 rounded-lg hover bg-purple-700 transition-colors"
                      >
                        Add Skill
                      </button>
                    </div>

                    <div className="space-y-4">
                      {input.skills.map((skill, index) => (
                        <div key={skill.id} className="bg-white/10 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-white font-semibold">Skill {index + 1}</h3>
                            {input.skills.length > 1 && (
                              <button
                                onClick={() => removeSkill(index)}
                                className="text-red-400 hover text-red-300 transition-colors"
                              >
                                Remove
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Skill Name *
                              </label>
                              <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => updateSkill(index, 'name', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                                placeholder="JavaScript"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Level
                              </label>
                              <select
                                value={skill.level}
                                onChange={(e) => updateSkill(index, 'level', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              >
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Category
                              </label>
                              <input
                                type="text"
                                value={skill.category}
                                onChange={(e) => updateSkill(index, 'category', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                                placeholder="Technical"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Tab */}
                {activeTab === 'additional' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>

                    {/* Certifications */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Certifications
                      </label>
                      <div className="space-y-2">
                        {input.certifications.map((cert, index) => (
                          <div key={index} className="flex space-x-2">
                            <input
                              type="text"
                              value={cert}
                              onChange={(e) => updateArrayItem('certifications', index, e.target.value)}
                              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              placeholder="AWS Certified Solutions Architect"
                            />
                            <button
                              onClick={() => removeArrayItem('certifications', index)}
                              className="text-red-400 hover text-red-300 transition-colors px-3"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => addArrayItem('certifications', '')}
                          className="text-purple-400 hover text-purple-300 transition-colors"
                        >
                          + Add Certification
                        </button>
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Languages
                      </label>
                      <div className="space-y-2">
                        {input.languages.map((lang, index) => (
                          <div key={index} className="flex space-x-2">
                            <input
                              type="text"
                              value={lang}
                              onChange={(e) => updateArrayItem('languages', index, e.target.value)}
                              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              placeholder="English (Native)"
                            />
                            <button
                              onClick={() => removeArrayItem('languages', index)}
                              className="text-red-400 hover text-red-300 transition-colors px-3"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => addArrayItem('languages', '')}
                          className="text-purple-400 hover text-purple-300 transition-colors"
                        >
                          + Add Language
                        </button>
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Projects
                      </label>
                      <div className="space-y-2">
                        {input.projects.map((project, index) => (
                          <div key={index} className="flex space-x-2">
                            <input
                              type="text"
                              value={project}
                              onChange={(e) => updateArrayItem('projects', index, e.target.value)}
                              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              placeholder="E-commerce Platform - React, Node.js"
                            />
                            <button
                              onClick={() => removeArrayItem('projects', index)}
                              className="text-red-400 hover text-red-300 transition-colors px-3"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => addArrayItem('projects', '')}
                          className="text-purple-400 hover text-purple-300 transition-colors"
                        >
                          + Add Project
                        </button>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Achievements
                      </label>
                      <div className="space-y-2">
                        {input.achievements.map((achievement, index) => (
                          <div key={index} className="flex space-x-2">
                            <input
                              type="text"
                              value={achievement}
                              onChange={(e) => updateArrayItem('achievements', index, e.target.value)}
                              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                              placeholder="Led team of 5 developers to deliver project 2 weeks early"
                            />
                            <button
                              onClick={() => removeArrayItem('achievements', index)}
                              className="text-red-400 hover text-red-300 transition-colors px-3"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => addArrayItem('achievements', '')}
                          className="text-purple-400 hover text-purple-300 transition-colors"
                        >
                          + Add Achievement
                        </button>
                      </div>
                    </div>

                    {/* Template Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Resume Template
                      </label>
                      <select
                        value={input.template}
                        onChange={(e) => setInput({ ...input, template: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent"
                      >
                        <option value="modern">Modern</option>
                        <option value="classic">Classic</option>
                        <option value="creative">Creative</option>
                        <option value="minimal">Minimal</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Generate Button */}
                <div className="mt-8">
                  <button
                    onClick={generateResume}
                    disabled={loading || !input.personalInfo.firstName || !input.personalInfo.lastName}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-700 hover to-indigo-700 transition-all duration-200 disabled opacity-50 disabled cursor-not-allowed"
                  >
                    {loading ? 'Generating Resume...' : 'Generate Resume'}
                  </button>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Resume Preview</h2>
                  {generated && (
                    <div className="flex space-x-3">
                      <button
                        onClick={copyToClipboard}
                        className="bg-green-600 text-white px-4 py-4 rounded-lg hover bg-green-700 transition-colors"
                      >
                        Copy
                      </button>
                      <button
                        onClick={downloadResume}
                        className="bg-purple-600 text-white px-4 py-4 rounded-lg hover bg-purple-700 transition-colors"
                      >
                        Download
                      </button>
                    </div>
                  )}
                </div>

                {generated ? (
                  <div className="bg-white/10 rounded-lg p-6 max-h-96 overflow-y-auto">
                    <div dangerouslySetInnerHTML={{ __html: resume }} />
                  </div>
                ) : (
                  <div className="bg-white/10 rounded-lg p-6 h-96 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">📄</div>
                      <p className="text-lg">Your resume will appear here</p>
                      <p className="text-sm">Fill out the form and click "Generate Resume"</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">AI Resume Builder Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">AI-powered resume generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Professional templates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Career advice and suggestions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Download and share capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">ATS-friendly formatting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  
      </ModernLayout>
  );
};

export default ResumeBuilder;