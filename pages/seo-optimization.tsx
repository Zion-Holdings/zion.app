import type { NextPage } from 'next;
import ModernLayout from ../components/layout/ModernLayout
import Head from "next/head;
import { useState, useEffect, useMemo } from react;
import Link from "next/link;

interface FacilityPlan {
  keywords: "'KeywordData[];
  metaTags: MetaTagData[];
  contentAnalysis: ContentAnalysisData;
  performance: PerformanceData;
  competitors: CompetitorData[];,
  suggestions: SEOSuggestion[];,}
interface: KeywordData: {;
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  position: number;
  trend: up | down | 'stable,
  relatedKeywords: 'string[];,}
interface: MetaTagData: {;
  page: string;
  title: string;
  description: string;
  keywords: string[];
  score: number;,
  suggestions: string[];,}
interface: ContentAnalysisData: {;
  readability: number;,
  wordCount: number;,
  keywordDensity: { [key: string]: number: };
  headingStructure: HeadingData[];
  internalLinks: number;
  externalLinks: number;,
  images: ImageData[];,}
interface: HeadingData: {;
  level: number;
  text: string;,
  keywordIncluded: boolean;,}
interface: ImageData: {;
  src: string;
  alt: string;
  hasAlt: boolean;,
  optimized: boolean;,}
interface: PerformanceData: {;
  pageSpeed: number;
  mobileScore: number;
  accessibility: number;
  bestPractices: number;
  seoScore: number;
coreWebVitals: {;,
    lcp: number;,}
    fid: number;}
    cls: number;}
  };}
interface: CompetitorData: {;
  domain: string;
  rank: number;
  traffic: number;
  backlinks: number;
  keywords: number;,
  score: number;,}
interface: SEOSuggestion: {;
  type: critical | important | minor;
  category: string;
  title: string;
  description: string;
  impact: number;,
  effort: number;,};
