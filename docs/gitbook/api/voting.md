# Voting API

## GET /proposals
List proposals.

```json
{ "items": [ { "id": "p_1", "state": "active" } ] }
```

## POST /proposals
Create proposal (auth required).

```json
{
  "title": "Adjust protocol fee",
  "actions": [{ "target": "FeeModule", "callData": "0x..." }],
  "metadata": { "rationale": "..." }
}
```

## POST /votes
Cast vote.

```json
{ "proposalId": "p_1", "choice": "yes", "weight": "100000" }
```