export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  userType?: 'talent' | 'client' | 'admin' | null;
  created_at: string;
  updated_at: string;
}
