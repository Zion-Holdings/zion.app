import { useRouter } from 'next/router';

export default function FinalExamPage() {
  const { query } = useRouter();
  const slug = String(query.slug || '');

  const requestCertificate = async () => {
    const res = await fetch(`/api/academy/certify?course=${encodeURIComponent(slug)}&name=${encodeURIComponent('Learner')}`);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zion-certificate-${slug}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="py-10 space-y-4">
      <h1 className="text-2xl font-semibold">Final Exam</h1>
      <p className="text-gray-600 dark:text-gray-300">After passing the exam, generate your branded certificate and add it to your profile.</p>
      <button className="rounded-md bg-green-600 text-white px-4 py-2" onClick={requestCertificate}>Generate Certificate</button>
    </div>
  );
}