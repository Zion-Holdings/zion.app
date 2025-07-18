// Network utility for online status;
;
/**;
 * Checks if the app is online (browser context).;
 * Returns true if navigator.onLine is available and true, otherwise assumes online in non-browser environments.;
 */;
export async function checkOnline(): unknown {): Promise<boolean> {;
  if (;
    typeof navigator !== 'undefined' &&;'
    typeof navigator.onLine !== 'undefined';
  ) {;
    return navigator.onLine;
  };
  // Assume online if not in a browser;
  return true;
};
'