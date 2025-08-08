// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Governor} from "@openzeppelin/contracts/governance/Governor.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Disbursements {
    address public immutable governance;

    struct Grant {
        address token;
        address recipient;
        uint256 amount;
        bool paid;
    }

    Grant[] public grants;

    modifier onlyGovernance() {
        require(msg.sender == governance, "not governance");
        _;
    }

    constructor(address governance_) {
        governance = governance_;
    }

    function createGrant(address token, address recipient, uint256 amount) external onlyGovernance returns (uint256 id) {
        grants.push(Grant({token: token, recipient: recipient, amount: amount, paid: false}));
        return grants.length - 1;
    }

    function payGrant(uint256 id) external onlyGovernance {
        Grant storage g = grants[id];
        require(!g.paid, "paid");
        g.paid = true;
        if (g.token == address(0)) {
            (bool ok, ) = g.recipient.call{value: g.amount}("");
            require(ok, "eth transfer failed");
        } else {
            require(IERC20(g.token).transfer(g.recipient, g.amount), "erc20 transfer failed");
        }
    }

    receive() external payable {}
}