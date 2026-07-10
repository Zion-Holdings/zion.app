import { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/services/access-management' } };
export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=/services/identity-access-management/`} />
      <link rel="canonical" href="/services/identity-access-management/" />
      <script dangerouslySetInnerHTML={{__html: 'window.location.replace("/services/identity-access-management/");'}} />
    </>
  );
}
