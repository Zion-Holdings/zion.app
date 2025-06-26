import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){var r=document.documentElement;r.classList.add(t);r.setAttribute('data-theme',t);}}catch(e){}})();`;
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
