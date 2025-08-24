const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZionDAO", function () {
  it("deploys and runs a proposal with 20% quorum and 5-day voting period", async function () {
    const [deployer, voterA, voterB] = await ethers.getSigners();

    const VoteToken = await ethers.getContractFactory("VoteToken");
    const token = await VoteToken.deploy("Zion Vote Token", "ZVT", ethers.parseEther("1000"), deployer.address);
    await token.waitForDeployment();

    const TimelockController = await ethers.getContractFactory("TimelockController");
    const timelock = await TimelockController.deploy(0, [], [ethers.ZeroAddress], deployer.address);
    await timelock.waitForDeployment();

    const QuorumEngine = await ethers.getContractFactory("QuorumEngine");
    const quorum = await QuorumEngine.deploy(token.target, 2000); // 20%
    await quorum.waitForDeployment();

    const ZionDAO = await ethers.getContractFactory("ZionDAO");
    const dao = await ZionDAO.deploy(token.target, timelock.target, quorum.target);
    await dao.waitForDeployment();

    // delegate votes to self
    await (await token.transfer(voterA.address, ethers.parseEther("300"))).wait();
    await (await token.transfer(voterB.address, ethers.parseEther("300"))).wait();
    await (await token.connect(voterA).delegate(voterA.address)).wait();
    await (await token.connect(voterB).delegate(voterB.address)).wait();
    await (await token.delegate(deployer.address)).wait();

    // simple proposal: call nothing with description
    const targets = [await dao.getAddress()];
    const values = [0];
    const calldatas = ["0x"]; // no-op call
    const description = "Test Proposal";
    const descriptionHash = ethers.id(description);

    await (await dao.propose(targets, values, calldatas, description)).wait();
    const proposalId = await dao.getProposalId(targets, values, calldatas, descriptionHash);

    // voting delay is 1 block, mine one block
    await ethers.provider.send("evm_mine", []);

    await (await dao.connect(voterA).castVote(proposalId, 1)).wait(); // For
    await (await dao.connect(voterB).castVote(proposalId, 1)).wait(); // For

    // fast forward voting period: our settings approximate by blocks ~ 5d/12s
    const votingPeriod = await dao.votingPeriod();
    for (let i = 0; i < votingPeriod; i++) {
      await ethers.provider.send("evm_mine", []);
    }

    expect(await dao.state(proposalId)).to.equal(4); // Succeeded
  });
});