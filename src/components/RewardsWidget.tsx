import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { LoginModal } from "@/components/auth/LoginModal";

export function RewardsWidget() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleClick = () => {
    if (user) {
      setOpen(true);
    } else {
      setLoginOpen(true);
    }
  };

  return (
    <>
      <Button onClick={handleClick} aria-label="Rewards">Rewards</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-zion-blue-dark border-zion-blue-light text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Rewards</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 mt-4">
            <p className="font-semibold">Points: 120</p>
            <p>Tier: Silver</p>
            <div className="mt-2">
              <p className="font-medium">Earn more:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Complete your profile</li>
                <li>Invite a friend</li>
                <li>Buy any service</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
