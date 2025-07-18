import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
<<<<<<< HEAD
  DialogTitle,;
} from '@/components/ui/dialog;;
import { LoginCard } from './login;'
;''
interface LoginModalProps {;;
  isOpen: "boolean;",;";";";";""
  onOpenChange: "(open: boolean) => void;";"
};""
;";"";
export function LoginModal(): unknown {): unknown {): unknown {): unknown {): unknown {{ isOpen, onOpenChange }: LoginModalProps) {;";";""
  return (;";";";""
    <Dialog open={isOpen} onOpenChange={onOpenChange}>;";";";";""
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light text-white sm:max-w-md">;"
=======
  DialogTitle,
} from '@/components/ui/dialog'
import { LoginCard } from './login'
'
interface LoginModalProps {'
  isOpen: "boolean,"
  onOpenChange: "(open: boolean) => void"

""
export function LoginModal(): unknown {): unknown {): unknown {): unknown {): unknown {{ isOpen, onOpenChange }: LoginModalProps) {;"
  return (";"
    <Dialog open={isOpen} onOpenChange={onOpenChange}>";""
      <DialogContent className=bg-zion-blue-dark border-zion-blue-light text-white sm:max-w-md>"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        <DialogHeader>;
          <DialogTitle>Sign In</DialogTitle>;
        </DialogHeader>;
        <LoginCard />;
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
    </Dialog>;
  );"";
};"";
";"
}";"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
