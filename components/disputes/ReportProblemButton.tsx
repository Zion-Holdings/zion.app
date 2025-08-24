import Link from 'next/link';

export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string; entityType?: 'milestone' | 'contract' | 'thread'; entityId?: string; }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">
        Report a Problem
      </a>
    </Link>
  );
}