// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/escrow/Escrow.sol";

contract EscrowAgreement is Escrow, Ownable {
    address public talent;
    string public projectDetailsIPFSHash;

    enum EscrowState {
        AWAITING_DEPOSIT,
        AWAITING_DELIVERY,
        AWAITING_APPROVAL,
        COMPLETE,
        DISPUTED
    }
    EscrowState public currentState;

    constructor(address _talentArg, address _clientArg, string memory _projectDetailsIPFSHashArg) Ownable({{initialOwner}}) { // {{initialOwner}} will be clientAddress
        talent = {{talentAddress}};
        projectDetailsIPFSHash = {{projectDetailsIPFSHash}}; // Placeholder for hash, quotes will be added by replacer
        currentState = EscrowState.AWAITING_DEPOSIT;
    }

    function depositFunds() public payable {
        require(msg.sender == owner(), "Only client can deposit");
        // In OpenZeppelin's Escrow, deposit() takes the beneficiary address.
        // Here, 'talent' is the beneficiary of the deposited funds.
        deposit({{talentAddress}});
        currentState = EscrowState.AWAITING_DELIVERY;
    }

    function releaseFunds() public {
        require(msg.sender == owner(), "Only client can release");
        require(currentState == EscrowState.AWAITING_APPROVAL, "Not awaiting approval");
        // In OpenZeppelin's Escrow, release() takes the payee address.
        _release(payable({{talentAddress}})); // payee is talent
        currentState = EscrowState.COMPLETE;
    }

    function markAsDelivered() public {
        require(msg.sender == talent, "Only talent can mark as delivered"); // talent here refers to state variable
        require(currentState == EscrowState.AWAITING_DELIVERY, "Not awaiting delivery");
        currentState = EscrowState.AWAITING_APPROVAL;
    }

    // Basic dispute mechanism - can be expanded
    function raiseDispute() public {
        require(msg.sender == owner() || msg.sender == talent, "Only parties can dispute");
        currentState = EscrowState.DISPUTED;
    }
}
