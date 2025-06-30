import React, { useState } from 'react';
import axios from 'axios';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { logError } from '@/utils/productionLogger';
import { useState } from 'react'; // Only useState is needed from React

const CheckoutTestPage = () => {
  // const [loading, setLoading] = useState(false); // loading is unused
  const [, setLoading] = useState(false); // Keep setLoading if used, otherwise remove both
  // const [testResults, setTestResults] = useState({}); // testResults is unused

  // Use real marketplace products for testing
  // const testProducts = MARKETPLACE_LISTINGS.slice(0, 3); // testProducts is unused

  const handleCheckout = async () => {
    setLoading(true);
    const cart = [{ title: 'Test Product', price: 1.00, quantity: 1 }];
    try {
      const { data } = await axios.post('/api/checkout-session', { 
        cartItems: cart,
        customer_email: 'test@example.com'
      });
      if (data.sessionId) {
        alert('✅ Checkout session created successfully! In production, you would be redirected to Stripe.');
        setTestResults(prev => ({ ...prev, checkout: 'success' }));
      }
    } catch (err) {
      logError('Checkout error:', { data: err });
      alert('❌ Checkout test failed. Check console for details.');
      setTestResults(prev => ({ ...prev, checkout: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  // const testPaymentIntent = async () => { // testPaymentIntent is unused
  //   setLoading(true);
  //   try {
  //     const { data } = await axios.post('/api/create-payment-intent', {
  //       amount: 50.00,
  //       userId: 'test-user'
  //     });
  //     if (data.clientSecret) {
  //       alert('✅ Payment intent created successfully!');
  //       // setTestResults(prev => ({ ...prev, paymentIntent: 'success' })); // testResults is unused
  //     }
  //   } catch (err) {
  //     logError('Payment intent error:', { data: err });
  //     alert('❌ Payment intent test failed. Check console for details.');
  //     // setTestResults(prev => ({ ...prev, paymentIntent: 'error' })); // testResults is unused
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Test Product Checkout</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px auto', maxWidth: '300px' }}>
        <h2>Dummy Product</h2>
        <p>A fantastic product for testing purposes.</p>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Price: $1.00</p>
        <button
          onClick={handleCheckout}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Buy Now (Test)
        </button>
      </div>
      <p><small>This is a test checkout flow using Stripe test mode. No real charges will be made.</small></p>
    </div>
  );
};

export default CheckoutTestPage;
