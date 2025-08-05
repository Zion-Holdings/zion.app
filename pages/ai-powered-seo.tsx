import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface SEOAnalysis {
  id: string;
  url: string;
  title: string;
  description: string;
  keywords: string[];'
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  issues: SEOIssue[];
  recommendations: SEORecommendation[];
  lastAnalyzed: Date;
  nextAnalysis: Date;}
interface SEOIssue {'
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;'
  description: string;
  impact: 'high' | 'medium' | 'low';
  fixable: boolean;
  fixDescription: string;
  priority: number;}
interface SEORecommendation {'
  id: string;
  category: 'content' | 'technical' | 'on-page' | 'off-page' | 'performance';
  title: string;'
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'easy' | 'medium' | 'hard';
  estimatedImprovement: number;
  aiGenerated: boolean;}
interface KeywordAnalysis {
  id: string;
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  competition: number;
  ranking: number;
  traffic: number;
  aiInsights: string;
  opportunities: string[];'
  trends: {
    trend: 'up' | 'down' | 'stable';
    change: number;
    period: string;
  };}
interface ContentOptimization {
  id: string;
  pageTitle: string;
  metaDescription: string;
  content: string;
  wordCount: number;
  readabilityScore: number;
  keywordDensity: number;
  suggestions: {
    title: string;
    description: string;
    content: string;
    keywords: string[];
  };
  aiOptimized: boolean;}
interface PerformanceMetrics {
  id: string;
  metric: string;
  current: number;
  target: number;'
  improvement: number;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: Date;}
