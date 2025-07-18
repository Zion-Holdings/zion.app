export const logErrorToProduction = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.error(`[PROD ERROR] ${message}`, context);
  } else {
    console.error(`[DEV ERROR] ${message}`, context);
  }
};

export const logInfo = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.log(`[PROD INFO] ${message}`, context);
  } else {
    console.log(`[DEV INFO] ${message}`, context);
  }
};

export const logWarn = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.warn(`[PROD WARN] ${message}`, context);
  } else {
    console.warn(`[DEV WARN] ${message}`, context);
  }
};
