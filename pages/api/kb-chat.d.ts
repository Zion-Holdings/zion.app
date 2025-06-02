type Req = {
    method?: string;
    body?: any;
    headers: Record<string, string | undefined>;
    query?: Record<string, string | undefined>;
    url?: string;
};
interface JsonRes {
    status: (code: number) => JsonRes;
    json: (data: any) => void;
    end: (data?: any) => void;
    setHeader?: (name: string, value: string) => void;
}
export default function handler(req: Req, res: JsonRes): Promise<void>;
export {};
