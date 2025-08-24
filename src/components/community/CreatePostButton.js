import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
/**
 * Renders a button that navigates to the create post page.
 * If the user is not authenticated, they are redirected to the
 * login page with a "next" parameter so they can come back after logging in.
 */
export function CreatePostButton({ categoryId, className }) {
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleClick = () => {
        const target = categoryId
            ? `/community/create?category=${categoryId}`
            : "/community/create";
        if (user) {
            navigate(target);
        }
        else {
            navigate(`/login?next=${encodeURIComponent(target)}`);
        }
    };
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Button, { className: className, onClick: handleClick, children: "Create New Post" }) }), !user && (_jsx(TooltipContent, { children: "Please log in to use this feature" }))] }) }));
}
export default CreatePostButton;
