import { RecommendedRole } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TalentCardPreview } from './TalentCardPreview';
import { Users, DollarSign, Clock, Briefcase } from 'lucide-react'; // Added Briefcase

interface RoleCardProps {
  role: RecommendedRole;
  onInviteTalent: (talentId: string, roleTitle: string) => void;
}

export const RoleCard = ({ role, onInviteTalent }: RoleCardProps) => {
  return (
    <Card className="mb-6 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold">{role.role}</CardTitle>
            <CardDescription className="mt-1">{role.description}</CardDescription>
          </div>
          {/* Placeholder for Add/Remove role button */}
        </div>
        <div className="flex flex-wrap gap-2 text-sm mt-2.5">
          <Badge variant="secondary">
            <DollarSign className="h-4 w-4 mr-1.5" />
            {`$${role.hourlyRateRange.min} - $${role.hourlyRateRange.max}/hr`}
          </Badge>
          <Badge variant="secondary">
            <Clock className="h-4 w-4 mr-1.5" />
            {`${role.weeklyHours} hrs/week`}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {role.matchedTalent && role.matchedTalent.length > 0 ? (
          <>
            <h4 className="text-sm font-medium text-muted-foreground mb-2.5">Suggested Talent ({role.matchedTalent.length}):</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {role.matchedTalent.map((talent) => (
                <TalentCardPreview
                  key={talent.id}
                  talent={talent}
                  onInvite={onInviteTalent}
                  roleTitle={role.role}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">No specific talent matches found for this role based on current criteria. You can still add this role to your team.</p>
        )}
      </CardContent>
    </Card>
  );
};
