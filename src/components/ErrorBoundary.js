import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-900 text-white", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Something went wrong" }), _jsx("p", { className: "text-gray-300 mb-4", children: "We're sorry, but something unexpected happened." }), _jsx("button", { onClick: () => window.location.reload(), className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700", children: "Reload Page" })] }) }));
        }
        return this.props.children;
    }
}
