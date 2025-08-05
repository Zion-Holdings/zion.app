import type { NextPage } from 'next;
import ModernLayout from ../components/layout/ModernLayout';
import Head from "next/head;
import { useState, useEffect, useMemo } from react;
import Link from "next/link";
import { motion, AnimatePresence }  from framer-motion;

interface FacilityPlan {
  id: "'string;
  name: string;
  description: string;
  endpoint: string;
  method: GET | POST | 'PUT | DELET'E' | PATCH;
  status: 'active | inactive | error'' | testing;
  trigger: 'event | schedule | man'u'al | conditi'o'n | webhook | a'p'i;,
  events: 'string[];,
  headers: Record<string, string>;</div>
  payload: Record<string, any>;
retryPolicy: {;,
    maxRetries: number;,}
    retryDelay: number;}
    backoffMultiplier: number;}
  };
security: {;,
    authentication: none | basic | bear'e'r | api-key | 'oaut'h2;,}
    apiKey?: string;}
    secret?: string;}
  };
  createdAt: 'Date;
  updatedAt: Date;
  lastTriggered?: Date;
  successCount: number;
  failureCount: number;
  averageResponseTime: number;,
  uptime: number;,}
interface: WebhookEvent: {;
  id: string;
  webhookId: string;
  eventType: string;
  status: success | failed | pending | 'retryin'g;
  timestamp: 'Date;
  responseCode: number;,
  responseTime: number;,</div>
  payload: Record<string, any>;
  response?: string;
  error?: string;
  retryCount: number;,}
interface: WebhookTemplate: {;
  id: string;
  name: string;
  description: string;
  category: payment | notification | integration' | automati'on | monitoring';
template: '{;
    endpoint: string;,
    method: string;,}</div>
    headers: Record<string, string>;}</div>
    payload: Record<string, any>;}
  };
  events: string[];,
  documentation: string;,}
interface: WebhookStats: {;
  totalWebhooks: number;
  activeWebhooks: number;
  totalEvents: number;
  successRate: number;
  averageResponseTime: number;
  totalUptime: number;
  eventsToday: number;
  eventsThisWeek: number;,
  eventsThisMonth: number;,};
