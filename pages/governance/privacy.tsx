export default function GovernancePrivacy() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Zion OS — Privacy-preserving Governance</h1>
      <p className="opacity-80">
        Vote anonymously using zero-knowledge proofs (Semaphore). Your vote is verified on-chain
        without revealing your identity. Weighted voting with ZION$ stake is supported.
      </p>
      <a href="/dao/zkvote" className="inline-block px-4 py-2 rounded bg-black text-white">Open ZK Vote</a>
    </div>
  )
}