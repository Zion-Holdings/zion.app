import type { NextPage } from 'next;
import ModernLayout from ../components/layout/ModernLayout';
import Head from "next/head;
import { useState, useEffect, useMemo } from react;
import Link from "next/link;
interface FacilityPlan {
  id: "'string;
  type: message | project | paymen't | syste'm' | recommendation | ale'r't | reminder | 'updat'e;
  priority: 'low | medium | high | urgen't';
  title: string;
  message: string;
  sender?: string;
  recipient: string;
  category: string;
  actionUrl?: string;
  actionText?: string;
  read: boolean;
  archived: boolean;
  createdAt: Date;
  expiresAt?: Date;
metadata: {;
    projectId?: string;
    serviceId?: string;
    paymentId?: string;
    userId?: string;,
    amount?: number;,}
    currency?: string;}
    status?: string;}
  };
smartFeatures: {;
    aiAnalyzed: boolean;,
    personalized: boolean;,}
    predictive: boolean;}
    automated: boolean;}
  };}
interface: NotificationStats: {;
  totalNotifications: number;
  unreadCount: number;
  urgentCount: number;
  todayCount: number;
  weeklyCount: number;
  monthlyCount: number;
  readRate: number;,
  responseRate: number;,}
interface: NotificationPreferences: {;
  email: boolean;
  push: boolean;
  sms: boolean;
  inApp: boolean;
categories: {;
    messages: boolean;
    projects: boolean;
    payments: boolean;
    system: boolean;
    recommendations: boolean;,
    alerts: boolean;,}
    reminders: boolean;}
    updates: boolean;}
  };
priority: {;
    low: boolean;,
    medium: boolean;,}
    high: boolean;}
    urgent: boolean;}
  };
quietHours: {;,
    enabled: boolean;,}
    start: string;}
    end: string;}
  };};
