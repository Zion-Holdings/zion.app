# Auth API

Base URL: `/api/v1`

## POST /auth/siwe
Verify a Sign-In with Ethereum message.

Request
```json
{
  "message": "...",
  "signature": "0x..."
}
```

Response
```json
{
  "token": "jwt-or-session",
  "user": { "address": "0x...", "id": "u_123" }
}
```

## GET /me
Return current user.

Headers: `Authorization: Bearer <token>`

Response
```json
{
  "id": "u_123",
  "address": "0x...",
  "roles": ["talent", "org-admin"]
}
```