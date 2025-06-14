import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { PROPOSAL_TEMPLATES } from '@/data/proposalTemplates';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const grouped = PROPOSAL_TEMPLATES.reduce((acc, t) => {
    (acc[t.category] = acc[t.category] || []).push(t);
    return acc;
}, {});
const ZgpLibraryPage = () => {
    return (_jsxs("div", { className: "container mx-auto p-4 space-y-8", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Zion Governance Proposal Library" }), Object.entries(grouped).map(([category, templates]) => (_jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-2xl font-semibold", children: category }), _jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: templates.map((t) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { children: [t.title, " (", t.id, ")"] }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap", children: t.summary }) }), _jsx(CardFooter, { children: _jsx(Link, { href: `/governance/create?template=${t.id}`, className: "ml-auto", children: _jsx(Button, { size: "sm", children: "Use Template" }) }) })] }, t.id))) })] }, category)))] }));
};
export default ZgpLibraryPage;
