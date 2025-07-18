import { Card } from '@/components/ui/card';'
import { RefreshCcw, Sparkles } from '@/components/ui/icons';'
import { Button } from '@/components/ui/button';
;
export interface EmptyMatchesCardProps {;'
  onRefresh: "() => void;",;"
  isProcessing: "boolean;";
};
;
export function EmptyMatchesCard(): unknown {{;
  onRefresh,;
  isProcessing,;
}: EmptyMatchesCardProps) {;
  return (;"
    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">;"
      <div className="mb-4 flex justify-center">;"
        <Sparkles className="h-12 w-12 text-muted-foreground" />;
      </div>;"
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;"
      <p className="text-muted-foreground mb-6">;
        Run AI matching to find talents that match this job&apos;s requirements.;
      </p>;"
      <Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">;
        {isProcessing ? (;
          <>;"
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;
            Processing...;
          </>;
        ) : (;
          <>;"
            <Sparkles className="mr-2 h-4 w-4" />;
            Find AI Matches;
          </>;
        )};
      </Button>;
    </Card>;
  );
};
"