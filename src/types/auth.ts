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

export interface UserDetails extends UserProfile {
  role: string;
}

export interface AuthContextType {
  user: UserDetails | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>;
  loginWithGoogle: () => void;
  loginWithFacebook: () => void;
  loginWithTwitter: () => void;
  loginWithWeb3: () => Promise<void>;
  avatarUrl: string | null;
  setUser: React.Dispatch<React.SetStateAction<UserDetails | null>>;
}
