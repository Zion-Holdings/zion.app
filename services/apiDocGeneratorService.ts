export interface APIDocumentation {
  id: string;
  name: string;
  version: string;
  description: string;
  baseUrl: string;
  endpoints: APIEndpoint[];
  schemas: APISchema[];
  examples: APIExample[];
  metadata: {
    lastGenerated: Date;
    totalEndpoints: number;
    coverage: number;
    languages: string[];
    frameworks: string[];
  };
}

export interface APIEndpoint {
  id: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
  summary: string;
  description: string;
  parameters: APIParameter[];
  requestBody?: APIRequestBody;
  responses: APIResponse[];
  tags: string[];
  deprecated: boolean;
  rateLimit?: RateLimit;
  authentication?: AuthenticationRequirement;
}

export interface APIParameter {
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
  required: boolean;
  schema: APISchema;
  description: string;
  example?: any;
  deprecated?: boolean;
}

export interface APIRequestBody {
  required: boolean;
  content: Record<string, APIContent>;
  description?: string;
}

export interface APIContent {
  schema: APISchema;
  example?: any;
  examples?: Record<string, APIExample>;
}

export interface APIResponse {
  code: string;
  description: string;
  content?: Record<string, APIContent>;
  headers?: Record<string, APIHeader>;
}

export interface APIHeader {
  description: string;
  schema: APISchema;
  required: boolean;
}

export interface APISchema {
  type?: string;
  format?: string;
  description?: string;
  properties?: Record<string, APISchema>;
  items?: APISchema;
  required?: string[];
  enum?: any[];
  example?: any;
  deprecated?: boolean;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  default?: any;
  nullable?: boolean;
  $ref?: string;
}

export interface APIExample {
  id: string;
  name: string;
  summary: string;
  description: string;
  request: ExampleRequest;
  response: ExampleResponse;
  tags: string[];
}

export interface ExampleRequest {
  method: string;
  url: string;
  headers: Record<string, string>;
  body?: any;
}

export interface ExampleResponse {
  status: number;
  headers: Record<string, string>;
  body: any;
}

export interface RateLimit {
  requests: number;
  window: string;
  description?: string;
}

export interface AuthenticationRequirement {
  type: 'bearer' | 'apiKey' | 'oauth2' | 'basic';
  description: string;
  required: boolean;
}

export interface DocumentationConfig {
  outputFormat: 'html' | 'markdown' | 'pdf' | 'json' | 'openapi';
  includeExamples: boolean;
  includeSchemas: boolean;
  includeAuthentication: boolean;
  includeRateLimits: boolean;
  customStyling?: Record<string, any>;
  branding?: {
    logo?: string;
    primaryColor?: string;
    companyName?: string;
  };
}

class APIDocGeneratorService {
  private supportedFrameworks = [
    'express', 'fastify', 'koa', 'hapi', 'django', 'flask', 'fastapi', 'spring', 'aspnet', 'laravel'
  ];

  private supportedLanguages = [
    'javascript', 'typescript', 'python', 'java', 'csharp', 'php', 'go', 'ruby'
  ];

