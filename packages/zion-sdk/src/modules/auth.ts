import { HttpClient } from '../http';

export interface EmailLoginInput {
  email: string;
  password: string;
}

export interface WalletLoginInput {
  address: string;
  signature: string;
  message: string;
}

export interface SsoLoginInput {
  provider: 'google' | 'github' | 'discord' | string;
  code: string;
  redirectUri: string;
}

export interface AuthResponse {
  token: string;
  user: { id: string; email?: string; address?: string };
}

export class AuthModule {
  constructor(private http: HttpClient) {}

  async loginWithEmail(input: EmailLoginInput): Promise<AuthResponse> {
    const res = await this.http.request<AuthResponse>('POST', '/auth/login/email', { body: input });
    this.http.setAuthToken(res.token);
    return res;
  }

  async loginWithWallet(input: WalletLoginInput): Promise<AuthResponse> {
    const res = await this.http.request<AuthResponse>('POST', '/auth/login/wallet', { body: input });
    this.http.setAuthToken(res.token);
    return res;
  }

  async loginWithSSO(input: SsoLoginInput): Promise<AuthResponse> {
    const res = await this.http.request<AuthResponse>('POST', '/auth/login/sso', { body: input });
    this.http.setAuthToken(res.token);
    return res;
  }

  async refreshToken(): Promise<AuthResponse> {
    const res = await this.http.request<AuthResponse>('POST', '/auth/refresh');
    this.http.setAuthToken(res.token);
    return res;
  }

  async logout(): Promise<void> {
    await this.http.request<void>('POST', '/auth/logout');
    this.http.setAuthToken(undefined);
  }
}