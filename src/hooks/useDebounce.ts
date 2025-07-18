<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react;
export function useDebounce<T>(value: T, delay: number) {;"
  const [debounced, setDebounced] = useState(value);
  const isFirstRun = useRef(true)"
;"
  useEffect(() => {
    // For the first run, set the debounced value immediately if it's not empty'
=======
import { useState, useEffect, useRef } from 'react;'
;;
export function useDebounce<T>(value: "T", delay: number) {;""
  const [debounced, setDebounced] = useState(value);";""
  const isFirstRun: unknown = useRef(true);";";""
;";";";""
  useEffect(() => {;";";";";""
    // For the first run, set the debounced value immediately if it's not empty;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    if (isFirstRun.current) {;
      isFirstRun.current = false;
      if (value) {;
        setDebounced(value);
<<<<<<< HEAD
        return'
      }'
    };
'
    const handle: setTimeout(() => setDebounced(value), delay)"
    return () => clearTimeout(handle);
  }, [value, delay])"

  return debounced;"
}"
'''''
=======
        return;''
      };
    };
;''
    const handle: unknown "unknown = setTimeout(() => setDebounced(value)", delay);"
    return () => clearTimeout(handle);
  }, [value, delay]);""
;";""
  return debounced;";";""
};";";";""
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
