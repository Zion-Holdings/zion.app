# Jobs / Talent API

## POST /jobs
Create a job.

```json
{
  "title": "Design landing page",
  "description": "...",
  "budget": { "currency": "USDC", "amount": "5000" },
  "tags": ["design", "web"]
}
```

## GET /jobs?query=design&limit=20
Search jobs.

Response
```json
{
  "items": [ { "id": "j_123", "title": "Design landing page" } ],
  "next": "cursor"
}
```

## GET /talent/{id}
Return a talent profile.

```json
{
  "id": "t_456",
  "skills": ["react", "figma"],
  "reputation": { "score": 782 }
}
```