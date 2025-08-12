import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import type { RootState } from '@/store';

export function MiniCartPreview() {
  const { t } = useTranslation();
  const items = useSelector((s: RootState) => s.cart.items);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return <p className="text-sm text-muted-foreground">{t('cart.empty_preview')}</p>;
  }

  const shouldScroll = items.length > 3;

  return (
    <div className="text-sm w-56">
      {/* Show count if more than 3 items */}
      {shouldScroll && (
        <div className="text-xs text-muted-foreground mb-2">
          {items.length} items in cart
        </div>
      )}
      
      <ul 
        className={`space-y-1 mb-2 ${
          shouldScroll ? 'max-h-24 overflow-y-auto pr-2' : ''
        }`}
      >
        {items.map(item => (
          <li key={item.id} className="flex justify-between">
            <span className="truncate mr-2">
              {item.name} x{item.quantity}
            </span>
            <span className="flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex justify-between border-t pt-1 font-medium">
        <span>{t('cart.subtotal')}</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
