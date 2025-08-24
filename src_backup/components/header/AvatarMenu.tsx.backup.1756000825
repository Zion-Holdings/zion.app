<<<<<<< HEAD:src_backup/components/header/AvatarMenu.tsx
import React from 'react';
export function AvatarMenu() {
  return (
    <div>
      <h1>Component</h1>
      <p>Component placeholder</p>
    </div>
=======
import React, { useRef } from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export interface AvatarMenuProps {
  avatarUrl?: string;
  onLogout?: () => void;
}

export function AvatarMenu({ avatarUrl, onLogout }: AvatarMenuProps) {
  const itemRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = itemRefs.current.filter(Boolean);
    const index = items.indexOf(document.activeElement as any);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = index < items.length - 1 ? index + 1 : 0;
      items[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = index > 0 ? index - 1 : items.length - 1;
      items[prev]?.focus();
    }
  };

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button as={Button} variant="ghost" className="h-8 w-8 rounded-full" aria-expanded={open}>
            <Avatar className="h-8 w-8">
              <AvatarImage src={avatarUrl || ""} alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="sr-only">Open user menu</span>
          </Popover.Button>
          {open && (
            <Popover.Panel
              static
              className="absolute right-0 z-50 mt-2 w-40 rounded-md border border-zion-blue-light bg-zion-blue-dark p-2 shadow-md focus:outline-none"
              onKeyDown={handleKeyDown}
            >
              <div className="py-1 flex flex-col text-sm text-white">
                <Link
                  to="/profile"
                  ref={(el) => (itemRefs.current[0] = el)}
                  className="rounded px-2 py-1 hover:bg-zion-blue-light focus:bg-zion-blue-light"
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  ref={(el) => (itemRefs.current[1] = el)}
                  className="rounded px-2 py-1 hover:bg-zion-blue-light focus:bg-zion-blue-light"
                >
                  Orders
                </Link>
                <button
                  type="button"
                  ref={(el) => (itemRefs.current[2] = el)}
                  onClick={() => {
                    close();
                    onLogout?.();
                  }}
                  className="rounded px-2 py-1 text-left hover:bg-zion-blue-light focus:bg-zion-blue-light"
                >
                  Logout
                </button>
              </div>
            </Popover.Panel>
          )}
        </>
      )}
    </Popover>
>>>>>>> origin/codex/activate-avatar-menu-with-keyboard-navigation:src/components/header/AvatarMenu.tsx
  );
}
