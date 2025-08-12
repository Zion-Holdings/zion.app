
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';

import { NavigationButtonsProps } from "./types";

export const NavigationButtons = ({
  onBack,
  onNext,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
  isLoading = false,
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between">
      {onBack && (
        <Button variant="outline" onClick={onBack}>
          {backLabel}
        </Button>
      )}
      {onNext && (
        <Button onClick={onNext} disabled={isNextDisabled || isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {nextLabel}
        </Button>
      )}
    </div>
  );
};
