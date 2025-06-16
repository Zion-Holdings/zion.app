export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  userType?: 'talent' | 'client' | 'admin' | null;
  profileComplete: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthContextType {
  authState: AuthState;
  setToken: (token: string | null) => void;
  clearAuth: () => void;
}
