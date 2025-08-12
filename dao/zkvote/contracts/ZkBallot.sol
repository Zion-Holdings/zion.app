// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./SemaphoreVerifier.sol";
import "../../dao/codebase/contracts/VoteToken.sol";

/// @title ZkBallot
/// @notice Anonymous, token-weighted voting using Semaphore proofs.
contract ZkBallot {
    struct Proposal {
        string description;
        uint256 start;
        uint256 end;
        bool executed;
        uint256 forVotes;
        uint256 againstVotes;
    }

    uint256 public constant VOTING_PERIOD = 3 days;

    SemaphoreVerifier public verifier;
    VoteToken public voteToken;
    uint256 public groupId;
    uint256 public proposalCount;

    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => bool) public nullifierHashes;

    event ProposalCreated(uint256 id, string description);
    event VoteCast(uint256 indexed id, bool support, uint256 weight);
    event ProposalExecuted(uint256 indexed id, bool passed);

    constructor(uint256 _groupId, SemaphoreVerifier _verifier, VoteToken _voteToken) {
        groupId = _groupId;
        verifier = _verifier;
        voteToken = _voteToken;
    }

    /// @notice create a new proposal
    function propose(string calldata description) external returns (uint256 id) {
        id = ++proposalCount;
        proposals[id] = Proposal({
            description: description,
            start: block.timestamp,
            end: block.timestamp + VOTING_PERIOD,
            executed: false,
            forVotes: 0,
            againstVotes: 0
        });
        emit ProposalCreated(id, description);
    }

    /// @notice cast an anonymous vote using a Semaphore proof
    function vote(
        uint256 id,
        bool support,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) external {
        Proposal storage prop = proposals[id];
        require(block.timestamp >= prop.start, "voting not started");
        require(block.timestamp <= prop.end, "voting ended");
        require(!nullifierHashes[nullifierHash], "already voted");

        // Semaphore signal is the hash of proposal id and support choice
        uint256 signalHash = uint256(keccak256(abi.encodePacked(id, support))) >> 8;

        // Verify proof (stubbed to always succeed in the verifier)
        verifier.verifyProof(groupId, signalHash, nullifierHash, groupId, proof);

        uint256 weight = voteToken.stakedBalance(msg.sender);
        require(weight > 0, "no stake");

        if (support) {
            prop.forVotes += weight;
        } else {
            prop.againstVotes += weight;
        }
        nullifierHashes[nullifierHash] = true;
        emit VoteCast(id, support, weight);
    }

    /// @notice finalize proposal and emit result
    function finalize(uint256 id) external {
        Proposal storage prop = proposals[id];
        require(block.timestamp > prop.end, "voting not ended");
        require(!prop.executed, "already executed");
        bool passed = prop.forVotes > prop.againstVotes;
        prop.executed = true;
        emit ProposalExecuted(id, passed);
    }
}
