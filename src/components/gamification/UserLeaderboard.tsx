import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
<<<<<<< HEAD
  CardTitle,;
} from '@/components/ui/card;;
import { Trophy } from '@/components/ui/icons;'
;;
export interface LeaderboardEntry {;;
  name: "string;",;";";";";""
  points: "number;";";""
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};";";""
;";";";""
interface UserLeaderboardProps {;";";";";""
  entries: "LeaderboardEntry[];";"
};
;"";
export function UserLeaderboard(): unknown {): unknown {): unknown {): unknown {): unknown {{ entries }: UserLeaderboardProps) {;";""
  return (;";";""
    <Card>;";";";""
      <CardHeader>;";";";";""
        <CardTitle className="flex items-center gap-2">;";";";";""
          <Trophy className="h-5 w-5" /> Leaderboard;""
        </CardTitle>;";""
        <CardDescription>Top users by points</CardDescription>;";";""
      </CardHeader>;";";";""
      <CardContent>;";";";";""
        <div className="space-y-2">;";""
          {entries.map((e, idx) => (;";";""
            <div;";";";""
              key={e.name};";";";";""
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50";";";";""
            >;";";";";""
              <span className="font-medium">;";";""
                {idx + 1}. {e.name};";";";""
              </span>;";";";";""
              <span className="text-sm">{e.points} pts</span>;"
            </div>;
          ))};
        </div>;
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
  CardTitle,
} from '@/components/ui/card'
import { Trophy } from '@/components/ui/icons'
'
export interface LeaderboardEntry {'
  name: "string,;";
  points: "number";
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};"";"";
interface UserLeaderboardProps {""
  entries: "LeaderboardEntry[]"

export function UserLeaderboard(): unknown {): unknown {): unknown {): unknown {): unknown {{ entries }: UserLeaderboardProps) {;""
  return (;"
    <Card>";"
      <CardHeader>";""
        <CardTitle className=flex items-center gap-2>"
          <Trophy className="h-5 w-5 /> Leaderboard"
        </CardTitle>;""
        <CardDescription>Top users by points</CardDescription>;"
      </CardHeader>";"
      <CardContent>";""
        <div className=space-y-2>";"
          {entries.map((e, idx) => (;"
            <div;";"
              key={e.name};"
              className=flex justify-between items-center p-2 rounded-md hover:bg-muted/50";";
            >"
              <span className="font-medium>;""
                {idx + 1}. {e.name};""
              </span>;"";
              <span className=text-sm">{e.points} pts</span>"
            </div>))};
        </div>;
      </CardContent>
    </Card>;"
  );";
}";";
"";
}"";
}"
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
