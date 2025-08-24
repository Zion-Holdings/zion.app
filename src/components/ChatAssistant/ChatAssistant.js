import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
export function ChatAssistant({ isOpen, onClose, recipient, conversationId, initialMessages = [], onSendMessage, contextHeader }) {
    const [messages, setMessages] = useState(initialMessages);
    const messagesEndRef = useRef(null);
    useEffect(() => {
        if (initialMessages.length > 0) {
            setMessages(initialMessages);
        }
    }, [initialMessages]);
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const scrollToBottom = () => {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    };
    const handleSendMessage = async (message) => {
        if (!message.trim())
            return;
        // Add user message to the chat
        const newMessage = {
            id: Date.now().toString(),
            role: 'user',
            message,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);
        // Send message to recipient via the provided handler
        await onSendMessage(message, conversationId);
    };
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4", children: _jsxs("div", { className: "w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]", children: [_jsxs("div", { className: "bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs(Avatar, { className: "h-10 w-10 border border-zion-purple/20", children: [_jsx(AvatarImage, { src: recipient.avatarUrl, alt: recipient.name }), _jsx(AvatarFallback, { className: "bg-zion-purple/20 text-white", children: recipient.name.charAt(0).toUpperCase() })] }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-white", children: recipient.name }), recipient.role && (_jsx("div", { className: "text-xs text-zion-slate", children: recipient.role }))] })] }), _jsx(Button, { variant: "ghost", size: "icon", className: "text-white hover:bg-zion-purple/10 rounded-full", onClick: onClose, children: _jsx(X, { className: "h-5 w-5" }) })] }), contextHeader && (_jsx("div", { className: "border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3", children: contextHeader })), _jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [messages.length === 0 ? (_jsx("div", { className: "text-center text-zion-slate py-8", children: _jsxs("p", { children: ["Start a conversation with ", recipient.name] }) })) : (messages.map((msg) => (_jsx(ChatMessage, { role: msg.role, message: msg.message }, msg.id)))), _jsx("div", { ref: messagesEndRef })] }), _jsx("div", { className: "p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30", children: _jsx(ChatInput, { onSend: handleSendMessage }) })] }) }));
}
