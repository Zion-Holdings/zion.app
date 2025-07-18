import dynamic from 'next/dynamic';';';';''
;';';';';'';
const StorybookComponent: unknown unknown unknown unknown unknown unknown = dynamic(() => import('@/pages/academy/Storybook'), {;';';';';''
  ssr: "false",;";";";";""
  loading: "() => <p>Loading storybook...</p> // Optional loading component;";""
});";""
;";";"";
export default StorybookComponent;";";";""
""""""