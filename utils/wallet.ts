export type WalletProvider = any;

export function getEthereumProvider(): WalletProvider | null {
  if (typeof window === 'undefined') return null;
  // @ts-ignore
  const { ethereum } = window;
  return ethereum ?? null;
}

export async function connectMetaMask(): Promise<string[] | null> {
  const provider = getEthereumProvider();
  if (!provider) return null;
  try {
    const accounts: string[] = await provider.request({ method: 'eth_requestAccounts' });
    return accounts;
  } catch (e) {
    return null;
  }
}

export async function getAccounts(): Promise<string[] | null> {
  const provider = getEthereumProvider();
  if (!provider) return null;
  try {
    const accounts: string[] = await provider.request({ method: 'eth_accounts' });
    return accounts;
  } catch (e) {
    return null;
  }
}