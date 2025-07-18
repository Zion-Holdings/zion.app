<<<<<<< HEAD
import React from 'react';;
import { useSelector } from 'react-redux;;
import Link from 'next/link;;
import type { RootState } from '@/store;;
import { ShoppingCart } from 'lucide-react;'
;;
import { useAuth } from '@/hooks/useAuth;;
import { LoginModal } from '@/components/auth/LoginModal;''

export function CartDrawer(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const items: unknown = useSelector((s: RootState) => s.cart.items);''
  const count: unknown "unknown = items.reduce((sum", i) => sum + i.quantity, 0);"
=======
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import type { RootState } from '@/store'
import { ShoppingCart } from 'lucide-react'

import { useAuth } from '@/hooks/useAuth'
import { LoginModal } from '@/components/auth/LoginModal'
'
export function CartDrawer(): ;
  const items = useSelector((s: RootState) => s.cart.items)'
  const count: items.reduce((sum, i) => sum + i.quantity, 0)
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  const { _isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleClick = (_e: React.MouseEvent) => {;
    if (!isAuthenticated) {;
      e.preventDefault();
      setLoginOpen(true);
    };
<<<<<<< HEAD
  };""
;";""
  return (;";";""
    <>;";";";""
      <Link;;
        href="/cart";";";";";""
        aria-label="Cart";";";";";""
        className="relative p-1";";";""
        onClick={handleClick};";";";""
      >;";";";";""
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />;";";";""
        {count > 0 && (;";";";";""
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">;"
=======
  }"
;"
  return (;";"
    <>;";"
      <Link
        href=/cart"""
        aria-label=Cart"
        className="relative p-1;""
        onClick={handleClick};""
      >;"";
        <ShoppingCart className=h-5 w-5 text-foreground hover:text-primary" />"
        {count > 0 && (";""
          <span className=absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center>"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
            {count};
          </span>)};
      </Link>;
<<<<<<< HEAD
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;""
    </>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />"
    </>;
  );"";
};"";
";"
}";"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
