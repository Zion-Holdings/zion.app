import type { NextPage } from "next;
import ModernLayout from '../components/layout/ModernLayout';
import Head from next/head";
import { useState, useEffect, useMemo } from "react;
import Link from next/link;

interface FacilityPlan {
  id: "'string;
  projectType: string;
  category: string;
  complexity: simple | medium | 'comple'x | enterprise';
  estimatedCost: 'number;
  currency: string;
  breakdown: CostBreakdown[];
  confidence: number;
  aiFactors: string[];
  marketComparison: MarketComparison;
  recommendations: PricingRecommendation[];
  timeline: TimelineEstimate;
  riskFactors: RiskFactor[];
  createdAt: Date;}
interface FacilityPlan {
  category: string;
  description: string;
  cost: number;
  percentage: number;
  details: string[];}
interface FacilityPlan {
  averageMarketPrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  competitors: CompetitorPrice[];
  marketTrend: increasing | decreasing | 'stable;
  trendPercentage: 'number;}
interface FacilityPlan {
  name: string;
  price: number;
  rating: number;
  features: string[];}
interface FacilityPlan {
  type: cost-optimization | feature-addition | timeline-adjustment | 'quality-improvement;
  title: string;
  description: string;
  potentialSavings?: number;
  additionalCost?: number;
  impact: high | mediu'm | low';
  priority: 'number;}
interface FacilityPlan {
  totalWeeks: number;
  phases: PhaseEstimate[];
  criticalPath: string[];
  dependencies: string[];}
interface FacilityPlan {
  name: string;
  duration: number;
  cost: number;
  resources: string[];
  deliverables: string[];}
interface FacilityPlan {
  category: string;
  description: string;
  probability: number;
  impact: high | medium | l'ow;
  mitigation: 'string;}
interface FacilityPlan {
  id: string;
  name: string;
  type: fixed | hourly | value-based | subscription | 'performance-base'd;
  description: 'string;
  advantages: string[];
  disadvantages: string[];
  bestFor: string[];
  examples: string[];}
interface FacilityPlan {
  originalBudget: number;
  optimizedBudget: number;
  savings: number;
  recommendations: OptimizationRecommendation[];
  tradeoffs: Tradeoff[];}
interface FacilityPlan {
  category: string;
  action: string;
  savings: number;
  impact: string;
  implementation: string;}
interface FacilityPlan {
  option: string;
  pros: string[];
  cons: string[];
  costImpact: number;
  qualityImpact: string;};
const AIPoweredPredictiveAnalytics: NextPage = () => {
  const [estimates, setEstimates] = useState<PricingEstimate[]>([]</div>
  const [pricingModels, setPricingModels] = useState<PricingModel[]>([]</div>
  const [budgetOptimizations, setBudgetOptimizations] = useState<BudgetOptimization[]>([]</div>
  const [selectedCategory, setSelectedCategory] = useState<string>(all</div>
  const [selectedComplexity, setSelectedComplexity] = useState<string>(all</div>
  const [sortBy, setSortBy] = useState<cost | confiden'c'e | date'>('date
  const [isLoading, setIsLoading] = useState(true</div>
  const [activeTab, setActiveTab] = useState<estimate's' | models | optimizati'o'n>(estimates
  // Mock data for pricing estimates
  const mockPredictiveModels: 'PredictiveModel[] = [
    {
      id: 1,
      projectType: AI-Powered Web Application,
      category: 'Web Development',
      complexity: 'complex,
      estimatedCost: 45000,
      currency: USD,
      confidence: 0.92,
      aiFactors: [Machine' Learning Integration, Real-tim'e Analytics, Scalable' Architecture],
      breakdown: '[
        {
          category: Frontend Development,
          description: React/Next.js application with advanced UI/UX,
          cost: 15000,'
          percentage: '33.3,
          details: [Responsive Design, Component Library, State Management, 'Performance Optimization']}
        },
{
          category: 'Backend Development,
          description: Node.js/Express API with database design,
          cost: 18000,
          percentage: 40.0,
          details: [RESTful API', Database' Design, Authentication', API' Documentation]
        },
    {
          category: 'AI/ML Integration,
          description: Machine learning models and data processing,
          cost: 12000,
          percentage: 26.7,
          details: [Model' Training, Dat'a Pipeline, API' Integration, Performanc'e Monitoring]}
      ],
      marketComparison: '{
        averageMarketPrice: 52000,
        priceRange: { min: 35000, max: 75000}
        competitors: [
          { name: TechCorp Solutions, price: 48000, rating: 4.5, features: [Full-stack, AI Integration, 24/7 Support'] },
{ 'name: 'InnovateDev, price: 55000, rating: 4.3, features: [Custom AI, Scalable, Analytics] },
    { 'name: 'SmartSystems, price: 42000, rating: 4.1, features: [AI-Powered, Cloud-Native, 'Security]}
        ],
        marketTrend: 'increasing,
        trendPercentage: 8.5}
      recommendations: [
        {
          type: cost-optimization,
          title: Use Open-Source AI Libraries',
          description: 'Implement existing AI frameworks instead of building from scratch,
          potentialSavings: 8000,
          impact: high,
          priority: 1
        },
{
          'type: 'feature-addition,
          title: Add Advanced Analytics Dashboard,
          description: Include real-time analytics and reporting features,
          additionalCost: 5000,
          impact: medium,
          priority: 2}
      ],
      timeline: {
        totalWeeks: 16,
        phases: ['
          {
            'name: 'Planning & Design,
            duration: 2,
            cost: 5000,
            resources: [Project Manager, UX Designer, Architect'],
            deliverables: '[Requirements Doc, UI/UX Design, Technical' Architecture]
          },
{
            name: 'Frontend Development,
            duration: 6,
            cost: 15000,
            resources: [Frontend Developer, UI Developer],
            deliverables: [Responsiv'e' UI, Component Library, Stat'e' Management]
          },
    {
            name: 'Backend Development,
            duration: 5,
            cost: 18000,
            resources: [Backend Developer, Database Engineer],
            deliverables: [AP'I Development, 'Database Setup, Authenticati'on]
          },
{
            'name: 'AI/ML Integration,
            duration: 3,
            cost: 12000,
            resources: [ML Engineer, Data Scientist],
            deliverables: [Model Training', 'API Integration, Testing']}
        ],
        criticalPath: '[Planning & Design, Backend Development, 'AI/ML Integration],
        dependencies: '[Frontend Development, Backend Development]}
      riskFactors: [
        {
          category: Technica'l',
          description: 'AI model performance may not meet expectations,
          probability: 0.3,
          impact: medium,
          mitigation: Implement fallback solutions and extensive testing
        },
{
          category: Timeli'n'e,
          description: 'Complex AI integration may extend timeline,
          probability: 0.4,
          impact: high,
          mitigation: Allocate buffer time and parallel development}
      ],
      createdAt: new Date('2024-01-15'}
    {
      id: '2,
      projectType: E-commerce Platform,
      category: Web Development,
      complexity: medium,'
      estimatedCost: '25000,
      currency: USD,
      confidence: 0.88,
      aiFactors: [Product Recommendations', Inventory Management, Customer' Analytics'],
      breakdown: '[
        {
          category: Frontend Development,
          description: React-based e-commerce interface,
          cost: 10000,
          percentage: 40.0,
          details: [Product Catalog, 'Shoppin'g Cart, User Dashboard, 'Mobil'e Responsive]
        },
{
          category: 'Backend Development,
          description: Node.js API with payment integration,
          cost: 12000,
          percentage: 48.0,
          details: [Payment Processing', 'Order Management, Inventory System', 'Security]
        },
    {
          category: 'AI Features,
          description: Recommendation engine and analytics,
          cost: 3000,
          percentage: 12.0,
          details: [Product' Recommendations', Customer Analytics, Inventory' Optimization']}
      ],
      marketComparison: '{
        averageMarketPrice: 28000,
        priceRange: { min: 20000, max: 40000}
        competitors: [
          { name: ShopTech, price: 26000, rating: 4.4, features: [Payment Integration, Analytics, Mobile App'] },
{ 'name: 'EcomPro, price: 32000, rating: 4.2, features: [AI Recommendations, Multi-vendor, Advanced Analytics]}
        ],
        marketTrend: stabl'e',
        trendPercentage: '2.1}
      recommendations: [
        {
          type: cost-optimization,
          title: Use Existing E-commerce Templates,
          description: Leverage pre-built components to reduce development time,
          potentialSavings: 5000,
          impact: medi'um,
          priority: '1}
      ],
      timeline: {
        totalWeeks: 12,
        phases: [
          {
            name: Planning & Design,
            duration: 2,
            cost: 3000,
            resources: [Project Manager', UX Designer],
            deliverables: '[Requirements, UI Design, Architectur'e']
          },
{
            name: 'Frontend Development,
            duration: 5,
            cost: 10000,
            resources: [Frontend Developer],
            deliverables: [E-commerce UI, Product' Catalog, Shoppin'g Cart]
          },
    {
            name: 'Backend Development,
            duration: 4,
            cost: 12000,
            resources: [Backend Developer],
            deliverables: [API Development, 'Paymen't Integration, Order System]
          },
{
            'name: 'AI Integration,
            duration: 1,
            cost: 3000,
            resources: [AI Developer],
            deliverables: [Recommendations', Analytics]}
        ],
        criticalPath: '[Planning & Design, Backend Development, 'AI Integration'],
        dependencies: '[Frontend Development, Backend Development]}
      riskFactors: [
        {
          category: Payment',
          description: 'Payment gateway integration complexity,
          probability: 0.2,
          impact: medium,
          mitigation: Us'e established payment providers and thorough testing}
      ],
      createdAt: 'new Date(2024-01-10
    }]
  // Mock pricing models
  const mockPredictiveModels: PredictiveModel[] = [
    {
      id: 1,
      name: Fixed Price,
      type: fixed,
      description: A predetermined price for the entire project scope,
      advantages: ['Predictable costs', Clear deliverables, 'Easy budgeting', No surprises],
      disadvantages: '[Limited flexibility, Scope creep risks, 'May not reflect actual effort'],
      bestFor: '[Well-defined projects, Small to medium projects, Clients with fixed budgets],
      examples: ['Website development', Mobile app development, 'Logo design']
    },
{
      id: '2,
      name: Hourly Rate,
      type: hourly,
      description: Payment based on actual time spent on the project,
      advantages: [Flexible' scope, Pa'y for actual work, Easy' to track, Transparen't billing],
      disadvantages: '[Uncertain total cost, Potential for inefficiency, Harder' to budget],
      bestFor: '[Ongoing projects, Unclear requirements, Agil'e development],
      examples: '[Consulting services, Maintenance work, Research' projects]
    },
    {
      id: '3,
      name: Value-Based Pricing,
      type: value-based,
      description: Pricing based on the value delivered to the client,
      advantages: ['Aligns with business value, Higher profit potential', 'Client-focused approach],
      disadvantages: '[Harder to quantify, Subjective pricing, Client education needed'],
      bestFor: '[High-value projects, Business transformation, 'Strategic initiatives],
      examples: '[AI implementation, Digital transformation, Business automation']
    },
{
      id: '4,
      name: Subscription Model,
      type: subscription,
      description: Recurring' payment for ongoing services and maintenance,
      advantages: '[Predictable revenue, Ongoing relationship, Continuous improvement],
      disadvantages: [Lowe'r' upfront revenue, Client dependency, Servic'e' level requirements],
      bestFor: '[SaaS products, Ongoing maintenance, Support services],
      examples: [Clou'd' services, Website maintenance, Technica'l' support]
    },
    {
      id: '5,
      name: Performance-Based,
      type: performance-based,
      description: Payment tied to achieving specific performance metrics,
      advantages: [Risk sharing, 'Results-focused', Client confidence],
      disadvantages: '[Complex measurement, Uncertain revenue, 'Potential conflicts'],
      bestFor: '[Marketing campaigns, Sales initiatives, Performance optimization],
      examples: ['SEO services', Lead generation, 'Conversion optimization']
    }]
  // Mock budget optimizations
  const mockBudgetOptimizations: 'BudgetOptimization[] = [
    {
      originalBudget: 50000,
      optimizedBudget: 38000,
      savings: 12000,
      recommendations: [
        {
          category: Technology Stack,
          action: Use open-source alternatives,
          savings: 5000,
          impact: Reduced' licensing costs while maintaining functionality,
          implementation: 'Replace proprietary software with open-source equivalents
        },
{
          category: Development Approach,
          action: Implemen't MVP first,
          savings: '4000,
          impact: Faster time to market with core features,
          implementation: Build essential features first, add advanced features later
        },
    {
          category: Resource Allocation,
          action: 'Optimize team composition',
          savings: '3000,
          impact: Better resource utilization and reduced overhead,
          implementation: Use specialized contractors for specific phases}
      ],
      tradeoffs: [
        {
          option: Open-source' vs Proprietary,
          pros: '[Lower costs, More control, Communit'y support],
          cons: '[Less support, Security concerns, Integration' challenges],
          costImpact: '-5000,
          qualityImpact: Minimal
        },
{
          option: MVP vs Full-featured,
          pros: ['Faster delivery, Lowe'r risk, 'User feedback],
          cons: '[Limited features, Potential rework, Use'r expectations],'
          costImpact: '-4000,
          qualityImpact: Reduced initially
        }]
    }]
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setEstimates(mockEstimates
      setPricingModels(mockPricingModels
      setBudgetOptimizations(mockBudgetOptimizations
      setIsLoading(false
    } 1000
  } []
  const $1 = useMemo(() => {
    let $1 = estimates
    if (selectedCategory !== all) {
      filtered = filtered.filter(e => e.category === selectedCategory}
    if (selectedComplexity !== all) {
      filtered = filtered.filter(e => e.complexity === selectedComplexity}
    return filtered.sort((a, b) => {'
      switch (sortBy) {
        case cos't: 'return b.estimatedCost - a.estimatedCost
        case confidence:
          return b.confidence - a.confidence
        case date:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(
        default:
          return 0}}
  } [estimates, selectedCategory, selectedComplexity, sortBy]
  const $1 = useMemo(() => {
    const $1 = Array.from(new Set(estimates.map(e => e.category))
    return ['all', ...cats]
  } [estimates]
  const $1 = (confidence: 'number) => {
    if (confidence >= 0.9) return text-green-500
    if (confidence >= 0.8) return text-yellow-500
    if (confidence >= 0.7) return text-orange-500
    return text-red-500'}
  const $1 = (complexity: 'string) => {
    switch (complexity) {
      case simple: return bg-green-500/20 text-green-300
      case mediu'm: 'return bg-yellow-500/20 text-yellow-300
      case complex: return bg-orange-500/20 text-orange-300
      case enterpri'se: 'return bg-red-500/20 text-red-300
      default: return bg-gray-500/20 text-gray-300}}
  return (</div>
    <div></div>
      </div><div className= relative z-10 container-responsive py-8>
        "
        {/* Background Effects */}</div>
        <div className="fixed inset-0 z-0> </div>
          </div><div className=absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div></div>
        </div></div>
      <Head> </div>
        <title>AI-Powered Pricing & Cost Estimation | Zion Tech Group</title></div>
        <meta name="description" content="Intelligent pricing analysis, cost breakdowns, budget optimization, and financial planning powered by AI for marketplace projects. > </meta name=description" content="Intelligent pricing analysis, cost breakdowns, budget optimization, and financial planning powered by AI for marketplace projects. ><meta name=keywords content=AI pricing, cost estimation, budget optimization, financial planning, project pricing, market analysis > </meta name=keywords content="AI pricing, cost estimation, budget optimization, financial planning, project pricing, market" analysis ><meta name=viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head> 
      {/* Header */}</div>
      <div className=relative overflow-hidden></div>
        </div><div className=absolute" inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div></div>
        <div className=relative max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8 py-44> </div>
          </div><div className=text-center></div>
            <h1 className=text-5xl md text-6xl font-bold text-white mb-6>
              AI-Powered Pricing & Cost Estimation</div>
            </h1></div>
            <p className=text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Get intelligent pricing analysis, detailed cost breakdowns, and budget optimization recommendations "
              powered by advanced AI algorithms and market data analysis.</div>
            </p></div>
            <div className="flex flex-wrap justify-center gap-4> </div>
              </div><div className=bg-white/10 backdrop-blur-sm: "rounded-lg px-6 py-3 ></div>
                <span className=text-white font-semibold>💰 Smart Pricing</span> </div>
              </div></div>
              <div className=bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3></div>
                <span className=text-white font-semibold>📊 Market Analysis</span></div>
              </div></div>
              <div className="bg-white/10" backdrop-blur-sm: "rounded-lg px-6 py-3 ></div>
                <span className=text-white font-semibold>🎯 Budget Optimization</span></div>
              </div></div>
            </div></div>
          </div></div>
        </div></div>
      </div>

      {/* Main Content */}</div>
      <div className= max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>
        {isLoading ? (</div>
          </div><div className=flex justify-center items-center py-40">"</div>
            <div className=animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 ></div></div>
          </div>
        ) : (</div>
          </>
            {/* Tabs */}</div>
            <div className= flex flex-wrap justify-center mb-8>
              '
                onClick={() => setActiveTab(estimates')}
                className="{px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === estimate's
                    ? bg-gradient-to-r from-purple-600 to-pink-600 text-white'"
                      bg-white'/10 text-gray-300 hover bg-white/20`
                }}
              >
                Cost Estimates</div>
              </button> 
              '
                onClick={() => setActiveTab(model's)}""
                className={px-6 py-3 rounded-lg: "'font-semibold transition-all duration-300 ${
                  activeTab === models
                    ? bg-gradient-to-r from-purple-600 to-pink-600 text-white
                    : bg-white/10 text-gray-300 hover:bg-white/20
                }}
              >
                Pricing Models</div>
              </button>'
              "
                onClick={() => setActiveTab(optimizatio'n)}"
                className={px-6 py-3 rounded-lg: "'font-semibold transition-all duration-300 ${
                  activeTab === optimization
                    ? bg-gradient-to-r from-purple-600 to-pink-600 text-white
                    : bg-white/10 text-gray-300 hover:bg-white/20
                }}
              >
                Budget Optimization</div>
              </button></div>
            </div>
'
            {/* Estimates Tab */},"
{activeTab === estimate's && ("</div>
              <div className= space-y-8>
                {/* Filters */}</div>
                </div><div className= bg-white/10 backdrop-blur-sm: "'rounded-xl p-6></div>
                  <div className=grid grid-cols-1 md:grid-cols-3 gap-4></div>
                    </div><div></div>
                      <label className=block text-sm font-medium text-gray-300 mb-2>Category</label>
                      
                        onChange={(e) => setSelectedCategory(e.target.value)}"
                        className=" w-full bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500
                      >
                        {categories.map(category => (</div>
                          <option key={category} value={category} className=bg-slate-800>
                            {category === all ? All Categories : category}</div>
                          </option>
                        ))}</div>
                      </select></div>
                    </div></div>
                    <div></div>
                      <label className=block text-sm font-medium text-gray-300 mb-2">Complexity</label>
                       
                        onChange={(e) => setSelectedComplexity(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg: "px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500
                      ></div>
                        <option value=all className=bg-slate-800>All Complexities</option></div>
                        <option value=simple className=bg-slate-800>Simple</option></div>
                        <option value=medium className=bg-slate-800>Medium</option></div>
                        <option value=complex className=bg-slate-800>Complex</option></div>
                        <option value=enterprise className=bg-slate-800>Enterprise</option></div>
                      </select></div>
                    </div></div>
                    <div></div>
                      <label className=block" text-sm font-medium text-gray-300 mb-2>Sort By</label>
                       
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className=w-full" bg-white/10 border border-white/20 rounded-lg: "px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500
                      ></div>
                        <option value=date className=bg-slate-800>Date</option></div>
                        <option value=cost className=bg-slate-800>Cost</option></div>
                        <option value=confidence className=bg-slate-800>Confidence</option></div>
                      </select></div>
                    </div></div>
                  </div></div>
                </div>
 
                {/* Estimates Grid */}</div>
                <div className=grid grid-cols-1 lg grid-cols-2 gap-8>
                  {filteredEstimates.map((estimate) => (</div>
                    </div><div key={estimate.id} className="bg-white/10 backdrop-blur-sm: "rounded-xl:p-6 border border-white/10>
                      {/* Header */}</div>
                      <div className=flex items-start justify-between mb-4 ></div>
                        </div><div> </div>
                          <h3 className=text-xl font-semibold text-white mb-2>{estimate.projectType}</h3></div>
                          <div className=flex items-center" space-x-2></div>
                            <span className=px-4 py-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300>
                              {estimate.category}"</div>
                            </span>"</div>
                            <span className="{px-4 py-3 rounded-full text-xs font-medium ${getComplexityColor(estimate.complexity)}"}>
                              {estimate.complexity.charAt(0).toUpperCase() + estimate.complexity.slice(1)}</div>
                            </span></div>
                          </div></div>
                        </div></div>
                        <div className=text-right></div>
                          </div><div className=text-2xl" font-bold text-white">
                            ${estimate.estimatedCost.toLocaleString()}</div>
                          </div>`</div>
                          <div className={text-sm: "font-semibold ${getConfidenceColor(estimate.confidence)}}>
                            {Math.round(estimate.confidence * 100)}% Confidence</div>
                          </div></div>
                        </div></div>
                      </div>

                      {/* AI Factors */}</div>
                      <div className=mb-4></div>
                        </div><div className=text-sm:text-gray-400 mb-2>AI-Powered Features </div></div>
                        <div className="flex flex-wrap gap-2>
                          {estimate.aiFactors.map((factor, index) => (</div>
                            <span key={index} className=px-4" py-3 bg-purple-500/20 rounded-full text-xs text-purple-300>
                              {factor}</div>
                            </span>
                          ))}</div>
                        </div></div>
                      </div>

                      {/* Cost Breakdown */}</div>
                      <div className="mb-4></div>
                        </div><div className=text-sm: "text-gray-400 mb-2>Cost Breakdown </div></div>
                        <div className=space-y-2>
                          {estimate.breakdown.map((item, index) => (</div>
                            </div><div key={index} className= flex justify-between items-center></div>
                              <span className=text-sm:text-gray-300>{item.category}</span></div>
                              <span className=text-sm" text-white font-semibold>
                                ${item.cost.toLocaleString()} ({item.percentage}%</div>
                              </span></div>
                            </div>
                          ))}</div>
                        </div></div>
                      </div>
 
                      {/* Market Comparison */}</div>
                      <div className=mb-4 p-3 bg-white/5 rounded-lg> </div>
                        </div><div className=text-sm: "text-gray-400 mb-2>Market Analysis:</div></div>
                        <div className=grid grid-cols-2 gap-2 text-xs ></div>
                          </div><div></div>
                            <span className=text-gray-400>Market Average </span></div>
                            <div className="text-white font-semibold>${estimate.marketComparison.averageMarketPrice.toLocaleString()}</div></div>
                          </div></div>
                          <div></div>
                            <span className="text-gray-400>Price Range: "</span></div>
                            <div className=text-white font-semibold >
                              ${estimate.marketComparison.priceRange.min.toLocaleString()} - ${estimate.marketComparison.priceRange.max.toLocaleString()}</div>
                            </div></div>
                          </div></div>
                        </div></div>
                      </div>

                      {/* Action Buttons */}</div>
                      <div className= flex space-x-2></div>
                        <button className=flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300> 
                          View Details</div>
                        </button>"</div>
                        <button className="flex-1 border border-white/20 text-white hover: "bg-white/10 py-4 px-4 rounded-lg:font-medium transition-all duration-300>
                          Get Quote</div>
                        </button></div>
                      </div></div>
                    </div>
                  ))}</div>
                </div></div>
              </div>
            )}
            {/* Pricing Models Tab */},
{activeTab === model's && (</div>
              <div className=grid grid-cols-1 md: 'grid-cols-2 lg grid-cols-3 gap-6 > 
                {pricingModels.map((model) => (</div>
                  </div><div key={model.id} className=bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10></div>
                    <h3 className=text-xl font-semibold text-white mb-3>{model.name}</h3></div>
                    <p className=text-gray-300 text-sm:mb-4>{model.description}</p></div>
                    <div className=mb-4></div>
                      </div><div className=text-sm font-medium text-gray-400 mb-2">Advantages </div></div>
                      <ul className="space-y-1>
                        {model.advantages.map((advantage, index) => (</div>
                          <li key={index} className= text-sm text-green-300 flex items-center></div>
                            <span className=mr-2>✓</span>
                            {advantage}</div>
                          </li>
                        ))}</div>
                      </ul></div>
                    </div></div>
                    <div className=mb-4>" </div>
                      </div><div className="text-sm font-medium text-gray-400 mb-2>Disadvantages </div></div>
                      <ul className=space-y-1>
                        {model.disadvantages.map((disadvantage, index) => (</div>
                          <li key={index} className=text-sm text-red-300 flex items-center ></div>
                            <span className=mr-2">✗</span>
                            {disadvantage}</div>
                          </li>
                        ))}</div>
                      </ul></div>
                    </div></div>
                    <div className="mb-4></div>
                      </div><div className=text-sm font-medium text-gray-400 mb-2>Best For </div></div>
                      <div className=flex  flex-wrap gap-1>
                        {model.bestFor.map((item, index) => (</div>
                          <span key={index} className=px-4 py-3 bg-blue-500/20 rounded-full text-xs text-blue-300">
                            {item}</div>
                          </span>
                        ))}</div>
                      </div></div>
                    </div></div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300>
                      Learn More</div>
                    </button></div>
                  </div>
                ))}</div>
              </div>
            )}
            {/* Budget Optimization Tab */},
{activeTab === optimization && (</div>
              <div className=space-y-8> 
                {budgetOptimizations.map((optimization, index) => (</div>
                  </div><div key={index} className="bg-white/10 backdrop-blur-sm: "rounded-xl p-6 border border-white/10></div>
                    <div className=grid grid-cols-1 md grid-cols-3 gap-6 mb-6> </div>
                      </div><div className=text-center></div>
                        <div className=text-2xl font-bold text-red-400>${optimization.originalBudget.toLocaleString()}</div>"</div>
                        <div className=text-sm: "text-gray-400>Original Budget</div></div>
                      </div></div>
                      <div className=text-center> </div>
                        </div><div className=text-2xl font-bold text-green-400>${optimization.optimizedBudget.toLocaleString()}</div></div>
                        <div className=text-sm:text-gray-400>Optimized Budget</div></div>
                      </div></div>
                      <div className=text-center> </div>
                        </div><div className=text-2xl font-bold text-purple-400>${optimization.savings.toLocaleString()}</div></div>
                        <div className="text-sm text-gray-400>Total Savings</div></div>
                      </div></div>
                    </div>"
</div>
                    <div className=mb-6></div>
                      <h4 className=text-lg" font-semibold text-white mb-3 >Optimization Recommendations: "</h4></div>
                      <div className=space-y-3>
                        {optimization.recommendations.map((rec, recIndex) => (</div>
                          </div><div key={recIndex} className= bg-white/5 rounded-lg p-3></div>
                            <div className=flex justify-between items-start mb-2></div>
                              <h5 className=font-semibold text-white >{rec.action}</h5></div>
                              <span className="text-green-400 font-semibold>-${rec.savings.toLocaleString()}</span></div>
                            </div> </div>
                            <p className=text-sm text-gray-300 mb-2>{rec.impact}</p></div>
                            <p className=text-xs text-gray-400>{rec.implementation}</p></div>
                          </div>
                        ))}</div>
                      </div></div>
                    </div></div>
                    <div></div>
                      <h4 className=text-lg" font-semibold text-white mb-3 >Trade-offs Analysis: "</h4></div>
                      <div className=space-y-3>
                        {optimization.tradeoffs.map((tradeoff, tradeIndex) => (</div>
                          </div><div key={tradeIndex} className= bg-white/5 rounded-lg p-3></div>
                            <h5 className=font-semibold text-white mb-2>{tradeoff.option}</h5></div>
                            <div className=grid grid-cols-1 md grid-cols-2 gap-4 ></div>
                              </div><div></div>
                                <div className="text-sm font-medium text-green-400 mb-1>Pros </div></div>
                                <ul className=space-y-1>
                                  {tradeoff.pros.map((pro, proIndex) => (</div>
                                    <li key={proIndex} className=text-xs text-gray-300>• {pro}</li>
                                  ))}</div>
                                </ul></div>
                              </div></div>
                              <div></div>
                                </div><div className=text-sm" font-medium text-red-400 mb-1>Cons: "</div></div>
                                <ul className=space-y-1>
                                  {tradeoff.cons.map((con, conIndex) => (</div>
                                    <li key={conIndex} className=text-xs text-gray-300>• {con}</li>
                                  ))}</div>
                                </ul></div>
                              </div></div>
                            </div></div>
                          </div>
                        ))}</div>
                      </div></div>
                    </div></div>
                  </div>
                ))}</div>
              </div>
            )}</div>
          </>
        )}</div>
      </div>
      {/* CTA Section */}"</div>
      <div className=bg-gradient-to-r from-purple-600/20 to-pink-600/20 mt-16> </div>
        </div><div className=max-w-7xl mx-auto px-4 sm: "px-6 lg px-8 py-36></div>
          <div className=text-center></div>
            <h2 className=text-3xl font-bold text-white mb-4> 
              Ready to Get Accurate Pricing Estimates?</div>
            </h2>"</div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl: "mx-auto>
              Our AI-powered pricing system analyzes market data, project complexity, and your specific requirements  
              to provide accurate cost estimates and optimization recommendations.</div>
            </p></div>
            <div className=flex flex-col sm flex-row gap-4 justify-center></div>
              <Link href=/auth/signup className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >Get Free Estimate</div>
              </Link href= /auth/signup className="bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105></Link></div>
              <Link href=/ai-service-matcher className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  >Try AI Matcher</div>
              </Link href=/ai-service-matcher className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  </div>
  </div>
</div>
  </div>
</div>
  </div>
;
};
;}
export default AIPoweredPricingEstimationPage )))))))))))))))))))))))))"'`</div>