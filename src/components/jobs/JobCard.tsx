import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Job } from '@/types/jobs';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light">
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
          {job.location && (
            <p className="text-sm text-zion-slate-light">{job.location}</p>
          )}
        </div>
        <p className="text-zion-slate-light">{job.description}</p>
        <Link href={`/careers/${job.id}`} className="inline-block">
          <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
            Apply Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
