import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const blockingScript = `
    (function() {
      try {
        var themePreset = localStorage.getItem('themePreset');
        var theme = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (themePreset === 'dark' || themePreset === 'neon' || themePreset === 'startup') {
          document.documentElement.classList.add('dark');
        } else if (themePreset === 'light' || themePreset === 'forest' || themePreset === 'ocean' || themePreset === 'sunset') {
          document.documentElement.classList.remove('dark');
        } else if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
          document.documentElement.classList.remove('dark');
        } else if (!themePreset && !theme && prefersDark) {
            document.documentElement.classList.add('dark');
        } else if (!themePreset && !theme && !prefersDark) {
            document.documentElement.classList.remove('dark');
        }
        // If a themePreset or theme is stored but isn't one of the recognized values,
        // and prefersDark is not applicable (because something *is* stored),
        // the class will remain unchanged (defaulting to light by not adding 'dark').
      } catch (_) {}
    })();
  `;
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: blockingScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
