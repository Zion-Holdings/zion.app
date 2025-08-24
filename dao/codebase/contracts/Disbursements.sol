// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./TimelockGuardian.sol";
import "./VoteToken.sol";

/// @title Disbursements
/// @notice Grants and bounty payments from the treasury.
contract Disbursements {
    TimelockGuardian public timelock;
    VoteToken public token;

    constructor(TimelockGuardian _timelock, VoteToken _token) {
        timelock = _timelock;
        token = _token;
    }

    /// @notice send tokens from treasury
    function disburse(address recipient, uint256 amount) external {
        require(msg.sender == address(timelock), "only timelock");
        token.mint(recipient, amount);
    }
}
