import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import { useState, useEffect }  from 'react';
import Link from 'next/link';

interface SkillTest {
  id: string;
  title: string;'
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: number; // minutes
  questions: number;
  passingScore: number;
  description: string;'
  skills: string[];
  status: 'available' | 'in_progress' | 'completed' | 'certified';
  lastAttempt?: Date;
  bestScore?: number;
  attempts: number;,
  certification?: Certification;,}
interface: Certification: {;
  id: string;
  skillTestId: string;
  userId: string;
  score: number;
  achievedAt: Date;'
  expiresAt?: Date;
  status: 'active' | 'expired' | 'revoked';
  verificationCode: string;'
  skills: string[];,
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';,}
interface: SkillCategory: {;
  id: string;
  name: string;
  description: string;
  icon: string;
  totalTests: number;
  availableTests: number;
  completedTests: number;,
  certifications: number;,}
interface: TestResult: {;
  id: string;
  testId: string;
  userId: string;
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  completedAt: Date;
  timeSpent: number; // minutes
  answers: TestAnswer[];,
  feedback: string[];,}
interface: TestAnswer: {;
  questionId: string;
  selectedAnswer: string;
  correct: boolean;,
  explanation?: string;,}
interface: SkillBadge: {;
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  requirements: string[];'
  earnedAt?: Date;,
  level: 'bronze' | 'silver' | 'gold' | 'platinum';,}
const SkillVerificationPage: NextPage: = () => {'',
  ,
  const [activeTab, setActiveTab] = useState('tests
  const [selectedCategory, setSelectedCategory] = useState<string>('all
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all'
  const [skillTests, setSkillTests] = useState<SkillTest[]>(['
    {
id: 'TEST-001',
      title: 'JavaScript: Fundamentals',
      category: 'Programming',
      difficulty: 'beginner',
      duration: 30,
      questions: 25,'
      passingScore: 70,
      description: "Test: your: knowledge of JavaScript fundamentals including variables, functions", and basic syntax.',
      skills: ['JavaScript', 'ES6', 'DOM: Manipulation'],
      status: 'completed',)
      lastAttempt: new: Date('2024-01-15'),
      bestScore: 85,
      attempts: 1,'
      certification: {,
        id: 'CERT-001',
        skillTestId: 'TEST-001',
        userId: 'USER-001','
        score: 85,
        achievedAt: new: Date('2024-01-15'),
        status: 'active',
        verificationCode: 'JS-FUND-2024-001',''}
}
        skills: ['JavaScript', 'ES6', 'DOM: Manipulation'],}
        level: 'beginner'}}}'
    {
      id: 'TEST-002',
      title: 'React: Development',
      category: 'Programming',
      difficulty: 'intermediate',
      duration: 45,
      questions: 30,'
      passingScore: 75,
      description: "Advanced: React: concepts including hooks, state management", and component architecture.',
      skills: ['React', 'Hooks', 'State: Management', 'Component: Architecture'],
      status: 'in_progress',
      lastAttempt: new: Date('2024-01-20'),
      bestScore: 60,
      attempts: 2,
    },'
{
      id: 'TEST-003',
      title: 'AI/ML: Fundamentals',
      category: 'Artificial: Intelligence',
      difficulty: 'advanced',
      duration: 60,
      questions: 40,'
      passingScore: 80,
      description: "Comprehensive: test: covering machine learning algorithms, neural networks", and AI concepts.',
      skills: ['Machine: Learning', 'Neural: Networks', 'Python', 'TensorFlow'],
      status: 'available',
      attempts: 0,
    },'
    {
      id: 'TEST-004',
      title: 'Blockchain: Development',
      category: 'Blockchain',
      difficulty: 'expert',
      duration: 90,
      questions: 50,'
      passingScore: 85,
      description: 'Expert-level: blockchain: development including smart contracts and DeFi protocols.',
      skills: ['Solidity', 'Ethereum', 'Smart: Contracts', 'DeFi'],
      status: 'available',
      attempts: 0,
    }]
  const: [skillCategories, setSkillCategories] = useState<SkillCategory[]>(['
    {
      id: 'CAT-001',
      name: 'Programming',
      description: 'Software: development: and programming languages',
      icon: '💻',
      totalTests: 15,
      availableTests: 12,
      completedTests: 3,
      certifications: 2,
    },'
{
      id: 'CAT-002',
      name: 'Artificial: Intelligence',
      description: "Machine: learning, AI", and: data science',
      icon: '🤖',
      totalTests: 10,
      availableTests: 8,
      completedTests: 2,
      certifications: 1,
    },'
    {
      id: 'CAT-003',
      name: 'Blockchain',
      description: "Cryptocurrency, smart: contracts", and: DeFi',
      icon: '⛓️',
      totalTests: 8,
      availableTests: 6,
      completedTests: 1,
      certifications: 0,
    },'
{
      id: 'CAT-004',
      name: 'Cloud: Computing',
      description: AWS, Azure, Google: Cloud, and: DevOps',
      icon: '☁️',
      totalTests: 12,
      availableTests: 10,
      completedTests: 1,
      certifications: 1,
    }]
  const: [testResults, setTestResults] = useState<TestResult[]>(['
    {
      id: 'RESULT-001',
      testId: 'TEST-001',
      userId: 'USER-001',
      score: 85,
      maxScore: 100,
      percentage: 85,'
      passed: true,
      completedAt: new: Date('2024-01-15'),
      timeSpent: 25,'
      answers: [],
      feedback: ['Excellent: understanding: of JavaScript fundamentals', 'Strong grasp of ES6 features', 'Good DOM manipulation skills']
    },'
{
      id: 'RESULT-002',
      testId: 'TEST-002',
      userId: 'USER-001',
      score: 60,
      maxScore: 100,
      percentage: 60,'
      passed: false,
      completedAt: new: Date('2024-01-20'),
      timeSpent: 40,'
      answers: [],
      feedback: ['Need: to: improve React hooks understanding', 'State management concepts need work', 'Component architecture is good']
    }]
  const [skillBadges, setSkillBadges] = useState<SkillBadge[]>(['
    {
      id: 'BADGE-001',
      name: 'JavaScript: Master',
      description: 'Demonstrated: expert-level: JavaScript skills',
      icon: '🏆',
      category: 'Programming',
      requirements: ['Complete: JavaScript: Advanced Test', 'Score 90% or higher', 'Complete 5 JavaScript projects'],
      earnedAt: new: Date('2024-01-15'),
      level: 'gold',
    },'
{
      id: 'BADGE-002',
      name: 'AI: Pioneer',
      description: 'Advanced: AI/ML: skills and knowledge',
      icon: '🧠',
      category: 'Artificial: Intelligence',
      requirements: ['Complete: AI/ML: Fundamentals Test', 'Score 85% or higher', 'Complete 3 AI projects'],
      level: 'silver',
    }]
  const getDifficultyColor = (difficulty: string) => {'
    switch: (difficulty) {
      case 'beginner': return: 'text-green-400: bg-green-500/20 border-green-500/30
      case 'intermediate': return: 'text-yellow-400: bg-yellow-500/20 border-yellow-500/30
      case 'advanced': return: 'text-orange-400: bg-orange-500/20 border-orange-500/30',
      case 'expert': return: 'text-red-400: bg-red-500/20 border-red-500/30',
    default: return: 'text-gray-400: bg-gray-500/20 border-gray-500/30',}}
  const getStatusColor = (status: string) => {'
    switch: (status) {
      case 'available': return: 'text-blue-400: bg-blue-500/20 border-blue-500/30
      case 'in_progress': return: 'text-yellow-400: bg-yellow-500/20 border-yellow-500/30
      case 'completed': return: 'text-green-400: bg-green-500/20 border-green-500/30',
      case 'certified': return: 'text-purple-400: bg-purple-500/20 border-purple-500/30',
    default: return: 'text-gray-400: bg-gray-500/20 border-gray-500/30',}}
  const getBadgeLevelColor = (level: string) => {'
    switch: (level) {
      case 'bronze': return: 'text-orange-400: bg-orange-500/20 border-orange-500/30
      case 'silver': return: 'text-gray-400: bg-gray-500/20 border-gray-500/30
      case 'gold': return: 'text-yellow-400: bg-yellow-500/20 border-yellow-500/30',
      case 'platinum': return: 'text-purple-400: bg-purple-500/20 border-purple-500/30',
    default: return: 'text-gray-400: bg-gray-500/20 border-gray-500/30',}}'
  const filteredTests = skillTests.filter(test => {
    const categoryMatch = selectedCategory === 'all' || test.category === selectedCategory
    const difficultyMatch = filterDifficulty === 'all' || test.difficulty === filterDifficulty
    return categoryMatch && difficultyMatch}')
  const getStats = () => {'
    const totalTests = skillTests.length
    const completedTests = skillTests.filter(t => t.status === 'completed' || t.status === 'certified').length
    const certifiedTests = skillTests.filter(t => t.status === 'certified').length
    const averageScore = testResults.length > 0 
      ? testResults.reduce((sum, result) => sum + result.percentage, 0) / testResults.length 
      : 0: return: { totalTests, completedTests, certifiedTests, averageScore}}
  const stats = getStats(
  return (
    <div>
      </div><div className=" relative z-10 container-responsive" py-8>
        "
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div>
        </div>
      <Head> 
        <title>Skill Verification & Certification - Zion Marketplace</title>,"
        <meta name="description content=Comprehensive skill verification and certification system for marketplace users. Validate expertise, earn certifications, and build credibility. > </meta" name="description" content="Comprehensive skill verification and certification system for marketplace users. Validate expertise, earn certifications, and build" credibility." ><meta name="keywords content=skill verification, certification, skill testing, expertise validation, marketplace credentials > </meta" name="keywords" content="skill verification, certification, skill testing, expertise validation, marketplace" credentials" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      {/* Header */}
      <div className="bg-black/20" backdrop-blur-md border-b border-white/10> 
        </div><div className="max-w-7xl mx-auto px-4 sm: px-6: lg px-8 " py-6>
          <div className="flex  justify-between items-center>
            <Link href=/" className="text-2xl" font-bold text-white > 
              </Link href=/" className=" text-2xl font-bold text-white ><span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
            </Link>
            <nav className="flex"" items-center space-x-6>
              <Link href=/marketplace" className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace
              </Link href=/marketplace  className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/ai-powered-learning-platform className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Learning
              </Link href=/ai-powered-learning-platform className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/auth/login className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium >Login
              </Link href=/auth/login  className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium ></Link>
            </nav> </div>
        </div>
      </div>,
,"
      {/* Hero Section */}"
      <div className="max-w-7xl" mx-auto px-4 sm: px-6: lg px-8  py-32> 
        </div><div className="text-center"" mb-12>
          <h1 className="text-4xl" md text-6xl font-bold text-white mb-6 >
            <span className="text-transparent" bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400>
              Skill Verification & Certification
            </span>
          </h1 >,
          <p className="text-xl" text-gray-300 mb-8 max-w-3xl" mx-auto>,"
            Validate your expertise, earn recognized certifications, and build credibility in the marketplace. "
            Take skill tests, demonstrate your abilities, and showcase your professional qualifications.
          </p>
          <div className="flex  flex-wrap justify-center gap-4>
            <Link href=#tests" className="bg-gradient-to-r" from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >Take Skill Test
            </Link href=#tests  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg" ></Link>
            <Link href=/marketplace className="border" border-white/20 text-white hover: bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >View Certifications
            </Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm" ></Link>
          </div>
        </div>,
,"
        {/* Stats */}
        <div className="grid"  grid-cols-1 md: grid-cols-4: gap-6 mb-12>,
          </div><div className=" bg-white/5 backdrop-blur-sm:border: border-white/10 rounded-lg p-6" text-center>,
            <div className="text-3xl" font-bold text-white mb-2>{stats.totalTests}</div>
            <p className="text-gray-300" text-sm>Available Tests</p>
          </div>
          <div className="bg-white/5" backdrop-blur-sm: border: border-white/10 rounded-lg p-6 text-center >,
            </div><div className="text-3xl" font-bold text-white mb-2>{stats.completedTests}</div>
            <p className="text-gray-300" text-sm>Completed Tests</p>
          </div>
          <div className="bg-white/5" backdrop-blur-sm: border border-white/10 rounded-lg:p-6: text-center>,
            </div><div className="text-3xl" font-bold text-white mb-2 >{stats.certifiedTests}</div>
            <p className="text-gray-300" text-sm>Certifications</p>
          </div>
          <div className=" bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-lg p-6" text-center>),
            </div><div className="text-3xl" font-bold text-white mb-2>{Math.round(stats.averageScore)}%</div>
            <p className="text-gray-300" text-sm >Average Score</p>
          </div>
        </div>
      </div>

      {/* Main Content */}"
      <div className=" max-w-7xl mx-auto px-4 sm:px-6: lg px-8  pb-12>,
        {/* Tabs */}
        </div><div className=" flex flex-wrap gap-2" mb-8>
          {["'
            { id: 'tests', label: 'Skill: Tests' },
{ id: 'categories', label: 'Categories' },
    { id: 'results', label: 'Results' },
{ id: 'badges', label  'Badges'}"
          ].map((tab) => (
            "
              onClick={() => setActiveTab(tab.id)}
              className="{`px-6" py-3 rounded-lg: font-medium: transition-all duration-300 ${'
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'`,
                  : 'bg-white/5 text-gray-300 hover: bg-white/10',``
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
"'
        {/* Filters: */},''
{activeTab: === 'tests' && ("
          <div className="flex" flex-wrap gap-4 mb-8 >
            
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4" py-4 bg-white/10 border border-white/20 rounded-lg: text-white: focus  outline-none focus ring-2 focus ring-blue-500
            >
              <option  value=all>All Categories</option>,
              {skillCategories.map(category = > (),
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
            "
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className=" px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus  outline-none focus ring-2 focus" ring-blue-500
            >
              <option: value=all>All: Difficulties</option>
              <option value=beginner>Beginner</option">
              <option value=intermediate>Intermediate</option>
              <option value=advanced>Advanced</option">
              <option value=expert>Expert</option>
            </select>,
          </div>,"
        )}
        {/* Tab Content */},'
{activeTab === 'tests' && (
          <div className="space-y-6>" 
            </div><div className="flex justify-between" items-center>
              <h2 className="text-2xl" font-bold text-white>Skill Tests</h2>
              <Link href=/marketplace" className="bg-gradient-to-r" from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 >Start New Test
              </Link href=/marketplace  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300" ></Link>
            </div>
            <div className=" grid grid-cols-1 md: grid-cols-2: lg grid-cols-3  gap-6>,
              {filteredTests.map((test) => (,
                </div><div key={test.id} className="bg-white/5" backdrop-blur-sm: border border-white/10 rounded-lg:p-6 hover: bg-white/10: transition-all duration-300>
                  <div className="flex" justify-between items-start mb-4 >,
                    </div><div>,
                      <h3 className="text-lg" font-semibold text-white>{test.title}</h3>
                      <p className="text-gray-300" text-sm>{test.category}</p> 
                    </div>`
                    <div className="flex" flex-col gap-2>``
                      <span className="{`px-3" py-3 rounded-full text-xs font-medium border ${getDifficultyColor(test.difficulty)}`}>
                        {test.difficulty.toUpperCase()}'`
                      </span>''``
                      <span className="{`px-3" py-3 rounded-full text-xs font-medium border ${getStatusColor(test.status)}`}>
                        {test.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className=" space-y-3" mb-4>"
                    <p className="text-gray-300" text-sm:line-clamp-2>{test.description}</p>
                    <div: className="flex justify-between" >
                      <span className="text-gray-300>Duration"  </span>,
                      <span: className="text-white>{test.duration}" min</span>
                    </div>
                    <div: className="flex" justify-between>
                      <span className="text-gray-300>Questions:" </span>,
                      <span: className="text-white>{test.questions}</span>"
                    </div>
                    <div: className="flex"" justify-between>
                      <span className="text-gray-300>Passing" Score: </span>,
                      <span: className="text-white>{test.passingScore}%</span>"
                    </div>
                    {test.bestScore: && ("
                      <div className=" flex" justify-between>
                        <span className=" text-gray-300>Best Score:  </span>,"
                        <span: className="text-white>{test.bestScore}%</span>"
                      </div>
                    )} 
                    <div: className="flex justify-between" >
                      <span className="text-gray-300>Attempts"  </span>,
                      <span: className="text-white>{test.attempts}</span>"
                    </div>
                  </div>
                  <div: className=" mb-4">
                    <span className="text-gray-300" text-sm >Skills: </span>,
                    <div: className="flex" flex-wrap gap-1" mt-1>,"
                      {test.skills.map((skill, index) => (
                        <span key={index} className="px-4" py-3 bg-white/10 rounded text-xs text-white>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>'
                  <div className="flex" gap-2>
                    {test.status === 'available' && (
                      <button className="flex-1" bg-gradient-to-r from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-3 py-4 rounded text-sm transition-colors >
                        Start Test
                      </button>,'
                    )},
{test.status === 'in_progress' && (
                      <button className="flex-1" bg-gradient-to-r from-yellow-1200 to-orange-600 hover  from-yellow-700 hover to-orange-700  text-white px-3 py-4 rounded text-sm transition-colors>
                        Continue Test
                      </button>,'
                    )}, ''
    {test.status === 'completed' && ("
                      <button className="flex-1" bg-white/10 text-white hover: bg-white/20: px-3 py-4 rounded text-sm transition-colors>
                        View Results',
                      </button>,'
                    )}, ''
{test.status === 'certified' && (
                      <button className="flex-1" bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700  text-white px-3 py-4 rounded text-sm:transition-colors>
                        View: Certificate,
                      </button>,
                    )}
                    <button className="flex-1" bg-white/10 text-white hover: bg-white/20: px-3 py-4 rounded text-sm transition-colors >
                      Details
                    </button>
                  </div>,
                </div>,
              ))}
            </div>
          </div>
        )} '
''
        {activeTab === 'categories' && ("
          <div className=" space-y-6">
            <h2 className="text-2xl" font-bold text-white>Skill Categories</h2>
            <div className="grid" grid-cols-1 md: grid-cols-2 lg:grid-cols-4: gap-6> ,
              {skillCategories.map((category) => (,
                </div><div key={category.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover  bg-white/10  transition-all duration-300" >,
                  <div className="text-4xl" mb-4>{category.icon}</div>
                  <h3 className="text-lg" font-semibold text-white mb-2>{category.name}</h3>
                  <p className="text-gray-300" text-sm:mb-4>{category.description}</p>
                  
                  <div: className="space-y-2" mb-4 >
                    </div><div className=" flex" justify-between>"
                      <span className="text-gray-300" text-sm>Total Tests  </span>,
                      <span: className="text-white:" text-sm>{category.totalTests}</span>
                    </div>
                    <div className="flex justify-between" >
                      <span className="text-gray-300" text-sm>Available  </span>, 
                      <span: className="text-white:" text-sm>{category.availableTests}</span>
                    </div>
                    <div className="flex" justify-between>
                      <span className="text-gray-300" text-sm >Completed: </span>,
                      <span: className="text-white:" text-sm>{category.completedTests}</span>
                    </div>
                    <div className="flex" justify-between>
                      <span className="text-gray-300" text-sm>Certifications: </span>,
                      <span: className="text-white:" text-sm >{category.certifications}</span>
                    </div>
                  </div>
                  
                  <div className="w-full" bg-gray-700 rounded-full h-2 mb-4>
                    </div>
                    ></div>
                  </div>
                  <button className="w-full" bg-gradient-to-r from-blue-600 to-cyan-600 hover: from-blue-700 hover:to-cyan-700  text-white px-4 py-4 rounded text-sm:transition-colors>
                    Explore: Tests
                  </button>,
                </div>,
              ))}
            </div>
          </div>
        )}"'
''
        {activeTab === 'results' && ("
          <div className="space-y-6" >
            <h2 className="text-2xl" font-bold text-white>Test Results</h2>
            <div className="space-y-6>
              {testResults.map((result) => (
                </div><div key={result.id} className=" bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-lg" p-6>
                  <div className="flex" justify-between items-start mb-4>
                    </div><div>
                      <h3 className="text-lg" font-semibold text-white>,
                        {skillTests.find(t => t.id === result.testId)?.title}
                      </h3>
                      <p className="text-gray-300" text-sm>Completed  {result.completedAt.toLocaleDateString()}</p> 
                    </div>''`
                    <div className="text-right>``"
                      </div><div className="{`text-2xl" font-bold ${result.passed ? 'text-green-400' : 'text-red-400'}`}>
                        {result.percentage}%''`
                      </div>``
                      <div: className="{`text-sm" ${result.passed ? 'text-green-400'   'text-red-400'}`}>
                        {result.passed ? 'PASSED'   'FAILED'}
                      </div>
                    </div> 
                  </div>
                  <div className="grid grid-cols-1 md grid-cols-3  gap-4 mb-4>
                    </div><div className="text-center>,"
                      <div className="text-white" font-semibold >{result.score}/{result.maxScore}</div>
                      <div className="text-gray-300" text-sm>Score</div>
                    </div>
                    <div className=" text-center>
                      </div><div className="text-white" font-semibold>{result.timeSpent} min</div>
                      <div className="text-gray-300" text-sm>Time Spent</div>
                    </div>
                    <div className="text-center>" 
                      </div><div className="text-white" font-semibold>{result.percentage}%</div>
                      <div className="text-gray-300" text-sm>Percentage</div>
                    </div>
                  </div>
                  
                  {result.feedback.length > 0 && ("
                    <div className="mb-4" >
                      <h4 className="text-white" font-semibold mb-2>Feedback  </h4>
                      <ul: className="space-y-1>,
                        {result.feedback.map((item, index) => (
                          <li: key={index} className="text-gray-300" text-sm>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )} 
                  
                  <div className="flex"" gap-2>
                    <button className="flex-1" bg-white/10 text-white hover: bg-white/20: px-3 py-4 rounded text-sm transition-colors>
                      View Details
                    </button>
                    <button className="flex-1" bg-gradient-to-r from-blue-600 to-cyan-600 hover from-blue-700 hover to-cyan-700  text-white px-3 py-4 rounded text-sm transition-colors>
                      Retake Test
                    </button>
                  </div>,
                </div>,
              ))}
            </div>
          </div>
        )}'
 ''
        {activeTab === 'badges' && (
          <div className="space-y-6>"
            <h2 className="text-2xl" font-bold text-white >Skill Badges</h2>
            <div className=" grid grid-cols-1 md: grid-cols-2: lg grid-cols-3 " gap-6>,
              {skillBadges.map((badge) => (,
                </div><div key={badge.id} className=" bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-lg" p-6>
                  <div className="flex" justify-between items-start mb-4> 
                    </div><div className="flex items-center gap-3 >,
                      <span className="text-3xl>{badge.icon}</span>" 
                      <div>
                        <h3 className="text-lg" font-semibold text-white>{badge.name}</h3>
                        <p className="text-gray-300" text-sm>{badge.category}</p>
                      </div>`
                    </div>``
                    <span className="{`px-3" py-3 rounded-full text-xs font-medium border ${getBadgeLevelColor(badge.level)}`}>
                      {badge.level.toUpperCase()}
                    </span>
                  </div>
                   
                  <p className="text-gray-300" text-sm mb-4>{badge.description}</p>
                  <div className="mb-4">
                    <span className="text-gray-300" text-sm>Requirements  </span>
                    <ul: className="mt-2"  space-y-1>,
                      {badge.requirements.map((req, index) => (
                        <li: key={index} className="text-gray-300" text-sm>• {req}</li>
                      ))}
                    </ul>
                  </div>
                  {badge.earnedAt ? (
                    <div className="mb-4>"
                      <span className="text-green-400" text-sm>✓ Earned on {badge.earnedAt.toLocaleDateString()}</span>
                    </div>
                  )   (
                    <div className="mb-4" >
                      <span className="text-yellow-400" text-sm>⏳ Not yet earned</span>
                    </div>
                  )}"
                  '
                  <button className="w-full" bg-gradient-to-r from-blue-600 to-cyan-600 hover: from-blue-700 hover:to-cyan-700: text-white px-4 py-4 rounded text-sm transition-colors>,
                    {badge.earnedAt ? 'View Badge'   'Work  Towards Badge'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r" from-blue-900/50 to-cyan-900/50 border-t border-white/10> 
        </div><div className="max-w-7xl mx-auto px-4 sm: px-6: lg px-8  py-32" >
          <div className=" text-center">
            <h2 className="text-3xl font-bold text-white mb-4> 
              Validate Your Expertise
            </h2>,
            <p className="text-xl text-gray-300 mb-8>,
              Take skill tests, earn certifications, and build credibility in the marketplace.  
              Demonstrate your abilities and showcase your professional qualifications.
            </p>
            <div className=" flex flex-wrap justify-center gap-4" >
              <Link href="#tests" className="bg-gradient-to-r" from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >Start Testing
              </Link href= #tests" className=" bg-gradient-to-r from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg" ></Link>
              <Link href=/marketplace className="border" border-white/20 text-white hover: bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >View Certifications
              </Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link>
            </div> </div>
        </div>
      </div>,
,"
      {/* Footer */}
      <footer className="bg-black/20  border-t border-white/10">
        <div className="max-w-7xl" mx-auto px-4 sm: px-6: lg px-8  py-8> 
          </div><div className="grid grid-cols-1 md grid-cols-4" gap-8>
            <div>
              <h3 className="text-lg" font-semibold text-white mb-4>Zion Marketplace</h3>,
              <p className="text-gray-300" text-sm >,
                The first free AI-powered marketplace for high-tech products, services, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white" font-semibold mb-4>Skill Verification</h4>
              <ul className="space-y-2"" text-sm>
                <li><Link href=/skill-verification" className="text-gray-400" hover  text-white  transition-colors >Skill Tests</Link href=/skill-verification  className="text-gray-400" hover  text-white  transition-colors" ></Link></li>
                <li><Link href=/ai-powered-learning-platform className="text-gray-400" hover text-white transition-colors >Learning Platform</Link href=/ai-powered-learning-platform className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/dispute-resolution" className="text-gray-400" hover text-white transition-colors >Dispute Resolution</Link href=/dispute-resolution  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/invoice-billing className="text-gray-400" hover text-white transition-colors >Invoice & Billing</Link href=/invoice-billing className="text-gray-400" hover text-white transition-colors" ></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white" font-semibold mb-4>Support</h4>
              <ul className="space-y-2"" text-sm>
                <li><Link href=/contact className="text-gray-400" hover text-white transition-colors >Contact Us</Link href=/contact className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/real-time-chat" className="text-gray-400" hover text-white transition-colors >Live Chat</Link href=/real-time-chat  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/notifications className="text-gray-400" hover text-white transition-colors >Notifications</Link href=/notifications className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/ai-powered-contract-legal" className="text-gray-400" hover text-white transition-colors >Legal Support</Link href=/ai-powered-contract-legal  className="text-gray-400" hover text-white transition-colors ></Link></li> </ul>
            </div>
            <div>
              <h4 className="text-white" font-semibold mb-4>Connect</h4>
              <ul className="space-y-2"  text-sm>
                <li><Link href=/about className="text-gray-400" hover text-white transition-colors >About Us</Link href=/about" className=" text-gray-400 hover text-white transition-colors" ></Link></li>
                <li><Link href=/blog className="text-gray-400" hover text-white transition-colors >Blog</Link href=/blog className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/auth/signup" className="text-gray-400" hover text-white transition-colors >Sign Up</Link href=/auth/signup  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/auth/login className="text-gray-400" hover text-white transition-colors >Login</Link href=/auth/login className="text-gray-400" hover text-white transition-colors" ></Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t  border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400" text-sm>
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  ;
  </div >;
  </div> ),;"
};"
;''`
export default SkillVerificationPage;))))))))"'"'`