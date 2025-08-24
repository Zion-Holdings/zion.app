<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  const navigate = useNavigate();

  const handleClick = () => {
    const target = categoryId
      ? `/community/create?category=${categoryId}`
      : "/community/create";

    if (user) {
      navigate(target);
    } else {
      navigate(`/login?next=${encodeURIComponent(target)}`);
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
=======
import React from 'react';
export function ListingScoreCard() {
  return (
    <div>
      <h1>Component</h1>
      <p>Component placeholder</p>
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-63e3
