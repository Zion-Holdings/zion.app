import { GetServerSideProps } from 'next'
import Head from 'next/head'
import ResumePreview from '../../components/talent/ResumePreview'
import { ResumeDocument } from '../../utils/types/resume'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query
  // NOTE: In a real app, fetch from Supabase by publicSlug
  // For demo, return a 404 if no slug matches in local usage.
  return { props: { slug } }
}

export default function PublicTalentProfile({ slug }: { slug: string }) {
  // This is a placeholder; a real implementation would fetch by slug from Supabase
  const example: ResumeDocument = {
    id: 'demo',
    name: `Public Resume — ${slug}`,
    personalSummary: 'This is a public resume preview. Connect Supabase to serve real content by slug.',
    skills: ['TypeScript', 'React', 'AI'],
    work: [],
    certifications: [],
    education: [],
    projects: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  return (
    <>
      <Head>
        <title>Zion Talent — {slug}</title>
      </Head>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{slug}</h1>
        <ResumePreview doc={example} />
      </div>
    </>
  )
}