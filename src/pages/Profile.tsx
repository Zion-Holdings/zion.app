import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { ProfileForm, ProfileValues } from '@/components/profile/ProfileForm';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import type { Order } from '@/hooks/useOrders';
import Link from 'next/link';

interface User {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  points: number;
}

interface ProfileProps {
  user: User;
  orders: Order[];
}

export default function Profile({ user: initialUser, orders }: ProfileProps) {
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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
        <PointsBadge />
      </div>
      <ProfileForm defaultValues={user} onSubmit={handleSubmit} />
      {orders.length > 0 && (
        <div>
          <h2 className="font-semibold mb-2">Recent Orders</h2>
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<ProfileProps> = async ({ req }) => {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const [userRes, ordersRes] = await Promise.all([
    fetch(`${base}/api/users/me`, { headers: { cookie: req.headers.cookie || '' } }),
    fetch(`${base}/api/orders?user_id=me`, { headers: { cookie: req.headers.cookie || '' } })
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
