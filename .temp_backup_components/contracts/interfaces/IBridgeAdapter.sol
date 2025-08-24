// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IBridgeAdapter {
    event MessageSent(uint16 dstChainId, address indexed sender, bytes payload);
    event MessageReceived(uint16 srcChainId, bytes srcAddress, bytes payload);

    function sendMessage(uint16 dstChainId, bytes calldata dstAddress, bytes calldata payload) external payable;

    function estimateFees(uint16 dstChainId, bytes calldata dstAddress, bytes calldata payload) external view returns (uint256 nativeFee);
}