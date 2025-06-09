import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

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

  const handleClick = () => {
    const target = categoryId
      ? `/community?new=1&category=${categoryId}`
      : "/community?new=1";

    if (user) {
      router.push(target);
    } else {
      toast.info("Please log in to create a post");
      const next = encodeURIComponent(target);
      router.replace(`/login?next=${next}`);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className={className} onClick={handleClick}>
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
