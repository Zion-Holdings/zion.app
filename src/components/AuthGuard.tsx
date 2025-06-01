import React, { useEffect, useState } from "react";
import { LoginModal } from "@/components/auth/LoginModal";
import { useAuth } from "@/hooks/useAuth";

interface AuthGuardProps {
  children: React.ReactElement;
  onAuthenticated: () => void;
  message: string;
}

export function AuthGuard({ children, onAuthenticated, message }: AuthGuardProps) {
  const { user } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user) {
      setLoginOpen(true);
    } else {
      onAuthenticated();
    }
  };

  useEffect(() => {
    if (loginOpen && user) {
      setLoginOpen(false);
      onAuthenticated();
    }
  }, [user]);

  return (
    <>
      {React.cloneElement(children, { onClick: handleClick })}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} message={message} />
    </>
  );
}
