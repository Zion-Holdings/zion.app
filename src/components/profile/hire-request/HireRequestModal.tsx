<<<<<<< HEAD
import React from 'react;;
import {;''
  Dialog,;
  DialogContent,;
  DialogHeader,;''
  DialogTitle,;;
} from '@/components/ui/dialog;;
import { HireRequestForm } from './HireRequestForm;;
import type { TalentProfile } from '@/types/talent;;
import type { UserProfile } from '@/types/auth;'
;''
interface HireRequestModalProps {;;
  talent: "TalentProfile | null;",;";";";";""
  isOpen: "boolean;",;"
  onClose: () => void;
  userDetails?: UserProfile;
};

=======
import React from 'react'
import {'
  Dialog,'
  DialogContent,
  DialogHeader,'
  DialogTitle,'
} from '@/components/ui/dialog'
import { HireRequestForm } from './HireRequestForm'
import type { TalentProfile } from '@/types/talent'
import type { UserProfile } from '@/types/auth'
'
interface HireRequestModalProps {'
  talent: TalentProfile | null
  isOpen: boolean,"
  onClose: () => void
  userDetails?: UserProfile

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function HireRequestModal(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  talent,;
  isOpen,;
  onClose,;
  userDetails,;
}: HireRequestModalProps) {;
  const handleClose = () => {;
    onClose();
  };
<<<<<<< HEAD
;""
  if (!talent) return null;";""
;";";""
  return (;";";";""
    <Dialog open={isOpen} onOpenChange={handleClose}>;";";";";""
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">;";";";""
        <DialogHeader>;";";";";""
          <DialogTitle className="text-xl font-bold text-white">;"
            Hire {talent.full_name};
          </DialogTitle>;
        </DialogHeader>;

        <HireRequestForm;""
          talent={talent};";""
          onClose={handleClose};";";""
          {...(userDetails;";";";""
            ? {;";";";";""
                userDetails: "{;",;";";";";""
                  name: "userDetails.name",;";";";";""
                  email: "userDetails.email",;";";";";""
                  id: "userDetails.id",;"
=======

  if (!talent) return null;"
;"
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>;
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>;
          <DialogTitle className="text-xl font-bold text-white">
            Hire {talent.full_name};
          </DialogTitle>;
        </DialogHeader>;

        <HireRequestForm
          talent={talent};""
          onClose={handleClose};
          {...(userDetails
            ? {;"
                userDetails: {
                  name: "userDetails.name
                  email: userDetails.email"
                  id: "userDetails.id,
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                },;
              };
            : {})};
        />;
<<<<<<< HEAD
      </DialogContent>;""
    </Dialog>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </DialogContent>"
    </Dialog>;"
  );
}"
"

}"
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
