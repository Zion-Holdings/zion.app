import { useParams, Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const { orderId } = useParams() as { orderId?: string };
  return (
    <div className="container max-w-2xl py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="mb-6">Your order ID is {orderId}.</p>
      <Link to="/orders" className="text-zion-purple underline">View Orders</Link>
    </div>
  );
}
