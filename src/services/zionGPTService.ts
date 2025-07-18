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
}
}''
}''