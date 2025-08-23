// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title Governance Executor
/// @notice Executes actions after cross-chain proposals finalize.
contract GovernanceExecutor {
    address public dao;

    event ActionExecuted(uint256 indexed proposalId, address target, uint256 value);

    constructor(address _dao) {
        dao = _dao;
    }

    /// @notice execute an arbitrary call authorised by the DAO
    function execute(uint256 proposalId, address target, uint256 value, bytes calldata data) external {
        require(msg.sender == dao, "only dao");
        (bool ok, ) = target.call{value: value}(data);
        require(ok, "exec failed");
        emit ActionExecuted(proposalId, target, value);
    }
}
