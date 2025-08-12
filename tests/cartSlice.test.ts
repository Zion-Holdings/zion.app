import { describe, it, expect } from 'vitest';
import cartReducer, { addItem, removeItem, clear } from '@/store/cartSlice';

describe('cartSlice reducers', () => {
  it('adds new item', () => {
    const state = cartReducer({ items: [] }, addItem({ id: '1', title: 'Prod', price: 5 }));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toMatchObject({ id: '1', name: 'Prod', price: 5, quantity: 1 });
  });

  it('increments quantity for existing item', () => {
    const initial = { items: [{ id: '1', name: 'Prod', price: 5, quantity: 1 }] };
    const state = cartReducer(initial, addItem({ id: '1', title: 'Prod', price: 5 }));
    expect(state.items[0].quantity).toBe(2);
  });

  it('removes item', () => {
    const initial = { items: [{ id: '1', name: 'Prod', price: 5, quantity: 1 }] };
    const state = cartReducer(initial, removeItem('1'));
    expect(state.items).toHaveLength(0);
  });

  it('clears cart', () => {
    const initial = { items: [{ id: '1', name: 'Prod', price: 5, quantity: 1 }] };
    const state = cartReducer(initial, clear());
    expect(state.items).toHaveLength(0);
  });
});
