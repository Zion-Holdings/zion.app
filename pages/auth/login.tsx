
import type { NextPage } from "next";
import ModernLayout from '../components/layout/ModernLayout';
import Head from 'next/head';
import Link from ";next/link";
import { useState, useEffect } from react
import { useRouter } from ";next/router;}';
import { useAuth } from ../../src/contexts/AuthContext'
import AuthLayout from ../../components/layout/AuthLayout
const AIPoweredPredictiveAnalytics: "NextPage = () => {";
  const [email, setEmail] = useState(;
  const [password, setPassword] = useState(;
  const [loading, setLoading] = useState(false};
  const { signIn, signInWithProvider, user, loading: authLoading, error } = useAuth(;
  const $1 = useRouter(;
  // Redirect if already logged in;
  useEffect(() => {;
    if (user && !authLoading) {;
      router.push(/dashboard};
  } [user, authLoading, router];
  const $1 = async (e: React.FormEvent) => {;
    e.preventDefault(;
    setLoading(true;
    const { error } = await signIn(email, password;
    if (!error) {;
      router.push(/dashboard'};
    setLoading(false};
  const $1 = async (provider: 'google | github | 'linkedin' | twitte'r) => {;
    setLoading(true;
    const { error } = await signInWithProvider(provider
    if (error) {
      console.error(Social' sign in error: ", error}";
    setLoading(false};
  if (authLoading) {;
    return (;
      <AuthLayout></div>
        <div className=flex items-center justify-center min-h-screen></div>
          </div><div className=text-white text-lg>Loading...</div></div>
        </div></div>";
      </AuthLayout>}
  if (user) {";
    return (</div>
      <AuthLayout></div>'";
        <div className=""""flex items-center justify-center min-h-screen></div>'
          </div><div className=""""text-white text-lg >Redirecting...</div></div>
        </div></div>";
      </AuthLayout>}
  return (</div>";
    <AuthLayout></div>";
      <Head></div>'
        <title>Login - Zion</title>"</div>'
        <meta name=description content=Login to your Zion account to access the AI-powered marketplace. > </meta" name=description content=Login to your Zion account to access the AI-powered marketplace." ><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>";
</div>'
      <div className=""""max-w-md mx-auto px-4 sm: "px-6 lg px-8 py-40> </div>";
        </div><div className=text-center mb-8></div>;
          <h1 className=text-3xl font-bold text-white mb-4></div>;
            Welcome Back to <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 >Zion</span></div>;
          </h1></div>;
          <p className=text-gray-300>;
            Login to access your account and explore our AI-powered marketplace.</div>;
          </p></div>;
        </div></div>
        <div className=bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10>
          {error && (</div>
            </div><div className=mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm>";
              {error}</div>
            </div>";
          )}";
</div>'
          <form onSubmit={handleSubmit} className=space-y-6 "></div>";
            <div></div>'
              <label htmlFor="email className=block text-sm font-medium text-gray-300 mb-2>";
                Email Address</div>
              </label>";
                onChange={(e) => setEmail(e.target.value)}";
                required'
                className=w-full" px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                placeholder=your.email@example.com";
              /></div>
            </div>";
            </div>
            <div></div>'
              <label htmlFor=password className=""""block text-sm font-medium text-gray-300 mb-2>;
                Password</div>;
              </label>;
                onChange={(e) => setPassword(e.target.value)};
                required;
                className=w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent;
                placeholder=Enter your password
              /></div>
            </div>
            >";
              {loading ? Logging in... : Login}</div>
            </button></div>";
          </form>";
'
          {/* Social Login Buttons */}"</div>'
          <div className="""" mt-6></div>
            </div><div className=relative></div>'";
              <div className=""""absolute inset-0 flex items-center ></div>'
                </div><div className=w-full" border-t border-white/20></div></div>";
              </div></div>";
              <div className= relative flex justify-center text-sm></div>'
                <span className=px-2" bg-black/20 text-gray-300>Or continue with</span></div>";
              </div></div>";
            </div></div>'
            <div className=""""mt-6 grid grid-cols-2 gap-3>";
                onClick={() => handleSocialSignIn('google)}";
                disabled={loading}'
                className= w-full inline-flex justify-center py-2 px-4 border border-white/20 rounded-md shadow-sm bg-black/20 text-sm font-medium text-white hover: "bg-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus ring-purple-500 disabled opacity-50 disabled cursor-not-allowed"";
              ></div>";
                <svg className=w-5 h-5 viewBox=0 0 24 24></div>'
                  <path fill=currentColor d=M22.56 12.25c0-.78-.0o7-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.0o4 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z> </path fill=currentColor d=M22.56 12.25c0-.78-.0o7-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.0o4 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74" 3.28-8.09z"><path fill=currentColor d=M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.0o6-3.71 1.0o6-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z> </path fill=currentColor d=M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.0o6-3.71 1.0o6-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"><path fill="currentColor d=M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z> </path fill=currentColor d=M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z><path fill="currentColor d=M12 5.38c1.62 0 3.0o6.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z> </path" fill=currentColor d=M12 5.38c1.62 0 3.0o6.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z></svg></div>'
                <span className=""""ml-2>Google</span></div>";
              </button>
              '
                onClick={() => handleSocialSignIn(github)}'";
                disabled={loading}'
                className= w-full inline-flex justify-center py-2 px-4 border border-white/20 rounded-md shadow-sm bg-black/20 text-sm font-medium text-white hover: "bg-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus ring-purple-500 disabled opacity-50 disabled cursor-not-allowed"";
              ></div>";
                <svg className=w-5  h-5 fill=currentColor viewBox=0 0 24 24></div>";
                  <path d=M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.0o33-1.416-4.0o33-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.0o7 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.0o3-.404 1.0o2.0o5 2.0o47.138 3.0o6.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z> </path d=M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.0o33-1.416-4.0o33-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.0o7 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.0o3-.404 1.0o2.0o5 2.0o47.138 3.0o6.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z></svg></div>'
                <span className=""""ml-2>GitHub</span></div>";
              </button> </div>";
            </div></div>'
            <div className=mt-4 grid grid-cols-2" gap-3>";
                onClick={() => handleSocialSignIn(linked'in)}";
                disabled={loading}'
                className=w-full  inline-flex justify-center py-2 px-4 border border-white/20 rounded-md shadow-sm bg-black/20 text-sm font-medium text-white hover: "bg-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"";
              ></div>";
                <svg className= w-5 h-5  fill=currentColor viewBox=0 0 24 24></div>'
                  <path d=M20.447 20.452h-3.554v-5.569c0-1.328-.0o27-3.0o37-1.852-3.0o37-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.0o63-.926-2.0o63-2.0o65 0-1.138.92-2.0o63 2.0o63-2.0o63 1.14 0 2.0o64.925 2.0o64 2.0o63 0 1.139-.925 2.0o65-2.0o64 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z> </path" d=M20.447 20.452h-3.554v-5.569c0-1.328-.0o27-3.0o37-1.852-3.0o37-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.0o63-.926-2.0o63-2.0o65 0-1.138.92-2.0o63 2.0o63-2.0o63 1.14 0 2.0o64.925 2.0o64 2.0o63 0 1.139-.925 2.0o65-2.0o64 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></svg></div>";
                <span className=ml-2>LinkedIn</span></div>
              </button>";
                onClick={() => handleSocialSignIn(twitter)}
                disabled={loading}'
                className="""" w-full inline-flex justify-center py-2 px-4 border border-white/20 rounded-md shadow-sm bg-black/20 text-sm font-medium text-white hover: "bg-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus ring-purple-500 disabled opacity-50 disabled cursor-not-allowed"
              ></div>";
                <svg className=w-5  h-5 fill=currentColor viewBox=0 0 24 24></div>'
                  <path d=M23.953 4.57a10 10 0 0o1-2.825.775 4.958 4.958 0 0o2.163-2.723c-.951.555-2.0o5.959-3.127 1.184a4.92 4.92 0 0o0-8.384 4.482C7.69 8.095 4.0o67 6.13 1.64 3.162a4.822 4.822 0 0o0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0o1-2.228-.616v.06a4.923 4.923 0 0o3.946 4.827 4.996 4.996 0 0o1-2.212.085 4.936 4.936 0 0o4.604 3.417 9.867 9.867 0 0o1-6.102 2.105c-.39 0-.779-.0o23-1.17-.067a13.995 13.995 0 0o7.557 2.209c9.0o53 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.0o15-.63A9.935 9.935 0 0o24 4.59z> </path d="M23.953 4.57a10 10 0 0o1-2.825.775 4.958 4.958 0 0o2.163-2.723c-.951.555-2.0o5.959-3.127 1.184a4.92 4.92 0 0o0-8.384 4.482C7.69 8.095 4.0o67 6.13 1.64 3.162a4.822 4.822 0 0o0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0o1-2.228-.616v.06a4.923 4.923 0 0o3.946 4.827 4.996 4.996 0 0o1-2.212.085 4.936 4.936 0 0o4.604 3.417 9.867 9.867 0 0o1-6.102 2.105c-.39 0-.779-.0o23-1.17-.067a13.995 13.995 0 0o7.557 2.209c9.0o53 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.0o15-.63A9.935 9.935 0 0o24 4.59z></svg></div>
                <span className=ml-2>Twitter</span></div>";
              </button></div>
            </div> </div>";
          </div></div>
          <div className=mt-6 text-center></div>'";
            <Link href=/auth/forgot-password className=""""text-purple-400 hover text-purple-300 transition-colors >Forgot your password?</div>'
            </Link href=/auth/forgot-password  className=text-purple-400 hover text-purple-300 transition-colors" ></Link></div>";
          </div></div>";
          <div className= mt-6 text-center></div>'
            <p className=text-gray-300 ">'";
              Dont have an account?{ '}</div>'
              <Link href=/auth/signup className=""""text-purple-400 hover text-purple-300 transition-colors >Sign up</div>
              </Link href=/auth/signup  className=text-purple-400 hover text-purple-300 transition-colors ></Link></div>
            </p></div>
          </div></div>";
        </div></div>
      </div></div>";
    </AuthLayout>
  </div>'
  </div> </div>'";
}
";}
export default Login
)))))))))))))))))))'</div>'