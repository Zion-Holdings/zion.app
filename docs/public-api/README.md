# Zion Public API Documentation

This directory contains the publicly available API specification and usage examples for integrating with Zion Tech Marketplace.

## OpenAPI Specification

The full schema is defined in [openapi.yaml](./openapi.yaml). You can import this file into tools like Postman or Insomnia to explore the endpoints.

For a hosted, interactive version of these docs, visit [/docs/swagger](/docs/swagger) in the application.

## Authentication

1. Obtain an access token using your normal login process.
2. Generate an API key by sending a `POST` request to `/api/generate/` with the token in the `Authorization` header.
3. Use the returned key in the `X-API-KEY` header when calling protected endpoints like `/api/ping/`.

```
bash
curl -X POST https://api.ziontechgroup.com/v1/api/generate/ \
  -H "Authorization: Bearer YOUR_LOGIN_TOKEN" \
  -d '{"name":"My Integration"}'
```

The response will include a `key` value which should be kept secret.

## Code Samples

### Node.js (fetch)

```javascript
const res = await fetch('https://api.ziontechgroup.com/v1/api/ping/', {
  headers: { 'X-API-KEY': 'abcd.1234...' }
});
const data = await res.json();
console.log(data);
```

### Python (requests)

```python
import requests
resp = requests.get(
    'https://api.ziontechgroup.com/v1/api/ping/',
    headers={'X-API-KEY': 'abcd.1234...'}
)
print(resp.json())
```

For additional details on authentication flows, see [API Guide](../API_Guide.md).