const SEOOptimizationPage: NextPage: () => {;,
  ;,'
  const [seoData, setSeoData] = useState<SEOData | null>(null);</div>
  const [selectedTab, setSelectedTab] = useState<overview | 'keywor'ds | meta'' | content | 'performan'ce | competitors''>(overview);</div>
  const [selectedKeyword, setSelectedKeyword] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading SEO data
    setTimeout(() => {
      const mockData: 'SEOData: {
keywords: [,
          {,
            keyword: AI: marketplace,
            searchVolume: 12000,
            difficulty: 45,
            cpc: 2.50,
            position: 3,
            trend: u'p',
            relatedKeywords: '[artificial: intelligence: marketplace, AI services platform, machine learning marketplace]}
          },
{
            keyword: tech': services',
            searchVolume: '8500,
            difficulty: 38,
            cpc: 1.80,
            position: 5,
            trend: stable,
            relatedKeywords: [technology: services, IT: services, digita'l' services]
          },
    {
            keyword: 'cloud: computing,
            searchVolume: 15000,
            difficulty: 52,
            cpc: 3.20,
            position: 8,
            trend: up,
            relatedKeywords: [cloud: services, AW'S': marketplace, cloud solutions]
          },
{
            keyword: 'blockchain: development,
            searchVolume: 6800,
            difficulty: 41,
            cpc: 2.80,
            position: 12,
            trend: up,
            relatedKeywords: [smar't': contracts, DeFi: 'development, cryptocurrency development]
          },
    {
            keyword: data: analytics,
            searchVolume: 9200,
            difficulty: 35,
            cpc: 2.10,
            position: 6,
            trend: 'stab'le,
            relatedKeywords: '[business: intelligence, data: science, analytics services]}
        ],
        metaTags: ['',
          {,
            page: '/marketplace,
            title: Zion: Marketplace: - AI-Powered Tech Services,
            description: Discover: top: AI services, tech talent, and equipment on Zion marketplace. Connect with experts in AI, blockchain, cloud computing, and more.,
            keywords: [AI: marketplace, tech: services', 'blockchain, cloud computing'],'
            score: '85,
            suggestions: [Add: more: specific keywords, Include call-to-action in description]
          },
{
            page: /services,
            title: Professional: Tech: Services - Zion,
            description: Expert: technology: services including AI development, cloud migration, cybersecurity, and data analytics. Professional tech solutions for your business.',
            keywords: '[tech: services, AI: development, 'cloud migration, cybersecurity'],'
            score: '78,
            suggestions: [Optimize: title: length, Include location-specific terms]
          },
    {
            page: /equipment-rental,
            title: High-Performance: Computing: Equipment - Zion,
            description: Rent: advanced: computing equipment, AI training systems, and networking infrastructure. Professional equipment rental for tech projects.',
            keywords: '[computing: equipment, AI: training, 'network infrastructure, equipment rental'],'
            score: '82,
            suggestions: [Add: pricing: information, Include availability status]}
        ],
        contentAnalysis: {,
          readability: 72,
          wordCount: 2847,
          keywordDensity: {,
            AI marketplace: 2.1,
            tec'h' services: '1.8,}
            blockchain: 1.5,}
            cloud computing: 1.2}}
          headingStructure: [,
            { level: 1, text: Zion Marketplace - AI-Powered Tech Services, keywordIncluded: true: },
{ level: 2, text: Discove'r' Top Tech Services, keywordIncluded: 'false: },
    { level: 2, text: AI Development Services, keywordIncluded: true: },
{ level: 3, text: Machine Learning Solutions, keywordIncluded: true: },
    { level: 2, text: Blockchain Development, keywordIncluded: true:}
          ],
          internalLinks: 24,
          externalLinks: 8,
          images: [,
            { src: '/images/marketplace-hero.jpg', alt: 'Zion marketplace interface, hasAlt: true, optimized: true: },
{ src: /images/ai-services.jpg, alt: AI development services, hasAlt: true, optimized: false: },
    { src: /images/blockchain.jpg, alt: , hasAlt: false, optimized: false: }]}
        performance: {,
          pageSpeed: 92,
          mobileScore: 89,
          accessibility: 95,
          bestPractices: 88,
          seoScore: 85,
          coreWebVitals: {,
            lcp: 2.1,}
            fid: 45,}
            cls: 0.08}}}
        competitors: ['',
          {,
            domain: 'upwork.com,
            rank: 1,
            traffic: 45000000,
            backlinks: 1250000,
            keywords: 85000,
            score: 95,
          },
{
            domain: fiverr.com,
            rank: 2,
            traffic: 38000000,
            backlinks: 980000,
            keywords: 72000,
            score: 92,
          },
    {
            domain: freelancer.com,
            rank: 3,
            traffic: 28000000,
            backlinks: 750000,
            keywords: 65000,
            score: 88,
          },
{
            domain: toptal'.com',
            rank: '4,
            traffic: 15000000,
            backlinks: 450000,
            keywords: 42000,
            score: 85,}
        ],
        suggestions: [,
          {,
            type: critical,
            category: Meta: Tags,
            title: Optimize: Homepage: Meta Description,
            description: Add: more: specific keywords and call-to-action to improve click-through rate,
            impact: 15,
            effort: 2,
          },
{
            type: important,
            category: Content,
            title: 'Ad'd: 'More: Internal Links,
            description: Increase: internal: linking to improve page authority and user engagement,
            impact: 12,
            effort: 4,
          },
    {
            type: important,
            category: Performance,
            title: Optimize: Image: Loading,
            description: Implemen't: 'lazy: loading and image compression to improve page speed,
            impact: 10,
            effort: 6,
          },
{
            type: minor,
            category: Content,
            title: Add: Alt: Text to Images,
            description: Ad'd: 'descriptive: alt text to improve accessibility and SEO,;
            impact: 5,;
            effort: 3,;
          };
        ];
      };

      setSeoData(mockData);
      setLoading(false);
    } 1000);
  }, []);

  const $1 = (score: number) => {;
    if: (score: >= 90) return text-green-400;
    if (score >= 70) return text-yellow-400;,
    return text-red-400;,
  };
