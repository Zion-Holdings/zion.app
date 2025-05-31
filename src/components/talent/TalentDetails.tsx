import React from 'react';
import { TalentProfile } from '@/types/talent';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'; // Adjusted path
import { Badge } from '@/components/ui/badge'; // Adjusted path

export interface TalentDetailsProps {
  talent: TalentProfile & { social?: Record<string, string> };
}
const TalentDetails: React.FC<TalentDetailsProps> = ({ talent }) => (
  <main className="min-h-screen bg-background text-foreground py-8" data-testid="talent-details"> {/* Adjusted background/text for better Card visibility */}
    <div className="container mx-auto px-4 space-y-8"> {/* Increased spacing */}
      {/* Basic Info Section - Could also be a Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{talent.full_name}</CardTitle>
          {talent.professional_title && <CardDescription className="text-xl">{talent.professional_title}</CardDescription>}
        </CardHeader>
        {talent.bio && (
          <CardContent>
            <p>{talent.bio}</p>
          </CardContent>
        )}
      </Card>

      {/* Skills Card */}
      {(talent.skills && talent.skills.length > 0) ? (
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {talent.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader><CardTitle>Skills</CardTitle></CardHeader>
          <CardContent><p>No skills specified.</p></CardContent>
        </Card>
      )}

      {/* Hourly Rate Card */}
      {talent.hourly_rate !== undefined ? ( // Check for undefined specifically if 0 is a valid rate
        <Card>
          <CardHeader>
            <CardTitle>Hourly Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">${talent.hourly_rate}/hr</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader><CardTitle>Hourly Rate</CardTitle></CardHeader>
          <CardContent><p>Not specified.</p></CardContent>
        </Card>
      )}

      {/* Contact Section - Assuming this remains as is, or could be a card too */}
      {talent.social && (
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {Object.entries(talent.social).map(([platform, url]) => (
                <li key={platform}>
                  <a href={url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)} {/* Capitalize platform name */}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Portfolio (Key Projects) Card */}
      {(talent.key_projects && talent.key_projects.length > 0) ? (
        <Card>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
            <CardDescription>Key projects and contributions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {talent.key_projects.map((proj, i) => (
              <div key={i} className="border-b pb-2 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-lg">{proj.title}</h3>
                <p className="text-sm text-muted-foreground">{proj.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader><CardTitle>Portfolio</CardTitle></CardHeader>
          <CardContent><p>No projects listed.</p></CardContent>
        </Card>
      )}

      {/* Hire Button - Can be part of a general actions card or standalone */}
      <div className="mt-8 flex justify-center"> {/* Added margin top and centering */}
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Hire {talent.full_name.split(' ')[0]}</Button>
      </div>
    </div>
  </main>
);

export default TalentDetails;