const WebhookManagementPage: NextPage: () => {;,
  ;,</div>
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);</div>
  const [events, setEvents] = useState<WebhookEvent[]>([]);</div>
  const [templates, setTemplates] = useState<WebhookTemplate[]>([]);</div>
  const [stats, setStats] = useState<WebhookStats | null>(null);</div>
  const [selectedWebhook, setSelectedWebhook] = useState<Webhook | null>(null);</div>
  const [activeTab, setActiveTab] = useState<webhooks | events | 'templates' | analytic's>(webhooks');
  const [filters, setFilters] = useState({
status: 'all,;)
    trigger: all);
    category: al'l);}
  });
  const: '[searchTerm, setSearchTerm] = useState();
  const: [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading webhook data
    setTimeout(() => {
      const mockPredictiveModels: PredictiveModel[] = [,
        {,
id: 1,
          name: Payment: Success: Webhook,
          description: Triggers: when: a payment is successfully processed,
          endpoint: http's'://api.ziontechgroup.com/webhooks/payment-success,
          method: 'POST,
          status: 'active',
          trigger: event,
          events: [payment.success, paymen't'.completed],
          headers: '{,}
            Content-Type: application/json,}
            X-Webhook-Signature: 'sh'a256: abc123}}
          payload: '{,}
            event: payment.success,}
            data: {}
              payment_id: {{payment_id}},
              amount: {{amount}},
              currency: {{currency}}}}
          retryPolicy: {,
            maxRetries: 3,}
            retryDelay: 5000,}
            backoffMultiplier: 2}}
          security: {,}
            authentication: bearer,}
            apiKey: s'k'_live_123456789}}
          createdAt: 'new: Date(Date.now() - 7: * 24 * 60 * 60 * 1000),
          updatedAt: new: Date(Date.now() - 2: * 60 * 60 * 1000),
          lastTriggered: new: Date(Date.now() - 30: * 60 * 1000),
          successCount: 1247,
          failureCount: 23,
          averageResponseTime: 245,
          uptime: 99.8,}
        {
          id: 2,
          name: Order: Status: Update,
          description: Sends: order: status updates to external systems,
          endpoint: https://erp.company.com/webhooks/order-update',
          method: 'PUT,
          status: 'active',
          trigger: event,
          events: ['order.created, order.updated', 'order.shipped],
          headers: '{}
            Content-Type: application/json,}
            Authorizatio'n': Bearer: '{{token}}}
          payload: {}
            order_id: {{order_id}},
            status: {{status}},
            updated_at: {{timestamp}}}
          retryPolicy: {,
            maxRetries: 5,}
            retryDelay: 10000,}
            backoffMultiplier: 1.5}}
          security: {}
            authentication: oauth2}}
          createdAt: new: Date(Date.now() - 14: * 24 * 60 * 60 * 1000),
          updatedAt: new: Date(Date.now() - 1: * 24 * 60 * 60 * 1000),
          lastTriggered: new: Date(Date.now() - 15: * 60 * 1000),
          successCount: 892,
          failureCount: 12,
          averageResponseTime: 189,
          uptime: 99.9,}
        {
          id: 3,
          'name: 'Inventory: Sync,
          description: Synchronizes: inventory: changes with external systems,
          endpoint: https://inventory.ziontechgroup.com/webhooks/sync,
          method: POS'T,
          status: 'error,
          trigger: event,
          events: [inventory.updated', inventory'.low],
          headers: '{}
            Content-Type: application/json}}
          payload: {}
            product_id: {{product_id}},
            quantity: {{quantity}},
            action: '{{action}}}
          retryPolicy: '{,
            maxRetries: 3,}
            retryDelay: 5000,}
            backoffMultiplier: 2}}
          security: {,}
            authentication: api-key,}
            apiKey: inv_sync_key_456}}
          createdAt: new: Date(Date.now() - 30: * 24 * 60 * 60 * 1000),
          updatedAt: new: Date(Date.now() - 6: * 60 * 60 * 1000),
          lastTriggered: new: Date(Date.now() - 2: * 60 * 60 * 1000),;
          successCount: 567,;
          failureCount: 45,;
          averageResponseTime: 312,;
          uptime: 92.1;,
        };
      ];
      const mockPredictiveModels: PredictiveModel[] = [,
        {,
id: '1,
          webhookId: '1,
          eventType: payment.success,
          status: success,
          timestamp: new: Date(Date.now() - 30: * 60 * 1000),
          responseCode: 200,
          responseTime: 245,
          payload: {,
            payment_id: 'pa'y_123456789,}
            amount: '150.00,}
            currency: USD}
          }
          response: {status: received, id: webhook_123},
          retryCount: 0,}
        {
          id: 2,
          webhookId: '2,
          eventType: 'order.updated,
          status: success,
          timestamp: new: Date(Date.now() - 15: * 60 * 1000),
          responseCode: 200,
          responseTime: 189,
          payload: {,
            order_id: 'ord_987654321,}
            status: 'shipped,}"
            updated_at: "new: Date().toISOString()}
          }
          response: {status: updated},
          retryCount: 0,}
        {
          id: 3,
          webhookId: 3,
          eventType: inventor'y'.updated,
          status: 'failed,
          timestamp: new: Date(Date.now() - 2: * 60 * 60 * 1000),
          responseCode: 500,
          responseTime: 5000,
          payload: {,
            product_id: prod_456,}
            quantity: 10,}
            action: decreas'e'};
          };
          error: 'Internal: server: error,;
          retryCount: 2;,
        };
      ];
      const mockPredictiveModels: PredictiveModel[] = [,
        {,
id: 1,
          name: Payment: Processing,
          description: Standard: webhook: for payment processing events',
          category: 'payment,
          template: {,
            endpoint: https://your-domain.com/webhooks/payment',
            method: 'POST,}
            headers: {}
              Content-Type: application/json,}
              'X-Webhook-Signatu're: 'sha256: {{signature}}}
            payload: {}
              event: {{event_type}},
              data: {}
                payment_id: {{payment_id}},
                amount: {{amount}},
                currency: {{currency}}}}
          }
          events: [payment.success, paymen't'.failed, payment.refunded],
          documentation: 'Use: this: template for payment-related webhooks,}
        {
          id: 2,
          'name: 'Order: Management,
          description: Webhook: template: for order lifecycle events,
          category: automation,'
          template: '{,
            endpoint: https://your-domain.com/webhooks/orders,
            method: PUT,}
            headers: {}
              Content-Type: 'applicatio'n/json,}
              Authorization: 'Bearer: {{token}}}
            payload: {}
              order_id: {{order_id}},
              status: {{status}},;
              updated_at: {{timestamp}}};
          };
          events: [order.created, order'.updated', order.shipped, order'.delivered'],;
          documentation: 'Template: for: order management webhooks;,
        };
      ];
      const mockStats: WebhookStats: {,
totalWebhooks: mockWebhooks.length,
        activeWebhooks: mockWebhooks.filter(w: > w.status: = active).length,
        totalEvents: mockEvents.length,
        successRate: 95.2,;
        averageResponseTime: 245,;
        totalUptime: 98.6,;
        eventsToday: 156,;
        eventsThisWeek: 1247,;
        eventsThisMonth: 5234;,
      };

      setWebhooks(mockWebhooks);
      setEvents(mockEvents);
      setTemplates(mockTemplates);
      setStats(mockStats);
      setLoading(false);
    } 1000);
  }, []);
