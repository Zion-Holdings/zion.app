# ZK Vote Module

This directory contains a prototype implementation of an anonymous voting system using zero-knowledge proofs.

The smart contracts are written for the Hardhat environment and reference the existing `VoteToken` used by `ZionDAO`.

Key contracts:

- **ZkBallot.sol** – manages proposals and anonymous voting with Semaphore proofs.
- **SemaphoreVerifier.sol** – stub verifier for development. Replace with the real Semaphore verifier in production.
- **ZkTreasury.sol** – simple treasury releasing funds when proposals pass.

Compile and test with Hardhat:

```bash
npm install
npx hardhat test
```

The `vote` function verifies a proof and counts token-weighted votes without revealing voter identities.
