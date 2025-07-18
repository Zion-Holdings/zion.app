<<<<<<< HEAD
import React from 'react';
import Link from 'next/link // Changed from react-router-dom'
import { useRouter } from 'next/router // Added for Next.js'
import { cn } from '@/lib/utils'
'
export interface NavLinkProps {'
  href: string
  className?: string'
  children: React.ReactNode'
  activeClassName?: string // Optional: "for a more explicit active class
}

=======
import React from 'react';';
import Link from 'next/link // Changed from react-router-dom;'';
import { useRouter } from 'next/router // Added for Next.js;'';
import { cn } from '@/lib/utils'';
;'';
export interface NavLinkProps {''
  href: string;
  className?: string;''
  children: React.ReactNode;''
  activeClassName?: string; // Optional: "for a more explicit active class"
};
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
export function NavLink(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  href,;
  className,;
  children,;
  activeClassName,;
}: NavLinkProps) {;
<<<<<<< HEAD
  const router = useRouter()"
  const isActive = router.pathname === href || router.asPath === href;"
;";"
  // Combine base className, active state className, and passed className;";"
  const combinedClassName = cn(;";""
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zion-purple','
    className, // Original className passed in'
    isActive && (activeClassName || 'border-b-2 border-green-500'), // Use activeClassName if provided, else default'
=======
  const router: unknown = useRouter()""
  const isActive: unknown = router.pathname === href || router.asPath === href;""
;";""
  // Combine base className, active state className, and passed className;";""
  const combinedClassName: unknown = cn(;";"""
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zion-purple',;''
    className, // Original className passed in;''
    isActive && (activeClassName || 'border-b-2 border-green-500'), // Use activeClassName if provided, else default''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  );

  return (;
    <Link href={href} legacyBehavior passHref>;
      <a className={combinedClassName}>{children}</a>;
<<<<<<< HEAD
    </Link>)'
}'

export default NavLink;

}'
=======
    </Link>);''
}''
;
export default NavLink;

};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''