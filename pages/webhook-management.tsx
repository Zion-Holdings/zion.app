import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Webhook {
  id: string;
  name: string;
  description: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  status: 'active' | 'inactive' | 'error' | 'testing';
  trigger: 'event' | 'schedule' | 'manual' | 'condition' | 'webhook' | 'api';
  events: string[];
  headers: Record<string, string>;
  payload: Record<string, any>;
  retryPolicy: {
    maxRetries: number;
    retryDelay: number;
    backoffMultiplier: number;
  };
  security: {
    authentication: 'none' | 'basic' | 'bearer' | 'api-key' | 'oauth2';
    apiKey?: string;
    secret?: string;
  };
  createdAt: Date;
  updatedAt: Date;
  lastTriggered?: Date;
  successCount: number;
  failureCount: number;
  averageResponseTime: number;
  uptime: number;
}

interface WebhookEvent {
  id: string;
  webhookId: string;
  eventType: string;
  status: 'success' | 'failed' | 'pending' | 'retrying';
  timestamp: Date;
  responseCode: number;
  responseTime: number;
  payload: Record<string, any>;
  response?: string;
  error?: string;
  retryCount: number;
}

interface WebhookTemplate {
  id: string;
  name: string;
  description: string;
  category: 'payment' | 'notification' | 'integration' | 'automation' | 'monitoring';
  template: {
    endpoint: string;
    method: string;
    headers: Record<string, string>;
    payload: Record<string, any>;
  };
  events: string[];
  documentation: string;
}

interface WebhookStats {
  totalWebhooks: number;
  activeWebhooks: number;
  totalEvents: number;
  successRate: number;
  averageResponseTime: number;
  totalUptime: number;
  eventsToday: number;
  eventsThisWeek: number;
  eventsThisMonth: number;
}

