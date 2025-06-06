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
    const res = await axios.post('/api/auth/register', payload);
    if (res.status === 201) {
      return res.data;
    }
    if (res.status === 409) {
      throw new Error('Email already exists');
    }
    throw new Error(res.data?.message || `Unexpected status ${res.status}`);
  } catch (err: any) {
    console.error('Signup error:', err.message);
    throw new Error(err.message);
  }
}