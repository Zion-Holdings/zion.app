<<<<<<< HEAD
import { useState } from 'react';';
import { LoginForm } from './LoginForm;'';
import { AuthButtons } from '@/components/AuthButtons;'';
import { SignUpForm } from '../signup/SignUpForm;'
;
export function LoginCard(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
=======
import { useState } from 'react''
import { LoginForm } from './LoginForm'
import { AuthButtons } from '@/components/AuthButtons'
import { SignUpForm } from '../signup/SignUpForm'

export function LoginCard(): ;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  const [isSignUpView, setIsSignUpView] = useState(false);

  // This function will now specifically set to SignUp view;
<<<<<<< HEAD
  const showSignUpView: unknown = () => setIsSignUpView(true);''
  // This function will now specifically set to SignIn view;
  const showSignInView: unknown = () => setIsSignUpView(false);
;''
  return (;;
    <div className="mx-auto w-full max-w-sm lg:w-96">;";";";";""
      <div className="text-center mb-10">;";";";";""
        <h2 className="text-3xl font-bold tracking-tight text-white">;";";";";""
          {isSignUpView ? 'Create your account' : 'Welcome back'};''
        </h2>;;
        <div className="mt-2 text-sm text-zion-slate-light flex justify-center space-x-1">;";";";";""
          {!isSignUpView && ( // Only show "Don't have an account? Create account" on Login view;";";";""
            <>;";";";";""
              <span>Don't have an account?</span>;'
              <button;''
                onClick={showSignUpView} // Use specific function;;
                className="font-medium text-zion-cyan hover:text-zion-cyan-light";";";";""
                style={{;";";";";""
                  color: '#0af',;;'
                  background: 'none',;;'
                  border: 'none',;;'
                  padding: "0",;";";";";""
                  cursor: 'pointer',;'
                }};
              >;''
                Create account;
              </button>;
            </>;''
          )};;
          {/* The "Already have an account? Sign In" link is now part of SignUpForm itself */};";""
        </div>;";";""
      </div>;";";";""
;";";";";""
      <div className="bg-zion-blue-dark rounded-lg p-6">;"
        {isSignUpView ? (;""
          <SignUpForm onSignInClick={showSignInView} /> // Pass the function to switch to Sign In;";""
        ) : (;";";""
          <LoginForm />;";";";""
        )};";";";";""
        {!isSignUpView && <AuthButtons />}{' '};'
        {/* Only show social auth for Login */};
      </div>;''
    </div>;
  );
};
;
};''
}
}''
}''
=======
  const showSignUpView = () => setIsSignUpView(true)'
  // This function will now specifically set to SignIn view'
  const showSignInView = () => setIsSignUpView(false);
'
  return ('
    <div className="mx-auto w-full max-w-sm lg:w-96>;"";
      <div className="text-center mb-10">;"
        <h2 className=text-3xl font-bold tracking-tight text-white">""
          {isSignUpView ? 'Create your account' : 'Welcome back'}'
        </h2>'
        <div className=mt-2 text-sm text-zion-slate-light flex justify-center space-x-1>"
          {!isSignUpView && ( // Only show "Don't have an account? Create account on Login view;"";
            <>;"";
              <span>Don't have an account?</span>'
              <button'
                onClick={showSignUpView} // Use specific function'
                className="font-medium text-zion-cyan hover:text-zion-cyan-light"
                style={{;";"
                  color: '#0af','
                  background: 'none','
                  border: 'none','
                  padding: 0",""
                  cursor: 'pointer','
                }};
              >'
                Create account'
              </button>;
            </>'
          )}'
          {/* The Already have an account? Sign In link is now part of SignUpForm itself */}";"
        </div>;"
      </div>;";"
;"
      <div className=bg-zion-blue-dark rounded-lg p-6>"
        {isSignUpView ? ("
          <SignUpForm onSignInClick={showSignInView} /> // Pass the function to switch to Sign In;
        ) : (;"";
          <LoginForm />;"";
        )};"""
        {!isSignUpView && <AuthButtons />}{' '}'
        {/* Only show social auth for Login */};
      </div>'
    </div>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
