import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
export default function ContentRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "blog/:slug", element: _jsx(BlogPost, {}) })] }));
}
