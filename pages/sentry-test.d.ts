declare const SentryTestPage: () => import("react/jsx-runtime").JSX.Element;
export declare const getServerSideProps: (context: any) => Promise<{
    props: {
        serverSideErrorOccurred: boolean;
    };
}>;
export default SentryTestPage;
