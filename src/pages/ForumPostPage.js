import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Pin, Lock, CheckCircle } from "lucide-react";
import { formatDistanceToNow, format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";
import ReplyCard from "@/components/community/ReplyCard";
import ReplyForm from "@/components/community/ReplyForm";
import { useToast } from "@/hooks/use-toast";
// Mock data for a forum post
const mockPost = {
    id: "1",
    title: "Best practices for AI model fine-tuning",
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?",
    authorId: "user1",
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "ai-tools",
    tags: ["machine-learning", "fine-tuning", "gpt"],
    createdAt: "2025-04-01T12:00:00Z",
    updatedAt: "2025-04-01T12:00:00Z",
    upvotes: 48,
    downvotes: 2,
    replyCount: 4,
    isAnswered: true,
    isFeatured: true
};
// Mock data for replies
const mockReplies = [
    {
        id: "reply1",
        postId: "1",
        content: "Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.",
        authorId: "user2",
        authorName: "Sarah Chen",
        authorAvatar: "https://i.pravatar.cc/150?img=5",
        createdAt: "2025-04-01T14:30:00Z",
        updatedAt: "2025-04-01T14:30:00Z",
        upvotes: 12,
        downvotes: 0
    },
    {
        id: "reply2",
        postId: "1",
        content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good performance.",
        authorId: "user3",
        authorName: "Michael Wong",
        authorRole: "AI Engineer",
        createdAt: "2025-04-01T16:15:00Z",
        updatedAt: "2025-04-01T16:15:00Z",
        upvotes: 8,
        downvotes: 0
    },
    {
        id: "reply3",
        postId: "1",
        content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.",
        authorId: "user4",
        authorName: "Emma Davis",
        authorRole: "ML Research Lead",
        createdAt: "2025-04-02T09:45:00Z",
        updatedAt: "2025-04-02T09:45:00Z",
        upvotes: 15,
        downvotes: 0,
        isAnswer: true
    },
    {
        id: "reply4",
        postId: "1",
        content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?",
        authorId: "user5",
        authorName: "David Lin",
        createdAt: "2025-04-02T11:20:00Z",
        updatedAt: "2025-04-02T11:20:00Z",
        upvotes: 4,
        downvotes: 0
    }
];
export default function ForumPostPage() {
    // Using `useParams` without type arguments avoids issues when TypeScript
    // can't determine the generic type for the helper from React Router.
    // Cast the result instead to provide the expected shape.
    const { postId } = useParams();
    const { user } = useAuth();
    const { toast } = useToast();
    const [post, setPost] = useState(mockPost);
    const [replies, setReplies] = useState(mockReplies);
    // Check if this is the user's own post
    const isAuthor = (user === null || user === void 0 ? void 0 : user.id) === (post === null || post === void 0 ? void 0 : post.authorId);
    // Check if user is admin/mod
    const isAdminOrMod = (user === null || user === void 0 ? void 0 : user.userType) === 'admin' || (user === null || user === void 0 ? void 0 : user.role) === 'admin';
    // For this demo, we'll assume the post is found
    if (!post) {
        return (_jsxs("div", { className: "container py-8", children: [_jsx("h1", { children: "Post not found" }), _jsx(Button, { asChild: true, className: "mt-4", children: _jsx(Link, { to: "/community", children: "Back to Community" }) })] }));
    }
    const handleUpvote = () => {
        if (!user) {
            toast({
                title: "Authentication required",
                description: "Please sign in to vote on posts",
            });
            return;
        }
        setPost(Object.assign(Object.assign({}, post), { upvotes: post.upvotes + 1 }));
        toast({
            title: "Vote recorded",
            description: "You upvoted this post",
        });
    };
    const handleDownvote = () => {
        if (!user) {
            toast({
                title: "Authentication required",
                description: "Please sign in to vote on posts",
            });
            return;
        }
        setPost(Object.assign(Object.assign({}, post), { downvotes: post.downvotes + 1 }));
        toast({
            title: "Vote recorded",
            description: "You downvoted this post",
        });
    };
    const handleSubmitReply = async (content) => {
        if (!user) {
            toast({
                title: "Authentication required",
                description: "Please sign in to reply",
            });
            return;
        }
        // Create a new reply
        const newReply = {
            id: `reply${Date.now()}`,
            postId: post.id,
            content,
            authorId: user.id || 'unknown',
            authorName: user.displayName || 'Anonymous',
            authorAvatar: user.avatarUrl,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            upvotes: 0,
            downvotes: 0
        };
        setReplies([...replies, newReply]);
        setPost(Object.assign(Object.assign({}, post), { replyCount: post.replyCount + 1 }));
        toast({
            title: "Reply posted",
            description: "Your reply has been added to the discussion",
        });
    };
    const handleMarkAsAnswer = (replyId) => {
        // Only post author or admin can mark an answer
        if (!isAuthor && !isAdminOrMod) {
            toast({
                title: "Permission denied",
                description: "Only the original poster or moderators can mark answers",
                variant: "destructive"
            });
            return;
        }
        // Update the replies
        const updatedReplies = replies.map(reply => (Object.assign(Object.assign({}, reply), { isAnswer: reply.id === replyId })));
        setReplies(updatedReplies);
        setPost(Object.assign(Object.assign({}, post), { isAnswered: true }));
        toast({
            title: "Answer marked",
            description: "The reply has been marked as the accepted answer",
        });
    };
    const handleReportPost = () => {
        if (!user) {
            toast({
                title: "Authentication required",
                description: "Please sign in to report content",
            });
            return;
        }
        toast({
            title: "Report submitted",
            description: "A moderator will review this content",
        });
    };
    const handlePinPost = () => {
        if (!isAdminOrMod)
            return;
        setPost(Object.assign(Object.assign({}, post), { isPinned: !post.isPinned }));
        toast({
            title: post.isPinned ? "Post unpinned" : "Post pinned",
            description: post.isPinned ? "The post has been unpinned" : "The post has been pinned to the top",
        });
    };
    const handleLockPost = () => {
        if (!isAdminOrMod)
            return;
        setPost(Object.assign(Object.assign({}, post), { isLocked: !post.isLocked }));
        toast({
            title: post.isLocked ? "Post unlocked" : "Post locked",
            description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled",
        });
    };
    const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });
    const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h:mm a");
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: `${post.title} | Community Forum | Zion AI Marketplace`, description: post.content.substring(0, 160), keywords: `community, forum, discussion, ${post.tags.join(', ')}`, canonical: `https://ziontechgroup.com/community/post/${post.id}` }), _jsxs("div", { className: "container py-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx(Link, { to: "/community", className: "text-sm text-muted-foreground hover:text-foreground", children: "Forum" }), _jsx("span", { className: "text-muted-foreground", children: "/" }), _jsx(Link, { to: `/community/category/${post.categoryId}`, className: "text-sm text-muted-foreground hover:text-foreground", children: post.categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }), _jsx("span", { className: "text-muted-foreground", children: "/" }), _jsx("span", { className: "text-sm font-medium truncate max-w-[200px]", children: post.title })] }), _jsx(Card, { children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-start mb-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs(Avatar, { className: "h-12 w-12", children: [_jsx(AvatarImage, { src: post.authorAvatar, alt: post.authorName }), _jsx(AvatarFallback, { children: post.authorName.charAt(0) })] }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-lg", children: post.authorName }), post.authorRole && (_jsx(Badge, { variant: "outline", className: "mt-1", children: post.authorRole }))] })] }), _jsxs("div", { className: "flex items-center text-sm text-muted-foreground", children: [_jsx(Calendar, { className: "h-4 w-4 mr-1" }), _jsx("time", { dateTime: post.createdAt, title: formattedDate, children: timeAgo })] })] }), _jsx("h1", { className: "text-2xl font-bold mb-2", children: post.title }), _jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: post.tags.map(tag => (_jsx(Badge, { variant: "outline", className: "bg-zion-purple/10 hover:bg-zion-purple/20", children: tag }, tag))) }), _jsx("div", { className: "prose dark:prose-invert max-w-none mb-6", children: post.content.split('\n\n').map((paragraph, i) => (_jsx("p", { children: paragraph }, i))) }), _jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mt-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs(Button, { variant: "outline", size: "sm", onClick: handleUpvote, className: "flex items-center gap-2", children: [_jsx(ThumbsUp, { className: "h-4 w-4" }), _jsx("span", { children: post.upvotes })] }), _jsxs(Button, { variant: "outline", size: "sm", onClick: handleDownvote, className: "flex items-center gap-2", children: [_jsx(ThumbsDown, { className: "h-4 w-4" }), _jsx("span", { children: post.downvotes })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [(isAuthor || isAdminOrMod) && (_jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: _jsxs(Link, { to: `/community/edit/${post.id}`, children: [_jsx(Edit, { className: "h-4 w-4 mr-1" }), "Edit"] }) })), isAdminOrMod && (_jsxs(_Fragment, { children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: handlePinPost, children: [_jsx(Pin, { className: "h-4 w-4 mr-1" }), post.isPinned ? "Unpin" : "Pin"] }), _jsxs(Button, { variant: "ghost", size: "sm", onClick: handleLockPost, children: [_jsx(Lock, { className: "h-4 w-4 mr-1" }), post.isLocked ? "Unlock" : "Lock"] })] })), _jsxs(Button, { variant: "ghost", size: "sm", onClick: handleReportPost, children: [_jsx(Flag, { className: "h-4 w-4 mr-1" }), "Report"] })] })] })] }) }), _jsxs("div", { className: "mt-8", children: [_jsxs("h2", { className: "text-xl font-bold mb-6", children: ["Responses (", post.replyCount, ")"] }), post.isAnswered && (_jsxs("div", { className: "mb-6", children: [_jsxs("h3", { className: "flex items-center text-green-600 font-medium mb-2", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Accepted Answer"] }), replies.filter(reply => reply.isAnswer).map(reply => (_jsx(ReplyCard, { reply: reply, className: "border-green-500" }, reply.id)))] })), !post.isLocked && (_jsxs("div", { className: "mb-8", children: [_jsx("h3", { className: "text-lg font-medium mb-4", children: "Your Response" }), user ? (_jsx(ReplyForm, { onSubmit: handleSubmitReply })) : (_jsx(Alert, { children: _jsxs(AlertDescription, { children: ["Please ", _jsx(Link, { to: "/login", className: "font-medium text-zion-purple hover:underline", children: "sign in" }), " to join the discussion."] }) }))] })), post.isLocked && (_jsx(Alert, { className: "mb-8", children: _jsxs(AlertDescription, { className: "flex items-center", children: [_jsx(Lock, { className: "h-4 w-4 mr-2" }), "This thread has been locked and is no longer open for responses."] }) })), _jsx("div", { className: "space-y-6", children: replies
                                    .filter(reply => !reply.isAnswer)
                                    .map(reply => (_jsx(ReplyCard, { reply: reply, onMarkAnswer: () => handleMarkAsAnswer(reply.id), canMarkAnswer: !post.isAnswered && (isAuthor || isAdminOrMod) }, reply.id))) })] })] })] }));
}
