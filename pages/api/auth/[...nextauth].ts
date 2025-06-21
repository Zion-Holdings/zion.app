import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import MicrosoftEntraIdProvider from "next-auth/providers/microsoft-entra-id";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { withErrorLogging } from '@/utils/withErrorLogging';
import { createClient } from '@supabase/supabase-js'; // Import Supabase
import { verifyMessage } from 'ethers'; // Assuming ethers v6+

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
    MicrosoftEntraIdProvider({
      clientId: process.env.MICROSOFT_CLIENT_ID || "",
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET || "",
      tenantId: process.env.MICROSOFT_TENANT_ID || "common", // Or specific tenant ID
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
      if (account && profile && user.email) {
        try {
          console.log(`OAuth signIn callback: User email ${user.email}, Provider: ${account.provider}`);

          // 1. Check if user exists in Supabase auth.users by email
          // Note: Supabase client SDK doesn't have a direct "getUserByEmail" for admin purposes.
          // We'll query the 'profiles' table, assuming email in profiles is linked to auth.users.email
          // or that email is a reliable unique identifier to find the profile and thus the user_id.
          // This assumes 'profiles' table has an 'email' column or user_id links to auth.users which has email.

          // Let's refine the lookup: Query 'profiles' for a 'user_id' that links to an 'auth.users' with this email.
          // This is a bit indirect. A direct `rpc` call or a view might be better in a real scenario if email isn't on profiles.
          // For now, let's assume we can find the profile via email, or we create one.

          let supabaseUserId: string | null = null;
          let existingUserProfile = null;

          // Attempt to find user by email in 'auth.users' via a profile lookup
          // This part is tricky with client SDK if email is not directly queryable in a public table
          // or if we don't want to expose emails in 'profiles'.
          // The WalletConnectProvider uses a custom 'wallet_address' column.
          // For OAuth, email is the common link.

          // Option A: Query 'profiles' if it has an email field (denormalized, but makes this query easy)
          // const { data: profileByEmail, error: emailError } = await supabase
          //   .from('profiles')
          //   .select('*, user_id (id, email)') // Adjust if user_id is just the UUID string
          //   .eq('email', user.email) // Assuming 'profiles.email' exists
          //   .single();

          // Option B: More robustly, assume we might need to create or link.
          // Let's try to get the user from Supabase auth directly if possible,
          // though this usually requires admin privileges for arbitrary lookups.
          // Supabase client `signInWithPassword` implicitly finds user by email.
          // For OAuth, Supabase itself would handle this if it were the primary OAuth handler.
          // Since NextAuth is the handler, we need to bridge.

          // Simplified: Check if a profile exists linked to an auth.user with this email.
          // This requires a way to query auth.users or a table linked to it.
          // Let's assume 'profiles' table has 'user_id' (FK to auth.users.id)
          // and we need to get the user from auth.users first, then check profiles.
          // This logic is becoming complex and might be better handled by Supabase Edge Functions or specific db functions.

          // Fallback to a pattern similar to WalletConnect if email is the key.
          // 1. Try to find an auth.user by email. This is the difficult part with client SDK.
          //    Supabase doesn't expose a direct "get user by email" for client-side without logging them in.
          //    This typically requires admin rights.
          //
          //    Let's assume we have to create a user if we can't find one,
          //    and Supabase's own RLS/unique constraints on `auth.users.email` will prevent duplicates.

          const { data: existingUserInAuth, error: lookupAuthUserError } = await supabase
            .from('users') // This is accessing auth.users table
            .select('id, email')
            .eq('email', user.email)
            .single();

          if (lookupAuthUserError && lookupAuthUserError.code !== 'PGRST116') {
            console.error(`OAuth signIn: Error looking up user by email ${user.email} in auth.users:`, lookupAuthUserError);
            throw new Error(`Error looking up user: ${lookupAuthUserError.message}`);
          }

          if (existingUserInAuth) {
            supabaseUserId = existingUserInAuth.id;
            console.log(`OAuth signIn: Found existing Supabase auth user ${supabaseUserId} for email ${user.email}`);

            // Check if profile exists
            const { data: profile, error: profileError } = await supabase
              .from('profiles')
              .select('id, user_id, display_name, avatar_url')
              .eq('user_id', supabaseUserId)
              .single();

            if (profileError && profileError.code !== 'PGRST116') {
              console.error(`OAuth signIn: Error fetching profile for user ${supabaseUserId}:`, profileError.message);
              // Non-fatal for sign-in, but log it. Profile might be created later or manually.
            }
            existingUserProfile = profile;

            if (!existingUserProfile) {
                 console.log(`OAuth signIn: Profile not found for existing auth user ${supabaseUserId}. Creating profile.`);
                 const { error: createProfileError } = await supabase.from('profiles').insert({
                    user_id: supabaseUserId,
                    display_name: user.name,
                    avatar_url: user.image,
                    // email: user.email // if your 'profiles' table has an email column
                 });
                 if (createProfileError) {
                    console.error(`OAuth signIn: Error creating profile for user ${supabaseUserId}:`, createProfileError.message);
                    // Non-fatal for sign-in
                 }
            } else {
                // Optionally, update existing profile with fresh data from provider
                const { error: updateProfileError } = await supabase
                    .from('profiles')
                    .update({ display_name: user.name, avatar_url: user.image })
                    .eq('user_id', supabaseUserId);
                if (updateProfileError) {
                    console.warn(`OAuth signIn: Could not update profile for ${supabaseUserId}:`, updateProfileError.message);
                }
            }
          } else {
            // User does not exist in auth.users, create them.
            // This is the tricky part. `supabase.auth.signUp()` requires a password
            // and may send a confirmation email, which is not ideal for OAuth.
            // If Supabase "Confirm email" is disabled, this might work.
            // Otherwise, an admin method to create user is preferred.
            console.log(`OAuth signIn: No Supabase auth user for ${user.email}. Attempting to create.`);

            // Using a strong random password as it's required by signUp
            const randomPassword = Math.random().toString(36).slice(-16) + Math.random().toString(36).slice(-16);
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
              email: user.email,
              password: randomPassword,
              options: {
                data: { // metadata for auth.users.raw_user_meta_data
                  display_name: user.name,
                  avatar_url: user.image,
                  // provider: account.provider // good to store which provider was used
                }
              }
            });

            if (signUpError) {
              // This could fail if email already exists but our initial lookup failed (e.g. RLS issues)
              console.error(`OAuth signIn: Supabase signUp error for ${user.email}:`, signUpError.message);
              // Check if error is because user already exists (e.g. "User already registered")
              if (signUpError.message.includes("already registered")) {
                // Try to fetch the user again, as our initial lookup might have failed due to RLS on auth.users
                // This is a common issue if not using service_role key for lookups.
                const { data: existingUserRetry, error: retryError } = await supabase
                    .from('users') // Querying auth.users
                    .select('id')
                    .eq('email', user.email)
                    .single();
                if (existingUserRetry) {
                    supabaseUserId = existingUserRetry.id;
                    console.log(`OAuth signIn: Found existing Supabase user ${supabaseUserId} on retry after signUp conflict.`);
                     // Proceed to create/update profile as in the "if (existingUserInAuth)" block
                    const { data: profile, error: profileError } = await supabase
                        .from('profiles')
                        .select('id, user_id')
                        .eq('user_id', supabaseUserId)
                        .single();
                    if (!profile && !(profileError && profileError.code !== 'PGRST116')) {
                        await supabase.from('profiles').insert({ user_id: supabaseUserId, display_name: user.name, avatar_url: user.image });
                    } else if (profile) {
                        await supabase.from('profiles').update({ display_name: user.name, avatar_url: user.image }).eq('user_id', supabaseUserId);
                    }

                } else {
                    console.error(`OAuth signIn: User exists error, but failed to retrieve on retry for ${user.email}:`, retryError?.message);
                    throw new Error(`User creation failed: ${signUpError.message}`);
                }
              } else {
                throw new Error(`User creation failed: ${signUpError.message}`);
              }
            } else if (signUpData.user) {
              supabaseUserId = signUpData.user.id;
              console.log(`OAuth signIn: New Supabase auth user ${supabaseUserId} created for ${user.email}. Creating profile.`);
              // Create profile
              const { error: createProfileError } = await supabase.from('profiles').insert({
                user_id: supabaseUserId,
                display_name: user.name,
                avatar_url: user.image,
                // email: user.email // if your 'profiles' table has an email column
              });
              if (createProfileError) {
                console.error(`OAuth signIn: Error creating profile for new user ${supabaseUserId}:`, createProfileError.message);
                // This is not ideal, user created in auth but not in profiles.
                // Consider cleanup or retry logic for production.
              }
            } else {
                 console.error(`OAuth signIn: Supabase signUp for ${user.email} did not return user data or error.`);
                 throw new Error('User creation failed: No user data returned from signUp.');
            }
          }

          if (!supabaseUserId) {
            console.error(`OAuth signIn: Could not determine Supabase user ID for ${user.email}. Aborting sign in.`);
            return false; // Or redirect to an error page: '/auth/error?error=SupabaseUserSyncFailed'
          }

          // IMPORTANT: Mutate the NextAuth `user` object to ensure `user.id` is the Supabase user ID.
          // This ID will then be passed to the `jwt` callback.
          user.id = supabaseUserId;
          (user as any).supabaseUserId = supabaseUserId; // also add it explicitly if needed elsewhere
          (user as any).email = user.email; // ensure email is correctly on the user object for jwt callback
          (user as any).name = user.name; // ensure name is correctly on the user object
          (user as any).image = user.image; // ensure image is correctly on the user object

          return true; // Continue with NextAuth sign-in
        } catch (error: any) {
          console.error(`OAuth signIn: Critical error during Supabase user sync for ${user.email}:`, error.message);
          Sentry.captureException(error, { extra: { email: user.email, provider: account.provider } });
          // Returning false will stop the sign-in.
          // Alternatively, redirect to an error page: return '/auth/error?error=OAuthSupabaseSyncFailed';
          return false;
        }
      }
      // For other providers (Credentials, WalletConnect), their authorize methods handle Supabase interaction.
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
