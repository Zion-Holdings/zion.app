import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectCartItems, selectCartSubtotal, updateQuantity } from '@/store/cartSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const dispatch = useAppDispatch();

  const handleQtyChange = (id: string, value: number) => {
    dispatch(updateQuantity({ id, quantity: value }));
  };

  return (
    <div className="min-h-screen bg-zion-blue p-6">
      <div className="max-w-xl mx-auto bg-zion-blue-dark rounded-lg p-6 text-white space-y-6">
        <h1 className="text-2xl font-bold">Cart</h1>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id} className="flex items-center justify-between gap-4">
                <span className="flex-1">{item.name}</span>
                <Input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={e => handleQtyChange(item.id, Number(e.target.value))}
                  className="w-20 text-black"
                />
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between font-semibold">
          <span>Subtotal</span>
          <span data-cy="subtotal">${subtotal.toFixed(2)}</span>
        </div>
        <Button className="w-full" asChild>
          <Link to="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
