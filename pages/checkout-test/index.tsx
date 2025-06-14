import React from 'react';
import axios from 'axios';

const CheckoutTestPage = () => {
  const handleCheckout = async () => {
    const cart = [{ priceId: 'price_1234567890', quantity: 1 }];
    try {
      const { data } = await axios.post('/api/checkout/session', { cart });
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('An unexpected error occurred during checkout.');
    }
  };

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
