import React from 'react';
import { getStripe } from '@/utils/getStripe'; // Assuming getStripe is in this location

const CheckoutTestPage = () => {
  const handleCheckout = async () => {
    // TODO: Get the actual priceId for the dummy product from Stripe
    const priceId = 'price_1234567890'; // Replace with a real test price ID

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          quantity: 1,
          // Optional: Add customer_email if needed for testing
          // customer_email: 'test@example.com',
          successUrl: `${window.location.origin}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`, // Or your desired success URL structure
          cancelUrl: `${window.location.origin}/checkout-test`, // Redirect back to this page on cancel
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        console.error('Error creating checkout session:', error);
        alert(`Error: ${error}`); // Or handle error more gracefully
        return;
      }

      if (sessionId) {
        const stripe = await getStripe();
        if (stripe) {
          const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
          if (stripeError) {
            console.error('Stripe redirect error:', stripeError);
            alert(`Stripe Error: ${stripeError.message}`); // Or handle error
          }
        } else {
          console.error('Stripe.js failed to load.');
          alert('Error: Could not connect to payment gateway.');
        }
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
