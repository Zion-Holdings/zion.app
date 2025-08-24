import React, { useEffect, useMemo, useState } from 'react';
import CertificateView from '../../components/academy/CertificateView';
import { founderCourseModules } from '../../components/academy/courseData';

const STORAGE_KEY = 'founder_course_progress_v1';

export default function CertificatePage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(JSON.parse(raw));
    } catch {}
  }, []);

  const totalCount = founderCourseModules.length;
  const completedCount = useMemo(
    () => founderCourseModules.filter((m) => completed[m.id]).length,
    [completed]
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold">Certificate</h1>
      <CertificateView completedCount={completedCount} totalCount={totalCount} />
    </div>
  );
}