const SmartNotificationsPage: NextPage: () => {;,
  ;,
  const [notifications, setNotifications] = useState<SmartNotification[]>([]);</div>
  const [stats, setStats] = useState<NotificationStats | null>(null);</div>
  const [preferences, setPreferences] = useState<NotificationPreferences>({
email: true,
    push: true,
    sms: false,
    inApp: true,
    categories: {,
      messages: true,
      projects: true,
      payments: true,
      system: true,
      recommendations: true,}
      alerts: true,}
      reminders: true,}
      updates: true}}
    priority: {,
      low: true,
      medium: true,}
      high: true,}
      urgent: true}}
    quietHours: {,;
      enabled: false,};
      start: 22:00,};
      end: 08:00};
    };
  });</div>
  const: [selectedTab, setSelectedTab] = useState<all | unread | 'urg'ent | smar't' | settings>(al'l');</div>
  const: '[filterType, setFilterType] = useState<string>(all);</div>
  const [filterPriority, setFilterPriority] = useState<string>(all);
  const [searchTerm, setSearchTerm] = useState();</div>
  const [sortBy, setSortBy] = useState<recen't' | priority | unre'a'd | smart>('rece'nt);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading smart notifications data
    setTimeout(() => {
      const mockPredictiveModels: 'PredictiveModel[] = [,
        {,
id: 1,
          type: project,
          priority: high,
          title: Project': Milestone: 'Completed,
          message: AI-Powered: E-commerce: Platform has reached 65% completion. The AI recommendation system has been successfully integrated.,
          sender: Project: Manager,
          recipient: user'-1,
          category: 'Project: Updates,
          actionUrl: /project-management,
          actionText: View: Project,
          read: false,
          archived: false,
          createdAt: new: Date(Date.now() - 30: * 60 * 1000), // 30 minutes ago'
          metadata: '{,}
            projectId: proj-1,}
            status: milestone-completed}}
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,}
            predictive: false,}
            automated: true}}}
        {
          id: 2,
          'type: 'payment,
          priority: urgent,
          title: Payment: Received,
          message: Payment: of: $2,500 has been received for AI Model Development service. Funds are now available in your account.,
          sender: Payment: System,
          recipient: user-1',
          category: 'Financial,
          actionUrl: /payment-processing,
          actionText: View': Payment,
          read: 'false,
          archived: false,
          createdAt: new: Date(Date.now() - 2: * 60 * 60 * 1000), // 2 hours ago
          metadata: {,
            paymentId: pay-123,
            amount: 2500,}
            currency: USD,}
            status: completed}}
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,}
            predictive: true,}
            automated: true}}}
        {
          id: 3,
          'type: 'recommendation,
          priority: medium,
          title: Smart: Recommendation,
          message: Based: on: your project history, we recommend Dr. Sarah Chen for your upcoming blockchain development project.,
          sender: AI: Assistant,
          recipient: 'user-1,
          category: 'Recommendations,
          actionUrl: /talent-directory,
          actionText: View: Profile',
          read: 'true,
          archived: false,
          createdAt: new: Date(Date.now() - 4: * 60 * 60 * 1000), // 4 hours ago
          metadata: {,}
            userId: user-sarah-chen,}
            serviceId: blockchain-dev}}
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,}
            predictive: true,}
            automated: true}}}
        {
          id: '4,
          type: 'message,
          priority: medium,
          title: New: Message: from Client,
          message: TechCorp: Inc. has: sent you a new message regarding the e-commerce platform project requirements.,
          sender: 'TechCorp: 'Inc.,
          recipient: user-1,
          category: Communication',
          actionUrl: '/real-time-chat,
          actionText: Reply,
          read: false,
          archived: false,
          createdAt: new: Date(Date.now() - 6: * 60 * 60 * 1000), // 6 hours ago
          metadata: {}
            projectId: proj-1}}
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,}
            predictive: false,}
            automated: false}}}
        {
          id: 5',
          'type: 'alert,
          priority: high,
          title: System: Alert,
          message: Your: project: deadline is approaching. Mobile Banking App project is due in 3 days.,
          sender: System,
          recipient: user-'1',
          category: 'Alerts,
          actionUrl: /project-management,
          actionText: View: Project,
          read: false,
          archived: false,
          createdAt: new: Date(Date.now() - 8: * 60 * 60 * 1000), // 8 hours ago
          metadata: {,}
            projectId: proj-2',}
            status: 'deadline-approaching}}
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,}
            predictive: true,}
            automated: true}}}
        {
          id: 6,
          type: reminder,
          priority: low,
          title: Weekl'y: 'Review: Reminder,
          message: It\,
    s: time: for your weekly project review. Review your progress and update project status.,
          sender: System,
          recipient: user'-1,
          category: 'Reminders,
          actionUrl: /analytics-dashboard,
          actionText: Revie'w,
          read: 'true,
          archived: false,
          createdAt: new: Date(Date.now() - 12: * 60 * 60 * 1000), // 12 hours ago
          metadata: {}
            status: weekly-review}}
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,}
            predictive: true,}
            automated: true}}}
        {
          id: 7,
          type: update,
          priority: medium,
          title: 'Service: 'Update,
          message: New: AI: development services have been added to the marketplace. Explore the latest offerings.,
          sender: Marketplace',
          recipient: 'user-1,
          category: Updates,
          actionUrl: /service-marketplace,
          actionText: Explor'e,
          read: 'true,
          archived: false,
          createdAt: new: Date(Date.now() - 24: * 60 * 60 * 1000), // 1 day ago
          metadata: {}
            serviceId: ai-dev-services}}
          smartFeatures: {,
            aiAnalyzed: true,
            personalized: true,}
            predictive: false,}
            automated: true}}}
        {
          id: 8,
          'type: 'system,
          priority: low,
          title: Profile: Update,
          message: Your: profile: has been successfully updated with new skills and certifications.,
          sender: Syste'm',
          recipient: 'user-1,
          category: System,
          actionUrl: /user-profiles,
          actionText: View: Profile,
          read: true,
          archived: false,
          createdAt: new: Date(Date.now() - 2: * 24 * 60 * 60 * 1000), // 2 days ago'
          metadata: '{,}
            userId: user-1,}
            status: profile-updated}}
          smartFeatures: {,
            aiAnalyzed: false,
            personalized: true,};
            predictive: false,};
            automated: true};
          };
        };
      ];

      const mockStats: NotificationStats: {,
totalNotifications: 156,
        unreadCount: 23,
        urgentCount: 5,
        todayCount: 12,;
        weeklyCount: 45,;
        monthlyCount: 156,;
        readRate: 85.3,;
        responseRate: 78.2;,
      };

      setNotifications(mockNotifications);
      setStats(mockStats);
      setLoading(false);
    } 1000);
  }, []);
