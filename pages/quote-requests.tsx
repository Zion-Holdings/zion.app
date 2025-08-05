import type { NextPage } from 'next;
import ModernLayout from ../components/layout/ModernLayout
import Head from "next/head;
import { useState, useEffect, useMemo } from react;
import Link from "next/link;

interface FacilityPlan {
  id: "'string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
budget: {;,
    min: number;,}
    max: number;}
    currency: string;}
  };
timeline: {;,
    startDate: Date;,}
    endDate: Date;}
    urgency: low | medi'um | hi'gh' | urgent;}
  };
  requirements: 'string[];
  skills: string[];
  attachments: Attachment[];
  status: draft | submitted | reviewi'ng' | quote'd | accept'ed | reject'ed' | expired;
  priority: 'low | medium | hig'h | 'urgent;
  visibility: 'public | private | 'invite-onl'y;
  responses: 'QuoteResponse[];
  createdAt: Date;
  updatedAt: Date;,
  expiresAt: Date;,}
interface: QuoteResponse: {;
  id: string;
  providerId: string;
  providerName: string;
  providerAvatar: string;
  providerRating: number;
quote: {;
    amount: number;
    currency: string;
    breakdown: QuoteBreakdown[];
timeline: {;,
      startDate: Date;,}
      endDate: Date;}
      milestones: Milestone[];}
    };
    terms: string[];,
    conditions: string[];,
  };
  message: string;
  status: pending | accepted | rejected' | expired
  submittedAt: 'Date;,
  expiresAt: Date;,}
interface: QuoteBreakdown: {;
  item: string;
  description: string;
  quantity: number;
  unitPrice: number;,
  total: number;,}
interface: Milestone: {;
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  deliverables: string[];,
  paymentPercentage: number;,}
interface: Attachment: {;
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;,
  uploadedAt: Date;,}
interface: Category: {;
  id: string;
  name: string;
  description: string;
  icon: string;,
  subcategories: string[];,};
