// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ILayerZeroEndpoint {
    function send(
        uint16 _dstChainId,
        bytes calldata _destination,
        bytes calldata _payload,
        address payable _refundAddress,
        address _zroPaymentAddress,
        bytes calldata _adapterParams
    ) external payable;
}

/// @title Cross-chain vote relay
/// @notice Mirrors proposals and vote results between zkSync and Starknet.
contract VoteRelay {
    ILayerZeroEndpoint public endpoint;
    bytes public starknetApp;

    event ProposalForwarded(uint256 indexed id, bytes32 proposalHash);
    event VoteResultMirrored(uint256 indexed id, uint256 forVotes, uint256 againstVotes);

    constructor(ILayerZeroEndpoint _endpoint, bytes memory _starknetApp) {
        endpoint = _endpoint;
        starknetApp = _starknetApp;
    }

    /// @notice send proposal hash to Starknet
    function forwardProposal(uint16 chainId, uint256 id, bytes32 hash) external payable {
        bytes memory payload = abi.encode(id, hash);
        endpoint.send{value: msg.value}(chainId, starknetApp, payload, payable(msg.sender), address(0), "");
        emit ProposalForwarded(id, hash);
    }

    /// @notice receive vote results from Starknet
    function lzReceive(uint16, bytes calldata, uint64, bytes calldata payload) external {
        require(msg.sender == address(endpoint), "invalid sender");
        (uint256 id, uint256 forVotes, uint256 againstVotes) = abi.decode(payload, (uint256, uint256, uint256));
        emit VoteResultMirrored(id, forVotes, againstVotes);
    }
}
