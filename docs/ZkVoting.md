# Zero-Knowledge Voting

The `dao/zkvote` directory contains a proof-of-concept implementation of a privacy-preserving voting system.

## Key Concepts

- **Semaphore Proofs** are used to verify membership and prevent double voting without revealing voter identities.
- Votes are submitted off-chain and proven on-chain using the `ZkBallot` contract.
- `VoteToken` stake determines vote weight.

Access the demo UI at `/dao/zkvote` or `/governance/privacy`.
