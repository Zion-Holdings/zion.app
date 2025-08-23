declare module 'socket.io' {
  const anySocket: unknown;
  export default anySocket;
}

declare module 'socket.io-client' {
  export function io(...args: unknown[]): unknown;
  const defaultExport: unknown;
  export default defaultExport;
}
