import React from 'react'
import {;
  ResponsiveContainer,;
  PieChart,'
  Pie,'
  Cell,
  Tooltip,'
  Legend,'
} from 'recharts'
const ReactMarkdown = React.lazy(() => import('react-markdown'))'
'
interface Section {'
  id: "string,"
  title: string,""
  content: string""
}";"
;";"
interface DistributionDataItem {""
  name: string","
  value: number // Expecting processed percentage for the chart""
}"
";"
interface WhitepaperPreviewPanelProps {"""
  sections?: Section[] // optional to prevent runtime errors when data isn't loaded'
  distributionChartData: DistributionDataItem[]
  tokenName?: string // Optional: to display in the preview if needed'
  tokenSupply?: string // Optional'
}
'
const COLORS = ['
  '#0088FE','
  '#00C49F','
  '#FFBB28','
  '#FF8042','
  '#AA00FF','
  '#FF00AA','
  '#00AAAA','
  '#AAAA00','