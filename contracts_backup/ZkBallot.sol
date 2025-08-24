// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

interface ISemaphoreVerifier {
    function verifyProof(
        uint[2] calldata _pA,
        uint[2][2] calldata _pB,
        uint[2] calldata _pC,
        uint[4] calldata _pubSignals,
        uint merkleTreeDepth
    ) external view returns (bool);
}

/// @title ZkBallot - Anonymous ZK voting with stake weighting using Semaphore
/// @notice Supports single-choice voting with off-chain vote privacy and on-chain proof verification
contract ZkBallot {
    struct Proposal {
        string title;
        string description;
    }

    struct VoteProof {
        uint[2] pA;
        uint[2][2] pB;
        uint[2] pC;
        uint[4] pubSignals; // [nullifierHash, signalHash, externalNullifier, y]
        uint32 merkleTreeDepth;
        uint256 weight; // ZION$ weight provided by admin snapshot
    }

    address public immutable admin;
    ISemaphoreVerifier public immutable verifier;

    // Voting config
    uint256 public immutable groupId; // Semaphore group identifier
    uint64 public immutable votingStarts;
    uint64 public immutable votingEnds;

    // Proposals
    Proposal[] public proposals;

    // Tallying
    mapping(uint256 => uint256) public optionIdToWeightedTotal; // optionId => sum of weights
    mapping(uint256 => bool) public nullifierUsed; // prevent double vote (Sybil)

    event VoteSubmitted(uint256 indexed optionId, uint256 weight, uint256 nullifierHash);
    event ResultsFinalized();

    error NotAdmin();
    error VotingClosed();
    error VotingNotStarted();
    error InvalidProof();
    error NullifierUsed();
    error InvalidOption();

    constructor(
        address _verifier,
        uint256 _groupId,
        uint64 _votingStarts,
        uint64 _votingEnds,
        Proposal[] memory _proposals
    ) {
        require(_verifier != address(0), "verifier");
        require(_votingStarts < _votingEnds, "time");
        require(_proposals.length >= 2, "min 2 options");
        admin = msg.sender;
        verifier = ISemaphoreVerifier(_verifier);
        groupId = _groupId;
        votingStarts = _votingStarts;
        votingEnds = _votingEnds;
        for (uint256 i = 0; i < _proposals.length; i++) {
            proposals.push(_proposals[i]);
        }
    }

    function numProposals() external view returns (uint256) {
        return proposals.length;
    }

    /// @notice Submit a vote with a Semaphore proof. Weight is an off-chain provided snapshot by admin logic.
    /// @dev pubSignals[0] must be nullifierHash; pubSignals[1] must encode signal (optionId);
    ///      pubSignals[2] must be the externalNullifier (e.g., groupId ^ proposalEpoch) bound to this vote session;
    ///      pubSignals[3] can be a placeholder from circuit.
    function submitVote(VoteProof calldata proof, uint256 optionId) external {
        if (block.timestamp < votingStarts) revert VotingNotStarted();
        if (block.timestamp > votingEnds) revert VotingClosed();
        if (optionId >= proposals.length) revert InvalidOption();

        uint256 nullifierHash = proof.pubSignals[0];
        uint256 signalHash = proof.pubSignals[1];
        uint256 externalNullifier = proof.pubSignals[2];

        // Ensure unique vote per identity
        if (nullifierUsed[nullifierHash]) revert NullifierUsed();

        // Bind to this election via external nullifier == groupId
        require(externalNullifier == groupId, "bad EN");

        // Ensure signal matches the chosen optionId
        require(signalHash == optionId, "bad signal");

        bool ok = verifier.verifyProof(
            proof.pA,
            proof.pB,
            proof.pC,
            proof.pubSignals,
            proof.merkleTreeDepth
        );
        if (!ok) revert InvalidProof();

        nullifierUsed[nullifierHash] = true;
        optionIdToWeightedTotal[optionId] += proof.weight;

        emit VoteSubmitted(optionId, proof.weight, nullifierHash);
    }

    /// @notice View helper: return totals for all options
    function getWeightedTotals() external view returns (uint256[] memory) {
        uint256[] memory totals = new uint256[](proposals.length);
        for (uint256 i = 0; i < proposals.length; i++) {
            totals[i] = optionIdToWeightedTotal[i];
        }
        return totals;
    }

    /// @notice Admin can finalize results after voting period
    function finalizeResults() external {
        if (msg.sender != admin) revert NotAdmin();
        if (block.timestamp <= votingEnds) revert VotingClosed();
        emit ResultsFinalized();
    }
}