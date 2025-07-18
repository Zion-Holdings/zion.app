<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;'';
import { BadgeCheck } from '@/components/ui/icons;'
;'';
export interface Achievement {;;
  id: "string;",;";";";";""
  title: "string;",";";";";""
  description: "string;",;";";";";""
  achieved: "boolean;";";""
};";";""
;";";";""
interface AchievementBadgesProps {;";";";";""
  achievements: "Achievement[];";"
};
;
export function AchievementBadges(): unknown {): unknown {): unknown {): unknown {): unknown {{ achievements }: AchievementBadgesProps) {;
  return (;""
    <Card>;";""
      <CardHeader>;";";""
        <CardTitle>Achievements</CardTitle>;";";";""
      </CardHeader>;";";";";""
      <CardContent className="space-y-3">;";";";""
        {achievements.map((a) => (;";";";";""
          <div key={a.id} className="flex items-start gap-3">;";";";""
            <BadgeCheck;";";";";""
              className={`h-5 w-5 mt-1 ${a.achieved ? 'text-green-600' : 'text-muted-foreground'}`};'
            />;''
            <div>;;
              <p className="font-medium">{a.title}</p>;";";";";""
              <p className="text-sm text-muted-foreground">{a.description}</p>;"
            </div>;
          </div>;
        ))};
      </CardContent>;""
    </Card>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BadgeCheck } from '@/components/ui/icons'
'
export interface Achievement {'
  id: "string,"
  title: string,""
  description: string","
  achieved: boolean""
}"
";"
interface AchievementBadgesProps {"""
  achievements: Achievement[]"

export function AchievementBadges(): unknown {): unknown {): unknown {): unknown {): unknown {{ achievements }: AchievementBadgesProps) {;
  return ("
    <Card>;
      <CardHeader>;"";
        <CardTitle>Achievements</CardTitle>;"";
      </CardHeader>;"";
      <CardContent className="space-y-3">;"
        {achievements.map((a) => (;";"
          <div key={a.id} className=flex items-start gap-3">"
            <BadgeCheck";""
              className={`h-5 w-5 mt-1 ${a.achieved ? 'text-green-600' : 'text-muted-foreground'}`};
            />'
            <div>'
              <p className=font-medium>{a.title}</p>"
              <p className="text-sm text-muted-foreground>{a.description}</p>
            </div>;
          </div>))};"
      </CardContent>"
    </Card>;"
  );";"
};";"
;""
};"
}"

}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
