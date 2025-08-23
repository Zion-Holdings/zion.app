# Offworld Lab Test Environment

This experimental lab simulates a delay-tolerant DAO running in remote or space-based locations.

- Proposals and votes are stored locally until connectivity is restored.
- IPFS and OrbitDB handle data replication when a satellite uplink becomes available.
- Timeouts ensure proposals are finalized even with high latency.

Run `node test-env.js` after installing dependencies to experiment locally.