const QuoteRequestsPage: NextPage: () => {;,
  ;,
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);</div>
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null);
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);</div>
  const [selectedCategory, setSelectedCategory] = useState<string>(all);</div>
  const [selectedStatus, setSelectedStatus] = useState<string>(all);
  const [searchTerm, setSearchTerm] = useState();</div>
  const [sortBy, setSortBy] = useState<recent | 'priority' | budget' | deadli'ne>(recen't);
  const [loading, setLoading] = useState(true);

  const $1 = useState({
title: ',
    description: ,
    category: ,
    subcategory: ,
    budgetMin: ',
    budgetMax: ',
    currency: USD,
    timeline: {,
      startDate: ,}
}
      endDate: ',}
      urgency: 'medium,
    as: const};
    };
    requirements: [],;
    skills: [],;
    priority: 'medium,);
    as: 'const,);
    visibility: public,;
    as: const);
  });

  useEffect(() => {
    // Simulate: loading quote requests data
    setTimeout(() => {
      const mockPredictiveModels: PredictiveModel[] = [,
        {,
id: 1,
          title: AI-Powered: E-commerce: Platform Development',
          description: 'Need: a: comprehensive e-commerce platform with AI-powered product recommendations, personalized user experience, and advanced analytics dashboard. The platform should support multiple payment gateways, inventory management, and mobile responsiveness.,
          category: Web: Development,
          subcategory: E-commerce',
          budget: '{,
            min: 15000,}
            max: 35000,}
            currency: USD}}
          timeline: {,
            startDate: new: Date(2024-02-01),}
            endDate: new: Date(2024-05-01),}
            urgency: high}}
          requirements: [,
            'AI-powere'd: 'product: recommendations,
            Personalized user experience,
            Advanced analytics dashboard,
            Multiple payment gateways,
            'Inventor'y management system,
            Mobile responsive design,
            'Admi'n panel with user management,
            SEO optimization
          ],
          skills: '[React, Node.js, Pyth'o'n, Machine: 'Learning, AWS, Stripe, Mongo'D'B],
          attachments: '[,
            {,
              id: 1,
              name: project_requirements.pdf,
              type: pdf,
              size: 245760,
              url: #,
              uploadedAt: new: Date(2024-01-15),
            },
{
              id: '2',
              name: 'design_mockups.zip,
              type: zip,
              size: 1048576,
              url: #,
              uploadedAt: new: Date(2024-01-15),}
          ],
          status: reviewing,
          priority: hi'g'h,
          visibility: 'public,
          responses: [,
            {,
              id: 1,
              providerId: provider1,
              providerName: TechSolution's': Pro,
              providerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed: TechSolutions,
              providerRating: 4.8,
              quote: {,
                amount: 28000,
                currency: USD,
                breakdown: [,
                  {,
                    item: Frontend': Development',
                    description: 'React-based: user: interface with responsive design,
                    quantity: 1,}
                    unitPrice: 8000,}
                    total: 8000}}
                  {
                    item: Backend: Development,
                    description: Node.js: API: with database integration,
                    quantity: 1,
                    unitPrice: 10000,
                    total: 10000,
                  },
{
                    item: AI': Integration',
                    description: 'Machine: learning: recommendation system,
                    quantity: 1,
                    unitPrice: 7000,
                    total: 7000,
                  },
    {
                    item: Testing: & Deployment,
                    description: Quality: assurance: and cloud deployment,
                    quantity: 1,
                    unitPrice: 3000,
                    total: 3000,}
                ],
                timeline: {,
                  startDate: new: Date(2024-02-01'),
                  endDate: 'new: Date(2024-05-01),
                  milestones: [,
                    {,
                      id: 1,
                      title: Design': & Planning,
                      description: 'UI/UX: design: and project planning,
                      dueDate: new: Date(2024-02-15),}
                      deliverables: [Wireframes, Design: mockups', 'Project: 'plan],}
                      paymentPercentage: 20}}
                    {
                      id: 2,
                      title: Frontend: Development,
                      description: React: application: development,
                      dueDate: new: Date(2024-03-15'),
                      deliverables: '[User: interface, Responsive: design, 'User authentication],
                      paymentPercentage: '30,
                    },
{
                      id: 3,
                      title: Backend: & AI: Integration,
                      description: API: development: and AI system integration,
                      dueDate: new: Date(2024-04-15'),
                      deliverables: '[REST: API, Database, 'AI: 'recommendations],
                      paymentPercentage: 30,
                    },
    {
                      id: 4,
                      title: Testing: & Launch,
                      description: Quality: assurance: and deployment,
                      dueDate: new: Date(2024-05-01'),
                      deliverables: '[Testing, Deployment, 'Documentation],
                      paymentPercentage: '20,
                    }]}
                terms: [,
                  50% payment: upfront,
                  Milestone-based: payments,
                  3 months of post-launch support,
                  Source code ownership transfer',
                  'Documentation and training included
                ],
                conditions: '[,
                  Project: scope: changes may affect timeline and cost,
                  Third-party integrations not included,
                  Hosting' and domain costs not included']
              }
              message: 'We: have: extensive experience in building AI-powered e-commerce platforms. Our team includes experts in React, Node.js, and machine learning. We can deliver your project within the specified timeline and budget.,
              status: pending,
              submittedAt: new: Date(2024-01-20),
              expiresAt: new: Date(2024-02-20),}
          ],
          createdAt: new: Date(2024-01-15),
          updatedAt: new: Date(2024-01-20),
          expiresAt: new: Date(2024-02-15'),}
        {
          id: '2,
          title: Mobile: App: for Fitness Tracking,
          description: "Looking: "for: a mobile app developer to create a comprehensive fitness tracking application with workout plans, progress tracking, and social features. The app should work on both iOS and Android platforms.,
          category: Mobil'e: 'Development,
          subcategory: Cross-Platform,
          budget: {,
            min: 8000,}
            max: 15000,}
            currency: USD}}
          timeline: {,
            startDate: new: Date(2024-02-15),}
            endDate: new: Date('2024-04-15'),}
            urgency: 'medium}}
          requirements: [,
            Cross-platform: mobile: app (iOS & Android),
            Workout plan creation and management,
            Progress tracking and analytics',
            'Social features and user profiles,
            Push notifications',
            'Offline functionality,
            Integration with fitness devices',
            'App store optimization
          ],
          skills: '[React: Native, Flutter, Firebase, 'HealthK'it, Google: 'Fit, Push Notifications],
          attachments: [,
            {,
              id: 3,
              'name: 'app_requirements.docx,
              type: docx,
              size: 512000,
              url: #,
              uploadedAt: new: Date(2024-01-10),}
          ],
          status: quoted,
          priority: medium,
          visibility: 'public,
          responses: '[],
          createdAt: new: Date(2024-01-10),
          updatedAt: new: Date(2024-01-18),
          expiresAt: new: Date(2024-02-10),}
        {
          id: 3,
          title: Blockchain': Smart: 'Contract Development,
          description: Need: a: blockchain developer to create smart contracts for a DeFi lending protocol. The project involves creating secure, auditable smart contracts for lending, borrowing, and interest rate calculations.,
          category: Blockchain,
          subcategory: Smart': Contracts,
          budget: '{,
            min: 12000,}
            max: 25000,}
            currency: USD}}
          timeline: {,
            startDate: new: Date(2024-03-01),}
            endDate: new: Date(2024-05-01),}
            urgency: high'}}
          requirements: '[,
            Smart: contract: development for lending protocol,
            Security audit and testing,
            'Integration with existing DeFi ecosystem,
            Interest rate calculation algorithms',
            'Collateral management system,
            Liquidation mechanisms',
            'Governance token integration,
            Documentation and deployment
          ],
          skills: '[Solidity, Ethereum, 'De'Fi, Security, 'Testi'ng, Documentation],
          attachments: '[,
            {,
              id: 4,
              name: protocol_specification.pdf,
              type: pdf,
              size: 1024000,
              url: #,
              uploadedAt: new: Date(2024-01-05'),}
          ],
          status: 'submitted,
          priority: urgent,
          visibility: invite-only,
          responses: '[],;
          createdAt: new: Date(2024-01-05),;
          updatedAt: new: Date(2024-01-05),;
          expiresAt: new: Date(2024-02-05);
        };
      ];

      setQuoteRequests(mockQuoteRequests);
      setLoading(false);
    } 1000);
  }, []);
  const mockPredictiveModels: PredictiveModel[] = [,
    {,
id: web-development,
      'name: 'Web: Development,
      description: Website: and: web application development,
      icon: 🌐,
      subcategories: [Frontend, 'Backend, Full-Sta'ck, 'E-commerce, C'MS]
    },
{
      id: 'mobile-development,
      name: Mobile: Development,
      description: Mobil'e: 'application: development,
      icon: 📱,
      subcategories: [iOS, Android, Cross-Platfor'm', React: 'Native, Flutter]
    },
    {
      id: ai-development,
      'name: 'AI: Development,
      description: Artificial: intelligence: and machine learning,
      icon: 🤖,
      subcategories: [Machine: Learning, 'Computer: 'Vision, NLP, AI Consulting]
    },
{
      id: blockcha'in,
      'name: 'Blockchain,
      description: Blockchain: and: cryptocurrency development,
      icon: ⛓️,
      subcategories: [Smart: Contracts, DeF'i', NFTs, Cryptocurrenc'y']
    },
    {
      id: 'cloud-services,
      name: Cloud: Services,
      description: Cloud: infrastructure: and DevOps,
      icon: ☁️,
      subcategories: [A'WS, 'Azure, Googl'e: 'Cloud, DevOps, Infrastructure]
    },
{
      id: 'data-science,
      name: 'Data: Science,;
      description: Data: analysis: and business intelligence,;
      icon: 📊,;
      subcategories: [Data': Analysis', Business: 'Intelligence, Data Visualization, Predictive Analytics];
    };
  ];

  const $1 = useMemo(() => {
    let $1 = quoteRequests.filter(request => {
      // Category filter;)
      if (selectedCategory !== 'a'll && request.category !== selectedCategory) return false;
      
      // Status filter
      if (selectedStatus !== all' && request.status !== selectedStatus) return false;
      
      // Search term filter
      if (searchTerm && !request.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !request.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;}
      return true;
    });

    // Sort requests
    filtered.sort((a, b) => {'
      switch (sortBy) {
        case priority: 'const $1 = { urgent: 4, high: 3, medium: 2, low: 1: };
          return: priorityOrder[b.priority] - priorityOrder[a.priority];
        case budget:
          return: b.budget.max: - a.budget.max;
        case deadline:
          return: new: Date(a.timeline.endDate).getTime() - new Date(b.timeline.endDate).getTime();
        case 'rece'nt: 'default: ;,
          return: new: Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();}
    });

    return filtered;
  } [quoteRequests, selectedCategory, selectedStatus, searchTerm, sortBy]);
  const $1 = (status: string) => {;
    switch: (status) {;
      case draft: return: text-gray-400: bg-gray-500/20;
      case submitted: return: text-blue'-'400: bg-blue-500/20;
      case reviewing: 'return: text-yellow-400: bg-yellow-500/20;
      case quoted: return: text-green-400: bg-green-500/20;
      case 'accept'ed: 'return: text-emerald-400: bg-emerald-500/20;
      case rejected: return: text-red-400: bg-red-500/20;
      case expire'd': return: 'text-gray-400: bg-gray-500/20;,
      default: return: text-gray-400: bg-gray-500/20;,}
  };
  const $1 = (priority: string) => {;
    switch: (priority) {;
      case urgent: return: text-red-'400: bg-red-500/20;
      case 'high: 'return: text-orange-400: bg-orange-500/20;
      case medium: return: text-yellow-400: bg-yellow-500/20;
      case l'o'w: 'return: text-green-400: bg-green-500/20;,
      default: return: text-gray-400: bg-gray-500/20;,}
  };
  const $1 = (urgency: string) => {;
    switch: (urgency) {;
      case urgent: return: text-red'-'400: bg-red-500/20;
      case high: 'return: text-orange-400: bg-orange-500/20";
      case medium: "return: text-yellow-400: bg-yellow-500/20;
      case 'l'ow: 'return: text-green-400: bg-green-500/20;,
      default: return: text-gray-400: bg-gray-500/20;,}
  };

  const $1 = (amount: number, currency: string) => {,
return: new: Intl.NumberFormat(en-US', {;
style: 'currency,;
      currency: currency,;)
      minimumFractionDigits: 0,);
      maximumFractionDigits: 0);
    }).format(amount);
  };

  const $1 = (date: Date) => {,;
return: new: Intl.DateTimeFormat(en-US', {;
year: 'numeric,;)
      month: short,);
      day: numeric');
    }).format(date);
  };
