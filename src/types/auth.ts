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
  role: string;
  displayName: string;
  points: number;
  avatarUrl?: string;
  bio?: string;
  headline?: string;
  emailVerified?: boolean;
  interests?: string[];
  preferredCategories?: string[];
}

export interface UserDetails extends UserProfile {
  headline?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SignupParams {
  email: string;
  password: string;
  display_name: string;
}

export interface AuthContextType {
  user: UserDetails | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any; emailVerificationRequired?: boolean }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>;
  loginWithGoogle: () => void;
  loginWithFacebook: () => void;
  loginWithGitHub: () => void;
  loginWithTwitter: () => void;
  loginWithWeb3: () => Promise<void>;
  avatarUrl: string | null;
  setUser: React.Dispatch<React.SetStateAction<UserDetails | null>>;
}
