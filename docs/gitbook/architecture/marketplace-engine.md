# Marketplace Engine

The marketplace formalizes work via jobs, quotes, milestones, and escrow.

## Data Model
- Job: title, description, tags, budget, requester
- Quote: price, milestones, terms, provider
- Milestone: deliverables, acceptance criteria, payout
- Escrow: asset, amount, release conditions, arbitrator
- Dispute: claimant, evidence, resolver, ruling

## Lifecycle
1. Post Job → RFP/RFQ
2. Receive Quotes → negotiate
3. Accept Quote → fund escrow
4. Deliver Milestones → accept/reject
5. Release Payments → handle disputes if any

## Integrations
- Onchain escrow contracts (EVM) with modular adapters
- Offchain signatures (EIP-712) for quotes and approvals
- Oracles/indexers for state sync