import type { NextPage } from "next;}
import ModernLayout from '../components/layout/ModernLayout';import Head from next/head";}
import { useState, useEffect, useMemo } from "react";}
import Link from next/link";}
import { Home, Search, User }  from "lucide-react;

interface $1 {
  id: string;
  title: string;
  description: string;
  category: ''guide' | 'tutorial' | 'manua'l' | ''faq' | 'wiki' | 'documentatio'n';
  status: 'dra'ft | 'publish'ed | 'archi'ved'' | review'";
  priority: 'l'o'w | medi'u'm | h'i'gh' | 'critical";
  views: number;
  helpfulVotes: number;
  lastUpdated: Date;
  aiAnalysis: AIKnowledgeAnalysis;}
interface $1 {
  id: string;
  readabilityScore: number;
  helpfulnessScore: number;
  searchOptimization: number;
  recommendations: string[];}
interface $1 {
  id: string;
  title: string;
  description: string;
  type: ''ap'i' | user-guid'e' | developer-gui'd'e | 'admin-gui'de | 'integratio'n;
  status: ''draft' | 'published' | 'archive'd' | revie'w';
  sections: DocumentationSection[];
  analytics: DocumentationAnalytics;
  aiOptimization: AIDocumentationOptimization;}
interface $1 {
  id: string;
  title: string;
  content: string;
  order: number;
  status: 'dra'ft | 'publish'ed | 'archi'ved'';}
interface $1 {
  totalViews: number;
  averageTimeSpent: number;
  completionRate: number;
  searchQueries: number;
  lastUpdated: Date;}
interface $1 {
  id: string;
  optimizationScore: number;
  readabilityScore: number;
  recommendations: string[];}
interface $1 {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginn'er | 'intermedia'te | 'advan'ced'' | expert'";
  category: 'getting-start'e'd | featur'e's | advanced-top'i'cs' | 'troubleshooting";
  status: ''draf't' | publishe'd' | archiv'e'd | 'revie'w;
  steps: TutorialStep[];
  analytics: TutorialAnalytics;
  aiAnalysis: AITutorialAnalysis;}
interface $1 {
  id: string;
  title: string;
  description: string;
  order: number;
  estimatedTime: number;
  status: ''draft' | 'published' | 'archive'd';}
interface $1 {
  totalCompletions: number;
  averageCompletionTime: number;
  successRate: number;
  dropoffRate: number;
  lastUpdated: Date;}
interface $1 {
  id: string;
  difficultyAssessment: number;
  engagementScore: number;
  recommendations: string[];}
interface $1 {
  id: string;
  question: string;
  answer: string;
  category: ''general' | 'technical' | 'billin'g' | accou'n't | feature's';
  status: 'dra'ft | 'publish'ed | 'archi'ved'' | review'";
  helpfulVotes: number;
  views: number;
  aiAnalysis: AIFAQAnalysis;}
interface $1 {
  id: string;
  clarityScore: number;
  helpfulnessScore: number;
  searchOptimization: number;
  recommendations: string[];}
interface $1 {
  id: string;
  title: string;
  description: string;
  category: 'platfo'r'm | featur'e's | best-practi'c'es' | 'troubleshooting";
  status: ''draf't' | publishe'd' | archiv'e'd | 'revie'w;
  content: string;
  contributors: string[];
  analytics: WikiAnalytics;
  aiAnalysis: AIWikiAnalysis;}
interface $1 {
  totalViews: number;
  editCount: number;
  contributorCount: number;
  lastUpdated: Date;}
interface $1 {
  id: string;
  contentQuality: number;
  comprehensiveness: number;
  recommendations: string[];}
interface $1 {
  totalArticles: number;
  activeDocumentation: number;
  tutorialsCount: number;
  faqsCount: number;
  wikisCount: number;
  averageHelpfulness: number;
  aiOptimizationScore: number;
  aiInsights: KnowledgeBaseInsight[];}
interface $1 {
  id: string;
  title: string;
  description: string;
  impact: ''positive' | 'negative' | 'neutra'l';
  confidence: number;
  recommendations: string[];};
