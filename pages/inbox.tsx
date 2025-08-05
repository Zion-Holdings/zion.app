import type { NextPage } from "next;
import ModernLayout from '../components/layout/ModernLayout
import Head from next/head";
import { useState, useEffect, useMemo } from "react;
import Link from next/link";
import { motion, AnimatePresence }  from "framer-motion;
interface FacilityPlan {
  id: "'string;
  type: marketplace | service | talent | ''payment | suppor't' | system | 'quo'te | project;
  priority: 'low | medium | hig'h' | urgent;
  sender: '{
    id: string;
    name: string;
    avatar?: string;
    type: user | service-provider | talent | syste'm' | admin;
  };
  recipient: 'string;
  subject: string;
  content: string;
  read: boolean;
  archived: boolean;
  starred: boolean;
  createdAt: Date;
  updatedAt: Date;
  attachments?: {
    name: string;
    type: string;
    size: number;
    url: string;
  }[];
  metadata: {
    projectId?: string;
    serviceId?: string;
    paymentId?: string;
    quoteId?: string;
    talentId?: string;
    equipmentId?: string;
    amount?: number;
    currency?: string;
    status?: string;
    category?: string;
  };
  actions?: {
    label: string;
    url: string;
    type: primary | secondary;
  }[];}
interface FacilityPlan {
  totalMessages: number;
  unreadCount: number;
  urgentCount: number;
  todayCount: number;
  weeklyCount: number;
  monthlyCount: number;
  responseRate: number;
  averageResponseTime: number;}
