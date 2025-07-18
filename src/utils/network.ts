// Network utility for online status;
/**;
 * Checks if the app is online (browser context).;
 * Returns true if navigator.onLine is available and true, otherwise assumes online in non-browser environments.;
 */;
export async function checkOnline(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<boolean> {;
  if (;
<<<<<<< HEAD
    typeof navigator !== 'undefined' &&;
    typeof navigator.onLine !== 'undefined;
  ) {;
    return navigator.onLine;
  }'
  // Assume online if not in a browser;
  return true;
};
}'
=======
    typeof navigator !== 'undefined' &&;;'
    typeof navigator.onLine !== 'undefined;'
  ) {;
    return navigator.onLine;
  };''
  // Assume online if not in a browser;
  return true;
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''