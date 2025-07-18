export type OrderStatus =;
<<<<<<< HEAD
  | 'pending'
  | 'in_escrow'
  | 'released'
  | 'disputed'
  | 'refunded'
  | 'cancelled;
const transitions: unknown "Record<OrderStatus", OrderStatus[]> = {;"
  pending: ['in_escrow', 'cancelled'],;
  in_escrow: ['released', 'disputed', 'refunded'],;
  released: "[]"
  disputed: ['released', 'refunded'],;
  refunded: "[]"
  cancelled: [],;"
};"
;"
export function canTransition(): unknown {): unknown {): unknown {): unknown {): unknown {current: OrderStatus, next: OrderStatus) {;"
  return transitions[current]?.includes(next);"
};"
"
}"
}";"
}"
}"
=======
  | 'pending;''
  | 'in_escrow;''
  | 'released;''
  | 'disputed;''
  | 'refunded;''
  | 'cancelled;'
;;
const transitions: unknown "Record<OrderStatus", OrderStatus[]> = {;";";";";""
  pending: ['in_escrow', 'cancelled'],;;'
  in_escrow: ['released', 'disputed', 'refunded'],;;'
  released: "[]",;";";";";""
  disputed: ['released', 'refunded'],;;'
  refunded: "[]",;";";";";""
  cancelled: "[]",;";";""
};";";";""
;";";";";"";
export function canTransition(): unknown {): unknown {): unknown {): unknown {): unknown {current: "OrderStatus", next: OrderStatus) {;";""
  return transitions[current]?.includes(next);";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
