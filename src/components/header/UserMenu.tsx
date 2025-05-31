
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import * as Popover from "@radix-ui/react-popover";

export function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "There was an error signing you out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return (
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/login" className="text-zion-slate-light hover:text-white">Login</Link>
        <Link
          to="/signup"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zion-purple text-white hover:bg-zion-purple-light h-10 px-4 py-2"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 rounded-full"
          // onClick={handleIconClick} // Popover.Trigger onClick and Popover.Root onOpenChange handle this
          // aria-haspopup="menu" // Popover.Trigger handles this
          // aria-expanded={open} // Popover.Trigger handles this
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
          <span className="sr-only">Open user menu</span>
        </Button>
      </Popover.Trigger>
      <Popover.Content
        align="end"
        className="bg-white dark:bg-gray-800 shadow-md rounded-md p-2 border border-gray-200 dark:border-gray-700 w-48 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200"
      >
        <div className="grid gap-2 px-2 py-2">
          <div className="text-sm font-medium leading-none text-gray-900 dark:text-white">{user.displayName || "User"}</div>
          <div className="text-xs leading-none text-gray-500 dark:text-gray-400">{user.email}</div>
        </div>
        <hr className="my-1 border-gray-200 dark:border-gray-700" />
        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md">
          <Link to="/orders">Orders</Link>
        </div>
        <hr className="my-1 border-gray-200 dark:border-gray-700" />
        <button
          onClick={handleSignOut}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md"
        >
          Logout
        </button>
      </Popover.Content>
    </Popover.Root>
  );
}
