import { Server as IOServer } from 'socket.io';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Server as NetServer } from 'http';

export const config = { api: { bodyParser: false } };

interface NextApiResponseServerIO extends NextApiResponse {
  socket: NetServer & { io?: IOServer };
}

export default function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    const io = new IOServer(res.socket.server, { path: '/api/socket' });
    res.socket.server.io = io;

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
