import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LessonPage() {
  const { query } = useRouter();
  const { slug, lessonId } = query as { slug?: string; lessonId?: string };
  const [lessonType, setLessonType] = useState<'video' | 'quiz' | 'exercise'>('video');

  useEffect(() => {
    if (!lessonId) return;
    if (String(lessonId).includes('quiz')) setLessonType('quiz');
    else if (String(lessonId).includes('prompts')) setLessonType('exercise');
    else setLessonType('video');
  }, [lessonId]);

  return (
    <div className="py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Lesson: {lessonId}</h1>

      {lessonType === 'video' && (
        <div className="aspect-video w-full bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">Video placeholder</div>
      )}

      {lessonType === 'exercise' && (
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <div className="font-medium mb-2">AI-Guided Exercise</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Follow the prompts to complete the task.</p>
        </div>
      )}

      {lessonType === 'quiz' && (
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 space-y-3">
          <div className="font-medium">Quick Quiz</div>
          <Quiz />
        </div>
      )}

      <button className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2" onClick={async () => {
        const res = await fetch(`/api/academy/summarize?lesson=${encodeURIComponent(String(lessonId || ''))}`);
        const data = await res.json();
        alert(data.summary || 'Summary generated');
      }}>Summarize with AI</button>
    </div>
  );
}

function Quiz() {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const answers = [
    { id: 'a', text: 'Option A' },
    { id: 'b', text: 'Option B' },
    { id: 'c', text: 'Option C' }
  ];

  const correct = 'b';

  return (
    <div>
      <div className="mb-2">Which option is correct?</div>
      <div className="space-y-2">
        {answers.map((a) => (
          <label key={a.id} className={`block rounded border ${selected===a.id ? 'border-blue-600' : 'border-gray-200 dark:border-gray-800'} p-2`}>
            <input type="radio" name="q1" className="mr-2" onChange={() => setSelected(a.id)} />
            {a.text}
          </label>
        ))}
      </div>
      <button className="mt-3 rounded-md bg-blue-600 text-white px-3 py-1" onClick={() => setResult(selected === correct ? 'Correct!' : 'Try again')}>Submit</button>
      {result && <div className="mt-2 text-sm">{result}</div>}
    </div>
  );
}