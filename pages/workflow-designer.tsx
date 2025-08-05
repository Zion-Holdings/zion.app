import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkflowNode {
  id: string;
  type: 'start' | 'end' | 'task' | 'decision' | 'condition' | 'action' | 'integration' | 'approval' | 'notification' | 'data' | 'api' | 'webhook';
  name: string;
  description: string;
  position: { x: number; y: number };
  status: 'active' | 'inactive' | 'error' | 'processing' | 'completed';
  config: WorkflowNodeConfig;
  connections: string[];
  executionTime?: number;
  lastExecuted?: Date;
  successRate?: number;
}

interface WorkflowNodeConfig {
  action?: string;
  conditions?: WorkflowCondition[];
  parameters?: Record<string, any>;
  timeout?: number;
  retryCount?: number;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  assignee?: string;
  notification?: NotificationConfig;
  integration?: IntegrationConfig;
}

interface WorkflowCondition {
  id: string;
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than' | 'between' | 'in' | 'not_in';
  value: any;
  logicalOperator?: 'AND' | 'OR';
}

interface NotificationConfig {
  type: 'email' | 'sms' | 'push' | 'webhook' | 'slack' | 'teams';
  recipients: string[];
  template: string;
  subject?: string;
}

interface IntegrationConfig {
  type: 'api' | 'webhook' | 'database' | 'file' | 'service';
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: Record<string, any>;
  authentication?: {
    type: 'basic' | 'bearer' | 'api-key' | 'oauth2';
    credentials: Record<string, string>;
  };
}

interface WorkflowConnection {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  condition?: WorkflowCondition;
  type: 'success' | 'failure' | 'conditional' | 'default';
  label?: string;
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  version: string;
  status: 'draft' | 'active' | 'paused' | 'archived';
  category: 'business' | 'technical' | 'approval' | 'notification' | 'integration' | 'automation';
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  triggers: WorkflowTrigger[];
  variables: WorkflowVariable[];
  settings: WorkflowSettings;
  analytics: WorkflowAnalytics;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  lastExecuted?: Date;
  executionCount: number;
  successRate: number;
}

interface WorkflowTrigger {
  id: string;
  type: 'manual' | 'schedule' | 'event' | 'webhook' | 'api' | 'condition';
  name: string;
  description: string;
  config: Record<string, any>;
  status: 'active' | 'inactive' | 'error';
  lastTriggered?: Date;
  triggerCount: number;
}

interface WorkflowVariable {
  id: string;
  name: string;
  type: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'date';
  value: any;
  description: string;
  scope: 'global' | 'workflow' | 'node';
  isRequired: boolean;
  defaultValue?: any;
}

interface WorkflowSettings {
  timeout: number;
  maxRetries: number;
  parallelExecution: boolean;
  errorHandling: 'stop' | 'continue' | 'retry';
  logging: boolean;
  notifications: boolean;
  versioning: boolean;
  approvalRequired: boolean;
}

interface WorkflowAnalytics {
  totalExecutions: number;
  successfulExecutions: number;
  failedExecutions: number;
  averageExecutionTime: number;
  lastExecutionTime: number;
  successRate: number;
  errorRate: number;
  mostExecutedNode: string;
  bottleneckNode: string;
  executionTrend: 'increasing' | 'decreasing' | 'stable';
performanceMetrics: {;
    cpu: number;
    memory: number;
    responseTime: number;
    throughput: number;}
  };
}

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  complexity: 'simple' | 'medium' | 'complex' | 'enterprise';
  estimatedTime: number;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  variables: WorkflowVariable[];
  usageCount: number;
  rating: number;
  createdBy: string;
  isPublic: boolean;
}

