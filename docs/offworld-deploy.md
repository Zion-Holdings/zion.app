# Zion OS Offworld (IPFS/OrbitDB)

Routes:
- `/deploy/offworld` and `/zion/ipfs` – UI to export and pin the static site to IPFS
- `/offworld` – Console for chat (OrbitDB), DAO voting (OrbitDB), and profile syncing (IPFS)

CLI:
- `npx deploy-zion-ipfs` (after publishing) or locally: `npm run deploy:ipfs`

Environment variables:
- `WEB3_STORAGE_TOKEN` – Optional; prefer this if set
- `PINATA_JWT` or (`PINATA_API_KEY` + `PINATA_API_SECRET`) – Optional fallback
- `IPFS_API` – Optional; default `http://127.0.0.1:5001`
- `NEXT_PUBLIC_ASSET_PREFIX` – Optional asset prefix for IPFS gateways

Modules:
- IPFS storage: `utils/offworld/ipfs.ts`
- OrbitDB messaging/votes/constitution: `utils/offworld/orbitdb.ts`
- Identity (DID/ENS placeholder): `utils/offworld/identity.ts`
- Domain storage helpers: `utils/offworld/storage.ts`

Optional AI add-on (offline):
- Whisper/LLM not bundled here to keep footprint small. Integrate `whisper.cpp` (WASM) and a local small LLM if needed.

Operator quickstart:
1. Set env vars as desired
2. Build: `npm run export`
3. Deploy: `npm run deploy:ipfs -- --gateway=https://ipfs.io/ipfs/`
4. Open `https://ipfs.io/ipfs/<CID>` or serve via local IPFS