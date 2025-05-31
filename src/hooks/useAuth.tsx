import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { io, Socket } from 'socket.io-client';
import { AuthContext } from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
import { subscribeToPush } from "@/utils/pushSubscription";

// Define types for our context
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
  points?: number; // Add this line
}

export interface AuthContextType {
  user: UserDetails | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  // Aliases for compatibility with other components
  login: (email: string, password: string) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
  updateUserPoints: (points: number) => void; // Add this line
}

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock auth functions for now - these would connect to Supabase in a real implementation
  const signIn = async (email: string, password: string) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign in attempted with:", email);
    // Mock successful sign-in
    setUser({
      id: "mock-user-id", 
      email, 
      displayName: "Mock User", 
      name: "Mock User",
      avatarUrl: "",
      profileComplete: true,
      role: "enterprise_admin",
      permissions: ["billing_access", "admin_access", "team_management"],
      companyId: "company-123",
      points: 0, // Initialize points
    });
    // Subscribe user to push notifications after login
    try {
      await subscribeToPush();
    } catch (err) {
      console.error('Push subscription error', err);
    }
    await fetchUserPoints(); // Add this call
    return { error: null };
  };

  const signOut = async () => {
    // This would be replaced with actual Supabase auth
    console.log("Sign out attempted");
    setUser(null);
  };

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    // This would be replaced with actual Supabase auth
    console.log("Sign up attempted with:", email, userData);
    // Mock successful sign-up
    setUser({ 
      id: "mock-user-id", 
      email, 
      displayName: userData?.name || "New User",
      name: userData?.name || "New User",
      userType: userData?.userType,
      profileComplete: false,
      points: 0, // Initialize points
    });
    await fetchUserPoints(); // Add this call
    return { error: null };
  };

  const resetPassword = async (email: string) => {
    // Mock implementation
    console.log("Password reset requested for:", email);
    return { error: null };
  };

  const updateProfile = async (data: Partial<UserDetails>) => {
    // Mock implementation
    console.log("Profile update requested with:", data);
    if (user) {
      setUser({ ...user, ...data });
    }
    return { error: null };
  };

  const loginWithGoogle = async () => {
    console.log("Google login requested");
    // Mock implementation
    setUser({ 
      id: "google-user-id", 
      email: "google@example.com", 
      displayName: "Google User",
      name: "Google User",
      profileComplete: true,
      points: 0, // Initialize points
    });
    await fetchUserPoints(); // Add this call
  };

  const loginWithFacebook = async () => {
    console.log("Facebook login requested");
    // Mock implementation
    setUser({ 
      id: "facebook-user-id", 
      email: "facebook@example.com", 
      displayName: "Facebook User", 
      name: "Facebook User",
      profileComplete: true,
      points: 0, // Initialize points
    });
    await fetchUserPoints(); // Add this call
  };

  const loginWithTwitter = async () => {
    console.log("Twitter login requested");
    // Mock implementation
    setUser({
      id: "twitter-user-id",
      email: "twitter@example.com",
      displayName: "Twitter User",
      name: "Twitter User",
      profileComplete: true,
      points: 0, // Initialize points
    });
    await fetchUserPoints(); // Add this call
  };

  const loginWithWeb3 = async () => {
    console.log("Web3 login requested");
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      console.warn("No wallet detected");
      return;
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      });
      setUser({
        id: address,
        displayName: address,
        profileComplete: true,
        points: 0, // Initialize points
      });
      await fetchUserPoints(); // Add this call
    } catch (err) {
      console.error('Web3 login failed', err);
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    // Mock loading state and then set a null user to simulate no session
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    if (user?.id) {
      // Connect to WebSocket server
      // IMPORTANT: Replace with actual WebSocket server URL, possibly from env variables
      const websocketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'http://localhost:3001';
      const newSocket = io(websocketUrl, {
        query: { userId: user.id }, // Pass user ID for server-side association
        // Add other options like auth token if your WebSocket server requires it
        // auth: { token: session?.access_token } // Example if using JWT for socket auth
      });

      setSocket(newSocket);

      newSocket.on('connect', () => {
        console.log('Socket connected:', newSocket.id);
      });

      // Listen for points updates
      newSocket.on('points_updated', (data: { points: number }) => {
        if (typeof data.points === 'number') {
          console.log('Received points_updated event:', data.points);
          updateUserPoints(data.points);
        } else {
          console.warn('Received points_updated event with invalid data:', data);
        }
      });

      newSocket.on('disconnect', (reason) => {
        console.log('Socket disconnected:', reason);
      });

      newSocket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
      });

      // Cleanup on component unmount or user logout
      return () => {
        console.log('Cleaning up socket connection.');
        newSocket.off('points_updated');
        newSocket.disconnect();
        setSocket(null);
      };
    } else {
      // If no user, ensure any existing socket is disconnected
      if (socket) {
        console.log('User logged out, disconnecting socket.');
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [user]); // Re-run when user changes

  const updateUserPoints = (points: number) => {
    setUser((currentUser) => {
      if (currentUser) {
        return { ...currentUser, points };
      }
      return null;
    });
  };

  // Inside AuthProvider
  const fetchUserPoints = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        console.warn('No session available to fetch points.');
        return;
      }

      const response = await fetch('/api/rewards/points', {
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch points');
      }

      const data = await response.json();
      if (typeof data.points === 'number') {
        updateUserPoints(data.points);
      } else {
        console.warn('Fetched points is not a number:', data.points);
      }
    } catch (error) {
      console.error('Error fetching user points:', error);
      // Optionally, set points to a default or handle error state in UI
      updateUserPoints(0); // Or some other default / error indicator
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signOut,
    signUp,
    // Add aliases for compatibility
    login: signIn,
    logout: signOut,
    signup: signUp,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    updateUserPoints, // Add this line
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
