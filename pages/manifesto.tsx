import Head from 'next/head';
import React from 'react';

export default function ManifestoPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Zion Manifesto</title>
        <meta name="description" content="Zion Manifesto: Our purpose, philosophy, and decentralized future." />
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <div className="mx-auto w-full max-w-5xl px-6 py-12">
          <header className="mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Zion Manifesto</h1>
            <p className="mt-4 text-lg text-gray-700">
              A public commitment to build an AI-native, trustless, and talent-first marketplace—in service of human sovereignty.
            </p>
          </header>

          <section className="prose prose-gray max-w-none">
            <h2 id="our-mission">Our Mission</h2>
            <p>
              Empower every builder, creator, and solver with sovereign tools to earn, collaborate, and grow—without gatekeepers. Zion is a
              marketplace protocol and product suite that aligns incentives around talent, trust, and value creation.
            </p>

            <h2 id="why-zion-exists">Why Zion Exists</h2>
            <p>
              Work has moved online, but ownership, attribution, and compensation have not. Platforms extract value while contributors face
              opaque rules, captive audiences, and fragile reputations. Zion exists to reverse that gravity: portable identity, verifiable
              work, programmable trust, and interoperable markets where value flows to the people who create it.
            </p>

            <h2 id="problem-with-traditional-marketplaces">The Problem with Traditional Marketplaces</h2>
            <ul>
              <li><strong>Platform Rent-Seeking</strong>: Centralized fees and policy risk diminish creator upside and user choice.</li>
              <li><strong>Captive Reputation</strong>: Profiles and reviews are siloed; your hard-won credibility is non-portable.</li>
              <li><strong>Low-Trust Transactions</strong>: Disputes, fraud, and misalignment waste time and undermine collaboration.</li>
              <li><strong>Data as Leverage</strong>: User data is harvested to entrench moats rather than empower the people who generate it.</li>
            </ul>

            <h2 id="ai-for-empowerment">AI for Empowerment, Not Exploitation</h2>
            <p>
              AI should amplify human capability and agency—not replace it or capture its value. Zion is AI-native by design: matching,
              scoping, verification, and reputation signals are assisted by models, yet decisions remain human-sovereign. We prioritize
              transparency, auditability, and consent. Your data powers your outcomes, not someone else’s moat.
            </p>

            <h2 id="our-decentralized-future">Our Decentralized Future</h2>
            <p>
              Zion evolves from a product into a protocol: identity, reputation, escrow, and discovery as shared public goods. Governance
              transitions gradually, guided by real usage and contributor ownership. The end-state is a resilient, permissionless network
              where anyone can build clients, services, and markets atop a common trust layer—talent-first, globally accessible, and
              credibly neutral.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}