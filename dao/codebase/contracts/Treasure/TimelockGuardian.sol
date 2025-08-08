// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimelockGuardian {
    TimelockController public immutable timelock;
    address public guardian;

    event GuardianUpdated(address indexed previousGuardian, address indexed newGuardian);

    modifier onlyGuardian() {
        require(msg.sender == guardian, "not guardian");
        _;
    }

    constructor(TimelockController timelock_, address guardian_) {
        timelock = timelock_;
        guardian = guardian_;
        emit GuardianUpdated(address(0), guardian_);
    }

    function updateGuardian(address newGuardian) external onlyGuardian {
        emit GuardianUpdated(guardian, newGuardian);
        guardian = newGuardian;
    }

    function cancel(bytes32 id) external onlyGuardian {
        timelock.cancel(id);
    }
}