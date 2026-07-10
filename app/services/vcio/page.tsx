import { redirect } from 'next/navigation';
export const dynamic = 'force-static';
export const metadata = { alternates: { canonical: '/services/vcio' } };
export default function Page() {
  redirect('/services/vCIO/');
}
