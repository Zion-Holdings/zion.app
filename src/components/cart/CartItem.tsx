import { CartItem as CartItemType } from '@/types/cart';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
  onRemove?: (id: string) => void;
  onUpdateQuantity?: (id: string, qty: number) => void;
}

export function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  return (
    <li className="flex justify-between items-center">
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={1}
          value={item.quantity}
          onChange={e =>
            onUpdateQuantity?.(item.id, parseInt(e.target.value || '1', 10))
          }
          className="w-16 bg-transparent border border-input rounded p-1 text-center"
        />
        <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>
          Remove
        </Button>
      </div>
    </li>
  );
}
