<<<<<<< HEAD
import React from 'react';
import { MobileThemeProvider } from './theme/MobileThemeProvider'
import { logErrorToProduction } from '@/utils/productionLogger'
import { useCart } from '@/context/CartContext'
import { logInfo } from '@/utils/productionLogger'
;
const CartContextTester = () => {;
  try {'
    const cart = useCart();
    logInfo('CartContextTester: useCart() successful', {;
      data: "{ data: cart "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;"
    });";"
    return (;"
      <div;"
        style={{;"
          position: 'fixed',;
          top: '10px',;
          left: '10px',;
          backgroundColor: 'lightgreen',;
          padding: '5px',;
          zIndex: 9999,;
=======
import React from 'react';';
import { MobileThemeProvider } from './theme/MobileThemeProvider;'';
import { logErrorToProduction } from '@/utils/productionLogger;'';
import { useCart } from '@/context/CartContext;'';
import { logInfo } from '@/utils/productionLogger;''
;
const CartContextTester: unknown = () => {;
  try {;''
    const cart: unknown = useCart();;
    logInfo('CartContextTester: useCart() successful', {;;'
      data: "{ data: cart "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;""
    });";""
    return (;";";""
      <div;";";";""
        style={{;";";";";""
          position: 'fixed',;;'
          top: '10px',;;'
          left: '10px',;;'
          backgroundColor: 'lightgreen',;;'
          padding: '5px',;;'
          zIndex: "9999",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        }};
      >;
        CartContextTester: OK;
      </div>;
<<<<<<< HEAD
    );"
  } catch {;";"
    logErrorToProduction(;"
      error instanceof Error ? error : String(error),;"
      error instanceof Error ? error : undefined,;"
      { message: 'CartContextTester: useCart() FAILED!' },'
    );
    return (;
      <div'
        style={{;
          position: 'fixed',;
          top: '10px',;
          left: '10px',;
          backgroundColor: 'red',;
          color: 'white',;
          padding: '5px',;
          zIndex: 9999,;"
        }};"
      >;"
        CartContextTester: "FAILED - {(error as Error).message"};
      </div>;
    );"
  };";"
};"
;"
interface MobileAppProps {"
  children: "React.ReactNode"
}
=======
    );""
  } catch {;";""
    logErrorToProduction(;";";""
      error instanceof Error ? error : String(error),;";";";""
      error instanceof Error ? error : undefined,;";";";";""
      { message: 'CartContextTester: useCart() FAILED!' },;''
    );
    return (;
      <div;''
        style={{;;
          position: 'fixed',;;'
          top: '10px',;;'
          left: '10px',;;'
          backgroundColor: 'red',;;'
          color: 'white',;;'
          padding: '5px',;;'
          zIndex: "9999",;";";""
        }};";";";""
      >;";";";";""
        CartContextTester: "FAILED - {(error as Error).message"};"
      </div>;
    );""
  };";""
};";";""
;";";";""
interface MobileAppProps {;";";";";""
  children: "React.ReactNode;";"
};
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
export function MobileApp(): unknown {): unknown {): unknown {): unknown {): unknown {{ children }: MobileAppProps) {;
  return (;
    <MobileThemeProvider>;
      <CartContextTester />;
<<<<<<< HEAD
      {children};"
    </MobileThemeProvider>;";"
  );"
};"
"
}"
}";"
}"
}"
=======
      {children};""
    </MobileThemeProvider>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
