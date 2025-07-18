<<<<<<< HEAD
import { useEffect, useState } from 'react''';
import { ArrowUp } from '@/components/ui/icons'';
;
export function BackToTopButton(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const [visible, setVisible] = useState(false);

  useEffect(() => {;''
    const updateVisibility: unknown = () => {''
      setVisible(window.scrollY > 400);
    };''
    updateVisibility();''
    window.addEventListener('scroll', updateVisibility);''
    return () => window.removeEventListener('scroll', updateVisibility)''
  }, []);
;''
  const scrollToTop: unknown = () => {;''
    const opts: unknown "ScrollToOptions = { top: 0, behavior: 'smooth' }''
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);''
  }''

  return (;''
    <button;''
      aria-label=Back to top
      onClick={scrollToTop};
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${;;""
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none''
      }`};''
    >;''
      <ArrowUp className="h-5 w-5 />"
    </button>;"""
  );;""
}";;""
";""
}";"
}"""
}""
}""
=======
import { useEffect, useState } from 'react''
import { ArrowUp } from '@/components/ui/icons'

export function BackToTopButton(): ;
  const [visible, setVisible] = useState(false);

  useEffect(() => {'
    const updateVisibility = () => {'
      setVisible(window.scrollY > 400);
    }'
    updateVisibility()'
    window.addEventListener('scroll', updateVisibility)'
    return () => window.removeEventListener('scroll', updateVisibility)'
  }, []);
'
  const scrollToTop = () => {'
    const opts: unknown "ScrollToOptions = { top: 0, behavior: 'smooth' }'
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts)'
  }'

  return ('
    <button'
      aria-label=Back to top
      onClick={scrollToTop};
      className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${;"
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
      }`}'
    >'
      <ArrowUp className="h-5 w-5 />"
    </button>;""
  );"
}";"
";"
}";
}""
}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
