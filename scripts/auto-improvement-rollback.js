module.exports = {
  async revert(actionResult) {
    // In production, revert code/config/ops changes
    await new Promise((r) => setTimeout(r, 400));
    return {
      reverted: true,
      action: actionResult,
      timestamp: new Date().toISOString()
    };
  }
};
