import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TalentProfile as TalentProfileType } from '@/types/talent';

interface TalentProfileProps extends TalentProfileType {}

export default function TalentProfile(props: TalentProfileProps) {
  const { profile_picture_url, full_name, bio, skills } = props;

  return (
    <div className="space-y-4" data-testid="talent-profile">
      <div className="flex items-center space-x-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={profile_picture_url} alt={full_name} />
          <AvatarFallback>{full_name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold" data-testid="talent-name">{full_name}</h1>
      </div>
      {bio && <p>{bio}</p>}
      {skills && skills.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <li key={skill} className="bg-zion-blue-light rounded px-2 py-1 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      )}
      <Button className="bg-zion-purple text-white">Contact</Button>
    </div>
  );
}
