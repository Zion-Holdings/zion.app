import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { cn } from '@/lib/utils';
export function ChatMessage({ message, isUser, timestamp }) {
    return (_jsxs("div", { className: cn('flex gap-3 mb-4', isUser ? 'flex-row-reverse' : 'flex-row'), children: [_jsxs(Avatar, { className: "w-8 h-8", children: [_jsx(AvatarImage, { src: isUser ? '/user-avatar.png' : '/ai-avatar.png' }), _jsx(AvatarFallback, { className: cn('text-xs', isUser ? 'bg-zion-purple text-white' : 'bg-zion-cyan text-white'), children: isUser ? 'U' : 'AI' })] }), _jsxs("div", { className: cn('flex-1 max-w-[80%]', isUser ? 'text-right' : 'text-left'), children: [_jsx("div", { className: cn('inline-block p-3 rounded-lg', isUser
                            ? 'bg-zion-purple text-white'
                            : 'bg-zion-blue-light text-white'), children: _jsx("p", { className: "text-sm", children: message }) }), _jsx("p", { className: "text-xs text-zion-slate-light mt-1", children: timestamp.toLocaleTimeString() })] })] }));
}
