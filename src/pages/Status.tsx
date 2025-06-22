import { SEO } from "@/components/SEO";

export default function Status() {
  const statusUrl =
    process.env.NEXT_PUBLIC_STATUS_PAGE_URL || "https://status.ziontechgroup.com";
  return (
    <>
      <SEO
        title="API Status"
        description="View real-time service availability and uptime statistics."
        canonical="https://app.ziontechgroup.com/status"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <iframe
            src={statusUrl}
            title="Zion Status Page"
            className="w-full border-0"
            height="800"
          />
        </div>
      </main>
    </>
  );
}
