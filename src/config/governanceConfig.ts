// src/config/governanceConfig.ts

// Governance and token configuration can be customized via environment variables
export const ZION_TOKEN_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_ZION_TOKEN_CONTRACT_ADDRESS || '0xYOUR_ZION_TOKEN_CONTRACT_ADDRESS';

export const ZION_TOKEN_NETWORK_ID = Number(process.env.NEXT_PUBLIC_ZION_TOKEN_NETWORK_ID || 1);

export const SNAPSHOT_SPACE_ID = process.env.NEXT_PUBLIC_SNAPSHOT_SPACE_ID || 'yourproject.eth';

export const SNAPSHOT_HUB_URL = process.env.NEXT_PUBLIC_SNAPSHOT_HUB_URL || 'https://hub.snapshot.org';
