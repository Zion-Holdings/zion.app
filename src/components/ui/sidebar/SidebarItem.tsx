
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
}

export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
  return (
    <div
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md",
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
