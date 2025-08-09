# Zion API Notes

- Authentication: `Authorization: Bearer <API_KEY>`
- Rate limits: 60 requests/minute per key (default)
- Error JSON format:

```json
{"error": {"code": "string", "message": "string"}}
```

Common codes:
- `auth_missing`, `auth_invalid`, `not_approved`, `insufficient_scope`
- `rate_limited`
- `invalid_request`
- `method_not_allowed`
- `not_found`