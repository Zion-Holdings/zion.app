if (process.env.NODE_ENV !== 'production' && typeof document !== 'undefined') {
  // Dev-only utility: scan for duplicate classNames
  setTimeout(() => {
    const all = document.querySelectorAll('*');
    all.forEach(el => {
      const classList = (el as Element).className?.split(' ').filter(Boolean);
      const clash = classList.filter((v, i, a) => a.indexOf(v) !== i);
      if (clash.length) {
        console.warn('Duplicate CSS class detected', el, clash);
      }
    });
  }, 1000);
}
