# Zion Federated Sync Protocol

This document outlines the experimental sync layer for Zion instances. It allows proposals, token flows and talent metrics to be shared across deployments such as **Zion LATAM**, **Zion DevOps** and **Zion Health**.

## 1. Features

- **Proposal metadata** – IDs, titles and vote counts
- **Token escrow transfers** between subnets
- **Talent mobility** for cross‑nation jobs
- **DAO cross‑endorsements** and resolutions
- **Global leaderboard** with grant winners and top contributors

## 2. Sync Mechanism

Updates are exchanged every 60 seconds using a simple pub/sub model. Each payload is hashed and signed so peers can verify integrity.

```txt
POST /sync/hub
{
  proposals: [...],
  tokenTransfers: [...],
  talentMoves: [...],
  resolutions: [...],
  leaderboard: [...],
  merkleRoot: "<hash>"
}
```

Instances may connect via **libp2p** or another CRDT implementation. Merkle proofs allow conflict resolution when two peers report different vote sets.

## 3. Permissions

Each deployment can opt in or pause syncing. The `scope` parameter controls whether all data, only DAO votes or only marketplace metrics are exchanged.

## 4. Governance Usage

The sync layer enables a *Zion Global Vote* spanning multiple deployments and keeps treasury metrics aligned. It also coordinates multiverse milestones like **Manifesto Day**.

## 5. API Routes

- `GET /sync/status` – return current federated state
- `POST /sync/hub` – submit updates from another instance

This spec is a foundation for a universal multiverse hub.
