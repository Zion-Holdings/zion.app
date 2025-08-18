import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';

interface APIEndpoint {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  name: string;
  description: string;
  category: string;
  version: string;
  deprecated: boolean;
  authentication: boolean;
  rateLimit?: string;
  parameters: APIParameter[];
  requestBody?: APIRequestBody;
  responses: APIResponse[];
  examples: APIExample[];
  tags: string[];
}

interface APIParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue?: string;
  example?: string;
  enum?: string[];
}

interface APISchema {
  type: string;
  properties?: Record<string, unknown>;
  required?: string[];
  items?: APISchema;
}

interface APIExampleData {
  schema: APISchema;
  example: unknown;
}

interface APIRequestBody {
  description: string;
  required: boolean;
  content: {
    [key: string]: APIExampleData;
  };
}

interface APIResponse {
  code: number;
  description: string;
  content?: {
    [key: string]: APIExampleData;
  };
}

interface APIExample {
  name: string;
  description: string;
  request: {
    method: string;
    url: string;
    headers: { [key: string]: string };
    body?: unknown;
  };
  response: {
    status: number;
    headers: { [key: string]: string };
    body: unknown;
  };
}

interface APITest {
  endpoint: APIEndpoint;
  request: {
    method: string;
    url: string;
    headers: { [key: string]: string };
    body?: unknown;
  };
  response?: {
    status: number;
    headers: { [key: string]: string };
    body: unknown;
    time: number;
  };
  loading: boolean;
  error?: string;
}

