# API Reference

## Overview

This document provides comprehensive information about the APIs, automation endpoints, and integration capabilities of bolt.new.zion.app.

## Core APIs

### Content Management API

#### GET `/api/content`
Retrieves content metadata and statistics.

**Response:**
```json
{
  "totalPages": 2960,
  "totalComponents": 12,
  "automations": 227,
  "lastUpdated": "2025-01-17T10:00:00Z"
}
```

#### POST `/api/content/generate`
Generates new content using AI automation.

**Request Body:**
```json
{
  "type": "blog_post",
  "topic": "AI Automation Trends 2025",
  "keywords": ["automation", "AI", "trends"],
  "length": "medium"
}
```

**Response:**
```json
{
  "id": "content_12345",
  "status": "generating",
  "estimatedTime": "2-3 minutes"
}
```

### Automation API

#### GET `/api/automation/status`
Returns the current status of all automation systems.

**Response:**
```json
{
  "systems": {
    "content_generation": "active",
    "seo_optimization": "active",
    "security_monitoring": "active",
    "performance_tracking": "active"
  },
  "lastRun": "2025-01-17T09:55:00Z",
  "nextRun": "2025-01-17T10:00:00Z"
}
```

#### POST `/api/automation/trigger`
Manually triggers a specific automation workflow.

**Request Body:**
```json
{
  "workflow": "content_quality_audit",
  "priority": "high",
  "parameters": {
    "scope": "all_pages",
    "fixIssues": true
  }
}
```

### SEO API

#### GET `/api/seo/analysis`
Performs SEO analysis on specified pages.

**Query Parameters:**
- `url` - Page URL to analyze
- `depth` - Analysis depth (basic, standard, comprehensive)

**Response:**
```json
{
  "score": 85,
  "issues": [
    {
      "type": "meta_description",
      "severity": "medium",
      "description": "Missing meta description",
      "fix": "Add meta description tag"
    }
  ],
  "recommendations": [
    "Optimize page title length",
    "Add structured data markup"
  ]
}
```

#### POST `/api/seo/optimize`
Automatically optimizes SEO elements.

**Request Body:**
```json
{
  "url": "/blog/ai-automation-trends-2025",
  "optimizations": ["meta_tags", "structured_data", "internal_links"]
}
```

## Automation Endpoints

### Content Generation

#### `/api/automation/content/factory`
AI-powered content generation system.

**Features:**
- Blog post generation
- Case study creation
- Resource page development
- SEO optimization

#### `/api/automation/content/quality`
Content quality assessment and improvement.

**Capabilities:**
- Grammar and style checking
- SEO optimization
- Readability scoring
- Content gap analysis

### Performance Monitoring

#### `/api/automation/performance/lighthouse`
Lighthouse performance monitoring.

**Metrics:**
- Performance score
- Accessibility score
- Best practices score
- SEO score

#### `/api/automation/performance/budgets`
Performance budget monitoring.

**Thresholds:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### Security

#### `/api/automation/security/scan`
Automated security scanning.

**Scans:**
- Dependency vulnerabilities
- Code security issues
- Configuration security
- Access control review

## Integration APIs

### GitHub Actions Integration

#### `/api/integration/github/status`
GitHub Actions workflow status.

#### `/api/integration/github/trigger`
Trigger GitHub Actions workflows.

### Netlify Integration

#### `/api/integration/netlify/deploy`
Trigger Netlify deployments.

#### `/api/integration/netlify/functions`
Manage Netlify functions.

### PM2 Integration

#### `/api/integration/pm2/status`
PM2 process status.

#### `/api/integration/pm2/restart`
Restart PM2 processes.

## Webhook Endpoints

### Content Updates

#### POST `/api/webhooks/content/updated`
Triggered when content is updated.

**Payload:**
```json
{
  "event": "content_updated",
  "page": "/blog/new-post",
  "timestamp": "2025-01-17T10:00:00Z",
  "changes": ["title", "content", "meta_tags"]
}
```

### Automation Events

#### POST `/api/webhooks/automation/completed`
Triggered when automation completes.

**Payload:**
```json
{
  "event": "automation_completed",
  "workflow": "content_generation",
  "status": "success",
  "duration": "2m 30s",
  "results": {
    "pagesCreated": 5,
    "issuesFixed": 12
  }
}
```

## Error Handling

### Standard Error Response
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": {
      "field": "url",
      "issue": "URL format is invalid"
    }
  },
  "timestamp": "2025-01-17T10:00:00Z",
  "requestId": "req_12345"
}
```

### Error Codes
- `VALIDATION_ERROR` - Invalid request parameters
- `AUTHENTICATION_ERROR` - Authentication required
- `AUTHORIZATION_ERROR` - Insufficient permissions
- `RESOURCE_NOT_FOUND` - Requested resource not found
- `INTERNAL_ERROR` - Server-side error
- `RATE_LIMIT_EXCEEDED` - Too many requests

## Rate Limiting

- **Standard endpoints**: 100 requests per minute
- **Automation endpoints**: 10 requests per minute
- **Webhook endpoints**: 1000 requests per minute

## Authentication

### API Keys
Include your API key in the `Authorization` header:
```
Authorization: Bearer YOUR_API_KEY
```

### OAuth 2.0
For OAuth integration, use the standard OAuth 2.0 flow with these endpoints:
- `/oauth/authorize` - Authorization endpoint
- `/oauth/token` - Token endpoint
- `/oauth/revoke` - Token revocation

## SDKs and Libraries

### JavaScript/Node.js
```bash
npm install @zion-app/sdk
```

### Python
```bash
pip install zion-app-sdk
```

### Go
```bash
go get github.com/zion-app/go-sdk
```

## Examples

### Content Generation
```javascript
const response = await fetch('/api/automation/content/factory', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    type: 'blog_post',
    topic: 'Future of AI Automation',
    keywords: ['AI', 'automation', 'future'],
    length: 'long'
  })
});

const result = await response.json();
```

### Performance Monitoring
```javascript
const status = await fetch('/api/automation/performance/lighthouse?url=/blog/post');
const metrics = await status.json();
console.log(`Performance Score: ${metrics.performance}`);
```

## Support

For API support and questions:
- Check the [Developer Guide](./DEVELOPER_GUIDE.md)
- Review [GitHub Issues](https://github.com/Zion-Holdings/zion.app/issues)
- Contact the development team
- Join community discussions