const WebhookManagementPage: NextPage = () => {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [templates, setTemplates] = useState<WebhookTemplate[]>([]);
  const [stats, setStats] = useState<WebhookStats | null>(null);
  const [selectedWebhook, setSelectedWebhook] = useState<Webhook | null>(null);
  const [activeTab, setActiveTab] = useState<'webhooks' | 'events' | 'templates' | 'analytics'>('webhooks');
  const [filters, setFilters] = useState({
    status: 'all',
    trigger: 'all',
    category: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading webhook data
    setTimeout(() => {
      const mockWebhooks: Webhook[] = [
        {
          id: '1',
          name: 'Payment Success Webhook',
          description: 'Triggers when a payment is successfully processed',
          endpoint: 'https://api.ziontechgroup.com/webhooks/payment-success',
          method: 'POST',
          status: 'active',
          trigger: 'event',
          events: ['payment.success', 'payment.completed'],
          headers: {
            'Content-Type': 'application/json',
            'X-Webhook-Signature': 'sha256=abc123'
          },
          payload: {
            event: 'payment.success',
            data: {
              payment_id: '{{payment_id}}',
              amount: '{{amount}}',
              currency: '{{currency}}'
            }
          },
          retryPolicy: {
            maxRetries: 3,
            retryDelay: 5000,
            backoffMultiplier: 2
          },
          security: {
            authentication: 'bearer',
            apiKey: 'sk_live_123456789'
          },
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          lastTriggered: new Date(Date.now() - 30 * 60 * 1000),
          successCount: 1247,
          failureCount: 23,
          averageResponseTime: 245,
          uptime: 99.8
        },
        {
          id: '2',
          name: 'Order Status Update',
          description: 'Sends order status updates to external systems',
          endpoint: 'https://erp.company.com/webhooks/order-update',
          method: 'PUT',
          status: 'active',
          trigger: 'event',
          events: ['order.created', 'order.updated', 'order.shipped'],
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {{token}}'
          },
          payload: {
            order_id: '{{order_id}}',
            status: '{{status}}',
            updated_at: '{{timestamp}}'
          },
          retryPolicy: {
            maxRetries: 5,
            retryDelay: 10000,
            backoffMultiplier: 1.5
          },
          security: {
            authentication: 'oauth2'
          },
          createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          lastTriggered: new Date(Date.now() - 15 * 60 * 1000),
          successCount: 892,
          failureCount: 12,
          averageResponseTime: 189,
          uptime: 99.9
        },
        {
          id: '3',
          name: 'Inventory Sync',
          description: 'Synchronizes inventory changes with external systems',
          endpoint: 'https://inventory.ziontechgroup.com/webhooks/sync',
          method: 'POST',
          status: 'error',
          trigger: 'event',
          events: ['inventory.updated', 'inventory.low'],
          headers: {
            'Content-Type': 'application/json'
          },
          payload: {
            product_id: '{{product_id}}',
            quantity: '{{quantity}}',
            action: '{{action}}'
          },
          retryPolicy: {
            maxRetries: 3,
            retryDelay: 5000,
            backoffMultiplier: 2
          },
          security: {
            authentication: 'api-key',
            apiKey: 'inv_sync_key_456'
          },
          createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
          lastTriggered: new Date(Date.now() - 2 * 60 * 60 * 1000),
          successCount: 567,
          failureCount: 45,
          averageResponseTime: 312,
          uptime: 92.1
        }
      ];

      const mockEvents: WebhookEvent[] = [
        {
          id: '1',
          webhookId: '1',
          eventType: 'payment.success',
          status: 'success',
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          responseCode: 200,
          responseTime: 245,
          payload: {
            payment_id: 'pay_123456789',
            amount: 150.00,
            currency: 'USD'
          },
          response: '{"status": "received", "id": "webhook_123"}',
          retryCount: 0
        },
        {
          id: '2',
          webhookId: '2',
          eventType: 'order.updated',
          status: 'success',
          timestamp: new Date(Date.now() - 15 * 60 * 1000),
          responseCode: 200,
          responseTime: 189,
          payload: {
            order_id: 'ord_987654321',
            status: 'shipped',
            updated_at: new Date().toISOString()
          },
          response: '{"status": "updated"}',
          retryCount: 0
        },
        {
          id: '3',
          webhookId: '3',
          eventType: 'inventory.updated',
          status: 'failed',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          responseCode: 500,
          responseTime: 5000,
          payload: {
            product_id: 'prod_456',
            quantity: 10,
            action: 'decrease'
          },
          error: 'Internal server error',
          retryCount: 2
        }
      ];

      const mockTemplates: WebhookTemplate[] = [
        {
          id: '1',
          name: 'Payment Processing',
          description: 'Standard webhook for payment processing events',
          category: 'payment',
          template: {
            endpoint: 'https://your-domain.com/webhooks/payment',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Webhook-Signature': 'sha256={{signature}}'
            },
            payload: {
              event: '{{event_type}}',
              data: {
                payment_id: '{{payment_id}}',
                amount: '{{amount}}',
                currency: '{{currency}}'
              }
            }
          },
          events: ['payment.success', 'payment.failed', 'payment.refunded'],
          documentation: 'Use this template for payment-related webhooks'
        },
        {
          id: '2',
          name: 'Order Management',
          description: 'Webhook template for order lifecycle events',
          category: 'automation',
          template: {
            endpoint: 'https://your-domain.com/webhooks/orders',
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer {{token}}'
            },
            payload: {
              order_id: '{{order_id}}',
              status: '{{status}}',
              updated_at: '{{timestamp}}'
            }
          },
          events: ['order.created', 'order.updated', 'order.shipped', 'order.delivered'],
          documentation: 'Template for order management webhooks'
        }
      ];

      const mockStats: WebhookStats = {
        totalWebhooks: mockWebhooks.length,
        activeWebhooks: mockWebhooks.filter(w => w.status === 'active').length,
        totalEvents: mockEvents.length,
        successRate: 95.2,
        averageResponseTime: 245,
        totalUptime: 98.6,
        eventsToday: 156,
        eventsThisWeek: 1247,
        eventsThisMonth: 5234
      };

      setWebhooks(mockWebhooks);
      setEvents(mockEvents);
      setTemplates(mockTemplates);
      setStats(mockStats);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredWebhooks = useMemo(() => {
    return webhooks.filter(webhook => {
      if (filters.status !== 'all' && webhook.status !== filters.status) return false;
      if (filters.trigger !== 'all' && webhook.trigger !== filters.trigger) return false;
      if (searchTerm && !webhook.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !webhook.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    });
  }, [webhooks, filters, searchTerm]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'inactive': return 'text-gray-400';
      case 'error': return 'text-red-400';
      case 'testing': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return '🟢';
      case 'inactive': return '⚪';
      case 'error': return '🔴';
      case 'testing': return '🟡';
      default: return '⚪';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'text-blue-400';
      case 'POST': return 'text-green-400';
      case 'PUT': return 'text-yellow-400';
      case 'DELETE': return 'text-red-400';
      case 'PATCH': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const toggleWebhookStatus = (webhookId: string) => {
    setWebhooks(prev => prev.map(webhook => 
      webhook.id === webhookId 
        ? { ...webhook, status: webhook.status === 'active' ? 'inactive' : 'active' }
        : webhook
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Webhook Management Center - Zion Marketplace</title>
        <meta name="description" content="Manage, monitor, and orchestrate webhooks in a centralized dashboard. Track events, configure endpoints, and ensure reliable integrations." />
        <meta name="keywords" content="webhook management, webhook monitoring, API integration, event tracking, Zion" />
      </Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Webhook Management Center</h1>
              <p className="text-gray-300 mt-2">Manage, monitor, and orchestrate your webhooks</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                Create Webhook
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{stats.totalWebhooks}</div>
              <div className="text-gray-400 text-sm">Total Webhooks</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-400">{stats.activeWebhooks}</div>
              <div className="text-gray-400 text-sm">Active</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-blue-400">{stats.totalEvents}</div>
              <div className="text-gray-400 text-sm">Total Events</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-400">{stats.successRate}%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-yellow-400">{stats.averageResponseTime}ms</div>
              <div className="text-gray-400 text-sm">Avg Response</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-cyan-400">{stats.totalUptime}%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-purple-400">{stats.eventsToday}</div>
              <div className="text-gray-400 text-sm">Today</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-orange-400">{stats.eventsThisWeek}</div>
              <div className="text-gray-400 text-sm">This Week</div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 mb-8">
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('webhooks')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'webhooks'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Webhooks ({webhooks.length})
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'events'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Events ({events.length})
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'templates'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Templates ({templates.length})
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'analytics'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Analytics
            </button>
          </div>

          <div className="p-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <input
                type="text"
                placeholder="Search webhooks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="error">Error</option>
                <option value="testing">Testing</option>
              </select>
              <select
                value={filters.trigger}
                onChange={(e) => setFilters(prev => ({ ...prev, trigger: e.target.value }))}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Triggers</option>
                <option value="event">Event</option>
                <option value="schedule">Schedule</option>
                <option value="manual">Manual</option>
                <option value="condition">Condition</option>
              </select>
            </div>

            {/* Content */}
            {activeTab === 'webhooks' && (
              <div className="space-y-4">
                {filteredWebhooks.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🪝</div>
                    <h3 className="text-xl font-semibold text-white mb-2">No webhooks found</h3>
                    <p className="text-gray-400">Try adjusting your filters or create a new webhook</p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {filteredWebhooks.map((webhook, index) => (
                      <motion.div
                        key={webhook.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-2xl">🪝</span>
                              <h3 className="text-lg font-semibold text-white">{webhook.name}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(webhook.status)}`}>
                                {getStatusIcon(webhook.status)} {webhook.status}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMethodColor(webhook.method)}`}>
                                {webhook.method}
                              </span>
                            </div>
                            <p className="text-gray-300 mb-3">{webhook.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-gray-400">Endpoint:</span>
                                <p className="text-white font-mono text-xs truncate">{webhook.endpoint}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Success Rate:</span>
                                <p className="text-green-400">{((webhook.successCount / (webhook.successCount + webhook.failureCount)) * 100).toFixed(1)}%</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Avg Response:</span>
                                <p className="text-yellow-400">{webhook.averageResponseTime}ms</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Uptime:</span>
                                <p className="text-cyan-400">{webhook.uptime}%</p>
                              </div>
                            </div>
                            {webhook.lastTriggered && (
                              <p className="text-gray-400 text-sm mt-2">
                                Last triggered: {formatTimeAgo(webhook.lastTriggered)}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <button
                              onClick={() => toggleWebhookStatus(webhook.id)}
                              className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                                webhook.status === 'active'
                                  ? 'bg-red-600 text-white hover:bg-red-700'
                                  : 'bg-green-600 text-white hover:bg-green-700'
                              }`}
                            >
                              {webhook.status === 'active' ? 'Disable' : 'Enable'}
                            </button>
                            <button
                              onClick={() => setSelectedWebhook(webhook)}
                              className="px-3 py-1 bg-purple-600 text-white rounded text-sm font-medium hover:bg-purple-700 transition-all duration-200"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            event.status === 'success' ? 'bg-green-600 text-white' :
                            event.status === 'failed' ? 'bg-red-600 text-white' :
                            'bg-yellow-600 text-white'
                          }`}>
                            {event.status}
                          </span>
                          <span className="text-gray-400 text-sm">{event.eventType}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{formatTimeAgo(event.timestamp)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{event.responseCode}</p>
                        <p className="text-gray-400 text-sm">{event.responseTime}ms</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">📋</span>
                      <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
                        {template.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{template.description}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-400">Method:</span>
                        <span className="text-white ml-2">{template.template.method}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Events:</span>
                        <span className="text-white ml-2">{template.events.length}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 rounded-lg font-medium transition-all duration-300">
                      Use Template
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Webhook Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Success Rate</span>
                      <span className="text-green-400 font-semibold">{stats?.successRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Average Response Time</span>
                      <span className="text-yellow-400 font-semibold">{stats?.averageResponseTime}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Uptime</span>
                      <span className="text-cyan-400 font-semibold">{stats?.totalUptime}%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Event Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Events Today</span>
                      <span className="text-blue-400 font-semibold">{stats?.eventsToday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Events This Week</span>
                      <span className="text-purple-400 font-semibold">{stats?.eventsThisWeek}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Events This Month</span>
                      <span className="text-orange-400 font-semibold">{stats?.eventsThisMonth}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Webhook Detail Modal */}
        {selectedWebhook && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{selectedWebhook.name}</h3>
                    <p className="text-gray-300">{selectedWebhook.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedWebhook(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Configuration</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-400">Endpoint:</span>
                        <p className="text-white font-mono text-sm break-all">{selectedWebhook.endpoint}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Method:</span>
                        <p className="text-white">{selectedWebhook.method}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Trigger:</span>
                        <p className="text-white capitalize">{selectedWebhook.trigger}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Events:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedWebhook.events.map(event => (
                            <span key={event} className="px-2 py-1 bg-purple-600 text-white rounded text-xs">
                              {event}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Statistics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Success Count:</span>
                        <span className="text-green-400">{selectedWebhook.successCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Failure Count:</span>
                        <span className="text-red-400">{selectedWebhook.failureCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Average Response Time:</span>
                        <span className="text-yellow-400">{selectedWebhook.averageResponseTime}ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-cyan-400">{selectedWebhook.uptime}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-200">
                    Edit Webhook
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200">
                    Test Webhook
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-200">
                    Delete Webhook
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebhookManagementPage; 