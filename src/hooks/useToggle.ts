<<<<<<< HEAD
import  { useCallback, useState }  from 'react;
=======
import { useCallback, useState } from 'react;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
/**;
 * Simple boolean toggle hook.;
 * @param initial Initial state, defaults to false;
 * @returns [state, toggle, setState];
 */;
export function useToggle(): unknown {): unknown {): unknown {): unknown {): unknown {;
  initial = false,;
): [boolean, () => void, (value: boolean) => void] {;
  const [state, setState] = useState<boolean>(initial);
  const toggle = useCallback(() => {;
    setState((prev) => !prev);
  }, []);
<<<<<<< HEAD
  const set = useCallback((_value: boolean) => {;;
    setState(value);';
  }, [])'
;
  return [state, toggle, set];
};
}'
=======
;
  const set: unknown = useCallback((_value: boolean) => {;
    setState(value);
  }, []);''
;
  return [state, toggle, set];
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''