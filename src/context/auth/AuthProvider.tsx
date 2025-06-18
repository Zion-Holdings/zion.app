import React, { useEffect } from "react";
import { supabase, getFromProfiles } from "../../integrations/supabase/client";
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";
import { loginUser, registerUser } from "@/services/authService";
import { safeStorage, safeSessionStorage } from "@/utils/safeStorage";
import { UserDetails } from "@/types/auth";
import { toast } from "@/hooks/use-toast"; // Import toast
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('[AuthProvider] Initializing...');
  const {
    user, setUser,
    isLoading, setIsLoading,
    onboardingStep, setOnboardingStep,
    tokens, setTokens,
    avatarUrl, setAvatarUrl
  } = useAuthState();
  
  const router = useRouter(); // Changed from useNavigate and useLocation
  const dispatch = useDispatch<AppDispatch>();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep, router); // Pass router instance

  const {
    login: signInImpl,
    signUp: signUpImpl,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3
  } = useAuthOperations(setUser, setIsLoading, setAvatarUrl);

  // Wrapper for login to match the AuthContextType interface
  const login = async (
    email: string,
    password: string,
    rememberMe = false
  ) => {
    try {
      // loginUser will throw if API call is not successful (e.g. non-2xx status)
      const { res, data } = await loginUser(email, password);
      // If we reach here, loginUser's HTTP call was successful (e.g., status 200 from our API)
      // data should contain { user, accessToken, refreshToken }
      console.log('[AuthProvider] loginUser API call successful:', { res, data });

      // Assuming data from a 200 response is always success.
      // If API returns 200 but with an error payload, that needs specific handling here or API needs adjustment.
      // data should contain { user, accessToken, refreshToken }
      console.log('[AuthProvider login] API call successful, data:', data); // Log received data
      if (data.accessToken && data.refreshToken) {
        console.log('[AuthProvider DEBUG] login: Attempting to set Supabase client session.');
        console.log('[AuthProvider DEBUG] login: Using accessToken:', data.accessToken);
        console.log('[AuthProvider DEBUG] login: Using refreshToken:', data.refreshToken);
















        setTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken });

        const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
          access_token: data.accessToken,
          refresh_token: data.refreshToken,
        });

        if (sessionError) {
          console.error("[AuthProvider DEBUG] login: Supabase client-side session setting failed:", sessionError);
          toast({
            title: "Login Failed",
            description: sessionError.message || "Failed to initialize client session.",
            va Cannot initialize session.riant: "destructive",
          });
          cleanupAuthState(); // Make sure this is called
          return { error: sessionError.message || "Client-side session initialization failed." };
        } else {
        else {   console.log('[AuthProv,
          cleanuerrArthState(); // Esure c]lMssigacessTknr rfresToknfromoginUsrspse
      r trast({
rnmea     citllro"Logi(AFailed",thProvider login] Missing accessToken or refreshToken from loginUser response.');
          scp"Incmp   e tiken dteonriivefmsev.Cannt itiaiz sso,der DEBUG] login: Supabase client-side session set successfully. Session data:', JSON.stringify(sessionData, null, 2));
      e   vaciano: ndestructpvoe, data received from server. Cannot initialize session.",
       }// The onAuthStateChange event should now trigger.
        }e(); cleaEnursucleanup
        rerurnn{r"Inco: "Incomtlete tekon en dt sc.ive;sever."};
      }}l {
        consol{('[AuhProvidrl]MsingaessToenfrhTkenfomloUs respons')
        t ait{
 a        t tld:uc"ogin ailed,
        }descripion: "Incmpletokend receivd fm serve.Cniitialzssion.",
        vaa:"dstuctv,
       c);
 lptnclenuAuthe();/recleanup
      rere urn:{"e tok:datacompeete token eatairecv vedrfrom verve. } };
    } else 
      cocsnrol(deror('[AuthP lvido]lisin]Misssign ccssTokonknrrrrfeeshTokrnsfokm roginU roiesporsne')');
     o{os(
          tili:n"LoginFFlled",
          dscipti:competokn dat reivdfrm serve.",
         varat: "destrcive,
         );
        ceconunAth "Ine(o;k datasurevcleaemperver.",
        r tur,{ ror:"Icmleetke atarcivedfrmever }
      } else {);
        cousSlt. re c('[AuthPrevianruog] MissinaccssTokn or rrfrethTokunr rom log nU"el} eeceivl.'d;
        toast(from server." };
      } stitl: "LginFled",
         dsciptin:"Incompleetkendata cived.",
          vnrirnt:r[dustructivi",
o       });
        cin]nupAussStati(); // EnsceescleaTep
         ktue{ C  rror:r"Inarmplrse tTkeokdeta receive ffoom servnnUs }eo response.');
        ttast
        console."LogiF'[dProidrlogin]Miin dccripTokonnor r"fIeshTcken foop loginUslr reepontt.')oken data received from server.",
          cleanupAuthState(); // Ensu encleanup
          return iLrgrn Fai "d"tialize session.
          else {"Incomplee tken da rceived from rver."        toast({
              titlerr:r"Login Failed", login MissingaccessToken or refreshToken from Userresponse.');
          toast({
        cleanupAthState(); // Esu   leanup
        re  tle: "Lgi"Icei okndarecevd fr rvr." };
             variant: "estructive"
       });
      csol .log('[ehPraviden]AlogS ftnctiontcoepl()e/,   Aut eeo:"c
     p  e tsr{kipttao: "Incompleee toknc data rveeived from server. Cannot initialize session.",
        else {   variant: "destructive",
     f er creau erAthte(); // Esure c]lMssigacessTknr rfresToknfromoginUsrspse
      r t}ast(
  ocstlero"Logi(A.ailodg,thPro[iAer lotin] Missrng accvssToked or r]fr shooien fn function completed, onAuthStateChange will handle redire ti  .');
    resurncpe"Incmp  r};cikesse,vfmsev.Cannt itiaiz sso,
      e   vaciano: ndestructpvoe, data received from server. Cannot initialize session.",
    } cat (on
      cons anupAothSto;('[rAclharnovidsr]alopginfnction
      ler roaun{ "Iecr: irror.rs".; //ThisishIspnseby(fncmAyouo APsrmtlete tekon en dt sc.ive;sever."};
      }}l {
        consol{('[AuhProvidrl]MsingaessToenfrhTkenfomloUs response')
        t ait({
 a        t tld:uc"ogin ailed,
        })descrip;ion: "Incmpletokend receivd fm serve.Cniitialzssion.",
        vaa:"dstuctv,
        c);
 lpt/nclenuAuthe();//Ensurecleanup
      rere urn:{"e tok:datacompeete token eatairecv vedrfrom verve. } };
    } else 
      cocsnrol(derror('[AuthP lvideo]lisin] Misssign cccssTokonknrrrrfeeshTokrnsfokm roginU lroiesporsne')');
     o{os(
          tieli:n"LoginFFalled",
          dsciptin:competokn dat reivdfrm serve.",
         varat: "destrcive,
         );
        ceconunAuth "Ine(o;k datasurevcleaemperver.",
        r tur,{ ror:"Icmpleetke atarcivedfrmever }
      } else {);
        cousSlt. re c('[AuthPrevianruog] MissinaccssTokn or rrfrethTokunr rom log nU"el  receive.'d;
        toast(from server." };
      } stitl: "LginFled",
         dsciptin:"Incompleetkendata cived.",
          vnrirnt:r[dustructivi",
o       });
        cin]nupAutsStati(); // EnsceescleaTup
        rktuen {  rror:r"In rmplrse tTkeokdeta receive ffoom serverUs }er response.');
        toast
        console."LogiF'[dProidrlogin]Miin dccripTokonnor r"fIeshTcken foop loginUslr reepontt.')oken data received from server.",
          cleanupAuthState(); // Ensure cleanup
          return "Lrgrn Fai "d"Incomplete token data received from server." };
      }   else {"Incomplee tken da rceived from rver."
          console.error('[AuthProvider login] Missing accessToken or refreshToken from loginUser response.');
          toast({
        cleanupAuthState(); // Ensu   cleanup
        re  title: "Logi"Inc mpleie tokndareceved fr rvr." };
             variant: "destructive",
        });
      consol .log('[AuehPraviden]AlogtS ftnctiontcoepl()e/,   AuthSta eChange well heodle:redir"ctcon.');
     preeut  {kerrtar null }; //eSuccescful logve

    }fcerchr(er o: ny
      con}ole.rror('[AuhPrvier] logn fucion erro:', rror
leotsaleMessage =."Anougexpect[dAerrortoccurredrduringvlogin.dPlear] t y ogiin."n function completed, onAuthStateChange will handle redirection.');
    return eerrorTitlr};c"LossFe"

    } cat erro(rioAxionErrorerror.pone
      cons Errorofromor('[rAsphnreovider] lo1, 4g3in 0fnction
      lec noasap Daear= irror.rse.; //Thisishrspnseby(fromAyour APsr.response.data; // This is the response body from your API
        const apiStatus = error.response.status;

        toastMessage = apiData?.error || apiData?.message || "Login failed. Please check your credentials or try again later.";
        const errorCode = apiData?.code;

        if (errorCode === "EMAIL_NOT_CONFIRMED") {
          toastMessage = apiData?.error || "Email not confirmed. Please check your inbox to verify your email.";
        } else if (errorCode === "INVALID_CREDENTIALS" || apiStatus === 401) {
          toastMessage = apiData?.error || "Invalid email or password.";
        } else if (errorCode === "LOGIN_FAILED" || apiStatus === 500) {
          toastMessage = apiData?.error || "Login failed due to a server error. Please try again later.";
        } else if (apiStatus === 400) {
          toastMessage = apiData?.error || "Invalid request. Please check your input.";
        } else if (apiStatus === 404) { // Endpoint not found
            toastMessage = "Login service not found. Please contact support.";
        }
        // Add any other specific errorCode handling here
      } else if (error.isAxiosError && !error.response) {
        // Network error (axios error, but no response from server)
        toastMessage = "Network error. Please check your internet connection and try again.";
      } else if (error.message) {
        // Other errors (not Axios, but have a message)
        toastMessage = error.message;
      }

      toast({
        title: errorTitle,
        description: toastMessage,
        variant: "destructive",
      });
      return { error: toastMessage }; // This is what LoginForm.tsx expects
    }
  };

  // Refactored signup method
  const signup = async (email: string, password: string, userData: Partial<UserDetails> = {}) => {
      setIsLoading(true);
      try {
        const { name = '' } = userData;
        const { res, data } = await registerUser(name, email, password);

      if (!(res.status >= 200 && res.status < 300)) {
        // Handle API errors (e.g., 400, 409, 500) from /api/auth/register
        toast({
          title: "Signup Failed",
          description: data?.message || 'An unexpected error occurred.',
          variant: "destructive"
        });
        setIsLoading(false);
        return { error: data?.message || 'Signup failed', emailVerificationRequired: false };
      }

      if (data?.emailVerificationRequired) {
        toast({
          title: "Signup Successful",
          description: "Please check youreB aeis{}iEbotk nS hstra DEBUG] signup: Attempting to redirect to:', next);
        router.replace(next);
        setIsLoading(false);
        return { error: null, emailVerificationRequired: false };
      } else {
        // Fallback for unexpected successful response structure
        toast({
          title: "Signup Error",
          description: "Unexpected response from server.",
          variant: "destructive"
        });
        setIsLoading(false);
        return { error: "Unexpected response from server.", emailVerificationRequired: false };
      }
    } catch (err: any) {
      console.error("Signup exception:", err);
      toast({
        title: "Signup Failed",
        description: err.message || "An unexpected error occurred during signup.",
        variant: "destructive",
      });
      setIsLoading(false);
      return { error: err.message || "Signup failed", emailVerificationRequired: false };
    }
  };

  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      // Inside the onAuthStateChange callback
      async (event, session) => {
              console.log('[AuthProvider DEBUG] onAuthStateChange triggered. Event:', event);
              console.log('[AuthProvider DEBUG] Session object:', JSON.stringify(session, null, 2));
      
              setIsLoading(true); // Ensure isLoading is true at the start
      
              try {
                if (session?.user) {
                  console.log('[AuthProvider DEBUG] Session and user found. User ID:', session.user.id);

                  // Inner try-catch for profile fetching and mapping
                  try {
                    console.log('[AuthProvider DEBUG] Attempting to fetch profile for user ID:', session.user.id);
                    // Explicitly log the exact query being made
                    console.log('[AuthProvider DEBUG] Supabase query: getFromProfiles().select("*").eq("id", session.user.id).single()');

                    const { data: profile, error: profileError } = await getFromProfiles()
                      .select('*')
                      .eq('id', session.user.id)
                      .single();

                    console.log('[AuthProvider DEBUG] Raw profile data:', JSON.stringify(profile, null, 2));
                    console.log('[AuthProvider DEBUG] Profile fetch error (if any):', JSON.stringify(profileError, null, 2));

                    if (profileError) {
                      console.error("[AuthProvider DEBUG] Error fetching user profile:", profileError);
                      let errorMessage = 'An error occurred while loading your profile. Please try again or contact support.';
                      if (profileError instanceof Error) {
                        errorMessage = profileError.message;
                      } else if (typeof profileError === 'object' && profileError !== null && 'message' in profileError) {
                        errorMessage = (profileError as {message: string}).message;
                      }
                      toast({
                        title: "Profile Load Error",
                        description: `Login successful, but failed to load your profile. ${errorMessage}`,
                        variant: "destructive",
                      });
                      setUser(null); // Ensure user is cleared
                      setAvatarUrl(null);
                      // Do NOT redirect to dashboard if profile load fails.
                    } else if (profile) {
                      console.log('[AuthProvider DEBUG] Profile data fetched successfully.');
                      let mappedUser;
                      try {
                        console.log('[AuthProvider DEBUG] Mapping profile to user. session.user:', JSON.stringify(session.user, null, 2), 'profile:', JSON.stringify(profile, null, 2));
                        mappedUser = mapProfileToUser(session.user, profile);
                        console.log('[AuthProvider DEBUG] Mapped user data:', JSON.stringify(mappedUser, null, 2));
                      } catch (mappingError) {
                        console.error("[AuthProvider DEBUG] Error mapping profile to user:", mappingError);
                        mappedUser = null; // Ensure mappedUser is null if mapping fails
                      }
      
                      if (mappedUser) {
                        setUser(mappedUser);
                        setAvatarUrl(mappedUser.avatarUrl || null);
                        console.log('[AuthProvider DEBUG] User state updated in context.');
      
                        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
                          console.log('[AuthProvider DEBUG] Event is SIGNED_IN/TOKEN_REFRESHED/USER_UPDATED. Calling handleSignedIn.');
                          console.log('[AuthProvider DEBUG] User object being passed to handleSignedIn:', JSON.stringify(mappedUser, null, 2));
                          handleSignedIn(mappedUser);
      
                          // Redirection logic
                          try {
                            const queryStringAuthChange = router.asPath.includes('?') ? router.asPath.substring(router.asPath.indexOf('?')) : '';
                            const paramsAuthChange = new URLSearchParams(queryStringAuthChange);
                            const nextFromUrl = paramsAuthChange.get('redirectTo') || paramsAuthChange.get('next');
                            const nextPathFromStorage = safeStorage.getItem('nextPath');
                            let redirectTo = '/dashboard'; // Default
      
                            if (nextPathFromStorage) {
                              redirectTo = decodeURIComponent(nextPathFromStorage);
                              safeStorage.removeItem('nextPath');
                              console.log('[AuthProvider DEBUG] Redirecting to (from storage):', redirectTo);
                            } else if (nextFromUrl) {
                              redirectTo = decodeURIComponent(nextFromUrl);
                              console.log('[AuthProvider DEBUG] Redirecting to (from URL params):', redirectTo);
                            } else {
                              console.log('[AuthProvider DEBUG] Redirecting to default dashboard.');
                            }
                            console.log('[AuthProvider DEBUG] Attempting to redirect to:', redirectTo);
                            router.replace(redirectTo);
                          } catch (redirectError) {
                            console.error("[AuthProvider DEBUG] Error during redirection:", redirectError);
                          }
                        }
                      } else {
                        console.error("[AuthProvider DEBUG] Mapped user is null. Not updating user state. Mapping failed or profile was insufficient.");
                        // Consider if user should be cleared or toast shown if mapping fails but profile was technically fetched
                         toast({
                            title: "User Data Error",
                            description: "Failed to process user information after login. Please contact support.",
                            variant: "destructive",
                         });
                         setUser(null);
                         setAvatarUrl(null);
                      }
                    } else { // Profile is null, but no error
                      console.warn("[AuthProvider DEBUG] Profile not found for user (no error, but profile is null):", session.user.id);
                      toast({
                        title: "Profile Not Found",
                        description: "Login successful, but your profile could not be found. Please contact support.",
                        variant: "destructive",
                      });
                      setUser(null); // Ensure user is cleared
                      setAvatarUrl(null);
                    }
                  } catch (profileMapError) {
                    // This catch block is for errors specifically within the profile fetching/mapping phase
                    console.error("[AuthProvider DEBUG] Critical error in profile fetching/user mapping phase:", profileMapError);
                    toast({
                      title: "User Initialization Error",
                      description: "A critical error occurred while setting up your user account. Please try logging out and in again.",
                      variant: "destructive",
                    });
                    setUser(null);
                    setAvatarUrl(null);
                    // Potentially call cleanupAuthState() or handleSignedOut() if appropriate
                  }
                } else { // No session or session.user is null
                  console.log('[AuthProvider DEBUG] No session or session.user. Clearing user state. Event:', event);
                  setUser(null);
                  setAvatarUrl(null);
                  if (event === 'SIGNED_OUT') {
                    console.log('[AuthProvider DEBUG] Event is SIGNED_OUT, calling handleSignedOut.');
                    handleSignedOut(); // Ensure this is called
                    // Optional: redirect to login if not already there or on a public page
                    // if (router.pathname !== '/auth/login') router.replace('/auth/login');
                  }
                }
              } catch (outerError) { // Catch errors from the main try block in onAuthStateChange
                console.error("[AuthProvider DEBUG] Outer error in onAuthStateChange callback:", outerError);
                setUser(null); // Ensure user state is cleared
                setAvatarUrl(null);
              } finally {
                setIsLoading(false); // Ensure isLoading is false at the end
                console.log('[AuthProvider DEBUG] onAuthStateChange finished processing. isLoading set to false.');
              }
            }
          );

    return () => {
      subscription.unsubscribe();
    };
  }, [router, dispatch, handleSignedIn, handleSignedOut, setOnboardingStep, setUser, setAvatarUrl, setTokens]); // Added router and other dependencies

  const authContextValue = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login: signInImpl,
    // register, // Removed as signup now covers its functionality
    signUp: signUpImpl,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    setUser,
    onboardingStep,
    tokens,
    avatarUrl,
    setAvatarUrl
  };
return (
  <AuthContext.Provider value={authContextValue}>
    {children}
  </AuthContext.Provider>
);
};

export const useAuth = () => {
const context = React.useContext(AuthContext);
if (!context) {
  throw new Error("useAuth must be used within an AuthProvider");
}
return context;
};