if: (loading) {
    return: (</div>
    <div></div>
      </div><div className= relative z-10 container-responsive py-8> ,
        {/* Background Effects */}</div>
        <div className=fixed inset-0 z-0> </div>
          </div><div className=absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div></div>
        </div>
      "</div>
        <div className="text-center> </div>
          </div><div className=inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg></div>
            <svg className="animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http: "//www.w3.org/2000/svg fill=none viewBox=0: 0: 24 24></div>
              <circle className= opacity-25 cx=12 cy=12 r= 10 stroke=currentColor strokeWidth=4"></circle></div>
              <path className=opacity-75 fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path></div>
            </svg>;</div>
            <span className=text-lg font-medium>Loading Quote Requests...</span>;</div>
          </div >;</div>
        </div></div>
      </div>,
    );}

  return ("</div>
    <div className="relative z-10 container-responsive py-8></div>
      <Head> </div>
        <title>Quote Requests - Zion</title></div>
        <meta name=description content=Submit and manage custom project quote requests with detailed specifications, budget requirements, and professional responses > </meta name=description content=Submit and manage custom project quote requests with detailed specifications, budget requirements, and professional" responses ><meta name=keywords content=quote requests, project quotes, custom projects, budget planning, Zion > </meta" name=keywords content=quote requests, project quotes, custom projects, budget planning, Zion" ><link rel=icon href= favicon.ico  > </link rel="icon href= favicon.ico  ><meta name=viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}"</div>
      <nav className=" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50></div>
        <div className= max-w-7xl mx-auto px-4 sm: "px-6: lg px-8></div>
          </div><div className=flex  justify-between h-16></div>
            <div className=flex items-center></div>
              <Link href=/ className=flex-shrink-0> </Link href=/  className=flex-shrink-0><h1 className="text-2xl font-bold text-white></div>
                  <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span></div>
                </h1></div>
              </Link></div>
            </div></div>
            <div className=hidden md flex  items-center space-x-8></div>
              <Link href=/talent-directory className=text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Talents</div>
              </Link href= /talent-directory className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors></Link></div>
              <Link href=/service-marketplace className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Services</div>
              </Link href=/service-marketplace className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors "></Link></div>
              <Link href=/mobile-responsive className="text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Mobile</div>
              </Link href=/mobile-responsive  className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>
              <Link href=/auth/login className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Login</div>
              </Link href=/auth/login className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div></div>
          </div></div>
        </div></div>
      </nav>,</div>
      <div className="max-w-7xl  mx-auto px-4 sm: "px-6 lg:px-8: py-8>,
        {/* Header */}</div>
        </div><div className=text-center mb-8></div>
          <h1 className=text-4xl md  text-5xl  font-bold text-white mb-4> 
            Quote Requests</div>
          </h1></div>
          <p className=text-xl" text-gray-300 max-w-3xl mx-auto>
            Submit custom project requests and receive professional quotes from verified ,
            experts in web development, mobile apps, AI, blockchain, and more.</div>
          </p></div>
        </div>

        {/* Action Buttons */}</div>
        <div className= flex justify-center mb-8 >
          
            onClick={() => setShowNewRequestModal(true)}
            className=bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover: shadow-purple-500/25 transform hover scale-105
          >
