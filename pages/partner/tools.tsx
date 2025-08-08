import { GetServerSideProps } from "next";
import { getTenantByHost, hostnameFromReqHeaders } from "../../utils/tenant";

export default function PartnerTools({ tenant }: any) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI Tools</h1>
      <div className="text-sm text-gray-600 dark:text-gray-300">Use AI tools within your tenant scope. (placeholder)</div>
      <div className="border rounded p-4">Chat, automation, generators, etc. (placeholder)</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = hostnameFromReqHeaders(ctx.req.headers as any);
  const tenant = await getTenantByHost(host);
  return { props: { tenant } };
};