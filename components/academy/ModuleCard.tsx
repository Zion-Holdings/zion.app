import React, { useCallback, useMemo, useState } from 'react';

export type ModuleCardProps = {
  moduleId: string;
  title: string;
  points: string[];
  isCompleted: boolean;
  onComplete: (moduleId: string) => void;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answerIndex: number;
};

export default function ModuleCard({ moduleId, title, points, isCompleted, onComplete }: ModuleCardProps) {
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);
  const [quiz, setQuiz] = useState<QuizQuestion[] | null>(null);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [score, setScore] = useState<number | null>(null);

  const contentForAI = useMemo(() => {
    const bullets = points.map((p, i) => `${i + 1}. ${p}`).join('\n');
    return `${title}\n${bullets}`;
  }, [title, points]);

  const handleSummarize = useCallback(async () => {
    setIsLoadingSummary(true);
    setSummary(null);
    try {
      const res = await fetch('/api/academy/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleTitle: title, moduleContent: contentForAI }),
      });
      const data = await res.json();
      setSummary(data.summary || 'No summary available.');
    } catch (err) {
      setSummary('Failed to summarize.');
    } finally {
      setIsLoadingSummary(false);
    }
  }, [title, contentForAI]);

  const handleGenerateQuiz = useCallback(async () => {
    setIsLoadingQuiz(true);
    setQuiz(null);
    setAnswers({});
    setScore(null);
    try {
      const res = await fetch('/api/academy/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleTitle: title, moduleContent: contentForAI }),
      });
      const data = await res.json();
      setQuiz(data.questions || null);
    } catch (err) {
      setQuiz(null);
    } finally {
      setIsLoadingQuiz(false);
    }
  }, [title, contentForAI]);

  const submitQuiz = useCallback(() => {
    if (!quiz) return;
    let s = 0;
    quiz.forEach((q, idx) => {
      if (answers[idx] === q.answerIndex) s += 1;
    });
    setScore(s);
  }, [quiz, answers]);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 space-y-4 bg-white/60 dark:bg-white/5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-end gap-2 min-w-[180px]">
          <button
            onClick={() => onComplete(moduleId)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium border transition ${
              isCompleted
                ? 'bg-green-600 text-white border-green-700'
                : 'bg-white dark:bg-black border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'
            }`}
          >
            {isCompleted ? 'Completed' : 'Mark as complete'}
          </button>
          <button
            onClick={handleGenerateQuiz}
            className="px-3 py-1.5 rounded-md text-sm font-medium border bg-white dark:bg-black border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
          >
            {isLoadingQuiz ? 'Generating quiz…' : 'AI Quiz'}
          </button>
          <button
            onClick={handleSummarize}
            className="px-3 py-1.5 rounded-md text-sm font-medium border bg-white dark:bg-black border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
          >
            {isLoadingSummary ? 'Summarizing…' : 'Summarize This Module'}
          </button>
        </div>
      </div>

      {summary && (
        <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-4 text-sm">
          <div className="font-medium mb-1">Module Summary</div>
          <p className="whitespace-pre-wrap">{summary}</p>
        </div>
      )}

      {quiz && (
        <div className="rounded-lg border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-950/30 p-4">
          <div className="font-medium mb-2">Quiz</div>
          <div className="space-y-4">
            {quiz.map((q, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-sm font-medium">{idx + 1}. {q.question}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = answers[idx] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => setAnswers((prev) => ({ ...prev, [idx]: oIdx }))}
                        className={`text-left px-3 py-2 rounded-md border text-sm transition ${
                          isSelected
                            ? 'border-purple-600 bg-white dark:bg-black'
                            : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={submitQuiz}
              className="px-3 py-1.5 rounded-md text-sm font-medium border bg-white dark:bg-black border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              Submit Answers
            </button>
            {score !== null && (
              <div className="text-sm">Score: {score}/{quiz.length}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}