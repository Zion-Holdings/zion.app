<<<<<<< HEAD
import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { withErrorLogging } from '@/utils/withErrorLogging;
import { supabase } from '@/utils/supabase/client;
import { verifyMessage } from 'ethers;
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger;
import type { NextApiRequest, NextApiResponse } from 'next;

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

    try {
      // Verify the signature
      const recoveredAddress = verifyMessage(credentials.message, credentials.signature);
      
      if (recoveredAddress.toLowerCase() === credentials.address.toLowerCase()) {
        return {
          id: credentials.address,
          address: credentials.address,
          name: `Wallet ${credentials.address.slice(0, 6)}...${credentials.address.slice(-4)}`
        };

      return null;
    } catch (error) {
      logErrorToProduction('Wallet signature verification failed:', error);
      return null;


});

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    }),
    WalletConnectProvider,
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;

        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          });

          if (error || !data.user) {
            logWarn('Credential authentication failed:', { email: credentials.email, error });
            return null;

          logInfo('Credential authentication successful:', { email: credentials.email });
          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.name || data.user.email?.split('@')[0],
            image: data.user.user_metadata?.avatar_url
          };
        } catch (error) {
          logErrorToProduction('Credential authentication error:', error);
          return null;


    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.address = (user as any).address;

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.address = token.address as string;

      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
    signUp: '/auth/register',
    error: '/auth/error',
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export default withErrorLogging(handler);
=======
import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const [...nextauth]: NextPage = () => {
  return (
    <>
      <Head>
        <title>[...nextauth] - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">[...nextauth]</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* [...nextauth] content will go here */}
        </div>
      </div>
    </>
  );
};

export default [...nextauth];
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`