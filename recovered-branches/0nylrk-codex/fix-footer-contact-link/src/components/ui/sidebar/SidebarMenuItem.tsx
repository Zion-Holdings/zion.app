
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenuItem({ className, children, ...props }: SidebarMenuItemProps) {
  return (
    <li 
      className={cn("", className)} 
      {...props}
    >
      {children}
    </li>
  );
}
