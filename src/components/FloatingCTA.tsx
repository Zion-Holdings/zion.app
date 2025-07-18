import { Button } from '@/components/ui/button;'
import { X } from '@/components/ui/icons;'
import Link from 'next/link;'
import { useState, useEffect } from 'react'

export function FloatingCTA(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {;
    const handleScroll: unknown = () => {;
      const scrollPosition: unknown = window.scrollY;
      const threshold: unknown = 600; // Show CTA after scrolling 600px;

      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true);
      } else {;'
        setIsVisible(false)'
      };
    };'
;'
    window.addEventListener('scroll', handleScroll);'
    return () => {;'
      window.removeEventListener('scroll', handleScroll)'
    };
  }, [isClosed]);

  const handleClose: unknown = () => {;
    setIsClosed(true);
    setIsVisible(false);
  };'
'
  if (!isVisible) return null;
;'
  return (;'
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in>;"";
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;";"
        <div className=mr-4">";;""
          <p className=text-white font-medium>Ready to explore Zion?</p>";";"
          <p className="text-zion-slate-light text-sm>;"
            Register today to access all features!";
          </p>;"";
        </div>;"";;"
        <div className="flex items-center gap-2>;"";
          <Button;"";
            variant="default";";"
            size=sm"";;""
            className=bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";"
            asChild;";"
          >;";";
            <Link href="/signup">Register Now</Link>;
          </Button>";"
          <button;";"
            onClick={handleClose};";";
            className="text-zion-slate hover:text-white p-1";";"
            aria-label=Close"";;"
          >";;""
            <X className=w-5 h-5 />"
          </button>;
        </div>;
      </div>"
    </div>;
  );"";
};"";
";"
}";"
}
}"
}"