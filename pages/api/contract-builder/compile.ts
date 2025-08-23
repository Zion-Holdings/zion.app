import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    clientAddress = '0x0000000000000000000000000000000000000000',
    talentAddress = '0x0000000000000000000000000000000000000000',
    tokenAddress = '0x0000000000000000000000000000000000000000',
    totalAmount = '0',
    projectTitle = 'Project',
  } = req.body || {};

  const source = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ZionEscrow is ReentrancyGuard {
    address public client;
    address public talent;
    IERC20 public token; // If zero address during deployment, use native ETH
    uint256 public totalAmount;
    string public projectTitle;

    enum State { Funded, Released, Refunded }
    State public state;

    event Funded(address indexed from, uint256 amount);
    event Released(address indexed to, uint256 amount);
    event Refunded(address indexed to, uint256 amount);

    constructor(address _client, address _talent, address _token, uint256 _totalAmount, string memory _projectTitle) {
        client = _client;
        talent = _talent;
        token = IERC20(_token);
        totalAmount = _totalAmount;
        projectTitle = _projectTitle;
        state = State.Funded;
    }

    function release() external nonReentrant {
        require(msg.sender == client, "Only client");
        require(state == State.Funded, "Not funded");
        state = State.Released;
        if (address(token) == address(0)) {
            (bool ok, ) = payable(talent).call{ value: totalAmount }("");
            require(ok, "ETH transfer failed");
        } else {
            require(token.transfer(talent, totalAmount), "ERC20 transfer failed");
        }
        emit Released(talent, totalAmount);
    }

    function refund() external nonReentrant {
        require(msg.sender == talent, "Only talent");
        require(state == State.Funded, "Not funded");
        state = State.Refunded;
        if (address(token) == address(0)) {
            (bool ok, ) = payable(client).call{ value: totalAmount }("");
            require(ok, "ETH transfer failed");
        } else {
            require(token.transfer(client, totalAmount), "ERC20 transfer failed");
        }
        emit Refunded(client, totalAmount);
    }

    receive() external payable {}
}
`;

  return res.status(200).json({ source });
}