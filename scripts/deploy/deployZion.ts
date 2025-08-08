import { ethers, network } from "hardhat";
import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Network: ${network.name}`);

  const chainConfigPath = path.resolve(__dirname, "../../chain-config", `${network.name}.yaml`);
  const config = fs.existsSync(chainConfigPath)
    ? (yaml.load(fs.readFileSync(chainConfigPath, "utf8")) as any)
    : {};

  const lzEndpoint: string = process.env.LZ_ENDPOINT || config.layerzeroEndpoint || "0x0000000000000000000000000000000000000001";

  const LayerZeroAdapter = await ethers.getContractFactory("LayerZeroAdapter");
  const adapter = await LayerZeroAdapter.deploy(lzEndpoint);
  await adapter.waitForDeployment();
  console.log(`LayerZeroAdapter: ${await adapter.getAddress()}`);

  const GovernanceExecutor = await ethers.getContractFactory("GovernanceExecutor");
  const executor = await GovernanceExecutor.deploy(ethers.ZeroAddress, ethers.ZeroAddress, ethers.ZeroAddress);
  await executor.waitForDeployment();
  console.log(`GovernanceExecutor: ${await executor.getAddress()}`);

  const ZIONToken = await ethers.getContractFactory("ZIONToken");
  const token = await ZIONToken.deploy(
    "ZION$",
    "ZION$",
    deployer.address,
    await adapter.getAddress(),
    await executor.getAddress(),
    deployer.address,
    0n
  );
  await token.waitForDeployment();
  console.log(`ZIONToken: ${await token.getAddress()}`);

  const VoteRelay = await ethers.getContractFactory("VoteRelay");
  const relay = await VoteRelay.deploy(await adapter.getAddress(), await executor.getAddress());
  await relay.waitForDeployment();
  console.log(`VoteRelay: ${await relay.getAddress()}`);

  // Receiver for LayerZero to forward governance messages
  const VoteBridgeReceiver = await ethers.getContractFactory("VoteBridgeReceiver");
  const receiver = await VoteBridgeReceiver.deploy(lzEndpoint, await executor.getAddress());
  await receiver.waitForDeployment();
  console.log(`VoteBridgeReceiver: ${await receiver.getAddress()}`);

  // Optional: set quorum override for Starknet mirror if provided
  const starknetChainIdBps = process.env.STARKNET_CHAIN_ID && process.env.STARKNET_QUORUM_BPS
    ? { chainId: BigInt(process.env.STARKNET_CHAIN_ID), bps: BigInt(process.env.STARKNET_QUORUM_BPS) }
    : null;
  if (starknetChainIdBps) {
    const tx = await token.setQuorumOverride(Number(starknetChainIdBps.chainId), Number(starknetChainIdBps.bps));
    await tx.wait();
    console.log(`Set quorum override for chain ${starknetChainIdBps.chainId} to ${starknetChainIdBps.bps} bps`);
  }

  // Write deployment file
  const outDir = path.resolve(__dirname, "../../deployments");
  fs.mkdirSync(outDir, { recursive: true });
  const out = {
    network: network.name,
    deployer: deployer.address,
    layerZeroEndpoint: lzEndpoint,
    contracts: {
      LayerZeroAdapter: await adapter.getAddress(),
      GovernanceExecutor: await executor.getAddress(),
      ZIONToken: await token.getAddress(),
      VoteRelay: await relay.getAddress(),
      VoteBridgeReceiver: await receiver.getAddress()
    }
  };
  const outPath = path.join(outDir, `${network.name}.json`);
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`Wrote ${outPath}`);

  // Publish ABIs
  const publish = (await import("../utils/publishAbi")) as any;
  if (publish && publish.default) {
    await publish.default();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});