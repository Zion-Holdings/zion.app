import { Server as IOServer } from 'socket.io';
import type { Server as NetServer, IncomingMessage, ServerResponse } from 'http';

export const config = { api: { bodyParser: false } };

// Basic request/response types so this handler works in Node or serverless environments
type Req = IncomingMessage & { method?: string };
interface SocketServer extends NetServer {
  io?: IOServer;
}
interface Res extends ServerResponse {
  socket: SocketServer;
}

export default function handler(req: Req, res: Res) {
  const httpServer = res.socket as SocketServer;
  if (!httpServer.io) {
    const io = new IOServer(httpServer, { path: '/api/socket' });
    httpServer.io = io;

    io.on('connection', (socket) => {
      socket.on('join-room', (roomId: string) => {
        socket.join(roomId);
      });

      socket.on('send-message', ({ roomId, message }) => {
        socket.to(roomId).emit('receive-message', message);
      });
    });
  }
  res.end();
}
