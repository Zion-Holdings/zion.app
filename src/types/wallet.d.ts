declare module "@/api/wallet" {
  interface WalletResponse {
    points: number;
    history: import("@/types/tokens").TokenTransaction[];
  }
  export function getWallet(): Promise<WalletResponse>;
}
