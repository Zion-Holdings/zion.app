import { CartItem as CartItemType } from '@/types/cart';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
  onRemove?: (id: string) => void;
  onUpdateQuantity?: (id: string, qty: number) => void;
}

export function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  return (
    <li className="flex items-center gap-4">
      <img
        src={item.image || '/placeholder.svg'}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
      </div>
      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={e =>
          onUpdateQuantity?.(item.id, parseInt(e.target.value || '1', 10))
        }
        className="w-16 bg-transparent border border-input rounded p-1 text-center"
      />
      <span className="w-20 text-right">
        ${(item.price * item.quantity).toFixed(2)}
      </span>
      <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>
        Remove
      </Button>
    </li>
  );
}
