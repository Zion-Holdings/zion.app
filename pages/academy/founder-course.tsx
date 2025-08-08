import React, { useEffect, useMemo, useState } from 'react';
import ModuleCard from '../../components/academy/ModuleCard';
import ProgressTracker from '../../components/academy/ProgressTracker';
import CertificateView from '../../components/academy/CertificateView';
import { founderCourseModules } from '../../components/academy/courseData';

const STORAGE_KEY = 'founder_course_progress_v1';

export default function FounderCoursePage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {}
  }, [completed]);

  const totalCount = founderCourseModules.length;
  const completedCount = useMemo(
    () => founderCourseModules.filter((m) => completed[m.id]).length,
    [completed]
  );

  const toggleComplete = (moduleId: string) => {
    setCompleted((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-semibold">Founder Course: Launch Your Zion Instance</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
          An interactive, step-by-step onboarding course for founders and builders launching their own Zion instance or vertical. Use the AI tools embedded in each module to test readiness and generate summaries.
        </p>
        <ProgressTracker completedCount={completedCount} totalCount={totalCount} />
      </div>

      <div className="space-y-6">
        {founderCourseModules.map((m) => (
          <ModuleCard
            key={m.id}
            moduleId={m.id}
            title={m.title}
            points={m.points}
            isCompleted={!!completed[m.id]}
            onComplete={toggleComplete}
          />
        ))}
      </div>

      <CertificateView completedCount={completedCount} totalCount={totalCount} />

      <div className="text-xs text-gray-500 dark:text-gray-400">
        Operator prompt: Create a 5-module course for founders launching a decentralized AI work protocol — include mission, DAO, token, governance, and deployment tools.
      </div>
    </div>
  );
}