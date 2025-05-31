import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export interface TalentProfileProps {
  id: string;
  full_name: string;
  bio?: string;
  skills?: string[];
  profile_picture_url?: string;
}

export default function TalentProfile({
  full_name,
  bio,
  skills = [],
  profile_picture_url,
}: TalentProfileProps) {
  return (
    <main className="min-h-screen bg-zion-blue py-8 text-white" data-testid="talent-details">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          {profile_picture_url ? (
            <AvatarImage src={profile_picture_url} alt={full_name} />
          ) : (
            <AvatarFallback>{full_name.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
        <h1 className="text-3xl font-bold" data-testid="talent-name">{full_name}</h1>
        {bio && <p className="text-center max-w-xl">{bio}</p>}
        {skills.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <li key={skill} className="bg-zion-blue-light rounded px-2 py-1 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        )}
        <Button className="bg-zion-purple text-white" data-testid="contact-button">
          Contact
        </Button>
      </div>
    </main>
  );
}
