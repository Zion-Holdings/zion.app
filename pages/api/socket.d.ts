import { Server as IOServer } from 'socket.io';
import type { Server as HTTPServer } from 'http';
export declare const config: {
    api: {
        bodyParser: boolean;
    };
};
interface ResWithSocket {
    socket: {
        server: HTTPServer & {
            io?: IOServer;
        };
    };
    end: (data?: any) => void;
}
export default function handler(_req: any, res: ResWithSocket): void;
export {};
