
import React from "react";
import { SeverityIndicator } from "@/components/ui/severity-indicator";

interface SeverityDisplayProps {
  severity: string;
}

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {
  return (
    <SeverityIndicator 
      severity={severity as "safe" | "suspicious" | "dangerous"} 
      showIcon={true}
      showText={true}
    />
  );
};
