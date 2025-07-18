export function registerServiceWorker(): ;
  if (;
    'serviceWorker' in navigator &&;'
    !(navigator as Navigator & { connection?: { saveData?: boolean } });
<<<<<<< HEAD
      .connection?.saveData'
  ) {;
    window.addEventListener('load', () => {;
      navigator.serviceWorker.register('/service-worker.js')'
    });
  };
};
}'
=======
      .connection?.saveData;''
  ) {;;
    window.addEventListener('load', () => {;;'
      navigator.serviceWorker.register('/service-worker.js');''
    });
  };
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''