const WorkflowDesignerPage: NextPage = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [templates, setTemplates] = useState<WorkflowTemplate[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
  const [activeTab, setActiveTab] = useState<'designer' | 'templates' | 'executions' | 'analytics'>('designer');
  const [designMode, setDesignMode] = useState<'view' | 'edit' | 'test'>('view');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading workflow data
    setTimeout(() => {
      const mockWorkflows: Workflow[] = [
        {
id: '1',
          name: 'Order Processing Workflow',
          description: 'Automated order processing with payment verification and inventory management',
          version: '2.1',
          status: 'active',
          category: 'business',
          nodes: [
            {
              id: '1',
              type: 'start',
              name: 'Order Received',
              description: 'Trigger when new order is placed',
              position: { x: 100, y: 100 },
              status: 'active',
              config: {},
              connections: ['2']
            },
            {
              id: '2',
              type: 'task',
              name: 'Payment Verification',
              description: 'Verify payment and process transaction',
              position: { x: 300, y: 100 },
              status: 'active',
              config: {
                action: 'verify_payment',
                parameters: {
                  paymentMethod: 'credit_card',
                  timeout: 30}
                },
                timeout: 30,
                retryCount: 3,
                priority: 'high'
              },
              connections: ['3', '4'],
              executionTime: 2.5,
              lastExecuted: new Date('2024-08-01 10:30:00'),
              successRate: 98.5
            },
            {
              id: '3',
              type: 'decision',
              name: 'Payment Status',
              description: 'Check if payment was successful',
              position: { x: 500, y: 50 },
              status: 'active',
              config: {
                conditions: [
                  {
                    id: '1',
                    field: 'payment_status',
                    operator: 'equals',
                    value: 'successful'}
                  }
                ]
              },
              connections: ['5', '6']
            },
            {
              id: '4',
              type: 'notification',
              name: 'Payment Failed',
              description: 'Notify customer of payment failure',
              position: { x: 500, y: 150 },
              status: 'active',
              config: {
                notification: {
                  type: 'email',
                  recipients: ['customer@example.com'],
                  template: 'payment_failed',}
                  subject: 'Payment Failed - Order #{order_id}'
                }
              },
              connections: ['7'],
              executionTime: 0.5,
              lastExecuted: new Date('2024-08-01 10:32:00'),
              successRate: 100
            },
            {
              id: '5',
              type: 'task',
              name: 'Inventory Check',
              description: 'Check product availability',
              position: { x: 700, y: 50 },
              status: 'active',
              config: {
                action: 'check_inventory',
                parameters: {
                  warehouse: 'main',
                  checkReserved: true}
                },
                timeout: 15,
                retryCount: 2,
                priority: 'medium'
              },
              connections: ['8'],
              executionTime: 1.8,
              lastExecuted: new Date('2024-08-01 10:35:00'),
              successRate: 95.2
            },
            {
              id: '6',
              type: 'approval',
              name: 'Manual Review',
              description: 'Manual review for high-value orders',
              position: { x: 700, y: 100 },
              status: 'active',
              config: {
                assignee: 'manager@company.com',
                timeout: 1440, // 24 hours
                priority: 'high'}
              },
              connections: ['8'],
              executionTime: 120,
              lastExecuted: new Date('2024-08-01 10:40:00'),
              successRate: 100
            },
            {
              id: '7',
              type: 'end',
              name: 'Order Cancelled',
              description: 'End workflow for failed payments',
              position: { x: 900, y: 150 },
              status: 'active',
              config: {},
              connections: []
            },
            {
              id: '8',
              type: 'integration',
              name: 'Fulfillment API',
              description: 'Send order to fulfillment system',
              position: { x: 900, y: 50 },
              status: 'active',
              config: {
                integration: {
                  type: 'api',
                  endpoint: 'https://api.fulfillment.com/orders',
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',}
                    'Authorization': 'Bearer {api_token}'
                  },
                  body: {}
                    order_id: '{order_id}',
                    items: '{order_items}',
                    shipping_address: '{shipping_address}'
                  },
                  authentication: {
                    type: 'bearer',
                    credentials: {}
                      token: '{fulfillment_api_token}'
                    }
                  }
                },
                timeout: 60,
                retryCount: 3,
                priority: 'high'
              },
              connections: ['9'],
              executionTime: 3.2,
              lastExecuted: new Date('2024-08-01 10:38:00'),
              successRate: 97.8
            },
            {
              id: '9',
              type: 'notification',
              name: 'Order Confirmed',
              description: 'Send confirmation to customer',
              position: { x: 1100, y: 50 },
              status: 'active',
              config: {
                notification: {
                  type: 'email',
                  recipients: ['customer@example.com'],
                  template: 'order_confirmed',}
                  subject: 'Order Confirmed - #{order_id}'
                }
              },
              connections: ['10'],
              executionTime: 0.8,
              lastExecuted: new Date('2024-08-01 10:42:00'),
              successRate: 99.1
            },
            {
              id: '10',
              type: 'end',
              name: 'Order Completed',
              description: 'Workflow completed successfully',
              position: { x: 1300, y: 50 },
              status: 'active',
              config: {},
              connections: []
            }
          ],
          connections: [
            {
              id: '1',
              sourceNodeId: '1',
              targetNodeId: '2',
              type: 'default',
              label: 'Start'
            },
            {
              id: '2',
              sourceNodeId: '2',
              targetNodeId: '3',
              type: 'success',
              label: 'Success'
            },
            {
              id: '3',
              sourceNodeId: '2',
              targetNodeId: '4',
              type: 'failure',
              label: 'Failed'
            },
            {
              id: '4',
              sourceNodeId: '3',
              targetNodeId: '5',
              type: 'conditional',
              label: 'Payment OK'
            },
            {
              id: '5',
              sourceNodeId: '3',
              targetNodeId: '6',
              type: 'conditional',
              label: 'High Value'
            },
            {
              id: '6',
              sourceNodeId: '4',
              targetNodeId: '7',
              type: 'default',
              label: 'End'
            },
            {
              id: '7',
              sourceNodeId: '5',
              targetNodeId: '8',
              type: 'success',
              label: 'In Stock'
            },
            {
              id: '8',
              sourceNodeId: '6',
              targetNodeId: '8',
              type: 'success',
              label: 'Approved'
            },
            {
              id: '9',
              sourceNodeId: '8',
              targetNodeId: '9',
              type: 'success',
              label: 'Sent'
            },
            {
              id: '10',
              sourceNodeId: '9',
              targetNodeId: '10',
              type: 'success',
              label: 'Complete'
            }
          ],
          triggers: [
            {
              id: '1',
              type: 'event',
              name: 'Order Placed',
              description: 'Trigger when new order is created',
              config: {
                eventType: 'order.created',
                conditions: {}
                  orderValue: { min: 0 }
                }
              },
              status: 'active',
              lastTriggered: new Date('2024-08-01 10:30:00'),
              triggerCount: 1250
            }
          ],
          variables: [
            {
              id: '1',
              name: 'order_id',
              type: 'string',
              value: '',
              description: 'Unique order identifier',
              scope: 'workflow',
              isRequired: true
            },
            {
              id: '2',
              name: 'order_value',
              type: 'number',
              value: 0,
              description: 'Total order value',
              scope: 'workflow',
              isRequired: true
            },
            {
              id: '3',
              name: 'customer_email',
              type: 'string',
              value: '',
              description: 'Customer email address',
              scope: 'workflow',
              isRequired: true
            }
          ],
          settings: {
            timeout: 3600,
            maxRetries: 3,
            parallelExecution: true,
            errorHandling: 'retry',
            logging: true,
            notifications: true,
            versioning: true,
            approvalRequired: false}
          },
          analytics: {
            totalExecutions: 1250,
            successfulExecutions: 1235,
            failedExecutions: 15,
            averageExecutionTime: 45.2,
            lastExecutionTime: 42.8,
            successRate: 98.8,
            errorRate: 1.2,
            mostExecutedNode: '2',
            bottleneckNode: '6',
            executionTrend: 'increasing',
            performanceMetrics: {
              cpu: 15.3,
              memory: 45.7,
              responseTime: 2.1,
              throughput: 125.5}
            }
          },
          createdAt: new Date('2024-01-15'),
          updatedAt: new Date('2024-08-01'),
          createdBy: 'admin@company.com',
          lastExecuted: new Date('2024-08-01 10:42:00'),
          executionCount: 1250,
          successRate: 98.8
        };
      ];

      const mockTemplates: WorkflowTemplate[] = [
        {
id: '1',
          name: 'Customer Onboarding',
          description: 'Automated customer onboarding process with verification and welcome sequence',
          category: 'business',
          tags: ['onboarding', 'verification', 'welcome'],
          complexity: 'medium',
          estimatedTime: 30,
          nodes: [],
          connections: [],
          variables: [],
          usageCount: 245,
          rating: 4.8,
          createdBy: 'admin@company.com',
          isPublic: true
        },
        {
          id: '2',
          name: 'Invoice Processing',
          description: 'Automated invoice processing with approval workflow',
          category: 'business',
          tags: ['invoice', 'approval', 'finance'],
          complexity: 'complex',
          estimatedTime: 45,
          nodes: [],
          connections: [],
          variables: [],
          usageCount: 189,
          rating: 4.6,
          createdBy: 'admin@company.com',
          isPublic: true
        },
        {
          id: '3',
          name: 'Support Ticket Routing',
          description: 'Intelligent support ticket routing based on category and priority',
          category: 'automation',
          tags: ['support', 'routing', 'tickets'],
          complexity: 'simple',
          estimatedTime: 15,
          nodes: [],
          connections: [],
          variables: [],
          usageCount: 312,
          rating: 4.9,
          createdBy: 'admin@company.com',
          isPublic: true
        };
      ];

      setWorkflows(mockWorkflows);
      setTemplates(mockTemplates);
      setSelectedWorkflow(mockWorkflows[0]);
      setLoading(false);
    }, 1000);
  }, []);

  const getNodeTypeColor = (type: string) => {
    switch (type) {
      case 'start': return 'bg-green-600';
      case 'end': return 'bg-red-600';
      case 'task': return 'bg-blue-600';
      case 'decision': return 'bg-yellow-1200';
      case 'condition': return 'bg-purple-600';
      case 'action': return 'bg-indigo-600';
      case 'integration': return 'bg-orange-600';
      case 'approval': return 'bg-pink-600';
      case 'notification': return 'bg-teal-600';
      case 'data': return 'bg-gray-600';
      case 'api': return 'bg-cyan-600';
      case 'webhook': return 'bg-emerald-600';
      default: return 'bg-gray-600';
    }
  };

  const getNodeStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'border-green-500';
      case 'inactive': return 'border-gray-500';
      case 'error': return 'border-red-500';
      case 'processing': return 'border-yellow-500';
      case 'completed': return 'border-blue-500';
      default: return 'border-gray-500';
    }
  };

  const formatExecutionTime = (time: number) => {
    if (time < 60) return `${time}s`;
    if (time < 3600) return `${Math.floor(time / 60)}m ${time % 60}s`;
    return `${Math.floor(time / 3600)}h ${Math.floor((time % 3600) / 60)}m`;
  };

  if (loading) {
    return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length: 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 container-responsive py-8">
      <Head>
        <title>Workflow Designer & Process Builder - Zion Marketplace</title>
        <meta name="description" content="Visual workflow designer and process builder for creating complex business automation workflows." />
        <meta name="keywords" content="workflow designer, process builder, automation, business process, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Workflow Designer & Process Builder</h1>
              <p className="text-gray-300 mt-2">Visual workflow design and business process automation</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                New Workflow
              </button>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                Import Template
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Workflow Selection */}
        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Active Workflows</h2>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Design Mode: </span>
              <select 
                value={designMode}
                onChange={(e) => setDesignMode(e.target.value as any)}
                className="bg-white/10 border border-white/20 text-white rounded px-3 py-3 text-sm"
              >
                <option value="view">View</option>
                <option value="edit">Edit</option>
                <option value="test">Test</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">
            {workflows.map((workflow) => (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 cursor-pointer transition-all duration-200 hover: bg-white/10 ${
                  selectedWorkflow?.id === workflow.id ? 'border-purple-500 bg-purple-500/10' : ''
                }`}
                onClick={() => setSelectedWorkflow(workflow)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold">{workflow.name}</h3>
                    <p className="text-gray-400 text-sm">{workflow.description}</p>
                  </div>
                  <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                    workflow.status === 'active' ? 'bg-green-600' :
                    workflow.status === 'draft' ? 'bg-yellow-1200' :
                    workflow.status === 'paused' ? 'bg-orange-600' : 'bg-gray-600'
                  } text-white`}>
                    {workflow.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">Executions: </span>
                    <p className="text-white font-medium">{workflow.executionCount}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Success Rate: </span>
                    <p className="text-white font-medium">{workflow.successRate}%</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Nodes: </span>
                    <p className="text-white font-medium">{workflow.nodes.length}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Version: </span>
                    <p className="text-white font-medium">{workflow.version}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 mb-8">
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('designer')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'designer'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover: text-white'
              }`}
            >
              Designer
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'templates'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover: text-white'
              }`}
            >
              Templates
            </button>
            <button
              onClick={() => setActiveTab('executions')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'executions'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover: text-white'
              }`}
            >
              Executions
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === 'analytics'
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover: text-white'
              }`}
            >
              Analytics
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'designer' && selectedWorkflow && (
              <div className="space-y-6">
                {/* Workflow Canvas */}
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Workflow Canvas</h3>
                    <div className="flex items-center space-x-2">
                      <button className="bg-blue-600 hover: bg-blue-700 text-white px-3 py-3 rounded text-sm">
                        Add Node
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-3 rounded text-sm">
                        Connect
                      </button>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-3 rounded text-sm">
                        Test
                      </button>
                    </div>
                  </div>
                  
                  {/* Canvas Area */}
                  <div className="bg-gray-900/50 rounded-lg p-4 min-h-[600px] relative overflow-auto">
                    <div className="relative" style={{ width: '1400px', height: '400px' }}>
                      {selectedWorkflow.nodes.map((node) => (
                        <motion.div
                          key={node.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`absolute p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 hover: scale-105 ${
                            selectedNode === node.id ? 'ring-2 ring-purple-500' : ''
                          } ${getNodeStatusColor(node.status)}`}
                          style={{ left: node.position.x, top: node.position.y }}
                          onClick={() => setSelectedNode(node.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${getNodeTypeColor(node.type)}`}></div>
                            <span className="text-white font-medium text-sm">{node.name}</span>
                          </div>
                          <p className="text-gray-400 text-xs mt-1">{node.description}</p>
                          {node.executionTime && (
                            <div className="text-green-400 text-xs mt-1">
                              {formatExecutionTime(node.executionTime)}
                            </div>
                          )}
                        </motion.div>
                      ))}
                      
                      {/* Connections */}
                      <svg className="absolute inset-0 pointer-events-none" style={{ width: '1400px', height: '400px' }}>
                        {selectedWorkflow.connections.map((connection) => {
                          const sourceNode = selectedWorkflow.nodes.find(n => n.id === connection.sourceNodeId);
                          const targetNode = selectedWorkflow.nodes.find(n => n.id === connection.targetNodeId);
                          
                          if (!sourceNode || !targetNode) return null;
                          
                          const startX = sourceNode.position.x + 100;
                          const startY = sourceNode.position.y + 25;
                          const endX = targetNode.position.x;
                          const endY = targetNode.position.y + 25;
                          
                          return (
                            <g key={connection.id}>
                              <path
                                d={`M ${startX} ${startY} L ${endX} ${endY}`}
                                stroke={connection.type === 'success' ? '#10b981' : 
                                       connection.type === 'failure' ? '#ef4444' : 
                                       connection.type === 'conditional' ? '#f59e0b' : '#6b7280'}
                                strokeWidth="2"
                                fill="none"
                                markerEnd="url(#arrowhead)"
                              />
                              {connection.label && (
                                <text
                                  x={(startX + endX) / 2}
                                  y={(startY + endY) / 2 - 5}
                                  fill="#ffffff"
                                  fontSize="10"
                                  textAnchor="middle"
                                >
                                  {connection.label}
                                </text>
                              )}
                            </g>
                          );
                        })}
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="7"
                            refX="9"
                            refY="3.5"
                            orient="auto"
                          >
                            <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Node Properties */}
                {selectedNode && (
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Node Properties</h3>
                    {(() => {
                      const node = selectedWorkflow.nodes.find(n => n.id === selectedNode);
                      if (!node) return null;
                      
                      return (
                        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-3">Basic Information</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="text-gray-400 text-sm">Name</label>
                                <input
                                  type="text"
                                  value={node.name}
                                  className="w-full bg-white/10 border border-white 20 text-white rounded px-3 py-4 mt-1"
                                  placeholder="Node name"
                                 />
                              </div>
                              <div>
                                <label className="text-gray-400 text-sm">Description</label>
                                <textarea
                                  value={node.description}
                                  className="w-full bg-white/10 border border-white 20 text-white rounded px-3 py-4 mt-1"
                                  rows={3}
                                  placeholder="Node description"
                                 />
                              </div>
                              <div>
                                <label className="text-gray-400 text-sm">Type</label>
                                <select className="w-full bg-white/10 border border-white/20 text-white rounded px-3 py-4 mt-1">
                                  <option value="task">Task</option>
                                  <option value="decision">Decision</option>
                                  <option value="notification">Notification</option>
                                  <option value="integration">Integration</option>
                                  <option value="approval">Approval</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-3">Configuration</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="text-gray-400 text-sm">Timeout (seconds)</label>
                                <input
                                  type="number"
                                  value={node.config.timeout || 30}
                                  className="w-full bg-white/10 border border-white 20 text-white rounded px-3 py-4 mt-1"
                                 />
                              </div>
                              <div>
                                <label className="text-gray-400 text-sm">Retry Count</label>
                                <input
                                  type="number"
                                  value={node.config.retryCount || 3}
                                  className="w-full bg-white/10 border border-white 20 text-white rounded px-3 py-4 mt-1"
                                 />
                              </div>
                              <div>
                                <label className="text-gray-400 text-sm">Priority</label>
                                <select className="w-full bg-white/10 border border-white/20 text-white rounded px-3 py-4 mt-1">
                                  <option value="low">Low</option>
                                  <option value="medium">Medium</option>
                                  <option value="high">High</option>
                                  <option value="critical">Critical</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
                  {templates.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-white font-semibold">{template.name}</h3>
                          <p className="text-gray-300 text-sm mt-1">{template.description}</p>
                        </div>
                        <span className={`px-4 py-3 rounded-full text-xs font-medium ${
                          template.complexity === 'simple' ? 'bg-green-600' :
                          template.complexity === 'medium' ? 'bg-yellow-1200' :
                          template.complexity === 'complex' ? 'bg-orange-600' : 'bg-red-600'
                        } text-white`}>
                          {template.complexity}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Estimated Time: </span>
                          <span className="text-white">{template.estimatedTime} min</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Usage Count: </span>
                          <span className="text-white">{template.usageCount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Rating: </span>
                          <span className="text-white">⭐ {template.rating}/5</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.tags.map((tag) => (
                          <span key={tag} className="px-4 py-3 bg-purple-600/20 text-purple-400 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                        Use Template
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'executions' && selectedWorkflow && (
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Executions</h3>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white font-medium">Execution #{selectedWorkflow.executionCount - i}</p>
                          <p className="text-gray-400 text-sm">
                            {new Date(Date.now() - i * 3600000).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-green-400 text-sm">Completed</span>
                          <span className="text-gray-400 text-sm">
                            {formatExecutionTime(selectedWorkflow.analytics.lastExecutionTime)}
                          </span>
                          <span className="text-blue-400 text-sm">Success</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && selectedWorkflow && (
              <div className="grid grid-cols-1 lg: grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Total Executions</span>
                      <span className="text-white font-semibold">{selectedWorkflow.analytics.totalExecutions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Success Rate</span>
                      <span className="text-green-400 font-semibold">{selectedWorkflow.analytics.successRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Average Execution Time</span>
                      <span className="text-white font-semibold">{formatExecutionTime(selectedWorkflow.analytics.averageExecutionTime)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Error Rate</span>
                      <span className="text-red-400 font-semibold">{selectedWorkflow.analytics.errorRate}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">System Performance</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">CPU Usage</span>
                      <span className="text-white font-semibold">{selectedWorkflow.analytics.performanceMetrics.cpu}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Memory Usage</span>
                      <span className="text-white font-semibold">{selectedWorkflow.analytics.performanceMetrics.memory}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white font-semibold">{selectedWorkflow.analytics.performanceMetrics.responseTime}ms</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Throughput</span>
                      <span className="text-white font-semibold">{selectedWorkflow.analytics.performanceMetrics.throughput}/min</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  
  </ModernLayout>

  </ModernLayout>
  );
};

export default WorkflowDesignerPage; 