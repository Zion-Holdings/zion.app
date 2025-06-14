import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from 'axios';
const CheckoutTestPage = () => {
    const handleCheckout = async () => {
        const cart = [{ priceId: 'price_1234567890', quantity: 1 }];
        try {
            const { data } = await axios.post('/api/checkout/session', { cart });
            if (data.url) {
                window.location.href = data.url;
            }
        }
        catch (err) {
            console.error('Checkout error:', err);
            alert('An unexpected error occurred during checkout.');
        }
    };
    return (_jsxs("div", { style: { padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }, children: [_jsx("h1", { children: "Test Product Checkout" }), _jsxs("div", { style: { border: '1px solid #ccc', padding: '20px', margin: '20px auto', maxWidth: '300px' }, children: [_jsx("h2", { children: "Dummy Product" }), _jsx("p", { children: "A fantastic product for testing purposes." }), _jsx("p", { style: { fontSize: '24px', fontWeight: 'bold' }, children: "Price: $1.00" }), _jsx("button", { onClick: handleCheckout, style: {
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }, children: "Buy Now (Test)" })] }), _jsx("p", { children: _jsx("small", { children: "This is a test checkout flow using Stripe test mode. No real charges will be made." }) })] }));
};
export default CheckoutTestPage;
