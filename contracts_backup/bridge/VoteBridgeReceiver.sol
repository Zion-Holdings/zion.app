// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ILayerZeroReceiverV2 {
    function lzReceive(uint32 _srcEid, bytes calldata _path, bytes calldata _message) external payable;
}

interface IGovernanceExecutorLike {
    function onProposal(bytes32 proposalHash, uint256 proposalId) external;
    function onVoteMirror(uint256 proposalId, uint256 forVotes, uint256 againstVotes) external;
}

contract VoteBridgeReceiver is ILayerZeroReceiverV2 {
    address public immutable endpoint;
    address public owner;
    address public executor;

    event OwnerUpdated(address indexed owner);
    event ExecutorUpdated(address indexed executor);

    modifier onlyOwner() { require(msg.sender == owner, "NOT_OWNER"); _; }

    constructor(address _endpoint, address _executor) {
        require(_endpoint != address(0), "endpoint=0");
        endpoint = _endpoint;
        owner = msg.sender;
        executor = _executor;
        emit OwnerUpdated(owner);
        emit ExecutorUpdated(executor);
    }

    function setExecutor(address _executor) external onlyOwner {
        require(_executor != address(0), "executor=0");
        executor = _executor;
        emit ExecutorUpdated(executor);
    }

    function lzReceive(uint32 _srcEid, bytes calldata _path, bytes calldata _message) external payable override {
        require(msg.sender == endpoint, "ONLY_ENDPOINT");
        // Decode the message type and forward
        if (_message.length == 0) revert("EMPTY_MESSAGE");
        uint8 msgType = uint8(_message[0]);
        if (msgType == 1) {
            ( , uint256 proposalId, bytes32 proposalHash) = abi.decode(_message, (uint8, uint256, bytes32));
            IGovernanceExecutorLike(executor).onProposal(proposalHash, proposalId);
        } else if (msgType == 2) {
            ( , uint256 proposalId, uint256 forVotes, uint256 againstVotes) = abi.decode(_message, (uint8, uint256, uint256, uint256));
            IGovernanceExecutorLike(executor).onVoteMirror(proposalId, forVotes, againstVotes);
        } else {
            revert("UNKNOWN_MSG_TYPE");
        }
    }
}