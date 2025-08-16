function getSpecializations(complexity) {
  const specializations = [
  "predictive-analytics",
  "ai-ops"
];
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };