import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Home, ShoppingBag, Users, User } from 'lucide-react';




import { cn } from "@/lib/utils";

export function BottomNavigation() {
  const router = useRouter();
  
  const navItems = [
    { path: "/mobile", icon: <Home />, label: "Home" },
    { path: "/mobile/marketplace", icon: <ShoppingBag />, label: "Marketplace" },
    { path: "/mobile/community", icon: <Users />, label: "Community" },
    { path: "/mobile/profile", icon: <User />, label: "Profile" },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between px-1 py-2 z-50">
      {navItems.map((item) => {
        const isActive = router.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            href={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 px-2",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon, { 
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground") 
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
