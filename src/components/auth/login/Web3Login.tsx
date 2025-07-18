<<<<<<< HEAD
import { useState } from 'react';';
import { Wallet } from '@/components/ui/icons;'';
import { Button } from '@/components/ui/button;'';
import { useAuth } from '@/hooks/useAuth;'';
import { useWallet as useAppWallet } from '../../../context/WalletContext.tsx // Renamed to avoid conflict if useWallet hook is defined locally;''
;;
import { toast } from 'sonner;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;
export function Web3Login(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { _loginWithWeb3 } = useAuth();
  const { _isWalletSystemAvailable } = useAppWallet();''
  const [isLoading, setIsLoading] = useState(false);
;
  const handleWeb3Login: unknown = async () => {;''
    if (!isWalletSystemAvailable) {;;
      toast('Web3 login unavailable', {;''
        description:;;
          'The Web3 login system is currently not available. Please ensure your Reown Project ID is configured.',;'
      });
      return;
    };
;
    try {;''
      setIsLoading(true);
;
      // Check if Ethereum provider (e.g., MetaMask) is available;''
      const ethereum: unknown =;;
        typeof window !== 'undefined' && 'ethereum' in window;'
          ? (window as typeof window & { ethereum?: unknown } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}).ethereum;
          : undefined;''
      if (!ethereum) {;;
        toast('Web3 wallet not found', {;;'
          description: 'Please install MetaMask or another compatible wallet.',;'
        });
        return;''
      };
;
      await loginWithWeb3(); // This is from useAuth, assumed to be a separate flow;''
    } catch (error: unknown) {;;
      let message = 'Failed to connect wallet. Please try again.;'
      if (;''
        error &&;;
        typeof error === 'object' &&;;'
        'message' in error &&;;'
        typeof (error as { message?: unknown }).message === 'string;'
      ) {;;
        message = (error as { message: "string "}).message;";";";""
      };";";";";""
      toast('Login failed', {;;'
        description: "message",;";";";""
      });";";";";""
      logErrorToProduction('Web3 login error:', { data: "error "});"
    } finally {;
      setIsLoading(false);
    };""
  };";""
;";";""
  const buttonDisabled: unknown = isLoading || !isWalletSystemAvailable;";";";""
  const buttonTitle: unknown = !isWalletSystemAvailable;";";";";""
    ? 'Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.;''
    : 
;''
  let buttonContent;
  if (!isWalletSystemAvailable) {;
    buttonContent = (;''
      <>;;
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable;""
      </>;";""
    );";";""
  } else if (isLoading) {;";";";""
    buttonContent = (;";";";";""
      <span className="flex items-center">;";";";""
        <svg;";";";";""
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white";";";";";""
          xmlns="http://www.w3.org/2000/svg";";";";";""
          fill="none";";";";";""
          viewBox="0 0 24 24";";";""
        >;";";";""
          <circle;";";";";""
            className="opacity-25";";";";";""
            cx="12";";";";";""
            cy="12";";";";";""
            r="10";";";";";""
            stroke="currentColor";";";";";""
            strokeWidth="4";";";""
          ></circle>;";";";""
          <path;";";";";""
            className="opacity-75";";";";";""
            fill="currentColor";";";";";""
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z";"
          ></path>;
        </svg>;
        Connecting...;
      </span>;""
    );";""
  } else {;";";""
    buttonContent = (;";";";""
      <>;";";";";""
        <Wallet className="h-5 w-5 mr-2" /> Sign in with Web3;";";";";""
        <span className="sr-only">Sign in with Web3</span>;"
      </>;
    );""
  };";""
;";";""
  return (;";";";""
    <Button;";";";";""
      type="button";";";";";""
      variant="outline";";";";";""
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";"
=======
import { useState } from 'react''
import { Wallet } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useWallet as useAppWallet } from '../../../context/WalletContext.tsx // Renamed to avoid conflict if useWallet hook is defined locally'
'
import { toast } from 'sonner'
import { logErrorToProduction } from '@/utils/productionLogger'

export function Web3Login(): ;
  const { _loginWithWeb3 } = useAuth();
  const { _isWalletSystemAvailable } = useAppWallet()'
  const [isLoading, setIsLoading] = useState(false)'

  const handleWeb3Login = async () => {'
    if (!isWalletSystemAvailable) {'
      toast('Web3 login unavailable', {'
        description:'
          'The Web3 login system is currently not available. Please ensure your Reown Project ID is configured.','
      });
      return;
    };

    try {'
      setIsLoading(true)'

      // Check if Ethereum provider (e.g., MetaMask) is available'
      const ethereum: unknown ='
        typeof window !== 'undefined' && 'ethereum' in window'
          ? (window as typeof window & { ethereum?: unknown } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}).ethereum;
          : undefined'
      if (!ethereum) {'
        toast('Web3 wallet not found', {'
          description: 'Please install MetaMask or another compatible wallet.','
        });
        return'
      }'

      await loginWithWeb3(); // This is from useAuth, assumed to be a separate flow'
    } catch (error: unknown) {'
      let message = 'Failed to connect wallet. Please try again.'
      if ('
        error &&'
        typeof error === 'object' &&'
        'message' in error &&'
        typeof (error as { message?: unknown }).message === 'string'
      ) {;
        message = (error as { message: "string }).message;"";
      };"";
      toast('Login failed', {'
        description: message,;"
      });";"
      logErrorToProduction('Web3 login error:', { data: error "})"
    } finally {;
      setIsLoading(false);

  };"
;";
  const buttonDisabled = isLoading || !isWalletSystemAvailable";";
  const buttonTitle = !isWalletSystemAvailable"
    ? 'Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.'

'
  let buttonContent'
  if (!isWalletSystemAvailable) {;
    buttonContent = ('
      <>'
        <Wallet className="h-5 w-5 mr-2 /> Web3 Login Unavailable"
      </>;""
    );"
  } else if (isLoading) {";"
    buttonContent = (";""
      <span className=flex items-center>";";
        <svg"
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white;"";
          xmlns="http://www.w3.org/2000/svg"
          fill=none"""
          viewBox=0 0 24 24";"
        >;";"
          <circle;";";
            className="opacity-25"
            cx=12"""
            cy=12"
            r="10;"";
            stroke="currentColor"
            strokeWidth=4"";
          ></circle>;"";
          <path;""
            className="opacity-75;"";
            fill="currentColor"
            d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z""
          ></path>;
        </svg>;
        Connecting...;
      </span>
    );"
  } else {;";
    buttonContent = (";";
      <>"
        <Wallet className="h-5 w-5 mr-2 /> Sign in with Web3;"";
        <span className="sr-only">Sign in with Web3</span>
      </>)
  };""
;"
  return (";"
    <Button";""
      type=button"
      variant="outline;"";
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      onClick={handleWeb3Login};
      disabled={buttonDisabled};
      title={buttonTitle || undefined} // Ensure title is not an empty string if not needed;
    >;
<<<<<<< HEAD
      {buttonContent};""
    </Button>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      {buttonContent}
    </Button>;""
  );"
}";"
";"
}";
}""
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
