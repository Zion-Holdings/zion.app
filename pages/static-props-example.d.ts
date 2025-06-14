import React from 'react';
interface StaticPropsExamplePageProps {
    data: any[];
}
declare const StaticPropsExamplePage: React.FC<StaticPropsExamplePageProps>;
export declare function getStaticProps(): Promise<{
    props: {
        data: any;
    };
}>;
export default StaticPropsExamplePage;
