# API 404 Guard Fix (Issue #20)

## 🔍 Problem
API requests to undefined routes returned the full HTML 404 page. For example, requesting `/api/status` served the client 404 page instead of a JSON error response, breaking the API error contract.

## 🛠️ Resolution
Added a catch-all handler at `pages/api/[...missing].ts` that returns a JSON 404 error envelope. Unmatched API routes now respond with:

```json
{ "error": "API route not found" }
```

## ✅ Outcome
- Consistent JSON error responses across all API endpoints
- Improved developer experience when debugging API calls
