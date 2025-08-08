# Zion OS Docs

Welcome to the open-source documentation for Zion OS — a global, decentralized talent protocol and AI-native marketplace operating across multiverse deployments.

- Route: `/docs/gitbook` (alias: `/zion/gitbook`)
- License: Apache-2.0 (docs content) unless otherwise specified

## What is Zion?
Zion is an AI-augmented operating system for talent networks. It pairs an onchain marketplace with governance, a programmable token economy (ZION$), and an AI core (ZionGPT) to coordinate jobs, proposals, payments, and reputation across multiple chains and deployments.

## Quick Links
- Introduction → ./introduction/what-is-zion-os.md
- Architecture → ./architecture/ziongpt-core.md
- Governance → ./governance/proposal-lifecycle.md
- API → ./api/auth.md
- Developer Tools → ./developer-tools/sdk-and-cli.md

## Tech Stack (high-level)
- Runtime: Node.js, TypeScript, Bun/PNPM
- Services: GraphQL + REST gateway, gRPC internal RPC
- Datastore: PostgreSQL, Redis, Elastic for search
- Contracts: Solidity (EVM), optional WASM chains via adapters
- Storage: IPFS/Arweave for large assets; S3-compatible for caching
- Indexing: The Graph/Substreams or custom indexers
- Infra: Docker, Terraform, Github Actions

## Core Primitives
- Identity: Wallets + ENS/Sign-In with Ethereum, optional DID
- Markets: Jobs, quotes, milestones, escrow, disputes
- Governance: Proposals, voting, delegates, execution
- Token: ZION$ utility/governance token with staking and fee sinks
- AI Core: ZionGPT for routing, matching, and workflow orchestration

## Contributing
See Developer Tools → Contribution Guidelines for setup, linting, and PR rules. Issues and improvements welcome.