import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { ProfileForm, ProfileValues } from '@/components/profile/ProfileForm';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import type { Order } from '@/hooks/useOrders';
import Link from 'next/link';
import OrdersPage from './Orders';
import AccountSettings from './AccountSettings';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

interface User {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  points: number;
}

interface ProfileProps {
  user: User;
  orders?: Order[];
}

export default function Profile({ user: initialUser, orders = [] }: ProfileProps) {
  const [user, setUser] = useState(initialUser);

  const handleSubmit = async (values: ProfileValues) => {
    const res = await fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    setUser(data);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Account</h1>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Profile</h2>
            <PointsBadge />
          </div>
          <ProfileForm defaultValues={user} onSubmit={handleSubmit} />
        </TabsContent>
        <TabsContent value="orders">
          {orders.length > 0 ? (
            <OrdersPage />
          ) : (
            <p>No orders found.</p>
          )}
        </TabsContent>
        <TabsContent value="settings">
          <AccountSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<ProfileProps> = async ({ params, req }: { params: { [key: string]: string | string[] | undefined }, req: any }, res: any, query: any, resolvedUrl: any ) => {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const [userRes, ordersRes] = await Promise.all([
    fetch(`${base}/api/users/me`, { headers: { cookie: req?.headers.cookie || '' } }),
    fetch(`${base}/api/orders?user_id=me`, { headers: { cookie: req?.headers.cookie || '' } })
  ]);

  if (userRes.status === 401) {
    return { redirect: { destination: '/login', permanent: false } };
  }

  const user = await userRes.json();
  let orders: Order[] = [];
  if (ordersRes.ok) {
    orders = await ordersRes.json();
    orders = orders.slice(0, 3);
  }

  return { props: { user, orders } };
};
