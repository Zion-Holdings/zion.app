import Head from 'next/head'
import ResumeWizard from '../../components/talent/ResumeWizard'

export default function ResumeBuilderPage() {
  return (
    <>
      <Head>
        <title>Zion Talent — Resume & Portfolio Builder</title>
      </Head>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Resume & Portfolio Builder</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Create polished resumes, manage projects, and publish to your public profile.</p>
        <ResumeWizard />
      </div>
    </>
  )
}