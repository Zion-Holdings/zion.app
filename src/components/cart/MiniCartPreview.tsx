import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import type { RootState } from '@/store';

export function MiniCartPreview() {
  const { t } = useTranslation();
  const items = useSelector((s: RootState) => s.cart.items);
  const preview = items.slice(-3);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return <p className="text-sm text-muted-foreground">{t('cart.empty_preview')}</p>;
  }

  return (
    <div className="text-sm w-56">
      <ul className="space-y-1 mb-2">
        {preview.map(item => (
          <li key={item.id} className="flex justify-between">
            <span>
              {item.name} x{item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
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
