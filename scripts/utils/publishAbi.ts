import * as fs from "fs";
import * as path from "path";

async function publishAbi() {
  const artifactsDir = path.resolve(process.cwd(), "artifacts/contracts");
  const outDir = path.resolve(process.cwd(), "abis");
  fs.mkdirSync(outDir, { recursive: true });

  const targets = [
    "ZIONToken.sol/ZIONToken.json",
    "bridge/LayerZeroAdapter.sol/LayerZeroAdapter.json",
    "bridge/VoteBridgeReceiver.sol/VoteBridgeReceiver.json",
    "governance/VoteRelay.sol/VoteRelay.json",
    "governance/GovernanceExecutor.sol/GovernanceExecutor.json"
  ];

  for (const rel of targets) {
    const src = path.join(artifactsDir, rel);
    if (!fs.existsSync(src)) continue;
    const json = JSON.parse(fs.readFileSync(src, "utf8"));
    const abi = json.abi;
    const name = path.basename(rel).replace(".json", "");
    fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(abi, null, 2));
  }

  console.log(`Published ABIs to ${outDir}`);
}

export default publishAbi;