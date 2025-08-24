import { ethers } from "ethers";
import addressesJson from "../data/dao-addresses.json";
import governorAbi from "../data/abi/ZionGovernor.json";
import tokenAbi from "../data/abi/ZionToken.json";

export type DaoAddresses = {
  network: string;
  chainId: number;
  token: string;
  governor: string;
  timelock: string;
  safeAdmin: string;
};

export const DAO_ADDRESSES = addressesJson as DaoAddresses;

export function getGovernor(provider: ethers.providers.Provider | ethers.Signer) {
  return new ethers.Contract(DAO_ADDRESSES.governor, governorAbi, provider);
}

export function getToken(provider: ethers.providers.Provider | ethers.Signer) {
  return new ethers.Contract(DAO_ADDRESSES.token, tokenAbi, provider);
}