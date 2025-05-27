import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { selectCartCount } from '@/store/cartSlice';
import { cn } from '@/lib/utils';

export function CartIcon({ className }: { className?: string }) {
  const count = useAppSelector(selectCartCount);
  return (
    <Link to="/cart" className={cn('relative', className)} data-cy="cart-link" aria-label="cart">
      <ShoppingCart className="w-6 h-6" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}
