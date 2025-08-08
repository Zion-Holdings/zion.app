import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const translations: Record<string, Record<string, string>> = {
  en: {
    title: 'Zion Constitution',
    subtitle: 'The Zion Philosophy',
    weBelieve: 'We Believe…',
    weDefend: 'We Defend…',
    foundational: 'Foundational Beliefs',
    governance: 'Governance Principles',
    rights: 'Rights of Users',
    versionControl: 'Version Control',
    signCta: 'Sign the Constitution',
    signedCountLabel: 'to sign the Zion Constitution',
    chapters: 'Regional Chapters',
  },
  es: {
    title: 'Constitución de Zion',
    subtitle: 'La Filosofía de Zion',
    weBelieve: 'Creemos…',
    weDefend: 'Defendemos…',
    foundational: 'Creencias Fundamentales',
    governance: 'Principios de Gobernanza',
    rights: 'Derechos de los Usuarios',
    versionControl: 'Control de Versiones',
    signCta: 'Firmar la Constitución',
    signedCountLabel: 'han firmado la Constitución de Zion',
    chapters: 'Capítulos Regionales',
  },
  fr: {
    title: 'Constitution de Zion',
    subtitle: 'La Philosophie de Zion',
    weBelieve: 'Nous croyons…',
    weDefend: 'Nous défendons…',
    foundational: 'Croyances Fondamentales',
    governance: 'Principes de Gouvernance',
    rights: 'Droits des Utilisateurs',
    versionControl: 'Contrôle de Version',
    signCta: 'Signer la Constitution',
    signedCountLabel: 'ont signé la Constitution de Zion',
    chapters: 'Chapitres Régionaux',
  },
};

const supportedLanguages = Object.keys(translations);

