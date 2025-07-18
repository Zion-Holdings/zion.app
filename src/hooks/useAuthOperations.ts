import React from 'react'
import { useEffect } from 'react''
import type { UserDetails } from '@/types/auth'
import { mutate } from 'swr'
import type { SignupParams } from '@/types/auth'
import { supabase } from '@/integrations/supabase/client'
import type { UserProfile } from '@/types/auth'
import { toast } from '@/hooks/use-toast'
import { showApiError } from '@/utils/apiErrorHandler'
import { trackReferral, checkUrlForReferralCode } from '@/utils/referralUtils'
import { cleanupAuthState } from '@/utils/authUtils'
import { logWarn, logErrorToProduction } from '@/utils/productionLogger;
'
interface EthereumProvider {'
  request: "(args: { method: string; params?: unknown[] }) => Promise<unknown>
};"
"
export function useAuthOperations(): unknown {): unknown {): unknown {): unknown {): unknown {;
  setUser: React.Dispatch<React.SetStateAction<UserDetails | null>>"
  setIsLoading: "React.Dispatch<React.SetStateAction<boolean>>
  setAvatarUrl: React.Dispatch<React.SetStateAction<string | null>>,
) {;
  // Check for referral code in URL when the hook is first used;
  useEffect(() => {
    checkUrlForReferralCode()
  }, [])"
  const signIn = async ({";
    email,
    password,;"
  }: {"
    _email: string
    password: "string"
  }) => {
    setIsLoading(true);""
    try {;
      // Clean up any stale auth state before login
      cleanupAuthState();"
      if (!supabase) throw new Error('Supabase client not initialized')'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.auth.signInWithPassword({;
        email,;
        password,'
      })'
      if (error) {'
        toast({'
          variant: 'destructive','
          title: 'Oh no! Something went wrong.','
          description: error instanceof Error ? error.message : String(error),"
        });
        return {
          data: "null"
          error: error instanceof Error ? error.message : String(error),
        };"
      };"

      toast({;
        title: 'Login successful!','
        description: `Welcome back, ${email}!`,"
      });"

      return { data, error: null "}"
    } catch {;
      toast({
        variant: 'destructive','
        title: 'Oh no! Something went wrong.','
        description: 'Failed to sign in. Please check your credentials.','
      })'
      return { data: null, error: 'Failed to sign in.' }'
    } finally {;
      setIsLoading(false)'
    }'
  };
'
  const signUp: async ({ email", password, display_name }: SignupParams) => {"
    setIsLoading(true);
    try {
      if (!supabase) throw new Error('Supabase client not initialized')'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.auth.signUp({;
        email,'
        password,'
        options: {
          data: {;,"
            display_name: display_name,"
          },
        },;"
      });"

      if (error) {;
        showApiError(error, 'Error during signup', () =>'
          signUp({ email, password, display_name }),;
        )'
        return {'
          data: "null"
          error: error instanceof Error ? error.message : String(error),
        };
      }
;""
      // Add this after successful signup;
      if (
        data &&;"
        typeof data === 'object' &&'
        'user' in data &&'
        (data as { user?: { id: "string } }).user
      ) {;""
        let usedReferral = false;
        // Track referral if there was a referral code
        usedReferral = await trackReferral(;"
          (data as { user: "{ id: string } }).user.id,
          email,;""
        );

        try {;"
          await fetch('/api/points/increment', {'
            method: 'POST','
            headers: { 'Content-Type': 'application/json' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},'
            body: "JSON.stringify({
              userId: (data as { user: { id: string "} }).user.id,"
              amount: 10
              reason: 'signup','
            }),'
          })'
          // Bonus points when signing up with a referral code'
          if (usedReferral) {'
            await fetch('/api/points/increment', {'
              method: 'POST','
              headers: { 'Content-Type': 'application/json' },'
              body: "JSON.stringify({"
                userId: (data as { user: { id: string } }).user.id,"
                amount: "20
                reason: 'referral_signup','
              }),'
            })'
          };
'
          // Generate a referral code for the new user'
          if (!supabase) throw new Error('Supabase client not initialized')'
          await supabase.rpc('generate_referral_code', {'
            user_id: (data as { user: { id: string "} }).user.id,"
          });
        } catch {
          logErrorToProduction('Failed to complete signup rewards', {'
            data: error,;"
          })"
        };
        mutate('user')'
      };
'
      toast({'
        title: 'Signup successful!','
        description: `Welcome, ${display_name}! Please check your email to verify your account.`,
      });"
"
      return { data, error: null }"
    } catch (error: unknown) {;"
      showApiError(error, 'Failed to sign up. Please try again.', () =>'
        signUp({ email, password, display_name }),'
      )'
      return { data: null, error: 'Failed to sign up.' }'
    } finally {;
      setIsLoading(false);
    };
  }'
'
  const logout = async () => {;
    setIsLoading(true)'
    try {'
      if (!supabase) throw new Error('Supabase client not initialized')'
      const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.auth.signOut()'
      if (error) {'
        toast({'
          variant: 'destructive','
          title: 'Oh no! Something went wrong.','
          description: error instanceof Error ? error.message : String(error),;
        });
      } else {
        setUser(null); // Clear the user state upon successful logout;"
        setAvatarUrl(null);"
        try {
          // Clear authToken cookie on backend;
          await fetch('/api/auth/logout', { method: 'POST' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {})'
        } catch (_cookieErr) {'
          logWarn('useAuthOperations.logout: failed to clear auth cookie', {'
            data: "{ data: cookieErr "},
          });
        }"
        toast({;"
          title: 'Logout successful!','
          description: 'You have been successfully logged out.','
        });
      }'
    } catch (error: unknown) {'
      logErrorToProduction('Logout failed:', { data: error })"
      toast({;"
        variant: 'destructive','
        title: 'Logout failed','
        description: error instanceof Error ? error.message : String(error),;
      });
    } finally {;
      setIsLoading(false);
    };
  }
;"
  const resetPassword = async (_email: string) => {;"
    setIsLoading(true)
    try {;
      if (!supabase) throw new Error('Supabase client not initialized')'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.auth.resetPasswordForEmail(email, {'
        redirectTo: "`${window.location.origin"}/update-password`,
      });"
;"
      if (error) {
        toast({;
          variant: 'destructive','
          title: 'Oh no! Something went wrong.','
          description: error instanceof Error ? error.message : String(error),"
        });"
        return {
          data: null"
          error: error instanceof Error ? error.message : String(error),"
        };
      };"
"
      toast({;
        title: 'Password reset email sent!','
        description: `Please check your email (${email"}) for instructions on how to reset your password.`,"
      });

      return { data, error: "null "}
    } catch (error: unknown) {;
      toast({"
        variant: 'destructive','
        title: 'Oh no! Something went wrong.','
        description: error instanceof Error ? error.message : String(error),;"
      })
      return { data: null, error: 'Failed to send reset password email.' }'