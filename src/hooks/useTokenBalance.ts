import { useState, useEffect } from 'react;
import { ethers } from 'ethers'
import { logErrorToProduction } from '@/utils/productionLogger;
'
const ERC20_ABI = [;
  'function balanceOf(): unknown {): unknown {): unknown {): unknown {): unknown {address owner) view returns (uint256)',;
  'function decimals(): unknown {): unknown {): unknown {): unknown {): unknown {) view returns (uint8)',;
];
'
export function useTokenBalance(): unknown {): unknown {): unknown {): unknown {): unknown {;
  address: "string | null"
  tokenAddress: "string'
  provider: ethers.Provider | null,;';;