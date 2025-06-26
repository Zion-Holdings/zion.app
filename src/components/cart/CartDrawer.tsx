import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import type { RootState } from '@/store';
import { ShoppingCart } from 'lucide-react';

export function CartDrawer() {
  const items = useSelector((s: RootState) => s.cart.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <Link href="/cart" aria-label="Cart" className="relative p-1">
      <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}