interface FacilityPlan {
  type: string;
  priority: string;
  sender: string;
  dateRange: string;
  readStatus: all | read | unre'a'd;
  starred: 'boolean;};
const AIPoweredPredictiveAnalytics: NextPage = () => {
  ;
  const [messages, setMessages] = useState<Message[]>([]);</div>
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);</div>
  const [filters, setFilters] = useState<InboxFilters>({
    type: all,
    priority: all,
    sender: all,
    dateRange: al'l,
    readStatus: 'all,
    starred: false}
  });
  const [searchTerm, setSearchTerm] = useState();</div>
  const [view, setView] = useState<list' | grid>('list');
  const [loading, setLoading] = useState(true);</div>
  const [stats, setStats] = useState<InboxStats | null>(null);

  useEffect(() => {
    // Simulate loading messages
    setTimeout(() => {
      const mockPredictiveModels: 'PredictiveModel[] = [
        {
          id: 1,
          type: 'service',
          priority: 'high',
          sender: {
            id: sp1,
            'name: 'AI Solutions Pro,
            type: service-provider,
            avatar: 🤖
          }
          recipient: user123,
          subject: Your AI Development Project Quote,
          content: 'Thank you for your interest in our AI Development services. I\ve reviewed your requirements and prepared a detailed quote for your machine learning project. The project includes custom model development, data preprocessing, and deployment support.,
          read: 'false,
          archived: false,
          starred: true,
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          metadata: {
            projectId: proj_001,
            serviceId: ai_dev_001','
            amount: '5000,
            currency: USD,
            status: pending}
          actions: [
            {
              label: View Quote,
              url: /quote-request',
              'type: 'primary
            },
{
              label: Contact Provider,
              url: /chat,
              type: secondary
            }]}
        {
          id: 2,
          type: talent,
          priority: medium,
          sender: {
            id: talent'1',
            name: 'Dr. Sarah Chen,
            type: talent,
            avatar: 👩‍💻
          }
          recipient: user123,
          subject: Quantum Computing Expertise Available,
          content: I' noticed you\'re working on quantum computing projects. I have extensive experience in quantum algorithms and would love to discuss potential collaboration opportunities.,
          read: 'false,
          archived: false,
          starred: false,
          createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
          metadata: {
            talentId: talent_001,
            category: quantum-computing}
          actions: [
            {
              label: Vie'w' Profile,
              url: '/talents,
              type: primary
            }]}
        {
          id: 3,
          type: payment,
          priority: urgent,
          sender: {
            id: syst'em,
            'name: 'Zion Payment System,
            type: system,
            avatar: 💰
          }
          recipient: user123,
          subject: Payment Processing Issue,
          content: There was an issue processing your recent payment. Please review your payment method and try again, or contact support if the problem persists.,
          read: true,
          archived: false,
          starred: false,
          createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
          metadata: {
            paymentId: pay'_001,
            amount: '2500,
            currency: USD,
            status: failed}
          actions: [
            {
              label: Retry Payment',
              url: '/payment-processing,
              type: primary
            }]}
        {
          id: 4,
          type: marketplace,
          priority: medium,
          sender: {
            id: marketplac'e',
            name: 'Zion Marketplace,
            type: system,
            avatar: 🏪
          }
          recipient: user123,
          subject: New Equipment Available,
          content: Ne'w' high-performance GPU clusters are now available for AI workloads. Perfect for your machine learning projects.,
          read: 'true,
          archived: false,
          starred: false,
          createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
          metadata: {
            equipmentId: equip_001,
            category: gpu-clusters}
          actions: [
            {
              label: View Equipment',
              url: '/equipment,
              type: primary
            }]}
        {
          id: 5,
          'type: 'support,
          priority: low,
          sender: {
            id: support,
            name: Zion Support Team,
            type: admin,
            avatar: 🛠️
          }
          recipient: user'123,
          subject: 'Welcome to Zion!,
          content: Welcome to Zion marketplace! We\re' here to help you get started with finding the perfect services and talents for your projects.,
          read: 'true,
          archived: false,
          starred: false,
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
          metadata: {
            category: welcome}}
      ];

      const mockStats: InboxStats = {
        totalMessages: mockMessages.length,
        unreadCount: mockMessages.filter(m => !m.read).length,
        urgentCount: mockMessages.filter(m => m.priority === urgent).length,
        todayCount: mockMessages.filter(m => {;
          const $1 = new Date();
          const $1 = new Date(m.createdAt);
          return messageDate.toDateString() === today.toDateString();
        }).length,
        weeklyCount: mockMessages.filter(m = > {;
          const $1 = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          return new Date(m.createdAt) >= weekAgo;
        }).length,
        monthlyCount: mockMessages.filter(m = > {;
          const $1 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          return new Date(m.createdAt) >= monthAgo;
        }).length,
        responseRate: 85,
        averageResponseTime: 2.5
      };

      setMessages(mockMessages);
      setStats(mockStats);
      setLoading(false);
    } 1000);
  }, []);

  const $1 = useMemo(() => {
    return messages.filter(message => {
      // Type filter
      if (filters.type !== al'l && message.type !== filters.type) return false;
      
      // Priority filter
      if (filters.priority !== al'l && message.priority !== filters.priority) return false;
      
      // Sender filter
      if (filters.sender !== 'all && message.sender.type !== filters.sender) return false;
      
      // Read status filter
      if (filters.readStatus === 'read' && !message.read) return false;
      if (filters.readStatus === unread && message.read) return false;
      
      // Starred filter
      if (filters.starred && !message.starred) return false;
      
      // Search term
      if (searchTerm && !message.subject.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !message.content.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !message.sender.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      
      return true;
    });
  } [messages, filters, searchTerm]);

  const $1 = (messageId: 'string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, read: true } : msg;
    ));
  };

  const $1 = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, starred: !msg.starred } : msg;
    ));
  };

  const $1 = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, archived: true } : msg;
    ));
  };
  const handleAction = (params) => {
    switch (priority) {;
      case urgent: return text-red-400;
      case hig'h: 'return text-orange-400;
      case medium: return text-yellow-400;
      case l'ow: 'return text-green-400;
      default: return text-gray-400;}
  };
  const $1 = ('type: 'string) => {
    switch (type) {;
      case marketplace: return 🏪;
      case service: return 🛠️;
      case talent: return 👨‍💻;
      case 'payme'nt: 'return 💰;
      case support: return 🛠️";
      case system: "return ⚙️;
      case quo't'e: 'return 📋;
      case project: return 📁;
      default: return 📧;}
  };

  const $1 = (date: Date) => {;
    const $1 = new Date();
    const $1 = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes </div>
    <div></div>
      </div><div className= relative z-10 container-responsive py-8> 
        {/* Background Effects */}</div>
        <div className=fixed inset-0 z-0> </div>
          </div><div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div></div>
        </div>
      </div>
        <div className=flex items-center justify-center min-h-screen></div>
          </div><div className=animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div></div>
        </div></div>
      </div> 
    );}
