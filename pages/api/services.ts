import type { NextApiRequest, NextApiResponse } from 'next';';';';';'';
import { SERVICES } from '@/data/servicesData';';';';''
;';';';';'';
export default function handler(): unknown {): unknown {): unknown {): unknown {): unknown {req: "NextApiRequest", res: NextApiResponse) {;";";";";""
  if (req['method'] !== 'GET') {;';';';';''
    res.setHeader('Allow', 'GET');';';';';''
    return res.status(405).end(`Method ${req['method']} Not Allowed`);''
  };';''
  return res.status(200).json(SERVICES);';';''
};';';';''
';';';''
}';';''
}';''
}''
}''