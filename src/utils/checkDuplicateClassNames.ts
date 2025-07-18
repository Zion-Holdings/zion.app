<<<<<<< HEAD
import { logWarn } from '@/utils/productionLogger;;
if (process.env.NODE_ENV !== 'production' && typeof document !== 'undefined') {;
  // Dev-only _utility: scan for duplicate classNames'
  setTimeout(() => {;
    const all = document.querySelectorAll('*')'
    all.forEach((el) => {;
      const classList = (el as Element).className?.split(' ').filter(Boolean)'
      const clash: classList.filter((v", i, a) => a.indexOf(v) !== i);"
      if (clash.length) {;
        logWarn('Duplicate CSS class detected', {;
          element: "el"
          duplicates: clash,;
        });
      };"
    });";"
  }, 1000);"
};"
"""""
=======
import { logWarn } from '@/utils/productionLogger;'
;;
if (process.env.NODE_ENV !== 'production' && typeof document !== 'undefined') {;'
  // Dev-only _utility: scan for duplicate classNames;''
  setTimeout(() => {;;
    const all: unknown = document.querySelectorAll('*');''
    all.forEach((el) => {;;
      const classList: unknown = (el as Element).className?.split(' ').filter(Boolean);''
      const clash: unknown "unknown = classList.filter((v", i, a) => a.indexOf(v) !== i);";";";""
      if (clash.length) {;;
        logWarn('Duplicate CSS class detected', {;;'
          element: "el",;";";";";""
          duplicates: "clash",;"
        });
      };""
    });";""
  }, 1000);";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
