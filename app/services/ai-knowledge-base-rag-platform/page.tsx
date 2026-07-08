import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Knowledge Base and RAG Platform for Enterprise IT | Zion Tech Group',
  description: 'AI knowledge base and RAG platform guidance for enterprise IT teams: retrieval design, source governance, accuracy checks, and operational rollout.',
}

export default function AiKnowledgeBaseAndRagPlatformPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">AI Knowledge Base and RAG Platform</h1>
      <p className="text-lg mb-8">
        Enterprise knowledge bases fail when retrieval is imprecise or sources drift. AI knowledge base and RAG platforms improve answer accuracy, source trust, and operational usability for IT teams.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">What matters</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Retrieval quality, chunking, and reranking</li>
        <li>Source governance, freshness, and access control</li>
        <li>Answer auditing, citations, and feedback loops</li>
        <li>Integration with ITSM, SharePoint, and internal systems</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Next steps</h2>
      <div className="flex flex-wrap gap-4">
        <Link href="/services" className="underline text-blue-600">Explore services</Link>
        <Link href="/tools" className="underline text-blue-600">Open free tools</Link>
        <Link href="https://ziontechgroup.com" className="underline text-blue-600" target="_blank" rel="noreferrer">ziontechgroup.com</Link>
        <Link href="https://calendly.com/kleber-ziontechgroup" className="underline text-blue-600" target="_blank" rel="noreferrer">Schedule a call</Link>
      </div>
    </article>
  )
}
