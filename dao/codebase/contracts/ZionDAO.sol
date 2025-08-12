// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./VoteToken.sol";
import "./QuorumEngine.sol";
import "./DelegateRegistry.sol";

/// @title ZionDAO
/// @notice Simple DAO contract with stake-based voting and 5 day voting periods.
contract ZionDAO {
    struct Proposal {
        address proposer;
        string description;
        uint256 start;
        uint256 end;
        bool executed;
        uint256 forVotes;
        uint256 againstVotes;
    }

    uint256 public constant VOTING_PERIOD = 5 days;

    VoteToken public voteToken;
    QuorumEngine public quorumEngine;
    DelegateRegistry public delegateRegistry;
    uint256 public proposalCount;

    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event ProposalCreated(uint256 id, address proposer, string description);
    event Voted(uint256 indexed id, address voter, bool support, uint256 weight);
    event ProposalExecuted(uint256 indexed id, bool succeeded);

    constructor(VoteToken _token, QuorumEngine _quorum, DelegateRegistry _registry) {
        voteToken = _token;
        quorumEngine = _quorum;
        delegateRegistry = _registry;
    }

    /// @notice create a new proposal
    function propose(string calldata description) external returns (uint256 id) {
        id = ++proposalCount;
        proposals[id] = Proposal({
            proposer: msg.sender,
            description: description,
            start: block.timestamp,
            end: block.timestamp + VOTING_PERIOD,
            executed: false,
            forVotes: 0,
            againstVotes: 0
        });
        emit ProposalCreated(id, msg.sender, description);
    }

    /// @notice vote on a proposal
    function vote(uint256 id, bool support) external {
        Proposal storage prop = proposals[id];
        require(block.timestamp >= prop.start, "voting not started");
        require(block.timestamp <= prop.end, "voting ended");
        require(!hasVoted[id][msg.sender], "already voted");

        uint256 weight = voteToken.stakedBalance(msg.sender);
        require(weight > 0, "no stake");

        hasVoted[id][msg.sender] = true;
        if (support) {
            prop.forVotes += weight;
        } else {
            prop.againstVotes += weight;
        }
        emit Voted(id, msg.sender, support, weight);
    }

    /// @notice finalize a proposal and emit result
    function finalize(uint256 id) external {
        Proposal storage prop = proposals[id];
        require(block.timestamp > prop.end, "voting not ended");
        require(!prop.executed, "already executed");
        uint256 totalVotes = prop.forVotes + prop.againstVotes;
        bool quorumMet = quorumEngine.hasQuorum(totalVotes);
        bool passed = quorumMet && prop.forVotes > prop.againstVotes;
        prop.executed = true;
        emit ProposalExecuted(id, passed);
    }
}
