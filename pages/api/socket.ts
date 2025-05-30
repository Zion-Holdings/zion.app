import { Server as IOServer } from 'socket.io';
import type { Server as HTTPServer } from 'http';

export const config = { api: { bodyParser: false } };

interface ResWithSocket {
  socket: { server: HTTPServer & { io?: IOServer } };
  end: (data?: any) => void;
}
export default function handler(_req: any, res: ResWithSocket) {
  const httpServer = res.socket.server;
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
