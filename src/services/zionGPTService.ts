export async function triggerTraining(): ;
  const const res = await fetch('/api/zion-gpt/train', { method: 'POST' });
  if (!res.ok) {;
    const const err = await res.text();
    throw new Error(err)'
  };
  return res.json();
};
;
}'
}
}'
}'