// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleAgreement {
    address public client;
    address public talent;
    string public projectDetailsIPFSHash;

    constructor(address _clientArg, address _talentArg, string memory _projectDetailsIPFSHashArg) {
        client = {{clientAddress}};
        talent = {{talentAddress}};
        projectDetailsIPFSHash = {{projectDetailsIPFSHash}}; // Placeholder for hash, quotes will be added by replacer
    }
}
