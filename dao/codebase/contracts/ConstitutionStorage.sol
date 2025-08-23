// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title ConstitutionStorage
/// @notice Stores versions of the Zion Constitution as IPFS hashes.
contract ConstitutionStorage {
    struct Version {
        string ipfsHash;
        uint256 timestamp;
    }

    Version[] public versions;

    event ConstitutionAdded(string ipfsHash, uint256 timestamp);

    /// @notice add a new constitution version
    function addVersion(string memory ipfsHash) external {
        versions.push(Version(ipfsHash, block.timestamp));
        emit ConstitutionAdded(ipfsHash, block.timestamp);
    }

    /// @notice get count of versions stored
    function versionCount() external view returns (uint256) {
        return versions.length;
    }
}
