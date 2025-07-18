/* eslint-disable @typescript-eslint/no-require-imports */
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZionDAO", function () {
  it("should create proposal and vote", async function () {
    const [owner, voter] = await ethers.getSigners();

    const VoteToken = await ethers.getContractFactory("VoteToken");
    const voteToken = await VoteToken.deploy("Zion Vote Token", "ZVT");
    await voteToken.deployed();
    await voteToken.mint(owner.address, 1000);
    await voteToken.mint(voter.address, 1000);
    await voteToken.connect(owner).stake(500);
    await voteToken.connect(voter).stake(500);

    const QuorumEngine = await ethers.getContractFactory("QuorumEngine");
    const quorum = await QuorumEngine.deploy(voteToken.address);
    await quorum.deployed();

    const DelegateRegistry = await ethers.getContractFactory("DelegateRegistry");
    const registry = await DelegateRegistry.deploy();
    await registry.deployed();

    const ZionDAO = await ethers.getContractFactory("ZionDAO");
    const dao = await ZionDAO.deploy(voteToken.address, quorum.address, registry.address);
    await dao.deployed();

    const tx = await dao.propose("test proposal");
    const receipt = await tx.wait();
    const id = receipt.events[0].args.id;

    await dao.connect(owner).vote(id, true);
    await dao.connect(voter).vote(id, true);

    // Fast-forward time by 5 days
    await ethers.provider.send("evm_increaseTime", [5 * 24 * 60 * 60]);
    await ethers.provider.send("evm_mine", []);

    await dao.finalize(id);
    const proposal = await dao.proposals(id);
    expect(proposal.executed).to.equal(true);
  });
});
