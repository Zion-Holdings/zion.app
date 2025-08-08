import { GetServerSideProps } from "next";
import { getTenantByHost, hostnameFromReqHeaders } from "../../utils/tenant";

export default function PartnerAnalytics({ tenant }: any) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <div className="text-sm text-gray-600 dark:text-gray-300">Analytics for {tenant.brandName} (placeholder)</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded p-4">Users: 0</div>
        <div className="border rounded p-4">Pageviews: 0</div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = hostnameFromReqHeaders(ctx.req.headers as any);
  const tenant = await getTenantByHost(host);
  return { props: { tenant } };
};