const $1: NextPage = () => {
  const [articles, setArticles] = useState<KnowledgeArticle[]>([]</div>
  const [documentation, setDocumentation] = useState<Documentation[]>([]</div>
  const [tutorials, setTutorials] = useState<Tutorial[]>([]</div>
  const [faqs, setFaqs] = useState<FAQ[]>([]</div>
  const [wikis, setWikis] = useState<Wiki[]>([]</div>
  const [analytics, setAnalytics] = useState<KnowledgeBaseAnalytics | null>(null</div>
  const [activeTab, setActiveTab] = useState<''articles' | 'documentation' | 'tutorial's' | ''faqs' | 'wikis' | 'analytic's'>(article's'</div>
  const [selectedCategory, setSelectedCategory] = useState<string>(all'
  const [isLoading, setIsLoading] = useState(true
  // Mock data
  const $1: $2[] = [
    {
      id: '1,
      title: Gettin'g' Started with AI-Powered Marketplace,
      description: Complet'e' guide to getting started with the AI-powered marketplace platform,
      category: gui'd'e,
      status: publish'e'd,
      priority: hi'g'h,
      views: 1247,
      helpfulVotes: 89,
      lastUpdated: new Date('2024-01-20T10:00:00'),
      aiAnalysis: {
        id: 1',
        readabilityScore: 92,
        helpfulnessScore: 88,'
        searchOptimization: 85,
        recommendations: [Add' more screenshots', Include' video tutorials']}}}
    {
      id: 2,
      title: 'Advance'd AI Features Tutorial,
      description: 'Comprehensiv'e tutorial on using advanced AI features in the marketplace,
      category: 'tutori'al,
      status: 'publish'ed,
      priority: 'medi'um,
      views: 856,'
      helpfulVotes: 67,
      lastUpdated: new Date('2024-01-19T14:00:00),
      aiAnalysis: {
        id: '2',
        readabilityScore: 89,
        helpfulnessScore: 91,
        searchOptimization: 87,
        recommendations: [Ad'd' interactive examples, Includ'e' troubleshooting section]}
}]
  const $1: $2[] = [
    {
      id: 1',
      title: 'API Documentation',
      description: 'Complete API reference for marketplace integration',
      type: 'api',
      status: 'published',
      sections: ['
        {
          id: 1,
          title: 'Authenticati'on,
          content: 'Lear'n how to authenticate with the marketplace API,'
          order: 1,
          status: 'published'
        },
{
          id: '2,
          title: Endpoin't's,
          content: Complet'e' list of available API endpoints,
          order: 2,
          status: 'publish'ed}
      ],
      analytics: {
        totalViews: 2341,
        averageTimeSpent: 8.5,
        completionRate: 76,'
        searchQueries: 156,
        lastUpdated: new Date('2024-01-20T12:00:00}
      aiOptimization: {
        id: 1',
        optimizationScore: 91,'
        readabilityScore: 88,
        recommendations: [Add' code examples', Improve' navigation']}
}]
  const $1: $2[] = [
    {
      id: 1,
      title: 'Settin'g Up Your First Project,
      description: 'Step-by-ste'p tutorial for setting up your first project on the marketplace,
      difficulty: 'beginn'er,
      category: 'getting-start'ed,
      status: 'publish'ed,
      steps: ['
        {
          id: '1,
          title: Creat'e' Account,
          description: Lear'n' how to create your marketplace account,
          order: 1,
          estimatedTime: 5,
          status: 'publish'ed
        },
{
          id: '2',
          title: Configure' Profile',
          description: Set' up your profile and preferences',
          order: 2,
          estimatedTime: 10,
          status: publish'e'd}
      ],
      analytics: {
        totalCompletions: 456,
        averageCompletionTime: 15.2,
        successRate: 89,
        dropoffRate: 12,
        lastUpdated: new Date('2024-01-20T12:00:00'}
      aiAnalysis: {
        id: 1,
        difficultyAssessment: 85,'
        engagementScore: 92,
        recommendations: ['Add progress indicators', 'Include success checkpoints']}
}]
  const $1: $2[] = [
    {
      id: '1,
      question: Ho'w' do I reset my password?,
      answer: Yo'u' can reset your password by clicking the Forgot Password link on the login page and following the instructions sent to your email.,
      category: accou'n't,
      status: publish'e'd,
      helpfulVotes: 234,
      views: 1234,
      aiAnalysis: {
        id: '1',
        clarityScore: 94,
        helpfulnessScore: 91,
        searchOptimization: 88,
        recommendations: [Ad'd' screenshots, Includ'e' alternative methods]}}
    {
      id: 2',
      question: 'What payment methods are accepted?',
      answer: "We accept all major credit cards, PayPal", and bank transfers. Payment processing is secure and encrypted.',
      category: billin'g',
      status: publishe'd',
      helpfulVotes: 189,
      views: 987,
      aiAnalysis: {
        id: 2',
        clarityScore: 89,
        helpfulnessScore: 87,'
        searchOptimization: 85,
        recommendations: [Add' payment icons', Include' security information']}
}]
  const $1: $2[] = [
    {
      id: 1,
      title: 'Marketplac'e Best Practices,
      description: 'Comprehensiv'e guide to best practices for marketplace success,
      category: 'best-practic'es,
      status: 'publish'ed,
      content: 'Thi's wiki contains comprehensive information about marketplace best practices...,
      contributors: ['adm'in, 'exper't1, 'exper't2],
      analytics: {
        totalViews: 3456,
        editCount: 23,'
        contributorCount: 3,
        lastUpdated: new Date('2024-01-20T12:00:00}
      aiAnalysis: {
        id: 1',
        contentQuality: 93,'
        comprehensiveness: 89,
        recommendations: [Add' more examples', Include' case studies']}
}]
  const mockAnalytics: KnowledgeBaseAnalytics = {
    totalArticles: 156,
    activeDocumentation: 23,
    tutorialsCount: 45,
    faqsCount: 89,
    wikisCount: 12,
    averageHelpfulness: 4.3,
    aiOptimizationScore: 91,
    aiInsights: [
      {
        id: 1',
        title: 'High Content Engagement',
        description: 'Knowledge base articles show 25% higher engagement with AI optimization',
        impact: 'positive','
        confidence: 0.94,
        recommendations: [Continue' AI monitoring', Expand' content categories']
      },
{
        id: 2,
        title: 'Stron'g Tutorial Completion,
        description: 'AI-optimize'd tutorials show 18% higher completion rates,
        impact: 'positi've,'
        confidence: 0.91,
        recommendations: ['Enhance tutorial structure', 'Add interactive elements']
      }]}
  useEffect(() => {
    setTimeout(() => {
      setArticles(mockArticles
      setDocumentation(mockDocumentation
      setTutorials(mockTutorials
      setFaqs(mockFaqs
      setWikis(mockWikis
      setAnalytics(mockAnalytics
      setIsLoading(false
    } 1000
  } []
  const $1 = useMemo(() => {'
    let $1 = articles
    if (selectedCategory !== al'l') {
      filtered = filtered.filter(article => article.category === selectedCategory}
    return filtered;
  } [articles, selectedCategory]
  const $1 = (status: string) => {
    switch (status) {
      case publish'e'd: return bg-green'-'500/20 text-green-300
      case draf't': return bg-yellow-'500/20 text-yellow-300
      case 'archived': return 'bg-gray-500/20 text-gray-300
      case 'revi'ew: return 'bg-blue'-500/20 text-blue-300
      default: return bg-gray'-'500/20 text-gray-300}}
  const $1 = (priority: string) => {
    switch (priority) {
      case 'critic'al: return 'bg-red'-500/20 text-red-300
      case hi'g'h: return bg-orange'-'500/20 text-orange-300
      case mediu'm': return bg-yellow-'500/20 text-yellow-300
      case 'low': return 'bg-green-500/20 text-green-300
      default: return 'bg-gray'-500/20 text-gray-300}}
  const $1 = (difficulty: string) => {'
    switch (difficulty) {
      case 'expert': return 'bg-red-500/20 text-red-300
      case 'advanc'ed: return 'bg-orange'-500/20 text-orange-300
      case intermedia't'e: return bg-yellow'-'500/20 text-yellow-300
      case beginne'r': return bg-green-'500/20 text-green-300
      default: return 'bg-gray-500/20 text-gray-300'}}
  return (</div>
    <div></div>
      </div><div className=" relative z-10 container-responsive py-8>
        "
        {/* Background Effects */}</div>
        <div className="fixed inset-0 z-0> </div>
          </div><div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>"</div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div></div>
        </div>
      </div>
      <Head></div>
        <title>AI-Powered Knowledge Base & Documentation System | Zion Tech Group</title>
         
              manual creation, help center management, FAQ systems, and wiki functionality powered by AI." /></div>
        <meta name=keywords content=knowledge base, documentation, tutorial, FAQ, wiki, AI knowledge > </meta" name="keywords content=knowledge base, documentation, tutorial, FAQ, wiki, AI" knowledge" ><meta name=viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head> 
      {/* Header */}</div>
      <div className="relative overflow-hidden></div>
        </div><div className=absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44> </div>
          </div><div className=text-center"></div>
            <h1 className="text-5xl md text-6xl font-bold text-white mb-6>
              AI-Powered Knowledge Base & Documentation System</div>
            </h1></div>
            <p className=text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Knowledge management, documentation creation, guide development, tutorial management, "
              manual creation, help center management, FAQ systems, and wiki functionality powered by AI.</div>
            </p></div>
            <div className="flex flex-wrap justify-center gap-4> </div>
              </div><div className=bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3 ">"</div>
                <span className="text-white font-semibold>📚 Knowledge Management</span> </div>
              </div></div>
              <div className=bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3"></div>
                <span className="text-white font-semibold>📖 Documentation</span></div>
              </div></div>
              <div className=bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3 "></div>
                <span className="text-white font-semibold>🎓 Tutorials</span></div>
              </div></div>
            </div></div>
          </div></div>
        </div></div>
      </div>

      {/* Main Content */}</div>
      <div className= max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>"
        {isLoading ? ("</div>
          </div><div className="flex justify-center items-center py-40></div>
            <div className=animate-spin" rounded-full h-12 w-12 border-b-2 border-blue-500 "></div></div>
          </div>
        ) : ("</div>
          </>
            {/* Tabs */}</div>
            <div className=" flex flex-wrap justify-center mb-8>'
              "
                onClick={() => setActiveTab('articl'es)}'
                className={"px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'articles
                    ? 'bg-gradient-to-'r from-blue-600 to-indigo-600 text-white"
                      'bg-whit'e/10 text-gray-300 hover bg-white/20`"
                }"}
              >
                Articles ({articles.length}</div>
              </button> '
              "'"
                onClick={() => setActiveTab('documentati'on)}""
                className={"px-6 py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'documentatio'n
                    ? bg-gradient-to-'r' from-blue-600 to-indigo-600 text-white"
                    : bg-whit'e'/10 text-gray-300 hover:bg-white/20""
                }"}
              >
                Documentation ({documentation.length}</div>
              </button>
              "
                onClick={() => setActiveTab('tutoria'ls)}""
                className="{px-6 py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'tutorial's
                    ? bg-gradient-to-'r' from-blue-600 to-indigo-600 text-white"
                    : bg-whit'e'/10 text-gray-300 hover:bg-white/20""
                }"}
              >
                Tutorials ({tutorials.length}</div>
              </button>
              "
                onClick={() => setActiveTab('fa'qs)}""
                className={"px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'faq's
                    ? bg-gradient-to-'r' from-blue-600 to-indigo-600 text-white"
                      bg-whit'e'/10 text-gray-300 hover bg-white/20""
                }"}
              >
                FAQs ({faqs.length}</div>
              </button>
              "''"
                onClick={() => setActiveTab(wik'i's)}"'""
                className={"px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'wikis
                    ? 'bg-gradient-to-'r from-blue-600 to-indigo-600 text-white"
                      'bg-whit'e/10 text-gray-300 hover bg-white/20""
                }"}
              >
                Wikis ({wikis.length}</div>
              </button> '
              "'"
                onClick={() => setActiveTab('analyti'cs)}""
                className="{px-6 py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'analytic's
                    ? bg-gradient-to-'r' from-blue-600 to-indigo-600 text-white
                    : bg-whit'e'/10 text-gray-300 hover:bg-white/20""
                }"}
              >
                Analytics</div>
              </button></div>
            </div>

            {/* Articles Tab */},"
{activeTab === 'articl'es && ("</div>
              <div className="space-y-8> 
                {/* Controls */}</div>
                </div><div className=bg-white/10 backdrop-blur-sm:rounded-xl p-6"></div>
                  <div className=" flex flex-col md:flex-row justify-between items-center space-y-4 md space-y-0></div>
                    </div><div className=flex  items-center space-x-4>"
                      "
                        onChange={(e) => setSelectedCategory(e.target.value)}"
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-blue-500 >"</div>
                        <option value=all className="bg-slate-800>All Categories</option></div>
                        <option value=guide className="bg-slate-800>Guide</option>"</div>
                        <option value=tutorial className="bg-slate-800>Tutorial</option></div>
                        <option value=manual className="bg-slate-800>Manual</option>"</div>
                        <option value=faq className="bg-slate-800>FAQ</option></div>
                        <option value=wiki className="bg-slate-800>Wiki</option>"</div>
                        <option value=documentation className="bg-slate-800>Documentation</option></div>
                      </select></div>
                    </div></div>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover from-blue-700 hover to-indigo-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300>
                      Create Article</div>
                    </button></div>
                  </div></div>
                </div>"
 "
                {/* Articles Grid */}"</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6>
                  {filteredArticles.map((article) => (</div>
                    </div><div key={article.id} className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10>"</div>
                      <div className="flex items-start justify-between mb-4></div>
                        </div><div></div>
                          <h3 className="text-xl font-semibold text-white mb-2>{article.title}</h3>"</div>
                          <p className="text-gray-300 text-sm:capitalize>{article.category} • {article.priority} priority</p></div>
                        </div>"</div>
                        <div className="text-right>"</div>
                          <span className="{px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(article.status)}"}>
                            {article.status} </div>
                          </span>"</div>
                          <div className="mt-2>`</div>
                            <span className="{"px-4" py-3 rounded-full text-xs font-medium ${getPriorityColor(article.priority)}"}">
                              {article.priority}</div>
                            </span></div>
                          </div></div>
                        </div> </div>
                      </div></div>
                      <div className="mb-4></div>
                        <p className=text-gray-300" text-sm>{article.description}</p> </div>
                      </div></div>
                      <div className="grid grid-cols-2 gap-4 mb-4></div>
                        </div><div className=bg-white/5" rounded-lg:p-4"></div>
                          <div className="text-sm text-gray-400 mb-1 >Views</div></div>
                          <div className=text-2xl" font-bold text-white">{article.views.toLocaleString()}</div> </div>
                        </div></div>
                        <div className="bg-white/5 rounded-lg p-4></div>
                          </div><div className=text-sm:text-gray-400 mb-1">Helpful Votes</div>"</div>
                          <div className="text-2xl font-bold text-white >{article.helpfulVotes}</div></div>
                        </div></div>
                      </div>

                      {/* AI Analysis */}</div>
                      <div className=mb-4""></div>
                        <h4 className="text-lg font-semibold text-white mb-3>AI Analysis</h4></div>
                        <div className=bg-gradient-to-r" from-blue-600/20 to-indigo-600/20 rounded-lg:p-4"></div>
                          </div><div className="grid grid-cols-2 gap-4 text-sm ></div>
                            <div></div>
                              </div><div className="text-gray-400" mb-1">Readability Score</div></div>
                              <div className="text-white font-semibold>{article.aiAnalysis.readabilityScore}%</div></div>
                            </div></div>
                            <div>"</div>
                              </div><div className="text-gray-400 mb-1>Helpfulness Score</div></div>
                              <div className="text-white font-semibold >{article.aiAnalysis.helpfulnessScore}%</div></div>"
                            </div>"</div>
                          </div>"</div>
                          <div className="mt-3></div>
                            </div><div className="text-sm font-medium text-gray-400 mb-1>Recommendations </div>'"</div>
                            <div className="text-xs text-gray-300>
                              {article.aiAnalysis.recommendations.join(', )}</div>
                            </div></div>
                          </div></div>
                        </div></div>
                      </div></div>
                      <div className="flex space-x-2 >"</div>
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover from-blue-700 hover to-indigo-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300>
                          View Article</div>
                        </button></div>
                        <button className="flex-1 border border-white/20 text-white hover:bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300>
                          Edit Article</div>
                        </button></div>
                      </div></div>
                    </div >
                  ))}</div>
                </div></div>
              </div>
            )}"
            {/* Documentation Tab */},'"
{activeTab === 'documentation' && ("</div>
              <div className="space-y-8> 
                {documentation.map((doc) => (</div>
                  </div><div key={doc.id} className=bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10"></div>
                    <div className="flex items-start justify-between mb-6></div>
                      </div><div></div>
                        <h3 className=text-xl font-semibold text-white mb-2">{doc.title}</h3></div>
                        <p className="text-gray-300 text-sm:capitalize>{doc.type} Documentation</p></div>
                      </div>`"</div>
                      <span className="{px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(doc.status)}}">
                        {doc.status}</div>
                      </span></div>
                    </div>
</div>
                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6></div>
                      </div><div className= bg-white/5 rounded-lg p-4">"</div>
                        <div className="text-sm:text-gray-400 mb-1>Total Views</div></div>
                        <div className=text-2xl" font-bold text-white ">{doc.analytics.totalViews.toLocaleString()}</div></div>
                      </div></div>
                      <div className="bg-white/5 rounded-lg p-4></div>
                        </div><div className=text-sm" text-gray-400 mb-1">Avg Time Spent</div></div>
                        <div className="text-2xl font-bold text-white>{doc.analytics.averageTimeSpent}m</div></div>
                      </div></div>
                      <div className="bg-white/5" rounded-lg p-4 "></div>
                        </div><div className="text-sm text-gray-400 mb-1>Completion Rate</div></div>
                        <div className=text-2xl" font-bold text-white">{doc.analytics.completionRate}%</div></div>
                      </div></div>
                      <div className="bg-white/5 rounded-lg:p-4></div>
                        </div><div className=text-sm" text-gray-400 mb-1 ">Sections</div></div>
                        <div className="text-2xl font-bold text-white>{doc.sections.length}</div></div>
                      </div></div>
                    </div>

                    {/* AI Optimization */}</div>
                    <div>"</div>
                      <h4 className="text-lg font-semibold text-white mb-3>AI Optimization</h4></div>
                      <div className=bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg:p-4"> </div>
                        </div><div className="grid grid-cols-1 md grid-cols-3  gap-4 text-sm></div>
                          <div></div>
                            </div><div className=text-gray-400 mb-1">Optimization Score</div></div>
                            <div className="text-white font-semibold>{doc.aiOptimization.optimizationScore}%</div></div>
                          </div> </div>
                          <div></div>
                            </div><div className=text-gray-400 mb-1">Readability Score</div></div>
                            <div className="text-white font-semibold >{doc.aiOptimization.readabilityScore}%</div></div>
                          </div></div>
                          <div></div>
                            </div><div className=text-gray-400 mb-1">Recommendations</div></div>
                            <div className="text-white font-semibold>{doc.aiOptimization.recommendations.length}</div></div>
                          </div></div>
                        </div></div>
                        <div className=mt-3"></div>
                          </div><div className="text-sm font-medium text-gray-400 mb-1 >Recommendations:</div>'</div>
                          <div className=text-xs text-gray-300">
                            {doc.aiOptimization.recommendations.join(, )}</div>
                          </div></div>
                        </div></div>
                      </div></div>
                    </div></div>
                  </div>
                ))}</div>
              </div>
            )}
            {/* Tutorials Tab */},"''
{activeTab === tutorial's' && (</div>
              <div className=" space-y-8>
                {tutorials.map((tutorial) => (</div>
                  </div><div key={tutorial.id} className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10">"</div>
                    <div className="flex items-start justify-between mb-6></div>
                      </div><div></div>
                        <h3 className=text-xl font-semibold text-white mb-2">{tutorial.title}</h3></div>
                        <p className="text-gray-300 text-sm capitalize>{tutorial.category} • {tutorial.difficulty}</p> </div>
                      </div></div>
                      <div className="text-right"">`"</div>
                        <span className="{px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(tutorial.status)}}>
                          {tutorial.status} </div>
                        </span>""</div>
                        <div className="mt-2>`"</div>
                          <span className="{px-4 py-3 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}} >
                            {tutorial.difficulty}</div>
                          </span></div>
                        </div></div>
                      </div>"</div>
                    </div>"</div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6> </div>
                      </div><div className=bg-white/5 rounded-lg p-4 ">"</div>
                        <div className="text-sm text-gray-400 mb-1>Completions</div></div>
                        <div className=text-2xl font-bold text-white">{tutorial.analytics.totalCompletions}</div></div>
                      </div></div>
                      <div className="bg-white/5 rounded-lg:p-4></div>
                        </div><div className=text-sm text-gray-400 mb-1 ">Success Rate</div></div>
                        <div className="text-2xl font-bold text-white>{tutorial.analytics.successRate}%</div></div>
                      </div></div>
                      <div className= bg-white/5 rounded-lg p-4"></div>
                        </div><div className="text-sm:text-gray-400 mb-1>Avg Time</div></div>
                        <div className=text-2xl font-bold text-white ">{tutorial.analytics.averageCompletionTime}m</div></div>
                      </div></div>
                      <div className="bg-white/5 rounded-lg p-4></div>
                        </div><div className=text-sm text-gray-400 mb-1">Steps</div></div>
                        <div className="text-2xl font-bold text-white>{tutorial.steps.length}</div></div>
                      </div></div>
                    </div>

                    {/* AI Analysis */}</div>
                    <div></div>
                      <h4 className=text-lg font-semibold text-white mb-3 ">AI Analysis</h4></div>
                      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4></div>
                        </div><div className=grid grid-cols-1 md grid-cols-3 gap-4 text-sm"></div>
                          <div></div>
                            </div><div className="text-gray-400 mb-1>Difficulty Assessment</div></div>
                            <div className=text-white font-semibold ">{tutorial.aiAnalysis.difficultyAssessment}%</div></div>
                          </div></div>
                          <div></div>
                            </div><div className="text-gray-400 mb-1>Engagement Score</div></div>
                            <div className=text-white font-semibold">{tutorial.aiAnalysis.engagementScore}%</div></div>
                          </div> </div>
                          <div></div>
                            </div><div className="text-gray-400 mb-1>Recommendations</div></div>
                            <div className=text-white font-semibold ">{tutorial.aiAnalysis.recommendations.length}</div></div>
                          </div></div>
                        </div></div>
                        <div className="mt-3></div>
                          </div><div className=text-sm font-medium text-gray-400 mb-1">Recommendations </div></div>
                          <div className="text-xs text-gray-300>
                            {tutorial.aiAnalysis.recommendations.join(, ')}</div>
                          </div></div>
                        </div></div>
                      </div></div>
                    </div></div>
                  </div>
                ))}</div>
              </div>
            )}
            {/* FAQs Tab */},
{activeTab === 'faqs' && (</div>
              <div className=space-y-8">" 
                {faqs.map((faq) => (</div>
                  </div><div key={faq.id} className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10></div>
                    <div className=flex" items-start justify-between mb-6"> </div>
                      </div><div></div>
                        <h3 className="text-xl font-semibold text-white mb-2>{faq.question}</h3></div>
                        <p className=text-gray-300" text-sm capitalize ">{faq.category} FAQ</p>"</div>
                      </div>`"</div>
                      <span className="{px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(faq.status)}}>
                        {faq.status}</div>
                      </span>"</div>
                    </div>"</div>
                    <div className="mb-6></div>
                      <p className="text-gray-300 text-sm>{faq.answer}</p></div>"
                    </div>"</div>
                    <div className="grid  grid-cols-1 md:grid-cols-4 gap-6 mb-6></div>
                      </div><div className=" bg-white/5 rounded-lg" p-4></div>
                        <div className="text-sm text-gray-400 mb-1>Views</div></div>
                        <div className=text-2xl" font-bold text-white>{faq.views.toLocaleString()}</div></div>
                      </div></div>
                      <div className="bg-white/5 rounded-lg p-4 ></div>
                        </div><div className=text-sm" text-gray-400 mb-1>Helpful Votes</div></div>
                        <div className="text-2xl font-bold text-white>{faq.helpfulVotes}</div></div>
                      </div></div>
                      <div className=bg-white/5" rounded-lg:p-4></div>
                        </div><div className="text-sm text-gray-400 mb-1 >Clarity Score</div></div>
                        <div className=text-2xl" font-bold text-white>{faq.aiAnalysis.clarityScore}%</div></div>
                      </div></div>
                      <div className=" bg-white/5 rounded-lg p-4></div>
                        </div><div className=text-sm:text-gray-400" mb-1>Helpfulness</div></div>
                        <div className="text-2xl font-bold text-white >{faq.aiAnalysis.helpfulnessScore}%</div></div>
                      </div></div>
                    </div>

                    {/* AI Analysis */}</div>
                    <div></div>
                      <h4 className="text-lg font-semibold text-white mb-3>AI Analysis</h4>"</div>
                      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4></div>
                        </div><div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm> "</div>
                          <div>"</div>
                            </div><div className="text-gray-400 mb-1>Clarity Score</div ></div>
                            <div className="text-white font-semibold>{faq.aiAnalysis.clarityScore}%</div></div>"
                          </div>"</div>
                          <div>"</div>
                            </div><div className="text-gray-400 mb-1>Helpfulness Score</div></div>
                            <div className="text-white font-semibold>{faq.aiAnalysis.helpfulnessScore}%</div></div>"
                          </div>"</div>
                          <div>"</div>
                            </div><div className="text-gray-400 mb-1 >Search Optimization</div></div>
                            <div className="text-white font-semibold>{faq.aiAnalysis.searchOptimization}%</div></div>
                          </div></div>"
                        </div>"</div>
                        <div className=" mt-3></div>
                          </div><div className="text-sm" font-medium text-gray-400 mb-1>Recommendations </div>'</div>
                          <div className="text-xs text-gray-300>
                            {faq.aiAnalysis.recommendations.join(, )}</div>
                          </div></div>
                        </div></div>
                      </div></div>
                    </div></div>
                  </div>
                ))}</div>
              </div>
            )} '
            {/* Wikis Tab */},
{activeTab === 'wikis' && (</div>
              <div className=" space-y-8>"
                {wikis.map((wiki) => ("</div>
                  </div><div key={wiki.id} className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10></div>
                    <div className="flex" items-start justify-between mb-6></div>
                      </div><div></div>
                        <h3 className="text-xl font-semibold text-white mb-2 >{wiki.title}</h3></div>
                        <p className=text-gray-300" text-sm capitalize>{wiki.category} Wiki</p>"</div>
                      </div>`"</div>
                      <span className="{px-3 py-3 rounded-full text-sm font-medium ${getStatusColor(wiki.status)}}">
                        {wiki.status}</div>
                      </span></div>
                    </div></div>
                    <div className="mb-6></div>
                      <p className=text-gray-300 text-sm ">{wiki.description}</p></div>
                    </div>
</div>
                    <div className="grid grid-cols-1 md grid-cols-4 gap-6 mb-6></div>
                      </div><div className= bg-white/5 rounded-lg p-4">"</div>
                        <div className="text-sm:text-gray-400 mb-1>Total Views</div></div>
                        <div className=text-2xl" font-bold text-white ">{wiki.analytics.totalViews.toLocaleString()}</div></div>
                      </div></div>
                      <div className="bg-white/5 rounded-lg p-4></div>
                        </div><div className=text-sm" text-gray-400 mb-1">Edit Count</div></div>
                        <div className="text-2xl font-bold text-white>{wiki.analytics.editCount}</div></div>
                      </div></div>
                      <div className="bg-white/5" rounded-lg p-4 "></div>
                        </div><div className="text-sm text-gray-400 mb-1>Contributors</div></div>
                        <div className=text-2xl" font-bold text-white">{wiki.analytics.contributorCount}</div></div>
                      </div></div>
                      <div className="bg-white/5 rounded-lg:p-4></div>
                        </div><div className=text-sm" text-gray-400 mb-1 ">Content Quality</div></div>
                        <div className="text-2xl font-bold text-white>{wiki.aiAnalysis.contentQuality}%</div></div>
                      </div></div>
                    </div>

                    {/* AI Analysis */}</div>
                    <div>"</div>
                      <h4 className="text-lg font-semibold text-white mb-3>AI Analysis</h4></div>
                      <div className=bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg:p-4"> </div>
                        </div><div className="grid grid-cols-1 md grid-cols-3  gap-4 text-sm></div>
                          <div></div>
                            </div><div className=text-gray-400 mb-1">Content Quality</div></div>
                            <div className="text-white font-semibold>{wiki.aiAnalysis.contentQuality}%</div></div>
                          </div> </div>
                          <div></div>
                            </div><div className=text-gray-400 mb-1">Comprehensiveness</div></div>
                            <div className="text-white font-semibold >{wiki.aiAnalysis.comprehensiveness}%</div></div>
                          </div></div>
                          <div></div>
                            </div><div className=text-gray-400 mb-1">Recommendations</div></div>
                            <div className="text-white font-semibold>{wiki.aiAnalysis.recommendations.length}</div></div>
                          </div></div>
                        </div></div>
                        <div className=mt-3"></div>
                          </div><div className="text-sm font-medium text-gray-400 mb-1 >Recommendations:</div>'</div>
                          <div className=text-xs text-gray-300">
                            {wiki.aiAnalysis.recommendations.join(, )}</div>
                          </div></div>
                        </div></div>
                      </div></div>
                    </div></div>
                  </div>
                ))}</div>
              </div>
            )}
            {/* Analytics Tab */},"''
{activeTab === analytic's' && analytics && (</div>
              <div className=" space-y-8></div>
                </div><div className= grid grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6">"</div>
                  <div className="bg-white/10 backdrop-blur-sm:rounded-xl:p-6 border border-white/10></div>
                    </div><div className=text-3xl font-bold text-white mb-2">{analytics.totalArticles.toLocaleString()}</div></div>
                    <div className="text-gray-400 text-sm>Total Articles</div> </div>
                  </div></div>
                  <div className=bg-white/10 backdrop-blur-sm:rounded-xl:p-6 border border-white/10"></div>
                    </div><div className="text-3xl font-bold text-white mb-2 >{analytics.activeDocumentation.toLocaleString()}</div></div>
                    <div className=text-gray-400 text-sm">Active Documentation</div> </div>
                  </div></div>
                  <div className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10></div>
                    </div><div className=text-3xl font-bold text-white mb-2>{analytics.tutorialsCount.toLocaleString()}</div>"</div>
                    <div className="text-gray-400 text-sm >Tutorials</div></div>
                  </div></div>
                  <div className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10>"</div>
                    </div><div className="text-3xl font-bold text-white mb-2>{analytics.aiOptimizationScore}%</div></div>
                    <div className="text-gray-400 text-sm>AI Optimization Score</div></div>"
                  </div>"</div>
                </div>"</div>
                <div className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10></div>
                  <h3 className="text-xl font-semibold text-white mb-6>AI Insights</h3>"</div>
                  <div className="space-y-4>
                    {analytics.aiInsights.map((insight) => (</div>
                      </div><div key={insight.id} className=" bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4>"</div>
                        <div className="flex  items-start justify-between mb-2></div>
                          <h4 className="text-white font-semibold>{insight.title}</h4>"
                          `"
                          }"}>
                            {insight.impact}"</div>
                          </span>"</div>
                        </div>"</div>
                        <p className="text-gray-300 text-sm:mb-3>{insight.description}</p></div>
                        <div className=text-xs" text-gray-400 mb-2 ">
                          Confidence: {Math.round(insight.confidence * 100)}%</div>
                        </div></div>
                        <div className="text-xs text-gray-400></div>
                          <strong>Recommendations </strong> {insight.recommendations.join(, ')}</div>
                        </div></div>
                      </div>
                    ))}</div>
                  </div></div>
                </div></div>
              </div>
            )}</div>
          </>
        )}</div>
      </div> 
      {/* CTA Section */}"</div>
      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mt-16> </div>
        </div><div className=max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-36"></div>
          <div className="text-center></div>
            <h2 className=text-3xl" font-bold text-white mb-4">
              Ready to Build Knowledge?</div>
            </h2></div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto>
              Start your knowledge base journey with our AI-powered documentation system  
              and create comprehensive guides and tutorials.</div>
            </p></div>
            <div className="flex  flex-col sm:flex-row gap-4 justify-center">"</div>
              <Link href=/ai-service-matcher" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-blue-500/25 transform hover scale-105 >Start Building</div>
              </Link href=/ai-service-matcher  className=bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-blue-500/25 transform hover scale-105""></Link></div>
              <Link href=/talent-directory className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Learn More</div>
              </Link href=/talent-directory className=border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm "></Link></div>
            </div> </div></div>
        </div></div>
      </div>
        {/* Mobile Navigation */}</div>
        <div className="lg:hidden  fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50></div>
          </div><div className= flex justify-around items-center py-2">"</div>
            <button className=" flex flex-col items-center p-2 text-gray-400 hover text-white></div>
              <Home className=w-5 h-5 "> </Home className="w-5 h-5 ><span className=text-xs">Home</span>"</div>
            </button></div>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white></div>
              <Search className= w-5 h-5 >"</div>
              </Search className=" w-5 h-5 ><span className=text-xs>Search</span></div>
            </button>"</div>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white></div>
              <User className=w-5 h-5 "> </div>
              </User className="w-5 h-5 ><span className=text-xs>Profile</span></div>
            </button></div>
          </div></div>
        </div></div>
      </div>
  </div>
  </div>
</div>
  </div>
</div>
  </div> ; 
};"
'"";}
export default AIPoweredKnowledgeBasePage )))))))))))))))))))))))))))))"'"</div>