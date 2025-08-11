// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DelegateRegistry {
    // scope => delegator => delegatee
    mapping(bytes32 => mapping(address => address)) private _delegates;

    event Delegated(bytes32 indexed scope, address indexed delegator, address indexed delegatee);

    function setDelegate(bytes32 scope, address delegatee) external {
        _delegates[scope][msg.sender] = delegatee;
        emit Delegated(scope, msg.sender, delegatee);
    }

    function clearDelegate(bytes32 scope) external {
        _delegates[scope][msg.sender] = address(0);
        emit Delegated(scope, msg.sender, address(0));
    }

    function getDelegate(bytes32 scope, address delegator) external view returns (address) {
        return _delegates[scope][delegator];
    }
}