export async function enableDevToolsInStaging() {
  if (process.env.NODE_ENV !== 'production') {
    try {
      // await import(
      //   /* @vite-ignore */
      //   'react-devtools'
      // );
      // console.log('DevTools enabled');
      console.log('React DevTools import temporarily commented out for testing.');
    } catch (err) {
      console.error('Failed to load react-devtools', err);
    }
  }
}

export function highlightZeroHeightElements() {
  if (process.env.NODE_ENV === 'development') {
    window.addEventListener('load', () => {
      const all = document.querySelectorAll<HTMLElement>('*');
      all.forEach((el) => {
        if (el.offsetHeight === 0) {
          el.style.outline = '2px dashed red';
          el.title = 'Zero height – may be broken';
        }
      });
    });
  }
}
