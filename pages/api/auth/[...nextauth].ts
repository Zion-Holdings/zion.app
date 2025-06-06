import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

// WalletConnect isn't natively supported by next-auth. We'll mock a basic credentials
// provider that handles an address signature check. In a real app you'd verify
// the wallet signature server side.
const WalletConnectProvider = CredentialsProvider({
  id: "walletconnect",
  name: "WalletConnect",
  credentials: {
    address: { label: "Address", type: "text" },
    signature: { label: "Signature", type: "text" },
  },
  async authorize(credentials) {
    if (!credentials?.address || !credentials.signature) return null;
    // Placeholder verification logic
    return { id: credentials.address, name: credentials.address };
  },
});

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        // Placeholder; integrate with real user DB
        if (credentials.email === "demo@example.com" && credentials.password === "password") {
          return { id: "1", name: "Demo User", email: credentials.email };
        }
        return null;
      },
    }),
    WalletConnectProvider,
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
