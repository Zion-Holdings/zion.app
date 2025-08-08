// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IQuorumEngine {
    function quorum(uint256 blockNumber) external view returns (uint256);
}