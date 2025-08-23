# API Reference

## Overview

This document provides comprehensive documentation for all APIs, automation endpoints, and integration points available in the bolt.new.zion.app system.

## Base URLs

- **Development**: `http://localhost:3000`
- **Production**: `https://bolt.new.zion.app`
- **API Base**: `/api`

## Authentication

### API Keys
Most endpoints require authentication via API keys passed in headers:
```http
Authorization: Bearer YOUR_API_KEY
X-API-Key: YOUR_API_KEY
```

### Rate Limiting
- **Standard**: 100 requests per minute
- **Premium**: 1000 requests per minute
- **Enterprise**: 10000 requests per minute

## Core API Endpoints

### Content Management

#### Get All Pages
```http
GET /api/pages
```

**Response:**
```json
{
  "success": true,
  "data": {
    "pages": [
      {
        "id": "page-1",
        "title": "Homepage",
        "slug": "/",
        "status": "published",
        "lastModified": "2025-01-17T10:00:00Z"
      }
    ],
    "total": 2960,
    "page": 1,
    "limit": 50
  }
}
```

#### Create Page
```http
POST /api/pages
Content-Type: application/json

{
  "title": "New Page",
  "content": "Page content here",
  "slug": "new-page",
  "meta": {
    "description": "Page description",
    "keywords": ["keyword1", "keyword2"]
  }
}
```

#### Update Page
```http
PUT /api/pages/{pageId}
Content-Type: application/json

{
  "title": "Updated Page Title",
  "content": "Updated content"
}
```

#### Delete Page
```http
DELETE /api/pages/{pageId}
```

### Automation Management

#### Get Automation Status
```http
GET /api/automation/status
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalAutomations": 227,
    "activeAutomations": 45,
    "failedAutomations": 2,
    "automations": [
      {
        "id": "content-sync",
        "name": "Content Synchronization",
        "status": "running",
        "lastRun": "2025-01-17T09:30:00Z",
        "nextRun": "2025-01-17T10:00:00Z"
      }
    ]
  }
}
```

#### Start Automation
```http
POST /api/automation/start
Content-Type: application/json

{
  "automationId": "content-sync",
  "parameters": {
    "force": true,
    "priority": "high"
  }
}
```

#### Stop Automation
```http
POST /api/automation/stop
Content-Type: application/json

{
  "automationId": "content-sync"
}
```

### Monitoring & Health

#### System Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2025-01-17T10:00:00Z",
    "services": {
      "database": "healthy",
      "cache": "healthy",
      "automation": "healthy"
    },
    "metrics": {
      "uptime": "99.9%",
      "responseTime": "45ms",
      "activeConnections": 125
    }
  }
}
```

#### Performance Metrics
```http
GET /api/metrics/performance
```

**Query Parameters:**
- `period`: Time period (1h, 24h, 7d, 30d)
- `metric`: Specific metric (responseTime, throughput, errors)

### Content Generation

#### Generate Content
```http
POST /api/content/generate
Content-Type: application/json

{
  "type": "blog-post",
  "topic": "AI Automation Trends 2025",
  "length": "medium",
  "tone": "professional",
  "keywords": ["AI", "automation", "trends"]
}
```

#### Content Templates
```http
GET /api/content/templates
```

**Response:**
```json
{
  "success": true,
  "data": {
    "templates": [
      {
        "id": "blog-post",
        "name": "Blog Post",
        "description": "Standard blog post template",
        "fields": ["title", "content", "meta", "tags"],
        "example": "..."
      }
    ]
  }
}
```

## Automation Scripts API

### PM2 Management

#### Get PM2 Status
```http
GET /api/pm2/status
```

#### Start PM2 Process
```http
POST /api/pm2/start
Content-Type: application/json

{
  "ecosystem": "ecosystem.config.cjs",
  "process": "app"
}
```

#### Restart PM2 Process
```http
POST /api/pm2/restart
Content-Type: application/json

{
  "process": "app"
}
```

### GitHub Actions Integration

#### Trigger Workflow
```http
POST /api/github/workflows/trigger
Content-Type: application/json

