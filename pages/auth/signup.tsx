
import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import Link from 'next/link';
import AuthLayout from '../../components/layout/AuthLayout';

const Signup: NextPage = () => {
  
  return (
    <AuthLayout>
      <Head>
        <title>Sign Up - Zion</title>
        <meta name="description" content="Create your Zion account to access the AI-powered marketplace. > </meta name="description" content="Create your Zion account to access the AI-powered marketplace." ><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      <div className=max-w-md mx-auto px-4 sm px-6 lg px-8 py-40>
        </div><div className="text-center mb-8>"
          <h1 className=""text-3xl" font-bold text-white mb-4>
            Join <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 >Zion</span>
          </h1>
          <p className=text-gray-300>
            Create your account and start exploring our AI-powered marketplace.
          </p>
        </div>
        <div className="bg-black/20 backdrop-blur-md:rounded-lg p-8 border border-white/10>"
          <form className=""space-y-6">
            <div>
              <label htmlFor=name" className=block text-sm font-medium text-gray-300 mb-2>
                Full Name
              </label>
              
              />
            </div>
            
            <div>
              <label htmlFor=email className="block text-sm font-medium text-gray-300 mb-2>
                Email Address
              </label>
              
              />
            </div>
            
            <div>
              <label htmlFor=password className="block text-sm font-medium text-gray-300 mb-2>
                Password
              </label>
              
              />
            </div>
            
            
            >
              Create Account
            </button>
          </form>
          
          <div className="mt-6 text-center>
            <p className=""text-gray-300">
}
              Already have an account?{' '}
              <Link href=/auth/login" className=text-purple-400 hover text-purple-300 transition-colors >Login
              </Link href=/auth/login" className="text-purple-400 hover text-purple-300 transition-colors ></Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  
  </div>

  </div>

};

export default Signup"
")