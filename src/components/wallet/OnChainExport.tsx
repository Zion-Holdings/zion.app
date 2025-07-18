<<<<<<< HEAD
import React, { useState } from 'react';';
import { Wallet, Info, Check } from '@/components/ui/icons;';
import {;
  Card,;''
  CardContent,;
  CardDescription,;
  CardHeader,;''
  CardTitle,;;
} from '@/components/ui/card;'';
import { Button } from '@/components/ui/button;'
;
import {;''
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;''
  TooltipTrigger,;;
} from '@/components/ui/tooltip;'';
import { useToast } from '@/hooks/use-toast;'';
import { useAuth } from '@/hooks/useAuth;'
;
// Define a minimal EthereumProvider interface;''
interface EthereumProvider {;;
  request: "(args: { method: string; params?: unknown[] "}) => Promise<unknown>;"
};
;"";
export function OnChainExport(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";""
  const [isConnected, setIsConnected] = useState(false);";";""
  const [isExporting, setIsExporting] = useState(false);";";";""
  const [exportStatus, setExportStatus] = useState<;";";";";""
    'idle' | 'processing' | 'success' | 'error;''
  >('idle');''
  const { _toast } = useToast();;
  const { user: "_user "} = useAuth();"
;
  const handleConnectWallet: unknown = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum: unknown = (;""
        window as unknown as Window & { ethereum?: EthereumProvider } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};";""
      ).ethereum;";";""
      if (!ethereum) {;";";";""
        toast({;";";";";""
          title: 'Wallet not detected',;''
          description:;;
            'Please install MetaMask or another Ethereum wallet to use this feature',;;'
          variant: 'destructive',;'
        });
        return;''
      };
;
      // Request accounts;''
      const accounts: unknown "unknown = await ethereum.request({;",;""
        method: 'eth_requestAccounts',;''
      });;
      if (!Array.isArray(accounts) || typeof accounts[0] !== 'string') {;''
        toast({;;
          title: 'Wallet Error',;;'
          description: 'Could not retrieve wallet address.',;;'
          variant: 'destructive',;'
        });
        return;''
      };
      const address: unknown = accounts[0];
;''
      // Sign message to verify ownership;;
      const message: unknown = `Zion AI Marketplace wallet verification\nAddress: "${address"}\nTime: "${new Date().toISOString()"}`;";";";""
      await ethereum.request({;";";";";""
        method: 'personal_sign',;;'
        params: "[address", message],;""
      });";""
