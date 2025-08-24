// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ConstitutionStorage {
    struct Version {
        uint256 versionNumber;
        string ipfsCid; // e.g., ipfs://...
        uint256 timestamp;
    }

    Version[] private _versions;
    address public owner; // set to DAO once deployed

    event VersionAdded(uint256 indexed versionNumber, string ipfsCid);
    event OwnerUpdated(address indexed previousOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    constructor(string memory initialIpfsCid) {
        owner = msg.sender;
        _versions.push(Version({versionNumber: 1, ipfsCid: initialIpfsCid, timestamp: block.timestamp}));
        emit VersionAdded(1, initialIpfsCid);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        emit OwnerUpdated(owner, newOwner);
        owner = newOwner;
    }

    function addVersion(string memory ipfsCid) external onlyOwner returns (uint256 newVersion) {
        newVersion = _versions.length + 1;
        _versions.push(Version({versionNumber: newVersion, ipfsCid: ipfsCid, timestamp: block.timestamp}));
        emit VersionAdded(newVersion, ipfsCid);
    }

    function latestVersion() external view returns (Version memory) {
        return _versions[_versions.length - 1];
    }

    function version(uint256 versionNumber) external view returns (Version memory) {
        require(versionNumber >= 1 && versionNumber <= _versions.length, "bad version");
        return _versions[versionNumber - 1];
    }

    function totalVersions() external view returns (uint256) {
        return _versions.length;
    }
}