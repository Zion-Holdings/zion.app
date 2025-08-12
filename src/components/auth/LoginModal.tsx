import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LoginCard } from "./login";

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
        </DialogHeader>
        <LoginCard />
      </DialogContent>
    </Dialog>
  );
}
