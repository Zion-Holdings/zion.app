# Zion OS Stack API Overview

This guide provides a high level overview of the Zion OS API platform. The documentation is organized by modules so other platforms can easily integrate marketplace, token and talent capabilities.

## Sectioned Documentation

The API is grouped into logical sections to make navigation easier:

- **Auth** – Login via JWT, OAuth or Wallet signatures
- **Talent Profiles** – Manage user portfolios and skill tags
- **Job Listings** – Post opportunities and search open roles
- **Quotes & Milestones** – Track project budgets and deliverables
- **Messages** – Read and send chat or email threads
- **ZION$ Wallet API** – Programmatic wallet deposits, withdrawals and transfers
- **DAO & Proposals** – Create governance proposals and fetch voting summaries
- **Voting & Treasury Logs** – Access on-chain vote data and financial transactions
- **Nation Module** – Public API for verifying citizenship within a Zion Nation

## Documentation Format

- A sidebar navigation lists each endpoint in the section
- A live **Try It** mode is available when authenticated
- Examples for cURL, JavaScript and Python are included for every call
- Rate limits and potential error codes are documented per endpoint

## Publish Modes

1. **Public** – Openly accessible endpoints for the Zion OS ecosystem
2. **Partner‑Only** – Restricted APIs for banks, governments or trusted platforms
3. **Internal** – Endpoints used by Lovable and Operator apps

## Admin Features

- Upload versioned changelogs for documentation updates
- Auto-generate Postman collections, Swagger specs or GraphQL schemas
- Version tabs allow switching between `v1`, `v2` and future releases

---

# Talent Search Endpoint

`GET /api/talent/search`

Searches for talent profiles based on keywords, skills or location.

## Example Request

```bash
curl -G 'https://api.zion.fyi/api/talent/search' \
  --data-urlencode 'q=react developer' \
  --data-urlencode 'location=New York'
```

## Sample Response

```json
{
  "results": [
    {
      "id": "tal_123",
      "name": "Jane Developer",
      "skills": ["React", "TypeScript"],
      "location": "New York",
      "rating": 4.8
    }
  ],
  "count": 1
}
```

### Response Schema

- `results` – Array of talent objects
  - `id` *(string)* – unique talent identifier
  - `name` *(string)* – display name
  - `skills` *(array[string])* – primary skill tags
  - `location` *(string)* – base city or region
  - `rating` *(number)* – average client rating
- `count` *(number)* – total results matching the query

### Common Use Case

Use this endpoint to power search bars or recommendation widgets when looking for available professionals.

### Error Codes

- `400 Bad Request` – invalid query parameters
- `401 Unauthorized` – missing or invalid API key
- `429 Too Many Requests` – rate limit exceeded
- `500 Internal Server Error` – unexpected failure on the server
