// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title TimelockGuardian
/// @notice Simple timelock contract for treasury actions.
contract TimelockGuardian {
    address public admin;
    uint256 public delay; // seconds

    struct Txn {
        address target;
        uint256 value;
        bytes data;
        bool executed;
        uint256 eta;
    }

    mapping(bytes32 => Txn) public queued;

    event Queued(bytes32 indexed id, address target, uint256 value, uint256 eta);
    event Executed(bytes32 indexed id, address target, uint256 value);

    constructor(uint256 _delay) {
        admin = msg.sender;
        delay = _delay;
    }

    function queue(address target, uint256 value, bytes calldata data) external returns (bytes32 id) {
        require(msg.sender == admin, "only admin");
        id = keccak256(abi.encode(target, value, data, block.timestamp));
        queued[id] = Txn(target, value, data, false, block.timestamp + delay);
        emit Queued(id, target, value, queued[id].eta);
    }

    function execute(bytes32 id) external payable {
        Txn storage txn = queued[id];
        require(!txn.executed, "already executed");
        require(block.timestamp >= txn.eta, "timelock not expired");
        txn.executed = true;
        (bool ok, ) = txn.target.call{value: txn.value}(txn.data);
        require(ok, "tx failed");
        emit Executed(id, txn.target, txn.value);
    }
}
