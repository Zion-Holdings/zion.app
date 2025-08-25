import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';
export const ChatMessage = ({ message }) => {
    const isUser = message.sender === 'user';
    return (_jsxs(motion.div, { className: `flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`, initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, children: [!isUser && (_jsx("div", { className: "w-8 h-8 rounded-full bg-zion-cyan flex items-center justify-center flex-shrink-0", children: _jsx(Bot, { className: "w-5 h-5 text-white" }) })), _jsxs("div", { className: `px-4 py-3 rounded-2xl max-w-xs md:max-w-md lg:max-w-lg ${isUser
                    ? 'bg-zion-cyan text-white rounded-br-md'
                    : 'bg-zion-blue-dark/50 text-white rounded-bl-md'}`, children: [_jsx("p", { className: "text-sm leading-relaxed", children: message.text }), _jsx("p", { className: `text-xs mt-2 ${isUser ? 'text-white/70' : 'text-zion-slate-light'}`, children: message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) })] }), isUser && (_jsx("div", { className: "w-8 h-8 rounded-full bg-zion-purple flex items-center justify-center flex-shrink-0", children: _jsx(User, { className: "w-5 h-5 text-white" }) }))] }));
};
export default ChatMessage;
