import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: number; // hours
  modules: Module[];
  instructor: Instructor;
  rating: number;
  reviewCount: number;
  enrolledCount: number;
  price: number;
  originalPrice?: number;
  isFree: boolean;
  certificate: boolean;
  aiPowered: boolean;
  tags: string[];
  prerequisites: string[];
  learningPath: string[];
  completionRate: number;
  lastUpdated: Date;
}

interface Module {
  id: string;
  title: string;
  description: string;
  duration: number; // minutes
  type: 'video' | 'interactive' | 'quiz' | 'project' | 'ai-simulation';
  content: string[];
  aiFeatures: string[];
  progress: number;
  completed: boolean;
}

interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  experience: number;
  expertise: string[];
  verified: boolean;
  featured: boolean;
}

interface SkillAssessment {
  id: string;
  skillName: string;
  category: string;
  questions: AssessmentQuestion[];
  timeLimit: number; // minutes
  passingScore: number;
  difficulty: 'easy' | 'medium' | 'intermediate' | 'hard' | 'expert';
  aiAnalysis: AIAnalysis;
  certificate: boolean;
}

interface AssessmentQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'coding' | 'scenario' | 'ai-interactive';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: number;
  aiGenerated: boolean;
}

interface AIAnalysis {
  skillLevel: 'novice' | 'beginner' | 'intermediate' | 'advanced' | 'expert';
  confidence: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  nextSteps: string[];
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: number; // weeks
  courses: string[];
  skills: string[];
  careerOutcome: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  aiRecommended: boolean;
  completionRate: number;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: string;
  level: string;
  validity: number; // months
  requirements: string[];
  assessment: string;
  aiVerified: boolean;
  marketValue: number;
  recognition: string[];
}

