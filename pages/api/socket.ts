import { Server as IOServer } from 'socket.io';
import type { Server as NetServer } from 'http';

export const config = { api: { bodyParser: false } };

interface NextApiResponseServerIO {
  socket: {
    server: NetServer & { io?: IOServer };
  };
  end: () => void;
}

export default function handler(req: any, res: NextApiResponseServerIO) {
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
