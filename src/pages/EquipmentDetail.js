import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
const EquipmentDetail = () => {
    const { id } = useParams();
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: `Equipment ${id} - Zion Tech Group`, description: "Detailed information about this equipment item." }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "Equipment Details" }), _jsxs("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: ["Detailed information about equipment item ", id, "."] })] }), _jsx("div", { className: "bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-semibold text-white mb-4", children: "Coming Soon" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Equipment detail pages are currently under development." })] }) })] }) })] }));
};
export default EquipmentDetail;
