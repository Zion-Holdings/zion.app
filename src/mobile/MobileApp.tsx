import React from "react";
import { MobileThemeProvider } from "./theme/MobileThemeProvider";
import {logErrorToProduction} from '@/utils/productionLogger';
import { useCart } from '@/context/CartContext';
import { logInfo } from '@/utils/productionLogger';


const CartContextTester = () => {
  try {
    const cart = useCart();
    logInfo('CartContextTester: useCart() successful', { data: cart });
    return (
      <div style={{ position: 'fixed', top: '10px', left: '10px', backgroundColor: 'lightgreen', padding: '5px', zIndex: 9999 }}>
        CartContextTester: OK
      </div>
    );
  } catch (error) {
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'CartContextTester: useCart() FAILED!' });
    return (
      <div style={{ position: 'fixed', top: '10px', left: '10px', backgroundColor: 'red', color: 'white', padding: '5px', zIndex: 9999 }}>
        CartContextTester: FAILED - {(error as Error).message}
      </div>
    );
  }
};

interface MobileAppProps {
  children: React.ReactNode;
}

export function MobileApp({ children }: MobileAppProps) {
  return (
    <MobileThemeProvider>
      <CartContextTester />
      {children}
    </MobileThemeProvider>
  );
}
