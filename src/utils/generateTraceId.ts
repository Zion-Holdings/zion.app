export function generateTraceId(): unknown {): unknown {): unknown {): unknown {): unknown {): string {;
  if (;
<<<<<<< HEAD
    typeof crypto !== 'undefined' &&;
    typeof crypto.randomUUID === 'function;
  ) {;
    return crypto.randomUUID();
  }'
  const random = Math.random().toString(36).substring(2);
  return random + Date.now().toString(36);
};
}'
=======
    typeof crypto !== 'undefined' &&;;'
    typeof crypto.randomUUID === 'function;'
  ) {;
    return crypto.randomUUID();
  };''
  const random: unknown = Math.random().toString(36).substring(2);
  return random + Date.now().toString(36);
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''