import { GetServerSideProps } from "next";
import Image from "next/image";
import { getTenantByHost, hostnameFromReqHeaders } from "../utils/tenant";

export default function Home({ tenant }: any) {
  return (
    <div className="py-16">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mx-auto mb-6">
          {tenant.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={tenant.logoUrl} alt={`${tenant.brandName} logo`} className="h-12 mx-auto" />
          ) : (
            <div className="text-3xl font-bold" style={{ color: tenant.primaryColor }}>{tenant.brandName}</div>
          )}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {tenant.heroTitle || `${tenant.brandName}: AI solutions for your brand`}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {tenant.heroSubtitle || "Launch faster with a tailored white‑label platform."}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/partner"
            className="px-5 py-3 rounded-md text-white"
            style={{ backgroundColor: tenant.primaryColor }}
          >
            Partner Panel
          </a>
          <a
            href="/admin/whitelabel"
            className="px-5 py-3 rounded-md border"
            style={{ borderColor: tenant.primaryColor, color: tenant.primaryColor }}
          >
            Admin
          </a>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = hostnameFromReqHeaders(ctx.req.headers as any);
  const tenant = await getTenantByHost(host);
  return { props: { tenant } };
};