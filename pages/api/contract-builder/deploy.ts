import type { NextApiRequest, NextApiResponse } from 'next';
import { Interface } from 'ethers/lib/utils';

// Simple ABI for demonstration (release/refund)
const abi = [
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)',
  'function release() external',
  'function refund() external',
  'function client() view returns (address)',
  'function talent() view returns (address)',
  'function totalAmount() view returns (uint256)'
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { bytecode, constructorArgs } = req.body || {};

  if (!bytecode || !constructorArgs) {
    return res.status(400).json({ error: 'bytecode and constructorArgs are required' });
  }

  try {
    const iface = new Interface(abi);
    const data = iface.encodeDeploy(constructorArgs);
    const tx = {
      data: bytecode + data.slice(2),
      // gas and value are intentionally left for client to estimate via MetaMask
    };
    return res.status(200).json({ abi, tx });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' });
  }
}