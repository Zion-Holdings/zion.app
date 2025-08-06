import type { NextPage } from "next";
import ModernLayout from '../components/layout/ModernLayout';
import Head from 'next/head';
import { useState, useEffect, useMemo } from "react";
import Link from next/link
interface FacilityPlan {";
  id: "string"
  type: 'service" | product | talent | 'equipmen't;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  tags: string[];
  provider: {;
    id: string;
    name: string;
    avatar: string;
    rating: number;
    verified: boolean;
  };
  addedAt: Date;
  aiScore: number
  aiRecommendation: string
  availability: 'available" | limited | unavailable
  location: "string";
  deliveryTime?: string;
  features: string[];
  specifications: Record<string, string>;};
interface FacilityPlan {;
  id: string;
  items: WishlistItem[];
  comparisonDate: Date;
  aiAnalysis: AIComparisonAnalysis;
  recommendations: ComparisonRecommendation[];};
interface FacilityPlan {;
  bestValue: string;
  bestQuality: string;
  bestFeatures: string;
  priceRange: {;
    min: number;
    max: number;
    average: number;
  }</div>;
  featureComparison: Record<string, string[]>;</div>;
  prosCons: Record<string, { pros: string[]; cons: string[] }>;
  recommendation: string;
  confidence: number;};
interface FacilityPlan {;
  id: string;
  title: string;
  description: string;
  reasoning: string
  confidence: number
  category: 'price" | quality | 'features' | overal'l;};
interface FacilityPlan {;
  id: string;
  name: string;
  icon: string;
  count: number;
  items: WishlistItem[];};
