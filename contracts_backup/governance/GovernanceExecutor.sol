// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ITimelockControllerLike {
    function schedule(bytes32 id, address target, uint256 value, bytes calldata data, uint256 delay) external;
    function execute(bytes32 id, address target, uint256 value, bytes calldata data) external payable;
}

contract GovernanceExecutor {
    address public owner;
    address public voteToken; // ZION$ on this chain
    ITimelockControllerLike public timelock;
    address public rewardVault;

    // proposalId => tallies
    struct Tally { uint256 forVotes; uint256 againstVotes; }
    mapping(uint256 => Tally) public tallies;

    event OwnerUpdated(address indexed owner);
    event TimelockUpdated(address indexed timelock);
    event RewardVaultUpdated(address indexed rewardVault);
    event VoteMirrored(uint256 indexed proposalId, uint256 forVotes, uint256 againstVotes);
    event ProposalFinalized(uint256 indexed proposalId, bytes32 proposalHash);

    modifier onlyOwner() { require(msg.sender == owner, "NOT_OWNER"); _; }

    constructor(address _voteToken, address _timelock, address _rewardVault) {
        owner = msg.sender;
        voteToken = _voteToken;
        timelock = ITimelockControllerLike(_timelock);
        rewardVault = _rewardVault;
        emit OwnerUpdated(owner);
    }

    function setOwner(address _owner) external onlyOwner {
        require(_owner != address(0), "owner=0");
        owner = _owner;
        emit OwnerUpdated(owner);
    }

    function setTimelock(address _timelock) external onlyOwner {
        timelock = ITimelockControllerLike(_timelock);
        emit TimelockUpdated(_timelock);
    }

    function setRewardVault(address _vault) external onlyOwner {
        rewardVault = _vault;
        emit RewardVaultUpdated(_vault);
    }

    // Called by bridge receiver app (offchain or adapter) after decoding payload
    function onProposal(bytes32 proposalHash, uint256 proposalId) external {
        emit ProposalFinalized(proposalId, proposalHash);
    }

    function onVoteMirror(uint256 proposalId, uint256 forVotes, uint256 againstVotes) external {
        tallies[proposalId] = Tally({forVotes: forVotes, againstVotes: againstVotes});
        emit VoteMirrored(proposalId, forVotes, againstVotes);
    }

    // Trigger timelock operation after quorum met
    function scheduleTimelock(bytes32 id, address target, uint256 value, bytes calldata data, uint256 delay) external onlyOwner {
        timelock.schedule(id, target, value, data, delay);
    }

    function executeTimelock(bytes32 id, address target, uint256 value, bytes calldata data) external payable onlyOwner {
        timelock.execute{ value: msg.value }(id, target, value, data);
    }

    // Reward unlock hook
    function unlockRewards(address to, uint256 amount) external onlyOwner {
        (bool ok, ) = rewardVault.call(abi.encodeWithSignature("transfer(address,uint256)", to, amount));
        require(ok, "REWARD_TRANSFER_FAIL");
    }
}