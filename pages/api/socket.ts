import { Server as IOServer } from 'socket.io'
import type { IncomingMessage, Server, ServerResponse } from 'http'

export const config = { api: { bodyParser: false } }

type ResWithIO = ServerResponse & { socket: Server & { io?: IOServer } }

export default function handler(_req: IncomingMessage, res: ResWithIO) {
  if (!res.socket.io) {
    const io = new IOServer(res.socket, { path: '/api/socket' })
    res.socket.io = io

    io.on('connection', socket => {
      socket.on('join-room', (roomId: string) => socket.join(roomId))
      socket.on('send-message', ({ roomId, message }) => {
        socket.to(roomId).emit('receive-message', message)
      })
    })
  }
  res.writeHead(200)
  res.end()
}
