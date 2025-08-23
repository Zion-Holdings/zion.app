# Sample Code

This page provides example requests and responses for common API operations.

## Quick Examples

```bash
# Fetch all jobs
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.ziontechgroup.com/v1/api/jobs
```

```javascript
// Using fetch in Node.js
const res = await fetch('https://api.ziontechgroup.com/v1/api/jobs', {
  headers: { Authorization: `Bearer ${API_KEY}` }
});
const data = await res.json();
```

For additional samples, visit our [GitHub repository](https://github.com/zion-marketplace/examples).

## Search AI Talent by Skill

```bash
# Find Python engineers
curl -X GET "https://api.ziontechgroup.com/v1/api/talent/search?skill=python" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```json
{
  "results": [
    {
      "id": "tal_123",
      "name": "Jane Doe",
      "skills": ["Python", "TensorFlow"],
      "rate": 120,
      "available": true
    }
  ],
  "count": 1
}
```