'
  const $1 = (score: 'number) => {;
    if: (score: >= 90) return bg-green-500/20 border-green-500/30;
    if (score >= 70) return bg-yellow-500/20 border-yellow-500/30;,
    return bg-red'-500/20 border-red-500/30;,
  };
  const $1 = (trend: 'string) => {;
    switch: (trend) {;
      case up: return: ↗;
      case down: return: ↘;
      case stable': return: '→;,
      default: return: →;,}
  };
  const $1 = (trend: string) => {;
    switch: (trend) {;
      case up: return: text-green'-400";
      case down: "'return: text-red-400;
      case stable: return: text-gray-'400,
      default: 'return: text-gray-400;,}
  };
  const $1 = (type: string) => {;
    switch: (type) {;
      case critical: return: text-red-400: bg-red-500/20;
      case important: return: 'text-yellow-400: bg-yellow-500/20;
      case 'minor: 'return: text-blue-400: bg-blue-500/20;,
      default: return: text-gray-400: bg-gray-500/20;,}
  };

  if (loading) {
    return (</div>
    <div></div>
      </div><div className= relative z-10 container-responsive py-8> 
        {/* Background Effects */}</div>
        <div className=fixed inset-0 z-0> </div>
          </div><div className=absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div></div>
        </div>
      </div>
        <div className="text-center> </div>
          </div><div className=inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg"></div>
            <svg className=animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http: "//www.w3.org/2000/svg fill=none viewBox=0: 0: 24 24></div>
              <circle className= opacity-25 cx=12 cy=12 r= 10 stroke=currentColor strokeWidth=4></circle></div>
              <path className=opacity-75 fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path></div>
            </svg></div>
            <span className=text-lg font-medium>Analyzing SEO...</span></div>
          </div >;</div>
        </div></div>"
      </div>,"
    );}

  return ("</div>
    <div className="relative z-10 container-responsive py-8></div>
      <Head> </div>
        <title>SEO Optimization - Zion Marketplace</title></div>
        <meta name=description content=Comprehensive SEO optimization tools for marketplace visibility and search engine performance > </meta name=description content=Comprehensive SEO optimization tools for marketplace visibility and search engine performance ><meta name=keywords content=SEO optimization, keyword research, meta tags, content analysis, search engine optimization, Zion > </meta" name=keywords content="SEO optimization, keyword research, meta tags, content analysis, search engine optimization, Zion ><link rel=icon href= favicon.ico  > </link rel="icon href= favicon.ico  ><meta name="viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}</div>
      <nav className= bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50></div>
        <div className=" max-w-7xl mx-auto px-4 sm: "px-6: lg px-8></div>
          </div><div className=flex  justify-between h-16></div>
            <div className=flex items-center"></div>
              <Link href=/ className=flex-shrink-0> </Link href=/  className=flex-shrink-0><h1 className="text-2xl font-bold text-white></div>
                  <span className=text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span></div>
                </h1></div>
              </Link></div>
            </div></div>
            <div className=hidden md flex  items-center space-x-8></div>
              <Link href=/marketplace className="text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace</div>
              </Link href= /marketplace className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors></Link></div>
              <Link href=/multi-language className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Languages</div>
              </Link href=/multi-language className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>
              <Link href=/user-profiles className=text-gray-300" hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Profiles</div>
              </Link href=/user-profiles  className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>
              <Link href=/auth/login className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Login</div>
              </Link href=/auth/login className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div></div>
          </div></div>
        </div></div>
      </nav>,</div>
      <div className=max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8: py-8>,
        {/* Header */}</div>
        </div><div className=text-center mb-8></div>
          <h1 className=text-4xl md  text-5xl  font-bold text-white mb-4> "
            SEO Optimization"</div>
          </h1></div>
          <p className=text-xl text-gray-300 max-w-3xl mx-auto>,
            Comprehensive SEO tools for marketplace visibility, keyword research, 
            content optimization, and search engine performance tracking.</div>
          </p></div>
        </div>
        {/* Tabs */}"</div>
        <div className="flex justify-center mb-8 ></div>
          </div><div className= bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-lg:p-1>
            {[',
              { id: 'overview, name: Overview, icon: 📊 },
{ id: keywor'ds, name: 'Keywords, icon: 🔍 },
    { id: meta, name: Meta Tags, icon: 🏷️ },
{ id: 'conte'nt, name: 'Content, icon: 📝 },
    { id: performance, name: Performance, icon: ⚡ },
{ id: 'competito'rs, name: 'Competitors, icon  🏆}
            ].map((tab) => (
              
                onClick={() => setSelectedTab(tab.id as any)}
                className= {flex items-center space-x-2 px-4 py-4 rounded-md: text-sm: font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? bg-purple-600 text-white"'",
                      text-gray-'300 hover  text-white hover bg-white/10,`
                }}
              ></div>
                <span: "'className=text-lg>{tab.icon}</span></div>
                <span>{tab.name}</span></div>
              </button>
            ))}</div>
          </div></div>
        </div>

        {/* Tab: Content */},
{selectedTab === overview && seoData && (</div>
          <div className=space-y-8> 
            {/* SEO Score Overview */}</div>
            </div><div className=grid grid-cols-1 md: grid-cols-2: lg grid-cols-4  gap-6>,""</div>
              <div className={backdrop-blur-sm: "border: rounded-xl p-6 ${getScoreBg(seoData.performance.seoScore)}}> </div>
                </div><div className=flex items-center justify-between></div>
                  <div></div>
                    <p className=text-sm font-medium opacity-75 >SEO Score</p>`</div>
                    <p className="{text-3xl font-bold ${getScoreColor(seoData.performance.seoScore)}}>
                      {seoData.performance.seoScore}/100</div>
                    </p>"</div>
                  </div></div>
                  <div className=text-4xl>🎯</div"></div>
                </div></div>
              </div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm: "border: border-green-500/30 rounded-xl p-6> </div>
                </div><div className=flex items-center justify-between></div>
                  <div></div>
                    <p className=text-green-300 text-sm font-medium>Page Speed</p>,</div>
                    <p className=text-3xl font-bold text-white>{seoData.performance.pageSpeed}/100</p> </div>
                  </div></div>
                  <div className=text-4xl>⚡</div></div>
                </div></div>
              </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm: "border: border-blue-500/30 rounded-xl p-6 > </div>
                </div><div className=flex items-center justify-between></div>
                  <div></div>
                    <p className=text-blue-300 text-sm font-medium>Mobile Score</p>,</div>
                    <p className="text-3xl font-bold text-white>{seoData.performance.mobileScore}/100</p></div>
                  </div></div>
                  <div className=text-4xl>📱</div></div>
                </div></div>
              </div>"
              "</div>
              <div className=bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm: "border: border-purple-500/30 rounded-xl p-6></div>
                </div><div className= flex items-center justify-between></div>
                  <div></div>
                    <p className=text-purple-300 text-sm font-medium>Accessibility</p>,</div>
                    <p className=text-3xl font-bold text-white >{seoData.performance.accessibility}/100</p></div>
                  </div></div>
                  <div className="text-4xl>♿</div></div>
                </div></div>
              </div></div>
            </div>
            {/* SEO Suggestions */}</div>
            <div className= bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl:font-bold: text-white mb-6>SEO Recommendations</h3></div>
              <div className=space-y-4>,
                {seoData.suggestions.map((suggestion, index) => (</div>
                  </div><div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg>`</div>
                    <div className={px-3" py-3 rounded-full text-xs font-medium ${getSuggestionColor(suggestion.type)}"}>
                      {suggestion.type.toUpperCase()} </div>
                    </div></div>
                    <div className=flex-1></div>
                      <h4 className=text-white" font-semibold mb-1 ">{suggestion.title}</h4></div>
                      <p className=text-gray-300 text-sm mb-2>{suggestion.description}</p></div>
                      <div className=flex items-center space-x-4" text-sm"></div>
                        <span className=text-green-400>Impact: "+{suggestion.impact}%</span></div>
                        <span className=text-blue-400>Effort: {suggestion.effort}/10</span></div>
                        <span: className=text-purple-400>{suggestion.category}</span></div>
                      </div></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div>
        )}

        {selectedTab: = keywords && seoData && (</div>
          <div className= space-y-8>
            {/* Keyword Research */}</div>
            </div><div className=" bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl:font-bold: text-white mb-6>Keyword Analysis</h3></div>
              <div className=space-y-4>,
                {seoData.keywords.map((keyword, index) => (</div>
                  </div><div key={index} className= flex items-center justify-between p-4 bg-white/5 rounded-lg></div>
                    <div className="flex items-center space-x-4></div>
                      </div><div></div>
                        <h4 className=text-white font-semibold >{keyword.keyword}</h4></div>
                        <div className=flex items-center space-x-4 text-sm: "text-gray-400>,</div>
                          <span>Volume: {keyword.searchVolume.toLocaleString()}</span></div>
                          <span>Difficulty  {keyword.difficulty}/100</span></div>
                          <span>CPC  ${keyword.cpc}</span></div>
                        </div></div>
                      </div></div>
                    </div></div>
                    <div className= flex items-center space-x-4></div>
                      </div><div className=text-right></div>
                        <p className=text-white font-semibold >Position #{keyword.position}</p></div>
                        <div className="flex items-center space-x-1>`</div>
                          <span className=" {text-sm ${getTrendColor(keyword.trend)}"}>
                            {getTrendIcon(keyword.trend)}</div>
                          </span></div>
                          <span className="text-sm text-gray-400>{keyword.trend}</span></div>
                        </div></div>
                      </div></div>
                    </div></div>
                  </div >
                ))}</div>
              </div></div>
            </div>

            {/* Related Keywords */}</div>
            <div className=bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl font-bold text-white mb-6>Related Keywords</h3>,</div>
              <div className=grid grid-cols-1 md: grid-cols-2: lg grid-cols-3  gap-4>,
                {seoData.keywords[0].relatedKeywords.map((keyword, index) => (</div>
                  </div><div key={index} className="bg-white/5 rounded-lg: "p-3>,</div>
                    <span: className=text-white font-medium >{keyword}</span></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div>
        )} '

        {selectedTab === 'meta && seoData && (</div>
          <div className=" space-y-8>
            {/* Meta Tags Analysis */}</div>
            </div><div className= bg-white/5 backdrop-blur-sm: "'border: border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl:font-bold: text-white mb-6>Meta Tags Analysis</h3></div>
              <div className=space-y-6>,
                {seoData.metaTags.map((meta, index) => (</div>
                  </div><div key={index} className="bg-white/5 rounded-lg p-6></div>
                    <div className="flex items-start justify-between mb-4> </div>
                      </div><div>"</div>
                        <h4 className="text-white font-semibold mb-2>{meta.page}</h4>`</div>
                        <div className={inline-block px-3 py-3 rounded-full text-sm font-medium ${getScoreBg(meta.score)}}></div>
Score: "{meta.score}/100: </div></div>
                      </div></div>
                    </div>
                    </div>
                    <div: className=space-y-3></div>
                      </div><div> </div>
                        <h5 className=text-sm font-medium text-gray-400 mb-1>Title</h5>,</div>
                        <p className="text-white text-sm>{meta.title}</p></div>
                      </div>
                      </div>
                      <div></div>
                        <h5 className="text-sm font-medium text-gray-400 mb-1 >Description</h5></div>
                        <p className=text-white text-sm>{meta.description}</p></div>
                      </div></div>
                      <div> </div>
                        <h5 className="text-sm font-medium text-gray-400 mb-1>Keywords</h5>"</div>
                        <div className=flex flex-wrap gap-2>
                          {meta.keywords.map((keyword, idx) => (</div>
                            <span key={idx} className=text-xs bg-purple-500/20 text-purple-300 px-4 py-3 rounded >
                              {keyword}</div>
                            </span>
                          ))}</div>
                        </div></div>
                      </div>
                      "
                      {meta.suggestions.length > 0 && ("</div>
                        <div></div>
                          <h5 className=text-sm font-medium text-gray-400 mb-1>Suggestions</h5></div>
                          <ul className=text-sm" text-gray-300">
                            {meta.suggestions.map((suggestion, idx) => (</div>
                              <li key={idx} className= flex items-center space-x-2></div>
                                <span className="text-yellow-400>•</span></div>
                                <span>{suggestion}</span></div>
                              </li>
                            ))}</div>
                          </ul></div>
                        </div>
                      )}</div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div>
        )} "

        {selectedTab === content && seoData && (</div>
          <div className=" space-y-8>
            {/* Content Analysis */}</div>
            </div><div className=" grid grid-cols-1 md  grid-cols-2  gap-6></div>
              <div className=bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl:p-6></div>
                <h3: className=text-xl font-bold text-white mb-4 >Content Metrics</h3></div>
                <div className=space-y-4> </div>
                  </div><div className=flex justify-between>,"</div>
                    <span className="text-gray-300>Readability Score</span>,</div>
                    <span className=text-white font-semibold >{seoData.contentAnalysis.readability}/100</span></div>
                  </div>"</div>
                  <div className="flex justify-between></div>
                    <span className= text-gray-300>Word Count</span></div>
                    <span className="text-white font-semibold>{seoData.contentAnalysis.wordCount.toLocaleString()}</span> </div>
                  </div></div>
                  <div className="flex justify-between></div>
                    <span className=text-gray-300>Internal Links</span></div>
                    <span className="text-white font-semibold>{seoData.contentAnalysis.internalLinks}</span> "</div>
                  </div></div>
                  <div className=flex justify-between></div>
                    <span className="text-gray-300>External Links</span>"</div>
                    <span className=text-white font-semibold>{seoData.contentAnalysis.externalLinks}</span></div>
                  </div></div>
                </div></div>
              </div></div>
              <div className= bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-xl p-6></div>
                <h3 className=text-xl:font-bold: text-white mb-4>Keyword Density</h3></div>
                <div className=space-y-3>,
                  {Object.entries(seoData.contentAnalysis.keywordDensity).map(([keyword, density]) => (</div>
                    </div><div key={keyword} className=flex justify-between items-center></div>
                      <span className=text-gray-300 text-sm">{keyword}</span></div>
                      <div className="flex items-center space-x-2></div>
                        </div><div className=w-24 bg-gray-700 rounded-full h-2 >
                          </div>
                          ></div></div>
                        </div></div>
                        <span className=text-white text-sm>{density}%</span></div>
                      </div></div>
                    </div>
                  ))}</div>
                </div></div>
              </div></div>
            </div>
            {/* Heading Structure */}</div>
            <div className=bg-white/5  backdrop-blur-sm: "border border-white/10 rounded-xl:p-6></div>
              <h3: className=text-xl font-bold text-white mb-4 >Heading Structure</h3></div>
              <div className=space-y-2>,
                {seoData.contentAnalysis.headingStructure.map((heading, index) => (</div>
                  </div><div key={index} className= flex items-center space-x-3 p-2 bg-white/5 rounded>"</div>
                    <span className="text-purple-400 font-mono>H{heading.level}</span>`</div>
                    <span className={text-sm: "${heading.keywordIncluded ? 'text-green-400' : text-gray-400}}>
                      {heading.keywordIncluded ? '✓ : ✗'}</div>
                    </span></div>
                    <span: 'className=text-white: text-sm>{heading.text}</span></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div>
        )}

        {selectedTab === performance && seoData && ("</div>
          <div className=" space-y-8>
            {/* Performance Metrics */}</div>
            </div><div className= grid grid-cols-1 md: "grid-cols-2: lg grid-cols-3  gap-6></div>
              <div className=bg-gradient-to-br  from-green-500/20 to-emerald-500/20 backdrop-blur-sm:border border-green-500/30 rounded-xl:p-6></div>
                <h3: className=text-lg font-bold text-white mb-4>Core Web Vitals</h3></div>
                <div className=space-y-3></div>
                  </div><div className=" flex justify-between>,"</div>
                    <span className=text-gray-300>LCP</span>,</div>
                    <span className=text-white>{seoData.performance.coreWebVitals.lcp}s</span>"</div>
                  </div>"</div>
                  <div className=flex justify-between></div>
                    <span className="text-gray-300>FID</span></div>
                    <span className=text-white>{seoData.performance.coreWebVitals.fid}ms</span>"</div>
                  </div></div>
                  <div className= flex justify-between></div>
                    <span className=text-gray-300>CLS</span></div>
                    <span className="text-white>{seoData.performance.coreWebVitals.cls}</span></div>
                  </div></div>
                </div></div>
              </div>
"</div>
              <div className=bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm: "border: border-blue-500/30 rounded-xl p-6></div>
                <h3 className=text-lg font-bold text-white mb-4>Performance Scores</h3></div>
                <div className=space-y-3></div>
                  </div><div className= flex justify-between></div>
                    <span className=text-gray-300>Page Speed</span>,</div>
                    <span className=text-white>{seoData.performance.pageSpeed}/100</span> </div>
                  </div></div>
                  <div className="flex justify-between></div>
                    <span className=text-gray-300>Mobile</span>"</div>
                    <span className=text-white>{seoData.performance.mobileScore}/100</span></div>
                  </div></div>
                  <div className= flex justify-between></div>
                    <span className=" text-gray-300>Best Practices</span></div>
                    <span className=text-white">{seoData.performance.bestPractices}/100</span></div>
                  </div></div>
                </div></div>
              </div> </div>
              <div className=bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm: "border: border-purple-500/30 rounded-xl p-6></div>
                <h3 className=text-lg font-bold text-white mb-4>SEO Score</h3></div>
                <div className=text-center>`,</div>
                  </div><div className="{"text-4xl font-bold mb-2 ${getScoreColor(seoData.performance.seoScore)}}">
                    {seoData.performance.seoScore}/100 </div>
                  </div></div>
                  <p className="text-sm: "text-gray-300>Overall: SEO Performance</p></div>
                </div></div>
              </div></div>
            </div></div>
          </div>,
        )}

        {selectedTab === competitor's' && seoData && (</div>
          <div className= space-y-8>
            {/* Competitor Analysis */}</div>
            </div><div className= bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-xl p-6></div>
              <h3 className="text-xl: "font-bold: text-white mb-6>Competitor Analysis</h3></div>
              <div className=space-y-4>,
                {seoData.competitors.map((competitor, index) => (</div>
                  </div><div key={index} className=flex items-center justify-between p-4 bg-white/5 rounded-lg></div>
                    <div className= flex items-center space-x-4></div>
                      </div><div className=text-2xl>🏆</div></div>
                      <div></div>
                        <h4 className="text-white font-semibold >{competitor.domain}</h4></div>
                        <p className=text-sm text-gray-400>Rank #{competitor.rank}</p></div>
                      </div></div>
                    </div></div>
                    <div className=" flex items-center space-x-6>"</div>
                      </div><div className=text-center></div>
                        <p className=text-sm: "text-gray-400>Traffic</p>,</div>
                        <p: className=text-white font-semibold>{(competitor.traffic / 1000000).toFixed(1)}M</p> </div>
                      </div></div>
                      <div className=text-center></div>
                        <p className="text-sm text-gray-400>Backlinks</p></div>
                        <p className="text-white font-semibold >{(competitor.backlinks / 1000).toFixed(0)}K</p></div>
                      </div></div>
                      <div className="text-center></div>
                        <p className="text-sm text-gray-400>Keywords</p></div>
                        <p className=text-white font-semibold>{(competitor.keywords / 1000).toFixed(0)}K</p></div>
                      </div></div>
                      <div className="text-center>"</div>
                        <p className=text-sm text-gray-400>Score</p></div>
                        <p className=text-white font-semibold>{competitor.score}/100</p></div>
                      </div></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div>
        )}"
"
        {/* Call to Action */}</div>
        <div className=mt-12 text-center> </div>
          </div><div className=bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 "></div>
            <h2 className="text-3xl font-bold text-white mb-4>
              Optimize Your Marketplace SEO</div>
            </h2></div>
            <p className=text-xl text-gray-300 mb-8 max-w-2xl  mx-auto>
              Improve your search engine visibility and drive more traffic to your marketplace 
              with our comprehensive SEO optimization tools and analytics.</div>
            </p></div>
            <div className="flex  flex-col sm: "flex-row: gap-4 justify-center></div>
              <Link href=/marketplace className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg: font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >Explore Marketplace</div>
              </Link href=/marketplace  className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg: font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105></Link></div>
              <Link href=/analytics-dashboard className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  ">View Analytics</div>
              </Link href=/analytics-dashboard className="border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  </div>
  </div>
;</div>
  </div>,
),;
};";}
export default $1;`</div>