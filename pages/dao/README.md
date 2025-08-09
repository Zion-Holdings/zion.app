### Zion DAO (MVP)

- Contracts: ERC20Votes token, Governor, Timelock (Safe admin)
- Frontend: proposal creation, voting, past decisions

Deploy

1. Copy `.env.example` to `.env` and fill values (Sepolia recommended). Include `SAFE_ADMIN_ADDRESS` (your Safe address).
2. Install deps and compile:
   - npm i
   - npm run dao:compile
3. Deploy:
   - npm run dao:deploy:sepolia
4. Copy generated `data/dao-addresses.json` to be available in the frontend. ABIs from Hardhat can be copied into `data/abi/`.

Voting notes

- Token holders must self-delegate: call `token.delegate(<your_address>)` once.
- Governor quorum is `%` of total supply. Adjust via env.
- Timelock admin is the Safe; proposer/executor roles are set so Governor can schedule/execute.