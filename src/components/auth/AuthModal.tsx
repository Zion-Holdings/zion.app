import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  returnUrl?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, returnUrl = '/marketplace' }) => {
  const router = useRouter();

  const handleLogin = () => {
    onClose();
    router.push(`/auth/login?returnTo=${encodeURIComponent(returnUrl)}`);
  };

  const handleSignUp = () => {
    onClose();
    router.push(`/auth/register?returnTo=${encodeURIComponent(returnUrl)}`);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Authentication Required</DialogTitle>
          <DialogDescription>
            Please log in or sign up to continue with your purchase.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:justify-center">
          <Button variant="outline" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button onClick={handleLogin}>Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
