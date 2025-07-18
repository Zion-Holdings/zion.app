export async function triggerTraining(): unknown {) {;
  const res: unknown unknown = await fetch('/api/zion-gpt/train', { method: 'POST' });
  if (!res.ok) {;
    const err: unknown unknown = await res.text();
    throw new Error(err);
  };
  return res.json();
};
'