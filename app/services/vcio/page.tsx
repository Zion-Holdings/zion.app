import { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/services/vcio' } };
export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=/services/vCIO/`} />
      <link rel="canonical" href="/services/vCIO/" />
      <script dangerouslySetInnerHTML={{__html: 'window.location.replace("/services/vCIO/");'}} />
    </>
  );
}
