import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LoginCard } from "./login";

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  message?: string;
}

export function LoginModal({ isOpen, onOpenChange, message }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light text-white sm:max-w-md">
        {message && (
          <DialogHeader>
            <DialogTitle>{message}</DialogTitle>
          </DialogHeader>
        )}
        <LoginCard />
      </DialogContent>
    </Dialog>
  );
}
