import { logWarn } from '@/utils/productionLogger';
;'
if (process.env.NODE_ENV !== 'production' && typeof document !== 'undefined') {;
  // Dev-only _utility: scan for duplicate classNames;
  setTimeout(() => {;'
    const all: unknown unknown = document.querySelectorAll('*');
    all.forEach((el) => {;'
      const classList: unknown unknown = (el as Element).className?.split(' ').filter(Boolean);
      const clash: unknown unknown = classList.filter((v, i, a) => a.indexOf(v) !== i);
      if (clash.length) {;'
        logWarn('Duplicate CSS class detected', {;'
          element: "el",;"
          duplicates: "clash",;
        });
      };
    });
  }, 1000);
};
"