{
  "workflow": "ci-cd",
  "ref": "main",
  "inputs": {
    "environment": "production"
  }
}
```

#### Get Workflow Status
```http
GET /api/github/workflows/{workflowId}/status
```

### LinkedIn Automation

#### Generate Content
```http
POST /api/linkedin/generate
Content-Type: application/json

{
  "type": "post",
  "topic": "AI trends",
  "tone": "professional",
  "hashtags": ["#AI", "#Automation"]
}
```

#### Schedule Post
```http
POST /api/linkedin/schedule
Content-Type: application/json

{
  "content": "Post content here",
  "scheduledTime": "2025-01-18T10:00:00Z",
  "platform": "linkedin"
}
```

## Webhook Endpoints

### Content Webhooks

#### Content Update Webhook
```http
POST /api/webhooks/content-update
Content-Type: application/json

{
  "event": "page.updated",
  "data": {
    "pageId": "page-123",
    "changes": ["title", "content"],
    "timestamp": "2025-01-17T10:00:00Z"
  }
}
```

#### Automation Complete Webhook
```http
POST /api/webhooks/automation-complete
Content-Type: application/json

{
  "event": "automation.completed",
  "data": {
    "automationId": "content-sync",
    "status": "success",
    "duration": 45000,
    "timestamp": "2025-01-17T10:00:00Z"
  }
}
```

## Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters",
    "details": [
      {
        "field": "title",
        "message": "Title is required"
      }
    ]
  },
  "timestamp": "2025-01-17T10:00:00Z"
}
```

### Error Codes
- `AUTHENTICATION_ERROR`: Invalid or missing authentication
- `AUTHORIZATION_ERROR`: Insufficient permissions
- `VALIDATION_ERROR`: Invalid input parameters
- `NOT_FOUND`: Resource not found
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Server error

## SDKs and Libraries

### JavaScript/Node.js
```bash
npm install @zion-holdings/bolt-api
```

```javascript
import { BoltAPI } from '@zion-holdings/bolt-api';

const api = new BoltAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://bolt.new.zion.app'
});

// Get pages
const pages = await api.pages.list();

// Create content
const content = await api.content.generate({
  type: 'blog-post',
  topic: 'AI Trends'
});
```

### Python
```bash
pip install bolt-api-python
```

```python
from bolt_api import BoltAPI

api = BoltAPI(api_key='your-api-key')

# Get automation status
status = api.automation.get_status()

# Generate content
content = api.content.generate(
    type='blog-post',
    topic='AI Trends'
)
```

## Rate Limits and Quotas

### Free Tier
- 100 API calls per day
- 10 automation runs per month
- Basic content generation

### Pro Tier
- 10,000 API calls per day
- 100 automation runs per month
- Advanced content generation
- Priority support

### Enterprise Tier
- Unlimited API calls
- Unlimited automation runs
- Custom content generation
- Dedicated support
- Custom integrations

## WebSocket API

### Real-time Updates

Connect to WebSocket endpoint for real-time updates:
```javascript
const ws = new WebSocket('wss://bolt.new.zion.app/ws');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  if (data.type === 'automation.update') {
    console.log('Automation status:', data.data);
  }
};
```

### WebSocket Events
- `automation.update`: Automation status changes
- `content.update`: Content modification events
- `system.health`: System health updates
- `performance.metrics`: Real-time performance data

## Testing

### Test Endpoints
```http
GET /api/test/health
POST /api/test/webhook
GET /api/test/automation
```

### Mock Data
```http
GET /api/test/mock/pages
GET /api/test/mock/automations
GET /api/test/mock/metrics
```

## Support

### Documentation
- [Interactive API Explorer](https://bolt.new.zion.app/api-explorer)
- [SDK Documentation](https://docs.zion-holdings.com/bolt-api)
- [Examples Repository](https://github.com/Zion-Holdings/bolt-api-examples)

### Contact
- **API Support**: api-support@zion-holdings.com
- **Technical Issues**: tech-support@zion-holdings.com
- **Feature Requests**: features@zion-holdings.com

---

*Last updated: January 17, 2025*
*API Version: v1.0.0*