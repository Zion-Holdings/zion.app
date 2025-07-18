export function registerServiceWorker(): ;
  if (;
    'serviceWorker' in navigator &&;
    !(navigator as Navigator & { connection?: { saveData?: boolean } });
      .connection?.saveData'
  ) {;
    window.addEventListener('load', () => {;
      navigator.serviceWorker.register('/service-worker.js')'
    });
  };
};
}'
}
}'
}'