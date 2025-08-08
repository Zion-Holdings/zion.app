import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta name="theme-color" content="#0b0b10" />
        </Head>
        <body className="bg-black text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}