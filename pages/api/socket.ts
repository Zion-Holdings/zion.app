import { Server as IOServer } from 'socket.io';
import type { Server as HTTPServer } from 'http';
import type { NextApiRequest } from 'next'; // Import NextApiRequest for better typing

// Define a more specific type for the response object
interface NextApiResponseWithSocket {
  socket: {
    server: HTTPServer & {
      io?: IOServer;
    };
  };
  end: (data?: any) => void; // Ensure res.end is properly typed
}

export const config = {
  api: {
    bodyParser: false,
  },
};

// Module-scoped variable to store the IO server instance
let ioInstance: IOServer | undefined;
// Flag to ensure 'connection' and other core IO event listeners are attached only once
let ioListenersAttached = false;

export default function handler(_req: NextApiRequest, res: NextApiResponseWithSocket) { // Use NextApiRequest
  const httpServer = res.socket.server;

  if (!ioInstance) {
    // If ioInstance is not available, try to retrieve from httpServer.io
    // This can happen if the module was reloaded (HMR) but the server object persisted.
    if (httpServer.io) {
      console.log('Socket.IO: Reusing existing io instance from httpServer.io.');
      ioInstance = httpServer.io;
    } else {
      console.log('Socket.IO: Initializing new IOServer...');
      ioInstance = new IOServer(httpServer, {
        path: '/api/socket',
        // Example: Add CORS configuration if your client is on a different origin
        // cors: {
        //   origin: "http://localhost:3000",
        //   methods: ["GET", "POST"]
        // }
      });
      httpServer.io = ioInstance; // Attach the new instance to the server object
      console.log('Socket.IO: New IOServer initialized and attached to httpServer.io.');
    }
  } else {
    console.log('Socket.IO: Reusing existing module-scoped ioInstance.');
    // If ioInstance exists but is not on httpServer.io (e.g. server restarted, but module persisted), attach it.
    if (!httpServer.io) {
        console.log('Socket.IO: Attaching module-scoped ioInstance to current httpServer.io');
        httpServer.io = ioInstance;
    }
  }

  // Attach event listeners to the ioInstance only if they haven't been attached yet.
  if (ioInstance && !ioListenersAttached) {
    console.log('Socket.IO: Attaching connection listeners to ioInstance...');
    ioInstance.on('connection', (socket) => {
      console.log(`Socket.IO: Client connected: ${socket.id}`);

      socket.on('join-room', (roomId: string) => {
        socket.join(roomId);
        console.log(`Socket.IO: Client ${socket.id} joined room ${roomId}`);
      });

      socket.on('send-message', ({ roomId, message }: { roomId: string; message: string }) => { // Added basic typing for payload
        // Emit to all clients in the room except the sender
        socket.to(roomId).emit('receive-message', { senderId: socket.id, message });
        console.log(`Socket.IO: Message from ${socket.id} to room ${roomId}: "${message}"`);
      });

      socket.on('disconnect', (reason: string) => {
        console.log(`Socket.IO: Client disconnected: ${socket.id}, Reason: ${reason}`);
      });
    });
    ioListenersAttached = true; // Set the flag to true after attaching listeners
    console.log('Socket.IO: Connection listeners attached.');
  } else if (ioInstance && ioListenersAttached) {
    console.log('Socket.IO: Connection listeners already attached. Skipping re-attachment.');
  }

  res.end(); // Important to end the HTTP request
}
