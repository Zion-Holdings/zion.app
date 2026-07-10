import { redirect } from 'next/navigation';
export const dynamic = 'force-static';
export const metadata = { alternates: { canonical: '/services/access-management' } };
export default function Page() {
  redirect('/services/identity-access-management/');
}
