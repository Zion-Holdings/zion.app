type Req = {
    method?: string;
    query?: {
        userId?: string;
        user_id?: string;
    };
    headers?: Record<string, string | undefined>;
};
interface JsonRes {
    status: (code: number) => JsonRes;
    json: (data: any) => void;
    end: (data?: any) => void;
    setHeader: (name: string, value: string) => void;
}
export default function handler(req: Req, res: JsonRes): Promise<void>;
export {};