export default function ConstitutionPage() {
  const [language, setLanguage] = useState<string>('en');
  const t = useMemo(() => translations[language] || translations.en, [language]);

  // Optional signature UI (local-only demo)
  const [hasSigned, setHasSigned] = useState<boolean>(false);
  const [localCount, setLocalCount] = useState<number>(0);

  useEffect(() => {
    try {
      const signed = localStorage.getItem('zion:constitution:signed') === '1';
      setHasSigned(signed);
      const count = parseInt(localStorage.getItem('zion:constitution:localCount') || '0', 10) || 0;
      setLocalCount(count);
    } catch {}
  }, []);

  const totalDisplayCount = useMemo(() => 1302 + localCount, [localCount]);

  const handleSign = async () => {
    try {
      // If a wallet exists, request a message signature (optional, non-blocking)
      const eth = (typeof window !== 'undefined' && (window as any).ethereum) || null;
      if (eth) {
        await eth.request?.({ method: 'eth_requestAccounts' });
        const accounts: string[] = await eth.request?.({ method: 'eth_accounts' });
        const account = accounts?.[0];
        const message = 'I affirm the Zion Constitution and commit to its principles.';
        try {
          await eth.request?.({ method: 'personal_sign', params: [message, account] });
        } catch {}
      }
    } catch {}
    try {
      localStorage.setItem('zion:constitution:signed', '1');
      setHasSigned(true);
      const next = localCount + 1;
      localStorage.setItem('zion:constitution:localCount', String(next));
      setLocalCount(next);
    } catch {}
  };

  return (
    <>
      <Head>
        <title>{t.title} • Zion</title>
        <meta name="description" content="Zion Constitution and Philosophy" />
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif" style={{ fontFamily: '\"Playfair Display\", ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif' }}>
            {t.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 font-serif" style={{ fontFamily: '\"Source Serif 4\", ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif' }}>
            {t.subtitle}
          </p>

          {/* Signature counter */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 px-4 py-2 bg-white/70 dark:bg-black/30">
            <span className="text-xl font-bold font-serif" style={{ fontFamily: '\"Playfair Display\"' }}>#{totalDisplayCount.toLocaleString()}</span>
            <span className="text-sm opacity-80">{t.signedCountLabel}</span>
          </div>

          {/* Optional sign button */}
          <div className="mt-4">
            {!hasSigned ? (
              <button onClick={handleSign} className="enhanced-button enhanced-button-primary">
                {t.signCta}
              </button>
            ) : (
              <span className="text-green-600 dark:text-green-400 font-medium">Signed ✓</span>
            )}
          </div>

          {/* Language selector */}
          <div className="mt-6">
            <label className="text-sm mr-2 opacity-70">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 dark:border-gray-700 bg-transparent rounded px-2 py-1 text-sm"
            >
              {supportedLanguages.map((lng) => (
                <option key={lng} value={lng}>{lng.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Callouts */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-black/30">
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{t.weBelieve}</div>
            <div className="mt-2 text-2xl font-semibold font-serif" style={{ fontFamily: '\"Playfair Display\"' }}>Talent is sovereign</div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">AI augments, humans decide. We elevate individual capability and community wisdom.</p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-black/30">
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{t.weDefend}</div>
            <div className="mt-2 text-2xl font-semibold font-serif" style={{ fontFamily: '\"Playfair Display\"' }}>Open knowledge</div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">We resist lock-in and embrace transparent systems that benefit all participants.</p>
          </div>
        </div>

        {/* Sections */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-serif" style={{ fontFamily: '\"Playfair Display\"' }}>{t.foundational}</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6 text-lg font-serif" style={{ fontFamily: '\"Source Serif 4\"' }}>
            <li>Talent is sovereign</li>
            <li>AI must serve people, not replace them</li>
            <li>Decentralized reputation is better than centralized scores</li>
            <li>Open knowledge &gt; closed platforms</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-serif" style={{ fontFamily: '\"Playfair Display\"' }}>{t.governance}</h2>
          <div className="mt-4 space-y-4 text-base leading-7">
            <div>
              <div className="font-semibold">Open proposal submission</div>
              <p className="text-gray-600 dark:text-gray-300">Proposals may be submitted by the community (DAO) or designated administrators, with equal visibility and review.</p>
            </div>
            <div>
              <div className="font-semibold">Weighted voting</div>
              <p className="text-gray-600 dark:text-gray-300">Votes may be weighted by demonstrated contribution, domain expertise, or time-vested participation.</p>
            </div>
            <div>
              <div className="font-semibold">Time-based quorum rules</div>
              <p className="text-gray-600 dark:text-gray-300">Quorum thresholds adapt to urgency and proposal type, ensuring timely yet inclusive decisions.</p>
            </div>
            <div>
              <div className="font-semibold">Transparency of decision-making</div>
              <p className="text-gray-600 dark:text-gray-300">Deliberation artifacts, tallies, and rationales are public by default, with privacy preserved where required.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-serif" style={{ fontFamily: '\"Playfair Display\"' }}>{t.rights}</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <div className="font-semibold">Data exportability</div>
              <p className="text-gray-600 dark:text-gray-300">Your data and artifacts are portable in open formats.</p>
            </li>
            <li>
              <div className="font-semibold">Zero lock-in</div>
              <p className="text-gray-600 dark:text-gray-300">Use, fork, or migrate without penalty or artificial friction.</p>
            </li>
            <li>
              <div className="font-semibold">Right to self-train</div>
              <p className="text-gray-600 dark:text-gray-300">You may train personal models on your own interactions and outputs.</p>
            </li>
            <li>
              <div className="font-semibold">Fair pay protection</div>
              <p className="text-gray-600 dark:text-gray-300">Minimum rate safeguards ensure equitable compensation for talent.</p>
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold font-serif" style={{ fontFamily: '\"Playfair Display\"' }}>{t.versionControl}</h2>
          <div className="mt-4 space-y-3 text-base">
            <p>
              Constitution v1 → v2: Updates are proposed by the community or core team.
            </p>
            <p>
              The operator logs changelogs and voting outcomes tied to each revision for historical traceability.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-semibold">{t.chapters}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Create Zion “chapters” by region, each with constitutional add-ons. Chapter addenda must not conflict with global rights.
          </p>
        </section>

        <div className="mt-12 text-sm opacity-70">
          <p>
            This document is open-source. Contribute improvements via <Link href="https://github.com/Zion-Holdings/zion.app"><a className="underline">GitHub</a></Link>.
          </p>
        </div>
      </div>
    </>
  );
}