const crypto = require('crypto');
const syncStore = require('../utils/syncStore');

// Merge incoming arrays by id to avoid duplicates
function mergeRecords(targetMap, incoming) {
  incoming.forEach((item) => {
    if (!item || !item.id) return;
    const existing = targetMap.get(item.id);
    if (!existing || existing.version < (item.version || 0)) {
      targetMap.set(item.id, item);
    }
  });
}

exports.receiveSyncUpdate = (req, res) => {
  const { proposals = [], tokenTransfers = [], talentMoves = [], resolutions = [], leaderboard = [], merkleRoot } = req.body;

  if (merkleRoot) {
    const hash = crypto.createHash('sha256').update(JSON.stringify({ proposals, tokenTransfers, talentMoves, resolutions, leaderboard })).digest('hex');
    if (hash !== merkleRoot) {
      return res.status(400).json({ error: 'Invalid merkle root' });
    }
  }

  mergeRecords(syncStore.proposals, proposals);
  mergeRecords(syncStore.tokenTransfers, tokenTransfers);
  mergeRecords(syncStore.talentMoves, talentMoves);
  mergeRecords(syncStore.resolutions, resolutions);
  mergeRecords(syncStore.leaderboard, leaderboard);

  syncStore.lastUpdated = Date.now();

  res.json({ status: 'ok', updated: syncStore.lastUpdated });
};

exports.getSyncState = (_req, res) => {
  const state = {
    proposals: Array.from(syncStore.proposals.values()),
    tokenTransfers: Array.from(syncStore.tokenTransfers.values()),
    talentMoves: Array.from(syncStore.talentMoves.values()),
    resolutions: Array.from(syncStore.resolutions.values()),
    leaderboard: Array.from(syncStore.leaderboard.values()),
    lastUpdated: syncStore.lastUpdated,
  };
  res.json(state);
};
