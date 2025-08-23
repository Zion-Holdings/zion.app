import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https://rpc-amoy.polygon.technology';
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https://rpc.ankr.com/polygon_mumbai';
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || '';

const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  networks: {
    polygon_amoy: {
      url: AMOY_RPC_URL,
      chainId: 80002,
      accounts,
    },
    polygon_mumbai: {
      url: MUMBAI_RPC_URL,
      chainId: 80001,
      accounts,
    },
  },
  etherscan: {
    apiKey: {
      polygonAmoy: POLYGONSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
    } as any,
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
};

export default config;