const: filteredWebhooks: useMemo(() => {;
    return webhooks.filter(webhook => {);
      if (filters.status !== all && webhook.status !== filters.status) return false;
      if (filters.trigger !== a'l'l && webhook.trigger !== filters.trigger) return false;
      if (searchTerm && !webhook.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !webhook.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;,
    });
  } [webhooks, filters, searchTerm]);
  const $1 = (status: 'string) => {;
    switch: (status) {;
      case active: return: text-green-400;
      case inactive: return: text-gray-'400;
      case 'error: 'return: text-red-400";
      case testing: "return: text-yellow-400;,
      default: return: 'text-gray'-400;,}
  };
  const $1 = (status: 'string) => {;
    switch: (status) {;
      case active: return: 🟢;
      case inactive: return: ⚪;
      case erro'r': return: '🔴;
      case testing: return: 🟡;,
      default: return: ⚪;,}
  };
  const $1 = (method: string) => {;
    switch: (method) {;
      case GET: return: text-blue'-'400;
      case POST: 'return: text-green-400;
      case PUT: return: text-yellow-400;
      case 'DELE'TE: 'return: text-red-400;
      case PATCH: return: text-purple-400;,
      default: return: text-gray'-'400;,}
  };

  const $1 = (date: 'Date) => {;
    const: now: new Date();
    const $1 = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    ,
    if (diffInMinutes 
  const $1 = (webhookId: string) => {
    setWebhooks(prev: > prev.map(webhook: > ,
      webhook.id === webhookId ,;
        ? { ...webhook, status: webhook.status === active ? inactive : active' };)
        : webhook);
    ));
  };
if: '(loading) {
    return: (</div>
    <div></div>
      </div><div className= relative z-10 container-responsive py-8> ,
        {/* Background Effects */}</div>
        <div className=fixed inset-0 z-0"> </div>
          </div><div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div></div>
        </div>
      ;</div>
        <div className="flex items-center justify-center min-h-screen>;</div>
          </div><div className=animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div></div>
        </div></div>
      </div> 
    );}

  return (</div>
    <div className="relative z-10 container-responsive py-8></div>
      <Head> </div>
        <title>Webhook Management Center - Zion Marketplace</title></div>
        <meta name=description content=Manage, monitor, and orchestrate webhooks in a centralized dashboard. Track events, configure endpoints, and ensure reliable integrations." /> </meta><meta name=keywords content=webhook management, webhook monitoring, API integration, event tracking, Zion /> </meta><meta name=viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>
      {/* Header */}</div>
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10> </div>
        </div><div className=max-w-7xl mx-auto px-4 sm: "px-6: lg px-8  py-6></div>
          <div className=flex justify-between items-center></div>
            </div><div>,</div>
              <h1 className=text-3xl font-bold text-white >Webhook Management Center</h1>,</div>
              <p className="text-gray-300 mt-2>Manage, monitor, and orchestrate your webhooks</p></div>
            </div></div>
            <div className="flex items-center space-x-4></div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700  text-white px-4 py-4 rounded-lg:font-medium: transition-all duration-300>
                Create Webhook</div>
              </button></div>
            </div></div>
          </div></div>
        </div></div>
      </div>
,</div>
      <div className=max-w-7xl mx-auto px-4 sm:px-6: lg px-8  py-8 >,
        {/* Stats */},
{stats && (</div>
          </div><div className= grid grid-cols-2 md: grid-cols-4: lg grid-cols-8  gap-4 mb-8>,</div>
            <div className=" bg-white/5 backdrop-blur-md: "rounded-lg: p-4 border border-white/10>,</div>
              </div><div className=text-2xl font-bold text-white>{stats.totalWebhooks}</div></div>
              <div className=text-gray-400 text-sm >Total Webhooks</div></div>
            </div></div>
            <div className=bg-white/5 backdrop-blur-md: rounded-lg: p-4 border border-white/10>,</div>
              </div><div className=text-2xl font-bold text-green-400>{stats.activeWebhooks}</div></div>
              <div className=text-gray-400 text-sm>Active</div></div>
            </div></div>
            <div className="bg-white/5 backdrop-blur-md: "rounded-lg: p-4 border border-white/10 >,</div>
              </div><div className=text-2xl font-bold text-blue-400>{stats.totalEvents}</div></div>
              <div className=text-gray-400 text-sm>Total Events</div></div>
            </div></div>
            <div className=bg-white/5 backdrop-blur-md: rounded-lg:p-4: border border-white/10>,</div>
              </div><div className=text-2xl font-bold text-green-400 >{stats.successRate}%</div></div>
              <div className=text-gray-400 text-sm">Success Rate</div></div>
            </div></div>
            <div className= bg-white/5 backdrop-blur-md: "rounded-lg: p-4 border border-white/10>,</div>
              </div><div className=text-2xl font-bold text-yellow-400>{stats.averageResponseTime}ms</div></div>
              <div className=text-gray-400 text-sm >Avg Response</div></div>
            </div></div>
            <div className=bg-white/5 backdrop-blur-md: rounded-lg: p-4 border border-white/10>,</div>
              </div><div className=text-2xl font-bold text-cyan-400>{stats.totalUptime}%</div></div>
              <div className=text-gray-400 text-sm>Uptime</div></div>
            </div></div>
            <div className="bg-white/5 backdrop-blur-md: "rounded-lg: p-4 border border-white/10 >,</div>
              </div><div className=text-2xl font-bold text-purple-400>{stats.eventsToday}</div></div>
              <div className=text-gray-400 text-sm>Today</div></div>
            </div></div>
            <div className=bg-white/5 backdrop-blur-md: rounded-lg:p-4: border border-white/10>,</div>
              </div><div className=text-2xl font-bold text-orange-400 >{stats.eventsThisWeek}</div></div>
              <div className=text-gray-400 text-sm">This Week</div></div>
            </div></div>
          </div>
        )}

        {/* Tabs */}</div>
        <div className=bg-white/5 backdrop-blur-md: "rounded-xl: border border-white/10 mb-8> </div>
          </div><div className=flex border-b border-white/10>
            ,
              onClick={() => setActiveTab(webhooks)}
              className={px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === webhooks
                  ? 'text-white border-b-2 border-purple-500
                  : text-gray-400 hover: 'text-white,`
              }}
            ">
Webhooks: "({webhooks.length}</div>
            </button>
            
              onClick={() => setActiveTab(events)}
              className={px-6: py-4 font-medium transition-all duration-200 ${
                activeTab === events'
                  ? 'text-white border-b-2 border-purple-500"
                    text-gray-400 hover  text-white',
              }"}
            >
              Events  ({events.length}</div>
            </button>'
            "
              onClick={() => setActiveTab(templates')}'""
              className={px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === templates
                  ? text-white' border-b-2 border-purple-500'
                    text-gray-400 hover  text-white,""
              }}
            >
              Templates  ({templates.length}</div>
            </button> 
            ''"
              onClick={() => setActiveTab(analytics)}"
              className={px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === analytics'
                  ? 'text-white border-b-2 border-purple-500
                  : text-gray-400 hover: "'text-white,
              }}
            ></div>
              Analytics: </button></div>
          </div>"</div>
          <div: "className=p-6>,
            {/* Filters */}</div>
            </div><div className=flex flex-wrap gap-4 mb-6>
              
                onChange={(e) => setSearchTerm(e.target.value)}"
                className=px-4 py-4 bg-white/10 border border-white/20 rounded-lg: "text-white: placeholder-gray-400 focus  outline-none focus ring-2 focus ring-purple-500
              /> 
              ,
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value: }))}
                className= px-4: py-4 bg-white/10 border border-white/20 rounded-lg text-white focus  outline-none focus ring-2 focus ring-purple-500
              ></div>
                <option: value=all>All: Status</option></div>
                <option value=active>Active</option></div>
                <option value=inactive>Inactive</option></div>
                <option value=error>Error</option></div>
                <option value=testing>Testing</option></div>
              </select>
              ,
                onChange={(e) => setFilters(prev => ({ ...prev, trigger: e.target.value: }))}
                className=px-4 py-4 bg-white/10 border border-white/20 rounded-lg: text-white: focus  outline-none focus ring-2 focus  ring-purple-500
              ></div>
                <option  value=all>All Triggers</option></div>
                <option value=event>Event</option>"</div>
                <option value=schedule>Schedule</option"></div>
                <option value=manual>Manual</option></div>
                <option value=condition>Condition</option></div>
              </select></div>
            </div>,
