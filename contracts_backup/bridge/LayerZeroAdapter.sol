// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { IBridgeAdapter } from "../interfaces/IBridgeAdapter.sol";

interface ILayerZeroEndpointV2 {
    function send(
        uint32 _dstEid,
        bytes calldata _path,
        bytes calldata _message,
        bytes calldata _options,
        bytes calldata _payInZRO,
        address _refundAddress
    ) external payable;

    function quote(
        uint32 _dstEid,
        bytes calldata _path,
        bytes calldata _message,
        bytes calldata _options,
        bool _payInZRO
    ) external view returns (uint256 nativeFee, uint256 zroFee);
}

contract LayerZeroAdapter is IBridgeAdapter {
    ILayerZeroEndpointV2 public immutable endpoint;
    address public owner;

    event OwnerUpdated(address indexed owner);

    modifier onlyOwner() {
        require(msg.sender == owner, "NOT_OWNER");
        _;
    }

    constructor(address _endpoint) {
        require(_endpoint != address(0), "endpoint=0");
        endpoint = ILayerZeroEndpointV2(_endpoint);
        owner = msg.sender;
        emit OwnerUpdated(owner);
    }

    function setOwner(address _owner) external onlyOwner {
        require(_owner != address(0), "owner=0");
        owner = _owner;
        emit OwnerUpdated(owner);
    }

    function sendMessage(
        uint16 dstChainId,
        bytes calldata dstAddress,
        bytes calldata payload
    ) external payable override {
        // LayerZero v2 uses 32-bit endpoint ids
        uint32 dstEid = uint32(dstChainId);
        bytes memory options = bytes("");
        bytes memory payInZRO = bytes("");
        endpoint.send{ value: msg.value }(
            dstEid,
            dstAddress,
            payload,
            options,
            payInZRO,
            msg.sender
        );
        emit MessageSent(dstChainId, msg.sender, payload);
    }

    function estimateFees(
        uint16 dstChainId,
        bytes calldata dstAddress,
        bytes calldata payload
    ) external view override returns (uint256 nativeFee) {
        uint32 dstEid = uint32(dstChainId);
        bytes memory options = bytes("");
        (nativeFee, ) = endpoint.quote(dstEid, dstAddress, payload, options, false);
    }
}