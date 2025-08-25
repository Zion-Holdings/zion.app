import React from "react"
import { Toast } from "./toast"

export interface ToasterProps {
  className?: string;
}

export function Toaster({ className }: ToasterProps) {
  return (
    <div className={className}>
      {/* Toast notifications will be rendered here */}
    </div>
  );
}