const APIDocumentation: React.FC = () => {
  const [endpoints, setEndpoints] = useState<APIEndpoint[]>([]);
  const [currentView, setCurrentView] = useState<'overview' | 'endpoints' | 'testing' | 'examples'>('overview');
  const [filters, setFilters] = useState({
    method: [] as string[],
    category: [] as string[],
    authentication: null as boolean | null,
    search: ''
  });
  const [activeTests, setActiveTests] = useState<APITest[]>([]);
  const [showTestPanel, setShowTestPanel] = useState(false);

  // Mock API endpoints data
  const mockEndpoints = useMemo<APIEndpoint[]>(() => [
    {
      id: '1',
      method: 'GET',
      path: '/api/v1/users',
      name: 'Get Users',
      description: 'Retrieve a list of users with optional filtering and pagination',
      category: 'User Management',
      version: 'v1',
      deprecated: false,
      authentication: true,
      rateLimit: '100 requests/hour',
      parameters: [
        {
          name: 'page',
          type: 'integer',
          required: false,
          description: 'Page number for pagination',
          defaultValue: '1',
          example: '1'
        },
        {
          name: 'limit',
          type: 'integer',
          required: false,
          description: 'Number of users per page',
          defaultValue: '20',
          example: '20'
        },
        {
          name: 'status',
          type: 'string',
          required: false,
          description: 'Filter users by status',
          enum: ['active', 'inactive', 'suspended'],
          example: 'active'
        },
        {
          name: 'role',
          type: 'string',
          required: false,
          description: 'Filter users by role',
          example: 'admin'
        }
      ],
      responses: [
        {
          code: 200,
          description: 'Successfully retrieved users',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  users: { type: 'array' },
                  pagination: { type: 'object' },
                  total: { type: 'integer' }
                }
              },
              example: {
                users: [
                  {
                    id: '1',
                    username: 'admin',
                    email: 'admin@zion.app',
                    firstName: 'System',
                    lastName: 'Administrator',
                    status: 'active',
                    role: 'Super Admin'
                  }
                ],
                pagination: {
                  page: 1,
                  limit: 20,
                  totalPages: 1
                },
                total: 1
              }
            }
          }
        },
        {
          code: 401,
          description: 'Unauthorized - Authentication required',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' }
                }
              },
              example: {
                error: 'Unauthorized',
                message: 'Authentication token is required'
              }
            }
          }
        },
        {
          code: 429,
          description: 'Too Many Requests - Rate limit exceeded',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  retryAfter: { type: 'integer' }
                }
              },
              example: {
                error: 'Too Many Requests',
                retryAfter: 3600
              }
            }
          }
        }
      ],
      examples: [
        {
          name: 'Basic Request',
          description: 'Simple request to get all users',
          request: {
            method: 'GET',
            url: '/api/v1/users',
            headers: {
              'Authorization': 'Bearer YOUR_TOKEN',
              'Content-Type': 'application/json'
            }
          },
          response: {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'X-RateLimit-Remaining': '99'
            },
            body: {
              users: [
                {
                  id: '1',
                  username: 'admin',
                  email: 'admin@zion.app',
                  firstName: 'System',
                  lastName: 'Administrator',
                  status: 'active',
                  role: 'Super Admin'
                }
              ],
              pagination: {
                page: 1,
                limit: 20,
                totalPages: 1
              },
              total: 1
            }
          }
        },
        {
          name: 'Filtered Request',
          description: 'Request with pagination and filtering',
          request: {
            method: 'GET',
            url: '/api/v1/users?page=1&limit=10&status=active&role=admin',
            headers: {
              'Authorization': 'Bearer YOUR_TOKEN',
              'Content-Type': 'application/json'
            }
          },
          response: {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'X-RateLimit-Remaining': '98'
            },
            body: {
              users: [
                {
                  id: '1',
                  username: 'admin',
                  email: 'admin@zion.app',
                  firstName: 'System',
                  lastName: 'Administrator',
                  status: 'active',
                  role: 'Super Admin'
                }
              ],
              pagination: {
                page: 1,
                limit: 10,
                totalPages: 1
              },
              total: 1
            }
          }
        }
      ],
      tags: ['users', 'authentication', 'pagination']
    },
    {
      id: '2',
      method: 'POST',
      path: '/api/v1/users',
      name: 'Create User',
      description: 'Create a new user account with the specified details',
      category: 'User Management',
      version: 'v1',
      deprecated: false,
      authentication: true,
      rateLimit: '50 requests/hour',
      parameters: [],
      requestBody: {
        description: 'User creation data',
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['username', 'email', 'firstName', 'lastName', 'password'],
              properties: {
                username: { type: 'string', minLength: 3 },
                email: { type: 'string', format: 'email' },
                firstName: { type: 'string', minLength: 1 },
                lastName: { type: 'string', minLength: 1 },
                password: { type: 'string', minLength: 8 },
                role: { type: 'string' },
                department: { type: 'string' }
              }
            },
            example: {
              username: 'john.doe',
              email: 'john.doe@zion.app',
              firstName: 'John',
              lastName: 'Doe',
              password: 'securepassword123',
              role: 'Content Manager',
              department: 'Content'
            }
          }
        }
      },
      responses: [
        {
          code: 201,
          description: 'User created successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  user: { type: 'object' },
                  message: { type: 'string' }
                }
              },
              example: {
                user: {
                  id: '2',
                  username: 'john.doe',
                  email: 'john.doe@zion.app',
                  firstName: 'John',
                  lastName: 'Doe',
                  status: 'active',
                  role: 'Content Manager',
                  department: 'Content',
                  createdAt: '2024-01-15T10:30:00Z'
                },
                message: 'User created successfully'
              }
            }
          }
        },
        {
          code: 400,
          description: 'Bad Request - Validation error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  details: { type: 'array' }
                }
              },
              example: {
                error: 'Validation Error',
                details: [
                  {
                    field: 'email',
                    message: 'Email must be a valid email address'
                  }
                ]
              }
            }
          }
        },
        {
          code: 409,
          description: 'Conflict - User already exists',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' }
                }
              },
              example: {
                error: 'Conflict',
                message: 'User with this email already exists'
              }
            }
          }
        }
      ],
      examples: [
        {
          name: 'Create User',
          description: 'Create a new user account',
          request: {
            method: 'POST',
            url: '/api/v1/users',
            headers: {
              'Authorization': 'Bearer YOUR_TOKEN',
              'Content-Type': 'application/json'
            },
            body: {
              username: 'john.doe',
              email: 'john.doe@zion.app',
              firstName: 'John',
              lastName: 'Doe',
              password: 'securepassword123',
              role: 'Content Manager',
              department: 'Content'
            }
          },
          response: {
            status: 201,
            headers: {
              'Content-Type': 'application/json',
              'Location': '/api/v1/users/2'
            },
            body: {
              user: {
                id: '2',
                username: 'john.doe',
                email: 'john.doe@zion.app',
                firstName: 'John',
                lastName: 'Doe',
                status: 'active',
                role: 'Content Manager',
                department: 'Content',
                createdAt: '2024-01-15T10:30:00Z'
              },
              message: 'User created successfully'
            }
          }
        }
      ],
      tags: ['users', 'authentication', 'creation']
    },
    {
      id: '3',
      method: 'GET',
      path: '/api/v1/analytics/dashboard',
      name: 'Get Dashboard Analytics',
      description: 'Retrieve comprehensive analytics data for the dashboard',
      category: 'Analytics',
      version: 'v1',
      deprecated: false,
      authentication: true,
      rateLimit: '200 requests/hour',
      parameters: [
        {
          name: 'period',
          type: 'string',
          required: false,
          description: 'Time period for analytics',
          enum: ['day', 'week', 'month', 'year'],
          example: 'week'
        },
        {
          name: 'metrics',
          type: 'string',
          required: false,
          description: 'Comma-separated list of metrics to include',
          example: 'users,revenue,engagement'
        }
      ],
      responses: [
        {
          code: 200,
          description: 'Analytics data retrieved successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  period: { type: 'string' },
                  metrics: { type: 'object' },
                  summary: { type: 'object' }
                }
              },
              example: {
                period: 'week',
                metrics: {
                  users: {
                    total: 15420,
                    active: 8920,
                    new: 1230
                  },
                  revenue: {
                    total: 45600,
                    growth: 12.5
                  },
                  engagement: {
                    avgSessionTime: 320,
                    bounceRate: 0.28,
                    conversionRate: 0.045
                  }
                },
                summary: {
                  status: 'healthy',
                  trends: 'positive',
                  recommendations: [
                    'User engagement is strong',
                    'Consider A/B testing for conversion optimization'
                  ]
                }
              }
            }
          }
        }
      ],
      examples: [
        {
          name: 'Weekly Analytics',
          description: 'Get analytics for the current week',
          request: {
            method: 'GET',
            url: '/api/v1/analytics/dashboard?period=week&metrics=users,revenue,engagement',
            headers: {
              'Authorization': 'Bearer YOUR_TOKEN',
              'Content-Type': 'application/json'
            }
          },
          response: {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'max-age=300'
            },
            body: {
              period: 'week',
              metrics: {
                users: {
                  total: 15420,
                  active: 8920,
                  new: 1230
                },
                revenue: {
                  total: 45600,
                  growth: 12.5
                },
                engagement: {
                  avgSessionTime: 320,
                  bounceRate: 0.28,
                  conversionRate: 0.045
                }
              },
              summary: {
                status: 'healthy',
                trends: 'positive',
                recommendations: [
                  'User engagement is strong',
                  'Consider A/B testing for conversion optimization'
                ]
              }
            }
          }
        }
      ],
      tags: ['analytics', 'dashboard', 'metrics']
    }
  ]), []);

  useEffect(() => {
    setEndpoints(mockEndpoints);
  }, [mockEndpoints]);

  const filteredEndpoints = endpoints.filter(endpoint => {
    const methodMatch = filters.method.length === 0 || filters.method.includes(endpoint.method);
    const categoryMatch = filters.category.length === 0 || filters.category.includes(endpoint.category);
    const authMatch = filters.authentication === null || endpoint.authentication === filters.authentication;
    const searchMatch = !filters.search || 
                       endpoint.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                       endpoint.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                       endpoint.path.toLowerCase().includes(filters.search.toLowerCase());
    
    return methodMatch && categoryMatch && authMatch && searchMatch;
  });

  const getMethodColor = (method: string) => {
    const colors = {
      GET: 'bg-green-100 text-green-800',
      POST: 'bg-blue-100 text-blue-800',
      PUT: 'bg-yellow-100 text-yellow-800',
      DELETE: 'bg-red-100 text-red-800',
      PATCH: 'bg-purple-100 text-purple-800'
    };
    return colors[method as keyof typeof colors] || colors.GET;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'User Management': 'bg-blue-100 text-blue-800',
      'Analytics': 'bg-green-100 text-green-800',
      'Content': 'bg-purple-100 text-purple-800',
      'Authentication': 'bg-red-100 text-red-800',
      'System': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.System;
  };

  const runTest = async (test: APITest) => {
    setActiveTests(prev => prev.map(t => 
      t === test ? { ...t, loading: true, error: undefined } : t
    ));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      const success = Math.random() > 0.1; // 90% success rate
      
      if (success) {
        const response = {
          status: test.endpoint.responses[0].code,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Remaining': '99'
          },
          body: test.endpoint.responses[0].content?.['application/json']?.example || {},
          time: Math.random() * 1000 + 200
        };
        
        setActiveTests(prev => prev.map(t => 
          t === test ? { ...t, response, loading: false } : t
        ));
      } else {
        const errorResponse = test.endpoint.responses.find(r => r.code >= 400);
        const response = {
          status: errorResponse?.code || 500,
          headers: {
            'Content-Type': 'application/json'
          },
          body: errorResponse?.content?.['application/json']?.example || { error: 'Internal Server Error' },
          time: Math.random() * 1000 + 200
        };
        
        setActiveTests(prev => prev.map(t => 
          t === test ? { ...t, response, loading: false } : t
        ));
      }
    } catch {
      setActiveTests(prev => prev.map(t => 
        t === test ? { ...t, loading: false, error: 'Network error' } : t
      ));
    }
  };

  const addTest = (endpoint: APIEndpoint) => {
    const test: APITest = {
      endpoint,
      request: {
        method: endpoint.method,
        url: endpoint.path,
        headers: {
          'Authorization': 'Bearer YOUR_TOKEN',
          'Content-Type': 'application/json'
        },
        body: endpoint.requestBody?.content?.['application/json']?.example
      },
      loading: false
    };
    
    setActiveTests(prev => [...prev, test]);
    setShowTestPanel(true);
  };

  const removeTest = (test: APITest) => {
    setActiveTests(prev => prev.filter(t => t !== test));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Head>
        <title>API Documentation - Zion App</title>
        <meta name="description" content="Comprehensive API documentation with interactive testing and examples" />
      
        <meta property="og:title" content="📚 API Documentation" />
        <meta property="og:description" content="📚 API Documentation — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">📚 API Documentation</h1>
              <p className="mt-2 text-gray-600">Comprehensive API reference with interactive testing and examples</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Endpoints:</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {endpoints.length}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Active Tests:</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  {activeTests.length}
                </span>
              </div>
              <button
                onClick={() => setShowTestPanel(!showTestPanel)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                {showTestPanel ? 'Hide' : 'Show'} Test Panel
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-6">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview', icon: '📖' },
                { id: 'endpoints', label: 'Endpoints', icon: '🔗' },
                { id: 'testing', label: 'Testing', icon: '🧪' },
                { id: 'examples', label: 'Examples', icon: '💡' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCurrentView(tab.id as 'overview' | 'endpoints' | 'testing' | 'examples')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    currentView === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Overview View */}
          {currentView === 'overview' && (
            <div className="space-y-6">
              {/* API Information */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">API Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Base URL</h3>
                    <p className="text-lg font-mono text-gray-900">https://api.zion.app</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Current Version</h3>
                    <p className="text-lg font-semibold text-blue-600">v1</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Authentication</h3>
                    <p className="text-lg text-gray-900">Bearer Token</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Rate Limiting</h3>
                    <p className="text-lg text-gray-900">Per endpoint</p>
                  </div>
                </div>
              </div>

              {/* Quick Start */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Start</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">1. Authentication</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div>Authorization: Bearer YOUR_TOKEN</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">2. Make a Request</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div>GET /api/v1/users</div>
                      <div>Host: api.zion.app</div>
                      <div>Authorization: Bearer YOUR_TOKEN</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">3. Handle Response</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div>Status: 200 OK</div>
                      <div>Content-Type: application/json</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Endpoints Summary */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Endpoints Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from(new Set(endpoints.map(e => e.category))).map(category => {
                    const categoryEndpoints = endpoints.filter(e => e.category === category);
                    return (
                      <div key={category} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2">{category}</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {categoryEndpoints.length} endpoint{categoryEndpoints.length !== 1 ? 's' : ''}
                        </p>
                        <div className="space-y-1">
                          {categoryEndpoints.slice(0, 3).map(endpoint => (
                            <div key={endpoint.id} className="text-sm">
                              <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getMethodColor(endpoint.method)}`}>
                                {endpoint.method}
                              </span>
                              <span className="ml-2 text-gray-700">{endpoint.path}</span>
                            </div>
                          ))}
                          {categoryEndpoints.length > 3 && (
                            <p className="text-xs text-gray-500">
                              +{categoryEndpoints.length - 3} more...
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Endpoints View */}
          {currentView === 'endpoints' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <input
                      type="text"
                      value={filters.search}
                      onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                      placeholder="Search endpoints..."
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    />
                  </div>

                  {/* Method Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">HTTP Method</label>
                    <select
                      multiple
                      value={filters.method}
                      onChange={(e) => {
                        const selected = Array.from(e.target.selectedOptions, option => option.value);
                        setFilters(prev => ({ ...prev, method: selected }));
                      }}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    >
                      <option value="GET">GET</option>
                      <option value="POST">POST</option>
                      <option value="PUT">PUT</option>
                      <option value="DELETE">DELETE</option>
                      <option value="PATCH">PATCH</option>
                    </select>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      multiple
                      value={filters.category}
                      onChange={(e) => {
                        const selected = Array.from(e.target.selectedOptions, option => option.value);
                        setFilters(prev => ({ ...prev, category: selected }));
                      }}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    >
                      {Array.from(new Set(endpoints.map(e => e.category))).map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Authentication Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Authentication</label>
                    <select
                      value={filters.authentication === null ? '' : filters.authentication.toString()}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilters(prev => ({ 
                          ...prev, 
                          authentication: value === '' ? null : value === 'true' 
                        }));
                      }}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    >
                      <option value="">All</option>
                      <option value="true">Required</option>
                      <option value="false">Not Required</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Endpoints List */}
              <div className="space-y-4">
                {filteredEndpoints.map((endpoint) => (
                  <div key={endpoint.id} className="bg-white rounded-lg shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getMethodColor(endpoint.method)}`}>
                              {endpoint.method}
                            </span>
                            <span className="font-mono text-lg text-gray-900">{endpoint.path}</span>
                            {endpoint.deprecated && (
                              <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                                Deprecated
                              </span>
                            )}
                            {endpoint.authentication && (
                              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                Auth Required
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{endpoint.name}</h3>
                          <p className="text-gray-600 mb-3">{endpoint.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span>Version: {endpoint.version}</span>
                            <span>Category: <span className={`px-2 py-1 rounded-full ${getCategoryColor(endpoint.category)}`}>{endpoint.category}</span></span>
                            {endpoint.rateLimit && <span>Rate Limit: {endpoint.rateLimit}</span>}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => addTest(endpoint)}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            Test
                          </button>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {endpoint.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testing View */}
          {currentView === 'testing' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">API Testing</h2>
                <p className="text-gray-600 mb-6">
                  Test API endpoints with real requests and see responses in real-time.
                </p>
                
                {activeTests.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🧪</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No Active Tests</h3>
                    <p className="text-gray-600 mb-4">
                      Start testing by selecting endpoints from the Endpoints tab.
                    </p>
                    <button
                      onClick={() => setCurrentView('endpoints')}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Browse Endpoints
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {activeTests.map((test, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium text-gray-900">{test.endpoint.name}</h3>
                            <p className="text-sm text-gray-600">{test.endpoint.path}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => runTest(test)}
                              disabled={test.loading}
                              className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50"
                            >
                              {test.loading ? 'Running...' : 'Run Test'}
                            </button>
                            <button
                              onClick={() => removeTest(test)}
                              className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Request */}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Request</h4>
                          <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                            <div>{test.request.method} {test.request.url}</div>
                            {Object.entries(test.request.headers).map(([key, value]) => (
                              <div key={key}>{key}: {value}</div>
                            ))}
                            {test.request.body && (
                              <div className="mt-2">
                                <div>Body:</div>
                                <pre className="text-yellow-400">{JSON.stringify(test.request.body, null, 2)}</pre>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Response */}
                        {test.response && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Response</h4>
                            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                              <div>Status: {test.response.status}</div>
                              <div>Time: {test.response.time.toFixed(0)}ms</div>
                              {Object.entries(test.response.headers).map(([key, value]) => (
                                <div key={key}>{key}: {value}</div>
                              ))}
                              <div className="mt-2">
                                <div>Body:</div>
                                <pre className="text-yellow-400">{JSON.stringify(test.response.body, null, 2)}</pre>
                              </div>
                            </div>
                          </div>
                        )}

                        {test.error && (
                          <div className="mt-2">
                            <span className="text-red-600 text-sm">Error: {test.error}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Examples View */}
          {currentView === 'examples' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Code Examples</h2>
                <p className="text-gray-600 mb-6">
                  Ready-to-use code examples for different programming languages and frameworks.
                </p>
                
                <div className="space-y-6">
                  {endpoints.map((endpoint) => (
                    <div key={endpoint.id} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {endpoint.name} - {endpoint.method} {endpoint.path}
                      </h3>
                      
                      <div className="space-y-4">
                        {endpoint.examples.map((example, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-2">{example.name}</h4>
                            <p className="text-sm text-gray-600 mb-3">{example.description}</p>
                            
                            {/* JavaScript/Node.js */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium text-gray-700">JavaScript/Node.js</h5>
                                <button
                                  onClick={() => copyToClipboard(`fetch('${example.request.url}', {
  method: '${example.request.method}',
  headers: ${JSON.stringify(example.request.headers, null, 2)},
  body: ${example.request.body ? JSON.stringify(example.request.body, null, 2) : 'undefined'}
})`)}
                                  className="text-xs text-blue-600 hover:text-blue-800"
                                >
                                  Copy
                                </button>
                              </div>
                              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                <div>fetch(&apos;{example.request.url}&apos;, {'{'}</div>
                                <div>  method: &apos;{example.request.method}&apos;,</div>
                                <div>  headers: {JSON.stringify(example.request.headers, null, 2)},</div>
                                {example.request.body && (
                                  <div>  body: {JSON.stringify(example.request.body, null, 2)}</div>
                                )}
                                <div>{'}'})</div>
                              </div>
                            </div>

                            {/* cURL */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium text-gray-700">cURL</h5>
                                <button
                                  onClick={() => copyToClipboard(`curl -X ${example.request.method} '${example.request.url}' \\
  -H 'Authorization: ${example.request.headers.Authorization}' \\
  -H 'Content-Type: ${example.request.headers['Content-Type']}' \\
  ${example.request.body ? `-d '${JSON.stringify(example.request.body)}'` : ''}`)}
                                  className="text-xs text-blue-600 hover:text-blue-800"
                                >
                                  Copy
                                </button>
                              </div>
                              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                <div>curl -X {example.request.method} &apos;{example.request.url}&apos; \</div>
                                {Object.entries(example.request.headers).map(([key, value]) => (
                                  <div key={key}>  -H &apos;{key}: {value}&apos; \</div>
                                ))}
                                {example.request.body && (
                                  <div>  -d &apos;{JSON.stringify(example.request.body)}&apos;</div>
                                )}
                              </div>
                            </div>

                            {/* Python */}
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium text-gray-700">Python</h5>
                                <button
                                  onClick={() => copyToClipboard(`import requests

response = requests.${example.request.method.toLowerCase()}('${example.request.url}', 
  headers=${JSON.stringify(example.request.headers, null, 2)},
  ${example.request.body ? `json=${JSON.stringify(example.request.body, null, 2)}` : ''}
)`)}
                                  className="text-xs text-blue-600 hover:text-blue-800"
                                >
                                  Copy
                                </button>
                              </div>
                              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                <div>import requests</div>
                                <div></div>
                                <div>response = requests.{example.request.method.toLowerCase()}(&apos;{example.request.url}&apos;, </div>
                                <div>  headers={JSON.stringify(example.request.headers, null, 2)},</div>
                                {example.request.body && (
                                  <div>  json={JSON.stringify(example.request.body, null, 2)}</div>
                                )}
                                <div>)</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default APIDocumentation;