const AIPoweredSEOPage: NextPage = () => {
  ;
  const [seoAnalyses, setSeoAnalyses] = useState<SEOAnalysis[]>([]);
  const [keywordAnalyses, setKeywordAnalyses] = useState<KeywordAnalysis[]>([]);
  const [contentOptimizations, setContentOptimizations] = useState<ContentOptimization[]>([]);'
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'analysis' | 'keywords' | 'content' | 'performance'>('overview');
  const [filterGrade, setFilterGrade] = useState<string>('all');
  const [filterImpact, setFilterImpact] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'score' | 'grade' | 'impact'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered SEO data
    setTimeout(() => {
      const mockSeoAnalyses: SEOAnalysis[] = ['
        {
          id: '1',
          url: 'https://ziontechgroup.netlify.app',
          title: 'Zion - AI-Powered Marketplace',
          description: "Comprehensive AI-powered marketplace for professional services, equipment rental", and talent directory.',
          keywords: ['AI marketplace', 'professional services', 'equipment rental', 'talent directory', 'AI development'],'
          score: 87,
          grade: 'A',
          issues: ['
            {
              id: '1',
              type: 'warning',
              title: 'Missing Meta Description',
              description: 'The page is missing a meta description which is important for search engine snippets.',
              impact: 'medium','
              fixable: true,
              fixDescription: 'Add a compelling meta description between 150-160 characters.',
              priority: 2}
            },'
{
              id: '2',
              type: 'info',
              title: 'Image Alt Tags',
              description: 'Some images are missing alt tags which help with accessibility and SEO.',
              impact: 'low','
              fixable: true,
              fixDescription: 'Add descriptive alt tags to all images.',
              priority: 3}
          ],
          recommendations: ['
            {
              id: '1',
              category: 'content',
              title: 'Optimize Page Title',
              description: 'Include primary keyword in the page title for better search visibility.',
              impact: 'high',
              effort: 'easy',
              estimatedImprovement: 15,
              aiGenerated: true
            },'
{
              id: '2',
              category: 'technical',
              title: 'Improve Page Speed',
              description: 'Optimize images and reduce JavaScript bundle size for faster loading.',
              impact: 'high',
              effort: 'medium',
              estimatedImprovement: 12,
              aiGenerated: true}
          ],
          lastAnalyzed: new Date(Date.now() - 2 * 60 * 60 * 1000),
          nextAnalysis: new Date(Date.now() + 24 * 60 * 60 * 1000}'
        {
          id: '2',
          url: 'https://ziontechgroup.netlify.app/service-marketplace',
          title: 'Service Marketplace - Zion',
          description: "Browse and hire professional services in AI development, web development, mobile apps", and more.',
          keywords: ['service marketplace', 'AI development', 'web development', 'mobile apps', 'professional services'],'
          score: 92,
          grade: 'A',
          issues: [],
          recommendations: ['
            {
              id: '3',
              category: 'on-page',
              title: 'Add Schema Markup',
              description: 'Implement structured data markup for better search engine understanding.',
              impact: 'medium',
              effort: 'medium',
              estimatedImprovement: 8,
              aiGenerated: true}
          ],
          lastAnalyzed: new Date(Date.now() - 4 * 60 * 60 * 1000),
          nextAnalysis: new Date(Date.now() + 24 * 60 * 60 * 1000}'
        {
          id: '3',
          url: 'https://ziontechgroup.netlify.app/talent-directory',
          title: 'Talent Directory - Zion',
          description: "Find verified professionals and experts in AI, web development, blockchain", and data science.',
          keywords: ['talent directory', 'AI experts', 'web developers', 'blockchain developers', 'data scientists'],'
          score: 78,
          grade: 'B',
          issues: ['
            {
              id: '3',
              type: 'critical',
              title: 'Slow Page Load Speed',
              description: 'Page load time is above 3 seconds which negatively impacts user experience and SEO.',
              impact: 'high','
              fixable: true,
              fixDescription: "Optimize images, minify CSS/JS", and implement lazy loading.',
              priority: 1}
          ],
          recommendations: ['
            {
              id: '4',
              category: 'performance',
              title: 'Optimize Images',
              description: 'Compress and optimize images to improve page load speed.',
              impact: 'high',
              effort: 'easy',
              estimatedImprovement: 20,
              aiGenerated: true}
          ],
          lastAnalyzed: new Date(Date.now() - 6 * 60 * 60 * 1000),
          nextAnalysis: new Date(Date.now() + 24 * 60 * 60 * 1000}
      ];
      const mockKeywordAnalyses: KeywordAnalysis[] = ['
        {
          id: '1',
          keyword: 'AI marketplace',
          searchVolume: 8900,
          difficulty: 45,
          cpc: 2.34,
          competition: 0.67,
          ranking: 3,'
          traffic: 1250,
          aiInsights: 'High search volume with moderate competition. Good opportunity for content optimization.','
          opportunities: [
            'Create comprehensive AI marketplace guide',
            'Target long-tail keywords',
            'Optimize for featured snippets'
          ],'
          trends: {
            trend: 'up','
            change: 12.5,
            period: 'last 30 days'}}'
        {
          id: '2',
          keyword: 'professional services',
          searchVolume: 22100,
          difficulty: 78,
          cpc: 4.56,
          competition: 0.89,
          ranking: 15,'
          traffic: 450,
          aiInsights: 'High competition keyword with good search volume. Focus on local SEO and long-tail variations.','
          opportunities: [
            'Target local search terms',
            'Create service-specific content',
            'Build local citations'
          ],'
          trends: {
            trend: 'stable','
            change: 2.1,
            period: 'last 30 days'}}'
        {
          id: '3',
          keyword: 'equipment rental',
          searchVolume: 5400,
          difficulty: 32,
          cpc: 1.89,
          competition: 0.45,
          ranking: 8,'
          traffic: 320,
          aiInsights: 'Moderate search volume with low competition. Excellent opportunity for content marketing.','
          opportunities: [
            'Create equipment rental guides',
            'Target specific equipment types',
            'Optimize for local search'
          ],'
          trends: {
            trend: 'up','
            change: 8.7,
            period: 'last 30 days'}}
      ];
      const mockContentOptimizations: ContentOptimization[] = ['
        {
          id: '1',
          pageTitle: 'Zion - AI-Powered Marketplace for Professional Services',
          metaDescription: 'Discover the future of professional services with Zion\'s AI-powered marketplace. Find expert developers, designers, and consultants for your next project.',
          content: "Zion is a comprehensive AI-powered marketplace that connects businesses with top-tier professionals in AI development, web development, mobile apps, and more. Our platform features advanced search capabilities, secure payment processing", and AI-driven recommendations.',
          wordCount: 156,
          readabilityScore: 78,
          keywordDensity: 2.3,'
          suggestions: {
            title: 'Zion - AI-Powered Professional Services Marketplace | Find Expert Developers',
            description: "Connect with verified AI developers, web developers", and tech professionals on Zion\'s AI-powered marketplace. Secure payments, instant quotes, and guaranteed quality.',
            content: "Zion revolutionizes how businesses find and hire professional services. Our AI-powered marketplace features advanced matching algorithms, secure payment processing, and comprehensive project management tools. Whether you need AI development, web development, mobile apps, or blockchain solutions", Zion connects you with verified experts.',
            keywords: ['AI marketplace', 'professional services', 'expert developers', 'AI development', 'web development']}
          aiOptimized: true}'
        {
          id: '2',
          pageTitle: 'Service Marketplace - Browse Professional Services',
          metaDescription: "Browse thousands of professional services in AI development, web development, mobile apps, cloud services", and blockchain. Get instant quotes and secure payments.',
          content: "Our service marketplace offers a wide range of professional services including AI development, web development, mobile app development, cloud services", and blockchain solutions. Each service provider is verified and rated by our community.',
          wordCount: 89,
          readabilityScore: 82,
          keywordDensity: 1.8,'
          suggestions: {
            title: "Professional Services Marketplace | AI Development", Web Development & More',
            description: "Browse verified professional services in AI development, web development, mobile apps, and blockchain. Get instant quotes, secure payments", and guaranteed results.',
            content: 'Discover thousands of verified professional services on Zion\'s marketplace. From AI development and machine learning to web development, mobile apps, and blockchain solutions, our platform connects you with expert professionals. Each service provider is thoroughly vetted and rated by our community.',
            keywords: ['service marketplace', 'AI development', 'web development', 'professional services', 'verified experts']}
          aiOptimized: true}
      ];
      const mockPerformanceMetrics: PerformanceMetrics[] = ['
        {
          id: '1',
          metric: 'Organic Traffic',
          current: 15420,
          target: 20000,'
          improvement: 23.0,
          trend: 'up',
          lastUpdated: new Date()
        },'
{
          id: '2',
          metric: 'Search Rankings',
          current: 8.5,
          target: 5.0,'
          improvement: -41.2,
          trend: 'up',
          lastUpdated: new Date()
        },'
    {
          id: '3',
          metric: 'Click-Through Rate',
          current: 3.2,
          target: 4.0,'
          improvement: 20.0,
          trend: 'up',
          lastUpdated: new Date()
        },'
{
          id: '4',
          metric: 'Page Load Speed',
          current: 2.8,
          target: 2.0,'
          improvement: -28.6,
          trend: 'down',
          lastUpdated: new Date()
        },'
    {
          id: '5',
          metric: 'Bounce Rate',
          current: 42.3,
          target: 35.0,'
          improvement: -17.3,
          trend: 'down',
          lastUpdated: new Date()
        },'
{
          id: '6',
          metric: 'Conversion Rate',
          current: 2.8,
          target: 3.5,'
          improvement: 20.0,
          trend: 'up',
          lastUpdated: new Date(}
      ];

      setSeoAnalyses(mockSeoAnalyses);
      setKeywordAnalyses(mockKeywordAnalyses);
      setContentOptimizations(mockContentOptimizations);
      setPerformanceMetrics(mockPerformanceMetrics);
      setLoading(false);
    } 1000);
  } []);

  const filteredAnalyses = useMemo(() => {
    let filtered = seoAnalyses.filter(analysis => {'
      // Grade filter';'
      if (filterGrade !== 'all' && analysis.grade !== filterGrade) return false;
      
      // Search term filter
      if (searchTerm && !analysis.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !analysis.url.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;}
      return true;
    });

    // Sort analyses
    filtered.sort((a, b) => {'
      switch (sortBy) {
        case 'score':'
          return b.score - a.score;
        case 'grade':'
          return a.grade.localeCompare(b.grade);
        case 'impact':
          const aImpact = a.issues.filter(i => i.impact === 'high').length;
          const bImpact = b.issues.filter(i => i.impact === 'high').length;'
          return bImpact - aImpact;
        case 'recent':
        default:
          return new Date(b.lastAnalyzed).getTime() - new Date(a.lastAnalyzed).getTime();}
    });

    return filtered;
  } [seoAnalyses, filterGrade, searchTerm, sortBy]);
  const getGradeColor = (grade: string) => {'
    switch (grade) {';'
      case 'A': return 'text-green-400 bg-green-500/20';
      case 'B': return 'text-blue-400 bg-blue-500/20';
      case 'C': return 'text-yellow-400 bg-yellow-500/20';
      case 'D': return 'text-orange-400 bg-orange-500/20';
      case 'F': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';}
  };
  const getIssueColor = (type: string) => {'
    switch (type) {';'
      case 'critical': return 'text-red-400 bg-red-500/20';
      case 'warning': return 'text-yellow-400 bg-yellow-500/20';
      case 'info': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';}
  };
  const getImpactColor = (impact: string) => {'
    switch (impact) {';'
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';}
  };
  const getTrendIcon = (trend: string) => {'
    switch (trend) {';'
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';}
  };

  if (loading) {
    return (
    <div>
      </div><div className=" relative z-10 container-responsive py-8> 
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      
        <div className="text-center>" 
          </div><div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300" shadow-lg>
            <svg className="animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" 24">
              <circle className=" opacity-25 cx=12 cy=12 r=" 10" stroke="currentColor strokeWidth=4></circle>
              <path className="opacity-75" fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path>
            </svg>
            <span className="text-lg" font-medium>Loading AI-Powered SEO...</span>
          </div >
        </div>
      </div>;"
    );}
"
  return ("
    <div className="relative" z-10 container-responsive py-8>
      <Head> 
        <title>AI-Powered SEO - Zion</title>
        <meta name=description content=Intelligent SEO optimization with AI-driven keyword analysis, content optimization, and search engine performance tracking > </meta" name=description content="Intelligent SEO optimization with AI-driven keyword analysis, content optimization, and search engine performance" tracking" ><meta name="keywords content=AI SEO, search engine optimization, keyword analysis, content optimization, Zion > </meta" name="keywords" content="AI SEO, search engine optimization, keyword analysis, content optimization," Zion" ><link rel="icon href=/favicon.ico > </link" rel="icon" href="/favicon.ico" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}"
      <nav className=" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0" z-50>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8>
          </div><div className="flex  justify-between h-16>
            <div className="flex" items-center>
              <Link href=/ className="flex-shrink-0" > </Link href=/  className="flex-shrink-0" ><h1 className="text-2xl font-bold" text-white>
                  <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
                </h1>
              </Link>
            </div>
            <div className=" hidden md flex items-center space-x-8" >
              <Link href="/ai-powered-automation" className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Automation
              </Link href= /ai-powered-automation" className=" text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/ai-powered-analytics className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Analytics
              </Link href=/ai-powered-analytics className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/smart-notifications className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Notifications
              </Link href=/smart-notifications  className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/auth/login className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Login
              </Link href=/auth/login className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8>
        {/* Header */}
        </div><div className=" text-center" mb-8>
          <h1 className="text-4xl md text-5xl font-bold text-white mb-4> 
            AI-Powered SEO
          </h1>
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
            Intelligent SEO optimization with AI-driven keyword analysis, content optimization, 
            and search engine performance tracking for maximum visibility.
          </p>
        </div>
        {/* Tab Selector */}
        <div className="flex" justify-center mb-8 >
          </div><div className=" bg-white/5 backdrop-blur-sm:border border-white/10" rounded-lg:p-1>"
            {["'
              { id: 'overview', name: 'Overview', icon: '📊' },
{ id: 'analysis', name: 'SEO Analysis', icon: '🔍' },
    { id: 'keywords', name: 'Keywords', icon: '🎯' },
{ id: 'content', name: 'Content', icon: '📝' },
    { id  'performance', name  'Performance', icon  '📈'}"
            ].map((tab) => (
              "
                onClick={() => setSelectedView(tab.id as any)}
                className="{`flex" items-center space-x-2 px-4 py-4 rounded-md:text-sm font-medium transition-all duration-200 ${'
                  selectedView === tab.id
                    ? 'bg-purple-600 text-white'`
                      'text-gray-300 hover text-white hover bg-white/10'``
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
'
        {/* Performance Metrics Overview */}, ''
{selectedView === 'overview' && (
          <div className="grid" grid-cols-1 md:grid-cols-3 gap-6 mb-8>
            {performanceMetrics.map((metric) => (
              </div><div key={metric.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6">
                <div className=" flex items-center justify-between" mb-4>
                  <h3 className="text-lg" font-semibold text-white>{metric.metric}</h3>
                  <span className="text-2xl>{getTrendIcon(metric.trend)}</span>"
                </div>
                <div className="mb-4>"
                  </div><div className="text-3xl" font-bold text-white mb-2>{metric.current.toLocaleString()}</div>
                  <p className="text-sm" text-gray-400>Target: {metric.target.toLocaleString()}</p>
                </div>
                "''`
                <div className=" flex items-center justify-between" text-sm>'''``
                  <span className="{`${getImpactColor(metric.improvement" > 0 ? 'high' : 'low')}`}>
                    {metric.improvement > 0 ? '+' : ''},
{metric.improvement.toFixed(1)}%
                  </span>
                  <span className="text-gray-400>vs" target</span>
                </div>
              </div>
            ))}
          </div>
        )}'
        {/* Search and Filters */}, ''
{selectedView === 'analysis' && ("
          <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-xl p-6 mb-8> 
            </div><div className="grid"" grid-cols-1 lg:grid-cols-4 gap-4>
              <div className="lg:col-span-2>"
                
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full" bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus outline-none focus border-purple-500 transition-colors
                />
              </div>
              <div>
                 
                  onChange={(e) => setFilterGrade(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus outline-none focus border-purple-500" transition-colors
                >
                  <option value=all>All Grades</option>
                  <option value="A>Grade A</option>
                  <option value="B>Grade B</option>
                  <option value="C>Grade C</option>
                  <option value="D>Grade D</option>
                  <option value=F>Grade F</option>
                </select>
              </div>
              
              <div>
                
                  onChange={(e) ="> setSortBy(e.target.value as any)}"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus outline-none focus border-purple-500  transition-colors
                >
                  <option value=recent>Sort by Recent</option>
                  <option value=score>Sort by Score</option>
                  <option value="grade>Sort by Grade</option>
                  <option value=impact>Sort by Impact</option>
                </select>
              </div">
            </div>
          </div>
        )}
        {/* SEO Analysis List */},"'
{selectedView === 'analysis' && ("
          <div className=" space-y-6>
            {filteredAnalyses.map((analysis) => (
              </div><div key={analysis.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex" items-start justify-between mb-4> 
                  </div><div className="flex-1>"
                    <h3 className="text-lg" font-semibold text-white mb-2>{analysis.title}</h3>
                    <p className="text-gray-300" text-sm mb-2>{analysis.url}</p>
                    <p className="text-gray-400" text-sm>{analysis.description}</p>
                  </div>`
                  <div className="flex flex-col items-end space-y-2 ">``"
                    <span className="{`px-3" py-3 rounded-full text-sm font-medium  ${getGradeColor(analysis.grade)}`}>
                      Grade {analysis.grade}
                    </span>
                    <span className="text-2xl" font-bold text-white>{analysis.score}</span>
                    <span className="text-sm:text-gray-400>Score</span>"
                  </div>
                </div>

                {/* Keywords */}"
                <div className="mb-4" >
                  <p className="text-sm:text-gray-400" mb-2>Keywords </p>
                  <div className="flex flex-wrap" gap-2>
                    {analysis.keywords.map((keyword, index) => (
                      <span key={index} className="px-4" py-3 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Issues */},
{analysis.issues.length > 0 && ("
                  <div className="mb-4" >
                    <p className="text-sm:text-gray-400" mb-2>Issues Found </p>
                    <div className="space-y-2>
                      {analysis.issues.map((issue) => (`
                        </div><div key={issue.id} className=" flex items-start" space-x-3>``
                          <span className="{`px-4  py-3 rounded-full text-xs font-medium ${getIssueColor(issue.type)}`}>
                            {issue.type.toUpperCase()}
                          </span>
                          <div className=" flex-1">
                            <p className="text-sm" text-white font-medium>{issue.title}</p>
                            <p className="text-xs" text-gray-400>{issue.description}</p>
                            {issue.fixable && (
                              <p className="text-xs" text-green-400 mt-1 >Fix: {issue.fixDescription}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}"
                {/* Recommendations */},
{analysis.recommendations.length > 0 && ("
                  <div className=" mb-4">
                    <p className="text-sm:text-gray-400" mb-2>AI Recommendations </p>
                    <div className="space-y-2>" 
                      {analysis.recommendations.map((rec) => (`
                        </div><div key={rec.id} className="flex items-start space-x-3" >``"
                          <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getImpactColor(rec.impact)}`}>
                            {rec.impact.toUpperCase()} 
                          </span>
                          <div className="flex-1">
                            <p className="text-sm" text-white font-medium>{rec.title}</p>
                            <p className="text-xs" text-gray-400>{rec.description}</p>
                            <p className="text-xs" text-purple-400 mt-1>
                              Estimated improvement  +{rec.estimatedImprovement}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
 
                {/* Actions */}
                <div className="flex" space-x-3>
                  <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105>
                    View Details
                  </button>
                  <button className="border" border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm >
                    Fix Issues
                  </button>
                  <button className="border" border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    Re-analyze
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}'
        {/* Keyword Analysis */},"''
{selectedView === 'keywords' && (
          <div className=" space-y-6>
            {keywordAnalyses.map((keyword) => (
              </div><div key={keyword.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex" items-start justify-between mb-4>
                  </div><div>
                    <h3 className="text-lg" font-semibold text-white mb-2>{keyword.keyword}</h3>
                    <p className="text-gray-300" text-sm>{keyword.aiInsights}</p> 
                  </div>
                  <div className="flex" items-center space-x-2>
                    <span className="text-2xl>{getTrendIcon(keyword.trends.trend)}</span>"
                    <span className="text-sm" text-gray-400>{keyword.trends.change}%</span>
                  </div>
                </div>
                <div className="grid" grid-cols-2 md grid-cols-4 gap-4 mb-4>
                  </div><div>
                    <p className="text-sm:text-gray-400>Search" Volume</p>
                    <p className="text-lg" font-semibold text-blue-400 >{keyword.searchVolume.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Difficulty</p>
                    <p className="text-lg" font-semibold text-orange-400>{keyword.difficulty}/100</p>
                  </div>
                  <div>
                    <p className="text-sm:text-gray-400>CPC</p>"
                    <p className="text-lg" font-semibold text-green-400 >${keyword.cpc}</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Ranking</p>
                    <p className="text-lg" font-semibold text-purple-400>#{keyword.ranking}</p>
                  </div> 
                </div>
                <div className="mb-4"">
                  <p className="text-sm" text-gray-400 mb-2 >Opportunities:</p>
                  <ul className="space-y-1"">
                    {keyword.opportunities.map((opp, index) => (
                      <li key={index} className=" text-sm text-gray-300 flex" items-center>
                        <span className="text-purple-400" mr-2>•</span>
                        {opp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex" space-x-3 >
                  <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105>
                    Optimize Content
                  </button>
                  <button className="border" border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    Track Rankings
                  </button>
                </div>
              </div > ))}
          </div>
        )}'
        {/* Content Optimization */},"''
{selectedView === 'content' && (
          <div className="space-y-6>" 
            {contentOptimizations.map((content) => (
              </div><div key={content.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl p-6" >
                <div className="flex" items-start justify-between mb-4> 
                  </div><div className="flex-1">
                    <h3 className="text-lg" font-semibold text-white mb-2>Current Content</h3>
                    <div className="space-y-2" text-sm>
                      </div><div> 
                        <p className="text-gray-400>Title" </p>
                        <p className="text-white>{content.pageTitle}</p"">
                      </div>
                      <div>
                        <p className="text-gray-400>Description:</p" >
                        <p className="text-white>{content.metaDescription}</p>"
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end" space-y-2>
                    <span className="px-3 py-3 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30> 
                      AI Optimized
                    </span>
                    <span className="text-sm:text-gray-400>Readability:" {content.readabilityScore}/100</span>
                  </div>
                </div>
                <div className="grid" grid-cols-1 md grid-cols-3  gap-4 mb-4>
                  </div><div >
                    <p className="text-sm" text-gray-400>Word Count</p>
                    <p className="text-lg" font-semibold text-blue-400>{content.wordCount}</p>
                  </div>
                  <div>
                    <p className="text-sm:text-gray-400>Keyword" Density</p>
                    <p className="text-lg" font-semibold text-green-400 >{content.keywordDensity}%</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Readability</p>
                    <p className="text-lg" font-semibold text-purple-400>{content.readabilityScore}/100</p>
                  </div>
                </div>
                <div className="mb-4>"
                  <p className="text-sm" text-gray-400 mb-2 >AI Suggestions:</p>
                  <div className="space-y-3>" 
                    </div><div>
                      <p className="text-sm text-gray-400>Optimized Title:</p>
                      <p className="text-white" text-sm>{content.suggestions.title}</p>
                    </div> 
                    <div>
                      <p className="text-sm:text-gray-400>Optimized" Description:</p>
                      <p className="text-white" text-sm>{content.suggestions.description}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400>Suggested Keywords:</p>
                      <div className=" flex flex-wrap gap-2" mt-1>
                        {content.suggestions.keywords.map((keyword, index) => (
                          <span key={index} className="px-4" py-3 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30>
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
 
                <div className="flex" space-x-3>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105> 
                    Apply Changes
                  </button>
                  <button className="border" border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 backdrop-blur-sm>
                    Generate More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}"
        {/* Call to Action */}
        <div className="mt-12" text-center > 
          </div><div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl" p-8>
            <h2 className="text-3xl font-bold text-white mb-4> 
              Optimize Your SEO with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl:mx-auto>
              Leverage intelligent SEO optimization to improve search rankings,  
              increase organic traffic, and maximize your online visibility.
            </p>
            <div className=" flex flex-col sm flex-row gap-4 justify-center ">
              <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover  scale-105>
                Start Analysis
              </button>"
              <Link href=/service-marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  >View Services
              </Link href=/service-marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" backdrop-blur-sm ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>
;
};"
''`
export default AIPoweredSEOPage ))))))))))"'"'`