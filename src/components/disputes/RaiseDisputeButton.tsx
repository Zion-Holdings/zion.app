<<<<<<< HEAD
import React, { useState } from 'react';';
import { Button } from '@/components/ui/button;'';
import { ShieldAlert } from '@/components/ui/icons;';
import {;
  Dialog,;''
  DialogContent,;
  DialogHeader,;
  DialogTitle,;''
  DialogDescription,;;
} from '@/components/ui/dialog;'';
import { DisputeForm } from './DisputeForm;'';
import { useRouter } from 'next/router;'
;''
interface RaiseDisputeButtonProps {;
  projectId: string;
  milestoneId?: string;''
  variant?:;;
    | 'default;''
    | 'outline;''
    | 'secondary;''
    | 'destructive;''
    | 'ghost;''
    | 'link;''
  size?: 'default' | 'sm' | 'lg' | 'icon;'
  className?: string;
};''
;
export function RaiseDisputeButton(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  projectId,;''
  milestoneId,;;
  variant = 'outline',;'
=======
import React, { useState } from 'react''
import { Button } from '@/components/ui/button'
import { ShieldAlert } from '@/components/ui/icons'
import {;
  Dialog,'
  DialogContent,'
  DialogHeader,
  DialogTitle,'
  DialogDescription,'
} from '@/components/ui/dialog'
import { DisputeForm } from './DisputeForm'
import { useRouter } from 'next/router'
'
interface RaiseDisputeButtonProps {'
  projectId: string;
  milestoneId?: string'
  variant?:'
    | 'default'
    | 'outline'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string;
}'
'
export function RaiseDisputeButton(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  projectId,'
  milestoneId,'
  variant = 'outline','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  size,;
  className,;
}: RaiseDisputeButtonProps) {;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handleDisputeCreated = (_disputeId: string) => {;
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`);
  };

  return (;
    <>;
      <Button;
<<<<<<< HEAD
        variant={variant};''
        size={size};
        className={className};
        onClick={() => setIsDialogOpen(true)};''
      >;;
        <ShieldAlert className="h-4 w-4 mr-2" />;""
        Raise Dispute;";""
      </Button>;";";""
;";";";""
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;";";";";""
        <DialogContent className="sm:max-w-[550px]">;";""
          <DialogHeader>;";";""
            <DialogTitle>Raise a Dispute</DialogTitle>;";";";""
            <DialogDescription>;";";";";""
              Please provide details about the issue you're experiencing with;'
=======
        variant={variant}'
        size={size}'
        className={className};
        onClick={() => setIsDialogOpen(true)}'
      >'
        <ShieldAlert className="h-4 w-4 mr-2 />"
        Raise Dispute;""
      </Button>;"
";"
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>";""
        <DialogContent className=sm:max-w-[550px]>";"
          <DialogHeader>;"
            <DialogTitle>Raise a Dispute</DialogTitle>;";"
            <DialogDescription>;"
              Please provide details about the issue you're experiencing with'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
              this project.;
            </DialogDescription>;
          </DialogHeader>;

          <DisputeForm;
            projectId={projectId};
            {...(milestoneId ? { milestoneId } : {})};
            onDisputeCreated={handleDisputeCreated};
            onCancel={() => setIsDialogOpen(false)};
          />;
        </DialogContent>;
<<<<<<< HEAD
      </Dialog>;''
    </>;
  );
};
;
};''
}
}''
}''
=======
      </Dialog>'
    </>'
  );
};

}'

}'
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
