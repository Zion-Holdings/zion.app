// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EpochManager {
    address public immutable governance;

    uint256 public epochLength; // seconds
    uint256 public nextEpochTime; // timestamp when next epoch can be executed

    struct Recipient {
        address account;
        address token; // address(0) for ETH
        uint256 amount;
    }

    Recipient[] public recipients;

    modifier onlyGovernance() {
        require(msg.sender == governance, "not governance");
        _;
    }

    event EpochExecuted(uint256 timestamp);

    constructor(address governance_, uint256 epochLengthSeconds, uint256 firstEpochTime) {
        governance = governance_;
        epochLength = epochLengthSeconds;
        nextEpochTime = firstEpochTime;
    }

    function setEpochLength(uint256 seconds_) external onlyGovernance {
        epochLength = seconds_;
    }

    function setNextEpochTime(uint256 timestamp_) external onlyGovernance {
        nextEpochTime = timestamp_;
    }

    function setRecipients(Recipient[] calldata newRecipients) external onlyGovernance {
        delete recipients;
        for (uint256 i = 0; i < newRecipients.length; i++) {
            recipients.push(newRecipients[i]);
        }
    }

    function executeEpoch() external {
        require(block.timestamp >= nextEpochTime, "epoch not due");
        for (uint256 i = 0; i < recipients.length; i++) {
            Recipient memory r = recipients[i];
            if (r.token == address(0)) {
                (bool ok, ) = r.account.call{value: r.amount}("");
                require(ok, "eth transfer failed");
            } else {
                require(IERC20(r.token).transfer(r.account, r.amount), "erc20 transfer failed");
            }
        }
        nextEpochTime = block.timestamp + epochLength;
        emit EpochExecuted(block.timestamp);
    }

    receive() external payable {}
}