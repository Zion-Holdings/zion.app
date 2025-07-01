import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github"; // Added GitHubProvider
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { withErrorLogging } from '@/utils/withErrorLogging';
import { supabase } from '@/utils/supabase/client'; // Use centralized client
import { verifyMessage } from 'ethers'; // Assuming ethers v6+
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';

// WalletConnect isn't natively supported by next-auth. We'll mock a basic credentials
// provider that handles an address signature check. In a real app you'd verify
// the wallet signature server side.
const WalletConnectProvider = CredentialsProvider({
  id: "walletconnect",
  name: "WalletConnect",
  credentials: {
    address: { label: "Address", type: "text" },
    signature: { label: "Signature", type: "text" },
    message: { label: "Message", type: "text" }, // Added message
  },
  async authorize(credentials) {
    if (!credentials?.address || !credentials.signature || !credentials.message) {
      logInfo("WalletConnectProvider: Missing address, signature, or message.");
      return null;
    }

    try {
      const recoveredAddress = verifyMessage(credentials.message, credentials.signature);

      if (recoveredAddress.toLowerCase() === credentials.address.toLowerCase()) {
        logInfo(`WalletConnectProvider: Signature verified for address ${recoveredAddress}`);

        // 1. Lookup User by Wallet Address in your public user profile table
        // Assumes a 'profiles' table linked to 'auth.users' with a 'wallet_address' column.
        let userProfile = null;
        let authUserId = null;

        const { data: existingProfile, error: lookupError } = await supabase
          .from('profiles') // Assuming 'profiles' table
          .select('*, user_id (id, email)') // Adjust based on your actual table and foreign key to auth.users
          .eq('wallet_address', recoveredAddress.toLowerCase())
          .single();

        if (lookupError && lookupError.code !== 'PGRST116') { // PGRST116 = no rows found
          logErrorToProduction('WalletConnectProvider: Error looking up user by wallet address:', { data: lookupError });
          return null; // Internal server error
        }

        userProfile = existingProfile;

        if (userProfile) {
          logInfo(`WalletConnectProvider: Existing user profile found for wallet ${recoveredAddress}. Auth User ID: ${userProfile.user_id?.id}`);
          authUserId = userProfile.user_id?.id;
          // Ensure the user object for NextAuth has id, name, email.
          return {
            id: authUserId, // This MUST be the auth.users.id
            name: userProfile.display_name || `User ${recoveredAddress.substring(0,6)}...`,
            email: userProfile.user_id?.email, // Email from the linked auth.users table
            walletAddress: userProfile.wallet_address,
          };
        } else {
          // 2. User not found, create a new user in Supabase Auth and then a profile
          logInfo(`WalletConnectProvider: No existing user for wallet ${recoveredAddress}. Creating new user.`);

          // Option: Create user with a dummy email if required by Supabase policies
          // This is a simplified approach. Robust implementation might use Supabase Admin API
          // or have specific logic for wallet-first users.
          const dummyEmail = `${recoveredAddress.toLowerCase()}@wallet.zion.os`;
          // Generate a strong random password, though it may not be used directly by the user if they only use wallet login.
          // Using a simple random string for demonstration. For production, use a crypto library for stronger randomness.
          const dummyPassword = Math.random().toString(36).slice(-16) + Math.random().toString(36).slice(-16);


          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: dummyEmail,
            password: dummyPassword,
            options: {
              data: { // This metadata is for auth.users.raw_user_meta_data
                display_name: `User ${recoveredAddress.substring(0, 6)}...`,
                // It's better to link wallet_address in a separate 'profiles' table
                // rather than relying on raw_user_meta_data for querying, as metadata is not indexed effectively.
              }
            }
          });

          if (signUpError) {
            // Handle specific errors, e.g., if dummy email is already taken (highly unlikely for this format)
            logErrorToProduction('WalletConnectProvider: Supabase signUp error:', { data: signUpError.message });
            // Potentially, if error is "User already registered", try to lookup by dummyEmail and link wallet if not linked.
            return null;
          }

          if (signUpData && signUpData.user) {
            logInfo(`WalletConnectProvider: New Supabase auth user created: ${signUpData.user.id}`);
            authUserId = signUpData.user.id;

            // Now, create a corresponding profile in your public 'profiles' table
            // linking it to the new auth.users.id and storing the wallet_address.
            const { error: profileCreateError } = await supabase
              .from('profiles')
              .insert({
                user_id: authUserId, // Link to auth.users table
                wallet_address: recoveredAddress.toLowerCase(),
                display_name: signUpData.user.user_metadata?.display_name || `User ${recoveredAddress.substring(0, 6)}...`,
                // email: signUpData.user.email, // email is already in auth.users, no need to duplicate unless denormalizing
              });

            if (profileCreateError) {
              logErrorToProduction('WalletConnectProvider: Error creating user profile after signup:', { data: profileCreateError.message });
              // This is a critical state: user is created in auth, but profile linking failed.
              // Robust handling might involve retries, or cleanup (deleting the auth user).
              // For now, fail the login. Consider: await supabase.auth.admin.deleteUser(authUserId); if using service_role key
              return null;
            }

            logInfo(`WalletConnectProvider: User profile created and linked for ${authUserId}`);
            return {
              id: authUserId,
              name: signUpData.user.user_metadata?.display_name || `User ${recoveredAddress.substring(0, 6)}...`,
              email: signUpData.user.email, // The dummy email
              walletAddress: recoveredAddress.toLowerCase(), // Ensure this is the original mixed-case address if needed, but usually stored lowercase.
            };
          } else {
            logErrorToProduction('WalletConnectProvider: Supabase signUp did not return user data or session.');
            return null;
          }
        }
      } else {
        logWarn(`WalletConnectProvider: Signature verification failed. Expected ${credentials.address}, got ${recoveredAddress}`);
        return null;
      }
    } catch (error) {
      logErrorToProduction('WalletConnectProvider: Error during signature verification or DB operation:', { data: error });
      return null;
    }
  },
});

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({ // Added GitHubProvider configuration
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
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
        if (!credentials?.email || !credentials.password) {
          logInfo("Credentials missing");
          return null;
        }

        logInfo('Attempting Supabase sign-in for:', { data: credentials.email });
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error) {
          logErrorToProduction('Supabase sign-in error:', { data: error.message });
          // Consider mapping Supabase errors to user-friendly messages
          // For NextAuth, returning null signifies failed authorization.
          // Throwing an error here can break the flow or expose details.
          // return null; // Simple failure
          // Or throw a specific error type if NextAuth handles it for display
          throw new Error(error.message); // This will show up as a generic error on client usually
        }

        if (data && data.user) {
          logInfo('Supabase sign-in successful for:', { data: data.user.email });
          // Ensure the object returned conforms to NextAuth's User model expectations
          // It must have an `id`. `name` and `email` are common.
          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.display_name || data.user.email, // Fallback for name
            // Include any other fields you want in the JWT/session user object
          };
        }

        logInfo("Unknown issue with Supabase sign-in, no user data returned.");
        return null; // Fallback if no user data but no error
      },
    }),
    WalletConnectProvider,
  ],
  session: {
    strategy: "jwt", // Using JWT for sessions
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token or user.id to the token right after signin
      if (account && user) {
        token.accessToken = account.access_token; // For OAuth
        token.id = user.id; // For all users
        if ((user as any).walletAddress) { // For wallet users
            token.walletAddress = (user as any).walletAddress;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from the token
      if (session.user) {
         (session.user as any).id = token.id as string;
        if (token.walletAddress) {
                 (session.user as any).walletAddress = token.walletAddress as string;
        }
      }
      // session.accessToken = token.accessToken; // If using OAuth and need token client-side
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error", // Optional: Custom error page
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
const wrappedHandler = withErrorLogging(handler as any);
export { wrappedHandler as GET, wrappedHandler as POST };
export default wrappedHandler;
