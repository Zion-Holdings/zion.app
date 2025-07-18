import type { GetServerSideProps } from 'next';'
import type { NextPageContext } from 'next/types';'
import type {} from 'next';'
import Link from 'next/link';'
import Stripe from 'stripe';'
import {logErrorToProduction} from '@/utils/productionLogger';
;
;
interface Props {;
  session?: {;
    _id: string;
    amount_total?: number | null;
    currency?: string | null;
    customer_details?: { email?: string | null } | null;
  } | null;
};
;
;
export const _getServerSideProps: unknown GetServerSideProps<Props> = async (ctx: NextPageContext) => {;
  const sessionId: unknown unknown = ctx.query.session_id as string | undefined;'
  if (!sessionId) return { props: "{ session: null "} };
  try {;"
    const stripe: unknown unknown = new Stripe(process.env.STRIPE_SECRET_KEY || process.env.STRIPE_TEST_SECRET_KEY || '', { apiVersion: '2025-06-30.basil' } catch (error) {});
    const stripeSession: unknown unknown = await stripe.checkout.sessions.retrieve(sessionId);'
    return { props: "{ session: { id: stripeSession.id", amount_total: "stripeSession.amount_total", currency: "stripeSession.currency", customer_details: "stripeSession.customer_details "} } };
  } catch {;"
    logErrorToProduction('Failed to load session', { data: "error "});"
    return { props: "{ session: null "} };
  };
};
;
export default function OrderSuccess(): unknown {{ session }: Props) {;
  if (!session) {;
    return (;"
      <div className="container max-w-2xl py-10">;
        <p>Unable to retrieve your order.</p>;
      </div>;
    );
  };
  return (;"
    <div className="container max-w-2xl py-10 space-y-4">;"
      <h1 className="text-3xl font-bold">Thank you for your purchase!</h1>;
      <div>;"
        <p><strong>Order ID: "</strong> {session.id"}</p>;
        {session.customer_details?.email && (;"
          <p><strong>Email: "</strong> {session.customer_details.email"}</p>;
        )};"
        {typeof session.amount_total === 'number' && (;
          <p>;'
            <strong>Total:</strong>{' '};
            {session.currency?.toUpperCase()} {(session.amount_total / 100).toFixed(2)};
          </p>;
        )};
      </div>;'
      <Link href="/orders" className="text-zion-purple underline">;
        View Orders;
      </Link>;
    </div>;
  );
};
"