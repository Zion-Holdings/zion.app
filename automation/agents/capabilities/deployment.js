function getSpecializations(complexity) {
  const specializations = [
  "multi-cloud",
  "disaster-recovery",
  "cost-optimization"
];
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };