# Zion DAO Smart Contracts

- Route: `/dao/codebase`
- Implements Zion governance model using Solidity, with ERC20-based voting, 5-day voting periods, 20% quorum, timelock, and treasury modules.

## Quickstart

- Install: `npm install`
- Compile: `npm run compile`
- Test: `npm test`
- Deploy (local): `npm run deploy:local`
- Deploy (sepolia): `npm run deploy:sepolia`

Set environment in `.env` for networks and Etherscan.

## Modules

- `contracts/ZionDAO.sol` — proposal logic, lifecycle using OZ Governor
- `contracts/QuorumEngine.sol` — basis points quorum using token snapshots
- `contracts/DelegateRegistry.sol` — DAO-level delegation (optional)
- `contracts/ConstitutionStorage.sol` — IPFS CIDs with versioning
- `contracts/VoteToken.sol` — ERC20Votes token with permit
- `contracts/Treasure/TimelockGuardian.sol` — cancel queued ops via guardian
- `contracts/Treasure/Disbursements.sol` — grants/bounties payouts
- `contracts/Treasure/EpochManager.sol` — epoch-based payouts

ABIs exported to `abi/` post-deploy or via `npm run abi:export`.