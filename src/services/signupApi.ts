import axios from 'axios';

import {logErrorToProduction} from "@/utils/productionLogger";

export interface SignupPayload {
  email: string;
  password: string;
  name?: string;
}

export interface SignupApiResponse {
  message: string;
  user?: {
    id: string;
    email: string;
    display_name?: string;
  };
  session?: unknown;
  emailVerificationRequired?: boolean;
}

interface SignupSession {
  // Define the actual structure if possible, otherwise use unknown
  [key: string]: unknown;
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
    
    if (err instanceof Error && err.response) {
      // Server responded with error status
      const status = err.response.status;
      // Try both 'error' and 'message' fields for compatibility
      const errorMessage = err.response.data?.error || err.response.data?.message || 'Signup failed';
      
      if (status === 409) {
        throw new Error('Email already exists');
      } else if (status === 400) {
        throw new Error(errorMessage);
      } else {
        throw new Error(errorMessage);
      }
    } else if (err instanceof Error && err.request) {
      // Network error
      throw new Error('Network error – please retry.');
    } else {
      // Other error
      throw new Error(message || 'Signup failed');
    }
  }
}