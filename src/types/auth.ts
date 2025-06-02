export interface UserDetails {
  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;
  permissions?: string[];
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
  points?: number;
}

export interface UserProfile {
  id?: string;
  displayName?: string;
  email: string;
  userType: string;
  profileComplete: boolean;
  createdAt: string;
  updatedAt: string;
  avatar_url?: string;
  bio?: string;
  avatarUrl?: string;
  headline?: string;
  role?: string;
  permissions?: string[];
  companyId?: string;
  points?: number;
}

// Update AuthContextType definition to match implementation
export interface AuthContextType {
  user: UserDetails | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
    rememberMe?: boolean
  ) => Promise<{ data?: any; error?: any }>;
  signup: (email: string, password: string, userData?: any) => Promise<{ error?: any }>; 
  register?: (name: string, email: string, password: string) => Promise<{ error?: any }>; 
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error?: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error?: any }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
  signIn?: (email: string, password: string) => Promise<{ error: any }>;
  signOut?: () => Promise<void>;
  signUp?: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  setUser?: React.Dispatch<React.SetStateAction<UserDetails | null>>;
  tokens?: { accessToken: string; refreshToken?: string } | null;
  avatarUrl?: string | null;
  setAvatarUrl?: (url: string | null) => void;
}
