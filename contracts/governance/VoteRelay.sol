// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { IBridgeAdapter } from "../interfaces/IBridgeAdapter.sol";

contract VoteRelay {
    address public owner;
    IBridgeAdapter public bridge;
    address public executor; // GovernanceExecutor on destination

    // Proposal id => proposal hash
    mapping(uint256 => bytes32) public proposalHashById;

    event OwnerUpdated(address indexed owner);
    event BridgeUpdated(address indexed bridge);
    event ExecutorUpdated(address indexed executor);
    event ProposalSent(uint256 indexed proposalId, bytes32 proposalHash, uint16 dstChainId);
    event VoteMirrorSent(uint256 indexed proposalId, uint256 forVotes, uint256 againstVotes, uint16 dstChainId);

    modifier onlyOwner() { require(msg.sender == owner, "NOT_OWNER"); _; }

    constructor(address _bridge, address _executor) {
        owner = msg.sender;
        bridge = IBridgeAdapter(_bridge);
        executor = _executor;
        emit OwnerUpdated(owner);
    }

    function setBridge(address _bridge) external onlyOwner {
        bridge = IBridgeAdapter(_bridge);
        emit BridgeUpdated(_bridge);
    }

    function setExecutor(address _executor) external onlyOwner {
        executor = _executor;
        emit ExecutorUpdated(_executor);
    }

    function sendProposal(uint16 dstChainId, bytes calldata dstAddress, uint256 proposalId, bytes32 proposalHash) external onlyOwner payable {
        proposalHashById[proposalId] = proposalHash;
        bytes memory payload = abi.encode(
            uint8(1), // type: proposal
            proposalId,
            proposalHash
        );
        bridge.sendMessage{ value: msg.value }(dstChainId, dstAddress, payload);
        emit ProposalSent(proposalId, proposalHash, dstChainId);
    }

    function sendVoteMirror(uint16 dstChainId, bytes calldata dstAddress, uint256 proposalId, uint256 forVotes, uint256 againstVotes) external onlyOwner payable {
        bytes memory payload = abi.encode(
            uint8(2), // type: vote mirror
            proposalId,
            forVotes,
            againstVotes
        );
        bridge.sendMessage{ value: msg.value }(dstChainId, dstAddress, payload);
        emit VoteMirrorSent(proposalId, forVotes, againstVotes, dstChainId);
    }
}