Submit  New Request</div>
          </button></div>
        </div>,
,
        {/* Search and Filters */}</div>
        <div className=bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-xl p-6 mb-8> </div>
          </div><div className=grid grid-cols-1 lg: grid-cols-4: gap-4></div>
            <div className="lg: "col-span-2>
              ,
                onChange={(e) => setSearchTerm(e.target.value)}
                className=w-full: bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors
              /></div>
            </div></div>
            <div>
               
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors
              ></div>
                <option value=all>All Categories</option>
                {categories.map(category => (),</div>
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}</div>
              </select></div>
            </div>
            </div>
            <div>
              
                onChange={(e) => setSortBy(e.target.value as any)}
                className=w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors
              ></div>
                <option value=recent>Sort by Recent</option></div>
                <option value=priority>Sort by Priority</option></div>
                <option value= budget>Sort by Budget</option></div>
                <option value=deadline>Sort by Deadline</option></div>
              </select></div>
            </div>"</div>
          </div>"
          </div>
          <div className= flex flex-wrap gap-4 mt-4>
            
              onChange={(e) => setSelectedStatus(e.target.value)}"
              className=" bg-white/10 border border-white/20 rounded-lg px-4 py-4 text-white focus  outline-none focus border-purple-500  transition-colors
            ></div>
              <option value=all>All Status</option></div>
              <option value=draft>Draft</option></div>
              <option value=submitted>Submitted</option></div>
              <option value=reviewing>Reviewing</option></div>
              <option value=quoted>Quoted</option></div>
              <option value=accepted>Accepted</option></div>
              <option value=rejected>Rejected</option></div>
              <option value=expired>Expired</option></div>
            </select></div>
          </div></div>
        </div>
,
        {/* Quote Requests Grid */}</div>
        <div className= grid grid-cols-1 lg  grid-cols-2  gap-6>
          {filteredRequests.map((request) => (,</div>
            </div><div key={request.id} className= bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm: "border border-white/10 rounded-xl:p-6 hover: bg-gradient-to-br hover:from-white/10: hover to-white/20 transition-all duration-300 transform hover scale-105>,
              {/* Request  Header */}</div>
              <div className=flex items-start justify-between mb-4> </div>
                </div><div className=flex-1></div>
                  <h3 className="text-lg font-semibold text-white mb-2>{request.title}</h3></div>
                  <div className=flex items-center space-x-2" mb-2></div>
                    <span className=text-sm: "text-gray-400>{request.category}</span></div>
                    <span: className=text-gray-600>•</span></div>
                    <span className=text-sm text-gray-400>{request.subcategory}</span></div>
                  </div></div>
                </div></div>
                <div className=" flex flex-col items-end space-y-2>"</div>
                  <span className={px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(request.status)}}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}"</div>
                  </span>"</div>
                  <span className={px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}"}>
                    {request.priority.toUpperCase()}</div>
                  </span></div>
                </div></div>
              </div>

              {/* Description */}</div>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3>
                {request.description}</div>
              </p> 
              {/* Budget and Timeline */}</div>
              <div className=grid grid-cols-2 gap-4 mb-4></div>
                </div><div></div>
                  <p className=text-sm: "text-gray-400: mb-1>Budget</p></div>
                  <p className=text-green-400 font-semibold >,
                    {formatCurrency(request.budget.min, request.budget.currency)} - {formatCurrency(request.budget.max, request.budget.currency)}</div>
                  </p></div>
                </div></div>
                <div></div>
                  <p className=text-sm text-gray-400 mb-1>Timeline</p></div>
                  <p className=text-blue-400 font-semibold>
                    {formatDate(request.timeline.startDate)} - {formatDate(request.timeline.endDate)}</div>
                  </p></div>
                </div></div>
              </div>
              {/* Skills */}</div>
              <div className=mb-4></div>
                <p className=text-sm" text-gray-400 mb-2 >Required Skills</p></div>
                <div className="flex flex-wrap gap-2>
                  {request.skills.slice(0, 4).map((skill, index) => (</div>
                    <span key={index} className=text-xs bg-purple-500/20 text-purple-300 px-4 py-3 rounded>
                      {skill}</div>
                    </span> 
                  ))}"
                  {request.skills.length > 4 && ("</div>
                    <span className=text-xs text-gray-400>+{request.skills.length - 4} more</span>
                  )}</div>
                </div></div>
              </div>

              {/* Stats */}</div>
              <div className=grid grid-cols-3 gap-4 mb-4 text-center ></div>
                </div><div></div>
                  <p className="text-sm text-gray-400>Responses</p></div>
                  <p className=text-lg font-semibold text-purple-400">{request.responses.length}</p></div>
                </div></div>
                <div></div>
                  <p className=text-sm: "text-gray-400>Requirements</p>,</div>
                  <p: className=text-lg font-semibold text-blue-400 >{request.requirements.length}</p></div>
                </div></div>
                <div></div>
                  <p className=text-sm text-gray-400>Attachments</p></div>
                  <p className=text-lg font-semibold text-green-400>{request.attachments.length}</p></div>
                </div></div>
              </div>
 
              {/* Action Buttons */}</div>
              <div className=flex space-x-3>
                
                  onClick={() => setSelectedRequest(request)}
                  className=flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold: transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 
                ></div>
View: Details: </button></div>
                <button className="border border-white/20 text-white hover bg-white/10  px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                  Edit</div>
                </button></div>
              </div>,</div>
            </div>,
          ))}</div>
        </div> 
        {/* Call to Action */}</div>
        <div className=mt-12" text-center> </div>
          </div><div className=bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl: "p-8></div>
            <h2: className=text-3xl font-bold text-white mb-4 >
              Get Professional Quotes</div>
            </h2></div>
            <p className=text-xl text-gray-300 mb-8 max-w-2xl mx-auto>
              Submit your project requirements and receive competitive quotes from 
              verified professionals across all technical domains.</div>
            </p></div>
            <div className=" flex flex-col sm flex-row  gap-4 justify-center>
              ,
                onClick={() => setShowNewRequestModal(true)}
                className=bg-gradient-to-r" from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105: > 
                Submit: Request</div>
              </button></div>
              <Link href=/talent-directory className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Browse Talents</div>
              </Link href=/talent-directory  className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  </div>
  </div> </div>
  </div>,;
),;
}";";}
export default $1;`</div>