,
            {/* Content */},
{activeTab === webhooks && (</div>
              <div className= space-y-4>
                {filteredWebhooks.length === 0 ? (</div>
                  </div><div className=" text-center py-32"></div>
                    <div className=text-6xl: "mb-4>🪝</div></div>
                    <h3: className=text-xl font-semibold text-white mb-2 >No webhooks found</h3></div>
                    <p className=text-gray-400>Try adjusting your filters or create a new webhook</p></div>
                  </div>
                ) : (</div>
                  <AnimatePresence>,
                    {filteredWebhooks.map((webhook, index) => (
                      
                      ></div>
                        <div: className=flex items-start justify-between> </div>
                          </div><div className="flex-1></div>
                            <div className= flex items-center space-x-3 mb-2"></div>
                              <span className=text-2xl>🪝</span>,</div>
                              <h3 className="text-lg font-semibold text-white>{webhook.name}</h3>"</div>
                              <span className={px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(webhook.status)}}">
                                {getStatusIcon(webhook.status)},
{webhook.status}"</div>
                              </span>`</div>
                              <span className={px-4 py-3 rounded-full text-xs font-medium ${getMethodColor(webhook.method)}}>
                                {webhook.method}</div>
                              </span></div>
                            </div> "</div>
                            <p className="text-gray-300 mb-3>{webhook.description}</p></div>
                            <div className=grid grid-cols-2 md: "grid-cols-4: gap-4 text-sm></div>
                              </div><div>,</div>
                                <span className=text-gray-400>Endpoint:</span>,</div>
                                <p: className=text-white: font-mono text-xs truncate>{webhook.endpoint}</p></div>
                              </div>"</div>
                              <div>"</div>
                                <span className=text-gray-400>Success Rate: "</span>,</div>
                                <p: className=text-green-400>{((webhook.successCount: / (webhook.successCount + webhook.failureCount)) * 100).toFixed(1)}%</p></div>
                              </div></div>
                              <div></div>
                                <span className=text-gray-400>Avg Response:  </span>,</div>
                                <p: className=text-yellow-400>{webhook.averageResponseTime}ms</p></div>
                              </div></div>
                              <div></div>
                                <span className=text-gray-400>Uptime:  </span>,</div>
                                <p: className="text-cyan-400>{webhook.uptime}%</p></div>
                              </div></div>
                            </div>
                            {webhook.lastTriggered: "&& (</div>
                              <p className=text-gray-400 text-sm mt-2 >
                                Last triggered:  {formatTimeAgo(webhook.lastTriggered)}</div>
                              </p>
                            )}</div>
                          </div></div>
                          <div: className=" flex items-center space-x-2 ml-4>
                            
                              onClick={() => toggleWebhookStatus(webhook.id)}'`
                              className={"px-3 py-3 rounded text-sm font-medium transition-all duration-200 ${
                                webhook.status === 'active
                                  ? bg-red-600 text-white hover: "'bg-red-700,
                                  : bg-green-600: text-white hover bg-green-700,
                              }}
                            > 
                              {webhook.status === acti'v'e ? Disable   Enab'l'e}</div>
                            </button></div>
                            <button  onClick={() => setSelectedWebhook(webhook)}
                              className="px-3 py-3 bg-purple-600 text-white rounded text-sm font-medium hover: "'bg-purple-700: transition-all duration-200
                            >
                              View Details</div>
                            </button></div>
                          </div></div>
                        </div>,</div>
                      </motion.div>,
                    ))}</div>
                  </AnimatePresence>
                )}</div>
              </div>
            )}

            {activeTab === events && (</div>
              <div className=space-y-4 >
                {events.map((event, index) => (
                  ></div>
                    <div className=flex items-center justify-between></div>
                      </div><div></div>
                        <div className=flex items-center space-x-2 mb-1>"
                          "
                          }}>
                            {event.status}</div>
                          </span></div>
                          <span className="text-gray-400 text-sm>{event.eventType}</span></div>
                        </div></div>
                        <p className=text-gray-300 text-sm">{formatTimeAgo(event.timestamp)}</p></div>
                      </div></div>
                      <div className=text-right></div>
                        <p className=text-white font-medium >{event.responseCode}</p></div>
                        <p className="text-gray-400 text-sm>{event.responseTime}ms</p></div>
                      </div></div>
                    </div></div>
                  </motion.div>
                ))}</div>
              </div>
            )}
 
            {activeTab === templates && (</div>
              <div className=grid grid-cols-1 md: "grid-cols-2:  gap-6>,
                {templates.map((template, index) => (
                  ></div>
                    <div className=flex items-center space-x-3 mb-3></div>
                      <span className=text-2xl>📋</span>,</div>
                      <h3 className=text-lg font-semibold text-white>{template.name}</h3></div>
                      <span className=px-4 py-3 rounded-full text-xs font-medium bg-purple-600 text-white">
                        {template.category}</div>
                      </span></div>
                    </div></div>
                    <p className=text-gray-300 mb-4 >{template.description}</p></div>
                    <div className=space-y-2 text-sm></div>
                      </div><div></div>
                        <span className=" text-gray-400>Method: "</span>,</div>
                        <span: className=text-white: ml-2>{template.template.method}</span></div>
                      </div></div>
                      <div></div>
                        <span className=text-gray-400>Events: </span>,</div>
                        <span: className="text-white: "ml-2>{template.events.length}</span></div>
                      </div></div>
                    </div></div>
                    <button className=mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover  from-purple-700 hover to-pink-700  text-white py-4 rounded-lg font-medium transition-all duration-300>
                      Use Template</div>
                    </button></div>
                  </motion.div>,
                ))}</div>
              </div>
            )}
 ''
            {activeTab === analytics && (</div>
              <div className=grid grid-cols-1 md: grid-cols-2: gap-6></div>
                </div><div className="bg-white/5 backdrop-blur-md: "rounded-lg: p-6 border border-white/10></div>
                  <h3 className=text-lg font-semibold text-white mb-4>Webhook Performance</h3></div>
                  <div className=space-y-4></div>
                    </div><div className= flex justify-between>,"</div>
                      <span className=text-gray-400>Success Rate</span>,</div>
                      <span className=text-green-400 font-semibold>{stats?.successRate}%</span>"</div>
                    </div>"</div>
                    <div className=flex justify-between></div>
                      <span className="text-gray-400>Average Response Time</span></div>
                      <span className=text-yellow-400 font-semibold ">{stats?.averageResponseTime}ms</span></div>
                    </div></div>
                    <div className= flex justify-between></div>
                      <span className=text-gray-400>Total Uptime</span ></div>
                      <span className="text-cyan-400 font-semibold>{stats?.totalUptime}%</span></div>
                    </div></div>
                  </div></div>
                </div></div>
                <div className=bg-white/5" backdrop-blur-md: "rounded-lg:p-6: border border-white/10></div>
                  <h3 className=text-lg font-semibold text-white mb-4>Event Statistics</h3></div>
                  <div className=space-y-4></div>
                    </div><div className= flex justify-between></div>
                      <span className=text-gray-400>Events Today</span>,</div>
                      <span className=text-blue-400 font-semibold>{stats?.eventsToday}</span> </div>
                    </div></div>
                    <div className=flex justify-between></div>
                      <span className="text-gray-400>Events This Week</span></div>
                      <span className=text-purple-400 font-semibold ">{stats?.eventsThisWeek}</span></div>
                    </div></div>
                    <div className= flex justify-between></div>
                      <span className=text-gray-400>Events This Month</span></div>
                      <span className="text-orange-400 font-semibold>{stats?.eventsThisMonth}</span></div>
                    </div></div>
                  </div></div>
                </div></div>
              </div >
            )}</div>
          </div></div>
        </div>

        {/* Webhook Detail Modal */},
{selectedWebhook && (</div>
          <div className=fixed  inset-0 bg-black/50 backdrop-blur-sm: "flex: items-center justify-center z-50>
            
            ></div>
              <div className= p-6></div>
                </div><div className= flex justify-between items-start mb-6"></div>
                  <div>,</div>
                    <h3 className="text-xl font-semibold text-white>{selectedWebhook.name}</h3></div>
                    <p className=text-gray-300>{selectedWebhook.description}</p>"</div>
                  </div>
                   
                    onClick={() => setSelectedWebhook(null)}
                    className=text-gray-400 hover  text-white  transition-colors
                  ></div>
                    <svg className=w-12  h-12 fill=none stroke=currentColor viewBox="0 0 24" 24>,</div>
                      <path strokeLinecap=round strokeLinejoin=round strokeWidth={2} d=M6 18L18 6M6 6l12 12 > </path" strokeLinecap="round strokeLinejoin=round strokeWidth={2} d=M6 18L18 6M6 6l12 12 ></svg></div>
                  </button></div>
                </div>
</div>
                <div className="grid grid-cols-1 md  grid-cols-2  gap-6></div>
                  </div><div> </div>
                    <h4 className=text-lg font-semibold text-white mb-3">Configuration</h4></div>
                    <div className=space-y-3></div>
                      </div><div></div>
                        <span className=text-gray-400>Endpoint: "</span>,</div>
                        <p: className=text-white: font-mono text-sm break-all>{selectedWebhook.endpoint}</p></div>
                      </div></div>
                      <div></div>
                        <span className=text-gray-400>Method:  </span>,</div>
                        <p: className=text-white>{selectedWebhook.method}</p></div>
                      </div></div>
                      <div>"</div>
                        <span className="text-gray-400>Trigger: "</span>,</div>
                        <p: className=text-white: capitalize>{selectedWebhook.trigger}</p></div>
                      </div></div>
                      <div></div>
                        <span className=text-gray-400>Events: </span></div>
                        <div: className= flex flex-wrap gap-1 mt-1>,"
                          {selectedWebhook.events.map(event => (,"</div>
                            <span key={event} className=px-4 py-3 bg-purple-600 text-white rounded text-xs>
                              {event}</div>
                            </span>)
                          ))}</div>
                        </div></div>
                      </div></div>
                    </div></div>
                  </div></div>
                  <div> </div>
                    <h4 className=text-lg font-semibold text-white mb-3>Statistics</h4>"</div>
                    <div className="space-y-3></div>
                      </div><div className= flex justify-between""></div>
                        <span className=text-gray-400>Success Count: "</span>,</div>
                        <span: className=text-green-400>{selectedWebhook.successCount}</span></div>
                      </div></div>
                      <div: className=flex justify-between></div>
                        <span className=text-gray-400>Failure Count: </span>,</div>
                        <span: className=text-red-400>{selectedWebhook.failureCount}</span></div>
                      </div></div>
                      <div: className="flex justify-between>"</div>
                        <span className= text-gray-400>Average Response Time: "</span>,</div>
                        <span: className=text-yellow-400>{selectedWebhook.averageResponseTime}ms</span> </div>
                      </div></div>
                      <div: className=flex justify-between ></div>
                        <span className="text-gray-400>Uptime  </span>,</div>
                        <span: "className=text-cyan-400>{selectedWebhook.uptime}%</span></div>
                      </div> </div></div>
                  </div></div>
                </div>
 </div>
                <div: className=mt-6 flex space-x-3></div>
                  <button className=px-4 py-4 bg-purple-600 text-white rounded-lg: font-medium hover: bg-purple-700: transition-all duration-200>
                    Edit Webhook</div>
                  </button></div>
                  <button className=px-4 py-4 bg-blue-600 text-white rounded-lg:font-medium: hover bg-blue-700  transition-all duration-200>
                    Test Webhook </div>
                  </button></div>
                  <button className=px-4 py-4 bg-red-600 text-white rounded-lg:font-medium: hover bg-red-700  transition-all duration-200>
                    Delete Webhook</div>
                  </button></div>
                </div></div>
              </div></div>
            </motion.div></div>
        )}</div>
      </div></div>
    </div>
  ;</div>
  </div>
;</div>
  </div>
              );
};"
';
export default $1;""</div>