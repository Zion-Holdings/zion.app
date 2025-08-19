
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenu({ className, children, ...props }: SidebarMenuProps) {
  return (
    <ul 
      className={cn("space-y-1", className)} 
      {...props}
    >
      {children}
    </ul>
  );
}
