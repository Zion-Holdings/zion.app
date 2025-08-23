// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

interface IZkBallotView {
    function getWeightedTotals() external view returns (uint256[] memory);
    function votingEnds() external view returns (uint64);
}

contract ZkTreasury {
    address public immutable admin;
    address public immutable token; // optional ERC20; zero address means native

    event FundsReleased(address to, uint256 amount, uint256 optionId);

    error NotAdmin();
    error VotingNotEnded();
    error QuorumNotReached();
    error TransferFailed();

    constructor(address _admin, address _token) {
        admin = _admin;
        token = _token;
    }

    /// @notice Release funds if a given optionId reached quorum threshold
    /// @param ballot Address of the ZkBallot
    /// @param optionId Option to check
    /// @param quorum Weighted threshold that must be met
    /// @param to Recipient
    /// @param amount Amount to send (native if token==0)
    function releaseIfQuorum(
        address ballot,
        uint256 optionId,
        uint256 quorum,
        address payable to,
        uint256 amount
    ) external {
        if (msg.sender != admin) revert NotAdmin();
        uint64 ends = IZkBallotView(ballot).votingEnds();
        if (block.timestamp <= ends) revert VotingNotEnded();
        uint256[] memory totals = IZkBallotView(ballot).getWeightedTotals();
        if (optionId >= totals.length) revert QuorumNotReached();
        if (totals[optionId] < quorum) revert QuorumNotReached();

        if (token == address(0)) {
            (bool ok, ) = to.call{value: amount}("");
            if (!ok) revert TransferFailed();
        } else {
            // minimal ERC20 interface
            (bool ok, bytes memory data) = token.call(abi.encodeWithSignature("transfer(address,uint256)", to, amount));
            if (!ok || (data.length != 0 && !abi.decode(data, (bool)))) revert TransferFailed();
        }
        emit FundsReleased(to, amount, optionId);
    }

    receive() external payable {}
}