import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const mockCourses: Record<string, {
  title: string;
  description: string;
  lessons: { id: string; title: string; type: 'video' | 'quiz' | 'exercise'; }[];
}> = {
  'ai-engineering-foundations': {
    title: 'AI Engineering Foundations',
    description: 'Learn the fundamentals of AI engineering with practical examples.',
    lessons: [
      { id: 'intro', title: 'Introduction to AI Engineering', type: 'video' },
      { id: 'prompts', title: 'Prompt Design Basics', type: 'exercise' },
      { id: 'quiz-1', title: 'Foundations Quiz', type: 'quiz' },
      { id: 'deploy', title: 'Deploying AI Apps', type: 'video' }
    ]
  },
  'devops-cloud-primer': {
    title: 'DevOps Cloud Primer',
    description: 'Core DevOps and cloud workflows for modern teams.',
    lessons: [
      { id: 'ci', title: 'Intro to CI/CD', type: 'video' },
      { id: 'infra', title: 'Infrastructure as Code', type: 'video' },
      { id: 'quiz-1', title: 'DevOps Basics Quiz', type: 'quiz' }
    ]
  },
  'marketplace-mastery-101': {
    title: 'Marketplace Mastery 101',
    description: 'Launch and grow marketplace businesses.',
    lessons: [
      { id: 'model', title: 'Marketplace Business Models', type: 'video' },
      { id: 'supply', title: 'Solving the Cold Start', type: 'video' },
      { id: 'quiz-1', title: 'Marketplace Quiz', type: 'quiz' }
    ]
  }
};

export default function CoursePage() {
  const { query } = useRouter();
  const slug = String(query.slug || '');
  const course = mockCourses[slug];
  const [activeTab, setActiveTab] = useState<'lessons' | 'discussion' | 'ai'>('lessons');

  useEffect(() => {
    setActiveTab('lessons');
  }, [slug]);

  const progress = useMemo(() => {
    if (!course) return 0;
    return Math.round((1 / course.lessons.length) * 100);
  }, [course]);

  if (!course) return <div className="py-10">Course not found.</div>;

  return (
    <div className="py-10 space-y-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold">{course.title}</h1>
          <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Progress</div>
          <div className="font-semibold">{progress}%</div>
        </div>
      </div>

      <div className="flex gap-4 border-b border-gray-200 dark:border-gray-800">
        <button className={`px-3 py-2 ${activeTab==='lessons' ? 'border-b-2 border-blue-600' : ''}`} onClick={() => setActiveTab('lessons')}>Lessons</button>
        <button className={`px-3 py-2 ${activeTab==='discussion' ? 'border-b-2 border-blue-600' : ''}`} onClick={() => setActiveTab('discussion')}>Discussion</button>
        <button className={`px-3 py-2 ${activeTab==='ai' ? 'border-b-2 border-blue-600' : ''}`} onClick={() => setActiveTab('ai')}>AI Assistant</button>
      </div>

      {activeTab === 'lessons' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {course.lessons.map((lesson) => (
              <Link key={lesson.id} href={`/academy/course/${slug}/lesson/${lesson.id}`}>
                <a className="block rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
                  <div className="font-medium">{lesson.title}</div>
                  <div className="text-xs text-gray-500 capitalize">{lesson.type}</div>
                </a>
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <Link href={`/academy/course/${slug}/exam`}>
              <a className="block rounded-md bg-blue-600 text-white text-center py-2">Final Exam & Certification</a>
            </Link>
            <button className="block w-full rounded-md border border-gray-300 dark:border-gray-700 py-2" onClick={async () => {
              const res = await fetch(`/api/academy/summarize?course=${encodeURIComponent(course.title)}`);
              const data = await res.json();
              alert(data.summary || 'Summary generated');
            }}>Summarize with AI</button>
          </div>
        </div>
      )}

      {activeTab === 'discussion' && (
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <div className="text-sm text-gray-500 mb-2">Community discussion (coming soon)</div>
          <div className="text-gray-700 dark:text-gray-300">Ask questions, share insights, and collaborate with peers.</div>
        </div>
      )}

      {activeTab === 'ai' && (
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <div className="text-sm text-gray-500 mb-2">AI Instructor Assistant</div>
          <AIChat lessonTitle={course.title} />
        </div>
      )}
    </div>
  );
}

function AIChat({ lessonTitle }: { lessonTitle: string }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);

  const operatorPrompt = `Act as an AI teaching assistant. When a user asks questions about this topic [${lessonTitle}], respond clearly with examples, links to related concepts, and follow-up questions.`;

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, content: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    const res = await fetch('/api/academy/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ operatorPrompt, userMessage: userMsg.content })
    });
    const data = await res.json();
    setMessages((m) => [...m, { role: 'assistant', content: data.answer || 'Sorry, I could not generate a response.' }]);
  };

  return (
    <div className="space-y-3">
      <div className="h-64 overflow-y-auto rounded border border-gray-200 dark:border-gray-800 p-3">
        {messages.length === 0 && (
          <div className="text-sm text-gray-500">Ask a question about this lesson.</div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <span className={m.role === 'user' ? 'inline-block bg-blue-600 text-white px-3 py-1 rounded-md my-1' : 'inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md my-1'}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white dark:bg-black" placeholder="Type your question..." />
        <button onClick={send} className="rounded-md bg-blue-600 text-white px-4">Send</button>
      </div>
    </div>
  );
}