import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { discoverServices, discoverApiCapabilities, discoverFeaturePages, ServiceItem, CapabilityItem, FeaturePageItem } from '../utils/discovery';
import { siteInfo } from '../data/site-info';

type HomeProps = {
  services: ServiceItem[];
  capabilities: CapabilityItem[];
  features: FeaturePageItem[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [services, capabilities, features] = await Promise.all([
    discoverServices(process.cwd()),
    discoverApiCapabilities(process.cwd()),
    discoverFeaturePages(process.cwd()),
  ]);

  const jsonSafeServices = services.map((s) => {
    const out: any = {
      slug: s.slug,
      name: s.name,
      href: s.href,
      source: s.source,
    };
    if (s.description !== undefined) out.description = s.description;
    if (s.category !== undefined) out.category = s.category;
    if (s.priceRangeUSD !== undefined) out.priceRangeUSD = s.priceRangeUSD;
    return out;
  });

  const jsonSafeCapabilities = capabilities.map((c) => ({ ...c }));
  const jsonSafeFeatures = features.map((f) => ({ ...f }));

  return {
    props: { services: jsonSafeServices as any, capabilities: jsonSafeCapabilities, features: jsonSafeFeatures },
    revalidate: 60, // Incremental static regeneration
  };
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-4">
    <h2 className="text-2xl font-semibold">{title}</h2>
    {subtitle ? <p className="text-gray-600 dark:text-gray-300">{subtitle}</p> : null}
  </div>
);

const Card = ({ title, description, href, meta }: { title: string; description?: string; href: string; meta?: string }) => (
  <Link href={href}>
    <a className="block rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow p-4 bg-white dark:bg-zinc-900">
      <div className="flex flex-col gap-1">
        <div className="text-lg font-medium">{title}</div>
        {description ? <div className="text-sm text-gray-600 dark:text-gray-400">{description}</div> : null}
        {meta ? <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{meta}</div> : null}
      </div>
    </a>
  </Link>
);

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
);

const Home: NextPage<HomeProps> = ({ services, capabilities, features }) => {
  return (
    <div>
      <Head>
        <title>{siteInfo.companyName} — Services, Capabilities & Features</title>
        <meta name="description" content={`Explore ${siteInfo.companyName}'s services, APIs, and product features.`} />
      </Head>

      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">{siteInfo.companyName}</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Engineering services, automation, and product capabilities in one place.</p>
      </section>

      <section className="mb-12">
        <SectionHeader title="Services" subtitle="Professional offerings you can engage today" />
        <Grid>
          {services.map((s) => (
            <Card
              key={s.slug}
              title={s.name}
              description={s.description}
              href={s.href}
              meta={[s.category, s.priceRangeUSD ? `$${s.priceRangeUSD[0]}–$${s.priceRangeUSD[1]}` : undefined]
                .filter(Boolean)
                .join(' • ')}
            />
          ))}
        </Grid>
        <div className="mt-3 text-sm">
          <Link href="/services"><a className="text-blue-600 hover:underline">Browse all services →</a></Link>
        </div>
      </section>

      <section className="mb-12">
        <SectionHeader title="API Capabilities" subtitle="Explore programmatic endpoints and admin APIs" />
        <Grid>
          {capabilities.map((c) => (
            <Card
              key={c.slug}
              title={c.name}
              href={c.href}
              meta={c.scope === 'admin-api' ? 'Admin API' : 'Public API'}
            />
          ))}
        </Grid>
      </section>

      <section className="mb-12">
        <SectionHeader title="Product Features" subtitle="Discover available feature pages and modules" />
        <Grid>
          {features.map((f) => (
            <Card key={f.slug} title={f.name} href={f.href} />
          ))}
        </Grid>
      </section>

      <section className="mt-16">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-zinc-900">
          <h3 className="text-xl font-semibold mb-2">Don’t see what you need?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">We build custom solutions. Tell us your goals and we’ll propose the best path.</p>
          <div className="flex gap-3">
            <Link href="/contact"><a className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Contact us</a></Link>
            <Link href="/analyze-service-request"><a className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-800">Analyze service request</a></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;