import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import fs from 'fs';
import path from 'path';

function readSchema(name: string): string | null {
  try {
    const p = path.join(process.cwd(), 'data', 'schema', `${name}.json`);
    if (!fs.existsSync(p)) return null;
    return fs.readFileSync(p, 'utf8');
  } catch {
    return null;
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const org = readSchema('organization');
    const site = readSchema('website');
    const services = readSchema('services');

    return (
      <Html lang="en">
        <Head>
          {org && (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: org }} />)}
          {site && (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: site }} />)}
          {services && (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: services }} />)}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
