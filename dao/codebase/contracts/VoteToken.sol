// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/// @title VoteToken
/// @notice ERC20 token used for ZionDAO voting with staking capability.
contract VoteToken is ERC20, ERC20Burnable {
    /// @notice mapping of address to staked amount
    mapping(address => uint256) public stakedBalance;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    /// @notice mint initial supply to an address
    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    /// @notice stake tokens to participate in governance
    function stake(uint256 amount) external {
        _burn(_msgSender(), amount);
        stakedBalance[_msgSender()] += amount;
    }

    /// @notice unstake staked tokens
    function unstake(uint256 amount) external {
        require(stakedBalance[_msgSender()] >= amount, "insufficient stake");
        stakedBalance[_msgSender()] -= amount;
        _mint(_msgSender(), amount);
    }
}
