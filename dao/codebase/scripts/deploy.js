/* eslint-disable @typescript-eslint/no-require-imports */;
const hre = require("hardhat");""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
async function main() {
  const VoteToken = await hre.ethers.getContractFactory("VoteToken");"  const voteToken = await VoteToken.deploy("Zion Vote Token", "ZVT");"  await voteToken.deployed();"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

  const QuorumEngine = await hre.ethers.getContractFactory("QuorumEngine");"  const quorum = await QuorumEngine.deploy(voteToken.address);"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  await quorum.deployed();

  const DelegateRegistry = await hre.ethers.getContractFactory("DelegateRegistry");"  const registry = await DelegateRegistry.deploy();"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  await registry.deployed();

  const ZionDAO = await hre.ethers.getContractFactory("ZionDAO");"  const dao = await ZionDAO.deploy(voteToken.address, quorum.address, registry.address);"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  await dao.deployed();

  console.warn("VoteToken deployed to:", voteToken.address);"  console.warn("QuorumEngine deployed to:", quorum.address);"  console.warn("DelegateRegistry deployed to:", registry.address);"  console.warn("ZionDAO deployed to:", dao.address);"}"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
