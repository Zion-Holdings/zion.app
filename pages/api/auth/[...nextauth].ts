import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { withErrorLogging } from '@/utils/withErrorLogging';
import { createClient } from '@supabase/supabase-js'; // Import Supabase
import { verifyMessage } from 'ethers'; // Assuming ethers v6+
import * as Sentry from '@sentry/nextjs';

// Initialize Supabase client (ensure these ENV vars are set)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
// IMPORTANT: Use the SERVICE_ROLE_KEY for admin operations like user lookup if necessary,
// but for signInWithPassword, anon key might be sufficient if RLS allows.
// For robust auth provider, service role key might be needed for full control.
// Here, we're verifying credentials, so signInWithPassword should be fine with anon key if it's public.
// However, if creating users or more complex checks, service key is safer.
// Let's assume public URL and anon key are fine for signIn, as it's a client-facing action.
// If this [...nextauth].ts is ONLY for server-side session management after Supabase auth,
// then Supabase client might not even be needed here if Supabase JWT is used as next-auth session token.
// But typical CredentialsProvider does its own validation.
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);


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
      console.log("WalletConnectProvider: Missing address, signature, or message.");
      return null;
    }

    try {
      const recoveredAddress = verifyMessage(credentials.message, credentials.signature);

      if (recoveredAddress.toLowerCase() === credentials.address.toLowerCase()) {
        console.log(`WalletConnectProvider: Signature verified for address ${recoveredAddress}`);

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
          console.error('WalletConnectProvider: Error looking up user by wallet address:', lookupError);
          return null; // Internal server error
        }

        userProfile = existingProfile;

        if (userProfile) {
          console.log(`WalletConnectProvider: Existing user profile found for wallet ${recoveredAddress}. Auth User ID: ${userProfile.user_id?.id}`);
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
          console.log(`WalletConnectProvider: No existing user for wallet ${recoveredAddress}. Creating new user.`);

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
            console.error('WalletConnectProvider: Supabase signUp error:', signUpError.message);
            // Potentially, if error is "User already registered", try to lookup by dummyEmail and link wallet if not linked.
            return null;
          }

          if (signUpData && signUpData.user) {
            console.log(`WalletConnectProvider: New Supabase auth user created: ${signUpData.user.id}`);
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
              console.error('WalletConnectProvider: Error creating user profile after signup:', profileCreateError.message);
              // This is a critical state: user is created in auth, but profile linking failed.
              // Robust handling might involve retries, or cleanup (deleting the auth user).
              // For now, fail the login. Consider: await supabase.auth.admin.deleteUser(authUserId); if using service_role key
              return null;
            }

            console.log(`WalletConnectProvider: User profile created and linked for ${authUserId}`);
            return {
              id: authUserId,
              name: signUpData.user.user_metadata?.display_name || `User ${recoveredAddress.substring(0, 6)}...`,
              email: signUpData.user.email, // The dummy email
              walletAddress: recoveredAddress.toLowerCase(), // Ensure this is the original mixed-case address if needed, but usually stored lowercase.
            };
          } else {
            console.error('WalletConnectProvider: Supabase signUp did not return user data or session.');
            return null;
          }
        }
      } else {
        console.warn(`WalletConnectProvider: Signature verification failed. Expected ${credentials.address}, got ${recoveredAddress}`);
        return null;
      }
    } catch (error) {
      console.error("WalletConnectProvider: Error during signature verification or DB operation:", error);
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
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID || "",
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET || "",
      tenantId: process.env.AZURE_AD_TENANT_ID || "common", // Or specific tenant ID
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          console.log("Credentials missing");
          return null;
        }

        console.log("Attempting Supabase sign-in for:", credentials.email);
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error) {
          console.error("Supabase sign-in error:", error.message);
          // Consider mapping Supabase errors to user-friendly messages
          // For NextAuth, returning null signifies failed authorization.
          // Throwing an error here can break the flow or expose details.
          // return null; // Simple failure
          // Or throw a specific error type if NextAuth handles it for display
          throw new Error(error.message); // This will show up as a generic error on client usually
        }

        if (data && data.user) {
          console.log("Supabase sign-in successful for:", data.user.email);
          // Ensure the object returned conforms to NextAuth's User model expectations
          // It must have an `id`. `name` and `email` are common.
          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.display_name || data.user.email, // Fallback for name
            // Include any other fields you want in the JWT/session user object
          };
        }

        console.log("Unknown issue with Supabase sign-in, no user data returned.");
        return null; // Fallback if no user data but no error
      },
    }),
    WalletConnectProvider,
  ],
  session: {
    strategy: "jwt", // Using JWT for sessions
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // For OAuth providers (Google, Facebook, GitHub, Microsoft)
      if (account && profile && user.email) { // Ensure user.email is present
        try {
          console.log(`OAuth signIn: User email ${user.email}, Provider: ${account.provider}`);
          let supabaseUserIdToUse: string | null = null;

          // Attempt to sign up the user. This also serves as a way to check if they exist.
          const randomPassword = Math.random().toString(36).slice(-12); // Reduced length, still random
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: user.email,
            password: randomPassword, // Supabase requires a password for signUp
            options: {
              data: { // Metadata for auth.users.raw_user_meta_data
                display_name: user.name,
                avatar_url: user.image,
                provider: account.provider,
              }
            }
          });

          if (signUpError) {
            const errorStatus = (signUpError as any).status; // Supabase errors often have a status
            if (signUpError.message.includes("User already registered") ||
                signUpError.message.includes("user_already_exists") ||
                (errorStatus === 400 && signUpError.message.includes("already exists")) || // More specific check for some Supabase versions
                (errorStatus === 422 && signUpError.message.includes("already exists")) // Another possible error for existing user
            ) {
              console.log(`OAuth signIn: User ${user.email} already registered in Supabase auth.`);
              // User exists. Try to get their Supabase ID by checking current Supabase session.
              // This relies on Supabase potentially establishing a session during its part of OAuth flow,
              // even if NextAuth is the primary handler.
              const { data: { user: supabaseUserAfterPossibleImplicitLogin } } = await supabase.auth.getUser();
              if (supabaseUserAfterPossibleImplicitLogin && supabaseUserAfterPossibleImplicitLogin.email === user.email) {
                console.log(`OAuth signIn: Found active Supabase session for ${user.email}, ID: ${supabaseUserAfterPossibleImplicitLogin.id}`);
                supabaseUserIdToUse = supabaseUserAfterPossibleImplicitLogin.id;
                // Ensure profile is up-to-date for existing user
                try {
                    await supabase.from('profiles').upsert({
                        id: supabaseUserIdToUse,
                        display_name: user.name,
                        avatar_url: user.image,
                    }, { onConflict: 'id' });
                    console.log(`OAuth signIn: Profile upserted for existing user ${supabaseUserIdToUse}`);
                } catch (profileError: any) {
                    console.warn(`OAuth signIn: Could not upsert profile for existing user ${supabaseUserIdToUse}:`, profileError.message);
                    Sentry.captureException(profileError, { extra: { email: user.email, supabaseUserId: supabaseUserIdToUse, flow: 'profileUpsertErrorExistingUser' } });
                }

              } else {
                console.error(`OAuth signIn: User ${user.email} exists in Supabase auth, but could not retrieve Supabase ID via current session. This may indicate an incomplete OAuth link or session issue.`);
                Sentry.captureMessage("OAuthExistingUserSupabaseIDMissing", { extra: { email: user.email, provider: account.provider }});
                return false; // Block login if Supabase ID cannot be confirmed for existing user.
              }
            } else { // Other signUp error not related to user already existing
              console.error(`OAuth signIn: Supabase signUp error for ${user.email}:`, signUpError.message, signUpError);
              Sentry.captureException(signUpError, { extra: { email: user.email, provider: account.provider, flow: 'signUpErrorNotExisting' } });
              return false; // Block login for other signUp errors
            }
          } else if (signUpData && signUpData.user) { // New user signed up successfully
            supabaseUserIdToUse = signUpData.user.id;
            console.log(`OAuth signIn: New Supabase auth user ${supabaseUserIdToUse} created for ${user.email}`);
            try {
              // Ensure profile is created for new user
              const { error: profileInsertError } = await supabase
                .from('profiles')
                .insert({ // Use insert for new user, though upsert would also work if ID is unique
                  id: supabaseUserIdToUse, // This is auth.users.id
                  display_name: user.name,
                  avatar_url: user.image,
                  // email: user.email, // Only if 'profiles' table has an email column and you want to store it there
                });

              if (profileInsertError) {
                console.warn(`OAuth signIn: Could not create profile for new user ${supabaseUserIdToUse}:`, profileInsertError.message);
                Sentry.captureException(profileInsertError, { extra: { email: user.email, supabaseUserId: supabaseUserIdToUse, flow: 'profileInsertErrorNewUser' } });
                // Depending on requirements, this could be a blocking error. Original logic was non-blocking.
                // For now, let's keep it non-blocking but logged.
              } else {
                console.log(`OAuth signIn: Profile created for new user ${supabaseUserIdToUse}`);
              }
            } catch (e: any) {
                console.warn(`OAuth signIn: Exception during profile insert for new user ${supabaseUserIdToUse}:`, e.message);
                Sentry.captureException(e, { extra: { email: user.email, supabaseUserId: supabaseUserIdToUse, flow: 'profileInsertExceptionNewUser' } });
            }
          } else { // No signUpData.user and no specific signUpError handled (should be rare)
            console.error(`OAuth signIn: Supabase signUp for ${user.email} did not return user data and no recognized error.`);
            Sentry.captureMessage("OAuthUnknownSignUpBehavior", { extra: { email: user.email, provider: account.provider }});
            return false; // Block login
          }

          if (!supabaseUserIdToUse) {
            console.error(`OAuth signIn: Supabase User ID could not be determined for ${user.email}. Blocking sign-in.`);
            Sentry.captureMessage("OAuthSupabaseIDDeterminationFailed", { extra: { email: user.email, provider: account.provider }});
            return false;
          }

          user.id = supabaseUserIdToUse; // CRITICAL: Ensure NextAuth user object gets the Supabase ID
          console.log(`OAuth signIn: Successfully processed ${user.email}, Supabase ID ${user.id}. Allowing sign-in.`);
          return true; // Allow NextAuth sign-in to proceed

        } catch (error: any) {
          console.error(`OAuth signIn: Outer catch block error for ${user.email || 'unknown user'}:`, error.message, error);
          Sentry.captureException(error, { extra: { email: user.email, provider: account?.provider, flow: 'signInOuterCatch' } });
          return false; // Block login on any other critical error
        }
      }
      // For Credentials and WalletConnect, their authorize methods should have set user.id to Supabase ID.
      return true; // Allow other sign-in methods to proceed
    },
    async jwt({ token, user, account, profile }) {
      // Persist the OAuth access_token or user.id to the token right after signin
      // The `user` object here should now have `user.id` as the Supabase User ID due to the `signIn` callback.
      if (user) { // user object is available on first call after sign-in
        token.id = user.id; // This should be Supabase User ID
        token.email = user.email;
        // token.name = user.name; // Already on token by default if present on user
        // token.picture = user.image; // Already on token by default if present on user

        if ((user as any).walletAddress) { // For wallet users
            token.walletAddress = (user as any).walletAddress;
        }
      }
      // If account is present, it's an OAuth login.
      // We can also store provider specific tokens if needed.
      if (account) {
        token.accessToken = account.access_token; // OAuth access token from provider
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like user id from the token
      if (session.user) {
         (session.user as any).id = token.id as string; // Supabase User ID
         session.user.email = token.email as string; // Ensure email is on session user
        // session.user.name = token.name as string; // Already handled by NextAuth if in token
        // session.user.image = token.picture as string; // Already handled by NextAuth if in token
        if (token.walletAddress) {
                 (session.user as any).walletAddress = token.walletAddress as string;
        }
        if (token.provider) {
            (session.user as any).provider = token.provider as string;
        }
      }
      // session.accessToken = token.accessToken; // If using OAuth and need token client-side (be cautious with this)
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
