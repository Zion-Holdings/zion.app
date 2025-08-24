// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { IBridgeAdapter } from "./interfaces/IBridgeAdapter.sol";

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

abstract contract ERC20 is IERC20 {
    string public name;
    string public symbol;
    uint8 public immutable decimals = 18;

    uint256 internal _totalSupply;
    mapping(address => uint256) internal _balances;
    mapping(address => mapping(address => uint256)) internal _allowances;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    function totalSupply() public view override returns (uint256) { return _totalSupply; }
    function balanceOf(address account) public view override returns (uint256) { return _balances[account]; }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public view override returns (uint256) { return _allowances[owner][spender]; }

    function approve(address spender, uint256 amount) public override returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        uint256 currentAllowance = _allowances[sender][msg.sender];
        require(currentAllowance >= amount, "ERC20: insufficient allowance");
        unchecked { _approve(sender, msg.sender, currentAllowance - amount); }
        _transfer(sender, recipient, amount);
        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0) && recipient != address(0), "ERC20: zero address");
        uint256 senderBalance = _balances[sender];
        require(senderBalance >= amount, "ERC20: balance");
        unchecked {
            _balances[sender] = senderBalance - amount;
        }
        _balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
    }

    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0) && spender != address(0), "ERC20: zero address");
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: mint to zero");
        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: burn from zero");
        uint256 bal = _balances[account];
        require(bal >= amount, "ERC20: burn amount");
        unchecked { _balances[account] = bal - amount; }
        _totalSupply -= amount;
        emit Transfer(account, address(0), amount);
    }
}

contract ZIONToken is ERC20 {
    // Roles
    address public owner;
    address public bridge;
    address public governance;

    // Quorum override per chain id for governance mirroring
    mapping(uint256 => uint256) public quorumOverrideBps; // in basis points, 10000 = 100%

    event OwnerUpdated(address indexed owner);
    event BridgeUpdated(address indexed bridge);
    event GovernanceUpdated(address indexed governance);
    event QuorumOverrideSet(uint256 indexed chainId, uint256 bps);

    modifier onlyOwner() { require(msg.sender == owner, "NOT_OWNER"); _; }
    modifier onlyBridge() { require(msg.sender == bridge, "NOT_BRIDGE"); _; }
    modifier onlyGovernance() { require(msg.sender == governance, "NOT_GOV"); _; }

    constructor(
        string memory _name,
        string memory _symbol,
        address _owner,
        address _bridge,
        address _governance,
        address initialHolder,
        uint256 initialSupply
    ) ERC20(_name, _symbol) {
        require(_owner != address(0), "owner=0");
        owner = _owner;
        bridge = _bridge;
        governance = _governance;
        if (initialSupply > 0) {
            _mint(initialHolder, initialSupply);
        }
        emit OwnerUpdated(owner);
        emit BridgeUpdated(bridge);
        emit GovernanceUpdated(governance);
    }

    // Bridge mint/burn hooks for wrapped assets
    function bridgeMint(address to, uint256 amount) external onlyBridge {
        _mint(to, amount);
    }

    function bridgeBurn(address from, uint256 amount) external onlyBridge {
        _burn(from, amount);
    }

    // Governance controlled mint for mirrored supply or incentives
    function governanceMint(address to, uint256 amount) external onlyGovernance {
        _mint(to, amount);
    }

    function governanceBurn(address from, uint256 amount) external onlyGovernance {
        _burn(from, amount);
    }

    function setOwner(address _owner) external onlyOwner {
        require(_owner != address(0), "owner=0");
        owner = _owner;
        emit OwnerUpdated(owner);
    }

    function setBridge(address _bridge) external onlyOwner {
        bridge = _bridge;
        emit BridgeUpdated(bridge);
    }

    function setGovernance(address _gov) external onlyOwner {
        governance = _gov;
        emit GovernanceUpdated(governance);
    }

    function setQuorumOverride(uint256 chainId, uint256 bps) external onlyGovernance {
        require(bps <= 10000, "bps>10000");
        quorumOverrideBps[chainId] = bps;
        emit QuorumOverrideSet(chainId, bps);
    }
}