import Document, { Html, Head, Main, NextScript } from 'next/document';

class ZionDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#000000" />
        </Head>
        <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ZionDocument;