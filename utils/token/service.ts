import { randomUUID } from "crypto";
import { tokenStore } from "./storage";
import { TokenTransaction, WalletSummary } from "./types";

export function getWalletSummary(userId: string): WalletSummary {
  const wallet = tokenStore.getWallet(userId);
  const transactions = tokenStore.getTransactions(userId);
  const config = tokenStore.getConfig();
  return { wallet, transactions, config };
}

export function earnTokens(
  userId: string,
  amount: number,
  reason: string,
  metadata?: Record<string, any>
): TokenTransaction {
  if (amount <= 0) throw new Error("Amount must be positive");
  const wallet = tokenStore.getWallet(userId);
  const newBalance = wallet.balance + amount;
  tokenStore.setWalletBalance(userId, newBalance);
  const tx: TokenTransaction = {
    id: randomUUID(),
    userId,
    type: "earn",
    amount,
    reason,
    metadata,
    createdAt: new Date().toISOString(),
  };
  tokenStore.addTransaction(tx);
  return tx;
}

export function burnTokens(
  userId: string,
  amount: number,
  reason: string,
  metadata?: Record<string, any>
): TokenTransaction {
  if (amount <= 0) throw new Error("Amount must be positive");
  const wallet = tokenStore.getWallet(userId);
  if (wallet.balance < amount) throw new Error("Insufficient balance");
  const newBalance = wallet.balance - amount;
  tokenStore.setWalletBalance(userId, newBalance);
  const tx: TokenTransaction = {
    id: randomUUID(),
    userId,
    type: "burn",
    amount,
    reason,
    metadata,
    createdAt: new Date().toISOString(),
  };
  tokenStore.addTransaction(tx);
  return tx;
}

export function issueTokens(
  userId: string,
  amount: number,
  reason: string
): TokenTransaction {
  const tx = earnTokens(userId, amount, reason);
  tx.type = "issue";
  return tx;
}

export function revokeTokens(
  userId: string,
  amount: number,
  reason: string
): TokenTransaction {
  const tx = burnTokens(userId, amount, reason);
  tx.type = "revoke";
  return tx;
}

export function handleAction(userId: string, action: string, metadata?: Record<string, any>): TokenTransaction {
  const { earnRules } = tokenStore.getConfig();
  const amount = earnRules[action];
  if (!amount) throw new Error("Unknown action");
  return earnTokens(userId, amount, action, metadata);
}

export function burnForFeature(userId: string, feature: string, metadata?: Record<string, any>): TokenTransaction {
  const { burnRules } = tokenStore.getConfig();
  const amount = burnRules[feature];
  if (!amount) throw new Error("Unknown feature");
  return burnTokens(userId, amount, feature, metadata);
}

export function redeemToCredits(userId: string, amount: number): { tx: TokenTransaction; usd: number } {
  const { usdPerToken } = tokenStore.getConfig();
  const tx = burnTokens(userId, amount, "redeem_credits");
  tx.type = "redeem";
  const usd = parseFloat((amount * usdPerToken).toFixed(2));
  return { tx, usd };
}

export function getAllTransactions() {
  return tokenStore.getTransactions();
}

export function getConfig() {
  return tokenStore.getConfig();
}

export function setConfig(partial: Partial<ReturnType<typeof getConfig>>): void {
  const current = tokenStore.getConfig();
  tokenStore.setConfig({ ...current, ...partial });
}