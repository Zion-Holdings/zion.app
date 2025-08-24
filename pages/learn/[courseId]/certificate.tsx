import { useRouter } from 'next/router';
import CertificatePreview from '../../../components/learn/CertificatePreview';

export default function CertificatePage() {
  const router = useRouter();
  const { courseId } = router.query as { courseId: string };
  if (!courseId) return null;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
  );
}