import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { toast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileForm, type ProfileValues } from '@/components/profile/ProfileForm';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import OrdersPage from './Orders';
import WalletDashboard from './WalletDashboard';
import { ApiKeysManager } from '@/components/developers/ApiKeysManager';
import { SEO } from '@/components/SEO';
import ProtectedRoute from '@/components/ProtectedRoute';
import type { Order } from '@/hooks/useOrders';
import { NextApiRequest } from 'next';
import {logErrorToProduction} from '@/utils/productionLogger';


interface User {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  points: number;
}

interface AccountProps {
  user: User;
  orders: Order[];
}

function Account({ user: initialUser, orders }: AccountProps) {
  const [user, setUser] = useState(initialUser);

  const handleSubmit = async (values: ProfileValues) => {
    try {
      const res = await fetch(`/api/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      setUser(data);
    } catch (error: any) {
      logErrorToProduction('Error updating profile:', { data: error });
      toast({
        title: 'Error updating profile',
        description: error.message || 'Failed to update profile. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <SEO title="My Account" description="Manage your profile and settings" />
      <div className="container mx-auto py-8 space-y-6">
        <h1 className="text-3xl font-bold">My Account</h1>
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="points">Points</TabsTrigger>
            <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Profile</h2>
              <PointsBadge />
            </div>
            <ProfileForm defaultValues={user} onSubmit={handleSubmit} />
            {orders.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Recent Orders</h3>
                <ul className="space-y-1">
                  {orders.map(o => (
                    <li key={o.orderId} className="flex justify-between">
                      <span>#{o.orderId}</span>
                      <Link href={`/orders/${o.orderId}`} className="text-zion-purple underline">View</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>
          <TabsContent value="orders">
            <OrdersPage />
          </TabsContent>
          <TabsContent value="points">
            <WalletDashboard />
          </TabsContent>
          <TabsContent value="api-keys">
            <ApiKeysManager />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default function ProtectedAccount(props: AccountProps) {
  return (
    <ProtectedRoute>
      <Account {...props} />
    </ProtectedRoute>
  );
}

export const getServerSideProps: GetServerSideProps<AccountProps> = async ({ req }: { req: NextApiRequest }) => {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Handle cookie header which can be string or string[]
  const cookieHeader = req?.headers.cookie;
  const cookieString = Array.isArray(cookieHeader) ? cookieHeader[0] || '' : cookieHeader || '';

  const fetchOptions = cookieString ? { headers: { cookie: cookieString } } : {};

  const [userRes, ordersRes] = await Promise.all([
    fetch(`${base}/api/users/me`, fetchOptions),
    fetch(`${base}/api/orders?user_id=me`, fetchOptions),
  ]);

  if (userRes.status === 401) {
    return { redirect: { destination: '/login', permanent: false } };
  }

  const user = await userRes.json();
  let orders: Order[] = [];
  if (ordersRes.ok) {
    orders = await ordersRes.json();
  }

  return { props: { user, orders } };
};
