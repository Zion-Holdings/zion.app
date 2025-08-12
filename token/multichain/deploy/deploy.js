const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with", deployer.address);

  const endpoint = process.env.LZ_ENDPOINT;
  const starknetApp = process.env.STARKNET_APP;

  const Token = await hre.ethers.getContractFactory("ZIONDollar");
  const token = await Token.deploy(endpoint, 20);
  await token.deployed();
  console.log("ZIONDollar deployed:", token.address);

  const Relay = await hre.ethers.getContractFactory("VoteRelay");
  const relay = await Relay.deploy(endpoint, starknetApp);
  await relay.deployed();
  console.log("VoteRelay deployed:", relay.address);

  const Executor = await hre.ethers.getContractFactory("GovernanceExecutor");
  const executor = await Executor.deploy(relay.address);
  await executor.deployed();
  console.log("GovernanceExecutor deployed:", executor.address);

  const output = {
    ZIONDollar: token.address,
    VoteRelay: relay.address,
    GovernanceExecutor: executor.address,
  };
  fs.writeFileSync(
    path.join(__dirname, "..", "deployment.json"),
    JSON.stringify(output, null, 2)
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