  async generateDocumentation(
    sourcePath: string,
    config: DocumentationConfig
  ): Promise<APIDocumentation> {
    const documentation: APIDocumentation = {
      id: `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: this.extractProjectName(sourcePath),
      version: await this.extractVersion(sourcePath),
      description: await this.extractDescription(sourcePath),
      baseUrl: await this.extractBaseUrl(sourcePath),
      endpoints: [],
      schemas: [],
      examples: [],
      metadata: {
        lastGenerated: new Date(),
        totalEndpoints: 0,
        coverage: 0,
        languages: [],
        frameworks: []
      }
    };

    try {
      // Analyze source code
      const analysis = await this.analyzeSourceCode(sourcePath);
      documentation.endpoints = analysis.endpoints;
      documentation.schemas = analysis.schemas;
      documentation.metadata.totalEndpoints = documentation.endpoints.length;
      documentation.metadata.languages = analysis.languages;
      documentation.metadata.frameworks = analysis.frameworks;

      // Generate examples if requested
      if (config.includeExamples) {
        documentation.examples = await this.generateExamples(documentation.endpoints);
      }

      // Calculate coverage
      documentation.metadata.coverage = this.calculateCoverage(documentation.endpoints);

    } catch (error) {
      console.error('Error generating documentation:', error);
      // Fallback to basic documentation
      documentation.endpoints = this.generateFallbackEndpoints();
      documentation.metadata.totalEndpoints = documentation.endpoints.length;
    }

    return documentation;
  }

  private async analyzeSourceCode(sourcePath: string): Promise<{
    endpoints: APIEndpoint[];
    schemas: APISchema[];
    languages: string[];
    frameworks: string[];
  }> {
    const endpoints: APIEndpoint[] = [];
    const schemas: APISchema[] = [];
    const languages: string[] = [];
    const frameworks: string[] = [];

    // Simulate code analysis based on file extensions
    const files = await this.scanDirectory(sourcePath);
    
    for (const file of files) {
      const extension = file.split('.').pop()?.toLowerCase();
      
      if (extension === 'js' || extension === 'ts') {
        languages.push('javascript', 'typescript');
        frameworks.push('express', 'fastify');
        endpoints.push(...this.analyzeJavaScriptFile(file));
      } else if (extension === 'py') {
        languages.push('python');
        frameworks.push('django', 'flask', 'fastapi');
        endpoints.push(...this.analyzePythonFile(file));
      } else if (extension === 'java') {
        languages.push('java');
        frameworks.push('spring');
        endpoints.push(...this.analyzeJavaFile(file));
      }
    }

    // Remove duplicates
    const uniqueLanguages = [...new Set(languages)];
    const uniqueFrameworks = [...new Set(frameworks)];

    return {
      endpoints,
      schemas: this.generateSchemas(endpoints),
      languages: uniqueLanguages,
      frameworks: uniqueFrameworks
    };
  }

  private async scanDirectory(path: string): Promise<string[]> {
    // Simulate directory scanning
    return [
      'src/routes/users.js',
      'src/routes/products.js',
      'src/routes/orders.js',
      'src/models/User.js',
      'src/models/Product.js',
      'src/middleware/auth.js',
      'src/config/database.js'
    ];
  }

  private analyzeJavaScriptFile(filePath: string): APIEndpoint[] {
    const endpoints: APIEndpoint[] = [];
    
    // Simulate route analysis
    if (filePath.includes('users')) {
      endpoints.push(
        {
          id: `endpoint_${Date.now()}_1`,
          path: '/api/users',
          method: 'GET',
          summary: 'Get all users',
          description: 'Retrieve a list of all users with optional filtering and pagination',
          parameters: [
            {
              name: 'page',
              in: 'query',
              required: false,
              schema: { type: 'integer', minimum: 1, default: 1 },
              description: 'Page number for pagination'
            },
            {
              name: 'limit',
              in: 'query',
              required: false,
              schema: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
              description: 'Number of users per page'
            }
          ],
          requestBody: undefined,
          responses: [
            {
              code: '200',
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      users: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/User' }
                      },
                      pagination: {
                        $ref: '#/components/schemas/Pagination'
                      }
                    }
                  }
                }
              }
            }
          ],
          tags: ['Users'],
          deprecated: false,
          rateLimit: {
            requests: 100,
            window: '1m'
          },
          authentication: {
            type: 'bearer',
            description: 'JWT token required',
            required: true
          }
        },
        {
          id: `endpoint_${Date.now()}_2`,
          path: '/api/users/{id}',
          method: 'GET',
          summary: 'Get user by ID',
          description: 'Retrieve a specific user by their unique identifier',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'string', format: 'uuid' },
              description: 'User unique identifier'
            }
          ],
          requestBody: undefined,
          responses: [
            {
              code: '200',
              description: 'User found successfully',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/User' }
                }
              }
            },
            {
              code: '404',
              description: 'User not found'
            }
          ],
          tags: ['Users'],
          deprecated: false
        }
      );
    }

    return endpoints;
  }

  private analyzePythonFile(filePath: string): APIEndpoint[] {
    const endpoints: APIEndpoint[] = [];
    
    // Simulate FastAPI/Django route analysis
    if (filePath.includes('products')) {
      endpoints.push({
        id: `endpoint_${Date.now()}_3`,
        path: '/api/products',
        method: 'POST',
        summary: 'Create new product',
        description: 'Create a new product with the provided information',
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Product' }
            }
          }
        },
        responses: [
          {
            code: '201',
            description: 'Product created successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Product' }
              }
            }
          },
          {
            code: '400',
            description: 'Invalid input data'
          }
        ],
        tags: ['Products'],
        deprecated: false
      });
    }

    return endpoints;
  }

  private analyzeJavaFile(filePath: string): APIEndpoint[] {
    const endpoints: APIEndpoint[] = [];
    
    // Simulate Spring Boot endpoint analysis
    if (filePath.includes('orders')) {
      endpoints.push({
        id: `endpoint_${Date.now()}_4`,
        path: '/api/orders',
        method: 'GET',
        summary: 'Get all orders',
        description: 'Retrieve a list of all orders with optional filtering',
        parameters: [
          {
            name: 'status',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['pending', 'processing', 'completed', 'cancelled'] },
            description: 'Filter orders by status'
          }
        ],
        requestBody: undefined,
        responses: [
          {
            code: '200',
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Order' }
                }
              }
            }
          }
        ],
        tags: ['Orders'],
        deprecated: false
      });
    }

    return endpoints;
  }

  private generateSchemas(endpoints: APIEndpoint[]): APISchema[] {
    const schemas: APISchema[] = [
      {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          email: { type: 'string', format: 'email' },
          name: { type: 'string', minLength: 1, maxLength: 100 },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' }
        },
        required: ['id', 'email', 'name'],
        description: 'User entity schema'
      },
      {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string', minLength: 1, maxLength: 200 },
          description: { type: 'string', maxLength: 1000 },
          price: { type: 'number', minimum: 0 },
          category: { type: 'string' },
          inStock: { type: 'boolean' }
        },
        required: ['id', 'name', 'price'],
        description: 'Product entity schema'
      },
      {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          userId: { type: 'string', format: 'uuid' },
          items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                productId: { type: 'string', format: 'uuid' },
                quantity: { type: 'integer', minimum: 1 },
                price: { type: 'number', minimum: 0 }
              }
            }
          },
          total: { type: 'number', minimum: 0 },
          status: { type: 'string', enum: ['pending', 'processing', 'completed', 'cancelled'] }
        },
        required: ['id', 'userId', 'items', 'total'],
        description: 'Order entity schema'
      },
      {
        type: 'object',
        properties: {
          page: { type: 'integer', minimum: 1 },
          limit: { type: 'integer', minimum: 1 },
          total: { type: 'integer', minimum: 0 },
          pages: { type: 'integer', minimum: 1 }
        },
        required: ['page', 'limit', 'total', 'pages'],
        description: 'Pagination metadata schema'
      }
    ];

    return schemas;
  }

  private async generateExamples(endpoints: APIEndpoint[]): Promise<APIExample[]> {
    const examples: APIExample[] = [];

    for (const endpoint of endpoints.slice(0, 3)) { // Limit to first 3 endpoints
      examples.push({
        id: `example_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: `${endpoint.method} ${endpoint.path}`,
        summary: endpoint.summary,
        description: endpoint.description,
        request: {
          method: endpoint.method,
          url: `https://api.example.com${endpoint.path}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your-jwt-token'
          },
          body: endpoint.requestBody ? this.generateExampleBody(endpoint.requestBody) : undefined
        },
        response: {
          status: parseInt(endpoint.responses[0]?.code || '200'),
          headers: {
            'Content-Type': 'application/json'
          },
          body: this.generateExampleResponse(endpoint.responses[0])
        },
        tags: endpoint.tags
      });
    }

    return examples;
  }

  private generateExampleBody(requestBody: APIRequestBody): any {
    // Generate example request body based on schema
    return {
      name: "Example Name",
      email: "user@example.com",
      description: "This is an example description"
    };
  }

  private generateExampleResponse(response: APIResponse): any {
    // Generate example response based on schema
    if (response.content?.['application/json']?.schema) {
      return {
        id: "123e4567-e89b-12d3-a456-426614174000",
        name: "Example Item",
        createdAt: new Date().toISOString()
      };
    }
    return null;
  }

  private generateFallbackEndpoints(): APIEndpoint[] {
    return [
      {
        id: `fallback_${Date.now()}`,
        path: '/api/health',
        method: 'GET',
        summary: 'Health check endpoint',
        description: 'Simple health check to verify API is running',
        parameters: [],
        requestBody: undefined,
        responses: [
          {
            code: '200',
            description: 'API is healthy'
          }
        ],
        tags: ['System'],
        deprecated: false
      }
    ];
  }

  private extractProjectName(sourcePath: string): string {
    // Extract project name from path
    const parts = sourcePath.split('/');
    return parts[parts.length - 1] || 'API Documentation';
  }

  private async extractVersion(sourcePath: string): Promise<string> {
    // Simulate version extraction from package.json, requirements.txt, etc.
    return '1.0.0';
  }

  private async extractDescription(sourcePath: string): Promise<string> {
    // Simulate description extraction from README, package.json, etc.
    return 'Comprehensive API documentation automatically generated from source code';
  }

  private async extractBaseUrl(sourcePath: string): Promise<string> {
    // Simulate base URL extraction from configuration files
    return 'https://api.example.com';
  }

  private calculateCoverage(endpoints: APIEndpoint[]): number {
    // Calculate documentation coverage based on endpoints
    if (endpoints.length === 0) return 0;
    
    let documentedEndpoints = 0;
    for (const endpoint of endpoints) {
      if (endpoint.description && endpoint.description.length > 10) {
        documentedEndpoints++;
      }
    }
    
    return Math.round((documentedEndpoints / endpoints.length) * 100);
  }

  async exportDocumentation(
    documentation: APIDocumentation,
    format: 'html' | 'markdown' | 'pdf' | 'json' | 'openapi'
  ): Promise<string> {
    // Simulate export functionality
    const timestamp = new Date().toISOString();
    return `Documentation exported in ${format.toUpperCase()} format at ${timestamp}`;
  }

  async updateDocumentation(
    documentationId: string,
    changes: Partial<APIDocumentation>
  ): Promise<APIDocumentation> {
    // Simulate documentation update
    return {
      ...changes,
      id: documentationId,
      metadata: {
        ...changes.metadata,
        lastGenerated: new Date()
      }
    } as APIDocumentation;
  }
}

export const apiDocGeneratorService = new APIDocGeneratorService();