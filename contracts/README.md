# ZION Token (ERC-20)

Utility token for Zion Marketplace. Fixed supply of 1,000,000,000 ZION.

## Tech
- OpenZeppelin ERC-20 (+Burnable, Ownable)
- Hardhat + TypeScript
- Polygon Amoy (preferred) or Mumbai testnet

## Setup
1. Go to contracts folder:
   ```bash
   cd contracts
   ```
2. Install dependencies:
   ```bash
   npm install --no-audit --no-fund
   ```
3. Copy env and fill values:
   ```bash
   cp .env.example .env
   # edit .env: PRIVATE_KEY, AMOY_RPC_URL/MUMBAI_RPC_URL, POLYGONSCAN_API_KEY
   ```

## Compile
```bash
npm run compile
```

## Deploy
- Amoy (recommended):
```bash
npm run deploy:amoy
```
- Mumbai (legacy):
```bash
npm run deploy:mumbai
```

Outputs contract address and total supply. The deployer receives the full supply.

## Verify (optional)
```bash
# After deploy, set CONTRACT_ADDRESS and CONTRACT_OWNER in .env
npm run verify:amoy
# or
npm run verify:mumbai
```

## Next steps
- Integrate with the Zion app via WalletConnect/Ethers to show balances and distribute rewards.
- Optionally add a reward distributor contract or use off-chain ledger with custodial wallet for micro-rewards.