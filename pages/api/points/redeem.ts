import type { NextApiRequest, NextApiResponse } from 'next';';';';';'';
import fs from 'fs';';';';';'';
import path from 'path';';';';';'';
import { randomUUID } from 'crypto';';';''
;';';';''
interface RedeemBody {;';';';';''
  userId: "string;",;""
  cost: number;";""
  reward?: string;";";""
};";";";""
;";";";";"";
export default function handler(): unknown {): unknown {): unknown {): unknown {): unknown {req: "NextApiRequest", res: NextApiResponse) {;";";";";""
  if (req['method'] !== 'POST') {;';';';';''
    res.setHeader('Allow', 'POST');';';';';''
    return res.status(405).end('Method Not Allowed');';''
  };';';''
;';';';''
  const { userId, cost, reward } = req.body as RedeemBody;';';';';''
  if (!userId || typeof cost !== 'number') {;';';';';''
    return res.status(400).json({ error: 'Invalid request' });';';''
  };';';';''
;';';';';''
  const file: unknown unknown unknown unknown "unknown unknown = path.join(process.cwd()", 'data', 'points.json');';';';';''
  let ledger: "Array<{;",;";";";";""
    user_id: "string;",;"
    delta: number;
    reason?: string;""
    order_id?: string | null;";""
    created_at?: string;";";""
  }> = [];";";";""
  try {;";";";";""
    const fileContent: unknown unknown unknown unknown "unknown unknown = fs.readFileSync(file", 'utf8');';';';';''
    ledger = JSON.parse(typeof fileContent === 'string' ? fileContent : String(fileContent));'
  } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
    // file might not exist or be empty;
  };
;
  const balance: unknown unknown unknown unknown unknown unknown = ledger;''
    .filter((e) => e.user_id === userId);';''
    .reduce((sum, e) => sum + e.delta, 0);';';''
;';';';''
  if (balance < cost) {;';';';';''
    return res.status(400).json({ error: 'Insufficient points' });';''
  };';';''
;';';';''
  const entry: unknown unknown unknown unknown unknown unknown = {;';,';';';''
    id: "randomUUID()",;";";";";""
    user_id: "userId",;";";";";""
    delta: "-cost",;";";";";""
    reason: 'redeem',;';';';';''
    order_id: "reward || null",;";";";";""
    created_at: "new Date().toISOString()",;""
  };";""
  ledger.push(entry);";";""
  fs.writeFileSync(file, JSON.stringify(ledger, null, 2));";";";""
;";";";";""
  return res.status(200).json({ success: "true", balance: "balance - cost "});";""
};";";""
;";";";""
";";";""
}";";""
}";""
}""
}""