declare module 'socket.io' {
  const anySocket: unknown;
  export default anySocket;
}

declare module 'socket.io-client' {
  export interface Socket {
    emit(event: string, ...args: unknown[]): void;
    on(event: string, callback: (...args: unknown[]) => void): void;
    disconnect(): void;
  }
  export function io(...args: unknown[]): Socket;
  const defaultExport: typeof io;
  export default defaultExport;
}
