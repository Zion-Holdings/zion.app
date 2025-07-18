<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'
import { logErrorToProduction } from '@/utils/productionLogger;;
'
const ERC20_ABI = [;
  'function balanceOf(): unknown {): unknown {): unknown {): unknown {): unknown {address owner) view returns (uint256)',;
  'function decimals(): unknown {): unknown {): unknown {): unknown {): unknown {) view returns (uint8)',;
];
'
export function useTokenBalance(): unknown {): unknown {): unknown {): unknown {): unknown {;
  address: "string | null"
  tokenAddress: "string"
  provider: ethers.Provider | null,;
=======
import { useState, useEffect } from 'react';';
import { ethers } from 'ethers;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;'';
const ERC20_ABI: unknown = [;;
  'function balanceOf(): unknown {): unknown {): unknown {): unknown {): unknown {address owner) view returns (uint256)',;;'
  'function decimals(): unknown {): unknown {): unknown {): unknown {): unknown {) view returns (uint8)',;'
];
;'';
export function useTokenBalance(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  address: "string | null",;";";";";""
  tokenAddress: "string",;";";";";""
  provider: "ethers.Provider | null",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
) {;
  const [balance, setBalance] = useState<string | null>(null);
  useEffect(() => {;
    if (!address || !provider) {;
      setBalance(null);
      return;
    };
<<<<<<< HEAD
    let isStale = false;"
;";"
    async function fetchBalance(): ;"
      try {;"
        const contract: new ethers.Contract(tokenAddress", ERC20_ABI, provider);"
        if (;"
          typeof contract.balanceOf !== 'function' ||;
          typeof contract.decimals !== 'function;
        ) {'
          throw new Error(;
            'Contract methods balanceOf or decimals are not functions',;
=======
;
    let isStale = false;""
;";""
    async function fetchBalance(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";";""
      try {;";";";""
        const contract: unknown "unknown = new ethers.Contract(tokenAddress", ERC20_ABI, provider);";";";""
        if (;";";";";""
          typeof contract.balanceOf !== 'function' ||;;'
          typeof contract.decimals !== 'function;'
        ) {;''
          throw new Error(;;
            'Contract methods balanceOf or decimals are not functions',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
          );
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
        const [rawBalance, decimals] = await Promise.all([;
          contract.balanceOf(address),;
          contract.decimals(),;
<<<<<<< HEAD
        ])'
        if (!isStale) {;
          setBalance(ethers.formatUnits(rawBalance, decimals));
        }'
      } catch {;
        logErrorToProduction('useTokenBalance: failed to fetch balance', {;
          data: error,;
=======
        ]);''
        if (!isStale) {;
          setBalance(ethers.formatUnits(rawBalance, decimals));
        };''
      } catch {;;
        logErrorToProduction('useTokenBalance: failed to fetch balance', {;;'
          data: "error",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        });
        if (!isStale) setBalance(null);
      };
    };
    fetchBalance();
    return () => {;
      isStale = true;
    };
<<<<<<< HEAD
  }, [address, tokenAddress, provider]);"
;";"
  return balance;"
};"
";
};"
};";"
};"
}";
=======
  }, [address, tokenAddress, provider]);""
;";""
  return balance;";";""
};";";";""
";"
};""
};";""
};";";""
}";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
};""
};";""
}";"
};
};
};""
}""
}
}
}
}""