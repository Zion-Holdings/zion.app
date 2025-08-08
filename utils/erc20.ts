import { providers, Contract, BigNumber } from 'ethers';

export const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function name() view returns (string)',
];

export async function getErc20Balance(
  provider: providers.JsonRpcProvider,
  tokenAddress: string,
  userAddress: string
): Promise<BigNumber> {
  const token = new Contract(tokenAddress, ERC20_ABI, provider);
  return token.balanceOf(userAddress);
}

export function getErc20Contract(provider: providers.JsonRpcProvider, tokenAddress: string) {
  return new Contract(tokenAddress, ERC20_ABI, provider);
}