pragma solidity ^0.8.19;

/// @title SemaphoreVerifier
/// @notice Minimal stub verifier for Semaphore proofs used for testing.
contract SemaphoreVerifier {
    /// @notice Verifies a Semaphore proof. This is a stub that always succeeds.
    /// In production, replace with the real Semaphore verifier contract.
    function verifyProof(
        uint256 /*root*/,
        uint256 /*signalHash*/,
        uint256 /*nullifierHash*/,
        uint256 /*externalNullifier*/,
        uint256[8] calldata /*proof*/
    ) external pure {}
}
