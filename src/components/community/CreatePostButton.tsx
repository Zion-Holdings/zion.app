import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface CreatePostButtonProps {
  /** Optional category to preselect when creating a post */
  categoryId?: string;
  className?: string;
}

/**
 * Renders a button that navigates to the create post page.
 * If the user is not authenticated, they are redirected to the
 * login page with a return path so they can come back after logging in.
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
    <Button className={className} onClick={handleClick}>
      Create New Post
    </Button>
  );
}

export default CreatePostButton;
