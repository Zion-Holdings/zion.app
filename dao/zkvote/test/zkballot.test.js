/* eslint-disable @typescript-eslint/no-require-imports */
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZkBallot", function () {
  it("creates proposal and accepts vote", async function () {
    const [owner] = await ethers.getSigners();

    const VoteToken = await ethers.getContractFactory("VoteToken");
    const token = await VoteToken.deploy("Zion Vote Token", "ZVT");
    await token.deployed();
    await token.mint(owner.address, 1000);
    await token.stake(500);

    const Verifier = await ethers.getContractFactory("SemaphoreVerifier");
    const verifier = await Verifier.deploy();
    await verifier.deployed();

    const ZkBallot = await ethers.getContractFactory("ZkBallot");
    const ballot = await ZkBallot.deploy(1, verifier.address, token.address);
    await ballot.deployed();

    const tx = await ballot.propose("upgrade");
    const receipt = await tx.wait();
    const id = receipt.events[0].args.id;

    const proof = Array(8).fill(0);
    await ballot.vote(id, true, 1, proof);
    await ethers.provider.send("evm_increaseTime", [3 * 24 * 60 * 60]);
    await ethers.provider.send("evm_mine", []);

    await ballot.finalize(id);
    const proposal = await ballot.proposals(id);
    expect(proposal.executed).to.equal(true);
  });
});
