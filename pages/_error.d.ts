declare const CustomErrorPage: {
    ({ statusCode }: {
        statusCode?: number;
    }): import("react/jsx-runtime").JSX.Element;
    getInitialProps({ res, err }: {
        res: any;
        err: any;
    }): {
        statusCode: any;
    };
};
export default CustomErrorPage;
