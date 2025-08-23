
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from 'lucide-react';


interface EmptyFraudStateProps {
  hasFilters: boolean;
  onResetFilters: () => void;
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters, 
  onResetFilters 
}) => {
  return (
    <div className="text-center py-12">
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium">No fraud flags found</h3>
      <p className="text-muted-foreground mb-6">
        {hasFilters
          ? "Try adjusting your filters"
          : "You don't have any fraud flags yet"}
      </p>
      {hasFilters && (
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
      )}
    </div>
  );
};
