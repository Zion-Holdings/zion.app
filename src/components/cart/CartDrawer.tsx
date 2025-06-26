import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import type { RootState, AppDispatch } from '@/store';
import { removeItem, updateQuantity } from '@/store/cartSlice';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { CartItem } from './CartItem';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function CartDrawer() {
  const router = useRouter();
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.08;
  
  // Only add shipping for physical items
  const hasPhysicalItems = items.some(item => 
    !item.type || item.type === 'physical' // Default to physical if type not specified
  );
  const shipping = hasPhysicalItems && subtotal <= 100 ? 15 : 0;
  const total = subtotal + tax + shipping;
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  // Pages where cart drawer should be hidden or auto-closed
  const restrictedPages = ['/checkout', '/cart', '/order-confirmation'];
  const isRestrictedPage = restrictedPages.some(page => router.pathname.startsWith(page));

  // Auto-close drawer when navigating to restricted pages
  useEffect(() => {
    if (isRestrictedPage && isOpen) {
      setIsOpen(false);
    }
  }, [router.pathname, isRestrictedPage, isOpen]);

  // Don't render the cart trigger on restricted pages
  if (isRestrictedPage) {
    return (
      <div className="relative p-1" aria-label="Cart">
        <ShoppingCart className="h-5 w-5 text-foreground/50" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary/50 text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button aria-label="Cart" className="relative p-1">
          <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-background border-t p-4 space-y-4 max-h-[80vh] overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle>Your Cart</DrawerTitle>
        </DrawerHeader>
        {items.length === 0 ? (
          <>
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                <Link href="/cart">View Cart</Link>
              </Button>
              <Button disabled>Checkout</Button>
            </div>
          </>
        ) : (
          <>
            <ul className="space-y-3">
              {items.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={id => {
                    const itemToRemove = items.find(i => i.id === id);
                    dispatch(removeItem(id));
                    if (itemToRemove) {
                      toast({
                        title: "Item removed",
                        description: `${itemToRemove.name} has been removed from your cart`,
                      });
                    }
                  }}
                  onUpdateQuantity={(id, qty) => dispatch(updateQuantity({ id, quantity: qty }))}
                />
              ))}
            </ul>
            <div className="border-t pt-2 text-sm space-y-1">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between font-semibold border-t pt-1"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                <Link href="/cart">View Cart</Link>
              </Button>
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link href="/checkout">Checkout</Link>
              </Button>
            </div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
