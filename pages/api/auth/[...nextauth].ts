import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { withErrorLogging } from '@/utils/withErrorLogging';
import { supabase } from '@/utils/supabase/client';
import { verifyMessage } from 'ethers';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import type { NextApiRequest, NextApiResponse } from 'next';

// WalletConnect isn't natively supported by next-auth. We'll mock a basic credentials
// provider that handles an address signature check. In a real app you'd verify
// the wallet signature server side.
const WalletConnectProvider = CredentialsProvider({
  id: "walletconnect",
  name: "WalletConnect",
  credentials: {
    address: { label: "Address", type: "text" },
    signature: { label: "Signature", type: "text" },
    message: { label: "Message", type: "text" }
  },
  async authorize(credentials) {
    if (!credentials?.address || !credentials?.signature || !credentials?.message) {
      return null;
    }

    try {
      // Verify the signature
      const recoveredAddress = verifyMessage(credentials.message, credentials.signature);
      
      if (recoveredAddress.toLowerCase() === credentials.address.toLowerCase()) {
        return {
          id: credentials.address,
          email: `${credentials.address}@wallet.local`,
          name: `Wallet User (${credentials.address.slice(0, 6)}...${credentials.address.slice(-4)})`,
          image: null
        };
      }
    } catch (error) {
      logErrorToProduction('Wallet signature verification failed:', error);
    }

    return null;
  }
});

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    WalletConnectProvider,
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default withErrorLogging(NextAuth(authOptions));