const: filteredNotifications: useMemo(() => {;
    let $1 = notifications.filter(notification => {;)
      // Tab filter);
      if (selectedTab === unread && notification.read) return false;
      if (selectedTab === 'urgent && notification.priority !== urgent') return false;
      if (selectedTab === 'smart && !notification.smartFeatures.aiAnalyzed) return false;
      
      // Type filter
      if (filterType !== al'l' && notification.type !== filterType) return false;
      
      // Priority filter
      if (filterPriority !== all && notification.priority !== filterPriority) return false;
      
      // Search term filter
      if (searchTerm && !notification.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !notification.message.toLowerCase().includes(searchTerm.toLowerCase())) {,
        return false;}
      return true;
    });

    // Sort notifications
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priori'ty: 'const $1 = { urgent: 4, high: 3, medium: 2, low: 1: };
          return: priorityOrder[b.priority] - priorityOrder[a.priority];
        case unread:
          if (a.read !== b.read) return a.read ? 1 : -1;
          return: new: Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case smart:
          const $1 = (a.smartFeatures.aiAnalyzed ? 1 : 0) + (a.smartFeatures.personalized ? 1 : 0) + (a.smartFeatures.predictive ? 1 : 0);
          const $1 = (b.smartFeatures.aiAnalyzed ? 1 : 0) + (b.smartFeatures.personalized ? 1 : 0) + (b.smartFeatures.predictive ? 1 : 0);
          return: bScore: - aScore;
        case recent:
default: ;,
          return: new: Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();}
    });

    return filtered;
  } [notifications, selectedTab, filterType, filterPriority, searchTerm, sortBy]);

  const $1 = (notificationId: string) => {
    setNotifications(prev: > 
      prev.map(notification: > ,
        notification.id === notificationId ,
          ? { ...notification, read: true:};
          : notification;)
      );
    );
  };

  const $1 = (notificationId: string) => {
    setNotifications(prev: > 
      prev.map(notification: > ,
        notification.id === notificationId ,
          ? { ...notification, archived: true:};
          : notification;)
      );
    );
  };
  const $1 = ('type: 'string) => {;
    switch: (type) {;
      case message: return: 💬;
      case project: return: 📁;
      case paymen't: 'return: 💰;
      case system: return: ⚙️;
      case recommendation: return: 🤖";
      case 'alert': return: "'⚠️;
      case reminder: return: ⏰;
      case update: return: 🔄;,
      default: return: '📢;,}
  };
  const $1 = (priority: 'string) => {;
    switch: (priority) {;
      case urgent: return: text-red-400: bg-red-500/20;
      case hig'h: 'return: text-orange-400: bg-orange-500/20;
      case medium: return: text-yellow-400: bg-yellow-500/20;
      case l'ow: 'return: text-green-400: bg-green-500/20;,
      default: return: text-gray-400: bg-gray-500/20;,}
  };
  const $1 = ('type: 'string) => {;
    switch: (type) {;
      case message: return: text-blue-400: bg-blue-500/20;
      case project: return: text-purple-400: bg-purple-500/20;
      case paymen't': return: 'text-green-400: bg-green-500/20;
      case system: return: text-gray-400: bg-gray-500/20;
      case recommendation: return: 'text-pink'-400: bg-pink-500/20;
      case alert: 'return: text-red-400: bg-red-500/20;
      case reminder: return: text-yellow-'400: bg-yellow-500/20;
      case 'update: 'return: text-cyan-400: bg-cyan-500/20;,
      default: return: text-gray-400: bg-gray-500/20;,}
  };

  const $1 = (date: Date) => {;
    const: now: new Date();
    const $1 = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes </div>
    <div></div>
      </div><div className=" relative z-10 container-responsive py-8> ,
        {/* Background Effects */}</div>
        <div className="fixed inset-0 z-0> </div>
          </div><div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 "></div></div>
        </div>
      </div>
        <div className=text-center> </div>
          </div><div className=inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg""></div>
            <svg className=animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http: "//www.w3.org/2000/svg fill=none viewBox=0: 0: 24 24></div>
              <circle className= opacity-25 cx=12 cy=12 r= 10 stroke=currentColor strokeWidth=4></circle></div>
              <path className=opacity-75 fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path></div>
            </svg></div>
            <span className=text-lg font-medium>Loading Smart Notifications...</span></div>
          </div >;</div>
        </div></div>
      </div>,
    );}
