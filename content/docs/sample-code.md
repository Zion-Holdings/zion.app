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
