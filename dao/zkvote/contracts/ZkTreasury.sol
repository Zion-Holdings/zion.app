// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title ZkTreasury
/// @notice Minimal treasury that releases funds for passed proposals.
contract ZkTreasury {
    address public dao;

    mapping(uint256 => uint256) public allocations;

    constructor(address _dao) {
        dao = _dao;
    }

    receive() external payable {}

    /// @notice set allocation amount for a proposal
    function setAllocation(uint256 id, uint256 amount) external {
        require(msg.sender == dao, "only dao");
        allocations[id] = amount;
    }

    /// @notice release funds when DAO signals success
    function release(uint256 id, address payable to) external {
        require(msg.sender == dao, "only dao");
        uint256 amount = allocations[id];
        allocations[id] = 0;
        to.transfer(amount);
    }
}
