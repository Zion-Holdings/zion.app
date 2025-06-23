import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface CreatePostButtonProps {
  /** Optional category to preselect when creating a post */
  categoryId?: string;
  className?: string;
}

/**
 * Renders a button that navigates to the create post page.
 * If the user is not authenticated, they are redirected to the
 * login page with a "next" parameter so they can come back after logging in.
 */
export function CreatePostButton({ categoryId, className }: CreatePostButtonProps) {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleClick = () => {
    const target = categoryId
      ? `/community?new=1&category=${categoryId}`
      : "/community?new=1";

    if (user) {
      router.push(target);
    } else {
      // Show informative toast and redirect to login
      toast({
        title: "Login Required",
        description: "Please log in to create a post. You'll be redirected to the login page.",
        variant: "default",
      });
      
      // Redirect to login with return URL after a short delay
      setTimeout(() => {
        const next = encodeURIComponent(target);
        router.push(`/login?next=${next}`);
      }, 1000); // 1 second delay to show the toast
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className={className} onClick={handleClick} data-testid="create-new-post-button">
            Create New Post
          </Button>
        </TooltipTrigger>
        {!user && (
          <TooltipContent>Please log in to use this feature</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}

export default CreatePostButton;
