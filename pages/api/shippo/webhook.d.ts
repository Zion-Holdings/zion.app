interface Req {
    method?: string;
    body?: any;
}
interface JsonRes {
    status: (code: number) => JsonRes;
    json: (data: any) => void;
    end: (data?: any) => void;
    setHeader: (name: string, value: string) => void;
}
export default function handler(req: Req, res: JsonRes): Promise<void>;
export {};
