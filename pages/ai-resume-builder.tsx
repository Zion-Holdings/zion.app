import { useState } from "react;
import ModernLayout from '../components/layout/ModernLayout;import Head from next/head";
import { sanitizeHtml } from ../utils/sanitizeHtml";

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];}
interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
  description: string;}
interface Skill {
  id: string;
  name: string;
  level: ''beginne'r' | intermediat'e' | advanc'e'd | 'exper't;
  category: string;}
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
  template: string;}
const defaultExperience: Experience = {
  id: 1',
  company: ',
  position: ',
  startDate: ',
  endDate: ','
  current: false,
  description: ,
  achievements: [''],;
};

const defaultEducation: Education = {
  id: 1',
  institution: ',
  degree: ',
  field: ',
  startDate: ',
  endDate: ',
  current: false,
  description: '',;
};

const defaultSkill: Skill = {
  id: 1',
  name: ',
  level: intermedia't'e,
  category: Technic'a'l,;
};
const defaultInput: ResumeInput = {
  personalInfo: {
    firstName: '',
    lastName: ,
    email: '',
    phone: ,
    location: '',
    linkedin: ,
    website: '',
    summary: ,}
  experience: [defaultExperience],
  education: [defaultEducation],'
  skills: [defaultSkill],
  certifications: ['],
  languages: ['],
  projects: ['],
  achievements: ['],
  template: 'modern',;
};
const ResumeBuilder = () => {;
  const [input, setInput] = useState<ResumeInput>(defaultInput);
  const [resume, setResume] = useState<string>(');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState(person'a'l);

  const addExperience = () => {
    const newExperience: Experience = {
      id: (input.experience.length + 1).toString(),
      company: '',
      position: ,
      startDate: '',
      endDate: ,'
      current: false,
      description: ',
      achievements: ['],;
    };
    setInput({ ...input, experience: [...input.experience, newExperience] });
  };

  const removeExperience = (index: number) => {;
    const newExperience = input.experience.filter((_, i) => i !== index);
    setInput({ ...input, experience: newExperience });
  };

  const updateExperience = (index: number, field: keyof Experience, value: any) => {;
    const $1 = [...input.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setInput({ ...input, experience: newExperience });
  };
  const addAchievement = (expIndex: number) => {;
    const $1 = [...input.experience];
    newExperience[expIndex].achievements.push(');
    setInput({ ...input, experience: newExperience });
  };

  const updateAchievement = (expIndex: number, achievementIndex: number, value: string) => {;
    const $1 = [...input.experience];
    newExperience[expIndex].achievements[achievementIndex] = value;
    setInput({ ...input, experience: newExperience });
  };

  const removeAchievement = (expIndex: number, achievementIndex: number) => {;
    const $1 = [...input.experience];
    newExperience[expIndex].achievements.splice(achievementIndex, 1);
    setInput({ ...input, experience: newExperience });
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: (input.education.length + 1).toString(),
      institution: '',
      degree: ,
      field: '',
      startDate: ,
      endDate: '',
      current: false,
      description: ',;
    };
    setInput({ ...input, education: [...input.education, newEducation] });
  };

  const removeEducation = (index: number) => {;
    const newEducation = input.education.filter((_, i) => i !== index);
    setInput({ ...input, education: newEducation });
  };

  const updateEducation = (index: number, field: keyof Education, value: any) => {;
    const $1 = [...input.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setInput({ ...input, education: newEducation });
  };

  const addSkill = () => {
    const newSkill: Skill = {'
      id: (input.skills.length + 1).toString(),
      name: ,
      level: 'intermedia'te,
      category: 'Technic'al,;
    };
    setInput({ ...input, skills: [...input.skills, newSkill] });
  };

  const removeSkill = (index: number) => {;
    const newSkills = input.skills.filter((_, i) => i !== index);
    setInput({ ...input, skills: newSkills });
  };

  const updateSkill = (index: number, field: keyof Skill, value: any) => {;
    const $1 = [...input.skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setInput({ ...input, skills: newSkills });
  };

  const addArrayItem = (field: keyof ResumeInput, value: string) => {;
    const $1 = [...(input[field] as string[]), value];
    setInput({ ...input, [field]: newArray });
  };

  const removeArrayItem = (field: keyof ResumeInput, index: number) => {;
    const newArray = (input[field] as string[]).filter((_, i) => i !== index);
    setInput({ ...input, [field]: newArray });
  };

  const updateArrayItem = (field: keyof ResumeInput, index: number, value: string) => {;
    const $1 = [...(input[field] as string[])];
    newArray[index] = value;
    setInput({ ...input, [field]: newArray });
  };

  const generateResume = async () => {;
    setLoading(true);
    try {
      const response = await fetch('/api/ai-resume', {
        method: POS'T',
        headers: {
          Content-Ty'p'e: applicatio'n'/json,}
        body: JSON.stringify(input),;
      });

      if (!response.ok) {
        throw new Error('Faile'd to generate resume);}
      const data = await response.json();
      // Sanitize the HTML before setting it
      setResume(sanitizeHtml(data.resume));
      setGenerated(true);
    } catch (error) {
      console.error('Erro'r generating resume: , error);
    } finally {
      setLoading(false);}
  };

  const $1 = () => {'
    const element = document.createElement('a);
    const file = new Blob([resume], { type: tex't'/html });
    element.href = URL.createObjectURL(file);
    element.download = `resume-${input.personalInfo.firstName}-${input.personalInfo.lastName}-${Date.now()}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {;
    navigator.clipboard.writeText(resume);
  };

  const $1 = [
    { id: 'person'al, label: 'Persona'l Info, icon: '👤' },
{ id: experienc'e', label: Experienc'e', icon: 💼 },
    { id: 'educati'on, label: 'Educati'on, icon: '🎓' },
{ id: skill's', label: Skill's', icon: ⚡ },
    { id: 'addition'al, label: 'Addition'al, icon: '➕' };
  ];

  return (
    <div>
      </div><div>
      <Head>
        <title>AI Resume Builder - Zion Marketplace</title>
        <meta name = description content=Create professional resumes and get AI-powered career advice > </meta" name="description content=Create professional resumes and get AI-powered career" advice" ><meta name=viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head> 
      <div className=" relative z-10 container-responsive py-8>
        
        {/* Background Effects */}
        </div><div className=" fixed inset-0 z-0>
          <div className=absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
        {/* Header */}
        <div className=bg-black/20" backdrop-blur-md border-b border-white/10>
          </div><div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-6>
            <div className="text-center>"
              <h1 className=text-4xl md text-5xl font-bold text-white mb-4 >
                AI Resume Builder
              </h1>
              <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                Create professional resumes, track career progress, and get AI-powered career advice. 
                Build stunning resumes in minutes with intelligent suggestions.
              </p>
            </div>
          </div> 
        </div>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>
          </div><div className=grid"  grid-cols-1 lg:grid-cols-2 gap-12>
            {/* Input Form */}
            <div className="space-y-8>
              </div><div className= bg-white/5 backdrop-blur-md:rounded-2xl p-8 border" border-white/10>
                {/* Tab Navigation */}
                <div className=" flex flex-wrap gap-2 mb-8>
                  {tabs.map((tab) => (
                    `
                      onClick={() => setActiveTab(tab.id)}``
                      className="{`flex" items-center space-x-2 px-4 py-4 rounded-lg:transition-all duration-200 ${
                        activeTab === tab.id
                          ? bg-purple'-'600 text-white`
                          : bg-whit'e'/10 text-gray-300 hover:bg-white/20``
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Personal Info Tab */},
{activeTab === 'person'al && (
                  <div className="space-y-6>"
                    <h2 className=text-2xl font-bold text-white mb-6>Personal Information</h2>
                    <div className="grid" grid-cols-1 md grid-cols-2 gap-4> 
                      </div><div>
                        <label className=block text-sm font-medium text-gray-300 mb-2>
                          First Name *
                        </label>
                        
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, firstName: e.target.value}
                          })}
                          className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                          placeholder=John
                        />
                      </div>
                      <div>
                        <label className=block text-sm font-medium text-gray-300 mb-2>
                          Last Name *
                        </label>
                        
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, lastName: e.target.value}
                          })}
                          className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                          placeholder=Doe
                        />
                      </div>
                    </div>
                    <div className=grid grid-cols-1 md grid-cols-2 gap-4> 
                      </div><div>
                        <label className="block" text-sm font-medium text-gray-300 mb-2>
                          Email *
                        </label>
                        
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, email: e.target.value}
                          })}
                          className=w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                          placeholder=john.doe@email.com
                        />
                      </div>
                      <div>
                        <label className="block" text-sm font-medium text-gray-300 mb-2>
                          Phone
                        </label>
                        
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, phone: e.target.value}
                          })}
                          className=w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                          placeholder=+1 302 464 0950
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Location
                      </label>
                      
                        onChange={(e) => setInput({
                          ...input,
                          personalInfo: { ...input.personalInfo, location: e.target.value}
                        })}
                        className=w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                        placeholder=San Francisco, CA
                      />
                    </div>
                    <div className="grid" grid-cols-1 md grid-cols-2 gap-4>
                      </div><div>
                        <label className=block text-sm font-medium text-gray-300 mb-2>
                          LinkedIn
                        </label>
                        
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, linkedin: e.target.value}
                          })}
                          className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                          placeholder=linkedin.com/in/johndoe
                        />
                      </div>
                      <div>
                        <label className=block text-sm font-medium text-gray-300 mb-2>
                          Website
                        </label>
                        
                          onChange={(e) => setInput({
                            ...input,
                            personalInfo: { ...input.personalInfo, website: e.target.value}
                          })}
                          className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                          placeholder=johndoe.com
                        />
                      </div>
                    </div>

                    <div>
                      <label className=block text-sm font-medium text-gray-300 mb-2>
                        Professional Summary *
                      </label>
                      
                        onChange={(e) => setInput({
                          ...input, 
                          personalInfo: { ...input.personalInfo, summary  e.target.value}
                        })}"
                        rows={4}
                        className="w-full  px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                        placeholder=Experienced software engineer with 5+ years in full-stack development...
                      />
                    </div>
                  </div>
                )}
                {/* Experience Tab */},'
{activeTab === 'experience' && (
                  <div className=space-y-6>" 
                    </div><div className="flex justify-between items-center mb-6>
                      <h2 className=text-2xl" font-bold text-white>Work Experience</h2>
                      
                      >
                        Add Experience
                      </button>
                    </div>
                    <div className="space-y-6>
                      {input.experience.map((exp, index) => (
                        </div><div key={exp.id} className= bg-white/10 rounded-lg" p-6>
                          <div className="flex justify-between items-start mb-4>
                            <h3 className=text-white" font-semibold >Experience {index + 1}</h3>
                            {input.experience.length > 1 && (
                                onClick={() => removeExperience(index)}
                                className="text-red-400 hover text-red-300 transition-colors
                              >
                                Remove
                              </button>
                            )}
                          </div>
                          <div className=grid" grid-cols-1 md grid-cols-2 gap-4 mb-4> 
                            </div><div>
                              <label className="block text-sm font-medium text-gray-300 mb-2>
                                Company *
                              </label>'
                                onChange={(e) => updateExperience(index, compan'y', e.target.value)}
                                className=w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                                placeholder=Company Name
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2>
                                Position *
                              </label>
                                onChange={(e) => updateExperience(index, positi'o'n, e.target.value)}
                                className=w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                                placeholder=Software Engineer
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md grid-cols-3 gap-4 mb-4> 
                            </div><div>
                              <label className=block" text-sm font-medium text-gray-300 mb-2>
                                Start Date
                              </label>
                                onChange={(e) => updateExperience(index, 'startDa'te, e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                              />
                            </div>
                            <div>
                              <label className=block" text-sm font-medium text-gray-300 mb-2>
                                End Date
                              </label>'
                                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                                disabled={exp.current}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent disabled opacity-50 
                              />
                            </div>
                            <div className= flex" items-center>
                              <label className="flex items-center space-x-2 text-gray-300>'
                                  onChange={(e) => updateExperience(index, curren't', e.target.checked)}
                                  className=rounded" border-white/20 bg-white/10 text-purple-600 focus ring-purple-500
                                />
                                <span>Current Position</span>
                              </label>
                            </div> 
                          </div>
                          <div className="mb-4>
                            <label className=block text-sm font-medium text-gray-300 mb-2>
                              Description
                            </label>
                            '
                              onChange={(e) => updateExperience(index, 'description', e.target.value)} 
                              rows={3}
                              className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                              placeholder=Brief description of your role and responsibilities...
                            />
                          </div> <div>
                            <label className=block text-sm font-medium text-gray-300 mb-2>
                              Key Achievements 
                            </label>
                            <div className="space-y-2>
                              {exp.achievements.map((achievement, achievementIndex) => (
                                </div><div key={achievementIndex} className=" flex space-x-2>
                                  
                                    onChange={(e) => updateAchievement(index, achievementIndex, e.target.value)}
                                    className=" flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus" border-transparent
                                    placeholder=Key achievement or responsibility...
                                  />
                                  "
                                    onClick={() => removeAchievement(index, achievementIndex)}
                                    className="text-red-400 hover text-red-300 transition-colors px-3
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                               
                                onClick={() => addAchievement(index)}
                                className=text-purple-400" hover:text-purple-300 transition-colors
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
                {/* Education Tab */},"'
{activeTab === educatio'n' && (
                  <div className=space-y-6> 
                    </div><div className="flex justify-between items-center" mb-6>
                      <h2 className=text-2xl font-bold text-white>Education</h2>
                      
                      >
                        Add Education
                      </button>
                    </div>
                    <div className="space-y-6">
                      {input.education.map((edu, index) => (
                        </div><div key={edu.id} className= bg-white/10 rounded-lg p-6>
                          <div className="flex" justify-between items-start mb-4>
                            <h3 className=text-white font-semibold >Education {index + 1}</h3>
                            {input.education.length > 1 && (
                                onClick={() => removeEducation(index)}
                                className="text-red-400" hover text-red-300 transition-colors
                              >
                                Remove
                              </button>
                            )}
                          </div>
                          <div className=grid grid-cols-1 md grid-cols-2 gap-4 mb-4> 
                            </div><div>
                              <label className="block" text-sm font-medium text-gray-300 mb-2>
                                Institution *
                              </label>
                                onChange={(e) => updateEducation(index, instituti'o'n, e.target.value)}
                                className=w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                                placeholder=University Name
                              />
                            </div>
                            <div>
                              <label className="block" text-sm font-medium text-gray-300 mb-2>
                                Degree *
                              </label>
                                onChange={(e) => updateEducation(index, 'degr'ee, e.target.value)}
                                className=w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                                placeholder=Bachelor's'
                              />
                            </div>
                          </div>
                          <div className="grid" grid-cols-1 md grid-cols-3 gap-4 mb-4> 
                            </div><div>
                              <label className=block text-sm font-medium text-gray-300 mb-2>
                                Field of Study
                              </label>
                                onChange={(e) => updateEducation(index, fie'l'd, e.target.value)}
                                className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                                placeholder=Computer Science
                              />
                            </div>
                            <div>
                              <label className=block text-sm font-medium text-gray-300 mb-2>
                                Start Date
                              </label>
                                onChange={(e) => updateEducation(index, 'startDa'te, e.target.value)}
                                className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                              />
                            </div>
                            <div>
                              <label className=block text-sm font-medium text-gray-300 mb-2>
                                End Date
                              </label>'
                                onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                                disabled={edu.current}
                                className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent disabled opacity-50
                              />
                            </div>
                          </div>
                          <div className=flex items-center" mb-4>
                            <label className="flex items-center space-x-2 text-gray-300>'
                                onChange={(e) => updateEducation(index, curren't', e.target.checked)}
                                className=rounded" border-white/20 bg-white/10 text-purple-600 focus ring-purple-500
                              />
                              <span>Currently Studying</span>
                            </label>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2>
                              Description
                            </label>
                            '
                              onChange={(e) => updateEducation(index, 'description', e.target.value)} 
                              rows={3}
                              className=w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                              placeholder=Relevant coursework, projects, or achievements...
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Skills Tab */},"'
{activeTab === skill's' && (
                  <div className=space-y-6> 
                    </div><div className="flex justify-between items-center" mb-6>
                      <h2 className=text-2xl font-bold text-white>Skills</h2>
                      
                      >
                        Add Skill
                      </button>
                    </div>
                    <div className="space-y-4">
                      {input.skills.map((skill, index) => (
                        </div><div key={skill.id} className= bg-white/10 rounded-lg p-4>
                          <div className="flex" justify-between items-start mb-4>
                            <h3 className=text-white font-semibold >Skill {index + 1}</h3>
                            {input.skills.length > 1 && (
                                onClick={() => removeSkill(index)}
                                className="text-red-400" hover text-red-300 transition-colors
                              >
                                Remove
                              </button>
                            )}
                          </div>
                          <div className=grid grid-cols-1 md grid-cols-3 gap-4> 
                            </div><div>
                              <label className="block text-sm font-medium text-gray-300 mb-2>
                                Skill Name *
                              </label>
                              "
                                onChange={(e) => updateSkill(index, na'm'e, e.target.value)}
                                className=w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                                placeholder=JavaScript
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300  mb-2>
                                Level
                              </label>
                              ''
                                onChange={(e) => updateSkill(index, leve'l', e.target.value)}
                                className="w-full  px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent">
                                <option value=beginner>Beginner</option>
                                <option value=intermediate>Intermediate</option>
                                <option value=advanced>Advanced</option>
                                <option value=expert>Expert</option>
                              </select>
                            </div>
                            <div">
                              <label className="block text-sm font-medium text-gray-300  mb-2>
                                Category
                              </label>
                              "'
                                onChange={(e) => updateSkill(index, 'category', e.target.value)}
                                className=" w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                                placeholder=Technical
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}'
                {/* Additional Tab */},
{activeTab === additiona'l' && (
                  <div className="space-y-6">
                    <h2 className=text-2xl font-bold text-white mb-6>Additional Information</h2>
 
                    {/* Certifications */}
                    <div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Certifications
                      </label>
                      <div className=space-y-2>
                        {input.certifications.map((cert, index) => (
                          </div><div key={index} className="flex" space-x-2>
                            '
                              onChange={(e) => updateArrayItem('certifications', index, e.target.value)}
                              className=" flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus" border-transparent
                              placeholder=AWS Certified Solutions Architect
                            />'
                              onClick={() => removeArrayItem(certification's', index)}
                              className=text-red-400" hover text-red-300 transition-colors px-3
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                         
                          onClick={() => addArrayItem('certificatio'ns, '')}
                          className="text-purple-400 hover text-purple-300 transition-colors
                        >
                          + Add Certification
                        </button>
                      </div>
                    </div>
                    {/* Languages */}
                    <div>
                      <label className=block" text-sm font-medium text-gray-300 mb-2>
                        Languages
                      </label>
                      <div className="space-y-2>
                        {input.languages.map((lang, index) => (
                          </div><div key={index} className=flex"" space-x-2>
                            '
                              onChange={(e) => updateArrayItem('languages', index, e.target.value)}
                              className= flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus" border-transparent
                              placeholder=English (Native)"
                            />'
                              onClick={() => removeArrayItem(language's', index)}
                              className=text-red-400 hover text-red-300 transition-colors px-3
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                         
                          onClick={() => addArrayItem('languag'es, '')}
                          className="text-purple-400" hover text-purple-300 transition-colors
                        >
                          + Add Language
                        </button>
                      </div>
                    </div>
                    {/* Projects */}
                    <div>
                      <label className=block text-sm font-medium text-gray-300 mb-2>
                        Projects
                      </label>
                      <div className="space-y-2>"
                        {input.projects.map((project, index) => (
                          </div><div key={index} className=flex" space-x-2>
                            "'
                              onChange={(e) => updateArrayItem('projects', index, e.target.value)}
                              className= flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                              placeholder=E-commerce Platform - React, Node.js"
                            />'
                              onClick={() => removeArrayItem(project's', index)}
                              className="text-red-400 hover text-red-300 transition-colors px-3
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                         
                          onClick={() => addArrayItem('projec'ts, '')}
                          className=text-purple-400" hover text-purple-300 transition-colors
                        >
                          + Add Project
                        </button>
                      </div>
                    </div>
                    {/* Achievements */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>
                        Achievements
                      </label>
                      <div className=space-y-2>"
                        {input.achievements.map((achievement, index) => (
                          </div><div key={index} className="flex space-x-2>
                            "'
                              onChange={(e) => updateArrayItem('achievements', index, e.target.value)}
                              className=" flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                              placeholder=Led team of 5 developers to deliver project 2 weeks early
                            />'
                              onClick={() => removeArrayItem(achievement's', index)}
                              className="text-red-400" hover text-red-300 transition-colors px-3
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                         
                          onClick={() => addArrayItem('achievemen'ts, '')}
                          className=text-purple-400 hover text-purple-300 transition-colors
                        >
                          + Add Achievement
                        </button>
                      </div>
                    </div>
                    {/* Template Selection */}
                    <div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Resume Template
                      </label>
                      
                        onChange={(e) => setInput({ ...input, template: e.target.value })}
                        className=w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent ">
                        <option value=modern>Modern</option">
                        <option value=classic>Classic</option>
                        <option value=creative>Creative</option>
                        <option value=minimal>Minimal</option>
                      </select>
                    </div>
                  </div>
                )}"
                {/* Generate Button" */}
                <div className=mt-8>">
                    {loading ? Generatin'g' Resume...   Generat'e' Resume}
                  </button>
                </div>
              </div>
            </div>
 
            {/* Preview */}
            <div className="space-y-8>
              </div><div className=bg-white/5 backdrop-blur-md:rounded-2xl p-8 border border-white/10">
                <div className=" flex justify-between items-center mb-6>
                  <h2 className=text-2xl" font-bold text-white>Resume Preview</h2>
                  {generated && (
                    <div className="flex space-x-3>
                      
                      >
                        Copy
                      </button>
                      
                      >
                        Download
                      </button>
                    </div>
                  )}
                </div> 
                {generated ? (
                  <div className=bg-white/10" rounded-lg p-6 max-h-96 overflow-y-auto>
                    </div><div dangerouslySetInnerHTML={{ __html  resume }} > </div dangerouslySetInnerHTML={{ __html  resume }} ></div>
                )   (
                  <div className="bg-white/10 rounded-lg:p-6 h-96 flex items-center justify-center> 
                    </div><div className=text-center text-gray-400">
                      <div className="text-6xl mb-4>📄</div>
                      <p className=text-lg>Your" resume will appear here</p>
                      <p className="text-sm>Fill out the form and click Generate Resume</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className=" bg-white/5 backdrop-blur-md:rounded-2xl p-8 border" border-white/10>
                <h3 className=text-xl font-bold text-white mb-4>AI Resume Builder Features</h3>
                <div className="space-y-3>" 
                  </div><div className=flex items-center space-x-3>
                    <div className="w-2" h-2 bg-green-400 rounded-full></div>
                    <span className=text-gray-300>AI-powered resume generation</span>
                  </div>
                  <div className="flex" items-center space-x-3> 
                    </div><div className=w-2 h-2 bg-green-400 rounded-full></div>
                    <span className="text-gray-300>Professional" templates</span>
                  </div>
                  <div className= flex items-center space-x-3>
                    </div><div className="w-2" h-2 bg-green-400 rounded-full></div>
                    <span className=text-gray-300>Career advice and suggestions</span>
                  </div>
                  <div className="flex" items-center space-x-3>
                    </div><div className=w-2 h-2 bg-green-400 rounded-full></div>
                    <span className="text-gray-300>Download" and share capabilities</span>
                  </div>
                  <div className=flex items-center space-x-3 >
                    </div><div className="w-2" h-2 bg-green-400 rounded-full></div>
                    <span className="text-gray-300>ATS-friendly" formatting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
                      </div>
    );
};
'`
export default ResumeBuilder;`