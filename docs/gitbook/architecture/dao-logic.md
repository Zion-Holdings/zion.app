# DAO Logic

Zion governance controls protocol parameters, treasury, deployments, and upgrades.

## Proposal Types
- Parameter Change: fees, thresholds, allowlists
- Treasury Action: grants, swaps, buybacks
- Module Deployment: enable/disable features
- Upgrade: contracts, SDK versions, indexers

## State Machine
- Draft → Review → Active Voting → Queued → Executed → Finalized
- Canceled/Defeated/Expired as failure states

## Execution
- Timelocked executor with queued transactions
- Batched calls with guarded reentrancy
- On-chain simulation pre-checks required (where supported)

## Cross-Chain
- Governance root on home chain; spokes via message bridges
- Parameter mirroring with versioning and conflict resolution