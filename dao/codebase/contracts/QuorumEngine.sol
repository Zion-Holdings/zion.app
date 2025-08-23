// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./VoteToken.sol";

/// @title QuorumEngine
/// @notice Handles quorum checks for ZionDAO proposals.
contract QuorumEngine {
    VoteToken public voteToken;
    uint256 public constant QUORUM_PERCENT = 20; // 20% quorum

    constructor(VoteToken _token) {
        voteToken = _token;
    }

    /// @notice determine if quorum has been reached based on total staked tokens
    function hasQuorum(uint256 votes) public view returns (bool) {
        uint256 total = voteToken.totalSupply();
        uint256 requiredVotes = (total * QUORUM_PERCENT) / 100;
        return votes >= requiredVotes;
    }
}
