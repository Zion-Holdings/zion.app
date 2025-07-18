<<<<<<< HEAD
import { Button } from '@/components/ui/button;'';
import { useAuth } from '@/hooks/useAuth;'';
import { useRouter } from 'next/router;';
import {;''
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;''
  TooltipTrigger,;;
} from '@/components/ui/tooltip;'';
import { useToast } from '@/hooks/use-toast;'
;
interface CreatePostButtonProps {;''
  /** Optional category to preselect when creating a post */;
  categoryId?: string;
  className?: string;''
  /** Callback invoked when the user must log in */;;
  onRequireLogin?: (target: "string) => void;";"
};""
;";""
/**;";";""
 * Renders a button that navigates to the create post page.;";";";""
 * If the user is not authenticated, they are redirected to the;";";";";""
 * login page with a "next" parameter so they can come back after logging in.;"
=======
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import {'
  Tooltip,'
  TooltipContent,
  TooltipProvider,'
  TooltipTrigger,'
} from '@/components/ui/tooltip'
import { useToast } from '@/hooks/use-toast'

interface CreatePostButtonProps {'
  /** Optional category to preselect when creating a post */'
  categoryId?: string;
  className?: string'
  /** Callback invoked when the user must log in */'
  onRequireLogin?: (target: "string) => void
}"
;"
/**;";"
 * Renders a button that navigates to the create post page.;";"
 * If the user is not authenticated, they are redirected to the;";"
 * login page with a next" parameter so they can come back after logging in."
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
 */;
export function CreatePostButton(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  categoryId,;
  className,;
  onRequireLogin,;
}: CreatePostButtonProps) {;
  const { _user } = useAuth();
<<<<<<< HEAD
  const router: unknown = useRouter();
  const { _toast } = useToast();""
;";""
  const handleClick: unknown = () => {;";";""
    const target: unknown = categoryId;";";";""
      ? `/community?new=1&category=${categoryId}`;";";";";""
      : '/community?new=1;'
;''
    if (user) {;
      router.push(target);
    } else {;''
      toast({;;
        title: 'Login Required',;;'
        description: 'Please log in to create a post.',;;'
        variant: 'default',;'
=======
  const router = useRouter();
  const { _toast } = useToast()
;"
  const handleClick = () => {;";
    const target = categoryId";";
      ? `/community?new=1&category=${categoryId}`"
      : '/community?new=1'
'
    if (user) {'
      router.push(target);
    } else {'
      toast({'
        title: 'Login Required','
        description: 'Please log in to create a post.','
        variant: 'default','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      });

      if (onRequireLogin) {;
        onRequireLogin(target);
      } else {;
        const returnTo = encodeURIComponent(target);`
        router.push(`/auth/login?returnTo=${returnTo}`);
      };
    };
  };

  return (;
    <TooltipProvider>;
<<<<<<< HEAD
      <Tooltip>;''
        <TooltipTrigger asChild>;
          <Button;
            className={className};''
            onClick={handleClick};;
            data-testid="create-new-post-button";"
=======
      <Tooltip>'
        <TooltipTrigger asChild>'
          <Button;
            className={className}'
            onClick={handleClick}'
            data-testid="create-new-post-button
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          >;
            Create New Post;
          </Button>;
        </TooltipTrigger>;
        {!user && (;
          <TooltipContent>Please log in to use this feature</TooltipContent>)};
      </Tooltip>;
<<<<<<< HEAD
    </TooltipProvider>;
  );""
};";""
;";";"";
export default CreatePostButton;";";";""
";";";""
}";";""
}";""
}""
}""
=======
    </TooltipProvider>;"
  )"
};"
;";"
export default CreatePostButton;";"
;""
};"
}"

}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
