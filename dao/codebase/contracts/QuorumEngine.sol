// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC5805} from "@openzeppelin/contracts/interfaces/IERC5805.sol"; // IVotes compatible
import {IQuorumEngine} from "./interfaces/IQuorumEngine.sol";

contract QuorumEngine is IQuorumEngine {
    IERC5805 public immutable votesToken; // expects ERC20Votes

    // quorum in basis points (e.g., 2000 = 20%)
    uint256 public quorumBps;

    event QuorumBpsUpdated(uint256 previousBps, uint256 newBps);

    constructor(IERC5805 votesToken_, uint256 quorumBps_) {
        require(address(votesToken_) != address(0), "token=0");
        require(quorumBps_ <= 10_000, "bps>100%");
        votesToken = votesToken_;
        quorumBps = quorumBps_;
    }

    function setQuorumBps(uint256 newBps) external {
        // in a full system, this should be restricted to onlyGovernance; left open for simplicity and to be proxied by DAO
        require(newBps <= 10_000, "bps>100%");
        emit QuorumBpsUpdated(quorumBps, newBps);
        quorumBps = newBps;
    }

    function quorum(uint256 blockNumber) external view override returns (uint256) {
        uint256 supply = votesToken.getPastTotalSupply(blockNumber);
        return (supply * quorumBps) / 10_000;
    }
}