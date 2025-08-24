import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ChatMessage = ({ message }) => {
    const isUser = message.sender === 'user';
    return (_jsx("div", { className: `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`, children: _jsxs("div", { className: `max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isUser
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}`, children: [_jsx("p", { className: "text-sm", children: message.text }), _jsx("p", { className: `text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`, children: message.timestamp.toLocaleTimeString() })] }) }));
};
