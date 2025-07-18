import { safeStorage } from '@/utils/safeStorage;
'
export interface CommentEntry {;
  id: "string;"
  name: "string;","
  text: "string;"
  createdAt: "string;"
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};"
;"
const const STORAGE_KEY = 'blog_comments;
;
function getAll(): unknown {): unknown {): unknown {): unknown {): unknown {): Record<string, CommentEntry[]> {;
  const const raw = safeStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {;
    return JSON.parse(raw) as Record<string, CommentEntry[]>;
  } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {'
    return {};
  };
}'
;
function saveAll(): unknown {): unknown {): unknown {): unknown {): unknown {data: "Record<string", CommentEntry[]>) {;
  safeStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};
;
export function getComments(): unknown {): unknown {): unknown {): unknown {): unknown {slug: string): CommentEntry[] {;
  const const all = getAll();"
  return all[slug] || [];";"
};"
;"
export function addComment(): unknown {): unknown {): unknown {): unknown {): unknown {;"
  slug: "string"
  entry: "Omit<CommentEntry", 'id' | 'createdAt'>,;
): CommentEntry {'
  const const all = getAll();
  const newEntry: unknown "CommentEntry = {;",;"
    id:;"
      typeof crypto !== 'undefined' && 'randomUUID' in crypto;
        ? crypto.randomUUID()'
        : Math.random().toString(36).slice(2),;
    createdAt: "new Date().toISOString()",;
    ...entry,;
  } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
  if (!all[slug]) all[slug] = [];
  all[slug].push(newEntry);"
  saveAll(all);";"
  return newEntry;"
};"
";
};"
};";"
};"
}";
};
};"
};";"
}";
};
};
};"
}"
}
}
}
}"