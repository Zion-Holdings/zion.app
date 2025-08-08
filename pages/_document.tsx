import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
    }

  render() {
    return (
      <Html lang="en" className="h-full">
        <Head />
        <body className="h-full bg-white dark:bg-black text-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;