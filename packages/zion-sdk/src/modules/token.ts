import { HttpClient } from '../http';
import { PaymentIntent, WalletBalance } from '../types';

export class TokenModule {
  constructor(private http: HttpClient) {}

  getBalances(address?: string) {
    const query = address ? { address } : undefined;
    return this.http.request<WalletBalance[]>('GET', '/token/balances', { query });
  }

  transfer(input: { to: string; token: string; amount: string }) {
    return this.http.request<{ txId: string }>('POST', '/token/transfer', { body: input });
  }

  createPaymentIntent(input: { amount: number; currency: string; metadata?: Record<string, string> }) {
    return this.http.request<PaymentIntent>('POST', '/payments/intents', { body: input });
  }

  getPaymentIntent(id: string) {
    return this.http.request<PaymentIntent>('GET', `/payments/intents/${id}`);
  }
}