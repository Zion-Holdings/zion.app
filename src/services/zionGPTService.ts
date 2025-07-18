<<<<<<< HEAD
export async function triggerTraining(): ;
  const res = await fetch('/api/zion-gpt/train', { method: 'POST' });
  if (!res.ok) {;
    const err = await res.text();
    throw new Error(err)'
  };
  return res.json();
};
}'
=======
export async function triggerTraining(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const res: unknown = await fetch('/api/zion-gpt/train', { method: 'POST' });'
  if (!res.ok) {;
    const err: unknown = await res.text();
    throw new Error(err);''
  };
  return res.json();
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''