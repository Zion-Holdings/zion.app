/***********************
Deployment script for Zion DAO
***********************/

const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const initialSupply = ethers.parseEther("1000000");

  const VoteToken = await ethers.getContractFactory("VoteToken");
  const token = await VoteToken.deploy("Zion Vote Token", "ZVT", initialSupply, deployer.address);
  await token.waitForDeployment();
  console.log("VoteToken:", await token.getAddress());

  // Timelock (2 days by default), roles will be set such that governor is proposer/executor
  const minDelay = 2 * 24 * 60 * 60; // 2 days
  const proposers = [];
  const executors = [ethers.ZeroAddress];
  const TimelockController = await ethers.getContractFactory("TimelockController");
  const timelock = await TimelockController.deploy(minDelay, proposers, executors, deployer.address);
  await timelock.waitForDeployment();
  console.log("Timelock:", await timelock.getAddress());

  // Quorum Engine at 20% (2000 bps)
  const QuorumEngine = await ethers.getContractFactory("QuorumEngine");
  const quorum = await QuorumEngine.deploy(token.target, 2000);
  await quorum.waitForDeployment();
  console.log("QuorumEngine:", await quorum.getAddress());

  // Governor
  const ZionDAO = await ethers.getContractFactory("ZionDAO");
  const governor = await ZionDAO.deploy(token.target, timelock.target, quorum.target);
  await governor.waitForDeployment();
  console.log("ZionDAO:", await governor.getAddress());

  // Set timelock roles
  const proposerRole = await timelock.PROPOSER_ROLE();
  const executorRole = await timelock.EXECUTOR_ROLE();
  const cancellerRole = await timelock.CANCELLER_ROLE();
  await (await timelock.grantRole(proposerRole, governor.target)).wait();
  await (await timelock.grantRole(executorRole, ethers.ZeroAddress)).wait();
  await (await timelock.grantRole(cancellerRole, deployer.address)).wait();
  await (await timelock.revokeRole(await timelock.TIMELOCK_ADMIN_ROLE(), deployer.address)).wait();

  // Aux contracts
  const ConstitutionStorage = await ethers.getContractFactory("ConstitutionStorage");
  const constitution = await ConstitutionStorage.deploy("ipfs://Qm...");
  await constitution.waitForDeployment();
  console.log("ConstitutionStorage:", await constitution.getAddress());
  await (await constitution.transferOwnership(await governor.getAddress())).wait();

  const DelegateRegistry = await ethers.getContractFactory("DelegateRegistry");
  const registry = await DelegateRegistry.deploy();
  await registry.waitForDeployment();
  console.log("DelegateRegistry:", await registry.getAddress());

  const Disbursements = await ethers.getContractFactory("Disbursements");
  const disb = await Disbursements.deploy(await governor.getAddress());
  await disb.waitForDeployment();
  console.log("Disbursements:", await disb.getAddress());

  const EpochManager = await ethers.getContractFactory("EpochManager");
  const epoch = await EpochManager.deploy(await governor.getAddress(), 30 * 24 * 60 * 60, Math.floor(Date.now() / 1000) + 60);
  await epoch.waitForDeployment();
  console.log("EpochManager:", await epoch.getAddress());

  const outDir = path.join(__dirname, "../abi");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const artifactsDir = path.join(__dirname, "../artifacts/contracts");
  const abis = [
    ["VoteToken.sol", "VoteToken"],
    ["ZionDAO.sol", "ZionDAO"],
    ["QuorumEngine.sol", "QuorumEngine"],
    ["DelegateRegistry.sol", "DelegateRegistry"],
    ["ConstitutionStorage.sol", "ConstitutionStorage"],
    ["Treasure/Disbursements.sol", "Disbursements"],
    ["Treasure/EpochManager.sol", "EpochManager"],
  ];
  for (const [rel, name] of abis) {
    const p = path.join(artifactsDir, rel, `${name}.json`);
    if (fs.existsSync(p)) {
      const json = JSON.parse(fs.readFileSync(p, "utf8"));
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2));
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});