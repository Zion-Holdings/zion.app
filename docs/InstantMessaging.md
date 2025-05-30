# Instant Messaging Setup

This project uses **Socket.IO** for real-time chat rooms keyed by the related order or service ID. The client connects through `/api/socket` and the server stores the Socket.IO instance on the HTTP server. Messages should also be persisted via a `ChatMessage` table in your database.

## Installing dependencies

```bash
npm install socket.io socket.io-client
```

## Minimal server

```ts
// pages/api/socket.ts
import { Server as IOServer } from 'socket.io'
import type { IncomingMessage, ServerResponse, Server } from 'http'

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
```

## Django Channel Layer
Add the following configuration to `settings.py` on the Django side:

```python
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {"hosts": [("redis", 6379)]},
    }
}
```

Messages should be stored in a `ChatMessage` model that includes the room id, sender, content and timestamp.
