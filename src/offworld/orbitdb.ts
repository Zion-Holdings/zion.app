import OrbitDB from 'orbit-db';
import { create } from 'ipfs-core';

let orbit: OrbitDB | null = null;

export async function initOrbit(path = './orbitdb') {
  const ipfs = await create({ repo: path });
  orbit = await OrbitDB.createInstance(ipfs);
}

export async function getLog(name: string) {
  if (!orbit) {
    await initOrbit();
  }
  return orbit!.log(name);
}