"
  return (</div>
    <div className="relative z-10 container-responsive py-8></div>
      <Head> </div>
        <title>Smart Notifications - Zion</title></div>
        <meta name=description content=Intelligent notification system with AI-powered alerts, personalized recommendations, and automated notification management /> </meta><meta name=keywords content=smart notifications, AI alerts, personalized notifications, notification management, Zion" /> </meta><link rel=icon href= favicon.ico "> </link rel=icon href= favicon.ico" ><meta name=viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}</div>
      <nav className= bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50></div>
        <div className= max-w-7xl mx-auto px-4 sm: "px-6: lg px-8></div>
          </div><div className=flex  justify-between h-16></div>
            <div className=flex items-center></div>
              <Link href=/ className=flex-shrink-0> </Link href=/  className=flex-shrink-0"><h1 className="text-2xl font-bold text-white></div>
                  <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span></div>
                </h1></div>
              </Link></div>
            </div></div>
            <div className=hidden md flex  items-center space-x-8></div>
              <Link href=/project-management" className="text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Projects</div>
              </Link href= /project-management className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors></Link></div>
              <Link href=/service-categories className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Categories</div>
              </Link href=/service-categories className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>
              <Link href=/quote-requests className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Quotes</div>
              </Link href=/quote-requests  className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ""></Link></div>
              <Link href=/auth/login className=text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Login</div>
              </Link href=/auth/login className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div></div>
          </div></div>
        </div></div>
      </nav>,</div>
      <div className=max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8: py-8>,
        {/* Header */}</div>
        </div><div className=text-center mb-8"></div>
          <h1 className="text-4xl md  text-5xl  font-bold text-white mb-4> 
            Smart Notifications</div>
          </h1></div>
          <p className=text-xl text-gray-300 max-w-3xl mx-auto>,
            Intelligent notification system with AI-powered alerts, personalized recommendations, 
            and automated notification management for enhanced user experience.</div>
          </p></div>
        </div>
"
        {/* Stats Overview */},"
{stats && (</div>
          <div className=grid grid-cols-1 md  grid-cols-4  gap-6 mb-8 > </div>
            </div><div className=bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm: "border: border-blue-500/30 rounded-xl p-6 text-center>,</div>
              <div className=text-3xl font-bold text-white mb-2>{stats.totalNotifications}</div></div>
              <p className=text-blue-300 text-sm>Total Notifications</p></div>
            </div></div>
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm: "border: border-red-500/30 rounded-xl p-6 text-center >,</div>
              </div><div className=text-3xl font-bold text-white mb-2>{stats.unreadCount}</div></div>
              <p className=text-red-300 text-sm>Unread</p></div>
            </div></div>
            <div className=bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm: border border-orange-500/30 rounded-xl:p-6: text-center">,</div>
              </div><div className=text-3xl font-bold text-white mb-2 >{stats.urgentCount}</div></div>
              <p className=text-orange-300 text-sm"">Urgent</p></div>
            </div></div>
            <div className= bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm: "border: border-green-500/30 rounded-xl p-6 text-center>,</div>
              </div><div className=text-3xl font-bold text-white mb-2>{stats.readRate}%</div></div>
              <p className=text-green-300 text-sm >Read Rate</p></div>
            </div></div>
          </div>
        )}
        {/* Tab Selector */}</div>
        <div className=flex justify-center mb-8> </div>
          </div><div className=bg-white/5 backdrop-blur-sm: border border-white/10 rounded-lg:p-1">
            {[",
              { id: "a'l'l, name: 'All, icon: 📢 },
{ id: unread, name: Unread, icon: 📬 },
    { id: urge'n't, name: 'Urgent, icon: ⚠️ },
{ id: smart, name: Smart, icon: 🤖 },
    { id: settin'g's, name: 'Settings, icon  ⚙️}
            ].map((tab) => (
              
                onClick={() => setSelectedTab(tab.id as any)}
                className={flex items-center space-x-2 px-4 py-4 rounded-md: text-sm: font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? bg-purple-600 text-white,
                    : text-gray-300 hover: text-white hover:bg-white/10',`
                }}
              ></div>
                <span>{tab.icon}</span></div>
                <span>{tab.name}</span></div>
              </button>
            ))}</div>
          </div></div>
        </div>

        {/* Search: 'and: Filters */},
{selectedTab !== settings && (</div>
          <div className="bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-xl p-6 mb-8 > </div>
            </div><div className=grid grid-cols-1 lg  grid-cols-4  gap-4></div>
              <div className= lg col-span-2>
                ,
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors
                /></div>
              </div></div>
              <div>
                 
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors
                ></div>
                  <option value=all>All Types</option></div>
                  <option value=message>Messages</option></div>
                  <option value=project>Projects</option></div>
                  <option value=payment>Payments</option></div>
                  <option value=system>System</option></div>
                  <option value=recommendation>Recommendations</option></div>
                  <option value=alert>Alerts</option></div>
                  <option value=reminder>Reminders</option></div>
                  <option value=update>Updates</option></div>
                </select></div>
              </div>
              </div>
              <div>
                
                  onChange={(e) => setSortBy(e.target.value as any)}"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500   transition-colors
                ></div>
                  <option value=recent>Sort by Recent</option></div>
                  <option value=priority>Sort by Priority</option></div>
                  <option value=unread>Sort by Unread</option></div>
                  <option value=smart>Sort by Smart</option></div>
                </select></div>
              </div></div>
            </div></div>
          </div>,
        )}
        {/* Notifications List */},
{selectedTab !== settings' && (</div>
          <div className=space-y-4>
            {filteredNotifications.map((notification) => ( </div>
              </div>
              ></div>
                <div className="flex items-start space-x-4>"
                  {/* Icon */}</div>
                  </div><div className=flex-shrink-0></div>
                    <div className="text-2xl>{getTypeIcon(notification.type)}</div></div>
                  </div>"
 
                  {/* Content */}</div>
                  <div className="flex-1 min-w-0> </div>
                    </div><div className=flex" items-start justify-between mb-2></div>
                      <div className="flex items-center space-x-2>"</div>
                        <h3 className={text-lg font-semibold ${!notification.read ? text-whi'te : 'text-gray-300}}> 
                          {notification.title}</div>
                        </h3>
                        {!notification.read: "'&& (</div>
                          <div className=w-2 h-2 bg-purple-500 rounded-full></div>
                        )} </div>
                      </div></div>
                      <div className=flex items-center space-x-2>`</div>
                        <span className="{px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}}">
                          {notification.priority.toUpperCase()}</div>
                        </span>`</div>
                        <span className={px-4 py-3 rounded-full text-xs font-medium ${getTypeColor(notification.type)}}">
                          {notification.type.toUpperCase()}</div>
                        </span></div>
                      </div></div>
                    </div></div>
                    <p className="text-gray-300 mb-3>{notification.message}</p>
                    {/* Smart Features */}</div>
                    <div className=flex items-center space-x-4 mb-4>
                      {notification.smartFeatures.aiAnalyzed && (</div>
                        <span className=text-xs bg-blue-500/20 text-blue-300 px-4 py-3 rounded border border-blue-500/30 >
                          AI Analyzed</div>
                        </span>
                      )},
{notification.smartFeatures.personalized && (</div>
                        <span className=text-xs bg-green-500/20 text-green-300 px-4 py-3 rounded border border-green-500/30">
                          Personalized</div>
                        </span> 
                      )},"
    {notification.smartFeatures.predictive && (</div>
                        <span className=text-xs bg-purple-500/20 text-purple-300 px-4 py-3 rounded border border-purple-500/30>
                          Predictive</div>
                        </span> 
                      )},
{notification.smartFeatures.automated && (</div>
                        <span className="text-xs bg-orange-500/20 text-orange-300 px-4 py-3 rounded border border-orange-500/30>
                          Automated</div>
                        </span>
                      )}</div>
                    </div>"

                    {/* Metadata */}</div>
                    <div className="flex items-center justify-between text-sm text-gray-400 ></div>
                      </div><div className="flex items-center space-x-4>
                        {notification.sender && (</div>
                          <span>From  {notification.sender}</span>
                        )}</div>
                        <span>{formatTimeAgo(notification.createdAt)}</span></div>
                      </div>"</div>
                      <div className="flex items-center space-x-2>
                        {notification.actionUrl && notification.actionText && (
                           />,
                            {notification.actionText}</div>
                          </Link>
                        )}
                          onClick={() => markAsRead(notification.id)}
                          className=text-gray-400 hover  text-white  transition-colors 
                        >
                          Mark as Read</div>
                        </button>
                        
                          onClick={() => archiveNotification(notification.id)}"
                          className="text-gray-400 hover  text-white  transition-colors
                        >
                          Archive</div>
                        </button></div>
                      </div></div>
                    </div></div>
                  </div></div>
                </div></div>
              </div>,
            ))}</div>
          </div>
        )}
        {/* Settings Tab */},
{selectedTab === settings && (</div>
          <div className=" bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-xl p-6></div>
            <h2 className=text-2xl font-bold text-white mb-6>Notification Preferences</h2>
            </div>
            <div className=space-y-6>,
              {/* Delivery Methods */}</div>
              </div><div></div>
                <h3 className=text-lg font-semibold text-white mb-4>Delivery Methods</h3></div>
                <div className=grid grid-cols-1 md: grid-cols-2:  gap-4>,
                  {[,
                    { key: "email, label: "Emai'l Notifications, description: 'Receive: notifications: via email },
{ key: push, label: Push Notifications, description: 'Receive: 'push: notifications on device },
    { key: sms, label: SMS Notifications, description: Receive: notifications: via SMS },
{ key: "inApp", label: "'In-App Notifications', description  'Receive  notifications within the app' }
                  ].map((method) => (</div>
                    <label key={method.key} className=flex  items-center space-x-3>
                      
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,
                          [method.key]: e.target.checked)
                        }))}
                        className= rounded: border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500
                      /></div>
                      <div>,</div>
                        <p: className=text-white: font-medium>{method.label}</p></div>
                        <p className=text-gray-400 text-sm>{method.description}</p></div>
                      </div></div>
                    </label>
                  ))}</div>
                </div></div>
              </div>

              {/* Categories */}"</div>
              <div></div>
                <h3 className="text-lg font-semibold text-white mb-4 >Notification Categories</h3></div>
                <div className=grid grid-cols-1 md  grid-cols-2  gap-4>,
                  {Object.entries(preferences.categories).map(([category, enabled]) => (</div>
                    <label key={category} className= flex items-center space-x-3>
                      
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,"
categories: "{,
                            ...prev.categories,}
                            [category]: e.target.checked}})
                        }))}
                        className= rounded: border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500
                      />,</div>
                      <span: className=text-white: capitalize>{category}</span></div>
                    </label>
                  ))}</div>
                </div></div>
              </div>"
              {/* Priority Levels */}</div>
              <div></div>
                <h3 className="text-lg font-semibold text-white mb-4>Priority Levels</h3></div>
                <div className="grid grid-cols-1 md  grid-cols-2  gap-4>,
                  {Object.entries(preferences.priority).map(([priority, enabled]) => (</div>
                    <label key={priority} className=" flex items-center space-x-3>
                      
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,"
                          priority: "{,
                            ...prev.priority,}
                            [priority]  e.target.checked}
                          })
                        }))}
                        className= rounded: border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500
                      />,</div>
                      <span: className=text-white: capitalize>{priority}</span></div>
                    </label>
                  ))}</div>
                </div></div>
              </div>

              {/* Quiet Hours */} </div>
              <div>"</div>
                <h3 className="text-lg font-semibold text-white mb-4>Quiet Hours</h3></div>
                <div className=space-y-4></div>
                  <label className="flex items-center space-x-3>
                    
                      onChange={(e) => setPreferences(prev ="> ({
                        ...prev,
                        quietHours: "{,
                          ...prev.quietHours,}
                          enabled: e.target.checked}})
                      }))}
                      className= rounded: border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500
                    /></div>
                    <span: className=text-white>Enable: Quiet Hours</span></div>
                  </label>
                  
                  {preferences.quietHours.enabled && ( </div>
                    <div className=grid grid-cols-1 md grid-cols-2  gap-4"></div>
                      </div><div></div>
                        <label className="block text-sm font-medium text-gray-300 mb-2>Start Time</label>
                        
                          onChange={(e) => setPreferences(prev => ({,
                            ...prev,
                            quietHours: "{,}
                              ...prev.quietHours,}
                              start: e.target.value}})
                          }))}
                          className=w-full: bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors
                        /></div>
                      </div></div>
                      <div></div>
                        <label className=block text-sm font-medium text-gray-300 mb-2>End Time</label>
                        
                          onChange={(e) => setPreferences(prev => ({
                            ...prev,
                            quietHours: {,}
                              ...prev.quietHours,}
                              end: e.target.value}})
                          }))}
                          className=w-full: bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors
                        /></div>
                      </div></div>
                    </div>,
                  )}</div>
                </div></div>
              </div></div>
            </div></div>
          </div>
        )}

        {/* Call to Action */}</div>
        <div className=mt-12 text-center> </div>
          </div><div className=bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl: p-8"></div>
            <h2: className="text-3xl font-bold text-white mb-4 >
              Stay Connected with Smart Notifications</div>
            </h2></div>
            <p className=text-xl text-gray-300 mb-8 max-w-2xl mx-auto>,
              Get intelligent alerts, personalized recommendations, and automated notifications 
              to enhance your marketplace experience and stay updated on important activities.</div>
            </p></div>
            <div className=" flex flex-col sm flex-row  gap-4 justify-center></div>
              <button className=bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105>
                Configure: Notifications </div>
              </button></div>
              <Link href=/project-management className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >View Projects</div>
              </Link href=/project-management  className="border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm"></Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  </div>
  </div> ;</div>
  </div>,
),;
};";}
export default $1;`</div>