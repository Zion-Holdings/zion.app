import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';

export default function FoundationPage() {
  return (
    <>
      <SEO
        title="Zion Foundation"
        description="Public trust portal for the Zion protocol" />
      <Header />
      <main className="prose dark:prose-invert mx-auto p-8 max-w-3xl">
        <h1>Zion Foundation</h1>
        <p>
          The Zion Foundation stewards the protocol's vision while remaining
          globally neutral and independent from any single jurisdiction.
        </p>
        <section>
          <h2>Registry & Legal Structure</h2>
          <p>Potential formation options include:</p>
          <ul>
            <li>Cayman Foundation</li>
            <li>Swiss Verein</li>
            <li>US 501(c)(6)</li>
            <li>DAO-native wrapper such as Otoco</li>
          </ul>
        </section>
        <section>
          <h2>Foundation Charter</h2>
          <p>
            The charter commits to protecting and evolving the Zion protocol,
            ensuring no nation-state control, overseeing the ZION$ treasury,
            maintaining contributor program rules, and enabling cross-multiverse
            grants. The Foundation integrates with the Zion DAO for
            decision-making and respects community sovereignty, open knowledge,
            and trust.
          </p>
        </section>
        <section>
          <h2>Governance</h2>
          <ul>
            <li>Appoint Core Stewards</li>
            <li>Delegate voting rights to nation DAOs</li>
            <li>Publish quarterly reports with impact metrics</li>
          </ul>
        </section>
        <section>
          <h2>Transparency & Grants</h2>
          <p>
            This portal provides access to charter details, transparency reports,
            grants issued, and an archive of partnership MOUs.
          </p>
        </section>
      </main>
    </>
  );
}
