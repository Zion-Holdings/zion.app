export type OrderStatus =
  | 'pending'
  | 'in_escrow'
  | 'released'
  | 'disputed'
  | 'refunded'
  | 'cancelled';

const transitions: Record<OrderStatus, OrderStatus[]> = {
  pending: ['in_escrow', 'cancelled'],
  in_escrow: ['released', 'disputed', 'refunded'],
  released: [],
  disputed: ['released', 'refunded'],
  refunded: [],
  cancelled: [],
};

export function canTransition(
  current: OrderStatus,
  next: OrderStatus
) {
  return transitions[current]?.includes(next);
}
