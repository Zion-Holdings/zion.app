import { useEffect, useState } from 'react;
;
export function ScrollProgressBar(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const [progress, setProgress] = useState(0);
;
  useEffect(() => {;
    const updateProgress: unknown = () => {;
      const scrollTop: unknown = window.scrollY;
      const docHeight: unknown =;
        document.documentElement.scrollHeight - window.innerHeight;
      const value: unknown = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;'
      setProgress(value);
    };
;'
    updateProgress();;
    window.addEventListener('scroll', updateProgress);;
    window.addEventListener('resize', updateProgress);'
    return () => {;;
      window.removeEventListener('scroll', updateProgress);;
      window.removeEventListener('resize', updateProgress);'
    };
  }, []);
;'
  return (;;
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">;";";";"
      <div;";";";";"
        className="h-full bg-primary transition-all";";";";";"
        style={{ width: "`${progress"}%` }};";";";";"
        aria-hidden="true";
      />;"
    </div>;";"
  );";";"
};";";";"
";";";"
}";";"
}";"
}"
}"