interface Req {
    method?: string;
    query?: {
        q?: string;
    };
}
interface JsonRes {
    status: (code: number) => JsonRes;
    json: (data: any) => void;
    end: () => void;
}
export default function handler(req: Req, res: JsonRes): void;
export {};
