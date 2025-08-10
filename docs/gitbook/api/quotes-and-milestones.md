# Quotes / Milestones API

## POST /quotes
Submit a quote to a job.

```json
{
  "jobId": "j_123",
  "providerId": "t_456",
  "price": { "currency": "USDC", "amount": "4500" },
  "milestones": [
    { "title": "Design", "payout": "1500" },
    { "title": "Implementation", "payout": "3000" }
  ],
  "terms": "EIP-712 signature attached"
}
```

## POST /milestones/{id}/accept
Accept a milestone delivery.

```json
{ "accepted": true, "notes": "Looks great" }
```