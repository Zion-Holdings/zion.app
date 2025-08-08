import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter } from 'next/router';

export default function TalentDetail() {
  const { query } = useRouter();
  return (
    <EnhancedLayout>
      <div className="py-10">Talent: {String(query.slug || '')}</div>
    </EnhancedLayout>
  );
}