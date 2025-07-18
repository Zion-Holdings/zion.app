import React from 'react;
import { MobileThemeProvider } from './theme/MobileThemeProvider'
import { logErrorToProduction } from '@/utils/productionLogger'
import { useCart } from '@/context/CartContext'
import { logInfo } from '@/utils/productionLogger'

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
          zIndex: 9999,;';;