const AIPoweredLearningPlatformPage: NextPage = () => {
  
  const [courses, setCourses] = useState<Course[]>([]
  const [assessments, setAssessments] = useState<SkillAssessment[]>([]
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]
  const [certifications, setCertifications] = useState<Certification[]>([]
  const [selectedCategory, setSelectedCategory] = useState<string>('all'
  const [selectedLevel, setSelectedLevel] = useState<string>('all'
  const [sortBy, setSortBy] = useState<'rating' | 'popularity' | 'newest' | 'price'>('popularity'
  const [isLoading, setIsLoading] = useState(true
  const [activeTab, setActiveTab] = useState<'courses' | 'assessments' | 'paths' | 'certifications'>('courses'
  // Mock data for courses
  const mockCourses: Course[] = [
    {
      id: '1',
      title: 'AI-Powered Web Development Masterclass',
      description: 'Learn modern web development with AI integration, from basics to advanced concepts including machine learning APIs.',
      category: 'Web Development',
      level: 'intermediate',
      duration: 40,
      modules: [
        {
          id: '1-1',
          title: 'Introduction to AI in Web Development',
          description: 'Understanding AI integration in modern web applications',
          duration: 120,
          type: 'video',
          content: ['AI Basics', 'Web Development Fundamentals', 'Integration Strategies'],
          aiFeatures: ['Personalized Learning Path', 'AI-Generated Examples', 'Smart Code Review'],
          progress: 0,
          completed: false
}
        },
{
          id: '1-2',
          title: 'Building AI-Powered APIs',
          description: 'Create intelligent APIs using machine learning models',
          duration: 180,
          type: 'interactive',
          content: ['API Design', 'ML Model Integration', 'Testing Strategies'],
          aiFeatures: ['AI Code Assistant', 'Real-time Feedback', 'Performance Analysis'],
          progress: 0,
          completed: false
        }
      ],
      instructor: {
        id: '1',
        name: 'Dr. Sarah Chen',
        title: 'Senior AI Engineer at TechCorp',
        avatar: '/images/instructors/sarah-chen.jpg',
        rating: 4.8,
        experience: 8,
        expertise: ['AI/ML', 'Web Development', 'System Architecture'],
        verified: true,
        featured: true
      }
      rating: 4.7,
      reviewCount: 234,
      enrolledCount: 1247,
      price: 299,
      originalPrice: 399,
      isFree: false,
      certificate: true,
      aiPowered: true,
      tags: ['AI', 'Web Development', 'Machine Learning', 'JavaScript'],
      prerequisites: ['Basic JavaScript', 'HTML/CSS Fundamentals'],
      learningPath: ['AI Basics', 'Web Development', 'ML Integration'],
      completionRate: 0.78,
      lastUpdated: new Date('2024-01-15'
    }
    {
      id: '2',
      title: 'Blockchain Development with AI Integration',
      description: 'Master blockchain development and integrate AI capabilities for next-generation decentralized applications.',
      category: 'Blockchain',
      level: 'advanced',
      duration: 60,
      modules: [
        {
          id: '2-1',
          title: 'Blockchain Fundamentals',
          description: 'Core concepts of blockchain technology and smart contracts',
          duration: 240,
          type: 'interactive',
          content: ['Blockchain Basics', 'Smart Contracts', 'Consensus Mechanisms'],
          aiFeatures: ['AI-Powered Debugging', 'Smart Contract Analysis', 'Security Validation'],
          progress: 0,
          completed: false
        }
      ],
      instructor: {
        id: '2',
        name: 'Alex Rodriguez',
        title: 'Blockchain Architect & AI Researcher',
        avatar: '/images/instructors/alex-rodriguez.jpg',
        rating: 4.9,
        experience: 10,
        expertise: ['Blockchain', 'AI/ML', 'Cryptography'],
        verified: true,
        featured: true
      }
      rating: 4.8,
      reviewCount: 156,
      enrolledCount: 892,
      price: 499,
      isFree: false,
      certificate: true,
      aiPowered: true,
      tags: ['Blockchain', 'AI', 'Smart Contracts', 'Solidity'],
      prerequisites: ['Programming Basics', 'Cryptography Fundamentals'],
      learningPath: ['Blockchain Basics', 'Smart Contracts', 'AI Integration'],
      completionRate: 0.65,
      lastUpdated: new Date('2024-01-10'
    }
  ]

  // Mock skill assessments
  const mockAssessments: SkillAssessment[] = [
    {
      id: '1',
      skillName: 'JavaScript AI Integration',
      category: 'Programming',
      questions: [
        {
          id: '1-1',
          question: 'How would you integrate a machine learning model into a JavaScript web application?',
          type: 'scenario',
          correctAnswer: 'Use TensorFlow.js or ONNX.js for client-side ML inference',
          explanation: 'TensorFlow.js allows running ML models directly in the browser, enabling real-time AI features.',
          difficulty: 0.7,
          aiGenerated: true
        }
      ],
      timeLimit: 30,
      passingScore: 80,
      difficulty: 'intermediate',
      aiAnalysis: {
        skillLevel: 'intermediate',
        confidence: 0.85,
        strengths: ['JavaScript Fundamentals', 'API Integration'],
        weaknesses: ['Advanced ML Concepts', 'Performance Optimization'],
        recommendations: ['Practice with TensorFlow.js', 'Study model optimization'],
        nextSteps: ['Take Advanced ML Course', 'Build AI-Powered Project']
      }
      certificate: true
    }
  ]

  // Mock learning paths
  const mockLearningPaths: LearningPath[] = [
    {
      id: '1',
      title: 'Full-Stack AI Developer',
      description: 'Complete path to become a full-stack developer with AI integration capabilities',
      category: 'Development',
      duration: 16,
      courses: ['AI-Powered Web Development', 'Backend AI Integration', 'ML Model Deployment'],
      skills: ['JavaScript', 'Python', 'Machine Learning', 'API Development'],
      careerOutcome: 'AI Full-Stack Developer',
      difficulty: 'intermediate',
      aiRecommended: true,
      completionRate: 0.72
    }
  ]

  // Mock certifications
  const mockCertifications: Certification[] = [
    {
      id: '1',
      name: 'AI-Powered Web Development Professional',
      issuer: 'Zion Tech Academy',
      category: 'Web Development',
      level: 'Professional',
      validity: 24,
      requirements: ['Complete AI Web Development Course', 'Pass Final Assessment', 'Build Portfolio Project'],
      assessment: 'Comprehensive project-based evaluation with AI code review',
      aiVerified: true,
      marketValue: 85000,
      recognition: ['TechCorp', 'InnovateDev', 'Global Tech Companies']
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setCourses(mockCourses
      setAssessments(mockAssessments
      setLearningPaths(mockLearningPaths
      setCertifications(mockCertifications
      setIsLoading(false
    } 1000
  } []
  const filteredCourses = useMemo(() => {
    let filtered = courses

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(c => c.category === selectedCategory
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(c => c.level === selectedLevel
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'popularity':
          return b.enrolledCount - a.enrolledCount
        case 'newest':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(
        case 'price':
          return a.price - b.price
        default:
          return 0
      }
    }
  } [courses, selectedCategory, selectedLevel, sortBy]
  const categories = useMemo(() => {
    const cats = Array.from(new Set(courses.map(c => c.category))
    return ['all', ...cats]
  } [courses]
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-500/20 text-green-300'
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-300'
      case 'advanced': return 'bg-orange-500/20 text-orange-300'
      case 'expert': return 'bg-red-500/20 text-red-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div>
      </div><div className="relative z-10 container-responsive py-8>
        
        {/* Background Effects */}"
        <div className=fixed inset-0 z-0>
          </div><div className=""absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      
      <Head>
        <title>AI-Powered Learning Platform | Zion Tech Group</title>
        <meta name="description" content="Personalized AI-powered learning platform with courses, skill assessments, certifications, and mentorship programs for marketplace users. > </meta name="description" content="Personalized AI-powered learning platform with courses, skill assessments, certifications, and mentorship programs for marketplace users." ><meta name="keywords" content="AI learning, skill development, online courses, certifications, mentorship, personalized education > </meta name="keywords" content="AI learning, skill development, online courses, certifications, mentorship, personalized education" ><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Header */}
      <div className=relative overflow-hidden>
        </div><div className=absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20></div>
        <div className=""relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44>
          </div><div className=text-center">
            <h1 className=text-5xl md text-6xl font-bold text-white mb-6>
              AI-Powered Learning Platform
            </h1>
            <p className=text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Master in-demand skills with personalized AI-powered courses, skill assessments, 
              and certifications designed to accelerate your career growth in the tech marketplace.
            </p>
            <div className=""flex flex-wrap justify-center gap-4>
              </div><div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3 >
                <span className=text-white font-semibold>🎓 Personalized Learning</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3>"
                <span className=""text-white font-semibold>🤖 AI-Powered Assessment</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3 >
                <span className=text-white font-semibold>📜 Industry Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>
        {isLoading ? (
          </div><div className=""flex justify-center items-center py-40>
            <div className=animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 ></div>
          </div>
        ) : (
          </>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8>
              
                onClick={() => setActiveTab('courses')}"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'courses'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      'bg-white/10 text-gray-300 hover bg-white/20'
                }`}
              >
                Courses
              </button>
              
                onClick={() => setActiveTab('assessments')}"
                className=""{`px-6 py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'assessments'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Skill Assessments
              </button>
              
                onClick={() => setActiveTab('paths')}
                className={`px-6 py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'paths'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Learning Paths
              </button>
              
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'certifications'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      'bg-white/10 text-gray-300 hover bg-white/20'
                }`}
              >
                Certifications
              </button>
            </div>

            {/* Courses Tab */},
{activeTab === 'courses' && ("
              <div className="space-y-8>
                {/* Filters */}
                </div><div className="bg-white/10 backdrop-blur-sm:rounded-xl p-6>
                  <div className=""grid" grid-cols-1 md:grid-cols-3" gap-4>
                    </div><div>
                      <label className=block text-sm font-medium text-gray-300 mb-2>Category</label>
                      
                        onChange={(e) => setSelectedCategory(e.target.value)}"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500
                      >
                        {categories.map(category => ("
                          <option key={category} value={category} className=""bg-slate-800>
                            {category === 'all' ? 'All Categories' : category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className=block text-sm font-medium text-gray-300 mb-2 >Level</label>
                      
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500
                      >"
                        <option value=all className="bg-slate-800>All Levels</option>
                        <option value=beginner" className=bg-slate-800>Beginner</option>
                        <option value=intermediate className="bg-slate-800>Intermediate</option>
                        <option value=advanced" className=bg-slate-800>Advanced</option>
                        <option value=expert className="bg-slate-800>Expert</option>
                      </select>
                    </div>
                    <div>
                      <label className=block text-sm font-medium text-gray-300 mb-2 >Sort By</label>
                      
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500
                      >"
                        <option value=popularity className="bg-slate-800>Popularity</option>
                        <option value=rating" className=bg-slate-800>Rating</option>
                        <option value=newest className="bg-slate-800>Newest</option>
                        <option value=price" className=bg-slate-800>Price</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Courses Grid */}"
                <div className="grid grid-cols-1 lg grid-cols-2 gap-8>
                  {filteredCourses.map((course) => (
                    </div><div key={course.id} className=""bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                      {/* Header */}
                      <div className=flex items-start justify-between mb-4 >
                        </div><div>
                          <h3 className=text-xl font-semibold text-white mb-2>{course.title}</h3>
                          <div className="flex items-center space-x-2>"
                            <span className=""px-4 py-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300>
                              {course.category}
                            </span>
                            <span className={`px-4 py-3 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                              {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                            </span>
                            {course.aiPowered && (
                              <span className=px-4 py-3 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300>
                                AI-Powered
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right>
                          </div><div className=text-2xl font-bold text-white>
                            {course.isFree ? 'Free'   `$${course.price}`}
                          </div>
                          {course.originalPrice && ("
                            <div className=""text-sm:text-gray-400" line-through>
                              ${course.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>

                      <p className=text-gray-300 text-sm mb-4>{course.description}</p>

                      {/* Instructor */}"
                      <div className=flex items-center space-x-3 mb-4>
                        </div><div className=""w-10" h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center>
                          <span className=text-white font-semibold text-sm >
                            {course.instructor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          </div><div className=text-white font-semibold>{course.instructor.name}</div>
                          <div className=text-gray-400 text-sm>{course.instructor.title}</div>
                        </div>
                        <div className=""flex" items-center space-x-1>
                          <span className=text-yellow-400>★</span>
                          <span className=text-white text-sm>{course.instructor.rating}</span>
                        </div>
                      </div>

                      {/* Stats */}"
                      <div className=grid grid-cols-3 gap-4 mb-4 text-center>
                        </div><div>
                          <div className=""text-white font-semibold>{course.duration}h</div>
                          <div className=text-gray-400 text-xs >Duration</div>
                        </div>
                        <div>
                          </div><div className=text-white font-semibold>{course.enrolledCount}</div>
                          <div className=text-gray-400 text-xs>Enrolled</div>
                        </div>
                        <div>
                          </div><div className=""text-white font-semibold>{course.rating}</div>
                          <div className=text-gray-400 text-xs >Rating</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4>
                        {course.tags.slice(0, 3).map((tag, index) => ("
                          <span key={index} className=px-4 py-3 bg-white/10 rounded-full text-xs text-gray-300>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}"
                      <div className=""flex" space-x-2>
                        <button className=flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300 >
                          {course.isFree ? 'Enroll Free' : 'Enroll Now'}
                        </button>
                        <button className=flex-1 border border-white/20 text-white hover:bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300>
                          Preview
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skill Assessments Tab */},
{activeTab === 'assessments' && ("
              <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6>
                {assessments.map((assessment) => (
                  </div><div key={assessment.id} className=""bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    <h3 className=text-lg font-semibold text-white mb-3 >{assessment.skillName}</h3>
                    <p className=text-gray-300 text-sm mb-4>{assessment.category}</p>
                    <div className="space-y-3 mb-4>
                      </div><div className=""flex" justify-between text-sm>
                        <span className=text-gray-400>Difficulty:</span>
                        <span className={`px-4 py-3 rounded-full text-xs font-medium ${getLevelColor(assessment.difficulty)}`}>
                          {assessment.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm>"
                        <span className=""text-gray-400>Time Limit:</span>
                        <span className=text-white>{assessment.timeLimit} min</span>
                      </div>
                      <div className="flex justify-between text-sm>
                        <span className="text-gray-400>Passing Score:</span>
                        <span className="text-white>{assessment.passingScore}%</span>
                      </div>
                    </div>

                    <div className=mb-4>
                      </div><div className=text-sm font-medium text-gray-400 mb-2>AI Analysis </div>
                      <div className="space-y-2>
                        </div><div className="flex justify-between text-xs>
                          <span className=text-gray-400">Skill Level:</span>
                          <span className=text-white>{assessment.aiAnalysis.skillLevel}</span>
                        </div>
                        <div className="flex justify-between text-xs>"
                          <span className=""text-gray-400>Confidence:</span>
                          <span className=text-white>{Math.round(assessment.aiAnalysis.confidence * 100)}%</span>
                        </div>
                      </div>
                    </div>

                    <button className=w-full bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300>
                      Start Assessment
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Learning Paths Tab */},
{activeTab === 'paths' && ("
              <div className="grid grid-cols-1 md grid-cols-2 gap-6>
                {learningPaths.map((path) => (
                  </div><div key={path.id} className=""bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    <div className="flex items-start justify-between mb-4 >
                      <h3 className=text-xl font-semibold text-white>{path.title}</h3>
                      {path.aiRecommended && ("
                        <span className=px-4 py-3 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300>
                          AI Recommended
                        </span>
                      )}
                    </div>
                    <p className=""text-gray-300 text-sm:mb-4>{path.description}</p>

                    <div className=space-y-3 mb-4 >
                      </div><div className="flex justify-between text-sm>
                        <span className="text-gray-400>Duration:</span>
                        <span className="text-white>{path.duration} weeks</span>
                      </div>
                      <div className="flex justify-between text-sm >
                        <span className=text-gray-400>Difficulty </span>
                        <span className={`px-4 py-3 rounded-full text-xs font-medium ${getLevelColor(path.difficulty)}`}>
                          {path.difficulty}
                        </span>
                      </div>
                      <div className=""flex" justify-between text-sm>
                        <span className=text-gray-400>Completion Rate:</span>
                        <span className=text-white>{Math.round(path.completionRate * 100)}%</span>
                      </div>
                    </div>
                    <div className="mb-4>
                      </div><div className=text-sm font-medium text-gray-400 mb-2>Skills You'll Learn </div>
                      <div className=""flex" flex-wrap gap-1">
                        {path.skills.slice(0, 4).map((skill, index) => (
                          <span key={index} className=px-4 py-3 bg-blue-500/20 rounded-full text-xs text-blue-300>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4>
                      </div><div className=text-sm font-medium text-gray-400 mb-2>Career Outcome </div>
                      <div className=""text-white" font-semibold>{path.careerOutcome}</div>
                    </div>

                    <button className=w-full bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300>
                      Start Learning Path
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Tab */},
{activeTab === 'certifications' && ("
              <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6>
                {certifications.map((cert) => (
                  </div><div key={cert.id} className=""bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    <div className="flex items-start justify-between mb-4 >
                      <h3 className=text-lg font-semibold text-white>{cert.name}</h3>
                      {cert.aiVerified && ("
                        <span className=px-4 py-3 rounded-full text-xs font-medium bg-green-500/20 text-green-300>
                          AI Verified
                        </span>
                      )}
                    </div>
                    <p className=""text-gray-300 text-sm:mb-4>{cert.issuer}</p>

                    <div className=space-y-3 mb-4 >
                      </div><div className="flex justify-between text-sm>
                        <span className="text-gray-400>Level:</span>
                        <span className="text-white>{cert.level}</span>
                      </div>
                      <div className="flex justify-between text-sm >
                        <span className=text-gray-400>Validity </span>
                        <span className="text-white>{cert.validity} months</span>
                      </div>
                      <div className="flex justify-between text-sm>
                        <span className=text-gray-400">Market Value:</span>
                        <span className=text-white>${cert.marketValue.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="mb-4>
                      </div><div className=text-sm font-medium text-gray-400 mb-2>Requirements </div>
                      <ul className=space-y-1"">
                        {cert.requirements.slice(0, 2).map((req, index) => (
                          <li key={index} className=text-xs text-gray-300>• {req}</li>
                        ))}
                      </ul>
                    </div>
                    <button className=w-full bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300>
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}"
      <div className=""bg-gradient-to-r from-purple-600/20 to-pink-600/20 mt-16>
        </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-36 >
          <div className="text-center>
            <h2 className=text-3xl font-bold text-white mb-4>
              Ready to Accelerate Your Career?
            </h2>
            <p className=""text-xl text-gray-300 mb-8 max-w-2xl:mx-auto>
              Join thousands of learners who are advancing their careers with AI-powered 
              personalized learning experiences and industry-recognized certifications.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center >
              <Link href="/auth/signup" className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >Start Learning
              </Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 ></Link>
              <Link href=/ai-service-matcher className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  >Take Skill Assessment
              </Link href=/ai-service-matcher className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm"" ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>

};

export default AIPoweredLearningPlatformPage ))))))))))))))))))))))))))