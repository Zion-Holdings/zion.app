function getSpecializations(complexity) {
  const specializations = [
  "ai-integration",
  "performance-optimization",
  "security-hardening"
];
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };