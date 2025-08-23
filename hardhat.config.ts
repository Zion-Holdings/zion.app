import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.DEPLOYER_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      viaIR: true
    }
  },
  networks: {
    hardhat: {},
    base: {
      url: process.env.RPC_BASE || "https://mainnet.base.org",
      accounts: [PRIVATE_KEY]
    },
    optimism: {
      url: process.env.RPC_OPTIMISM || "https://mainnet.optimism.io",
      accounts: [PRIVATE_KEY]
    },
    arbitrumOne: {
      url: process.env.RPC_ARBITRUM || "https://arb1.arbitrum.io/rpc",
      accounts: [PRIVATE_KEY]
    },
    polygon: {
      url: process.env.RPC_POLYGON || "https://polygon-rpc.com",
      accounts: [PRIVATE_KEY]
    },
    zksync: {
      // zkSync Era mainnet (EVM)
      url: process.env.RPC_ZKSYNC || "https://mainnet.era.zksync.io",
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      optimisticEthereum: process.env.OPTIMISM_ETHERSCAN_API_KEY || "",
      arbitrumOne: process.env.ARBISCAN_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY || ""
    }
  }
};

export default config;