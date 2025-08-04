import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Candidate {
  id: string;
  name: string;
  position: string;
  experience: string;
  skills: string[];
  status: 'applied' | 'screening' | 'interviewing' | 'offered' | 'hired' | 'rejected';
  score: number;
  aiInsights: {
    culturalFit: number;
    skillMatch: number;
    growthPotential: number;
    riskAssessment: number;
  };
  lastUpdated: string;
}

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  startDate: string;
  performance: {
    overall: number;
    productivity: number;
    collaboration: number;
    innovation: number;
  };
  engagement: number;
  retentionRisk: number;
  developmentNeeds: string[];
}

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  status: 'active' | 'paused' | 'closed';
  applications: number;
  aiOptimization: {
    keywordOptimization: number;
    diversityScore: number;
    marketCompetitiveness: number;
  };
}

interface PerformanceReview {
  id: string;
  employeeId: string;
  employeeName: string;
  period: string;
  overallRating: number;
  goals: string[];
  achievements: string[];
  areasForImprovement: string[];
  aiRecommendations: string[];
}

const AIHRManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [performanceReviews, setPerformanceReviews] = useState<PerformanceReview[]>([]);

  // Mock data
  const mockCandidates: Candidate[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Senior Software Engineer',
      experience: '8 years',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      status: 'interviewing',
      score: 92,
      aiInsights: {
        culturalFit: 88,
        skillMatch: 95,
        growthPotential: 90,
        riskAssessment: 12
      },
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'Product Manager',
      experience: '6 years',
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research'],
      status: 'screening',
      score: 87,
      aiInsights: {
        culturalFit: 85,
        skillMatch: 88,
        growthPotential: 92,
        riskAssessment: 18
      },
      lastUpdated: '2024-01-14'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      experience: '4 years',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      status: 'applied',
      score: 89,
      aiInsights: {
        culturalFit: 92,
        skillMatch: 86,
        growthPotential: 88,
        riskAssessment: 15
      },
      lastUpdated: '2024-01-13'
    }
  ];

  const mockEmployees: Employee[] = [
    {
      id: '1',
      name: 'David Kim',
      position: 'Lead Developer',
      department: 'Engineering',
      startDate: '2022-03-15',
      performance: {
        overall: 92,
        productivity: 94,
        collaboration: 89,
        innovation: 91
      },
      engagement: 88,
      retentionRisk: 15,
      developmentNeeds: ['Leadership Skills', 'System Architecture']
    },
    {
      id: '2',
      name: 'Lisa Wang',
      position: 'Marketing Manager',
      department: 'Marketing',
      startDate: '2021-08-20',
      performance: {
        overall: 89,
        productivity: 87,
        collaboration: 93,
        innovation: 88
      },
      engagement: 92,
      retentionRisk: 8,
      developmentNeeds: ['Data Analytics', 'Strategic Planning']
    },
    {
      id: '3',
      name: 'James Wilson',
      position: 'Sales Director',
      department: 'Sales',
      startDate: '2020-11-10',
      performance: {
        overall: 85,
        productivity: 82,
        collaboration: 88,
        innovation: 79
      },
      engagement: 75,
      retentionRisk: 35,
      developmentNeeds: ['Performance Coaching', 'Team Leadership']
    }
  ];

  const mockJobPostings: JobPosting[] = [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'full-time',
      status: 'active',
      applications: 45,
      aiOptimization: {
        keywordOptimization: 92,
        diversityScore: 78,
        marketCompetitiveness: 85
      }
    },
    {
      id: '2',
      title: 'Product Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'full-time',
      status: 'active',
      applications: 32,
      aiOptimization: {
        keywordOptimization: 88,
        diversityScore: 82,
        marketCompetitiveness: 79
      }
    },
    {
      id: '3',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'New York, NY',
      type: 'full-time',
      status: 'paused',
      applications: 28,
      aiOptimization: {
        keywordOptimization: 85,
        diversityScore: 75,
        marketCompetitiveness: 92
      }
    }
  ];

  const mockPerformanceReviews: PerformanceReview[] = [
    {
      id: '1',
      employeeId: '1',
      employeeName: 'David Kim',
      period: 'Q4 2023',
      overallRating: 92,
      goals: ['Lead technical architecture decisions', 'Mentor junior developers'],
      achievements: ['Successfully launched new product feature', 'Improved team productivity by 25%'],
      areasForImprovement: ['Communication with non-technical stakeholders'],
      aiRecommendations: ['Consider leadership training program', 'Schedule regular stakeholder updates']
    },
    {
      id: '2',
      employeeId: '2',
      employeeName: 'Lisa Wang',
      period: 'Q4 2023',
      overallRating: 89,
      goals: ['Increase brand awareness', 'Improve campaign ROI'],
      achievements: ['Launched successful social media campaign', 'Increased conversion rates by 30%'],
      areasForImprovement: ['Data-driven decision making'],
      aiRecommendations: ['Enroll in advanced analytics course', 'Implement A/B testing framework']
    }
  ];

  useEffect(() => {
    setCandidates(mockCandidates);
    setEmployees(mockEmployees);
    setJobPostings(mockJobPostings);
    setPerformanceReviews(mockPerformanceReviews);
  }, []);

  const generateHRInsights = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  const exportHRData = () => {
    const data = {
      candidates,
      employees,
      jobPostings,
      performanceReviews
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hr-data.json';
    a.click();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hired': return 'bg-green-500';
      case 'offered': return 'bg-blue-500';
      case 'interviewing': return 'bg-yellow-500';
      case 'screening': return 'bg-orange-500';
      case 'applied': return 'bg-gray-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskColor = (risk: number) => {
    if (risk < 20) return 'text-green-500';
    if (risk < 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>AI-Powered HR Management & Talent Acquisition | Zion</title>
        <meta name="description" content="Intelligent human resources management, talent acquisition, employee performance tracking, and HR analytics powered by AI." />
        <meta name="keywords" content="AI HR management, talent acquisition, employee performance, HR analytics, recruitment, Zion" />
      </Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-xl">
                Zion
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered HR Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Intelligent human resources management, talent acquisition, employee performance tracking, 
            and comprehensive HR analytics powered by advanced AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={generateHRInsights}
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Generating Insights...' : 'Generate AI Insights'}
            </button>
            <button
              onClick={exportHRData}
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Export HR Data
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {['overview', 'recruitment', 'employees', 'performance', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">156</div>
                  <div className="text-gray-300">Total Employees</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">23</div>
                  <div className="text-gray-300">Active Candidates</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">8</div>
                  <div className="text-gray-300">Open Positions</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">92%</div>
                  <div className="text-gray-300">Employee Satisfaction</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Recent AI Insights</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">High retention risk detected</span>
                      <span className="text-red-400 text-sm">3 employees</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Skill gap identified</span>
                      <span className="text-yellow-400 text-sm">Engineering team</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Diversity improvement</span>
                      <span className="text-green-400 text-sm">+15% this quarter</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300">
                      <div className="text-white font-medium">Schedule Performance Reviews</div>
                      <div className="text-gray-400 text-sm">12 pending reviews</div>
                    </button>
                    <button className="w-full text-left p-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg hover:from-green-600/30 hover:to-blue-600/30 transition-all duration-300">
                      <div className="text-white font-medium">Review Candidate Pipeline</div>
                      <div className="text-gray-400 text-sm">8 candidates ready for interview</div>
                    </button>
                    <button className="w-full text-left p-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg hover:from-yellow-600/30 hover:to-orange-600/30 transition-all duration-300">
                      <div className="text-white font-medium">Update Job Postings</div>
                      <div className="text-gray-400 text-sm">3 positions need optimization</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recruitment' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-white">Talent Acquisition</h3>
                <div className="flex gap-4">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2"
                  >
                    <option value="all">All Departments</option>
                    <option value="engineering">Engineering</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="analytics">Analytics</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Top Candidates</h4>
                  <div className="space-y-4">
                    {candidates.map((candidate) => (
                      <div key={candidate.id} className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h5 className="text-white font-semibold">{candidate.name}</h5>
                            <p className="text-gray-400">{candidate.position}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(candidate.status)}`}>
                              {candidate.status}
                            </span>
                            <span className="text-white font-semibold">{candidate.score}%</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Cultural Fit:</span>
                            <span className="text-white ml-2">{candidate.aiInsights.culturalFit}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Skill Match:</span>
                            <span className="text-white ml-2">{candidate.aiInsights.skillMatch}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Growth Potential:</span>
                            <span className="text-white ml-2">{candidate.aiInsights.growthPotential}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Risk Assessment:</span>
                            <span className={`ml-2 ${getRiskColor(candidate.aiInsights.riskAssessment)}`}>
                              {candidate.aiInsights.riskAssessment}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Job Postings</h4>
                  <div className="space-y-4">
                    {jobPostings.map((job) => (
                      <div key={job.id} className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h5 className="text-white font-semibold">{job.title}</h5>
                            <p className="text-gray-400">{job.department} • {job.location}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs text-white ${
                            job.status === 'active' ? 'bg-green-500' : job.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}>
                            {job.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">{job.applications} applications</span>
                          <div className="flex gap-4">
                            <span className="text-gray-400">Optimization: {job.aiOptimization.keywordOptimization}%</span>
                            <span className="text-gray-400">Diversity: {job.aiOptimization.diversityScore}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'employees' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white">Employee Management</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Employee Performance</h4>
                  <div className="space-y-4">
                    {employees.map((employee) => (
                      <div key={employee.id} className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h5 className="text-white font-semibold">{employee.name}</h5>
                            <p className="text-gray-400">{employee.position} • {employee.department}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold">{employee.performance.overall}%</div>
                            <div className={`text-sm ${getRiskColor(employee.retentionRisk)}`}>
                              {employee.retentionRisk}% retention risk
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <span className="text-gray-400">Productivity:</span>
                            <span className="text-white ml-2">{employee.performance.productivity}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Collaboration:</span>
                            <span className="text-white ml-2">{employee.performance.collaboration}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Innovation:</span>
                            <span className="text-white ml-2">{employee.performance.innovation}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Engagement:</span>
                            <span className="text-white ml-2">{employee.engagement}%</span>
                          </div>
                        </div>
                        {employee.developmentNeeds.length > 0 && (
                          <div className="text-sm">
                            <span className="text-gray-400">Development Needs:</span>
                            <div className="text-white mt-1">
                              {employee.developmentNeeds.join(', ')}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">AI Recommendations</h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-white/10">
                      <h5 className="text-white font-semibold mb-2">High Retention Risk</h5>
                      <p className="text-gray-300 text-sm mb-3">3 employees showing signs of disengagement</p>
                      <button className="text-blue-400 hover:text-blue-300 text-sm">View Details →</button>
                    </div>
                    <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg border border-white/10">
                      <h5 className="text-white font-semibold mb-2">Skill Development</h5>
                      <p className="text-gray-300 text-sm mb-3">12 employees need upskilling programs</p>
                      <button className="text-green-400 hover:text-green-300 text-sm">View Details →</button>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-lg border border-white/10">
                      <h5 className="text-white font-semibold mb-2">Career Progression</h5>
                      <p className="text-gray-300 text-sm mb-3">8 employees ready for promotion</p>
                      <button className="text-yellow-400 hover:text-yellow-300 text-sm">View Details →</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white">Performance Management</h3>
              <div className="space-y-6">
                {performanceReviews.map((review) => (
                  <div key={review.id} className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-white font-semibold text-lg">{review.employeeName}</h4>
                        <p className="text-gray-400">{review.period}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{review.overallRating}%</div>
                        <div className="text-gray-400 text-sm">Overall Rating</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-white font-semibold mb-3">Goals & Achievements</h5>
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-400 text-sm">Goals:</span>
                            <ul className="text-white text-sm mt-1 space-y-1">
                              {review.goals.map((goal, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-blue-400 mr-2">•</span>
                                  {goal}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Achievements:</span>
                            <ul className="text-white text-sm mt-1 space-y-1">
                              {review.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-green-400 mr-2">✓</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-semibold mb-3">AI Insights</h5>
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-400 text-sm">Areas for Improvement:</span>
                            <ul className="text-white text-sm mt-1 space-y-1">
                              {review.areasForImprovement.map((area, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-yellow-400 mr-2">⚠</span>
                                  {area}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">AI Recommendations:</span>
                            <ul className="text-white text-sm mt-1 space-y-1">
                              {review.aiRecommendations.map((rec, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-purple-400 mr-2">💡</span>
                                  {rec}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white">HR Analytics Dashboard</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4">Recruitment Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Time to Hire</span>
                      <span className="text-white font-semibold">24 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Cost per Hire</span>
                      <span className="text-white font-semibold">$8,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Quality of Hire</span>
                      <span className="text-white font-semibold">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Diversity Score</span>
                      <span className="text-white font-semibold">78%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4">Employee Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Employee Satisfaction</span>
                      <span className="text-white font-semibold">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Retention Rate</span>
                      <span className="text-white font-semibold">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Average Performance</span>
                      <span className="text-white font-semibold">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Engagement Score</span>
                      <span className="text-white font-semibold">89%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4">AI Predictions</h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
                      <div className="text-white font-medium">High-Performing Employees</div>
                      <div className="text-gray-300 text-sm">15 employees identified for promotion</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg">
                      <div className="text-white font-medium">Retention Risk</div>
                      <div className="text-gray-300 text-sm">3 employees at risk of leaving</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg">
                      <div className="text-white font-medium">Skill Gaps</div>
                      <div className="text-gray-300 text-sm">8 departments need upskilling</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4">Trends & Insights</h4>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <div className="text-gray-300 mb-2">Employee Growth Trend</div>
                      <div className="text-green-400">+12% this quarter</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-300 mb-2">Diversity Improvement</div>
                      <div className="text-green-400">+8% in leadership roles</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-300 mb-2">Performance Distribution</div>
                      <div className="text-white">Top 20%: 35 employees</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-300 mb-2">Training Completion</div>
                      <div className="text-green-400">87% of required courses completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion</h3>
              <p className="text-gray-400 text-sm">
                Leading AI-powered solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">AI Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ai-powered-analytics" className="text-gray-400 hover:text-white">Analytics</Link></li>
                <li><Link href="/ai-powered-automation" className="text-gray-400 hover:text-white">Automation</Link></li>
                <li><Link href="/ai-powered-content-management" className="text-gray-400 hover:text-white">Content Management</Link></li>
                <li><Link href="/ai-powered-customer-support" className="text-gray-400 hover:text-white">Customer Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Business Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ai-powered-finance-banking" className="text-gray-400 hover:text-white">Finance & Banking</Link></li>
                <li><Link href="/ai-powered-healthcare-medical-diagnostics" className="text-gray-400 hover:text-white">Healthcare</Link></li>
                <li><Link href="/ai-powered-retail-ecommerce" className="text-gray-400 hover:text-white">Retail & E-commerce</Link></li>
                <li><Link href="/ai-powered-security-cybersecurity" className="text-gray-400 hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sitemap" className="text-gray-400 hover:text-white">All Services</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIHRManagement; 