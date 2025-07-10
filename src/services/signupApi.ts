import axios, { AxiosError } from 'axios';

import {logErrorToProduction} from "@/utils/productionLogger";

export interface SignupPayload {
  email: string;
  password: string;
  name?: string;
}

// TODO: Define the actual session structure if possible
export interface SignupSession {
  [key: string]: unknown;
}

export interface SignupApiResponse {
  message: string;
  user?: {
    id: string;
    email: string;
    display_name?: string;
  };
  session?: SignupSession;
  emailVerificationRequired?: boolean;
}

export async function signupUser(email: string, password: string, name: string, session?: SignupSession) {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  try {
    const res = await axios.post('/api/auth/register', { email, password, name });
    if (res.status === 201) {
      return res.data;
    }
    // Handle unexpected success status codes
    throw new Error(`Unexpected status ${res.status}`);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    logErrorToProduction('Signup error:', { data: err });
    if (axios.isAxiosError(err)) {
      if (err.response) {
        const status = err.response.status;
        const errorMessage = (err.response.data as any)?.error || (err.response.data as any)?.message || 'Signup failed';
        if (status === 409) {
          throw new Error('Email already exists');
        } else if (status === 400) {
          throw new Error(errorMessage);
        } else {
          throw new Error(errorMessage);
        }
      } else if (err.request) {
        throw new Error('Network error – please retry.');
      }
    }
    throw new Error(message || 'Signup failed');
  }
}