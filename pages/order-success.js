import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import Stripe from 'stripe';
export const getServerSideProps = async (ctx) => {
    const sessionId = ctx.query.session_id;
    if (!sessionId)
        return { props: { session: null } };
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || process.env.STRIPE_TEST_SECRET_KEY || '', { apiVersion: '2023-10-16' });
        const s = await stripe.checkout.sessions.retrieve(sessionId);
        return { props: { session: { id: s.id, amount_total: s.amount_total, currency: s.currency, customer_details: s.customer_details } } };
    }
    catch (err) {
        console.error('Failed to load session', err);
        return { props: { session: null } };
    }
};
export default function OrderSuccess({ session }) {
    if (!session) {
        return (_jsx("div", { className: "container max-w-2xl py-10", children: _jsx("p", { children: "Unable to retrieve your order." }) }));
    }
    return (_jsxs("div", { className: "container max-w-2xl py-10 space-y-4", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Thank you for your purchase!" }), _jsxs("div", { children: [_jsxs("p", { children: [_jsx("strong", { children: "Order ID:" }), " ", session.id] }), session.customer_details?.email && (_jsxs("p", { children: [_jsx("strong", { children: "Email:" }), " ", session.customer_details.email] })), typeof session.amount_total === 'number' && (_jsxs("p", { children: [_jsx("strong", { children: "Total:" }), ' ', session.currency?.toUpperCase(), " ", (session.amount_total / 100).toFixed(2)] }))] }), _jsx(Link, { href: "/orders", className: "text-zion-purple underline", children: "View Orders" })] }));
}
