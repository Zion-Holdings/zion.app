import { TalentProfile } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DollarSign, Briefcase, User } from 'lucide-react';

interface TalentCardPreviewProps {
  talent: TalentProfile;
  onInvite: (talentId: string, role: string) => void; // role is passed for context
  roleTitle: string; // To specify which role the invite is for
}

export const TalentCardPreview = ({ talent, onInvite, roleTitle }: TalentCardPreviewProps) => {
  return (
    <Card className="w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="h-12 w-12 border">
            <AvatarImage src={talent.profile_picture_url} alt={talent.full_name} />
            <AvatarFallback>{talent.full_name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h3 className="text-md font-semibold leading-tight">{talent.full_name}</h3>
            <p className="text-xs text-muted-foreground truncate">{talent.professional_title}</p>
            {talent.hourly_rate && (
              <Badge variant="secondary" className="mt-1 text-xs">
                <DollarSign className="h-3 w-3 mr-1" />
                {`$${talent.hourly_rate}/hr`}
              </Badge>
            )}
          </div>
        </div>
        {talent.skills && talent.skills.length > 0 && (
          <div className="mt-2.5">
            {talent.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" className="mr-1 mb-1 text-xs">{skill}</Badge>
            ))}
            {talent.skills.length > 3 && <Badge variant="outline" className="text-xs">...</Badge>}
          </div>
        )}
        <Button
          onClick={() => onInvite(talent.id, roleTitle)}
          className="w-full mt-3 text-xs h-8"
          size="sm"
        >
          <User className="h-3.5 w-3.5 mr-1.5" />
          Invite to Team for {roleTitle}
        </Button>
      </CardContent>
    </Card>
  );
};
