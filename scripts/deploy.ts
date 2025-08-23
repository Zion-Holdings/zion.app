import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const Verifier = await ethers.getContractFactory("SemaphoreVerifier");
  const verifier = await Verifier.deploy();
  await verifier.waitForDeployment();
  console.log("SemaphoreVerifier:", await verifier.getAddress());

  const ZkBallot = await ethers.getContractFactory("ZkBallot");

  const now = Math.floor(Date.now() / 1000);
  const starts = now + 10; // start in 10s
  const ends = starts + 3600; // 1 hour window
  const groupId = 123456789n;

  // proposals struct array
  const proposals = [
    { title: "Upgrade Treasury", description: "Enable L2 bridging" },
    { title: "Fund Grants", description: "Allocate 100k ZION$" },
  ];

  const ballot = await ZkBallot.deploy(
    await verifier.getAddress(),
    groupId,
    starts,
    ends,
    proposals
  );
  await ballot.waitForDeployment();
  console.log("ZkBallot:", await ballot.getAddress());

  const ZkTreasury = await ethers.getContractFactory("ZkTreasury");
  const treasury = await ZkTreasury.deploy(deployer.address, ethers.ZeroAddress);
  await treasury.waitForDeployment();
  console.log("ZkTreasury:", await treasury.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});