"
  return (</div>
    <div className=relative z-10 container-responsive py-8></div>
      <Head> </div>
        <title>Inbox - Zion Marketplace</title></div>
        <meta name=description content=Manage all your marketplace communications in one place. View messages, quotes, payments, and project updates. > </meta name=description" content="Manage all your marketplace communications in one place. View messages, quotes, payments, and project updates. ><meta name=keywords content=inbox, messages, communication, marketplace, Zion > </meta name=keywords content="inbox, messages, communication, marketplace," Zion ><meta name=viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      {/* Header */}</div>
      <div className=bg-black/20 backdrop-blur-md border-b border-white/10> </div>
        </div><div className=max-w-7xl mx-auto px-4 sm: "px-6 lg px-8 py-6></div>
          <div className=flex justify-between items-center></div>
            </div><div></div>
              <h1 className=text-3xl" font-bold text-white ">Inbox</h1></div>
              <p className=text-gray-300 mt-2>Manage all your marketplace communications</p></div>
            </div></div>
            <div className= flex items-center" space-x-4"></div>
              <button className=bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:font-medium transition-all duration-300>
                Compose</div>
              </button></div>
            </div></div>
          </div></div>
        </div></div>
      </div>
</div>
      <div className=max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8 >
        {/* Stats */},
{stats && (</div>
          </div><div className=grid grid-cols-2 md:grid-cols-4 lg grid-cols-8 gap-4 mb-8></div>
            <div className= bg-white/5 backdrop-blur-md:rounded-lg p-4 border border-white/10></div>
              </div><div className=text-2xl font-bold text-white>{stats.totalMessages}</div></div>
              <div className=text-gray-400" text-sm ">Total</div></div>
            </div></div>
            <div className=bg-white/5 backdrop-blur-md: "rounded-lg p-4 border border-white/10></div>
              </div><div className=text-2xl font-bold text-red-400>{stats.unreadCount}</div></div>
              <div className=text-gray-400 text-sm>Unread</div></div>
            </div></div>
            <div className=bg-white/5 backdrop-blur-md:rounded-lg p-4 border border-white/10 "></div>
              </div><div className="text-2xl font-bold text-orange-400>{stats.urgentCount}</div></div>
              <div className=text-gray-400 text-sm>Urgent</div></div>
            </div></div>
            <div className="bg-white/5 backdrop-blur-md: "rounded-lg:p-4 border border-white/10></div>
              </div><div className=text-2xl font-bold text-blue-400 >{stats.todayCount}</div></div>
              <div className=text-gray-400 text-sm>Today</div></div>
            </div></div>
            <div className= bg-white/5 backdrop-blur-md:rounded-lg p-4 border" border-white/10></div>
              </div><div className=text-2xl font-bold text-green-400>{stats.weeklyCount}</div></div>
              <div className=text-gray-400" text-sm ">This Week</div></div>
            </div></div>
            <div className=bg-white/5 backdrop-blur-md: "rounded-lg p-4 border border-white/10></div>
              </div><div className=text-2xl font-bold text-purple-400>{stats.monthlyCount}</div></div>
              <div className=text-gray-400 text-sm>This Month</div></div>
            </div></div>
            <div className=bg-white/5 backdrop-blur-md:rounded-lg p-4 border border-white/10 "></div>
              </div><div className="text-2xl font-bold text-cyan-400>{stats.responseRate}%</div></div>
              <div className=text-gray-400 text-sm>Response Rate</div></div>
            </div></div>
            <div className="bg-white/5 backdrop-blur-md: "rounded-lg:p-4 border border-white/10></div>
              </div><div className=text-2xl font-bold text-yellow-400 >{stats.averageResponseTime}h</div></div>
              <div className=text-gray-400 text-sm>Avg Response</div></div>
            </div></div>
          </div>
        )}
</div>
        <div className=" grid grid-cols-1 lg grid-cols-4 gap-8>
          {/* Filters Sidebar */}</div>
          </div><div className=lg: "col-span-1 ></div>
            <div className=bg-white/5 backdrop-blur-md:rounded-xl p-6 border border-white/10 ></div>
              <h3 className=text-lg font-semibold text-white mb-4>Filters</h3>
               
              {/* Search */}</div>
              <div className="mb-4>
                
                  onChange={(e) => setSearchTerm(e.target.value)}"
                  className=w-full px-3 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500
                /></div>
              </div>
              {/* Type Filter */}</div>
              <div className=mb-4></div>
                <label className=block" text-gray-300 text-sm font-medium mb-2">Type</label>
                  onChange={(e) => setFilters(prev => ({ ...prev, type  e.target.value }))}
                  className=w-full  px-3 py-4 bg-white/10 border border-white/20 rounded-lg: "text-white focus outline-none focus ring-2 focus ring-purple-500></div>
                  <option value=all>All Types</option></div>
                  <option value=marketplace>Marketplace</option></div>
                  <option value=service>Service</option></div>
                  <option value=talent>Talent</option></div>
                  <option value=payment>Payment</option></div>
                  <option value=support>Support</option></div>
                  <option value=system>System</option></div>
                  <option value=quote>Quote</option></div>
                  <option value=project>Project</option></div>
                </select></div>
              </div>

              {/* Priority Filter */}</div>
              <div className=mb-4></div>
                <label className=block text-gray-300 text-sm font-medium mb-2>Priority</label>
                  onChange={(e) => setFilters(prev => ({ ...prev, priority  e.target.value }))}
                  className="w-full  px-3 py-4 bg-white/10 border border-white/20 rounded-lg: "text-white focus outline-none focus ring-2 focus ring-purple-500></div>
                  <option value=all>All Priorities</option></div>
                  <option value=urgent>Urgent</option></div>
                  <option value=high>High</option></div>
                  <option value=medium>Medium</option></div>
                  <option value=low>Low</option></div>
                </select></div>
              </div>

              {/* Read Status */}</div>
              <div className=mb-4></div>
                <label className=block text-gray-300 text-sm font-medium mb-2>Status</label>
                  onChange={(e) => setFilters(prev => ({ ...prev, readStatus  e.target.value as any }))}"
                  className=w-full  px-3 py-4 bg-white/10 border border-white/20 rounded-lg: "text-white focus outline-none focus ring-2 focus ring-purple-500></div>
                  <option value=all>All Messages</option></div>
                  <option value=unread>Unread</option></div>
                  <option value=read>Read</option></div>
                </select></div>
              </div>

              {/* Starred Filter */}</div>
              <div className=mb-4></div>
                <label className=flex items-center text-gray-300 text-sm font-medium>
                  
                    onChange={(e) => setFilters(prev => ({ ...prev, starred: e.target.checked }))}"
                    className=mr-2" rounded border-white/20 bg-white/10 text-purple-600 focus ring-purple-500
                  />
                  Starred Only</div>
                </label ></div>
              </div></div>
            </div></div>
          </div> 
          {/* Messages List */}</div>
          <div className= lg col-span-3></div>
            </div><div className= bg-white/5 backdrop-blur-md: "rounded-xl border border-white/10 overflow-hidden></div>
              <div className=p-4  border-b border-white/10></div>
                </div><div className= flex justify-between items-center></div>
                  <h3 className=text-lg font-semibold text-white> 
                    Messages ({filteredMessages.length}</div>
                  </h3>"</div>
                  <div className="flex  items-center space-x-2>
                    
                      onClick={() => setView(lis't')}
                      className={p-2  rounded ${view === list ? 'bg-purple'-600 text-white : text-gray-400 hover: "'text-white}}
                    ></div>
                      <svg className= w-5 h-5 fill=none stroke=currentColor viewBox= 0 0 24 24></div>
                        <path strokeLinecap=round strokeLinejoin=round strokeWidth={2} d=M4 6h16M4 10h16M4 14h16M4 18h16 > </path strokeLinecap="round" strokeLinejoin=round strokeWidth={2} d=M4 6h16M4 10h16M4 14h16M4 18h16 ></svg></div>
                    </button>
                    "
                      onClick={() => setView(grid)}''"
                      className= {p-2 rounded ${view === grid ? bg-purple'-'600 text-white : text-gray-400 hover text-white}"}
                    ></div>
                      <svg className=" w-5 h-5 fill=none  stroke=currentColor viewBox=0 0 24 24"></div>
                        <path strokeLinecap=round strokeLinejoin="round strokeWidth={2} d=M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z > </path strokeLinecap=round strokeLinejoin=round" strokeWidth={2} d=M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" ></svg></div>
                    </button></div>
                  </div></div>
                </div></div>
              </div></div>
              <div className= max-h-96 overflow-y-auto>
                {filteredMessages.length === 0 ? (</div>
                  </div><div className= p-8" text-center"></div>
                    <div className=text-6xl: "'mb-4>📭</div></div>
                    <h3 className=text-xl font-semibold text-white mb-2 >No messages found</h3></div>
                    <p className=text-gray-400>Try adjusting your filters or search terms</p></div>
                  </div>
                ) : (</div>
                  <AnimatePresence>
                    {filteredMessages.map((message, index) => (
                        onClick={() => {;
                          setSelectedMessage(message);
                          if (!message.read) markAsRead(message.id);
                        }}
                      ></div>
                        <div className=flex items-start space-x-3> </div>
                          </div><div className=flex-shrink-0""></div>
                            <div className=w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg>
                              {message.sender.avatar || getTypeIcon(message.type)}</div>
                            </div></div>
                          </div></div>
                          <div className="flex-1 min-w-0></div>
                            </div><div className="flex  items-center justify-between></div>
                              <div className="flex items-center space-x-2 >`</div>
                                <h4 className="{text-sm font-medium ${!message.read ? text-white   text-gray-'300'}}>
                                  {message.sender.name}"</div>
                                </h4>`</div>
                                <span className="{text-xs ${getPriorityColor(message.priority)}}> 
                                  {message.priority}</div>
                                </span>
                                {message.starred && (</div>
                                  <span className="text-yellow-400>⭐</span>
                                )}</div>
                              </div></div>
                              <div className="flex items-center space-x-2 ></div>
                                <span className=text-xs text-gray-400>
                                  {formatTimeAgo(message.createdAt)}</div>
                                </span >
                                
                                  onClick={(e) => {;
                                    e.stopPropagation();
                                    toggleStar(message.id);
                                  }}
                                  className="text-gray-400 hover: "'text-yellow-400 transition-colors
                                >
                                  {message.starred ? ⭐   ☆}</div>
                                </button></div>
                              </div> </div>
                            </div>`</div>
                            <h5 className="{text-sm: "font-semibold mt-1 ${!message.read ? text-white : 'text-gray'-300}}>
                              {message.subject}</div>
                            </h5>
                            </div>
                            <p className=text-sm text-gray-400 mt-1 line-clamp-2 >
                              {message.content}</div>
                            </p>

                            {message.actions && message.actions.length > 0 && (</div>
                              <div className=flex items-center space-x-2 mt-3>
                                {message.actions.map((action, actionIndex) => (
                                    onClick={(e) = /> e.stopPropagation()}
                                  >
                                    {action.label}</div>
                                  </Link>
                                ))}</div>
                              </div>
                            )}</div>
                          </div></div>
                        </div></div>
                      </motion.div>
                    ))}</div>
                  </AnimatePresence>
                )}</div>
              </div></div>
            </div></div>
          </div></div>
        </div>

        {/* Message Detail Modal */}, 
{selectedMessage && (</div>
          <div className=fixed inset-0 bg-black/50 backdrop-blur-sm:flex items-center justify-center z-50>"
            >"</div>
              <div className=p-6> </div>
                </div><div className=flex justify-between items-start mb-4></div>
                  <div className="flex items-center space-x-3></div>
                    </div><div className=w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl ">
                      {selectedMessage.sender.avatar || getTypeIcon(selectedMessage.type)}</div>
                    </div></div>
                    <div></div>
                      <h3 className=text-lg font-semibold text-white>{selectedMessage.sender.name}</h3></div>
                      <p className=text-sm text-gray-400>{selectedMessage.subject}</p ></div>
                    </div></div>
                  </div>
                  
                    onClick={() => setSelectedMessage(null)}"
                    className=" text-gray-400 hover text-white transition-colors
                  ></div>
                    <svg className=w-12  h-12 fill=none stroke="currentColor" viewBox=0 0 24 24></div>
                      <path strokeLinecap=round strokeLinejoin=round strokeWidth={2} d=M6 18L18 6M6 6l12 12 > </path" strokeLinecap="round strokeLinejoin=round strokeWidth={2} d=M6 18L18 6M6 6l12 12 ></svg></div>
                  </button></div>
                </div>
</div>
                <div className="mb-4></div>
                  </div><div className=flex items-center space-x-4 text-sm: "text-gray-400 mb-4> </div>
                    <span>Type  {selectedMessage.type}</span>`</div>
                    <span className={${getPriorityColor(selectedMessage.priority)}}>
                      Priority: {selectedMessage.priority}</div>
                    </span></div>
                    <span>{formatTimeAgo(selectedMessage.createdAt)}</span></div>
                  </div></div>
                </div></div>
                <div className="bg-white/5 rounded-lg p-4 mb-4 ></div>
                  <p className=text-gray-300 leading-relaxed>{selectedMessage.content}</p></div>
                </div> 
                {selectedMessage.actions && selectedMessage.actions.length > 0 && (</div>
                  <div className=flex items-center space-x-3>
                    {selectedMessage.actions.map((action, index) => (
                       />
                        {action.label}</div>
                      </Link>
                    ))}</div>
                  </div>
                )}</div>
              </div></div>
            </motion.div></div>
          </div>
        )}</div>
                                      </div></div>
      </div></div>
    </div>
  );
};
;
export default $1;)""'`</div>