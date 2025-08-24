// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/// @notice Minimal LayerZero endpoint interface used for cross chain transfers
interface ILayerZeroEndpoint {
    function send(
        uint16 _dstChainId,
        bytes calldata _destination,
        bytes calldata _payload,
        address payable _refundAddress,
        address _zroPaymentAddress,
        bytes calldata _adapterParams
    ) external payable;
}

/// @title ZION Dollar on zkSync
/// @notice ERC20 token bridged via LayerZero with adjustable quorum threshold.
contract ZIONDollar is ERC20, ERC20Burnable {
    ILayerZeroEndpoint public endpoint;
    uint256 public quorumPercent;

    event Bridged(uint16 indexed chainId, address indexed from, uint256 amount);

    constructor(ILayerZeroEndpoint _endpoint, uint256 _quorumPercent)
        ERC20("ZION Dollar", "ZION$")
    {
        endpoint = _endpoint;
        quorumPercent = _quorumPercent;
    }

    /// @notice update quorum percent used by governance checks
    function setQuorumPercent(uint256 newPercent) external {
        quorumPercent = newPercent;
    }

    /// @notice bridge tokens to another chain via LayerZero
    function bridgeTo(
        uint16 chainId,
        bytes calldata destination,
        uint256 amount
    ) external payable {
        _burn(msg.sender, amount);
        bytes memory payload = abi.encode(msg.sender, amount);
        endpoint.send{value: msg.value}(
            chainId,
            destination,
            payload,
            payable(msg.sender),
            address(0),
            bytes("")
        );
        emit Bridged(chainId, msg.sender, amount);
    }

    /// @notice receive bridged tokens from LayerZero endpoint
    function lzReceive(
        uint16,
        bytes calldata,
        uint64,
        bytes calldata payload
    ) external {
        require(msg.sender == address(endpoint), "invalid sender");
        (address to, uint256 amount) = abi.decode(payload, (address, uint256));
        _mint(to, amount);
    }
}
