import { Server as IOServer } from 'socket.io';
export const config = { api: { bodyParser: false } };
export default function handler(_req, res) {
    const httpServer = res.socket.server;
    if (!httpServer.io) {
        const io = new IOServer(httpServer, { path: '/api/socket' });
        httpServer.io = io;
        io.on('connection', (socket) => {
            socket.on('join-room', (roomId) => {
                socket.join(roomId);
            });
            socket.on('send-message', ({ roomId, message }) => {
                socket.to(roomId).emit('receive-message', message);
            });
        });
    }
    res.end();
}
