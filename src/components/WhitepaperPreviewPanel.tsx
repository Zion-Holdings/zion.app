import React, { Suspense } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
const ReactMarkdown = React.lazy(() => import('react-markdown'));

interface Section {
  id: string;
  title: string;
  content: string;
}

interface DistributionDataItem {
  name: string;
  value: number; // Expecting processed percentage for the chart
}

interface WhitepaperPreviewPanelProps {
  sections?: Section[]; // optional to prevent runtime errors when data isn't loaded
  distributionChartData: DistributionDataItem[];
  tokenName?: string; // Optional: to display in the preview if needed
  tokenSupply?: string; // Optional
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF', '#FF00AA', '#00AAAA', '#AAAA00'];

const WhitepaperPreviewPanel: React.FC<WhitepaperPreviewPanelProps> = ({
  sections,
  distributionChartData,
  tokenName,
  tokenSupply
}) => {

  // Normalize sections to an array to avoid "Cannot read property 'map' of undefined" errors
  // when the data hasn't loaded yet. Using a local variable ensures optional chaining isn't
  // required throughout the JSX below.
  const sectionList = sections ?? [];

  // Helper to find specific section content - useful if we want to intersperse chart
  const findSectionContent = (titleSubstring: string): string | undefined => {
    const section = sectionList.find(s =>
      s.title.toLowerCase().includes(titleSubstring.toLowerCase()),
    );
    return section?.content;
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-950 shadow-lg rounded-lg h-full overflow-y-auto prose lg:prose-xl">
      {tokenName && <h1 className="text-3xl font-bold mb-2 text-center">{tokenName} - Whitepaper Draft</h1>}
      {tokenSupply && <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Total Supply: {tokenSupply}</p>}

      {/* Render available sections if any. Using sectionList avoids crashes when
          sections is undefined. */}
      {sectionList.map((section) => {
        // Special handling for Token Distribution to inject the chart
        if (section.title.toLowerCase().includes('token distribution')) {
          return (
            <div key={section.id} className="mb-8 break-words">
              <ReactMarkdown components={{ h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} /> }}>
                {`## ${section.title}`}
              </ReactMarkdown>
              <div className="mb-4">
                <ReactMarkdown>
                  {section.content}
                </ReactMarkdown>
              </div>
              {distributionChartData && distributionChartData.length > 0 && (
                <div className="my-6">
                  <h3 className="text-xl font-semibold text-center mb-3">Distribution Chart</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={distributionChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {distributionChartData.map((entry, index) => (
                            <Cell key={`cell-preview-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                </div>
              )}
            </div>
          );
        }
        // Default rendering for other sections
        return (
          <div key={section.id} className="mb-8 break-words">
            {/* Ensure section titles are also rendered via ReactMarkdown if they contain markdown */}
            <ReactMarkdown components={{ h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} /> }}>
              {`## ${section.title}`}
            </ReactMarkdown>
            {/* Assuming mb-4 was for the content block, not specific markdown elements */}
            <div className="mb-4">
              <ReactMarkdown>
                {section.content}
              </ReactMarkdown>
            </div>
          </div>
        );
      })}
      {/* Show helper text when no sections are present */}
      {sectionList.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">Whitepaper preview will appear here once content is generated and sections are available.</p>
      )}
    </div>
  );
};

export default WhitepaperPreviewPanel;
