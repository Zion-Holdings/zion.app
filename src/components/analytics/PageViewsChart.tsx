<<<<<<< HEAD
import React from 'react;';
import {;
  Card,;''
  CardContent,;
  CardDescription,;
  CardHeader,;''
  CardTitle,;;
} from '@/components/ui/card;'';
import { DynamicAnalyticsChart as AnalyticsChart } from '@/utils/dynamicComponents;'
;''
interface PageViewsChartProps {;;
  data: "Array<{ date: string; views: number "}>;";";";";""
  timeRange: "string;",;";";";";""
  onTimeRangeChange: "(range: string) => void;";"
=======
import React from 'react'
import {;
  Card,'
  CardContent,'
  CardDescription,
  CardHeader,'
  CardTitle,'
} from '@/components/ui/card'
import { DynamicAnalyticsChart as AnalyticsChart } from '@/utils/dynamicComponents'
'
interface PageViewsChartProps {'
  data: "Array<{ date: string; views: number }>;"";
  timeRange: string,;"";
  onTimeRangeChange: (range: string) => void""
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
};

export function PageViewsChart(): unknown {): unknown {): unknown {): unknown {): unknown {{;
<<<<<<< HEAD
  data,;""
  timeRange,;";""
  onTimeRangeChange,;";";""
}: PageViewsChartProps) {;";";";""
  return (;";";";";""
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;";";";";""
      <CardHeader className="pb-2">;";";";";""
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>;";";";";""
        <CardDescription className="text-zion-slate-light">;";""
          Daily page view statistics;";";""
        </CardDescription>;";";";""
      </CardHeader>;";";";";""
      <CardContent className="p-0 pb-4">;";";";""
        <AnalyticsChart;";";";";""
          title=";""
          data={(data || []).map((item) => ({;";";";";""
            name: "item.date",;";";";";""
            value: "item.views",;";";";";""
            date: "item.date",;";";";";""
            views: "item.views",;";";";""
          }))};";";";";""
          dataKeys={['views']};'
          timeRange={timeRange};
          onTimeRangeChange={onTimeRangeChange};
        />;
      </CardContent>;''
    </Card>;
  );
};
;
};''
}
}''
}''
=======
  data,
  timeRange,;"
  onTimeRangeChange,;";
}: PageViewsChartProps) {";";
  return ("
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden>;"";
      <CardHeader className="pb-2">;"
        <CardTitle className=text-white text-lg">Page Views Trend</CardTitle>""
        <CardDescription className=text-zion-slate-light>";"
          Daily page view statistics;"
        </CardDescription>;";"
      </CardHeader>;"
      <CardContent className=p-0 pb-4>";";
        <AnalyticsChart"
          title=""
          data={(data || []).map((item) => ({;";";
            name: item.date,;"
            value: item.views",""
            date: item.date,"
            views: "item.views,;"";
          }))};"""
          dataKeys={['views']}'
          timeRange={timeRange};
          onTimeRangeChange={onTimeRangeChange};
        />;
      </CardContent>'
    </Card>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
