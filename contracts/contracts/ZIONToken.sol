// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/// @title ZION Token - Utility token for Zion Marketplace
/// @notice Fixed supply ERC-20 token used for rewards and incentives
contract ZIONToken is ERC20, ERC20Burnable, Ownable {
    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10 ** 18; // 1B ZION with 18 decimals

    constructor(address initialOwner) ERC20("ZION Token", "ZION") Ownable(initialOwner) {
        _mint(initialOwner, MAX_SUPPLY);
    }
}