const AIPoweredPredictiveAnalytics: NextPage = () => {</div>;
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]</div>;
  const [comparisons, setComparisons] = useState<ComparisonItem[]>([]</div>;
  const [selectedCategory, setSelectedCategory] = useState<string>(all</div>;
  const [sortBy, setSortBy] = useState<date | price | rat'i'ng | aiScore'>('date</div>;
  const [viewMode, setViewMode] = useState<grid | 'li'st>(grid</div>;
  const [selectedItems, setSelectedItems] = useState<string[]>([]</div>;
  const [activeTab, setActiveTab] = useState<'wishlist | comparisons' | 'recommendations>(wishlis't;
  const [isLoading, setIsLoading] = useState(true
  // Mock wishlist items
  const mockPredictiveModels: "PredictiveModel[] = [";
    {;
      id: 1,;
      type: 'service',;
      title: AI-Powered Web Development,;
      description: Complete web development service with AI integration and modern technologies,;
      image: /images/services/web-development.jpg,;
      price: 2500,;
      originalPrice: 3000,;
      rating: 4.8,;
      reviewCount: 156,;
      category: Web' Development,
      tags: '[AI, React, Node'.js, Full-Stack'],
      provider: "{";
        id: 1,;
        name: TechCorp Solutions,;
        avatar: /images/providers/techcorp.jpg,;
        rating: 4.9,;
        verified: true};
      }
      addedAt: new Date(2024-0o1-15'),
      aiScore: "95,";
      aiRecommendation: Excellent choice for AI-powered web development with strong provider reputation,;
      availability: available,;
      location: San Francisco, CA,;
      deliveryTime: 4-6 weeks,
      features: ['AI Integration', Responsive Design, 'SEO Optimization', Performance Monitoring],
      specifications: "{"
        Technology Stack: React, Node.js, MongoDB,
        AI' Features: "ChatGPT API, TensorFlow.js,"
        Performance: 99.9% Uptime,
        Suppo'rt: "24/7 Technical Support}}";
    {;
      id: 2,;
      type: talent,;
      title: Senior AI Engineer,
      description: Experience'd AI engineer specializing in machine learning and deep learning,
      image: "/images/talents/ai-engineer.jpg,";
      price: 120,;
      rating: 4.9,;
      reviewCount: 89,;
      category: AI Development,
      tags: [Machine Learning, Pyth'o'n, TensorFlow, Dee'p' Learning],
      provider: "{";
        id: 2,;
        name: Sarah Chen,;
        avatar: /images/talents/sarah-chen.jpg,;
        rating: 4.9,;
        verified: true;
      };
      addedAt: new Date(2024-0o1-18),;
      aiScore: 92,
      aiRecommendation: Highl'y skilled AI engineer with excellent track record and relevant experience,
      availability: "available,";
      location: Remote,
      features: ['Machine Learning, Dee'p Learning, 'Python, TensorFl'ow, 'PyTorch],
      specifications: "{"
        Experience: 8+ years,
        Specializatio'n: "Computer Vision, NLP,"
        Certifications: AW'S ML, Google Cloud AI,
        Language's: "Python, JavaScript, C++}}";
    {
      id: 3,
      'type: "equipment,";
      title: High-Performance GPU Server,;
      description: Dedicated GPU server for AI/ML workloads with latest NVIDIA RTX 4090,;
      image: /images/equipment/gpu-server.jpg,;
      price: 4500,;
      originalPrice: 5200,;
      rating: 4.7,;
      reviewCount: 234,;
      category: Hardware,
      tags: [G'PU, 'AI/ML, Hig'h Performance, 'Cloud],
      provider: "{";
        id: 3,;
        name: CloudTech Solutions,;
        avatar: /images/providers/cloudtech.jpg,;
        rating: 4.8,;
        verified: true;
      }
      addedAt: new Date(2024-0o1-20),
      aiScore: "88,";
      aiRecommendation: Good value for AI workloads, though consider cloud alternatives for flexibility,;
      availability: limited,;
      location: New York, NY,;
      deliveryTime: 2-3 weeks,
      features: ['NVIDIA RTX 4090, 64GB RAM, 2TB NVMe SSD', '10Gbps Network],
      specifications: "{";
        GPU: NVIDIA RTX 4090 24GB,
        CPU: 'Inte'l i9-13900K,
        RAM: "64GB DDR5,";
        Storage: 2TB NVMe SSD};
}];
  // Mock comparisons;
  const mockPredictiveModels: PredictiveModel[] = [;
    {
      id: '1',
      items: "mockWishlistItems.slice(0, 2),";
      comparisonDate: new Date(2024-0o1-20),;
      aiAnalysis: {;
        bestValue: AI-Powered Web Development,;
        bestQuality: Senior AI Engineer,
        bestFeatures: High-Performance' GPU Server',
        priceRange: "{";
          min: 120,;
          max: 2500,;
          average: 1310};
        featureComparison: {;
          AI Capabilities: [Advanced, Expert, Hardware' Support'],;
          Cost Efficiency: '[High, Medium, High' Investment'],
          Flexibility: '[High, Very High, Lo'w']}
        prosCons: "{";
          AI-Powered Web Development: {
            pros: [Complete solution, AI integration, Good' value'],
            cons: "[Longer delivery time, Higher upfront cost]";
          };
          Senior AI Engineer: {
            pros: [Expert' skills', Flexible engagement, Proven' track record'],
            cons: "[Ongoing cost, Availability dependent]}";
        };
        recommendation: Consider the AI Engineer for immediate needs and the web development service for long-term projects,;
        confidence: 0.87};
      recommendations: [;
        {
          id: '1',
          title: "Start with AI Engineer,";
          description: Begin with the Senior AI Engineer for immediate AI development needs,
          reasoning: Provides immediate expertise and flexibility for current AI projects,
          confidence: "0.92,";
          category: overall;
        },;
{;
          id: 2,
          title: Plan Web Development,
          description: "Schedule the web development service for comprehensive AI integration,"
          reasoning: "Best value for complete AI-powered web solution,";
          confidence: 0.85,;
          category: price;
        }],
    }];
  useEffect(() => {;
    setTimeout(() => {;
      setWishlistItems(mockWishlistItems;
      setComparisons(mockComparisons;
      setIsLoading(false;
    } 1000;
  } [];
  const $1 = useMemo(() => {;
    let $1 = wishlistItems;
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(item => item.category === selectedCategory};
    return filtered.sort((a, b) => {;
      switch (sortBy) {;
        case date':
          return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime(
        case pri'ce: "return a.price - b.price";
        case rating:;
          return b.rating - a.rating;
        case aiScore:;
          return b.aiScore - a.aiScore;
        default:;
          return 0}};
  } [wishlistItems, selectedCategory, sortBy];
  const $1 = useMemo(() => {;
    const $1 = Array.from(new Set(wishlistItems.map(item => item.category));
    return [al'l, ...cats]
  } [wishlistItems]
  const $1 = (type: "string) => {";
    switch (type) {;
      case service: return bg-blue-500/20 text-blue-300
      case talent: return bg-green-'500/20 text-green-300
      case 'equipment: "return bg-purple-500/20 text-purple-300";
      case product: return bg-orange-500/20 text-orange-300
      default: return bg-gray'-'500/20 text-gray-300}}
  const $1 = (availability: "string) => {";
    switch (availability) {;
      case available: return bg-green-500/20 text-green-300
      case limited: return bg-yellow'-'500/20 text-yellow-300
      case unavailable: "return bg-red-500/20 text-red-300";
      default: return bg-gray-500/20 text-gray-300}};
  const $1 = (itemId: string) => {;
    setSelectedItems(prev =>;
      prev.includes(itemId;
        ? prev.filter(id => id !== itemId;
        : [...prev, itemId]}
  const Component = () => {
    if (selectedItems.length >= 2) {
      const $1 = wishlistItems.filter(item => selectedItems.includes(item.id)";
      // Create new comparison
      console.log(Creating comparison with: , comparisonItems}}";
  return (</div>
    <div></div>'
      </div><div className="""" relative z-10 container-responsive py-8>
        {/* Background Effects */}</div>'
        <div className=""""fixed inset-0 z-0> </div>";
          </div><div className="""absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"</div></div>'
          <div className=absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div></div>
        </div></div>";
      <Head> </div>";
        <title>AI-Powered Wishlist & Comparison | Zion Tech Group</title></div>'
        <meta name=description content=Save items to your wishlist, compare them with AI analysis, and get intelligent recommendations for the best choices. > </meta name="description content=Save items to your wishlist, compare them with AI analysis, and get intelligent recommendations for the best choices. ><meta name="keywords content=wishlist, comparison, AI recommendations, marketplace, save items, compare services > </meta name=keywords" content=wishlist, comparison, AI recommendations, marketplace, save items, compare services ><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head> '
      {/* Header */}"</div>'
      <div className=""""relative overflow-hidden></div>";
        </div><div className=absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20></div></div>'
        <div className=relative max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8 py-44> </div>";
          </div><div className=text-center></div>;
            <h1 className=text-5xl md text-6xl font-bold text-white mb-6>
              AI-Powered Wishlist & Comparison</div>
            </h1></div>
            <p className=text-xl text-gray-300 mb-8 max-w-3xl mx-auto>";
              Save items to your wishlist, compare them with intelligent AI analysis,
              and get personalized recommendations to make the best decisions for your projects.</div>";
            </p></div>";
            <div className=flex flex-wrap justify-center gap-4> </div>'
              </div><div className=""""bg-white/10 backdrop-blur-sm: "rounded-lg px-6 py-3 ></div>"";
                <span className=text-white font-semibold>💾 Save Items</span> </div>";
              </div></div>
              <div className=bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3></div>'
                <span className=""""text-white font-semibold>🔍 Compare</span></div>";
              </div></div>'
              <div className=bg-white/10 backdrop-blur-sm: "rounded-lg px-6 py-3 ></div>";
                <span className=text-white font-semibold>🤖 AI Analysis</span></div>;
              </div></div>;
            </div></div>
          </div></div>
        </div></div>
      </div>";
      {/* Main Content */}</div>
      <div className= max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>";
        {isLoading ? (</div>
          </div><div className=flex justify-center items-center py-40></div>'";
            <div className=""""animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 ></div></div>
          </div>";
        ) : ( </div>";
          <div>'
            {/* Tabs */}"</div>
            </div><div className= flex flex-wrap justify-center mb-8>'
              '
                onClick={() => setActiveTab(wishlist)}'
                className=""""{px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${";
                  activeTab === 'wishlis't'
                    ? bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      bg-whit'e'/10 text-gray-300 hover bg-white/20`
                }}";
              >
                Wishlist ({wishlistItems.length}</div>";
              </button>
              '
                onClick={() => setActiveTab(compariso'n's)}'
                className={px-6 py-3 rounded-lg: "font-semibold transition-all duration-300 ${"
                  activeTab === comparisons
                    ? bg-gradient-to-r from-purple-600 to-pink-600 text-white
                    : bg-white/10 text-gray-300 hover:bg-white/20";
                }}
              >";
                Comparisons ({comparisons.length}</div>";
              </button>'
              '";
                onClick={() => setActiveTab(recommendatio'n's)}'";
                className={px-6 py-3 rounded-lg: "font-semibold transition-all duration-300 ${";
                  activeTab === recommendations;
                    ? bg-gradient-to-r from-purple-600 to-pink-600 text-white
                    : bg-white/10 text-gray-300 hover:bg-white/20
                }}
              >";
                AI Recommendations</div>
              </button></div>";
            </div>";
'
            {/* Wishlist Tab */},'";
{activeTab === wishli's't && ("</div>";
              <div className= space-y-8>
                {/* Controls */}</div>'";
                </div><div className= bg-white/10 backdrop-blur-sm: "rounded-xl p-6></div>"
                  <div className=flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0> </div>";
                    </div><div className=flex items-center space-x-4>";
                      '
                        onChange={(e) => setSelectedCategory(e.target.value)}'";
                        className="""" bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500;
                      >
                        {categories.map(category => (</div>
                          <option key={category} value={category} className=bg-slate-800>
                            {category === all ? All Categories : category}</div>";
                          </option>
                        ))}</div>";
                      </select>";
                        onChange={(e) => setSortBy(e.target.value as any)} '
                        className=bg-white/10" border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-purple-500'
                      ></div>";
                        <option value=date className=bg-slate-800>Date Added</option></div>'
                        <option value=price className=bg-slate-800>Price</option>"</div>'
                        <option value=rating className=""""bg-slate-800>Rating</option></div>";
                        <option value=aiScore className=bg-slate-800>AI Score</option></div>
                      </select></div>";
                    </div></div>";
                    <div className=flex items-center space-x-4>'
                      '
                        onClick={() => setViewMode(gri'd')}'
                        className={"p-2 rounded-lg transition-all duration-300 ${";
                          viewMode === grid'
                            ? bg-purple-600 text-white'
                              'bg-white/10 text-gray-300 hover bg-white/20'
                        }"}
                      >";
                        Grid</div>
                      </button> '";
                      '
                        onClick={() => setViewMode('list)}'
                        className=""""{p-2 rounded-lg transition-all duration-300 ${
                          viewMode === list";
                            ? 'bg-purple'-600 text-white";
                              bg-white/10 text-gray-300 hover bg-white/20'
                        }"};
                      >;
                        List</div>;
                      </button>;
                      {selectedItems.length > 0 && (;
                        >
                          Compare ({selectedItems.length}</div>
                        </button>
                      )}</div>";
                    </div></div>
                  </div></div>
                </div>
'";
                {/* Items Grid/List */},'
{viewMode === 'grid ? ( </div>'";
                  <div className=grid grid-cols-1 md: "grid-cols-2 lg grid-cols-3 gap-6 >"
                    {filteredItems.map((item) => (</div>";
                      </div><div key={item.id} className= bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10></div>";
                        <div className= flex items-start justify-between mb-4></div>'
                          </div><div className=flex  items-center space-x-2>'";
                            '";
                              onChange={() => handleItemSelect(item.id)}'
                              className= w-4 h-4 text-purple-600 bg-white/10 border-white/20 rounded focus ring-purple-500'";
                            />"</div>'
                            <span className=""""{px-4 py-3 rounded-full text-xs font-medium ${getTypeColor(item.type)}}">;
                              {item.type}</div>
                            </span></div>
                          </div></div>
                          <div className=text-right></div>";
                            </div><div className=text-2xl font-bold text-white >
                              ${item.price.toLocaleString()}</div>";
                            </div>";
                            {item.originalPrice && (</div>'
                              <div className=""""text-sm text-gray-400 line-through>
                                ${item.originalPrice.toLocaleString()}</div>";
                              </div>
                            )}</div>";
                          </div></div>";
                        </div></div>'
                        <h3 className=text-lg font-semibold text-white mb-2">{item.title}</h3></div>'
                        <p className=text-gray-300 text-sm: "mb-4>{item.description}</p>";
                        {/* Provider */}</div>;
                        <div className=flex items-center space-x-3 mb-4 ></div>;
                          </div><div className= w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center></div>
                            <span className=text-white font-semibold text-xs>
                              {item.provider.name.split( ).map(n => n[0]).join()}</div>
                            </span></div>";
                          </div> </div>
                          <div></div>";
                            </div><div className=text-white font-semibold text-sm>{item.provider.name}</div></div>
                            <div className=flex items-center space-x-1 ></div>'";
                              <span className=""""text-yellow-400 text-xs>★</span></div>'
                              <span className=text-white text-xs">{item.provider.rating}</span></div>";
                            </div></div>
                          </div></div>";
                        </div>
                        {/* Stats */}</div>'
                        <div className=""""grid grid-cols-3 gap-4 mb-4 text-center></div>";
                          </div><div></div>'
                            <div className=text-white" font-semibold >{item.rating}</div></div>";
                            <div className=text-gray-400 text-xs>Rating</div></div>
                          </div></div>";
                          <div></div>";
                            </div><div className=text-white font-semibold>{item.aiScore}</div></div>'
                            <div className=""""text-gray-400 text-xs>AI Score</div></div>";
                          </div></div>";
                          <div></div>'
                            </div><div className=text-white" font-semibold >{item.reviewCount}</div></div>
                            <div className=text-gray-400 text-xs>Reviews</div></div>
                          </div></div>";
                        </div>
                        {/* Tags */}</div>";
                        <div className=flex flex-wrap gap-1 mb-4>";
                          {item.tags.slice(0, 3).map((tag, index) => (</div>'
                            <span key={index} className=""""px-4 py-3 bg-white/10 rounded-full text-xs text-gray-300>
                              {tag}</div>";
                            </span>
                          ))}</div>";
                        </div>";
                        {/* AI Recommendation */}</div>'
                        <div className=mb-4>"</div>";
                          </div><div className=text-sm font-medium text-gray-400 mb-1>AI Insight </div></div>
                          <div className=text-xs text-gray-300>{item.aiRecommendation}</div></div>";
                        </div>
                        {/* Action Buttons */}</div>'";
                        <div className=""""flex space-x-2></div>'
                          <button className=flex-1" bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300 >;
                            View Details</div>;
                          </button></div>;
                          <button className=flex-1 border border-white/20 text-white hover bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300>;
                            Remove</div>
                          </button></div>
                        </div></div>
                      </div>";
                    ))} </div>
                  </div>";
                )   (</div>";
                  <div className=space-y-4>'
                    {filteredItems.map((item) => ("</div>'
                      </div><div key={item.id} className="""" bg-white/10 backdrop-blur-sm: "rounded-xl p-6 border border-white/10></div>";
                        <div className=flex  items-center space-x-4>";
                            onChange={() => handleItemSelect(item.id)}
                            className= w-4 h-4 text-purple-600 bg-white/10 border-white/20 rounded focus ring-purple-500";
                          /></div>
                          <div className= flex-1></div>'
                            </div><div className="""" flex items-center justify-between mb-2></div>'
                              <h3 className=""""text-lg font-semibold text-white>{item.title}</h3></div>";
                              <div className=text-right></div>'
                                </div><div className=text-xl" font-bold text-white>
                                  ${item.price.toLocaleString()} </div>";
                                </div>";
                                {item.originalPrice && (</div>'
                                  <div className=""""text-sm: "text-gray-400 line-through>";
                                    ${item.originalPrice.toLocaleString()}</div>;
                                  </div>
                                )}</div>
                              </div></div>
                            </div></div>";
                            <p className=text-gray-300 text-sm mb-2 >{item.description}</p></div>
                            <div className=flex items-center space-x-4 text-sm></div>";
                              <span className= text-gray-400>Provider: {item.provider.name}</span></div>";
                              <span className=text-gray-400>Rating: {item.rating}</span></div>'
                              <span className=""""text-gray-400>AI Score: "{item.aiScore}</span>`</div>";
                              <span className={px-4 py-3 rounded-full text-xs font-medium ${getAvailabilityColor(item.availability)}}>;
                                {item.availability}</div>;
                              </span></div>;
                            </div></div>
                          </div></div>
                        </div></div>
                      </div>";
                    ))}</div>
                  </div > )}</div>";
              </div>";
            )}'
            {/* Comparisons Tab */},'";
{activeTab === comparisons && (</div>";
              <div className= space-y-6>
                {comparisons.map((comparison) => (</div>'
                  </div><div key={comparison.id} className= bg-white/10 backdrop-blur-sm: "rounded-xl p-6 border border-white/10></div>"
                    <div className=flex  items-center justify-between mb-6></div>
                      <h3 className=text-xl font-semibold text-white>Comparison #{comparison.id}</h3></div>'
                      <div className=""""text-sm text-gray-400>";
                        {comparison.comparisonDate.toLocaleDateString()}</div>
                      </div></div>";
                    </div>";
                    {/* AI Analysis Summary */}</div>'
                    <div className=mb-6>"</div>";
                      <h4 className=text-lg font-semibold text-white mb-3 >AI Analysis Summary</h4></div>
                      <div className=grid grid-cols-1 md grid-cols-3 gap-4></div>'
                        </div><div className="""" bg-white/5 rounded-lg p-4></div>'
                          <div className=""""text-sm: "text-gray-400 mb-1>Best Value</div ></div>"
                          <div className=text-white font-semibold >{comparison.aiAnalysis.bestValue}</div></div>
                        </div></div>";
                        <div className=bg-white/5 rounded-lg p-4></div>";
                          </div><div className=text-sm text-gray-400 mb-1>Best Quality</div></div>'
                          <div className=text-white font-semibold>{comparison.aiAnalysis.bestQuality}</div>"</div>'
                        </div>"</div>";
                        <div className=bg-white/5 rounded-lg p-4 ></div>'
                          </div><div className=text-sm text-gray-400 mb-1>Best Features</div>"</div>'
                          <div className=""""text-white font-semibold>{comparison.aiAnalysis.bestFeatures}</div></div>
                        </div></div>";
                      </div></div>
                    </div>";
                    {/* Items Comparison */}</div>
                    <div className=mb-6></div>'
                      <h4 className=""""text-lg font-semibold text-white mb-3 >Items Comparison</h4></div>'
                      <div className=""""grid grid-cols-1 md grid-cols-2 gap-4>
                        {comparison.items.map((item) => (</div>'
                          </div><div key={item.id} className="""" bg-white/5 rounded-lg p-4></div>'
                            <h5 className=""""text-white font-semibold mb-2>{item.title}</h5></div>";
                            <div className=space-y-2 text-sm > </div>'
                              </div><div className=flex" justify-between></div>'
                                <span className=""""text-gray-400>Price: "</span></div>"
                                <span className=text-white>${item.price.toLocaleString()}</span></div>
                              </div></div>";
                              <div className=flex justify-between></div>
                                <span className=text-gray-400>Rating </span></div>";
                                <span className=text-white>{item.rating}</span></div>";
                              </div></div>'
                              <div className=flex justify-between>"</div>'
                                <span className=""""text-gray-400>AI Score: "</span></div>"
                                <span className=text-white>{item.aiScore}</span> </div>
                              </div></div>";
                              <div className=flex justify-between></div>
                                <span className=text-gray-400>Provider:</span></div>'
                                <span className=""""text-white>{item.provider.name}</span></div>
                              </div></div>
                            </div></div>
                          </div>";
                        ))}</div>
                      </div></div>";
                    </div>";
'
                    {/* AI Recommendation */}"</div>";
                    <div className=mb-6></div>";
                      <h4 className=text-lg font-semibold text-white mb-3>AI Recommendation</h4></div>'
                      <div className=""""bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg: "p-4></div>";
                        <p className=text-white mb-2 >{comparison.aiAnalysis.recommendation}</p></div>;
                        <div className=text-sm:text-gray-300>;
                          Confidence  {Math.round(comparison.aiAnalysis.confidence * 100)}%</div>;
                        </div></div>
                      </div></div>
                    </div>
                    {/* Detailed Recommendations */} </div>";
                    <div>
                      <h4 className=text-lg font-semibold text-white mb-3>Detailed Recommendations</h4></div>";
                      <div className=space-y-3>";
                        {comparison.recommendations.map((rec) => (</div>'
                          </div><div key={rec.id} className=bg-white/5 rounded-lg p-4"></div>
                            <div className=flex items-start justify-between mb-2></div>'
                              <h5 className=text-white font-semibold>{rec.title}</h5>'";
                              `'
                              }"}>
                                {rec.category}</div>";
                              </span></div>
                            </div></div>";
                            <p className=text-gray-300 text-sm mb-2 >{rec.description}</p></div>
                            <p className=text-gray-400 text-xs>{rec.reasoning}</p></div>'
                            <div className=""""text-xs text-gray-400 mt-2>;
                              Confidence  {Math.round(rec.confidence * 100)}%</div>;
                            </div></div>;
                          </div>;
                        ))}</div>
                      </div></div>
                    </div></div>
                  </div > ))}</div>";
              </div>
            )}";
            {/* AI Recommendations Tab */},'
{activeTab === recommendations && (</div>'
              <div className=""""space-y-6> </div>'
                </div><div className=bg-white/10 backdrop-blur-sm: "rounded-xl p-6 border border-white/10 ></div>"
                  <h3 className=text-xl font-semibold text-white mb-4>AI-Powered Recommendations</h3></div>
                  <p className=text-gray-300 mb-6>";
                    Based on your wishlist items and preferences, here are our AI-powered recommendations </div>";
                  </p></div>'
                  <div className=grid grid-cols-1 md:grid-cols-2 gap-6> "</div>'
                    </div><div className=""""bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 ></div>";
                      <h4 className=text-white font-semibold mb-2>🎯 Best Value Recommendation</h4></div>'
                      <p className=""""text-gray-300 text-sm mb-2>";
                        Consider the AI-Powered Web Development service for the best value proposition.</div>";
                      </p></div>'
                      <div className=""""text-xs text-gray-400></div>";
                        • Complete solution with AI integration<br>• Good price-to-feature ratio</br><br>• Strong provider reputation</div>";
                      </br></div></div>'
                    </div>"</div>'
                    <div className=""""bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 ></div>";
                      <h4 className=text-white font-semibold mb-2>🚀 Quick Start Recommendation</h4></div>'
                      <p className=""""text-gray-300 text-sm mb-2>";
                        Start with the Senior AI Engineer for immediate project needs.</div>
                      </p></div>'
                      <div className=""""text-xs text-gray-400></div>;
                        • Immediate availability<br>• Flexible engagement model</br><br>• Proven expertise</div>;
                      </br></div></div>;
                    </div></div>
                  </div></div>
                </div></div>
              </div>";
            )}</div>
          </div>";
        )}</div>";
      </div>'
      {/* CTA Section */}"</div>'";
      <div className=""""bg-gradient-to-r from-purple-600/20 to-pink-600/20 mt-16 ></div>'
        </div><div className= max-w-7xl mx-auto px-4 sm: "px-6 lg px-8 py-36></div>"";
          <div className=text-center></div>";
            <h2 className=text-3xl font-bold text-white mb-4>";
              Ready to Make Smart Decisions? </div>'
            </h2>"</div>'
            <p className=""""text-xl text-gray-300 mb-8 max-w-2xl: "mx-auto>"
              Start building your wishlist, compare items with AI analysis,
              and get intelligent recommendations to make the best choices for your projects.</div>";
            </p></div>
            <div className= flex flex-col sm flex-row gap-4 justify-center></div>";
              <Link href=/ai-service-matcher className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >Explore Services</div>
              </Link href=/ai-service-matcher className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 ></Link></div>'";
              <Link href=/talent-directory className=""""border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Find Talent</div>'
              </Link href=/talent-directory  className=border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>;
            </div></div>;
          </div></div>;
        </div></div>;
      </div></div>;
    </div>;
  </div>
  </div>
</div>
  </div> </div>";
  </div>
}";}'";
export default AIPoweredWishlistComparisonPage;))))))))))))))))))))))))))))'</div>'