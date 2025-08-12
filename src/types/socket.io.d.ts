declare module 'socket.io' {
  const anySocket: any;
  export default anySocket;
}

declare module 'socket.io-client' {
  export function io(...args: any[]): any;
  const defaultExport: any;
  export default defaultExport;
}
