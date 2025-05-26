
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleIconClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-full" onClick={handleIconClick}>
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatarUrl || ""} alt={user.displayName || "User Avatar"} />
            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
          <span className="sr-only">Open user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="grid gap-2 px-2 py-2">
          <div className="text-sm font-medium leading-none">{user.displayName || "User"}</div>
          <div className="text-muted-foreground text-xs leading-none">{user.email}</div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/saved-talents">Saved Talents</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/wallet">Wallet</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/orders">Order History</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
