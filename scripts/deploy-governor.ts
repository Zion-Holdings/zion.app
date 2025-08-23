import { ethers } from "hardhat";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

async function main() {
  const safeAdmin = process.env.SAFE_ADMIN_ADDRESS;
  if (!safeAdmin) throw new Error("SAFE_ADMIN_ADDRESS is required");

  const tokenName = process.env.TOKEN_NAME || "Zion Token";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "ZION";
  const initialSupply = ethers.utils.parseEther(process.env.INITIAL_SUPPLY || "1000000");

  const votingDelay = Number(process.env.VOTING_DELAY || 1); // blocks
  const votingPeriod = Number(process.env.VOTING_PERIOD || 45818); // ~1 week on Ethereum
  const proposalThreshold = ethers.utils.parseEther(process.env.PROPOSAL_THRESHOLD || "0");
  const quorumFraction = Number(process.env.QUORUM_PERCENT || 4); // 4%
  const timelockDelay = Number(process.env.TIMELOCK_DELAY || 3600); // seconds

  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const Token = await ethers.getContractFactory("ZionToken");
  const token = await Token.deploy(tokenName, tokenSymbol, deployer.address, initialSupply);
  await token.deployed();
  console.log("Token:", token.address);

  const Timelock = await ethers.getContractFactory("ZionTimelock");
  const timelock = await Timelock.deploy(
    timelockDelay,
    [], // proposers will be set later
    [], // executors can be open or set later
    safeAdmin
  );
  await timelock.deployed();
  console.log("Timelock:", timelock.address);

  const Governor = await ethers.getContractFactory("ZionGovernor");
  const governor = await Governor.deploy(
    token.address,
    timelock.address,
    votingDelay,
    votingPeriod,
    proposalThreshold,
    quorumFraction
  );
  await governor.deployed();
  console.log("Governor:", governor.address);

  // Grant proposer and executor roles to Governor, set open executor, set Safe as admin retains admin
  const proposerRole = await timelock.PROPOSER_ROLE();
  const executorRole = await timelock.EXECUTOR_ROLE();
  const cancellerRole = await timelock.CANCELLER_ROLE ? await timelock.CANCELLER_ROLE() : ethers.constants.HashZero;

  await (await timelock.grantRole(proposerRole, governor.address)).wait();
  console.log("Granted PROPOSER_ROLE to Governor");
  await (await timelock.grantRole(executorRole, ethers.constants.AddressZero)).wait();
  console.log("Granted EXECUTOR_ROLE to everyone (AddressZero)");
  if (cancellerRole !== ethers.constants.HashZero) {
    try {
      await (await timelock.grantRole(cancellerRole, safeAdmin)).wait();
      console.log("Granted CANCELLER_ROLE to Safe admin");
    } catch (e) {
      console.log("CANCELLER_ROLE not available or grant failed, continuing");
    }
  }

  // Optional: transfer initial supply to Safe admin
  const toSafe = process.env.TRANSFER_TOKENS_TO_SAFE === "true";
  if (toSafe) {
    const bal = await token.balanceOf(deployer.address);
    await (await token.transfer(safeAdmin, bal)).wait();
    console.log("Transferred all initial tokens to Safe admin");
  }

  const outDir = path.join(__dirname, "../data");
  try { mkdirSync(outDir, { recursive: true }); } catch {}
  const addresses = {
    network: (await deployer.provider!.getNetwork()).name,
    chainId: (await deployer.provider!.getNetwork()).chainId,
    token: token.address,
    governor: governor.address,
    timelock: timelock.address,
    safeAdmin
  };
  writeFileSync(path.join(outDir, "dao-addresses.json"), JSON.stringify(addresses, null, 2));
  console.log("Wrote addresses to data/dao-addresses.json");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});