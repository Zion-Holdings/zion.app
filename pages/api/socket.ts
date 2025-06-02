import { Server as IOServer, Socket } from 'socket.io';
import type { Server as HTTPServer } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next'; // Using NextApiResponse for res type

// This type is specific to Next.js an
// It augments the Node.js http.ServerResponse with a socket property that has the HTTP server
// and potentially the Socket.IO server instance.
export interface NextApiResponseWithSocket extends NextApiResponse {
  socket: NextApiResponse["socket"] & {
    server: HTTPServer & {
      io?: IOServer<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>; // Typed IOServer
    };
  };
  end: () => void; // end is typically called without arguments in this context
}

// Define structure for chat messages if known, otherwise use unknown
interface ChatMessagePayload {
  roomId: string;
  message: unknown; // Or a more specific type like string, object, etc.
  // senderId?: string; // Example: if you want to include who sent it
}

// Define events and their payloads for better type safety with Socket.IO
interface ServerToClientEvents {
  'receive-message': (message: unknown) => void; // Matches the payload of 'send-message'
  // Add other events from server to client
}

interface ClientToServerEvents {
  'join-room': (roomId: string) => void;
  'send-message': (payload: ChatMessagePayload) => void;
  // Add other events from client to server
}

// Use Record<string, never> for truly empty interfaces if no properties are expected
interface InterServerEvents extends Record<string, never> {
  // For server-to-server communication, if any
}

interface SocketData extends Record<string, never> {
  // For data you might want to attach to the socket instance itself, e.g., socket.data.username
  // username?: string;
}


export const config = { api: { bodyParser: false } }; // bodyParser is false for Socket.IO routes

export default function handler(
  req: NextApiRequest, // req is not used but Next.js expects it
  res: NextApiResponseWithSocket
) {
  if (res.socket.server.io) {
    // console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    // Adapt the HTTP server to a Socket.IO server
    const io = new IOServer<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >(res.socket.server, {
      path: '/api/socket', // Ensure this path matches client-side connection
      addTrailingSlash: false // Important for Next.js
    });
    res.socket.server.io = io;

    io.on('connection', (socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>) => {
      console.log('A client connected:', socket.id);

      socket.on('join-room', (roomId: string) => {
        console.log(`Socket ${socket.id} joining room ${roomId}`);
        socket.join(roomId);
      });

      socket.on('send-message', (payload: ChatMessagePayload) => {
        // Emit to all clients in the room except the sender
        console.log(`Message from ${socket.id} in room ${payload.roomId}:`, payload.message);
        socket.to(payload.roomId).emit('receive-message', payload.message);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });
  }
  res.end();
}
