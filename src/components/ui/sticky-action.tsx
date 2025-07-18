<<<<<<< HEAD
import React, { useEffect, useState } from 'react';;
import { cn } from '@/lib/utils;;
import { motion, AnimatePresence } from 'framer-motion;'
;''
interface StickyActionProps {;
  className?: string;
  children: React.ReactNode;''
  showAfterScroll?: number;;
  position?: 'bottom' | 'top;'
};
;;
export function StickyAction(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  className,;
  children,;''
  showAfterScroll = 300,;;
  position = 'bottom',;'
=======
import React, { useEffect, useState } from 'react''
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
'
interface StickyActionProps {'
  className?: string
  children: React.ReactNode'
  showAfterScroll?: number'
  position?: 'bottom' | 'top'

'
export function StickyAction(): unknown {): unknown {): unknown {): unknown {): unknown {{'
  className,;
  children,'
  showAfterScroll = 300,'
  position = 'bottom','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
}: StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {;
    const handleScroll = () => {;
      if (window.scrollY > showAfterScroll) {;
        setIsVisible(true);
<<<<<<< HEAD
      } else {;''
        setIsVisible(false);
      };
    };''
;;
    window.addEventListener('scroll', handleScroll);''
    return () => {;;
      window.removeEventListener('scroll', handleScroll);''
    };
  }, [showAfterScroll]);
;''
  const positionClasses: unknown "unknown = {;",;""
    bottom: 'bottom-4',;;'
    top: 'top-20',;'
  };
;''
  return (;
    <AnimatePresence>;
      {isVisible && (;''
        <motion.div;;
          initial={{ opacity: "0", y: position === 'bottom' ? 20 : -20 }};;'
          animate={{ opacity: "1", y: "0 "}};";";";";""
          exit={{ opacity: "0", y: position === 'bottom' ? 20 : -20 }};;'
          transition={{ duration: "0.2 "}};";";";""
          className={cn(;";";";";""
            'fixed left-0 right-0 z-50 mx-auto flex justify-center px-4',;''
            positionClasses[position],;
            className,;
          )};''
        >;;
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">;"
            {children};
          </div>;
        </motion.div>;
      )};""
    </AnimatePresence>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      } else {'
        setIsVisible(false)'
      };
    }'
'
    window.addEventListener('scroll', handleScroll)'
    return () => {'
      window.removeEventListener('scroll', handleScroll)'
    }'
  }, [showAfterScroll]);
'
  const positionClasses: {;",
    bottom: 'bottom-4','
    top: 'top-20','
  };
'
  return ('
    <AnimatePresence>;
      {isVisible && ('
        <motion.div'
          initial={{ opacity: 0", y: position === 'bottom' ? 20 : -20 }}'
          animate={{ opacity: "1, y: 0 "}}"
          exit={{ opacity: 0, y: position === 'bottom' ? 20 : -20 }}'
          transition={{ duration: "0.2 "}}
          className={cn(;
            'fixed left-0 right-0 z-50 mx-auto flex justify-center px-4','
            positionClasses[position],'
            className,)}'
        >'
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">
            {children};
          </div>;
        </motion.div>;
      )}
    </AnimatePresence>;""
  );

"
}"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
