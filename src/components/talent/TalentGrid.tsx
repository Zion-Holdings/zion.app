import { TalentCard } from "@/components/talent/TalentCard";
import { TalentSkeleton } from "@/components/talent/TalentSkeleton";
import { TalentProfile } from "@/types/talent";
import { logInfo } from '@/utils/productionLogger';

export interface TalentGridProps {
  talents: TalentProfile[];
  isLoading: boolean;
  onTalentClick: (id: string) => void;
  isAuthenticated: boolean;
  viewProfile?: (id: string) => void;
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
}

export function TalentGrid({ 
  talents, 
  isLoading, 
  onTalentClick, 
  isAuthenticated,
  viewProfile,
  clearFilters,
  handleRequestHire
}: TalentGridProps) {
  const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
      handleRequestHire(talent);
    } else {
      // Default implementation
      logInfo('Request to hire:', { data: talent.id });
    }
  };

  const handleViewProfile = (id: string) => {
    if (viewProfile) {
      viewProfile(id);
    } else {
      onTalentClick(id);
    }
  };
  
  if (isLoading) {
    return <TalentSkeleton />;
  }

  if (!talents || talents.length === 0) {
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>
      {clearFilters && (
        <button 
          onClick={clearFilters}
          className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {talents.map((talent) => (
        <TalentCard
          key={talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent.id)}
          onRequestHire={() => handleRequestHireInternal(talent)}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </div>
  );
}
