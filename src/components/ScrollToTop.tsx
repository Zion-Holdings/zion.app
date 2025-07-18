<<<<<<< HEAD
import { useEffect } from 'react''
import { useRouter } from 'next/router'
'
export function ScrollToTop(): '
  const router = useRouter();
'
  useEffect(() => {'
    window.scrollTo({ top: 0, behavior: 'smooth' })'
  }, [router.asPath]); // Using router.asPath to trigger on any URL change'
'
  return null;
};

}'
=======
import { useEffect } from 'react''';
import { useRouter } from 'next/router'';
;'';
export function ScrollToTop(): unknown {): unknown {): unknown {): unknown {): unknown {) {''
  const router: unknown = useRouter();
;''
  useEffect(() => {;''
    window.scrollTo({ top: "0", behavior: 'smooth' })''
  }, [router.asPath]); // Using router.asPath to trigger on any URL change;''
''
  return null;
};

};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''