// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Disbursements.sol";

/// @title EpochManager
/// @notice Allows periodic payouts from the treasury.
contract EpochManager {
    Disbursements public disbursements;
    uint256 public epochDuration;
    uint256 public nextEpochTime;

    constructor(Disbursements _disbursements, uint256 _duration) {
        disbursements = _disbursements;
        epochDuration = _duration;
        nextEpochTime = block.timestamp + _duration;
    }

    /// @notice trigger a periodic payout
    function payout(address recipient, uint256 amount) external {
        require(block.timestamp >= nextEpochTime, "epoch not reached");
        nextEpochTime = block.timestamp + epochDuration;
        disbursements.disburse(recipient, amount);
    }
}