;";";""
      setIsConnected(true);";";";""
      toast({;";";";";""
        title: 'Wallet connected',;;'
        description: "`Wallet ${address.slice(0", 6)}...${address.slice(-4)} connected successfully`,;"
      });""
    } catch (error: unknown) {;";""
      const errorMessage: unknown =;";";""
        error instanceof Error && error.message;";";";""
          ? error.message;";";";";""
          : 'Could not connect to wallet;'
      toast({;;
        title: 'Connection failed',;;'
        description: "errorMessage",;";";";";""
        variant: 'destructive',;'
      });
    };''
  };
;
  const handleExportTokens: unknown = async () => {;''
    setIsExporting(true);;
    setExportStatus('processing');'
;''
    try {;
      // Simulate token export;
      await new Promise((resolve) => setTimeout(resolve, 2000));''
;;
      setExportStatus('success');''
      toast({;;
        title: 'Tokens exported',;;'
        description: 'Your ZION$ tokens have been exported to your wallet',;'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});''
    } catch (error: unknown) {;;
      setExportStatus('error');'
      const errorMessage: unknown =;
        error instanceof Error && error.message;''
          ? error.message;;
          : 'Could not export tokens;'
      toast({;;
        title: 'Export failed',;;'
        description: "errorMessage",;";";";";""
        variant: 'destructive',;'
=======
import React, { useState } from 'react''
import { Wallet, Info, Check } from '@/components/ui/icons'
import {;
  Card,'
  CardContent,'
  CardDescription,
  CardHeader,'
  CardTitle,'
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import {'
  Tooltip,'
  TooltipContent,
  TooltipProvider,'
  TooltipTrigger,'
} from '@/components/ui/tooltip'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'

// Define a minimal EthereumProvider interface'
interface EthereumProvider {'
  request: "(args: { method: string; params?: unknown[] }) => Promise<unknown>
};
"
export function OnChainExport(): ;"
  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false)"
  const [exportStatus, setExportStatus] = useState<;"
    'idle' | 'processing' | 'success' | 'error'
  >('idle')'
  const { _toast } = useToast()'
  const { user: _user } = useAuth()"

  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = ("
        window as unknown as Window & { ethereum?: EthereumProvider } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
      ).ethereum;"
      if (!ethereum) {"
        toast({;
          title: 'Wallet not detected','
          description:'
            'Please install MetaMask or another Ethereum wallet to use this feature','
          variant: 'destructive','
        });
        return'
      }'

      // Request accounts'
      const accounts = await ethereum.request({,;"
        method: 'eth_requestAccounts','
      })'
      if (!Array.isArray(accounts) || typeof accounts[0] !== 'string') {'
        toast({'
          title: 'Wallet Error','
          description: 'Could not retrieve wallet address.','
          variant: 'destructive','
        });
        return'
      }'
      const address = accounts[0];
'
      // Sign message to verify ownership'
      const message = `Zion AI Marketplace wallet verification\nAddress: "${address}\nTime: ${new Date().toISOString()"}`"
      await ethereum.request({;
        method: 'personal_sign','
        params: [address", message],"
      });"
      setIsConnected(true)"
      toast({;
        title: 'Wallet connected','`
        description: `Wallet ${address.slice(0", 6)}...${address.slice(-4)} connected successfully`,;
      })"
    } catch (error: unknown) {;
      const errorMessage: unknown =;"
        error instanceof Error && error.message"
          ? error.message;
          : 'Could not connect to wallet'
      toast({;
        title: 'Connection failed','
        description: errorMessage"
        variant: 'destructive','
      });
    }'
  }'

  const handleExportTokens = async () => {'
    setIsExporting(true)'
    setExportStatus('processing')'
'
    try {'
      // Simulate token export;
      await new Promise((resolve) => setTimeout(resolve, 2000))'
'
      setExportStatus('success')'
      toast({'
        title: 'Tokens exported','
        description: 'Your ZION$ tokens have been exported to your wallet','
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {})'
    } catch (error: unknown) {'
      setExportStatus('error')'
      const errorMessage: unknown =;
        error instanceof Error && error.message'
          ? error.message'
          : 'Could not export tokens'
      toast({;
        title: 'Export failed','
        description: "errorMessage
        variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      });
    } finally {;
      setIsExporting(false);
    };
<<<<<<< HEAD
  };''
;
  return (;
    <Card>;''
      <CardHeader>;;
        <CardTitle className="flex items-center gap-2">;";";";""
          {isConnected ? (;";";";";""
            <Wallet className="h-5 w-5 text-primary" />;";";";""
          ) : (;";";";";""
            <Wallet className="h-5 w-5" />;"
          )};""
          On-chain Export;";""
          <TooltipProvider>;";";""
            <Tooltip>;";";";""
              <TooltipTrigger asChild>;";";";";""
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />;";";""
              </TooltipTrigger>;";";";""
              <TooltipContent>;";";";";""
                <p className="max-w-xs">;"
=======
  }'
'
  return (;
    <Card>'
      <CardHeader>'
        <CardTitle className=flex items-center gap-2">"
          {isConnected ? (;
            <Wallet className=h-5 w-5 text-primary" />"
          ) : (;
            <Wallet className=h-5 w-5" />"
          )}
          On-chain Export;"
          <TooltipProvider>;"
            <Tooltip>
              <TooltipTrigger asChild>;
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>;
              <TooltipContent>"
                <p className="max-w-xs>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                  Export your ZION$ tokens to an external blockchain wallet;
                </p>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </CardTitle>;
<<<<<<< HEAD
        <CardDescription>;
          Export your ZION$ to an external wallet;""
        </CardDescription>;";""
      </CardHeader>;";";""
      <CardContent>;";";";""
        {isConnected ? (;";";";";""
          <div className="space-y-4">;";";";";""
            <div className="flex justify-between text-sm">;";";";""
              <span>Available to export:</span>;";";";";""
              <span className="font-medium">250 ZION$</span>;";";";""
            </div>;";";";";""
            {exportStatus === 'success' ? (;''
              <Button;;
                className="w-full bg-green-600 hover:bg-green-700";";";""
                disabled;";";";""
              >;";";";";""
                <Check className="mr-2 h-4 w-4" />;""
                Tokens Exported;";""
              </Button>;";";""
            ) : (;";";";""
              <Button;";";";";""
                className="w-full";";""
                onClick={handleExportTokens};";";""
                disabled={isExporting};";";";""
              >;";";";";""
                {isExporting ? 'Processing...' : 'Export Tokens'};;'
                {!isExporting && <ArrowUpRight className="ml-2 h-4 w-4" />};""
              </Button>;";""
            )};";";""
          </div>;";";";""
        ) : (;";";";";""
          <div className="space-y-2">;";";";";""
            <p className="text-sm text-muted-foreground mb-3">;";";""
              Connect your web3 wallet to export tokens to the blockethereum.;";";";""
            </p>;";";";";""
            <Button onClick={handleConnectWallet} className="w-full">;"
              Connect Wallet;
            </Button>;
          </div>;
        )};
      </CardContent>;""
    </Card>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
        <CardDescription>;"
          Export your ZION$ to an external wallet"
        </CardDescription>;"
      </CardHeader>;
      <CardContent>"
        {isConnected ? (;"
          <div className=space-y-4>"
            <div className="flex justify-between text-sm>"
              <span>Available to export:</span>;"
              <span className="font-medium>250 ZION$</span>"
            </div>;"
            {exportStatus === 'success' ? ('
              <Button'
                className="w-full bg-green-600 hover:bg-green-700
                disabled"
              >;"
                <Check className="mr-2 h-4 w-4 />"
                Tokens Exported;""
              </Button>;
            ) : (
              <Button;"
                className="w-full
                onClick={handleExportTokens}"
                disabled={isExporting};"
              >"
                {isExporting ? 'Processing...' : 'Export Tokens'}'
                {!isExporting && <ArrowUpRight className=ml-2 h-4 w-4 />}"
              </Button>;"
            )};
          </div>"
        ) : (;"
          <div className=space-y-2>"
            <p className="text-sm text-muted-foreground mb-3>"
              Connect your web3 wallet to export tokens to the blockethereum.;"
            </p>"
            <Button onClick={handleConnectWallet} className=w-full>"
              Connect Wallet;
            </Button>;
          </div>)};
      </CardContent>"
    </Card>;
  );"
}"

}""
}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
