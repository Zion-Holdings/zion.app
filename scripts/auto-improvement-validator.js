module.exports = {
  async validate() {
    // In production, run real tests and health checks
    await new Promise(r => setTimeout(r, 300));
    const success = Math.random() > 0.1;
    return { success, checkedAt: new Date().toISOString() };
  }
}; 