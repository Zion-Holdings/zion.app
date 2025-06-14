export const ChartContainer: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export const ChartTooltip: typeof RechartsPrimitive.Tooltip;
export const ChartTooltipContent: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export const ChartLegend: typeof RechartsPrimitive.Legend;
export const ChartLegendContent: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export function ChartStyle({ id, config }: {
    id: any;
    config: any;
}): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
import * as React from "react";
import * as RechartsPrimitive from "recharts";
