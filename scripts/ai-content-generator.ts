import fs from 'fs'
import path from 'path'
import OpenAI from 'openai'

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error('OPENAI_API_KEY not set; skipping AI content generation')
    process.exit(0)
  }
  const client = new OpenAI({ apiKey })

  const topicPrompt = `Propose a highly practical, timely blog topic for software engineers, focused on AI-in-production, developer productivity, or cloud automation. Return ONLY the title line.`
  const topicResp = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Return only the title.' },
      { role: 'user', content: topicPrompt },
    ],
    temperature: 0.6,
  })
  const rawTitle = topicResp.choices[0]?.message?.content?.trim() || 'AI Automation Insights'
  const title = rawTitle.replace(/^"|"$/g, '')
  const slug = `${slugify(title)}-${Date.now()}`

  const articlePrompt = `Write a concise, actionable blog article titled "${title}" (700-900 words). Audience: senior engineers and tech leads. Style: pragmatic, examples, checklists. Include 3-5 key takeaways and a short conclusion. Return plain markdown sections that can be embedded in JSX.`
  const articleResp = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Produce clean markdown, no YAML frontmatter.' },
      { role: 'user', content: articlePrompt },
    ],
    temperature: 0.5,
  })
  const body = articleResp.choices[0]?.message?.content || ''

  const outDir = path.join(process.cwd(), 'pages', 'blog', 'auto')
  fs.mkdirSync(outDir, { recursive: true })
  const filePath = path.join(outDir, `${slug}.tsx`)

  const tsx = `import Head from 'next/head'

export default function Article() {
  return (
    <>
      <Head>
        <title>${title}</title>
        <meta name="description" content="${title} — AI-generated article" />
      </Head>
      <article className="prose dark:prose-invert max-w-none">
        <h1>${title}</h1>
        <div>
{` + '`
' + body.replace(/`/g, '\`') + '
' + '`' + `}
        </div>
      </article>
    </>
  )
}
`

  fs.writeFileSync(filePath, tsx, 'utf8')
  console.log('Generated', filePath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})