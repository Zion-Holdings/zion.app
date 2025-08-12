# API Guide

This guide covers how to authenticate and interact with the Zion Tech Nexus API.

## Authentication

Generate an API key by sending a POST request to `/api/generate/` while authenticated with your session or JWT token:

```bash
curl -X POST http://127.0.0.1:8000/api/generate/ \
  -H "Authorization: Bearer <your_login_token>" \
  -H "Content-Type: application/json" \
  -d '{"name": "Example Integration Key"}'
```

The response contains your new key:

```json
{
  "key": "abcd.1234...",
  "prefix": "abcd",
  "name": "Example Integration Key"
}
```

Use this key for authenticated requests via the `X-API-KEY` header or `Authorization: Api-Key <prefix.secret>`.

Example ping request:

```bash
curl http://127.0.0.1:8000/api/ping/ \
  -H "X-API-KEY: abcd.1234..."
```

```json
{"detail": "success"}
```

### Node Example

```js
// Using fetch in Node.js
const res = await fetch('http://127.0.0.1:8000/api/ping/', {
  headers: { 'X-API-KEY': 'abcd.1234...' }
});
const data = await res.json();
console.log(data);
```

## Common Use Cases

- Automate interactions from external systems by generating API keys programmatically.
- Verify connectivity with the `/api/ping/` endpoint.
- Revoke compromised or outdated keys via `/api/revoke/`.

## Troubleshooting

- **401 Unauthorized** – The API key is missing, malformed or revoked.
- **403 Forbidden** – Your authenticated user lacks permission for the requested action.
- **429 Too Many Requests** – Daily rate limits enforced by `RedisDailyThrottle` have been exceeded.

For a complete list of endpoints, open the Swagger UI at `http://127.0.0.1:8000/swagger/`.
