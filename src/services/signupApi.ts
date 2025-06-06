import axios from 'axios';

export interface SignupPayload {
  email: string;
  password: string;
}

export interface SignupResponse {
  token?: string;
  [key: string]: any;
}

export async function signup(payload: SignupPayload): Promise<SignupResponse> {
  if (!payload?.email || !payload?.password) {
    throw new Error('Email and password are required');
  }

  try {
    const res = await axios.post('/api/auth/signup', payload);
    if (res.status !== 201) {
      throw new Error(res.data?.message || `Unexpected status ${res.status}`);
    }
    return res.data;
  } catch (err: any) {
    console.error('Signup error:', err.message);
    throw new Error(err.message);
  }
}

