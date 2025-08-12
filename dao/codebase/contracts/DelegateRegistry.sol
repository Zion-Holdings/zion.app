// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title DelegateRegistry
/// @notice Allows token holders to delegate voting power to another address.
contract DelegateRegistry {
    mapping(address => address) public delegates;

    event Delegated(address indexed delegator, address indexed delegate);

    /// @notice delegate voting power to another address
    function delegate(address to) external {
        delegates[msg.sender] = to;
        emit Delegated(msg.sender, to);
    }

    /// @notice clear delegation
    function clearDelegate() external {
        delegates[msg.sender] = address(0);
        emit Delegated(msg.sender, address(0));
    }

    /// @notice get delegate for an address
    function getDelegate(address owner) external view returns (address) {
        return delegates[owner];
    }
}
