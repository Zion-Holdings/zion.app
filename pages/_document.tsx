import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const themeScript = `(() => {try{var t=localStorage.getItem('theme');var e=t==='dark'||(t==='system'?!window.matchMedia||(window.matchMedia('(prefers-color-scheme: dark)').matches):false);var n=e?'dark':'light';var r=document.documentElement;r.classList.add(n);r.setAttribute('data-theme',n);}catch(e){}})();`;
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#2563eb" />
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
