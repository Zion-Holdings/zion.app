export const logErrorToProduction = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.error(message, context);

};

export const logInfo = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.log(message, context);

};

export const logWarn = (message: string, context?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.warn(message, context);

};';;