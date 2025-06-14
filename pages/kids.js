import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from 'next/dynamic';
const StorybookComponent = dynamic(() => import('@/pages/academy/Storybook'), {
    ssr: false,
    loading: () => _jsx("p", { children: "Loading storybook..." }) // Optional loading component
});
export default StorybookComponent;
