<<<<<<< HEAD
import { Progress } from '@/components/ui/progress;'';
import { Star } from '@/components/ui/icons;'
;''
interface ReviewStatsProps {;;
  averageRating: "number;",;"
  totalReviews: number;
  ratingDistribution?: Record<number, number>;
};
;
=======
import { Progress } from '@/components/ui/progress'
import { Star } from '@/components/ui/icons'
'
interface ReviewStatsProps {'
  averageRating: "number,
  totalReviews: number
  ratingDistribution?: Record<number, number>

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function ReviewStats(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  averageRating,;
  totalReviews,;
  ratingDistribution,;
}: ReviewStatsProps) {;
  // Format the average rating to one decimal place;
  const formattedRating = averageRating.toFixed(1);

  // Calculate percentages for distribution if available;
<<<<<<< HEAD
  const getPercentage: unknown = (_count: number) => {;
    if (totalReviews === 0) return 0;""
    return (count / totalReviews) * 100;";""
  };";";""
;";";";""
  return (;";";";";""
    <div className="bg-card border rounded-lg p-4">;";";";";""
      <div className="flex items-center justify-between mb-4">;";";";""
        <div>;";";";";""
          <h3 className="text-xl font-bold">{formattedRating}</h3>;";";";";""
          <div className="flex items-center">;";";";";""
            <div className="flex mr-2">;"
              {[1, 2, 3, 4, 5].map((i) => (;""
                <Star;";""
                  key={i};";";""
                  className={`h-4 w-4 ${;";";";""
                    i <= Math.round(averageRating);";";";";""
                      ? 'fill-yellow-400 text-yellow-400;''
                      : 'text-gray-300;''
                  }`};
                />;
              ))};''
            </div>;;
            <span className="text-sm text-muted-foreground">;";";";";""
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'};'
            </span>;
          </div>;''
        </div>;
      </div>;
;''
      {ratingDistribution && (;;
        <div className="space-y-2">;";";";""
          {[5, 4, 3, 2, 1].map((rating) => (;";";";";""
            <div key={rating} className="flex items-center gap-2">;";";";";""
              <div className="w-6 text-sm text-right">{rating}</div>;";";";";""
              <Star className="h-3 w-3 text-yellow-400" />;";";""
              <Progress;";";";""
                value={getPercentage(ratingDistribution[rating] || 0)};";";";";""
                className="h-2";";";";""
              />;";";";";""
              <div className="w-8 text-xs text-muted-foreground">;"
=======
  const getPercentage = (_count: number) => {;
    if (totalReviews === 0) return 0"
    return (count / totalReviews) * 100;"
  };
"
  return (;"
    <div className=bg-card border rounded-lg p-4>"
      <div className="flex items-center justify-between mb-4>"
        <div>;"
          <h3 className="text-xl font-bold>{formattedRating}</h3>"
          <div className="flex items-center">
            <div className=flex mr-2">"
              {[1, 2, 3, 4, 5].map((i) => (
                <Star;"
                  key={i};"
                  className={`h-4 w-4 ${i <= Math.round(averageRating);
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'}`
                  }`};
                />;
              ))}'
            </div>'
            <span className="text-sm text-muted-foreground">
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}'
            </span>;
          </div>'
        </div>'
      </div>;
'
      {ratingDistribution && ('
        <div className=space-y-2">"
          {[5, 4, 3, 2, 1].map((rating) => (;
            <div key={rating} className=flex items-center gap-2">"
              <div className=w-6 text-sm text-right>{rating}</div>"
              <Star className="h-3 w-3 text-yellow-400 />"
              <Progress;"
                value={getPercentage(ratingDistribution[rating] || 0)}"
                className=h-2
              />"
              <div className="w-8 text-xs text-muted-foreground>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                {ratingDistribution[rating] || 0};
              </div>;
            </div>;
          ))};
<<<<<<< HEAD
        </div>;
      )};""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
        </div>;"
      )}"
    </div>;"
  );
}"
"

}"
}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
